# Deck Audit — Working Checklist

**Repo:** `O&G_slidedeck_agentic_transformation`
**Baseline commit:** `80bd9e4`
**Scan date:** 2026-09-11
**Scope:** 28 files — `final_slides/*.html` (non-LOCKED), `working_deck/pages/*.html`, `index.html`, `deck.html`, `working_deck/index.html`, `personas/persona.html`

## How to use this file

Work **top to bottom**. Each item is sized to be finished in one pass. After completing an item, change `- [ ]` to `- [x]` and add the commit short-SHA in the trailing `→` slot.

Re-run the scanner after each fix to confirm the number moved:

```
node /usr/local/google/home/amandeepsinghs/.gemini/jetski/brain/178c9df6-5a9a-43db-a66b-bc52349e7a41/scratch/audit_scan.js
```

**Severity key:** 🔴 credibility risk in the room · 🟠 visible defect · 🟡 hygiene / debt

**Progress:** 1 / 64 complete

---

# Phase 1 — Theme & Visuals

> [!NOTE]
> Goal of this phase: the deck should survive a light/dark flip without breaking, and should use one type scale instead of thirty-one. `personas/persona.html` (4 hardcoded colours vs 35 `var()`) is already the standard — everything else is measured against it.

## 1.1 Broken and non-portable asset references

- [ ] 🔴 **`page_06.html` hero proof image points at a laptop-local path.** `working_deck/pages/page_06.html` references `file:///usr/local/google/home/amandeepsinghs/Downloads/Petrophysicist-…`. This renders as a broken image on **any machine but this one** — including the presenting laptop if the file moves. Copy the asset into `assets/media/` and switch to a relative path. *~10 min* →
- [ ] 🔴 **`index.html` → `page_03.html` 404 from root.** The `stage-02b` section spliced into `index.html` (~L452) carries `href="page_03.html"`, which is relative to `working_deck/pages/`, not the repo root. Clicking the crew-change slide's forward CTA in the compiled shell dead-ends. Fix the href to the in-page anchor (`#stage-03`) or the correct relative path. *Introduced by the stage-02b splice.* *~5 min* →
- [ ] 🟠 **`slide_08` cannot load its own data file.** `final_slides/slide_08_the_enterprise_chessboard.html` references `data/enterprise_matrix_300.js`, which does not resolve from `final_slides/`. The chessboard is data-driven — this means the standalone slide file is non-functional in isolation. *~10 min* →
- [ ] 🟠 **`slide_08` references `working_deck/pages/page_06.html`** on a path that does not resolve from `final_slides/`. *~5 min* →
- [ ] 🟠 **`slide_10` missing image:** `assets/media/retail_agentic/image7.png` does not exist. Either restore the asset or remove the reference. *~5 min* →

## 1.2 Light-theme readiness (hardcoded colours in inline `style` attributes)

> [!IMPORTANT]
> These are `#FFF`, dark-background hexes and `rgba(255,255,255,…)` written directly into `style=""` attributes. They **do not respond to `html.theme-light`**, so every one of them is a patch of dark-theme colour stranded on a light background. `assets/styles.css` already defines the light overrides at L61–77 — the tokens exist, they're just being bypassed.

Counts are `hardcoded / var()`. Fix in this order (worst first, and the two compiled shells are what an executive actually opens):

