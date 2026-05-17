import { type IconProps, type IconStyle } from "../Icon.js";
export interface ViewProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const View: import("react").ForwardRefExoticComponent<Omit<ViewProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=View.d.ts.map