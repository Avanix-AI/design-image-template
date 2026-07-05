import React from "react";

/**
 * GlassCard — the signature Avanix surface. A frosted, translucent panel with
 * a diagonal sheen, white hairline border and soft navy-tinted shadow.
 * Works on both light and navy backgrounds (set tone="dark" on navy).
 */
export function GlassCard({
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
    background: strong
      ? (isDark ? "var(--glass-bg-strong)" : "var(--glass-bg-strong)")
      : (isDark ? "var(--glass-bg-dark)" : "var(--glass-bg)"),
    border: `1px solid ${isDark ? "var(--glass-border-dark)" : "var(--glass-border)"}`,
    boxShadow: isDark ? "var(--shadow-glass-dark)" : "var(--shadow-glass)",
    backdropFilter: "blur(var(--glass-blur)) saturate(1.4)",
    WebkitBackdropFilter: "blur(var(--glass-blur)) saturate(1.4)",
    overflow: "hidden",
    color: isDark ? "var(--text-strong)" : "var(--text-body)",
    ...(glow ? { boxShadow: (isDark ? "var(--shadow-glass-dark)" : "var(--shadow-glass)") + ", var(--glow-soft)" } : {}),
    ...style,
  };
  const sheen = {
    content: '""',
    position: "absolute",
    inset: 0,
    background: isDark
      ? "linear-gradient(160deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 65%)"
      : "linear-gradient(160deg, #FFFFFF 0%, rgba(255,255,255,0.35) 30%, rgba(255,255,255,0) 60%)",
    opacity: 0.9,
    pointerEvents: "none",
  };
  return (
    <div style={wrap} {...rest}>
      <div style={sheen} aria-hidden="true" />
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
