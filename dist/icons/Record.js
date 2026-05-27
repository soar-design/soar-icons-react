import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("circle", { cx: "12", cy: "12", r: "8", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.714" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12Z", fill: "currentColor" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M18.1869 5.8125C21.604 9.22959 21.604 14.7698 18.1869 18.1869C14.7698 21.604 9.22959 21.604 5.8125 18.1869L18.1869 5.8125Z", fill: "currentColor" })] })),
};
export const Record = forwardRef(function Record({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "record", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Record.js.map