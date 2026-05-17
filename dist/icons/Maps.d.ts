import { type IconProps, type IconStyle } from "../Icon.js";
export interface MapsProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Maps: import("react").ForwardRefExoticComponent<Omit<MapsProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Maps.d.ts.map