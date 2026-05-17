import { type IconProps, type IconStyle } from "../Icon.js";
export interface TextProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Text: import("react").ForwardRefExoticComponent<Omit<TextProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Text.d.ts.map