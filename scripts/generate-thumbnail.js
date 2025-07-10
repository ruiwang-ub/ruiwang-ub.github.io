// scripts/generate-thumbnail.js
const fs = require("fs");
const path = require("path");
const http = require("http");
const finalhandler = require("finalhandler");
const serveStatic = require("serve-static");
const puppeteer = require("puppeteer");

async function startServer(rootDir, port = 3001) {
  return new Promise((resolve) => {
    const serve = serveStatic(rootDir, { index: ["index.html"] });
    const server = http.createServer((req, res) => {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(port, () => resolve(server));
  });
}

(async () => {
  const buildDir = path.resolve(__dirname, "../build");
  const port = 3001;
  const server = await startServer(buildDir, port);
  console.log(`✅ Static server running at http://localhost:${port}`);

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  // Make the viewport match common social‐share dimensions:
  await page.setViewport({ width: 1200, height: 630 });
  // Point at our local server:
  await page.goto(`http://localhost:${port}`, { waitUntil: "networkidle0" });

  // Optional: wait for a specific element to ensure React has finished
  await page.waitForSelector("#root", { timeout: 10_000 });

  // Screenshot the entire viewport
  const outPath = path.resolve(buildDir, "thumbnail.png");
  await page.screenshot({ path: outPath, type: "png" });
  console.log(`🖼️  Screenshot saved to ${outPath}`);

  await browser.close();
  server.close();
})();
