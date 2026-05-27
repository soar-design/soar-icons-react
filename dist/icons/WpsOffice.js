import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M13.5 14.5L15.5 18.5L22 5.5H15L12 11.5L8.5 18.5L2 5.5H9L10.5 8.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.714" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M1.36201 5.1057C1.49867 4.88459 1.74007 4.75 2 4.75H9C9.28408 4.75 9.54378 4.9105 9.67082 5.16459L12 9.82295L14.3292 5.16459C14.4562 4.9105 14.7159 4.75 15 4.75H22C22.2599 4.75 22.5013 4.88459 22.638 5.1057C22.7746 5.32681 22.7871 5.60292 22.6708 5.83541L16.1708 18.8354C16.0438 19.0895 15.7841 19.25 15.5 19.25C15.2159 19.25 14.9562 19.0895 14.8292 18.8354L12 13.1771L9.17082 18.8354C9.04378 19.0895 8.78408 19.25 8.5 19.25C8.21592 19.25 7.95622 19.0895 7.82918 18.8354L1.32918 5.83541C1.21293 5.60292 1.22536 5.32681 1.36201 5.1057Z", fill: "currentColor" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M12 9.82295L14.3292 5.16459C14.4562 4.9105 14.7159 4.75 15 4.75H22C22.2599 4.75 22.5013 4.88459 22.638 5.1057C22.7746 5.32681 22.7871 5.60292 22.6708 5.83541L16.1708 18.8354C16.0438 19.0895 15.7841 19.25 15.5 19.25C15.2159 19.25 14.9562 19.0895 14.8292 18.8354L12 13.1771V9.82295Z", fill: "currentColor" }), _jsx("path", { d: "M1.36201 5.1057C1.49867 4.88459 1.74007 4.75 2 4.75H9C9.28408 4.75 9.54378 4.9105 9.67082 5.16459L12 9.82295V13.1771L9.17082 18.8354C9.04378 19.0895 8.78408 19.25 8.5 19.25C8.21592 19.25 7.95622 19.0895 7.82918 18.8354L1.32918 5.83541C1.21293 5.60292 1.22536 5.32681 1.36201 5.1057Z", fill: "currentColor" })] })),
};
export const WpsOffice = forwardRef(function WpsOffice({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "wps-office", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=WpsOffice.js.map