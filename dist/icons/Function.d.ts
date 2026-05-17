import { type IconProps, type IconStyle } from "../Icon.js";
export interface FunctionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Function: import("react").ForwardRefExoticComponent<Omit<FunctionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Function.d.ts.map