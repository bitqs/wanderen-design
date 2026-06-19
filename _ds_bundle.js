/* @ds-bundle: {"format":3,"namespace":"WanderenDesignSystem_eab830","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c51d3cfbcbdc","components/core/Badge.jsx":"22cdd010e78b","components/core/Button.jsx":"5caf56109a05","components/core/Card.jsx":"22d21deac17d","components/core/IconButton.jsx":"1d11fbf77869","components/core/Tag.jsx":"27b0fc9df4f5","components/forms/Input.jsx":"8f0552fe42ae","components/forms/Switch.jsx":"1257fb32aa21","components/navigation/Tabs.jsx":"f9af742c08dc","juice.js":"445b952a498a","ui_kits/landing/app.jsx":"8a4eb2908ee7","ui_kits/reader/app.jsx":"1937ac0f636f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WanderenDesignSystem_eab830 = window.WanderenDesignSystem_eab830 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return HUES[h % HUES.length];
}

/** Pixel avatar — image or initials fallback, square by default. */
function Avatar({
  src,
  name = "",
  size = "md",
  shape = "square",
  ring = false,
  className = "",
  ...rest
}) {
  const cls = ["wd-avatar", `wd-avatar--${shape}`, `wd-avatar--${size}`, ring ? "wd-avatar--ring" : "", className].filter(Boolean).join(" ");
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("");
  const tint = `var(${hueFor(name)})`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: !src ? {
      color: tint,
      borderColor: ring ? undefined : tint
    } : undefined,
    "aria-label": name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  color = "cyan",
  variant = "solid",
  dot = false,
  children,
  className = "",
  ...rest
}) {
  const cls = ["wd-badge", `wd-badge--${variant}`, `wd-badge--${color}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "wd-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["wd-btn", `wd-btn--${variant}`, `wd-btn--${size}`, full ? "wd-btn--full" : "", className].filter(Boolean).join(" ");
  const iconEl = name => name ? React.createElement("iconify-icon", {
    icon: `pixelarticons:${name}`,
    "aria-hidden": "true"
  }) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), iconEl(icon), children && /*#__PURE__*/React.createElement("span", null, children), iconEl(iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  variant = "default",
  padding = "md",
  interactive = false,
  as = "div",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["wd-card", `wd-card--${variant}`, `wd-card--pad-${padding}`, interactive ? "wd-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    tabIndex: interactive && as !== "a" ? 0 : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
  icon,
  variant = "default",
  size = "md",
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["wd-iconbtn", `wd-iconbtn--${variant}`, `wd-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), React.createElement("iconify-icon", {
    icon: `pixelarticons:${icon}`,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tag({
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
  const cls = ["wd-tag", clickable ? "wd-tag--clickable" : "", active ? "wd-tag--active" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    onClick: onClick
  }, rest), hash && /*#__PURE__*/React.createElement("span", {
    className: "wd-tag__hash"
  }, "#"), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "wd-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, React.createElement("iconify-icon", {
    icon: "pixelarticons:close",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
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
  const boxCls = ["wd-input", error ? "wd-input--error" : "", disabled ? "wd-input--disabled" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["wd-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "wd-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: boxCls
  }, icon && React.createElement("iconify-icon", {
    icon: `pixelarticons:${icon}`,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["wd-field__hint", error ? "wd-field__hint--error" : ""].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  const switchId = id || (label ? `wd-sw-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: ["wd-switch", disabled ? "wd-switch--disabled" : "", className].filter(Boolean).join(" "),
    htmlFor: switchId
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: switchId,
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "wd-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wd-switch__knob"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "wd-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tabs({
  items = [],
  value,
  onChange,
  className = "",
  ...rest
}) {
  const current = value != null ? value : items[0] && items[0].value;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["wd-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), items.map(it => {
    const active = it.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      className: ["wd-tab", active ? "wd-tab--active" : ""].filter(Boolean).join(" "),
      onClick: () => onChange && onChange(it.value)
    }, it.icon && React.createElement("iconify-icon", {
      icon: `pixelarticons:${it.icon}`,
      "aria-hidden": "true"
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "wd-tab__count"
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// juice.js
try { (() => {
/* ============================================================
   WANDEREN — click-anywhere damage-number juice ("打击感")
   The whole site is a juice demo: click any blank area (or anything)
   and a floating damage number pops, ~20% gold CRIT.

   Drop into ANY page:
     <script src="juice.js"></script>          (root)
     <script src="../../juice.js"></script>     (from ui_kits/<x>/)

   Self-initializing, idempotent, and disabled under
   prefers-reduced-motion. Needs Press Start 2P loaded (styles.css)
   for the pixel numerals; falls back to monospace otherwise.
   ============================================================ */
(function () {
  if (window.__wdJuice) return;
  window.__wdJuice = true;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var COLORS = ["#ffc83d", "#ff4757", "#3de8ff", "#ffffff"];
  if (!document.getElementById("wd-juice-style")) {
    var s = document.createElement("style");
    s.id = "wd-juice-style";
    s.textContent = "@keyframes wd-dmg-pop{0%{transform:translate(-50%,-50%) scale(.4);opacity:1}" + "25%{transform:translate(-50%,calc(-50% - 28px)) scale(1.25);opacity:1}" + "100%{transform:translate(-50%,calc(-50% - 64px)) scale(1);opacity:0}}" + ".wd-dmg{position:fixed;z-index:9500;font-family:'Press Start 2P',ui-monospace,monospace;" + "font-weight:700;pointer-events:none;will-change:transform,opacity}" + ".wd-dmg--on{animation:wd-dmg-pop .7s cubic-bezier(.2,1.4,.5,1) forwards}";
    document.head.appendChild(s);
  }
  function spawn(e) {
    var d = document.createElement("div");
    d.className = "wd-dmg";
    var crit = Math.random() < 0.2;
    d.textContent = crit ? "CRIT! " + (Math.floor(Math.random() * 900) + 100) : String(Math.floor(Math.random() * 99) + 1);
    d.style.left = e.clientX + (Math.random() * 24 - 12) + "px";
    d.style.top = e.clientY + (Math.random() * 12 - 6) + "px";
    d.style.fontSize = crit ? "1.3rem" : ".85rem";
    d.style.color = crit ? "#ffc83d" : COLORS[Math.floor(Math.random() * COLORS.length)];
    document.body.appendChild(d);
    // start animation next frame so it always plays
    requestAnimationFrame(function () {
      d.classList.add("wd-dmg--on");
    });
    setTimeout(function () {
      d.remove();
    }, 760);
  }
  window.addEventListener("pointerdown", spawn);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "juice.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
/* Wanderen — Arcade index / landing. English default, 中文 toggle.
   gold/red/cyan, hard pixel cards, the "juice" layer (click → damage numbers),
   CRT overlay, crosshair. Loaded via <script type="text/babel" src="app.jsx">. */
(function () {
  const NS = window.WanderenDesignSystem_eab830 || {};
  const {
    Card
  } = NS;

  // name & hook carry both languages; CTAs stay English (arcade).
  const GAMES = [{
    emoji: "⚔️",
    tag: "NEW",
    name: {
      en: "Three Kingdoms Survivors",
      cn: "三国幸存者"
    },
    hook: {
      en: "Mow down the warring states, one rider worth a thousand. A Vampire-Survivors-style horde game in the Three Kingdoms: eight generals, ultimate skills, armies cleared in a thought. Runs in-browser.",
      cn: "乱世割草，一骑当千。三国题材的《吸血鬼幸存者》式割草游戏：八名将、无双绝技、千军万马一念清场。浏览器直开。"
    },
    cta: "▶ PRESS TO PLAY",
    href: "https://sanguo.wanderen.ai"
  }, {
    emoji: "👊",
    tag: "NEW",
    name: {
      en: "Juice Lab",
      cn: "打击感实验室"
    },
    hook: {
      en: "From “dead fish” to “addictive”: 19 stackable game-feel techniques (flash / hitstop / screenshake / particles…), A/B them, feel by hand how juice is layered.",
      cn: "从“死鱼”到“上头”：19 步逐层开关打击感技术（闪白/顿帧/震屏/粒子…），A/B 对比，亲手感受手感怎么叠出来。"
    },
    cta: "▶ PRESS TO PLAY",
    href: "https://juice.wanderen.ai"
  }, {
    emoji: "🗡️",
    tag: "NEW",
    name: {
      en: "mini-dmc",
      cn: "迷你鬼泣"
    },
    hook: {
      en: "Devil May Cry’s core combat loop, rebuilt: ground combos, launchers, air combos, dodge i-frames, D→SSS style ranking. Pure Canvas, zero deps.",
      cn: "复刻《鬼泣》核心战斗循环：地面四连、挑空、空中连、翻滚无敌帧，D→SSS 风格评分。纯 Canvas 零依赖。"
    },
    cta: "▶ PRESS TO PLAY",
    href: "https://dmc.wanderen.ai"
  }, {
    emoji: "⚡",
    tag: "NEW",
    name: {
      en: "Yishan · Single-key Parry",
      cn: "一闪 · 单键弹反"
    },
    hook: {
      en: "A one-button rhythm parry: read the light, strike on that one frame. Minimum input, maximum feel — timing itself becomes the game.",
      cn: "一颗按键的节奏弹反：看准光，在那一帧反击。最小输入，最大手感 —— 把“时机”本身做成玩法。"
    },
    cta: "▶ PRESS TO PLAY",
    href: "https://yishan.wanderen.ai"
  }, {
    emoji: "🏞️",
    tag: "NEW",
    name: {
      en: "Misty Valley Walk",
      cn: "幻谷漫步"
    },
    hook: {
      en: "Walk first-person into a splat-rendered fantasy valley: Spark rendering + Rapier physics, roaming a world grown from point clouds.",
      cn: "第一人称走进一片泼溅（splat）出来的幻想山谷：Spark 渲染 + Rapier 物理，沉浸式漫游一个由点云长成的世界。"
    },
    cta: "▶ PRESS TO PLAY",
    href: "https://valley.wanderen.ai"
  }, {
    emoji: "🎭",
    tag: null,
    name: {
      en: "The Game Theory",
      cn: "游戏论"
    },
    hook: {
      en: "Play and dissect your own meta-game: an overly honest designer confesses, to your face, every mechanic that gets you hooked.",
      cn: "边玩边拆穿自己的元游戏：一个过分诚实的设计师，当面坦白每一个让你上瘾的机制。"
    },
    cta: "▶ PRESS TO PLAY",
    href: "https://gametheory.wanderen.ai"
  }];
  const TOOLS = [{
    emoji: "🟢",
    tag: null,
    name: {
      en: "Slime · Claude Code RPG plugin",
      cn: "Slime · Claude Code RPG 插件"
    },
    hook: {
      en: "Turn a real Claude Code session into a turn-based RPG: the goal is the Boss, todos are mobs, tokens are resources. “Already addicted? Might as well lean in.”",
      cn: "把真实的 Claude Code 会话变成回合制 RPG：目标是 Boss，todo 是小怪，token 是资源。「既然已经上瘾了，何不更上瘾一点。」"
    },
    cta: "▶ GITHUB",
    href: "https://github.com/bitqs/Slime"
  }, {
    emoji: "🧬",
    tag: "DEV",
    dev: true,
    name: {
      en: "vs-anatomy",
      cn: "vs-anatomy 幸存者解剖"
    },
    hook: {
      en: "Decompile Vampire Survivors → 157 reusable design atoms (architecture / feel / numbers / economy), each cited to source.",
      cn: "反编译《吸血鬼幸存者》→ 157 条可复用设计原子（架构/手感/数值/经济，条条带出处）。"
    },
    cta: null,
    href: null
  }, {
    emoji: "🏭",
    tag: "DEV",
    dev: true,
    name: {
      en: "Gamage · AI gamedev framework",
      cn: "Gamage · AI 协作游戏开发框架"
    },
    hook: {
      en: "A 6-agent, 5-gate game-dev pipeline template — AI does the work, humans own the feel. Three Kingdoms Survivors was its first run.",
      cn: "六 Agent + 五道门禁的游戏开发流水线模板 —— AI 干活，人类只管手感。三国幸存者就是它的首跑作品。"
    },
    cta: null,
    href: null
  }, {
    emoji: "📈",
    tag: "DEV",
    dev: true,
    name: {
      en: "AlphaForge · A-share quant",
      cn: "AlphaForge · A股量化工具"
    },
    hook: {
      en: "A factor forge for A-shares: a data layer + factor pipeline that turns stock-picking into backtestable, iterable engineering. WIP.",
      cn: "给 A 股打造的因子锻造台：数据层 + 因子流水线打底，把“挑票”这件事做成可回测、可迭代的工程。建设中。"
    },
    cta: "▶ OPEN",
    href: "https://alphaforge.wanderen.ai"
  }];
  const COPY = {
    tagline: {
      en: ["The one who plays · Games", "AI · build, play, dissect"],
      cn: ["玩的人 · 游戏", "AI · 边做边玩边拆解"]
    },
    sub: {
      en: ["Obsessed with ", "how the smallest logic grows into game-feel", " — and with using AI to do it fast and satisfying.", "Try clicking anywhere on this page."],
      cn: ["痴迷『", "最小的逻辑，如何长出游戏感", "』—— 也痴迷用 AI 把这件事做快、做爽。", "试着在这页上随便点几下。"]
    },
    games: {
      en: "",
      cn: "游戏"
    },
    tools: {
      en: "",
      cn: "AI × 游戏开发"
    }
  };
  function Item({
    it,
    lang
  }) {
    const clickable = !!it.href;
    const other = lang === "en" ? "cn" : "en";
    return /*#__PURE__*/React.createElement(Card, {
      variant: "raised",
      padding: "none",
      interactive: clickable,
      as: clickable ? "a" : "div",
      href: it.href || undefined,
      target: clickable ? "_blank" : undefined,
      rel: clickable ? "noreferrer" : undefined,
      style: {
        ...L.card,
        opacity: it.dev ? 0.78 : 1
      }
    }, it.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        ...L.tag,
        background: it.dev ? "var(--border)" : "var(--accent)",
        color: it.dev ? "var(--text-muted)" : "#fff"
      }
    }, it.tag), /*#__PURE__*/React.createElement("span", {
      style: L.icon
    }, it.emoji), /*#__PURE__*/React.createElement("h3", {
      style: L.h3
    }, it.name[lang], it.name[other] !== it.name[lang] && /*#__PURE__*/React.createElement("span", {
      style: L.alt
    }, it.name[other])), /*#__PURE__*/React.createElement("p", {
      style: L.p
    }, it.hook[lang]), it.cta && /*#__PURE__*/React.createElement("span", {
      style: L.play
    }, it.cta));
  }
  function Sec({
    kicker,
    label
  }) {
    return /*#__PURE__*/React.createElement("h2", {
      style: L.sec
    }, /*#__PURE__*/React.createElement("span", null, kicker), label ? /*#__PURE__*/React.createElement("span", {
      style: L.secZh
    }, label) : null, /*#__PURE__*/React.createElement("span", {
      style: L.secLine
    }));
  }
  function LangToggle({
    lang,
    setLang
  }) {
    const seg = (v, t) => /*#__PURE__*/React.createElement("button", {
      onClick: () => setLang(v),
      style: {
        ...L.segBtn,
        ...(lang === v ? L.segOn : {})
      }
    }, t);
    return /*#__PURE__*/React.createElement("div", {
      style: L.toggle
    }, seg("en", "EN"), seg("cn", "中"));
  }
  function App() {
    const [lang, setLangState] = React.useState(() => {
      try {
        return localStorage.getItem("wd_lang") || "en";
      } catch (e) {
        return "en";
      }
    });
    const setLang = v => {
      setLangState(v);
      try {
        localStorage.setItem("wd_lang", v);
      } catch (e) {}
    };
    // Click-anywhere damage-number juice now lives in the shared juice.js
    // (loaded by index.html) so every page gets it.

    const tag = COPY.tagline[lang],
      sub = COPY.sub[lang];
    return /*#__PURE__*/React.createElement("div", {
      className: "wd-crt",
      style: L.page
    }, /*#__PURE__*/React.createElement(LangToggle, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement("div", {
      style: L.wrap
    }, /*#__PURE__*/React.createElement("header", {
      style: L.header
    }, /*#__PURE__*/React.createElement("h1", {
      style: L.logo
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/wanderen-mark.svg",
      style: L.logoMark,
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: L.logoWord
    }, "wanderen", /*#__PURE__*/React.createElement("span", {
      style: L.logoTld
    }, ".ai")), /*#__PURE__*/React.createElement("span", {
      style: L.cursor
    })), /*#__PURE__*/React.createElement("p", {
      style: L.tagline
    }, tag[0], /*#__PURE__*/React.createElement("span", {
      style: L.vs
    }, "\xD7"), tag[1]), /*#__PURE__*/React.createElement("p", {
      style: L.sub
    }, sub[0], /*#__PURE__*/React.createElement("em", {
      style: L.em
    }, sub[1]), sub[2], /*#__PURE__*/React.createElement("br", null), sub[3])), /*#__PURE__*/React.createElement(Sec, {
      kicker: "GAMES",
      label: COPY.games[lang]
    }), /*#__PURE__*/React.createElement("div", {
      style: L.grid
    }, GAMES.map((it, i) => /*#__PURE__*/React.createElement(Item, {
      key: i,
      it: it,
      lang: lang
    }))), /*#__PURE__*/React.createElement(Sec, {
      kicker: "TOOLS",
      label: COPY.tools[lang]
    }), /*#__PURE__*/React.createElement("div", {
      style: L.grid
    }, TOOLS.map((it, i) => /*#__PURE__*/React.createElement(Item, {
      key: i,
      it: it,
      lang: lang
    }))), /*#__PURE__*/React.createElement("footer", {
      style: L.footer
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://github.com/bitqs",
      target: "_blank",
      rel: "noreferrer",
      style: L.footLink
    }, "GitHub"), /*#__PURE__*/React.createElement("span", {
      style: L.stack
    }, "\uD83E\uDDF0 Phaser \xB7 TypeScript \xB7 Remotion \xB7 Cloudflare \xB7 Claude Code"), /*#__PURE__*/React.createElement("span", {
      style: L.press
    }, "PRESS START"))));
  }
  const L = {
    page: {
      background: "var(--bg)",
      minHeight: "100vh"
    },
    wrap: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "0 24px"
    },
    toggle: {
      position: "fixed",
      top: 18,
      right: 18,
      zIndex: 9100,
      display: "flex",
      border: "2px solid var(--border)",
      background: "rgba(11,11,20,.7)",
      backdropFilter: "blur(6px)"
    },
    segBtn: {
      fontFamily: "var(--font-pixel)",
      fontSize: "9px",
      letterSpacing: ".06em",
      padding: "8px 11px",
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer"
    },
    segOn: {
      background: "var(--primary)",
      color: "var(--text-on-neon)"
    },
    header: {
      padding: "88px 0 56px"
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(10px,2vw,18px)",
      margin: 0,
      lineHeight: 1,
      fontSize: "clamp(40px,7vw,72px)"
    },
    logoMark: {
      height: "0.9em",
      width: "auto",
      imageRendering: "pixelated",
      filter: "drop-shadow(0 0 12px rgba(255,200,61,.4))",
      flex: "none"
    },
    logoWord: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--primary)",
      letterSpacing: "-0.01em",
      textShadow: "3px 3px 0 var(--accent), 6px 6px 0 rgba(255,71,87,.22), 0 0 26px rgba(255,200,61,.30)"
    },
    logoTld: {
      color: "var(--tertiary)"
    },
    cursor: {
      display: "inline-block",
      width: "0.5em",
      height: "0.82em",
      background: "var(--tertiary)",
      boxShadow: "0 0 10px var(--glow-cyan)",
      animation: "wd-blink 1s steps(1) infinite",
      flex: "none",
      alignSelf: "center"
    },
    tagline: {
      marginTop: 28,
      marginBottom: 0,
      fontSize: "1.15rem",
      fontWeight: 700,
      color: "var(--text)",
      fontFamily: "var(--font-body)"
    },
    vs: {
      color: "var(--accent)",
      fontFamily: "var(--font-pixel)",
      fontSize: ".8em",
      padding: "0 .35em"
    },
    sub: {
      marginTop: 10,
      marginBottom: 0,
      color: "var(--text-muted)",
      maxWidth: 600,
      fontFamily: "var(--font-body)",
      lineHeight: 1.7
    },
    em: {
      color: "var(--tertiary)",
      fontStyle: "normal"
    },
    sec: {
      fontFamily: "var(--font-pixel)",
      fontSize: ".8rem",
      color: "var(--tertiary)",
      margin: "64px 0 24px",
      display: "flex",
      alignItems: "center",
      gap: 14
    },
    secZh: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "1.25rem",
      color: "var(--text-hi)"
    },
    secLine: {
      flex: 1,
      height: 2,
      background: "linear-gradient(90deg, var(--border), transparent)"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
      gap: 18
    },
    card: {
      border: "3px solid var(--border)",
      borderRadius: 0,
      padding: "22px 20px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      textDecoration: "none",
      color: "var(--text)",
      position: "relative"
    },
    tag: {
      position: "absolute",
      top: -3,
      right: 12,
      fontSize: ".68rem",
      fontWeight: 700,
      padding: "2px 9px",
      fontFamily: "var(--font-body)"
    },
    icon: {
      fontSize: "1.9rem",
      lineHeight: 1
    },
    h3: {
      fontFamily: "var(--font-display)",
      fontSize: "1.1rem",
      fontWeight: 900,
      color: "var(--text-hi)",
      margin: 0,
      lineHeight: 1.3
    },
    alt: {
      color: "var(--text-muted)",
      fontWeight: 400,
      fontSize: ".8rem",
      marginLeft: 6,
      fontFamily: "var(--font-body)"
    },
    p: {
      color: "var(--text-muted)",
      fontSize: ".9rem",
      margin: 0,
      flex: 1,
      fontFamily: "var(--font-body)",
      lineHeight: 1.7
    },
    play: {
      fontFamily: "var(--font-pixel)",
      fontSize: ".65rem",
      color: "var(--primary)",
      marginTop: 6
    },
    footer: {
      marginTop: 88,
      padding: "36px 0 64px",
      borderTop: "2px solid var(--border)",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px 28px",
      alignItems: "center",
      color: "var(--text-muted)",
      fontSize: ".9rem",
      fontFamily: "var(--font-body)"
    },
    footLink: {
      color: "var(--tertiary)",
      textDecoration: "none",
      fontWeight: 700
    },
    stack: {
      color: "var(--text-muted)"
    },
    press: {
      fontFamily: "var(--font-pixel)",
      fontSize: ".6rem",
      color: "var(--text-muted)",
      marginLeft: "auto",
      animation: "wd-blink 1.4s steps(1) infinite"
    }
  };
  window.WanderenLanding = App;
  if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reader/app.jsx
try { (() => {
/* Wanderen — Reader / content platform UI kit.
   Interactive: browse the index, filter by tab, open an article, save it, go back.
   Loaded via <script type="text/babel" src="app.jsx"> in index.html. */
(function () {
  const NS = window.WanderenDesignSystem_eab830 || {};
  const {
    Button,
    IconButton,
    Badge,
    Tag,
    Card,
    Avatar,
    Input,
    Tabs
  } = NS;
  const Icon = ({
    name,
    size = 24,
    color
  }) => React.createElement("iconify-icon", {
    icon: "pixelarticons:" + name,
    width: size,
    height: size,
    style: color ? {
      color
    } : undefined
  });
  const HUE = {
    games: "magenta",
    ai: "cyan",
    philosophy: "violet",
    play: "amber"
  };
  const hueVar = h => ({
    magenta: "--accent",
    cyan: "--primary",
    violet: "--tertiary",
    amber: "--warning"
  })[h] || "--primary";
  const POSTS = [{
    id: "roguelike",
    cat: "Field note",
    catHue: "magenta",
    icon: "gamepad",
    title: "What roguelikes know about being alive",
    read: "7 min",
    date: "2026.06.14",
    author: "Mira Okafor",
    tags: ["games", "philosophy"],
    excerpt: "Permadeath isn't punishment. It's the only honest way a game can talk about time.",
    body: ["Every roguelike begins with the same quiet promise: you will lose this run, and that loss will be permanent. No reloading, no take-backs. The dungeon resets, the map redraws itself, and whatever you learned is the only thing you keep.", "It sounds cruel. In practice it's the closest most games get to honesty about being alive — you get one timeline, it doesn't rewind, and the only thing that carries forward is what you understood.", {
      quote: "A roguelike doesn't ask you to be perfect. It asks you to pay attention.",
      who: "— a thought from run #214"
    }, "What you carry between runs isn't gear. It's a model of the world: which rooms are traps, which trades are worth it, when to run. The game becomes a way of thinking, not a thing to beat.", "Maybe that's the trick worth stealing. Treat the next hard thing like a run. Lose it well. Keep the model."]
  }, {
    id: "ai-level",
    cat: "Experiment",
    catHue: "cyan",
    icon: "zap",
    title: "I let an AI design a level and then played it",
    read: "5 min",
    date: "2026.06.09",
    author: "Kai Lin",
    tags: ["ai", "games", "play"],
    excerpt: "It built something I'd never design — and it was almost good. Almost is the interesting part.",
    body: ["I gave a model a tile-set, a few rules about reachability, and one instruction: make it feel like a place, not a puzzle. Then I played whatever came out, blind.", "The first three levels were unplayable in the funniest ways — a key locked behind the door it opened, a boss arena with no floor. The fourth was eerie and almost great.", "The interesting failures all rhymed: the model understood structure but not stakes. It knew what a level looks like, not what it feels like to be afraid of running out of arrows."]
  }, {
    id: "play-won",
    cat: "Philosophy",
    catHue: "violet",
    icon: "comment",
    title: "If a game can be won, was it ever play?",
    read: "9 min",
    date: "2026.05.30",
    author: "S. Vega",
    tags: ["philosophy", "play"],
    excerpt: "Caillois split games from play. Maybe winning is where one quietly becomes the other.",
    body: ["The philosopher Roger Caillois drew a line between paidia — wild, improvised play — and ludus, the structured game with rules and a win state. Most of childhood lives on the paidia side. Most of adulthood drifts toward ludus.", "Winning is a strange goal. The moment you achieve it, the activity ends. Play, by contrast, has no terminal state; it just continues until you stop wanting to.", "So when does a game stop being play? Perhaps exactly when winning starts to matter more than the next move."]
  }, {
    id: "npc",
    cat: "Field note",
    catHue: "magenta",
    icon: "users",
    title: "The quiet genius of a good NPC",
    read: "6 min",
    date: "2026.05.22",
    author: "Mira Okafor",
    tags: ["games", "ai"],
    excerpt: "The best non-player characters don't act smart. They act like they have somewhere else to be.",
    body: ["A great NPC is mostly an illusion of indifference. They glance at you, then go back to sweeping the floor. That glance is the whole trick.", "Intelligence in characters is less about reasoning and more about the suggestion of an inner life that doesn't revolve around you."]
  }];
  const TABS = [{
    value: "all",
    label: "All",
    count: POSTS.length
  }, {
    value: "Field note",
    label: "Field notes",
    icon: "note",
    count: POSTS.filter(p => p.cat === "Field note").length
  }, {
    value: "Experiment",
    label: "Experiments",
    icon: "zap",
    count: POSTS.filter(p => p.cat === "Experiment").length
  }, {
    value: "Philosophy",
    label: "Philosophy",
    icon: "comment",
    count: POSTS.filter(p => p.cat === "Philosophy").length
  }];
  const ALL_TAGS = ["games", "ai", "philosophy", "play"];
  function Sidebar({
    route,
    onNav
  }) {
    const items = [{
      id: "home",
      icon: "home",
      label: "Home"
    }, {
      id: "notes",
      icon: "note",
      label: "Field notes"
    }, {
      id: "exp",
      icon: "zap",
      label: "Experiments"
    }, {
      id: "phil",
      icon: "comment",
      label: "Philosophy"
    }, {
      id: "saved",
      icon: "bookmark",
      label: "Inventory"
    }];
    return /*#__PURE__*/React.createElement("aside", {
      style: S.sidebar
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: S.sideLogo,
      onClick: e => {
        e.preventDefault();
        onNav("home");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/wanderen-mark.svg",
      width: "28",
      height: "28",
      style: {
        imageRendering: "pixelated"
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      style: S.sideWord
    }, "wanderen")), /*#__PURE__*/React.createElement("nav", {
      style: S.sideNav
    }, items.map(it => /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav(it.id);
      },
      style: {
        ...S.sideLink,
        ...(route === it.id ? S.sideLinkActive : {})
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 20
    }), " ", it.label))), /*#__PURE__*/React.createElement("div", {
      style: S.sideUser
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "You Wanderer",
      size: "sm",
      ring: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--text-hi)",
        fontWeight: 600
      }
    }, "You"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--text-faint)"
      }
    }, "wanderer_42"))));
  }
  function Topbar() {
    return /*#__PURE__*/React.createElement("div", {
      style: S.topbar
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 320,
        maxWidth: "40vw"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      icon: "search",
      placeholder: "Search the archive\u2026",
      "aria-label": "Search"
    })), /*#__PURE__*/React.createElement("div", {
      style: S.topRight
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "sun-alt",
      label: "Theme",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications",
      variant: "ghost"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      icon: "zap"
    }, "Join")));
  }
  function ArticleRow({
    post,
    saved,
    onOpen,
    onSave
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      variant: "default",
      padding: "none",
      interactive: true,
      style: {
        overflow: "hidden"
      },
      onClick: () => onOpen(post)
    }, /*#__PURE__*/React.createElement("div", {
      style: S.row
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.rowThumb,
        color: `var(${hueVar(post.catHue)})`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: post.icon,
      size: 34
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        marginBottom: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      color: post.catHue,
      variant: "outline"
    }, post.cat), /*#__PURE__*/React.createElement("span", {
      style: S.metaMono
    }, post.date, " \xB7 ", post.read)), /*#__PURE__*/React.createElement("h3", {
      style: S.rowTitle
    }, post.title), /*#__PURE__*/React.createElement("p", {
      style: S.rowExcerpt
    }, post.excerpt), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        marginTop: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: post.author,
      size: "xs"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, post.author)))), /*#__PURE__*/React.createElement("div", {
      onClick: e => {
        e.stopPropagation();
        onSave(post.id);
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: saved ? "bookmark" : "bookmark",
      label: saved ? "Saved" : "Save",
      variant: saved ? "solid" : "default"
    }))));
  }
  function IndexView({
    state,
    set,
    onOpen,
    onSave
  }) {
    const filtered = POSTS.filter(p => {
      const tabOk = state.tab === "all" || p.cat === state.tab;
      const tagOk = !state.tags.length || state.tags.every(t => p.tags.includes(t));
      return tabOk && tagOk;
    });
    const toggleTag = t => set(s => ({
      ...s,
      tags: s.tags.includes(t) ? s.tags.filter(x => x !== t) : [...s.tags, t]
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: S.content
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: S.kicker
    }, "Dispatch log"), /*#__PURE__*/React.createElement("h1", {
      style: S.pageTitle
    }, "Field notes from the edge of play & AI")), /*#__PURE__*/React.createElement(Tabs, {
      items: TABS,
      value: state.tab,
      onChange: v => set(s => ({
        ...s,
        tab: v
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: S.tagRow
    }, /*#__PURE__*/React.createElement("span", {
      style: S.filterLabel
    }, "Filter"), ALL_TAGS.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      hash: true,
      active: state.tags.includes(t),
      onClick: () => toggleTag(t)
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: S.list
    }, filtered.map(p => /*#__PURE__*/React.createElement(ArticleRow, {
      key: p.id,
      post: p,
      saved: state.saved.includes(p.id),
      onOpen: onOpen,
      onSave: onSave
    })), !filtered.length && /*#__PURE__*/React.createElement("div", {
      style: S.empty
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map",
      size: 32,
      color: "var(--text-faint)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "var(--space-3) 0 0",
        color: "var(--text-muted)",
        fontFamily: "var(--font-body)"
      }
    }, "Nothing here yet. Every map starts blank \u2014 try fewer filters."))));
  }
  function ReadingView({
    post,
    saved,
    onBack,
    onSave
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: S.reader
    }, /*#__PURE__*/React.createElement("div", {
      style: S.readerBar
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "arrow-left",
      onClick: onBack
    }, "Back to notes"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bookmark",
      label: saved ? "Saved" : "Save",
      variant: saved ? "solid" : "default",
      onClick: () => onSave(post.id)
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "share",
      label: "Share",
      variant: "default"
    }))), /*#__PURE__*/React.createElement("article", {
      style: S.article
    }, /*#__PURE__*/React.createElement(Badge, {
      color: post.catHue,
      variant: "outline"
    }, post.cat), /*#__PURE__*/React.createElement("h1", {
      style: S.articleTitle
    }, post.title), /*#__PURE__*/React.createElement("div", {
      style: S.articleMeta
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: post.author,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-hi)",
        fontWeight: 600
      }
    }, post.author), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-faint)"
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        color: "var(--text-faint)"
      }
    }, post.date, " \xB7 ", post.read, " read")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...S.heroBlock,
        color: `var(${hueVar(post.catHue)})`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: post.icon,
      size: 56
    })), post.body.map((b, i) => typeof b === "string" ? /*#__PURE__*/React.createElement("p", {
      key: i,
      style: S.prose
    }, b) : /*#__PURE__*/React.createElement("blockquote", {
      key: i,
      style: S.quote
    }, /*#__PURE__*/React.createElement("span", {
      style: S.quoteText
    }, b.quote), /*#__PURE__*/React.createElement("span", {
      style: S.quoteWho
    }, b.who))), /*#__PURE__*/React.createElement("div", {
      style: S.articleTags
    }, post.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      hash: true
    }, t))), /*#__PURE__*/React.createElement(Card, {
      variant: "raised",
      padding: "lg",
      style: {
        marginTop: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: post.author,
      size: "lg",
      ring: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--text-hi)"
      }
    }, post.author), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "var(--space-2) 0 var(--space-3)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "var(--text-muted)",
        lineHeight: 1.6
      }
    }, "Wanderer-in-residence. Writes about games, minds, and the space between."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      icon: "plus"
    }, "Follow"))))));
  }
  function App() {
    const [state, setState] = React.useState({
      route: "home",
      tab: "all",
      tags: [],
      saved: ["roguelike"],
      open: null
    });
    const onSave = id => setState(s => ({
      ...s,
      saved: s.saved.includes(id) ? s.saved.filter(x => x !== id) : [...s.saved, id]
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: S.shell
    }, /*#__PURE__*/React.createElement(Sidebar, {
      route: state.route,
      onNav: r => setState(s => ({
        ...s,
        route: r,
        open: null
      }))
    }), /*#__PURE__*/React.createElement("main", {
      style: S.main
    }, /*#__PURE__*/React.createElement(Topbar, null), state.open ? /*#__PURE__*/React.createElement(ReadingView, {
      post: state.open,
      saved: state.saved.includes(state.open.id),
      onBack: () => setState(s => ({
        ...s,
        open: null
      })),
      onSave: onSave
    }) : /*#__PURE__*/React.createElement(IndexView, {
      state: state,
      set: setState,
      onOpen: p => {
        setState(s => ({
          ...s,
          open: p
        }));
        window.scrollTo(0, 0);
      },
      onSave: onSave
    })));
  }
  const S = {
    shell: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--bg)"
    },
    sidebar: {
      width: 240,
      flex: "none",
      borderRight: "var(--bw) solid var(--border)",
      background: "var(--surface)",
      padding: "var(--space-6) var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      position: "sticky",
      top: 0,
      height: "100vh"
    },
    sideLogo: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      textDecoration: "none",
      padding: "0 var(--space-2)"
    },
    sideWord: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-hi)"
    },
    sideNav: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    },
    sideLink: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-muted)",
      textDecoration: "none",
      padding: "var(--space-3)",
      borderRadius: "var(--radius-px)",
      border: "var(--bw) solid transparent"
    },
    sideLinkActive: {
      color: "var(--primary)",
      background: "var(--cyan-wash)",
      borderColor: "var(--border)"
    },
    sideUser: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-3)",
      borderTop: "var(--bw) solid var(--border)"
    },
    main: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    },
    topbar: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-8)",
      background: "rgba(10,13,26,0.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "var(--bw) solid var(--border)"
    },
    topRight: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    },
    content: {
      maxWidth: 880,
      width: "100%",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-8) var(--space-20)"
    },
    kicker: {
      fontFamily: "var(--font-pixel)",
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--primary)",
      marginBottom: "var(--space-3)"
    },
    pageTitle: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.05,
      color: "var(--text-hi)",
      margin: 0,
      letterSpacing: "-0.01em"
    },
    tagRow: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      margin: "var(--space-6) 0 var(--space-6)"
    },
    filterLabel: {
      fontFamily: "var(--font-pixel)",
      fontSize: 9,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginRight: "var(--space-2)"
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    },
    row: {
      display: "flex",
      gap: "var(--space-5)",
      padding: "var(--space-5)",
      alignItems: "flex-start"
    },
    rowThumb: {
      width: 84,
      height: 84,
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-inset)",
      backgroundImage: "var(--grid)",
      border: "var(--bw) solid var(--border)",
      borderRadius: "var(--radius-px)"
    },
    rowTitle: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.15,
      color: "var(--text-hi)",
      margin: "0 0 var(--space-2)"
    },
    rowExcerpt: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: 0
    },
    metaMono: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-faint)"
    },
    empty: {
      textAlign: "center",
      padding: "var(--space-20) 0"
    },
    reader: {
      maxWidth: 760,
      width: "100%",
      margin: "0 auto",
      padding: "var(--space-6) var(--space-8) var(--space-24)"
    },
    readerBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-8)"
    },
    article: {},
    articleTitle: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "var(--text-hi)",
      margin: "var(--space-4) 0 var(--space-5)"
    },
    articleMeta: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      marginBottom: "var(--space-8)"
    },
    heroBlock: {
      height: 220,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-inset)",
      backgroundImage: "var(--grid)",
      border: "var(--bw) solid var(--border)",
      borderRadius: "var(--radius-md)",
      marginBottom: "var(--space-10)",
      boxShadow: "var(--shadow-pixel)"
    },
    prose: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: 1.8,
      color: "var(--text)",
      margin: "0 0 var(--space-6)"
    },
    quote: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      borderLeft: "var(--bw-thick) solid var(--primary)",
      padding: "var(--space-2) var(--space-6)",
      margin: "var(--space-8) 0"
    },
    quoteText: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.25,
      color: "var(--text-hi)"
    },
    quoteWho: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-muted)"
    },
    articleTags: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "var(--space-8)",
      paddingTop: "var(--space-8)",
      borderTop: "var(--bw) solid var(--border)"
    }
  };
  window.WanderenReader = App;
  if (document.getElementById("root")) {
    ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reader/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
