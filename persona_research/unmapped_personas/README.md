# Unmapped Personas

Research dossiers that are **complete and kept**, but are deliberately not
mapped onto the 33-row board.

`scripts/extract_persona_research.py` discovers personas with
`persona_research/persona_research_output/P*.md` filtered to `^P\d+_`.
Files in *this* directory sit outside that glob, so they are preserved in git
with their full history but generate no persona data, no board row and no
dossier page.

| File | Was | Unmapped on | Why |
|---|---|---|---|
| `P24_Operations_Geologist.md` | Slot `P24`, Wells & Rig, 7 agents, 19.95 h/tour | 2026-09-15 | The `P24` slot was reassigned to **Well Logging Engineer** to widen discipline coverage across the board. Three geologist rows (`P05` Petroleum, `P21` Development, `P24` Operations) read as concentrated; wireline field operations were absent entirely. The research itself is sound and unchanged. |

## Re-mapping one of these

1. `git mv` the file back into `persona_research/persona_research_output/`.
2. Give it a free slot ID in its frontmatter `Persona ID` line, and rename the
   file to match (`P34_Operations_Geologist.md`).
3. Add a matching row to `HOLISTIC_PERSONA_LIST.md` — the roster supplies
   `tier`, `segment`, `standards` and `agentFocus`, and a persona missing from
   it will build with those fields blank.
4. Add `SEATS`, and any asset / risk / recovery entries, to
   `data/value_model.js`. Without a `SEATS` entry `squadValue()` returns null
   and the row carries no rupee value.
5. Drop an avatar at `personas/avatars/P34_persona.jpg` and a thumbnail at
   `personas/avatars/thumbs/P34_thumb.jpg`.
6. Regenerate: `python3 scripts/extract_persona_research.py && node scripts/build_matrix_33.js`.

> [!IMPORTANT]
> Adding a persona takes the board past 33 rows. Counts on the board and the
> launcher are computed from the data, but prose elsewhere in the deck still
> says "33 roles" in places — grep before presenting.
