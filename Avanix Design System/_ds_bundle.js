/* @ds-bundle: {"format":3,"namespace":"AvanixDesignSystem_a5b4a8","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"cb796b9fa1fd","components/core/Badge.jsx":"79abdddde9c8","components/core/Button.jsx":"7b1761e3d2d1","components/core/GlassCard.jsx":"0aa3caf37d31","components/core/Stat.jsx":"f5e1693f0538","components/feedback/ProgressBar.jsx":"f13bc702527a","components/feedback/StatusPill.jsx":"bf32140ed467","components/forms/Checkbox.jsx":"8c03a2e60615","components/forms/Input.jsx":"b3a55d99e40b","components/forms/Switch.jsx":"b92d641f3a30","components/navigation/Tabs.jsx":"795ebb4b1536","ui_kits/avanix-web/Courses.jsx":"4bddba342e4a","ui_kits/avanix-web/Dashboard.jsx":"5c7c81fdee09","ui_kits/avanix-web/Landing.jsx":"4a1dabfcfa59","ui_kits/avanix-web/Nav.jsx":"da7fd00514a0","ui_kits/avanix-web/shared.jsx":"6711d32472e9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AvanixDesignSystem_a5b4a8 = window.AvanixDesignSystem_a5b4a8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular user/brand image with optional verified badge and ring.
 * Falls back to initials when no src is given.
 */
function Avatar({
  src = null,
  name = "",
  size = 44,
  ring = false,
  verified = false,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "999px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: src ? "var(--av-slate-150)" : "linear-gradient(150deg, var(--av-blue-500), var(--av-navy-600))",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.38,
      boxShadow: ring ? "0 0 0 3px var(--bg-page), 0 0 0 5px var(--av-blue-600)" : "var(--shadow-xs)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "A"), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -2,
      bottom: -2,
      width: size * 0.34,
      height: size * 0.34,
      minWidth: 14,
      minHeight: 14,
      borderRadius: "999px",
      background: "var(--av-blue-600)",
      border: "2px solid var(--bg-page)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: size * 0.2,
      fontWeight: 800
    }
  }, "\u2713"));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status / category label. Solid, soft (tinted), or glass.
 */
