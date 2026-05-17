import { type IconProps, type IconStyle } from "../Icon.js";
export interface KanbanProps extends Omit<IconProps, "viewBox" | "children" | "style"> {
    style?: IconStyle;
}
export declare const Kanban: import("react").ForwardRefExoticComponent<Omit<KanbanProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
//# sourceMappingURL=Kanban.d.ts.map