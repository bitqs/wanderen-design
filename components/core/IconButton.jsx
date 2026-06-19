import React from "react";

const STYLE_ID = "wd-iconbutton-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;
  border:var(--bw) solid var(--border);border-radius:var(--radius-px);
  background:var(--surface-raised);color:var(--text);cursor:pointer;
  transition:var(--t-press),var(--t-color);
}
.wd-iconbtn:hover{color:var(--primary);border-color:var(--border-strong);background:var(--surface-hover)}
.wd-iconbtn:active{transform:translate(1px,1px)}
.wd-iconbtn:focus-visible{outline:none;box-shadow:var(--ring)}
.wd-iconbtn[disabled]{cursor:not-allowed;color:var(--text-faint);border-color:var(--border);background:var(--surface)}
.wd-iconbtn--sm{width:var(--control-sm);height:var(--control-sm);font-size:16px}
.wd-iconbtn--md{width:var(--control);height:var(--control);font-size:22px}
.wd-iconbtn--lg{width:var(--control-lg);height:var(--control-lg);font-size:26px}
.wd-iconbtn--solid{background:var(--primary);color:var(--text-on-neon);border-color:transparent;box-shadow:var(--shadow-pixel-sm)}
.wd-iconbtn--solid:hover{background:var(--primary-bright);color:var(--text-on-neon);box-shadow:var(--shadow-pixel-sm),var(--glow-sm)}
.wd-iconbtn--solid:active{transform:translate(2px,2px);box-shadow:0 0 0 0 var(--void)}
.wd-iconbtn--ghost{background:transparent;border-color:transparent}
.wd-iconbtn--ghost:hover{background:var(--surface-hover)}
.wd-iconbtn iconify-icon{display:block}
`;
  document.head.appendChild(s);
}

/** Square icon-only button. Always pass an aria-label. */
export function IconButton({
  icon,
  variant = "default",
  size = "md",
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["wd-iconbtn", `wd-iconbtn--${variant}`, `wd-iconbtn--${size}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>
      {React.createElement("iconify-icon", { icon: `pixelarticons:${icon}`, "aria-hidden": "true" })}
    </button>
  );
}
