import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M11 12C11 13.6569 9.65685 15 8 15C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9C9.65685 9 11 10.3431 11 12Z", stroke: "currentColor", strokeWidth: "2.25" }), _jsx("path", { d: "M16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6Z", stroke: "currentColor", strokeWidth: "2.25" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M15.9999 5.25002C19.7278 5.25002 22.7499 8.27209 22.7499 12C22.7499 15.7279 19.7278 18.75 15.9999 18.75H7.99988C4.27196 18.75 1.24988 15.7279 1.24988 12C1.24988 8.27209 4.27196 5.25002 7.99988 5.25002H15.9999ZM7.99988 8.25002C10.0709 8.25002 11.7499 9.92895 11.7499 12C11.7499 14.0711 10.0709 15.75 7.99988 15.75C5.92881 15.75 4.24988 14.0711 4.24988 12C4.24988 9.92895 5.92881 8.25002 7.99988 8.25002Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M22.7499 12C22.7499 8.27209 19.7278 5.25002 15.9999 5.25002H7.99988C4.27196 5.25002 1.24988 8.27209 1.24988 12C1.24988 15.7279 4.27196 18.75 7.99988 18.75H15.9999C19.7278 18.75 22.7499 15.7279 22.7499 12Z", fill: "currentColor" }), _jsx("path", { d: "M11.7499 12C11.7499 9.92895 10.0709 8.25002 7.99988 8.25002C5.92881 8.25002 4.24988 9.92895 4.24988 12C4.24988 14.0711 5.92881 15.75 7.99988 15.75C10.0709 15.75 11.7499 14.0711 11.7499 12Z", fill: "currentColor" })] })),
};
export const ToggleOff = forwardRef(function ToggleOff({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "toggle-off", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=ToggleOff.js.map