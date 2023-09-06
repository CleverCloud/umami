"use strict";
(() => {
var exports = {};
exports.id = 4780;
exports.ids = [4780,660];
exports.modules = {

/***/ 74274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28375);
/* harmony import */ var private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38189);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/settings/teams",
        pathname: "/settings/teams",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_settings_teams_index_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export EmptyPlaceholder */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99369);



function EmptyPlaceholder({ message, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 60,
        height: 600,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                size: "xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                size: "lg",
                children: message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyPlaceholder);


/***/ }),

/***/ 38589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TeamAddForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TeamAddForm({ onSave, onClose }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { mutate, error, isLoading } = useMutation((data)=>post("/teams", data));
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSubmit = async (data)=>{
        mutate(data, {
            onSuccess: async ()=>{
                onSave();
                onClose();
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Form, {
        ref: ref,
        onSubmit: handleSubmit,
        error: error,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormRow, {
                label: formatMessage(labels.name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormInput, {
                    name: "name",
                    rules: {
                        required: formatMessage(labels.required)
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                        autoComplete: "off"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {
                        variant: "primary",
                        disabled: isLoading,
                        children: formatMessage(labels.save)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        disabled: isLoading,
                        onClick: onClose,
                        children: formatMessage(labels.cancel)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamAddForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TeamDeleteForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function TeamDeleteForm({ teamId, teamName, onSave, onClose }) {
    const { formatMessage, labels, messages, FormattedMessage } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { del, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { mutate, error, isLoading } = useMutation((data)=>del(`/teams/${teamId}`, data));
    const handleSubmit = async (data)=>{
        mutate(data, {
            onSuccess: async ()=>{
                onSave();
                onClose();
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Form, {
        onSubmit: handleSubmit,
        error: error,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormattedMessage, {
                    ...messages.confirmDelete,
                    values: {
                        target: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: teamName
                        })
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
                        variant: "danger",
                        disabled: isLoading,
                        children: formatMessage(labels.delete)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: onClose,
                        children: formatMessage(labels.cancel)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamDeleteForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TeamJoinForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TeamJoinForm({ onSave, onClose }) {
    const { formatMessage, labels, getMessage } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { mutate, error } = useMutation((data)=>post("/teams/join", data));
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleSubmit = async (data)=>{
        mutate(data, {
            onSuccess: async ()=>{
                onSave();
                onClose();
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Form, {
        ref: ref,
        onSubmit: handleSubmit,
        error: error && getMessage(error),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormRow, {
                label: formatMessage(labels.accessCode),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormInput, {
                    name: "accessCode",
                    rules: {
                        required: formatMessage(labels.required)
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                        autoComplete: "off"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.SubmitButton, {
                        variant: "primary",
                        children: formatMessage(labels.join)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: onClose,
                        children: formatMessage(labels.cancel)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamJoinForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TeamLeaveForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function TeamLeaveForm({ teamId, userId, teamName, onSave, onClose }) {
    const { formatMessage, labels, messages, FormattedMessage } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { del, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { mutate, error, isLoading } = useMutation(()=>del(`/teams/${teamId}/users/${userId}`));
    const handleSubmit = async ()=>{
        mutate({}, {
            onSuccess: async ()=>{
                onSave();
                onClose();
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Form, {
        onSubmit: handleSubmit,
        error: error,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormattedMessage, {
                    ...messages.confirmDelete,
                    values: {
                        target: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: teamName
                        })
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
                        variant: "danger",
                        disabled: isLoading,
                        children: formatMessage(labels.leave)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        onClick: onClose,
                        children: formatMessage(labels.cancel)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamLeaveForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TeamsList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_common_EmptyPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88486);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43756);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70790);
/* harmony import */ var components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56754);
/* harmony import */ var components_pages_settings_teams_TeamAddForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38589);
/* harmony import */ var components_pages_settings_teams_TeamsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80442);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18927);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73865);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _TeamJoinForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69808);
/* harmony import */ var components_hooks_useApiFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pages_settings_teams_TeamAddForm__WEBPACK_IMPORTED_MODULE_5__, components_pages_settings_teams_TeamsTable__WEBPACK_IMPORTED_MODULE_6__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_7__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_9__, _TeamJoinForm__WEBPACK_IMPORTED_MODULE_13__]);
([components_pages_settings_teams_TeamAddForm__WEBPACK_IMPORTED_MODULE_5__, components_pages_settings_teams_TeamsTable__WEBPACK_IMPORTED_MODULE_6__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_7__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_9__, _TeamJoinForm__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function TeamsList() {
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { filter, page, pageSize, handleFilterChange, handlePageChange, handlePageSizeChange } = (0,components_hooks_useApiFilter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0);
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { data, isLoading, error } = useQuery([
        "teams",
        update,
        filter,
        page,
        pageSize
    ], ()=>{
        return get(`/teams`, {
            filter,
            page,
            pageSize
        });
    });
    const hasData = data && data?.data.length !== 0;
    const isFiltered = filter;
    const { showToast } = (0,react_basics__WEBPACK_IMPORTED_MODULE_12__.useToasts)();
    const handleSave = ()=>{
        setUpdate((state)=>state + 1);
        showToast({
            message: formatMessage(messages.saved),
            variant: "success"
        });
    };
    const handleJoin = ()=>{
        setUpdate((state)=>state + 1);
        showToast({
            message: formatMessage(messages.saved),
            variant: "success"
        });
    };
    const handleDelete = ()=>{
        setUpdate((state)=>state + 1);
        showToast({
            message: formatMessage(messages.saved),
            variant: "success"
        });
    };
    const joinButton = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_12__.ModalTrigger, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_12__.Button, {
                variant: "secondary",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_12__.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.AddUser, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_12__.Text, {
                        children: formatMessage(labels.joinTeam)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_12__.Modal, {
                title: formatMessage(labels.joinTeam),
                children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TeamJoinForm__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        onSave: handleJoin,
                        onClose: close
                    })
            })
        ]
    });
    const createButton = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: user.role !== lib_constants__WEBPACK_IMPORTED_MODULE_10__/* .ROLES */ .K$.viewOnly && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_12__.ModalTrigger, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_12__.Button, {
                    variant: "primary",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_12__.Icon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Plus, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_12__.Text, {
                            children: formatMessage(labels.createTeam)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_12__.Modal, {
                    title: formatMessage(labels.createTeam),
                    children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_teams_TeamAddForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            onSave: handleSave,
                            onClose: close
                        })
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        loading: isLoading,
        error: error,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: formatMessage(labels.teams),
                children: (hasData || isFiltered) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_12__.Flexbox, {
                    gap: 10,
                    children: [
                        joinButton,
                        createButton
                    ]
                })
            }),
            (hasData || isFiltered) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_teams_TeamsTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                data: data,
                onDelete: handleDelete,
                onFilterChange: handleFilterChange,
                onPageChange: handlePageChange,
                onPageSizeChange: handlePageSizeChange,
                filterValue: filter
            }),
            !hasData && !isFiltered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_EmptyPlaceholder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                message: formatMessage(messages.noTeams),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_12__.Flexbox, {
                    gap: 10,
                    children: [
                        joinButton,
                        createButton
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TeamsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_common_SettingsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85375);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91998);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18927);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73865);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TeamDeleteForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36858);
/* harmony import */ var _TeamLeaveForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8729);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__, _TeamDeleteForm__WEBPACK_IMPORTED_MODULE_8__, _TeamLeaveForm__WEBPACK_IMPORTED_MODULE_9__]);
([components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__, _TeamDeleteForm__WEBPACK_IMPORTED_MODULE_8__, _TeamLeaveForm__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function TeamsTable({ data = {
    data: []
}, onDelete, filterValue, onFilterChange, onPageChange, onPageSizeChange }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { dir } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const columns = [
        {
            name: "name",
            label: formatMessage(labels.name)
        },
        {
            name: "owner",
            label: formatMessage(labels.owner)
        },
        {
            name: "action",
            label: " "
        }
    ];
    const cellRender = (row, data, key)=>{
        if (key === "owner") {
            return row.teamUser.find(({ role })=>role === lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .ROLES */ .K$.teamOwner)?.user?.username;
        }
        return data[key];
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_SettingsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        data: data,
        columns: columns,
        cellRender: cellRender,
        showSearch: true,
        showPaging: true,
        onFilterChange: onFilterChange,
        onPageChange: onPageChange,
        onPageSizeChange: onPageSizeChange,
        filterValue: filterValue,
        children: (row)=>{
            const { id, teamUser } = row;
            const owner = teamUser.find(({ role })=>role === lib_constants__WEBPACK_IMPORTED_MODULE_5__/* .ROLES */ .K$.teamOwner);
            const showDelete = user.id === owner?.userId;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: `/settings/teams/${id}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.Button, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icon, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icons.Show, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                    children: formatMessage(labels.view)
                                })
                            ]
                        })
                    }),
                    showDelete && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.ModalTrigger, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icon, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icons.Trash, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                        children: formatMessage(labels.delete)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Modal, {
                                title: formatMessage(labels.deleteTeam),
                                children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TeamDeleteForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        teamId: row.id,
                                        teamName: row.name,
                                        onSave: onDelete,
                                        onClose: close
                                    })
                            })
                        ]
                    }),
                    !showDelete && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.ModalTrigger, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icon, {
                                        rotate: dir === "rtl" ? 180 : 0,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icons.ArrowRight, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                        children: formatMessage(labels.leave)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Modal, {
                                title: formatMessage(labels.leaveTeam),
                                children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TeamLeaveForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        teamId: id,
                                        userId: user.id,
                                        teamName: row.name,
                                        onSave: onDelete,
                                        onClose: close
                                    })
                            })
                        ]
                    })
                ]
            });
        }
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38189:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22792);
/* harmony import */ var components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7255);
/* harmony import */ var components_pages_settings_teams_TeamsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46466);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__, components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_teams_TeamsList__WEBPACK_IMPORTED_MODULE_3__]);
([components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__, components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_teams_TeamsList__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ disabled }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    if (disabled) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: `${formatMessage(labels.settings)} - ${formatMessage(labels.teams)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_teams_TeamsList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        })
    });
}
async function getServerSideProps() {
    return {
        props: {
            disabled: !!process.env.CLOUD_MODE
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("date-fns/addDays");

/***/ }),

/***/ 97309:
/***/ ((module) => {

module.exports = require("date-fns/addHours");

/***/ }),

/***/ 45569:
/***/ ((module) => {

module.exports = require("date-fns/addMinutes");

/***/ }),

/***/ 54538:
/***/ ((module) => {

module.exports = require("date-fns/addMonths");

/***/ }),

/***/ 74403:
/***/ ((module) => {

module.exports = require("date-fns/addYears");

/***/ }),

/***/ 14521:
/***/ ((module) => {

module.exports = require("date-fns/differenceInCalendarDays");

/***/ }),

/***/ 61829:
/***/ ((module) => {

module.exports = require("date-fns/differenceInCalendarMonths");

/***/ }),

/***/ 96016:
/***/ ((module) => {

module.exports = require("date-fns/differenceInCalendarYears");

/***/ }),

/***/ 40581:
/***/ ((module) => {

module.exports = require("date-fns/differenceInHours");

/***/ }),

/***/ 69472:
/***/ ((module) => {

module.exports = require("date-fns/differenceInMinutes");

/***/ }),

/***/ 40557:
/***/ ((module) => {

module.exports = require("date-fns/endOfDay");

/***/ }),

/***/ 71463:
/***/ ((module) => {

module.exports = require("date-fns/endOfHour");

/***/ }),

/***/ 96924:
/***/ ((module) => {

module.exports = require("date-fns/endOfMonth");

/***/ }),

/***/ 63864:
/***/ ((module) => {

module.exports = require("date-fns/endOfWeek");

/***/ }),

/***/ 55018:
/***/ ((module) => {

module.exports = require("date-fns/endOfYear");

/***/ }),

/***/ 14384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 35646:
/***/ ((module) => {

module.exports = require("date-fns/isDate");

/***/ }),

/***/ 45564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 90986:
/***/ ((module) => {

module.exports = require("date-fns/max");

/***/ }),

/***/ 78542:
/***/ ((module) => {

module.exports = require("date-fns/min");

/***/ }),

/***/ 7585:
/***/ ((module) => {

module.exports = require("date-fns/startOfDay");

/***/ }),

/***/ 26538:
/***/ ((module) => {

module.exports = require("date-fns/startOfHour");

/***/ }),

/***/ 58535:
/***/ ((module) => {

module.exports = require("date-fns/startOfMinute");

/***/ }),

/***/ 45914:
/***/ ((module) => {

module.exports = require("date-fns/startOfMonth");

/***/ }),

/***/ 2659:
/***/ ((module) => {

module.exports = require("date-fns/startOfWeek");

/***/ }),

/***/ 92559:
/***/ ((module) => {

module.exports = require("date-fns/startOfYear");

/***/ }),

/***/ 95358:
/***/ ((module) => {

module.exports = require("date-fns/subDays");

/***/ }),

/***/ 97863:
/***/ ((module) => {

module.exports = require("date-fns/subHours");

/***/ }),

/***/ 61360:
/***/ ((module) => {

module.exports = require("date-fns/subMonths");

/***/ }),

/***/ 62695:
/***/ ((module) => {

module.exports = require("date-fns/subWeeks");

/***/ }),

/***/ 75809:
/***/ ((module) => {

module.exports = require("date-fns/subYears");

/***/ }),

/***/ 68362:
/***/ ((module) => {

module.exports = require("moment-timezone");

/***/ }),

/***/ 68884:
/***/ ((module) => {

module.exports = require("next-basics");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 33100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 47554:
/***/ ((module) => {

module.exports = require("react-basics");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 13126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 10912:
/***/ ((module) => {

module.exports = require("semver");

/***/ }),

/***/ 49752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 63670:
/***/ ((module) => {

module.exports = import("chartjs-adapter-date-fns");;

/***/ }),

/***/ 79168:
/***/ ((module) => {

module.exports = import("colord");;

/***/ }),

/***/ 29810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 46812:
/***/ ((module) => {

module.exports = import("react-error-boundary");;

/***/ }),

/***/ 94310:
/***/ ((module) => {

module.exports = import("react-spring");;

/***/ }),

/***/ 66912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,5121,1664,8375,5338,9369,263,2792,4426,233,481,3822,7255], () => (__webpack_exec__(74274)));
module.exports = __webpack_exports__;

})();