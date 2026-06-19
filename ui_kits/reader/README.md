# Reader — wanderen.ai content platform

High-fidelity, interactive recreation of the wanderen.ai reading app.

## Files
- `index.html` — entry. Loads `styles.css`, `_ds_bundle.js`, Iconify, React + Babel, mounts `app.jsx`.
- `app.jsx` — the app, factored into `Sidebar / Topbar / IndexView / ArticleRow / ReadingView`.

## Composes
`Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Avatar`, `Input`, `Tabs` from `window.WanderenDesignSystem_eab830`.

## Interactions (all fake but working)
- **Browse** the dispatch index — article rows with pixel-grid thumbnails, category badges, author avatars.
- **Filter** by category with `Tabs`, and by topic with `#tag` chips (multi-select). Empty state shows the "blank map" message.
- **Open** any article → full reading view (760px column, 18px/1.8 prose, display headings, neon pull-quotes, tag row, author card).
- **Save / unsave** to "Inventory" from the index or the reading view (bookmark toggles solid cyan).
- **Back** returns to the index.

## Notes
- Content (4 essays) is sample copy written in the brand voice — replace with real posts.
- Article hero/thumbnails are CSS pixel-grid blocks with category icons; swap for real cover art when available.
- Tagged as a **Starting Point** ("Reader").
