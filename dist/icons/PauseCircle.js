import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2.25" }), _jsx("path", { d: "M9.5 9L9.5 15M14.5 9V15", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" })] })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.5 9C10.5 8.44772 10.0523 8 9.5 8C8.94772 8 8.5 8.44772 8.5 9V15C8.5 15.5523 8.94772 16 9.5 16C10.0523 16 10.5 15.5523 10.5 15V9ZM15.5 9C15.5 8.44772 15.0523 8 14.5 8C13.9477 8 13.5 8.44772 13.5 9V15C13.5 15.5523 13.9477 16 14.5 16C15.0523 16 15.5 15.5523 15.5 15V9Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M9.5 8C10.0523 8 10.5 8.44772 10.5 9V15C10.5 15.5523 10.0523 16 9.5 16C8.94772 16 8.5 15.5523 8.5 15V9C8.5 8.44772 8.94772 8 9.5 8ZM14.5 8C15.0523 8 15.5 8.44772 15.5 9V15C15.5 15.5523 15.0523 16 14.5 16C13.9477 16 13.5 15.5523 13.5 15V9C13.5 8.44772 13.9477 8 14.5 8Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const PauseCircle = forwardRef(function PauseCircle({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "pause-circle", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=PauseCircle.js.map