import * as React from "react";

/**
 * Square, icon-only button (Pixelarticons). Used in toolbars, headers,
 * and beside inputs. Always provide `label` for accessibility.
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /** Pixelarticons icon name (kebab-case), e.g. "search". */
  icon: string;
  /** Accessible label — also used as the tooltip. */
  label: string;
  /** @default "default" */
  variant?: "default" | "solid" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
