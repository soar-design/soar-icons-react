import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M11.4497 19.5503L19.5503 11.4497C20.4785 10.5215 21 9.2625 21 7.94975C21 5.21608 18.7839 3 16.0503 3C14.7375 3 13.4785 3.52149 12.5503 4.44975L4.44975 12.5503C3.52149 13.4785 3 14.7375 3 16.0503C3 18.7839 5.21608 21 7.94975 21C9.2625 21 10.5215 20.4785 11.4497 19.5503Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" }), _jsx("path", { d: "M8.5 8.5L15.5 15.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M15.5 16.5605L11.9805 20.0811C10.9117 21.1498 9.46168 21.7499 7.9502 21.75C4.80231 21.75 2.25 19.1977 2.25 16.0498C2.25012 14.5383 2.85017 13.0883 3.91895 12.0195L7.43848 8.49902L15.5 16.5605Z", fill: "currentColor" }), _jsx("path", { d: "M16.0498 2.25C19.1977 2.25 21.75 4.80231 21.75 7.9502C21.7499 9.46168 21.1498 10.9117 20.0811 11.9805L16.5605 15.5L8.49902 7.43848L12.0195 3.91895C13.0883 2.85017 14.5383 2.25012 16.0498 2.25Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M21.75 7.9502C21.75 4.80231 19.1977 2.25 16.0498 2.25C14.5383 2.25012 13.0883 2.85017 12.0195 3.91895L8.49902 7.43848L16.5605 15.5L20.0811 11.9805C21.1498 10.9117 21.7499 9.46168 21.75 7.9502Z", fill: "currentColor" }), _jsx("path", { d: "M15.5 16.5605L11.9805 20.0811C10.9117 21.1498 9.46168 21.7499 7.9502 21.75C4.80231 21.75 2.25 19.1977 2.25 16.0498C2.25012 14.5383 2.85017 13.0883 3.91895 12.0195L7.43848 8.49902L15.5 16.5605Z", fill: "currentColor" })] })),
};
export const Pill = forwardRef(function Pill({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "pill", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Pill.js.map