exports.id = 1024;
exports.ids = [1024];
exports.modules = {

/***/ 38158:
/***/ ((module) => {

// Exports
module.exports = {
	"error": "ErrorMessage_error__wwnDI",
	"icon": "ErrorMessage_icon__o7QK6"
};


/***/ }),

/***/ 44110:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "WebsiteDateFilter_dropdown__7s5BK",
	"buttons": "WebsiteDateFilter_buttons__IGusS"
};


/***/ }),

/***/ 66430:
/***/ ((module) => {

// Exports
module.exports = {
	"bar": "MetricsBar_bar__MpaRI",
	"card": "MetricsBar_card__Pt1Tm"
};


/***/ }),

/***/ 68716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ErrorMessage */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38158);
/* harmony import */ var _ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);




function ErrorMessage() {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                className: (_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
                size: "large",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icons.Alert, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: formatMessage(messages.error)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ 98757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteDateFilter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72505);
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44038);
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_isAfter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91534);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DateFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77481);
/* harmony import */ var _WebsiteDateFilter_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44110);
/* harmony import */ var _WebsiteDateFilter_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_WebsiteDateFilter_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_1__, _DateFilter__WEBPACK_IMPORTED_MODULE_5__]);
([components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_1__, _DateFilter__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function WebsiteDateFilter({ websiteId }) {
    const [dateRange, setDateRange] = (0,components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(websiteId);
    const { value, startDate, endDate, selectedUnit } = dateRange;
    const isFutureDate = value !== "all" && selectedUnit && date_fns_isAfter__WEBPACK_IMPORTED_MODULE_2___default()((0,lib_date__WEBPACK_IMPORTED_MODULE_3__/* .incrementDateRange */ .D)(dateRange, -1).startDate, new Date());
    const handleChange = (value)=>{
        setDateRange(value);
    };
    const handleIncrement = (value)=>{
        setDateRange((0,lib_date__WEBPACK_IMPORTED_MODULE_3__/* .incrementDateRange */ .D)(dateRange, value));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_4__.Flexbox, {
        justifyContent: "center",
        gap: 10,
        children: [
            value !== "all" && selectedUnit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_4__.Flexbox, {
                justifyContent: "center",
                className: (_WebsiteDateFilter_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        onClick: ()=>handleIncrement(1),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                            rotate: 90,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.Icons.ChevronDown, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.Button, {
                        onClick: ()=>handleIncrement(-1),
                        disabled: isFutureDate,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                            rotate: 270,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.Icons.ChevronDown, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DateFilter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: (_WebsiteDateFilter_module_css__WEBPACK_IMPORTED_MODULE_6___default().dropdown),
                value: value,
                startDate: startDate,
                endDate: endDate,
                selectedUnit: selectedUnit,
                onChange: handleChange,
                showAllTime: true
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteDateFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MetricsBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68716);
/* harmony import */ var _MetricsBar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66430);
/* harmony import */ var _MetricsBar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MetricsBar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29163);






function MetricsBar({ children, isLoading, isFetched, error }) {
    const [format, setFormat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const formatFunc = format ? (n)=>n >= 0 ? (0,lib_format__WEBPACK_IMPORTED_MODULE_4__/* .formatLongNumber */ .mu)(n) : `-${(0,lib_format__WEBPACK_IMPORTED_MODULE_4__/* .formatLongNumber */ .mu)(Math.abs(n))}` : lib_format__WEBPACK_IMPORTED_MODULE_4__/* .formatNumber */ .uf;
    const handleSetFormat = ()=>{
        setFormat((state)=>!state);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_MetricsBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().bar),
        onClick: handleSetFormat,
        children: [
            isLoading && !isFetched && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
                icon: "dots"
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            (0,react_basics__WEBPACK_IMPORTED_MODULE_2__.cloneChildren)(children, (child)=>{
                return {
                    format: child.props.format || formatFunc
                };
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricsBar);


/***/ })

};
;