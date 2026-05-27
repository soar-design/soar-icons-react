import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M5 14L8.5 17.5L19 6.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M19.6905 5.77665C20.09 6.15799 20.1047 6.79098 19.7234 7.19048L9.22336 18.1905C9.03745 18.3852 8.78086 18.4968 8.51163 18.4999C8.2424 18.5031 7.98328 18.3975 7.79289 18.2071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L8.48336 16.0692L18.2766 5.80953C18.658 5.41003 19.291 5.39531 19.6905 5.77665Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.20711 16.7929C9.59763 17.1834 9.59763 17.8166 9.20711 18.2071C8.81658 18.5976 8.18342 18.5976 7.79289 18.2071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), _jsx("path", { d: "M19.6905 5.77665C20.09 6.15799 20.1047 6.79098 19.7234 7.19048L9.22336 18.1905C8.84202 18.59 8.20902 18.6047 7.80953 18.2234C7.41003 17.842 7.39531 17.209 7.77665 16.8095L18.2766 5.80953C18.658 5.41003 19.291 5.39531 19.6905 5.77665Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })] })),
};
export const Tick02 = forwardRef(function Tick02({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "tick-02", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Tick02.js.map