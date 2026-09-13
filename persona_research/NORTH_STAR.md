# North Star

> ## Agents that solve real problems in real operations.

That is the deliverable. A list of agents, each one with:

**which agent · whose work it changes · which workflow and which asset it
touches · which defect it catches · what lines up if it doesn't ·
which of the four levers it moves · how it removes the friction ·
what it's worth**

Nothing else is the deliverable.

The two clauses in the middle are not decoration. An agent described only by
the friction it removes is indistinguishable from a macro. The same agent
described by the defect it catches and the consequence that follows if it
doesn't is a barrier in a safety chain — and that is what we are actually
selling. See **The chain** below.

---

## Scope: workforce *and* workflows — which are the same object

> **In knowledge work, the human workforce implements workflows.**
> **For knowledge workers, the agentic workforce automates workflows.**

That is the whole thesis, and it is why "workforce" and "workflows" are not
two axes to be researched separately. A workflow is not an abstraction that
floats above the org chart; it is the set of steps somebody actually performs.
Research the people and you have the workflows, because the workflows *are*
what the people do.

So every operational action in the corpus is simultaneously:

| Read as | It is |
|---|---|
| **workforce** | a step a named role performs — on a rig floor, a lease road, a jetty, a control room, or at a desk |
| **workflow** | a step in an operation, with a physical consequence downstream |

What changes with Gemini Enterprise is **who implements the step**. Each one
lands in exactly one of three places:

| | | share |
|---|---|---:|
| **The agentic workforce** | an agent takes the step | 334 / 495 (67%) |
| **The existing system** | the incumbent monolith already runs it properly | 86 / 495 (17%) |
| **The human workforce** | irreducibly human — authority, life-safety, physical presence | 75 / 495 (15%) |

> **Gemini Enterprise is used by humans.** An agent is deployed to a person,
> not to a pump. The value may land on the asset — 43% of it does — but it is
> realised through the worker whose workflow changed. A view of the estate
> with assets as rows and no people in it is not something we can sell, and
> not something anyone can deploy.

---

## The chain

Everything in this programme sits at one point on a single chain. That
position — not the artifact an agent produces — is what the agent *is*.

```
LATENT DEFECT  →  HOLES ALIGN  →  CRITICAL FAILURE  →  BUSINESS RISK  →  GROWTH IMPEDED
in one layer      across layers     a wrong belief      capital committed    reserves not added
```

> A dry hole is not a mistake somebody made. It is what happens when the
> velocity model and the well logs quietly disagree, and nobody is positioned
> to notice.

That sentence is the governing frame. It says three things we keep losing:

1. **No individual is at fault.** The defect is systemic, which is why a
   systemic barrier is the right answer and a training programme is not.
2. **The failure is usually a wrong belief, not an accident.** A structural
   high that isn't there. A pay zone logged as water. It is a number
   everybody trusts.
3. **The consequence runs past cost into growth.** A barrel not found is
   invisible to every incident report and every cost line we have.

### The worked example — P18 Geophysicist, six steps, all ours to build

| | Step | The research's own words on what failure causes |
|---|---|---|
| 1 | **A01** Audit checkshot velocity surveys | *"…causing interpreters to map non-existent structural high targets."* |
| 2 | **A02** Harmonise well elevation datums | *"Datum calculation errors (15–30 m)… corrupting the entire regional depth conversion framework."* |
| 3 | **A03** Tie synthetic seismograms to logs | *"…misidentify reservoir top reflection peaks."* |
| 4 | **A06** Build multi-layer velocity model | *"…severe depth prognosis errors at the target reservoir."* |
| 5 | **A08** Harmonise multi-vintage seismic misties | *"Unharmonised surveys create artificial ghost faults…"* |
| 6 | **A13** Quantify GRV depth-conversion uncertainty | *"…distorted capital expenditure decisions for offshore appraisal drilling."* |

No single one of these is a scandal. Each is a small, defensible compromise
made under time pressure. **Align four of them and you have a prospect that
does not exist, and a well that costs hundreds of crores to disprove.**

All six carry the friction tags `consistency`, `assembly` or `volume`. Read one
at a time they look like housekeeping. Read as a chain they are the anatomy of
a dry hole.

> **Any presentation that scores these cells individually will always conclude
> that we do data preparation.** That is the drift, and it is mechanical, not
> rhetorical. It will recur unless the chain is the unit of analysis.

### Four framings, one chain

We have argued about whether this pitch is data prep, efficiency, risk, or
growth. They are the same chain read at four depths:

