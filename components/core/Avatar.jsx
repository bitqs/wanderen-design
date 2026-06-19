import React from "react";

const STYLE_ID = "wd-avatar-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-avatar{
  display:inline-flex;align-items:center;justify-content:center;
  flex:none;overflow:hidden;position:relative;
  background:var(--surface-hover);color:var(--text-hi);
  border:var(--bw) solid var(--border);
  font-family:var(--font-pixel);text-transform:uppercase;line-height:1;
}
.wd-avatar img{width:100%;height:100%;object-fit:cover;image-rendering:pixelated;display:block}
.wd-avatar--square{border-radius:var(--radius-px)}
.wd-avatar--round{border-radius:var(--radius-pill)}
.wd-avatar--ring{border-color:var(--primary);box-shadow:var(--glow-sm)}
.wd-avatar--xs{width:24px;height:24px;font-size:8px}
.wd-avatar--sm{width:32px;height:32px;font-size:9px}
.wd-avatar--md{width:44px;height:44px;font-size:12px}
.wd-avatar--lg{width:64px;height:64px;font-size:16px}
`;
  document.head.appendChild(s);
}

const HUES = ["--primary", "--accent", "--success", "--tertiary", "--warning"];
function hueFor(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return HUES[h % HUES.length];
}

/** Pixel avatar — image or initials fallback, square by default. */
export function Avatar({
  src,
  name = "",
  size = "md",
  shape = "square",
  ring = false,
  className = "",
  ...rest
}) {
  const cls = ["wd-avatar", `wd-avatar--${shape}`, `wd-avatar--${size}`, ring ? "wd-avatar--ring" : "", className]
    .filter(Boolean)
    .join(" ");
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  const tint = `var(${hueFor(name)})`;
  return (
    <span
      className={cls}
      style={!src ? { color: tint, borderColor: ring ? undefined : tint } : undefined}
      aria-label={name || undefined}
      {...rest}
    >
      {src ? <img src={src} alt={name} /> : initials || "?"}
    </span>
  );
}
