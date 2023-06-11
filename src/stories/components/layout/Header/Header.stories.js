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
exports.Default = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("./Header");
var meta = {
    component: Header_1.Header,
    title: "ZipCodeService/Layout/Header",
};
exports.default = meta;
var HeaderTemplate = {
    render: function (args) {
        return (0, jsx_runtime_1.jsx)(Header_1.Header, __assign({}, args));
    },
};
exports.Default = __assign(__assign({}, HeaderTemplate), { args: {
        cartMenuHandler: function () { return console.log("Redirect to the cart page"); },
        cartTotalElements: 5,
        notificationMenuHandler: function () { return console.log("Redirect to the notifications page"); },
        notificationTotal: 3,
        profileMenuHandler: function () { return console.log("Redirect to the profile page"); },
    } });
