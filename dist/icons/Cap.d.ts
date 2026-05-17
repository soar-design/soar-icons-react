import { type IconProps, type IconStyle } from "../Icon.js";
export interface CapProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Cap: import("react").ForwardRefExoticComponent<Omit<CapProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Cap.d.ts.map