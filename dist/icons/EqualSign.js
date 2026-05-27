import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M4 8H20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2.25" }), _jsx("path", { d: "M4 16H20", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M2.75 8C2.75 7.30964 3.30964 6.75 4 6.75H20C20.6904 6.75 21.25 7.30964 21.25 8C21.25 8.69036 20.6904 9.25 20 9.25H4C3.30964 9.25 2.75 8.69036 2.75 8Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M2.75 16C2.75 15.3096 3.30964 14.75 4 14.75H20C20.6904 14.75 21.25 15.3096 21.25 16C21.25 16.6904 20.6904 17.25 20 17.25H4C3.30964 17.25 2.75 16.6904 2.75 16Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M2.75 8C2.75 7.30964 3.30964 6.75 4 6.75H20C20.6904 6.75 21.25 7.30964 21.25 8C21.25 8.69036 20.6904 9.25 20 9.25H4C3.30964 9.25 2.75 8.69036 2.75 8Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M2.75 16C2.75 15.3096 3.30964 14.75 4 14.75H20C20.6904 14.75 21.25 15.3096 21.25 16C21.25 16.6904 20.6904 17.25 20 17.25H4C3.30964 17.25 2.75 16.6904 2.75 16Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const EqualSign = forwardRef(function EqualSign({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "equal-sign", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=EqualSign.js.map