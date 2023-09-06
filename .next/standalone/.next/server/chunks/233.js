exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 70777:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Pager_container__a73u9",
	"text": "Pager_text___6T_4"
};


/***/ }),

/***/ 233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Pager */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Pager_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70777);
/* harmony import */ var _Pager_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Pager_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);




function Pager({ page, pageSize, count, onPageChange }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const maxPage = Math.ceil(count / pageSize);
    const lastPage = page === maxPage;
    const firstPage = page === 1;
    if (count === 0) {
        return null;
    }
    const handlePageChange = (value)=>{
        const nextPage = page + value;
        if (nextPage > 0 && nextPage <= maxPage) {
            onPageChange(nextPage);
        }
    };
    if (maxPage === 1) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        justifyContent: "center",
        className: (_Pager_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: ()=>handlePageChange(-1),
                disabled: firstPage,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    rotate: 90,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icons.ChevronDown, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
                alignItems: "center",
                className: (_Pager_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
                children: formatMessage(labels.pageOf, {
                    current: page,
                    total: maxPage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: ()=>handlePageChange(1),
                disabled: lastPage,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    rotate: 270,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icons.ChevronDown, {})
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pager);


/***/ })

};
;