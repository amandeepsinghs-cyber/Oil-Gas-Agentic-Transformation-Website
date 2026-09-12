# Petrophysicist — Persona Reference

**Purpose:** the working reference for building agents around this desk.
Describes what the person does, what belongs to them, where agents earn their
place, and where they must not go.

**Status:** researched against industry sources. **Not yet validated by a
practising petrophysicist** — see §9 for what needs confirming.

**Follows `PERSONA_TEMPLATE.md`.** Companion docs: `Exploration_Geologist_Persona.md`,
`Production_Engineer_Persona.md`.

---

## 1 · The role

> The petrophysicist turns raw well measurements into the numbers everyone
> downstream depends on: how much rock there is, how much of it holds
> hydrocarbons, and whether it will flow.

They sit inside the subsurface team, between the logging contractor who acquires
the data and the geologists and reservoir engineers who consume the
interpretation. SPWLA describes the discipline as deliberately boundary-blurring
— physics, chemistry, geology, geophysics and engineering — because the job is to
weld variable and incomplete data into one interpretable dataset.

**Their outputs are load-bearing.** Porosity, saturation and net pay feed
volumetrics, which feed booked reserves, which feed company valuation. A
saturation number that is wrong by fifteen points moves reserves materially.

### What they own
- Whether the acquired data is fit to interpret
- Porosity, water saturation, permeability, net pay
- The petrophysical model applied consistently across a field
- Defending those numbers in reserves review and audit

### What they do not own — keep these boundaries clean
| Not theirs | Whose |
|---|---|
| Running the logging tools | Logging contractor / field engineer |
| Real-time formation tops while drilling | Wellsite geologist / mudlogger |
| Seismic interpretation | Geophysicist |
| Where to drill | Geologist / development team |
| Reserves booking decisions | Reservoir engineer, using petrophysical inputs |
| Well design | Drilling engineer |

In smaller operators one person may cover petrophysics *and* development geology,
so these boundaries blur in practice. Assume they hold unless told otherwise.

---

### Variants

**This matters more than it appears.** The two do genuinely different jobs and
agents that help one barely touch the other.

| | **Operations petrophysicist** | **Development petrophysicist** |
|---|---|---|
| Rhythm | Rig on the clock, hours matter | Project cycles, weeks matter |
| Core work | Plan and execute logging, witness jobs, quick-look analysis, re-run decisions | Model building, multi-well consistency, integration, reserves support |
| Pressure | Time | Reading and reconciliation volume |
| Data | Live, arriving now | Decades of accumulated legacy |
| Agent fit | Real-time assistance, decision support under time pressure | Evidence assembly, consistency, packaging |

**Everything built so far targets the development petrophysicist.** Say which one
you are addressing. A room containing both will otherwise only half-recognise
itself.

---

## 2 · Sources

| Source | What it gave |
|---|---|
| **SPWLA, *Petrophysics Skill Set Guidelines* v2.0, Dec 2022** | The authoritative task breakdown. The profession's own competency standard, eleven sections, maintained by the SPWLA Education SIG. Primary source for §4. |
| Operator job specifications (Altea Energy; SEG careers board) | Contract and contractor management, operations duties, stakeholder reporting — things the academic framing omits |
| SPE *Journal of Petroleum Technology*, "Discover a Career: Petrophysics" | How the outputs are consumed by reservoir and production engineering |
| Industry commentary on the evolving role | The operations/development split, and how the role has shifted with computing power |

Where sources disagree or are silent — particularly on **how time is actually
distributed** — that is flagged rather than filled in.

---

## 3 · Actions

Ordered by workflow stage. Bucket: **B1** ours · **B2** interpretation software
(Techlog/Petrel/IP) · **B3** operations and vendor systems.

---

### PLAN — before any data exists

#### A1 · Design the data acquisition programme · **B1**
**Today.** Decide which logs to run, over which intervals, where to core, what to
sample — against objectives, hole conditions and budget. SPWLA frames this as
value-of-information analysis: optimise acquisition to maximise VOI across all
disciplines, including potential future applications.

**Inputs** well objectives, offset well programmes and outcomes, hole plan, budget,
tool availability
**Outputs** logging programme, coring points, sampling plan
**Hands to** drilling engineer, logging contractor, well proposal
**Failure mode** the wrong suite is run. Every downstream interpretation is
constrained for the life of the well, and **you cannot go back**.

