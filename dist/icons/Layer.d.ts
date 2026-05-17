import { type IconProps, type IconStyle } from "../Icon.js";
export interface LayerProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Layer: import("react").ForwardRefExoticComponent<Omit<LayerProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Layer.d.ts.map