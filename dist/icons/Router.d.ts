import { type IconProps, type IconStyle } from "../Icon.js";
export interface RouterProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Router: import("react").ForwardRefExoticComponent<Omit<RouterProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Router.d.ts.map