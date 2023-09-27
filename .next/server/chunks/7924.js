"use strict";
exports.id = 7924;
exports.ids = [7924];
exports.modules = {

/***/ 17924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteChart */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_metrics_PageviewsChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35702);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_PageviewsChart__WEBPACK_IMPORTED_MODULE_2__, components_hooks__WEBPACK_IMPORTED_MODULE_3__]);
([components_metrics_PageviewsChart__WEBPACK_IMPORTED_MODULE_2__, components_hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function WebsiteChart({ websiteId }) {
    const [dateRange] = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useDateRange */ .Sy)(websiteId);
    const { startDate, endDate, unit, modified } = dateRange;
    const [timezone] = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useTimezone */ .gi)();
    const { query: { url, referrer, os, browser, device, country, region, city, title } } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePageQuery */ .v$)();
    const { get, useQuery } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useApi */ .h_)();
    const { data, isLoading } = useQuery([
        "websites:pageviews",
        {
            websiteId,
            modified,
            url,
            referrer,
            os,
            browser,
            device,
            country,
            region,
            city,
            title
        }
    ], ()=>get(`/websites/${websiteId}/pageviews`, {
            startAt: +startDate,
            endAt: +endDate,
            unit,
            timezone,
            url,
            referrer,
            os,
            browser,
            device,
            country,
            region,
            city,
            title
        }));
    const chartData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (data) {
            return {
                pageviews: (0,lib_date__WEBPACK_IMPORTED_MODULE_4__/* .getDateArray */ .QR)(data.pageviews, startDate, endDate, unit),
                sessions: (0,lib_date__WEBPACK_IMPORTED_MODULE_4__/* .getDateArray */ .QR)(data.sessions, startDate, endDate, unit)
            };
        }
        return {
            pageviews: [],
            sessions: []
        };
    }, [
        data,
        startDate,
        endDate,
        unit
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_PageviewsChart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        websiteId: websiteId,
        data: chartData,
        unit: unit,
        loading: isLoading
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;