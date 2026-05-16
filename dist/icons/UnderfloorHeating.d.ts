import * as React from "react";
import { type IconProps } from "../Icon.js";
declare const VARIANTS: {
    readonly line: {
        readonly viewBox: "0 0 24 24";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly solid: {
        readonly viewBox: "0 0 24 24";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly remix: {
        readonly viewBox: "0 0 24 24";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly duo: {
        readonly viewBox: "0 0 24 24";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly flat: {
        readonly viewBox: "0 0 24 24";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
};
export type UnderfloorHeatingVariant = keyof typeof VARIANTS;
export interface UnderfloorHeatingProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: UnderfloorHeatingVariant;
}
export declare const UnderfloorHeating: React.ForwardRefExoticComponent<Omit<UnderfloorHeatingProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=UnderfloorHeating.d.ts.map