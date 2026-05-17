import { type IconProps, type IconStyle } from "../Icon.js";
export interface AbsoluteProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Absolute: import("react").ForwardRefExoticComponent<Omit<AbsoluteProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Absolute.d.ts.map