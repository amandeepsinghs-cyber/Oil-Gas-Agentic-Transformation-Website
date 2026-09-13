# Persona Portraits

33 portrait headshots, one per research persona, plus 2 held in reserve.

Styled after editorial portraits: clean, warm, natural lighting, soft neutral
backgrounds, everyday professional attire, no theatrical props or stage sets.

## Naming

**The filename is the research id.** `P04` -> `P04_persona.jpg` and
`thumbs/P04_thumb.jpg`. There is no lookup table anywhere in the codebase, so
nothing can drift out of sync with the dataset. If a role has no portrait, the
file is simply absent and the page renders a monogram instead.

Full-res (1024px) is used for the hero; the 96px thumbnail is used in the rail,
because the rail shows all 33 at once and the full set of originals is ~24 MB.

> [!NOTE]
> These were renumbered on 2026-09-12. They were previously keyed to the old
> deck rows A-T (`p01`-`p20`), which meant `p04` was the Drilling Engineer while
> research `P04` is the Petrophysicist. The lowercase files no longer exist;
> `personas/persona.html` carries a temporary translation map until the
> chessboard is rebuilt off the research data.

## Directory

| ID | Name | Role | Segment | Tier |
| :--- | :--- | :--- | :--- | :--- |
| **P01** | Mark Dawson | Wellsite Supervisor | Wells & Rig Operations | Core 20 |
| **P02** | Priya Raghavan | Well Integrity Engineer | Wells & Rig Operations | Core 20 |
| **P03** | Elena Duarte | Board Operator (Refinery) | Downstream Refining | Core 20 |
| **P04** | Karim Haddad | Petrophysicist | Subsurface & Geosciences | Core 20 |
| **P05** | Arjun Nair | Petroleum Geologist | Subsurface & Geosciences | Core 20 |
| **P06** | Daniel Chen | Reservoir Engineer | Subsurface & Geosciences | Core 20 |
| **P07** | Marcus Boateng | Drilling Engineer | Wells & Rig Operations | Core 20 |
| **P08** | Leila Nasser | Completions Engineer | Wells & Rig Operations | Core 20 |
| **P09** | Nia Okafor | Production Engineer | Field & Gathering | Core 20 |
| **P10** | Mei-Ling Chan | Lease Operator | Field & Gathering | Core 20 |
| **P11** | Jun Park | Control Room Operator (Production) | Field & Gathering | Core 20 |
| **P12** | Rina Suryani | Facilities Engineer | Midstream & Processing | Core 20 |
| **P13** | Claire Whitfield | Flow Assurance Engineer | Midstream & Pipelines | Core 20 |
| **P14** | Samuel Adeyemi | Pipeline Controller | Midstream & Pipelines | Core 20 |
| **P15** | Tariq Rahman | Terminal Superintendent | Midstream & Marine | Core 20 |
| **P16** | Rohit Menon | Refinery Process Engineer | Downstream Refining | Core 20 |
| **P17** | Yvonne Mensah | Production Planner | Downstream Refining | Core 20 |
| **P18** | Soraya Khalil | Geophysicist | Subsurface & Geosciences | Core 20 |
| **P19** | Peter Lindqvist | Process Safety Engineer | Cross-Cutting Safety | Core 20 |
| **P20** | Hannah Reid | Reliability Engineer | Cross-Cutting Reliability | Core 20 |
| **P21** | Ananya Deshpande | Development Geologist | Subsurface & Geosciences | Extended |
| **P22** | Kenji Nakamura | Reservoir Simulation Engineer | Subsurface & Geosciences | Extended |
| **P23** | Thandiwe Mokoena | Subsurface Data Manager | Subsurface & Geosciences | Extended |
| **P24** | Tom Brennan | Operations Geologist | Wells & Rig Operations | Extended |
| **P25** | Diego Ferreira | Artificial Lift Specialist | Field & Gathering | Extended |
| **P26** | Nadia Farouk | Gas Plant Engineer | Midstream & Processing | Extended |
| **P27** | Sanjay Iyer | Pipeline Integrity Engineer | Midstream & Pipelines | Extended |
| **P28** | Gloria Baptiste | Blending Coordinator | Downstream Refining | Extended |
| **P29** | Hana Yoshida | Crude & Product Scheduler | Downstream Refining | Extended |
| **P30** | Ian MacLeod | Inspection Engineer | Cross-Cutting Integrity | Extended |
| **P31** | André Laurent | Turnaround Planner | Cross-Cutting Projects | Extended |
| **P32** | Ridwan Santoso | Instrument Technician | Cross-Cutting Maintenance | Extended |
| **P33** | Sophie Larsen | Environmental Specialist | Cross-Cutting Compliance | Extended |

## Reserved

Two portraits with no persona behind them yet. They keep their old numbering
because they are not research ids; rename them to `P34`/`P35` if and when the
dossiers are written.

| File | Intended role |
| :--- | :--- |
| `reserved/p34_persona.jpg` | Well Intervention & Workover Engineer |
| `reserved/p35_persona.jpg` | Crude Trader & Supply Optimizer |
