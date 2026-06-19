import * as React from "react";

/**
 * Text input — pixel border, neon focus glow, optional leading icon,
 * pixel-font label and a hint/error line below.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Pixel-font label shown above the field. */
  label?: string;
  /** Pixelarticons icon name shown inside, before the text. */
  icon?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error text — turns the field red and overrides `hint`. */
  error?: string;
  disabled?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
