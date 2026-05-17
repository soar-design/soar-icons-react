import { type IconProps, type IconStyle } from "../Icon.js";
export interface MaskProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Mask: import("react").ForwardRefExoticComponent<Omit<MaskProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Mask.d.ts.map