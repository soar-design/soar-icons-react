import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.714" }), _jsx("path", { d: "M12 2V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M11.25 1.25C5.66285 1.63597 1.25 6.30141 1.25 12C1.25 17.6986 5.66285 22.364 11.25 22.75V1.25Z", fill: "currentColor" }), _jsx("path", { d: "M12.75 22.75C18.3372 22.364 22.75 17.6986 22.75 12C22.75 6.30141 18.3372 1.63597 12.75 1.25V22.75Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M12.75 22.75C18.3372 22.364 22.75 17.6986 22.75 12C22.75 6.30141 18.3372 1.63597 12.75 1.25V22.75Z", fill: "currentColor" }), _jsx("path", { d: "M11.25 1.25C5.66285 1.63597 1.25 6.30141 1.25 12C1.25 17.6986 5.66285 22.364 11.25 22.75V1.25Z", fill: "currentColor" })] })),
};
export const PieChart04 = forwardRef(function PieChart04({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "pie-chart-04", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=PieChart04.js.map