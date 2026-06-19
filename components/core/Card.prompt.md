The base surface for article cards, panels, and tiles. Compose freely inside it.

```jsx
<Card variant="raised" interactive padding="lg" as="article">
  <Badge color="magenta">Field note</Badge>
  <h3>Wander somewhere new</h3>
  <p>Essays from the edge of play and AI.</p>
</Card>
```

`variant`: `default` (flat), `raised` (hard pixel shadow), `glow` (neon halo — hero/featured only). `padding`: none | sm | md | lg. `interactive` adds hover/press; a raised interactive card lifts then presses into its shadow. Use `as="a"` to make the whole card a link.
