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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("../../components");
exports.default = {
    title: "UI/CustomLabel",
    component: components_1.CustomLabel,
    argTypes: {
        color: { control: "select" },
        size: { control: "select" },
        fontColor: { control: "color" },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(components_1.CustomLabel, __assign({}, args))); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    label: "Primary Label",
    size: "normal",
    allCaps: false,
    color: "primary",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: "Allcaps Label",
    size: "normal",
    allCaps: true,
    color: "primary",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Secondary Label",
    size: "normal",
    allCaps: false,
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: "Tertiary Label",
    size: "normal",
    allCaps: false,
    color: "tertiary",
};
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    label: "Custom Color Label",
    size: "normal",
    allCaps: false,
    fontColor: "#679267",
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    label: "Custom Color Label",
    size: "normal",
    allCaps: false,
    fontColor: "white",
    backgroundColor: "#5517ac",
};
