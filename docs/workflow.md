# Workflow for future agents

## Session start (cheap context)

1. `AGENTS.md`
2. This index path: `docs/README.md` → only the files that match the ask
3. `git log -8 --oneline` and `git status`
4. Open the page file under `src/pages/` and the **local** CSS block (search the class name). Do not read all of `src/index.css`.

Recent commits plus `docs/` are enough. Do not mine old chat transcripts unless docs and git are silent.

Prefer an efficient model for the parent session (Composer 2.5 or Auto Cost). Use Grok 4.6 high **only** as a subagent when the work is challenging — see [`cost.md`](cost.md).

## During the work

- One request → one scoped change. Unrelated pages stay untouched.
- Shared tokens and copy live in `src/index.css` (`:root`) and `src/content.ts`. Change them only when the user wants a global shift.
- After a lasting decision (new hero treatment, locked copy, asset rule), update `docs/pages.md` or `docs/constraints.md` in the same unit of work.

## Commit after a large unit

Commit when a unit is reviewable on its own: a hero, a section, a page layout pass, or a docs/constraint change.

```text
git add <relevant files>
git commit -m "Why this change exists."
```

Good: `Overlay CFO hero copy on speaking.jpg so the photo carries the page.`
Bad: `Update Cfo.tsx and index.css.`

Do not:

- Commit secrets, `dist/`, or `node_modules` (already gitignored).
- Amend unless the user asks and the amend rules allow it.
- Push unless the user asks.
- Rewrite git config. If `user.name` / `user.email` are unset, pass them only for that commit:

```bash
git -c user.name="Aviv" -c user.email="aviv@bottomline.finance" commit -m "Why."
```

Skip a commit for tiny follow-up tweaks in the same unit; fold them into the unit, then commit once.

## New session when context is heavy

Stop and recommend a new chat when:

- You are relying on a conversation summary more than on `docs/` and git.
- The same CSS/hero has been through many revisions and constraints are starting to blur.
- The user switches to a different page or a deploy/git task.

Handoff to the user, short:

> Context is getting large. Start a new session; the next agent should read `AGENTS.md`, `docs/README.md`, and `git log`.

Do not paste a long recap. The next agent reconstructs from commits and docs.
