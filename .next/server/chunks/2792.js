exports.id = 2792;
exports.ids = [2792];
exports.modules = {

/***/ 54359:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "MobileMenu_menu__DO6aZ",
	"items": "MobileMenu_items__N_NHj",
	"item": "MobileMenu_item__iN83G",
	"selected": "MobileMenu_selected__Z1kQJ",
	"submenu": "MobileMenu_submenu__eW8zr"
};


/***/ }),

/***/ 8310:
/***/ ((module) => {

// Exports
module.exports = {
	"notice": "UpdateNotice_notice__vSRjT",
	"message": "UpdateNotice_message__ntCR8",
	"buttons": "UpdateNotice_buttons__F6euy"
};


/***/ }),

/***/ 48267:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "ProfileButton_menu__NQdVL",
	"item": "ProfileButton_item__FBiu1"
};


/***/ }),

/***/ 25231:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "AppLayout_layout__8Fgjq",
	"nav": "AppLayout_nav__Bmoe1",
	"body": "AppLayout_body__pAojL"
};


/***/ }),

/***/ 6310:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "NavBar_navbar__1L4iC",
	"left": "NavBar_left__xjgkC",
	"right": "NavBar_right__G2alC",
	"logo": "NavBar_logo__0W9iy",
	"links": "NavBar_links__Sh5Fe",
	"selected": "NavBar_selected__jgveb",
	"actions": "NavBar_actions__CpMkm",
	"mobile": "NavBar_mobile__NlFK6"
};


/***/ }),

/***/ 4034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ common_HamburgerButton)
});

// UNUSED EXPORTS: HamburgerButton

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: external "react-basics"
var external_react_basics_ = __webpack_require__(47554);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(66405);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/common/MobileMenu.module.css
var MobileMenu_module = __webpack_require__(54359);
var MobileMenu_module_default = /*#__PURE__*/__webpack_require__.n(MobileMenu_module);
;// CONCATENATED MODULE: ./src/components/common/MobileMenu.js






function MobileMenu({ items = [], onClose }) {
    const { pathname } = (0,router_.useRouter)();
    const Items = ({ items, className })=>/*#__PURE__*/ jsx_runtime.jsx("div", {
            className: external_classnames_default()((MobileMenu_module_default()).items, className),
            children: items.map(({ label, url, children })=>{
                const selected = pathname.startsWith(url);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: url,
                            className: external_classnames_default()((MobileMenu_module_default()).item, {
                                [(MobileMenu_module_default()).selected]: selected
                            }),
                            onClick: onClose,
                            children: label
                        }, url),
                        children && /*#__PURE__*/ jsx_runtime.jsx(Items, {
                            items: children,
                            className: (MobileMenu_module_default()).submenu
                        })
                    ]
                });
            })
        });
    return /*#__PURE__*/ (0,external_react_dom_.createPortal)(/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: external_classnames_default()((MobileMenu_module_default()).menu),
        children: /*#__PURE__*/ jsx_runtime.jsx(Items, {
            items: items
        })
    }), document.body);
}
/* harmony default export */ const common_MobileMenu = (MobileMenu);

// EXTERNAL MODULE: ./src/components/icons.ts + 17 modules
var icons = __webpack_require__(43756);
// EXTERNAL MODULE: ./src/components/hooks/useMessages.js + 1 modules
var useMessages = __webpack_require__(53250);
;// CONCATENATED MODULE: ./src/components/common/HamburgerButton.js






