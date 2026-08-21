# Hard constraints

Do not violate these unless the user explicitly overrides them.

## Routes and URLs

Keep these paths and nav labels:

| Page | Route | Nav |
| --- | --- | --- |
| About (home) | `/` | אודות |
| Profit First | `/profit-first` | רווח לפני הכל |
| Fractional CFO | `/cfo` | שותף פיננסי |
| Business simulation | `/business-game` | משחקים עסקים |
| Contact | `/contact` | צור קשר |

Do not change `BOOK_URL` or `ALLOC_TOOL_URL` in `src/content.ts`.

## Copy and claims

- Do not invent testimonials, client logos, or statistics.
- Do not rewrite body copy “to sound better” unless asked.
- CTA label is **בואו נדבר** (`CTA_LABEL`). Keep it the same everywhere.

## Assets

- **Do not delete** originals in `public/images/` or source files at the project root (PNGs/JPGs with spaces in the name, `speaking.jpg`, etc.).
- New images: copy into `public/images/` with a stable kebab-case name, then point `IMAGES` at `/images/…`.
- **Do not lazy-load the hero image** on any page.

## Layout chrome

- Site is `html lang="he" dir="rtl"`.
- **Header is not mirrored:** logo **left**, nav **center**, pill CTA **right**.
- Wordmark is Latin **Source Sans 3 / Source Sans Pro**; Hebrew UI is **Heebo**.
- Frames/borders are off except FAQ items (`1.5px solid var(--teal)`) and ghost-style teal outlines.

## Scope

- Do not “improve” global CSS, About/Contact/FAQ/nav/footer, or other pages while doing a local request.
- Do not add a CMS, analytics, or new dependencies unless asked.
