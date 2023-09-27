exports.id = 3822;
exports.ids = [3822];
exports.modules = {

/***/ 33623:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Empty_container__ZKJsF"
};


/***/ }),

/***/ 4572:
/***/ ((module) => {

// Exports
module.exports = {
	"cell": "SettingsTable_cell__Mdz2s",
	"row": "SettingsTable_row__Tqcw5",
	"label": "SettingsTable_label__jsR11",
	"header": "SettingsTable_header__fbadX"
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

/***/ 85375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SettingsTable */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var components_common_Empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98776);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4572);
/* harmony import */ var _SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_Pager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(233);







function SettingsTable({ columns = [], data, children, cellRender, showSearch, showPaging, onFilterChange, onPageChange, onPageSizeChange, filterValue }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(filterValue);
    const { data: value, page, count, pageSize } = data;
    const handleFilterChange = (value)=>{
        setFilter(value);
        onFilterChange(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showSearch && !!value.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.SearchField, {
                onChange: handleFilterChange,
                delay: 1000,
                value: filter,
                autoFocus: true,
                placeholder: "Search",
                style: {
                    maxWidth: "300px",
                    marginBottom: "10px"
                }
            }),
            value.length === 0 && filterValue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Empty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                message: formatMessage(messages.noResultsFound)
            }),
            value.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_4__.Table, {
                columns: columns,
                rows: value,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.TableHeader, {
                        className: (_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),
                        children: (column, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.TableColumn, {
                                className: (_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().cell),
                                style: columns[index].style,
                                children: column.label
                            }, index);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
                        className: (_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),
                        children: (row, keys, rowIndex)=>{
                            row.action = children(row, keys, rowIndex);
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
                                data: row,
                                keys: keys,
                                className: (_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                                children: (data, key, colIndex)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                                        className: (_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().cell),
                                        style: columns[colIndex].style,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: (_SettingsTable_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                                                children: columns[colIndex].label
                                            }),
                                            cellRender ? cellRender(row, data, key, colIndex) : data[key]
                                        ]
                                    }, colIndex);
                                }
                            }, rowIndex);
                        }
                    }),
                    showPaging && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Pager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        page: page,
                        pageSize: pageSize,
                        count: count,
                        onPageChange: onPageChange,
                        onPageSizeChange: onPageSizeChange
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsTable);


/***/ })

};
;