> Highest-leverage decision on this list, and irreversible.

#### A2 · Manage logging contracts and contractors · **B1**
**Today.** Scope of work, technical evaluation of service providers, contract
renewal support, cost-benefit assessment of tool strings. Named explicitly in
operator job specifications as a focal-point responsibility.

**Failure mode** paying for tools that do not answer the question, or omitting one
that would have.

#### A3 · Support the well proposal · **B1/2**
**Today.** Petrophysical input to well design — what the well must deliver, what
hole conditions the evaluation requires, where deviation will compromise the
measurement.

---

### ACQUIRE — while the well is live

#### A4 · Supervise acquisition and provide real-time analysis · **B3 + B1**
**Today.** Witness logging, monitor data quality as it arrives, quick-look
interpretation, decide re-runs, support geosteering and TD calls.

**Decompose this — it contains two separable things:**

| Layer | Bucket |
|---|---|
| Operating the tools, running the string, conveyance | **B3** |
| **Deciding whether the log is acceptable or must be re-run** | **B1 — evidence assembly** |

**Failure mode** a bad run accepted on the rig. Re-entry costs orders of magnitude
more than a re-run while the tools are still in the hole.

**Reversibility.** The window closes when the tools come out. This is the most
time-bound irreversible decision on the desk.

> Marking the whole action B3 and moving on — which an earlier draft of this
> document did — loses one of the highest-stakes agent opportunities here.
> See A4b in §5.

---

### PREPARE — where the week actually goes

#### A5 · Ingest and standardise curves · **B1** ★
**Today.** Mixed vendors, decades and conventions. Sixty spellings of the same
curve, three unit systems, curves that cannot be confidently classified. Renamed
by hand, well by well.

**Inputs** LAS files from multiple vendors and vintages
**Outputs** standardised curve set plus a mapping report
**Failure mode** a medium resistivity silently treated as deep. Invisible until it
matters.

#### A6 · Depth match and splice runs into a composite · **B1** ★
**Today.** A well is logged in several runs. Each carries its own depth error from
cable stretch and tool sticking, so the same rock sits at different recorded
depths. Someone finds and corrects that, then joins the runs.

**Inputs** multiple runs with overlapping intervals
**Outputs** one continuous composite log set
**Time** 2–4 hours per well *(unvalidated — see §9)*
**Failure mode** a two-foot splice error propagates silently into core-log ties,
fluid contacts and perforation intervals. Discovered years later, if at all.

> **Built and verified.** See `BRIEF.md`.

#### A7 · Quality-control raw data and apply environmental corrections · **B1** ★
**Today.** Bad hole, washouts, calibration drift, tool sticking. Caught by eye,
well by well, when there is time. SPWLA names tension measurement specifically as
a QC input, which is exactly the kind of check that gets skipped under pressure.

**Failure mode** interpreting a washout as low density. Porosity overstated across
an interval.

#### A8 · Normalise curves across wells and vintages · **B1** ★
**Today.** Different tool generations and service companies read differently on the
same rock. Someone has to make the field internally consistent — or accept that
Vsh means something different in each well.

**Failure mode** field-wide inconsistency nobody can see without reading every well.

---

### CALIBRATE — anchor the logs to physical truth

#### A9 · Design the coring programme and integrate core data · **B1/2**
**Today.** SPWLA 8(a) specifies *objective-driven* coring design — deciding what to
core and why, not just using core once it exists. Then routine core analysis
(porosity, grain density, permeability, saturation) and special core analysis
(capillary pressure, wettability, relative permeability) to calibrate the
log-derived answers.

**Core is truth, logs are inference.** Weak calibration means everything
downstream is confidently wrong.

#### A10 · Integrate formation pressure and fluid sampling · **B1/2**
**Today.** Formation tester data: pressure gradients for fluid typing, contacts,
mobility, sample contamination assessment.

**Failure mode** a fluid contact placed wrong. Directly changes in-place volumes.

---

### INTERPRET — where the numbers get their authority

#### A11 · Determine lithology and shale volume · **B2**
Mineralogy, clay type, Vsh from GR, spectroscopy or neutron-density. Picking the
shale baseline is a judgment about what "clean" means in this formation.

