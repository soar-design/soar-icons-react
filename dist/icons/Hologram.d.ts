import { type IconProps, type IconStyle } from "../Icon.js";
export interface HologramProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Hologram: import("react").ForwardRefExoticComponent<Omit<HologramProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Hologram.d.ts.map