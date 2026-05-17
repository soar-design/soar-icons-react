import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M14.5 4V20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), _jsx("path", { d: "M9.5 4V20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M13.5001 20V4C13.5001 3.44772 13.9478 3 14.5001 3C15.0524 3 15.5001 3.44772 15.5001 4V20C15.5001 20.5523 15.0524 21 14.5001 21C13.9478 21 13.5001 20.5523 13.5001 20Z", fill: "currentColor" }), _jsx("path", { d: "M8.50012 20V4C8.50012 3.44772 8.94784 3 9.50012 3C10.0524 3 10.5001 3.44772 10.5001 4V20C10.5001 20.5523 10.0524 21 9.50012 21C8.94784 21 8.50012 20.5523 8.50012 20Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M13.5001 20V4C13.5001 3.44772 13.9478 3 14.5001 3C15.0524 3 15.5001 3.44772 15.5001 4V20C15.5001 20.5523 15.0524 21 14.5001 21C13.9478 21 13.5001 20.5523 13.5001 20Z", fill: "currentColor" }), _jsx("path", { d: "M8.50012 20V4C8.50012 3.44772 8.94784 3 9.50012 3C10.0524 3 10.5001 3.44772 10.5001 4V20C10.5001 20.5523 10.0524 21 9.50012 21C8.94784 21 8.50012 20.5523 8.50012 20Z", fill: "currentColor" })] })),
};
export const TallyTwo = forwardRef(function TallyTwo({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "tally-two", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=TallyTwo.js.map