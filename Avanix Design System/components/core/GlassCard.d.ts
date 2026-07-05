import * as React from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background context. Use "dark" on navy surfaces. @default "light" */
  tone?: "light" | "dark";
  /** More opaque fill for content-dense cards. @default false */
  strong?: boolean;
  /** Add the electric-blue halo glow. @default false */
  glow?: boolean;
  /** Inner padding in px. @default 24 */
  padding?: number;
  /** Corner radius in px. @default 20 */
  radius?: number;
  children?: React.ReactNode;
}

/**
 * The signature Avanix frosted-glass panel — translucent, blurred, with a
 * glossy diagonal highlight. The default container for almost everything.
 *
 * @startingPoint section="Core" subtitle="Frosted glass panel — the core surface" viewport="700x260"
 */
export function GlassCard(props: GlassCardProps): JSX.Element;
