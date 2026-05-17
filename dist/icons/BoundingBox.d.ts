import { type IconProps, type IconStyle } from "../Icon.js";
export interface BoundingBoxProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const BoundingBox: import("react").ForwardRefExoticComponent<Omit<BoundingBoxProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=BoundingBox.d.ts.map