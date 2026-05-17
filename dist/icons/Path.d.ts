import { type IconProps, type IconStyle } from "../Icon.js";
export interface PathProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Path: import("react").ForwardRefExoticComponent<Omit<PathProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Path.d.ts.map