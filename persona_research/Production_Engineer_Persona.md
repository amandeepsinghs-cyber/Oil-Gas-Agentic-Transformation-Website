# Production Engineer — Persona Research

**Purpose:** which agents to build, why, what was broken before, how it's fixed,
what it's worth.

**Status:** desk research. Not practitioner-reviewed.

---

## ⚠ Headline finding, read this first

**This persona is the most heavily tooled of the three, by a wide margin.**

Petrophysics has Techlog. Exploration has Petrel. Production engineering has
Quorum, Peloton ProdView, Weatherford ForeSite, XSPOC, CygNet, PI, WellView,
Petex IPM (PROSPER/GAP/MBAL), PIPESIM and Spotfire — **a mature vendor stack that
already covers surveillance, exception detection, allocation, deferment coding
and regulatory reporting.**

Applying the template's test 3 — *does the monolith already do this today?* —
honestly, **most of my earlier agent candidates for this persona fail.**

| Earlier candidate | Verdict |
|---|---|
| Deferment narrative | ❌ Quorum categorises downtime, deferments and losses using company-defined down codes, with breakdowns for variance reporting and regulatory submission. **Already done.** |
| Well decline diagnosis / exception detection | ❌ Exception-based surveillance is the core of ForeSite, XSPOC and the Artificial Lift Surveillance Tool patents. **Largely done.** |
| Well test validation | ❌ ProdView does exception-based validation and reconciliation. **Already done.** |

**This is a useful result, not a failure.** It is exactly what the framework is
for, and saying it out loud is worth more in a room than another list of
opportunities: *we looked at production engineering and most of it is already
covered by your existing stack. Here are the four things that aren't.*

---

## 1 · The role

**Persona:** Production Engineer · also *Production Technologist*,
*Production & Operations Engineer* · **Segment:** Upstream operations

### One line
> Keeps existing wells producing at their best sustainable rate — and when one
> falls off, works out why and what it is worth doing about it.

### Why their output matters
This is the revenue-bearing persona. Exploration and petrophysics inform bets;
production engineering protects cash flow that already exists. Deferment is money
lost today.

### They do NOT own

| Not theirs | Whose |
|---|---|
| The reservoir model and recovery strategy | Reservoir engineer |
| Field rounds, physical intervention, valve operation | Field operator / pumper |
| Facilities design | Facilities engineer |
| Workover execution | Well services |
| Log interpretation | Petrophysicist |
| Production accounting sign-off | Production accounting / finance |

### Variants

| | **Field / operations PE** | **Optimisation / technologist PE** |
|---|---|---|
| Rhythm | Daily, exception-driven | Project, per-well or per-field |
| Core work | Morning surveillance, exceptions, field liaison | Nodal analysis, lift design, intervention cases |
| Pressure | Time and volume of wells | Analytical depth |

**We address both**, because the four surviving agents span them.

---

## 2 · Sources

| Source | What it gave |
|---|---|
| SPE *Production and Well Operations* discipline taxonomy | The scope: artificial lift, well operations and optimisation, surveillance and monitoring, production chemistry, intervention, decommissioning |
| SPE training syllabi (ESP surveillance; gas-lift full-field optimisation) | Real-time ESP data streams are hard to manage with traditional methods; failure prediction, virtual flow rate, wellhead integrity, corrosion as live use cases |
| Vendor documentation — Quorum, Peloton ProdView | **What is already automated**: allocation, deferment coding, exception validation, variance-to-plan, audit trails, regulatory submission |
| US Patents 9,157,308 / 9,273,544 / 12,024,987 (artificial lift surveillance) | Failure prediction, exception prioritisation, hierarchical well ranking, edge closed-loop control — all patented and productised |
| ScienceDirect, back-allocation methodology (2024) | **The key gap — see §5** |
| iFactory MPFM case study (2026) | **A documented incident — see §5** |
| Practitioner-account day-in-the-life (2026) | The actual toolchain; nodal analysis workflow; gas-lift allocation "solved in part by feel" |

**Evidence quality: good.** Better than the geologist. Vendor documentation is
unusually useful here because it states plainly what is already solved.

---

## 3 · Actions

**Bucket 2 here means the production software stack**, not Techlog/Petrel.

