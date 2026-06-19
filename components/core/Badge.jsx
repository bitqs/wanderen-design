import React from "react";

const STYLE_ID = "wd-badge-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-badge{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-pixel);font-size:9px;line-height:1;letter-spacing:.1em;
  text-transform:uppercase;padding:6px 8px;border-radius:var(--radius-px);
  border:var(--bw) solid transparent;white-space:nowrap;vertical-align:middle;
}
.wd-badge--solid{color:var(--text-on-neon)}
.wd-badge--cyan{background:var(--primary)}
.wd-badge--magenta{background:var(--accent)}
.wd-badge--lime{background:var(--success)}
.wd-badge--amber{background:var(--warning)}
.wd-badge--violet{background:var(--tertiary)}
.wd-badge--red{background:var(--danger)}
/* outline style */
.wd-badge--outline{background:transparent;background:var(--surface)}
.wd-badge--outline.wd-badge--cyan{color:var(--primary);border-color:var(--primary)}
.wd-badge--outline.wd-badge--magenta{color:var(--accent);border-color:var(--accent)}
.wd-badge--outline.wd-badge--lime{color:var(--success);border-color:var(--success)}
.wd-badge--outline.wd-badge--amber{color:var(--warning);border-color:var(--warning)}
.wd-badge--outline.wd-badge--violet{color:var(--tertiary);border-color:var(--tertiary)}
.wd-badge--outline.wd-badge--red{color:var(--danger);border-color:var(--danger)}
.wd-badge .wd-badge__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor}
`;
  document.head.appendChild(s);
}

/** Tiny uppercase pixel-font label. The "NEW QUEST" / "FIELD NOTE" chip. */
export function Badge({ color = "cyan", variant = "solid", dot = false, children, className = "", ...rest }) {
  const cls = ["wd-badge", `wd-badge--${variant}`, `wd-badge--${color}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="wd-badge__dot" />}
      {children}
    </span>
  );
}
