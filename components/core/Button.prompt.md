The signature Wanderen call-to-action — use for any primary or secondary action; pressing it translates into its hard pixel shadow like an arcade button.

```jsx
<Button variant="primary" icon="zap" size="lg">Start wandering</Button>
<Button variant="secondary" iconRight="arrow-right">Read field notes</Button>
<Button variant="ghost">Maybe later</Button>
```

Variants: `primary` (cyan, the default CTA), `secondary` (outlined neon), `ghost` (quiet), `accent` (magenta, sparing), `danger` (red). Sizes `sm | md | lg` (44px md is the default + min touch target). `icon` / `iconRight` take a Pixelarticons name. Use `as="a"` with `href` for link buttons. Keep one primary button per view; labels are UPPERCASE and short (1–3 words).
