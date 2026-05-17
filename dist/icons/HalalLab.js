import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M7 3H3V21H7C7 18.2386 9.23858 16 12 16C14.7614 16 17 18.2386 17 21H21C21 16.0294 16.9706 12 12 12C10.1499 12 8.4301 12.5583 7 13.5155V3Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5" }), _jsx("path", { d: "M12 3C12 7.97056 16.0294 12 21 12V8C18.2386 8 16 5.76142 16 3H12Z", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "1.5" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M7 3H3V21H7C7 18.2386 9.23858 16 12 16C14.7614 16 17 18.2386 17 21H21C21 16.0294 16.9706 12 12 12C10.1499 12 8.4301 12.5583 7 13.5155V3Z", fill: "currentColor" }), _jsx("path", { d: "M12 3C12 7.97056 16.0294 12 21 12V8C18.2386 8 16 5.76142 16 3H12Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M7 3H3V21H7C7 18.2386 9.23858 16 12 16C14.7614 16 17 18.2386 17 21H21C21 16.0294 16.9706 12 12 12C10.1499 12 8.4301 12.5583 7 13.5155V3Z", fill: "currentColor" }), _jsx("path", { opacity: "0.4", d: "M12 3C12 7.97056 16.0294 12 21 12V8C18.2386 8 16 5.76142 16 3H12Z", fill: "currentColor" })] })),
};
export const HalalLab = forwardRef(function HalalLab({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "halal-lab", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=HalalLab.js.map