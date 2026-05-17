import { type IconProps, type IconStyle } from "../Icon.js";
export interface ContainerProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Container: import("react").ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Container.d.ts.map