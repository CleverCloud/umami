exports.id = 4426;
exports.ids = [4426];
exports.modules = {

/***/ 33718:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "Page_page__xxbhi"
};


/***/ }),

/***/ 10229:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "PageHeader_header__8CvHt",
	"title": "PageHeader_title__m8eFY",
	"actions": "PageHeader_actions__6l2hP"
};


/***/ }),

/***/ 70790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Page */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33718);
/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Page_module_css__WEBPACK_IMPORTED_MODULE_4__);





function Page({ className, error, loading, children }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Banner, {
            variant: "error",
            children: formatMessage(messages.error)
        });
    }
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
            icon: "spinner",
            size: "xl",
            position: "page"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Page_module_css__WEBPACK_IMPORTED_MODULE_4___default().page), className),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 56754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PageHeader */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageHeader_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10229);
/* harmony import */ var _PageHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageHeader_module_css__WEBPACK_IMPORTED_MODULE_3__);




function PageHeader({ title, children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PageHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().header), className),
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_PageHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_PageHeader_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ })

};
;