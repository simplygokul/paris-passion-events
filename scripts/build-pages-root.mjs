import { spawnSync } from "node:child_process";

process.env.SITE_BASE = "/";

const build = spawnSync(
  "npx",
  ["vite", "build", "--config", "vite.pages.config.ts"],
  { stdio: "inherit", shell: true, env: process.env },
);

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const pages = spawnSync("node", ["scripts/build-pages.mjs"], {
  stdio: "inherit",
  shell: true,
  env: process.env,
});

process.exit(pages.status ?? 1);
