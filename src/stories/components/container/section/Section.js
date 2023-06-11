"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Item = (0, styles_1.styled)(Paper_1.default)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff" }, theme.typography.body2), { padding: theme.spacing(1), textAlign: "center", color: theme.palette.text.secondary }));
});
var Section = function () {
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ sx: { flexGrow: 1 } }, { children: (0, jsx_runtime_1.jsxs)(Grid_1.default, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: 8 }, { children: (0, jsx_runtime_1.jsx)(Item, { children: "xs=8" }) })), (0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: 4 }, { children: (0, jsx_runtime_1.jsx)(Item, { children: "xs=4" }) })), (0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: 4 }, { children: (0, jsx_runtime_1.jsx)(Item, { children: "xs=4" }) })), (0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: 8 }, { children: (0, jsx_runtime_1.jsx)(Item, { children: "xs=8" }) }))] })) })));
};
exports.Section = Section;
