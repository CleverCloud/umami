exports.id = 9443;
exports.ids = [9443];
exports.modules = {

/***/ 71481:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MonthSelect_container__VDgiJ",
	"input": "MonthSelect_input__CIZdD",
	"popup": "MonthSelect_popup__HxGKB"
};


/***/ }),

/***/ 69133:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "RetentionTable_table__PWAXt",
	"header": "RetentionTable_header__Q4_Vn",
	"row": "RetentionTable_row__8BAUu",
	"cell": "RetentionTable_cell__Vbo9B",
	"date": "RetentionTable_date__UUWQ6",
	"visitors": "RetentionTable_visitors__lt_uT",
	"day": "RetentionTable_day__wPMhh",
	"empty": "RetentionTable_empty__xZLU3"
};


/***/ }),

/***/ 88486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 46496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ MonthSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45914);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96924);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43756);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77253);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91534);
/* harmony import */ var lib_lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49674);
/* harmony import */ var _MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71481);
/* harmony import */ var _MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_6__]);
components_hooks__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function MonthSelect({ date = new Date(), onChange }) {
    const { locale } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useLocale */ .bU)();
    const month = (0,lib_date__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p6)(date, "MMMM", locale);
    const year = date.getFullYear();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleChange = (close, date)=>{
        onChange(`range:${date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_3___default()(date).getTime()}:${date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_4___default()(date).getTime()}`);
        close();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: ref,
            className: (_MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.PopupTrigger, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            className: (_MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),
                            variant: "quiet",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    children: month
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                    size: "sm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.ChevronDown, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Popup, {
                            className: (_MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9___default().popup),
                            alignment: "start",
                            children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.CalendarMonthSelect, {
                                    date: date,
                                    locale: (0,lib_lang__WEBPACK_IMPORTED_MODULE_8__/* .getDateLocale */ .t4)(locale),
                                    onSelect: handleChange.bind(null, close)
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.PopupTrigger, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            className: (_MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),
                            variant: "quiet",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    children: year
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                    size: "sm",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.ChevronDown, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Popup, {
                            className: (_MonthSelect_module_css__WEBPACK_IMPORTED_MODULE_9___default().popup),
                            alignment: "start",
                            children: (close)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.CalendarYearSelect, {
                                    date: date,
                                    locale: (0,lib_lang__WEBPACK_IMPORTED_MODULE_8__/* .getDateLocale */ .t4)(locale),
                                    onSelect: handleChange.bind(null, close)
                                })
                        })
                    ]
                })
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MonthSelect)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export RetentionParameters */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var components_input_MonthSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46496);
/* harmony import */ var _BaseParameters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5390);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_2__, components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__, components_input_MonthSelect__WEBPACK_IMPORTED_MODULE_5__, _BaseParameters__WEBPACK_IMPORTED_MODULE_6__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_2__, components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__, components_input_MonthSelect__WEBPACK_IMPORTED_MODULE_5__, _BaseParameters__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function RetentionParameters() {
    const { report, runReport, isRunning, updateReport } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(components_pages_reports_Report__WEBPACK_IMPORTED_MODULE_4__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { parameters } = report || {};
    const { websiteId, dateRange } = parameters || {};
    const { startDate } = dateRange || {};
    const queryDisabled = !websiteId || !dateRange;
    const handleSubmit = (data, e)=>{
        e.stopPropagation();
        e.preventDefault();
        if (!queryDisabled) {
            runReport(data);
        }
    };
    const handleDateChange = (value)=>{
        updateReport({
            parameters: {
                dateRange: {
                    ...(0,lib_date__WEBPACK_IMPORTED_MODULE_7__/* .parseDateRange */ .r0)(value)
                }
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.Form, {
        ref: ref,
        values: parameters,
        onSubmit: handleSubmit,
        preventSubmit: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BaseParameters__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                showDateSelect: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.FormRow, {
                label: formatMessage(labels.date),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_MonthSelect__WEBPACK_IMPORTED_MODULE_5__/* .MonthSelect */ .W, {
                    date: startDate,
                    onChange: handleDateChange
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RetentionParameters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89443:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ RetentionReport)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _RetentionTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16413);
/* harmony import */ var _RetentionParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98797);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89);
/* harmony import */ var _ReportHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77406);
/* harmony import */ var _ReportMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8953);
/* harmony import */ var _ReportBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60761);
/* harmony import */ var assets_magnet_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54073);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73865);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91534);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96924);
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45914);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RetentionTable__WEBPACK_IMPORTED_MODULE_1__, _RetentionParameters__WEBPACK_IMPORTED_MODULE_2__, _Report__WEBPACK_IMPORTED_MODULE_3__, _ReportHeader__WEBPACK_IMPORTED_MODULE_4__]);
([_RetentionTable__WEBPACK_IMPORTED_MODULE_1__, _RetentionParameters__WEBPACK_IMPORTED_MODULE_2__, _Report__WEBPACK_IMPORTED_MODULE_3__, _ReportHeader__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const defaultParameters = {
    type: lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .REPORT_TYPES */ .H$.retention,
    parameters: {
        dateRange: (0,lib_date__WEBPACK_IMPORTED_MODULE_9__/* .parseDateRange */ .r0)(`range:${date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_11___default()(new Date()).getTime()}:${date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_10___default()(new Date()).getTime()}`)
    }
};
function RetentionReport({ reportId }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Report__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        reportId: reportId,
        defaultParameters: defaultParameters,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_magnet_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RetentionParameters__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ReportBody__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RetentionTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export RetentionTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89);
/* harmony import */ var components_common_EmptyPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88486);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77253);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91534);
/* harmony import */ var _RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69133);
/* harmony import */ var _RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Report__WEBPACK_IMPORTED_MODULE_3__, components_hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_Report__WEBPACK_IMPORTED_MODULE_3__, components_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function RetentionTable() {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useMessages */ .y_)();
    const { report } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Report__WEBPACK_IMPORTED_MODULE_3__/* .ReportContext */ .GA);
    const { data } = report || {};
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_EmptyPlaceholder__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    }
    const days = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        14,
        21,
        28
    ];
    const rows = data.reduce((arr, row)=>{
        const { date, visitors, day } = row;
        if (day === 0) {
            return arr.concat({
                date,
                visitors,
                records: days.reduce((arr, day)=>{
                    arr[day] = data.find((x)=>x.date === date && x.day === day);
                    return arr;
                }, []).filter((n)=>n)
            });
        }
        return arr;
    }, []);
    const totalDays = rows.length;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().table),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().row), (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().header)),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),
                            children: formatMessage(labels.date)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().visitors),
                            children: formatMessage(labels.visitors)
                        }),
                        days.map((n)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().day),
                                children: [
                                    formatMessage(labels.day),
                                    " ",
                                    n
                                ]
                            }, n))
                    ]
                }),
                rows.map(({ date, visitors, records }, rowIndex)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().row),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().date),
                                children: (0,lib_date__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p6)(`${date} 00:00:00`, "PP")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().visitors),
                                children: visitors
                            }),
                            days.map((day)=>{
                                if (totalDays - rowIndex < day) {
                                    return null;
                                }
                                const percentage = records[day]?.percentage;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().cell), {
                                        [(_RetentionTable_module_css__WEBPACK_IMPORTED_MODULE_7___default().empty)]: !percentage
                                    }),
                                    children: percentage ? `${percentage.toFixed(2)}%` : ""
                                }, day);
                            })
                        ]
                    }, rowIndex);
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RetentionTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;