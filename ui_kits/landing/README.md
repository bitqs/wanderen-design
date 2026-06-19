# Landing — wanderen.ai arcade index

High-fidelity recreation of the **live wanderen.ai homepage** — a clickable arcade launcher, not a marketing page. Mirrors the real structure, copy, and product list (read from the site 2026-06).

## Files
- `index.html` — entry. Loads `styles.css`, `_ds_bundle.js`, Iconify (Pixelarticons), React + Babel, mounts `app.jsx`.
- `app.jsx` — the page: `Header / Hook / Section (GAMES + TOOLS) / ItemCard / Footer`. Real product data lives in the `GAMES` and `TOOLS` arrays.

## Composes
`Card`, `Badge`, `Button`, `IconButton` from `window.WanderenDesignSystem_eab830`.

## Structure (mirrors the live site)
1. **Header** — `wanderen` logo, pixel tagline *玩的人 · 游戏×AI · 边做边玩边拆解*, GitHub, blinking `PRESS START`.
2. **Hook** — nebula/grid/scanline backdrop; the obsession line *痴迷『最小的逻辑，如何长出游戏感』*; the invite *试着在这页上随便点几下*.
3. **GAMES 游戏** — card grid: 三国幸存者 · Juice Lab · mini-dmc · 一闪 · 幻谷漫步 · The Game Theory. Each card = emoji marker + `NEW` badge + CN/EN title + one-line hook + `▸ PRESS TO PLAY` (opens the real subdomain).
4. **TOOLS AI × 游戏开发** — Slime · vs-anatomy · Gamage · AlphaForge, with `DEV` tags and `GITHUB` / `OPEN` CTAs.
5. **Footer** — GitHub @bitqs, tech-stack chips (Phaser · TypeScript · Remotion · Cloudflare · Claude Code), `PRESS START`.

## Notes
- Each item leads with **one emoji as its icon** (⚔️👊🗡️⚡🏞️🎭 / 🟢🧬🏭📈) — on-brand per the live site.
- **Bilingual:** CN-primary titles + EN names. CN currently falls back to a system font — see the design-system caveat about adding a CN (pixel) display font.
- Visual palette (dark neon) is the system's arcade direction; the **exact live-site colors/type are not yet confirmed** — send a screenshot to lock them.
