import { type IconProps, type IconStyle } from "../Icon.js";
export interface FlaticonProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Flaticon: import("react").ForwardRefExoticComponent<Omit<FlaticonProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Flaticon.d.ts.map