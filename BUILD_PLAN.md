# Build Plan — Expanded Persona, Agent & ROI System

> **Companion to:** [CURRENT_REFINEMENTS.md](CURRENT_REFINEMENTS.md) (that file says *what* and *why*; this file says *how*, *who* and *in what order*).
> **Status:** BUILT 2026-10-10 (all phases; awaiting commit approval). 53 personas · 798 workflows · 374 agents ·
> ₹4,462 Cr/yr (Upstream ₹2,717 · Midstream ₹336 · Downstream ₹1,409, reconciling exactly). Validator green on all 53,
> smoke test green on all four tabs. Baseline preserved at git tag `persona-baseline-33`.
> **Date:** 2026-10-10

---

## 0 · Bottom line

**The build runs as 7 phases. The lead agent (me) owns every decision that can change the story or the money. Gemini Flash agents do the high-volume work: source harvesting, dossier drafting, extraction, portraits, literal sweeps, screenshots.** A deterministic validator script sits between the two, so Flash output is checked by code, not by spending my tokens reading it.

**End state (definition of done):**
1. A **central persona map** with `Upstream | Midstream | Downstream | Full value chain` tabs. Its default tab is the presenter's starting track.
2. **Every persona**, old and new, has a full research dossier, **15 actions**, an **agent squad (~7)**, and an **hours-saved ROI per agent**, plus the four company-scale levers. It is all exactly as rich as the current 33.
3. **Every persona has its own page** (`personas/dossier.html?p=Pxx`) with a **photograph** (1024 px + 96 px thumb) and an **illustrative name**.
4. No hardcoded counts, and **no company names** visible anywhere.

---

## 1 · Full scope inventory

### 1.1 What every new persona must produce (same as the original 33)

| # | Artefact | File | Producer |
|---|---|---|---|
| 1 | Roster row (title, domains, sub-segment, anchor, tier) | `persona_research/persona_research_output/HOLISTIC_PERSONA_LIST.md` | Lead (approves) |
| 2 | Research dossier, template v3 §0–§7 (~300 lines, 35–45 KB) | `persona_research/persona_research_output/Pxx_<Title>.md` | **Flash** (drafts) |
| 3 | 15 cited actions | inside #2, §3 | **Flash** |
| 4 | Agent squad (~7): reads / does / returns / stopsAt / failureModes | inside #2, §4 | **Flash** |
| 5 | Hours model per agent (before/after/saved per unit) = per-agent ROI | inside #2, §4 | **Flash** |
| 6 | Extracted data | `data/personas/Pxx.json/.js` + `index.json/.js` | Script (run by Flash) |
| 7 | Company-scale levers: seats, asset capital, asset risk, recovery | `data/value_model.js` | **Flash proposes → Lead approves** |
| 8 | Illustrative name | `PERSONA_PEOPLE` in `scripts/extract_persona_research.py` | **Flash** proposes, Lead signs off with roster |
| 9 | Portrait 1024 px + thumb 96 px | `personas/avatars/Pxx_persona.jpg`, `thumbs/Pxx_thumb.jpg` | **image-generator** + Flash (resize via `convert`) |
| 10 | Avatar directory row | `personas/avatars/README.md` | **Flash** |

### 1.2 System pieces to change (one-time)

| Piece | File(s) | Change |
|---|---|---|
| Roster schema | `HOLISTIC_PERSONA_LIST.md`, `extract_persona_research.py` | Add `domains, primaryDomain, subSegment, crossCutting` |
| Matrix build | `scripts/build_matrix_33.js` → `build_matrix.js`; `working_deck/data/matrix_33.js` → `matrix.js` | Explicit groups, domain metadata, no "33" |
| Value model | `data/value_model.js` | Keyed by domain; scale proxies as internal assumptions only |
| Central persona map | new `working_deck/persona_map.html` (from `pages/page_07.html`) | Tabs, default from the starting track, calculated totals |
| Track links | `upstream/`, `midstream/`, `pages/` (downstream) Stage 07 links; `pages/page_00.html` stores the selection | Point at the shared map with `?domain=` |
| Individual persona page | `personas/dossier.html` (canonical), `personas/profile.html` | Domain tabs on the roster, dynamic `— / N`, domain-aware value calculation |
| Literals | about 14 files (see CURRENT_REFINEMENTS F4) | Calculated, or neutral wording |
| Smoke test | `scripts/smoke_board.py` | Point at the persona map; assert per-tab counts |
| Out of scope | `personas/persona.html` + `data/enterprise_matrix_300.*` + `persona_people.js` + `persona_narratives.js` | Legacy 20-persona chessboard. Kept as is, not extended |

