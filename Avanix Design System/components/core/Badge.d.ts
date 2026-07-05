import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "blue" */
  color?: "blue" | "navy" | "success" | "warning" | "danger" | "neutral";
  /** @default "soft" */
  variant?: "solid" | "soft" | "glass";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Compact status / category label. Soft tinted by default; solid for emphasis,
 * glass for placement over imagery.
 */
export function Badge(props: BadgeProps): JSX.Element;
