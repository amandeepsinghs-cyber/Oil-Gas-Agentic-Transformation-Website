# Legacy Strategic Files & Archived Decks

This directory archives prior iterations, initial research drafts, and superseded
build tooling for the **Oil & Gas Agentic Transformation** project.

Nothing in here is live. The live deck is `working_deck/pages/page_00.html` …
`page_10.html`, hand-authored, with no build step.

## Inventory

| Path | What it is |
|---|---|
| `build_pipeline/` | The three superseded build scripts — `build_deck.py`, `working_deck_build.py`, `working_deck_modularize.py`. All would regenerate HTML over the live deck. Each carries a hard-exit guard. **See `build_pipeline/README.md` before touching any of them.** |
| `AGENTIC_PITCH_BIBLE_INITIAL.md` | The original 1,003-line 15-slide pitch bible, with verbatim notes from `Agentic Pitch.pdf`. Predates the Fast-Pace Pivot. |
| `STRATEGIC_PACING_RATIONALE.md` | Comparative analysis establishing the rationale for the Fast-Pace Pivot — revealing the AI Agent at Minute 4.5 rather than Minute 10. A duplicate of this file still sits at the repo root. |
| `slide_03_mece_traps_LEGACY.html` | Standalone HTML for the original Slide 03 (3 MECE Failure Traps), preserved for reuse in downstream discovery sprints. |
| `retired_slides/page_11.html` | Retired Stage 11 page. |
| `retired_slides/slide_11_the_strategic_mandate.html` | Retired Strategic Mandate slide body. |
| `retired_slides/slide_11_the_strategic_mandate.LOCKED.html` | Frozen copy of the above. Relevant if you rebuild the closing "ask" slide, which the live deck currently lacks. |

## Corrections to a previous version of this file

The earlier inventory listed two files that do not exist anywhere in the repo:

- `deck_legacy_16x9.html` — the original 16:9 fixed-viewport 16-slide deck
- `deck_initial_16_stages.html` — the initial 16-stage continuous draft

Neither is present on disk. If they matter, they would have to be recovered from
git history. Both entries have been removed here rather than left standing, since
a stale inventory is worse than a short one.
