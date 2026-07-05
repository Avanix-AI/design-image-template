import React from "react";

/**
 * Stat — a headline metric with label, shown in a glass tile.
 * For community/course numbers (members, lessons, automation hours, etc.).
 */
export function Stat({
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
  return (
    <div
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <div style={{ marginBottom: 6, color: "var(--av-blue-600)", display: "flex" }}>{icon}</div>
      )}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 34,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: isDark ? "#fff" : "var(--av-navy-900)",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? "var(--av-slate-300)" : "var(--text-body)" }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ fontSize: 12, color: isDark ? "var(--av-slate-400)" : "var(--text-muted)" }}>{sublabel}</div>
      )}
    </div>
  );
}
