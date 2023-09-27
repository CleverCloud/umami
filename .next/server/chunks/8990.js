exports.id = 8990;
exports.ids = [8990];
exports.modules = {

/***/ 46371:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "WebsiteMetricsBar_container__l48_N",
	"actions": "WebsiteMetricsBar_actions__9j6qn",
	"sticky": "WebsiteMetricsBar_sticky__hmFXT",
	"isSticky": "WebsiteMetricsBar_isSticky__T4h2B"
};


/***/ }),

/***/ 8990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ WebsiteMetricsBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var components_input_WebsiteDateFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98757);
/* harmony import */ var components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20495);
/* harmony import */ var components_metrics_MetricsBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20691);
/* harmony import */ var components_pages_reports_FilterSelectForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95444);
/* harmony import */ var components_pages_reports_PopupForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61371);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29163);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46371);
/* harmony import */ var _WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_2__, components_input_WebsiteDateFilter__WEBPACK_IMPORTED_MODULE_3__, components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__, components_pages_reports_FilterSelectForm__WEBPACK_IMPORTED_MODULE_6__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_2__, components_input_WebsiteDateFilter__WEBPACK_IMPORTED_MODULE_3__, components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__, components_pages_reports_FilterSelectForm__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function WebsiteMetricsBar({ websiteId, showFilter = true, sticky }) {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    const { get, useQuery } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useApi */ .h_)();
    const [dateRange] = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useDateRange */ .Sy)(websiteId);
    const { startDate, endDate, modified } = dateRange;
    const { ref, isSticky } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSticky */ .Ax)({
        enabled: sticky
    });
    const { resolveUrl, router, query: { url, referrer, title, os, browser, device, country, region, city } } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .usePageQuery */ .v$)();
    const { data, error, isLoading, isFetched } = useQuery([
        "websites:stats",
        {
            websiteId,
            modified,
            url,
            referrer,
            title,
            os,
            browser,
            device,
            country,
            region,
            city
        }
    ], ()=>get(`/websites/${websiteId}/stats`, {
            startAt: +startDate,
            endAt: +endDate,
            url,
            referrer,
            title,
            os,
            browser,
            device,
            country,
            region,
            city
        }));
    const fieldOptions = [
        {
            name: "url",
            type: "string",
            label: formatMessage(labels.url)
        },
        {
            name: "referrer",
            type: "string",
            label: formatMessage(labels.referrer)
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
    const { pageviews, uniques, bounces, totaltime } = data || {};
    const num = Math.min(data && uniques.value, data && bounces.value);
    const diffs = data && {
        pageviews: pageviews.value - pageviews.change,
        uniques: uniques.value - uniques.change,
        bounces: bounces.value - bounces.change,
        totaltime: totaltime.value - totaltime.change
    };
    const handleAddFilter = ({ name, value })=>{
        router.push(resolveUrl({
            [name]: value
        }));
    };
    const WebsiteFilterButton = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_8__.PopupTrigger, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_8__.Button, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_8__.Icon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_8__.Icons.Plus, {})
                        }),
                        formatMessage(labels.filter)
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_8__.Popup, {
                    position: "bottom",
                    alignment: "start",
                    className: (_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().popup),
                    children: (close)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_reports_PopupForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            onClose: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_reports_FilterSelectForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                websiteId: websiteId,
                                items: fieldOptions,
                                onSelect: (value)=>{
                                    handleAddFilter(value);
                                    close();
                                },
                                allowFilterSelect: false
                            })
                        });
                    }
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_8__.Row, {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().container), {
            [(_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().sticky)]: sticky,
            [(_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().isSticky)]: isSticky
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_8__.Column, {
                defaultSize: 12,
                xl: 8,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_MetricsBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    isLoading: isLoading,
                    isFetched: isFetched,
                    error: error,
                    children: !error && isFetched && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: (_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                label: formatMessage(labels.views),
                                value: pageviews.value,
                                change: pageviews.change
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: (_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                label: formatMessage(labels.visitors),
                                value: uniques.value,
                                change: uniques.change
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: (_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                label: formatMessage(labels.bounceRate),
                                value: uniques.value ? num / uniques.value * 100 : 0,
                                change: uniques.value && uniques.change ? num / uniques.value * 100 - Math.min(diffs.uniques, diffs.bounces) / diffs.uniques * 100 || 0 : 0,
                                format: (n)=>Number(n).toFixed(0) + "%",
                                reverseColors: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_MetricCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: (_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
                                label: formatMessage(labels.averageVisitTime),
                                value: totaltime.value && pageviews.value ? totaltime.value / (pageviews.value - bounces.value) : 0,
                                change: totaltime.value && pageviews.value ? (diffs.totaltime / (diffs.pageviews - diffs.bounces) - totaltime.value / (pageviews.value - bounces.value)) * -1 || 0 : 0,
                                format: (n)=>`${n < 0 ? "-" : ""}${(0,lib_format__WEBPACK_IMPORTED_MODULE_10__/* .formatShortTime */ .vM)(Math.abs(~~n), [
                                        "m",
                                        "s"
                                    ], " ")}`
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_8__.Column, {
                defaultSize: 12,
                xl: 4,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_WebsiteMetricsBar_module_css__WEBPACK_IMPORTED_MODULE_9___default().actions),
                    children: [
                        showFilter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WebsiteFilterButton, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_WebsiteDateFilter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            websiteId: websiteId
                        })
                    ]
                })
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WebsiteMetricsBar)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;