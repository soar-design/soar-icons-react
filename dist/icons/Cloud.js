import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M1.25 14.5C1.25 11.717 3.22664 9.39643 5.853 8.86454C6.38731 5.95456 8.93585 3.75 12 3.75C15.3858 3.75 18.1428 6.44224 18.2469 9.80273C20.7927 10.1653 22.75 12.3541 22.75 15C22.75 17.8995 20.3995 20.25 17.5 20.25H7C3.82436 20.25 1.25 17.6756 1.25 14.5Z", fill: "currentColor" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { opacity: "0.4", d: "M1.25 14.5C1.25 11.717 3.22664 9.39643 5.853 8.86454C6.38731 5.95456 8.93585 3.75 12 3.75C15.3858 3.75 18.1428 6.44224 18.2469 9.80273C20.7927 10.1653 22.75 12.3541 22.75 15C22.75 17.8995 20.3995 20.25 17.5 20.25H7C3.82436 20.25 1.25 17.6756 1.25 14.5Z", fill: "currentColor" }) })),
};
export const Cloud = forwardRef(function Cloud({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "cloud", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=Cloud.js.map