- [ ] 🔴 **`index.html` — 125 hardcoded / 281 var().** The primary entry point. Biggest single light-theme blocker. *~60 min* →
- [ ] 🔴 **`deck.html` — 98 / 240.** *~45 min* →
- [ ] 🔴 **`working_deck/index.html` — 98 / 240.** Likely near-identical to `deck.html`; fix together. *~15 min if done alongside* →
- [ ] 🟠 **`working_deck/pages/page_02.html` — 49 / 70.** Worst ratio in the deck (41% hardcoded). *~30 min* →
- [ ] 🟠 **`working_deck/pages/alternate_story.html` — 33 / 49.** The new crew-change slide. Built on the `page_02` boilerplate, so it inherited the problem. Fix it now while it is fresh. *~25 min* →
- [ ] 🟠 **`working_deck/pages/page_01.html` — 32 / 76.** *~25 min* →
- [ ] 🟠 **`working_deck/pages/page_09.html` — 32 / 81.** *~25 min* →
- [ ] 🟡 **`final_slides/slide_09_…` — 27 / 57.** *~20 min* →
- [ ] 🟡 **`final_slides/slide_02_swiss_cheese` — 26 / 33.** Worst ratio in `final_slides/` (44% hardcoded). *~20 min* →
- [ ] 🟡 **`working_deck/pages/page_08.html` — 26 / 87.** *~20 min* →
- [ ] 🟡 **`working_deck/pages/page_03.html` — 25 / 58.** *~20 min* →
- [ ] 🟡 **`working_deck/pages/page_04.html` — 24 / 72.** *~20 min* →
- [ ] 🟡 **Remaining files, batched** — `slide_08` (22/80), `page_06` (22/44), `page_05` (19/42), `page_00` (18/37), `page_10` (17/38), `slide_03` (16/45), `slide_04` (15/59), `slide_06` (13/32), `slide_05` (10/29), `slide_00_overview` (9/25), `slide_01` (9/39), `slide_10` (8/25), `page_07` (8/10), `preview_cheese` (8/8), `slide_07` (4/3). *~90 min total* →
- [ ] 🟡 **Add a regression guard.** Extend `check_polish.js` (or `audit_scan.js`) to **fail** when a file's hardcoded-colour count rises above its recorded baseline. Prevents backsliding. *~20 min* →

## 1.3 Type scale

> [!NOTE]
> The deck uses **31 distinct pixel sizes**. `personas/persona.html` enforces exactly **8** (`10 / 11.5 / 12.5 / 14 / 16 / 20 / 28 / 40`). That is the target.
>
> Full census: `8.5(4) 9(10) 9.5(32) 10(84) 10.5(26) 11(227) 11.5(100) 12(80) 12.5(47) 13(203) 13.5(148) 14(81) 14.5(82) 15(32) 15.5(19) 16(43) 16.5(5) 17(2) 17.5(6) 18(17) 18.5(10) 19(25) 20(21) 22(35) 24(15) 26(10) 28(1) 32(10) 36(1) 40(1) 64(15)`

- [ ] 🟠 **Kill the singletons — they are accidents, not decisions.** `28px ×1`, `36px ×1`, `40px ×1`, `17px ×2`, `16.5px ×5`, `17.5px ×6`. Six edits, no visual risk. Start here. *~15 min* →
- [ ] 🟠 **Collapse the low-count sizes into their nearest neighbour:** `8.5(4)`, `9(10)`, `10.5(26)`, `15.5(19)`, `18.5(10)`, `26(10)`. *~30 min* →
- [ ] 🟡 **Collapse the mid-tier near-duplicates.** `13 / 13.5 / 14 / 14.5` is 464 declarations spread across four sizes a human cannot tell apart. Same for `11 / 11.5 / 12 / 12.5` (454 declarations). Pick one per band. **This is the single biggest visual-consistency win in the deck.** *~90 min* →
- [ ] 🟡 **Publish the final scale as CSS custom properties** in `assets/styles.css` (e.g. `--fs-100` … `--fs-800`) and add a scanner check that flags any raw `font-size:` px literal outside the scale. *~30 min* →

## 1.4 Fonts — clean, no action

- [x] ✅ **Font families are already consistent.** Only `var(--font-display)` and `var(--font-mono)` appear across all 28 files. → *verified in scan §4*

> [!WARNING]
> Correction to earlier project notes: `assets/styles.css` defines `--font-display: "Google Sans"` and `--font-mono: "JetBrains Mono"`. **Not Cabinet Grotesk.** Any doc claiming Cabinet Grotesk for the slide deck is wrong and should be corrected when touched.

- [ ] 🟡 **Correct the Cabinet Grotesk claim** wherever it appears in the repo markdown (`AGENTIC_PITCH_BIBLE.md`, `build.md`, `LOCKED_SLIDES.md` — grep first). *~10 min* →

## 1.5 Theme toggle

