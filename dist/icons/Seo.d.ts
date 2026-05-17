import { type IconProps, type IconStyle } from "../Icon.js";
export interface SeoProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Seo: import("react").ForwardRefExoticComponent<Omit<SeoProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Seo.d.ts.map