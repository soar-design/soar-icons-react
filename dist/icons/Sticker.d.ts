import { type IconProps, type IconStyle } from "../Icon.js";
export interface StickerProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Sticker: import("react").ForwardRefExoticComponent<Omit<StickerProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Sticker.d.ts.map