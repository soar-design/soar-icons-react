import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M12 3L12 8.5M12 21L12 15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), _jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeWidth: "1.5" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M12 2C12.5523 2 13 2.44772 13 3L13 8.5C13 9.05228 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05228 11 8.5L11 3C11 2.44772 11.4477 2 12 2ZM12 14C12.5523 14 13 14.4477 13 15L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 15C11 14.4477 11.4477 14 12 14Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M12 2C12.5523 2 13 2.44772 13 3L13 8.5C13 9.05228 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05228 11 8.5L11 3C11 2.44772 11.4477 2 12 2ZM12 14C12.5523 14 13 14.4477 13 15L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 15C11 14.4477 11.4477 14 12 14Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const GitCommit = forwardRef(function GitCommit({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "git-commit", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=GitCommit.js.map