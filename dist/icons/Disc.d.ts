import { type IconProps, type IconStyle } from "../Icon.js";
export interface DiscProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Disc: import("react").ForwardRefExoticComponent<Omit<DiscProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Disc.d.ts.map