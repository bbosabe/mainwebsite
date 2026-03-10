# Dealios.ca Homepage — Design Document

**Date:** 2026-03-10
**Status:** Implemented

---

## Project Overview

New homepage for Dealios.ca, a Canadian liquidation retail chain with 3 locations in BC and AB. Deals on appliances, furniture, electronics, and home decor at up to 70% off retail.

**Location:** `dealios/` subdirectory inside the existing `Claude Website` repo
**Scope:** Homepage only (`/` route) with mock data — Supabase wiring deferred

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18 + TypeScript | Type safety, ecosystem |
| Build | Vite (react-ts template) | Fast HMR, modern defaults |
| Styling | Tailwind CSS v4 + `@tailwindcss/vite` | No config file needed, CSS-first |
| Components | shadcn/ui patterns (manual) | cva + clsx + radix-ui/slot |
| Animation | Framer Motion | Scroll triggers, stagger, bob |
| Routing | React Router v6 | Ready for future pages |
| i18n | React Context (EN/FR) | Flat translation object, typed keys |
| Icons | Lucide React | Consistent SVG set |
| Dev port | 3901 | Non-conflicting with Big Box (3900) |

---

## Brand Tokens

```css
--primary:    358 85% 52%   /* Dealios Red  #ec1c24 */
--accent:     59 100% 58%   /* Dealios Yellow #fffb2a */
--secondary:  220 25% 12%   /* Deep charcoal */
--background: 0 0% 99%      /* Near-white */
--foreground: 220 25% 10%

/* Tag colors */
--tag-green:  145 63% 42%   /* 50% OFF */
--tag-red:    0 84% 55%     /* $2 DEALS */
--tag-purple: 270 70% 55%   /* 70% OFF */
--tag-blue:   217 91% 60%   /* As Marked */
```

**Fonts:**
- `Rubik` — UI sans-serif (Google Fonts CDN; self-hosted woff2 deferred)
- `Permanent Marker` — Price callouts (`font-marker`)

---

## Page Sections (top → bottom)

| # | Component | Section | Key Details |
|---|-----------|---------|-------------|
| 1 | `Header` | Fixed nav | Charcoal bg, red+yellow logo, EN/FR pill, dark mode toggle, mobile hamburger |
| 2 | `Hero` | Above fold | Radial gradient (red→charcoal), staggered word reveal, 3 floating deal cards (bob animation), shimmer CTA |
| 3 | `TickerMarquee` | Promo strip | `bg-secondary text-accent`, CSS marquee animation, pauses on hover |
| 4 | `ValueProps` | Why Dealios | 4-column grid, `border-l-4` colored cards, whileInView entrance |
| 5 | `HowItWorks` | Tag system | 4 tag-type cards (green/red/purple/blue) explaining the deal pricing model |
| 6 | `DealOfTheDay` | Featured deal | Dark gradient card, TV illustration, `font-marker` price, live countdown |
| 7 | `StoreSection` | Locations | Tab picker (3 stores), address/hours/phone, map placeholder |
| 8 | `Newsletter` | Email capture | Input + Subscribe, success state (no API) |
| 9 | `Footer` | Links + contact | 3-column: brand / quick links / contact |

---

## Key Architecture Decisions

### Tailwind v4 — CSS-first configuration
No `tailwind.config.ts`. Brand tokens live in `:root`/`.dark` CSS vars, mapped to Tailwind utilities via `@theme inline { --color-primary: hsl(var(--primary)); }`. Dark mode toggled by `.dark` class on `<html>`.

### i18n — Typed flat translations
`TranslationKey` is a union of all string literal keys in the EN translation object. `t(key)` is fully type-checked. FR translations are complete stubs.

### Mock data structure
`Deal` interface has `tagType: 'green' | 'red' | 'purple' | 'blue'` driving both the `HowItWorks` section and Hero deal card badges. `DEAL_OF_THE_DAY` is a separate named export.

### Animation strategy
- **Entry animations:** Framer Motion `whileInView` + `viewport={{ once: true }}` for section reveals
- **Hero headline:** Staggered `motion.span` per word, `delay: 0.2 + i * 0.1`
- **Deal cards:** CSS `@keyframes bob` via inline `animation` style (allows per-card timing without JS)
- **Ticker:** CSS `@keyframes marquee` with `animation-play-state: paused` on hover
- **CTA button:** CSS `@keyframes shimmer` background-position sweep

---

## File Structure

```
dealios/
├── index.html                  # Google Fonts CDN, meta tags
├── vite.config.ts              # @tailwindcss/vite plugin + @/ alias
├── tsconfig.app.json           # paths: { "@/*": ["./src/*"] }
├── src/
│   ├── index.css               # CSS vars, @theme inline, keyframes
│   ├── main.tsx                # StrictMode + LanguageProvider
│   ├── App.tsx                 # BrowserRouter + single / route
│   ├── lib/utils.ts            # cn() helper
│   ├── contexts/
│   │   └── LanguageContext.tsx # EN/FR translations + provider
│   ├── hooks/
│   │   └── useLanguage.ts      # useContext wrapper
│   ├── data/
│   │   ├── mock-deals.ts       # 6 deals + DEAL_OF_THE_DAY
│   │   └── mock-stores.ts      # Surrey BC, Burnaby BC, Calgary AB
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx      # cva variants: default/accent/outline/…
│   │   │   ├── input.tsx       # forwarded ref
│   │   │   └── badge.tsx       # cva variants: green/red/purple/blue/…
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── TickerMarquee.tsx
│   │       ├── ValueProps.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── DealOfTheDay.tsx
│   │       ├── StoreSection.tsx
│   │       └── Newsletter.tsx
```

---

## Deferred / Future Work

- Replace mock data with Supabase queries (tables: `deals`, `stores`, `categories`)
- Self-host Rubik woff2 files (place in `public/fonts/`)
- Replace TV illustration with actual product image in DealOfTheDay
- Embed real Google Maps iframe in StoreSection
- Wire Newsletter to email service (Resend / Mailchimp)
- Add `/deals`, `/stores`, `/about` routes
