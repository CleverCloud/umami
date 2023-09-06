"use strict";
exports.id = 6687;
exports.ids = [6687];
exports.modules = {

/***/ 96687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export EventsChart */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79168);
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34924);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91534);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77253);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73865);
/* harmony import */ var lib_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([colord__WEBPACK_IMPORTED_MODULE_3__, _BarChart__WEBPACK_IMPORTED_MODULE_4__, components_hooks__WEBPACK_IMPORTED_MODULE_6__]);
([colord__WEBPACK_IMPORTED_MODULE_3__, _BarChart__WEBPACK_IMPORTED_MODULE_4__, components_hooks__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function EventsChart({ websiteId, className, token }) {
    const { get, useQuery } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useApi */ .h_)();
    const [{ startDate, endDate, unit, modified }] = (0,components_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useDateRange */ .Sy)(websiteId);
    const { locale } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useLocale */ .bU)();
    const [timezone] = (0,components_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useTimezone */ .gi)();
    const { query: { url, eventName } } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_6__/* .usePageQuery */ .v$)();
    const { data, isLoading } = useQuery([
        "events",
        websiteId,
        modified,
        eventName
    ], ()=>get(`/websites/${websiteId}/events`, {
            startAt: +startDate,
            endAt: +endDate,
            unit,
            timezone,
            url,
            eventName,
            token
        }));
    const datasets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!data) return [];
        if (isLoading) return data;
        const map = data.reduce((obj, { x, t, y })=>{
            if (!obj[x]) {
                obj[x] = [];
            }
            obj[x].push({
                x: t,
                y
            });
            return obj;
        }, {});
        Object.keys(map).forEach((key)=>{
            map[key] = (0,lib_date__WEBPACK_IMPORTED_MODULE_5__/* .getDateArray */ .QR)(map[key], startDate, endDate, unit);
        });
        return Object.keys(map).map((key, index)=>{
            const color = (0,colord__WEBPACK_IMPORTED_MODULE_3__.colord)(lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .EVENT_COLORS */ .y2[index % lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .EVENT_COLORS */ .y2.length]);
            return {
                label: key,
                data: map[key],
                lineTension: 0,
                backgroundColor: color.alpha(0.6).toRgbString(),
                borderColor: color.alpha(0.7).toRgbString(),
                borderWidth: 1
            };
        });
    }, [
        data,
        isLoading,
        startDate,
        endDate,
        unit
    ]);
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
            icon: "dots"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BarChart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: className,
        datasets: datasets,
        unit: unit,
        height: 300,
        loading: isLoading,
        stacked: true,
        renderXLabel: (0,lib_charts__WEBPACK_IMPORTED_MODULE_8__/* .renderDateLabels */ .oq)(unit, locale),
        renderTooltipPopup: (0,lib_charts__WEBPACK_IMPORTED_MODULE_8__/* .renderStatusTooltipPopup */ .zK)(unit, locale)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;