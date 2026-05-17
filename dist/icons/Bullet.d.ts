import { type IconProps, type IconStyle } from "../Icon.js";
export interface BulletProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Bullet: import("react").ForwardRefExoticComponent<Omit<BulletProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Bullet.d.ts.map