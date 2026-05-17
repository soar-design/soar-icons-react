import { type IconProps, type IconStyle } from "../Icon.js";
export interface IslandProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Island: import("react").ForwardRefExoticComponent<Omit<IslandProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Island.d.ts.map