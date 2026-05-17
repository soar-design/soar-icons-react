import { type IconProps, type IconStyle } from "../Icon.js";
export interface BadgeInfoProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const BadgeInfo: import("react").ForwardRefExoticComponent<Omit<BadgeInfoProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=BadgeInfo.d.ts.map