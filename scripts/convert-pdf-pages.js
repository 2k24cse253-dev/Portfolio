const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const src = process.argv[2];
const dst = process.argv[3];
if (!src || !dst) {
  console.error("usage: node convert-pdf-pages.js <pagesDir> <outDir>");
  process.exit(1);
}
fs.mkdirSync(dst, { recursive: true });

const map = {
  "styling-cover": 25,
  "styling-bridal": 21,
  "styling-tradition": 22,
  "styling-indowestern": 23,
  "styling-mono": 24,
  "styling-street": 26,
  "styling-power": 28,
  "styling-rachel": 31,
  "styling-rachel-golden": 32,
  "styling-shoot": 20,
  "thanjavur-cover": 41,
  "thanjavur-queens": 42,
  "thanjavur-history": 39,
  "thanjavur-repeat": 40,
  "thanjavur-sketches": 43,
  "thanjavur-garment": 45,
  "thanjavur-show": 51,
  "thanjavur-final": 52,
  "kidswear-krishna": 14,
  "kidswear-minimal": 15,
  "kidswear-festive": 16,
  "editorial-spatial": 10,
  "editorial-behind": 11,
  "editorial-ideation": 12,
  "editorial-architecture": 13,
  "editorial-special": 27,
  "editorial-trends": 29,
  "illust-hand": 8,
  "illust-digital": 9,
  "research-ucd": 17,
  "research-pie": 19,
  "glow-cover": 46,
  "glow-theme": 47,
  "glow-mood": 48,
  "glow-inspo": 49,
  "mono-statement": 2,
  cover: 1,
  resume: 6,
  skills: 5,
};

(async () => {
  for (const [name, pageNum] of Object.entries(map)) {
    const input = path.join(src, `page-${String(pageNum).padStart(2, "0")}.png`);
    if (!fs.existsSync(input)) {
      console.log("missing", input);
      continue;
    }
    const out = path.join(dst, `${name}.jpg`);
    await sharp(input)
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out);
    console.log(name, pageNum, `${(fs.statSync(out).size / 1024).toFixed(0)}kb`);
  }
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
