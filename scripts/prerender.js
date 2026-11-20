#!/usr/bin/env node

const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer");
const routes = require("../src/config/routes.json").filter((route) => !route.hidden);
const site = require("../src/config/site.json");

const buildDir = path.resolve(__dirname, "../build");
const notFoundRoute = "/404-prerender/";
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function startServer(template) {
  const server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const filePath = path.join(buildDir, pathname);
    const extension = path.extname(pathname);
    const isFile =
      extension !== "" &&
      filePath.startsWith(buildDir) &&
      fs.existsSync(filePath) &&
      fs.statSync(filePath).isFile();
    if (isFile) {
      response.writeHead(200, { "Content-Type": contentTypes[extension] || "application/octet-stream" });
      fs.createReadStream(filePath).pipe(response);
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(template);
  });
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

function outputFile(routePath) {
  if (routePath === notFoundRoute) {
    return path.join(buildDir, "404.html");
  }
  if (routePath === "/") {
    return path.join(buildDir, "index.html");
  }
  return path.join(buildDir, routePath, "index.html");
}

async function renderRoute(page, origin, routePath) {
  await page.goto(`${origin}${routePath}`, { waitUntil: "networkidle0" });
  await page.waitForSelector("main h1");
  return page.evaluate(() => {
    document.documentElement.classList.remove("js");
    document.documentElement.classList.add("no-js");
    return `<!DOCTYPE html>\n${document.documentElement.outerHTML}\n`;
  });
}

function writeSitemap() {
  const urls = routes
    .map((route) => `  <url>\n    <loc>${site.url}${route.path}</loc>\n  </url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(buildDir, "sitemap.xml"), xml);
}

async function writeThumbnail(browser, origin) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(`${origin}/`, { waitUntil: "load" });
  await page.waitForSelector("main h1");
  await page.evaluate(
    () => Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 5000))])
  );
  await page.screenshot({ path: path.join(buildDir, "thumbnail.png") });
}

async function main() {
  const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
  const server = await startServer(template);
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const errors = [];

  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (request.url().startsWith(origin)) {
        request.continue();
      } else {
        request.abort();
      }
    });
    page.on("pageerror", (error) => errors.push(error.message));

    const rendered = [];
    for (const routePath of [...routes.map((route) => route.path), notFoundRoute]) {
      rendered.push([routePath, await renderRoute(page, origin, routePath)]);
    }
    if (errors.length) {
      throw new Error(`The app threw errors while prerendering:\n${errors.join("\n")}`);
    }

    rendered.forEach(([routePath, html]) => {
      const file = outputFile(routePath);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
    });
    console.log(`Prerendered ${routes.length} pages and 404.html`);

    writeSitemap();
    console.log("Wrote sitemap.xml");

    await writeThumbnail(browser, origin);
    console.log("Wrote thumbnail.png");
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
