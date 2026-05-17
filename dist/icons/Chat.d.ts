import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChatProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Chat: import("react").ForwardRefExoticComponent<Omit<ChatProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Chat.d.ts.map