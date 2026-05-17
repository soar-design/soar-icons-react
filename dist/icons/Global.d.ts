import { type IconProps, type IconStyle } from "../Icon.js";
export interface GlobalProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Global: import("react").ForwardRefExoticComponent<Omit<GlobalProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Global.d.ts.map