# Development

## Stack

Vite 6 + React 19 + TypeScript + React Router 7. Styles are global CSS in `src/index.css` (no Tailwind). Icons: `lucide-react`.

## Commands

```bash
npm run dev      # http://127.0.0.1:5173/  (strictPort, HMR off)
npm run build    # tsc --noEmit && vite build + SSR prerender → dist/
```

Use **`127.0.0.1`**, not `localhost`. After code edits, **hard-refresh**; HMR is disabled in `vite.config.ts` on purpose. PNG/JPEG/SVG under most folders are not watched (except `public/`). Windows `photothumb.db` is ignored so Explorer thumbnails cannot crash the watcher. Root files like `icon profit.svg` are originals — copy into `public/images/` with kebab-case names.

## Assets

1. Keep the user’s original file (often at the repo root, sometimes with spaces in the name).
2. Copy to `public/images/<kebab-name>.ext`.
3. Add or update a key on `IMAGES` in `src/content.ts`.
4. Reference `IMAGES.foo` from the page. Never invent a path that is not in `public/`.

`public/_redirects` must not rewrite every path to `index.html`. Prerendered folders (`cfo/index.html`, …) and `404.html` need to be reached as real files. See [`seo.md`](seo.md).

## Deploy

`npm run build`, then upload the **`dist`** folder to Netlify. Production: `https://bottomline.finance`.

After a build, confirm `dist/cfo/index.html` (and the other routes) contain the Hebrew page copy, not only “טוען”.

`.gitignore` excludes `node_modules`, `dist`, `dist-ssr`, `.env*`, `.tools`, `*.local`, `photothumb.db`, `src.zip`.

## Git

Repo root is this folder. Branch is `main`, backed up to the private GitHub repo `https://github.com/avivshai08/bottomline-website` (`origin`). Push (`git push`) only when the user asks.

`src.zip` (old 280 MB backup) is git-ignored; GitHub rejects files over 100 MB, so never commit large archives.

After a large unit of work, commit with a **why** message (see `docs/workflow.md`). Do not update `git config`.
