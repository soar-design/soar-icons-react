import { type IconProps, type IconStyle } from "../Icon.js";
export interface SenselessProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Senseless: import("react").ForwardRefExoticComponent<Omit<SenselessProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Senseless.d.ts.map