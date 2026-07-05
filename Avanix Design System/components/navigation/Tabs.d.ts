import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  /** Controlled active id. */
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** @default "light" */
  tone?: "light" | "dark";
}

/**
 * Glass segmented control / tab switcher. Active tab is electric blue.
 */
export function Tabs(props: TabsProps): JSX.Element;
