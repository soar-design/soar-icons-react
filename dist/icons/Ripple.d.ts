import { type IconProps, type IconStyle } from "../Icon.js";
export interface RippleProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Ripple: import("react").ForwardRefExoticComponent<Omit<RippleProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Ripple.d.ts.map