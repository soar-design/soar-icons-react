import { type IconProps, type IconStyle } from "../Icon.js";
export interface PiProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Pi: import("react").ForwardRefExoticComponent<Omit<PiProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Pi.d.ts.map