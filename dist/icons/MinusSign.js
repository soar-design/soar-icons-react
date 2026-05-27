import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M20 12L4 12", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12C2.75 11.3096 3.30964 10.75 4 10.75L20 10.75C20.6904 10.75 21.25 11.3096 21.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { opacity: "0.4", d: "M21.25 12C21.25 12.6904 20.6904 13.25 20 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12C2.75 11.3096 3.30964 10.75 4 10.75L20 10.75C20.6904 10.75 21.25 11.3096 21.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
};
export const MinusSign = forwardRef(function MinusSign({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "minus-sign", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=MinusSign.js.map