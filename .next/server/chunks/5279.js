exports.id = 5279;
exports.ids = [5279];
exports.modules = {

/***/ 25261:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "WorldMap_container__oKZys"
};


/***/ }),

/***/ 60641:
/***/ ((module) => {

// Exports
module.exports = {
	"col": "Grid_col__Q89rb",
	"row": "Grid_row__EyExf"
};


/***/ }),

/***/ 33718:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "Page_page__xxbhi"
};


/***/ }),

/***/ 44289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FilterButtons */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);


function FilterButtons({ items, selectedKey, onSelect }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Flexbox, {
        justifyContent: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
            items: items,
            selectedKey: selectedKey,
            onSelect: onSelect,
            children: ({ key, label })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    children: label
                }, key)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterButtons);


/***/ }),

/***/ 69465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WorldMap */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54190);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79168);
/* harmony import */ var components_common_HoverTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66531);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73865);
/* harmony import */ var components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53353);
/* harmony import */ var components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81235);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91998);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29163);
/* harmony import */ var lib_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68867);
/* harmony import */ var _WorldMap_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25261);
/* harmony import */ var _WorldMap_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_WorldMap_module_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([colord__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_10__]);
([colord__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function WorldMap({ data, className }) {
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [tooltip, setTooltipPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { theme, colors } = (0,components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { locale } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const countryNames = (0,components_hooks_useCountryNames__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(locale);
    const metrics = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>data ? (0,lib_filters__WEBPACK_IMPORTED_MODULE_11__/* .percentFilter */ .fr)(data) : [], [
        data
    ]);
    function getFillColor(code) {
        if (code === "AQ") return;
        const country = metrics?.find(({ x })=>x === code);
        if (!country) {
            return colors.map.fillColor;
        }
        return (0,colord__WEBPACK_IMPORTED_MODULE_5__.colord)(colors.map.baseColor)[theme === "light" ? "lighten" : "darken"](0.4 * (1.0 - country.z / 100)).toHex();
    }
    function getOpacity(code) {
        return code === "AQ" ? 0 : 1;
    }
    function handleHover(code) {
        if (code === "AQ") return;
        const country = metrics?.find(({ x })=>x === code);
        setTooltipPopup(`${countryNames[code]}: ${(0,lib_format__WEBPACK_IMPORTED_MODULE_12__/* .formatLongNumber */ .mu)(country?.y || 0)} visitors`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_WorldMap_module_css__WEBPACK_IMPORTED_MODULE_13___default().container), className),
        "data-tip": "",
        "data-for": "world-map-tooltip",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ComposableMap, {
                projection: "geoMercator",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.ZoomableGroup, {
                    zoom: 0.8,
                    minZoom: 0.7,
                    center: [
                        0,
                        40
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geographies, {
                        geography: `${basePath}${lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .MAP_FILE */ .Cu}`,
                        children: ({ geographies })=>{
                            return geographies.map((geo)=>{
                                const code = lib_constants__WEBPACK_IMPORTED_MODULE_7__/* .ISO_COUNTRIES */ .kx[geo.id];
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_3__.Geography, {
                                    geography: geo,
                                    fill: getFillColor(code),
                                    stroke: colors.map.strokeColor,
                                    opacity: getOpacity(code),
                                    style: {
                                        default: {
                                            outline: "none"
                                        },
                                        hover: {
                                            outline: "none",
                                            fill: colors.map.hoverColor
                                        },
                                        pressed: {
                                            outline: "none"
                                        }
                                    },
                                    onMouseOver: ()=>handleHover(code),
                                    onMouseOut: ()=>setTooltipPopup(null)
                                }, geo.rsmKey);
                            });
                        }
                    })
                })
            }),
            tooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_HoverTooltip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: tooltip
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorldMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ GridColumn),
/* harmony export */   J: () => (/* binding */ GridRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60641);
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_css__WEBPACK_IMPORTED_MODULE_3__);




function GridRow(props) {
    const { className, ...otherProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Row, {
        ...otherProps,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Grid_module_css__WEBPACK_IMPORTED_MODULE_3___default().row), className)
    });
}
function GridColumn(props) {
    const { className, ...otherProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Column, {
        ...otherProps,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Grid_module_css__WEBPACK_IMPORTED_MODULE_3___default().col), className)
    });
}


/***/ }),

/***/ 70790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Page */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33718);
/* harmony import */ var _Page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Page_module_css__WEBPACK_IMPORTED_MODULE_4__);





function Page({ className, error, loading, children }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Banner, {
            variant: "error",
            children: formatMessage(messages.error)
        });
    }
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Loading, {
            icon: "spinner",
            size: "xl",
            position: "page"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Page_module_css__WEBPACK_IMPORTED_MODULE_4___default().page), className),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 68867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RL: () => (/* binding */ paramFilter),
/* harmony export */   fr: () => (/* binding */ percentFilter),
/* harmony export */   jd: () => (/* binding */ emptyFilter)
/* harmony export */ });
/* unused harmony exports urlFilter, refFilter */
const urlFilter = (data)=>{
    const map = data.reduce((obj, { x, y })=>{
        if (x) {
            if (!obj[x]) {
                obj[x] = y;
            } else {
                obj[x] += y;
            }
        }
        return obj;
    }, {});
    return Object.keys(map).map((key)=>({
            x: key,
            y: map[key]
        }));
};
const refFilter = (data)=>{
    const links = {};
    const map = data.reduce((obj, { x, y })=>{
        let id;
        try {
            const url = new URL(x);
            id = url.hostname.replace(/www\./, "") || url.href;
        } catch  {
            id = "";
        }
        links[id] = x;
        if (!obj[id]) {
            obj[id] = y;
        } else {
            obj[id] += y;
        }
        return obj;
    }, {});
    return Object.keys(map).map((key)=>({
            x: key,
            y: map[key],
            w: links[key]
        }));
};
const emptyFilter = (data)=>{
    return data.map((item)=>item.x ? item : null).filter((n)=>n);
};
const percentFilter = (data)=>{
    const total = data.reduce((n, { y })=>n + y, 0);
    return data.map(({ x, y, ...props })=>({
            x,
            y,
            z: total ? y / total * 100 : 0,
            ...props
        }));
};
const paramFilter = (data)=>{
    const map = data.reduce((obj, { x, y })=>{
        try {
            const searchParams = new URLSearchParams(x);
            for (const [key, value] of searchParams){
                if (!obj[key]) {
                    obj[key] = {
                        [value]: y
                    };
                } else if (!obj[key][value]) {
                    obj[key][value] = y;
                } else {
                    obj[key][value] += y;
                }
            }
        } catch  {
        // Ignore
        }
        return obj;
    }, {});
    return Object.keys(map).flatMap((key)=>Object.keys(map[key]).map((n)=>({
                x: `${key}=${n}`,
                p: key,
                v: n,
                y: map[key][n]
            })));
};


/***/ })

};
;