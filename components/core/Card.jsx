import React from "react";

const STYLE_ID = "wd-card-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-card{
  position:relative;display:block;
  background:var(--surface);
  border:var(--bw) solid var(--border);
  border-radius:var(--radius-md);
  color:var(--text);text-decoration:none;
  transition:var(--t-press),var(--t-color);
}
.wd-card--raised{box-shadow:var(--shadow-pixel)}
.wd-card--glow{border-color:var(--border-strong);box-shadow:var(--glow)}
.wd-card--pad-sm{padding:var(--space-4)}
.wd-card--pad-md{padding:var(--space-6)}
.wd-card--pad-lg{padding:var(--space-8)}
.wd-card--pad-none{padding:0}
.wd-card--interactive{cursor:pointer}
.wd-card--interactive:hover{border-color:var(--primary);background:var(--surface-raised);animation:wd-hitshake .18s linear}
.wd-card--interactive:focus-visible{outline:none;box-shadow:var(--ring)}
.wd-card--interactive::after{content:"";position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
.wd-card--interactive:hover::after{animation:wd-hitflash .18s linear}
.wd-card--interactive.wd-card--raised:hover{transform:translate(-2px,-2px);box-shadow:var(--shadow-pixel-lg)}
.wd-card--interactive.wd-card--raised:active{transform:translate(2px,2px);box-shadow:var(--shadow-pixel-sm)}
`;
  document.head.appendChild(s);
}

/** Surface container. Hard corners, 2px border; optional pixel-shadow or neon glow. */
export function Card({
  variant = "default",
  padding = "md",
  interactive = false,
  as = "div",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = [
    "wd-card",
    `wd-card--${variant}`,
    `wd-card--pad-${padding}`,
    interactive ? "wd-card--interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} tabIndex={interactive && as !== "a" ? 0 : undefined} {...rest}>
      {children}
    </Tag>
  );
}
