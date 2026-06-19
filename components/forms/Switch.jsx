import React from "react";

const STYLE_ID = "wd-switch-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;user-select:none}
.wd-switch--disabled{cursor:not-allowed;opacity:.5}
.wd-switch__track{
  position:relative;width:48px;height:26px;flex:none;
  background:var(--surface-inset);
  border:var(--bw) solid var(--border);
  border-radius:var(--radius-px);
  transition:var(--t-color),box-shadow var(--dur-fast) var(--ease-snap);
}
.wd-switch__knob{
  position:absolute;top:2px;left:2px;width:18px;height:18px;
  background:var(--text-muted);
  border-radius:1px;
  transition:transform var(--dur-fast) var(--ease-snap),background-color var(--dur-fast) var(--ease-snap);
}
.wd-switch input{position:absolute;opacity:0;width:0;height:0}
.wd-switch input:checked + .wd-switch__track{border-color:var(--primary);box-shadow:var(--glow-sm)}
.wd-switch input:checked + .wd-switch__track .wd-switch__knob{transform:translateX(22px);background:var(--primary)}
.wd-switch input:focus-visible + .wd-switch__track{box-shadow:var(--ring)}
.wd-switch__label{font-family:var(--font-body);font-size:14px;color:var(--text)}
`;
  document.head.appendChild(s);
}

/** Arcade toggle — hard pixel knob that snaps and glows cyan when on. */
export function Switch({ checked, defaultChecked, onChange, label, disabled = false, id, className = "", ...rest }) {
  const switchId = id || (label ? `wd-sw-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <label className={["wd-switch", disabled ? "wd-switch--disabled" : "", className].filter(Boolean).join(" ")} htmlFor={switchId}>
      <input
        type="checkbox"
        id={switchId}
        role="switch"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className="wd-switch__track" aria-hidden="true">
        <span className="wd-switch__knob" />
      </span>
      {label && <span className="wd-switch__label">{label}</span>}
    </label>
  );
}
