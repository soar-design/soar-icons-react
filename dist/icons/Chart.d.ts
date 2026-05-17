import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChartProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Chart: import("react").ForwardRefExoticComponent<Omit<ChartProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Chart.d.ts.map