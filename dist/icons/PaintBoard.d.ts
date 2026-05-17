import { type IconProps, type IconStyle } from "../Icon.js";
export interface PaintBoardProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const PaintBoard: import("react").ForwardRefExoticComponent<Omit<PaintBoardProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=PaintBoard.d.ts.map