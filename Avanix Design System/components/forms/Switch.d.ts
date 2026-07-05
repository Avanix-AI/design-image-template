import * as React from "react";

export interface SwitchProps {
  /** Controlled on/off. Omit for uncontrolled. */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** @default "md" */
  size?: "sm" | "md";
  /** Optional trailing label. */
  label?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * On/off toggle switch. Electric blue when on, springy knob motion.
 */
export function Switch(props: SwitchProps): JSX.Element;
