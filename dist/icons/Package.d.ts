import { type IconProps, type IconStyle } from "../Icon.js";
export interface PackageProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Package: import("react").ForwardRefExoticComponent<Omit<PackageProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Package.d.ts.map