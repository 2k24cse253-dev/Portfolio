const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "public");
fs.mkdirSync(outDir, { recursive: true });

function quoinSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0708"/>
      <stop offset="100%" stop-color="#1a1214"/>
    </linearGradient>
    <linearGradient id="rose" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff2d55"/>
      <stop offset="100%" stop-color="#ff7a96"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f5a524"/>
      <stop offset="100%" stop-color="#c4841a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <circle cx="980" cy="120" r="180" fill="#ff2d55" opacity="0.08"/>
  <circle cx="180" cy="620" r="140" fill="#f5a524" opacity="0.06"/>
  <text x="64" y="78" fill="#ff2d55" font-family="Arial, sans-serif" font-size="18" letter-spacing="6">FEATURED · 2026</text>
  <text x="64" y="140" fill="#f4efec" font-family="Arial Black, Arial, sans-serif" font-size="64" font-weight="700">QUOIN</text>
  <text x="64" y="180" fill="#ff7a96" font-family="Georgia, serif" font-size="28" font-style="italic">Temporary Space Rental · Pop-up Layouts</text>

  <!-- three layout cards -->
  <g transform="translate(64,220)">
    <rect width="340" height="420" rx="20" fill="#120c0e" stroke="#ffffff22" stroke-width="2"/>
    <rect x="24" y="24" width="292" height="200" rx="12" fill="#1a1214" stroke="#ff2d5555"/>
    <!-- classic retail floor -->
    <rect x="44" y="44" width="110" height="160" rx="6" fill="#ff2d5522" stroke="#ff2d55" stroke-width="2"/>
    <rect x="170" y="44" width="120" height="70" rx="6" fill="#f4efec18" stroke="#f4efec66"/>
    <rect x="170" y="130" width="120" height="74" rx="6" fill="#f5a52422" stroke="#f5a524"/>
    <text x="24" y="260" fill="#f4efec" font-family="Arial Black, Arial" font-size="22">Classic Retail</text>
    <text x="24" y="292" fill="#a89a9d" font-family="Arial" font-size="16">500 sq ft · Merch wall</text>
    <text x="24" y="318" fill="#a89a9d" font-family="Arial" font-size="16">Cash wrap · Fitting zone</text>
    <rect x="24" y="348" width="140" height="36" rx="18" fill="url(#rose)"/>
    <text x="44" y="372" fill="#fff" font-family="Arial" font-size="14" font-weight="700">SPACE PASSPORT</text>
    <text x="24" y="404" fill="#f5a524" font-family="Arial" font-size="13" letter-spacing="2">LAYOUT 01</text>
  </g>

  <g transform="translate(430,220)">
    <rect width="340" height="420" rx="20" fill="#120c0e" stroke="#ffffff22" stroke-width="2"/>
    <rect x="24" y="24" width="292" height="200" rx="12" fill="#1a1214" stroke="#f5a52455"/>
    <circle cx="170" cy="124" r="58" fill="#f5a52422" stroke="#f5a524" stroke-width="2"/>
    <rect x="48" y="48" width="70" height="150" rx="6" fill="#ff2d5520" stroke="#ff2d55"/>
    <rect x="220" y="48" width="70" height="150" rx="6" fill="#f4efec15" stroke="#f4efec55"/>
    <text x="24" y="260" fill="#f4efec" font-family="Arial Black, Arial" font-size="22">Event &amp; Workshop</text>
    <text x="24" y="292" fill="#a89a9d" font-family="Arial" font-size="16">500 sq ft · Open floor</text>
    <text x="24" y="318" fill="#a89a9d" font-family="Arial" font-size="16">Stage · Seating · AV</text>
    <rect x="24" y="348" width="120" height="36" rx="18" fill="url(#gold)"/>
    <text x="40" y="372" fill="#0a0708" font-family="Arial" font-size="14" font-weight="700">SPACE MATCH</text>
    <text x="24" y="404" fill="#ff2d55" font-family="Arial" font-size="13" letter-spacing="2">LAYOUT 02</text>
  </g>

  <g transform="translate(796,220)">
    <rect width="340" height="420" rx="20" fill="#120c0e" stroke="#ffffff22" stroke-width="2"/>
    <rect x="24" y="24" width="292" height="200" rx="12" fill="#1a1214" stroke="#ff7a9655"/>
    <rect x="48" y="56" width="244" height="48" rx="8" fill="#ff2d5528" stroke="#ff2d55"/>
    <rect x="48" y="120" width="110" height="80" rx="8" fill="#f4efec15" stroke="#f4efec55"/>
    <rect x="174" y="120" width="118" height="80" rx="8" fill="#f5a52420" stroke="#f5a524"/>
    <text x="24" y="260" fill="#f4efec" font-family="Arial Black, Arial" font-size="22">Creative Studio</text>
    <text x="24" y="292" fill="#a89a9d" font-family="Arial" font-size="16">500 sq ft · Work benches</text>
    <text x="24" y="318" fill="#a89a9d" font-family="Arial" font-size="16">Shoot corner · Storage</text>
    <rect x="24" y="348" width="150" height="36" rx="18" fill="url(#rose)"/>
    <text x="40" y="372" fill="#fff" font-family="Arial" font-size="14" font-weight="700">DIGITAL COMMS</text>
    <text x="24" y="404" fill="#f5a524" font-family="Arial" font-size="13" letter-spacing="2">LAYOUT 03</text>
  </g>

  <text x="64" y="700" fill="#a89a9d" font-family="Arial" font-size="14" letter-spacing="3">BRAND · BOOKING JOURNEYS · FIGMA PROTOTYPE</text>
  <rect x="900" y="670" width="236" height="40" rx="20" fill="none" stroke="#ff2d55" stroke-width="2"/>
  <text x="930" y="696" fill="#ff2d55" font-family="Arial" font-size="14" font-weight="700">OPEN PROTOTYPE ↗</text>
