import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Omit to render initials. */
  src?: string | null;
  /** Used for initials fallback and alt text. */
  name?: string;
  /** Diameter in px. @default 44 */
  size?: number;
  /** Electric-blue ring around the avatar. @default false */
  ring?: boolean;
  /** Show verified check badge. @default false */
  verified?: boolean;
}

/**
 * Circular avatar with initials fallback, optional blue ring and verified badge.
 */
export function Avatar(props: AvatarProps): JSX.Element;
