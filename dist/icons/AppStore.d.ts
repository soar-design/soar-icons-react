import { type IconProps, type IconStyle } from "../Icon.js";
export interface AppStoreProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const AppStore: import("react").ForwardRefExoticComponent<Omit<AppStoreProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=AppStore.d.ts.map