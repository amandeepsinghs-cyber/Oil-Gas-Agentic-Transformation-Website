# Build 01 — How Will the Agents Be Built?

> **Status:** SPEC (2026-10-10). This document defines the slide; nothing is built yet.
> **File it becomes:** `working_deck/build/page_01_build.html` (first slide of the "From Personas to Production" section)
> **Audience question:** *"We've seen the personas and their agents. How do we actually build them, and who builds them?"*

---

## 0 · Bottom line

**Agents are built three ways, matched to who is building: experts describe them (no-code), power users design them (low-code), and technical teams engineer them (high-code). Most of the portfolio is not engineered at all: roughly a third or more is built by the domain experts themselves in Gemini Enterprise.**

The slide has to land two things in under a minute:
1. **It's not an IT project.** The engineer who knows the workflow can build a large share of their own agents, by describing them.
2. **There is a path for every kind of agent.** Simple helpers, multi-step workflows, and deep, proprietary, physics-grounded agents each have their own route. Every route ends in the same governed place: Gemini Enterprise.

**Headline (proposed):** *Every expert can build an agent. Every agent lands in one place.*
**Sub-line:** *Describe it, design it, or engineer it — published to Gemini Enterprise and governed the same way.*

---

## 1 · The three build paths

| | **No-code: describe it** | **Low-code: design it** | **High-code: engineer it** |
|---|---|---|---|
| **Who builds** | The domain expert, i.e. the persona themselves (shift supervisor, planner, chemist) | Power users and the digital CoE, working with the expert | In-house technical experts (data scientists, engineers), **or** third parties (system integrators, ISVs) |
| **How** | Types what the agent should do in plain language → **Create** → Gemini drafts the instructions, steps and connections → test → publish | Lays out the workflow on a visual canvas: trigger → steps → conditions → human approval; adds sub-agents and data sources | Writes the agent in code: tools, deterministic solvers, multi-agent orchestration, evaluation suites, CI/CD |
| **Google product** | Gemini Enterprise **Agent Designer** (natural-language creation) | Gemini Enterprise **Agent Designer visual flow canvas**; **Agent Studio** for technical prototyping | **Agent Development Kit (ADK)** · Vertex AI **Agent Engine** · **A2A** · **MCP** · Gemini on Vertex AI |
| **Connects to** | Drive, Gmail, Jira, SharePoint, BigQuery and other built-in connectors | The same connectors, plus scheduled triggers and custom APIs | Anything: historian, LIMS, CMMS, ERP, physics models, simulators, on-prem systems |
| **Time to first agent** | Minutes to hours | Days | Weeks (custom); hours to adopt (third-party) |
| **Typical oil & gas example** | Shift handover summariser · SOP Q&A for a unit · daily report drafter | Monthly hydrocarbon reconciliation workflow · off-spec lab result → hold notice → approval | Crude-adaptive FCC optimiser · petrophysical log-splicing agent · gas supply decision agent |
| **Where it runs** | Gemini Enterprise | Gemini Enterprise | Agent Engine, Cloud Run, GKE, or on-premises; published into Gemini Enterprise |

**The one rule across all three:** whichever path is used, the agent is **published into Gemini Enterprise** and governed the same way: identity, approved tools, audit, and human approval. This is the bridge to Build 02, Govern.

---

## 2 · The portfolio mix

How the agents in a typical estate split by who builds them:

| Share | Slice | Built by | Path |
|---|---|---|---|
| **30–40 %** | **Expert-built** | Domain experts themselves, in Gemini Enterprise | No-code / low-code |
| **20–30 %** | **Organisational** | The company's own technical teams (digital CoE, data science, OT/IT engineering), built on Google Cloud | High-code (ADK) |
| **20–30 %** | **Third-party proprietary** | Partners and ISVs: specialist agents for the domain, bought or custom-built under contract | High-code (partner-built), adopted via Gemini Enterprise / Google Cloud Marketplace |

> [!IMPORTANT]
> **Open decision:** the three ranges add up to **70–100 %**. Either:
> - **(a)** state them as ranges with "approximately" and leave the remainder unlabelled; or
> - **(b)** add a fourth slice, **"Ready-made agents (10–20 %)"**, for agents that come with Gemini Enterprise out of the box, such as research, summarisation and idea generation. This makes the bar close to 100 %, and I recommend it, because it shows value from day one at zero build effort.

### Tie-in to the persona map (optional, illustrative)
The persona map has **374 agents**. At the stated ranges that implies roughly:

