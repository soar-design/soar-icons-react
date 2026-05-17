import { type IconProps, type IconStyle } from "../Icon.js";
export interface ArtboardToolProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ArtboardTool: import("react").ForwardRefExoticComponent<Omit<ArtboardToolProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ArtboardTool.d.ts.map