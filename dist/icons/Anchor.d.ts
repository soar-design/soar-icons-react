import { type IconProps, type IconStyle } from "../Icon.js";
export interface AnchorProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Anchor: import("react").ForwardRefExoticComponent<Omit<AnchorProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Anchor.d.ts.map