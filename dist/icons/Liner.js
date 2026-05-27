import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M3 20L21 4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M21.7474 3.33565C22.1143 3.74843 22.0772 4.3805 21.6644 4.74742L3.66437 20.7474C3.25159 21.1143 2.61952 21.0772 2.2526 20.6644C1.88568 20.2516 1.92286 19.6195 2.33565 19.2526L20.3356 3.2526C20.7484 2.88568 21.3805 2.92286 21.7474 3.33565Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M21.7474 3.33565C22.1143 3.74843 22.0772 4.3805 21.6644 4.74742L3.66437 20.7474C3.25159 21.1143 2.61952 21.0772 2.2526 20.6644C1.88568 20.2516 1.92286 19.6195 2.33565 19.2526L20.3356 3.2526C20.7484 2.88568 21.3805 2.92286 21.7474 3.33565Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M12.7474 11.3356C13.1143 11.7484 13.0772 12.3805 12.6644 12.7474L3.66437 20.7474C3.25159 21.1143 2.61952 21.0772 2.2526 20.6644C1.88568 20.2516 1.92286 19.6195 2.33565 19.2526L11.3356 11.2526C11.7484 10.8857 12.3805 10.9229 12.7474 11.3356Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const Liner = forwardRef(function Liner({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "liner", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Liner.js.map