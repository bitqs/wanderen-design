import React from "react";

const STYLE_ID = "wd-button-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-body);font-weight:600;letter-spacing:.04em;
  text-transform:uppercase;text-decoration:none;white-space:nowrap;
  border:var(--bw) solid transparent;border-radius:var(--radius-px);
  cursor:pointer;user-select:none;
  transition:var(--t-press),var(--t-color);
}
.wd-btn:focus-visible{outline:none;box-shadow:var(--ring)}
.wd-btn--sm{height:var(--control-sm);padding:0 14px;font-size:12px}
.wd-btn--md{height:var(--control);padding:0 20px;font-size:13px}
.wd-btn--lg{height:var(--control-lg);padding:0 28px;font-size:15px}
.wd-btn--full{width:100%}
.wd-btn[disabled],.wd-btn[aria-disabled="true"]{
  cursor:not-allowed;opacity:1;color:var(--text-faint)!important;
  background:var(--surface)!important;border-color:var(--border)!important;
  box-shadow:none!important;transform:none!important;
}
/* solid variants share the pixel-press behaviour */
.wd-btn--primary,.wd-btn--accent,.wd-btn--danger{color:var(--text-on-neon);box-shadow:var(--shadow-pixel)}
.wd-btn--primary{background:var(--primary)}
.wd-btn--accent{background:var(--accent)}
.wd-btn--danger{background:var(--danger)}
.wd-btn--primary:hover{background:var(--primary-bright);box-shadow:var(--shadow-pixel),var(--glow)}
.wd-btn--accent:hover{background:var(--accent-bright);box-shadow:var(--shadow-pixel),var(--glow-magenta)}
.wd-btn--danger:hover{background:var(--red-400);box-shadow:var(--shadow-pixel)}
.wd-btn--primary:active,.wd-btn--accent:active,.wd-btn--danger:active{transform:translate(3px,3px);box-shadow:1px 1px 0 0 var(--void)}
/* secondary: outlined neon */
.wd-btn--secondary{background:transparent;color:var(--primary);border-color:var(--border-strong)}
.wd-btn--secondary:hover{background:var(--cyan-wash);box-shadow:var(--glow-sm)}
.wd-btn--secondary:active{transform:translate(1px,1px)}
/* ghost: quiet */
.wd-btn--ghost{background:transparent;color:var(--text);border-color:transparent}
.wd-btn--ghost:hover{background:var(--surface-hover);color:var(--text-hi)}
.wd-btn--ghost:active{transform:translate(1px,1px)}
.wd-btn iconify-icon{font-size:1.2em;display:block}
`;
  document.head.appendChild(s);
}

/**
 * Wanderen primary button. Arcade press = translates into its pixel shadow.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  full = false,
  disabled = false,
  as = "button",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = [
    "wd-btn",
    `wd-btn--${variant}`,
    `wd-btn--${size}`,
    full ? "wd-btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconEl = (name) =>
    name ? React.createElement("iconify-icon", { icon: `pixelarticons:${name}`, "aria-hidden": "true" }) : null;

  return (
    <Tag
      className={cls}
      disabled={Tag === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {iconEl(icon)}
      {children && <span>{children}</span>}
      {iconEl(iconRight)}
    </Tag>
  );
}
