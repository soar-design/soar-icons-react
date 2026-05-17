import { type IconProps, type IconStyle } from "../Icon.js";
export interface ColorsProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Colors: import("react").ForwardRefExoticComponent<Omit<ColorsProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Colors.d.ts.map