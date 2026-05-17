import { type IconProps, type IconStyle } from "../Icon.js";
export interface ShapesProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Shapes: import("react").ForwardRefExoticComponent<Omit<ShapesProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Shapes.d.ts.map