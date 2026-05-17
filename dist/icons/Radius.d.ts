import { type IconProps, type IconStyle } from "../Icon.js";
export interface RadiusProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Radius: import("react").ForwardRefExoticComponent<Omit<RadiusProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Radius.d.ts.map