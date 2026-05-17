import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChildProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Child: import("react").ForwardRefExoticComponent<Omit<ChildProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Child.d.ts.map