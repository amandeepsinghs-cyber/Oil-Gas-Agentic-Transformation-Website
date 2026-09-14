# Quarantined Scroll Decks

**Archived 2026-09-14.** Three continuous-scroll builds of the deck, all superseded.

## Why they were retired

Each of these duplicated slide content that also lives in `working_deck/pages/`.
Two hand-maintained copies of the same narrative drift, and these did:

- the live pages were edited through **2026-09-13**
- all three scroll decks stopped at **2026-09-12**

The result was that every one of them ended at `id="stage-05"` — the Jenga /
Structural Resilience page. **Six of the twelve surfaces were unreachable by
scrolling:** the Petrophysical AI Agent, the Sovereign Reference Architecture,
the Vulnerability Board, the Agentic Value Topology, and the 100-Day plan.

Worse, pages 06–10 each carried a "Continuous Deck View" button pointing at
`#stage-06` … `#stage-10`, anchors that were never built. Eleven links in total.
They did not error — a missing fragment just drops you at the top of the file —
so the failure was silent, and the deck looked complete right up to the point
where it stopped.

## What replaced them

`index.html` at the repo root is now a **launcher**: a directory of links to the
12 live surfaces, with no slide content in it at all. It cannot drift, because
there is nothing in it to drift.

The eleven dead buttons were repointed to the launcher and relabelled
**"All Slides"**.

## Inventory

| File | Was | Notes |
|---|---|---|
| `root_index.html` | `index.html` | The most complete of the three. The only one containing `stage-02b` (The Great Crew Change). 7 sections: `stage-00`–`05` + `02b`. |
| `working_deck_index.html` | `working_deck/index.html` | 6 sections, `stage-00`–`05`. No `02b`. Nav bar lists only six items. |
| `deck.html` | `deck.html` | A byte-level fork of `root_index.html`, same six sections, no `02b`. Was already dead — nothing linked to it. Originally produced by the now-quarantined `build_deck.py`. |

> [!WARNING]
> **These will render unstyled from this directory.** All three reference
> `assets/…` or `../assets/…` relative to their original location. From here the
> correct prefix would be `../../assets/`. Paths were deliberately left unmodified
> so the files remain byte-faithful to what was retired. If you need to view one,
> move it back first (below) rather than editing paths in place.

## To view or restore one

```bash
# example: the root scroll deck
git mv legacy_strategic_files/scroll_decks/root_index.html index_scroll_OLD.html
# open index_scroll_OLD.html, then move it back when done
```

Do not restore one to `index.html` — that is the launcher now.

## If you ever want a real continuous scroll deck again

Do not hand-maintain it. Generate it from `working_deck/pages/`, one-way, with
`pages/` as the single source of truth. Note two obstacles found during review:

- `page_08.html` and `page_09.html` each carry their own full `<style>` block and
  two `<script>` blocks. They are self-contained applications, not slide
  fragments. `page_08`'s stylesheet is a deliberate full-page reset written to
  escape `styles.css`, so inlining it into a shared document will bleed.
- There is 1 duplicate DOM id across the page set, which would need resolving.

Generating in the other direction — `slides/` → `pages/` — is what the quarantined
`working_deck_build.py` did, and it is what destroyed the deck. See
`../build_pipeline/README.md`.
