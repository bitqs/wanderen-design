import React from "react";

const STYLE_ID = "wd-tabs-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-tabs{display:flex;gap:4px;border-bottom:var(--bw) solid var(--border);overflow-x:auto;scrollbar-width:none}
.wd-tabs::-webkit-scrollbar{display:none}
.wd-tab{
  position:relative;display:inline-flex;align-items:center;gap:7px;
  font-family:var(--font-body);font-weight:600;font-size:13px;letter-spacing:.03em;
  text-transform:uppercase;white-space:nowrap;
  background:none;border:none;cursor:pointer;color:var(--text-muted);
  padding:12px 14px;margin-bottom:calc(-1 * var(--bw));
  border-bottom:var(--bw) solid transparent;
  transition:var(--t-color);
}
.wd-tab:hover{color:var(--text-hi)}
.wd-tab:focus-visible{outline:none;box-shadow:var(--ring);border-radius:var(--radius-px)}
.wd-tab--active{color:var(--primary);border-bottom-color:var(--primary);text-shadow:0 0 12px var(--cyan-glow)}
.wd-tab iconify-icon{font-size:16px;display:block}
.wd-tab__count{font-family:var(--font-mono);font-size:11px;color:var(--text-faint);text-transform:none}
.wd-tab--active .wd-tab__count{color:var(--primary)}
`;
  document.head.appendChild(s);
}

/** Underlined tab bar. Active tab glows cyan. Controlled via value/onChange. */
export function Tabs({ items = [], value, onChange, className = "", ...rest }) {
  const current = value != null ? value : items[0] && items[0].value;
  return (
    <div className={["wd-tabs", className].filter(Boolean).join(" ")} role="tablist" {...rest}>
      {items.map((it) => {
        const active = it.value === current;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            className={["wd-tab", active ? "wd-tab--active" : ""].filter(Boolean).join(" ")}
            onClick={() => onChange && onChange(it.value)}
          >
            {it.icon && React.createElement("iconify-icon", { icon: `pixelarticons:${it.icon}`, "aria-hidden": "true" })}
            {it.label}
            {it.count != null && <span className="wd-tab__count">{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
