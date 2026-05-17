import { type IconProps, type IconStyle } from "../Icon.js";
export interface PokemonProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Pokemon: import("react").ForwardRefExoticComponent<Omit<PokemonProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Pokemon.d.ts.map