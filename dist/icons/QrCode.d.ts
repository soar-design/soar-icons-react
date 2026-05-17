import { type IconProps, type IconStyle } from "../Icon.js";
export interface QrCodeProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const QrCode: import("react").ForwardRefExoticComponent<Omit<QrCodeProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=QrCode.d.ts.map