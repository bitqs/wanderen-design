# Wanderen Design System

> **wanderen.ai · 玩的人 · 游戏×AI · 边做边玩边拆解** — 痴迷『最小的逻辑，如何长出游戏感』,用 AI 把这件事做快、做爽。
> The site is a **clickable arcade index** of small browser games + AI/game-dev tools, all built fast with AI. "试着在这页上随便点几下。"
> Aesthetic: **sci-fi pixel arcade**. Deep dark, neon glow, hard pixel edges, CRT scanlines, `PRESS START` energy — a game-cabinet menu, not a SaaS marketing page.

This repository **is** the design system. An automated compiler reads it and ships:
`styles.css` (the token + font entry point consumers link) and `_ds_bundle.js` (the compiled React component library, exposed on `window.WanderenDesignSystem_eab830`).

---

## 1. Context

**wanderen / 玩的人** ("the one who plays") is a one-maker studio at the intersection of **games × AI**. The obsession, stated on the homepage: *『最小的逻辑，如何长出游戏感』* — how the smallest amount of logic produces **game-feel (游戏感)** — and using AI to build it *fast and satisfying*. The working motto is **边做边玩边拆解** (build · play · deconstruct, all at once).

The live site (`wanderen.ai`) is **not a blog or a SaaS landing page** — it's an **arcade launcher**: a dense, clickable index of things to press. Two sections:

- **GAMES 游戏** — small browser games, mostly about combat / juice / timing:
  三国幸存者 (Three Kingdoms Survivors, a 《吸血鬼幸存者》-style horde game) · Juice Lab 打击感实验室 · mini-dmc 迷你鬼泣 · 一闪 Yishan (single-key parry) · 幻谷漫步 Misty Valley Walk (Gaussian-splat first-person walk) · The Game Theory 游戏论.
- **TOOLS AI × 游戏开发** — dev tooling and frameworks:
  Slime (Claude-Code-as-RPG plugin) · vs-anatomy 幸存者解剖 (157 reusable design "atoms") · Gamage AI 协作游戏开发框架 (6-agent pipeline) · AlphaForge (A-share quant, 建设中).

