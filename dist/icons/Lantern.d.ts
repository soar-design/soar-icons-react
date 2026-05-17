import { type IconProps, type IconStyle } from "../Icon.js";
export interface LanternProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Lantern: import("react").ForwardRefExoticComponent<Omit<LanternProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Lantern.d.ts.map