#### A12 · Compute porosity, saturation and permeability · **B2**
Including **model selection**, which is the part outsiders miss. Archie applies to
clean formations. Shaly sands need Waxman-Smits, Simandoux, dual water or
Indonesian — and choosing among them is a judgment about clay distribution.
Archie's inputs (a, m, n, Rw) come from core, Pickett plots, produced water and
experience, not from the log.

> Move m from 1.8 to 2.1 and saturation moves ten points. Ten points of
> saturation moves booked reserves.

#### A13 · Rock typing and saturation-height modelling · **B2**
Petrophysical rock types, capillary pressure models, saturation distribution away
from the wellbore. Feeds the static model directly.

#### A14 · Pick zones, cutoffs and net pay · **B2**
Cutoff definition and its impact on net reservoir and net pay thickness. SPWLA
treats the *absence* of cutoffs as an equally consequential choice.

---

### ASSURE AND DELIVER

#### A15 · Quantify and manage uncertainty · **B1/2**
**Today.** Deterministic vs probabilistic evaluation; sensitivity of in-place
volumes to petrophysical inputs; uncertainty characterised by source, amount and
quality of information. Often done informally, or not at all, because it takes
time nobody has.

#### A16 · Hand off to static and dynamic modelling · **B1** ★
**Today.** Deliver properties with uncertainty ranges to geology and reservoir
engineering, in the form each needs. Email friction, format mismatches,
re-requests.

#### A17 · Support resource and reserves assessment · **B1**
**Today.** Net pay, porosity and saturation into PIIP volumetrics. Then defending
those numbers in reserves review and audit — reconstructing, months later, why a
parameter was chosen.

**Failure mode** cannot reconstruct the basis. Auditor discounts the number.

#### A18 · Audit consistency across the full well set · **B1** ★
**Today.** Decades of wells interpreted by different people using different
parameters. Nobody can see the drift, because seeing it means reading all of them.

#### A19 · Document, report and present · **B1** ★
**Today.** Well analysis reports, technical notes, presentations to
multidisciplinary teams. Roughly 40% boilerplate, 30% facts that exist in
databases, 30% genuine analysis — and all of it written from scratch.

---

### SURVEIL — after first production

#### A20 · Monitor the producing reservoir · **B1/3**
Saturation monitoring, fluid contact movement, bypassed hydrocarbon, sweep
efficiency, production logging. A whole SPWLA section.

#### A21 · Evaluate well integrity · **B1/3**
Cement bond evaluation, casing inspection, corrosion logging.

> A20 and A21 need live data and operations systems. **Out of scope for now.**
> Scope the persona as *development* petrophysicist and say so, rather than
> letting the omission look like an oversight.

---

## 4 · Which agents, and why

Selection rule, applied consistently: **automate the evidence assembly, never the
judgment.**

### Built
| Actions | Agent | State |
|---|---|---|
| A5, A6 | **Splice Agent** — standardise, depth match, splice | Verified on real Kansas data. −1.829 m recovered against −1.800 true. Composite reproduces the original at 0.99+ correlation. |

> **Note on A5.** Curve standardisation is *inside* the Splice Agent as a
> preprocessing step, but it is **independently a larger use case at estate
> scope** — see below. Do not let it stay folded.

### Strong candidates
| Action | Agent | What it does | Human keeps | Diff |
|---|---|---|---|---|
| **A5** *(estate scope)* | **Estate Standardisation Agent** | Maps curve names, units and conventions across an operator's **entire well stock** — decades, multiple service companies, inconsistent naming. Produces one coherent curve dictionary plus an exception list. **This is a programme, not a preprocessing step.** | The dictionary decisions; what an unresolvable curve actually is | 5 |
| **A4b** *(time-bound)* | **Re-run Decision Agent** | While the tools are still downhole: checks the acquired log against acceptance criteria, the offset wells, and what the programme was for. Recommends accept or re-run, with the evidence. | The call. It is theirs and the rig is on the clock | 6 |
| **A7** | **Acquisition QC Agent** | Checks calibration, completeness, bad hole, tool sticking against tool spec and offset character, per well as it lands | The tolerance, the borderline intervals | 4 |
| **A1** | Acquisition Programme Agent | Assembles what offset wells actually delivered against what was planned, what each tool cost, what similar objectives required | The programme decision | 6 |
| **A19** | Report Assembly Agent | Fills the template from systems of record, drafts narrative from precedent, **marks every gap** | Analysis, conclusions, recommendations | 5 |
| **A7, A18** | Fleet Readiness Agent | Triages the whole well set — clean, needs a human, unrecoverable | Fitness-for-purpose criteria, the flagged wells | 4 |
| **A8** | Field Consistency Agent | Surfaces where parameters and normalisation diverge across wells; proposes a harmonised set with outliers explained | Whether to harmonise, and how | 5 |
| **A15** | Sensitivity Agent | Runs the plausible parameter range, returns the uncertainty envelope | Which parameters are plausible; the answer | 5 |
| **A16** | Delivery Agent | Packages outputs into the form each consumer needs, with uncertainty attached | What is ready to hand over | 4 |

