import React from "react";

/**
 * Tabs — a glass segmented control. Controlled or uncontrolled.
 * items: [{ id, label, icon? }]
 */
export function Tabs({
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

  const select = (id) => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };

  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        gap: 4,
        padding: 4,
        borderRadius: 999,
        background: isDark ? "var(--glass-bg-dark)" : "var(--glass-bg-strong)",
        border: `1px solid ${isDark ? "var(--glass-border-dark)" : "var(--glass-border)"}`,
        boxShadow: "var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.id === active;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={on}
            onClick={() => select(it.id)}
            style={{
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
              transition: "background var(--dur-fast), color var(--dur-fast)",
            }}
          >
            {it.icon && <span style={{ display: "flex" }}>{it.icon}</span>}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
