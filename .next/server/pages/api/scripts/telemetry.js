"use strict";
(() => {
var exports = {};
exports.id = 5375;
exports.ids = [5375];
exports.modules = {

/***/ 90730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 43076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 7825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fscripts_2Ftelemetry_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fscripts_2Ftelemetry_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/scripts/telemetry.js
var telemetry_namespaceObject = {};
__webpack_require__.r(telemetry_namespaceObject);
__webpack_require__.d(telemetry_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(56429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(47153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(37305);
// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(55510);
;// CONCATENATED MODULE: ./src/pages/api/scripts/telemetry.js

function handler(req, res) {
    res.setHeader("content-type", "text/javascript");
    if (process.env.DISABLE_TELEMETRY) {
        return res.send("/* telemetry disabled */");
    }
    const script = `
    (()=>{const i=document.createElement('img');
      i.setAttribute('src','${constants/* TELEMETRY_PIXEL */.o9}?v=${constants/* CURRENT_VERSION */.we}');
      i.setAttribute('style','width:0;height:0;position:absolute;pointer-events:none;');
      document.body.appendChild(i);})();
  `;
    return res.send(script.replace(/\s\s+/g, ""));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fscripts%2Ftelemetry&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fscripts%2Ftelemetry.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fscripts_2Ftelemetry_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fscripts_2Ftelemetry_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(telemetry_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(telemetry_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/scripts/telemetry",
        pathname: "/api/scripts/telemetry",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: telemetry_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,5510], () => (__webpack_exec__(7825)));
module.exports = __webpack_exports__;

})();