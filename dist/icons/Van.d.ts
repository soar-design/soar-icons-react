import { type IconProps, type IconStyle } from "../Icon.js";
export interface VanProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Van: import("react").ForwardRefExoticComponent<Omit<VanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Van.d.ts.map