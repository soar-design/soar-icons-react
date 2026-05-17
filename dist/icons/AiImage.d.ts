import { type IconProps, type IconStyle } from "../Icon.js";
export interface AiImageProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const AiImage: import("react").ForwardRefExoticComponent<Omit<AiImageProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=AiImage.d.ts.map