import { type IconProps, type IconStyle } from "../Icon.js";
export interface BadgeProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Badge: import("react").ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Badge.d.ts.map