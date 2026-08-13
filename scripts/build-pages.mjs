import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve("gh-pages-dist");
const source = resolve(output, "index.html");
const html = await readFile(source, "utf8");

for (const route of ["experiences", "journey", "contact"]) {
  const directory = resolve(output, route);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html, "utf8");
}

await copyFile(source, resolve(output, "404.html"));
