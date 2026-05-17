import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChatNotificationProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ChatNotification: import("react").ForwardRefExoticComponent<Omit<ChatNotificationProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ChatNotification.d.ts.map