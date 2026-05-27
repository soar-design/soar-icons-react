import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }), _jsx("path", { d: "M15 14V10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V10ZM12 6C9.79086 6 8 7.79086 8 10V14C8 16.2091 9.79086 18 12 18C14.2091 18 16 16.2091 16 14V10C16 7.79086 14.2091 6 12 6Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M12 8C10.8954 8 10 8.89543 10 10V14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14V10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const ZeroCircle = forwardRef(function ZeroCircle({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "zero-circle", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=ZeroCircle.js.map