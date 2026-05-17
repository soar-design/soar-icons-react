import { type IconProps, type IconStyle } from "../Icon.js";
export interface BrushProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Brush: import("react").ForwardRefExoticComponent<Omit<BrushProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Brush.d.ts.map