---

## 2 · Delegation model

### 2.1 Who does what

| Owner | Model | Takes | Never takes |
|---|---|---|---|
| **Lead** | current model | Architecture, schema, roster decisions, value-model approval, central-map core logic, gate reviews, final QA, commits (with your OK) | Bulk drafting, mass file edits, image work |
| **Flash workers** | `flash` | Source harvesting, long-list building, dossier drafting, extraction runs, value-lever proposals, names, portrait prompts and resizing, literal sweeps, screenshots, grep audits | Approving rosters or money; editing shared files in parallel |
| **Flash-lite** | `flash_lite` | Mechanical checks: run the validator, run grep, collect counts | Anything needing judgement |
| **image-generator** | subagent | Portraits from a fixed style brief | — |

### 2.2 Rules that keep Flash output safe and cheap
1. **One writer per file.** In parallel fan-outs, each Flash agent writes **only its own** `Pxx_*.md`. Shared files (roster, `value_model.js`, extract script, persona map) are edited serially by one agent or by the Lead.
2. **Code gates before human gates.** `scripts/validate_dossier.py` (built in Phase 0) checks every dossier mechanically. Only dossiers that pass reach my review. Failures bounce back to the same Flash agent with the validator output.
3. **Lead reviews by sampling, not reading everything.** Per batch I read the validator report, plus the actions table and agent summary of 1–2 dossiers, and the full value-lever proposals (the money).
4. **Self-contained briefs.** Flash agents can't see this conversation. Every task card (§4) carries its inputs, rules, output path and acceptance checks.
5. **Structured returns.** Every Flash agent finishes with a short JSON result (path, counts, open issues), never a prose essay.

### 2.3 Orchestration
- Fan-outs run through `run_workflow` with `model="flash"` (`parallel` within a batch, `pipeline` across batches).
- Batch size is **6–8 personas** at a time, to keep failures contained.

---

## 3 · Build phases & checklist

Legend: **[L]** Lead · **[F]** Flash · **[FL]** Flash-lite · **[IMG]** image-generator · ⛔ = your approval gate

### Phase 0 · Baseline & guard-rails
- [ ] [L] Tag `persona-baseline-33`
- [ ] [F] Script `scripts/baseline_report.py` → `persona_research/BASELINE_33.md`: personas, actions, agents, cells, ₹ by lever, per segment
- [ ] [F] Reconcile **232 vs 234** agents and write up the cause
- [ ] [L] Spec, and [F] build, `scripts/validate_dossier.py`. It checks template v3 sections, 15 actions with all columns, 5–9 agents with reads/does/returns/stopsAt, an hours row per agent with after < before, at least 5 citations, a standards anchor, and **no company-name hits** (deny-list)
- [ ] [FL] Run the validator on all 33 existing dossiers. They must pass. If they don't, tune the validator and not the dossiers.
- **Gate:** baseline numbers recorded; validator green on the 33.

### Phase 1 · Unlock the structure (no visible change)
- [ ] [L] Final schema for the new fields; reclassify the 33 (CURRENT_REFINEMENTS §4.4)
- [ ] [F] Add the domain columns to the roster table
- [ ] [F] Extend `extract_persona_research.py` to emit the new fields; re-run on all 33
- [ ] [F] `build_matrix_33.js` → `build_matrix.js` with explicit `subSegment` grouping; output `matrix.js`; keep a `matrix_33.js` shim until Phase 3
- [ ] [F] Sweep literals: "33 / 495 / 232 / 3,652" → calculated or neutral, file by file, serially
- [ ] [FL] Grep audit: no remaining hardcoded counts
- **Gate:** headless screenshots identical to baseline; removing one persona leaves totals consistent.

