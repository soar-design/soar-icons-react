import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2.25" }), _jsx("path", { d: "M19.5 12C19.5 11.0151 19.306 10.0398 18.9291 9.12987C18.5522 8.21993 17.9997 7.39314 17.3033 6.6967C16.6069 6.00026 15.7801 5.44781 14.8701 5.0709C13.9602 4.69399 12.9849 4.5 12 4.5L12 12H19.5Z", fill: "currentColor" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM19.4833 11.5004C19.5017 11.7759 19.2761 12 19 12H12.5C12.2239 12 12 11.7762 12 11.5V5.00002C12 4.72387 12.2241 4.49828 12.4996 4.51668C13.3136 4.57102 14.1144 4.75788 14.8701 5.07092C15.7801 5.44783 16.6069 6.00028 17.3033 6.69671C17.9997 7.39315 18.5522 8.21995 18.9291 9.12989C19.2421 9.88562 19.429 10.6864 19.4833 11.5004Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M19 12C19.2761 12 19.5017 11.7759 19.4833 11.5004C19.429 10.6864 19.2421 9.88562 18.9291 9.12989C18.5522 8.21995 17.9997 7.39315 17.3033 6.69671C16.6069 6.00028 15.7801 5.44783 14.8701 5.07092C14.1144 4.75788 13.3136 4.57102 12.4996 4.51668C12.2241 4.49828 12 4.72387 12 5.00002L12 11.5C12 11.7762 12.2239 12 12.5 12H19Z", fill: "currentColor" })] })),
};
export const Progress02 = forwardRef(function Progress02({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "progress-02", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Progress02.js.map