import { type IconProps, type IconStyle } from "../Icon.js";
export interface EvilProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Evil: import("react").ForwardRefExoticComponent<Omit<EvilProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Evil.d.ts.map