import React from "react";

/**
 * Checkbox — controlled/uncontrolled, with optional label. Blue when checked.
 */
export function Checkbox({
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

  const box = (
    <button
      type="button"
      role="checkbox"
      aria-checked={on}
      id={boxId}
      onClick={toggle}
      disabled={disabled}
      style={{
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
        transition: "background var(--dur-fast), border-color var(--dur-fast)",
      }}
      {...rest}
    >
      {on && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6.2L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );

  if (!label) return box;
  return (
    <label htmlFor={boxId} style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      {box}
      <span style={{ fontSize: 14, color: "var(--text-strong)" }}>{label}</span>
    </label>
  );
}
