# Persona Research Template

**Purpose: decide which agents to build for this persona, and be able to defend
the choice.** For each one:

> **which agent · for which persona · what pain and friction it removes ·
> how it removes it · what it's worth**

Nothing in this template exists for any other reason. If a section isn't helping
you answer those five, it shouldn't be here.

**Four rules:**
1. Automate the **assembly**. Never the **judgment**.
2. **Monoliths + Agents.** We don't repeat the monolith's work.
3. **We quantify the unit. They quantify the scale. We never multiply.**
4. **Every claim carries a citation — the actions, the pain, and the gap.**

*Write about the constraint, never the person — this gets read by the people it
describes.*

> [!IMPORTANT]
> **Use the discipline's own vocabulary. Never borrow a word because it sounds
> technical.**
>
> A cross-correlation does **not** converge. It is evaluated at each lag across a
> search window, and the lag with the highest correlation coefficient is selected.
> There is no iteration, no convergence criterion, no residual. Writing
> *"converges in 3.2 seconds"* is two errors in four words — the wrong mechanism,
> and a precision nobody measured.
>
> Borrowed vocabulary is the same failure as an invented number: **unearned
> authority.** A practitioner spots it instantly and stops believing the rest. If
> you don't know the right verb, describe plainly what the thing does.

---

## Who reads this, and in what order you write it

**Three readers, and the document has to serve all of them:**

| Reader | Wants |
|---|---|
| Whoever decides what gets built | §0 headline · §4 summary · §5 |
| Whoever builds it | §4 blocks — especially `Reads` and `Stops at` |
| Whoever presents it | §4 `In one line` · §7 lines worth remembering |

**Work in this order. It is not the order the sections appear in, and the order
matters — two strong agents have already been lost by working out of sequence.**

```
1  Find the competency standard              §2   ← if you skip this you will
2  Inventory the incumbent stack             §2      write a list of fragments
3  List 15–20 actions against the standard   §3
4  Map the standard's sections to your list  §3   ← catches omissions you don't suspect
5  Two lines on every action, no exceptions  §3   ← where missed agents are found
6  Score every action against the three tests §4
7  Write a block for each survivor            §4
8  Cross-check against other roles            §5
9  Collect the open questions                 §6
10 Write §1 and §0 last                       §1, §0
```

§0 is written last because the confidence rollups can't be counted until
everything else exists. §1 is written last because you don't actually understand
the role until you've listed what it does.

---

## 0 · Status

### Headline finding

> **One box. Three lines. What this role actually concluded.**
>
> *e.g. "This persona is the most heavily tooled of the three, by a wide margin.
> Applying test 3 honestly, most of my earlier agent candidates fail. That is a
> useful result, not a failure — 'we looked at production engineering and most of
> it is already covered by your stack, here are the four things that aren't' is
> worth more in a room than another list of opportunities."*

A reader who stops after this box should still have the answer. If the role turned
out thin, say so here — a thin role honestly reported is the most credible thing
this research produces.

### Confidence

| | |
|---|---|
| **Persona** | *canonical name · aliases · persona ID* |
| **Date / author** | |
| **Research status** | desk research / practitioner-reviewed / validated |
| **Competency standard used** | *which one, and is it task-level? If none exists, say so — see §2* |
| **Standard coverage** | *e.g. 9 of 11 standard sections mapped to actions; 2 out of scope, stated* |
| **Actions cited** | *e.g. 17 of 21 actions trace to a standard clause; 4 marked `inferred`* |
| **Pain claims cited** | *e.g. 11 of 24 pain claims carry a source; the rest are marked inference* |
| **Timings sourced** | *e.g. 3 of 6 agents have a per-unit timing from a source; the rest are `?`* |
| **Gap claims cited** | *e.g. 2 of 4 "nobody does this today" claims have literature behind them* |
| **Known gaps** | |

