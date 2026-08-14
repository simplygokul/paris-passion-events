import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages project site uses "/paris-passion-events/".
// Custom domain (www.parispassionevents.com) should build with SITE_BASE=/
// Example: SITE_BASE=/ npm run build:pages
const siteBase = process.env.SITE_BASE || "/paris-passion-events/";

export default defineConfig({
  base: siteBase.endsWith("/") ? siteBase : `${siteBase}/`,
  plugins: [react()],
  resolve: {
    alias: {
      "next/image": path.resolve(projectRoot, "src/static-image.tsx"),
      "next/link": path.resolve(projectRoot, "src/static-link.tsx"),
      "next/navigation": path.resolve(projectRoot, "src/static-navigation.ts"),
    },
  },
  build: {
    outDir: "gh-pages-dist",
    emptyOutDir: true,
  },
});
