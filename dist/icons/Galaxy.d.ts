import { type IconProps, type IconStyle } from "../Icon.js";
export interface GalaxyProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Galaxy: import("react").ForwardRefExoticComponent<Omit<GalaxyProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Galaxy.d.ts.map