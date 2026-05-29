import { type IconProps, type IconStyle } from "../Icon.js";
export interface CabinProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Cabin: import("react").ForwardRefExoticComponent<Omit<CabinProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Cabin.d.ts.map