import { type IconProps, type IconStyle } from "../Icon.js";
export interface InjectionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Injection: import("react").ForwardRefExoticComponent<Omit<InjectionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Injection.d.ts.map