"use strict";
(() => {
var exports = {};
exports.id = 9589;
exports.ids = [9589];
exports.modules = {

/***/ 68884:
/***/ ((module) => {

module.exports = require("next-basics");

/***/ }),

/***/ 90730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 9253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fconfig_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fconfig_ts_middlewareConfigBase64_e30_3D_config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fconfig_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fconfig_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/config.ts
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, {
  "default": () => (config)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(56429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(47153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(37305);
// EXTERNAL MODULE: external "next-basics"
var external_next_basics_ = __webpack_require__(68884);
;// CONCATENATED MODULE: ./src/pages/api/config.ts

/* harmony default export */ const config = (async (req, res)=>{
    if (req.method === "GET") {
        return (0,external_next_basics_.ok)(res, {
            telemetryDisabled: !!process.env.DISABLE_TELEMETRY,
            trackerScriptName: process.env.TRACKER_SCRIPT_NAME,
            uiDisabled: !!process.env.DISABLE_UI,
            updatesDisabled: !!process.env.DISABLE_UPDATES
        });
    }
    return (0,external_next_basics_.methodNotAllowed)(res);
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fconfig&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fconfig.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fconfig_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fconfig_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(config_namespaceObject, "default"));
// Re-export config.
const next_route_loaderkind_PAGES_API_page_2Fapi_2Fconfig_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fconfig_ts_middlewareConfigBase64_e30_3D_config = (0,helpers/* hoist */.l)(config_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/config",
        pathname: "/api/config",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: config_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(9253)));
module.exports = __webpack_exports__;

})();