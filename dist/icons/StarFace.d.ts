import { type IconProps, type IconStyle } from "../Icon.js";
export interface StarFaceProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const StarFace: import("react").ForwardRefExoticComponent<Omit<StarFaceProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=StarFace.d.ts.map