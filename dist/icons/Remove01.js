import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M19.002 12L5.00001 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M5.00003 11L19.002 11C19.5543 11 20.002 11.4477 20.002 12C20.002 12.5523 19.5543 13 19.002 13L5.00003 13L4.89749 12.9951C4.39335 12.9438 4.00003 12.5177 4.00003 12C4.00003 11.4823 4.39335 11.0562 4.89749 11.0049L5.00003 11Z", fill: "currentColor" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { opacity: "0.4", d: "M5.00003 11L19.002 11C19.5543 11 20.002 11.4477 20.002 12C20.002 12.5523 19.5543 13 19.002 13L5.00003 13L4.89749 12.9951C4.39335 12.9438 4.00003 12.5177 4.00003 12C4.00003 11.4823 4.39335 11.0562 4.89749 11.0049L5.00003 11Z", fill: "currentColor" }) })),
};
export const Remove01 = forwardRef(function Remove01({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "remove-01", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Remove01.js.map