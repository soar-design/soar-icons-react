import { type IconProps, type IconStyle } from "../Icon.js";
export interface CodepenProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Codepen: import("react").ForwardRefExoticComponent<Omit<CodepenProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Codepen.d.ts.map