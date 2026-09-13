# Style & Formatting Audit — Colour, Type, and Brand Alignment

**Repo:** `O&G_slidedeck_agentic_transformation`
**Date:** 2026-09-12
**Scope:** 22 HTML/CSS files — `personas/`, `assets/`, `working_deck/`, root decks
**Reference:** [Google Cloud brand — Color](https://sites.google.com/google.com/overview/brand-identity/color) · [Gradients](https://sites.google.com/google.com/overview/brand-identity/gradients)
**Method:** Every number below is a machine count, not an impression. The live proof sheet is at `personas/_palette.html`.

---

## Verdict

> [!IMPORTANT]
> **The deck is not on the Google Cloud brand palette. One file is.**
>
> Aurora colours appear **14 times in the entire repo** — and all 14 are the token *definitions* inside `personas/profile.html`. Every other surface runs on **Tailwind's default Slate palette** plus **legacy Material/GM2 Google colours** plus a **bespoke teal nobody chose deliberately**.

| Palette | Occurrences | Files | What it is |
|---|---:|---:|---|
| **Aurora (official)** | **14** | **1** | The current Google Cloud brand palette |
| Legacy Google / Material GM2 | 207 | 8 | `#1A73E8`, `#4285F4`, `#34A853`, `#FBBC04`, `#EA4335` — the *pre-Aurora* brand |
| Tailwind Slate + ad-hoc | 1,013 | 20 | `#94A3B8`, `#CBD5E1`, `#0F172A`, `#F59E0B`, `#00D2B4` … |

That is a **87:1 ratio of off-brand to on-brand colour.**

The good news: this is a *token* problem, not a *design* problem. The layouts are fine. Almost every fix below is a find-and-replace behind a variable name, and the hard part — deciding what each colour is allowed to mean — is already done on the profile page and just needs propagating.

---

## 1 · How you can *see* that Aurora is implemented

Open this, with the preview server running:

```
http://127.0.0.1:8899/personas/_palette.html
```

It is a **self-grading proof sheet**. It does not re-declare the palette and mark its own homework — it loads `profile.html` in a hidden same-origin iframe and reads the *live computed value* of every colour token off the real page, then grades each against the official hex. If the page ever drifts off-brand, the sheet turns red on its own.

It reports four things:

| Panel | What it proves | Current score |
|---|---|---|
| Core colours | Each token equals the official Aurora hex | **7 / 7 exact** |
| Colour meanings | The only job each hue is permitted to do | 6 declared |
| Text contrast | WCAG AA ratio for every text-on-surface pair | **4 / 8 pass** ⚠️ |
| Gradient discipline | Every gradient is an approved brand pair | **3 / 3 approved** |

> [!NOTE]
> The contrast panel is the one that matters. See finding **C1** — it is the most substantive thing this audit found, and it is on the *good* page.

---

## 2 · Colour findings

### A1 · Three palettes are fighting, and the winner is Tailwind
`assets/styles.css` alone holds **79 distinct hex values across 568 occurrences**. The most-used colour in the whole repo after white is `#94A3B8` (190×) — Tailwind Slate 400. Then `#CBD5E1` (168×) — Slate 300. Neither is a Google colour.

**Top off-brand values, repo-wide:**

| Hex | Count | What it actually is |
|---|---:|---|
| `#94A3B8` | 190 | Tailwind Slate 400 |
| `#CBD5E1` | 168 | Tailwind Slate 300 |
| `#00897B` | 78 | Material Teal 600 |
| `#0F172A` | 73 | Tailwind Slate 900 |
| `#F59E0B` | 72 | Tailwind Amber 500 |
| `#E2E8F0` | 67 | Tailwind Slate 200 |
| `#06090E` | 61 | Bespoke near-black |
| `#1A73E8` | 60 | **Legacy** Google Blue (pre-Aurora) |
| `#00D2B4` | 58 | Bespoke turquoise — not Google at all |
| `#C084FC` | 42 | Tailwind Purple 400 |

### A2 · `#1A73E8` is not Google Blue any more
It is used 60 times across 7 files as the "brand blue". Aurora Blue 500 is **`#3186FF`**. `#1A73E8` is the previous generation. This is the single most visible off-brand value because it is the one being used *on purpose* as the brand colour.

### A3 · A bespoke teal has quietly become a second brand
`--security-turquoise: #00D2B4` and `#00897B` together account for **136 occurrences**. They are not in any Google palette. They read as a deliberate accent, which makes them more damaging than random Tailwind greys — a viewer will assume they are your brand.

### A4 · Two brand rules are broken systematically

The brand guidelines state, verbatim: *"Don't use gradients as backgrounds"* and *"Don't use gradients to highlight text."*

| Violation | Count | Worst files |
|---|---:|---|
| Gradient on text (`background-clip: text`) | ~26 declarations | `assets/styles.css`, `deck.html`, `index.html`, `page_00`, `page_01`, `page_03`, `page_06`, `page_07`, `page_10` |
| Gradient as a section/page background | ~50 declarations | `assets/styles.css` (26), `deck.html` (15), `index.html` (17) |
| Pure black (`#000` / `rgba(0,0,0,…)`) | 96 across 17 files | Brand says *"Do not use pure black for backgrounds"* — use Grey 1200 `#121317` |

### A5 · Token names don't agree with each other
The same concept has three different names depending on which file you are in:

| Concept | `assets/styles.css` | `personas/persona.html` | `personas/profile.html` |
|---|---|---|---|
| Display font | `--font-display` | `--font-display` | `--font` |
| Mono font | `--font-mono` | `--font-mono` | `--mono` |
| Brand accent | `--security-blue: #1A73E8` | — | `--accent: var(--g-blue)` |
| Accent 2 | `--security-turquoise: #00D2B4` | — | *(none — deliberately)* |

There is **no shared stylesheet**. Every page re-declares its own tokens, so there is no single place to make a colour correct.

`assets/styles.css` also contains **7 pairs of same-value aliases** — `--bg-canvas` == `--bg-obsidian`, `--security-blue` == `--accent-blue`, `--security-turquoise` == `--border-active`, `--nebula-cyan-bright` == `--accent-cyan`, and three more. Two names for one colour means two places to miss.

### A6 · Tokens that are referenced but never defined
Each of these silently produces an invalid declaration that falls back to an inherited value — no error, no warning:

| Token | Referenced at | Defined |
|---|---|---|
| `--grad-emerald` | `styles.css:673` | never |
| `--grad-alert` | `styles.css:683`, `:1200` | never |
| `--grad-gold` | `styles.css:693` | never |
| `--border-medium` | `styles.css:1195` | never |
| `--fs-11` | `profile.html:742,744,745` | never |
| `--hazard-amber`, `--slate-bg/-panel/-border` | deck markup | **only under `.theme-light`** → undefined in dark mode for `index.html` / `deck.html` |

Conversely, three of the six `--grad-*` tokens that *are* defined are never used, while the `#00897B → #0284C7` pair is hand-written three separate times (`styles.css:2158`, `:2378`, `:2473`).

### A7 · `assets/styles.css` contains two contradictory light themes
`:61–82` sets `--bg-canvas: #F8FAFC; --bg-obsidian: #FFFFFF`.
`:1418–1437` re-declares the same selector family with those two values **swapped**.
Source order silently decides the winner, and the first block is dead for those properties.

### A8 · The light theme is keyed to slide copy
`styles.css:1440–2750` is roughly **330 lines of `!important` overrides**, many matched by attribute selectors that string-match inline styles and *text content* in other files:

```css
[style*="background: rgba(13, 17, 23"] { … !important }
[style*="4,389-NODE NEBULA PARTICLE ENGINE"] { … !important }
```

> [!CAUTION]
> Editing a headline on a slide can break that slide's light theme, with no error anywhere. This is the most fragile construct in the repo and the reason light mode drifts every time copy changes.

### A9 · Two incompatible theme conventions — the deck→persona handoff is broken

| | Class | localStorage key | Default |
|---|---|---|---|
| `personas/profile.html` | `theme-dark` | **`persona-theme`** | light |
| Everything else (11 deck pages, `persona.html`, `index.html`) | `theme-light` | **`deck-theme`** | dark |

A viewer who switches the deck to light and clicks through to a persona page lands on a page with its own independent setting, which may be the opposite. There is also **no `prefers-color-scheme` query anywhere** in the repo.

---

## 3 · Contrast — the real problem

This is the finding I would act on first, because it affects the page you are about to show people.

| Pair | Used for | Ratio | Needs | |
|---|---|---:|---:|---|
| `--text` / `--surface` | body text on a card | 15.52:1 | 4.5:1 | ✅ |
| `--text-muted` / `--surface` | secondary text | 6.11:1 | 4.5:1 | ✅ |
| `--text` / `--canvas` | body on canvas | 14.74:1 | 4.5:1 | ✅ |
| `--text-muted` / `--canvas` | rail items | 5.80:1 | 4.5:1 | ✅ |
| **`--text-dim` / `--surface`** | **labels and captions** | **3.11:1** | 4.5:1 | ❌ |
| **`--text-dim` / `--surface-sunk`** | **tag chips** | **2.81:1** | 4.5:1 | ❌ |
| **`--accent` / `--surface`** | **links, agent refs** | **3.51:1** | 4.5:1 | ❌ |
| **`--g-green` / `--surface`** | **the hours-saved figure** | **2.89:1** | 3:1 | ❌ |

### C1 · Aurora Blue 500 fails AA as text on white
`#3186FF` on `#FFFFFF` is **3.51:1**. This is not a mistake in the deck — it is inherent to the colour. Aurora Blue 500 is a *display and fill* colour; it was never intended to carry 13px body text.

**This is the "use colour intentionally" answer.** The fix is not to abandon the brand colour, it is to split the role:

- **Fills, chips, bars, large numerals** → pure brand hex, unchanged. Correct and on-brand.
- **Text and small icons on light surfaces** → a darkened companion of the same hue, used *only* for text.

That keeps every swatch a viewer perceives as the brand colour exactly on-brand, while the 13px link text is legible.

The companions below are not hand-picked. Each is the **lightest tint of the brand hue that still clears 4.5:1 on both white and the sunk surface** — so it is the smallest possible deviation from brand that is legible everywhere the token is used:

| Role | Brand value (fills, bars, large numerals) | Text companion | on `#FFFFFF` | on `#F1F3F9` |
|---|---|---|---:|---:|
| Blue | `#3186FF` | `#286DD1` *(82% of brand)* | 5.00:1 | 4.51:1 |
| Green | `#00AF57` | `#007F3F` *(73%)* | 5.11:1 | 4.61:1 |
| Dim text | `#8A92A6` | `#686E7E` *(76%)* | 5.10:1 | 4.59:1 |

> [!NOTE]
> The obvious first guesses fail. `#6B7387` for dim text reads 4.74:1 on white — fine — but **4.28:1 on the sunk surface**, which is exactly the tag-chip case that was failing to begin with. Any candidate has to be checked against *both* backgrounds, which is why `_palette.html` tests the pair rather than the colour.

> [!WARNING]
> `--g-green` failing at 2.89:1 is the "23 h saved" number — the single most important figure on the page. It is currently the least legible thing in the summary strip.

---

## 4 · Typography findings

### B1 · Every page in this deck is currently rendering in a fallback font — including the new one

This is the highest-impact fix in this document, and it is a one-line change per file.

`Google Sans` is **declared in 4 files and loaded in 1.** There is not a single `@font-face` or `@import` anywhere in the repo; only `page_07.html` and `preview_cheese.html` carry a `fonts.googleapis.com` link.

Two facts verified just now:

| Check | Result |
|---|---|
| Does the public CDN actually serve Google Sans? | **Yes** — `fonts.googleapis.com/css2?family=Google+Sans` returns **HTTP 200** with a real `@font-face` block. So does `Google+Sans+Text`. |
| Is Google Sans installed on this machine? | **No** — `fc-list` finds 0 matches. |

> [!WARNING]
> Put those together: **the deck is not rendering in Google Sans anywhere except `page_07`, and never has been — not even on your own screen.** Every screenshot you have reviewed, including the new profile page, is Helvetica/Arial/Roboto standing in. Adding the CDN link will visibly change the typography of the whole deck. Expect it to look *different*, not just *better*, and re-check line-wrapping afterwards.

### B2 · Four phantom typefaces, not one

| Family | Declared in | Loaded? |
|---|---|---|
| **`Cabinet Grotesk`** | `personas/persona.html:17`, `page_08.html:17`, `page_09.html:17` (+4 copies under `final_slides/`) | ❌ never. A **licensed commercial** face from Indian Type Foundry — not a Google font, and a licensing question if it ever *were* loaded. |
| `JetBrains Mono` | `styles.css:58`, `persona.html:18`, `page_08:18`, `page_09:18`, `profile.html:56` | ❌ never |
| `Inter` | `styles.css:57` | ❌ never |
| `Google Sans` | `styles.css:56,57`, `profile.html:54`, `page_07:14` | only on `page_07` |

The same `var(--font-display)` therefore resolves to **three different intended typefaces** across one deck: Google Sans on `page_07`, Cabinet Grotesk on `page_08`/`page_09`/`persona.html`, system sans everywhere else.

Worse, `persona.html:7` loads `styles.css` (which sets `--font-display: "Google Sans"`) and then overrides it to `Cabinet Grotesk` at `:17` — **the two stylesheets disagree about the deck's typeface inside a single document.**

### B3 · There is no type scale outside the profile page

| File | Distinct `font-size` values | Notes |
|---|---:|---|
| `assets/styles.css` | **30** | includes 12.5, 14.5, 15.5, 16.5, 17.5, 19.5, 21, 22 px |
| `working_deck/pages/page_08.html` | 17 | includes **8.5px, 9px, 9.5px** — below readable minimum |
| `working_deck/pages/page_09.html` | 12 | half-pixel sizes throughout |
| `personas/profile.html` | 8 tokens | a real scale — the model to copy |

Half-pixel font sizes are a reliable signature of sizes chosen by nudging in a browser rather than from a scale.

### B4 · `--fs-11` is used three times and never defined *(bug, in the good file)*
`personas/profile.html` lines **742, 744, 745** reference `var(--fs-11)`. The `:root` scale defines 10, 12, 13, 14, 16, 20, 28, 40 — there is no 11. Those three declarations are invalid and silently inherit their parent's size. One-line fix; listed first on the checklist.

---

## 5 · What to learn from the mining deck

> [!CAUTION]
> **Do not copy mining's colours.** It runs entirely on Material GM2 (`#1A73E8`, `#D93025`, `#1E8E3E`) with **zero Aurora colours, zero Google Sans, and no Gemini gradient** anywhere in the repo. As a *brand* reference it is worse than what you have. Its value is entirely in **discipline**.

Worth taking:

1. **Border-colour is the hover signal, not shadow.** `app.css:270` — `:hover { border-color: var(--m3-primary); box-shadow: var(--shadow-sm); }`. Lift is capped at 1–2px. Cheap, quiet, consistent.
2. **Four shadow tokens, barely spent.** `--shadow-lg` is used *exactly once* in 864 lines (the modal). The page reads flat and depth means something.
3. **The 4px left-rule as the universal semantic marker**, reused at four scales with only the colour changing. You already do this on the friction line — extend it.
4. **Container / on-container tint pairs instead of new hexes.** Three semantic tints from two lines of CSS and zero new colour values.
5. **Coloured shadows derived from the accent hex.** `rgba(26,115,232,0.18)` *is* `#1A73E8` decomposed, so the glow can never drift off-brand.
6. **One gradient in 864 lines** — on the single "this is the money" tile. Everything else is flat fill.
7. **Dashed border reserved for exactly one meaning: "not real yet."** Directly applicable — **none of your 232 agents is deployed.** A dashed edge is an honest, zero-copy way to say so.
8. **Mono is reserved for telemetry, IDs, and formulas.** Never decorative.
9. **The motion budget is written down and enforced**, including a full `prefers-reduced-motion` kill with a stated reason.
10. **`color-mix()` for one-off tints** instead of inventing a hex.
11. **Hierarchy decisions are recorded as prose in the CSS**, e.g. *"Two filled primary buttons stacked read as two equal choices."*

### On name vs. profession — mining's convention
Mining **leads with the person's name and never demotes the role typographically**. It puts both on one line at one size:

```html
<h2 style="font-family:var(--font-serif); font-size:24px; font-weight:700;">
  Elena Ramos, Chief Mine Geologist
</h2>
```

The tab label drops the role entirely: `"P8: Elena Ramos"`.

**What I implemented instead:** name as the 40px H1, role directly beneath at 20px. Reason: your page is *organised by role* — the rail groups 33 roles by value-chain segment — so collapsing the role into a comma-suffix at 40px would both wrap badly and bury the page's organising principle. Name is bigger than the role, which satisfies your brief. If you prefer mining's one-line form, it is item **14** on the checklist.

---

## 6 · What to learn from our own previous page

`personas/persona.html` is still the best-composed thing in the repo apart from the new page, and two of its ideas are worth keeping:

1. **The narrative arc** — *answerable for → touchpoints → day in the life → squad → decision rights*. Already reclaimed and rebuilt from research data on the new page.
2. **The micro-label idiom** — 10px mono, weight 700–800, uppercase, positive letter-spacing. Consistent across ~14 uses. The new page uses the same idea; worth formalising as a token so it can't drift.

What **not** to keep: the Cabinet Grotesk declaration (B2), the 18 hardcoded hexes, and the deck-row identity model, which dies in Phase 2.

---

## 7 · The checklist

Nothing below has been done. Ordered by impact per unit of effort.

### P0 — Do first (all small, all safe)

- [ ] **1. Define `--fs-11`** (or retarget `profile.html:742,744,745` to `--fs-12`). *Live bug, one line.*
- [ ] **2. Load Google Sans** — add `preconnect` + the `fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700` link to `personas/profile.html`, `personas/_palette.html` and every `styles.css` consumer. **Verified HTTP 200.** Re-screenshot everything afterwards: the whole deck's typography will change.
- [ ] **3. Fix the four contrast failures** — add `--accent-text: #286DD1`, `--green-text: #007F3F`, `--text-dim: #686E7E`, used *only* for text. Keep pure brand hexes for fills, bars and chips. Re-run `_palette.html` until it reads **8/8**.
- [ ] **4. Remove `'Cabinet Grotesk'`** from `persona.html:17`, `page_08:17`, `page_09:17`. Point them at the same stack as `profile.html`.
- [ ] **5. Delete or define the 4 dead tokens** — `--grad-emerald`, `--grad-alert`, `--grad-gold`, `--border-medium`.
- [ ] **6. Resolve the duplicate light theme** in `styles.css` — delete whichever of `:61–82` / `:1418–1437` is not the intended one. Right now the canvas/obsidian values are swapped between them.

### P1 — The consolidation that makes everything else cheap

- [ ] **7. Extract one shared stylesheet**, `assets/aurora.css` — Aurora tokens, the 8-step type scale, shadows, radii, and the semantic colour map as a comment. Single source of truth.
- [ ] **8. Point `profile.html` and `_palette.html` at it**, deleting their local `:root` blocks. Proof sheet must still read 7/7.
- [ ] **9. Replace `#1A73E8` → `#3186FF`** (60 occurrences, 7 files) plus the four other legacy Material colours.
- [ ] **10. Retire the bespoke teal** — decide what `--security-turquoise` meant, then map it onto an Aurora hue (136 occurrences). *Blocked on open question 2.*
- [ ] **11. Replace pure black** (96 occurrences, 17 files) with Grey 1200 `#121317`.
- [ ] **12. Collapse the 7 same-value token aliases** to one name each.
- [ ] **13. Unify token names across files** — `--font-display`/`--font` → one; `--font-mono`/`--mono` → one.

### P2 — Brand-rule compliance

- [ ] **14. Remove gradient-on-text** (~26 declarations, 9 files). Explicitly forbidden by the brand. Replace with a flat colour.
- [ ] **15. Remove gradient-as-background** (~50 declarations). Replace with flat Grey 10 / white / Grey 1200.
- [ ] **16. Consolidate the ~30 bespoke inline radial gradients** on the deck pages — they differ only by 1–2% alpha and a few percent of position. One token, used everywhere.
- [ ] **17. Audit every surviving gradient** against the four approved pairs; delete the rest.

### P3 — Consistency

- [ ] **18. *Decision:* name/role hierarchy** — keep 40px name over 20px role, or adopt mining's one-line `"Karim Haddad, Petrophysicist"` at a single size. *Your call.*
- [ ] **19. Unify the theme convention** — one class name and one `localStorage` key across the deck and the persona pages, so the handoff doesn't flip theme.
- [ ] **20. Collapse `styles.css` to the 8-step type scale** (from 20–30 distinct sizes). Kill every half-pixel value.
- [ ] **21. Pick one hero-title `clamp()`** — five pages currently use five different expressions for the same visual role.
- [ ] **22. Raise sub-10px type** in `page_08` / `page_09` to a 10px floor.
- [ ] **23. Reduce the ~46 distinct box-shadows** in `styles.css` to the 3-step token ladder. *(Its own header comment at `:4` claims "Zero Shadows".)*

### P4 — Keeping it fixed

- [ ] **24. Untangle the copy-keyed light theme** (`styles.css:1440–2750`). Replace `[style*="…"]` and text-matching selectors with real classes. **Highest-risk item here** — today, editing a headline silently breaks that slide's light mode.
- [ ] **25. Extend `_palette.html` to scan every page**, not just the profile page, turning it into a repo-wide regression check.
- [ ] **26. Add a dashed-border convention for undeployed agents** (all 232), per mining's "not real yet" idiom.

---

## 8 · Open questions

1. **Is the rest of the deck in scope?** Items 7–16 touch 20 files and ~1,200 colour occurrences. If only the persona pages are going to be shown, P0 + items 5/6 get you a fully compliant surface for a fraction of the work.
2. **What did the turquoise mean?** It reads deliberate. Before mapping it onto Aurora I need to know whether it signified "security", "AI", or just "accent".
3. **Item 14** — name/role hierarchy, your call.
