# Page decisions

Keep this file current when a page’s hero, diagram, or locked copy changes.

FAQ answers on CFO / Profit First / Business game stay in the HTML and are collapsed with CSS. Do not mount them only when open.

## About — `/`

- Hero `h1` is `4rem` / `800`. Do not lazy-load the hero portrait. Hero CTA sits on the **physical left** of the copy column (`.cta-btn` is LTR, so `margin-right: auto`).
- Credentials circle: `IMAGES.presentingHd` → `/images/image-14-hd.png` (root original `image 14 HD.png` kept). `image-14.png` kept in `public/images/`, unused.
- Why-work-with-me lede (`.about-why__lede`): desktop break after **להחלטות,**. Mobile (`max-width: 800px`): no break there — **להחלטות, בין היום למחר** stays on one line.

## Profit First — `/profit-first`

- Hero matches CFO / Business Game: full `.container` width, desktop and mobile `aspect-ratio` `--hero-ar` (`8 / 3`; previous desktop `12 / 5`, previous mobile `3 / 2`). Desktop: copy overlaid on the **left**, **no text panel**; left of the photo is 50% transparent (CSS mask). Image: `IMAGES.pfJars` → `/images/profit-first-talk-blur.png` (root original `profit first talk (blur).png` kept). Previous `profit-first-hero-3.jpg` and `profit-first-jars.jpg` kept, unused. Crop `object-position` `40% 58%` desktop / `80% 55%` mobile so more of the hands sit in frame without cutting the head. Overlay type: `h1` navy `800` except **Profit First©** `--teal-text` `400` same size, `h2` **שמים את הרווח בראש** `--teal-text` `400` one line, `h3` navy description. Mobile (`max-width: 800px`): **clean photo, no mask** — image on top, then HTML copy.
- **Traditional formula** (`pf-problem`) and **new formula** (`pf-shift`) are HTML, not the PNG. Originals `profit-first-traditional.png` / `profit-first-new.png` stay on disk. Shared disc size and operator bars; cards `min-height: 15rem`. Traditional: wallet − coins = `?` with copy **(אם נשאר..)**. New: wallet − chart = 3D coins; lede ends with a clear expense frame at month-end.
- Allocation tool (`.alloc-tool`): desktop photo **left**, checklist **right** (LTR split, RTL copy). Photo max ~15rem. Mobile (`max-width: 720px`): stack, photo first. Image: `IMAGES.pfAllocationTool` → `/images/pf-allocation-tool-2.png`. Keep `pf-allocation-tool.png`. Lede has a forced break so the second line starts with **כלי**.
- Audience (`.pf-audience`): **עסקים רווחיים** `IMAGES.pfAudienceCash` → `/images/profit.png` (root original `profit.png` kept; previous `pf-audience-cash.png` kept, unused); **עסקים בצמיחה** `IMAGES.pfAudienceGrowth` → `/images/growth.png` (root original `growth.png` kept; previous `pf-audience-growth.png` kept, unused); **בעלי עסקים** `IMAGES.pfAudienceOwners` → `/images/control.png` (root original `control.png` kept; previous `pf-audience-owners.png` kept, unused). Photo on top, teal caption below, kicker beside the row. Titles are **two lines** (`עסקים` / `רווחיים`, `עסקים` / `בצמיחה`, `בעלי` / `עסקים`), **navy** on the teal caption, including the body copy. Desktop (`min-width: 801px`): cards fill the gray box (no `max-width: 44rem`), gap `2.5rem`, illustrations at **2/3** width (`object-fit: contain` on white), larger caption type (`h3` 1.4rem, `p` 1.05rem). Mobile stack unchanged. Icon files kept, unused.

## Fractional CFO — `/cfo`

- Hero image: `IMAGES.cfoHero` → `/images/cfo-hero-2.png` (root original `cfo hero 2.png` kept). Previous `speaking.jpg` and `fractional-cfo-hero.png` kept, unused.
- Hero matches Profit First / Business Game: full `.container` width, desktop and mobile `aspect-ratio` `--hero-ar` (`8 / 3`; previous desktop `12 / 5`, previous mobile `3 / 2`). Copy is **overlaid on the left** (desktop). Shared overlay type: `h1` navy `800` (שותף פיננסי ואסטרטגי / ושירותי CFO במיקור חוץ), `h2` **לצדך. לחשוב. להחליט. להוביל.** `--teal-text` `400` one line, `h3` navy description (forced break after **בביטחון** on desktop and mobile). Desktop: left of the photo is 78% transparent (CSS mask, 22% opacity) so the teal tagline reads. Mobile (`max-width: 800px`): **clean photo, no mask** — image on top, then HTML copy.
- Do not lazy-load this hero.
- Clarity block (`.cfo-clarity__copy`): **מרעש לבהירות** and the lede are **physical left**. Lede breaks after **ברורה**.

## Business simulation — `/business-game`

