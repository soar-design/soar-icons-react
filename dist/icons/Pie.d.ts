import { type IconProps, type IconStyle } from "../Icon.js";
export interface PieProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Pie: import("react").ForwardRefExoticComponent<Omit<PieProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Pie.d.ts.map