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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_hook_form_1 = require("react-hook-form");
var FormControWrapper = function (_a) {
    var children = _a.children, error = _a.error, formLabel = _a.formLabel, fullWidth = _a.fullWidth, required = _a.required, size = _a.size, _b = _a.wrapChild, wrapChild = _b === void 0 ? false : _b;
    return wrapChild ? ((0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ error: error, fullWidth: fullWidth, required: required, size: size }, { children: [(0, jsx_runtime_1.jsx)(material_1.FormLabel, { children: formLabel || "" }), children] }))) : (children);
};
var renderPlaceHolder = function (placeholder) { return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ disabled: true, value: "none" }, { children: placeholder }))); };
var getOptions = function (defaultValue, options) {
    return options.map(function (_a) {
        var description = _a.description, value = _a.value;
        return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ selected: Boolean(defaultValue === value), value: value }, { children: description }), value));
    });
};
var Select = function (_a) {
    var control = _a.control, defaultValue = _a.defaultValue, errors = _a.errors, isForm = _a.isForm, label = _a.label, name = _a.name, options = _a.options, placeholder = _a.placeholder, props = __rest(_a, ["control", "defaultValue", "errors", "isForm", "label", "name", "options", "placeholder"]);
    return ((0, jsx_runtime_1.jsx)(FormControWrapper, __assign({ error: Boolean(errors === null || errors === void 0 ? void 0 : errors[name || ""]), formLabel: label, fullWidth: true, required: props.required, size: props.size, wrapChild: label ? true : false }, { children: isForm ? ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { control: control, name: name || "", render: function (_a) {
                var _b;
                var _c = _a.field, value = _c.value, field = __rest(_c, ["value"]);
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Select, __assign({ value: placeholder && value === undefined
                                ? "none"
                                : defaultValue && value === undefined
                                    ? defaultValue
                                    : value }, field, props, { children: [placeholder && renderPlaceHolder(placeholder), getOptions(defaultValue, options)] })), Boolean(errors === null || errors === void 0 ? void 0 : errors[name || ""]) && ((0, jsx_runtime_1.jsx)(material_1.FormHelperText, { children: "".concat((_b = errors === null || errors === void 0 ? void 0 : errors[name || ""]) === null || _b === void 0 ? void 0 : _b.message) }))] }));
            } })) : ((0, jsx_runtime_1.jsxs)(material_1.Select, __assign({}, props, { defaultValue: placeholder && "none" }, { children: [placeholder && renderPlaceHolder(placeholder), getOptions(defaultValue, options)] }))) })));
};
exports.Select = Select;
