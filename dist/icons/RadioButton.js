import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsxs(_Fragment, { children: [_jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }), _jsx("circle", { cx: "12", cy: "12", r: "4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })] })),
    "solid": (_jsxs(_Fragment, { children: [_jsx("path", { d: "M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z", fill: "currentColor" })] })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12Z", fill: "currentColor" }), _jsx("path", { d: "M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z", fill: "currentColor" })] })),
};
export const RadioButton = forwardRef(function RadioButton({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "radio-button", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=RadioButton.js.map