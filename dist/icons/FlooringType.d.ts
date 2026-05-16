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
export type FlooringTypeVariant = keyof typeof VARIANTS;
export interface FlooringTypeProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: FlooringTypeVariant;
}
export declare const FlooringType: React.ForwardRefExoticComponent<Omit<FlooringTypeProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=FlooringType.d.ts.map