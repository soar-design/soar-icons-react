import { type IconProps, type IconStyle } from "../Icon.js";
export interface ListViewProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ListView: import("react").ForwardRefExoticComponent<Omit<ListViewProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ListView.d.ts.map