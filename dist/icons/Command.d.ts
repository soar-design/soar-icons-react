import { type IconProps, type IconStyle } from "../Icon.js";
export interface CommandProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Command: import("react").ForwardRefExoticComponent<Omit<CommandProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Command.d.ts.map