import { type IconProps, type IconStyle } from "../Icon.js";
export interface OptionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Option: import("react").ForwardRefExoticComponent<Omit<OptionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Option.d.ts.map