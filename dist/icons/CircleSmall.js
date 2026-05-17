import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("circle", { cx: "12", cy: "12", r: "7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M12.0001 19.75C16.2803 19.75 19.7501 16.2802 19.7501 12C19.7501 7.71979 16.2803 4.25 12.0001 4.25C7.71992 4.25 4.25012 7.71979 4.25012 12C4.25012 16.2802 7.71992 19.75 12.0001 19.75Z", fill: "currentColor" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { opacity: "0.4", d: "M12.0001 19.75C16.2803 19.75 19.7501 16.2802 19.7501 12C19.7501 7.71979 16.2803 4.25 12.0001 4.25C7.71992 4.25 4.25012 7.71979 4.25012 12C4.25012 16.2802 7.71992 19.75 12.0001 19.75Z", fill: "currentColor" }) })),
};
export const CircleSmall = forwardRef(function CircleSmall({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "circle-small", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=CircleSmall.js.map