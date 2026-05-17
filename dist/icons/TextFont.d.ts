import { type IconProps, type IconStyle } from "../Icon.js";
export interface TextFontProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const TextFont: import("react").ForwardRefExoticComponent<Omit<TextFontProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=TextFont.d.ts.map