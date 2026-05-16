import * as React from "react";
import { type IconProps } from "../Icon.js";
declare const VARIANTS: {
    readonly line: {
        readonly viewBox: "0 0 14 14";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly solid: {
        readonly viewBox: "0 0 14 14";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly remix: {
        readonly viewBox: "0 0 14 14";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly duo: {
        readonly viewBox: "0 0 14 14";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
    readonly flat: {
        readonly viewBox: "0 0 14 14";
        readonly body: import("react/jsx-runtime").JSX.Element;
    };
};
export type HomeVariant = keyof typeof VARIANTS;
export interface HomeProps extends Omit<IconProps, "viewBox" | "children"> {
    variant?: HomeVariant;
}
export declare const Home: React.ForwardRefExoticComponent<Omit<HomeProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export {};
//# sourceMappingURL=Home.d.ts.map