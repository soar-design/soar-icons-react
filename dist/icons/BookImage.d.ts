import { type IconProps, type IconStyle } from "../Icon.js";
export interface BookImageProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const BookImage: import("react").ForwardRefExoticComponent<Omit<BookImageProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=BookImage.d.ts.map