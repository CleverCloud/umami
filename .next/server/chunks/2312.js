"use strict";
exports.id = 2312;
exports.ids = [2312];
exports.modules = {

/***/ 81446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DateRangeSetting */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_input_DateFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77481);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72505);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73865);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_input_DateFilter__WEBPACK_IMPORTED_MODULE_1__, components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_3__]);
([components_input_DateFilter__WEBPACK_IMPORTED_MODULE_1__, components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function DateRangeSetting() {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const [dateRange, setDateRange] = (0,components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { value } = dateRange;
    const handleChange = (value)=>setDateRange(value);
    const handleReset = ()=>setDateRange(lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_DATE_RANGE */ .fI);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
        gap: 10,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_DateFilter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                value: value,
                startDate: dateRange.startDate,
                endDate: dateRange.endDate,
                onChange: handleChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: handleReset,
                children: formatMessage(labels.reset)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRangeSetting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TimezoneSetting */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var timezone_support__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38523);
/* harmony import */ var timezone_support__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timezone_support__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useTimezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89356);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91534);






function TimezoneSetting() {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [timezone, saveTimezone] = (0,components_hooks_useTimezone__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const options = (0,timezone_support__WEBPACK_IMPORTED_MODULE_2__.listTimeZones)();
    const handleReset = ()=>saveTimezone((0,lib_date__WEBPACK_IMPORTED_MODULE_5__/* .getTimezone */ .EP)());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        gap: 10,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                items: options,
                value: timezone,
                onChange: saveTimezone,
                style: {
                    flex: 1
                },
                menuProps: {
                    style: {
                        height: 300
                    }
                },
                children: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                        children: item
                    }, item)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: handleReset,
                children: formatMessage(labels.reset)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimezoneSetting);


/***/ })

};
;