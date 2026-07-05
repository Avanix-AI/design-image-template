import * as React from "react";

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status driving the dot color. @default "active" */
  status?: "active" | "learning" | "paused" | "error" | "idle";
  /** Replace the dot with a custom icon. */
  icon?: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "dark";
  children?: React.ReactNode;
}

/**
 * Glass capsule with a status dot (or icon) + label — for live/agent states
 * like "Learning", "Active", "Remember. Connect. Grow.".
 */
export function StatusPill(props: StatusPillProps): JSX.Element;
