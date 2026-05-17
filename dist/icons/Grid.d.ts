import { type IconProps, type IconStyle } from "../Icon.js";
export interface GridProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Grid: import("react").ForwardRefExoticComponent<Omit<GridProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Grid.d.ts.map