### Deliberately not automated

| Actions | Why |
|---|---|
| **A11–A14** | The *computation* — lithology, porosity, saturation, permeability, rock typing, cutoffs. Mature, validated, audit-trailed in the customer's system of record. Rebuilding it invites a direct comparison you lose. **But see the parameter-selection note below — the choice of inputs is a different matter.** |
| **A4, A20, A21** | Live operations and surveillance. Bucket 3 — different systems, different sale. |
| **A9, A10** partly | Coring and pressure integration are judgment-heavy. An agent can assemble the data; the calibration decision stays human. |

**A2 and A3** are real but low-frequency. Skip for now; not worth an agent each.

### The parameter-selection opening — worth adding to the shortlist

A11–A14 look un-automatable, but each is three things stacked and only the middle
belongs to the incumbent software:

| Layer | Example here | Who |
|---|---|---|
| Choosing the inputs | Which wet zone gives Rw · which shale baseline · which matrix density · Archie vs Waxman-Smits | **Evidence assembly — ours** |
| The computation | Archie, Vsh, density porosity | The system of record |
| Accepting the answer | Signing the number | The petrophysicist |

**Candidate agent — Field Parameter Evidence Agent.**

Scope it by *where the evidence comes from*. A Pickett plot already exists in the
monolith, so do not rebuild one. What the **field already concluded** about these
parameters does not exist anywhere — it is spread across projects, documents and
decades.

For a given interval, the agent brings back:
- every Rw value used across the field's wells, with the basis recorded for each
- the regional water gradient and where this interval sits against it
- m and n from whatever core exists, and which wells they were measured on
- what the last end-of-well reports concluded about water in this formation
- where wells in the same field used **different** values, and why

The petrophysicist picks. **Techlog computes Sw.** Difficulty ~6.

**The line:** *we don't compute your saturation — we bring you what the field
already knows about the numbers going into it.*

---

### What it's worth — across the desk

Stated as mechanism, not as a percentage. Invented ROI figures are discounted
instantly by a technical audience.

### Direct — measurable, small
| Agent | Saves | Frequency |
|---|---|---|
| Splice | 2–4 hrs *(unvalidated)* | Every well with multiple runs |
| Report | days to weeks of first-draft time | Every well, every reserves cycle |
| Fleet audit | the triage nobody does today | Per field, per campaign |

### Indirect — larger, harder to attribute
- **Backlog release.** Most teams hold years of un-interpreted wells and no
  capacity to touch them. Agents do not shrink the team; they let the team reach
  the queue.
- **Consistency at field scale.** Multi-well drift is currently invisible because
  detecting it means reading everything. An agent makes it visible.
- **Defensible numbers.** A reserves auditor's question becomes a query rather
  than an archaeology project.
- **Retiring expertise.** SPWLA names "The Great Crew Change" — waves of senior
  petrophysicists retiring — as the motivation for their guidelines. Encoding
  preparation work is a partial hedge.

### The ladder — walk it, never jump it
```
2–4 hours per well of specialist time
      ↓
the backlog of un-interpreted wells finally gets touched
      ↓
decisions rest on the full evidence base, not the readable subset
      ↓
in-place volumes rest on consistent, calibrated, traceable inputs
      ↓
capital allocated against better-founded numbers
```

**Do not claim** an agent improves saturation accuracy. **Do claim** the
petrophysicist gets the hours back to do the work that does.

---

## 5 · Shared with other personas

