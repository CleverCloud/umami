exports.id = 2979;
exports.ids = [2979];
exports.modules = {

/***/ 89305:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "FilterLink_row__nGLcj",
	"inactive": "FilterLink_inactive__UsSP_",
	"active": "FilterLink_active__JHnqI",
	"link": "FilterLink_link__HGE0L",
	"label": "FilterLink_label__6wkMb",
	"icon": "FilterLink_icon__WXrI_"
};


/***/ }),

/***/ 21015:
/***/ ((module) => {

// Exports
module.exports = {
	"filters": "FilterTags_filters__Q2998",
	"label": "FilterTags_label__EIw9x",
	"tag": "FilterTags_tag__w9Q_a"
};


/***/ }),

/***/ 34542:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MetricsTable_container__nRC5i",
	"footer": "MetricsTable_footer___ln5U"
};


/***/ }),

/***/ 93179:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "QueryParametersTable_item__Z91z1",
	"param": "QueryParametersTable_param__5BKby",
	"value": "QueryParametersTable_value__lKWEY"
};


/***/ }),

/***/ 24948:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "WebsiteMenuView_menu____TNh",
	"content": "WebsiteMenuView_content__MMpQU"
};


/***/ }),

/***/ 22975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FilterLink */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51808);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53250);
/* harmony import */ var _FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89305);
/* harmony import */ var _FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7__);








function FilterLink({ id, value, label, externalUrl, children, className }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { resolveUrl, query } = (0,components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const active = query[id] !== undefined;
    const selected = query[id] === value;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default().row), className, {
            [(_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default().inactive)]: active && !selected,
            [(_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default().active)]: active && selected
        }),
        children: [
            children,
            !value && `(${label || formatMessage(labels.unknown)})`,
            value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: resolveUrl({
                    [id]: value
                }),
                className: (_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default().label),
                replace: true,
                children: (0,next_basics__WEBPACK_IMPORTED_MODULE_4__.safeDecodeURI)(label || value)
            }),
            externalUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: (_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),
                href: externalUrl,
                target: "_blank",
                rel: "noreferrer noopener",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    className: (_FilterLink_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icons.External, {})
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterLink);


/***/ }),

/***/ 70033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export BrowsersTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22975);
/* harmony import */ var components_metrics_MetricsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74276);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_MetricsTable__WEBPACK_IMPORTED_MODULE_3__, components_hooks_useFormat__WEBPACK_IMPORTED_MODULE_5__]);
([components_metrics_MetricsTable__WEBPACK_IMPORTED_MODULE_3__, components_hooks_useFormat__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function BrowsersTable({ websiteId, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { formatBrowser } = (0,components_hooks_useFormat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    function renderLink({ x: browser }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: "browser",
            value: browser,
            label: formatBrowser(browser),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${basePath}/images/browsers/${browser || "unknown"}.png`,
                alt: browser,
                width: 16,
                height: 16
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_MetricsTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.browsers),
        type: "browser",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId,
        renderLabel: renderLink
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowsersTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CitiesTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74276);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68867);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22975);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91998);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81235);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_2__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__]);
([_MetricsTable__WEBPACK_IMPORTED_MODULE_2__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function CitiesTable({ websiteId, ...props }) {
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const countryNames = (0,components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(locale);
    const renderLabel = (city, country)=>{
        const name = countryNames[country];
        return name ? `${city}, ${name}` : city;
    };
    const renderLink = ({ x: city, country })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            id: "city",
            value: city,
            label: renderLabel(city, country),
            children: country && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${basePath}/images/flags/${country?.toLowerCase() || "xx"}.png`,
                alt: country
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.cities),
        type: "city",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId,
        dataFilter: lib_filters__WEBPACK_IMPORTED_MODULE_7__/* .emptyFilter */ .jd,
        renderLabel: renderLink
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CitiesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CountriesTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22975);
/* harmony import */ var components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81235);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_4__, _MetricsTable__WEBPACK_IMPORTED_MODULE_5__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_4__, _MetricsTable__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function CountriesTable({ websiteId, ...props }) {
    const { locale } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useLocale */ .bU)();
    const countryNames = (0,components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(locale);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMessages */ .y_)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { formatCountry } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFormat */ .ve)();
    function renderLink({ x: code }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: "country",
            className: locale,
            value: countryNames[code] && code,
            label: formatCountry(code),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${basePath}/images/flags/${code?.toLowerCase() || "xx"}.png`,
                alt: code
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.countries),
        type: "country",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId,
        renderLabel: renderLink
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountriesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export DevicesTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74276);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22975);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__, components_hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__, components_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function DevicesTable({ websiteId, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { formatDevice } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFormat */ .ve)();
    function renderLink({ x: device }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: "device",
            value: labels[device] && device,
            label: formatDevice(device),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${basePath}/images/device/${device?.toLowerCase() || "unknown"}.png`,
                alt: device,
                width: 16,
                height: 16
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.devices),
        type: "device",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId,
        renderLabel: renderLink
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DevicesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export EventsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74276);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__]);
_MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function EventsTable({ websiteId, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    function handleDataLoad(data) {
        props.onDataLoad?.(data);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.events),
        type: "event",
        metric: formatMessage(labels.actions),
        websiteId: websiteId,
        onDataLoad: handleDataLoad
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FilterTags */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51808);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var _FilterTags_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21015);
/* harmony import */ var _FilterTags_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FilterTags_module_css__WEBPACK_IMPORTED_MODULE_5__);






function FilterTags({ params }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { router, resolveUrl, query: { view } } = (0,components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    if (Object.keys(params).filter((key)=>params[key]).length === 0) {
        return null;
    }
    function handleCloseFilter(param) {
        if (!param) {
            router.push(resolveUrl({
                view
            }, true));
        } else {
            router.push(resolveUrl({
                [param]: undefined
            }));
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_FilterTags_module_css__WEBPACK_IMPORTED_MODULE_5___default().filters),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_FilterTags_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                children: formatMessage(labels.filters)
            }),
            Object.keys(params).map((key)=>{
                if (!params[key]) {
                    return null;
                }
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_FilterTags_module_css__WEBPACK_IMPORTED_MODULE_5___default().tag),
                    onClick: ()=>handleCloseFilter(key),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: `${key}`
                                }),
                                " = ",
                                `${(0,next_basics__WEBPACK_IMPORTED_MODULE_1__.safeDecodeURI)(params[key])}`
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icons.Close, {})
                        })
                    ]
                }, key);
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "sm",
                variant: "quiet",
                onClick: ()=>handleCloseFilter(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icons.Close, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        children: formatMessage(labels.clearAll)
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterTags);


/***/ }),

/***/ 20797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export LanguagesTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74276);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68867);
/* harmony import */ var components_hooks_useLanguageNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91654);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91998);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__]);
([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function LanguagesTable({ websiteId, onDataLoad, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const languageNames = (0,components_hooks_useLanguageNames__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(locale);
    const renderLabel = ({ x })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: locale,
            children: languageNames[x?.split("-")[0]] ?? x
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.languages),
        type: "language",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId,
        onDataLoad: (data)=>onDataLoad?.((0,lib_filters__WEBPACK_IMPORTED_MODULE_5__/* .percentFilter */ .fr)(data)),
        renderLabel: renderLabel
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguagesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export MetricsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var thenby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26958);
/* harmony import */ var thenby__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(thenby__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35338);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68867);
/* harmony import */ var components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72505);
/* harmony import */ var components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51808);
/* harmony import */ var components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68716);
/* harmony import */ var _ListTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55046);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73865);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43756);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53250);
/* harmony import */ var _MetricsTable_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34542);
/* harmony import */ var _MetricsTable_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_MetricsTable_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__, components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_7__, _ListTable__WEBPACK_IMPORTED_MODULE_10__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_14__]);
([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__, components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_7__, _ListTable__WEBPACK_IMPORTED_MODULE_10__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function MetricsTable({ websiteId, type, className, dataFilter, filterOptions, limit, onDataLoad, delay = null, ...props }) {
    const [{ startDate, endDate, modified }] = (0,components_hooks_useDateRange__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(websiteId);
    const { resolveUrl, router, query: { url, referrer, title, os, browser, device, country, region, city } } = (0,components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { dir } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    const { data, isLoading, isFetched, error } = useQuery([
        "websites:metrics",
        {
            websiteId,
            type,
            modified,
            url,
            referrer,
            os,
            title,
            browser,
            device,
            country,
            region,
            city
        }
    ], ()=>{
        const filters = {
            url,
            title,
            referrer,
            os,
            browser,
            device,
            country,
            region,
            city
        };
        filters[type] = undefined;
        return get(`/websites/${websiteId}/metrics`, {
            type,
            startAt: +startDate,
            endAt: +endDate,
            ...filters
        });
    }, {
        onSuccess: onDataLoad,
        retryDelay: delay || lib_constants__WEBPACK_IMPORTED_MODULE_11__/* .DEFAULT_ANIMATION_DURATION */ ._F
    });
    const filteredData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (data) {
            let items = data;
            if (dataFilter) {
                if (Array.isArray(dataFilter)) {
                    items = dataFilter.reduce((arr, filter)=>{
                        return filter(arr);
                    }, items);
                } else {
                    items = dataFilter(data);
                }
            }
            items = (0,lib_filters__WEBPACK_IMPORTED_MODULE_15__/* .percentFilter */ .fr)(items);
            if (limit) {
                items = items.filter((e, i)=>i < limit);
            }
            if (filterOptions?.sort === false) {
                return items;
            }
            return items.sort(thenby__WEBPACK_IMPORTED_MODULE_4___default()("y", -1).thenBy("x"));
        }
        return [];
    }, [
        data,
        error,
        dataFilter,
        filterOptions,
        limit
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_MetricsTable_module_css__WEBPACK_IMPORTED_MODULE_16___default().container), className),
        children: [
            !data && isLoading && !isFetched && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
                icon: "dots"
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            data && !error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ...props,
                data: filteredData,
                className: className
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_MetricsTable_module_css__WEBPACK_IMPORTED_MODULE_16___default().footer),
                children: data && !error && limit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: router.pathname,
                    as: resolveUrl({
                        view: type
                    }),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "quiet",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: formatMessage(labels.more)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                size: "sm",
                                rotate: dir === "rtl" ? 180 : 0,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.ArrowRight, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export OSTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74276);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22975);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__]);
_MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function OSTable({ websiteId, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    function renderLink({ x: os }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: "os",
            value: os,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${basePath}/images/os/${os?.toLowerCase().replaceAll(/[^\w]+/g, "-") || "unknown"}.png`,
                alt: os,
                width: 16,
                height: 16
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        websiteId: websiteId,
        title: formatMessage(labels.os),
        metric: formatMessage(labels.visitors),
        renderLabel: renderLink,
        type: "os"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OSTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PagesTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22975);
/* harmony import */ var components_common_FilterButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44289);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74276);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51808);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_3__]);
_MetricsTable__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function PagesTable({ websiteId, showFilters, ...props }) {
    const { router, resolveUrl, query: { view = "url" } } = (0,components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const handleSelect = (key)=>{
        router.push(resolveUrl({
            view: key
        }), null, {
            shallow: true
        });
    };
    const buttons = [
        {
            label: "URL",
            key: "url"
        },
        {
            label: formatMessage(labels.title),
            key: "title"
        }
    ];
    const renderLink = ({ x })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            id: view,
            value: x,
            label: !x && formatMessage(labels.none)
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showFilters && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterButtons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                items: buttons,
                selectedKey: view,
                onSelect: handleSelect
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...props,
                title: formatMessage(labels.pages),
                type: view,
                metric: formatMessage(labels.views),
                websiteId: websiteId,
                dataFilter: lib_filters__WEBPACK_IMPORTED_MODULE_6__/* .emptyFilter */ .jd,
                renderLabel: renderLink
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export QueryParametersTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_common_FilterButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44289);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68867);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73865);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74276);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53250);
/* harmony import */ var _QueryParametersTable_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93179);
/* harmony import */ var _QueryParametersTable_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_QueryParametersTable_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_5__]);
_MetricsTable__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const filters = {
    [lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_RAW */ .K_]: lib_filters__WEBPACK_IMPORTED_MODULE_7__/* .emptyFilter */ .jd,
    [lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_COMBINED */ .O0]: [
        lib_filters__WEBPACK_IMPORTED_MODULE_7__/* .emptyFilter */ .jd,
        lib_filters__WEBPACK_IMPORTED_MODULE_7__/* .paramFilter */ .RL
    ]
};
function QueryParametersTable({ websiteId, showFilters, ...props }) {
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_COMBINED */ .O0);
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const buttons = [
        {
            label: formatMessage(labels.filterCombined),
            key: lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_COMBINED */ .O0
        },
        {
            label: formatMessage(labels.filterRaw),
            key: lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_RAW */ .K_
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showFilters && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterButtons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                items: buttons,
                selectedKey: filter,
                onSelect: setFilter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...props,
                title: formatMessage(labels.query),
                type: "query",
                metric: formatMessage(labels.views),
                websiteId: websiteId,
                dataFilter: filters[filter],
                renderLabel: ({ x, p, v })=>filter === lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_RAW */ .K_ ? x : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_QueryParametersTable_module_css__WEBPACK_IMPORTED_MODULE_8___default().item),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_QueryParametersTable_module_css__WEBPACK_IMPORTED_MODULE_8___default().param),
                                children: (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.safeDecodeURI)(p)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_QueryParametersTable_module_css__WEBPACK_IMPORTED_MODULE_8___default().value),
                                children: (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.safeDecodeURI)(v)
                            })
                        ]
                    }),
                delay: 0
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryParametersTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ReferrersTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74276);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22975);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__]);
_MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ReferrersTable({ websiteId, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const renderLink = ({ x: referrer })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: "referrer",
            value: referrer,
            externalUrl: `https://${referrer}`,
            label: !referrer && formatMessage(labels.none)
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            ...props,
            title: formatMessage(labels.referrers),
            type: "referrer",
            metric: formatMessage(labels.views),
            websiteId: websiteId,
            renderLabel: renderLink
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReferrersTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export RegionsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22975);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68867);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91998);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81235);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74276);
/* harmony import */ var public_iso_3166_2_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21080);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__, _MetricsTable__WEBPACK_IMPORTED_MODULE_6__]);
([components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__, _MetricsTable__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function RegionsTable({ websiteId, ...props }) {
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const countryNames = (0,components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(locale);
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const renderLabel = (code, country)=>{
        const region = code.includes("-") ? code : `${country}-${code}`;
        return public_iso_3166_2_json__WEBPACK_IMPORTED_MODULE_7__[region] ? `${public_iso_3166_2_json__WEBPACK_IMPORTED_MODULE_7__[region]}, ${countryNames[country]}` : region;
    };
    const renderLink = ({ x: code, country })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_FilterLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            id: "region",
            className: locale,
            value: code,
            label: renderLabel(code, country),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `${basePath}/images/flags/${country?.toLowerCase() || "xx"}.png`,
                alt: code
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.regions),
        type: "region",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId,
        dataFilter: lib_filters__WEBPACK_IMPORTED_MODULE_8__/* .emptyFilter */ .jd,
        renderLabel: renderLink
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegionsTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ScreenTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74276);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MetricsTable__WEBPACK_IMPORTED_MODULE_1__]);
_MetricsTable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ScreenTable({ websiteId, ...props }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MetricsTable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        title: formatMessage(labels.screens),
        type: "screen",
        metric: formatMessage(labels.visitors),
        websiteId: websiteId
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ WebsiteDetailsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70790);
/* harmony import */ var components_pages_websites_WebsiteChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17924);
/* harmony import */ var components_metrics_FilterTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63306);
/* harmony import */ var components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51808);
/* harmony import */ var _WebsiteTableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9068);
/* harmony import */ var _WebsiteMenuView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83393);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77253);
/* harmony import */ var _WebsiteHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81992);
/* harmony import */ var _WebsiteMetricsBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pages_websites_WebsiteChart__WEBPACK_IMPORTED_MODULE_4__, _WebsiteTableView__WEBPACK_IMPORTED_MODULE_7__, _WebsiteMenuView__WEBPACK_IMPORTED_MODULE_8__, components_hooks__WEBPACK_IMPORTED_MODULE_9__, _WebsiteHeader__WEBPACK_IMPORTED_MODULE_10__, _WebsiteMetricsBar__WEBPACK_IMPORTED_MODULE_11__]);
([components_pages_websites_WebsiteChart__WEBPACK_IMPORTED_MODULE_4__, _WebsiteTableView__WEBPACK_IMPORTED_MODULE_7__, _WebsiteMenuView__WEBPACK_IMPORTED_MODULE_8__, components_hooks__WEBPACK_IMPORTED_MODULE_9__, _WebsiteHeader__WEBPACK_IMPORTED_MODULE_10__, _WebsiteMetricsBar__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function WebsiteDetailsPage({ websiteId }) {
    const { data: website, isLoading, error } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useWebsite */ .jG)(websiteId);
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const showLinks = !pathname.includes("/share/");
    const { query: { view, url, referrer, os, browser, device, country, region, city, title } } = (0,components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        loading: isLoading,
        error: error,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WebsiteHeader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                websiteId: websiteId,
                showLinks: showLinks
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_FilterTags__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                websiteId: websiteId,
                params: {
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WebsiteMetricsBar__WEBPACK_IMPORTED_MODULE_11__/* .WebsiteMetricsBar */ .g, {
                websiteId: websiteId,
                sticky: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pages_websites_WebsiteChart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                websiteId: websiteId
            }),
            !website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Loading, {
                icon: "dots",
                style: {
                    minHeight: 300
                }
            }),
            website && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    !view && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WebsiteTableView__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        websiteId: websiteId
                    }),
                    view && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WebsiteMenuView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        websiteId: websiteId
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ WebsiteMenuView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77727);
/* harmony import */ var components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70033);
/* harmony import */ var components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51385);
/* harmony import */ var components_metrics_RegionsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20304);
/* harmony import */ var components_metrics_CitiesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31306);
/* harmony import */ var components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46802);
/* harmony import */ var components_metrics_LanguagesTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20797);
/* harmony import */ var components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97850);
/* harmony import */ var components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25385);
/* harmony import */ var components_metrics_QueryParametersTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24996);
/* harmony import */ var components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18630);
/* harmony import */ var components_metrics_ScreenTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(80734);
/* harmony import */ var components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39076);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43756);
/* harmony import */ var components_layout_SideNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60481);
/* harmony import */ var components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51808);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(53250);
/* harmony import */ var _WebsiteMenuView_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24948);
/* harmony import */ var _WebsiteMenuView_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_WebsiteMenuView_module_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(91998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_4__, components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_5__, components_metrics_RegionsTable__WEBPACK_IMPORTED_MODULE_6__, components_metrics_CitiesTable__WEBPACK_IMPORTED_MODULE_7__, components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_8__, components_metrics_LanguagesTable__WEBPACK_IMPORTED_MODULE_9__, components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_10__, components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_11__, components_metrics_QueryParametersTable__WEBPACK_IMPORTED_MODULE_12__, components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_13__, components_metrics_ScreenTable__WEBPACK_IMPORTED_MODULE_14__, components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_15__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_20__]);
([components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_4__, components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_5__, components_metrics_RegionsTable__WEBPACK_IMPORTED_MODULE_6__, components_metrics_CitiesTable__WEBPACK_IMPORTED_MODULE_7__, components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_8__, components_metrics_LanguagesTable__WEBPACK_IMPORTED_MODULE_9__, components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_10__, components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_11__, components_metrics_QueryParametersTable__WEBPACK_IMPORTED_MODULE_12__, components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_13__, components_metrics_ScreenTable__WEBPACK_IMPORTED_MODULE_14__, components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_15__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const views = {
    url: components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    title: components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    referrer: components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
    browser: components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    os: components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    device: components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    screen: components_metrics_ScreenTable__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    country: components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    region: components_metrics_RegionsTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    city: components_metrics_CitiesTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    language: components_metrics_LanguagesTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    event: components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    query: components_metrics_QueryParametersTable__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
};
function WebsiteMenuView({ websiteId, websiteDomain }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)();
    const { dir } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)();
    const { resolveUrl, query: { view } } = (0,components_hooks_usePageQuery__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const items = [
        {
            key: "url",
            label: formatMessage(labels.pages),
            url: resolveUrl({
                view: "url"
            })
        },
        {
            key: "referrer",
            label: formatMessage(labels.referrers),
            url: resolveUrl({
                view: "referrer"
            })
        },
        {
            key: "browser",
            label: formatMessage(labels.browsers),
            url: resolveUrl({
                view: "browser"
            })
        },
        {
            key: "os",
            label: formatMessage(labels.os),
            url: resolveUrl({
                view: "os"
            })
        },
        {
            key: "device",
            label: formatMessage(labels.devices),
            url: resolveUrl({
                view: "device"
            })
        },
        {
            key: "country",
            label: formatMessage(labels.countries),
            url: resolveUrl({
                view: "country"
            })
        },
        {
            key: "region",
            label: formatMessage(labels.regions),
            url: resolveUrl({
                view: "region"
            })
        },
        {
            key: "city",
            label: formatMessage(labels.cities),
            url: resolveUrl({
                view: "city"
            })
        },
        {
            key: "language",
            label: formatMessage(labels.languages),
            url: resolveUrl({
                view: "language"
            })
        },
        {
            key: "screen",
            label: formatMessage(labels.screens),
            url: resolveUrl({
                view: "screen"
            })
        },
        {
            key: "event",
            label: formatMessage(labels.events),
            url: resolveUrl({
                view: "event"
            })
        },
        {
            key: "query",
            label: formatMessage(labels.queryParameters),
            url: resolveUrl({
                view: "query"
            })
        }
    ];
    const DetailsComponent = views[view] || (()=>null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Grid__WEBPACK_IMPORTED_MODULE_3__/* .GridRow */ .J, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Grid__WEBPACK_IMPORTED_MODULE_3__/* .GridColumn */ .C, {
                xs: 12,
                sm: 12,
                md: 12,
                defaultSize: 3,
                className: (_WebsiteMenuView_module_css__WEBPACK_IMPORTED_MODULE_21___default().menu),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: resolveUrl({
                            view: undefined
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
                            justifyContent: "center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                variant: "quiet",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        rotate: dir === "rtl" ? 0 : 180,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.ArrowRight, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        children: formatMessage(labels.back)
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_SideNav__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        items: items,
                        selectedKey: view,
                        shallow: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_3__/* .GridColumn */ .C, {
                xs: 12,
                sm: 12,
                md: 12,
                defaultSize: 9,
                className: (_WebsiteMenuView_module_css__WEBPACK_IMPORTED_MODULE_21___default().content),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsComponent, {
                    websiteId: websiteId,
                    websiteDomain: websiteDomain,
                    limit: false,
                    animate: false,
                    showFilters: true,
                    virtualize: true
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ WebsiteTableView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77727);
/* harmony import */ var components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25385);
/* harmony import */ var components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18630);
/* harmony import */ var components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70033);
/* harmony import */ var components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97850);
/* harmony import */ var components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46802);
/* harmony import */ var components_common_WorldMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69465);
/* harmony import */ var components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51385);
/* harmony import */ var components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39076);
/* harmony import */ var components_metrics_EventsChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96687);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_3__, components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_4__, components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_5__, components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_6__, components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_7__, components_common_WorldMap__WEBPACK_IMPORTED_MODULE_8__, components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_9__, components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_10__, components_metrics_EventsChart__WEBPACK_IMPORTED_MODULE_11__]);
([components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_3__, components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_4__, components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_5__, components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_6__, components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_7__, components_common_WorldMap__WEBPACK_IMPORTED_MODULE_8__, components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_9__, components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_10__, components_metrics_EventsChart__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function WebsiteTableView({ websiteId }) {
    const [countryData, setCountryData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const tableProps = {
        websiteId,
        limit: 10
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridRow */ .J, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        variant: "two",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_PagesTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            ...tableProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        variant: "two",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_ReferrersTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ...tableProps
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridRow */ .J, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        variant: "three",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_BrowsersTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ...tableProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        variant: "three",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_OSTable__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            ...tableProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        variant: "three",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_DevicesTable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            ...tableProps
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridRow */ .J, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        defaultSize: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_WorldMap__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            data: countryData
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        defaultSize: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_CountriesTable__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            ...tableProps,
                            onDataLoad: setCountryData
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridRow */ .J, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        lg: 4,
                        defaultSize: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_EventsTable__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            ...tableProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Grid__WEBPACK_IMPORTED_MODULE_2__/* .GridColumn */ .C, {
                        xs: 12,
                        sm: 12,
                        md: 12,
                        lg: 8,
                        defaultSize: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_EventsChart__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            websiteId: websiteId
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21080:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AD-02":"Canillo","AD-03":"Encamp","AD-04":"La Massana","AD-05":"Ordino","AD-06":"Sant Julia de Loria","AD-07":"Andorra la Vella","AD-08":"Escaldes-Engordany","AE-AJ":"\'Ajman","AE-AZ":"Abu Zaby","AE-DU":"Dubayy","AE-FU":"Al Fujayrah","AE-RK":"Ra\'s al Khaymah","AE-SH":"Ash Shariqah","AE-UQ":"Umm al Qaywayn","AF-BAL":"Balkh","AF-BAM":"Bamyan","AF-BDG":"Badghis","AF-BGL":"Baghlan","AF-DAY":"Daykundi","AF-FRA":"Farah","AF-FYB":"Faryab","AF-GHA":"Ghazni","AF-GHO":"Ghor","AF-HEL":"Helmand","AF-HER":"Herat","AF-JOW":"Jowzjan","AF-KAB":"Kabul","AF-KAN":"Kandahar","AF-KDZ":"Kunduz","AF-KHO":"Khost","AF-LAG":"Laghman","AF-LOG":"Logar","AF-NAN":"Nangarhar","AF-NIM":"Nimroz","AF-PAN":"Panjshayr","AF-PAR":"Parwan","AF-PIA":"Paktiya","AF-PKA":"Paktika","AF-SAM":"Samangan","AF-SAR":"Sar-e Pul","AF-TAK":"Takhar","AF-URU":"Uruzgan","AG-03":"Saint George","AG-04":"Saint John","AG-05":"Saint Mary","AG-07":"Saint Peter","AG-08":"Saint Philip","AG-10":"Barbuda","AG-11":"Redonda","AL-01":"Berat","AL-02":"Durres","AL-03":"Elbasan","AL-04":"Fier","AL-05":"Gjirokaster","AL-06":"Korce","AL-07":"Kukes","AL-08":"Lezhe","AL-09":"Diber","AL-10":"Shkoder","AL-11":"Tirane","AL-12":"Vlore","AM-AG":"Aragacotn","AM-AR":"Ararat","AM-AV":"Armavir","AM-ER":"Erevan","AM-GR":"Gegark\'unik\'","AM-KT":"Kotayk\'","AM-LO":"Lori","AM-SH":"Sirak","AM-SU":"Syunik\'","AM-TV":"Tavus","AM-VD":"Vayoc Jor","AO-BGO":"Bengo","AO-BGU":"Benguela","AO-BIE":"Bie","AO-CAB":"Cabinda","AO-CCU":"Cuando Cubango","AO-CNN":"Cunene","AO-CNO":"Cuanza-Norte","AO-CUS":"Cuanza-Sul","AO-HUA":"Huambo","AO-HUI":"Huila","AO-LNO":"Lunda-Norte","AO-LSU":"Lunda-Sul","AO-LUA":"Luanda","AO-MAL":"Malange","AO-MOX":"Moxico","AO-NAM":"Namibe","AO-UIG":"Uige","AO-ZAI":"Zaire","AR-A":"Salta","AR-B":"Buenos Aires","AR-C":"Ciudad Autonoma de Buenos Aires","AR-D":"San Luis","AR-E":"Entre Rios","AR-F":"La Rioja","AR-G":"Santiago del Estero","AR-H":"Chaco","AR-J":"San Juan","AR-K":"Catamarca","AR-L":"La Pampa","AR-M":"Mendoza","AR-N":"Misiones","AR-P":"Formosa","AR-Q":"Neuquen","AR-R":"Rio Negro","AR-S":"Santa Fe","AR-T":"Tucuman","AR-U":"Chubut","AR-V":"Tierra del Fuego","AR-W":"Corrientes","AR-X":"Cordoba","AR-Y":"Jujuy","AR-Z":"Santa Cruz","AT-1":"Burgenland","AT-2":"Karnten","AT-3":"Niederosterreich","AT-4":"Oberosterreich","AT-5":"Salzburg","AT-6":"Steiermark","AT-7":"Tirol","AT-8":"Vorarlberg","AT-9":"Wien","AU-ACT":"Australian Capital Territory","AU-NSW":"New South Wales","AU-NT":"Northern Territory","AU-QLD":"Queensland","AU-SA":"South Australia","AU-TAS":"Tasmania","AU-VIC":"Victoria","AU-WA":"Western Australia","AZ-ABS":"Abseron","AZ-AGA":"Agstafa","AZ-AGC":"Agcabadi","AZ-AGS":"Agdas","AZ-AGU":"Agsu","AZ-AST":"Astara","AZ-BA":"Baki","AZ-BAL":"Balakan","AZ-BAR":"Barda","AZ-BEY":"Beylaqan","AZ-BIL":"Bilasuvar","AZ-DAS":"Daskasan","AZ-FUZ":"Fuzuli","AZ-GA":"Ganca","AZ-GAD":"Gadabay","AZ-GOY":"Goycay","AZ-GYG":"Goygol","AZ-IMI":"Imisli","AZ-ISM":"Ismayilli","AZ-KUR":"Kurdamir","AZ-LA":"Lankaran","AZ-MAS":"Masalli","AZ-MI":"Mingacevir","AZ-NA":"Naftalan","AZ-NEF":"Neftcala","AZ-NX":"Naxcivan","AZ-OGU":"Oguz","AZ-QAB":"Qabala","AZ-QAX":"Qax","AZ-QAZ":"Qazax","AZ-QBA":"Quba","AZ-QUS":"Qusar","AZ-SAB":"Sabirabad","AZ-SAK":"Saki","AZ-SAL":"Salyan","AZ-SAT":"Saatli","AZ-SIY":"Siyazan","AZ-SKR":"Samkir","AZ-SM":"Sumqayit","AZ-SMI":"Samaxi","AZ-SMX":"Samux","AZ-SR":"Sirvan","AZ-TAR":"Tartar","AZ-TOV":"Tovuz","AZ-UCA":"Ucar","AZ-XAC":"Xacmaz","AZ-XIZ":"Xizi","AZ-YAR":"Yardimli","AZ-YEV":"Yevlax","AZ-ZAQ":"Zaqatala","AZ-ZAR":"Zardab","BA-BIH":"Federacija Bosne i Hercegovine","BA-BRC":"Brcko distrikt","BA-SRP":"Republika Srpska","BB-01":"Christ Church","BB-02":"Saint Andrew","BB-03":"Saint George","BB-04":"Saint James","BB-05":"Saint John","BB-07":"Saint Lucy","BB-08":"Saint Michael","BB-09":"Saint Peter","BB-10":"Saint Philip","BB-11":"Saint Thomas","BD-A":"Barishal","BD-B":"Chattogram","BD-C":"Dhaka","BD-D":"Khulna","BD-E":"Rajshahi","BD-F":"Rangpur","BD-G":"Sylhet","BD-H":"Mymensingh","BD-01":"Bandarban","BD-02":"Barguna","BD-03":"Bogura","BD-04":"Brahmanbaria","BD-05":"Bagerhat","BD-06":"Barishal","BD-07":"Bhola","BD-08":"Cumilla","BD-09":"Chandpur","BD-10":"Chattogram","BD-11":"Cox\'s Bazar","BD-12":"Chuadanga","BD-13":"Dhaka","BD-14":"Dinajpur","BD-15":"Faridpur","BD-16":"Feni","BD-17":"Gopalganj","BD-18":"Gazipur","BD-19":"Gaibandha","BD-20":"Habiganj","BD-21":"Jamalpur","BD-22":"Jashore","BD-23":"Jhenaidah","BD-24":"Joypurhat","BD-25":"Jhalakathi","BD-26":"Kishoreganj","BD-27":"Khulna","BD-28":"Kurigram","BD-29":"Khagrachhari","BD-30":"Kushtia","BD-31":"Lakshmipur","BD-32":"Lalmonirhat","BD-33":"Manikganj","BD-34":"Mymensingh","BD-35":"Munshiganj","BD-36":"Madaripur","BD-37":"Magura","BD-38":"Moulvibazar","BD-39":"Meherpur","BD-40":"Narayanganj","BD-41":"Netrakona","BD-42":"Narsingdi","BD-43":"Narail","BD-44":"Natore","BD-45":"Chapai Nawabganj","BD-46":"Nilphamari","BD-47":"Noakhali","BD-48":"Naogaon","BD-49":"Pabna","BD-50":"Pirojpur","BD-51":"Patuakhali","BD-52":"Panchagarh","BD-53":"Rajbari","BD-54":"Rajshahi","BD-55":"Rangpur","BD-56":"Rangamati","BD-57":"Sherpur","BD-58":"Satkhira","BD-59":"Sirajganj","BD-60":"Sylhet","BD-61":"Sunamganj","BD-62":"Shariatpur","BD-63":"Tangail","BD-64":"Thakurgaon","BE-BRU":"Brussels Hoofdstedelijk Gewest","BE-VLG":"Vlaams Gewest","BE-WAL":"Waals Gewest","BE-VAN":"Antwerpen","BE-VBR":"Vlaams-Brabant","BE-VLI":"Limburg","BE-VOV":"Oost-Vlaanderen","BE-VWV":"West-Vlaanderen","BE-WBR":"Brabant wallon","BE-WHT":"Hainaut","BE-WLG":"Liege","BE-WLX":"Luxembourg","BE-WNA":"Namur","BF-BAL":"Bale","BF-BAM":"Bam","BF-BAN":"Banwa","BF-BAZ":"Bazega","BF-BGR":"Bougouriba","BF-BLG":"Boulgou","BF-BLK":"Boulkiemde","BF-COM":"Comoe","BF-GAN":"Ganzourgou","BF-GNA":"Gnagna","BF-GOU":"Gourma","BF-HOU":"Houet","BF-KAD":"Kadiogo","BF-KEN":"Kenedougou","BF-KMP":"Kompienga","BF-KOS":"Kossi","BF-KOT":"Kouritenga","BF-KOW":"Kourweogo","BF-LER":"Leraba","BF-LOR":"Loroum","BF-MOU":"Mouhoun","BF-NAM":"Namentenga","BF-NAO":"Nahouri","BF-NAY":"Nayala","BF-OUB":"Oubritenga","BF-OUD":"Oudalan","BF-PAS":"Passore","BF-SEN":"Seno","BF-SIS":"Sissili","BF-SMT":"Sanmatenga","BF-SOM":"Soum","BF-SOR":"Sourou","BF-TAP":"Tapoa","BF-TUI":"Tuy","BF-YAT":"Yatenga","BF-ZIR":"Ziro","BF-ZON":"Zondoma","BF-ZOU":"Zoundweogo","BG-01":"Blagoevgrad","BG-02":"Burgas","BG-03":"Varna","BG-04":"Veliko Tarnovo","BG-05":"Vidin","BG-06":"Vratsa","BG-07":"Gabrovo","BG-08":"Dobrich","BG-09":"Kardzhali","BG-10":"Kyustendil","BG-11":"Lovech","BG-12":"Montana","BG-13":"Pazardzhik","BG-14":"Pernik","BG-15":"Pleven","BG-16":"Plovdiv","BG-17":"Razgrad","BG-18":"Ruse","BG-19":"Silistra","BG-20":"Sliven","BG-21":"Smolyan","BG-22":"Sofia (stolitsa)","BG-23":"Sofia","BG-24":"Stara Zagora","BG-25":"Targovishte","BG-26":"Haskovo","BG-27":"Shumen","BG-28":"Yambol","BH-13":"Al \'Asimah","BH-14":"Al Janubiyah","BH-15":"Al Muharraq","BH-17":"Ash Shamaliyah","BI-BM":"Bujumbura Mairie","BI-BR":"Bururi","BI-CI":"Cibitoke","BI-GI":"Gitega","BI-KI":"Kirundo","BI-MW":"Mwaro","BI-NG":"Ngozi","BI-RM":"Rumonge","BI-RT":"Rutana","BI-RY":"Ruyigi","BJ-AQ":"Atlantique","BJ-BO":"Borgou","BJ-CO":"Collines","BJ-LI":"Littoral","BJ-MO":"Mono","BJ-OU":"Oueme","BJ-PL":"Plateau","BJ-ZO":"Zou","BN-BE":"Belait","BN-BM":"Brunei-Muara","BN-TE":"Temburong","BN-TU":"Tutong","BO-B":"El Beni","BO-C":"Cochabamba","BO-H":"Chuquisaca","BO-L":"La Paz","BO-N":"Pando","BO-O":"Oruro","BO-P":"Potosi","BO-S":"Santa Cruz","BO-T":"Tarija","BQ-BO":"Bonaire","BQ-SA":"Saba","BQ-SE":"Sint Eustatius","BR-AC":"Acre","BR-AL":"Alagoas","BR-AM":"Amazonas","BR-AP":"Amapa","BR-BA":"Bahia","BR-CE":"Ceara","BR-DF":"Distrito Federal","BR-ES":"Espirito Santo","BR-GO":"Goias","BR-MA":"Maranhao","BR-MG":"Minas Gerais","BR-MS":"Mato Grosso do Sul","BR-MT":"Mato Grosso","BR-PA":"Para","BR-PB":"Paraiba","BR-PE":"Pernambuco","BR-PI":"Piaui","BR-PR":"Parana","BR-RJ":"Rio de Janeiro","BR-RN":"Rio Grande do Norte","BR-RO":"Rondonia","BR-RR":"Roraima","BR-RS":"Rio Grande do Sul","BR-SC":"Santa Catarina","BR-SE":"Sergipe","BR-SP":"Sao Paulo","BR-TO":"Tocantins","BS-BP":"Black Point","BS-CO":"Central Abaco","BS-EG":"East Grand Bahama","BS-FP":"City of Freeport","BS-HI":"Harbour Island","BS-LI":"Long Island","BS-NE":"North Eleuthera","BS-NP":"New Providence","BS-NS":"North Andros","BS-SE":"South Eleuthera","BS-SS":"San Salvador","BS-WG":"West Grand Bahama","BT-11":"Paro","BT-12":"Chhukha","BT-14":"Samtse","BT-15":"Thimphu","BT-21":"Tsirang","BT-22":"Dagana","BT-23":"Punakha","BT-24":"Wangdue Phodrang","BT-31":"Sarpang","BT-32":"Trongsa","BT-33":"Bumthang","BT-41":"Trashigang","BT-42":"Monggar","BT-43":"Pema Gatshel","BT-44":"Lhuentse","BT-45":"Samdrup Jongkhar","BT-GA":"Gasa","BW-CE":"Central","BW-CH":"Chobe","BW-GH":"Ghanzi","BW-KG":"Kgalagadi","BW-KL":"Kgatleng","BW-KW":"Kweneng","BW-NE":"North East","BW-NW":"North West","BW-SE":"South East","BW-SO":"Southern","BY-BR":"Brestskaya voblasts\'","BY-HM":"Horad Minsk","BY-HO":"Homyel\'skaya voblasts\'","BY-HR":"Hrodzyenskaya voblasts\'","BY-MA":"Mahilyowskaya voblasts\'","BY-MI":"Minskaya voblasts\'","BY-VI":"Vitsyebskaya voblasts\'","BZ-BZ":"Belize","BZ-CY":"Cayo","BZ-CZL":"Corozal","BZ-OW":"Orange Walk","BZ-SC":"Stann Creek","BZ-TOL":"Toledo","CA-AB":"Alberta","CA-BC":"British Columbia","CA-MB":"Manitoba","CA-NB":"New Brunswick","CA-NL":"Newfoundland and Labrador","CA-NS":"Nova Scotia","CA-NT":"Northwest Territories","CA-NU":"Nunavut","CA-ON":"Ontario","CA-PE":"Prince Edward Island","CA-QC":"Quebec","CA-SK":"Saskatchewan","CA-YT":"Yukon","CD-EQ":"Equateur","CD-HK":"Haut-Katanga","CD-IT":"Ituri","CD-KC":"Kasai Central","CD-KE":"Kasai Oriental","CD-KG":"Kwango","CD-KL":"Kwilu","CD-KN":"Kinshasa","CD-LU":"Lualaba","CD-MA":"Maniema","CD-NK":"Nord-Kivu","CD-SA":"Sankuru","CD-SK":"Sud-Kivu","CD-TA":"Tanganyika","CD-TO":"Tshopo","CF-AC":"Ouham","CF-BB":"Bamingui-Bangoran","CF-BGF":"Bangui","CF-HS":"Mambere-Kadei","CF-KB":"Gribingui","CF-KG":"Kemo-Gribingui","CF-NM":"Nana-Mambere","CF-OP":"Ouham-Pende","CF-SE":"Sangha","CF-UK":"Ouaka","CG-11":"Bouenza","CG-13":"Sangha","CG-16":"Pointe-Noire","CG-8":"Cuvette","CG-9":"Niari","CG-BZV":"Brazzaville","CH-AG":"Aargau","CH-AI":"Appenzell Innerrhoden","CH-AR":"Appenzell Ausserrhoden","CH-BE":"Bern","CH-BL":"Basel-Landschaft","CH-BS":"Basel-Stadt","CH-FR":"Fribourg","CH-GE":"Geneve","CH-GL":"Glarus","CH-GR":"Graubunden","CH-JU":"Jura","CH-LU":"Luzern","CH-NE":"Neuchatel","CH-NW":"Nidwalden","CH-OW":"Obwalden","CH-SG":"Sankt Gallen","CH-SH":"Schaffhausen","CH-SO":"Solothurn","CH-SZ":"Schwyz","CH-TG":"Thurgau","CH-TI":"Ticino","CH-UR":"Uri","CH-VD":"Vaud","CH-VS":"Valais","CH-ZG":"Zug","CH-ZH":"Zurich","CI-AB":"Abidjan","CI-BS":"Bas-Sassandra","CI-CM":"Comoe","CI-DN":"Denguele","CI-GD":"Goh-Djiboua","CI-LC":"Lacs","CI-LG":"Lagunes","CI-MG":"Montagnes","CI-SM":"Sassandra-Marahoue","CI-SV":"Savanes","CI-VB":"Vallee du Bandama","CI-WR":"Woroba","CI-YM":"Yamoussoukro","CI-ZZ":"Zanzan","CL-AI":"Aisen del General Carlos Ibanez del Campo","CL-AN":"Antofagasta","CL-AP":"Arica y Parinacota","CL-AR":"La Araucania","CL-AT":"Atacama","CL-BI":"Biobio","CL-CO":"Coquimbo","CL-LI":"Libertador General Bernardo O\'Higgins","CL-LL":"Los Lagos","CL-LR":"Los Rios","CL-MA":"Magallanes","CL-ML":"Maule","CL-NB":"Nuble","CL-RM":"Region Metropolitana de Santiago","CL-TA":"Tarapaca","CL-VS":"Valparaiso","CM-AD":"Adamaoua","CM-CE":"Centre","CM-EN":"Extreme-Nord","CM-ES":"Est","CM-LT":"Littoral","CM-NO":"Nord","CM-NW":"Nord-Ouest","CM-OU":"Ouest","CM-SU":"Sud","CM-SW":"Sud-Ouest","CN-AH":"Anhui","CN-BJ":"Beijing","CN-CQ":"Chongqing","CN-FJ":"Fujian","CN-GD":"Guangdong","CN-GS":"Gansu","CN-GX":"Guangxi Zhuangzu","CN-GZ":"Guizhou","CN-HA":"Henan","CN-HB":"Hubei","CN-HE":"Hebei","CN-HI":"Hainan","CN-HL":"Heilongjiang","CN-HN":"Hunan","CN-JL":"Jilin","CN-JS":"Jiangsu","CN-JX":"Jiangxi","CN-LN":"Liaoning","CN-NM":"Nei Mongol","CN-NX":"Ningxia Huizu","CN-QH":"Qinghai","CN-SC":"Sichuan","CN-SD":"Shandong","CN-SH":"Shanghai","CN-SN":"Shaanxi","CN-SX":"Shanxi","CN-TJ":"Tianjin","CN-XJ":"Xinjiang Uygur","CN-XZ":"Xizang","CN-YN":"Yunnan","CN-ZJ":"Zhejiang","CO-AMA":"Amazonas","CO-ANT":"Antioquia","CO-ARA":"Arauca","CO-ATL":"Atlantico","CO-BOL":"Bolivar","CO-BOY":"Boyaca","CO-CAL":"Caldas","CO-CAQ":"Caqueta","CO-CAS":"Casanare","CO-CAU":"Cauca","CO-CES":"Cesar","CO-CHO":"Choco","CO-COR":"Cordoba","CO-CUN":"Cundinamarca","CO-DC":"Distrito Capital de Bogota","CO-GUA":"Guainia","CO-GUV":"Guaviare","CO-HUI":"Huila","CO-LAG":"La Guajira","CO-MAG":"Magdalena","CO-MET":"Meta","CO-NAR":"Narino","CO-NSA":"Norte de Santander","CO-PUT":"Putumayo","CO-QUI":"Quindio","CO-RIS":"Risaralda","CO-SAN":"Santander","CO-SAP":"San Andres, Providencia y Santa Catalina","CO-SUC":"Sucre","CO-TOL":"Tolima","CO-VAC":"Valle del Cauca","CO-VID":"Vichada","CR-A":"Alajuela","CR-C":"Cartago","CR-G":"Guanacaste","CR-H":"Heredia","CR-L":"Limon","CR-P":"Puntarenas","CR-SJ":"San Jose","CU-01":"Pinar del Rio","CU-03":"La Habana","CU-04":"Matanzas","CU-05":"Villa Clara","CU-06":"Cienfuegos","CU-07":"Sancti Spiritus","CU-08":"Ciego de Avila","CU-09":"Camaguey","CU-10":"Las Tunas","CU-11":"Holguin","CU-12":"Granma","CU-13":"Santiago de Cuba","CU-14":"Guantanamo","CU-15":"Artemisa","CU-16":"Mayabeque","CU-99":"Isla de la Juventud","CV-BR":"Brava","CV-BV":"Boa Vista","CV-MO":"Mosteiros","CV-PN":"Porto Novo","CV-PR":"Praia","CV-RS":"Ribeira Grande de Santiago","CV-SD":"Sao Domingos","CV-SL":"Sal","CV-SV":"Sao Vicente","CV-TA":"Tarrafal","CY-01":"Lefkosia","CY-02":"Lemesos","CY-03":"Larnaka","CY-04":"Ammochostos","CY-05":"Pafos","CY-06":"Keryneia","CZ-10":"Praha, Hlavni mesto","CZ-20":"Stredocesky kraj","CZ-31":"Jihocesky kraj","CZ-32":"Plzensky kraj","CZ-41":"Karlovarsky kraj","CZ-42":"Ustecky kraj","CZ-51":"Liberecky kraj","CZ-52":"Kralovehradecky kraj","CZ-53":"Pardubicky kraj","CZ-63":"Kraj Vysocina","CZ-64":"Jihomoravsky kraj","CZ-71":"Olomoucky kraj","CZ-72":"Zlinsky kraj","CZ-80":"Moravskoslezsky kraj","DE-BB":"Brandenburg","DE-BE":"Berlin","DE-BW":"Baden-Wurttemberg","DE-BY":"Bayern","DE-HB":"Bremen","DE-HE":"Hessen","DE-HH":"Hamburg","DE-MV":"Mecklenburg-Vorpommern","DE-NI":"Niedersachsen","DE-NW":"Nordrhein-Westfalen","DE-RP":"Rheinland-Pfalz","DE-SH":"Schleswig-Holstein","DE-SL":"Saarland","DE-SN":"Sachsen","DE-ST":"Sachsen-Anhalt","DE-TH":"Thuringen","DJ-AR":"Arta","DJ-DI":"Dikhil","DJ-DJ":"Djibouti","DK-81":"Nordjylland","DK-82":"Midtjylland","DK-83":"Syddanmark","DK-84":"Hovedstaden","DK-85":"Sjaelland","DM-02":"Saint Andrew","DM-04":"Saint George","DM-05":"Saint John","DM-06":"Saint Joseph","DM-07":"Saint Luke","DM-09":"Saint Patrick","DM-10":"Saint Paul","DO-01":"Distrito Nacional (Santo Domingo)","DO-02":"Azua","DO-03":"Baoruco","DO-04":"Barahona","DO-05":"Dajabon","DO-06":"Duarte","DO-07":"Elías Piña","DO-08":"El Seibo","DO-09":"Espaillat","DO-10":"Independencia","DO-11":"La Altagracia","DO-12":"La Romana","DO-13":"La Vega","DO-14":"Maria Trinidad Sanchez","DO-15":"Monte Cristi","DO-16":"Pedernales","DO-17":"Peravia","DO-18":"Puerto Plata","DO-19":"Hermanas Mirabal","DO-20":"Samana","DO-21":"San Cristobal","DO-22":"San Juan","DO-23":"San Pedro de Macoris","DO-24":"Sanchez Ramirez","DO-25":"Santiago","DO-26":"Santiago Rodriguez","DO-27":"Valverde","DO-28":"Monsenor Nouel","DO-29":"Monte Plata","DO-30":"Hato Mayor","DO-31":"San Jose de Ocoa","DO-32":"Santo Domingo","DO-33":"Cibao Nordeste","DO-34":"Cibao Noroeste","DO-35":"Cibao Norte","DO-36":"Cibao Sur","DO-37":"El Valle","DO-38":"Enriquillo","DO-39":"Higuamo","DO-40":"Ozama","DO-41":"Valdesia","DO-42":"Yuma","DZ-01":"Adrar","DZ-02":"Chlef","DZ-03":"Laghouat","DZ-04":"Oum el Bouaghi","DZ-05":"Batna","DZ-06":"Bejaia","DZ-07":"Biskra","DZ-08":"Bechar","DZ-09":"Blida","DZ-10":"Bouira","DZ-11":"Tamanrasset","DZ-12":"Tebessa","DZ-13":"Tlemcen","DZ-14":"Tiaret","DZ-15":"Tizi Ouzou","DZ-16":"Alger","DZ-17":"Djelfa","DZ-18":"Jijel","DZ-19":"Setif","DZ-20":"Saida","DZ-21":"Skikda","DZ-22":"Sidi Bel Abbes","DZ-23":"Annaba","DZ-24":"Guelma","DZ-25":"Constantine","DZ-26":"Medea","DZ-27":"Mostaganem","DZ-28":"M\'sila","DZ-29":"Mascara","DZ-30":"Ouargla","DZ-31":"Oran","DZ-32":"El Bayadh","DZ-33":"Illizi","DZ-34":"Bordj Bou Arreridj","DZ-35":"Boumerdes","DZ-36":"El Tarf","DZ-37":"Tindouf","DZ-38":"Tissemsilt","DZ-39":"El Oued","DZ-40":"Khenchela","DZ-41":"Souk Ahras","DZ-42":"Tipaza","DZ-43":"Mila","DZ-44":"Ain Defla","DZ-45":"Naama","DZ-46":"Ain Temouchent","DZ-47":"Ghardaia","DZ-48":"Relizane","DZ-49":"Timimoun","DZ-51":"Ouled Djellal","DZ-53":"In Salah","DZ-55":"Touggourt","DZ-56":"Djanet","DZ-57":"El Meghaier","EC-A":"Azuay","EC-B":"Bolivar","EC-C":"Carchi","EC-D":"Orellana","EC-E":"Esmeraldas","EC-F":"Canar","EC-G":"Guayas","EC-H":"Chimborazo","EC-I":"Imbabura","EC-L":"Loja","EC-M":"Manabi","EC-N":"Napo","EC-O":"El Oro","EC-P":"Pichincha","EC-R":"Los Rios","EC-S":"Morona Santiago","EC-SD":"Santo Domingo de los Tsachilas","EC-SE":"Santa Elena","EC-T":"Tungurahua","EC-U":"Sucumbios","EC-W":"Galapagos","EC-X":"Cotopaxi","EC-Y":"Pastaza","EC-Z":"Zamora Chinchipe","EE-37":"Harjumaa","EE-39":"Hiiumaa","EE-45":"Ida-Virumaa","EE-50":"Jogevamaa","EE-52":"Jarvamaa","EE-56":"Laanemaa","EE-60":"Laane-Virumaa","EE-64":"Polvamaa","EE-68":"Parnumaa","EE-71":"Raplamaa","EE-74":"Saaremaa","EE-79":"Tartumaa","EE-81":"Valgamaa","EE-84":"Viljandimaa","EE-87":"Vorumaa","EG-ALX":"Al Iskandariyah","EG-ASN":"Aswan","EG-AST":"Asyut","EG-BA":"Al Bahr al Ahmar","EG-BH":"Al Buhayrah","EG-BNS":"Bani Suwayf","EG-C":"Al Qahirah","EG-DK":"Ad Daqahliyah","EG-DT":"Dumyat","EG-FYM":"Al Fayyum","EG-GH":"Al Gharbiyah","EG-GZ":"Al Jizah","EG-IS":"Al Isma\'iliyah","EG-JS":"Janub Sina\'","EG-KB":"Al Qalyubiyah","EG-KFS":"Kafr ash Shaykh","EG-KN":"Qina","EG-LX":"Al Uqsur","EG-MN":"Al Minya","EG-MNF":"Al Minufiyah","EG-MT":"Matruh","EG-PTS":"Bur Sa\'id","EG-SHG":"Suhaj","EG-SHR":"Ash Sharqiyah","EG-SIN":"Shamal Sina\'","EG-SUZ":"As Suways","EG-WAD":"Al Wadi al Jadid","ER-GB":"Qash-Barkah","ER-MA":"Al Awsat","ES-AN":"Andalucia","ES-AR":"Aragon","ES-AS":"Asturias, Principado de","ES-CB":"Cantabria","ES-CE":"Ceuta","ES-CL":"Castilla y Leon","ES-CM":"Castilla-La Mancha","ES-CN":"Canarias","ES-CT":"Catalunya","ES-EX":"Extremadura","ES-GA":"Galicia","ES-IB":"Illes Balears","ES-MC":"Murcia, Region de","ES-MD":"Madrid, Comunidad de","ES-ML":"Melilla","ES-NC":"Navarra, Comunidad Foral de","ES-PV":"Pais Vasco","ES-RI":"La Rioja","ES-VC":"Valenciana, Comunidad","ET-AA":"Addis Ababa","ET-AF":"Afar","ET-AM":"Amara","ET-BE":"Benshangul-Gumaz","ET-DD":"Dire Dawa","ET-HA":"Harari People","ET-OR":"Oromia","ET-SN":"Southern Nations, Nationalities and Peoples","ET-SO":"Somali","ET-TI":"Tigrai","FI-02":"Etela-Karjala","FI-03":"Etela-Pohjanmaa","FI-04":"Etela-Savo","FI-05":"Kainuu","FI-06":"Kanta-Hame","FI-07":"Keski-Pohjanmaa","FI-08":"Keski-Suomi","FI-09":"Kymenlaakso","FI-10":"Lappi","FI-11":"Pirkanmaa","FI-12":"Pohjanmaa","FI-13":"Pohjois-Karjala","FI-14":"Pohjois-Pohjanmaa","FI-15":"Pohjois-Savo","FI-16":"Paijat-Hame","FI-17":"Satakunta","FI-18":"Uusimaa","FI-19":"Varsinais-Suomi","FJ-C":"Central","FJ-E":"Eastern","FJ-N":"Northern","FJ-R":"Rotuma","FJ-W":"Western","FM-KSA":"Kosrae","FM-PNI":"Pohnpei","FM-TRK":"Chuuk","FM-YAP":"Yap","FR-20R":"Corse","FR-ARA":"Auvergne-Rhone-Alpes","FR-BFC":"Bourgogne-Franche-Comte","FR-BRE":"Bretagne","FR-CVL":"Centre-Val de Loire","FR-GES":"Grand-Est","FR-HDF":"Hauts-de-France","FR-IDF":"Ile-de-France","FR-NAQ":"Nouvelle-Aquitaine","FR-NOR":"Normandie","FR-OCC":"Occitanie","FR-PAC":"Provence-Alpes-Cote-d\'Azur","FR-PDL":"Pays-de-la-Loire","FR-PM":"Saint Pierre and Miquelon","GA-1":"Estuaire","GA-2":"Haut-Ogooue","GA-3":"Moyen-Ogooue","GA-4":"Ngounie","GA-5":"Nyanga","GA-7":"Ogooue-Lolo","GA-8":"Ogooue-Maritime","GA-9":"Woleu-Ntem","GB-ENG":"England","GB-NIR":"Northern Ireland","GB-SCT":"Scotland","GB-WLS":"Wales","GD-01":"Saint Andrew","GD-02":"Saint David","GD-03":"Saint George","GD-04":"Saint John","GD-05":"Saint Mark","GD-06":"Saint Patrick","GD-10":"Southern Grenadine Islands","GE-AB":"Abkhazia","GE-AJ":"Ajaria","GE-GU":"Guria","GE-IM":"Imereti","GE-KA":"K\'akheti","GE-KK":"Kvemo Kartli","GE-MM":"Mtskheta-Mtianeti","GE-RL":"Rach\'a-Lechkhumi-Kvemo Svaneti","GE-SJ":"Samtskhe-Javakheti","GE-SK":"Shida Kartli","GE-SZ":"Samegrelo-Zemo Svaneti","GE-TB":"Tbilisi","GH-AA":"Greater Accra","GH-AF":"Ahafo","GH-AH":"Ashanti","GH-BE":"Bono East","GH-BO":"Bono","GH-CP":"Central","GH-EP":"Eastern","GH-NP":"Northern","GH-TV":"Volta","GH-UE":"Upper East","GH-UW":"Upper West","GH-WP":"Western","GL-AV":"Avannaata Kommunia","GL-KU":"Kommune Kujalleq","GL-QE":"Qeqqata Kommunia","GL-QT":"Kommune Qeqertalik","GL-SM":"Kommuneqarfik Sermersooq","GM-B":"Banjul","GM-L":"Lower River","GM-M":"Central River","GM-N":"North Bank","GM-U":"Upper River","GM-W":"Western","GN-B":"Boke","GN-BE":"Beyla","GN-BF":"Boffa","GN-C":"Conakry","GN-DB":"Dabola","GN-DI":"Dinguiraye","GN-DU":"Dubreka","GN-FR":"Fria","GN-K":"Kankan","GN-KO":"Kouroussa","GN-LE":"Lelouma","GN-SI":"Siguiri","GQ-BN":"Bioko Norte","GQ-CS":"Centro Sur","GQ-KN":"Kie-Ntem","GQ-LI":"Litoral","GQ-WN":"Wele-Nzas","GR-69":"Agion Oros","GR-A":"Anatoliki Makedonia kai Thraki","GR-B":"Kentriki Makedonia","GR-C":"Dytiki Makedonia","GR-D":"Ipeiros","GR-E":"Thessalia","GR-F":"Ionia Nisia","GR-G":"Dytiki Ellada","GR-H":"Sterea Ellada","GR-I":"Attiki","GR-J":"Peloponnisos","GR-K":"Voreio Aigaio","GR-L":"Notio Aigaio","GR-M":"Kriti","GT-01":"Guatemala","GT-02":"El Progreso","GT-03":"Sacatepequez","GT-04":"Chimaltenango","GT-05":"Escuintla","GT-06":"Santa Rosa","GT-07":"Solola","GT-08":"Totonicapan","GT-09":"Quetzaltenango","GT-10":"Suchitepequez","GT-11":"Retalhuleu","GT-12":"San Marcos","GT-13":"Huehuetenango","GT-14":"Quiche","GT-15":"Baja Verapaz","GT-16":"Alta Verapaz","GT-17":"Peten","GT-18":"Izabal","GT-19":"Zacapa","GT-20":"Chiquimula","GT-21":"Jalapa","GT-22":"Jutiapa","GT-AV":"Alta Verapaz","GT-BV":"Baja Verapaz","GT-CM":"Chimaltenango","GT-CQ":"Chiquimula","GT-PR":"El Progreso","GT-ES":"Escuintla","GT-GU":"Guatemala Department","GT-HU":"Huehuetenango","GT-IZ":"Izabal","GT-JA":"Jalapa","GT-JU":"Jutiapa","GT-PE":"Petén","GT-QZ":"Quetzaltenango","GT-QC":"Quiché","GT-RE":"Retalhuleu","GT-SA":"Sacatepéquez","GT-SM":"San Marcos","GT-SR":"Santa Rosa","GT-SO":"Sololá","GT-SU":"Suchitepéquez","GT-TO":"Totonicapán","GT-ZA":"Zacapa","GW-BA":"Bafata","GW-BS":"Bissau","GW-GA":"Gabu","GW-OI":"Oio","GY-BA":"Barima-Waini","GY-CU":"Cuyuni-Mazaruni","GY-DE":"Demerara-Mahaica","GY-EB":"East Berbice-Corentyne","GY-ES":"Essequibo Islands-West Demerara","GY-MA":"Mahaica-Berbice","GY-PT":"Potaro-Siparuni","GY-UD":"Upper Demerara-Berbice","HK-HCW":"Central and Western","HK-HEA":"Eastern","HK-HSO":"Southern","HK-HWC":"Wan Chai","HK-KKC":"Kowloon City","HK-KKT":"Kwun Tong","HK-KSS":"Sham Shui Po","HK-KWT":"Wong Tai Sin","HK-KYT":"Yau Tsim Mong","HK-NIS":"Islands","HK-NKT":"Kwai Tsing","HK-NNO":"North","HK-NSK":"Sai Kung","HK-NST":"Sha Tin","HK-NTM":"Tuen Mun","HK-NTP":"Tai Po","HK-NTW":"Tsuen Wan","HK-NYL":"Yuen Long","HN-AT":"Atlantida","HN-CH":"Choluteca","HN-CL":"Colon","HN-CM":"Comayagua","HN-CP":"Copan","HN-CR":"Cortes","HN-EP":"El Paraiso","HN-FM":"Francisco Morazan","HN-GD":"Gracias a Dios","HN-IB":"Islas de la Bahia","HN-IN":"Intibuca","HN-LE":"Lempira","HN-LP":"La Paz","HN-OC":"Ocotepeque","HN-OL":"Olancho","HN-SB":"Santa Barbara","HN-VA":"Valle","HN-YO":"Yoro","HR-01":"Zagrebacka zupanija","HR-02":"Krapinsko-zagorska zupanija","HR-03":"Sisacko-moslavacka zupanija","HR-04":"Karlovacka zupanija","HR-05":"Varazdinska zupanija","HR-06":"Koprivnicko-krizevacka zupanija","HR-07":"Bjelovarsko-bilogorska zupanija","HR-08":"Primorsko-goranska zupanija","HR-09":"Licko-senjska zupanija","HR-10":"Viroviticko-podravska zupanija","HR-11":"Pozesko-slavonska zupanija","HR-12":"Brodsko-posavska zupanija","HR-13":"Zadarska zupanija","HR-14":"Osjecko-baranjska zupanija","HR-15":"Sibensko-kninska zupanija","HR-16":"Vukovarsko-srijemska zupanija","HR-17":"Splitsko-dalmatinska zupanija","HR-18":"Istarska zupanija","HR-19":"Dubrovacko-neretvanska zupanija","HR-20":"Medimurska zupanija","HR-21":"Grad Zagreb","HT-AR":"Artibonite","HT-CE":"Centre","HT-GA":"Grande\'Anse","HT-ND":"Nord","HT-NI":"Nippes","HT-NO":"Nord-Ouest","HT-OU":"Ouest","HT-SD":"Sud","HT-SE":"Sud-Est","HU-BA":"Baranya","HU-BE":"Bekes","HU-BK":"Bacs-Kiskun","HU-BU":"Budapest","HU-BZ":"Borsod-Abauj-Zemplen","HU-CS":"Csongrad-Csanad","HU-FE":"Fejer","HU-GS":"Gyor-Moson-Sopron","HU-HB":"Hajdu-Bihar","HU-HE":"Heves","HU-JN":"Jasz-Nagykun-Szolnok","HU-KE":"Komarom-Esztergom","HU-NO":"Nograd","HU-PE":"Pest","HU-SO":"Somogy","HU-SZ":"Szabolcs-Szatmar-Bereg","HU-TO":"Tolna","HU-VA":"Vas","HU-VE":"Veszprem","HU-ZA":"Zala","ID-AC":"Aceh","ID-BA":"Bali","ID-BB":"Kepulauan Bangka Belitung","ID-BE":"Bengkulu","ID-BT":"Banten","ID-GO":"Gorontalo","ID-JA":"Jambi","ID-JB":"Jawa Barat","ID-JI":"Jawa Timur","ID-JK":"Jakarta Raya","ID-JT":"Jawa Tengah","ID-KB":"Kalimantan Barat","ID-KI":"Kalimantan Timur","ID-KR":"Kepulauan Riau","ID-KS":"Kalimantan Selatan","ID-KT":"Kalimantan Tengah","ID-KU":"Kalimantan Utara","ID-LA":"Lampung","ID-ML":"Maluku","ID-MU":"Maluku Utara","ID-NB":"Nusa Tenggara Barat","ID-NT":"Nusa Tenggara Timur","ID-PB":"Papua Barat","ID-PE":"Papua Pengunungan","ID-PP":"Papua","ID-PS":"Papua Selatan","ID-PT":"Papua Tengah","ID-RI":"Riau","ID-SA":"Sulawesi Utara","ID-SB":"Sumatera Barat","ID-SG":"Sulawesi Tenggara","ID-SN":"Sulawesi Selatan","ID-SR":"Sulawesi Barat","ID-SS":"Sumatera Selatan","ID-ST":"Sulawesi Tengah","ID-SU":"Sumatera Utara","ID-YO":"Yogyakarta","IE-C":"Connaught","IE-L":"Leinster","IE-M":"Munster","IE-U":"Ulster","IE-CE":"Clare","IE-CN":"Cavan","IE-CO":"Cork","IE-CW":"Carlow","IE-D":"Dublin","IE-DL":"Donegal","IE-G":"Galway","IE-KE":"Kildare","IE-KK":"Kilkenny","IE-KY":"Kerry","IE-LD":"Longford","IE-LH":"Louth","IE-LK":"Limerick","IE-LM":"Leitrim","IE-LS":"Laois","IE-MH":"Meath","IE-MN":"Monaghan","IE-MO":"Mayo","IE-OY":"Offaly","IE-RN":"Roscommon","IE-SO":"Sligo","IE-TA":"Tipperary","IE-WD":"Waterford","IE-WH":"Westmeath","IE-WW":"Wicklow","IE-WX":"Wexford","IL-D":"HaDarom","IL-HA":"Hefa","IL-JM":"Yerushalayim","IL-M":"HaMerkaz","IL-TA":"Tel Aviv","IL-Z":"HaTsafon","IN-AN":"Andaman and Nicobar Islands","IN-AP":"Andhra Pradesh","IN-AR":"Arunachal Pradesh","IN-AS":"Assam","IN-BR":"Bihar","IN-CH":"Chandigarh","IN-CT":"Chhattisgarh","IN-DH":"Dadra and Nagar Haveli and Daman and Diu","IN-DL":"Delhi","IN-DN":"Dadra and Nagar Haveli","IN-GA":"Goa","IN-GJ":"Gujarat","IN-HP":"Himachal Pradesh","IN-HR":"Haryana","IN-JH":"Jharkhand","IN-JK":"Jammu and Kashmir","IN-KA":"Karnataka","IN-KL":"Kerala","IN-LD":"Lakshadweep","IN-MH":"Maharashtra","IN-ML":"Meghalaya","IN-MN":"Manipur","IN-MP":"Madhya Pradesh","IN-MZ":"Mizoram","IN-NL":"Nagaland","IN-OR":"Odisha","IN-PB":"Punjab","IN-PY":"Puducherry","IN-RJ":"Rajasthan","IN-SK":"Sikkim","IN-TG":"Telangana","IN-TN":"Tamil Nadu","IN-TR":"Tripura","IN-UP":"Uttar Pradesh","IN-UT":"Uttarakhand","IN-WB":"West Bengal","IQ-AN":"Al Anbar","IQ-AR":"Arbil","IQ-BA":"Al Basrah","IQ-BB":"Babil","IQ-BG":"Baghdad","IQ-DA":"Dahuk","IQ-DI":"Diyala","IQ-DQ":"Dhi Qar","IQ-KA":"Karbala\'","IQ-KI":"Kirkuk","IQ-MA":"Maysan","IQ-MU":"Al Muthanna","IQ-NA":"An Najaf","IQ-NI":"Ninawa","IQ-QA":"Al Qadisiyah","IQ-SD":"Salah ad Din","IQ-SU":"As Sulaymaniyah","IQ-WA":"Wasit","IR-00":"Markazi","IR-01":"Gilan","IR-02":"Mazandaran","IR-03":"Azarbayjan-e Sharqi","IR-04":"Azarbayjan-e Gharbi","IR-05":"Kermanshah","IR-06":"Khuzestan","IR-07":"Fars","IR-08":"Kerman","IR-09":"Khorasan-e Razavi","IR-10":"Esfahan","IR-11":"Sistan va Baluchestan","IR-12":"Kordestan","IR-13":"Hamadan","IR-14":"Chahar Mahal va Bakhtiari","IR-15":"Lorestan","IR-16":"Ilam","IR-17":"Kohgiluyeh va Bowyer Ahmad","IR-18":"Bushehr","IR-19":"Zanjan","IR-20":"Semnan","IR-21":"Yazd","IR-22":"Hormozgan","IR-23":"Tehran","IR-24":"Ardabil","IR-25":"Qom","IR-26":"Qazvin","IR-27":"Golestan","IR-28":"Khorasan-e Shomali","IR-29":"Khorasan-e Jonubi","IR-30":"Alborz","IS-1":"Hofudborgarsvaedi","IS-2":"Sudurnes","IS-3":"Vesturland","IS-4":"Vestfirdir","IS-5":"Nordurland vestra","IS-6":"Nordurland eystra","IS-7":"Austurland","IS-8":"Sudurland","IT-21":"Piemonte","IT-23":"Valle d\'Aosta","IT-25":"Lombardia","IT-32":"Trentino-Alto Adige","IT-34":"Veneto","IT-36":"Friuli-Venezia Giulia","IT-42":"Liguria","IT-45":"Emilia-Romagna","IT-52":"Toscana","IT-55":"Umbria","IT-57":"Marche","IT-62":"Lazio","IT-65":"Abruzzo","IT-67":"Molise","IT-72":"Campania","IT-75":"Puglia","IT-77":"Basilicata","IT-78":"Calabria","IT-82":"Sicilia","IT-88":"Sardegna","JM-01":"Kingston","JM-02":"Saint Andrew","JM-03":"Saint Thomas","JM-04":"Portland","JM-05":"Saint Mary","JM-06":"Saint Ann","JM-07":"Trelawny","JM-08":"Saint James","JM-09":"Hanover","JM-10":"Westmoreland","JM-11":"Saint Elizabeth","JM-12":"Manchester","JM-13":"Clarendon","JM-14":"Saint Catherine","JO-AJ":"\'Ajlun","JO-AM":"Al \'Asimah","JO-AQ":"Al \'Aqabah","JO-AT":"At Tafilah","JO-AZ":"Az Zarqa\'","JO-BA":"Al Balqa\'","JO-IR":"Irbid","JO-JA":"Jarash","JO-KA":"Al Karak","JO-MA":"Al Mafraq","JO-MD":"Madaba","JO-MN":"Ma\'an","JP-01":"Hokkaido","JP-02":"Aomori","JP-03":"Iwate","JP-04":"Miyagi","JP-05":"Akita","JP-06":"Yamagata","JP-07":"Fukushima","JP-08":"Ibaraki","JP-09":"Tochigi","JP-10":"Gunma","JP-11":"Saitama","JP-12":"Chiba","JP-13":"Tokyo","JP-14":"Kanagawa","JP-15":"Niigata","JP-16":"Toyama","JP-17":"Ishikawa","JP-18":"Fukui","JP-19":"Yamanashi","JP-20":"Nagano","JP-21":"Gifu","JP-22":"Shizuoka","JP-23":"Aichi","JP-24":"Mie","JP-25":"Shiga","JP-26":"Kyoto","JP-27":"Osaka","JP-28":"Hyogo","JP-29":"Nara","JP-30":"Wakayama","JP-31":"Tottori","JP-32":"Shimane","JP-33":"Okayama","JP-34":"Hiroshima","JP-35":"Yamaguchi","JP-36":"Tokushima","JP-37":"Kagawa","JP-38":"Ehime","JP-39":"Kochi","JP-40":"Fukuoka","JP-41":"Saga","JP-42":"Nagasaki","JP-43":"Kumamoto","JP-44":"Oita","JP-45":"Miyazaki","JP-46":"Kagoshima","JP-47":"Okinawa","KE-01":"Baringo","KE-02":"Bomet","KE-03":"Bungoma","KE-04":"Busia","KE-05":"Elgeyo/Marakwet","KE-06":"Embu","KE-07":"Garissa","KE-08":"Homa Bay","KE-09":"Isiolo","KE-10":"Kajiado","KE-11":"Kakamega","KE-12":"Kericho","KE-13":"Kiambu","KE-14":"Kilifi","KE-15":"Kirinyaga","KE-16":"Kisii","KE-17":"Kisumu","KE-18":"Kitui","KE-19":"Kwale","KE-20":"Laikipia","KE-21":"Lamu","KE-22":"Machakos","KE-23":"Makueni","KE-24":"Mandera","KE-25":"Marsabit","KE-26":"Meru","KE-27":"Migori","KE-28":"Mombasa","KE-29":"Murang\'a","KE-30":"Nairobi City","KE-31":"Nakuru","KE-32":"Nandi","KE-33":"Narok","KE-34":"Nyamira","KE-35":"Nyandarua","KE-36":"Nyeri","KE-37":"Samburu","KE-38":"Siaya","KE-39":"Taita/Taveta","KE-40":"Tana River","KE-41":"Tharaka-Nithi","KE-42":"Trans Nzoia","KE-43":"Turkana","KE-44":"Uasin Gishu","KE-45":"Vihiga","KE-46":"Wajir","KE-47":"West Pokot","KG-B":"Batken","KG-C":"Chuy","KG-GB":"Bishkek Shaary","KG-GO":"Osh Shaary","KG-J":"Jalal-Abad","KG-N":"Naryn","KG-T":"Talas","KG-Y":"Ysyk-Kol","KH-1":"Banteay Mean Choay","KH-10":"Kracheh","KH-11":"Mondol Kiri","KH-12":"Phnom Penh","KH-13":"Preah Vihear","KH-14":"Prey Veaeng","KH-15":"Pousaat","KH-17":"Siem Reab","KH-18":"Preah Sihanouk","KH-19":"Stueng Traeng","KH-2":"Baat Dambang","KH-20":"Svaay Rieng","KH-21":"Taakaev","KH-23":"Kaeb","KH-24":"Pailin","KH-3":"Kampong Chaam","KH-4":"Kampong Chhnang","KH-5":"Kampong Spueu","KH-6":"Kampong Thum","KH-7":"Kampot","KH-8":"Kandaal","KI-G":"Gilbert Islands","KI-L":"Line Islands","KM-G":"Grande Comore","KM-M":"Moheli","KN-01":"Christ Church Nichola Town","KN-02":"Saint Anne Sandy Point","KN-03":"Saint George Basseterre","KN-05":"Saint James Windward","KN-06":"Saint John Capisterre","KN-07":"Saint John Figtree","KN-08":"Saint Mary Cayon","KN-09":"Saint Paul Capisterre","KN-10":"Saint Paul Charlestown","KN-11":"Saint Peter Basseterre","KN-13":"Saint Thomas Middle Island","KN-15":"Trinity Palmetto Point","KP-01":"P\'yongyang","KR-11":"Seoul-teukbyeolsi","KR-26":"Busan-gwangyeoksi","KR-27":"Daegu-gwangyeoksi","KR-28":"Incheon-gwangyeoksi","KR-29":"Gwangju-gwangyeoksi","KR-30":"Daejeon-gwangyeoksi","KR-31":"Ulsan-gwangyeoksi","KR-41":"Gyeonggi-do","KR-42":"Gangwon-do","KR-43":"Chungcheongbuk-do","KR-44":"Chungcheongnam-do","KR-45":"Jeollabuk-do","KR-46":"Jeollanam-do","KR-47":"Gyeongsangbuk-do","KR-48":"Gyeongsangnam-do","KR-49":"Jeju-teukbyeoljachido","KW-AH":"Al Ahmadi","KW-FA":"Al Farwaniyah","KW-HA":"Hawalli","KW-JA":"Al Jahra\'","KW-KU":"Al \'Asimah","KW-MU":"Mubarak al Kabir","KZ-10":"Abay oblysy","KZ-11":"Aqmola oblysy","KZ-15":"Aqtobe oblysy","KZ-19":"Almaty oblysy","KZ-23":"Atyrau oblysy","KZ-27":"Batys Qazaqstan oblysy","KZ-31":"Zhambyl oblysy","KZ-33":"Zhetisu oblysy","KZ-35":"Qaraghandy oblysy","KZ-39":"Qostanay oblysy","KZ-43":"Qyzylorda oblysy","KZ-47":"Mangghystau oblysy","KZ-55":"Pavlodar oblysy","KZ-59":"Soltustik Qazaqstan oblysy","KZ-61":"Turkistan oblysy","KZ-62":"Ulytau oblysy","KZ-63":"Shyghys Qazaqstan oblysy","KZ-71":"Astana","KZ-75":"Almaty","KZ-79":"Shymkent","LA-AT":"Attapu","LA-BK":"Bokeo","LA-BL":"Bolikhamxai","LA-CH":"Champasak","LA-KH":"Khammouan","LA-LP":"Louangphabang","LA-OU":"Oudomxai","LA-PH":"Phongsali","LA-SV":"Savannakhet","LA-VI":"Viangchan","LA-XA":"Xaignabouli","LA-XE":"Xekong","LA-XI":"Xiangkhouang","LB-AK":"Aakkar","LB-AS":"Liban-Nord","LB-BA":"Beyrouth","LB-BH":"Baalbek-Hermel","LB-BI":"Beqaa","LB-JA":"Liban-Sud","LB-JL":"Mont-Liban","LB-NA":"Nabatiye","LC-01":"Anse la Raye","LC-02":"Castries","LC-03":"Choiseul","LC-05":"Dennery","LC-06":"Gros Islet","LC-07":"Laborie","LC-08":"Micoud","LC-10":"Soufriere","LC-11":"Vieux Fort","LI-01":"Balzers","LI-02":"Eschen","LI-03":"Gamprin","LI-04":"Mauren","LI-06":"Ruggell","LI-07":"Schaan","LI-09":"Triesen","LI-10":"Triesenberg","LI-11":"Vaduz","LK-1":"Western Province","LK-2":"Central Province","LK-3":"Southern Province","LK-4":"Northern Province","LK-5":"Eastern Province","LK-6":"North Western Province","LK-7":"North Central Province","LK-8":"Uva Province","LK-9":"Sabaragamuwa Province","LR-BG":"Bong","LR-BM":"Bomi","LR-GB":"Grand Bassa","LR-GG":"Grand Gedeh","LR-MG":"Margibi","LR-MO":"Montserrado","LR-MY":"Maryland","LR-RI":"River Cess","LR-SI":"Sinoe","LS-A":"Maseru","LS-B":"Botha-Bothe","LS-C":"Leribe","LS-D":"Berea","LS-E":"Mafeteng","LS-F":"Mohale\'s Hoek","LS-G":"Quthing","LS-H":"Qacha\'s Nek","LS-J":"Mokhotlong","LS-K":"Thaba-Tseka","LT-AL":"Alytaus apskritis","LT-KL":"Klaipedos apskritis","LT-KU":"Kauno apskritis","LT-MR":"Marijampoles apskritis","LT-PN":"Panevezio apskritis","LT-SA":"Siauliu apskritis","LT-TA":"Taurages apskritis","LT-TE":"Telsiu apskritis","LT-UT":"Utenos apskritis","LT-VL":"Vilniaus apskritis","LU-CA":"Capellen","LU-CL":"Clervaux","LU-DI":"Diekirch","LU-EC":"Echternach","LU-ES":"Esch-sur-Alzette","LU-GR":"Grevenmacher","LU-LU":"Luxembourg","LU-ME":"Mersch","LU-RD":"Redange","LU-RM":"Remich","LU-VD":"Vianden","LU-WI":"Wiltz","LV-002":"Aizkraukles novads","LV-007":"Aluksnes novads","LV-011":"Adazu novads","LV-015":"Balvu novads","LV-016":"Bauskas novads","LV-022":"Cesu novads","LV-026":"Dobeles novads","LV-033":"Gulbenes novads","LV-041":"Jelgavas novads","LV-042":"Jekabpils novads","LV-047":"Kraslavas novads","LV-050":"Kuldigas novads","LV-052":"Kekavas novads","LV-054":"Limbazu novads","LV-056":"Livanu novads","LV-058":"Ludzas novads","LV-059":"Madonas novads","LV-062":"Marupes novads","LV-067":"Ogres novads","LV-068":"Olaines novads","LV-073":"Preilu novads","LV-077":"Rezeknes novads","LV-080":"Ropazu novads","LV-087":"Salaspils novads","LV-088":"Saldus novads","LV-089":"Saulkrastu novads","LV-091":"Siguldas novads","LV-094":"Smiltenes novads","LV-097":"Talsu novads","LV-099":"Tukuma novads","LV-101":"Valkas novads","LV-102":"Varaklanu novads","LV-106":"Ventspils novads","LV-111":"Augsdaugavas novads","LV-112":"Dienvidkurzemes novads","LV-113":"Valmieras novads","LV-DGV":"Daugavpils","LV-JEL":"Jelgava","LV-JUR":"Jurmala","LV-LPX":"Liepaja","LV-RIX":"Riga","LY-BA":"Banghazi","LY-BU":"Al Butnan","LY-DR":"Darnah","LY-JA":"Al Jabal al Akhdar","LY-JG":"Al Jabal al Gharbi","LY-JI":"Al Jafarah","LY-JU":"Al Jufrah","LY-KF":"Al Kufrah","LY-MB":"Al Marqab","LY-MI":"Misratah","LY-MJ":"Al Marj","LY-NL":"Nalut","LY-NQ":"An Nuqat al Khams","LY-SB":"Sabha","LY-SR":"Surt","LY-TB":"Tarabulus","LY-WA":"Al Wahat","LY-WS":"Wadi ash Shati\'","LY-ZA":"Az Zawiyah","MA-01":"Tanger-Tetouan-Al Hoceima","MA-02":"L\'Oriental","MA-03":"Fes- Meknes","MA-04":"Rabat-Sale-Kenitra","MA-05":"Beni-Mellal-Khenifra","MA-06":"Casablanca-Settat","MA-07":"Marrakech-Safi","MA-08":"Draa-Tafilalet","MA-09":"Souss-Massa","MA-10":"Guelmim-Oued Noun (EH-partial)","MA-11":"Laayoune-Sakia El Hamra (EH-partial)","MC-CO":"La Condamine","MC-FO":"Fontvieille","MC-MC":"Monte-Carlo","MC-MG":"Moneghetti","MC-MO":"Monaco-Ville","MC-SR":"Saint-Roman","MD-AN":"Anenii Noi","MD-BA":"Balti","MD-BD":"Bender","MD-BR":"Briceni","MD-BS":"Basarabeasca","MD-CA":"Cahul","MD-CL":"Calarasi","MD-CM":"Cimislia","MD-CR":"Criuleni","MD-CS":"Causeni","MD-CT":"Cantemir","MD-CU":"Chisinau","MD-DO":"Donduseni","MD-DR":"Drochia","MD-DU":"Dubasari","MD-ED":"Edinet","MD-FA":"Falesti","MD-FL":"Floresti","MD-GA":"Gagauzia, Unitatea teritoriala autonoma","MD-GL":"Glodeni","MD-HI":"Hincesti","MD-IA":"Ialoveni","MD-LE":"Leova","MD-NI":"Nisporeni","MD-OC":"Ocnita","MD-OR":"Orhei","MD-RE":"Rezina","MD-RI":"Riscani","MD-SD":"Soldanesti","MD-SI":"Singerei","MD-SN":"Stinga Nistrului, unitatea teritoriala din","MD-SO":"Soroca","MD-ST":"Straseni","MD-SV":"Stefan Voda","MD-TA":"Taraclia","MD-TE":"Telenesti","MD-UN":"Ungheni","ME-01":"Andrijevica","ME-02":"Bar","ME-03":"Berane","ME-04":"Bijelo Polje","ME-05":"Budva","ME-06":"Cetinje","ME-07":"Danilovgrad","ME-08":"Herceg-Novi","ME-09":"Kolasin","ME-10":"Kotor","ME-12":"Niksic","ME-13":"Plav","ME-14":"Pljevlja","ME-15":"Pluzine","ME-16":"Podgorica","ME-17":"Rozaje","ME-19":"Tivat","ME-20":"Ulcinj","ME-21":"Zabljak","ME-24":"Tuzi","MG-A":"Toamasina","MG-D":"Antsiranana","MG-F":"Fianarantsoa","MG-M":"Mahajanga","MG-T":"Antananarivo","MG-U":"Toliara","MH-KWA":"Kwajalein","MH-MAJ":"Majuro","MK-101":"Veles","MK-102":"Gradsko","MK-103":"Demir Kapija","MK-104":"Kavadarci","MK-105":"Lozovo","MK-106":"Negotino","MK-107":"Rosoman","MK-108":"Sveti Nikole","MK-109":"Caska","MK-201":"Berovo","MK-202":"Vinica","MK-205":"Karbinci","MK-206":"Kocani","MK-207":"Makedonska Kamenica","MK-208":"Pehcevo","MK-209":"Probistip","MK-210":"Cesinovo-Oblesevo","MK-211":"Stip","MK-301":"Vevcani","MK-303":"Debar","MK-307":"Kicevo","MK-308":"Makedonski Brod","MK-310":"Ohrid","MK-311":"Plasnica","MK-312":"Struga","MK-401":"Bogdanci","MK-402":"Bosilovo","MK-403":"Valandovo","MK-404":"Vasilevo","MK-405":"Gevgelija","MK-406":"Dojran","MK-408":"Novo Selo","MK-409":"Radovis","MK-410":"Strumica","MK-501":"Bitola","MK-502":"Demir Hisar","MK-503":"Dolneni","MK-505":"Krusevo","MK-506":"Mogila","MK-507":"Novaci","MK-508":"Prilep","MK-509":"Resen","MK-601":"Bogovinje","MK-602":"Brvenica","MK-604":"Gostivar","MK-605":"Zelino","MK-606":"Jegunovce","MK-607":"Mavrovo i Rostusa","MK-608":"Tearce","MK-609":"Tetovo","MK-701":"Kratovo","MK-702":"Kriva Palanka","MK-703":"Kumanovo","MK-704":"Lipkovo","MK-705":"Rankovce","MK-802":"Aracinovo","MK-803":"Butel","MK-804":"Gazi Baba","MK-806":"Zelenikovo","MK-807":"Ilinden","MK-809":"Kisela Voda","MK-810":"Petrovec","MK-811":"Saraj","MK-812":"Sopiste","MK-813":"Studenicani","MK-814":"Centar","MK-816":"Cucer Sandevo","ML-1":"Kayes","ML-2":"Koulikoro","ML-3":"Sikasso","ML-4":"Segou","ML-5":"Mopti","ML-6":"Tombouctou","ML-7":"Gao","ML-8":"Kidal","ML-BKO":"Bamako","MM-01":"Sagaing","MM-02":"Bago","MM-03":"Magway","MM-04":"Mandalay","MM-05":"Tanintharyi","MM-06":"Yangon","MM-07":"Ayeyarwady","MM-11":"Kachin","MM-12":"Kayah","MM-13":"Kayin","MM-15":"Mon","MM-16":"Rakhine","MM-17":"Shan","MM-18":"Nay Pyi Taw","MN-035":"Orhon","MN-043":"Hovd","MN-047":"Tov","MN-049":"Selenge","MN-055":"Ovorhangay","MN-061":"Dornod","MN-065":"Govi-Altay","MN-069":"Bayanhongor","MN-1":"Ulaanbaatar","MR-01":"Hodh ech Chargui","MR-02":"Hodh el Gharbi","MR-03":"Assaba","MR-04":"Gorgol","MR-05":"Brakna","MR-06":"Trarza","MR-07":"Adrar","MR-08":"Dakhlet Nouadhibou","MR-09":"Tagant","MR-11":"Tiris Zemmour","MR-12":"Inchiri","MR-13":"Nouakchott Ouest","MT-01":"Attard","MT-02":"Balzan","MT-03":"Birgu","MT-04":"Birkirkara","MT-05":"Birzebbuga","MT-06":"Bormla","MT-07":"Dingli","MT-08":"Fgura","MT-09":"Floriana","MT-10":"Fontana","MT-11":"Gudja","MT-12":"Gzira","MT-13":"Ghajnsielem","MT-14":"Gharb","MT-15":"Gharghur","MT-16":"Ghasri","MT-17":"Ghaxaq","MT-18":"Hamrun","MT-19":"Iklin","MT-20":"Isla","MT-21":"Kalkara","MT-23":"Kirkop","MT-24":"Lija","MT-25":"Luqa","MT-26":"Marsa","MT-27":"Marsaskala","MT-28":"Marsaxlokk","MT-29":"Mdina","MT-30":"Mellieha","MT-31":"Mgarr","MT-32":"Mosta","MT-33":"Mqabba","MT-34":"Msida","MT-35":"Mtarfa","MT-36":"Munxar","MT-37":"Nadur","MT-38":"Naxxar","MT-39":"Paola","MT-40":"Pembroke","MT-41":"Pieta","MT-42":"Qala","MT-43":"Qormi","MT-44":"Qrendi","MT-45":"Rabat Gozo","MT-46":"Rabat Malta","MT-47":"Safi","MT-48":"Saint Julian\'s","MT-49":"Saint John","MT-50":"Saint Lawrence","MT-51":"Saint Paul\'s Bay","MT-52":"Sannat","MT-53":"Saint Lucia\'s","MT-54":"Santa Venera","MT-55":"Siggiewi","MT-56":"Sliema","MT-57":"Swieqi","MT-58":"Ta\' Xbiex","MT-59":"Tarxien","MT-60":"Valletta","MT-61":"Xaghra","MT-62":"Xewkija","MT-63":"Xghajra","MT-64":"Zabbar","MT-65":"Zebbug Gozo","MT-67":"Zejtun","MT-68":"Zurrieq","MU-BL":"Black River","MU-FL":"Flacq","MU-GP":"Grand Port","MU-MO":"Moka","MU-PA":"Pamplemousses","MU-PL":"Port Louis","MU-PW":"Plaines Wilhems","MU-RO":"Rodrigues Islands","MU-RR":"Riviere du Rempart","MU-SA":"Savanne","MV-00":"South Ari Atoll","MV-01":"Addu City","MV-02":"North Ari Atoll","MV-03":"Faadhippolhu","MV-04":"Felidhu Atoll","MV-05":"Hahdhunmathi","MV-07":"North Thiladhunmathi","MV-12":"Mulaku Atoll","MV-13":"North Maalhosmadulu","MV-20":"South Maalhosmadulu","MV-23":"South Thiladhunmathi","MV-25":"South Miladhunmadulu","MV-28":"South Huvadhu Atoll","MV-MLE":"Male","MW-BA":"Balaka","MW-BL":"Blantyre","MW-CK":"Chikwawa","MW-CR":"Chiradzulu","MW-DE":"Dedza","MW-DO":"Dowa","MW-KR":"Karonga","MW-LI":"Lilongwe","MW-MC":"Mchinji","MW-MG":"Mangochi","MW-MH":"Machinga","MW-MW":"Mwanza","MW-MZ":"Mzimba","MW-NE":"Neno","MW-NI":"Ntchisi","MW-NK":"Nkhotakota","MW-SA":"Salima","MW-TH":"Thyolo","MW-ZO":"Zomba","MX-AGU":"Aguascalientes","MX-BCN":"Baja California","MX-BCS":"Baja California Sur","MX-CAM":"Campeche","MX-CHH":"Chihuahua","MX-CHP":"Chiapas","MX-CMX":"Ciudad de Mexico","MX-COA":"Coahuila de Zaragoza","MX-COL":"Colima","MX-DUR":"Durango","MX-GRO":"Guerrero","MX-GUA":"Guanajuato","MX-HID":"Hidalgo","MX-JAL":"Jalisco","MX-MEX":"Mexico","MX-MIC":"Michoacan de Ocampo","MX-MOR":"Morelos","MX-NAY":"Nayarit","MX-NLE":"Nuevo Leon","MX-OAX":"Oaxaca","MX-PUE":"Puebla","MX-QUE":"Queretaro","MX-ROO":"Quintana Roo","MX-SIN":"Sinaloa","MX-SLP":"San Luis Potosi","MX-SON":"Sonora","MX-TAB":"Tabasco","MX-TAM":"Tamaulipas","MX-TLA":"Tlaxcala","MX-VER":"Veracruz de Ignacio de la Llave","MX-YUC":"Yucatan","MX-ZAC":"Zacatecas","MY-01":"Johor","MY-02":"Kedah","MY-03":"Kelantan","MY-04":"Melaka","MY-05":"Negeri Sembilan","MY-06":"Pahang","MY-07":"Pulau Pinang","MY-08":"Perak","MY-09":"Perlis","MY-10":"Selangor","MY-11":"Terengganu","MY-12":"Sabah","MY-13":"Sarawak","MY-14":"Wilayah Persekutuan Kuala Lumpur","MY-15":"Wilayah Persekutuan Labuan","MY-16":"Wilayah Persekutuan Putrajaya","MZ-A":"Niassa","MZ-B":"Manica","MZ-G":"Gaza","MZ-I":"Inhambane","MZ-L":"Maputo","MZ-N":"Nampula","MZ-P":"Cabo Delgado","MZ-Q":"Zambezia","MZ-S":"Sofala","MZ-T":"Tete","NA-CA":"Zambezi","NA-ER":"Erongo","NA-HA":"Hardap","NA-KA":"Karas","NA-KE":"Kavango East","NA-KH":"Khomas","NA-KU":"Kunene","NA-KW":"Kavango West","NA-OD":"Otjozondjupa","NA-OH":"Omaheke","NA-ON":"Oshana","NA-OS":"Omusati","NA-OT":"Oshikoto","NA-OW":"Ohangwena","NE-1":"Agadez","NE-2":"Diffa","NE-3":"Dosso","NE-5":"Tahoua","NE-6":"Tillaberi","NE-7":"Zinder","NE-8":"Niamey","NG-AB":"Abia","NG-AD":"Adamawa","NG-AK":"Akwa Ibom","NG-AN":"Anambra","NG-BA":"Bauchi","NG-BE":"Benue","NG-BO":"Borno","NG-BY":"Bayelsa","NG-CR":"Cross River","NG-DE":"Delta","NG-EB":"Ebonyi","NG-ED":"Edo","NG-EK":"Ekiti","NG-EN":"Enugu","NG-FC":"Abuja Federal Capital Territory","NG-GO":"Gombe","NG-IM":"Imo","NG-JI":"Jigawa","NG-KD":"Kaduna","NG-KE":"Kebbi","NG-KN":"Kano","NG-KO":"Kogi","NG-KT":"Katsina","NG-KW":"Kwara","NG-LA":"Lagos","NG-NA":"Nasarawa","NG-NI":"Niger","NG-OG":"Ogun","NG-ON":"Ondo","NG-OS":"Osun","NG-OY":"Oyo","NG-PL":"Plateau","NG-RI":"Rivers","NG-SO":"Sokoto","NG-TA":"Taraba","NG-YO":"Yobe","NG-ZA":"Zamfara","NI-AN":"Costa Caribe Norte","NI-AS":"Costa Caribe Sur","NI-BO":"Boaco","NI-CA":"Carazo","NI-CI":"Chinandega","NI-CO":"Chontales","NI-ES":"Esteli","NI-GR":"Granada","NI-JI":"Jinotega","NI-LE":"Leon","NI-MD":"Madriz","NI-MN":"Managua","NI-MS":"Masaya","NI-MT":"Matagalpa","NI-NS":"Nueva Segovia","NI-RI":"Rivas","NI-SJ":"Rio San Juan","NL-DR":"Drenthe","NL-FL":"Flevoland","NL-FR":"Fryslan","NL-GE":"Gelderland","NL-GR":"Groningen","NL-LI":"Limburg","NL-NB":"Noord-Brabant","NL-NH":"Noord-Holland","NL-OV":"Overijssel","NL-UT":"Utrecht","NL-ZE":"Zeeland","NL-ZH":"Zuid-Holland","NO-03":"Oslo","NO-11":"Rogaland","NO-15":"More og Romsdal","NO-18":"Nordland","NO-30":"Viken","NO-34":"Innlandet","NO-38":"Vestfold og Telemark","NO-42":"Agder","NO-46":"Vestland","NO-50":"Trondelag","NO-54":"Troms og Finnmark","NP-BA":"Bagmati","NP-BH":"Bheri","NP-DH":"Dhawalagiri","NP-GA":"Gandaki","NP-JA":"Janakpur","NP-KA":"Karnali","NP-KO":"Kosi","NP-LU":"Lumbini","NP-MA":"Mahakali","NP-ME":"Mechi","NP-NA":"Narayani","NP-RA":"Rapti","NP-SA":"Sagarmatha","NP-SE":"Seti","NR-01":"Aiwo","NR-03":"Anetan","NR-14":"Yaren","NZ-AUK":"Auckland","NZ-BOP":"Bay of Plenty","NZ-CAN":"Canterbury","NZ-CIT":"Chatham Islands Territory","NZ-GIS":"Gisborne","NZ-HKB":"Hawke\'s Bay","NZ-MBH":"Marlborough","NZ-MWT":"Manawatu-Wanganui","NZ-NSN":"Nelson","NZ-NTL":"Northland","NZ-OTA":"Otago","NZ-STL":"Southland","NZ-TAS":"Tasman","NZ-TKI":"Taranaki","NZ-WGN":"Wellington","NZ-WKO":"Waikato","NZ-WTC":"West Coast","OM-BJ":"Janub al Batinah","OM-BS":"Shamal al Batinah","OM-BU":"Al Buraymi","OM-DA":"Ad Dakhiliyah","OM-MA":"Masqat","OM-MU":"Musandam","OM-SJ":"Janub ash Sharqiyah","OM-SS":"Shamal ash Sharqiyah","OM-WU":"Al Wusta","OM-ZA":"Az Zahirah","OM-ZU":"Zufar","PA-1":"Bocas del Toro","PA-2":"Cocle","PA-3":"Colon","PA-4":"Chiriqui","PA-5":"Darien","PA-6":"Herrera","PA-7":"Los Santos","PA-8":"Panama","PA-9":"Veraguas","PA-KY":"Guna Yala","PA-NB":"Ngobe-Bugle","PE-AMA":"Amazonas","PE-ANC":"Ancash","PE-APU":"Apurimac","PE-ARE":"Arequipa","PE-AYA":"Ayacucho","PE-CAJ":"Cajamarca","PE-CAL":"El Callao","PE-CUS":"Cusco","PE-HUC":"Huanuco","PE-HUV":"Huancavelica","PE-ICA":"Ica","PE-JUN":"Junin","PE-LAL":"La Libertad","PE-LAM":"Lambayeque","PE-LIM":"Lima","PE-LMA":"Municipalidad Metropolitana de Lima","PE-LOR":"Loreto","PE-MDD":"Madre de Dios","PE-MOQ":"Moquegua","PE-PAS":"Pasco","PE-PIU":"Piura","PE-PUN":"Puno","PE-SAM":"San Martin","PE-TAC":"Tacna","PE-TUM":"Tumbes","PE-UCA":"Ucayali","PF-A":"Austral Islands","PF-M":"Marquesas Islands","PF-S":"Society Islands","PF-T":"Tuamotu and Gambier Islands","PF-V":"Windward Islands","PG-CPK":"Chimbu","PG-CPM":"Central","PG-EBR":"East New Britain","PG-EHG":"Eastern Highlands","PG-ESW":"East Sepik","PG-MBA":"Milne Bay","PG-MPL":"Morobe","PG-MPM":"Madang","PG-MRL":"Manus","PG-NCD":"National Capital District (Port Moresby)","PG-NIK":"New Ireland","PG-NSB":"Bougainville","PG-SAN":"West Sepik","PG-SHM":"Southern Highlands","PG-WBK":"West New Britain","PG-WHM":"Western Highlands","PG-WPD":"Western","PH-00":"National Capital Region","PH-01":"Ilocos","PH-02":"Cagayan Valley","PH-03":"Central Luzon","PH-05":"Bicol","PH-06":"Western Visayas","PH-07":"Central Visayas","PH-08":"Eastern Visayas","PH-09":"Zamboanga Peninsula","PH-10":"Northern Mindanao","PH-11":"Davao","PH-12":"Soccsksargen","PH-13":"Caraga","PH-14":"Autonomous Region in Muslim Mindanao","PH-15":"Cordillera Administrative Region","PH-40":"Calabarzon","PH-41":"Mimaropa","PH-ABR":"Abra","PH-AGN":"Agusan del Norte","PH-AGS":"Agusan del Sur","PH-AKL":"Aklan","PH-ALB":"Albay","PH-ANT":"Antique","PH-APA":"Apayao","PH-AUR":"Aurora","PH-BAN":"Bataan","PH-BAS":"Basilan","PH-BEN":"Benguet","PH-BIL":"Biliran","PH-BOH":"Bohol","PH-BTG":"Batangas","PH-BTN":"Batanes","PH-BUK":"Bukidnon","PH-BUL":"Bulacan","PH-CAG":"Cagayan","PH-CAM":"Camiguin","PH-CAN":"Camarines Norte","PH-CAP":"Capiz","PH-CAS":"Camarines Sur","PH-CAT":"Catanduanes","PH-CAV":"Cavite","PH-CEB":"Cebu","PH-COM":"Davao de Oro","PH-DAO":"Davao Oriental","PH-DAS":"Davao del Sur","PH-DAV":"Davao del Norte","PH-DIN":"Dinagat Islands","PH-EAS":"Eastern Samar","PH-GUI":"Guimaras","PH-IFU":"Ifugao","PH-ILI":"Iloilo","PH-ILN":"Ilocos Norte","PH-ILS":"Ilocos Sur","PH-ISA":"Isabela","PH-KAL":"Kalinga","PH-LAG":"Laguna","PH-LAN":"Lanao del Norte","PH-LAS":"Lanao del Sur","PH-LEY":"Leyte","PH-LUN":"La Union","PH-MAD":"Marinduque","PH-MAG":"Maguindanao","PH-MAS":"Masbate","PH-MDC":"Mindoro Occidental","PH-MDR":"Mindoro Oriental","PH-MOU":"Mountain Province","PH-MSC":"Misamis Occidental","PH-MSR":"Misamis Oriental","PH-NCO":"Cotabato","PH-NEC":"Negros Occidental","PH-NER":"Negros Oriental","PH-NSA":"Northern Samar","PH-NUE":"Nueva Ecija","PH-NUV":"Nueva Vizcaya","PH-PAM":"Pampanga","PH-PAN":"Pangasinan","PH-PLW":"Palawan","PH-QUE":"Quezon","PH-QUI":"Quirino","PH-RIZ":"Rizal","PH-ROM":"Romblon","PH-SAR":"Sarangani","PH-SCO":"South Cotabato","PH-SIG":"Siquijor","PH-SLE":"Southern Leyte","PH-SLU":"Sulu","PH-SOR":"Sorsogon","PH-SUK":"Sultan Kudarat","PH-SUN":"Surigao del Norte","PH-SUR":"Surigao del Sur","PH-TAR":"Tarlac","PH-TAW":"Tawi-Tawi","PH-WSA":"Samar","PH-ZAN":"Zamboanga del Norte","PH-ZAS":"Zamboanga del Sur","PH-ZMB":"Zambales","PH-ZSI":"Zamboanga Sibugay","PK-BA":"Balochistan","PK-GB":"Gilgit-Baltistan","PK-IS":"Islamabad","PK-JK":"Azad Jammu and Kashmir","PK-KP":"Khyber Pakhtunkhwa","PK-PB":"Punjab","PK-SD":"Sindh","PL-02":"Dolnoslaskie","PL-04":"Kujawsko-pomorskie","PL-06":"Lubelskie","PL-08":"Lubuskie","PL-10":"Lodzkie","PL-12":"Malopolskie","PL-14":"Mazowieckie","PL-16":"Opolskie","PL-18":"Podkarpackie","PL-20":"Podlaskie","PL-22":"Pomorskie","PL-24":"Slaskie","PL-26":"Swietokrzyskie","PL-28":"Warminsko-mazurskie","PL-30":"Wielkopolskie","PL-32":"Zachodniopomorskie","PM-P":"Saint-Pierre","PM-M":"Miquelon-Langlade","PS-BTH":"Bethlehem","PS-DEB":"Deir El Balah","PS-GZA":"Gaza","PS-HBN":"Hebron","PS-JEM":"Jerusalem","PS-JEN":"Jenin","PS-JRH":"Jericho and Al Aghwar","PS-KYS":"Khan Yunis","PS-NBS":"Nablus","PS-QQA":"Qalqilya","PS-RBH":"Ramallah","PS-RFH":"Rafah","PS-SLT":"Salfit","PS-TBS":"Tubas","PS-TKM":"Tulkarm","PT-01":"Aveiro","PT-02":"Beja","PT-03":"Braga","PT-04":"Braganca","PT-05":"Castelo Branco","PT-06":"Coimbra","PT-07":"Evora","PT-08":"Faro","PT-09":"Guarda","PT-10":"Leiria","PT-11":"Lisboa","PT-12":"Portalegre","PT-13":"Porto","PT-14":"Santarem","PT-15":"Setubal","PT-16":"Viana do Castelo","PT-17":"Vila Real","PT-18":"Viseu","PT-20":"Regiao Autonoma dos Acores","PT-30":"Regiao Autonoma da Madeira","PW-004":"Airai","PW-150":"Koror","PW-212":"Melekeok","PW-222":"Ngardmau","PY-1":"Concepcion","PY-10":"Alto Parana","PY-11":"Central","PY-12":"Neembucu","PY-13":"Amambay","PY-14":"Canindeyu","PY-15":"Presidente Hayes","PY-19":"Boqueron","PY-2":"San Pedro","PY-3":"Cordillera","PY-4":"Guaira","PY-5":"Caaguazu","PY-6":"Caazapa","PY-7":"Itapua","PY-8":"Misiones","PY-9":"Paraguari","PY-ASU":"Asuncion","QA-DA":"Ad Dawhah","QA-KH":"Al Khawr wa adh Dhakhirah","QA-MS":"Ash Shamal","QA-RA":"Ar Rayyan","QA-US":"Umm Salal","QA-WA":"Al Wakrah","QA-ZA":"Az Za\'ayin","RO-AB":"Alba","RO-AG":"Arges","RO-AR":"Arad","RO-B":"Bucuresti","RO-BC":"Bacau","RO-BH":"Bihor","RO-BN":"Bistrita-Nasaud","RO-BR":"Braila","RO-BT":"Botosani","RO-BV":"Brasov","RO-BZ":"Buzau","RO-CJ":"Cluj","RO-CL":"Calarasi","RO-CS":"Caras-Severin","RO-CT":"Constanta","RO-CV":"Covasna","RO-DB":"Dambovita","RO-DJ":"Dolj","RO-GJ":"Gorj","RO-GL":"Galati","RO-GR":"Giurgiu","RO-HD":"Hunedoara","RO-HR":"Harghita","RO-IF":"Ilfov","RO-IL":"Ialomita","RO-IS":"Iasi","RO-MH":"Mehedinti","RO-MM":"Maramures","RO-MS":"Mures","RO-NT":"Neamt","RO-OT":"Olt","RO-PH":"Prahova","RO-SB":"Sibiu","RO-SJ":"Salaj","RO-SM":"Satu Mare","RO-SV":"Suceava","RO-TL":"Tulcea","RO-TM":"Timis","RO-TR":"Teleorman","RO-VL":"Valcea","RO-VN":"Vrancea","RO-VS":"Vaslui","RS-00":"Beograd","RS-01":"Severnobacki okrug","RS-02":"Srednjebanatski okrug","RS-03":"Severnobanatski okrug","RS-04":"Juznobanatski okrug","RS-05":"Zapadnobacki okrug","RS-06":"Juznobacki okrug","RS-07":"Sremski okrug","RS-08":"Macvanski okrug","RS-09":"Kolubarski okrug","RS-10":"Podunavski okrug","RS-11":"Branicevski okrug","RS-12":"Sumadijski okrug","RS-13":"Pomoravski okrug","RS-14":"Borski okrug","RS-15":"Zajecarski okrug","RS-16":"Zlatiborski okrug","RS-17":"Moravicki okrug","RS-18":"Raski okrug","RS-19":"Rasinski okrug","RS-20":"Nisavski okrug","RS-21":"Toplicki okrug","RS-22":"Pirotski okrug","RS-23":"Jablanicki okrug","RS-24":"Pcinjski okrug","RS-26":"Pecki okrug","RS-27":"Prizrenski okrug","RS-28":"Kosovsko-Mitrovacki okrug","RU-AD":"Adygeya, Respublika","RU-AL":"Altay, Respublika","RU-ALT":"Altayskiy kray","RU-AMU":"Amurskaya oblast\'","RU-ARK":"Arkhangel\'skaya oblast\'","RU-AST":"Astrakhanskaya oblast\'","RU-BA":"Bashkortostan, Respublika","RU-BEL":"Belgorodskaya oblast\'","RU-BRY":"Bryanskaya oblast\'","RU-BU":"Buryatiya, Respublika","RU-CE":"Chechenskaya Respublika","RU-CHE":"Chelyabinskaya oblast\'","RU-CHU":"Chukotskiy avtonomnyy okrug","RU-CU":"Chuvashskaya Respublika","RU-DA":"Dagestan, Respublika","RU-IN":"Ingushetiya, Respublika","RU-IRK":"Irkutskaya oblast\'","RU-IVA":"Ivanovskaya oblast\'","RU-KAM":"Kamchatskiy kray","RU-KB":"Kabardino-Balkarskaya Respublika","RU-KC":"Karachayevo-Cherkesskaya Respublika","RU-KDA":"Krasnodarskiy kray","RU-KEM":"Kemerovskaya oblast\'","RU-KGD":"Kaliningradskaya oblast\'","RU-KGN":"Kurganskaya oblast\'","RU-KHA":"Khabarovskiy kray","RU-KHM":"Khanty-Mansiyskiy avtonomnyy okrug","RU-KIR":"Kirovskaya oblast\'","RU-KK":"Khakasiya, Respublika","RU-KL":"Kalmykiya, Respublika","RU-KLU":"Kaluzhskaya oblast\'","RU-KO":"Komi, Respublika","RU-KOS":"Kostromskaya oblast\'","RU-KR":"Kareliya, Respublika","RU-KRS":"Kurskaya oblast\'","RU-KYA":"Krasnoyarskiy kray","RU-LEN":"Leningradskaya oblast\'","RU-LIP":"Lipetskaya oblast\'","RU-MAG":"Magadanskaya oblast\'","RU-ME":"Mariy El, Respublika","RU-MO":"Mordoviya, Respublika","RU-MOS":"Moskovskaya oblast\'","RU-MOW":"Moskva","RU-MUR":"Murmanskaya oblast\'","RU-NEN":"Nenetskiy avtonomnyy okrug","RU-NGR":"Novgorodskaya oblast\'","RU-NIZ":"Nizhegorodskaya oblast\'","RU-NVS":"Novosibirskaya oblast\'","RU-OMS":"Omskaya oblast\'","RU-ORE":"Orenburgskaya oblast\'","RU-ORL":"Orlovskaya oblast\'","RU-PER":"Permskiy kray","RU-PNZ":"Penzenskaya oblast\'","RU-PRI":"Primorskiy kray","RU-PSK":"Pskovskaya oblast\'","RU-ROS":"Rostovskaya oblast\'","RU-RYA":"Ryazanskaya oblast\'","RU-SA":"Saha, Respublika","RU-SAK":"Sakhalinskaya oblast\'","RU-SAM":"Samarskaya oblast\'","RU-SAR":"Saratovskaya oblast\'","RU-SE":"Severnaya Osetiya, Respublika","RU-SMO":"Smolenskaya oblast\'","RU-SPE":"Sankt-Peterburg","RU-STA":"Stavropol\'skiy kray","RU-SVE":"Sverdlovskaya oblast\'","RU-TA":"Tatarstan, Respublika","RU-TAM":"Tambovskaya oblast\'","RU-TOM":"Tomskaya oblast\'","RU-TUL":"Tul\'skaya oblast\'","RU-TVE":"Tverskaya oblast\'","RU-TY":"Tyva, Respublika","RU-TYU":"Tyumenskaya oblast\'","RU-UD":"Udmurtskaya Respublika","RU-ULY":"Ul\'yanovskaya oblast\'","RU-VGG":"Volgogradskaya oblast\'","RU-VLA":"Vladimirskaya oblast\'","RU-VLG":"Vologodskaya oblast\'","RU-VOR":"Voronezhskaya oblast\'","RU-YAN":"Yamalo-Nenetskiy avtonomnyy okrug","RU-YAR":"Yaroslavskaya oblast\'","RU-YEV":"Yevreyskaya avtonomnaya oblast\'","RU-ZAB":"Zabaykal\'skiy kray","RW-01":"Ville de Kigali","RW-02":"Est","RW-03":"Nord","RW-04":"Ouest","RW-05":"Sud","SA-01":"Ar Riyad","SA-02":"Makkah al Mukarramah","SA-03":"Al Madinah al Munawwarah","SA-04":"Ash Sharqiyah","SA-05":"Al Qasim","SA-06":"Ha\'il","SA-07":"Tabuk","SA-08":"Al Hudud ash Shamaliyah","SA-09":"Jazan","SA-10":"Najran","SA-11":"Al Bahah","SA-12":"Al Jawf","SA-14":"\'Asir","SB-CH":"Choiseul","SB-GU":"Guadalcanal","SB-WE":"Western","SC-01":"Anse aux Pins","SC-02":"Anse Boileau","SC-05":"Anse Royale","SC-06":"Baie Lazare","SC-07":"Baie Sainte Anne","SC-08":"Beau Vallon","SC-10":"Bel Ombre","SC-11":"Cascade","SC-13":"Grand Anse Mahe","SC-14":"Grand Anse Praslin","SC-15":"La Digue","SC-16":"English River","SC-20":"Pointe Larue","SC-23":"Takamaka","SD-DC":"Central Darfur","SD-DN":"North Darfur","SD-DS":"South Darfur","SD-DW":"West Darfur","SD-GD":"Gedaref","SD-GK":"West Kordofan","SD-GZ":"Gezira","SD-KA":"Kassala","SD-KH":"Khartoum","SD-KN":"North Kordofan","SD-KS":"South Kordofan","SD-NB":"Blue Nile","SD-NO":"Northern","SD-NR":"River Nile","SD-NW":"White Nile","SD-RS":"Red Sea","SD-SI":"Sennar","SE-AB":"Stockholms lan","SE-AC":"Vasterbottens lan","SE-BD":"Norrbottens lan","SE-C":"Uppsala lan","SE-D":"Sodermanlands lan","SE-E":"Ostergotlands lan","SE-F":"Jonkopings lan","SE-G":"Kronobergs lan","SE-H":"Kalmar lan","SE-I":"Gotlands lan","SE-K":"Blekinge lan","SE-M":"Skane lan","SE-N":"Hallands lan","SE-O":"Vastra Gotalands lan","SE-S":"Varmlands lan","SE-T":"Orebro lan","SE-U":"Vastmanlands lan","SE-W":"Dalarnas lan","SE-X":"Gavleborgs lan","SE-Y":"Vasternorrlands lan","SE-Z":"Jamtlands lan","SH-HL":"Saint Helena","SI-001":"Ajdovscina","SI-002":"Beltinci","SI-003":"Bled","SI-004":"Bohinj","SI-005":"Borovnica","SI-006":"Bovec","SI-007":"Brda","SI-008":"Brezovica","SI-009":"Brezice","SI-010":"Tisina","SI-011":"Celje","SI-012":"Cerklje na Gorenjskem","SI-013":"Cerknica","SI-014":"Cerkno","SI-015":"Crensovci","SI-017":"Crnomelj","SI-018":"Destrnik","SI-019":"Divaca","SI-020":"Dobrepolje","SI-021":"Dobrova-Polhov Gradec","SI-023":"Domzale","SI-024":"Dornava","SI-025":"Dravograd","SI-026":"Duplek","SI-029":"Gornja Radgona","SI-031":"Gornji Petrovci","SI-032":"Grosuplje","SI-033":"Salovci","SI-034":"Hrastnik","SI-035":"Hrpelje-Kozina","SI-036":"Idrija","SI-037":"Ig","SI-038":"Ilirska Bistrica","SI-039":"Ivancna Gorica","SI-040":"Izola","SI-041":"Jesenice","SI-042":"Jursinci","SI-043":"Kamnik","SI-044":"Kanal","SI-045":"Kidricevo","SI-046":"Kobarid","SI-047":"Kobilje","SI-048":"Kocevje","SI-049":"Komen","SI-050":"Koper","SI-052":"Kranj","SI-053":"Kranjska Gora","SI-054":"Krsko","SI-055":"Kungota","SI-056":"Kuzma","SI-057":"Lasko","SI-058":"Lenart","SI-059":"Lendava","SI-060":"Litija","SI-061":"Ljubljana","SI-063":"Ljutomer","SI-064":"Logatec","SI-065":"Loska dolina","SI-066":"Loski Potok","SI-067":"Luce","SI-068":"Lukovica","SI-069":"Majsperk","SI-070":"Maribor","SI-071":"Medvode","SI-072":"Menges","SI-073":"Metlika","SI-074":"Mezica","SI-075":"Miren-Kostanjevica","SI-076":"Mislinja","SI-077":"Moravce","SI-079":"Mozirje","SI-080":"Murska Sobota","SI-081":"Muta","SI-082":"Naklo","SI-083":"Nazarje","SI-084":"Nova Gorica","SI-085":"Novo Mesto","SI-086":"Odranci","SI-087":"Ormoz","SI-090":"Piran","SI-091":"Pivka","SI-092":"Podcetrtek","SI-094":"Postojna","SI-095":"Preddvor","SI-096":"Ptuj","SI-097":"Puconci","SI-098":"Race-Fram","SI-099":"Radece","SI-100":"Radenci","SI-101":"Radlje ob Dravi","SI-102":"Radovljica","SI-103":"Ravne na Koroskem","SI-104":"Ribnica","SI-105":"Rogasovci","SI-106":"Rogaska Slatina","SI-108":"Ruse","SI-109":"Semic","SI-110":"Sevnica","SI-111":"Sezana","SI-112":"Slovenj Gradec","SI-113":"Slovenska Bistrica","SI-114":"Slovenske Konjice","SI-115":"Starse","SI-116":"Sveti Jurij ob Scavnici","SI-117":"Sencur","SI-118":"Sentilj","SI-119":"Sentjernej","SI-120":"Sentjur","SI-121":"Skocjan","SI-122":"Skofja Loka","SI-123":"Skofljica","SI-124":"Smarje pri Jelsah","SI-125":"Smartno ob Paki","SI-126":"Sostanj","SI-127":"Store","SI-128":"Tolmin","SI-129":"Trbovlje","SI-130":"Trebnje","SI-131":"Trzic","SI-132":"Turnisce","SI-133":"Velenje","SI-134":"Velike Lasce","SI-135":"Videm","SI-136":"Vipava","SI-137":"Vitanje","SI-138":"Vodice","SI-139":"Vojnik","SI-140":"Vrhnika","SI-141":"Vuzenica","SI-142":"Zagorje ob Savi","SI-143":"Zavrc","SI-144":"Zrece","SI-146":"Zelezniki","SI-147":"Ziri","SI-148":"Benedikt","SI-149":"Bistrica ob Sotli","SI-150":"Bloke","SI-151":"Braslovce","SI-152":"Cankova","SI-154":"Dobje","SI-155":"Dobrna","SI-156":"Dobrovnik","SI-158":"Grad","SI-159":"Hajdina","SI-160":"Hoce-Slivnica","SI-161":"Hodos","SI-162":"Horjul","SI-164":"Komenda","SI-165":"Kostel","SI-166":"Krizevci","SI-167":"Lovrenc na Pohorju","SI-168":"Markovci","SI-169":"Miklavz na Dravskem polju","SI-170":"Mirna Pec","SI-171":"Oplotnica","SI-172":"Podlehnik","SI-173":"Polzela","SI-174":"Prebold","SI-175":"Prevalje","SI-176":"Razkrizje","SI-179":"Sodrazica","SI-180":"Solcava","SI-182":"Sveti Andraz v Slovenskih Goricah","SI-183":"Sempeter-Vrtojba","SI-184":"Tabor","SI-185":"Trnovska Vas","SI-186":"Trzin","SI-187":"Velika Polana","SI-188":"Verzej","SI-189":"Vransko","SI-190":"Zalec","SI-191":"Zetale","SI-193":"Zuzemberk","SI-194":"Smartno pri Litiji","SI-195":"Apace","SI-196":"Cirkulane","SI-197":"Kosanjevica na Krki","SI-198":"Makole","SI-199":"Mokronog-Trebelno","SI-200":"Poljcane","SI-201":"Rence-Vogrsko","SI-203":"Straza","SI-204":"Sveta Trojica v Slovenskih goricah","SI-205":"Sveti Tomaz","SI-206":"Smarjeske Toplice","SI-207":"Gorje","SI-208":"Log-Dragomer","SI-209":"Recica ob Savinji","SI-210":"Sveti Jurij v Slovenskih goricah","SI-211":"Sentrupert","SI-212":"Mirna","SI-213":"Ankaran","SK-BC":"Banskobystricky kraj","SK-BL":"Bratislavsky kraj","SK-KI":"Kosicky kraj","SK-NI":"Nitriansky kraj","SK-PV":"Presovsky kraj","SK-TA":"Trnavsky kraj","SK-TC":"Trenciansky kraj","SK-ZI":"Zilinsky kraj","SL-E":"Eastern","SL-N":"Northern","SL-S":"Southern","SL-W":"Western Area","SM-02":"Chiesanuova","SM-04":"Faetano","SM-07":"Citta di San Marino","SM-09":"Serravalle","SN-DB":"Diourbel","SN-DK":"Dakar","SN-FK":"Fatick","SN-KA":"Kaffrine","SN-KD":"Kolda","SN-KE":"Kedougou","SN-KL":"Kaolack","SN-LG":"Louga","SN-MT":"Matam","SN-SE":"Sedhiou","SN-SL":"Saint-Louis","SN-TC":"Tambacounda","SN-TH":"Thies","SN-ZG":"Ziguinchor","SO-AW":"Awdal","SO-BN":"Banaadir","SO-BR":"Bari","SO-BY":"Bay","SO-GA":"Galguduud","SO-HI":"Hiiraan","SO-JH":"Jubbada Hoose","SO-MU":"Mudug","SO-NU":"Nugaal","SO-SA":"Sanaag","SO-SH":"Shabeellaha Hoose","SO-SO":"Sool","SO-TO":"Togdheer","SO-WO":"Woqooyi Galbeed","SR-BR":"Brokopondo","SR-CM":"Commewijne","SR-CR":"Coronie","SR-NI":"Nickerie","SR-PM":"Paramaribo","SR-SA":"Saramacca","SR-SI":"Sipaliwini","SR-WA":"Wanica","SS-BN":"Northern Bahr el Ghazal","SS-EC":"Central Equatoria","SS-EE":"Eastern Equatoria","SS-EW":"Western Equatoria","SS-NU":"Upper Nile","SS-UY":"Unity","ST-01":"Agua Grande","SV-AH":"Ahuachapan","SV-CA":"Cabanas","SV-CH":"Chalatenango","SV-CU":"Cuscatlan","SV-LI":"La Libertad","SV-MO":"Morazan","SV-PA":"La Paz","SV-SA":"Santa Ana","SV-SM":"San Miguel","SV-SO":"Sonsonate","SV-SS":"San Salvador","SV-SV":"San Vicente","SV-UN":"La Union","SV-US":"Usulutan","SY-DI":"Dimashq","SY-DR":"Dar\'a","SY-DY":"Dayr az Zawr","SY-HA":"Al Hasakah","SY-HI":"Hims","SY-HL":"Halab","SY-HM":"Hamah","SY-LA":"Al Ladhiqiyah","SY-QU":"Al Qunaytirah","SY-RA":"Ar Raqqah","SY-RD":"Rif Dimashq","SY-SU":"As Suwayda\'","SY-TA":"Tartus","SZ-HH":"Hhohho","SZ-LU":"Lubombo","SZ-MA":"Manzini","SZ-SH":"Shiselweni","TD-BG":"Bahr el Ghazal","TD-CB":"Chari-Baguirmi","TD-LC":"Lac","TD-ND":"Ville de Ndjamena","TD-OD":"Ouaddai","TD-SI":"Sila","TG-C":"Centrale","TG-K":"Kara","TG-M":"Maritime","TG-P":"Plateaux","TG-S":"Savanes","TH-10":"Krung Thep Maha Nakhon","TH-11":"Samut Prakan","TH-12":"Nonthaburi","TH-13":"Pathum Thani","TH-14":"Phra Nakhon Si Ayutthaya","TH-15":"Ang Thong","TH-16":"Lop Buri","TH-17":"Sing Buri","TH-18":"Chai Nat","TH-19":"Saraburi","TH-20":"Chon Buri","TH-21":"Rayong","TH-22":"Chanthaburi","TH-23":"Trat","TH-24":"Chachoengsao","TH-25":"Prachin Buri","TH-26":"Nakhon Nayok","TH-27":"Sa Kaeo","TH-30":"Nakhon Ratchasima","TH-31":"Buri Ram","TH-32":"Surin","TH-33":"Si Sa Ket","TH-34":"Ubon Ratchathani","TH-35":"Yasothon","TH-36":"Chaiyaphum","TH-37":"Amnat Charoen","TH-38":"Bueng Kan","TH-39":"Nong Bua Lam Phu","TH-40":"Khon Kaen","TH-41":"Udon Thani","TH-42":"Loei","TH-43":"Nong Khai","TH-44":"Maha Sarakham","TH-45":"Roi Et","TH-46":"Kalasin","TH-47":"Sakon Nakhon","TH-48":"Nakhon Phanom","TH-49":"Mukdahan","TH-50":"Chiang Mai","TH-51":"Lamphun","TH-52":"Lampang","TH-53":"Uttaradit","TH-54":"Phrae","TH-55":"Nan","TH-56":"Phayao","TH-57":"Chiang Rai","TH-58":"Mae Hong Son","TH-60":"Nakhon Sawan","TH-61":"Uthai Thani","TH-62":"Kamphaeng Phet","TH-63":"Tak","TH-64":"Sukhothai","TH-65":"Phitsanulok","TH-66":"Phichit","TH-67":"Phetchabun","TH-70":"Ratchaburi","TH-71":"Kanchanaburi","TH-72":"Suphan Buri","TH-73":"Nakhon Pathom","TH-74":"Samut Sakhon","TH-75":"Samut Songkhram","TH-76":"Phetchaburi","TH-77":"Prachuap Khiri Khan","TH-80":"Nakhon Si Thammarat","TH-81":"Krabi","TH-82":"Phangnga","TH-83":"Phuket","TH-84":"Surat Thani","TH-85":"Ranong","TH-86":"Chumphon","TH-90":"Songkhla","TH-91":"Satun","TH-92":"Trang","TH-93":"Phatthalung","TH-94":"Pattani","TH-95":"Yala","TH-96":"Narathiwat","TJ-DU":"Dushanbe","TJ-GB":"Kuhistoni Badakhshon","TJ-KT":"Khatlon","TJ-RA":"Nohiyahoi Tobei Jumhuri","TJ-SU":"Sughd","TL-AN":"Ainaro","TL-CO":"Cova Lima","TL-DI":"Dili","TL-LI":"Liquica","TM-A":"Ahal","TM-B":"Balkan","TM-D":"Dasoguz","TM-L":"Lebap","TM-M":"Mary","TN-11":"Tunis","TN-12":"L\'Ariana","TN-13":"Ben Arous","TN-14":"La Manouba","TN-21":"Nabeul","TN-22":"Zaghouan","TN-23":"Bizerte","TN-31":"Beja","TN-32":"Jendouba","TN-33":"Le Kef","TN-34":"Siliana","TN-41":"Kairouan","TN-42":"Kasserine","TN-43":"Sidi Bouzid","TN-51":"Sousse","TN-52":"Monastir","TN-53":"Mahdia","TN-61":"Sfax","TN-71":"Gafsa","TN-72":"Tozeur","TN-73":"Kebili","TN-81":"Gabes","TN-82":"Medenine","TN-83":"Tataouine","TO-01":"\'Eua","TO-02":"Ha\'apai","TO-03":"Niuas","TO-04":"Tongatapu","TO-05":"Vava\'u","TR-01":"Adana","TR-02":"Adiyaman","TR-03":"Afyonkarahisar","TR-04":"Agri","TR-05":"Amasya","TR-06":"Ankara","TR-07":"Antalya","TR-08":"Artvin","TR-09":"Aydin","TR-10":"Balikesir","TR-11":"Bilecik","TR-12":"Bingol","TR-13":"Bitlis","TR-14":"Bolu","TR-15":"Burdur","TR-16":"Bursa","TR-17":"Canakkale","TR-18":"Cankiri","TR-19":"Corum","TR-20":"Denizli","TR-21":"Diyarbakir","TR-22":"Edirne","TR-23":"Elazig","TR-24":"Erzincan","TR-25":"Erzurum","TR-26":"Eskisehir","TR-27":"Gaziantep","TR-28":"Giresun","TR-29":"Gumushane","TR-30":"Hakkari","TR-31":"Hatay","TR-32":"Isparta","TR-33":"Mersin","TR-34":"Istanbul","TR-35":"Izmir","TR-36":"Kars","TR-37":"Kastamonu","TR-38":"Kayseri","TR-39":"Kirklareli","TR-40":"Kirsehir","TR-41":"Kocaeli","TR-42":"Konya","TR-43":"Kutahya","TR-44":"Malatya","TR-45":"Manisa","TR-46":"Kahramanmaras","TR-47":"Mardin","TR-48":"Mugla","TR-49":"Mus","TR-50":"Nevsehir","TR-51":"Nigde","TR-52":"Ordu","TR-53":"Rize","TR-54":"Sakarya","TR-55":"Samsun","TR-56":"Siirt","TR-57":"Sinop","TR-58":"Sivas","TR-59":"Tekirdag","TR-60":"Tokat","TR-61":"Trabzon","TR-62":"Tunceli","TR-63":"Sanliurfa","TR-64":"Usak","TR-65":"Van","TR-66":"Yozgat","TR-67":"Zonguldak","TR-68":"Aksaray","TR-69":"Bayburt","TR-70":"Karaman","TR-71":"Kirikkale","TR-72":"Batman","TR-73":"Sirnak","TR-74":"Bartin","TR-75":"Ardahan","TR-76":"Igdir","TR-77":"Yalova","TR-78":"Karabuk","TR-79":"Kilis","TR-80":"Osmaniye","TR-81":"Duzce","TT-ARI":"Arima","TT-CHA":"Chaguanas","TT-CTT":"Couva-Tabaquite-Talparo","TT-DMN":"Diego Martin","TT-MRC":"Mayaro-Rio Claro","TT-PED":"Penal-Debe","TT-POS":"Port of Spain","TT-PRT":"Princes Town","TT-PTF":"Point Fortin","TT-SFO":"San Fernando","TT-SGE":"Sangre Grande","TT-SIP":"Siparia","TT-SJL":"San Juan-Laventille","TT-TOB":"Tobago","TT-TUP":"Tunapuna-Piarco","TV-FUN":"Funafuti","TW-CHA":"Changhua","TW-CYQ":"Chiayi","TW-HSQ":"Hsinchu","TW-HUA":"Hualien","TW-ILA":"Yilan","TW-KEE":"Keelung","TW-KHH":"Kaohsiung","TW-KIN":"Kinmen","TW-LIE":"Lienchiang","TW-MIA":"Miaoli","TW-NAN":"Nantou","TW-NWT":"New Taipei","TW-PEN":"Penghu","TW-PIF":"Pingtung","TW-TAO":"Taoyuan","TW-TNN":"Tainan","TW-TPE":"Taipei","TW-TTT":"Taitung","TW-TXG":"Taichung","TW-YUN":"Yunlin","TZ-01":"Arusha","TZ-02":"Dar es Salaam","TZ-03":"Dodoma","TZ-04":"Iringa","TZ-05":"Kagera","TZ-06":"Kaskazini Pemba","TZ-07":"Kaskazini Unguja","TZ-08":"Kigoma","TZ-09":"Kilimanjaro","TZ-10":"Kusini Pemba","TZ-11":"Kusini Unguja","TZ-12":"Lindi","TZ-13":"Mara","TZ-14":"Mbeya","TZ-15":"Mjini Magharibi","TZ-16":"Morogoro","TZ-17":"Mtwara","TZ-18":"Mwanza","TZ-19":"Pwani","TZ-20":"Rukwa","TZ-21":"Ruvuma","TZ-22":"Shinyanga","TZ-23":"Singida","TZ-24":"Tabora","TZ-25":"Tanga","TZ-26":"Manyara","TZ-27":"Geita","TZ-28":"Katavi","TZ-29":"Njombe","TZ-30":"Simiyu","TZ-31":"Songwe","UA-05":"Vinnytska oblast","UA-07":"Volynska oblast","UA-09":"Luhanska oblast","UA-12":"Dnipropetrovska oblast","UA-14":"Donetska oblast","UA-18":"Zhytomyrska oblast","UA-21":"Zakarpatska oblast","UA-23":"Zaporizka oblast","UA-26":"Ivano-Frankivska oblast","UA-30":"Kyiv","UA-32":"Kyivska oblast","UA-35":"Kirovohradska oblast","UA-40":"Sevastopol","UA-43":"Avtonomna Respublika Krym","UA-46":"Lvivska oblast","UA-48":"Mykolaivska oblast","UA-51":"Odeska oblast","UA-53":"Poltavska oblast","UA-56":"Rivnenska oblast","UA-59":"Sumska oblast","UA-61":"Ternopilska oblast","UA-63":"Kharkivska oblast","UA-65":"Khersonska oblast","UA-68":"Khmelnytska oblast","UA-71":"Cherkaska oblast","UA-74":"Chernihivska oblast","UA-77":"Chernivetska oblast","UG-101":"Kalangala","UG-102":"Kampala","UG-103":"Kiboga","UG-104":"Luwero","UG-105":"Masaka","UG-106":"Mpigi","UG-107":"Mubende","UG-108":"Mukono","UG-109":"Nakasongola","UG-110":"Rakai","UG-111":"Sembabule","UG-112":"Kayunga","UG-113":"Wakiso","UG-114":"Lyantonde","UG-115":"Mityana","UG-116":"Nakaseke","UG-117":"Buikwe","UG-118":"Bukomansibi","UG-120":"Buvuma","UG-121":"Gomba","UG-122":"Kalungu","UG-123":"Kyankwanzi","UG-124":"Lwengo","UG-201":"Bugiri","UG-202":"Busia","UG-203":"Iganga","UG-204":"Jinja","UG-205":"Kamuli","UG-206":"Kapchorwa","UG-207":"Katakwi","UG-208":"Kumi","UG-209":"Mbale","UG-211":"Soroti","UG-212":"Tororo","UG-213":"Kaberamaido","UG-214":"Mayuge","UG-215":"Sironko","UG-218":"Bududa","UG-219":"Bukedea","UG-222":"Kaliro","UG-223":"Manafwa","UG-224":"Namutumba","UG-225":"Bulambuli","UG-226":"Buyende","UG-227":"Kibuku","UG-228":"Kween","UG-229":"Luuka","UG-230":"Namayingo","UG-301":"Adjumani","UG-302":"Apac","UG-303":"Arua","UG-304":"Gulu","UG-305":"Kitgum","UG-307":"Lira","UG-308":"Moroto","UG-309":"Moyo","UG-310":"Nebbi","UG-311":"Nakapiripirit","UG-312":"Pader","UG-313":"Yumbe","UG-314":"Abim","UG-318":"Kaabong","UG-319":"Koboko","UG-320":"Maracha","UG-321":"Oyam","UG-322":"Agago","UG-323":"Alebtong","UG-325":"Kole","UG-326":"Lamwo","UG-327":"Napak","UG-328":"Nwoya","UG-330":"Zombo","UG-401":"Bundibugyo","UG-402":"Bushenyi","UG-403":"Hoima","UG-404":"Kabale","UG-405":"Kabarole","UG-406":"Kasese","UG-407":"Kibaale","UG-408":"Kisoro","UG-409":"Masindi","UG-410":"Mbarara","UG-411":"Ntungamo","UG-412":"Rukungiri","UG-413":"Kamwenge","UG-414":"Kanungu","UG-415":"Kyenjojo","UG-417":"Ibanda","UG-418":"Isingiro","UG-419":"Kiruhura","UG-420":"Buhweju","UG-421":"Kiryandongo","UG-422":"Kyegegwa","UG-423":"Mitooma","UG-424":"Ntoroko","UG-425":"Rubirizi","UG-426":"Sheema","UM-95":"Palmyra Atoll","US-AK":"Alaska","US-AL":"Alabama","US-AR":"Arkansas","US-AZ":"Arizona","US-CA":"California","US-CO":"Colorado","US-CT":"Connecticut","US-DC":"District of Columbia","US-DE":"Delaware","US-FL":"Florida","US-GA":"Georgia","US-HI":"Hawaii","US-IA":"Iowa","US-ID":"Idaho","US-IL":"Illinois","US-IN":"Indiana","US-KS":"Kansas","US-KY":"Kentucky","US-LA":"Louisiana","US-MA":"Massachusetts","US-MD":"Maryland","US-ME":"Maine","US-MI":"Michigan","US-MN":"Minnesota","US-MO":"Missouri","US-MS":"Mississippi","US-MT":"Montana","US-NC":"North Carolina","US-ND":"North Dakota","US-NE":"Nebraska","US-NH":"New Hampshire","US-NJ":"New Jersey","US-NM":"New Mexico","US-NV":"Nevada","US-NY":"New York","US-OH":"Ohio","US-OK":"Oklahoma","US-OR":"Oregon","US-PA":"Pennsylvania","US-RI":"Rhode Island","US-SC":"South Carolina","US-SD":"South Dakota","US-TN":"Tennessee","US-TX":"Texas","US-UT":"Utah","US-VA":"Virginia","US-VT":"Vermont","US-WA":"Washington","US-WI":"Wisconsin","US-WV":"West Virginia","US-WY":"Wyoming","UY-AR":"Artigas","UY-CA":"Canelones","UY-CL":"Cerro Largo","UY-CO":"Colonia","UY-DU":"Durazno","UY-FD":"Florida","UY-FS":"Flores","UY-LA":"Lavalleja","UY-MA":"Maldonado","UY-MO":"Montevideo","UY-PA":"Paysandu","UY-RN":"Rio Negro","UY-RO":"Rocha","UY-RV":"Rivera","UY-SA":"Salto","UY-SJ":"San Jose","UY-SO":"Soriano","UY-TA":"Tacuarembo","UY-TT":"Treinta y Tres","UZ-AN":"Andijon","UZ-BU":"Buxoro","UZ-FA":"Farg\'ona","UZ-JI":"Jizzax","UZ-NG":"Namangan","UZ-NW":"Navoiy","UZ-QA":"Qashqadaryo","UZ-QR":"Qoraqalpog\'iston Respublikasi","UZ-SA":"Samarqand","UZ-SI":"Sirdaryo","UZ-SU":"Surxondaryo","UZ-TK":"Toshkent","UZ-XO":"Xorazm","VC-01":"Charlotte","VC-04":"Saint George","VC-05":"Saint Patrick","VC-06":"Grenadines","VE-A":"Distrito Capital","VE-B":"Anzoategui","VE-C":"Apure","VE-D":"Aragua","VE-E":"Barinas","VE-F":"Bolivar","VE-G":"Carabobo","VE-H":"Cojedes","VE-I":"Falcon","VE-J":"Guarico","VE-K":"Lara","VE-L":"Merida","VE-M":"Miranda","VE-N":"Monagas","VE-O":"Nueva Esparta","VE-P":"Portuguesa","VE-R":"Sucre","VE-S":"Tachira","VE-T":"Trujillo","VE-U":"Yaracuy","VE-V":"Zulia","VE-W":"Dependencias Federales","VE-X":"La Guaira","VE-Y":"Delta Amacuro","VE-Z":"Amazonas","VN-01":"Lai Chau","VN-02":"Lao Cai","VN-03":"Ha Giang","VN-04":"Cao Bang","VN-05":"Son La","VN-06":"Yen Bai","VN-07":"Tuyen Quang","VN-09":"Lang Son","VN-13":"Quang Ninh","VN-14":"Hoa Binh","VN-18":"Ninh Binh","VN-20":"Thai Binh","VN-21":"Thanh Hoa","VN-22":"Nghe An","VN-23":"Ha Tinh","VN-24":"Quang Binh","VN-25":"Quang Tri","VN-26":"Thua Thien-Hue","VN-27":"Quang Nam","VN-28":"Kon Tum","VN-29":"Quang Ngai","VN-30":"Gia Lai","VN-31":"Binh Dinh","VN-32":"Phu Yen","VN-33":"Dak Lak","VN-34":"Khanh Hoa","VN-35":"Lam Dong","VN-36":"Ninh Thuan","VN-37":"Tay Ninh","VN-39":"Dong Nai","VN-40":"Binh Thuan","VN-41":"Long An","VN-43":"Ba Ria - Vung Tau","VN-44":"An Giang","VN-45":"Dong Thap","VN-46":"Tien Giang","VN-47":"Kien Giang","VN-49":"Vinh Long","VN-50":"Ben Tre","VN-51":"Tra Vinh","VN-52":"Soc Trang","VN-53":"Bac Kan","VN-54":"Bac Giang","VN-55":"Bac Lieu","VN-56":"Bac Ninh","VN-57":"Binh Duong","VN-58":"Binh Phuoc","VN-59":"Ca Mau","VN-61":"Hai Duong","VN-63":"Ha Nam","VN-66":"Hung Yen","VN-67":"Nam Dinh","VN-68":"Phu Tho","VN-69":"Thai Nguyen","VN-70":"Vinh Phuc","VN-71":"Dien Bien","VN-72":"Dak Nong","VN-73":"Hau Giang","VN-CT":"Can Tho","VN-DN":"Da Nang","VN-HN":"Ha Noi","VN-HP":"Hai Phong","VN-SG":"Ho Chi Minh","VU-SEE":"Shefa","VU-TAE":"Tafea","VU-TOB":"Torba","WF-SG":"Sigave","WF-UV":"Uvea","WS-AT":"Atua","WS-FA":"Fa\'asaleleaga","WS-GI":"Gagaifomauga","WS-TU":"Tuamasaga","YE-AD":"\'Adan","YE-AM":"\'Amran","YE-BA":"Al Bayda\'","YE-DA":"Ad Dali\'","YE-DH":"Dhamar","YE-HD":"Hadramawt","YE-HJ":"Hajjah","YE-HU":"Al Hudaydah","YE-IB":"Ibb","YE-JA":"Al Jawf","YE-LA":"Lahij","YE-MA":"Ma\'rib","YE-MW":"Al Mahwit","YE-SA":"Amanat al \'Asimah","YE-SD":"Sa\'dah","YE-SH":"Shabwah","YE-SN":"San\'a\'","YE-TA":"Ta\'izz","ZA-EC":"Eastern Cape","ZA-FS":"Free State","ZA-GP":"Gauteng","ZA-KZN":"Kwazulu-Natal","ZA-LP":"Limpopo","ZA-MP":"Mpumalanga","ZA-NC":"Northern Cape","ZA-NW":"North-West","ZA-WC":"Western Cape","ZM-01":"Western","ZM-02":"Central","ZM-03":"Eastern","ZM-04":"Luapula","ZM-05":"Northern","ZM-06":"North-Western","ZM-07":"Southern","ZM-08":"Copperbelt","ZM-09":"Lusaka","ZM-10":"Muchinga","ZW-BU":"Bulawayo","ZW-HA":"Harare","ZW-MA":"Manicaland","ZW-MC":"Mashonaland Central","ZW-ME":"Mashonaland East","ZW-MI":"Midlands","ZW-MN":"Matabeleland North","ZW-MS":"Matabeleland South","ZW-MV":"Masvingo","ZW-MW":"Mashonaland West"}');

/***/ })

};
;