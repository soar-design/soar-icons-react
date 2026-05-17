import { type IconProps, type IconStyle } from "../Icon.js";
export interface NewsProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const News: import("react").ForwardRefExoticComponent<Omit<NewsProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=News.d.ts.map