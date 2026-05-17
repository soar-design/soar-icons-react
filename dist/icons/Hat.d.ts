import { type IconProps, type IconStyle } from "../Icon.js";
export interface HatProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Hat: import("react").ForwardRefExoticComponent<Omit<HatProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Hat.d.ts.map