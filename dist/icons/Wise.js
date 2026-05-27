import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M10.9999 22L19 2H7.00002L9.49994 6.5L4.99994 11H11.9999", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M7.00011 1C6.6458 1 6.31793 1.18749 6.13825 1.49287C5.95856 1.79824 5.95388 2.1759 6.12595 2.48563L8.25956 6.32626L4.29292 10.2929C4.00692 10.5789 3.92137 11.009 4.07615 11.3827C4.23093 11.7564 4.59557 12 5.00003 12H13.923L10.0716 21.6286C9.86644 22.1414 10.1159 22.7234 10.6286 22.9285C11.1414 23.1336 11.7234 22.8842 11.9285 22.3714L19.9286 2.37139C20.0518 2.0633 20.0142 1.71415 19.8282 1.43937C19.6422 1.1646 19.3319 1 19.0001 1H7.00011Z", fill: "currentColor" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M15.7716 10.0718C16.2844 10.2769 16.5338 10.8589 16.3287 11.3717L11.9286 22.3717C11.7235 22.8844 11.1415 23.1339 10.6287 22.9287C10.116 22.7236 9.86655 22.1417 10.0717 21.6289L14.4717 10.6289C14.6768 10.1161 15.2588 9.86668 15.7716 10.0718Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M7.00011 1C6.6458 1 6.31793 1.18749 6.13825 1.49287C5.95856 1.79824 5.95388 2.1759 6.12595 2.48563L8.25956 6.32626L4.29292 10.2929C4.00692 10.5789 3.92137 11.009 4.07615 11.3827C4.23093 11.7564 4.59557 12 5.00003 12H16.0771L19.9286 2.37139C20.0518 2.0633 20.0142 1.71415 19.8282 1.43937C19.6422 1.1646 19.3319 1 19.0001 1H7.00011Z", fill: "currentColor" })] })),
};
export const Wise = forwardRef(function Wise({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "wise", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Wise.js.map