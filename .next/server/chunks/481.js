exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 1970:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "SideNav_menu__NOTB5",
	"item": "SideNav_item__jN5F4",
	"selected": "SideNav_selected__V2_83"
};


/***/ }),

/***/ 60481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SideNav */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SideNav_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1970);
/* harmony import */ var _SideNav_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SideNav_module_css__WEBPACK_IMPORTED_MODULE_5__);






function SideNav({ selectedKey, items, shallow = true, scroll = false, onSelect = ()=>{} }) {
    const { asPath } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        items: items,
        selectedKey: selectedKey,
        className: (_SideNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu),
        onSelect: onSelect,
        children: ({ key, label, url })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SideNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().item), {
                    [(_SideNav_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected)]: asPath.startsWith(url)
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: url,
                    shallow: shallow,
                    scroll: scroll,
                    children: label
                })
            }, key)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNav);


/***/ })

};
;