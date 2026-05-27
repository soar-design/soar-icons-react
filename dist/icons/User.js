import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }), _jsx("path", { d: "M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M6.75 8C6.75 5.1005 9.1005 2.75 12 2.75C14.8995 2.75 17.25 5.1005 17.25 8C17.25 10.8995 14.8995 13.25 12 13.25C9.1005 13.25 6.75 10.8995 6.75 8Z", fill: "currentColor" }), _jsx("path", { d: "M4.25 20.5C4.25 16.2198 7.71979 12.75 12 12.75C16.2802 12.75 19.75 16.2198 19.75 20.5C19.75 20.9142 19.4142 21.25 19 21.25H5C4.58579 21.25 4.25 20.9142 4.25 20.5Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M6.75 8C6.75 5.1005 9.1005 2.75 12 2.75C14.8995 2.75 17.25 5.1005 17.25 8C17.25 10.8995 14.8995 13.25 12 13.25C9.1005 13.25 6.75 10.8995 6.75 8Z", fill: "currentColor" }), _jsx("path", { opacity: "0.4", d: "M4.25 20.5C4.25 16.2198 7.71979 12.75 12 12.75C16.2802 12.75 19.75 16.2198 19.75 20.5C19.75 20.9142 19.4142 21.25 19 21.25H5C4.58579 21.25 4.25 20.9142 4.25 20.5Z", fill: "currentColor" })] })),
};
export const User = forwardRef(function User({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "user", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=User.js.map