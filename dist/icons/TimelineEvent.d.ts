import { type IconProps, type IconStyle } from "../Icon.js";
export interface TimelineEventProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const TimelineEvent: import("react").ForwardRefExoticComponent<Omit<TimelineEventProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=TimelineEvent.d.ts.map