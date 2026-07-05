import * as React from "react";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Checkbox with a hand-drawn check. Electric blue when checked; optional label.
 */
export function Checkbox(props: CheckboxProps): JSX.Element;
