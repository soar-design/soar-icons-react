import { type IconProps, type IconStyle } from "../Icon.js";
export interface KeyframeProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Keyframe: import("react").ForwardRefExoticComponent<Omit<KeyframeProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Keyframe.d.ts.map