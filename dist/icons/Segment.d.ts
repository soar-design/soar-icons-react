import { type IconProps, type IconStyle } from "../Icon.js";
export interface SegmentProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Segment: import("react").ForwardRefExoticComponent<Omit<SegmentProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Segment.d.ts.map