import React from "react";

/**
 * StatusPill — a glass capsule with a status dot and label, optionally with a
 * leading icon. The "Learning • Active" / "Remember. Connect. Grow." motif.
 */
export function StatusPill({
  children,
  status = "active",
  icon = null,
  tone = "light",
  style = {},
  ...rest
}) {
  const colors = {
    active:  "var(--av-success)",
    learning:"var(--av-blue-600)",
    paused:  "var(--av-warning)",
    error:   "var(--av-danger)",
    idle:    "var(--av-slate-400)",
  };
  const dot = colors[status] || colors.active;
  const isDark = tone === "dark";

  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {icon ? (
        <span style={{ display: "flex", color: "var(--av-blue-600)" }}>{icon}</span>
      ) : (
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: dot,
            boxShadow: `0 0 0 3px color-mix(in srgb, ${dot} 22%, transparent)`,
          }}
        />
      )}
      {children}
    </span>
  );
}
