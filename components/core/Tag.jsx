import React from "react";

const STYLE_ID = "wd-tag-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-tag{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-mono);font-size:12px;line-height:1;
  padding:7px 10px;border-radius:var(--radius-px);
  border:var(--bw) solid var(--border);background:var(--surface);color:var(--text-muted);
  cursor:default;transition:var(--t-color),var(--t-press);white-space:nowrap;
}
button.wd-tag,.wd-tag--clickable{cursor:pointer}
.wd-tag--clickable:hover{color:var(--text-hi);border-color:var(--border-strong)}
.wd-tag--clickable:active{transform:translate(1px,1px)}
.wd-tag:focus-visible{outline:none;box-shadow:var(--ring)}
.wd-tag--active{background:var(--cyan-wash);color:var(--primary);border-color:var(--primary)}
.wd-tag__hash{color:var(--text-faint)}
.wd-tag--active .wd-tag__hash{color:var(--primary)}
.wd-tag__x{display:inline-flex;margin:-2px -3px -2px 1px;padding:2px;border-radius:var(--radius-px);color:inherit;opacity:.7}
.wd-tag__x:hover{opacity:1;background:rgba(255,255,255,.08)}
.wd-tag iconify-icon{display:block;font-size:14px}
`;
  document.head.appendChild(s);
}

/** Interactive category / filter chip. Monospace, optional # prefix and remove ✕. */
export function Tag({
  active = false,
  hash = false,
  onRemove,
  onClick,
  children,
  className = "",
  ...rest
}) {
  const clickable = !!onClick;
  const Tag_ = clickable ? "button" : "span";
  const cls = [
    "wd-tag",
    clickable ? "wd-tag--clickable" : "",
    active ? "wd-tag--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag_ className={cls} onClick={onClick} {...rest}>
      {hash && <span className="wd-tag__hash">#</span>}
      {children}
      {onRemove && (
        <span
          className="wd-tag__x"
          role="button"
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
        >
          {React.createElement("iconify-icon", { icon: "pixelarticons:close", "aria-hidden": "true" })}
        </span>
      )}
    </Tag_>
  );
}
