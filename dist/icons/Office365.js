import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M4 18V6L14.5 2L20 4V20L14.5 22L4 18ZM4 18L14 18.5V6L8.5 7.5V15.5L4 18Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M14.7563 1.29515C14.5871 1.23361 14.4013 1.23502 14.233 1.29913L3.733 5.29913C3.44219 5.40992 3.25 5.6888 3.25 6V18C3.25 18.3112 3.44219 18.5901 3.733 18.7009L14.233 22.7009C14.4013 22.765 14.5871 22.7664 14.7563 22.7048L20.2563 20.7048C20.5527 20.5971 20.75 20.3154 20.75 20V4C20.75 3.68462 20.5527 3.40293 20.2563 3.29516L14.7563 1.29515ZM4 18L14 18.5V6L8.5 7.5V15.5L4 18Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M14.7563 1.29515C14.5871 1.23361 14.4013 1.23502 14.233 1.29913L3.733 5.29913C3.44219 5.40992 3.25 5.6888 3.25 6V18C3.25 18.3112 3.44219 18.5901 3.733 18.7009L14.233 22.7009C14.4013 22.765 14.5871 22.7664 14.7563 22.7048L20.2563 20.7048C20.5527 20.5971 20.75 20.3154 20.75 20V4C20.75 3.68462 20.5527 3.40293 20.2563 3.29516L14.7563 1.29515Z", fill: "currentColor" }), _jsx("path", { d: "M4 18L14 18.5V6L8.5 7.5V15.5L4 18Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const Office365 = forwardRef(function Office365({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "office-365", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Office365.js.map