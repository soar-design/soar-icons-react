import { type IconProps, type IconStyle } from "../Icon.js";
export interface TransactionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Transaction: import("react").ForwardRefExoticComponent<Omit<TransactionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Transaction.d.ts.map