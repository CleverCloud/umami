"use strict";
(() => {
var exports = {};
exports.id = 8864;
exports.ids = [8864,660];
exports.modules = {

/***/ 58803:
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
/* harmony import */ var private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/settings/users/[id]",
        pathname: "/settings/users/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_settings_users_id_js__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export UserEditForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73865);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function UserEditForm({ userId, data, onSave }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { mutate, error } = useMutation(({ username, password, role })=>post(`/users/${userId}`, {
            username,
            password,
            role
        }));
    const handleSubmit = async (data)=>{
        mutate(data, {
            onSuccess: async ()=>{
                onSave(data);
            }
        });
    };
    const renderValue = (value)=>{
        if (value === lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .ROLES */ .K$.user) {
            return formatMessage(labels.user);
        }
        if (value === lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .ROLES */ .K$.admin) {
            return formatMessage(labels.admin);
        }
        if (value === lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .ROLES */ .K$.viewOnly) {
            return formatMessage(labels.viewOnly);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Form, {
        onSubmit: handleSubmit,
        error: error,
        values: data,
        style: {
            width: 300
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.username),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "username",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.password),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "password",
                    rules: {
                        minLength: {
                            value: 8,
                            message: formatMessage(messages.minPasswordLength, {
                                n: 8
                            })
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.PasswordField, {
                        autoComplete: "new-password"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.role),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "role",
                    rules: {
                        required: formatMessage(labels.required)
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                        renderValue: renderValue,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                                children: formatMessage(labels.viewOnly)
                            }, lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .ROLES */ .K$.viewOnly),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                                children: formatMessage(labels.user)
                            }, lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .ROLES */ .K$.user),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                                children: formatMessage(labels.admin)
                            }, lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .ROLES */ .K$.admin)
                        ]
                    })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserEditForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export UserSettings */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_pages_settings_users_UserEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61558);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70790);
/* harmony import */ var components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56754);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35338);
/* harmony import */ var _UserWebsites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27841);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pages_settings_users_UserEditForm__WEBPACK_IMPORTED_MODULE_3__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__, _UserWebsites__WEBPACK_IMPORTED_MODULE_7__]);
([components_pages_settings_users_UserEditForm__WEBPACK_IMPORTED_MODULE_3__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__, _UserWebsites__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function UserSettings({ userId }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("details");
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { showToast } = (0,react_basics__WEBPACK_IMPORTED_MODULE_2__.useToasts)();
    const { data, isLoading } = useQuery([
        "user",
        userId
    ], ()=>{
        if (userId) {
            return get(`/users/${userId}`);
        }
    }, {
        cacheTime: 0
    });
    const handleSave = (data)=>{
        showToast({
            message: formatMessage(messages.saved),
            variant: "success"
        });
        if (data) {
            setValues((state)=>({
                    ...state,
                    ...data
                }));
        }
        if (edit) {
            setEdit(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) {
            setValues(data);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        loading: isLoading || !values,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: values?.username
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                selectedKey: tab,
                onSelect: setTab,
                style: {
                    marginBottom: 30,
                    fontSize: 14
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: formatMessage(labels.details)
                    }, "details"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        children: formatMessage(labels.websites)
                    }, "websites")
                ]
            }),
            tab === "details" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_users_UserEditForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                userId: userId,
                data: values,
                onSave: handleSave
            }),
            tab === "websites" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserWebsites__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                userId: userId
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserSettings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export UserWebsites */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70790);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62741);
/* harmony import */ var components_hooks_useApiFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_3__]);
([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function UserWebsites({ userId }) {
    const { filter, page, pageSize, handleFilterChange, handlePageChange, handlePageSizeChange } = (0,components_hooks_useApiFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { data, isLoading, error } = useQuery([
        "user:websites",
        userId,
        filter,
        page,
        pageSize
    ], ()=>get(`/users/${userId}/websites`, {
            filter,
            page,
            pageSize
        }));
    const hasData = data && data.length !== 0;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Page__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        loading: isLoading,
        error: error,
        children: hasData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            data: data,
            onFilterChange: handleFilterChange,
            onPageChange: handlePageChange,
            onPageSizeChange: handlePageSizeChange,
            filterValue: filter
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserWebsites);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46403:
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
/* harmony import */ var components_pages_settings_users_UserSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65927);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__, components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_users_UserSettings__WEBPACK_IMPORTED_MODULE_3__]);
([components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__, components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__, components_pages_settings_users_UserSettings__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ disabled }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { id } = router.query;
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    if (!id || disabled) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: `${formatMessage(labels.settings)} - ${formatMessage(labels.users)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_SettingsLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_users_UserSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                userId: id
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
var __webpack_exports__ = __webpack_require__.X(0, [2940,5121,1664,8375,5338,9369,263,2792,4426,233,481,3822,7255,2741], () => (__webpack_exec__(58803)));
module.exports = __webpack_exports__;

})();