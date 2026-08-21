# Development

## Stack

Vite 6 + React 19 + TypeScript + React Router 7. Styles are global CSS in `src/index.css` (no Tailwind). Icons: `lucide-react`.

## Commands

```bash
npm run dev      # http://127.0.0.1:5173/  (strictPort, HMR off)
npm run build    # tsc --noEmit && vite build → dist/
```

Use **`127.0.0.1`**, not `localhost`. After code edits, **hard-refresh**; HMR is disabled in `vite.config.ts` on purpose. PNG/JPEG under most folders are not watched (except `public/`).

## Assets

1. Keep the user’s original file (often at the repo root, sometimes with spaces in the name).
2. Copy to `public/images/<kebab-name>.ext`.
3. Add or update a key on `IMAGES` in `src/content.ts`.
4. Reference `IMAGES.foo` from the page. Never invent a path that is not in `public/`.

`public/_redirects` is for Netlify SPA fallback.

## Deploy

`npm run build`, then upload the **`dist`** folder to Netlify. Production: `https://comfy-kleicha-6e4ced.netlify.app`.

`.gitignore` excludes `node_modules`, `dist`, `.env*`, `.tools`, `*.local`.

## Git

Repo root is this folder. Default branch is `master`. There may be no remote; do not add or push one unless asked.

After a large unit of work, commit with a **why** message (see `docs/workflow.md`). Do not update `git config`.
