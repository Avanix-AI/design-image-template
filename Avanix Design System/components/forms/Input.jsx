import React from "react";

/**
 * Input — text field with optional label, leading icon, and helper/error text.
 * Frosted-glass aware fill; electric-blue focus ring.
 */
export function Input({
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 13, fontWeight: 600, color: "var(--text-strong)" }}>
          {label}
        </label>
      )}
      <div
        style={{
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
          opacity: disabled ? 0.55 : 1,
        }}
      >
        {iconLeft && <span style={{ display: "flex", color: "var(--text-muted)" }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-strong)",
            minWidth: 0,
          }}
          {...rest}
        />
        {suffix && <span style={{ display: "flex", color: "var(--text-muted)", fontSize: 13 }}>{suffix}</span>}
      </div>
      {(helper || error) && (
        <span style={{ fontSize: 12, color: invalid ? "var(--av-danger)" : "var(--text-muted)" }}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