| Action here | Also on | As |
|---|---|---|
| A19 Document & report | Geologist A19 prospect pack · Production Engineer A23 variance explanation | **Report assembly — same template, provenance and gap-marking. Build once.** |
| A1 Acquisition programme design | Geologist A14 analogue screening | Both ask *what did comparable wells actually deliver?* Shared retrieval over the same corpus. |
| A18 Fleet readiness audit | Production Engineer A9 model freshness audit | **Estate-health audit — same shape, different assets.** Tools work one item at a time; the pain is estate-scale. |
| A8 Field consistency | Geologist Risking Calibration · Production Engineer A24 allocation consistency | **Consistency audits across people.** Appears on all three desks. |
| A17 Reserves defence | Production Engineer A6 discrepancy investigation | Reconstructing why a number is what it is, across systems. |

**Five of this desk's agents share machinery with another persona.** That is the
honest answer to how the programme scales.

---

## 6 · What would change these answers

Research establishes what the role *is*. It does not establish what these people
spend their week on, and the pitch rests on that.

| # | Question | Why it matters |
|---|---|---|
| 1 | **Where does the time actually go?** Is A5–A8 really the bulk of the week? | The central claim of the pitch. Plausible and widely repeated, but unmeasured. |
| 2 | **Operations or development petrophysicist** — which are we addressing? | Changes the persona and the agent set entirely |
| 3 | Is A1 acquisition design done properly, or copied from the last well? | If copied, that agent opportunity is far larger than it looks |
| 4 | Splice thresholds — 15 m minimum overlap, 0.90/0.80/0.65 confidence bands | Currently my numbers. *"A petrophysicist set these"* is worth more in the room than anything else about the build. |
| 5 | Is "correlate on GR, apply the shift to all curves in the run" how they work? | Core assumption of the built agent |
| 6 | How often does a well have 3+ runs? | Determines whether chained splicing matters or is an edge case |
| 7 | What does a report actually look like, and how long does the first draft take? | Sizes agent 2 |

**Question 4 is the highest-value hour you can spend.** Being able to say a
practising petrophysicist set the thresholds changes how a technical room hears
everything else.

---

## 7 · Research notes

### Audit note — what an earlier draft missed

This document was first written **without** the persona template, and two strong
candidates were lost as a result. Both failures are now guarded against in the
template itself.

| What was missed | Why | Now guarded by |
|---|---|---|
| **Estate-scale standardisation** | Folded into the Splice Agent as a preprocessing step, so never scored on its own. Its pain is at *estate* scope — forty years, five service companies — not well scope. | Template §5 scope column · §9 anti-folding rule |
| **The re-run decision** | The whole of A4 was marked B3 and dismissed. Operating the tools is B3; deciding whether to re-run is evidence assembly under time pressure, and it is the most time-bound irreversible call on the desk. | Template §6 Bucket 3 decomposition rule |

**The general lesson:** assess each action at **its own largest scope**, and score
every action rather than only the promising-looking ones. Silent omissions are
invisible by definition.

### Non-negotiables for agents on this desk

Non-negotiables. These come from the consequences of the work, not from
preference.

- **Refuse when the data will not support an answer.** An agent that confidently
  splices a bad well is worse than no agent.
- **Cite everything.** Every number traces to a source the petrophysicist can open.
- **Never invent a fact.** Facts come from tool calls; the model writes prose only.
- **Report what it changed.** Normalisation and corrections alter data values.
  Always stated, always in provenance.
- **Save a copy.** Originals untouched. On wells carrying this much capital,
  nothing is overwritten.
- **State the policy it applied.** Which anchor run, which cutoff, which
  reference curve — because those are the petrophysicist's choices, not the
  agent's.
- **One operation per tool.** Narrow scope, auditable, low latency.

### Build sequence

| Order | Agent | Why this order |
|---|---|---|
| 1 | **Splice** *(built)* | Hardest — real signal processing. Proves the deployment pattern under load. |
| 2 | **Report Assembly** | Reusable across all three personas. Unlocks the fastest scaling. |
| 3 | **Fleet Readiness** | Reuses the splice engine. Cheap. |
| 4 | **Field Consistency** | Reuses standardisation. |
| 5 | **Acquisition Programme** | Highest business leverage, hardest to demo — needs a document corpus. |
| 6 | **Sensitivity** | Only if the petrophysics audience asks for it. |

Agents 2 and 5 share the document-assembly pattern. Agents 3 and 4 share the
structured-data pattern. **Three patterns, six agents.**
