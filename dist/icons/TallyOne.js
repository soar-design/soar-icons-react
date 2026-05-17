import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M12 4V20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M11.0001 20V4C11.0001 3.44772 11.4478 3 12.0001 3C12.5524 3 13.0001 3.44772 13.0001 4V20C13.0001 20.5523 12.5524 21 12.0001 21C11.4478 21 11.0001 20.5523 11.0001 20Z", fill: "currentColor" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { d: "M11.0001 20V4C11.0001 3.44772 11.4478 3 12.0001 3C12.5524 3 13.0001 3.44772 13.0001 4V20C13.0001 20.5523 12.5524 21 12.0001 21C11.4478 21 11.0001 20.5523 11.0001 20Z", fill: "currentColor" }) })),
};
export const TallyOne = forwardRef(function TallyOne({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "tally-one", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=TallyOne.js.map