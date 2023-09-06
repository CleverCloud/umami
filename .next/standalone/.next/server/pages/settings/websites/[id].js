"use strict";
(() => {
var exports = {};
exports.id = 6366;
exports.ids = [6366,660];
exports.modules = {

/***/ 74066:
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
/* harmony import */ var private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/settings/websites/[id]",
        pathname: "/settings/websites/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_settings_websites_id_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ShareUrl */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const generateId = ()=>(0,next_basics__WEBPACK_IMPORTED_MODULE_3__.getRandomChars)(16);
function ShareUrl({ websiteId, data, onSave }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { name, shareId } = data;
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(shareId);
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { mutate, error } = useMutation(({ shareId })=>post(`/websites/${websiteId}`, {
            shareId
        }));
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const url = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>`${process.env.analyticsUrl || location.origin}${basePath}/share/${id}/${encodeURIComponent(name)}`, [
        id,
        name,
        basePath
    ]);
    const handleSubmit = async (data)=>{
        mutate(data, {
            onSuccess: async ()=>{
                onSave(data);
                ref.current.reset(data);
            }
        });
    };
    const handleGenerate = ()=>{
        const id = generateId();
        ref.current.setValue("shareId", id, {
            shouldValidate: true,
            shouldDirty: true
        });
        setId(id);
    };
    const handleCheck = (checked)=>{
        const data = {
            shareId: checked ? generateId() : null
        };
        mutate(data, {
            onSuccess: async ()=>{
                onSave(data);
            }
        });
        setId(data.shareId);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (id && id !== shareId) {
            ref.current.setValue("shareId", id);
        }
    }, [
        id,
        shareId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Toggle, {
                checked: Boolean(id),
                onChecked: handleCheck,
                style: {
                    marginBottom: 30
                },
                children: formatMessage(labels.enableShareUrl)
            }),
            id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Form, {
                ref: ref,
                onSubmit: handleSubmit,
                error: error,
                values: data,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: formatMessage(messages.shareUrl)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
                                gap: 10,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                        value: url,
                                        readOnly: true,
                                        allowCopy: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                        onClick: handleGenerate,
                                        children: formatMessage(labels.regenerate)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormButtons, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
                            variant: "primary",
                            children: formatMessage(labels.save)
                        })
                    })
                ]
            }, websiteId)
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareUrl);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TrackingCode */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25820);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useConfig__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks_useConfig__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TrackingCode({ websiteId }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const config = (0,components_hooks_useConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const trackerScriptName = config?.trackerScriptName?.split(",")?.map((n)=>n.trim())?.[0] || "script.js";
    const url = trackerScriptName?.startsWith("http") ? trackerScriptName : `${process.env.analyticsUrl || location.origin}${basePath}/${trackerScriptName}`;
    const code = `<script async src="${url}" data-website-id="${websiteId}"></script>`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: formatMessage(messages.trackingCode)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
                rows: 4,
                value: code,
                readOnly: true,
                allowCopy: true
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackingCode);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteData */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_pages_settings_websites_WebsiteDeleteForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2489);
/* harmony import */ var components_pages_settings_websites_WebsiteResetForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94183);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pages_settings_websites_WebsiteDeleteForm__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_websites_WebsiteResetForm__WEBPACK_IMPORTED_MODULE_3__]);
([components_pages_settings_websites_WebsiteDeleteForm__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_websites_WebsiteResetForm__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function WebsiteData({ websiteId, onSave }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleReset = async ()=>{
        onSave("reset");
    };
    const handleDelete = async ()=>{
        onSave("delete");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.ActionForm, {
                label: formatMessage(labels.resetWebsite),
                description: formatMessage(messages.resetWebsiteWarning),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.ModalTrigger, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "secondary",
                            children: formatMessage(labels.reset)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                            title: formatMessage(labels.resetWebsite),
                            children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsiteResetForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    websiteId: websiteId,
                                    onSave: handleReset,
                                    onClose: close
                                })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.ActionForm, {
                label: formatMessage(labels.deleteWebsite),
                description: formatMessage(messages.deleteWebsiteWarning),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.ModalTrigger, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "danger",
                            children: formatMessage(labels.delete)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Modal, {
                            title: formatMessage(labels.deleteWebsite),
                            children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsiteDeleteForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    websiteId: websiteId,
                                    onSave: handleDelete,
                                    onClose: close
                                })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteDeleteForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CONFIRM_VALUE = "DELETE";
function WebsiteDeleteForm({ websiteId, onSave, onClose }) {
    const { formatMessage, labels, messages, FormattedMessage } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { del, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { mutate, error } = useMutation((data)=>del(`/websites/${websiteId}`, data));
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
                    ...messages.deleteWebsite,
                    values: {
                        confirmation: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: CONFIRM_VALUE
                        })
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.confirm),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "confirmation",
                    rules: {
                        validate: (value)=>value === CONFIRM_VALUE
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        autoComplete: "off"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
                        variant: "danger",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteDeleteForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteEditForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35338);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73865);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function WebsiteEditForm({ websiteId, data, onSave }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { mutate, error } = useMutation((data)=>post(`/websites/${websiteId}`, data));
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleSubmit = async (data)=>{
        mutate(data, {
            onSuccess: async ()=>{
                ref.current.reset(data);
                onSave(data);
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Form, {
        ref: ref,
        onSubmit: handleSubmit,
        error: error,
        values: data,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.websiteId),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                    value: websiteId,
                    readOnly: true,
                    allowCopy: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "name",
                    rules: {
                        required: formatMessage(labels.required)
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.domain),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "domain",
                    rules: {
                        required: formatMessage(labels.required),
                        pattern: {
                            value: lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .DOMAIN_REGEX */ .Xx,
                            message: formatMessage(messages.invalidDomain)
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormButtons, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
                    variant: "primary",
                    children: formatMessage(labels.save)
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteEditForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteResetForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CONFIRM_VALUE = "RESET";
function WebsiteResetForm({ websiteId, onSave, onClose }) {
    const { formatMessage, labels, messages, FormattedMessage } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { mutate, error } = useMutation((data)=>post(`/websites/${websiteId}/reset`, data));
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
                    ...messages.resetWebsite,
                    values: {
                        confirmation: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: CONFIRM_VALUE
                        })
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.confirm),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "confirm",
                    rules: {
                        validate: (value)=>value === CONFIRM_VALUE
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        autoComplete: "off"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.SubmitButton, {
                        variant: "danger",
                        children: formatMessage(labels.reset)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteResetForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteSettings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70790);
/* harmony import */ var components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56754);
/* harmony import */ var components_pages_settings_websites_WebsiteEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10290);
/* harmony import */ var components_pages_settings_websites_WebsiteData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52642);
/* harmony import */ var components_pages_settings_websites_TrackingCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75780);
/* harmony import */ var components_pages_settings_websites_ShareUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91490);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pages_settings_websites_WebsiteEditForm__WEBPACK_IMPORTED_MODULE_7__, components_pages_settings_websites_WebsiteData__WEBPACK_IMPORTED_MODULE_8__, components_pages_settings_websites_TrackingCode__WEBPACK_IMPORTED_MODULE_9__, components_pages_settings_websites_ShareUrl__WEBPACK_IMPORTED_MODULE_10__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_11__]);
([components_pages_settings_websites_WebsiteEditForm__WEBPACK_IMPORTED_MODULE_7__, components_pages_settings_websites_WebsiteData__WEBPACK_IMPORTED_MODULE_8__, components_pages_settings_websites_TrackingCode__WEBPACK_IMPORTED_MODULE_9__, components_pages_settings_websites_ShareUrl__WEBPACK_IMPORTED_MODULE_10__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function WebsiteSettings({ websiteId, openExternal = false }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { showToast } = (0,react_basics__WEBPACK_IMPORTED_MODULE_2__.useToasts)();
    const { data, isLoading } = useQuery([
        "website",
        websiteId
    ], ()=>get(`/websites/${websiteId}`), {
        enabled: !!websiteId,
        cacheTime: 0
    });
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("details");
    const showSuccess = ()=>{
        showToast({
            message: formatMessage(messages.saved),
            variant: "success"
        });
    };
    const handleSave = (data)=>{
        showSuccess();
        setValues((state)=>({
                ...state,
                ...data
            }));
    };
    const handleReset = async (value)=>{
        if (value === "delete") {
            await router.push("/settings/websites");
        } else if (value === "reset") {
            showSuccess();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            setValues(data);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        loading: isLoading || !values,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: values?.name,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: `/websites/${websiteId}`,
                    target: openExternal ? "_blank" : null,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "primary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icons.External, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: formatMessage(labels.view)
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                selectedKey: tab,
                onSelect: setTab,
                style: {
                    marginBottom: 30
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: formatMessage(labels.details)
                    }, "details"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: formatMessage(labels.trackingCode)
                    }, "tracking"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: formatMessage(labels.shareUrl)
                    }, "share"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: formatMessage(labels.data)
                    }, "data")
                ]
            }),
            tab === "details" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsiteEditForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                websiteId: websiteId,
                data: values,
                onSave: handleSave
            }),
            tab === "tracking" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_TrackingCode__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                websiteId: websiteId,
                data: values
            }),
            tab === "share" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_ShareUrl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                websiteId: websiteId,
                data: values,
                onSave: handleSave
            }),
            tab === "data" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsiteData__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                websiteId: websiteId,
                onSave: handleReset
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22792);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_pages_settings_websites_WebsiteSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17350);
/* harmony import */ var components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7255);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__, components_pages_settings_websites_WebsiteSettings__WEBPACK_IMPORTED_MODULE_3__, components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_4__]);
([components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__, components_pages_settings_websites_WebsiteSettings__WEBPACK_IMPORTED_MODULE_3__, components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ disabled }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id } = router.query;
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    if (!id || disabled) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: `${formatMessage(labels.settings)} - ${formatMessage(labels.websites)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsiteSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                websiteId: id
            })
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2940,5121,1664,8375,5338,9369,263,2792,4426,481,7255], () => (__webpack_exec__(74066)));
module.exports = __webpack_exports__;

})();