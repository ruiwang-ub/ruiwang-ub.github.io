#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const profileFile = path.resolve(__dirname, "../src/content/profile.js");
const outputFile = path.resolve(__dirname, "../src/content/scholar.generated.json");
const empty = { citations: null, hIndex: null, updated: null };

function readSaved() {
  try {
    return JSON.parse(fs.readFileSync(outputFile, "utf8"));
  } catch (error) {
    return null;
  }
}

function save(stats) {
  fs.writeFileSync(outputFile, `${JSON.stringify(stats, null, 2)}\n`);
}

function today() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function profileUrl() {
  const source = fs.readFileSync(profileFile, "utf8");
  const match = /scholar\.google\.com\/citations\?user=([\w-]+)/.exec(source);
  if (!match) {
    throw new Error("src/content/profile.js has no Google Scholar profile link");
  }
  return `https://scholar.google.com/citations?user=${match[1]}&hl=en`;
}

function parseStats(html) {
  const table = /<table id="gsc_rsb_st"[\s\S]*?<\/table>/.exec(html);
  if (!table) {
    throw new Error("the profile page has no citation table");
  }
  const values = {};
  for (const row of table[0].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const cells = Array.from(row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g), (cell) =>
      cell[1].replace(/<[^>]*>/g, "").trim()
    );
    const digits = cells.length > 1 ? cells[1].replace(/\D/g, "") : "";
    if (digits) {
      values[cells[0].toLowerCase()] = Number(digits);
    }
  }
  if (values.citations === undefined || values["h-index"] === undefined) {
    throw new Error("the citation table has no Citations or h-index row");
  }
  return { citations: values.citations, hIndex: values["h-index"] };
}

async function fetchStats() {
  const response = await fetch(profileUrl(), { signal: AbortSignal.timeout(15000) });
  if (!response.ok) {
    throw new Error(`Google Scholar answered HTTP ${response.status}`);
  }
  return { ...parseStats(await response.text()), updated: today() };
}

async function main() {
  const saved = readSaved();
  if (process.argv.includes("--offline")) {
    if (!saved) {
      save(empty);
    }
    return;
  }
  try {
    const stats = await fetchStats();
    save(stats);
    console.log(`Scholar: ${stats.citations} citations, h-index ${stats.hIndex}, saved to src/content/scholar.generated.json`);
  } catch (error) {
    const reason = error.cause ? `${error.message}: ${error.cause.code || error.cause.message}` : error.message;
    if (saved && saved.updated) {
      console.warn(`Scholar: couldn't refresh the numbers (${reason}). Keeping the ones from ${saved.updated}.`);
    } else {
      save(empty);
      console.warn(`Scholar: couldn't fetch the numbers (${reason}). The Research page will leave them out.`);
    }
  }
}

main();
