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
var MobileMenu_1 = require("./MobileMenu");
var meta = {
    component: MobileMenu_1.MobileMenu,
    title: "ZipCodeService/Display/MobileMenu",
};
exports.default = meta;
var MobileMenuTemplate = {
    render: function (args) {
        var openMenuHandler = function () {
            console.log("show inner menu");
        };
        return (0, jsx_runtime_1.jsx)(MobileMenu_1.MobileMenu, __assign({}, args));
    },
};
exports.Default = __assign(__assign({}, MobileMenuTemplate), { args: {
        cartTotalElements: 4,
        notificationTotal: 5,
        open: true,
    } });
