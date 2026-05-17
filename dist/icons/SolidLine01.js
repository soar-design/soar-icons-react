import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M2.5 12L21.5002 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M1.5 12C1.5 11.4477 1.94772 11 2.5 11L21.5002 11C22.0524 11 22.5002 11.4477 22.5002 12C22.5002 12.5523 22.0524 13 21.5002 13L2.5 13C1.94772 13 1.5 12.5523 1.5 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M21.5001 11C22.0524 11 22.5001 11.4477 22.5001 12C22.5001 12.5523 22.0524 13 21.5001 13L12.0001 13L12.0001 11L21.5001 11Z", fill: "currentColor" }), _jsx("path", { d: "M1.5 12C1.5 11.4477 1.94772 11 2.5 11L12.0001 11L12.0001 13L2.5 13C1.94772 13 1.5 12.5523 1.5 12Z", fill: "currentColor" })] })),
};
export const SolidLine01 = forwardRef(function SolidLine01({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "solid-line-01", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=SolidLine01.js.map