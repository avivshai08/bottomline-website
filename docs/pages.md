# Page decisions

Keep this file current when a page’s hero, diagram, or locked copy changes.

## About — `/`

- Hero `h1` is `4rem` / `800`. Do not lazy-load the hero portrait.
- Three service cards: icons `5rem` with a teal circular outline. Handshake icon is a **black** disc with the PNG inverted (`filter: invert(1)` → white handshake). Source: `public/images/handshake-icon.png`. Card text centered; titles `white-space: nowrap` with `container-type: inline-size`. CSS triangle arrows sit to the **physical left** of each card.

## Profit First — `/profit-first`

- Desktop hero: copy overlaid on the photo. Mobile (`max-width: 800px`): **no overlay** — image on top (`order: -1`, `max-height: 240px`), then HTML copy. Do not change desktop overlay while doing a mobile pass.
- **Traditional formula** (`pf-problem`) and **new formula** (`pf-shift`) are HTML, not the PNG. Originals `profit-first-traditional.png` / `profit-first-new.png` stay on disk. Shared disc size and operator bars; cards `min-height: 15rem`. Traditional: wallet − coins = `?` with copy **(אם נשאר..)**. New: wallet − chart = 3D coins; lede ends with a clear expense frame at month-end.
- Allocation tool (`.alloc-tool`): desktop photo **left**, checklist **right** (LTR split, RTL copy). Photo max ~15rem. Mobile (`max-width: 720px`): stack, photo first. Image: `IMAGES.pfAllocationTool` → `/images/pf-allocation-tool-2.png`. Keep `pf-allocation-tool.png`. Lede has a forced break so the second line starts with **כלי**.

## Fractional CFO — `/cfo`

- Hero image: `IMAGES.cfoHero` → `/images/speaking.jpg` (root original `speaking.jpg` kept). Previous desk hero `fractional-cfo-hero.png` is kept, unused.
- Copy is **overlaid on the left** of the photo, **white**, **weight 800**, Heebo, same size recipes as other page heroes. The photo already has a grey polygon on the left — do not add a second dim overlay unless contrast fails.
- Do not lazy-load this hero.

## Business simulation — `/business-game`

- Program structure is an **HTML cycle**, not `game-format.png` (file kept). Icons sit close to the cycle; cycle stroke is thin (`5`). Play triangle points **right**. Top station line split: `אסטרטגיה, שיווק, פיננסים` / `תמחור, תפעול`. Subtitle **8 מפגשים של למידה מעשית**.
- Desktop `.game-intro__art` is centered in the remaining column (not hugging the right edge). Mobile: stack, portrait first; H1 one line (`white-space: nowrap`, `clamp(1.15rem, 4.6vw, 1.55rem)`). Kicker/lede `1.125rem`. Art `min(58%, 13.5rem)`, centered.

## Contact — `/contact`

- Nav label stays **צור קשר**. Page eyebrow is **צרו קשר**.
- Lede: **שיחה קצרה יכולה לעשות הבדל גדול.**
- Service field: **באיזה שירות אתם מתעניינים *** (required asterisk stays).
- Form posts to FormSubmit at `aviv@bottomline.finance`.
