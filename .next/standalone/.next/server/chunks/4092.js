exports.id = 4092;
exports.ids = [4092];
exports.modules = {

/***/ 98393:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "ParameterList_list__aRapC",
	"item": "ParameterList_item__g5Hhl",
	"icon": "ParameterList_icon__ujqwE"
};


/***/ }),

/***/ 54092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ParameterList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43756);
/* harmony import */ var components_common_Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98776);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var _ParameterList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98393);
/* harmony import */ var _ParameterList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ParameterList_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_4__]);
components_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ParameterList({ items = [], children, onRemove }) {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMessages */ .y_)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ParameterList_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),
        children: [
            !items.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Empty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                message: formatMessage(labels.none)
            }),
            items.map((item, index)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ParameterList_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
                    children: [
                        typeof children === "function" ? children(item) : item,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TooltipPopup, {
                            className: (_ParameterList_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),
                            label: formatMessage(labels.remove),
                            position: "right",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                onClick: onRemove.bind(null, index),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Close, {})
                            })
                        })
                    ]
                }, index);
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParameterList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;