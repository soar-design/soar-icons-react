import { type IconProps, type IconStyle } from "../Icon.js";
export interface CustomizeProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Customize: import("react").ForwardRefExoticComponent<Omit<CustomizeProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Customize.d.ts.map