import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), _jsx("path", { d: "M9 12H3M15 12H21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M11.9995 16C14.2087 16 15.9995 14.2091 15.9995 12C15.9995 9.79086 14.2087 8 11.9995 8C9.79037 8 7.99951 9.79086 7.99951 12C7.99951 14.2091 9.79037 16 11.9995 16Z", fill: "currentColor" }), _jsx("path", { d: "M8.99951 11C9.5518 11 9.99951 11.4477 9.99951 12C9.99951 12.5523 9.5518 13 8.99951 13H2.99951C2.44723 13 1.99951 12.5523 1.99951 12C1.99951 11.4477 2.44723 11 2.99951 11H8.99951ZM20.9995 11C21.5518 11 21.9995 11.4477 21.9995 12C21.9995 12.5523 21.5518 13 20.9995 13H14.9995C14.4472 13 13.9995 12.5523 13.9995 12C13.9995 11.4477 14.4472 11 14.9995 11H20.9995Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z", fill: "currentColor" }), _jsx("path", { d: "M8.12598 11C8.04371 11.3196 8 11.6547 8 12C8 12.3453 8.04371 12.6804 8.12598 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H8.12598Z", fill: "currentColor" }), _jsx("path", { d: "M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15.874C15.9563 12.6804 16 12.3453 16 12C16 11.6547 15.9563 11.3196 15.874 11H21Z", fill: "currentColor" })] })),
};
export const GitCommitHorizontal = forwardRef(function GitCommitHorizontal({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "git-commit-horizontal", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=GitCommitHorizontal.js.map