| # | Action | Scope | Bucket | Freq | Friction | Agent? |
|---|---|---|---|---|---|---|
| **DAILY SURVEILLANCE** |
| A1 | Morning review of production against target | field | **B2** | daily | repetition | ❌ tooled |
| A2 | Triage exceptions and alarms | field | **B2** | daily | volume | ❌ tooled |
| A3 | Validate and reconcile well test data | well | **B2** | per test | consistency | ❌ tooled |
| A4 | Back-allocate volumes to wells | field | **B2** | daily | repetition | ❌ tooled |
| A5 | Code downtime and deferment | field | **B2** | daily | repetition | ❌ tooled |
| A6 | **Investigate an allocation discrepancy** | field | **B1** | per audit | assembly | ✔✔ |
| **WELL PERFORMANCE** |
| A7 | Diagnose an underperforming well | well | **B1/2** | weekly | assembly | ⚠ partly |
| A8 | Nodal analysis — IPR/VLP, find the operating point | well | **B2** | per well | judgment | ❌ Petex/PIPESIM |
| A9 | **Tune well models against latest survey and test** | field | **B1** | continuous | traceability | ✔✔ |
| A10 | Decline curve analysis and forecasting | well | **B2** | per cycle | repetition | ❌ tooled |
| **ARTIFICIAL LIFT** |
| A11 | ESP surveillance and run-life management | well | **B3/2** | continuous | volume | ❌ tooled |
| A12 | Rod pump dynamometer card interpretation | well | **B2** | continuous | repetition | ❌ tooled |
| A13 | Gas-lift allocation across competing wells | field | **B2** | daily | judgment | ❌ GAP |
| A14 | Lift system selection and redesign | well | **B1/2** | per well | assembly | ⚠ |
| **FLOW ASSURANCE & INTEGRITY** |
| A15 | Scale, wax, hydrate, sand, corrosion management | well | **B1/2** | continuous | assembly | ⚠ |
| A16 | Chemical injection programme | field | **B3** | continuous | physical | ❌ |
| A17 | Well integrity monitoring | well | **B2/3** | continuous | volume | ❌ tooled |
| **INTERVENTION** |
| A18 | Identify and rank intervention candidates | field | **B1/2** | per cycle | consistency | ⚠ |
| A19 | **Build the intervention business case** | estate | **B1** | per job | assembly + recall | ✔✔ |
| A20 | Post-job review — did it deliver? | estate | **B1** | per job | **rarely done** | ✔✔ |
| **PLANNING & REPORTING** |
| A21 | Well test scheduling | field | **B1/2** | per cycle | consistency | ⚠ |
| A22 | Production reporting and regulatory submission | field | **B2** | monthly | repetition | ❌ tooled |
| A23 | Variance-to-plan explanation for management | field | **B1/2** | monthly | traceability | ⚠ |
| A24 | **Audit allocation consistency across the field** | field | **B1** | never | consistency | ✔✔ |

### Coverage check
- Before work arrives → A21 well test scheduling ✔
- While live → A1–A5, A11–A13 ✔ *(and almost all of it tooled)*
- Core craft → A7–A9, A14–A19 ✔
- After delivery → A20 post-job review ✔
- Admin → A22 ✔
- Handoffs → A23 ✔

### Trap checks
- **B3 decomposition.** A11, A16, A17 contain live control (B3) and decision
  support. The decision support is already in ForeSite and XSPOC, so unlike the
  petrophysicist's re-run decision, **there is no stranded B1 layer here.**
- **Scope.** A19, A20, A24 bite at *field* and *estate* scope. That is why they
  survive — the tools work well-by-well and day-by-day.

---

## 4 · Which agents, and why

**Only four survive the test.** Each fails test 3 for the vendor stack — i.e. the
stack does *not* already do it.

| Agent | Actions | Scope | Diff | Tier | Priority |
|---|---|---|---|---|---|
| Allocation Discrepancy Investigator | A6 | field | 6 | Low-code | **P1** |
| Model Freshness Audit | A9 | field | 5 | Low-code | **P1** |
| Intervention Outcome Evidence | A19, A20 | estate | 5 | Low-code | **P2** |
| Allocation Consistency Audit | A24 | field | 5 | Low-code | P3 |

---

#### Allocation Discrepancy Investigator · A6 · scope: field

**The problem today**
An auditor or partner flags a mismatch between reported and allocated volumes.
Finding the cause means working backwards through meter calibration records,
well test history, PVT and model assumptions, maintenance logs and prior period
adjustments — **across systems that each hold one piece.**

