import * as React from "react";

/**
 * Tiny uppercase pixel-font label — the "NEW QUEST" / "FIELD NOTE" chip.
 * Used for content categories, status flags, and "new" markers.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Neon hue. @default "cyan" */
  color?: "cyan" | "magenta" | "lime" | "amber" | "violet" | "red";
  /** Filled neon vs outlined-on-surface. @default "solid" */
  variant?: "solid" | "outline";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
