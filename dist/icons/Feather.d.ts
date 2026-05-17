import { type IconProps, type IconStyle } from "../Icon.js";
export interface FeatherProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Feather: import("react").ForwardRefExoticComponent<Omit<FeatherProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Feather.d.ts.map