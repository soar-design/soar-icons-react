import { type IconProps, type IconStyle } from "../Icon.js";
export interface StatusProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Status: import("react").ForwardRefExoticComponent<Omit<StatusProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Status.d.ts.map