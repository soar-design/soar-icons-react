import { type IconProps, type IconStyle } from "../Icon.js";
export interface LabelProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Label: import("react").ForwardRefExoticComponent<Omit<LabelProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Label.d.ts.map