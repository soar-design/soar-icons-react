import { type IconProps, type IconStyle } from "../Icon.js";
export interface BirdProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Bird: import("react").ForwardRefExoticComponent<Omit<BirdProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Bird.d.ts.map