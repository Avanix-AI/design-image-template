import React from "react";

/**
 * ProgressBar — track + fill with optional label and value. The fill uses the
 * electric-blue "liquid" gradient with a soft glow.
 */
export function ProgressBar({
  value = 0,
  max = 100,
  label = null,
  showValue = false,
  size = "md",
  tone = "light",
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const h = size === "sm" ? 6 : size === "lg" ? 14 : 10;
  const isDark = tone === "dark";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600 }}>
          {label && <span style={{ color: isDark ? "var(--av-slate-300)" : "var(--text-strong)" }}>{label}</span>}
          {showValue && <span style={{ color: "var(--av-blue-600)", fontFamily: "var(--font-mono)" }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div
        style={{
          height: h,
          borderRadius: 999,
          background: isDark ? "rgba(255,255,255,0.1)" : "var(--av-slate-200)",
          overflow: "hidden",
          boxShadow: "inset 0 1px 2px rgba(11,18,64,0.12)",
        }}
      >
        <div
          style={{
            width: pct + "%",
            height: "100%",
            borderRadius: 999,
            background: "linear-gradient(90deg, var(--av-blue-500), var(--av-blue-600))",
            boxShadow: "0 0 12px -2px rgba(10,91,255,0.7), inset 0 1px 0 rgba(255,255,255,0.4)",
            transition: "width var(--dur-slow) var(--ease-out)",
          }}
        />
      </div>
    </div>
  );
}
