import { type IconProps, type IconStyle } from "../Icon.js";
export interface SquareProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Square: import("react").ForwardRefExoticComponent<Omit<SquareProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Square.d.ts.map