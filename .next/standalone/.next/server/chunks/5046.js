exports.id = 5046;
exports.ids = [5046];
exports.modules = {

/***/ 33623:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Empty_container__ZKJsF"
};


/***/ }),

/***/ 6293:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "DataTable_table__N_EPZ",
	"body": "DataTable_body__DhwJ8",
	"header": "DataTable_header__iwjK3",
	"title": "DataTable_title__rsSZa",
	"metric": "DataTable_metric__psVMR",
	"row": "DataTable_row___AB3X",
	"label": "DataTable_label__8iQPt",
	"value": "DataTable_value__1fAS1",
	"percent": "DataTable_percent___cir2",
	"bar": "DataTable_bar__2k9Rb"
};


/***/ }),

/***/ 98776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Empty */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Empty_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33623);
/* harmony import */ var _Empty_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Empty_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);




function Empty({ message, className }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Empty_module_css__WEBPACK_IMPORTED_MODULE_3___default().container), className),
        children: message || formatMessage(messages.noDataAvailable)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Empty);


/***/ }),

/***/ 55046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ListTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57492);
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_measure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94310);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_common_Empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98776);
/* harmony import */ var lib_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29163);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53250);
/* harmony import */ var _DataTable_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6293);
/* harmony import */ var _DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_spring__WEBPACK_IMPORTED_MODULE_4__]);
react_spring__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function ListTable({ data = [], title, metric, className, renderLabel, animate = true, virtualize = false, showPercentage = true }) {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [ref, bounds] = react_use_measure__WEBPACK_IMPORTED_MODULE_2___default()();
    const [format, setFormat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const formatFunc = format ? lib_format__WEBPACK_IMPORTED_MODULE_8__/* .formatLongNumber */ .mu : lib_format__WEBPACK_IMPORTED_MODULE_8__/* .formatNumber */ .uf;
    const handleSetFormat = ()=>setFormat((state)=>!state);
    const getRow = (row)=>{
        const { x: label, y: value, z: percent } = row;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedRow, {
            label: renderLabel ? renderLabel(row) : label ?? formatMessage(labels.unknown),
            value: value,
            percent: percent,
            animate: animate && !virtualize,
            format: formatFunc,
            onClick: handleSetFormat,
            showPercentage: showPercentage
        }, label);
    };
    const Row = ({ index, style })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: style,
            children: getRow(data[index])
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().table), className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().metric),
                        onClick: handleSetFormat,
                        children: metric
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: ref,
                className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                children: [
                    data?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Empty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    virtualize && data.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_window__WEBPACK_IMPORTED_MODULE_3__.FixedSizeList, {
                        height: bounds.height,
                        itemCount: data.length,
                        itemSize: 30,
                        children: Row
                    }) : data.map((row)=>getRow(row))
                ]
            })
        ]
    });
}
const AnimatedRow = ({ label, value = 0, percent, animate, format, onClick, showPercentage = true })=>{
    const props = (0,react_spring__WEBPACK_IMPORTED_MODULE_4__.useSpring)({
        width: percent,
        y: value,
        from: {
            width: 0,
            y: 0
        },
        config: animate ? react_spring__WEBPACK_IMPORTED_MODULE_4__.config.default : {
            duration: 0
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().row),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().value),
                onClick: onClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__.animated.div, {
                    className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().value),
                    children: props.y?.to(format)
                })
            }),
            showPercentage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().percent),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__.animated.div, {
                        className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().bar),
                        style: {
                            width: props.width.to((n)=>`${n}%`)
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__.animated.span, {
                        className: (_DataTable_module_css__WEBPACK_IMPORTED_MODULE_9___default().percentValue),
                        children: props.width.to((n)=>`${n?.toFixed?.(0)}%`)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;