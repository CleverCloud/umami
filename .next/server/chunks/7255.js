exports.id = 7255;
exports.ids = [7255];
exports.modules = {

/***/ 25545:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "SettingsLayout_menu__7reR6",
	"content": "SettingsLayout_content__hSAEC"
};


/***/ }),

/***/ 7255:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SettingsLayout */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60481);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18927);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
/* harmony import */ var _SettingsLayout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25545);
/* harmony import */ var _SettingsLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SettingsLayout_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__]);
components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SettingsLayout({ children }) {
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const cloudMode = Boolean(process.env.cloudMode);
    const items = [
        {
            key: "websites",
            label: formatMessage(labels.websites),
            url: "/settings/websites"
        },
        {
            key: "teams",
            label: formatMessage(labels.teams),
            url: "/settings/teams"
        },
        user.isAdmin && {
            key: "users",
            label: formatMessage(labels.users),
            url: "/settings/users"
        },
        {
            key: "profile",
            label: formatMessage(labels.profile),
            url: "/settings/profile"
        }
    ].filter((n)=>n);
    const getKey = ()=>items.find(({ url })=>pathname === url)?.key;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Row, {
        children: [
            !cloudMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Column, {
                className: (_SettingsLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),
                defaultSize: 12,
                md: 4,
                lg: 3,
                xl: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SideNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    items: items,
                    shallow: true,
                    selectedKey: getKey()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Column, {
                className: (_SettingsLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
                defaultSize: 12,
                md: 8,
                lg: 9,
                xl: 10,
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;