### Phase 2 · Domain-aware value model
- [ ] [L] Design `value_model.js` by domain (formulas unchanged); define the three scale proxies as internal notes
- [ ] [F] Harvest public scale anchors for each proxy (staff, assets, throughput), cited, written to `persona_research/SCALE_ANCHORS.md`
- [ ] [L] Approve the anchors
- [ ] [F] Restructure `value_model.js`; re-key the existing 33; give cross-cutting roles per-domain seats (proposed)
- [ ] [L] Review every changed number
- [ ] [F] Update `dossier.html` and `build_matrix.js` to read the domain-keyed inputs
- [ ] [F] Generate a per-domain totals table with deltas vs baseline
- ⛔ **Gate:** you approve the totals table.

### Phase 3 · Central persona map
- [ ] [L] Write the core: domain state (URL → localStorage → full), tab rendering, calculated header totals
- [ ] [F] Lift `pages/page_07.html` into `working_deck/persona_map.html` and wire in the Lead's core
- [ ] [F] Slide 00: save the selected domain to `localStorage`
- [ ] [F] Re-point Stage 07 in the upstream, midstream and downstream tracks to `persona_map.html?domain=…`; park the 3 old copies as `_parked_page_07.html`
- [ ] [F] Add domain tabs and a dynamic `— / N` to the `personas/dossier.html` roster
- [ ] [F] Update `smoke_board.py` for the per-tab counts
- [ ] [F] Screenshots of all 4 tabs plus the dossier roster
- **Gate:** totals per tab tie back to the Phase 2 table.

> Phases 1–3 can run **in parallel** with Phase 4.

### Phase 4 · R1 Roles research
- [ ] [L] Write the R1 brief: the generic sub-segments (CURRENT_REFINEMENTS §4.3), selection rules (§4.2) and source families (§4.3)
- [ ] [F ×~18] **One Flash agent per sub-segment** (9 midstream + 9 downstream). Each returns candidate roles, each with a recognisable title, one-line role, authoritative anchor (cited), overlap verdict vs the 33, and a knowledge-work verdict
- [ ] [L] **Synthesis:** merge, remove duplicates, and cut clutter into a lean roster per domain; decide where to extend an existing persona instead of adding one; assign IDs from P36
- [ ] [F] Propose illustrative names (diverse, global, generic)
- ⛔ **Gate:** you approve the Midstream and Downstream rosters and names.

### Phase 5 · R2–R3 Dossiers: actions, agents, hours ROI
Repeat per batch (6–8 personas, grouped by sub-segment):
- [ ] [F ×batch] **One Flash agent per persona** drafts `Pxx_<Title>.md` to template v3: role, sources, **15 cited actions**, **~7 agents**, **hours model per agent**, vendor gaps, negative search
- [ ] [FL] Run `validate_dossier.py` → failures bounce back to the same agent (max 2 retries, then escalate to the Lead)
- [ ] [L] Sample review (actions + agent squad) of 1–2 per batch; spot-check citations
- [ ] [F] Serially: run `extract_persona_research.py --only <batch>`; add the roster rows; append names to `PERSONA_PEOPLE`
- [ ] [IMG] Portraits from the fixed style brief (editorial, warm natural light, neutral background, everyday professional attire, no props). [F] resizes to 1024 px and 96 px with `convert` and updates `avatars/README.md`
- [ ] [FL] Check that each new persona appears in the right tab and its page renders a photo
- **Gate per batch:** validator green, pages render, counts move by exactly the batch.

### Phase 6 · R4 ROI levers for new personas
- [ ] [F ×batch] Propose seats, asset capital, asset risk and recovery per persona at its domain's scale. Every multiplier is cited, and assets that aren't on the critical path stay at zero (existing rule)
- [ ] [L] Review **every** lever row (this is the money)
- [ ] [F] Write the approved rows into `value_model.js`; rebuild the matrix
- [ ] [F] Regenerate the per-domain totals table and the NORTH_STAR shares from data
- ⛔ **Gate:** you approve the new totals.

### Phase 7 · Narrative, lock & ship
- [ ] [F] Update slide copy that quotes estate figures (Stage 06/07/08, index, profile) so it is data-driven or neutral
- [ ] [F] Unlock and re-baseline `final_slides/slide_08_the_enterprise_chessboard` and `LOCKED_SLIDES.md`
- [ ] [FL] Final grep: no company names, no hardcoded counts
- [ ] [F] Click-through screenshots of all three tracks plus every tab
- [ ] [L] Final review
- ⛔ **Gate:** your go-ahead, then commit and push.

---

## 4 · Task cards for Flash (templates)

Each card is pasted into a Flash agent's prompt, with the placeholders filled in.

