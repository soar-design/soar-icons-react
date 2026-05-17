import { type IconProps, type IconStyle } from "../Icon.js";
export interface ChatBotProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ChatBot: import("react").ForwardRefExoticComponent<Omit<ChatBotProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ChatBot.d.ts.map