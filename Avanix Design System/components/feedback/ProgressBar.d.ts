import * as React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value. @default 0 */
  value?: number;
  /** Max value. @default 100 */
  max?: number;
  /** Label shown above the track. */
  label?: React.ReactNode;
  /** Show the percentage on the right. @default false */
  showValue?: boolean;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "light" */
  tone?: "light" | "dark";
}

/**
 * Horizontal progress bar with the electric-blue liquid fill + glow.
 * Course completion, automation runs, onboarding steps.
 */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
