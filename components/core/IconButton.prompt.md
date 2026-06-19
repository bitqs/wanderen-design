A square icon-only button for toolbars, headers, and input affixes — always give it a `label`.

```jsx
<IconButton icon="search" label="Search" />
<IconButton icon="bookmark" label="Save to inventory" variant="solid" />
<IconButton icon="menu" label="Open menu" variant="ghost" size="lg" />
```

`icon` is a Pixelarticons name. Variants: `default` (bordered surface), `solid` (cyan fill, pixel-press), `ghost` (transparent). Sizes `sm | md | lg`. The 44px `md` is the minimum touch target.
