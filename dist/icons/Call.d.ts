import { type IconProps, type IconStyle } from "../Icon.js";
export interface CallProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Call: import("react").ForwardRefExoticComponent<Omit<CallProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Call.d.ts.map