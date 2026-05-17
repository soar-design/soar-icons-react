import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 13L12 16", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.5" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.5 10.75C9.5 9.36929 10.6193 8.25 12 8.25C13.3807 8.25 14.5 9.36929 14.5 10.75C14.5 11.7752 13.883 12.6562 13 13.042V15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75V13.042C10.117 12.6562 9.5 11.7752 9.5 10.75Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M12 8.25C10.6193 8.25 9.5 9.36929 9.5 10.75C9.5 11.7752 10.117 12.6562 11 13.042L11 15.75C11 16.3023 11.4477 16.75 12 16.75C12.5523 16.75 13 16.3023 13 15.75L13 13.042C13.883 12.6562 14.5 11.7752 14.5 10.75C14.5 9.36929 13.3807 8.25 12 8.25Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const Lock = forwardRef(function Lock({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "lock", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Lock.js.map