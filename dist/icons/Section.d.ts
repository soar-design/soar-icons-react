import { type IconProps, type IconStyle } from "../Icon.js";
export interface SectionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Section: import("react").ForwardRefExoticComponent<Omit<SectionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Section.d.ts.map