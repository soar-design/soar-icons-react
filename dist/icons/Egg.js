import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 22C16.4183 22 20 19 20 14C20 9 16.4183 2 12 2C7.58172 2 4 9 4 14C4 19 7.58172 22 12 22Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M18.1739 20.4185C19.7826 18.8905 20.7501 16.688 20.7501 13.9995C20.7501 11.3459 19.8076 8.21214 18.297 5.73389C16.8089 3.2928 14.6131 1.24951 12.0001 1.24951C9.38708 1.24951 7.19131 3.2928 5.70322 5.73389C4.19256 8.21214 3.25009 11.3459 3.25009 13.9995C3.25009 16.688 4.21763 18.8905 5.82626 20.4185C7.42905 21.9407 9.62151 22.7495 12.0001 22.7495C14.3787 22.7495 16.5711 21.9407 18.1739 20.4185Z", fill: "currentColor" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { opacity: "0.4", d: "M18.1739 20.4185C19.7826 18.8905 20.7501 16.688 20.7501 13.9995C20.7501 11.3459 19.8076 8.21214 18.297 5.73389C16.8089 3.2928 14.6131 1.24951 12.0001 1.24951C9.38708 1.24951 7.19131 3.2928 5.70322 5.73389C4.19256 8.21214 3.25009 11.3459 3.25009 13.9995C3.25009 16.688 4.21763 18.8905 5.82626 20.4185C7.42905 21.9407 9.62151 22.7495 12.0001 22.7495C14.3787 22.7495 16.5711 21.9407 18.1739 20.4185Z", fill: "currentColor" }) })),
};
export const Egg = forwardRef(function Egg({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "egg", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Egg.js.map