import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChipProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Chip: import("react").ForwardRefExoticComponent<Omit<ChipProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Chip.d.ts.map