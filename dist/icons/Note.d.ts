import { type IconProps, type IconStyle } from "../Icon.js";
export interface NoteProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Note: import("react").ForwardRefExoticComponent<Omit<NoteProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Note.d.ts.map