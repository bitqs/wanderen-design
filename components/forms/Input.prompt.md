Single-line text field with the brand's pixel border and neon focus glow.

```jsx
<Input label="Email" icon="mail" type="email" placeholder="you@somewhere.new" />
<Input label="Handle" hint="Letters and numbers only" defaultValue="wanderer" />
<Input label="Email" error="That doesn't look like an email" defaultValue="nope" />
```

`label` renders in the pixel font above. `icon` is a Pixelarticons name shown inside. `error` turns the field red and replaces `hint`. Spreads all native `<input>` props (`type`, `value`, `onChange`, …).
