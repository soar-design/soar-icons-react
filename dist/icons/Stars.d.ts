import { type IconProps, type IconStyle } from "../Icon.js";
export interface StarsProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Stars: import("react").ForwardRefExoticComponent<Omit<StarsProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Stars.d.ts.map