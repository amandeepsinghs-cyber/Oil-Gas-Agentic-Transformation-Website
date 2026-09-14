# Quarantined Build Pipeline

**Archived 2026-09-14.** These three scripts describe a 16-stage deck that no longer
exists. All three regenerate HTML *over* the live, hand-authored deck. None of them
is wired into anything — there is no Makefile, no CI, no `package.json`, and the
pre-commit hook does not invoke them. They were only ever run by hand.

They are kept, not deleted, because they document how the deck was originally
assembled and because their stage tables are a record of the pre-pivot narrative.

## What is live now

The live deck is **`working_deck/pages/page_00.html` … `page_10.html`**, plus the
`alternate_story.html` interstitial between pages 02 and 03. It is hand-authored.
There is no build step. Edit the pages directly.

Persona pages live in `personas/` and are reached from `page_08.html` via
`?p=Pnn` deep links.

## What is in here

| File | Was | What it did | Why it is dangerous |
|---|---|---|---|
| `build_deck.py` | repo root | Stitched `slides/*.html` → `deck.html` | Its 16-file guard **passes today** — all 16 files exist, so it runs. Emits `id="slide-NN"` sections while generating a dock linking `#slide-01…16`, so the nav is broken on arrival. Also re-injects `assets/interactive.js` and `assets/presenter.js`, which collide with the inline handlers in `index.html`. |
| `working_deck_build.py` | `working_deck/build.py` | Stitched `working_deck/slides/` → `working_deck/index.html`; `--pages` also regenerated `pages/` | **The worst one.** `--pages` overwrites all 11 live pages, including the 73 KB `page_08.html`. Globs 17 files against a 16-entry `STAGE_TITLES`, because both `slide_03_mece_traps.html` and `slide_03_the_need_criteria.html` declare `id="stage-03"` — so every stage title from index 4 up is shifted by one, and the output carries a duplicate DOM id. Also emits a `Schedule Discovery` CTA pointing at `page_14.html`, which does not exist. |
| `working_deck_modularize.py` | `working_deck/modularize.py` | Sliced `working_deck/index.html` back into `slides/` + `pages/` | Against today's 6-stage `index.html` it emits only `page_00..page_05` and orphans the rest. `BRAIN_DIR` is hardcoded to an unrelated conversation directory whose source images do not exist. Its `<script>` regex grabs the theme-toggle block from `<head>` instead of the interactive script. Calls `os.makedirs()` at import time. |

## The guards

Each file has a hard-exit block immediately after its docstring:

```python
import sys
print("QUARANTINED — ...")
sys.exit(1)
```

It sits **above the imports** so nothing runs first — this matters for
`working_deck_modularize.py`, which creates directories as a module-level side
effect.

The guard travels with the file. Moving a script back to its old path is not enough
to re-arm it; you have to delete the block too. That is deliberate — restoring
should be a decision, not an accident.

> [!WARNING]
> The guard does not protect against history-based restoration.
> `git checkout <pre-2026-09-14-commit> -- build_deck.py` returns the **unguarded**
> original. If you recover a script that way, re-read this file first.

## To restore one deliberately

```bash
# example: build_deck.py
git mv legacy_strategic_files/build_pipeline/build_deck.py build_deck.py
# then delete the "QUARANTINED" block at the top of the file
python3 build_deck.py
```

Before you do: the sources these read from (`slides/`, `working_deck/slides/`,
`working_deck/header_template.html`, `working_deck/footer_template.html`) are all
dated 2026-09-12 or earlier, while the live pages are 2026-09-13. Regenerating will
move the deck **backwards**.

## Related material left in place

Deliberately **not** quarantined, because it is inert without these scripts and is
useful raw material:

- `slides/` and `working_deck/slides/` — the pre-pivot slide bodies.
  `slides/slide_14_lighthouse_charter.html` and `slides/slide_15_next_steps.html`
  are the source material for the closing "ask" slide, which the live deck does
  not yet have.
- `working_deck/header_template.html`, `working_deck/footer_template.html` — the
  old 16-stage nav and the shared interactive script block.

## Prior art

`audit.md:115-123` (P0-2, P0-3) independently identified `build_deck.py` and
`working_deck/build.py` as one-command deck erasers, and `audit.md:279` recommended
exactly this remedy.