function HamburgerButton() {
    const { formatMessage, labels } = (0,useMessages/* default */.Z)();
    const [active, setActive] = (0,external_react_.useState)(false);
    const cloudMode = Boolean(process.env.cloudMode);
    const menuItems = [
        {
            label: formatMessage(labels.dashboard),
            url: "/dashboard"
        },
        !cloudMode && {
            label: formatMessage(labels.settings),
            url: "/settings",
            children: [
                {
                    label: formatMessage(labels.websites),
                    url: "/settings/websites"
                },
                {
                    label: formatMessage(labels.teams),
                    url: "/settings/teams"
                },
                {
                    label: formatMessage(labels.users),
                    url: "/settings/users"
                },
                {
                    label: formatMessage(labels.profile),
                    url: "/settings/profile"
                }
            ]
        },
        cloudMode && {
            label: formatMessage(labels.profile),
            url: "/settings/profile"
        },
        !cloudMode && {
            label: formatMessage(labels.logout),
            url: "/logout"
        }
    ].filter((n)=>n);
    const handleClick = ()=>setActive((state)=>!state);
    const handleClose = ()=>setActive(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_basics_.Button, {
                variant: "quiet",
                onClick: handleClick,
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_basics_.Icon, {
                    children: active ? /*#__PURE__*/ jsx_runtime.jsx(icons/* default */.Z.Close, {}) : /*#__PURE__*/ jsx_runtime.jsx(icons/* default */.Z.Menu, {})
                })
            }),
            active && /*#__PURE__*/ jsx_runtime.jsx(common_MobileMenu, {
                items: menuItems,
                onClose: handleClose
            })
        ]
    });
}
/* harmony default export */ const common_HamburgerButton = (HamburgerButton);


/***/ }),

/***/ 49199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export UpdateNotice */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65990);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73865);
/* harmony import */ var _UpdateNotice_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8310);
/* harmony import */ var _UpdateNotice_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_UpdateNotice_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53250);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_version__WEBPACK_IMPORTED_MODULE_5__]);
store_version__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function UpdateNotice({ user, config }) {
    const { formatMessage, labels, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { latest, checked, hasUpdate, releaseUrl } = (0,store_version__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [dismissed, setDismissed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(checked);
    const allowUpdate = user?.isAdmin && !config?.updatesDisabled && !config?.cloudMode && !pathname.includes("/share/") && !dismissed;
    const updateCheck = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        (0,next_basics__WEBPACK_IMPORTED_MODULE_4__.setItem)(lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .VERSION_CHECK */ .aC, {
            version: latest,
            time: Date.now()
        });
    }, [
        latest
    ]);
    function handleViewClick() {
        updateCheck();
        setDismissed(true);
        open(releaseUrl || lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .REPO_URL */ .Bv, "_blank");
    }
    function handleDismissClick() {
        updateCheck();
        setDismissed(true);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (allowUpdate) {
            (0,store_version__WEBPACK_IMPORTED_MODULE_5__/* .checkVersion */ .Y)();
        }
    }, [
        allowUpdate
    ]);
    if (!allowUpdate || !hasUpdate) {
        return null;
    }
    return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.Row, {
        className: (_UpdateNotice_module_css__WEBPACK_IMPORTED_MODULE_9___default().notice),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Column, {
                variant: "two",
                className: (_UpdateNotice_module_css__WEBPACK_IMPORTED_MODULE_9___default().message),
                children: formatMessage(messages.newVersionAvailable, {
                    version: `v${latest}`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_3__.Column, {
                className: (_UpdateNotice_module_css__WEBPACK_IMPORTED_MODULE_9___default().buttons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "primary",
                        onClick: handleViewClick,
                        children: formatMessage(labels.viewDetails)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        onClick: handleDismissClick,
                        children: formatMessage(labels.dismiss)
                    })
                ]
            })
        ]
    }), document.body);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateNotice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ProfileButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43756);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53250);
