import { type IconProps, type IconStyle } from "../Icon.js";
export interface RectangularProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Rectangular: import("react").ForwardRefExoticComponent<Omit<RectangularProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Rectangular.d.ts.map