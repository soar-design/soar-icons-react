import { type IconProps, type IconStyle } from "../Icon.js";
export interface FactoryProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Factory: import("react").ForwardRefExoticComponent<Omit<FactoryProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Factory.d.ts.map