import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "20", cy: "18.5", r: "2", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.714" }), _jsx("rect", { x: "2", y: "3.5", width: "4", height: "17", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.714" }), _jsx("path", { d: "M15 3.5H11.1985C11.1985 9.8463 6 12.5 6 12.5L11.8931 20.5H16.5L11 13C11 13 15 10 15 3.5Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.714" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "20", cy: "18.5", r: "2", fill: "currentColor" }), _jsx("rect", { x: "2", y: "3.5", width: "4", height: "17", fill: "currentColor" }), _jsx("path", { d: "M15.5 3.5H11.6985C11.6985 9.8463 6.5 12.5 6.5 12.5L12.3931 20.5H17L11.5 13C11.5 13 15.5 10 15.5 3.5Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "20", cy: "18.5", r: "2", fill: "currentColor" }), _jsx("rect", { x: "2", y: "3.5", width: "4", height: "17", fill: "currentColor" }), _jsx("path", { opacity: "0.4", d: "M16 3.5H12.1985C12.1985 9.8463 7 12.5 7 12.5L12.8931 20.5H17.5L12 13C12 13 16 10 16 3.5Z", fill: "currentColor" })] })),
};
export const Klarna = forwardRef(function Klarna({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "klarna", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Klarna.js.map