import { type IconProps, type IconStyle } from "../Icon.js";
export interface ScratchCardProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ScratchCard: import("react").ForwardRefExoticComponent<Omit<ScratchCardProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ScratchCard.d.ts.map