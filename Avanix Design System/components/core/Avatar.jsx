import React from "react";

/**
 * Avatar — circular user/brand image with optional verified badge and ring.
 * Falls back to initials when no src is given.
 */
export function Avatar({
  src = null,
  name = "",
  size = 44,
  ring = false,
  verified = false,
  style = {},
  ...rest
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span style={{ position: "relative", display: "inline-flex", ...style }} {...rest}>
      <span
        style={{
          width: size,
          height: size,
          borderRadius: "999px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: src ? "var(--av-slate-150)" : "linear-gradient(150deg, var(--av-blue-500), var(--av-navy-600))",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: size * 0.38,
          boxShadow: ring
            ? "0 0 0 3px var(--bg-page), 0 0 0 5px var(--av-blue-600)"
            : "var(--shadow-xs)",
        }}
      >
        {src ? (
          <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          initials || "A"
        )}
      </span>
      {verified && (
        <span
          style={{
            position: "absolute",
            right: -2,
            bottom: -2,
            width: size * 0.34,
            height: size * 0.34,
            minWidth: 14,
            minHeight: 14,
            borderRadius: "999px",
            background: "var(--av-blue-600)",
            border: "2px solid var(--bg-page)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: size * 0.2,
            fontWeight: 800,
          }}
        >
          ✓
        </span>
      )}
    </span>
  );
}
