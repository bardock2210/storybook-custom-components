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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = exports.Default = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var Select_1 = require("./Select");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var Yup = __importStar(require("yup"));
var meta = {
    component: Select_1.Select,
    title: "ZipCodeService/Form/Elements/Select",
};
exports.default = meta;
var FormSchema = Yup.object().shape({
    option: Yup.string()
        .oneOf(["1", "2", "3"], "Debes seleccionar una opcion.")
        .required("Debes seleccionar una opcion."),
});
var SELECT_OPTIONS = [
    { description: "Option 1", value: "1" },
    { description: "Option 2", value: "2" },
    { description: "Option 3", value: "3" },
];
var SelectFormTemplate = {
    render: function (args) {
        var _a = (0, react_hook_form_1.useForm)({
            defaultValues: { option: "none" },
            resolver: (0, yup_1.yupResolver)(FormSchema),
        }), control = _a.control, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
        var onSubmit = function (data) {
            console.log({ data: data });
        };
        return ((0, jsx_runtime_1.jsxs)("form", __assign({ noValidate: true, onSubmit: handleSubmit(onSubmit) }, { children: [(0, jsx_runtime_1.jsx)(Select_1.Select, __assign({}, args, { control: control, errors: errors })), (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ fullWidth: true, sx: { mt: "10px" }, type: "submit", variant: "contained" }, { children: "Submit form" }))] })));
    },
};
exports.Default = {
    args: {
        defaultValue: "",
        label: "Options",
        name: "option",
        options: SELECT_OPTIONS,
        placeholder: "Select an option",
        size: "small",
    },
};
exports.FormField = __assign(__assign({}, SelectFormTemplate), { args: {
        isForm: true,
        label: "Options",
        name: "option",
        options: SELECT_OPTIONS,
        placeholder: "Select an option",
        required: true,
        size: "small",
    } });