> Two minutes to fill, and it is counted rather than estimated. Without it, a
> reader meets confident agent recommendations and has to hunt for the confidence
> level.

---

## 1 · The role

You can't pick agents without knowing what the person actually does.

**Persona:** · **Segment:**

**One line** — what they turn into what.

**Why their output matters** — what breaks downstream, at what scale.

**They do NOT own:** *(write this first — it stops you scoping agents onto
someone else's job)*

| Not theirs | Whose |
|---|---|

**Variants** — most titles hide two different jobs with different agent needs.
Which one are we addressing?

**Title check** — is this what the industry actually calls them? *"Exploration
Geologist" is predominantly a mining title; in oil and gas the same person is a
Petroleum Geologist or Explorationist.* Getting this wrong in front of a
practitioner signals you researched the wrong industry.

**Map entry** — persona ID, canonical name, and the map's cited source.
**Divergence found** — if this research contradicts the map, say so here: wrong
name · actually two roles · not a distinct role · the standard doesn't exist after
all. **This feeds back and the map gets corrected.**

### Where the work happens

> **Not everyone is at a workstation.** A large part of this industry's workforce
> is in a control room, on a plant, on a rig, in a workshop, or in a vehicle
> between wellsites. Those roles have severe assembly, recall and traceability
> friction — shift handover, finding the right procedure or P&ID or isolation
> certificate, reconstructing what was done to this equipment last time — and they
> are where the retiring-workforce problem bites hardest. **Assuming a desk is how
> you miss them.**

| | |
|---|---|
| **Work setting** | office / workstation · control room · plant or field · rig or offshore · workshop · mobile |
| **What they can reach while working** | two screens · one panel · a tablet in a hazardous area · a radio · a paper pack · nothing, hands full |
| **Shift pattern** | days · 12-hour shifts with handover · rotation (28/28) · call-out |
| **Where the record lives** | system of record · logbook · whiteboard · the person's memory |

This is not colour. It decides what is buildable: an agent a control room operator
can't reach during an upset, or that a field technician can't use in a hazardous
area, is not an agent for them. **Shift handover and rotation are also agent
opportunities in their own right** — context is lost at every boundary, and the
boundary is scheduled.

---

## 2 · Sources

### Anchor on the profession's own competency standard

SPWLA for petrophysics · SPE for reservoir and production · AAPG/SEG for
geoscience · IADC/IOGP for drilling · API and NORSOK for well integrity ·
API/CCPS for process safety · OCIMF/ISGOTT for marine terminals.

**It lists the whole job; job adverts list fragments.**

> **The standard must be workflow-level.** A body that merely exists is not a
> source. What you need is a document that **enumerates the tasks** — SPWLA's
> *Petrophysics Skill Set Guidelines* names eleven sections of task-level
> competency, which is why the petrophysics research is the strongest we have.
>
> **If no task-level standard exists, say so in §0 and here, explicitly.** That
> absence is itself a finding, and it weakens every action in §3. It is what
> happened with AAPG for the geologist: the action list had to be assembled from
> workflow literature, training syllabi, patents and job specs, and the document
> says so in its own §0. **A stated weakness is credible. A hidden one is not.**

### Citation table

Every source gets a key. Every claim downstream cites a key.

| Key | Full citation — body, title, edition/year, section or page | Locator | Type | What it gave |
|---|---|---|---|---|
| `[SPWLA-22]` | SPWLA, *Petrophysics Skill Set Guidelines* v2.0, Dec 2022, §8(a) | URL / DOI · accessed 2026-09-12 | competency standard | objective-driven coring design |

**Types:** competency standard · recommended practice / regulatory · peer-reviewed ·
vendor documentation · vendor case study · patent · job specification ·
practitioner account.

> **Retrievable, or it isn't a citation.** Every row carries a URL, DOI or
> document number, and an access date for anything web-sourced. *"SPWLA
> guidelines"* is a gesture. A reader must be able to open the thing and find the
> clause.
>
> **Recency matters for tooling claims.** What a vendor product covered in 2015 is
> not what it covers now. Any claim about the incumbent stack needs current
> documentation with the version or date stated — an out-of-date coverage claim
> kills an agent that should have lived, or revives one that shouldn't.

### Which source can carry which claim

Getting this wrong is how a document ends up citing a vendor brochure for a
workflow fact.

| Claim | Requires |
|---|---|
| **What the job consists of** | competency standard or recommended practice. Never a job advert alone |
| **What the incumbent stack already does** | current vendor documentation, named to product **and module** |
| **How long something takes, per unit** | practitioner account, case study, or a time split in a job spec. Mark vendor-sourced as such |
| **What they settle for under time pressure** | practitioner account, or explicit inference — it is almost never written down |
| **That something is *not* done today** | peer-reviewed literature, or a documented negative search — see below |
| **What goes wrong when it fails** | incident literature, the standard's own failure discussion, or clearly-flagged inference |

**Vendor sources overstate the problem they sell against, and overstate their own
coverage.** Use them — they are often the only public statement of what is already
solved — cite them as vendor-sourced, and say so in the line where you use them.

### Cite the gaps too

*"Nobody does this today"* is the strongest argument for an agent and the one most
likely to be wrong. It cannot rest on not having found anything. Either:

- **Cite literature that states the gap.** The back-allocation paper saying
  engineers apply their own criteria per sector, so allocation factors depend on
  the responsible engineer, is a *documented* gap. That is worth more than any
  amount of reasoning.
- **Or record the negative search**, so it is checkable:
  > *Searched: SPE OnePetro, vendor documentation for Quorum and Peloton, and the
  > artificial-lift surveillance patent family, for any treatment of model
  > staleness auditing across a well estate. Found none. `negative search, 2026-09`*

A documented negative search is a legitimate finding. An undocumented one is a
guess wearing a lab coat. Anything you cannot do either for goes to §6 as a
practitioner question.

### Where per-unit timings hide

| Source type | What it sounds like |
|---|---|
| Vendor case study | *"the investigation took three weeks"* |
| Day-in-the-life / practitioner account | *"two hours every morning pulling separator data"* |
| Training syllabi and job specs | time splits, "60% of the role is…" |
| Papers describing the workflow | duration of a maturation cycle, a reserves cycle |

### What the incumbent stack already does

Test 3 is unanswerable without this. Name products **and modules**.

| Product | Module | What it already covers | Source | Doc date |
|---|---|---|---|---|

---

## 3 · Actions

**15–20.** Ten always misses the front and back of the role, and that's where
agents usually live.

### Column definitions — use these exact words

**Scope** — where the pain bites. Assess at the **largest** scope that applies.

| | |
|---|---|
| `task` | one operation. Minutes to hours |
| `well` | one wellbore, one prospect, one job, one parcel |
| `field` | one asset and all its wells |
| `estate` | everything the operator holds — all vintages, all history |
| `portfolio` | the commercial set rather than the physical one: prospects, projects, licences |

**Bucket** — `B1` ours · `B2` the monolith · `B3` live operations and the
physical act.

**Time** — coarse band only: `minutes` `hours` `days` `weeks`. This is triage; it
tells you which actions deserve a §4 block. The real number goes in the block.

**Friction** — the *kind* of difficulty, which is what determines whether an agent
can help at all: assembly · volume · repetition · consistency · traceability ·
recall · waiting · judgment · physical.
**`judgment` and `physical` are the two an agent cannot remove.** Marking a row
`judgment` is how you decide not to build.

> **But `physical` almost never travels alone.** The act of turning the valve,
> pulling the pump or taking the reading is out of reach. The permit, the
> isolation list, the procedure lookup, the last three times this equipment was
> touched, and the record written afterwards are all assembly — and they are
> usually the larger part of the hour. **Tag the row `physical` only for the act
> itself, and check what surrounds it before you move on.** Writing off a field
> role because its verbs are physical is the same error as writing off an action
> because it is B3.

**Source** — the citation key for the standard clause this action comes from.
**A row with no key is a row you made up** — allowed, if you mark it `inferred`
and can say why the standard omits it.

**Agent?** — `✔✔` strong candidate · `✔` candidate · `⚠` partial, a sliver
survives · `❌` no, with the reason named.

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|---|
| A1 | | `[KEY §x]` | | | | | | |

### Coverage check — against the workflow

Before the work arrives · while it's live · the core craft · after delivery ·
admin and contracts · handoffs and coordination.

### Coverage check — against the standard

The check above tests your list against your own judgement. **This one tests it
against an authority, and it is the only check here that catches an omission you
don't already suspect.**

| Standard section | Covered by | If not covered — why |
|---|---|---|
| `[SPWLA-22] §8 Core analysis` | A9 | |
| `[SPWLA-22] §10 Reservoir surveillance` | — | out of scope: development persona, see §1 variants |

**Every section of the standard appears in this table.** A section with no action
against it is either legitimately out of scope — say so — or an action you missed.
If no task-level standard exists for this role, say that here too, and accept that
this document has no completeness check.

### Then write two lines on every action — including the rejects

**Do not skip this.** It is the cheapest guard against the failure mode that has
caught this process repeatedly: **omission, never error.** Every miss so far came
from not examining something, not from examining it and getting it wrong.

> **A_ · [name] · B_ · `[KEY §x]`**
> **Today.** *What actually happens.* `[key]` / `inferred`
> **Failure mode.** *What goes wrong — and does it surface loudly, or silently
> years later?* `[key]` / `inferred`
> **Agent candidate?** *One line, including why not. If the answer is "the
> monolith does it", name the product and module and cite it.*

For actions you **are** promoting to an agent, this is just `→ see §4`. Don't
write it twice.

Two reasons it earns its place:
- **It finds candidates you'd otherwise dismiss.** An action written off as "the
  monolith does that" often contains a sliver the monolith doesn't — you only see
  it by writing the line.
- **It makes §4's "not building, and why" defensible.** Without it, that section
  is assertion.

**Two traps that have already cost me a good agent each:**

- **Scope.** Standardising curve names for one well is a nuisance; for forty years
  of wells from five service companies it's a programme.
- **B3.** Before dismissing an operational action, split *the decision* from *the
  act*. Operating the tools is B3. Deciding whether to re-run is assembly under
  time pressure, and often the highest-stakes call they make.

---

## 4 · Which agents, and why

**Test every action. Three yes = build.**

1. Is the bottleneck **assembly, not expertise**?
2. Does the **human keep the decision**?
3. Does the monolith **already do this today**? *(yes → leave it)*

**Score every action**, not just the promising ones — an action never scored is
one silently dropped.

**Don't fold.** If an action looks like a step inside another agent, score it
standalone first, at its own largest scope.

### How many is right

**Expect three to seven.**

- **More than eight** — you have not applied test 3 hard enough, or you are
  listing features of one agent as separate agents.
- **Fewer than three** — check you have not *over*-applied test 3. But a thin role
  can be the correct answer: production engineering legitimately yielded four
  against a mature vendor stack, and saying so was worth more than padding it.

### Naming

`[What it assembles, audits or checks] Agent` — a noun phrase describing the work.

- **Never a product name, never a metaphor.** The deck calls things *Sentinels*;
  research calls them *Agents*. Keeping the two vocabularies apart is what stops
  this document being read as marketing.
- Consistent suffix `Agent`, so 120 of them sort and search predictably.
- Good: *Model Freshness Audit Agent · Analogue Screening Agent · Contradiction
  Check Agent*. Bad: *Insight Engine · Subsurface Copilot · Well Whisperer*.

### Build tiers

| Tier | Means |
|---|---|
| **no-code** | configuration on an existing agent platform — prompt, tools, no custom code |
| **low-code** | orchestration plus light glue: standard connectors, a few custom tool functions |
| **high-code** | real engineering — signal processing, custom algorithms, performance work |

### Summary

| Agent | Actions | Scope | Friction removed | Tier | Difficulty | Role | Priority — and why |
|---|---|---|---|---|---|---|---|

**Friction removed** carries through from §3 and must be one of the named types.
Across twenty roles this is what shows which machinery is worth building once.
**Difficulty** = easy · moderate · hard. Not a score out of ten; nobody has that
precision.
**Role** = hero demo · business case · proof of scale · not for this room. *The
best demo and the best business case are usually different agents.*
**Priority never travels alone.** `P1` on its own is a feeling. `P1 — the same
retrieval serves three other roles` is a reason.

### One block per agent

---

#### [Agent name] · [persona] · actions A_, A_ · scope: _

**In one line**
> [Persona] can't [do X] because [reason]; this agent [does Y] so they can [Z].
>
> *This line is how the agent gets read at programme level. Write it last, when
> you know what the block actually says.*

**The pain** — *every line carries its evidence. This is the half of the document
most likely to be inference written in the voice of fact.*
> **Today.** What actually happens. What they open, who they ask, how long it
> takes. `[key]`
>
> **What they settle for when time runs out.** The sharpest version of the
> problem, and usually where the agent fits. Sampling instead of reading
> everything. Remembered analogues instead of all of them. A guess instead of a
> diagnosis. `[key]` / `inferred ?` / `needs a practitioner`
> — **this one is almost never written down anywhere.** Unmarked inference here is
> the single most common defect. Marked inference is fine, and goes to §6.
>
> **What goes wrong, and does anyone notice. Loud or silent?** Silent failures
> that surface years later are both the strongest case for an agent and the
> strongest case for that agent refusing rather than guessing. `[key]` / `inferred`
>
> **Reversible?** Correctable later, or locked in? Irreversible decisions carry
> the most leverage. `[key]` / `inferred`
>
> **Friction removed.** assembly · volume · repetition · consistency ·
> traceability · recall · waiting. **Name exactly one.** If the honest answer is
> `judgment`, you do not have an agent — you have a wish. Go back.

**Why this isn't already solved** — cite it.
> The monolith's coverage and where it stops `[vendor key]`, or the literature
> stating the gap `[paper key]`, or a documented negative search. **Not** "as far
> as I know".

**How it solves it**
> **Reads** — which sources, named. *(If this line is vague, you don't have an
> agent yet. It is also the feasibility question: "40 years of end-of-well
> reports" immediately asks whether those are digitised and searchable.)*
> **Does** — what it does to them, **in the discipline's own language**.
> **Returns** — what lands in front of the human.
> **Stops at** — what it will not do. The human's call.
>
> If "stops at" is thin, the agent is over-scoped. Go back.

**The value** — per [unit of work: one well · one prospect · one query · one report]

| | | Evidence |
|---|---|---|
| **Today** | | `[key]` / `inferred ?` / `needs a practitioner` |
| **With the agent** | | |
| **Saved** | *per unit* | |
| **Also** | *what becomes possible that isn't done today* | |
| **Scale-up** | × [frequency] — **the customer's number, not ours** | |

> **Three things to get right here.**
>
> **1 · The "after" is the human's remaining time, not the machine's runtime.**
> The splice agent returns a best-fit shift in seconds — but the petrophysicist
> still checks the composite. The honest claim is *2–4 hrs → ~15 min of review*.
> We say the human keeps the decision; quoting machine runtime as the after
> quietly contradicts that.
>
> **2 · Never compute the scale-up.** State the multiplier and leave it. Every
> invented number in this programme came from someone doing the multiplication.
>
> **3 · Three situations, one shape.** *3 weeks → 2 hours.* *Not done at all →
> 20 minutes.* *Surfaces at audit six months later → same day.* All three are a
> before and an after, per unit. No classification needed.
>
> **No invented percentages.** Mark anything unvalidated with `?` and send it to §6.

**Claim the step you make, not the outcome it eventually enables.**
> *Not "this improves saturation accuracy" — "the petrophysicist gets the hours
> back to do the work that does."*

**Build** — tier: no-code · low-code · high-code   ·   difficulty: easy · moderate · hard
**Role** — hero demo · business case · proof of scale · not for this room
**Build when** — one sentence.

---

### Worked example

*Illustrative — shows the shape, not a verified finding.*

> #### Model Freshness Audit Agent · Production Engineer · A9 · scope: field
>
> **In one line**
> The production engineer can't tell which of four hundred well models are running
> on stale assumptions, because checking means opening every one; this agent ranks
> the estate by staleness and drift so they can re-tune the ones that matter.
>
> **The pain**
> **Today.** Nodal analysis is only trustworthy if the model is tuned against the
> latest flowing survey and well test. `[SPE-LIFT-19 §3]` `[PRAC-26]`
> **What they settle for.** Models get tuned when someone happens to work that
> well; the wells nobody has looked at recently carry the oldest assumptions, and
> they are the wells least likely to be looked at. `inferred ?` — **needs a
> practitioner, §6 Q3**
> **What goes wrong.** **Silent and self-reinforcing.** Decisions are made on stale
> models and the staleness is invisible, because checking means opening every
> model. One documented case: a PVT model not updated since original completion,
> surfaced only by a royalty auditor. `[VENDOR-CASE-26]` *(vendor-sourced)*
> **Reversible?** The model is correctable. The decisions already taken on it are
> not. `inferred`
> **Friction removed.** `volume` — four hundred models, each individually
> checkable, none checkable together.
>
> **Why this isn't already solved**
> PROSPER, GAP and PIPESIM hold and run models one at a time `[PETEX-DOC-25]`. They
> do not report on the health of the model estate. *Searched SPE OnePetro, Petex and
> SLB product documentation for estate-level model-staleness reporting; found none.
> `negative search, 2026-09`*
>
> **How it solves it**
> **Reads** — model files and their modification history; well test records and
> dates; flowing survey dates; measured rates from the historian.
> **Does** — for each well, compares the date and source of the last tune against
> the latest available test, and compares model-predicted rate against actual.
> **Returns** — a ranked worklist: staleness, drift, and the test that would fix it.
> **Stops at** — it does not re-tune anything, and does not judge whether drift matters.
>
> **The value** — per one field of ~400 wells
>
> | | | Evidence |
> |---|---|---|
> | **Today** | not done at all — no estate-level view exists | `negative search` |
> | **With the agent** | one ranked screen; engineer reviews the top of the list | `estimated` |
> | **Saved** | no hours saved — this is work that doesn't happen today | |
> | **Also** | a class of silent error becomes visible | |
> | **Scale-up** | × wells per field, × fields — the customer's number | |
>
> **Build** — tier: low-code · difficulty: moderate
> **Role** — hero demo. One screen ranking every well by staleness is immediately legible.
> **Build when** — after the estate-health pattern is built for petrophysics; same machinery.

---

### Not building, and why

| Action | Why not | Source |
|---|---|---|

Every row here should trace to a two-liner in §3 and carry a citation. If it
doesn't, it's assertion.

**The line to say:** *e.g. "We don't compute your saturation — we bring you what
the field already knows about the numbers going into it."*

---

## 5 · Shared with other personas

Actions appearing in more than one role. **Usually the strongest agents in the
programme** — same machinery, business case adds up instead of competing.

Fixed shape, so twenty of these can be merged rather than reconciled by hand:

| Action here | Also on | Same machinery as | Friction | Pattern |
|---|---|---|---|---|

**Pattern** is the shared mechanism in four words — *report assembly*,
*estate-health audit*, *promised vs delivered*, *consistency audit across people*.
If it matches an existing pattern, reuse the name exactly. If it doesn't, you've
found a new one — say so. **Agents that share a friction type and a pattern are
one machine with two deployments.**

---

## 6 · What would change these answers

| # | Question for a practitioner | Which agent it affects |
|---|---|---|

**Four things belong here automatically:**
- **Every missing timing**, named to its agent.
- **Every uncited pain claim** — especially "what they settle for", which is
  almost never documented anywhere.
- **Every uncited gap claim.** If you could not evidence "nobody does this", the
  practitioner decides whether the agent lives.
- **Every standard section you marked out of scope**, if you weren't certain.

**Name the decisive one.** One question usually determines more than the rest
combined — *"do you already measure Pg calibration against outcomes?"* either makes
that agent the strongest on the list or kills it. Say which question that is.

**Mark every unvalidated number.** `?` is more credible than a wrong figure.

---

> **Not in this template, deliberately.** Agent non-negotiables (refuse when
> unsupported, cite everything, never invent a fact, preserve originals) are
> near-identical across every role — keep them in one programme-level document
> rather than repeating them per persona. Build sequencing is a decision across
> personas, not within one. The cross-persona agent list is assembled from the
> "In one line" summaries. All three belong outside this file.

---

## 7 · Research notes

Anything found while researching that doesn't fit above but shouldn't be lost.

**Lines worth remembering** — specific, quantified, consequential, **and cited**.
A domain expert nods; a board remembers. **Collect these as you go; they can't be
reconstructed later.**

> *e.g. "Move m from 1.8 to 2.1 and saturation moves ten points. Ten points moves
> booked reserves."*

-

**Contradictions between sources** — name both, say which you went with and why.

**Terms** — anything someone building from this file would have to look up

| Term | Meaning |
|---|---|

---

## Before you call it done

**The five questions test.** Take any agent block and answer, out loud, from that
block alone: *which agent · for which persona · what pain and friction · how it
removes it · what it's worth.* If you have to look elsewhere for any of the five,
the block is incomplete.

**Checklist**

- [ ] §0 headline finding written, and it would stand alone
- [ ] Every standard section appears in the coverage-against-the-standard table
- [ ] Every action row has a source key, or is marked `inferred` with a reason
- [ ] Every action has two lines — **including every reject**
- [ ] **Every pain claim carries a key or an explicit inference marker**
- [ ] Every agent names exactly one friction type, and it isn't `judgment`
- [ ] Every "nobody does this" is cited or backed by a recorded negative search
- [ ] Every citation is retrievable — URL, DOI or document number, with a date
- [ ] Every tooling claim cites current documentation, version stated
- [ ] Every agent block has `Reads` naming actual sources, not a category
- [ ] Every value statement is per unit, with a before and an after
- [ ] No value statement multiplies up to an annual or company figure
- [ ] Every `Priority` carries its reason
- [ ] Every unvalidated number carries `?` and appears in §6
- [ ] §5 patterns use existing pattern names where they match
- [ ] §0 confidence rollups counted, not estimated

**The nine ways this goes wrong** — all nine have happened at least once

| # | Failure | Guard |
|---|---|---|
| 1 | An agent folded into another and never scored on its own | §4 don't fold |
| 2 | A whole action dismissed as B3 without splitting decision from act | §3 trap 2 |
| 3 | The action list starts mid-workflow and misses a whole tier | §3 coverage checks |
| 4 | Pain assessed at task scope when it bites at estate scope | §3 trap 1 |
| 5 | Priority assigned by feel, then contradicted by the prose | §4 priority + reason |
| 6 | Machine runtime quoted as the human's after-state | §4 value note 1 |
| 7 | A per-unit number multiplied into an annual claim | Rule 3 |
| 8 | Borrowed technical vocabulary — "converges", "optimises", "solves" | Vocabulary callout |
| 9 | **Pain asserted in the voice of fact, with no evidence marker** | §4 pain evidence |
