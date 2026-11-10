# SEO and AI discovery

Canonical origin: **https://bottomline.finance**

The site is a React SPA. `npm run build` prerenders the public routes into HTML so Google and AI crawlers (GPTBot, ClaudeBot, Gemini) see real copy, titles, and JSON-LD without running JavaScript.

## Do not break

- Keep routes listed in `constraints.md`.
- Per-page titles and descriptions live in `src/seo.ts`. Do not invent testimonials or stats there.
- FAQ answers stay in the DOM (hidden with CSS). Do not render them only after click.
- Unknown URLs are a real 404 (`src/pages/NotFound.tsx` → `dist/404.html`). Do not send them to `/`.
- `public/_redirects` must **not** SPA-fallback `/*` to `/index.html` (that would hide the prerendered pages and the 404).

## Crawl files

| File | Purpose |
| --- | --- |
| `public/robots.txt` | Allow search and AI bots; sitemap URL |
| `public/sitemap.xml` | Five public URLs |
| `public/llms.txt` | Short entity file for AI crawlers |
| `public/llms-full.txt` | Longer factual summary |

## Netlify (after upload of `dist/`)

1. Domain management: **bottomline.finance** is the primary domain. Enable “redirect Netlify subdomain to primary” so `*.netlify.app` 301s here.
2. HTTPS should already be on.
3. Pretty URLs on (Netlify default) so `/cfo` serves `cfo/index.html`.
4. Google Search Console: add the domain, submit `https://bottomline.finance/sitemap.xml`.
5. Bing Webmaster Tools: same sitemap (helps Copilot / parts of ChatGPT search).
