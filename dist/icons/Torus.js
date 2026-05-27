import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" }), _jsx("ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M11.9995 3.25C17.7717 3.25 22.7495 7.01998 22.7495 12C22.7495 16.98 17.7717 20.75 11.9995 20.75C6.22727 20.75 1.24951 16.98 1.24951 12C1.24951 7.01998 6.22727 3.25 11.9995 3.25ZM11.9995 8.25C11.0437 8.25 10.1446 8.50713 9.4624 8.96191C8.78542 9.41323 8.24951 10.1189 8.24951 11C8.24951 11.8811 8.78542 12.5868 9.4624 13.0381C10.1446 13.4929 11.0437 13.75 11.9995 13.75C12.9553 13.75 13.8544 13.4929 14.5366 13.0381C15.2136 12.5868 15.7495 11.8811 15.7495 11C15.7495 10.1189 15.2136 9.41323 14.5366 8.96191C13.8544 8.50713 12.9553 8.25 11.9995 8.25Z", fill: "currentColor" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M12 20.75C17.7722 20.75 22.75 16.98 22.75 12C22.75 7.01998 17.7722 3.25 12 3.25C6.22776 3.25 1.25 7.01998 1.25 12C1.25 16.98 6.22776 20.75 12 20.75Z", fill: "currentColor" }), _jsx("path", { d: "M14.5371 13.0381C15.2141 12.5868 15.75 11.8811 15.75 11C15.75 10.1189 15.2141 9.41323 14.5371 8.96191C13.8549 8.50713 12.9558 8.25 12 8.25C11.0442 8.25 10.1451 8.50713 9.46289 8.96191C8.78591 9.41323 8.25 10.1189 8.25 11C8.25 11.8811 8.78591 12.5868 9.46289 13.0381C10.1451 13.4929 11.0442 13.75 12 13.75C12.9558 13.75 13.8549 13.4929 14.5371 13.0381Z", fill: "currentColor" })] })),
};
export const Torus = forwardRef(function Torus({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "torus", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Torus.js.map