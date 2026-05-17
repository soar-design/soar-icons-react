import { type IconProps, type IconStyle } from "../Icon.js";
export interface CollapseProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Collapse: import("react").ForwardRefExoticComponent<Omit<CollapseProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Collapse.d.ts.map