| Slice | Agents (approx.) |
|---|---|
| Expert-built (30–40 %) | ~110–150 |
| Organisational (20–30 %) | ~75–110 |
| Third-party (20–30 %) | ~75–110 |

Label this clearly as illustrative. It is a planning heuristic, not a measurement of the 374.

---

## 3 · Slide layout

Wide 16:9, same masthead, counter and floating dock as the rest of the Build section.

```
┌───────────────────────────────────────────────────────────────────────────────┐
│ FROM PERSONAS TO PRODUCTION // How agents are built                           │
│ Every expert can build an agent. Every agent lands in one place.              │
│ Describe it, design it, or engineer it — published to Gemini Enterprise ...   │
├─────────────────────────┬─────────────────────────┬───────────────────────────┤
│ NO-CODE · DESCRIBE IT   │ LOW-CODE · DESIGN IT    │ HIGH-CODE · ENGINEER IT   │
│ [animated GE window:    │ [animated canvas:       │ [animated editor: ADK     │
│  prompt types → Create  │  nodes appear & link →  │  code types → Deploy →    │
│  → agent card appears]  │  approval gate lights]  │  "Published to GE" toast] │
│ Who: the expert         │ Who: power users + CoE  │ Who: in-house experts     │
│ Agent Designer          │ Agent Designer canvas · │ or third parties          │
│ Minutes                 │ Agent Studio · Days     │ ADK · Agent Engine · A2A ·│
│ e.g. Handover summary   │ e.g. Off-spec → hold    │ MCP · Weeks               │
│                         │                         │ e.g. FCC optimiser        │
├─────────────────────────┴─────────────────────────┴───────────────────────────┤
│ THE PORTFOLIO  ████████████████ 30–40% expert-built │ ███████ 20–30% org │    │
│                ███████ 20–30% third-party │ ░░░ ready-made (if option b)      │
├───────────────────────────────────────────────────────────────────────────────┤
│ ⟶ All three publish into Gemini Enterprise · one identity, one audit trail    │
└───────────────────────────────────────────────────────────────────────────────┘
```

- **Top (≈60 % of height):** three columns, one per path, each with a looping mini-animation above the facts.
- **Middle:** one horizontal stacked bar for the portfolio mix, the same colours as the columns, with ranges labelled on the bar.
- **Bottom strip:** "All three publish into Gemini Enterprise" with the GE wordmark. This is the visual bridge to the Govern slide.
- **Colours:** No-code = Google Blue · Low-code = Purple · High-code = Green · Third-party = Green, hatched · Ready-made = Grey.

---

## 4 · The animations

**Decision: recreate them in HTML/CSS/JS, not as an embedded GIF or video.**

Why:
- They stay sharp at any resolution.
- They work offline from `file://`.
- They follow the deck's light/dark theme.
- There are no rights questions about re-using Google marketing footage.

If you have the official Google demo clip you remember, the "No-code" column can host it instead. Send the link and I'll embed it, with this animation as the offline fallback.

Each animation loops every ~10–12 s, pauses on hover, replays on click, and shows a static end frame under `prefers-reduced-motion`.

### 4.1 No-code: "describe it" (Gemini Enterprise window)
| t | Frame |
|---|---|
| 0.0 s | Empty Gemini Enterprise window, panel titled **"Create an agent"**, prompt box with placeholder *"Describe what your agent should do…"* |
| 0.5–4.0 s | Text types itself: *"Every morning, read last night's shift logs and alarm summary for Unit 3, flag anything unusual, and draft a 5-line handover for the day supervisor."* |
| 4.3 s | Cursor moves to **Create**, button press animation |
| 4.8–6.5 s | A "Gemini is building your agent" shimmer; then an **agent card** assembles: name *Unit 3 Handover Agent*, three instruction bullets, connectors (Shift logs · Alarms · Email), schedule *Daily 06:00* |
| 7.0 s | **Test** shows one sample output line; then a **Publish to team** toast |
| 9–11 s | Hold the end frame, then loop |

### 4.2 Low-code: "design it" (visual flow canvas)
| t | Frame |
|---|---|
| 0.0 s | Empty canvas grid, toolbar labelled **"Workflow"** |
| 0.5 s | Node 1 drops in: **Trigger** · *New lab result* |
| 1.5 s | Node 2: **Fetch spec** · *Product specification* (connector to LIMS) |
| 2.5 s | Node 3: **Compare** · *Within spec?* (diamond, two branches) |
| 3.5 s | Branch "No" → Node 4: **Draft hold notice** · Gemini step |
| 4.5 s | Node 5: **Human approval** · *Quality lead* (gate icon pulses amber) |
| 5.5 s | Branch "Yes" → **Release certificate** |
| 6.5–8 s | A token travels the "No" path: lights each node, stops at the approval gate, shows ✓ **Approved by Q. Lead** |
| 9–11 s | Hold, then loop |

