import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChampionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Champion: import("react").ForwardRefExoticComponent<Omit<ChampionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Champion.d.ts.map