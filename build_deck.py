#!/usr/bin/env python3
"""
build_deck.py — Fast Compiler for Fluid Web-First Modular Executive Deck
Stitches modular slides in slides/slide_*.html into master deck.html
"""

import os, glob, re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SLIDES_DIR = os.path.join(BASE_DIR, "slides")
OUTPUT_HTML = os.path.join(BASE_DIR, "deck.html")

SLIDE_TITLES = [
    ("00", "Executive Cover", "Hero Cockpit"),
    ("01", "Capital Reality", "Act I: Problem"),
    ("02", "Swiss Cheese Model", "Act I: Problem"),
    ("03", "3 MECE Traps", "Act I: Problem"),
    ("04", "Workforce Personas", "Act I: Problem"),
    ("05", "Vulnerability Matrix", "Act I: Problem"),
    ("06", "5 Solution Criteria", "Act II: Solution"),
    ("07", "Autonomous Agents", "Act II: Solution"),
    ("08", "Jenga Organization", "Act II: Solution"),
    ("09", "Splicing Architecture", "Act III: Proof"),
    ("10", "GCS Ingestion & A2UI", "Act III: Proof"),
    ("11", "Well A-12 Splicing", "Act III: Proof"),
    ("12", "Cryptographic Ledger", "Act III: Proof"),
    ("13", "Enterprise Fleet", "Act III: Proof"),
    ("14", "Discovery Workshop", "Act III: The Ask"),
    ("15", "Mandate & Next Steps", "Act III: The Ask"),
]

def generate_template(slides_count):
    # Top act navigation items
    top_nav = """
      <a href="#slide-01" class="chapter-nav-item active" onclick="scrollToSlide(0); return false;">ACT I: THE PROBLEM</a>
      <a href="#slide-06" class="chapter-nav-item" onclick="scrollToSlide(5); return false;">ACT II: THE ARCHITECTURE</a>
      <a href="#slide-09" class="chapter-nav-item" onclick="scrollToSlide(8); return false;">ACT III: PROOF & MANDATE</a>
    """
    
    # Floating dock items for all slides
    dock_items = []
    for i in range(slides_count):
        num_str = f"{i+1:02d}"
        title = SLIDE_TITLES[i][1] if i < len(SLIDE_TITLES) else f"Slide {num_str}"
        active_cls = " active" if i == 0 else ""
        dock_items.append(
            f'    <a href="#slide-{num_str}" class="dock-item{active_cls}" title="{title}" onclick="scrollToSlide({i}); return false;">{num_str}</a>'
        )
    dock_html = "\n".join(dock_items)

    return f"""<!DOCTYPE html>
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

  <!-- Executive Top Navigation Bar (Frosted Glass & Nebula Accents) -->
  <header class="executive-top-nav">
    <div class="executive-brand-lockup">
      <img src="assets/media/wip/image25.png" alt="Google Cloud">
      <span class="executive-brand-badge">SOVEREIGN AGENTIC TRANSFORMATION</span>
    </div>
    <nav class="executive-chapter-links">
{top_nav}
    </nav>
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="display: flex; align-items: center; gap: 6px; padding: 4px 12px; background: rgba(0, 210, 180, 0.08); border: 1px solid rgba(0, 210, 180, 0.25); border-radius: 20px; font-family: var(--font-mono); font-size: 11px; color: var(--security-mint);">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--security-mint); box-shadow: 0 0 8px var(--security-mint);"></span>
        <span>100% MEITY SOVEREIGN</span>
      </div>
      <div id="slide-progress-counter" style="font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); padding: 4px 8px; border: 1px solid var(--border-hairline); border-radius: 6px;">
        01 / 15
      </div>
      <button onclick="toggleFullscreen()" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-hairline); color: var(--text-body); font-family: var(--font-display); font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 6px; cursor: pointer; transition: all 0.2s;">
        ⛶ Fullscreen
      </button>
    </div>
  </header>

  <!-- Fluid Master Viewport Container (Zero Transform Scaling) -->
  <div id="viewport-scaler">

{{SLIDES_CONTENT}}

  </div>

  <!-- Executive Floating Chapter Dock (15-Stage Scrollytelling Pill) -->
  <div class="floating-dock">
{dock_html}
  </div>

  <script src="assets/interactive.js"></script>
  <script src="assets/presenter.js"></script>
</body>
</html>
"""

def extract_order_number(filename):
    match = re.search(r'(?:page|act|slide)_(\d+)', filename)
    return int(match.group(1)) if match else 999

SLIDE_ORDER = [
    "slide_00_title.html",
    "slide_01_capital_reality.html",
    "slide_02_swiss_cheese.html",
    "slide_03_the_need_criteria.html",
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

def main():
    import sys
    if "--legacy" in sys.argv:
        import build_deck_legacy
        build_deck_legacy.main()
        return

    slide_files = [os.path.join(SLIDES_DIR, fname) for fname in SLIDE_ORDER if os.path.exists(os.path.join(SLIDES_DIR, fname))]

    if not slide_files:
        print(f"[ERROR] No modular slide files found in {SLIDES_DIR}!")
        return

    print(f"Compiling {len(slide_files)} modular slides into deck.html...")
    slides_html = []
    for sf in slide_files:
        with open(sf, "r", encoding="utf-8") as f:
            content = f.read().strip()
            slides_html.append(content)
        print(f"  + Added: {os.path.basename(sf)}")

    combined_content = "\n\n".join(slides_html)
    template = generate_template(len(slide_files))
    full_output = template.replace("{{SLIDES_CONTENT}}", combined_content)

    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(full_output)

    print(f"\n[SUCCESS] Successfully compiled {len(slide_files)} modular slides into:")
    print(f" -> {OUTPUT_HTML} ({os.path.getsize(OUTPUT_HTML) / 1024:.1f} KB)")

if __name__ == "__main__":
    main()


