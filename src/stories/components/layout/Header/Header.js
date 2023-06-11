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
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var MobileMenu_1 = require("@/components/display/MobileMenu/MobileMenu");
var headerStyles_1 = require("./headerStyles");
var Header = function (_a) {
    var cartMenuHandler = _a.cartMenuHandler, cartTotalElements = _a.cartTotalElements, notificationMenuHandler = _a.notificationMenuHandler, notificationTotal = _a.notificationTotal, profileMenuHandler = _a.profileMenuHandler;
    var _b = (0, react_1.useState)(null), mobileMoreAnchorEl = _b[0], setMobileMoreAnchorEl = _b[1];
    var handleMobileMenuOpen = function (event) {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    var handleMobileMenuClose = function () {
        setMobileMoreAnchorEl(null);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: headerStyles_1.headerContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.AppBar, __assign({ position: "static", sx: headerStyles_1.headerStyles }, { children: (0, jsx_runtime_1.jsxs)(material_1.Toolbar, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ component: "div", noWrap: true, sx: headerStyles_1.logoStyles, variant: "h6" }, { children: "ZipCode Services" })), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { flexGrow: 1 } }), (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: headerStyles_1.iconContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", onClick: cartMenuHandler, size: "large" }, { children: (0, jsx_runtime_1.jsx)(material_1.Badge, __assign({ badgeContent: cartTotalElements, color: "error" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.ShoppingCartOutlined, {}) })) })), (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", onClick: notificationMenuHandler, size: "large" }, { children: (0, jsx_runtime_1.jsx)(material_1.Badge, __assign({ badgeContent: notificationTotal, color: "error" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.NotificationsNoneOutlined, {}) })) })), (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", edge: "end", onClick: profileMenuHandler, size: "large" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.AccountCircle, {}) }))] })), (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ sx: { display: { xs: "flex", md: "none" } } }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ "aria-haspopup": "true", color: "inherit", onClick: handleMobileMenuOpen, size: "large" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.MoreVert, {}) })) }))] }) })), (0, jsx_runtime_1.jsx)(MobileMenu_1.MobileMenu, { anchorEl: mobileMoreAnchorEl, cartMenuHandler: cartMenuHandler, cartTotalElements: cartTotalElements, notificationMenuHandler: notificationMenuHandler, notificationTotal: notificationTotal, onClose: handleMobileMenuClose, open: Boolean(mobileMoreAnchorEl), profileMenuHandler: profileMenuHandler })] })));
};
exports.Header = Header;
