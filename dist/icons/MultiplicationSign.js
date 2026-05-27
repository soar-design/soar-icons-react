import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Icon } from "../Icon.js";
const STYLES = {
    "line": (_jsx(_Fragment, { children: _jsx("path", { d: "M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.25" }) })),
    "solid": (_jsx(_Fragment, { children: _jsx("path", { d: "M5.11612 5.11612C5.60427 4.62796 6.39573 4.62796 6.88388 5.11612L12 10.2322L17.1161 5.11612C17.6043 4.62796 18.3957 4.62796 18.8839 5.11612C19.372 5.60427 19.372 6.39573 18.8839 6.88388L13.7678 12L18.8839 17.1161C19.372 17.6043 19.372 18.3957 18.8839 18.8839C18.3957 19.372 17.6043 19.372 17.1161 18.8839L12 13.7678L6.88388 18.8839C6.39573 19.372 5.60427 19.372 5.11612 18.8839C4.62796 18.3957 4.62796 17.6043 5.11612 17.1161L10.2322 12L5.11612 6.88388C4.62796 6.39573 4.62796 5.60427 5.11612 5.11612Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }) })),
    "bulk": (_jsxs(_Fragment, { children: [_jsx("path", { opacity: "0.4", d: "M5.11612 17.1161L17.1161 5.11612C17.6043 4.62796 18.3957 4.62796 18.8839 5.11612C19.372 5.60427 19.372 6.39573 18.8839 6.88388L6.88388 18.8839C6.39573 19.372 5.60427 19.372 5.11612 18.8839C4.62796 18.3957 4.62796 17.6043 5.11612 17.1161Z", fill: "currentColor" }), _jsx("path", { d: "M5.11612 5.11612C5.60427 4.62796 6.39573 4.62796 6.88388 5.11612L18.8839 17.1161C19.372 17.6043 19.372 18.3957 18.8839 18.8839C18.3957 19.372 17.6043 19.372 17.1161 18.8839L5.11612 6.88388C4.62796 6.39573 4.62796 5.60427 5.11612 5.11612Z", fill: "currentColor" })] })),
};
export const MultiplicationSign = forwardRef(function MultiplicationSign({ style = "line", ...rest }, ref) {
    return (_jsx(Icon, { ref: ref, viewBox: "0 0 24 24", "data-soar-icon": "multiplication-sign", "data-soar-style": style, ...rest, children: STYLES[style] }));
});
//# sourceMappingURL=MultiplicationSign.js.map