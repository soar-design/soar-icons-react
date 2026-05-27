import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z", stroke: "currentColor", strokeWidth: "1.714" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M9.07766 2.42838C10.7321 0.857205 13.2679 0.857205 14.9223 2.42838C16.2023 3.64397 17.7707 5.31956 19.0237 7.24155C20.2711 9.15491 21.25 11.3797 21.25 13.678C21.25 18.1459 17.7426 22.75 12 22.75C6.25744 22.75 2.75 18.1459 2.75 13.678C2.75 11.3797 3.72892 9.1549 4.97628 7.24155C6.22927 5.31956 7.79766 3.64397 9.07766 2.42838Z", fill: "currentColor" }) })),
    "bulk": (_jsx(_Fragment, { children: _jsx("path", { opacity: "0.4", d: "M9.07766 2.42838C10.7321 0.857205 13.2679 0.857205 14.9223 2.42838C16.2023 3.64397 17.7707 5.31956 19.0237 7.24155C20.2711 9.15491 21.25 11.3797 21.25 13.678C21.25 18.1459 17.7426 22.75 12 22.75C6.25744 22.75 2.75 18.1459 2.75 13.678C2.75 11.3797 3.72892 9.1549 4.97628 7.24155C6.22927 5.31956 7.79766 3.64397 9.07766 2.42838Z", fill: "currentColor" }) })),
};
export const RainDrop = forwardRef(function RainDrop({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "rain-drop", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=RainDrop.js.map