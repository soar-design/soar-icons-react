import { type IconProps, type IconStyle } from "../Icon.js";
export interface LineProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Line: import("react").ForwardRefExoticComponent<Omit<LineProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Line.d.ts.map