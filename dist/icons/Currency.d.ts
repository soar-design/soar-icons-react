import { type IconProps, type IconStyle } from "../Icon.js";
export interface CurrencyProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Currency: import("react").ForwardRefExoticComponent<Omit<CurrencyProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Currency.d.ts.map