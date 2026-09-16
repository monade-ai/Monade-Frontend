// Scans copy for the site's writing rules. Run: npm run check:copy
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src/content", "src/components", "src/app"];
const banned = /\b(seamless(ly)?|effortless(ly)?|revolutioni[sz]e|unlock|supercharge|elevate|empower|leverage|cutting-edge|game-changing)\b/i;
const dashes = /[–—]/;
let bad = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(json|tsx?|mdx?)$/.test(name)) check(p);
  }
}
function check(file) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (line.includes("check-copy") || line.includes("Banned words")) return;
    if (dashes.test(line)) { console.log(`${file}:${i + 1}: em/en dash`); bad++; }
    const m = line.match(banned);
    if (m) { console.log(`${file}:${i + 1}: banned word "${m[0]}"`); bad++; }
    if (/!["'`]/.test(line) && !/!==?|!\.|!\(|!\w/.test(line) && /['"`][^'"`]*![^'"`]*['"`]/.test(line)) { /* string with exclamation */ }
  });
}
roots.forEach(walk);
if (bad) { console.log(`\n${bad} issue(s)`); process.exit(1); }
console.log("copy check passed");
