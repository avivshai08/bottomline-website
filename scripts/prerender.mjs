import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

function replaceOnce(haystack, needle, replacement) {
  const i = haystack.indexOf(needle);
  if (i === -1) {
    throw new Error(`Prerender placeholder not found: ${needle}`);
  }
  return haystack.slice(0, i) + replacement + haystack.slice(i + needle.length);
}

function findSsrEntry() {
  for (const name of ["entry-server.js", "entry-server.mjs"]) {
    const file = path.join(ssrDir, name);
    if (fs.existsSync(file)) return file;
  }
  const files = fs.existsSync(ssrDir) ? fs.readdirSync(ssrDir) : [];
  throw new Error(`SSR bundle not found in dist-ssr (${files.join(", ") || "missing dir"})`);
}

const { render, injectHead, PRERENDER_ROUTES } = await import(
  pathToFileURL(findSsrEntry()).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

function writePage(url, html) {
  const outFile =
    url === "/"
      ? path.join(dist, "index.html")
      : url === "/404"
        ? path.join(dist, "404.html")
        : path.join(dist, url.slice(1), "index.html");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerender ${url} → ${path.relative(root, outFile)}`);
}

for (const url of PRERENDER_ROUTES) {
  const appHtml = render(url);
  let html = replaceOnce(template, "<!--app-html-->", appHtml);
  html = injectHead(html, url);
  writePage(url, html);
}

const notFoundHtml = injectHead(
  replaceOnce(template, "<!--app-html-->", render("/__not-found__")),
  "/404",
);
writePage("/404", notFoundHtml);

fs.rmSync(ssrDir, { recursive: true, force: true });
