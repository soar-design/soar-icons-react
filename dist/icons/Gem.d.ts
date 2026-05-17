import { type IconProps, type IconStyle } from "../Icon.js";
export interface GemProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Gem: import("react").ForwardRefExoticComponent<Omit<GemProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Gem.d.ts.map