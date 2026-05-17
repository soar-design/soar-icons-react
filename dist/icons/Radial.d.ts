import { type IconProps, type IconStyle } from "../Icon.js";
export interface RadialProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Radial: import("react").ForwardRefExoticComponent<Omit<RadialProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Radial.d.ts.map