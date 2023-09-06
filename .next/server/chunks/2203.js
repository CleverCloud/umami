exports.id = 2203;
exports.ids = [2203];
exports.modules = {

/***/ 3359:
/***/ ((module) => {

// Exports
module.exports = {
	"description": "ReportHeader_description__kwiO0"
};


/***/ }),

/***/ 67949:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "reports_container__vtdom",
	"header": "reports_header__2wPzw",
	"menu": "reports_menu__bzvzT",
	"body": "reports_body__qSCo8"
};


/***/ }),

/***/ 81031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WebsiteSelect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35338);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function WebsiteSelect({ websiteId, onSelect }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { get, useQuery } = (0,components_hooks_useApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { data } = useQuery([
        "websites:me"
    ], ()=>get("/me/websites"));
    const renderValue = (value)=>{
        return data?.data?.find(({ id })=>id === value)?.name;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        items: data?.data,
        value: websiteId,
        renderValue: renderValue,
        onChange: onSelect,
        alignment: "end",
        placeholder: formatMessage(labels.selectWebsite),
        children: ({ id, name })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                children: name
            }, id)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export BaseParameters */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_input_DateFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77481);
/* harmony import */ var components_input_WebsiteSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81031);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91534);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_input_DateFilter__WEBPACK_IMPORTED_MODULE_2__, components_input_WebsiteSelect__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_6__, components_hooks__WEBPACK_IMPORTED_MODULE_7__]);
([components_input_DateFilter__WEBPACK_IMPORTED_MODULE_2__, components_input_WebsiteSelect__WEBPACK_IMPORTED_MODULE_3__, _Report__WEBPACK_IMPORTED_MODULE_6__, components_hooks__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function BaseParameters({ showWebsiteSelect = true, allowWebsiteSelect = true, showDateSelect = true, allowDateSelect = true }) {
    const { report, updateReport } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Report__WEBPACK_IMPORTED_MODULE_6__/* .ReportContext */ .GA);
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useMessages */ .y_)();
    const { parameters } = report || {};
    const { websiteId, dateRange } = parameters || {};
    const { value, startDate, endDate } = dateRange || {};
    const handleWebsiteSelect = (websiteId)=>{
        updateReport({
            websiteId,
            parameters: {
                websiteId
            }
        });
    };
    const handleDateChange = (value)=>{
        updateReport({
            parameters: {
                dateRange: {
                    ...(0,lib_date__WEBPACK_IMPORTED_MODULE_4__/* .parseDateRange */ .r0)(value)
                }
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showWebsiteSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.website),
                children: allowWebsiteSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_WebsiteSelect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    websiteId: websiteId,
                    onSelect: handleWebsiteSelect
                })
            }),
            showDateSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
                label: formatMessage(labels.dateRange),
                children: allowDateSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_DateFilter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    value: value,
                    startDate: startDate,
                    endDate: endDate,
                    onChange: handleDateChange
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseParameters);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GA: () => (/* binding */ ReportContext),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Report */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70790);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67949);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reports_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ReportContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function Report({ reportId, defaultParameters, children, ...props }) {
    const report = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useReport */ .nl)(reportId, defaultParameters);
    //console.log({ report });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReportContext.Provider, {
        value: {
            ...report
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            ...props,
            className: (_reports_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
            children: children
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Report);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ReportBody */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67949);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reports_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ReportBody({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_reports_module_css__WEBPACK_IMPORTED_MODULE_1___default().body),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportBody);


/***/ }),

/***/ 77406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ReportHeader */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56754);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77253);
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89);
/* harmony import */ var _ReportHeader_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3359);
/* harmony import */ var _ReportHeader_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ReportHeader_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67949);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reports_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_5__, _Report__WEBPACK_IMPORTED_MODULE_6__]);
([components_hooks__WEBPACK_IMPORTED_MODULE_5__, _Report__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ReportHeader({ icon }) {
    const { report, updateReport } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Report__WEBPACK_IMPORTED_MODULE_6__/* .ReportContext */ .GA);
    const { formatMessage, labels, messages } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useMessages */ .y_)();
    const { showToast } = (0,react_basics__WEBPACK_IMPORTED_MODULE_3__.useToasts)();
    const { post, useMutation } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useApi */ .h_)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { mutate: create, isLoading: isCreating } = useMutation((data)=>post(`/reports`, data));
    const { mutate: update, isLoading: isUpdating } = useMutation((data)=>post(`/reports/${data.id}`, data));
    const { name, description, parameters } = report || {};
    const { websiteId, dateRange } = parameters || {};
    const handleSave = async ()=>{
        if (!report.id) {
            create(report, {
                onSuccess: async ({ id })=>{
                    showToast({
                        message: formatMessage(messages.saved),
                        variant: "success"
                    });
                    router.push(`/reports/${id}`, null, {
                        shallow: true
                    });
                }
            });
        } else {
            update(report, {
                onSuccess: async ()=>{
                    showToast({
                        message: formatMessage(messages.saved),
                        variant: "success"
                    });
                }
            });
        }
    };
    const handleNameChange = (name)=>{
        updateReport({
            name: name || "Untitled"
        });
    };
    const handleDescriptionChange = (description)=>{
        updateReport({
            description
        });
    };
    const Title = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    size: "lg",
                    children: icon
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.InlineEditField, {
                    name: "name",
                    value: name,
                    placeholder: formatMessage(labels.untitled),
                    onCommit: handleNameChange
                }, name)
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_reports_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_PageHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.LoadingButton, {
                    variant: "primary",
                    isLoading: isCreating || isUpdating,
                    disabled: !websiteId || !dateRange?.value || !name,
                    onClick: handleSave,
                    children: formatMessage(labels.save)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ReportHeader_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.InlineEditField, {
                    name: "description",
                    value: description,
                    placeholder: `+ ${formatMessage(labels.addDescription)}`,
                    onCommit: handleDescriptionChange
                }, description)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ReportMenu */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67949);
/* harmony import */ var _reports_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reports_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ReportMenu({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_reports_module_css__WEBPACK_IMPORTED_MODULE_1___default().menu),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportMenu);


/***/ })

};
;