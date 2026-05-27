import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.714" }), _jsx("path", { d: "M8 9H16M8 15H16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.714" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55229 7.44772 10 8 10H16C16.5523 10 17 9.55229 17 9C17 8.44772 16.5523 8 16 8H8ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9ZM7 15C7 14.4477 7.44772 14 8 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H8C7.44772 16 7 15.5523 7 15Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const EqualSignCircle = forwardRef(function EqualSignCircle({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "equal-sign-circle", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=EqualSignCircle.js.map