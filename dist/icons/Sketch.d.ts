import { type IconProps, type IconStyle } from "../Icon.js";
export interface SketchProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Sketch: import("react").ForwardRefExoticComponent<Omit<SketchProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Sketch.d.ts.map