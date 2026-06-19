A horizontal tab bar for content filters and section navigation. The active tab glows cyan under a neon underline.

```jsx
const tabs = [
  { value: "all", label: "All", count: 128 },
  { value: "notes", label: "Field notes", icon: "note", count: 42 },
  { value: "exp", label: "Experiments", icon: "zap" },
];
const [tab, setTab] = React.useState("all");
<Tabs items={tabs} value={tab} onChange={setTab} />
```

Controlled only — track the active `value` yourself. Each item may carry an `icon` (Pixelarticons) and a `count`. Scrolls horizontally if the bar overflows.
