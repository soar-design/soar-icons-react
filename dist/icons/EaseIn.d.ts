import { type IconProps, type IconStyle } from "../Icon.js";
export interface EaseInProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const EaseIn: import("react").ForwardRefExoticComponent<Omit<EaseInProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=EaseIn.d.ts.map