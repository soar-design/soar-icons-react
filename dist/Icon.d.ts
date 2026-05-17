import * as React from "react";
export type IconStyle = "line" | "solid" | "bulk";
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "color"> {
    size?: number | string;
    color?: string;
    title?: string;
    viewBox?: string;
}
export declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Icon.d.ts.map