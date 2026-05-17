import { type IconProps, type IconStyle } from "../Icon.js";
export interface SafeBoxProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const SafeBox: import("react").ForwardRefExoticComponent<Omit<SafeBoxProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=SafeBox.d.ts.map