**The documented case.** A Permian operator was flagged on a 4.2% discrepancy
between reported and allocated volumes. **The investigation took three weeks** and
the cause turned out to be a PVT model that had not been updated since the
original completion. *(2026 vendor case study — vendor-sourced, so treat the
framing with appropriate scepticism, but the failure shape is plausible and
specific.)*

**What they settle for** Whoever knows the field best goes looking, in whatever
order occurs to them.

**What goes wrong, loud or silent** **Loud when it surfaces, silent until then.**
The discrepancy accumulates quietly across reporting periods before anyone
queries it.

**Reversible?** Financially yes, via prior period adjustment — but royalty and
partner exposure is real.

**What the agent does** Given a flagged discrepancy: assembles the full evidence
chain — meter calibration dates, well test history and validity, model parameters
and when they last changed, maintenance and intervention events in the period,
prior adjustments — and returns ranked candidate causes, each cited.

**What the human keeps** The conclusion and the adjustment.

**What it's worth** Three weeks → hours `?`, per incident. Plus exposure in
royalty and partner audit.

**Why the stack doesn't do it** ProdView and Quorum *detect* the exception well.
Neither reaches across meter maintenance records, model change history and
intervention logs to explain it. **Detection is tooled; archaeology is not.**

**Evidence** — one documented case; frequency `needs a practitioner`.

**Best demo or business case?** Business case. Needs real multi-system data.

---

#### Model Freshness Audit · A9 · scope: field

**The problem today**
Nodal analysis is only trustworthy if the model is tuned against the latest
flowing survey and well test — practitioners say so explicitly. But **nobody
audits which models are stale.** The PVT model in the case above had not been
updated since completion, and nobody noticed until an auditor did.

**What they settle for** Models get tuned when someone happens to work that well.
Wells nobody has looked at recently carry the oldest assumptions — and they are
the wells least likely to be looked at.

**What goes wrong** **Silent and self-reinforcing.** Decisions get made on stale
models, and the staleness is invisible because checking means opening every model.

**What the agent does** Across the field: for every well, when was the model last
tuned, against which test, how old is that test, how far has actual performance
drifted from model prediction since. Returns a ranked staleness worklist.

**What the human keeps** Which models to re-tune, and the tuning.

**What it's worth** Not hours saved — **a class of silent error made visible.**
Same shape as the petrophysicist's fleet audit: the pain is field-scale and the
tools are well-scale.

**Why the stack doesn't do it** PROSPER, GAP and PIPESIM hold and run the models
one at a time. They do not report on the health of the model estate.

**Evidence** — model tuning requirement is well attested; *that staleness goes
unaudited* is `inferred` from the PVT case. **Needs a practitioner.**

**Best demo or business case?** **Best demo.** A single screen ranking every
well's model by staleness and drift is immediately legible.

---

#### Intervention Outcome Evidence · A19, A20 · scope: estate

**The problem today**
A workover or stimulation is proposed. The business case rests on expected uplift
— drawn from vendor claims, analogue jobs someone remembers, and a spreadsheet.
Afterwards, **the post-job review is the first thing dropped.**

**What they settle for** Expected uplift from the vendor's number or a remembered
job. Actual outcome recorded in an operational system but never fed back into the
next case.

**What goes wrong** **Silent and repeating.** The same over-optimistic uplift
assumption gets reused because nobody closed the loop.

**What the agent does** For a candidate well: assembles what comparable
interventions on comparable wells actually delivered — promised uplift, achieved
uplift, decline since, cost, failures — from job records and production history.
Post-job, records the outcome against the promise.

**What the human keeps** The candidate, the economics, the decision.

**What it's worth** Better-founded capital allocation on OPEX spend. The pattern
is identical to the geologist's look-back and calibration agents — **promised vs
delivered, measured over history.**

**Why the stack doesn't do it** WellView holds job records; ProdView holds
production. Neither joins *what was promised* to *what happened*, across jobs,
over years.

---

#### Allocation Consistency Audit · A24 · scope: field

**The problem today**
The back-allocation literature is blunt about this: **it is common for engineers
to apply their own criteria in different sectors of a field, so allocation
factors end up dependent on the responsible engineer.** One paper cites
automation specifically as a way to eliminate that bias by standardising method.

**What they settle for** Each engineer's own approach. It works locally; it does
not reconcile across the field.

**What goes wrong** **Silent.** Volumes are internally consistent per sector and
inconsistent field-wide. Surfaces in audit, or not at all.

**What the agent does** Audits allocation factors and methods across sectors and
engineers; flags divergence and quantifies the effect on reported volumes.