| Read at | You see | We have been calling it |
|---|---|---|
| the defect | a small reconciliation | "data prep" — dismissively |
| the hole plugged early | hours not spent, rework avoided | efficiency |
| the alignment prevented | an incident that did not happen | risk |
| the consequence avoided | a well not wasted, a barrel found | **growth** |

Efficiency and growth are not two pitches. **Efficiency is what you save when
the hole is plugged early; growth is what you do not lose when it isn't.**

And decision accuracy is not a later phase of the programme. **Accuracy is the
state of a system whose layers agree.** Making the velocity model agree with
the well logs *is* improving decision accuracy — that is the whole of it.

---

## The test, applied before adding anything

> **Which agent does this help us find, build, or defend?**

If there isn't a clear answer, don't do it. Not smaller, not later — **don't do it.**

### And the drift test, applied to any slide, dossier or board change

1. **Which layer does this sit in?**
2. **Which defect does it catch?**
3. **What lines up if it doesn't?**
4. **Which of the four levers does it move — Productivity, Uptime, Integrity
   or Recovery?** Exactly one. If the honest answer is "Productivity" for
   everything on the slide, the slide is an efficiency pitch and you should
   know that before you show it.

If a change cannot answer 3 and 4, it has drifted back to describing chores.

---

## What is worth — the four levers

**Every agent moves exactly one of these four.** These are the canonical names.
They are defined once in `data/value_model.js` as `VALUE_LEVERS` so they cannot
drift between the deck, the dossiers and the board. Use these words and no
others.

| # | Lever | What it counts | Board metric | Unit | Computed by | Coverage |
|---|---|---|---|---|---|---:|
| 1 | **Productivity** | Expert hours redeployed onto work only they can do | Opex, cost per barrel | ₹ | `VALUE_SEATS` | **33 / 33** |
| 2 | **Uptime** | Production and throughput not lost | NPT %, on-stream factor | ₹ | `ASSET_CAPITAL` | **21 / 33** |
| 3 | **Integrity** | Expected loss avoided before it occurs | Process safety events, LOPC | ₹ | `ASSET_RISK` | **16 / 33** |
| 4 | **Recovery** | Barrels found, recovered and booked | Reserves replacement ratio | ₹ + bbl | `RESOURCE_RECOVERY` | **9 / 33** |

Current totals: Productivity ₹1,496 Cr (41%) · Uptime ₹845 Cr (23%) ·
Integrity ₹300 Cr (8%) · Recovery ₹1,011 Cr (28%). **Estate total ₹3,652 Cr.**

Recovery carries a barrel count as well as a rupee figure: **4.04 Mbbl a year,
about 2.6% of ONGC's production.** Both are on the page.

> **The order is the argument.** Productivity is cheapest to prove and least
> interesting to a board. Uptime is the operator's own language. Integrity is
> the first lever that prices being *right* instead of being *fast*. Recovery
> is the only one of the four that counts upward.
>
> **Every rupee in the first three is money not spent.** An arithmetic that can
> only subtract will read as an efficiency programme however the slides are
> worded. That is the structural reason this deck kept drifting, and no amount
> of rewriting fixes it — only the fourth lever does.

### Rules for the fourth lever

Built 13 Sep 2026, in `RESOURCE_RECOVERY`. It follows `ASSET_RISK`'s five-factor
shape on purpose, so a reader who accepted the risk term has already accepted
this one's structure:

```
barrels = unitsPerYear × bblPerUnit × α × β
rupees  = barrels × VALUE_MODEL.bblMargin      (₹2,500/bbl contribution)
```

- **Priced in rupees, deliberately.** An earlier draft of this document said
  "quote barrels, never rupees". That was wrong, and the reason is worth
  keeping: **a lever quoted in a different unit from the other three gets read
  as a footnote** — which is precisely what Recovery must not be. It sums into
  one estate number or it does not land.
- **But the barrel count travels with every figure, and it is the harder
  number.** Barrels rest on stated well counts and per-unit volumes; the
  rupees rest on one margin assumption. **If challenged, retreat to barrels** —
  do not defend ₹2,500/bbl.
- **α and β are judgement, not data**, exactly as in the risk term, and both
  are printed on the page. They are set low on purpose: 0.03–0.075 combined.
- **Nine roles carry it, and no more** — P04 P05 P06 P09 P18 P21 P22 P23 P24.
  Only work that changes *which* barrels are found or how many are ultimately
  recovered qualifies. Protecting throughput on barrels already discovered is
  Uptime. Stretching Recovery across the estate to inflate the total is the
  move that would make the other three levers unbelievable.
- **No role carries both Integrity and Recovery**, and that falls out of the
  model rather than being imposed: the roles whose errors *misallocate* capital
  are exactly the roles whose errors do not *destroy* it.

