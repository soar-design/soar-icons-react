import { type IconProps, type IconStyle } from "../Icon.js";
export interface MonsterProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Monster: import("react").ForwardRefExoticComponent<Omit<MonsterProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Monster.d.ts.map