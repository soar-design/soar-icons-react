import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M22 12C22 16.9706 17.5228 21 12 21C6.47715 21 2 16.9706 2 12C2 7.02944 6.47715 3 12 3C17.5228 3 22 7.02944 22 12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "2.25" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M1.25 12C1.25 6.54285 6.13922 2.25 12 2.25C17.8608 2.25 22.75 6.54285 22.75 12C22.75 17.4572 17.8608 21.75 12 21.75C6.13922 21.75 1.25 17.4572 1.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.54285 6.13922 2.25 12 2.25C17.8608 2.25 22.75 6.54285 22.75 12C22.75 17.4572 17.8608 21.75 12 21.75C6.13922 21.75 1.25 17.4572 1.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M22.75 11.9987C22.75 17.4559 17.8608 21.7487 12 21.7487C8.84987 21.7487 5.98043 20.5085 4 18.5139L18.3694 4.14453C21.0133 5.9075 22.75 8.74633 22.75 11.9987Z", fill: "currentColor" })] })),
};
export const Oval = forwardRef(function Oval({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "oval", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Oval.js.map