import { type IconProps, type IconStyle } from "../Icon.js";
export interface FitToScreenProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const FitToScreen: import("react").ForwardRefExoticComponent<Omit<FitToScreenProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=FitToScreen.d.ts.map