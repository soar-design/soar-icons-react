import { type IconProps, type IconStyle } from "../Icon.js";
export interface TextColorProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const TextColor: import("react").ForwardRefExoticComponent<Omit<TextColorProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=TextColor.d.ts.map