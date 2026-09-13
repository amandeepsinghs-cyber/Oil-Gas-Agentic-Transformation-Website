# Brand Guidelines & Visual Identity Reference Repository

> **Official Brand System & Reference Documents for Sovereign Agentic Transformation**  
> **Location:** [`brand_guidelines/`](./)

---

## 1. Master Reference Documents

This directory houses the authoritative Google Cloud, Google Workspace, and Gemini Enterprise brand books:

| Document | File | Scope & Contents |
|---|---|---|
| **Partner Brand Guidelines (Y26)** | [`Google Cloud and Google Workspace Partner Brand Guidelines _ Y26.pdf`](./Google%20Cloud%20and%20Google%20Workspace%20Partner%20Brand%20Guidelines%20_%20Y26.pdf) | **Official 2026 Guidelines** covering Google Cloud and Google Workspace co-branding, approved lockups ("Built with AI from Google Cloud"), color standards, typography hierarchy, logo protection, and legal usage rules. |
| **Product Icon Guidelines (H1 2026)** | [`Google Cloud product icon guidelines_H1 2026 (go_cloud-icons).pdf`](./Google%20Cloud%20product%20icon%20guidelines_H1%202026%20(go_cloud-icons).pdf) | **Official H1 2026 Icon System (`go/cloud-icons`)** detailing icon geometry, grid alignment, product badge rules, light/dark mode handling, and Aurora color integration. |
| **Gemini Enterprise Brand Codex** | [`GEMINI_ENTERPRISE_BRAND_GUIDELINES.md`](./GEMINI_ENTERPRISE_BRAND_GUIDELINES.md) | **Executable Developer & Designer Codex** defining the exact CSS variables, Aurora 500-level hex tokens, WCAG 2.1 contrast thresholds, the 5 approved adjacent gradients, and the B1/B2/B3 semantic color mapping. |

---

## 2. In-Repo Implementation & Verification Tools

* **Brand Live Proof Sheet:** [`personas/_palette.html`](../personas/_palette.html) — reads computed styles live in the browser to grade them against the official Aurora palette.
* **Style & Formatting Audit:** [`style_audit.md`](../style_audit.md) — 26-item checklist and migration guide from legacy GM2 / Tailwind Slate to official Aurora.
* **Vector Logo Assets:** [`assets/media/gemini_enterprise_logo.svg`](../assets/media/gemini_enterprise_logo.svg)

---

## 3. Quick Reference: The Aurora Core Palette

| Token | Name | Hex | Semantic Function in Agent Deck |
|---|---|---|---|
| `--g-blue` | Google Blue 500 | `#3186FF` | Interactive affordance, primary actions, links, agent index |
| `--g-purple` | Purple | `#4B31E3` | Gemini core, spark gradient terminal, persona monogram fallback |
| `--g-green` | Google Green 500 | `#00AF57` | **B1 Agentable work**, hours saved, transformation metrics |
| `--g-yellow` | Google Yellow 500 | `#FEC700` | **B3 Live Operations**, human-in-the-loop, active oversight |
| `--g-red` | Google Red 500 | `#FC413D` | **Safety envelope**, friction-critical boundaries, hard stops |
| `--g-grey-10` | Google Grey 10 | `#F8F9FC` | Light mode canvas background & card well sunk |
| `--g-grey-1200`| Google Grey 1200 | `#121317` | Dark mode canvas background (**Never pure `#000000`**) |
