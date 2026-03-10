# Big Box Outlet Store — Claude Code Instructions

## Project Overview

Static HTML landing page for Big Box Outlet Store. No build tools, no frameworks — pure HTML/CSS/JS in a single `index.html` file (1500+ lines).

## Stack

- **HTML5 / CSS3 / Vanilla JS** — all embedded in `index.html`
- **Google Fonts** — Rubik (headings), Nunito Sans (body)
- **Dev server** — Python HTTP server on port 3900

## Dev Server

```bash
# Start via Claude Preview (preferred)
# Config is in .claude/launch.json
```

Or manually:
```bash
python -m http.server 3900
```

Then open `http://localhost:3900`.

## File Structure

```
index.html       # Entire site — HTML, CSS, and JS are all here
images/          # Static assets (PNG/JPG)
.claude/         # Claude Code config (launch.json, settings.local.json)
```

## Conventions

- All styles are embedded in `<style>` inside `index.html`
- All scripts are embedded in `<script>` at the bottom of `index.html`
- CSS variables are defined at `:root` — use them for colors/spacing
- Color palette: Deep Blue `#003DA5` / `#00297a`, Accent Yellow `#FFD600`
- Responsive breakpoints: `1024px`, `768px`, `640px`
- No external CSS/JS libraries — keep it dependency-free

## Key Sections in index.html

1. Navbar (fixed, mobile hamburger menu)
2. Hero (full-viewport, animated geometric shapes)
3. Marquee (brand carousel)
4. Price Drop (pricing model explanation)
5. Categories (4-column product grid)
6. Trust/Ratings (testimonials)
7. Price Match banner
8. Store Locator (BC/AB province filter, 20 locations)
9. Rewards program
10. Footer

## Git Remote

GitHub: `bbosabe/mainwebsite`
