import * as React from "react";

/**
 * Wanderen primary button. Uppercase body type on a hard pixel border;
 * pressing translates the button into its pixel shadow like an arcade key.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "accent" | "danger";
  /** Control height. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Pixelarticons icon name (kebab-case) rendered before the label. */
  icon?: string;
  /** Pixelarticons icon name rendered after the label. */
  iconRight?: string;
  /** Stretch to fill the container width. @default false */
  full?: boolean;
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: "button" | "a";
  disabled?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
