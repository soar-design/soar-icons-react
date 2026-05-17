import { type IconProps, type IconStyle } from "../Icon.js";
export interface LockProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Lock: import("react").ForwardRefExoticComponent<Omit<LockProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Lock.d.ts.map