</svg>`;
}

function stylingSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#140a10"/>
      <stop offset="55%" stop-color="#1a0e14"/>
      <stop offset="100%" stop-color="#0a0708"/>
    </linearGradient>
    <linearGradient id="r" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff2d55"/>
      <stop offset="100%" stop-color="#c4123f"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5a524"/>
      <stop offset="100%" stop-color="#e08910"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <ellipse cx="900" cy="200" rx="320" ry="240" fill="#ff2d55" opacity="0.12"/>
  <ellipse cx="300" cy="560" rx="280" ry="200" fill="#f5a524" opacity="0.08"/>
  <text x="64" y="80" fill="#ff2d55" font-family="Arial" font-size="18" letter-spacing="6">PORTFOLIO · 2024–2026</text>
  <text x="64" y="150" fill="#f4efec" font-family="Arial Black, Arial" font-size="58" font-weight="700">FASHION STYLING</text>
  <text x="64" y="210" fill="#ff7a96" font-family="Georgia, serif" font-size="34" font-style="italic">&amp; Photoshoots</text>
  <text x="64" y="260" fill="#a89a9d" font-family="Arial" font-size="20">Bridal · Traditional · Indo-Western · Streetwear · Contemporary</text>

  <g transform="translate(64,310)">
    <rect width="340" height="360" rx="24" fill="#120c0e" stroke="#ffffff20" stroke-width="2"/>
    <rect x="20" y="20" width="300" height="180" rx="16" fill="url(#r)" opacity="0.35"/>
    <circle cx="170" cy="110" r="48" fill="#f4efec" opacity="0.2"/>
    <path d="M110 180 Q170 90 230 180" fill="none" stroke="#f4efec" stroke-width="3" opacity="0.5"/>
    <text x="24" y="250" fill="#f4efec" font-family="Arial Black, Arial" font-size="24">Editorial</text>
    <text x="24" y="284" fill="#a89a9d" font-family="Arial" font-size="16">Mood · Silhouette · Location</text>
    <text x="24" y="316" fill="#ff7a96" font-family="Arial" font-size="14" letter-spacing="2">CONCEPT BOARDS</text>
    <text x="24" y="344" fill="#f5a524" font-family="Arial" font-size="13">01 / STYLING</text>
  </g>
  <g transform="translate(430,310)">
    <rect width="340" height="360" rx="24" fill="#120c0e" stroke="#ffffff20" stroke-width="2"/>
    <rect x="20" y="20" width="300" height="180" rx="16" fill="url(#gold)" opacity="0.28"/>
    <rect x="70" y="50" width="80" height="120" rx="8" fill="#0a0708" opacity="0.5"/>
    <rect x="170" y="70" width="100" height="100" rx="8" fill="#f4efec" opacity="0.15"/>
    <text x="24" y="250" fill="#f4efec" font-family="Arial Black, Arial" font-size="24">On Set</text>
    <text x="24" y="284" fill="#a89a9d" font-family="Arial" font-size="16">Wardrobe · Accessory · Camera</text>
    <text x="24" y="316" fill="#ff7a96" font-family="Arial" font-size="14" letter-spacing="2">PHOTOGRAPHY</text>
    <text x="24" y="344" fill="#f5a524" font-family="Arial" font-size="13">02 / PHOTOSHOOTS</text>
  </g>
  <g transform="translate(796,310)">
    <rect width="340" height="360" rx="24" fill="#120c0e" stroke="#ffffff20" stroke-width="2"/>
    <rect x="20" y="20" width="300" height="180" rx="16" fill="#ff2d55" opacity="0.2"/>
    <polygon points="150,60 190,110 150,160 110,110" fill="#f4efec" opacity="0.25"/>
    <rect x="220" y="70" width="60" height="90" rx="6" fill="#f5a524" opacity="0.4"/>
    <text x="24" y="250" fill="#f4efec" font-family="Arial Black, Arial" font-size="24">Reels</text>
    <text x="24" y="284" fill="#a89a9d" font-family="Arial" font-size="16">3 reels · thousands of views</text>
    <text x="24" y="316" fill="#ff7a96" font-family="Arial" font-size="14" letter-spacing="2">SOCIAL CONTENT</text>
    <text x="24" y="344" fill="#f5a524" font-family="Arial" font-size="13">03 / MOTION</text>
  </g>
  <text x="64" y="720" fill="#a89a9d" font-family="Arial" font-size="14" letter-spacing="3">STYLING · CREATIVE DIRECTION · CONTENT</text>
</svg>`;
}

function gradSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0708"/>
      <stop offset="100%" stop-color="#141018"/>
    </linearGradient>
    <linearGradient id="rose" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff2d55"/>
      <stop offset="100%" stop-color="#ff7a96"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <circle cx="980" cy="160" r="200" fill="#ff2d55" opacity="0.1"/>
  <circle cx="200" cy="600" r="160" fill="#f5a524" opacity="0.06"/>
  <text x="64" y="80" fill="#ff2d55" font-family="Arial" font-size="18" letter-spacing="6">M.DES · ONGOING · 2026–2027</text>
  <text x="64" y="150" fill="#f4efec" font-family="Arial Black, Arial" font-size="52" font-weight="700">BEYOND THE PRODUCT</text>
  <text x="64" y="210" fill="#f4efec" font-family="Arial Black, Arial" font-size="52" font-weight="700">PHOTOGRAPH</text>
  <text x="64" y="260" fill="#ff7a96" font-family="Georgia, serif" font-size="30" font-style="italic">Styling-Led Digital Presentation Framework</text>

  <g transform="translate(64,320)">
    <rect width="520" height="340" rx="20" fill="#120c0e" stroke="#ffffff18" stroke-width="2"/>
    <text x="28" y="48" fill="#f5a524" font-family="Arial" font-size="16" letter-spacing="3">RESEARCH QUESTION</text>
    <text x="28" y="90" fill="#f4efec" font-family="Georgia, serif" font-size="24">How can styling-led digital</text>
    <text x="28" y="124" fill="#f4efec" font-family="Georgia, serif" font-size="24">content help shoppers</text>
    <text x="28" y="158" fill="#f4efec" font-family="Georgia, serif" font-size="24">understand fit, drape &amp;</text>
    <text x="28" y="192" fill="#f4efec" font-family="Georgia, serif" font-size="24">movement beyond photos?</text>
    <rect x="28" y="230" width="200" height="44" rx="22" fill="url(#rose)"/>
    <text x="48" y="258" fill="#fff" font-family="Arial" font-size="15" font-weight="700">USER-CENTRED RESEARCH</text>
    <text x="28" y="310" fill="#a89a9d" font-family="Arial" font-size="15">Host company · Garment category TBC</text>
  </g>

  <g transform="translate(620,320)">
    <rect width="516" height="160" rx="20" fill="#120c0e" stroke="#ffffff18"/>
    <text x="28" y="44" fill="#ff2d55" font-family="Arial" font-size="15" letter-spacing="3">FOCUS</text>
    <text x="28" y="84" fill="#f4efec" font-family="Arial" font-size="22" font-weight="700">FIT · DRAPE · MOVEMENT</text>
    <text x="28" y="120" fill="#a89a9d" font-family="Arial" font-size="16">Beyond standard product photographs</text>
  </g>
  <g transform="translate(620,500)">
    <rect width="516" height="160" rx="20" fill="#120c0e" stroke="#ffffff18"/>
    <text x="28" y="44" fill="#f5a524" font-family="Arial" font-size="15" letter-spacing="3">METHODS</text>
    <text x="28" y="84" fill="#f4efec" font-family="Arial" font-size="20">Design thinking · Figma · Visual research</text>
    <text x="28" y="120" fill="#a89a9d" font-family="Arial" font-size="16">Seeking 4-month internship placement</text>
  </g>
  <text x="64" y="720" fill="#a89a9d" font-family="Arial" font-size="14" letter-spacing="3">GRADUATION PROJECT · PROPOSED</text>
