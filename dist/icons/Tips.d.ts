import { type IconProps, type IconStyle } from "../Icon.js";
export interface TipsProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Tips: import("react").ForwardRefExoticComponent<Omit<TipsProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Tips.d.ts.map