**Stack on the homepage footer:** Phaser · TypeScript · Remotion · Cloudflare · Claude Code · GitHub [@bitqs](https://github.com/bitqs).

The product surfaces this system designs for:
- **Arcade index / Landing** — the homepage launcher: header + tagline, GAMES grid, TOOLS grid, footer. *(see `ui_kits/landing`)*
- **Reader / deconstruction view** — long-form "拆解" content like vs-anatomy & The Game Theory. *(see `ui_kits/reader`)*

> **Sources:** the live site **https://wanderen.ai** (homepage content read 2026-06; structure + copy + product list mirrored here). No codebase/Figma was shared — exact colors, fonts, and layout of the live site are **not yet confirmed visually** (see Caveats). GitHub: https://github.com/bitqs (Slime, etc.).

---

## 2. Content Fundamentals — how Wanderen writes

**Voice:** a maker who is also a player — hacker-curious, self-aware, a little mischievous. Talks to you like a friend showing off the thing they just built and can't stop poking at. Bilingual by default: **Chinese-primary, with English game/tool names alongside.**

- **Language:** CN leads, EN rides along — titles are often `中文名 English Name` (三国幸存者 Three Kingdoms Survivors). UI chrome / CTAs are usually English arcade words.
- **Person:** speaks as **我 / we** the maker, invites **你 / you** the player. Direct, warm, no corporate distance.
- **Mood:** *边做边玩边拆解* — builds in public and deconstructs out loud. Honest to the point of cheeky about what it's doing (「一个过分诚实的设计师,当面坤白每一个让你上瘾的机制」).
- **Casing:** arcade CTAs are `UPPERCASE` (`PRESS START`, `PRESS TO PLAY`, `GITHUB`, `OPEN`). Tags are short caps badges (`NEW`, `DEV`). Headlines mix CN body + EN accents.
- **Density:** the homepage is **dense and scannable** — many cards, each a one-line hook + a CTA. Not airy. Energy over whitespace (but kept legible by the grid).
- **Emoji:** **used, deliberately.** Each game/tool card leads with a single emoji marker (⚔️ 👊 🗡️ ⚡ 🏞️ 🎭 🟢 🧬 🏭 📈 🧰). They act as the item's icon. Don't spray them through body copy — one per card/section, as a marker.
- **Punctuation:** CN full-width punctuation (。,『』), em-dashes, the arrow glyph **▸** before CTAs (`▸ PRESS TO PLAY`). Bold/italic for the key obsession phrase.

**Example copy (from the live site):**

- Tagline: *玩的人 · 游戏×AI · 边做边玩边拆解*
- Hook: *痴迷『最小的逻辑，如何长出游戏感』——也痴迷用 AI 把这件事做快、做爽。*
- Invite: *试着在这页上随便点几下。*
- Card hook: *乱世割草,一骑当千。* · *从“死鱼”到“上头”。*
- CTAs: `▸ PRESS TO PLAY` · `▸ GITHUB` · `▸ OPEN` · `PRESS START`
- Tags: `NEW` · `DEV`
- Cheeky: *「既然已经上瘾了,何不更上瘾一点。」*

---

## 3. Visual Foundations

**Overall:** dark-first, warm near-black, hard pixel edges, gold-led. Think an arcade-cabinet select screen — dense, clickable, high-contrast, juicy. The whole page is a play surface: crosshair cursor, CRT scanlines + vignette, and click-anywhere damage numbers. Energy over whitespace, but the grid keeps it legible.

### Color
- **Backdrop:** warm near-black — `--bg #0B0B14` over `--void #060609`. Surfaces step up: `--surface #12121F` → `--surface-raised` → `--surface-hover`. Borders `--border #2A2A3E`.
- **Three brand neons:** **gold `--primary #FFC83D`** leads (logo, CTAs, focus, key accents) · **red `--accent #FF4757`** is the spark (the `×`, `NEW` tags, the logo's offset shadow) · **cyan `--tertiary #3DE8FF`** for links, section labels, and the blinking cursor. Status reuses the three: success/info = cyan, warning = gold, danger = red.
- **Text:** warm off-white `--text-hi #F4F2EC` / `--text #E8E6DF` for body, `--text-muted #8A8798` / `--text-faint` for meta. Dark ink `--text-on-neon #0B0B14` sits on gold/red/cyan fills.
- **Rule of thumb:** gold leads, red sparks, cyan points the way. Don't introduce a fourth hue.

### Type
- **`--font-pixel` Press Start 2P** — the arcade signature. The logo, section labels (`GAMES`), CTAs (`▶ PRESS TO PLAY`), `PRESS START`, scores, damage numbers. UPPERCASE, tiny (≤22px), **Latin only — never CN**.
- **`--font-display` Noto Sans SC @ 900** — headlines & section ZH titles. Heavy, full Chinese coverage. This is the workhorse for big type.
- **`--font-body` Noto Sans SC @ 400/700** — all body & UI, CN-primary + EN names. Line-height 1.7.
- **`--font-mono` system monospace** — the rare code/metric line. (The site itself reuses Press Start 2P for arcade "mono" bits.)
- Two faces only, exactly as the live site: **Press Start 2P + Noto Sans SC.**

### Spacing & layout
- Strict **4px pixel grid** (`--space-1`…`--space-32`). Everything snaps — no 5px, no 13px.
- Reading column `--container-md 860px`; full layouts `--container-xl 1320px`.
- Layout is calm and gridded; the energy comes from the neon + pixel detailing, not from cramming.

### Corners, borders, shadows
- **Corners stay hard** — the live cards have **`border-radius: 0`**. `--radius-px 2px` is the most softening you'd ever apply; pills reserved for avatars/dots only. No rounded "bubbly" cards.
- **Borders are structural & chunky:** cards use a **3px border**; default UI `--bw 2px`. Border + the hard shadow defines a card more than fill does. Hover brightens the border to **gold**.
- **Pixel shadows are THE look:** HARD offset, zero blur, pure black — `--shadow-pixel 6px 6px 0 #000`, hover `--shadow-pixel-lg 8px 8px`. The logo uses a stacked **red** offset shadow (`4px/8px`). Neon glows exist (`--glow`, gold) but are used sparingly — for focus rings and the occasional hero halo, not everywhere.

### Backgrounds & texture
- **CRT overlay** — wrap a page in `.wd-crt` (or apply to `body`): a fixed **scanline** layer (`--scanlines`, dense dark lines `rgba(0,0,0,.18)` every 2px) + a **vignette** (`--vignette`, edges to `rgba(0,0,0,.55)`). You feel it more than see it.
- **Crosshair cursor** — `body { cursor: crosshair }`. The whole canvas reads as a play surface.
- **Pixel grid** (`--grid`) — faint gold dotted grid for hero/section backdrops.
- **Nebula** (`--nebula`) — multi-radial deep wash behind heroes (gold→cyan→red, very low alpha).
- No photographic imagery by default; emoji + Pixelarticons carry the iconography. If imagery is used, keep it **dark, warm, high-contrast**.

### Motion (juicy 打击感 — the site IS a demo)
- Durations are short (80–500ms). Hit-feel is instant.
- **Signature interactions:** click **anywhere** (any blank area, on any page) → floating **damage numbers** (`wd-dmg-pop`, ~20% gold `CRIT!`) — shipped as the drop-in **`juice.js`**; cards **hit-shake + white flash** on hover (`wd-hitshake` + `wd-hitflash`); the logo **drops in** (`wd-drop-in`, overshoot); the cursor + `PRESS START` **blink** (`wd-blink`, stepped, no fade).
- Easing: `--ease-snap` (UI), `--ease-pop` (overshoot entrance), `--ease-dmg` (damage pop).
- All gated by `prefers-reduced-motion` (animations fully cancelled under `reduce` — content stays visible).

### States
- **Hover:** surface lightens (`--surface-hover`) and the border brightens to **gold**; interactive cards **hit-shake + flash**. Links go cyan→gold.
- **Press / active:** the element **translates into its pixel shadow** — it physically "presses" like an arcade button. No opacity dip.
- **Focus:** the glowing gold `--ring` (2px outline + halo). Highly visible — accessibility *and* on-brand.
- **Disabled:** drop to `--text-faint`, remove shadow, `cursor: not-allowed`.
- **Selection:** red wash.

### Transparency & blur
- Use sparingly. Translucent neon **washes** (`--cyan-wash`, etc.) for selected/active fills. A `--scrim` for modal backdrops. Backdrop-blur is fine on sticky headers and dialog scrims; avoid frosted glass everywhere.

---

## 4. Iconography

- **System:** [**Pixelarticons**](https://pixelarticons.com) — 800 handcrafted pixel-art icons drawn on a strict 24×24 grid, no anti-aliasing, pure `<path>` with `fill="currentColor"`. This *is* the brand's icon language: same pixel logic as the type and logo.
- **How we load them:** at runtime via the **Iconify** web component (CDN), using the `pixelarticons` prefix — no per-icon files to manage:
  ```html
  <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
  <iconify-icon icon="pixelarticons:home" width="24"></iconify-icon>
  ```
  Names are kebab-case (`pixelarticons:arrow-right`, `pixelarticons:heart`, `pixelarticons:moon`). For sharpest rendering use multiples of 24px (24/48/72). The `IconButton` component takes a bare icon name and renders this for you.
  > ⚠️ **Substitution flag:** icons load from the Iconify CDN (network required at render time). To self-host, `npm i pixelarticons` and serve `svg/*.svg` or the generated webfont, then point the components at local files.
- **Color:** icons inherit `currentColor` — tint with `color`, not fills. Default `--text` / `--text-muted`; neon on emphasis.
- **Emoji:** **a first-class part of the brand**, not banned. Each game/tool card leads with one emoji as its icon (⚔️ 👊 🗡️ ⚡ 🏞️ 🎭 🟢 🧬 🏭 📈 🧰). Use exactly one per card/section as a marker; don't sprinkle through prose. Pixelarticons handles UI chrome (search, arrows, github, close…); emoji handle content identity.
- **Arrow glyph:** `▸` precedes arcade CTAs (`▸ PRESS TO PLAY`).
- **Logo:** the primary mark **is the wordmark** — `wanderen` in Press Start 2P, **gold** with a hard **red** offset shadow (`4px/8px`) and a blinking **cyan** cursor block (`▮`). There is no separate symbol on the live site. `assets/logo/` also ships an optional pixel **compass-spark** glyph (a system addition) for square contexts like a favicon or avatar.

---

## 5. Index / Manifest

**Root**
- `styles.css` — global entry (import-only). Consumers link this.
- `juice.js` — drop-in click-anywhere damage-number juice (打击感). Add `<script src="juice.js">` to any page; idempotent, respects reduced-motion.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` — webfont loading (Google Fonts CDN — see flag).
- `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `motion.css` · `base.css`

**Assets** (`assets/`)
- `logo/` — `wanderen-mark.svg` (+ `-white`, `-mono`).

**Foundation cards** (`guidelines/`) — specimen cards rendered in the Design System tab (Colors, Type, Spacing, Brand groups).

**Components** (`components/`) — reusable React primitives, exposed on `window.WanderenDesignSystem_eab830`.
- `core/` — Button, IconButton, Badge, Tag, Card, Avatar
- `forms/` — Input, Switch
- `navigation/` — Tabs

**UI kits** (`ui_kits/`) — full-screen product recreations.
- `landing/` — marketing site (hero, features, footer).
- `reader/` — content platform (article index + reading view).

**Templates** (`templates/`) — starting points consuming projects can seed from.
- `landing-hero/` — the pixel-arcade hero (nebula + display headline + subscribe CTA).

---

*Fonts are loaded from Google Fonts CDN (Press Start 2P, Pixelify Sans, Space Grotesk, JetBrains Mono) — no local binaries are shipped. Icons load from the Iconify CDN (Pixelarticons). Both are flagged for the founder to confirm or self-host.*
