import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChatUserProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ChatUser: import("react").ForwardRefExoticComponent<Omit<ChatUserProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ChatUser.d.ts.map