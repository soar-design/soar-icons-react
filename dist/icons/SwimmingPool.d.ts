import * as React from "react";
import { type IconProps } from "../Icon.js";
declare const VARIANTS: {
    readonly line: {
        readonly viewBox: "0 0 48 48";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly solid: {
        readonly viewBox: "0 0 48 48";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly remix: {
        readonly viewBox: "0 0 48 48";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly duo: {
        readonly viewBox: "0 0 48 48";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly flat: {
        readonly viewBox: "0 0 48 48";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
};
export type SwimmingPoolVariant = keyof typeof VARIANTS;
export interface SwimmingPoolProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: SwimmingPoolVariant;
}
export declare const SwimmingPool: React.ForwardRefExoticComponent<Omit<SwimmingPoolProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=SwimmingPool.d.ts.map