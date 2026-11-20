#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const sourceDir = path.resolve(__dirname, "../src/content/pages");
const outputFile = path.resolve(__dirname, "../src/content/pages.generated.js");

function build() {
  const files = fs
    .readdirSync(sourceDir)
    .filter((file) => file.endsWith(".md"))
    .sort();
  const pages = {};
  files.forEach((file) => {
    pages[path.basename(file, ".md")] = fs.readFileSync(path.join(sourceDir, file), "utf8");
  });
  const output = `const pages = ${JSON.stringify(pages, null, 2)};\n\nexport default pages;\n`;
  const current = fs.existsSync(outputFile) ? fs.readFileSync(outputFile, "utf8") : null;
  if (current !== output) {
    fs.writeFileSync(outputFile, output);
    console.log(`Content: bundled ${files.length} Markdown files into src/content/pages.generated.js`);
  }
}

build();

if (process.argv.includes("--watch")) {
  let timer = null;
  fs.watch(sourceDir, () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        build();
      } catch (error) {
        console.error(`Content: ${error.message}`);
      }
    }, 100);
  });

  const parentPid = process.ppid;
  setInterval(() => {
    try {
      process.kill(parentPid, 0);
    } catch (error) {
      process.exit(0);
    }
  }, 2000);
}