- Brand teal/navy is **site chrome only** (header, CTA). Do not paint this page with extra navy slabs or forced teal to “match” CFO/PF. Color stays mixed in lightly (cycle stroke, existing accents).
- Program structure is an **HTML cycle**, not `game-format.png` (file kept). Icons sit close to the cycle; cycle stroke is thin (`5`). Play triangle points **right**. Station copy — top (מפגשי למידה): **בניית בסיס ידע בעולמות השיווק, הכלכלה והניהול פיננסי**; end (עבודת צוות): **חלוקת תפקידים, קביעת אסטרטגיה, ניתוח שוק ומתחרים וקבלת החלטות קבוצתית**; start (ניתוח ומשוב): **השוואת ביצועים לקבוצות מתחרות, לקחים ותובנות לאורך הדרך**; bottom (הרצת סימולציה): **ניהול חברה וירטואלית בזמן אמת מול צוותים מתחרים והזנת החלטות במערכת**. Captions wrap with `.game-format__br--desk` / `--mob`: **2 even lines on desktop**, **3 lines on mobile**. Subtitle **8 מפגשים של למידה מעשית**. Mobile (`max-width: 800px`): white four-corner diagram — each station is icon, then title, then topics; four teal cardinal arrows; small cycle in the center. Icons share a **3rem square** so the two top titles (and the two bottom titles) sit on the same row. Desktop cycle layout unchanged.
- Hero matches Profit First / CFO: full `.container` width, desktop and mobile `aspect-ratio` `--hero-ar` (`8 / 3`; previous desktop `12 / 5`, previous mobile `3 / 2`). Desktop: copy overlaid on the **physical right** of `IMAGES.gameHeroPhoto` → `/images/image-26.png`. Source `image 26.png` kept. Previous `image-23.jpg` / `image 23.jpg` kept, unused. Previous `image-22.jpg` / `image 22.jpg` kept, unused. Previous `image-20.png` / `image 20.png` kept, unused. Previous `image-19.png` / `image-19b.png` / `image 19.png` kept, unused. `image-18.png` is the students audience card (source `image 18.png` kept). `game-hero.jpg` stays the About service-card mark. Right of the photo is a **78% CSS mask** (mirrored Profit First: full opacity through ~28%, then `rgb(0 0 0 / 22%)` from ~54%) so the teal tagline reads. Copy is inset `2rem` from the **right edge**. Do not lazy-load. Desktop photo fills the same `8 / 3` box as Profit First / CFO (`object-fit: cover`, no `clip-path`). Shared overlay type: `h1` **ללמוד. להתנסות. להצליח.** navy `800` one line, `h2` **הפיננסים הופכים ברורים כשחווים אותם** `--teal-text` `400` one line, `h3` navy description (desktop forced break after **למציאות,**; mobile does not break there). Mobile (`max-width: 800px`): **clean photo, no mask / no clip** — image on top, then HTML copy. Same type stack as Profit First / CFO.
- About-the-program: `IMAGES.mikesBikes` → `/images/business-game-hero.jpg` (root original `business game hero.jpg` kept). Previous `mikesbikes.png` kept, unused. Title **על התוכנית** is **physical left**. Desktop: **circle** `min(100%, 320px)` on the **physical left**, copy on the **right** (same recipe as About `.home-cred__media`). Mobile: stack, circle first (`min(58%, 13.5rem)`).
- Enrichment audience card: `IMAGES.audienceEnrichment` → `/images/image-13.png` (root original `image 13.png` kept). Previous `audience-enrichment.png` kept, unused.
- Students audience card: `IMAGES.audienceStudents` → `/images/image-18.png` (root original `image 18.png` kept). Previous `audience-students.png` kept, unused.
- Quote attribution (`.game-audience__quote footer`) is **physical left**; the quote stays right-aligned.
- Gains head (`.game-gains__head` — **מה מרוויחים המשתתפים?** and the lede) is **physical left** on desktop and mobile.

## Contact — `/contact`

- Nav label stays **צור קשר**. Page eyebrow is **צרו קשר**.
- Lede: **שיחה קצרה יכולה לעשות הבדל גדול.**
- Service field: **באיזה שירות אתם מתעניינים *** (required asterisk stays).
- Form posts to FormSubmit at `aviv@bottomline.finance`.
- Direct-contact block (`.contact-direct`) sits under the form: navy panel, teal icon discs, phone / email / WhatsApp. Copy and numbers live in `CONTACT` in `src/content.ts`. Do not use gold — teal on navy.

## Game landing — `/hugim`

Standalone registration landing for the evening **משחקים עסקים** program (PDF flyer). Same domain, **not** in `NAV`, header, or footer. Own `LandingLayout`: logo + **להרשמה**, no site nav. Logo does not link to `/`. Copy stays on the flyer (17+, Sundays every two weeks 19:00, 4 months). No location card. Form posts to FormSubmit like Contact. Do not mix Gafn / 8-session copy from `/business-game`.

- Structure chart and gains band reuse the shared `GameFormatChart` / `GameGains`. Order: structure, then gains, then logistics facts. Hugim subtitle is **8 מפגשים של למידה מעשית**.
- Hero overlay is `h1` **משחקים** / **עסקים** on two lines (`800`, +30% size), **physical left** type inside the box. Box is centered in the faded right band (`left: 76%` desktop / `72%` mobile, `translate(-50%, -50%)`). Teal brush `IMAGES.tealMarker` → `/images/teal-marker.png` sits **under** the photo, **centered** (root original `teal marker.png` kept). Below the marker: **יש לכם מה שצריך כדי לנצח?** (`.hugim-tag`, teal, no **את**).
- Mobile (`max-width: 800px`) only: that title still overlays the photo on the **physical right**. No text panel. The photo fades gradually left-to-right (opacity mask, instructor stays sharp). Crop stays `--hero-ar` `8 / 3`. `object-position` `32% 40%`.
- Disclaimers live in **חשוב לדעת** (`.hugim-notes`) after the logistics facts, before the host: footnote style (small muted type, no cards). English, full-program commitment, min 15 participants. Host photo: same `IMAGES.presentingHd` as About.
