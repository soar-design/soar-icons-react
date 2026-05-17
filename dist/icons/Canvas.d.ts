import { type IconProps, type IconStyle } from "../Icon.js";
export interface CanvasProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Canvas: import("react").ForwardRefExoticComponent<Omit<CanvasProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Canvas.d.ts.map