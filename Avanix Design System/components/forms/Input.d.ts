import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: React.ReactNode;
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  /** Trailing adornment (unit, button). */
  suffix?: React.ReactNode;
  /** Helper text below the field. */
  helper?: React.ReactNode;
  /** Error message — turns the field red and overrides helper. */
  error?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Text input with label, optional leading icon / suffix, helper & error states,
 * and the electric-blue focus ring.
 *
 * @startingPoint section="Forms" subtitle="Text field with label, icon, states" viewport="700x150"
 */
export function Input(props: InputProps): JSX.Element;
