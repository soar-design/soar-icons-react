import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
export const Icon = React.forwardRef(function Icon({ size = "1em", color, title, viewBox = "0 0 24 24", children, style, "aria-hidden": ariaHidden, ...rest }, ref) {
    const labelled = Boolean(title);
    return (_jsxs("svg", { ref: ref, xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: viewBox, fill: "none", role: labelled ? "img" : undefined, "aria-hidden": labelled ? undefined : ariaHidden ?? true, style: color ? { color, ...style } : style, ...rest, children: [title ? _jsx("title", { children: title }) : null, children] }));
});
//# sourceMappingURL=Icon.js.map