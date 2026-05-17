import { type IconProps, type IconStyle } from "../Icon.js";
export interface DangerProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Danger: import("react").ForwardRefExoticComponent<Omit<DangerProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Danger.d.ts.map