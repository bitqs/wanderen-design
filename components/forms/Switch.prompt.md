A settings/preference toggle. The knob snaps across with a stepped feel and the track glows cyan when on.

```jsx
<Switch label="Dark mode" defaultChecked />
<Switch label="Email me new field notes" checked={sub} onChange={e => setSub(e.target.checked)} />
```

Controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`). Pass `label` for the inline caption. For yes/no inside a form prefer this over a checkbox.
