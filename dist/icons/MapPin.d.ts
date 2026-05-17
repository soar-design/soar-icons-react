import { type IconProps, type IconStyle } from "../Icon.js";
export interface MapPinProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const MapPin: import("react").ForwardRefExoticComponent<Omit<MapPinProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=MapPin.d.ts.map