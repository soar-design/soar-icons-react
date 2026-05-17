import { type IconProps, type IconStyle } from "../Icon.js";
export interface GraphicCardProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const GraphicCard: import("react").ForwardRefExoticComponent<Omit<GraphicCardProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=GraphicCard.d.ts.map