### Card A · R1 sub-segment role discovery
```
ROLE: Oil & gas workforce researcher. GENERIC industry pitch — never name a company, site or brand.
SUB-SEGMENT: {domain} / {sub_segment}
TASK: Identify the roles in this sub-segment that practitioners widely recognise.
RULES: 1–3 word title people use about themselves; each must cite a published competency
standard, regulator or professional body; must do knowledge work an agent can prepare;
check overlap against this existing list: {existing_33_titles}. Prefer FEWER, well-known roles.
OUTPUT (JSON): [{title, oneLine, anchor, anchorCitation, overlapsWith|null, overlapPct,
knowledgeWorkVerdict, keep|merge|drop, reason}]
```

### Card B · R2–R3 persona dossier
```
ROLE: Persona research author. GENERIC pitch — no company/site/brand names.
PERSONA: {id} {title} — {oneLine} — domain {domain}/{sub_segment} — anchor {anchor}
TEMPLATE: follow persona_research/PERSONA_TEMPLATE v3.md exactly (read it first).
EXEMPLAR: read persona_research/persona_research_output/{exemplar_dossier} for depth and tone.
MUST HAVE: 15 cited actions with all columns; ~7 agents (reads/does/returns/stopsAt/
failureModes); hours model per agent (before > after, per unit); ≥5 citations; vendor gaps;
negative search. Never fabricate enterprise ₹/$ multipliers.
WRITE ONLY: persona_research/persona_research_output/{id}_{Title}.md
THEN RUN: python3 scripts/validate_dossier.py {path} and fix until it passes.
OUTPUT (JSON): {path, actions, agents, citations, validatorPassed, openQuestions[]}
```

### Card C · Value-lever proposal
```
ROLE: Value analyst. Read data/value_model.js header rules and the persona's dossier.
SCALE PROXY ({domain}): {scale_anchor_summary} — internal assumption, never named in output text.
PROPOSE: seats; ASSET_CAPITAL (only if on an asset's critical path, else omit);
ASSET_RISK; RESOURCE_RECOVERY (only if it applies). Same shapes as existing entries.
Cite every anchor. Keep `share` small (≤1% of asset calendar hours), as in existing rows.
OUTPUT (JSON): {id, seats, assetCapital|null, assetRisk|null, recovery|null, sources[], caveats}
```

### Card D · Portrait
```
Editorial headshot, warm natural light, soft neutral background, everyday professional attire
for a {title}, {apparent_gender_age_ethnicity_from_name}, no props, no logos, square, photoreal.
Save, then: convert → personas/avatars/{id}_persona.jpg (1024px) and thumbs/{id}_thumb.jpg (96px).
```

---

## 5 · Token strategy

| Spend | Where | Why |
|---|---|---|
| **High (Lead)** | Phase 1 schema, Phase 2 value design, Phase 3 core logic, R1 synthesis, all ROI lever approvals | Decisions that change the story or the money |
| **Low (Lead)** | Gate reviews | Read validator reports and samples, never whole dossiers |
| **High (Flash)** | Dossier drafting (~40 KB each), source harvesting, literal sweeps | Volume work with a mechanical acceptance check |
| **Minimal** | Validator, grep, screenshots | Scripts and Flash-lite |

**Indicative volume:** about 18 R1 agents, plus about 25–30 dossier agents (the final count comes from the roster), plus the same number of lever-proposal agents, plus portraits. All Flash.

---

## 6 · Risks

| Risk | Mitigation |
|---|---|
| Flash dossiers are shallow or hallucinate citations | Exemplar dossier in every brief; validator; Lead spot-checks citations; 2 retries then escalate |
| Parallel agents clobber shared files | One-writer-per-file rule; shared files edited serially |
| Roster bloat | Card A says "prefer fewer"; Lead synthesis cuts; your approval gate |
| Money drift | Every lever row reviewed by the Lead; totals table approved by you |
| A company name leaks | Deny-list in the validator plus a final grep |
| Visual regressions | Screenshot gates in Phases 1, 3 and 7 |

---

## 7 · First moves on go-ahead
1. **Phase 0** (baseline, 232 vs 234 reconciliation, validator), with **Phase 4 R1** launched in parallel: 18 Flash sub-segment agents.
2. I come back with the **baseline report** and the **proposed lean rosters** for your approval.
