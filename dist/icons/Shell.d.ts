import { type IconProps, type IconStyle } from "../Icon.js";
export interface ShellProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Shell: import("react").ForwardRefExoticComponent<Omit<ShellProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Shell.d.ts.map