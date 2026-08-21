# Bottom Line website — agent guide

This is the Hebrew marketing site for **Bottom line** (אביב שי): fractional CFO, Profit First, and business-simulation programs. Work is visual and copy-sensitive. The live site is a Netlify upload of `dist/`.

## Start here, then stop reading

Do **not** load the whole repo or the whole `docs/` folder into context.

1. Read **this file**.
2. Open [`docs/README.md`](docs/README.md) and read **only** the docs that match the current task.
3. Run `git log -8 --oneline` and `git status`. Recent commits are the session handoff.
4. Do the smallest change that satisfies the request.

If the task is unclear after that, inspect the relevant page/component — not `src/index.css` end to end.

## Purpose

Ship a polished, RTL Hebrew site that matches approved layout, type, and assets. Do not redesign the product, invent social proof, or change routes/URLs unless the user asks.

Details: [`docs/purpose.md`](docs/purpose.md)

## Work efficiently

- Touch only the page, component, or CSS block named in the request.
- Prefer HTML/CSS over new images when a diagram or formula can be drawn in code.
- Copy new photos into `public/images/` and point `IMAGES` at them. **Never delete** originals in `public/images/` or at the project root.
- Vite HMR is **off**. After edits, hard-refresh `http://127.0.0.1:5173/` (not `localhost`).
- Do not run drive-by refactors, dependency upgrades, or global CSS sweeps.

Hard limits: [`docs/constraints.md`](docs/constraints.md)  
Stack and commands: [`docs/development.md`](docs/development.md)

## After a large unit of work: commit

When a coherent unit is done (a hero, a section, a page pass, a docs update — not every one-line tweak), **commit**.

- Message: 1–2 sentences on **why**, not a file list.
- Do not change git config. If identity is missing, use one-shot `git -c user.name=… -c user.email=…` for that commit only.
- Do not push unless asked.
- If the unit created or changed a lasting decision, update the matching file under `docs/` in the same commit (or immediately after).

## When context is too large: new session

Recommend a **new chat** when any of these are true:

- The thread has already been summarized, or you are re-deriving facts from memory instead of `docs/` / git.
- You have iterated the same visual for many turns and the CSS is getting hard to keep straight.
- The next request is a different page or a different kind of work (copy vs. layout vs. deploy).

Tell the user to start a new session and that the next agent should begin with this file, `docs/README.md`, and `git log`. Do not dump a novel into the chat as a handoff — the commits and docs *are* the handoff.

## Canonical references

| Need | File |
| --- | --- |
| What this project is | [`docs/purpose.md`](docs/purpose.md) |
| How to work and hand off | [`docs/workflow.md`](docs/workflow.md) |
| Do-not-break rules | [`docs/constraints.md`](docs/constraints.md) |
| Type, color, header, CTA | [`docs/visual-system.md`](docs/visual-system.md) |
| Per-page decisions | [`docs/pages.md`](docs/pages.md) |
| Dev server, build, Netlify, git | [`docs/development.md`](docs/development.md) |
| Shared copy and image keys | [`src/content.ts`](src/content.ts) |
