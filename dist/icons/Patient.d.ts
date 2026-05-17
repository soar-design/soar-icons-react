import { type IconProps, type IconStyle } from "../Icon.js";
export interface PatientProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Patient: import("react").ForwardRefExoticComponent<Omit<PatientProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Patient.d.ts.map