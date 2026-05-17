import { type IconProps, type IconStyle } from "../Icon.js";
export interface RainbowProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Rainbow: import("react").ForwardRefExoticComponent<Omit<RainbowProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Rainbow.d.ts.map