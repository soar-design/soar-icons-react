import { type IconProps, type IconStyle } from "../Icon.js";
export interface LandmarkProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Landmark: import("react").ForwardRefExoticComponent<Omit<LandmarkProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Landmark.d.ts.map