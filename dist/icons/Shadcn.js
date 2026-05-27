import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M18 12L12 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }), _jsx("path", { d: "M18 4L4 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M17.293 11.293C17.6835 10.9024 18.3165 10.9024 18.707 11.293C19.0975 11.6835 19.0975 12.3165 18.707 12.707L12.707 18.707C12.3165 19.0975 11.6835 19.0975 11.293 18.707C10.9024 18.3165 10.9024 17.6835 11.293 17.293L17.293 11.293Z", fill: "currentColor" }), _jsx("path", { d: "M17.293 3.29295C17.6835 2.90243 18.3165 2.90243 18.707 3.29295C19.0975 3.68348 19.0975 4.31649 18.707 4.70702L4.70702 18.707C4.31649 19.0975 3.68348 19.0975 3.29295 18.707C2.90243 18.3165 2.90243 17.6835 3.29295 17.293L17.293 3.29295Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M17.293 11.293C17.6835 10.9024 18.3165 10.9024 18.707 11.293C19.0975 11.6835 19.0975 12.3165 18.707 12.707L12.707 18.707C12.3165 19.0975 11.6835 19.0975 11.293 18.707C10.9024 18.3165 10.9024 17.6835 11.293 17.293L17.293 11.293Z", fill: "currentColor" }), _jsx("path", { opacity: "0.4", d: "M17.293 3.29295C17.6835 2.90243 18.3165 2.90243 18.707 3.29295C19.0975 3.68348 19.0975 4.31649 18.707 4.70702L4.70702 18.707C4.31649 19.0975 3.68348 19.0975 3.29295 18.707C2.90243 18.3165 2.90243 17.6835 3.29295 17.293L17.293 3.29295Z", fill: "currentColor" })] })),
};
export const Shadcn = forwardRef(function Shadcn({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "shadcn", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Shadcn.js.map