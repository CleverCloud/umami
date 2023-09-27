"use strict";
exports.id = 5702;
exports.ids = [5702];
exports.modules = {

/***/ 35702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PageviewsChart */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BarChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34924);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var lib_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BarChart__WEBPACK_IMPORTED_MODULE_1__, components_hooks__WEBPACK_IMPORTED_MODULE_2__]);
([_BarChart__WEBPACK_IMPORTED_MODULE_1__, components_hooks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function PageviewsChart({ websiteId, data, unit, loading, ...props }) {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    const { colors } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .Fg)();
    const { locale } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLocale */ .bU)();
    const datasets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!data) return [];
        return [
            {
                label: formatMessage(labels.uniqueVisitors),
                data: data.sessions,
                borderWidth: 1,
                ...colors.chart.visitors
            },
            {
                label: formatMessage(labels.pageViews),
                data: data.pageviews,
                borderWidth: 1,
                ...colors.chart.views
            }
        ];
    }, [
        data,
        colors,
        formatMessage,
        labels
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BarChart__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        key: websiteId,
        datasets: datasets,
        unit: unit,
        loading: loading,
        renderXLabel: (0,lib_charts__WEBPACK_IMPORTED_MODULE_3__/* .renderDateLabels */ .oq)(unit, locale),
        renderTooltipPopup: (0,lib_charts__WEBPACK_IMPORTED_MODULE_3__/* .renderStatusTooltipPopup */ .zK)(unit, locale)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageviewsChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;