/* harmony import */ var components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18927);
/* harmony import */ var _ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48267);
/* harmony import */ var _ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__]);
([components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function ProfileButton() {
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { user } = (0,components_hooks_useUser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { dir } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const cloudMode = Boolean(process.env.cloudMode);
    const handleSelect = (key)=>{
        if (key === "profile") {
            router.push("/settings/profile");
        }
        if (key === "logout") {
            router.push("/logout");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.PopupTrigger, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "quiet",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Profile, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        size: "sm",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.ChevronDown, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Popup, {
                position: "bottom",
                alignment: dir === "rtl" ? "start" : "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                    variant: "popup",
                    onSelect: handleSelect,
                    className: (_ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                            className: (_ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: user.username
                            })
                        }, "user"),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                            className: (_ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),
                            divider: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.User, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    children: formatMessage(labels.profile)
                                })
                            ]
                        }, "profile"),
                        !cloudMode && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Item, {
                            className: (_ProfileButton_module_css__WEBPACK_IMPORTED_MODULE_7___default().item),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Logout, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    children: formatMessage(labels.logout)
                                })
                            ]
                        }, "logout")
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AppLayout */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81537);
/* harmony import */ var components_common_UpdateNotice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49199);
/* harmony import */ var components_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77253);
/* harmony import */ var _AppLayout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25231);
/* harmony import */ var _AppLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AppLayout_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout_NavBar__WEBPACK_IMPORTED_MODULE_3__, components_common_UpdateNotice__WEBPACK_IMPORTED_MODULE_4__, components_hooks__WEBPACK_IMPORTED_MODULE_5__]);
([components_layout_NavBar__WEBPACK_IMPORTED_MODULE_3__, components_common_UpdateNotice__WEBPACK_IMPORTED_MODULE_4__, components_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function AppLayout({ title, children }) {
    const { user } = (0,components_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useRequireLogin */ .Gb)();
    const config = (0,components_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useConfig */ .ZR)();
    if (!user || !config || config?.uiDisabled) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_AppLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default().layout),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_UpdateNotice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                user: user,
                config: config
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title ? `${title} | umami` : "umami"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: (_AppLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_NavBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_AppLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    children: children
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NavBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43756);
/* harmony import */ var components_input_ThemeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80483);
/* harmony import */ var components_input_LanguageButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52438);
/* harmony import */ var components_input_ProfileButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99744);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53250);
/* harmony import */ var components_common_HamburgerButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4034);
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6310);
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_input_ThemeButton__WEBPACK_IMPORTED_MODULE_6__, components_input_LanguageButton__WEBPACK_IMPORTED_MODULE_7__, components_input_ProfileButton__WEBPACK_IMPORTED_MODULE_8__]);
([components_input_ThemeButton__WEBPACK_IMPORTED_MODULE_6__, components_input_LanguageButton__WEBPACK_IMPORTED_MODULE_7__, components_input_ProfileButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function NavBar() {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { formatMessage, labels } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const links = [
        {
            label: formatMessage(labels.dashboard),
            url: "/dashboard"
        },
        {
            label: formatMessage(labels.websites),
            url: "/websites"
        },
        {
            label: formatMessage(labels.reports),
            url: "/reports"
        },
        {
            label: formatMessage(labels.settings),
            url: "/settings"
        }
    ].filter((n)=>n);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().navbar)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Row, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Column, {
                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().left),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                    size: "lg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Logo, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().text),
                                    children: "umami"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().links),
                            children: links.map(({ url, label })=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: url,
                                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                                        [(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().selected)]: pathname.startsWith(url)
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        children: label
                                    })
                                }, url);
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_basics__WEBPACK_IMPORTED_MODULE_1__.Column, {
                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().right),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().actions),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_ThemeButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_LanguageButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_input_ProfileButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_11___default().mobile),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_HamburgerButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ checkVersion),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66912);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29810);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10912);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73865);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, immer__WEBPACK_IMPORTED_MODULE_1__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, immer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const initialState = {
    current: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .CURRENT_VERSION */ .we,
    latest: null,
    hasUpdate: false,
    checked: false,
    releaseUrl: null
};
const store = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(()=>({
        ...initialState
    }));
async function checkVersion() {
    const { current } = store.getState();
    const data = await fetch(`${lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .UPDATES_URL */ .nI}?v=${current}`, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    }).then((res)=>{
        if (res.ok) {
            return res.json();
        }
        return null;
    });
    if (!data) {
        return;
    }
    store.setState((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{
        const { latest, url } = data;
        const lastCheck = (0,next_basics__WEBPACK_IMPORTED_MODULE_4__.getItem)(lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .VERSION_CHECK */ .aC);
        const hasUpdate = !!(latest && lastCheck?.version !== latest && semver__WEBPACK_IMPORTED_MODULE_2___default().gt(latest, current));
        state.current = current;
        state.latest = latest;
        state.hasUpdate = hasUpdate;
        state.checked = true;
        state.releaseUrl = url;
        return state;
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;