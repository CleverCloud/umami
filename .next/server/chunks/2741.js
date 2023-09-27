"use strict";
exports.id = 2741;
exports.ids = [2741];
exports.modules = {

/***/ 62741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsitesTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_common_SettingsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85375);
/* harmony import */ var components_common_Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98776);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18927);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__]);
components_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function WebsitesTable({ data = [], filterValue, onFilterChange, onPageChange, onPageSizeChange, showTeam, showEditButton, openExternal = false }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const showTable = data && (filterValue || data?.data?.length !== 0);
    const teamColumns = [
        {
            name: "teamName",
            label: formatMessage(labels.teamName)
        },
        {
            name: "owner",
            label: formatMessage(labels.owner)
        }
    ];
    const columns = [
        {
            name: "name",
            label: formatMessage(labels.name)
        },
        {
            name: "domain",
            label: formatMessage(labels.domain)
        },
        ...showTeam ? teamColumns : [],
        {
            name: "action",
            label: " "
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showTable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_SettingsTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                columns: columns,
                data: data,
                showSearch: true,
                showPaging: true,
                onFilterChange: onFilterChange,
                onPageChange: onPageChange,
                onPageSizeChange: onPageSizeChange,
                filterValue: filterValue,
                children: (row)=>{
                    const { id, teamWebsite, user: { username, id: ownerId } } = row;
                    if (showTeam) {
                        row.teamName = teamWebsite[0]?.team.name;
                        row.owner = username;
                    }
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            showEditButton && (!showTeam || ownerId === user.id) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/settings/websites/${id}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icons.Edit, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            children: formatMessage(labels.edit)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/websites/${id}`,
                                target: openExternal ? "_blank" : null,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
                        ]
                    });
                }
            }),
            !showTable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsitesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;