function Badge({
  children,
  color = "blue",
  variant = "soft",
  dot = false,
  style = {},
  ...rest
}) {
  const palette = {
    blue: {
      solid: "var(--av-blue-600)",
      soft: "var(--av-blue-100)",
      fg: "var(--av-blue-700)"
    },
    navy: {
      solid: "var(--av-navy-900)",
      soft: "var(--av-slate-150)",
      fg: "var(--av-navy-900)"
    },
    success: {
      solid: "var(--av-success)",
      soft: "var(--av-success-bg)",
      fg: "#0E8C54"
    },
    warning: {
      solid: "var(--av-warning)",
      soft: "var(--av-warning-bg)",
      fg: "#B36A00"
    },
    danger: {
      solid: "var(--av-danger)",
      soft: "var(--av-danger-bg)",
      fg: "#C5362C"
    },
    neutral: {
      solid: "var(--av-slate-600)",
      soft: "var(--av-slate-150)",
      fg: "var(--av-slate-700)"
    }
  };
  const p = palette[color] || palette.blue;
  const variants = {
    solid: {
      background: p.solid,
      color: "#fff"
    },
    soft: {
      background: p.soft,
      color: p.fg
    },
    glass: {
      background: "var(--glass-bg-strong)",
      color: p.fg,
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.01em",
      lineHeight: 1,
      borderRadius: "999px",
      ...(variants[variant] || variants.soft),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "999px",
      background: variant === "solid" ? "#fff" : p.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avanix Button — the primary action element.
 * Liquid-glass aware: solid electric-blue primary, frosted glass secondary,
 * quiet ghost, and a navy "on-dark" treatment for hero sections.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 14px",
      fontSize: "13px",
      gap: "6px",
      radius: 10
    },
    md: {
      padding: "11px 20px",
      fontSize: "15px",
      gap: "8px",
      radius: 12
    },
    lg: {
      padding: "15px 28px",
      fontSize: "16px",
      gap: "10px",
      radius: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontFamily: "var(--font-body)",
    fontSize: s.fontSize,
    fontWeight: 700,
    letterSpacing: "-0.01em",
    lineHeight: 1,
    border: "1px solid transparent",
    borderRadius: pill ? "999px" : s.radius + "px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    userSelect: "none"
  };
  const variants = {
    primary: {
      background: "var(--av-blue-600)",
      color: "#fff",
      boxShadow: "0 6px 18px -4px rgba(10,91,255,0.55), inset 0 1px 0 rgba(255,255,255,0.25)"
    },
    secondary: {
      background: "var(--glass-bg-strong)",
      color: "var(--text-strong)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.7)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--av-blue-600)",
      border: "1.5px solid var(--av-blue-600)"
    },
    dark: {
      background: "var(--av-navy-900)",
      color: "#fff",
      boxShadow: "0 8px 22px -6px rgba(11,18,64,0.5)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassCard — the signature Avanix surface. A frosted, translucent panel with
 * a diagonal sheen, white hairline border and soft navy-tinted shadow.
 * Works on both light and navy backgrounds (set tone="dark" on navy).
 */
function GlassCard({
  children,
  tone = "light",
  strong = false,
  glow = false,
  padding = 24,
  radius = 20,
  style = {},
  ...rest
}) {
  const isDark = tone === "dark";
  const wrap = {
    position: "relative",
    borderRadius: radius + "px",
    padding: padding + "px",
    background: strong ? isDark ? "var(--glass-bg-strong)" : "var(--glass-bg-strong)" : isDark ? "var(--glass-bg-dark)" : "var(--glass-bg)",
    border: `1px solid ${isDark ? "var(--glass-border-dark)" : "var(--glass-border)"}`,
    boxShadow: isDark ? "var(--shadow-glass-dark)" : "var(--shadow-glass)",
    backdropFilter: "blur(var(--glass-blur)) saturate(1.4)",
    WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(1.4)",
    overflow: "hidden",
    color: isDark ? "var(--text-strong)" : "var(--text-body)",
    ...(glow ? {
      boxShadow: (isDark ? "var(--shadow-glass-dark)" : "var(--shadow-glass)") + ", var(--glow-soft)"
    } : {}),
    ...style
  };
  const sheen = {
    content: '""',
    position: "absolute",
    inset: 0,
    background: isDark ? "linear-gradient(160deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 65%)" : "linear-gradient(160deg, #FFFFFF 0%, rgba(255,255,255,0.35) 30%, rgba(255,255,255,0) 60%)",
    opacity: 0.9,
    pointerEvents: "none"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: sheen,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a headline metric with label, shown in a glass tile.
 * For community/course numbers (members, lessons, automation hours, etc.).
 */
function Stat({
  value,
  label,
  sublabel = null,
  icon = null,
  tone = "light",
  align = "left",
  style = {},
  ...rest
}) {
  const isDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: 4,
      padding: 20,
      borderRadius: 18,
      background: isDark ? "var(--glass-bg-dark)" : "var(--glass-bg)",
      border: `1px solid ${isDark ? "var(--glass-border-dark)" : "var(--glass-border)"}`,
      boxShadow: isDark ? "var(--shadow-glass-dark)" : "var(--shadow-glass)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      overflow: "hidden",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6,
      color: "var(--av-blue-600)",
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: isDark ? "#fff" : "var(--av-navy-900)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: isDark ? "var(--av-slate-300)" : "var(--text-body)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: isDark ? "var(--av-slate-400)" : "var(--text-muted)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — track + fill with optional label and value. The fill uses the
 * electric-blue "liquid" gradient with a soft glow.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label = null,
  showValue = false,
  size = "md",
  tone = "light",
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const h = size === "sm" ? 6 : size === "lg" ? 14 : 10;
  const isDark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      fontWeight: 600
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: isDark ? "var(--av-slate-300)" : "var(--text-strong)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--av-blue-600)",
      fontFamily: "var(--font-mono)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 999,
      background: isDark ? "rgba(255,255,255,0.1)" : "var(--av-slate-200)",
      overflow: "hidden",
      boxShadow: "inset 0 1px 2px rgba(11,18,64,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 999,
      background: "linear-gradient(90deg, var(--av-blue-500), var(--av-blue-600))",
      boxShadow: "0 0 12px -2px rgba(10,91,255,0.7), inset 0 1px 0 rgba(255,255,255,0.4)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusPill — a glass capsule with a status dot and label, optionally with a
 * leading icon. The "Learning • Active" / "Remember. Connect. Grow." motif.
 */
function StatusPill({
  children,
  status = "active",
  icon = null,
  tone = "light",
  style = {},
  ...rest
}) {
  const colors = {
    active: "var(--av-success)",
    learning: "var(--av-blue-600)",
    paused: "var(--av-warning)",
    error: "var(--av-danger)",
    idle: "var(--av-slate-400)"
  };
  const dot = colors[status] || colors.active;
  const isDark = tone === "dark";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      borderRadius: 999,
      background: isDark ? "var(--glass-bg-dark)" : "var(--glass-bg-strong)",
      border: `1px solid ${isDark ? "var(--glass-border-dark)" : "var(--glass-border)"}`,
      boxShadow: isDark ? "var(--shadow-glass-dark)" : "var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.7)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: "nowrap",
      color: isDark ? "#fff" : "var(--text-strong)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--av-blue-600)"
    }
  }, icon) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: dot,
      boxShadow: `0 0 0 3px color-mix(in srgb, ${dot} 22%, transparent)`
    }
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — controlled/uncontrolled, with optional label. Blue when checked.
 */
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label = null,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const boxId = id || React.useId();
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const box = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    id: boxId,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: 6,
      border: `1.5px solid ${on ? "var(--av-blue-600)" : "var(--border-strong)"}`,
      background: on ? "var(--av-blue-600)" : "var(--surface)",
      boxShadow: on ? "0 2px 8px -2px rgba(10,91,255,0.5)" : "var(--shadow-xs)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, rest), on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.5L9.5 3.5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  if (!label) return box;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: boxId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, box, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon, and helper/error text.
 * Frosted-glass aware fill; electric-blue focus ring.
 */
function Input({
  label = null,
  placeholder = "",
  type = "text",
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  suffix = null,
  helper = null,
  error = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId();
  const invalid = !!error;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 14px",
      height: 46,
      borderRadius: 12,
      background: "var(--surface)",
      border: `1.5px solid ${invalid ? "var(--av-danger)" : focused ? "var(--av-blue-600)" : "var(--border)"}`,
      boxShadow: focused && !invalid ? "0 0 0 4px var(--ring)" : "var(--shadow-xs)",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.55 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-strong)",
      minWidth: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)",
      fontSize: 13
    }
  }, suffix)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: invalid ? "var(--av-danger)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — controlled or uncontrolled on/off toggle. Electric-blue when on.
 */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  label = null,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const switchId = id || React.useId();
  const dims = size === "sm" ? {
    w: 38,
    h: 22,
    k: 16
  } : {
    w: 48,
    h: 28,
    k: 22
  };
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const control = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    id: switchId,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: "relative",
      width: dims.w,
      height: dims.h,
      flex: "none",
      borderRadius: 999,
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      padding: 0,
      background: on ? "var(--av-blue-600)" : "var(--av-slate-300)",
      boxShadow: on ? "inset 0 1px 3px rgba(7,66,194,0.5), 0 2px 8px -2px rgba(10,91,255,0.5)" : "inset 0 1px 3px rgba(11,18,64,0.18)",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: 999,
      background: "#fff",
      boxShadow: "0 2px 6px rgba(11,18,64,0.3)",
      transition: "left var(--dur-base) var(--ease-spring)"
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — a glass segmented control. Controlled or uncontrolled.
 * items: [{ id, label, icon? }]
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  tone = "light",
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;
  const isDark = tone === "dark";
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: isDark ? "var(--glass-bg-dark)" : "var(--glass-bg-strong)",
      border: `1px solid ${isDark ? "var(--glass-border-dark)" : "var(--glass-border)"}`,
      boxShadow: "var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.6)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "9px 18px",
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 700,
        whiteSpace: "nowrap",
        color: on ? "#fff" : isDark ? "var(--av-slate-300)" : "var(--text-body)",
        background: on ? "var(--av-blue-600)" : "transparent",
        boxShadow: on ? "0 4px 14px -3px rgba(10,91,255,0.6)" : "none",
        transition: "background var(--dur-fast), color var(--dur-fast)"
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex"
      }
    }, it.icon), it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avanix-web/Courses.jsx
