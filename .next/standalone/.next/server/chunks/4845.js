exports.id = 4845;
exports.ids = [4845];
exports.modules = {

/***/ 21372:
/***/ ((module) => {

// Exports
module.exports = {
	"selected": "FieldFilterForm_selected__LjAfn",
	"popup": "FieldFilterForm_popup__4LhTY",
	"filter": "FieldFilterForm_filter__TYCkW",
	"dropdown": "FieldFilterForm_dropdown__gqFsA",
	"menu": "FieldFilterForm_menu__vsuBG"
};


/***/ }),

/***/ 73487:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "FieldSelectForm_menu___e4fQ",
	"item": "FieldSelectForm_item__BiPDp",
	"type": "FieldSelectForm_type__nByGv"
};


/***/ }),

/***/ 91436:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "PopupForm_form__aI3Zu"
};


/***/ }),

/***/ 14704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FieldFilterForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77253);
/* harmony import */ var _FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21372);
/* harmony import */ var _FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_3__]);
components_hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function FieldFilterForm({ name, label, type, values, onSelect, allowFilterSelect = true }) {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMessages */ .y_)();
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("eq");
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { getFilters } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFilters */ .mN)();
    const { formatValue } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFormat */ .ve)();
    const filters = getFilters(type);
    const renderFilterValue = (value)=>{
        return filters.find((f)=>f.value === value)?.label;
    };
    const renderValue = (value)=>{
        return formatValue(value, name);
    };
    const handleAdd = ()=>{
        onSelect({
            name,
            type,
            filter,
            value
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Form, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.FormRow, {
            label: label,
            className: (_FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().filter),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_2__.Flexbox, {
                    gap: 10,
                    children: [
                        allowFilterSelect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                            className: (_FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropdown),
                            items: filters,
                            value: filter,
                            renderValue: renderFilterValue,
                            onChange: setFilter,
                            children: ({ value, label })=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                                    children: label
                                }, value);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                            className: (_FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().dropdown),
                            menuProps: {
                                className: (_FieldFilterForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu)
                            },
                            items: values,
                            value: value,
                            renderValue: renderValue,
                            onChange: setValue,
                            style: {
                                minWidth: "250px"
                            },
                            children: (value)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Item, {
                                    children: formatValue(value, name)
                                }, value);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "primary",
                    onClick: handleAdd,
                    disabled: !filter || !value,
                    children: formatMessage(labels.add)
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FieldSelectForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77253);
/* harmony import */ var _FieldSelectForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73487);
/* harmony import */ var _FieldSelectForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FieldSelectForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks__WEBPACK_IMPORTED_MODULE_2__]);
components_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function FieldSelectForm({ items, onSelect, showType = true }) {
    const { formatMessage, labels } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useMessages */ .y_)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Form, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.FormRow, {
            label: formatMessage(labels.fields),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                className: (_FieldSelectForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),
                onSelect: (key)=>onSelect(items[key]),
                children: items.map(({ name, label, type }, index)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                        className: (_FieldSelectForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: label || name
                            }),
                            showType && type && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_FieldSelectForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().type),
                                children: type
                            })
                        ]
                    }, index);
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FilterSelectForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FieldSelectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5799);
/* harmony import */ var _FieldFilterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14704);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77253);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FieldSelectForm__WEBPACK_IMPORTED_MODULE_2__, _FieldFilterForm__WEBPACK_IMPORTED_MODULE_3__, components_hooks__WEBPACK_IMPORTED_MODULE_4__]);
([_FieldSelectForm__WEBPACK_IMPORTED_MODULE_2__, _FieldFilterForm__WEBPACK_IMPORTED_MODULE_3__, components_hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function useValues(websiteId, type) {
    const { get, useQuery } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useApi */ .h_)();
    const { data, error, isLoading } = useQuery([
        "websites:values",
        websiteId,
        type
    ], ()=>get(`/websites/${websiteId}/values`, {
            type
        }), {
        enabled: !!(websiteId && type)
    });
    return {
        data,
        error,
        isLoading
    };
}
function FilterSelectForm({ websiteId, items, onSelect, allowFilterSelect }) {
    const [field, setField] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { data, isLoading } = useValues(websiteId, field?.name);
    if (!field) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FieldSelectForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            items: items,
            onSelect: setField,
            showType: false
        });
    }
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_5__.Loading, {
            position: "center",
            icon: "dots"
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FieldFilterForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        name: field?.name,
        label: field?.label,
        type: field?.type,
        values: data,
        onSelect: onSelect,
        allowFilterSelect: allowFilterSelect
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PopupForm */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PopupForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91436);
/* harmony import */ var _PopupForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_2__);



function PopupForm({ className, style, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PopupForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().form), className),
        style: style,
        onClick: (e)=>e.stopPropagation(),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupForm);


/***/ })

};
;