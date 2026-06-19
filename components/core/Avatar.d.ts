import * as React from "react";

/**
 * Pixel avatar — renders a (pixelated) image, or initials on a name-derived
 * neon tint when no image is given. Square by default to match the grid.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — drives initials and the fallback tint. */
  name?: string;
  /** @default "md" */
  size?: "xs" | "sm" | "md" | "lg";
  /** Hard square (default) or pill/round. @default "square" */
  shape?: "square" | "round";
  /** Neon focus ring + glow. @default false */
  ring?: boolean;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
