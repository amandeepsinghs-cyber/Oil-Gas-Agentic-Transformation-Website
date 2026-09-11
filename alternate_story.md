# Alternate Story — The Crew Change

So here is the story that oil and gas small decisons when aligned leads to consequences, I need data that more experienced forkforce commit less mistakes as o&G is subjecctive, then experience workforce is retiring. Hence risk profile will shouot up unless we take an action. 

> **Status:** Draft narrative for a new stage inserted **after Slide 02 (Swiss Cheese)** and **before Slide 03 (The 5 Criteria)**.
> Built as `working_deck/pages/alternate_story.html` (`stage-02b`). Nothing renumbered yet.
> Source material: `alternate_pitch_Oil_&_Gas_Slides_WIP.pdf`, page 8 — *"The Institutional Brain Drain."*

---

## Author's original framing — verbatim

> So here is the story that oil and gas small decisons when aligned leads to consequences, I need data that more experienced forkforce commit less mistakes as o&G is subjecctive, then experience workforce is retiring. Hence risk profile will shouot up unless we take an action.

> you are misisng a key point in your argumnet you are being too objective about the dataa and zero heed to physcology of the decisionmakers. They are experienced people. I am making them feel better that when they leave there will be a problem unless they do something while they are here, the orgaisation will be domeed wih all the young people :D

> if you can see the curve, we can show a similar curve experinced peole retiring and risk profile encresing I dont think anytone will challaneg that. then we can say the ony way to reducce the risk profile is to intervese.

> I think it fits after the cheese. Now with the experinced workforce retiring the vulnerabilities will matter more than ever, then I will show the data, and than the potential risk sill increase as the expericen leaves as oil and gas is half sciene and half art and the art leaves with the person.

---

# Latest narrative

## 1. The argument, in four links

| # | Link | Where it is established |
|---|---|---|
| 1 | Small, individually tolerable gaps align into consequence | **Slide 02** — already on screen |
| 2 | What closes those gaps today is a person who has seen it before | **This slide** — the claim the room recognises in itself |
| 3 | That person is leaving | **This slide** — DPE / PIB data |
| 4 | ∴ Risk rises unless the barrier is rebuilt in the system | **This slide → Slide 03** |

**Link 2 is the hinge, and it cannot be made before Slide 02 exists.** You cannot claim "a person catches the aligning gaps" until the aligning gaps are on screen. This is why the slide sits *after* the cheese and not before it — the argument is parasitic on the Swiss Cheese model.

## 2. Why this placement, and why it improves the deck

Slide 02's outro currently does two things in sequence:

- **(a)** *"We need a defensive system that permanently and surgically seals these gaps."*
- **(b)** *"Before selecting a technology, energy operations demand five non-negotiable engineering criteria for autonomous agents."*

This slide is inserted **between (a) and (b)**. Slide 02 ends at the need for a defensive system; this slide answers *"but what is that system today?"*; Slide 03's criteria then arrive as a response rather than a list.

> [!NOTE]
> **This fixes an existing weak joint.** Slide 03's five criteria currently arrive unmotivated — why five, why these? With the crew change in front of it, criterion 02 (*"Triggers instantaneously on live operational data 24/7 **without human delay**"*) becomes the direct answer to "the human safeguard is leaving." Governed and Deterministic follow the same way.

**Second benefit:** Slide 05's subtitle already claims vulnerabilities exist across *"workflows **and workforce**"* but only ever shows workflows. This gives the workforce half a referent three slides earlier.

**Held back deliberately:** the Jenga line — *"You don't notice a block leaving until the whole tower wobbles"* — is **not** used here. It is reserved for Slide 05, where the tower actually appears. Planted at 02b, paid off at 05.

## 3. Audience psychology — the governing constraint

The room is CMDs, CEOs and Executive Directors of Indian NOCs. **They are the experienced workforce.** The slide is not a warning delivered to them; it is a statement that they are load-bearing, followed by an opportunity to act while they still can.

Three rules follow, and they override analytical tidiness:

1. **The curve is about the organisation's exposure, not the individual's workload.** An earlier draft plotted *"load per remaining expert"* — arithmetically unattackable but emotionally wrong: it makes the audience the victim rather than the wall holding the building up. Rejected.
2. **Never say juniors are dangerous. Engineer the inference instead.** *"The next generation will inherit the systems. They will not inherit the judgement."* Respectful on its face; the room supplies the rest.
3. **The agent is an apprentice, never a replacement.** Every person in that room has mentored someone. This is that, industrialised. It also converts the deployment from something done *to* them into something done *by* them.

> [!WARNING]
> **Never let this land as "AI means we don't backfill."** In a public-sector Indian NOC, headcount is a ministry and union question. The moment a board member hears staffing reduction the conversation leaves the room. Frame as capability growth only — *"the organisation grows with ambition, not the org chart."*

## 4. Slide structure — three beats

| Beat | Content | Renders as |
|---|---|---|
| **1. The vulnerabilities matter more than ever** | Callback to Slide 02's named gaps; the barrier was a person in every one | eyebrow · H2 · accent · lede |
| **2. The data** | DPE headcount series, 5.7 gone / 7.8 remaining, 27% aged 55+ | two-state chart + three numbered points |
| **3. The risk rises as the art leaves** | Risk curve revealed; legacy line; bridge to the five criteria | state 2 of the chart + closing band |

