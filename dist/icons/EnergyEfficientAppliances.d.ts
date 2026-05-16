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
export type EnergyEfficientAppliancesVariant = keyof typeof VARIANTS;
export interface EnergyEfficientAppliancesProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: EnergyEfficientAppliancesVariant;
}
export declare const EnergyEfficientAppliances: React.ForwardRefExoticComponent<Omit<EnergyEfficientAppliancesProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=EnergyEfficientAppliances.d.ts.map