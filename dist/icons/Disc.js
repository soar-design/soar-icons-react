import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }), _jsx("circle", { cx: "12", cy: "12", r: "2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M11.9995 1.25C17.9366 1.25 22.7495 6.06294 22.7495 12C22.7495 17.9371 17.9366 22.75 11.9995 22.75C6.06245 22.75 1.24951 17.9371 1.24951 12C1.24951 6.06294 6.06245 1.25 11.9995 1.25ZM11.9995 9.25C10.4807 9.25 9.24951 10.4812 9.24951 12C9.24951 13.5188 10.4807 14.75 11.9995 14.75C13.5183 14.75 14.7495 13.5188 14.7495 12C14.7495 10.4812 13.5183 9.25 11.9995 9.25Z", fill: "currentColor" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75Z", fill: "currentColor" }), _jsx("path", { d: "M12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75Z", fill: "currentColor" })] })),
};
export const Disc = forwardRef(function Disc({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "disc", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Disc.js.map