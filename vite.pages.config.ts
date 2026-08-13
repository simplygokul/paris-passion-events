import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/paris-passion-events/",
  plugins: [react()],
  resolve: {
    alias: {
      "next/image": path.resolve(projectRoot, "src/static-image.tsx"),
    },
  },
  build: {
    outDir: "gh-pages-dist",
    emptyOutDir: true,
  },
});
