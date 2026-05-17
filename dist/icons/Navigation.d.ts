import { type IconProps, type IconStyle } from "../Icon.js";
export interface NavigationProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Navigation: import("react").ForwardRefExoticComponent<Omit<NavigationProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Navigation.d.ts.map