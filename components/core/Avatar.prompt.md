A pixel avatar for authors and members. Square by default to sit on the grid; pixelated image rendering keeps it on-brand.

```jsx
<Avatar name="Mira Okafor" src="/authors/mira.png" size="lg" ring />
<Avatar name="Anon Wanderer" />          {/* initials on a name-tinted chip */}
<Avatar name="K" shape="round" size="sm" />
```

Without `src` it shows up to two initials on a neon tint derived from `name`. `size`: xs | sm | md | lg. `shape`: square (default) or round. `ring` adds the cyan focus glow (e.g. current user).