**The risk curve is a reveal, not a given.** State 1 shows only the measured decline. State 2 raises the exposure curve out of it. This reuses Slide 02's own `setCheeseState()` two-state convention, so the interaction reads as familiar rather than novel — and the risk line arrives as a consequence the audience watches happen, not an assertion sitting there from the start.

## 5. The data, and what is deliberately not measured

**Measured — carries numbers, axis labels and a source:**

| Figure | Value | Source |
|---|---|---|
| Public sector regular workforce | 13.49 lakh FY14 · 9.2 FY20 · 8.14 FY24 · 7.8 FY25 | Public Enterprises Survey (DPE) |
| Already gone | 5.7 lakh | derived from the above |
| Still here | 7.8 lakh | derived from the above |
| Aged 55+, retiring within five years | 27% of India's oil, gas & mining workforce | pib.gov.in |
| FY26–FY35 | projected at trend | labelled as projection |

**Not measured — carries direction only, no axis, no numbers:**

The rising exposure curve. This is deliberate and it is the honest line.

> [!IMPORTANT]
> **Numbers on the experience curve. No numbers on the risk curve.**
>
> Slide 09's value terrain is indefensible because it prints precise figures (*₹27 Cr*) generated by a sine expression. An unlabelled rising curve is not a fabricated measurement — it is a statement of consequence. The chart carries the note *"direction only — no scale"* so the distinction is visible rather than assumed.
>
> The risk curve needs no dataset because **the room's own memory is the evidence.** Every director present can name a retirement that caused a problem nobody saw coming.

**Two caveats to verify before this is shown:**

1. The DPE series is **all central public sector enterprises**, not oil & gas specifically. Labelled accurately on the chart, but expect *"what is our number?"* — have it ready.
2. The **27% aged 55+** figure is load-bearing and sector-specific. Verify against the PIB source before presenting.

**What does not exist publicly:** any data linking experience level to *interpretive* error — dry-well rates by team seniority, casing-point misjudgements by tenure. IOGP does not aggregate incidents by years of experience at all. Do not let anyone generate a number for this. The right move is to make it a Phase 1 discovery question: the NOC holds NPT events, well-control events and crew tenure in separate systems and has never joined them. That correlation is both a superb sprint deliverable and a demonstration of the deck's own thesis.

## 6. Copy

**Eyebrow** — `THE MASSIVE CREW CHANGE // INSTITUTIONAL MEMORY LOSS`

**H2** — *In oil and gas, the last barrier is a person.*

**Accent** — *Four in ten have already gone. The rest retire inside a decade.*

**Lede** — *On the last slide, three latent gaps aligned into one stuck drillstring. Each of them had a defence, and in each case that defence was somebody's memory — of a 2004 well, of how that tool behaves, of why you telephone at three in the morning rather than send an email. None of it is written down. None of it appears on a barrier diagram. And it is walking out of the building.*

**Vulnerability callback** — the three from Slide 02, each answered with the human barrier that would have caught it, closing on: *In all three, the barrier was a person. Not a system.*

**Closing band** — *Oil & gas is half science, half art — and the art leaves with the person doing it.* / *What you know can now outlast your tenure. That has never been true before.*

**Bridge (inherited verbatim from Slide 02's outro)** — *Before selecting a technology, energy operations demand five non-negotiable engineering criteria for autonomous agents.* → **The 5 Non-Negotiable Criteria of the Agent →**

### Rejected copy, and why

| Line | Why not |
|---|---|
| *"Agentic AI is the first technology in history capable of capturing… human wisdom at scale."* | "First technology in history" is the one phrase a pedant grabs — expert systems, KM platforms and communities of practice all claimed it. Replaced with the second-person legacy line, which keeps the flattery and removes the handle. |
| *"Load per remaining expert is rising."* | Analytically clean, emotionally wrong. Says *you are overworked* rather than *this place stands because you are in it*. |
| *"Less experienced workers make more mistakes."* | Contradicts IOGP Human Performance doctrine and invites the HSE director to correct you in the room. The barrier framing makes the same point without the attack surface. |

## 7. Open items

- [ ] **Slide 02 outro edit** — line (b) must move to this slide. Slide 02 has a `.LOCKED` copy; changing it requires a re-lock and a sync to `final_slides/` and `working_deck/pages/page_02.html`. **Not yet done.**
- [ ] **Verify the 27% aged 55+ figure** against pib.gov.in.
- [ ] **Numbering decision** — currently `stage-02b` so nothing else renumbers. The tidy alternative is inserting as stage 03 and shifting 03→10 into 04→11, which touches ~20 files plus LOCKED copies and nav counters. Recommended only once the content stops moving.
- [ ] **Pacing** — this makes three problem beats before the reveal (01 cost, 02 mechanism, 02b trajectory). Legitimate, but it is six slides before Kansas. If the slot is tight, buy time back at **04** and **05**, which are both conceptual, both metaphor, and overlap: 04 says *monolith + microservice*, 05 says *fragile vs fortified*.