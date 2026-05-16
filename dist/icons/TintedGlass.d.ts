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
export type TintedGlassVariant = keyof typeof VARIANTS;
export interface TintedGlassProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: TintedGlassVariant;
}
export declare const TintedGlass: React.ForwardRefExoticComponent<Omit<TintedGlassProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=TintedGlass.d.ts.map