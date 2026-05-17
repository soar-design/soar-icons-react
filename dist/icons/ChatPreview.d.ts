import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChatPreviewProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ChatPreview: import("react").ForwardRefExoticComponent<Omit<ChatPreviewProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ChatPreview.d.ts.map