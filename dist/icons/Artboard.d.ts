import { type IconProps, type IconStyle } from "../Icon.js";
export interface ArtboardProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Artboard: import("react").ForwardRefExoticComponent<Omit<ArtboardProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Artboard.d.ts.map