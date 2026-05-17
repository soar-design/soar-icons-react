import { type IconProps, type IconStyle } from "../Icon.js";
export interface StarProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Star: import("react").ForwardRefExoticComponent<Omit<StarProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Star.d.ts.map