import { type IconProps, type IconStyle } from "../Icon.js";
export interface SignalProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Signal: import("react").ForwardRefExoticComponent<Omit<SignalProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Signal.d.ts.map