import { type IconProps, type IconStyle } from "../Icon.js";
export interface ConstellationProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Constellation: import("react").ForwardRefExoticComponent<Omit<ConstellationProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Constellation.d.ts.map