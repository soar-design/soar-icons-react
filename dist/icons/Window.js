import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Icon } from "../Icon.js";
const VARIANTS = {
    "line": { viewBox: "0 0 24 24", body: (_jsxs(_Fragment, { children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "3", stroke: "currentColor", strokeWidth: "1.714", strokeDasharray: "2 2" }), _jsx("text", { x: "12", y: "13", "text-anchor": "middle", "font-family": "-apple-system, system-ui, sans-serif", "font-size": "3", fill: "currentColor", children: "Window" })] })) },
    "solid": { viewBox: "0 0 24 24", body: (_jsxs(_Fragment, { children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "3", stroke: "currentColor", strokeWidth: "1.714", strokeDasharray: "2 2" }), _jsx("text", { x: "12", y: "13", "text-anchor": "middle", "font-family": "-apple-system, system-ui, sans-serif", "font-size": "3", fill: "currentColor", children: "Window" })] })) },
    "remix": { viewBox: "0 0 24 24", body: (_jsxs(_Fragment, { children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "3", stroke: "currentColor", strokeWidth: "1.714", strokeDasharray: "2 2" }), _jsx("text", { x: "12", y: "13", "text-anchor": "middle", "font-family": "-apple-system, system-ui, sans-serif", "font-size": "3", fill: "currentColor", children: "Window" })] })) },
    "duo": { viewBox: "0 0 24 24", body: (_jsxs(_Fragment, { children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "3", stroke: "currentColor", strokeWidth: "1.714", strokeDasharray: "2 2" }), _jsx("text", { x: "12", y: "13", "text-anchor": "middle", "font-family": "-apple-system, system-ui, sans-serif", "font-size": "3", fill: "currentColor", children: "Window" })] })) },
    "flat": { viewBox: "0 0 24 24", body: (_jsxs(_Fragment, { children: [_jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "3", stroke: "currentColor", strokeWidth: "1.714", strokeDasharray: "2 2" }), _jsx("text", { x: "12", y: "13", "text-anchor": "middle", "font-family": "-apple-system, system-ui, sans-serif", "font-size": "3", fill: "currentColor", children: "Window" })] })) },
};
export const Window = React.forwardRef(function Window({ variant = "line", ...rest }, ref) {
    const v = VARIANTS[variant];
    return (_jsx(Icon, { ref: ref, viewBox: v.viewBox, "data-soar-icon": "window", "data-soar-variant": variant, ...rest, children: v.body }));
});
//# sourceMappingURL=Window.js.map