</svg>`;
}

function thanjavurSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d0908"/>
      <stop offset="100%" stop-color="#1a1210"/>
    </linearGradient>
    <linearGradient id="temple" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f5a524"/>
      <stop offset="100%" stop-color="#c4123f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#f5a524" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#f5a524" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <circle cx="600" cy="280" r="260" fill="url(#glow)"/>
  <text x="64" y="80" fill="#f5a524" font-family="Arial" font-size="18" letter-spacing="6">COLLECTION · 2025</text>
  <text x="64" y="150" fill="#f4efec" font-family="Arial Black, Arial" font-size="54" font-weight="700">THANJAVUR-INSPIRED</text>
  <text x="64" y="210" fill="#ff7a96" font-family="Georgia, serif" font-size="34" font-style="italic">Fashion Collection</text>

  <!-- stylized gopuram silhouette -->
  <g transform="translate(720,180)">
    <polygon points="180,0 240,80 220,80 280,160 250,160 320,260 40,260 110,160 80,160 140,80 120,80" fill="url(#temple)" opacity="0.85"/>
    <rect x="70" y="260" width="220" height="40" fill="#c4123f"/>
    <circle cx="180" cy="-16" r="10" fill="#f5a524"/>
    <rect x="160" y="-40" width="40" height="28" rx="4" fill="#f5a524"/>
  </g>

  <g transform="translate(64,300)">
    <rect width="300" height="340" rx="20" fill="#120c0e" stroke="#f5a52455" stroke-width="2"/>
    <text x="24" y="48" fill="#f5a524" font-family="Arial" font-size="15" letter-spacing="3">01 · RESEARCH</text>
    <text x="24" y="90" fill="#f4efec" font-family="Arial Black, Arial" font-size="22">Cultural refs</text>
    <text x="24" y="128" fill="#a89a9d" font-family="Arial" font-size="16">Motifs · Craft · Colour</text>
    <text x="24" y="156" fill="#a89a9d" font-family="Arial" font-size="16">Silhouette language</text>
    <rect x="24" y="200" width="252" height="100" rx="12" fill="#f5a52418" stroke="#f5a52466"/>
    <text x="40" y="250" fill="#f4efec" font-family="Georgia, serif" font-size="18" font-style="italic">Thanjavur → Fashion</text>
    <text x="40" y="278" fill="#ff7a96" font-family="Arial" font-size="14">design brief</text>
  </g>
  <g transform="translate(390,300)">
    <rect width="300" height="340" rx="20" fill="#120c0e" stroke="#ff2d5555" stroke-width="2"/>
    <text x="24" y="48" fill="#ff2d55" font-family="Arial" font-size="15" letter-spacing="3">02 · ILLUSTRATION</text>
    <text x="24" y="90" fill="#f4efec" font-family="Arial Black, Arial" font-size="22">Fashion flats</text>
    <text x="24" y="128" fill="#a89a9d" font-family="Arial" font-size="16">Hand sketches</text>
    <text x="24" y="156" fill="#a89a9d" font-family="Arial" font-size="16">Concept looks</text>
    <rect x="24" y="200" width="252" height="100" rx="12" fill="#ff2d5518" stroke="#ff2d5566"/>
    <path d="M50 270 Q100 220 150 260 T250 240" fill="none" stroke="#ff7a96" stroke-width="3"/>
    <text x="40" y="290" fill="#f4efec" font-family="Arial" font-size="14">ILLUSTRATION SET</text>
  </g>
  <g transform="translate(716,420)">
    <rect width="420" height="220" rx="20" fill="#120c0e" stroke="#ffffff20" stroke-width="2"/>
    <text x="24" y="48" fill="#ff7a96" font-family="Arial" font-size="15" letter-spacing="3">03 · GARMENT &amp; SHOW</text>
    <text x="24" y="90" fill="#f4efec" font-family="Arial Black, Arial" font-size="24">Developed &amp; presented</text>
    <text x="24" y="130" fill="#a89a9d" font-family="Arial" font-size="17">Garment development → final collection</text>
    <rect x="24" y="155" width="160" height="40" rx="20" fill="url(#temple)"/>
    <text x="44" y="181" fill="#0a0708" font-family="Arial" font-size="14" font-weight="700">FINAL SHOWING</text>
  </g>
  <text x="64" y="720" fill="#a89a9d" font-family="Arial" font-size="14" letter-spacing="3">RESEARCH · ILLUSTRATION · COLLECTION</text>
</svg>`;
}

async function main() {
  const jobs = [
    ["quoin-layouts.png", quoinSvg()],
    ["project-styling.png", stylingSvg()],
    ["project-graduation.png", gradSvg()],
    ["project-thanjavur.png", thanjavurSvg()],
  ];
  for (const [name, svg] of jobs) {
    const file = path.join(outDir, name);
    await sharp(Buffer.from(svg)).png({ quality: 92 }).toFile(file);
    const st = fs.statSync(file);
    console.log(name, st.size);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