try { (() => {
// Avanix courses catalog screen.
function Courses({
  setRoute
}) {
  const {
    GlassCard,
    Badge,
    Button,
    Tabs,
    ProgressBar,
    Input
  } = window.AvanixDesignSystem_a5b4a8;
  const [filter, setFilter] = React.useState("all");
  const courses = [{
    t: "AI Automation Fundamentals",
    d: "Học tự động hoá và xây workflow thông minh với n8n + Claude.",
    lv: "Beginner",
    n: 12,
    cat: "auto",
    icon: /*#__PURE__*/React.createElement(IconGear, {
      size: 24
    }),
    prog: 64,
    tag: "Phổ biến"
  }, {
    t: "Xây Agent tự vận hành",
    d: "Thiết kế Agent đọc–nghĩ–hành động, kết nối công cụ thật.",
    lv: "Intermediate",
    n: 18,
    cat: "agent",
    icon: /*#__PURE__*/React.createElement(IconBot, {
      size: 24
    }),
    prog: 0
  }, {
    t: "Bộ não thứ hai với Claude",
    d: "Biến ghi chú & dữ liệu hỗn loạn thành hệ thống tri thức.",
    lv: "Beginner",
    n: 10,
    cat: "data",
    icon: /*#__PURE__*/React.createElement(IconLink, {
      size: 24
    }),
    prog: 30
  }, {
    t: "Hệ thu nhập số",
    d: "Đóng gói kỹ năng AI thành sản phẩm và dòng tiền.",
    lv: "Advanced",
    n: 15,
    cat: "income",
    icon: /*#__PURE__*/React.createElement(IconChart, {
      size: 24
    }),
    prog: 0,
    tag: "Mới"
  }, {
    t: "Prompt như một kỹ sư",
    d: "Khung tư duy ra prompt, đánh giá và lặp có hệ thống.",
    lv: "Beginner",
    n: 8,
    cat: "agent",
    icon: /*#__PURE__*/React.createElement(IconSpark, {
      size: 24
    }),
    prog: 0
  }, {
    t: "Debug khi hệ thống gãy",
    d: "Bài học thực tế khi triển khai cho doanh nghiệp.",
    lv: "Advanced",
    n: 14,
    cat: "auto",
    icon: /*#__PURE__*/React.createElement(IconShield, {
      size: 24
    }),
    prog: 0
  }];
  const tabs = [{
    id: "all",
    label: "Tất cả"
  }, {
    id: "auto",
    label: "Tự động hoá"
  }, {
    id: "agent",
    label: "Agent"
  }, {
    id: "data",
    label: "Dữ liệu"
  }, {
    id: "income",
    label: "Thu nhập"
  }];
  const shown = filter === "all" ? courses : courses.filter(c => c.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page-grad)",
      minHeight: "100%",
      padding: "clamp(32px,5vw,56px) clamp(16px,4vw,40px) 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "av-eyebrow"
  }, "Kho\xE1 h\u1ECDc"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(2rem,4vw,3rem)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      color: "var(--av-navy)",
      margin: "8px 0 0"
    }
  }, "H\u1ECDc \u0111\u1EC3 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--av-blue-600)"
    }
  }, "l\xE0m \u0111\u01B0\u1EE3c"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    items: tabs
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "T\xECm kho\xE1 h\u1ECDc\u2026",
    iconLeft: /*#__PURE__*/React.createElement(IconSearch, {
      size: 16
    }),
    style: {
      minWidth: 240
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
      gap: 20
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(GlassCard, {
    key: c.t,
    padding: 0,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(80% 120% at 30% 0%, #1b2570, #0B1240)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      width: 120,
      height: 120,
      borderRadius: 999,
      background: "radial-gradient(closest-side, rgba(46,114,255,0.5), transparent)",
      left: -20,
      bottom: -40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      opacity: 0.95,
      transform: "scale(2)"
    }
  }, c.icon), c.tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid",
    color: "blue"
  }, c.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "neutral"
  }, c.lv), /*#__PURE__*/React.createElement(Badge, {
    color: "blue",
    variant: "soft"
  }, c.n, " b\xE0i")), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 18,
      margin: "0 0 6px",
      color: "var(--av-navy)"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: "0 0 16px",
      color: "var(--text-body)",
      lineHeight: 1.5,
      flex: 1
    }
  }, c.d), c.prog > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.prog,
    showValue: true,
    size: "sm"
  })) : null, /*#__PURE__*/React.createElement(Button, {
    variant: c.prog > 0 ? "primary" : "secondary",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 16
    })
  }, c.prog > 0 ? "Tiếp tục học" : "Bắt đầu")))))));
}
window.Courses = Courses;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avanix-web/Courses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avanix-web/Dashboard.jsx
try { (() => {
// Avanix community dashboard screen.
function Dashboard({
  setRoute
}) {
  const {
    GlassCard,
    Badge,
    Button,
    Avatar,
    Stat,
    StatusPill,
    ProgressBar
  } = window.AvanixDesignSystem_a5b4a8;
  const feed = [{
    u: "Nguyên Pie",
    v: true,
    t: "5 phút trước",
    b: "Vừa drop template n8n + Claude tự phân loại email → Notion. Ae copy về chạy thử nha 👇",
    likes: 142,
    cmt: 28,
    tag: "Template"
  }, {
    u: "Minh Trần",
    v: false,
    t: "1 giờ trước",
    b: "Hệ thống Agent bị gãy ở bước gọi tool, ai từng gặp lỗi rate-limit chưa?",
    likes: 31,
    cmt: 12,
    tag: "Hỏi đáp"
  }, {
    u: "Linh Hoàng",
    v: false,
    t: "3 giờ trước",
    b: "Hoàn thành AI Automation Fundamentals 🎉 Tuần này tiết kiệm ~6 giờ nhập liệu thủ công.",
    likes: 88,
    cmt: 9,
    tag: "Khoe kết quả"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page-grad)",
      minHeight: "100%",
      padding: "clamp(28px,4vw,48px) clamp(16px,4vw,40px) 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 28,
      alignItems: "start"
    },
    className: "av-dash-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(1.7rem,3vw,2.3rem)",
      fontWeight: 800,
      letterSpacing: "-0.025em",
      color: "var(--av-navy)",
      margin: 0
    }
  }, "Ch\xE0o, Linh \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      color: "var(--text-body)",
      fontSize: 16
    }
  }, "H\xF4m nay c\u1ED9ng \u0111\u1ED3ng c\xF3 g\xEC m\u1EDBi.")), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 16,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Linh Ho\xE0ng",
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "11px 16px",
      borderRadius: 12,
      background: "var(--surface)",
      border: "1px solid var(--border)",
      color: "var(--text-muted)",
      fontSize: 15
    }
  }, "Chia s\u1EBB workflow ho\u1EB7c \u0111\u1EB7t c\xE2u h\u1ECFi\u2026"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(IconSpark, {
      size: 15
    })
  }, "\u0110\u0103ng")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, feed.map((p, i) => /*#__PURE__*/React.createElement(GlassCard, {
    key: i,
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.u,
    verified: p.v,
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--av-navy)"
    }
  }, p.u), /*#__PURE__*/React.createElement(Badge, {
    color: "blue",
    variant: "soft"
  }, p.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, p.t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-strong)"
    }
  }, p.b), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      color: "var(--text-muted)",
      fontSize: 14,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconHeart, {
    size: 17
  }), " ", p.likes), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconBook, {
    size: 17
  }), " ", p.cmt)))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      position: "sticky",
      top: 90
    },
    className: "av-dash-side"
  }, /*#__PURE__*/React.createElement(GlassCard, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/app-icon-navy.png`,
    alt: "",
    style: {
      width: 40,
      borderRadius: 11
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      color: "var(--av-navy)",
      fontFamily: "var(--font-display)"
    }
  }, "Avanix AI"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "C\u1ED9ng \u0111\u1ED3ng \xB7 $5/th\xE1ng"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2,271",
    label: "Th\xE0nh vi\xEAn"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "412",
    label: "Online"
  }))), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 20
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 4px",
      fontSize: 16,
      color: "var(--av-navy)"
    }
  }, "L\u1ED9 tr\xECnh c\u1EE7a b\u1EA1n"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "AI Automation Fundamentals"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 64,
    showValue: true,
    label: "Ti\u1EBFn \u0111\u1ED9"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    size: "sm",
    style: {
      marginTop: 16
    },
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 15
    }),
    onClick: () => setRoute("courses")
  }, "Ti\u1EBFp t\u1EE5c h\u1ECDc")), /*#__PURE__*/React.createElement(GlassCard, {
    padding: 20
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 12px",
      fontSize: 16,
      color: "var(--av-navy)"
    }
  }, "C\u1ED9ng s\u1EF1 online"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ["Nguyên Pie", "Minh Trần", "Đức AI"].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: 32,
    verified: i === 0
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--av-navy)",
      flex: 1
    }
  }, n), /*#__PURE__*/React.createElement(StatusPill, {
    status: "active",
    style: {
      padding: "4px 10px",
      fontSize: 11
    }
  }, "online"))))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avanix-web/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avanix-web/Landing.jsx
try { (() => {
// Avanix landing / hero screen.
function Landing({
  setRoute
}) {
  const {
    Button,
    GlassCard,
    Stat,
    StatusPill,
    Badge
  } = window.AvanixDesignSystem_a5b4a8;
  const Dot = ({
    x,
    y,
    s = 4,
    o = 0.5
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: s,
      height: s,
      borderRadius: 999,
      background: "var(--av-blue-300)",
      opacity: o,
      boxShadow: "0 0 8px var(--av-blue-400)"
    }
  });
  const pillars = [{
    n: 1,
    icon: /*#__PURE__*/React.createElement(IconCap, {
      size: 26
    }),
    t: "Kỹ năng thực chiến",
    d: "Học AI qua quy trình thật, không chỉ lý thuyết."
  }, {
    n: 2,
    icon: /*#__PURE__*/React.createElement(IconBot, {
      size: 26
    }),
    t: "Agent tự vận hành",
    d: "Xây hệ thống Agent đọc, nghĩ và hành động."
  }, {
    n: 3,
    icon: /*#__PURE__*/React.createElement(IconLink, {
      size: 26
    }),
    t: "Dữ liệu thành tài sản",
    d: "Biến ghi chú & dữ liệu hỗn loạn thành hệ thống."
  }, {
    n: 4,
    icon: /*#__PURE__*/React.createElement(IconChart, {
      size: 26
    }),
    t: "Hệ thu nhập số",
    d: "Tự động hoá để tiết kiệm thời gian, tạo kết quả."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "radial-gradient(80% 90% at 70% -10%, #16236e 0%, #0B1240 45%, #06091F 100%)",
      padding: "clamp(48px,7vw,96px) clamp(16px,4vw,40px) clamp(60px,8vw,110px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    x: "12%",
    y: "20%",
    s: 5
  }), /*#__PURE__*/React.createElement(Dot, {
    x: "22%",
    y: "60%",
    o: 0.3
  }), /*#__PURE__*/React.createElement(Dot, {
    x: "8%",
    y: "78%",
    s: 6
  }), /*#__PURE__*/React.createElement(Dot, {
    x: "80%",
    y: "14%",
    o: 0.4
  }), /*#__PURE__*/React.createElement(Dot, {
    x: "90%",
    y: "50%",
    s: 5
  }), /*#__PURE__*/React.createElement(Dot, {
    x: "68%",
    y: "80%",
    o: 0.3
  }), /*#__PURE__*/React.createElement(Dot, {
    x: "48%",
    y: "10%",
    s: 3,
    o: 0.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 40,
      alignItems: "center"
    },
    className: "av-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusPill, {
    status: "learning",
    tone: "dark",
    style: {
      marginBottom: 22
    }
  }, "C\u1ED9ng \u0111\u1ED3ng AI \xB7 2,271 th\xE0nh vi\xEAn"), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "relative",
      zIndex: 1,
      fontSize: "clamp(2.6rem,5.2vw,4.2rem)",
      fontWeight: 800,
      lineHeight: 1.12,
      letterSpacing: "-0.03em",
      color: "#fff",
      margin: "0 0 18px"
    }
  }, "AI th\u1EF1c chi\u1EBFn,", /*#__PURE__*/React.createElement("br", null), "ra ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--av-blue-400)"
    }
  }, "k\u1EBFt qu\u1EA3 th\u1EADt.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: "var(--av-slate-300)",
      maxWidth: 480,
      margin: "0 0 30px"
    }
  }, "L\xE0m ch\u1EE7 t\u01B0 duy thi\u1EBFt k\u1EBF h\u1EC7 th\u1ED1ng, x\xE2y Agent t\u1EF1 v\u1EADn h\xE0nh, v\xE0 bi\u1EBFn d\u1EEF li\u1EC7u h\u1ED7n lo\u1EA1n th\xE0nh t\xE0i s\u1EA3n \u2014 c\xF9ng Avanix."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => setRoute("courses")
  }, "B\u1EAFt tay v\xE0o vi\u1EC7c"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(IconPlay, {
      size: 16
    })
  }, "Xem demo"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "relative",
      width: "min(460px,94%)",
      aspectRatio: "1 / 1",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: "8%",
      transform: "translateX(-50%)",
      width: "76%",
      height: 70,
      borderRadius: "50%",
      background: "radial-gradient(closest-side, rgba(46,114,255,0.55), transparent)",
      filter: "blur(10px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "15% 11% 19% 13%",
      borderRadius: 32,
      background: "linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))",
      border: "1px solid rgba(255,255,255,0.22)",
      boxShadow: "0 34px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.45)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      transform: "rotate(-7deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "44%",
      transform: "translate(-50%,-50%)",
      width: 150,
      height: 150,
      borderRadius: "50%",
      background: "radial-gradient(circle at 34% 28%, #ffffff 0%, #93B4FF 36%, #0A5BFF 76%, #0742C2 100%)",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 24px 56px -10px rgba(10,91,255,0.85), inset 0 -12px 26px rgba(7,66,194,0.6), inset 7px 9px 20px rgba(255,255,255,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/mark-white.png`,
    alt: "",
    style: {
      width: "46%",
      filter: "drop-shadow(0 3px 8px rgba(7,66,194,0.5))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "4%",
      top: "20%",
      width: 92,
      padding: 12,
      borderRadius: 18,
      background: "rgba(255,255,255,0.14)",
      border: "1px solid rgba(255,255,255,0.28)",
      boxShadow: "0 18px 40px -14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.5)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "radial-gradient(circle at 34% 30%, #fff, #5C90FF 55%, #0A5BFF)",
      boxShadow: "0 4px 10px -2px rgba(10,91,255,0.7)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 999,
      background: "rgba(255,255,255,0.4)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "3%",
      top: "42%",
      width: 104,
      padding: 12,
      borderRadius: 18,
      background: "rgba(255,255,255,0.14)",
      border: "1px solid rgba(255,255,255,0.28)",
      boxShadow: "0 18px 40px -14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.5)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 6,
      width: "70%",
      borderRadius: 999,
      background: "rgba(255,255,255,0.55)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 6,
      width: "100%",
      borderRadius: 999,
      background: "rgba(255,255,255,0.3)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 6,
      width: "45%",
      borderRadius: 999,
      background: "rgba(46,114,255,0.8)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "16%",
      bottom: "16%",
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: "radial-gradient(circle at 34% 30%, #fff, #C5D6FF 45%, #2E3CB0)",
      boxShadow: "0 8px 18px -4px rgba(11,18,64,0.7)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "18%",
      bottom: "12%",
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "radial-gradient(circle at 34% 30%, #fff, #5C90FF 55%, #0A5BFF)"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "radial-gradient(70% 80% at 50% 0%, rgba(10,91,255,0.1), transparent 55%), var(--bg-page-grad)",
      padding: "clamp(48px,7vw,90px) clamp(16px,4vw,40px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      textAlign: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "av-eyebrow"
  }, "B\u1EA1n \u0111ang x\xE2y d\u1EF1ng g\xEC"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(1.9rem,3.6vw,2.8rem)",
      fontWeight: 800,
      letterSpacing: "-0.025em",
      color: "var(--av-navy)",
      margin: "10px 0 0"
    }
  }, "B\u1ED1n m\u1EA3nh gh\xE9p, m\u1ED9t h\u1EC7 th\u1ED1ng.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    },
    className: "av-pillars"
  }, pillars.map(p => /*#__PURE__*/React.createElement(GlassCard, {
    key: p.n,
    padding: 24,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "av-step",
    style: {
      flex: "none"
    }
  }, p.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--av-blue-600)",
      marginBottom: 8
    }
  }, p.icon), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 18,
      margin: "0 0 4px",
      color: "var(--av-navy)"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: 0,
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, p.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "40px auto 0",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    },
    className: "av-stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2,271",
    label: "Th\xE0nh vi\xEAn",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "33",
    label: "B\xE0i h\u1ECDc",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "C\u1ED9ng s\u1EF1",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$5",
    label: "/ th\xE1ng",
    align: "center"
  }))));
}
window.Landing = Landing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avanix-web/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avanix-web/Nav.jsx
try { (() => {
// Avanix top navigation bar — glass, used across screens.
function Nav({
  route,
  setRoute,
  tone = "dark"
}) {
  const {
    Button
  } = window.AvanixDesignSystem_a5b4a8;
  const dark = tone === "dark";
  const items = [{
    id: "landing",
    label: "Trang chủ"
  }, {
    id: "courses",
    label: "Khoá học"
  }, {
    id: "dashboard",
    label: "Cộng đồng"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px clamp(16px,4vw,40px)",
      background: dark ? "rgba(11,18,64,0.55)" : "rgba(255,255,255,0.6)",
      borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
      backdropFilter: "blur(16px) saturate(1.4)",
      WebkitBackdropFilter: "blur(16px) saturate(1.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo/${dark ? "lockup-white" : "lockup-navy"}.png`,
    alt: "Avanix",
    style: {
      height: 30,
      cursor: "pointer"
    },
    onClick: () => setRoute("landing")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 6
    },
    className: "av-navlinks"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => setRoute(it.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 600,
      padding: "8px 12px",
      borderRadius: 10,
      color: route === it.id ? dark ? "#fff" : "var(--av-navy)" : dark ? "var(--av-slate-300)" : "var(--text-body)",
      background: route === it.id ? dark ? "rgba(255,255,255,0.1)" : "var(--av-blue-50)" : "transparent"
    }
  }, it.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: dark ? "ghost" : "ghost",
    size: "sm",
    style: dark ? {
      color: "var(--av-slate-300)"
    } : {}
  }, "\u0110\u0103ng nh\u1EADp"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    pill: true,
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 16
    })
  }, "Tham gia")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avanix-web/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avanix-web/shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Avanix UI kit — shared icons (Lucide-style, 2px stroke) + helpers.