**What the human keeps** Whether to harmonise, and on what basis.

**What it's worth** Audit defensibility. Lower priority than the others because
some operators already standardise this.

**Evidence** — the engineer-dependency problem is **documented in peer-reviewed
literature**, not inferred. Strong.

---

### Not building, and why

| Actions | Why not |
|---|---|
| A1–A5, A22 — surveillance, exception triage, test validation, allocation, deferment coding, reporting | **Quorum and Peloton already do all of this**, with audit trails and regulatory submission. Building here is repeating the monolith's work. |
| A8, A10, A13 — nodal analysis, decline curves, gas-lift optimisation | Petex IPM, PIPESIM. Mature, trusted, tuned. |
| A11, A12, A17 — ESP surveillance, dynamometer cards, integrity | ForeSite, XSPOC, and a thicket of patents. Heavily productised. |
| A16 — chemical injection | Physical operations. |

**The line to say:** *We looked hard at production engineering. Your existing
stack already covers most of it — and we are not going to rebuild Quorum. What it
doesn't do is explain a discrepancy across systems, or tell you which of your
four hundred well models is stale.*

---

## 5 · Shared with other personas

| Action here | Also on | As |
|---|---|---|
| A9 Model freshness audit | Petrophysicist A18 fleet audit | **Estate-health audit — same shape, different assets.** Tools work one item at a time; the pain is estate-scale. |
| A20 Intervention outcome | Geologist A21 look-back, Geologist Risking Calibration | **Promised vs delivered, measured over history.** Strongest recurring pattern in the programme. |
| A6 Discrepancy investigation | Petrophysicist A17 reserves defence | Reconstructing why a number is what it is, across systems. |
| A24 Allocation consistency | Petrophysicist A8 field consistency, Geologist calibration | **Consistency audits across people.** Appears on all three desks. |

**Every surviving agent here shares machinery with another persona.** None is
standalone — which is itself an argument for the platform.

---

## 6 · What would change these answers

| # | Question | Affects |
|---|---|---|
| 1 | **Which of Quorum / Peloton / ForeSite do they actually run, and which modules?** | Everything. If they run little of it, the tooled actions reopen. |
| 2 | Do allocation discrepancy investigations actually take weeks? | Discrepancy Investigator — the only quantified claim here is from a vendor case study |
| 3 | Is anyone tracking model staleness today? | Model Freshness Audit |
| 4 | Are post-job reviews done? | Intervention Outcome |
| 5 | Is allocation methodology standardised across engineers? | Consistency Audit |
| 6 | Field/operations PE or optimisation PE — who are we pitching to? | Framing |

**Question 1 is decisive and should be asked before any build.** This persona's
agent list is entirely a function of what is already installed. An operator
running full Peloton has four candidates; one running spreadsheets has fifteen.

---

## 7 · Research notes

### Lines worth remembering

> A production engineer on a six-well Permian pad spent **two hours every
> morning** pulling test separator data into a spreadsheet and reconciling
> allocation factors that were already twelve hours stale — while his multiphase
> meters streamed live rates into a historian nobody checked until month-end.
> **The meters were right. The workflow around them was broken.** *(vendor case
> study, 2026)*

> A royalty auditor flagged a **4.2% discrepancy**. The investigation took
> **three weeks**. The cause was a PVT model not updated since the original
> completion.

> From the back-allocation literature: **engineers apply their own criteria in
> different sectors of a field, so allocation factors end up dependent on the
> responsible engineer.**

> Gas-lift allocation across competing wells is a genuine optimisation problem
> that people solve **"in part, by feel."**

### Contradictions between sources
Vendor documentation claims comprehensive coverage; practitioner accounts still
describe manual spreadsheet reconciliation in 2026. Both are probably true —
**coverage exists but is unevenly deployed.** This is why §6 question 1 matters
more than anything else in this document.

### Terms

| Term | Meaning |
|---|---|
| Back-allocation | Splitting a measured total (platform, battery) back to individual wells |
| Deferment | Production not achieved against target, coded by cause |
| IPR / VLP | Inflow performance / vertical lift performance — the two curves in nodal analysis |
| Nodal analysis | Finding the well's operating point where inflow and outflow curves cross |
| MPFM | Multiphase flow meter |
| ESP / PCP | Electric submersible pump / progressive cavity pump |
| Dynamometer card | Rod pump load-vs-position plot used to diagnose pump condition |
| Prior period adjustment | Retrospective correction to reported volumes |
