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
export type EnergySustainabilityVariant = keyof typeof VARIANTS;
export interface EnergySustainabilityProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: EnergySustainabilityVariant;
}
export declare const EnergySustainability: React.ForwardRefExoticComponent<Omit<EnergySustainabilityProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=EnergySustainability.d.ts.map