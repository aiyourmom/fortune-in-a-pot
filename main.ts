// Fortune in a Pot — one line, at most 120 characters, a fortune for a houseplant.
// Chosen text (candidate 1 of 3): the plant as the street's quiet secret-keeper,
// written for THIS plant in THIS window ("sunny corner of the sill").
const TEXT =
  "You will overhear every secret on this street \u2014 and keep them all, quietly, from your sunny corner of the sill.";

const fs = require("node:fs");
const path = require("node:path");

const chars = [...TEXT];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (/[\r\n]/.test(TEXT)) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), TEXT, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
