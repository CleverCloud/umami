exports.id = 1992;
exports.ids = [1992];
exports.modules = {

/***/ 12903:
/***/ ((module) => {

// Exports
module.exports = {
	"favicon": "Favicon_favicon__jjbzI"
};


/***/ }),

/***/ 38199:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ActiveUsers_container___JH1q",
	"text": "ActiveUsers_text__9rsD0",
	"value": "ActiveUsers_value__H3uVq"
};


/***/ }),

/***/ 84177:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "WebsiteHeader_header__wK7qo",
	"title": "WebsiteHeader_title__9N6pA",
	"actions": "WebsiteHeader_actions__pG1GW",
	"selected": "WebsiteHeader_selected__dGZmw",
	"links": "WebsiteHeader_links___XsS_",
	"label": "WebsiteHeader_label__jOZTy",
	"icon": "WebsiteHeader_icon__TVV3d"
};


/***/ }),

/***/ 73897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Favicon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Favicon_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12903);
/* harmony import */ var _Favicon_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Favicon_module_css__WEBPACK_IMPORTED_MODULE_1__);


function getHostName(url) {
    const match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
    return match && match.length > 1 ? match[1] : null;
}
function Favicon({ domain, ...props }) {
    const hostName = domain ? getHostName(domain) : null;
    return hostName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: (_Favicon_module_css__WEBPACK_IMPORTED_MODULE_1___default().favicon),
        src: `https://icons.duckduckgo.com/ip3/${hostName}.ico`,
        height: "16",
        alt: "",
        ...props
    }) : null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favicon);


/***/ }),

/***/ 36257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ActiveUsers */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var _ActiveUsers_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38199);
/* harmony import */ var _ActiveUsers_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ActiveUsers_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ActiveUsers({ websiteId, value, refetchInterval = 60000 }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data } = useQuery([
        "websites:active",
        websiteId
    ], ()=>get(`/websites/${websiteId}/active`), {
        refetchInterval,
        enabled: !!websiteId
    });
    const count = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (websiteId) {
            return data?.[0]?.x || 0;
        }
        return value !== undefined ? value : 0;
    }, [
        data,
        value,
        websiteId
    ]);
    if (count === 0) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.StatusLight, {
        className: (_ActiveUsers_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        variant: "success",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_ActiveUsers_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),
            children: formatMessage(messages.activeUsers, {
                x: count
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteHeader */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_common_Favicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73897);
/* harmony import */ var components_metrics_ActiveUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36257);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43756);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77253);
/* harmony import */ var _WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84177);
/* harmony import */ var _WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_metrics_ActiveUsers__WEBPACK_IMPORTED_MODULE_6__, components_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([components_metrics_ActiveUsers__WEBPACK_IMPORTED_MODULE_6__, components_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function WebsiteHeader({ websiteId, showLinks = true, children }) {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useMessages */ .y_)();
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { data: website } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useWebsite */ .jG)(websiteId);
    const { name, domain } = website || {};
    const links = [
        {
            label: formatMessage(labels.overview),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Overview, {}),
            path: ""
        },
        {
            label: formatMessage(labels.realtime),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Clock, {}),
            path: "/realtime"
        },
        {
            label: formatMessage(labels.reports),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Reports, {}),
            path: "/reports"
        },
        {
            label: formatMessage(labels.eventData),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Nodes, {}),
            path: "/event-data"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Row, {
        className: (_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().header),
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Column, {
                className: (_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                variant: "two",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Favicon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        domain: domain
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_metrics_ActiveUsers__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        websiteId: websiteId
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Column, {
                className: (_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().actions),
                variant: "two",
                children: [
                    showLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().links),
                        children: links.map(({ label, icon, path })=>{
                            const selected = path ? pathname.endsWith(path) : pathname === "/websites/[id]";
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: `/websites/${websiteId}${path}`,
                                shallow: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "quiet",
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                                        [(_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().selected)]: selected
                                    }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                            className: (_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon),
                                            children: icon
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            className: (_WebsiteHeader_module_css__WEBPACK_IMPORTED_MODULE_9___default().label),
                                            children: label
                                        })
                                    ]
                                })
                            }, label);
                        })
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;