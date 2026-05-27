import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M15 3V21M15 3H10M15 3H21M10 12H7.5C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3H10M10 12V3M10 12V21", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11H9V4H7.5ZM11 4V21C11 21.5523 10.5523 22 10 22C9.44772 22 9 21.5523 9 21V13H7.5C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H16V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V4H11Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M21 2C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H16V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V4H11V2H21Z", fill: "currentColor" }), _jsx("path", { opacity: "0.4", d: "M10 22C10.5523 22 11 21.5523 11 21V2H7.5C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13H9V21C9 21.5523 9.44772 22 10 22ZM4 7.5C4 5.567 5.567 4 7.5 4H9V11H7.5C5.567 11 4 9.433 4 7.5Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const Paragraph = forwardRef(function Paragraph({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "paragraph", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Paragraph.js.map