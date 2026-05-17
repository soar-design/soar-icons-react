import { type IconProps, type IconStyle } from "../Icon.js";
export interface BeanProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Bean: import("react").ForwardRefExoticComponent<Omit<BeanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Bean.d.ts.map