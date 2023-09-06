exports.id = 7481;
exports.ids = [7481];
exports.modules = {

/***/ 93744:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "DatePickerForm_container__MygMe",
	"calendars": "DatePickerForm_calendars__wK_V1",
	"filter": "DatePickerForm_filter__iM5CX",
	"buttons": "DatePickerForm_buttons__j7UzK"
};


/***/ }),

/***/ 77481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DateFilter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_endOfYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55018);
/* harmony import */ var date_fns_endOfYear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_endOfYear__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81668);
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_metrics_DatePickerForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91998);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91534);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43756);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_DatePickerForm__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__]);
([components_metrics_DatePickerForm__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function DateFilter({ value, startDate, endDate, className, onChange, selectedUnit, showAllTime = false, alignment = "end" }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [showPicker, setShowPicker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const options = [
        {
            label: formatMessage(labels.today),
            value: "1day"
        },
        {
            label: formatMessage(labels.lastHours, {
                x: 24
            }),
            value: "24hour"
        },
        {
            label: formatMessage(labels.yesterday),
            value: "-1day"
        },
        {
            label: formatMessage(labels.thisWeek),
            value: "1week",
            divider: true
        },
        {
            label: formatMessage(labels.lastDays, {
                x: 7
            }),
            value: "7day"
        },
        {
            label: formatMessage(labels.thisMonth),
            value: "1month",
            divider: true
        },
        {
            label: formatMessage(labels.lastDays, {
                x: 30
            }),
            value: "30day"
        },
        {
            label: formatMessage(labels.lastDays, {
                x: 90
            }),
            value: "90day"
        },
        {
            label: formatMessage(labels.thisYear),
            value: "1year"
        },
        showAllTime && {
            label: formatMessage(labels.allTime),
            value: "all",
            divider: true
        },
        {
            label: formatMessage(labels.customRange),
            value: "custom",
            divider: true
        }
    ].filter((n)=>n);
    const renderValue = (value)=>{
        return value.startsWith("range") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomRange, {
            startDate: startDate,
            endDate: endDate,
            selectedUnit: selectedUnit,
            onClick: ()=>handleChange("custom")
        }) : options.find((e)=>e.value === value).label;
    };
    const handleChange = (value)=>{
        if (value === "custom") {
            setShowPicker(true);
            return;
        }
        onChange(value);
    };
    const handlePickerChange = (value)=>{
        setShowPicker(false);
        onChange(value);
    };
    const handleClose = ()=>setShowPicker(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                className: className,
                items: options,
                renderValue: renderValue,
                value: value,
                alignment: alignment,
                placeholder: formatMessage(labels.selectDate),
                onChange: handleChange,
                children: ({ label, value, divider })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                        divider: divider,
                        children: label
                    }, value)
            }),
            showPicker && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                onClose: handleClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_DatePickerForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    startDate: startDate,
                    endDate: endDate,
                    minDate: new Date(2000, 0, 1),
                    maxDate: date_fns_endOfYear__WEBPACK_IMPORTED_MODULE_3___default()(new Date()),
                    onChange: handlePickerChange,
                    onClose: ()=>setShowPicker(false)
                })
            })
        ]
    });
}
const CustomRange = ({ startDate, endDate, selectedUnit, onClick })=>{
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const monthFormat = +selectedUnit?.num === 1 && selectedUnit?.unit === "month";
    function handleClick(e) {
        e.stopPropagation();
        onClick();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
        gap: 10,
        alignItems: "center",
        wrap: "nowrap",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                className: "mr-2",
                onClick: handleClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Calendar, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                children: monthFormat ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: (0,lib_date__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p6)(startDate, "MMMM yyyy", locale)
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        (0,lib_date__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p6)(startDate, "d LLL y", locale),
                        !date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_4___default()(startDate, endDate) && ` — ${(0,lib_date__WEBPACK_IMPORTED_MODULE_7__/* .formatDate */ .p6)(endDate, "d LLL y", locale)}`
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DatePickerForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44038);
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13024);
/* harmony import */ var date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81668);
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91998);
/* harmony import */ var lib_lang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49674);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73865);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53250);
/* harmony import */ var _DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93744);
/* harmony import */ var _DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__]);
components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function DatePickerForm({ startDate: defaultStartDate, endDate: defaultEndDate, minDate, maxDate, onChange, onClose }) {
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_5___default()(defaultStartDate, defaultEndDate) ? lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_DAY */ .Lx : lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_RANGE */ .B2);
    const [singleDate, setSingleDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultStartDate);
    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultStartDate);
    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultEndDate);
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const disabled = selected === lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_DAY */ .Lx ? date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3___default()(minDate, singleDate) && date_fns_isBefore__WEBPACK_IMPORTED_MODULE_4___default()(maxDate, singleDate) : date_fns_isAfter__WEBPACK_IMPORTED_MODULE_3___default()(startDate, endDate);
    const handleSave = ()=>{
        if (selected === lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_DAY */ .Lx) {
            onChange(`range:${singleDate.getTime()}:${singleDate.getTime()}`);
        } else {
            onChange(`range:${startDate.getTime()}:${endDate.getTime()}`);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10___default().filter),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
                    selectedKey: selected,
                    onSelect: setSelected,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            children: formatMessage(labels.singleDay)
                        }, lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_DAY */ .Lx),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            children: formatMessage(labels.dateRange)
                        }, lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_RANGE */ .B2)
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10___default().calendars),
                children: [
                    selected === lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_DAY */ .Lx && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Calendar, {
                        date: singleDate,
                        minDate: minDate,
                        maxDate: maxDate,
                        onChange: setSingleDate
                    }),
                    selected === lib_constants__WEBPACK_IMPORTED_MODULE_8__/* .FILTER_RANGE */ .B2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Calendar, {
                                date: startDate,
                                minDate: minDate,
                                maxDate: endDate,
                                locale: (0,lib_lang__WEBPACK_IMPORTED_MODULE_7__/* .getDateLocale */ .t4)(locale),
                                onChange: setStartDate
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Calendar, {
                                date: endDate,
                                minDate: startDate,
                                maxDate: maxDate,
                                locale: (0,lib_lang__WEBPACK_IMPORTED_MODULE_7__/* .getDateLocale */ .t4)(locale),
                                onChange: setEndDate
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_DatePickerForm_module_css__WEBPACK_IMPORTED_MODULE_10___default().buttons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "primary",
                        onClick: handleSave,
                        disabled: disabled,
                        children: formatMessage(labels.save)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePickerForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;