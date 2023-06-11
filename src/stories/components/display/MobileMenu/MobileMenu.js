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
exports.MobileMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var MobileMenu = function (_a) {
    var anchorEl = _a.anchorEl, cartMenuHandler = _a.cartMenuHandler, cartTotalElements = _a.cartTotalElements, notificationMenuHandler = _a.notificationMenuHandler, notificationTotal = _a.notificationTotal, onClose = _a.onClose, open = _a.open, profileMenuHandler = _a.profileMenuHandler;
    return ((0, jsx_runtime_1.jsxs)(material_1.Menu, __assign({ anchorEl: anchorEl, anchorOrigin: {
            vertical: "top",
            horizontal: "right",
        }, keepMounted: true, transformOrigin: {
            vertical: "top",
            horizontal: "right",
        }, open: open, onClose: onClose }, { children: [(0, jsx_runtime_1.jsxs)(material_1.MenuItem, __assign({ onClick: cartMenuHandler }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", size: "large" }, { children: (0, jsx_runtime_1.jsx)(material_1.Badge, __assign({ badgeContent: cartTotalElements, color: "error" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.ShoppingCartOutlined, {}) })) })), (0, jsx_runtime_1.jsx)("p", { children: "Messages" })] })), (0, jsx_runtime_1.jsxs)(material_1.MenuItem, __assign({ onClick: notificationMenuHandler }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", size: "large" }, { children: (0, jsx_runtime_1.jsx)(material_1.Badge, __assign({ badgeContent: notificationTotal, color: "error" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.NotificationsNoneOutlined, {}) })) })), (0, jsx_runtime_1.jsx)("p", { children: "Notifications" })] })), (0, jsx_runtime_1.jsxs)(material_1.MenuItem, __assign({ onClick: profileMenuHandler }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", size: "large" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.AccountCircle, {}) })), (0, jsx_runtime_1.jsx)("p", { children: "Profile" })] }))] })));
};
exports.MobileMenu = MobileMenu;
