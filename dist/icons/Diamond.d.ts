import { type IconProps, type IconStyle } from "../Icon.js";
export interface DiamondProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Diamond: import("react").ForwardRefExoticComponent<Omit<DiamondProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Diamond.d.ts.map