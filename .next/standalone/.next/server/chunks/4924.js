exports.id = 4924;
exports.ids = [4924];
exports.modules = {

/***/ 23675:
/***/ ((module) => {

// Exports
module.exports = {
	"tooltip": "HoverTooltip_tooltip__csrWi"
};


/***/ }),

/***/ 64309:
/***/ ((module) => {

// Exports
module.exports = {
	"chart": "BarChart_chart__EO1Ol",
	"tooltip": "BarChart_tooltip__FWKKp",
	"value": "BarChart_value__D6s2F"
};


/***/ }),

/***/ 15394:
/***/ ((module) => {

// Exports
module.exports = {
	"legend": "Legend_legend__h9a1F",
	"label": "Legend_label__HSSWz",
	"hidden": "Legend_hidden__EX6iO"
};


/***/ }),

/***/ 66531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export HoverTooltip */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HoverTooltip_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23675);
/* harmony import */ var _HoverTooltip_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HoverTooltip_module_css__WEBPACK_IMPORTED_MODULE_3__);




function HoverTooltip({ children }) {
    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: -1000,
        y: -1000
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handler = (e)=>{
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        document.addEventListener("mousemove", handler);
        return ()=>{
            document.removeEventListener("mousemove", handler);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        className: (_HoverTooltip_module_css__WEBPACK_IMPORTED_MODULE_3___default().tooltip),
        style: {
            left: position.x,
            top: position.y
        },
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverTooltip);


/***/ }),

/***/ 34924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export BarChart */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50955);
/* harmony import */ var components_common_HoverTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66531);
/* harmony import */ var components_metrics_Legend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8890);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91998);
/* harmony import */ var components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53353);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73865);
/* harmony import */ var lib_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7246);
/* harmony import */ var _BarChart_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64309);
/* harmony import */ var _BarChart_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BarChart_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js_auto__WEBPACK_IMPORTED_MODULE_4__, components_metrics_Legend__WEBPACK_IMPORTED_MODULE_6__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__, components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__]);
([chart_js_auto__WEBPACK_IMPORTED_MODULE_4__, components_metrics_Legend__WEBPACK_IMPORTED_MODULE_6__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__, components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function BarChart({ datasets, unit, animationDuration = lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_ANIMATION_DURATION */ ._F, stacked = false, loading = false, renderXLabel, renderYLabel, XAxisType = "time", YAxisType = "linear", renderTooltipPopup, onCreate, onUpdate, className }) {
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const chart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [tooltip, setTooltipPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { theme, colors } = (0,components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const getOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: animationDuration,
                resize: {
                    duration: 0
                },
                active: {
                    duration: 0
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false,
                    external: renderTooltipPopup ? renderTooltipPopup.bind(null, setTooltipPopup) : undefined
                }
            },
            scales: {
                x: {
                    type: XAxisType,
                    stacked: true,
                    time: {
                        unit
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        color: colors.chart.line
                    },
                    ticks: {
                        color: colors.chart.text,
                        autoSkip: false,
                        maxRotation: 0,
                        callback: renderXLabel
                    }
                },
                y: {
                    type: YAxisType,
                    min: 0,
                    beginAtZero: true,
                    stacked,
                    grid: {
                        color: colors.chart.line
                    },
                    border: {
                        color: colors.chart.line
                    },
                    ticks: {
                        color: colors.text,
                        callback: renderYLabel || lib_charts__WEBPACK_IMPORTED_MODULE_10__/* .renderNumberLabels */ .F$
                    }
                }
            }
        };
    }, [
        animationDuration,
        renderTooltipPopup,
        renderXLabel,
        XAxisType,
        YAxisType,
        stacked,
        colors,
        unit,
        locale
    ]);
    const createChart = ()=>{
        chart_js_auto__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.font.family = "Inter";
        const options = getOptions();
        chart.current = new chart_js_auto__WEBPACK_IMPORTED_MODULE_4__["default"](canvas.current, {
            type: "bar",
            data: {
                datasets
            },
            options
        });
        onCreate?.(chart.current);
    };
    const updateChart = ()=>{
        setTooltipPopup(null);
        datasets.forEach((dataset, index)=>{
            chart.current.data.datasets[index].data = dataset.data;
            chart.current.data.datasets[index].label = dataset.label;
        });
        chart.current.options = getOptions();
        onUpdate?.(chart.current);
        chart.current.update();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (datasets) {
            if (!chart.current) {
                createChart();
            } else {
                updateChart();
            }
        }
    }, [
        datasets,
        unit,
        theme,
        animationDuration,
        locale
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_BarChart_module_css__WEBPACK_IMPORTED_MODULE_11___default().chart), className),
                children: [
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
                        position: "page",
                        icon: "dots"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                        ref: canvas
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_Legend__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                chart: chart.current
            }),
            tooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_HoverTooltip__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_BarChart_module_css__WEBPACK_IMPORTED_MODULE_11___default().tooltip),
                    children: tooltip
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Legend */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79168);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91998);
/* harmony import */ var components_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43168);
/* harmony import */ var _Legend_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15394);
/* harmony import */ var _Legend_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Legend_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([colord__WEBPACK_IMPORTED_MODULE_3__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__]);
([colord__WEBPACK_IMPORTED_MODULE_3__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Legend({ chart }) {
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const forceUpdate = (0,components_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const handleClick = (index)=>{
        const meta = chart.getDatasetMeta(index);
        meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null;
        chart.update();
        forceUpdate();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        forceUpdate();
    }, [
        locale,
        forceUpdate
    ]);
    if (!chart?.legend?.legendItems.find(({ text })=>text)) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Legend_module_css__WEBPACK_IMPORTED_MODULE_7___default().legend),
        children: chart.legend.legendItems.map(({ text, fillStyle, datasetIndex, hidden })=>{
            const color = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)(fillStyle);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_Legend_module_css__WEBPACK_IMPORTED_MODULE_7___default().label), {
                    [(_Legend_module_css__WEBPACK_IMPORTED_MODULE_7___default().hidden)]: hidden
                }),
                onClick: ()=>handleClick(datasetIndex),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.StatusLight, {
                    color: color.alpha(color.alpha() + 0.2).toHex(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: locale,
                        children: text
                    })
                })
            }, text);
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Legend);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F$: () => (/* binding */ renderNumberLabels),
/* harmony export */   oq: () => (/* binding */ renderDateLabels),
/* harmony export */   zK: () => (/* binding */ renderStatusTooltipPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91534);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29163);




