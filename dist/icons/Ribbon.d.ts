import { type IconProps, type IconStyle } from "../Icon.js";
export interface RibbonProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Ribbon: import("react").ForwardRefExoticComponent<Omit<RibbonProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Ribbon.d.ts.map