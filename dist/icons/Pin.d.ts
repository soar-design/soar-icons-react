import { type IconProps, type IconStyle } from "../Icon.js";
export interface PinProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Pin: import("react").ForwardRefExoticComponent<Omit<PinProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Pin.d.ts.map