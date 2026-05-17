import { type IconProps, type IconStyle } from "../Icon.js";
export interface GameProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Game: import("react").ForwardRefExoticComponent<Omit<GameProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Game.d.ts.map