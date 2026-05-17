import { type IconProps, type IconStyle } from "../Icon.js";
export interface CProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const C: import("react").ForwardRefExoticComponent<Omit<CProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=C.d.ts.map