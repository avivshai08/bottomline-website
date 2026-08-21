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

## Header / footer

- Header: logo left, nav center, CTA right (physical directions, even though the document is RTL).
- Logo mark: `/images/logo-hr.png` via `IMAGES.logoMark`.
- Wordmark navy; header tagline navy; footer tagline light. Footer background is `--navy`.

## Frames

No card/section chrome except FAQ (`1.5px solid var(--teal)`). Ghost buttons may keep a teal outline.
