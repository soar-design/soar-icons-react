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
export type SmokeDetectorVariant = keyof typeof VARIANTS;
export interface SmokeDetectorProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: SmokeDetectorVariant;
}
export declare const SmokeDetector: React.ForwardRefExoticComponent<Omit<SmokeDetectorProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=SmokeDetector.d.ts.map