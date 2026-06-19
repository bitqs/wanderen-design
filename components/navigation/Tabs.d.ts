import * as React from "react";

export interface TabItem {
  /** Unique value emitted by onChange. */
  value: string;
  /** Visible label. */
  label: string;
  /** Optional Pixelarticons icon name. */
  icon?: string;
  /** Optional trailing count (e.g. unread / result count). */
  count?: number;
}

/**
 * Underlined tab bar — the active tab glows cyan. Controlled: pass `value`
 * and handle `onChange`. Used for content filters and section nav.
 */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  /** Active tab value. Defaults to the first item. */
  value?: string;
  onChange?: (value: string) => void;
}

export declare function Tabs(props: TabsProps): JSX.Element;
