import { type IconProps, type IconStyle } from "../Icon.js";
export interface BulbProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Bulb: import("react").ForwardRefExoticComponent<Omit<BulbProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Bulb.d.ts.map