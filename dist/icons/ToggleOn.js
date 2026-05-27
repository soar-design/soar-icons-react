import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M19 12C19 13.6569 17.6569 15 16 15C14.3431 15 13 13.6569 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12Z", stroke: "currentColor", strokeWidth: "2" }), _jsx("path", { d: "M16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6Z", stroke: "currentColor", strokeWidth: "2" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M8 5.25C4.27208 5.25 1.25 8.27208 1.25 12C1.25 15.7279 4.27208 18.75 8 18.75H16C19.7279 18.75 22.75 15.7279 22.75 12C22.75 8.27208 19.7279 5.25 16 5.25H8ZM16 8.25C13.9289 8.25 12.25 9.92893 12.25 12C12.25 14.0711 13.9289 15.75 16 15.75C18.0711 15.75 19.75 14.0711 19.75 12C19.75 9.92893 18.0711 8.25 16 8.25Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 8.27208 4.27208 5.25 8 5.25H16C19.7279 5.25 22.75 8.27208 22.75 12C22.75 15.7279 19.7279 18.75 16 18.75H8C4.27208 18.75 1.25 15.7279 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M12.25 12C12.25 9.92893 13.9289 8.25 16 8.25C18.0711 8.25 19.75 9.92893 19.75 12C19.75 14.0711 18.0711 15.75 16 15.75C13.9289 15.75 12.25 14.0711 12.25 12Z", fill: "currentColor" })] })),
};
export const ToggleOn = forwardRef(function ToggleOn({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "toggle-on", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=ToggleOn.js.map