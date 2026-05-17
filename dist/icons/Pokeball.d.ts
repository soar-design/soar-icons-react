import { type IconProps, type IconStyle } from "../Icon.js";
export interface PokeballProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Pokeball: import("react").ForwardRefExoticComponent<Omit<PokeballProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Pokeball.d.ts.map