### Rules for the other three

- **Productivity is never stated as headcount reduction.** Say *hours
  redeployed*. For an NOC audience the other phrasing loses the room, and it
  is not what the model computes — seats are an input, not an output.
- **Uptime only counts hours on an asset's critical path.** 12 of 33 roles
  carry no term and those zeros are load-bearing.
- **Integrity is an expectation, not a forecast.** State α and β as judgement.


---

## What is scaffolding


All of this is subordinate. It exists to make the agent list correct and defensible,
and for no other reason:

| Scaffolding | Exists only to |
|---|---|
| The persona template | Stop us missing agents, and stop us claiming things we can't defend |
| The role map | Stop us researching a job that doesn't exist or is misnamed |
| Citations and standards | Let a practitioner check us instead of trusting us |
| The value model | Let someone decide which agent to build first |
| The deck | Sell the agents once they're real |

Scaffolding that grows beyond that job is waste, however well-built.

---

## Where we have already drifted

Recorded so the pattern is recognisable, not to relitigate it.

| Drift | Should have been |
|---|---|
| A three-class value taxonomy with modifiers and a lexicographic ranking rule | *Write the value as a before → after, per unit* |
| A batch plan with frozen lists, a pattern registry and a programme principles doc | *Do three personas. See what breaks.* |
| A persona map approach with six selection criteria, a reserve list and three blocking questions | *Get the role names right. Note which have standards.* |
| **"Real people on real desks"** — this document narrowed the scope to office work and then got quoted back as authority for dropping the workflow view | *Say "in real operations." Most of this work is not done at a desk.* |
| **Describing each agent by the artifact it returns** — which made 232 agents read as a data-preparation service sitting upstream of the incumbent's decision environment | *Describe the defect it catches and what lines up if it doesn't.* |


**The pattern:** a real problem gets identified, and the response is a system rather
than an answer. The system is always defensible in isolation and always bigger than
the question.

### On the desk framing specifically

Corrected 12 Sep 2026. The wording was wrong on the evidence, not just on tone:

- **12 of the 33 roles** work on a rig floor, a lease road, a plant, a jetty or
  a refinery unit, not in an office.
- The **highest-value role in the whole estate** — P10 Lease Operator, ₹454 Cr/yr —
  spends the day driving a lease and walking wellheads.
- **₹1,145 Cr of the ₹3,652 Cr total (31%)** is Uptime and Integrity.
  That value accrues to equipment, not to hours.

A north star that says "desks" writes off nearly half the value and most of
the industry.

### On the data-prep framing specifically

Corrected 13 Sep 2026. Again the wording was wrong on the evidence:

- Classified by what they **return**, 77 of 232 agents (33%) hand over a file
  and 13 of them literally say the output is *"ready for direct import into
  Petrel / RMS / Kingdom / Kappa / MBAL."* Read that way, we had documented
  ourselves as the ETL upstream of somebody else's decision environment.
- Classified by what **fails** when they are absent, the same agents look
  entirely different. Of the 253 actions that state a failure mode, roughly
  **60 end in a wrong number or a wrong call and 163 in a physical or
  financial loss event.** Only about 30 end in delay alone.
- The corpus itself carries the bias: **all 232** `frictionSolved` strings open
  with *"Eliminates/Removes N hours of manual…"*. Do not quote that field in
  the pitch. It is a time-and-motion artefact of how the research was written,
  not a statement of what the agent is worth.
- The board made it worse mechanically. Scoring each cell on its own friction
  tag paints the six P18 velocity steps as routine housekeeping, because
  individually that is what they are.

> **The honest limit: 242 of 495 actions have no stated failure mode.** The
> chain reframe has direct evidence for roughly half the estate. Curate three
> or four strong chains and say so; do not assert the frame across all 495.

The lesson generalises. Three fields describe every agent and they do not
agree with each other:

| Field | Reads as | Use it for |
|---|---|---|
| `returns` | the artifact handed over | never, on its own — this is what made us look like data prep |
| `failureMode` | the consequence of the step going wrong | the pitch |
| `stopsAt` | the decision the human keeps | currently a safety disclaimer; it is also the inventory of decisions we improve |

**Never characterise an agent from one field.** P18's A02 is "harmonises well
elevation datums" (a chore), "returns a calibrated datum table" (an artifact),
or "stops a 20-metre error propagating into the depth conversion" (a barrier).
All three are true. Only the third is the pitch.

---

## The one thing to remember

Every artifact in this programme should be readable as an answer to
*"so which agents are we building, for whose work, against which operation,
what does each one catch, and what does the business lose if it doesn't?"*

If a document can't be read that way, it is scaffolding — and it should be short.

