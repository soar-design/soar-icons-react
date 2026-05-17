import { type IconProps, type IconStyle } from "../Icon.js";
export interface IcoProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Ico: import("react").ForwardRefExoticComponent<Omit<IcoProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Ico.d.ts.map