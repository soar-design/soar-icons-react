import { type IconProps, type IconStyle } from "../Icon.js";
export interface SafeProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Safe: import("react").ForwardRefExoticComponent<Omit<SafeProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Safe.d.ts.map