import { type IconProps, type IconStyle } from "../Icon.js";
export interface CombineProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Combine: import("react").ForwardRefExoticComponent<Omit<CombineProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Combine.d.ts.map