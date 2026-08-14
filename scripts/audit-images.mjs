import { readFileSync } from "node:fs";

const files = {
  data: readFileSync("app/site-data.ts", "utf8"),
  journey: readFileSync("app/journey/page.tsx", "utf8"),
  home: readFileSync("app/page.tsx", "utf8"),
  experiences: readFileSync("app/experiences/page.tsx", "utf8"),
};

const expImgs = [...files.data.matchAll(/image:\s*"([^"]+)"/g)].map((m) => m[1]);
const jourImgs = [...files.journey.matchAll(/image:\s*"([^"]+)"/g)].map((m) => m[1]);
const homeImgs = [...files.home.matchAll(/src="([^"]+)"/g)].map((m) => m[1]);
const all = files.data + files.journey + files.home + files.experiences;

console.log(JSON.stringify({
  experiences: expImgs,
  journey: jourImgs,
  home: homeImgs,
  overlapExpJourney: expImgs.filter((i) => jourImgs.includes(i)),
  productionWebpUsed: /production\.webp/.test(all),
  nightClubString: /nightclub|dj booth|pub-vibe/i.test(all),
}, null, 2));
