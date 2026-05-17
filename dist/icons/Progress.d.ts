import { type IconProps, type IconStyle } from "../Icon.js";
export interface ProgressProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Progress: import("react").ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Progress.d.ts.map