import { type IconProps, type IconStyle } from "../Icon.js";
export interface UserProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const User: import("react").ForwardRefExoticComponent<Omit<UserProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=User.d.ts.map