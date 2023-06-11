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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_hook_form_1 = require("react-hook-form");
var TextInput = function (_a) {
    var control = _a.control, endAdornment = _a.endAdornment, errors = _a.errors, _b = _a.isForm, isForm = _b === void 0 ? false : _b, label = _a.label, _c = _a.shrink, shrink = _c === void 0 ? true : _c, startAdornment = _a.startAdornment, _d = _a.size, size = _d === void 0 ? "small" : _d, props = __rest(_a, ["control", "endAdornment", "errors", "isForm", "label", "shrink", "startAdornment", "size"]);
    var inputLabelProps = shrink && { shrink: shrink };
    var textInputStyles = __spreadArray([], (Array.isArray(props.sx) ? props.sx : [props.sx]), true);
    var commonTextFieldProps = {
        InputProps: {
            endAdornment: endAdornment,
            startAdornment: startAdornment,
        },
        size: size,
        sx: textInputStyles,
    };
    return isForm ? ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { control: control, name: props.name || "", render: function (_a) {
            var _b;
            var field = _a.field;
            return ((0, jsx_runtime_1.jsx)(material_1.TextField, __assign({ error: !!(errors === null || errors === void 0 ? void 0 : errors[props.name || ""]), helperText: (_b = errors === null || errors === void 0 ? void 0 : errors[props.name || ""]) === null || _b === void 0 ? void 0 : _b.message, InputLabelProps: { shrink: shrink } }, field, props, commonTextFieldProps)));
        } })) : ((0, jsx_runtime_1.jsx)(material_1.TextField, __assign({ InputLabelProps: { shrink: shrink } }, props, commonTextFieldProps)));
};
exports.TextInput = TextInput;
