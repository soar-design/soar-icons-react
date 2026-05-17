import { type IconProps, type IconStyle } from "../Icon.js";
export interface ClipProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Clip: import("react").ForwardRefExoticComponent<Omit<ClipProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Clip.d.ts.map