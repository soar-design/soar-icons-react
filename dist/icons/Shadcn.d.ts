import { type IconProps, type IconStyle } from "../Icon.js";
export interface ShadcnProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Shadcn: import("react").ForwardRefExoticComponent<Omit<ShadcnProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Shadcn.d.ts.map