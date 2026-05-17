import { type IconProps, type IconStyle } from "../Icon.js";
export interface ReactProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const React: import("react").ForwardRefExoticComponent<Omit<ReactProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=React.d.ts.map