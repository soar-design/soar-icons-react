import { type IconProps, type IconStyle } from "../Icon.js";
export interface GroupProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Group: import("react").ForwardRefExoticComponent<Omit<GroupProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Group.d.ts.map