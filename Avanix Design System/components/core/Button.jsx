import React from "react";

/**
 * Avanix Button — the primary action element.
 * Liquid-glass aware: solid electric-blue primary, frosted glass secondary,
 * quiet ghost, and a navy "on-dark" treatment for hero sections.
 */
export function Button({
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
    sm: { padding: "8px 14px", fontSize: "13px", gap: "6px", radius: 10 },
    md: { padding: "11px 20px", fontSize: "15px", gap: "8px", radius: 12 },
    lg: { padding: "15px 28px", fontSize: "16px", gap: "10px", radius: 14 },
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
    userSelect: "none",
  };

  const variants = {
    primary: {
      background: "var(--av-blue-600)",
      color: "#fff",
      boxShadow: "0 6px 18px -4px rgba(10,91,255,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
    },
    secondary: {
      background: "var(--glass-bg-strong)",
      color: "var(--text-strong)",
      border: "1px solid var(--glass-border)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.7)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      border: "1px solid transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--av-blue-600)",
      border: "1.5px solid var(--av-blue-600)",
    },
    dark: {
      background: "var(--av-navy-900)",
      color: "#fff",
      boxShadow: "0 8px 22px -6px rgba(11,18,64,0.5)",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
