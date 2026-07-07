# VW ID.7 Visualizer — Design Handoff
**Project:** Visualizer Vision (2025)
**File:** `vw_id7.html` (self-contained, ~22MB, all assets base64 embedded)
**Figma source:** New Brand Design → page `🟡 Selection Tile Fix`
**Local preview:** `http://127.0.0.1:5500/vw_id7.html` (VS Code Live Server) or `http://localhost:8080/vw_id7.html` (Python server)

---

## Breakpoints

| Name | Width | Figma Node ID |
|---|---|---|
| Mobile SM | 375px | `16861:2759` |
| Mobile | 440px | `16861:2660` |
| Tablet | 768px | `16861:2542` |
| Laptop SM | 960px | `16861:2696` |
| Laptop | 1280px | `16861:2726` |
| Laptop L | 1440px | `16861:2456` |
| Desktop | 1600px | `16861:2501` |
| Desktop L | 1920px | `16861:2619` |
| Desktop XL | 2560px | `16861:2577` |

---

## Grid System — 24 Columns

The layout uses a **24-column grid** at all viewports.

```css
/* 1-column margin at all viewports below 2560px */
padding: 0 calc(100vw / 24);

/* 3-column margin at 2560px and above */
@media (min-width: 2560px) {
  padding: 0 calc(100vw / 8);
}
```

| Viewport | Column width | Margin (1 col) |
|---|---|---|
| 375px | 15.6px | 15.6px |
| 768px | 32px | 32px |
| 960px | 40px | 40px |
| 1280px | 53px | 53px |
| 1440px | 60px | 60px |
| 1920px | 80px | 80px |
| 2560px | 106px | 320px (3 cols) |

---

## Topbar — Specs

### Dimensions
- Height: `64px`
- Padding: `8px 0` on `#topbar`
- Inner container handles all horizontal spacing via grid

### Structure
```
#topbar
└── .topbar-container          ← full width, grid padding
    ├── .topbar-left           ← logo + tabs grouped (gap: 20px)
    │   ├── .topbar-logo-col   ← 32×32 VW logo
    │   └── .topbar-tabs-col
    │       └── .topbar-tabs   ← nav tabs (gap: 20px)
    └── .topbar-actions-col
        └── .topbar-actions    ← dealer text + icons (gap: 16px)
```

### Typography
| Element | Font | Weight | Size |
|---|---|---|---|
| Nav tabs | VW Text | Bold (700) | 16px |
| Dealer text | VW Text | Regular (400) | 14px |

### Figma Node IDs (1440px frame)
| Element | Node ID |
|---|---|
| TopBar instance | `16861:2458` |
| TopBar (2560px) | `16861:2579` |
| TopBar Menu | `I16861:2458;12173:25330` |
| Container | `I16861:2458;10392:37930` |
| Logo VW | `I16861:2458;10392:37932` |
| Actions | `I16861:2458;10392:37940` |

---

## Icons — Exact Figma SVGs

All icons exported via `node.exportAsync({ format: 'SVG' })` directly from Figma. **Do not recreate manually.**

| Icon | Size | Figma Node ID |
|---|---|---|
| Pin (Select dealer) | 24×24 | `I16861:2458;10392:37940;10139:2608;10139:3292;583:211026` |
| Magnifier (Search) | 24×24 | `I16861:2458;10392:37940;10139:2609;8850:4356` |
| Login (Account) | 24×24 | `I16861:2458;10392:37940;10139:2610;10139:3248;583:211026` |
| Shopping cart | 24×24 | `I16861:2458;10392:37940;10139:2611;10139:3282;583:211026` |
| VW Logo | 32×32 | `I16861:2458;10392:37932` |

### Icon tap target rule
Icons are **24×24** SVGs centered inside **32×32** tap targets:
```css
.topbar-cta {
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
}
.topbar-cta svg {
  width: 24px; height: 24px;
}
```

---

## Assets — 360° Rotation

- **Colour:** Grenadilla Black
- **Frames:** 36 WebP images (1920×1080, q=88)
- **Drag to rotate:** Left/Right arrows also supported
- **Static colours 1–4:** Full 1920×1080 PNG → WebP
- **Colours 5–13:** Fallback to 92×92 thumbnail (no full-res source in original zip)

---

## Pending / Known Issues

- [ ] Topbar icon hover states (state layer) not yet implemented
- [ ] Mobile topbar (hamburger menu) not yet built
- [ ] Colour swatches 5–13 missing full-resolution images
- [ ] Showroom Navigation bar (below topbar, 52px) not yet implemented in HTML
- [ ] WCAG 2.2 audit on colour/rim selection panel overflow affordance

---

## Local Dev Setup

### Option A — VS Code Live Server (recommended, auto-reload)
1. Install **Live Server** extension by Ritwick Dey
2. Open `~/Downloads/vw_id7.html` in VS Code
3. Click **Go Live** in bottom-right status bar
4. Preview at `http://127.0.0.1:5500/vw_id7.html`
5. Re-download `vw_id7.html` → auto-reloads

### Option B — Python server
```bash
cd ~/Downloads && python3 -m http.server 8080 --bind 127.0.0.1
```
Preview at `http://localhost:8080/vw_id7.html` — keep Terminal tab open.

---

## Next Thread Quickstart

Paste this at the start of a new conversation:

> "Continuing VW ID.7 visualizer prototype. File is `~/Downloads/vw_id7.html`, 22MB self-contained HTML. Figma source: 'New Brand Design' → page '🟡 Selection Tile Fix'. Topbar uses 24-col grid (`100vw/24` margin), 3-col at ≥2560px. All icons are exact Figma SVG exports at 24×24 in 32×32 tap targets. Pending: mobile topbar, hover states, Showroom Nav bar, colour swatches 5–13 full-res."
