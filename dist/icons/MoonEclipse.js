import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), _jsx("path", { d: "M10 2.2002C14.5645 3.12674 18 7.16224 18 12.0002C18 16.8381 14.5645 20.8736 10 21.8001", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM20.7948 12C20.7948 7.14245 16.857 3.20459 11.9994 3.20459C15.0794 4.90887 17.2369 8.23023 17.2369 11.9995C17.2369 15.7987 15.1183 19.103 11.998 20.7955C16.8556 20.7955 20.7948 16.8576 20.7948 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M20.7948 11.9986C20.7948 7.14098 16.857 3.20312 11.9994 3.20312C15.0794 4.90741 17.2369 8.22877 17.2369 11.9981C17.2369 15.7972 15.1183 19.1015 11.998 20.794C16.8556 20.794 20.7948 16.8562 20.7948 11.9986Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const MoonEclipse = forwardRef(function MoonEclipse({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "moon-eclipse", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=MoonEclipse.js.map