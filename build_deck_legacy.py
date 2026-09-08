#!/usr/bin/env python3
"""
build_deck_legacy.py — Compiler for Legacy Fixed 16:9 Presentation Deck
Stitches modular slides in slides_legacy/slide_*.html into master deck_legacy.html
"""

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SLIDES_LEGACY_DIR = os.path.join(BASE_DIR, "slides_legacy")
OUTPUT_HTML = os.path.join(BASE_DIR, "deck_legacy.html")

SLIDE_ORDER = [
    "slide_00_title.html",
    "slide_01_capital_reality.html",
    "slide_02_swiss_cheese.html",
    "slide_03_mece_traps.html",
    "slide_04_workforce_personas.html",
    "slide_05_vulnerability_matrix.html",
    "slide_06_solution_criteria.html",
    "slide_07_introducing_agents.html",
    "slide_08_jenga_comparison.html",
    "slide_09_splicing_architecture.html",
    "slide_10_demo_part1_ingestion.html",
    "slide_11_demo_part2_splicing.html",
    "slide_12_demo_ledger_takeaways.html",
    "slide_13_enterprise_fleet.html",
    "slide_14_lighthouse_charter.html",
    "slide_15_next_steps.html",
]

LEGACY_HEADER = """<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Closing the Unseen Fractures | Oil & Gas Agentic Transformation</title>
  <link rel="stylesheet" href="assets/styles.css">
  <!-- Visualization Engines & Libraries -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body>

  <!-- Fixed 16:9 Master Viewport Scaler (1920x1080) -->
  <div id="viewport-scaler">
"""

LEGACY_FOOTER = """
  </div>

  <!-- HUD Presentation Controls (Auto-hides in projection) -->
  <div class="hud-controls">
    <button class="hud-btn" onclick="prevSlide()" title="Previous (Left Arrow / PageUp)">◀ Prev</button>
    <div class="hud-counter" id="slide-indicator">01 / 16</div>
    <button class="hud-btn" onclick="nextSlide()" title="Next (Right Arrow / Space)">Next ▶</button>
    <div style="width: 1px; height: 18px; background: var(--border-subtle);"></div>
    <button class="hud-btn" onclick="toggleNotes()" title="Toggle Speaker Delivery Notes (N)">📝 Notes</button>
    <button class="hud-btn" onclick="toggleFullscreen()" title="Toggle Fullscreen (F)">⛶ Fullscreen</button>
    <button class="hud-btn" onclick="window.print()" title="Print to 16:9 Boardroom PDF">🖨️ PDF</button>
  </div>

  <!-- Presenter Notes Modal (Toggled via N) -->
  <div class="presenter-notes" id="notes-modal">
    <div class="notes-header">Executive Speaker Delivery Notes</div>
    <div class="notes-body" id="notes-content">Loading notes...</div>
  </div>

  <script src="assets/presenter.js"></script>
</body>

</html>
"""

def main():
    slide_files = [os.path.join(SLIDES_LEGACY_DIR, fname) for fname in SLIDE_ORDER]
    missing = [f for f in slide_files if not os.path.exists(f)]
    if missing:
        print(f"[ERROR] Missing slide files: {missing}")
        return

    print(f"Compiling {len(slide_files)} legacy slides into deck_legacy.html...")
    slides_html = []
    for sf in slide_files:
        with open(sf, "r", encoding="utf-8") as f:
            content = f.read().rstrip()
            slides_html.append(content)
        print(f"  + Added: {os.path.basename(sf)}")

    combined_content = "\n\n".join(slides_html)
    full_output = LEGACY_HEADER + combined_content + LEGACY_FOOTER

    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(full_output)

    print(f"\n[SUCCESS] Successfully compiled {len(slide_files)} legacy slides into:")
    print(f" -> {OUTPUT_HTML} ({os.path.getsize(OUTPUT_HTML) / 1024:.1f} KB)")

if __name__ == "__main__":
    main()
