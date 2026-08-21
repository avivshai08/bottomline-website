# Models and token budget

Most work here is local CSS, copy placement, assets, git, and docs. That does not need a frontier thinking model. Tokens are dominated by **long chats**, **broad file reads**, **images/screenshots**, and **high-effort reasoning** — not by the size of the diff.

## Default model

Parent session: **Composer 2.5** (standard, not Fast) or **Auto Cost**.

Do not start routine site work on Grok 4.6, and do not use Grok Fast. Fast costs about 2× for latency, not better layout.

## Subagents

When using the Task tool, **pass `model` explicitly**. Do not `inherit` a Grok parent for ordinary work.

| Task | Subagent `model` |
| --- | --- |
| Default — CSS, copy placement, assets, git, docs, single-section layout | `composer-2.5-fast` |
| Challenging only | `cursor-grok-4.6-high` |

(`composer-2.5-fast` is the Composer slug the Task tool accepts. Prefer Composer 2.5 **standard** in the chat model picker when you are not spawning a subagent.)

### What counts as challenging (Grok 4.6 high)

Use `cursor-grok-4.6-high` only when at least one is true:

- Brand/layout constraints conflict and the cheaper model already failed or would be guessing.
- Copy must be judged without inventing claims, testimonials, or stats.
- A cross-page visual-system decision, not a one-block tweak.
- A real bug with no obvious cause after a short look at the local CSS.

If it is mechanical, it is not challenging: git/PATH, copying a photo, overlay color/weight/position, writing or updating `docs/`, spacing, one hero, one section.

When in doubt, start on Composer. Escalate to a Grok 4.6 high subagent only after that path is stuck.

## Exploration budget

For a local UI tweak:

- The page under `src/pages/`, the matching CSS class, and `IMAGES` if the asset changes.
- Do not read all of `src/index.css` or unrelated pages.
- Do not screenshot or `Read` photos unless contrast is in doubt or the user asked to verify.
- Do not fetch MCP / skill schemas until that tool is about to be used.
- Environment blocks (git missing, PATH, identity): one attempt, then ask the user. Do not hunt installers for several turns.
- Ignore stale shell notifications that do not change the current task.

## Sessions

One page or one task type per chat. After a large unit, commit (see `workflow.md`) and recommend a new session if the next ask is a different page. That cut in context is the main cost control.
