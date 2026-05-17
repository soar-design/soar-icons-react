import { type IconProps, type IconStyle } from "../Icon.js";
export interface StampProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Stamp: import("react").ForwardRefExoticComponent<Omit<StampProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Stamp.d.ts.map