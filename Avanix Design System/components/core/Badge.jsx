import React from "react";

/**
 * Badge — small status / category label. Solid, soft (tinted), or glass.
 */
export function Badge({
  children,
  color = "blue",
  variant = "soft",
  dot = false,
  style = {},
  ...rest
}) {
  const palette = {
    blue:    { solid: "var(--av-blue-600)", soft: "var(--av-blue-100)", fg: "var(--av-blue-700)" },
    navy:    { solid: "var(--av-navy-900)", soft: "var(--av-slate-150)", fg: "var(--av-navy-900)" },
    success: { solid: "var(--av-success)",  soft: "var(--av-success-bg)", fg: "#0E8C54" },
    warning: { solid: "var(--av-warning)",  soft: "var(--av-warning-bg)", fg: "#B36A00" },
    danger:  { solid: "var(--av-danger)",   soft: "var(--av-danger-bg)", fg: "#C5362C" },
    neutral: { solid: "var(--av-slate-600)", soft: "var(--av-slate-150)", fg: "var(--av-slate-700)" },
  };
  const p = palette[color] || palette.blue;

  const variants = {
    solid: { background: p.solid, color: "#fff" },
    soft:  { background: p.soft, color: p.fg },
    glass: {
      background: "var(--glass-bg-strong)",
      color: p.fg,
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
  };

  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "999px", background: variant === "solid" ? "#fff" : p.solid }} />
      )}
      {children}
    </span>
  );
}
