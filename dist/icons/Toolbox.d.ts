import { type IconProps, type IconStyle } from "../Icon.js";
export interface ToolboxProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Toolbox: import("react").ForwardRefExoticComponent<Omit<ToolboxProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Toolbox.d.ts.map