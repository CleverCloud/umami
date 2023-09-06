"use strict";
exports.id = 3649;
exports.ids = [3649];
exports.modules = {

/***/ 87789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ getFilterValidation)
/* harmony export */ });
/* unused harmony export getDateRangeValidation */
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

function getDateRangeValidation() {
    return {
        startAt: yup.number().integer().required(),
        endAt: yup.number().integer().moreThan(yup.ref("startAt")).required()
    };
}
// ex: /funnel|insights|retention/i
function getFilterValidation(matchRegex) {
    return {
        filter: yup__WEBPACK_IMPORTED_MODULE_0__.string(),
        filterType: yup__WEBPACK_IMPORTED_MODULE_0__.string().matches(matchRegex),
        pageSize: yup__WEBPACK_IMPORTED_MODULE_0__.number().integer().positive().max(200),
        page: yup__WEBPACK_IMPORTED_MODULE_0__.number().integer().positive(),
        orderBy: yup__WEBPACK_IMPORTED_MODULE_0__.string()
    };
}


/***/ }),

/***/ 53649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24531);
/* harmony import */ var lib_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87789);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37451);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_middleware__WEBPACK_IMPORTED_MODULE_0__, queries__WEBPACK_IMPORTED_MODULE_3__]);
([lib_middleware__WEBPACK_IMPORTED_MODULE_0__, queries__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const schema = {
    GET: yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
        id: yup__WEBPACK_IMPORTED_MODULE_4__.string().uuid().required(),
        includeTeams: yup__WEBPACK_IMPORTED_MODULE_4__.boolean(),
        onlyTeams: yup__WEBPACK_IMPORTED_MODULE_4__.boolean(),
        ...(0,lib_yup__WEBPACK_IMPORTED_MODULE_1__/* .getFilterValidation */ .W)(/All|Name|Domain/i)
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    await (0,lib_middleware__WEBPACK_IMPORTED_MODULE_0__/* .useCors */ .mS)(req, res);
    await (0,lib_middleware__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .aC)(req, res);
    req.yup = schema;
    await (0,lib_middleware__WEBPACK_IMPORTED_MODULE_0__/* .useValidate */ ._w)(req, res);
    const { user } = req.auth;
    const { id: userId, page, filter, pageSize, includeTeams, onlyTeams } = req.query;
    if (req.method === "GET") {
        if (!user.isAdmin && user.id !== userId) {
            return (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.unauthorized)(res);
        }
        const websites = await (0,queries__WEBPACK_IMPORTED_MODULE_3__/* .getWebsitesByUserId */ .br)(userId, {
            page,
            filter,
            pageSize: +pageSize || null,
            includeTeams,
            onlyTeams
        });
        return (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.ok)(res, websites);
    }
    return (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.methodNotAllowed)(res);
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;