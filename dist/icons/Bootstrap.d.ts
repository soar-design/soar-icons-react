import { type IconProps, type IconStyle } from "../Icon.js";
export interface BootstrapProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Bootstrap: import("react").ForwardRefExoticComponent<Omit<BootstrapProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Bootstrap.d.ts.map