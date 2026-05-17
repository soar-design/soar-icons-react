import { type IconProps, type IconStyle } from "../Icon.js";
export interface SmartProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Smart: import("react").ForwardRefExoticComponent<Omit<SmartProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Smart.d.ts.map