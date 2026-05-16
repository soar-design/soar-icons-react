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
export type SandstormProtectionVariant = keyof typeof VARIANTS;
export interface SandstormProtectionProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: SandstormProtectionVariant;
}
export declare const SandstormProtection: React.ForwardRefExoticComponent<Omit<SandstormProtectionProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=SandstormProtection.d.ts.map