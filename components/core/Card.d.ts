import * as React from "react";

/**
 * Surface container — the base for article cards, panels, and tiles.
 * Hard corners and a 2px border do the work; fill is secondary.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** default (flat) · raised (pixel shadow) · glow (neon halo). @default "default" */
  variant?: "default" | "raised" | "glow";
  /** Inner padding. @default "md" */
  padding?: "none" | "sm" | "md" | "lg";
  /** Hover/press affordance (lifts a raised card into its shadow). @default false */
  interactive?: boolean;
  /** Render as another element, e.g. "a" or "article". @default "div" */
  as?: "div" | "a" | "article" | "section";
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
