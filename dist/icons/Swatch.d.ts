import { type IconProps, type IconStyle } from "../Icon.js";
export interface SwatchProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Swatch: import("react").ForwardRefExoticComponent<Omit<SwatchProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Swatch.d.ts.map