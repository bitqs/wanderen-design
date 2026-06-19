import * as React from "react";

/**
 * Arcade toggle switch — a hard pixel knob that snaps across and glows
 * cyan when on. Controlled or uncontrolled.
 */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Controlled on/off. */
  checked?: boolean;
  /** Uncontrolled initial state. */
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Inline label to the right. */
  label?: string;
  disabled?: boolean;
}

export declare function Switch(props: SwitchProps): JSX.Element;
