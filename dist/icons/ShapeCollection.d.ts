import { type IconProps, type IconStyle } from "../Icon.js";
export interface ShapeCollectionProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const ShapeCollection: import("react").ForwardRefExoticComponent<Omit<ShapeCollectionProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=ShapeCollection.d.ts.map