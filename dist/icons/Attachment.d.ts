import { type IconProps, type IconStyle } from "../Icon.js";
export interface AttachmentProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Attachment: import("react").ForwardRefExoticComponent<Omit<AttachmentProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Attachment.d.ts.map