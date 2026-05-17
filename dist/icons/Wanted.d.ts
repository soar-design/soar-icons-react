import { type IconProps, type IconStyle } from "../Icon.js";
export interface WantedProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Wanted: import("react").ForwardRefExoticComponent<Omit<WantedProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Wanted.d.ts.map