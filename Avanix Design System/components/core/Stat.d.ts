import * as React from "react";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big metric, e.g. "1,424" or "12h". */
  value: React.ReactNode;
  /** Short label under the value. */
  label: React.ReactNode;
  /** Optional secondary line. */
  sublabel?: React.ReactNode;
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /** @default "light" */
  tone?: "light" | "dark";
  /** @default "left" */
  align?: "left" | "center";
}

/**
 * Headline metric in a glass tile — members, lessons, hours automated, etc.
 */
export function Stat(props: StatProps): JSX.Element;
