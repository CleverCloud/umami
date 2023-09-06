exports.id = 5457;
exports.ids = [5457];
exports.modules = {

/***/ 71372:
/***/ ((module) => {

// Exports
module.exports = {
	"parameter": "InsightsParameters_parameter__2MUkN",
	"op": "InsightsParameters_op__HDVwc",
	"popup": "InsightsParameters_popup__NXnMV"
};


/***/ }),

/***/ 21886:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export InsightsParameters */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43756);
/* harmony import */ var _BaseParameters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5390);
/* harmony import */ var _ParameterList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54092);
/* harmony import */ var _InsightsParameters_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71372);
/* harmony import */ var _InsightsParameters_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_InsightsParameters_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PopupForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61371);
/* harmony import */ var _FilterSelectForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95444);
/* harmony import */ var _FieldSelectForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5799);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_2__, components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__, _BaseParameters__WEBPACK_IMPORTED_MODULE_6__, _ParameterList__WEBPACK_IMPORTED_MODULE_7__, _FilterSelectForm__WEBPACK_IMPORTED_MODULE_9__, _FieldSelectForm__WEBPACK_IMPORTED_MODULE_10__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_2__, components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__, _BaseParameters__WEBPACK_IMPORTED_MODULE_6__, _ParameterList__WEBPACK_IMPORTED_MODULE_7__, _FilterSelectForm__WEBPACK_IMPORTED_MODULE_9__, _FieldSelectForm__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function InsightsParameters() {
    const { report, runReport, updateReport, isRunning } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    const { formatValue } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFormat */ .ve)();
    const { filterLabels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useFilters */ .mN)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { parameters } = report || {};
    const { websiteId, dateRange, fields, filters } = parameters || {};
    const { startDate, endDate } = dateRange || {};
    const parametersSelected = websiteId && startDate && endDate;
    const queryEnabled = websiteId && dateRange && (fields?.length || filters?.length);
    const fieldOptions = [
        {
            name: "url",
            type: "string",
            label: formatMessage(labels.url)
        },
        {
            name: "title",
            type: "string",
            label: formatMessage(labels.pageTitle)
        },
        {
            name: "referrer",
            type: "string",
            label: formatMessage(labels.referrer)
        },
        {
            name: "query",
            type: "string",
            label: formatMessage(labels.query)
        },
        {
            name: "browser",
            type: "string",
            label: formatMessage(labels.browser)
        },
        {
            name: "os",
            type: "string",
            label: formatMessage(labels.os)
        },
        {
            name: "device",
            type: "string",
            label: formatMessage(labels.device)
        },
        {
            name: "country",
            type: "string",
            label: formatMessage(labels.country)
        },
        {
            name: "region",
            type: "string",
            label: formatMessage(labels.region)
        },
        {
            name: "city",
            type: "string",
            label: formatMessage(labels.city)
        }
    ];
    const parameterGroups = [
        {
            id: "fields",
            label: formatMessage(labels.fields)
        },
        {
            id: "filters",
            label: formatMessage(labels.filters)
        }
    ];
    const parameterData = {
        fields,
        filters
    };
    const handleSubmit = (values)=>{
        runReport(values);
    };
    const handleAdd = (id, value)=>{
        const data = parameterData[id];
        if (!data.find(({ name })=>name === value.name)) {
            updateReport({
                parameters: {
                    [id]: data.concat(value)
                }
            });
        }
    };
    const handleRemove = (id, index)=>{
        const data = [
            ...parameterData[id]
        ];
        data.splice(index, 1);
        updateReport({
            parameters: {
                [id]: data
            }
        });
    };
    const AddButton = ({ id })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.PopupTrigger, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.TooltipPopup, {
                    label: formatMessage(labels.add),
                    position: "top",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Plus, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Popup, {
                    position: "bottom",
                    alignment: "start",
                    className: (_InsightsParameters_module_css__WEBPACK_IMPORTED_MODULE_11___default().popup),
                    children: (close)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PopupForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            onClose: close,
                            children: [
                                id === "fields" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FieldSelectForm__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    items: fieldOptions,
                                    onSelect: handleAdd.bind(null, id),
                                    showType: false
                                }),
                                id === "filters" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilterSelectForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    websiteId: websiteId,
                                    items: fieldOptions,
                                    onSelect: handleAdd.bind(null, id)
                                })
                            ]
                        });
                    }
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.Form, {
        ref: ref,
        values: parameters,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseParameters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            parametersSelected && parameterGroups.map(({ id, label })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormRow, {
                    label: label,
                    action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddButton, {
                        id: id,
                        onAdd: handleAdd
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParameterList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        items: parameterData[id],
                        onRemove: (index)=>handleRemove(id, index),
                        children: ({ name, filter, value })=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_InsightsParameters_module_css__WEBPACK_IMPORTED_MODULE_11___default().parameter),
                                children: [
                                    id === "fields" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: fieldOptions.find((f)=>f.name === name)?.label
                                        })
                                    }),
                                    id === "filters" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: fieldOptions.find((f)=>f.name === name)?.label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_InsightsParameters_module_css__WEBPACK_IMPORTED_MODULE_11___default().op),
                                                children: filterLabels[filter]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: formatValue(value, name)
                                            })
                                        ]
                                    })
                                ]
                            });
                        }
                    })
                }, label);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormButtons, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.SubmitButton, {
                    variant: "primary",
                    disabled: !queryEnabled,
                    loading: isRunning,
                    children: formatMessage(labels.runQuery)
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsParameters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InsightsReport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var _ReportHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77406);
/* harmony import */ var _ReportMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8953);
/* harmony import */ var _ReportBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60761);
/* harmony import */ var _InsightsParameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21886);
/* harmony import */ var _InsightsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72509);
/* harmony import */ var assets_lightbulb_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46465);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Report__WEBPACK_IMPORTED_MODULE_1__, _ReportHeader__WEBPACK_IMPORTED_MODULE_2__, _InsightsParameters__WEBPACK_IMPORTED_MODULE_5__, _InsightsTable__WEBPACK_IMPORTED_MODULE_6__]);
([_Report__WEBPACK_IMPORTED_MODULE_1__, _ReportHeader__WEBPACK_IMPORTED_MODULE_2__, _InsightsParameters__WEBPACK_IMPORTED_MODULE_5__, _InsightsTable__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const defaultParameters = {
    type: lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .REPORT_TYPES */ .H$.insights,
    parameters: {
        fields: [],
        filters: []
    }
};
function InsightsReport({ reportId }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Report__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        reportId: reportId,
        defaultParameters: defaultParameters,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_lightbulb_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InsightsParameters__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportBody__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InsightsTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export InsightsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var components_common_EmptyPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88486);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_4__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function InsightsTable() {
    const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { report } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Report__WEBPACK_IMPORTED_MODULE_4__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMessages */ .y_)();
    const { formatValue } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFormat */ .ve)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFields(report?.parameters?.fields);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        report?.data
    ]);
    if (!fields || !report?.parameters) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_EmptyPlaceholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.GridTable, {
        data: report?.data || [],
        children: [
            fields.map(({ name, label })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.GridColumn, {
                    name: name,
                    label: label,
                    children: (row)=>formatValue(row[name], name)
                }, name);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.GridColumn, {
                name: "visitors",
                label: formatMessage(labels.visitors),
                width: "100px",
                alignment: "end",
                children: (row)=>row.visitors.toLocaleString()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.GridColumn, {
                name: "views",
                label: formatMessage(labels.views),
                width: "100px",
                alignment: "end",
                children: (row)=>row.views.toLocaleString()
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsightsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;