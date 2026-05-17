import { type IconProps, type IconStyle } from "../Icon.js";
export interface MastodonProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Mastodon: import("react").ForwardRefExoticComponent<Omit<MastodonProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Mastodon.d.ts.map