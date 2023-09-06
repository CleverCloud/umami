"use strict";
exports.id = 5770;
exports.ids = [5770];
exports.modules = {

/***/ 57219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteAddForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73865);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function WebsiteAddForm({ onSave, onClose }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { post, useMutation } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { mutate, error, isLoading } = useMutation((data)=>post("/websites", data));
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "name",
                    rules: {
                        required: formatMessage(labels.required)
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        autoComplete: "off"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.domain),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormInput, {
                    name: "domain",
                    rules: {
                        required: formatMessage(labels.required),
                        pattern: {
                            value: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .DOMAIN_REGEX */ .Xx,
                            message: formatMessage(messages.invalidDomain)
                        }
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
                        variant: "primary",
                        disabled: false,
                        children: formatMessage(labels.save)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        disabled: isLoading,
                        onClick: onClose,
                        children: formatMessage(labels.cancel)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteAddForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsitesList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70790);
/* harmony import */ var components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56754);
/* harmony import */ var components_pages_settings_websites_WebsiteAddForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57219);
/* harmony import */ var components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62741);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useApiFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19491);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18927);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73865);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pages_settings_websites_WebsiteAddForm__WEBPACK_IMPORTED_MODULE_3__, components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_4__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__]);
([components_pages_settings_websites_WebsiteAddForm__WEBPACK_IMPORTED_MODULE_3__, components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_4__, components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function WebsitesList({ showTeam, showEditButton = true, showHeader = true, includeTeams, onlyTeams, fetch }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { filter, page, pageSize, handleFilterChange, handlePageChange, handlePageSizeChange } = (0,components_hooks_useApiFilter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { data, isLoading, error, refetch } = useQuery([
        "websites",
        fetch,
        user?.id,
        filter,
        page,
        pageSize,
        includeTeams,
        onlyTeams
    ], ()=>get(`/users/${user?.id}/websites`, {
            filter,
            page,
            pageSize,
            includeTeams,
            onlyTeams
        }), {
        enabled: !!user
    });
    const { showToast } = (0,react_basics__WEBPACK_IMPORTED_MODULE_10__.useToasts)();
    const handleSave = async ()=>{
        await refetch();
        showToast({
            message: formatMessage(messages.saved),
            variant: "success"
        });
    };
    const addButton = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: user.role !== lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .ROLES */ .K$.viewOnly && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_10__.ModalTrigger, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_10__.Button, {
                    variant: "primary",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_10__.Icon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_10__.Icons.Plus, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_10__.Text, {
                            children: formatMessage(labels.addWebsite)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_10__.Modal, {
                    title: formatMessage(labels.addWebsite),
                    children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsiteAddForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onSave: handleSave,
                            onClose: close
                        })
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        loading: isLoading,
        error: error,
        children: [
            showHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: formatMessage(labels.websites),
                children: addButton
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_settings_websites_WebsitesTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                data: data,
                showTeam: showTeam,
                showEditButton: showEditButton,
                onFilterChange: handleFilterChange,
                onPageChange: handlePageChange,
                onPageSizeChange: handlePageSizeChange,
                filterValue: filter
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsitesList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;