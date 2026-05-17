import { type IconProps, type IconStyle } from "../Icon.js";
export interface CustomFieldProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const CustomField: import("react").ForwardRefExoticComponent<Omit<CustomFieldProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=CustomField.d.ts.map