function renderNumberLabels(label) {
    return +label > 1000 ? (0,lib_format__WEBPACK_IMPORTED_MODULE_3__/* .formatLongNumber */ .mu)(label) : label;
}
function renderDateLabels(unit, locale) {
    return (label, index, values)=>{
        const d = new Date(values[index].value);
        switch(unit){
            case "minute":
                return (0,lib_date__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(d, "h:mm", locale);
            case "hour":
                return (0,lib_date__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(d, "p", locale);
            case "day":
                return (0,lib_date__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(d, "MMM d", locale);
            case "month":
                return (0,lib_date__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(d, "MMM", locale);
            case "year":
                return (0,lib_date__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(d, "YYY", locale);
            default:
                return label;
        }
    };
}
function renderStatusTooltipPopup(unit, locale) {
    return (setTooltipPopup, model)=>{
        const { opacity, labelColors, dataPoints } = model.tooltip;
        if (!dataPoints?.length || !opacity) {
            setTooltipPopup(null);
            return;
        }
        const formats = {
            millisecond: "T",
            second: "pp",
            minute: "p",
            hour: "h:mm aaa - PP",
            day: "PPPP",
            week: "PPPP",
            month: "LLLL yyyy",
            quarter: "qqq",
            year: "yyyy"
        };
        setTooltipPopup(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: (0,lib_date__WEBPACK_IMPORTED_MODULE_2__/* .formatDate */ .p6)(new Date(dataPoints[0].raw.x), formats[unit], locale)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.StatusLight, {
                        color: labelColors?.[0]?.backgroundColor,
                        children: [
                            (0,lib_format__WEBPACK_IMPORTED_MODULE_3__/* .formatLongNumber */ .mu)(dataPoints[0].raw.y),
                            " ",
                            dataPoints[0].dataset.label
                        ]
                    })
                })
            ]
        }));
    };
}


/***/ })

};
;