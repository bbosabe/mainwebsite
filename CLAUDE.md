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

## Subprojects

| Dir        | Site                  | Stack                              | Port |
|------------|-----------------------|------------------------------------|------|
| `/`        | Big Box Outlet Store  | Static HTML/CSS/JS (`index.html`)  | 3900 |
| `dealios/` | Dealios.ca homepage   | React 19 + TS + Vite + Tailwind v4 | 3901 |

See `docs/plans/2026-03-10-dealios-homepage-design.md` for Dealios architecture decisions.
Dealios dev server must be started manually (`preview_start` fails on Windows — see MEMORY.md).

## API Keys & Secrets

- **Never** hardcode API keys in source files or paste them into chat
- If a key is accidentally exposed, **revoke it immediately** at the provider dashboard
- Store secrets in `dealios/.env.local` (git-ignored by Vite's default `.gitignore`)
- Prefix client-side vars with `VITE_` so Vite exposes them to the bundle:
  ```
  VITE_GOOGLE_AI_KEY=your_key_here
  ```
- Access in code via `import.meta.env.VITE_GOOGLE_AI_KEY`
- Server-side / build-only secrets use no prefix and are never sent to the browser
