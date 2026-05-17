import { type IconProps, type IconStyle } from "../Icon.js";
export interface RecordProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Record: import("react").ForwardRefExoticComponent<Omit<RecordProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Record.d.ts.map