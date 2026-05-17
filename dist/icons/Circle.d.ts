import { type IconProps, type IconStyle } from "../Icon.js";
export interface CircleProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Circle: import("react").ForwardRefExoticComponent<Omit<CircleProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Circle.d.ts.map