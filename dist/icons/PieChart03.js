import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2.25" }), _jsx("path", { d: "M12 2V22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }), _jsx("path", { d: "M12 12H22", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M11.262 1.25C5.66814 1.63597 1.25 6.30141 1.25 12C1.25 17.6986 5.66814 22.364 11.262 22.75V1.25Z", fill: "currentColor" }), _jsx("path", { d: "M12.7638 22.75C18.1096 22.3812 22.3816 18.104 22.75 12.7518H12.7638V22.75Z", fill: "currentColor" }), _jsx("path", { d: "M22.75 11.2482C22.3816 5.89601 18.1096 1.61885 12.7638 1.25V11.2482H22.75Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M12.7638 22.75C18.1096 22.3812 22.3816 18.104 22.75 12.7518H12.7638V22.75Z", fill: "currentColor" }), _jsx("path", { d: "M22.75 11.2482C22.3816 5.89601 18.1096 1.61885 12.7638 1.25V11.2482H22.75Z", fill: "currentColor" }), _jsx("path", { opacity: "0.4", d: "M11.262 1.25C5.66814 1.63597 1.25 6.30141 1.25 12C1.25 17.6986 5.66814 22.364 11.262 22.75V1.25Z", fill: "currentColor" })] })),
};
export const PieChart03 = forwardRef(function PieChart03({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "pie-chart-03", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=PieChart03.js.map