# Visual system

Tokens live in `src/index.css` `:root`. Prefer them over new hex values.

```css
--teal: #6ec8c8;
--teal-text: #4fb4b7; /* teal copy on gray/white */
--gray / --teal-soft: #f3f3f3;
--navy: #001827;
--white: #ffffff;
--radius: 12px;
--max: 1240px;
```

Navy sections remap `--teal-text` back to `--teal` so kickers stay light on dark (`--navy` parents listed at the top of `index.css`).

## Type

| Role | Size | Weight | Color |
| --- | --- | --- | --- |
| Section titles (`h2` recipe) | `1.5rem` | `650` | navy (or white on navy) |
| Kickers | `1.235rem` | `400` | `--teal-text` on light, `--teal` on navy |
| About hero `h1` | `4rem` | `800` | |
| Other page heroes (desktop) | `~3.2rem` (`clamp(2.1rem, 4.4vw, 3.2rem)`) | `800` | |

Body and UI: **Heebo**. Latin wordmark: **Source Sans 3 / Source Sans Pro**.

Order on most sections: kicker (if any), then heading. Do not invert that unless the page already does.

## CTA

- Label: **בואו נדבר**
- Heebo, navy on teal pill
- CSS triangle `.cta-btn__arrow` (not an icon font)
- Header CTA is larger than photo-banner CTAs
- Photo banner (`IMAGES.ctaBanner` → `cta-banner.jpg`) is **shared** on About, Profit First, CFO, and Business Games. Same CTA, same look. Do not per-page the photo.

## Offer marks

Home service cards use **different** icon languages on purpose (Profit First badge, handshake disc, game art). Do not unify them into one icon set.

## Hero copy on a photo

The visual is the effect. On an overlay or beside a portrait: short hit-points.

Program-page heroes (Profit First, CFO, Business Game) share one overlay stack on desktop. Mobile (`max-width: 800px`) is a clean photo, then the same type stack below.

1. `h1` — title, `800`, navy, `clamp(2.1rem, 4.4vw, 3.2rem)`
2. `h2` — tagline, `400`, `--teal-text`, one line (`white-space: nowrap`), smaller
3. `h3` — short description, `400`, navy, smaller than the tagline

Do not add a fourth paragraph on the overlay. About `/` keeps its own hero recipe.

## Header / footer

- Header: logo left, nav center, CTA right (physical directions, even though the document is RTL).
- Logo mark: `/images/logo-hr.svg` via `IMAGES.logoMark` (header and footer share `Logo.tsx`). The SVG viewBox is 1095²; the `<img>` keeps those intrinsic `width`/`height` so it stays sharp at the 48px CSS size. Do not set the HTML attributes to 48.
- Wordmark navy; header tagline navy; footer tagline light. Footer background is `--navy`.

## Frames

No card/section chrome except FAQ (`1.5px solid var(--teal)`). Ghost buttons may keep a teal outline.
