---
name: wanderen-design
description: Use this skill to generate well-branded interfaces and assets for wanderen.ai — a sci-fi pixel-arcade brand for wanderers of games, AI, exploration, and philosophy. Either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (token CSS under `tokens/`, components under `components/`, full-screen recreations under `ui_kits/`, specimen cards under `guidelines/`, brand assets under `assets/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css` for tokens + fonts, load Pixelarticons via the Iconify CDN for icons, and reuse the patterns shown in `ui_kits/`. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast facts
- **Vibe:** sci-fi pixel arcade — deep-space dark, neon glow, hard pixel edges, CRT scanlines, modern restraint.
- **Voice:** curious, inviting, imaginative. "You" + "we". No emoji.
- **Color:** dark backdrop (`--bg #0A0D1A`), one lead neon per screen (usually cyan `--primary #2FDBFF`), magenta `--accent` as the spark.
- **Type:** Press Start 2P (pixel labels/logo, tiny only) · Pixelify Sans (display headlines) · Space Grotesk (body/UI) · JetBrains Mono (meta/code).
- **Corners stay hard** (2–6px). Two shadow systems: hard pixel offset + soft neon glow. Press = translate into the shadow.
- **Icons:** Pixelarticons via Iconify CDN (`pixelarticons:<name>`).
- **Fonts** load from Google Fonts CDN; **icons** from the Iconify CDN — both flagged for self-hosting if needed.
