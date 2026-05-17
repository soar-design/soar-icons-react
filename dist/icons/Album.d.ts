import { type IconProps, type IconStyle } from "../Icon.js";
export interface AlbumProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Album: import("react").ForwardRefExoticComponent<Omit<AlbumProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Album.d.ts.map