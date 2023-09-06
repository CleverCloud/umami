exports.id = 9446;
exports.ids = [9446];
exports.modules = {

/***/ 95123:
/***/ ((module) => {

// Exports
module.exports = {
	"loading": "FunnelChart_loading__Iwi4U"
};


/***/ }),

/***/ 11997:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "UrlAddForm_form__qeMFt",
	"input": "UrlAddForm_input__TruPB"
};


/***/ }),

/***/ 73318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FunnelChart */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53353);
/* harmony import */ var components_metrics_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34924);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29163);
/* harmony import */ var _FunnelChart_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95123);
/* harmony import */ var _FunnelChart_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FunnelChart_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__, components_metrics_BarChart__WEBPACK_IMPORTED_MODULE_5__, _Report__WEBPACK_IMPORTED_MODULE_6__]);
([components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__, components_metrics_BarChart__WEBPACK_IMPORTED_MODULE_5__, _Report__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function FunnelChart({ className, loading }) {
    const { report } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Report__WEBPACK_IMPORTED_MODULE_6__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { colors } = (0,components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { parameters, data } = report || {};
    const renderXLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((label, index)=>{
        return parameters.urls[index];
    }, [
        parameters
    ]);
    const renderTooltipPopup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((setTooltipPopup, model)=>{
        const { opacity, labelColors, dataPoints } = model.tooltip;
        if (!dataPoints?.length || !opacity) {
            setTooltipPopup(null);
            return;
        }
        setTooltipPopup(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        (0,lib_format__WEBPACK_IMPORTED_MODULE_7__/* .formatLongNumber */ .mu)(dataPoints[0].raw.y),
                        " ",
                        formatMessage(labels.visitors)
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.StatusLight, {
                        color: labelColors?.[0]?.backgroundColor,
                        children: [
                            (0,lib_format__WEBPACK_IMPORTED_MODULE_7__/* .formatLongNumber */ .mu)(dataPoints[0].raw.z),
                            "% ",
                            formatMessage(labels.dropoff)
                        ]
                    })
                })
            ]
        }));
    }, []);
    const datasets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            {
                label: formatMessage(labels.uniqueVisitors),
                data: data,
                borderWidth: 1,
                ...colors.chart.visitors
            }
        ];
    }, [
        data,
        colors,
        formatMessage,
        labels
    ]);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
            icon: "dots",
            className: (_FunnelChart_module_css__WEBPACK_IMPORTED_MODULE_8___default().loading)
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_BarChart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        className: className,
        datasets: datasets,
        unit: "day",
        loading: loading,
        renderXLabel: renderXLabel,
        renderTooltipPopup: renderTooltipPopup,
        XAxisType: "category"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunnelChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47912:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FunnelParameters */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43756);
/* harmony import */ var _UrlAddForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95237);
/* harmony import */ var components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _BaseParameters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5390);
/* harmony import */ var _ParameterList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54092);
/* harmony import */ var _PopupForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61371);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_2__, _UrlAddForm__WEBPACK_IMPORTED_MODULE_5__, components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_6__, _BaseParameters__WEBPACK_IMPORTED_MODULE_7__, _ParameterList__WEBPACK_IMPORTED_MODULE_8__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_2__, _UrlAddForm__WEBPACK_IMPORTED_MODULE_5__, components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_6__, _BaseParameters__WEBPACK_IMPORTED_MODULE_7__, _ParameterList__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function FunnelParameters() {
    const { report, runReport, updateReport, isRunning } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_6__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { parameters } = report || {};
    const { websiteId, dateRange, urls } = parameters || {};
    const queryDisabled = !websiteId || !dateRange || urls?.length < 2;
    const handleSubmit = (data, e)=>{
        e.stopPropagation();
        e.preventDefault();
        if (!queryDisabled) {
            runReport(data);
        }
    };
    const handleAddUrl = (url)=>{
        updateReport({
            parameters: {
                urls: parameters.urls.concat(url)
            }
        });
    };
    const handleRemoveUrl = (index, e)=>{
        e.stopPropagation();
        const urls = [
            ...parameters.urls
        ];
        urls.splice(index, 1);
        updateReport({
            parameters: {
                urls
            }
        });
    };
    const AddUrlButton = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.PopupTrigger, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Plus, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Popup, {
                    position: "bottom",
                    alignment: "start",
                    children: (close, element)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PopupForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            element: element,
                            onClose: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UrlAddForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onAdd: handleAddUrl
                            })
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
        preventSubmit: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseParameters__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormRow, {
                label: formatMessage(labels.window),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormInput, {
                    name: "window",
                    rules: {
                        required: formatMessage(labels.required),
                        pattern: /[0-9]+/
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                        autoComplete: "off"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormRow, {
                label: formatMessage(labels.urls),
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddUrlButton, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ParameterList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    items: urls,
                    onRemove: handleRemoveUrl
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormButtons, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.SubmitButton, {
                    variant: "primary",
                    disabled: queryDisabled,
                    loading: isRunning,
                    children: formatMessage(labels.runQuery)
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunnelParameters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FunnelReport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _FunnelChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73318);
/* harmony import */ var _FunnelTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81873);
/* harmony import */ var _FunnelParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47912);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var _ReportHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77406);
/* harmony import */ var _ReportMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8953);
/* harmony import */ var _ReportBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60761);
/* harmony import */ var assets_funnel_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31553);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FunnelChart__WEBPACK_IMPORTED_MODULE_1__, _FunnelTable__WEBPACK_IMPORTED_MODULE_2__, _FunnelParameters__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_4__, _ReportHeader__WEBPACK_IMPORTED_MODULE_5__]);
([_FunnelChart__WEBPACK_IMPORTED_MODULE_1__, _FunnelTable__WEBPACK_IMPORTED_MODULE_2__, _FunnelParameters__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_4__, _ReportHeader__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const defaultParameters = {
    type: lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .REPORT_TYPES */ .H$.funnel,
    parameters: {
        window: 60,
        urls: []
    }
};
function FunnelReport({ reportId }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Report__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        reportId: reportId,
        defaultParameters: defaultParameters,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_funnel_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FunnelParameters__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ReportBody__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FunnelChart__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FunnelTable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FunnelTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_metrics_ListTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55046);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_ListTable__WEBPACK_IMPORTED_MODULE_2__, components_hooks__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_4__]);
([components_metrics_ListTable__WEBPACK_IMPORTED_MODULE_2__, components_hooks__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function FunnelTable() {
    const { report } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Report__WEBPACK_IMPORTED_MODULE_4__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMessages */ .y_)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_ListTable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        data: report?.data,
        title: formatMessage(labels.url),
        metric: formatMessage(labels.visitors),
        showPercentage: true
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunnelTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export UrlAddForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UrlAddForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11997);
/* harmony import */ var _UrlAddForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UrlAddForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function UrlAddForm({ defaultValue = "", onAdd }) {
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    const handleSave = ()=>{
        onAdd(url);
        setUrl("");
    };
    const handleChange = (e)=>{
        setUrl(e.target.value);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.stopPropagation();
            handleSave();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Form, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormRow, {
            label: formatMessage(labels.url),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.Flexbox, {
                gap: 10,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                        className: (_UrlAddForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
                        value: url,
                        onChange: handleChange,
                        autoFocus: true,
                        autoComplete: "off",
                        onKeyDown: handleKeyDown
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "primary",
                        onClick: handleSave,
                        children: formatMessage(labels.add)
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlAddForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;