import { type IconProps, type IconStyle } from "../Icon.js";
export interface PillProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Pill: import("react").ForwardRefExoticComponent<Omit<PillProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Pill.d.ts.map