- [ ] 🟠 **Verify the dark/light toggle actually works end-to-end** on every page once §1.2 is done. Light theme is the current presenting mode; dark must not be broken by the fixes. Needs a per-page behaviour test (the render harness's `querySelectorAll` returns `[]`, so toggle wiring is never exercised by existing tests — this is why `test_filter.js` exists). *~40 min* →

---

# Phase 2 — Content

## 2.1 Authenticity

> [!CAUTION]
> **Item 2.1.1 is the deck's single largest credibility liability.** If one person in the room hovers a cell and then asks how the number was derived, the answer is "a sine wave." Everything else on this list is smaller than that.

- [ ] 🔴 **Slide 09's ₹ figures are generated by a sine function.** `final_slides/slide_09_the_agentic_value_topology.html`:
  - L524 comment: `// Undulating wave patterns inspired by the natural fluid billowing folds of image78.png`
  - L533: `let val = 15 + Math.sin(r * 0.42 + c * 0.25) * 8 + Math.cos(c * 0.65 - r * 0.2) * 6;`
  - L536 / L538: band bumps for the downstream and drilling ridges
  - L541–553: ~13 hand-set peaks (`if (r === 9 && c === 7) val = 75; // Kansas Petrophysicist Center`, `r===16&&c===0 → 130 // Hydrocracker runaway`)
  - L601: `title="Row ${r+1}, Col ${c+1}: ₹${val.toFixed(0)} Cr / yr"`

  **287 of 300 rupee figures are sine output rendered as financial exposure.** `LOCKED_SLIDES.md:323` files this under a heading reading **"Rigorous Mathematical Grounding."**

  **Two acceptable fixes:** (a) strip the ₹ from the tooltips and relabel the surface explicitly as an illustrative value *topology*, not a value *estimate* — *~15 min*; or (b) drive the surface from the real `impact` values in `enterprise_matrix_300.js` so every cell is traceable — *~90 min*. Do (a) today regardless; (b) is the better end state. →
- [ ] 🔴 **Fix the `LOCKED_SLIDES.md:323` "Rigorous Mathematical Grounding" heading.** Whatever is decided above, that heading currently documents fabricated data as rigorous. It is the thing that would be quoted back. *~5 min* →
- [ ] 🔴 **Replace the Gemini Enterprise placeholder URL.** `https://geminienterprise.google.com/` appears in exactly 3 files: `personas/persona.html` (const `GEMINI_ENTERPRISE_URL`, ~L666–670, carries the comment *"CHANGE THIS to the real workspace address before the deck is shown"*), `final_slides/slide_08_the_enterprise_chessboard.html` (+ its `.LOCKED` copy), `working_deck/pages/page_08.html`. **Blocked: needs the real workspace address from you.** Every "✦ Open in Gemini Enterprise" chip on the persona page is currently a dead end. *~10 min once the URL is known* →
- [ ] 🔴 **Verify the 27% aged 55+ figure against pib.gov.in.** This is the load-bearing number on the new crew-change slide (`working_deck/pages/alternate_story.html`). Everything else on that slide is sourced; this one is not. If it cannot be sourced, the slide needs a different anchor stat. *~20 min* →
- [ ] 🟠 **Disclose that 1 of 36 named agents is live.** `plugged` appears exactly once across all 300 rows (`enterprise_matrix_300.js:271`, cell J8). The other 35 are "Planned Wave 1". The deck currently presents 36 named agents without a visible status distinction on the headline surfaces. State it plainly on-slide — an honest "1 live, 35 in Wave 1" is *stronger* than an unqualified 36 that unravels under a question. *~30 min* →
- [ ] 🟠 **All 20 persona packs are `draft`.** Decide the framing and apply it consistently. Recommendation on record: frame them **permanently as hypotheses**, not as things awaiting "validation" — your own point stands that two domain experts will disagree on tier friction, and it changes company to company and geography to geography, so "validated" is a state that will never honestly arrive. *Decision needed, then ~20 min* →
- [ ] 🟠 **122 touchpoints have no agent; 6 of 20 disciplines are entirely unassigned; no friction touchpoint has any agent named (71 open).** The chessboard reads as fuller than it is. Either surface the coverage ratio honestly on-slide or narrow the claim. *~30 min* →
- [ ] 🟡 **Audit remaining unsourced numbers.** Every quantified claim should be traceable to a named source or explicitly labelled as an estimate. The alternate PDF's slide 1 (six leaks, each with a named source — ONGC Annual Report FY25–26, IOCL + Solomon Associates, SPE, BCG, IEA Methane Tracker, CAG Report) is the standard to hit. *~60 min* →

## 2.2 Consistency

> [!IMPORTANT]
> Each of these is a number the audience hears **once** as a single story but which the deck states **two different ways**. Any one of them, spotted, costs more credibility than it saves effort.

- [ ] 🔴 **`84 Value-Unlock Agents` (slide 09) vs `71 friction bottlenecks` (slide 08).** The CHANGELOG shows 84 was the *old, wrong* friction count; it was corrected to 71 on slide 08 and **slide 09 was never updated**. Straight stale-value bug. *~10 min* →
- [ ] 🔴 **`r = 0.99` conflates two different quantities.** Appears on s06, s07, `page_06`, `page_07`. The shift-search peak is **0.953**; **0.9899** is the ground-truth QC correlation. Presenting the QC number as the search result overstates the result. Pick the right number for each context and label what it measures. *~20 min* →
- [ ] 🔴 **`1.48m` vs `1.829m` cable stretch/shift.** `1.48m` on s02, s08, `alternate_story`; `1.829m` on s00, s06, s07. Slide 08's HUD renders `+1.48m`. Three numbers, one story, in the same sitting. Determine which is correct and propagate. *~25 min* →
- [ ] 🟠 **Kansas peak is `₹45 Cr` on the slide 09 card and `75` in the slide 09 terrain.** Same slide, two values. `LOCKED_SLIDES.md:323` already acknowledges the split. Resolves partly with item 2.1.1. *~10 min* →
- [ ] 🟠 **Two project IDs.** `og-agentic-ecosystem` (s07, `page_07`) vs `og-enterprise-prod` (s08, `page_08`). Reads as two different deployments. *~10 min* →
- [ ] 🔴 **MeitY "100% in-country sovereignty" vs a `us-central1` badge.** Sovereignty claim on s03, `page_03`, `index.html`, `deck.html`, `working_deck/index.html`; `us-central1` badge on s07, s08, `page_07`, `page_08`. **For an Indian NOC audience this is the most damaging contradiction in the deck** — it directly negates the compliance claim. Change the badges to an India region or drop the sovereignty claim. *~20 min* →
- [ ] 🟠 **`final_slides/slide_02` has drifted from `working_deck/pages/page_02.html`.** `page_02` now bridges to the crew change; `slide_02_swiss_cheese.html` and its `.LOCKED` copy still bridge to the 5 Criteria. *Deferred by design* — the right moment to resolve is during the stage renumber (item 2.3.6). *~15 min* →
- [ ] 🟡 **Sweep for further contradictions after the above land.** Re-run scan §7. *~20 min* →

## 2.3 Simplicity

> [!NOTE]
> Dead code is not cosmetic here. `page_01.html` and `page_02.html` carry a large orphaned JS blob from the retired 15-slide storyboard. It runs on every page load, references elements that do not exist, and makes every future edit to those files harder to reason about.

- [ ] 🟠 **`page_01.html` — 41 dead `getElementById` targets.** Orphaned JS referencing s5/s11/s13/s14/s2 elements from the retired 15-slide storyboard. **Biggest single cleanup win in the deck.** *~30 min* →
- [ ] 🟠 **`page_02.html` — 32 dead ids.** Same orphaned blob, below ~L540, sitting underneath the live `setCheeseState()`. Careful: keep `setCheeseState`. *~30 min* →
- [ ] 🟠 **Retired hero-cockpit JS payload left behind in 5 files.** `hero-cockpit-drawer`, `hero-drawer-body`, `hero-drawer-status`, `hero-drawer-timestamp` in `slide_00_overview.html`, `page_00.html`, `index.html`, `deck.html`, `working_deck/index.html`. Documented as retired at `LOCKED_SLIDES.md:33`. **Note:** the block contains four unrendered demo results with hard rupee figures — read them before deleting in case any number is needed elsewhere. *~25 min* →
- [ ] 🟡 **Slide 09 dead ids:** `mini-matrix-radar`, `btn-auto-rotate`, `palette-switch-thumb`, `palette-switch-track`, `btn-palette-toggle`, `topology-legend-items`. Plus 4 `-stage`-suffixed palette/legend ids in `page_09.html`. *~20 min* →
- [ ] 🟡 **Slide 08 dead ids:** `cell-stage-p10-8`, `data-source-indicator-stage`; and in `page_08.html`: `cell-p10-8`, `data-source-indicator`. *~15 min* →
- [ ] 🟠 **Compiled shells are missing stages 06–10.** `deck.html` and `index.html` contain only stages 00–05 (plus the new `stage-02b` in `index.html` — 7 sections). **Half the deck does not exist in the compiled entry point.** Decide: either compile the full deck, or make it explicit that the standalone pages are the presentation surface and the shells are a partial preview. *~60 min to compile, ~10 min to document* →
- [ ] 🟡 **Resolve the stage renumber: `stage-02b` → `stage-03`, shifting 03→10 into 04→11.** Touches ~20 files plus LOCKED copies plus nav counters (`3B / 11` is currently a visible fudge). *Deferred until content stops moving — do this last in Phase 2.* *~90 min* →
- [ ] 🟡 **Decide the fate of `preview_jenga.html`** (20 KB, untracked, looks like a scratch preview) and `working_deck/pages/preview_cheese.html`. Keep-and-track or delete. *~5 min* →
- [ ] 🟡 **Reconcile `alternate_story.md` with your own draft** if it ever surfaces. The committed version is a reconstruction assembled from your messages, not the draft you wrote — your editor buffer never flushed. Your words go on top, the reconstruction below. *~10 min* →

---

# Phase 3 — Story

> [!IMPORTANT]
> The narrative is the strongest thing in this repo — it is a chain of arguments that makes the audience specify the solution before you name it. These items are about the two places it stops short: it never states its own headline number, and it never asks for anything.

## 3.1 The ask

- [ ] 🔴 **The deck has no explicit ask.** `build.md:239–246` specifies a **Slide 15 "Strategic Mandate, Field Nomination & Q&A"** with three asks: nominate a strategic asset, designate a technical liaison, schedule a Discovery Workshop. `LOCKED_SLIDES.md:369–371` marks it **RETIRED**, claiming consolidation into Stage 10 — but **only "Nominate initial domain leads and critical workflows" survived**, as a phase bullet. The liaison and the workshop are gone entirely. Restore all three as a closing slide. **An executive deck that ends on "100 Days to Proof of Value" without asking for anything ends on a description, not a decision.** *~60 min* →
- [ ] 🟠 **Decide what the single decision is.** Three asks is two too many if they are not ranked. Recommendation: lead with **nominate one strategic asset**, since the other two follow from it automatically. *Decision needed* →

## 3.2 The headline number

- [ ] 🔴 **The ₹11,159 Cr board total appears on no slide.** It exists only at `LOCKED_SLIDES.md:272`. The deck's own aggregate exposure figure is invisible to the audience. Either put it on screen (with its derivation) or stop maintaining it. *~30 min* →
- [ ] 🟠 **There is no root metric.** Mining's deck roots every claim on **AISC per tonne** with six MECE branches (`docs/personas-and-value-tree.md`), which is why its numbers feel like one system rather than a list. This deck has no equivalent spine. Candidates: **opex per barrel**, **refinery GM per operating day**, **NPT as % of rig days**. Pick one, then show each agent laddering up to it. **This is the highest-leverage narrative change available.** *~half a day* →

## 3.3 Slide 01 — port the stronger opener

- [ ] 🟠 **The alternate pitch's slide 1 is better than the deck's current slide 1.** `alternate_pitch_Oil_&_Gas_Slides_WIP.pdf` p2: **"The ₹30,000 Crore Tip of the Iceberg"** — six leaks, each with a named source (ONGC Annual Report FY25–26; IOCL + Solomon Associates; SPE; BCG "The AI-First Refiner"; IEA Methane Tracker; CAG Report) plus a methodology footnote. Port the structure and the sourcing discipline. *~2 hrs* →
- [ ] 🟠 **Adopt the framing "India's Energy _Security_"** rather than "Energy Giants." Security is a national-interest frame an NOC board is accountable for; "giants" is a compliment. *~10 min* →

> [!WARNING]
> That PDF is marked **Proprietary & Confidential on 11 pages** and is Google Cloud branded. The remote is a **personal** GitHub repo. It is deliberately untracked. Port the *ideas and public sources*; do not commit the file, and do not lift Google Cloud branded stat pages.

## 3.4 The crew-change slide (new `stage-02b`)

- [ ] 🟠 **Verify the 27% figure** — duplicate of item 2.1.4, listed here because it is a story dependency, not just a data one. →
- [ ] 🟡 **Confirm the risk-curve rule holds through all future edits:** the experience curve carries numbers; **the risk curve never does.** It is an argument, not a measurement, and the moment it carries a number it becomes challengeable. The rule is documented in `alternate_story.md` §5 and in the `setCrewState()` comment. *~5 min to re-verify after any edit* →
- [ ] 🟡 **Hold the Jenga callback.** *"You don't notice a block leaving until the tower wobbles"* is deliberately withheld from `stage-02b` so it can land on slide 05. Do not let it leak forward. *~0 min, just don't break it* →

## 3.5 Pacing

- [ ] 🟡 **Three problem beats before the reveal is one too many.** Slide 01 (capital reality) → 02 (Swiss cheese) → 02b (crew change) all establish problem before the argument turns. It works, but it spends time you need at the end for the ask. Buy time back at **slides 04 and 05**, which overlap conceptually (intelligent microservice / Jenga are two metaphors for one idea). *~60 min* →
- [ ] 🟡 **Slide 03's five criteria arrive better motivated now.** With the crew change in front of it, criterion 02 ("without human delay") is the direct answer to the question `stage-02b` leaves open. Consider rewriting criterion 02's copy to make that connection explicit rather than incidental. *~20 min* →

## 3.6 Documentation sync

- [ ] 🟡 **`AGENTIC_PITCH_BIBLE.md` has a "LIVING PITCH BIBLE PROTOCOL"** mandating a sync on every slide change. It has not been synced for the crew-change slide. Either sync it or retire the protocol — an unfollowed protocol is worse than none. *~30 min* →
- [ ] 🟡 **`THE_GOLDEN_PITCH.md`'s 4-step causal chain** does not include the crew change. Update to a 5-step chain or fold the crew change into an existing step. *~20 min* →

---

# Recommended order of attack

The list above is ordered by phase, as requested. If you would rather work by impact-per-minute, this is the sequence:

| # | Item | Phase | Time | Why first |
|---|---|---|---|---|
| 1 | Slide 09 sine-generated ₹ figures | 2.1.1 | 15 min | Largest credibility liability; cheapest fix |
| 2 | MeitY vs `us-central1` | 2.2.6 | 20 min | Directly negates the sovereignty claim to an Indian NOC |
| 3 | `84` vs `71` | 2.2.1 | 10 min | Known-stale value, trivially fixed |
| 4 | `page_06.html` `file://` path | 1.1.1 | 10 min | Breaks on the presenting laptop |
| 5 | `index.html` → `page_03.html` 404 | 1.1.2 | 5 min | Regression we introduced |
| 6 | Type-scale singletons | 1.3.1 | 15 min | Zero risk, immediately visible |
| 7 | Restore the ask | 3.1.1 | 60 min | The deck currently does not close |
| 8 | `index.html` hardcoded colours | 1.2.1 | 60 min | Unblocks light theme on the main entry point |

---

# Open decisions needing your input

1. **The real Gemini Enterprise workspace URL** — blocking 3 files and every persona CTA chip. *(asked repeatedly; still outstanding)*
2. **Persona packs: permanent hypotheses, or a path to "validated"?** — affects framing in ~20 files.
3. **The root metric** — opex/bbl, refinery GM/operating day, or NPT % of rig days?
4. **Compiled shells** — compile stages 06–10 in, or declare the standalone pages the presentation surface?
5. **The confidential PDF** — stays untracked? *(current default: yes)*
6. **The ask** — one decision or three?
