import { type IconProps, type IconStyle } from "../Icon.js";
export interface SpeakerProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Speaker: import("react").ForwardRefExoticComponent<Omit<SpeakerProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Speaker.d.ts.map