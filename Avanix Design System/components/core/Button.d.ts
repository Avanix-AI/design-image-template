import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "outline" | "dark";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Fully rounded pill shape. @default false */
  pill?: boolean;
  /** Stretch to container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. an icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary action button for Avanix. Electric-blue primary, frosted glass
 * secondary, quiet ghost/outline, and a navy "dark" variant for hero CTAs.
 *
 * @startingPoint section="Core" subtitle="Buttons — primary, glass, ghost, navy" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
