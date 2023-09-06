exports.id = 9128;
exports.ids = [9128];
exports.modules = {

/***/ 20600:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "LinkButton_button__DKiNT"
};


/***/ }),

/***/ 4617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ConfirmDeleteForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);




function ConfirmDeleteForm({ name, onConfirm, onClose }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { formatMessage, labels, messages, FormattedMessage } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const handleConfirm = ()=>{
        setLoading(true);
        onConfirm();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Form, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FormattedMessage, {
                    ...messages.confirmDelete,
                    values: {
                        target: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: name
                        })
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormButtons, {
                flex: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.LoadingButton, {
                        isLoading: loading,
                        onClick: handleConfirm,
                        variant: "danger",
                        children: formatMessage(labels.delete)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDeleteForm);


/***/ }),

/***/ 67557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export LinkButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LinkButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20600);
/* harmony import */ var _LinkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LinkButton_module_css__WEBPACK_IMPORTED_MODULE_3__);




function LinkButton({ href, icon, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: (_LinkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
        href: href,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                children: icon || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icons.ArrowRight, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkButton);


/***/ }),

/***/ 19128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ReportsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_common_ConfirmDeleteForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4617);
/* harmony import */ var components_common_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67557);
/* harmony import */ var components_common_SettingsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85375);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18927);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_4__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_4__, components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ReportsTable({ data = [], onDelete = ()=>{}, filterValue, onFilterChange, onPageChange, onPageSizeChange, showDomain }) {
    const [report, setReport] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMessages */ .y_)();
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const domainColumn = [
        {
            name: "domain",
            label: formatMessage(labels.domain)
        }
    ];
    const columns = [
        {
            name: "name",
            label: formatMessage(labels.name)
        },
        {
            name: "description",
            label: formatMessage(labels.description)
        },
        {
            name: "type",
            label: formatMessage(labels.type)
        },
        ...showDomain ? domainColumn : [],
        {
            name: "action",
            label: " "
        }
    ];
    const handleConfirm = ()=>{
        onDelete(report.id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_SettingsTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                columns: columns,
                data: data,
                showSearch: true,
                showPaging: true,
                onFilterChange: onFilterChange,
                onPageChange: onPageChange,
                onPageSizeChange: onPageSizeChange,
                filterValue: filterValue,
                children: (row)=>{
                    const { id, userId: reportOwnerId, website } = row;
                    if (showDomain) {
                        row.domain = website.domain;
                    }
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.Flexbox, {
                        gap: 10,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_LinkButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: `/reports/${id}`,
                                children: formatMessage(labels.view)
                            }),
                            !showDomain || user.id === reportOwnerId || user.id === website?.userId,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                onClick: ()=>setReport(row),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icon, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Icons.Trash, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                        children: formatMessage(labels.delete)
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            report && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_7__.Modal, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_ConfirmDeleteForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    name: report.name,
                    onConfirm: handleConfirm,
                    onClose: ()=>setReport(null)
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;