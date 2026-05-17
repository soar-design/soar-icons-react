import { type IconProps, type IconStyle } from "../Icon.js";
export interface ComponentProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Component: import("react").ForwardRefExoticComponent<Omit<ComponentProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Component.d.ts.map