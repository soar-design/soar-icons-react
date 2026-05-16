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
export type ShuttersVariant = keyof typeof VARIANTS;
export interface ShuttersProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: ShuttersVariant;
}
export declare const Shutters: React.ForwardRefExoticComponent<Omit<ShuttersProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=Shutters.d.ts.map