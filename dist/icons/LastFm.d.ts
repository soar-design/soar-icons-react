import { type IconProps, type IconStyle } from "../Icon.js";
export interface LastFmProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const LastFm: import("react").ForwardRefExoticComponent<Omit<LastFmProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=LastFm.d.ts.map