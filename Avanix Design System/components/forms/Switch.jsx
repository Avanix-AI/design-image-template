import React from "react";

/**
 * Switch — controlled or uncontrolled on/off toggle. Electric-blue when on.
 */
export function Switch({
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

  const dims = size === "sm" ? { w: 38, h: 22, k: 16 } : { w: 48, h: 28, k: 22 };

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };

  const control = (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      id={switchId}
      onClick={toggle}
      disabled={disabled}
      style={{
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
        transition: "background var(--dur-base) var(--ease-out)",
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          top: (dims.h - dims.k) / 2,
          left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
          width: dims.k,
          height: dims.k,
          borderRadius: 999,
          background: "#fff",
          boxShadow: "0 2px 6px rgba(11,18,64,0.3)",
          transition: "left var(--dur-base) var(--ease-spring)",
        }}
      />
    </button>
  );

  if (!label) return control;
  return (
    <label htmlFor={switchId} style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      {control}
      <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-strong)" }}>{label}</span>
    </label>
  );
}
