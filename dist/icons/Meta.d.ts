import { type IconProps, type IconStyle } from "../Icon.js";
export interface MetaProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Meta: import("react").ForwardRefExoticComponent<Omit<MetaProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Meta.d.ts.map