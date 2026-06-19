import React from "react";

const STYLE_ID = "wd-input-style";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
.wd-field{display:flex;flex-direction:column;gap:8px;width:100%}
.wd-field__label{font-family:var(--font-pixel);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted)}
.wd-field__hint{font-family:var(--font-mono);font-size:11px;color:var(--text-faint)}
.wd-field__hint--error{color:var(--danger)}
.wd-input{
  display:flex;align-items:center;gap:8px;
  background:var(--surface-inset);
  border:var(--bw) solid var(--border);
  border-radius:var(--radius-px);
  padding:0 12px;height:var(--control);
  transition:var(--t-color),box-shadow var(--dur-fast) var(--ease-snap);
}
.wd-input:hover{border-color:var(--border-faint)}
.wd-input:focus-within{border-color:var(--primary);box-shadow:var(--glow-sm)}
.wd-input--error{border-color:var(--danger)}
.wd-input--error:focus-within{box-shadow:0 0 12px var(--magenta-glow)}
.wd-input input{
  flex:1;min-width:0;background:none;border:none;outline:none;
  font-family:var(--font-body);font-size:15px;color:var(--text-hi);
}
.wd-input input::placeholder{color:var(--text-faint)}
.wd-input input:disabled{cursor:not-allowed}
.wd-input--disabled{opacity:.55;cursor:not-allowed}
.wd-input iconify-icon{font-size:20px;color:var(--text-muted);display:block}
.wd-input:focus-within iconify-icon{color:var(--primary)}
`;
  document.head.appendChild(s);
}

/** Text input with pixel border + neon focus glow. Optional label, icon, error. */
export function Input({
  label,
  icon,
  hint,
  error,
  id,
  disabled = false,
  className = "",
  ...rest
}) {
  const inputId = id || (label ? `wd-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const boxCls = ["wd-input", error ? "wd-input--error" : "", disabled ? "wd-input--disabled" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={["wd-field", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="wd-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={boxCls}>
        {icon && React.createElement("iconify-icon", { icon: `pixelarticons:${icon}`, "aria-hidden": "true" })}
        <input id={inputId} disabled={disabled} aria-invalid={!!error} {...rest} />
      </div>
      {(error || hint) && (
        <span className={["wd-field__hint", error ? "wd-field__hint--error" : ""].filter(Boolean).join(" ")}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
