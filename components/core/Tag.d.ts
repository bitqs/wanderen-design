import * as React from "react";

/**
 * Interactive category / filter chip — monospace, with an optional `#`
 * prefix and a removable ✕. Becomes a <button> when `onClick` is passed.
 */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Selected / filtering state. @default false */
  active?: boolean;
  /** Show a leading "#". @default false */
  hash?: boolean;
  /** When provided, renders a remove ✕ and calls this on click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** When provided, the whole chip is a clickable toggle. */
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
