import { type IconProps, type IconStyle } from "../Icon.js";
export interface MirrorProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Mirror: import("react").ForwardRefExoticComponent<Omit<MirrorProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Mirror.d.ts.map