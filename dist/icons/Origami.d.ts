import { type IconProps, type IconStyle } from "../Icon.js";
export interface OrigamiProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Origami: import("react").ForwardRefExoticComponent<Omit<OrigamiProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Origami.d.ts.map