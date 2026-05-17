import { type IconProps, type IconStyle } from "../Icon.js";
export interface BackgroundProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Background: import("react").ForwardRefExoticComponent<Omit<BackgroundProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Background.d.ts.map