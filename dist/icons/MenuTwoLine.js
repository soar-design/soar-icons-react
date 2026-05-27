import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M4 9L20 9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }), _jsx("path", { d: "M4 15L14 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M3 9C3 8.44772 3.44772 8 4 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L4 10C3.44772 10 3 9.55228 3 9Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M3 15C3 14.4477 3.44772 14 4 14L14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16L4 16C3.44772 16 3 15.5523 3 15Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M3 9C3 8.44772 3.44772 8 4 8L20 8C20.5523 8 21 8.44772 21 9C21 9.55229 20.5523 10 20 10L4 10C3.44772 10 3 9.55228 3 9Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M3 15C3 14.4477 3.44772 14 4 14L14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16L4 16C3.44772 16 3 15.5523 3 15Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const MenuTwoLine = forwardRef(function MenuTwoLine({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "menu-two-line", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=MenuTwoLine.js.map