### 4.3 High-code: "engineer it" (code editor → deploy)
| t | Frame |
|---|---|
| 0.0 s | Dark editor tab `agent.py` |
| 0.5–4.0 s | Code types (short, readable, illustrative ADK, not runnable): <br>`from google.adk.agents import Agent`<br>`optimiser = Agent(`<br>`  name="unit_optimiser", model="gemini-2.5-pro",`<br>`  tools=[soft_sensor, spread_gate, recipe_engine],`<br>`  instruction="Advise set points only when the models agree.")` |
| 4.5 s | Terminal line: `$ deploy → Vertex AI Agent Engine` with a progress bar |
| 6.0 s | ✓ `Deployed · evaluation 30/30 passed` |
| 7.0 s | Toast in Gemini Enterprise style: **"Unit Optimiser is now available to Process Engineers"** |
| 9–11 s | Hold, then loop |

A small tag under the high-code column reads **"or built and supplied by a partner"**. It slides in at the end frame and makes the third-party slice visible.

---

## 5 · Copy, final wording

**Kicker:** FROM PERSONAS TO PRODUCTION // How agents are built
**Headline:** Every expert can build an agent. Every agent lands in one place.
**Sub-line:** Describe it, design it, or engineer it — published to Gemini Enterprise and governed the same way.

| Column | Title | Who | Line |
|---|---|---|---|
| No-code | **Describe it** | The expert | "Say what the agent should do. Gemini builds it." |
| Low-code | **Design it** | Power users + digital CoE | "Lay out the steps, the checks and the approval." |
| High-code | **Engineer it** | In-house experts or partners | "Physics-grounded, multi-agent, evaluated in code." |

**Portfolio bar title:** "Who builds the portfolio"
**Bottom strip:** "All three publish into Gemini Enterprise — one front door, one identity, one audit trail."

**Speaker notes (≈45 s):**
> "Three ways to build, depending on who's building. Most of your estate doesn't need engineers. A shift supervisor can describe a handover agent and have it running this morning. That's a third or more of the portfolio. Multi-step workflows with an approval gate are designed on a canvas by your power users. The deep ones, like the crude-adaptive optimiser you saw, are engineered, either by your own teams or by partners who bring proprietary domain IP. Whichever way it's built, it lands in Gemini Enterprise, under the same governance. Which is the next question: how do we govern them?"

---

## 6 · Claims to verify before a client session

| Claim | Status | Source to check |
|---|---|---|
| Gemini Enterprise **Agent Designer** creates agents from a natural-language description | Matches current public material | Gemini Enterprise product page / docs |
| Agent Designer has a **visual flow canvas** for multi-step workflows, sub-agents and scheduled triggers | Matches current public material | Gemini Enterprise docs |
| **Agent Studio** is the low-code workspace for technical prototyping | Verify the name and positioning | Gemini Enterprise Agent Platform docs |
| High-code agents built with ADK and deployed on Agent Engine can be **published into Gemini Enterprise** | Verify the current registration path | Agent Engine / Gemini Enterprise docs |
| Third-party agents adoptable via **Google Cloud Marketplace / Gemini Enterprise agent gallery** | Verify the current listing mechanism | Marketplace docs |
| Portfolio split 30–40 / 20–30 / 20–30 % | **Planning heuristic, not a Google statistic.** Present as "typical" | Owner: presenter |

---

## 7 · Build steps (when approved)

1. Rename the skeleton files so this slide is Build 01, and re-sequence the section (counter and links).
2. Build the three-column layout and the portfolio bar in the house template.
3. Build the three animations: CSS keyframes plus a small JS timeline; hover-pause, click-replay, reduced-motion end frame.
4. Apply the light/dark theme tokens; screenshot both.
5. Update `BUILD_SECTION.md` and the launcher card.

## 8 · Decisions needed
1. **Portfolio bar:** option (a), ranges only, or option (b), add a "Ready-made agents 10–20 %" slice (recommended)?
2. **Animation:** recreate in HTML (recommended), or do you have the official Google clip to embed?
3. **Persona-map tie-in:** show the illustrative agent counts (~110–150 / ~75–110 / ~75–110) on the bar, or keep percentages only?
4. **Section order** (still open from before): Build → Govern → Architecture → Deploy as four slides, or Govern merged into Architecture?
