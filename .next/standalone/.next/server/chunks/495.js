exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 14360:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "MetricCard_card__NX9Nc",
	"value": "MetricCard_value__m2Mhp",
	"label": "MetricCard_label__PQabu",
	"change": "MetricCard_change__DYILr",
	"positive": "MetricCard_positive__9P20B",
	"negative": "MetricCard_negative__eaMcO",
	"plusSign": "MetricCard_plusSign__T6tMd"
};


/***/ }),

/***/ 20495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MetricCard */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94310);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29163);
/* harmony import */ var _MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14360);
/* harmony import */ var _MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_spring__WEBPACK_IMPORTED_MODULE_2__]);
react_spring__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MetricCard = ({ value = 0, change = 0, label, reverseColors = false, format = lib_format__WEBPACK_IMPORTED_MODULE_3__/* .formatNumber */ .uf, hideComparison = false, className })=>{
    const props = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({
        x: Number(value) || 0,
        from: {
            x: 0
        }
    });
    const changeProps = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({
        x: Number(change) || 0,
        from: {
            x: 0
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().card), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {
                className: (_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().value),
                children: props.x.to((x)=>format(x))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),
                children: [
                    label,
                    ~~change !== 0 && !hideComparison && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.span, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().change), {
                            [(_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().positive)]: change * (reverseColors ? -1 : 1) >= 0,
                            [(_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().negative)]: change * (reverseColors ? -1 : 1) < 0,
                            [(_MetricCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().plusSign)]: change > 0
                        }),
                        children: changeProps.x.to((x)=>format(x))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;