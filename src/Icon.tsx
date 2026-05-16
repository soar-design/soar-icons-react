import * as React from "react";

export type IconVariant = "line" | "solid" | "remix" | "duo" | "flat";

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "color"> {
  size?: number | string;
  color?: string;
  title?: string;
  viewBox?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { size = "1em", color, title, viewBox = "0 0 24 24", children, style, "aria-hidden": ariaHidden, ...rest },
  ref,
) {
  const labelled = Boolean(title);
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : ariaHidden ?? true}
      style={color ? { color, ...style } : style}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
});