// Exported to window for use across the babel script files.

const Icon = ({
  d,
  size = 20,
  fill = "none",
  stroke = "currentColor",
  sw = 2,
  children,
  vb = "0 0 24 24"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: vb,
  fill: fill,
  stroke: stroke,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children || /*#__PURE__*/React.createElement("path", {
  d: d
}));
const IconPlay = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 4l14 8-14 8z"
}));
const IconArrow = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13 6 6 6-6 6"
}));
const IconCap = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M22 10 12 5 2 10l10 5 10-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"
}));
const IconGear = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
}));
const IconBot = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "8",
  width: "16",
  height: "12",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 8V4M8 2h8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "14",
  r: "1.2",
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "14",
  r: "1.2",
  fill: "currentColor",
  stroke: "none"
}));
const IconChart = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 20V10M10 20V4M16 20v-7M22 20H2"
}));
const IconBolt = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M13 2 3 14h7l-1 8 10-12h-7z"
}));
const IconShield = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"
}));
const IconLink = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 15l6-6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 6l1-1a4 4 0 0 1 6 6l-1 1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 18l-1 1a4 4 0 0 1-6-6l1-1"
}));
const IconBook = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 5v14"
}));
const IconCheck = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m4 12 5 5L20 6"
}));
const IconUsers = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "3.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 5.5a3.5 3.5 0 0 1 0 6.9M21 20c0-2.6-1.6-4.8-4-5.6"
}));
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const IconHeart = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 21C5 16 3 12 3 8.5 3 6 5 4 7.5 4 9.4 4 11 5 12 6.5 13 5 14.6 4 16.5 4 19 4 21 6 21 8.5 21 12 19 16 12 21z"
}));
const IconSpark = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"
}));
const IconClock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v5l3 2"
}));
const IconMenu = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));

// avatar/logo paths relative to ui_kits/avanix-web/index.html
const ASSET = "../../assets";
Object.assign(window, {
  Icon,
  IconPlay,
  IconArrow,
  IconCap,
  IconGear,
  IconBot,
  IconChart,
  IconBolt,
  IconShield,
  IconLink,
  IconBook,
  IconCheck,
  IconUsers,
  IconSearch,
  IconHeart,
  IconSpark,
  IconClock,
  IconMenu,
  ASSET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avanix-web/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
