# Architecture Decisions

## 2026-05-11 — AstroJS v6 + Tailwind v4

**Decision**: Use AstroJS v6 with Tailwind CSS v4 via Vite plugin.

**Why**:
- Astro's islands architecture gives zero-JS by default — ideal for a marketing site
- Tailwind v4 uses CSS-first config (no `tailwind.config.js`) — cleaner setup
- Static generation = best Core Web Vitals score

**Tradeoffs**:
- Tailwind v4 is newer — some plugins not yet compatible
- No `@astrojs/tailwind` integration needed (it's deprecated for v4)

---

## 2026-05-11 — strictest TypeScript config

**Decision**: `"extends": "astro/tsconfigs/strictest"` in `tsconfig.json`.

**Why**: Catch errors at compile time, not runtime. Path aliases configured for clean imports.

---

## 2026-05-11 — CSS custom properties for brand colors

**Decision**: Brand colors defined as CSS custom properties (`--color-primary`) in `global.css`, not hardcoded Tailwind classes.

**Why**: Easy to update when brand assets arrive. Single source of truth.
