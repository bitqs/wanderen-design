Interactive topic / filter chip. Monospace, quieter than a Badge — use for clickable filters, tag lists, and selected-topic rows.

```jsx
<Tag hash onClick={toggle} active={selected}>games</Tag>
<Tag hash>philosophy</Tag>
<Tag onRemove={() => remove(id)}>AI</Tag>
```

`active` highlights it cyan (filter on). `hash` shows a leading `#`. `onClick` makes the whole chip a toggle button; `onRemove` adds a ✕. For non-interactive status flags use **Badge**.
