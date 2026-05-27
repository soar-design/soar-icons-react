import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("circle", { cx: "11.9999", cy: "12", r: "9.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M11.9999 4.25C7.7197 4.25 4.24991 7.71979 4.24991 12C4.24991 16.2802 7.7197 19.75 11.9999 19.75C16.2801 19.75 19.7499 16.2802 19.7499 12C19.7499 7.71979 16.2801 4.25 11.9999 4.25ZM1.74991 12C1.74991 6.33908 6.33899 1.75 11.9999 1.75C17.6608 1.75 22.2499 6.33908 22.2499 12C22.2499 17.6609 17.6608 22.25 11.9999 22.25C6.33899 22.25 1.74991 17.6609 1.74991 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M11.9999 4.25C7.71971 4.25 4.24992 7.71979 4.24992 12C4.24992 16.2802 7.71971 19.75 11.9999 19.75C16.2801 19.75 19.7499 16.2802 19.7499 12C19.7499 7.71979 16.2801 4.25 11.9999 4.25ZM1.74992 12C1.74992 6.33908 6.339 1.75 11.9999 1.75C17.6608 1.75 22.2499 6.33908 22.2499 12C22.2499 17.6609 17.6608 22.25 11.9999 22.25C6.339 22.25 1.74992 17.6609 1.74992 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M11.9999 4.25C7.71971 4.25 4.24992 7.71979 4.24992 12C4.24992 16.2802 7.71971 19.75 11.9999 19.75V22.25C6.339 22.25 1.74992 17.6609 1.74992 12C1.74992 6.33908 6.339 1.75 11.9999 1.75V4.25Z", fill: "currentColor" })] })),
};
export const Payoneer = forwardRef(function Payoneer({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "payoneer", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Payoneer.js.map