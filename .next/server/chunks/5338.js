"use strict";
exports.id = 5338;
exports.ids = [5338];
exports.modules = {

/***/ 35338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   h: () => (/* binding */ useApi)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(424);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73865);
/* harmony import */ var store_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30433);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, store_app__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, store_app__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const selector = (state)=>state.shareToken;
function useApi() {
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const shareToken = (0,store_app__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(selector);
    const { get, post, put, del } = (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.useApi)({
        authorization: `Bearer ${(0,lib_client__WEBPACK_IMPORTED_MODULE_3__/* .getClientAuthToken */ .LH)()}`,
        [lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .SHARE_TOKEN_HEADER */ .Wc]: shareToken?.token
    }, basePath);
    return {
        get,
        post,
        put,
        del,
        ..._tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LH: () => (/* binding */ getClientAuthToken),
/* harmony export */   nB: () => (/* binding */ setClientAuthToken),
/* harmony export */   qE: () => (/* binding */ removeClientAuthToken)
/* harmony export */ });
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73865);


function getClientAuthToken() {
    return (0,next_basics__WEBPACK_IMPORTED_MODULE_0__.getItem)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN */ .UA);
}
function setClientAuthToken(token) {
    (0,next_basics__WEBPACK_IMPORTED_MODULE_0__.setItem)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN */ .UA, token);
}
function removeClientAuthToken() {
    (0,next_basics__WEBPACK_IMPORTED_MODULE_0__.removeItem)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN */ .UA);
}


/***/ })

};
;