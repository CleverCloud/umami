exports.id = 8375;
exports.ids = [8375];
exports.modules = {

/***/ 38817:
/***/ ((module) => {

// Exports
module.exports = {
	"error": "ErrorBoundry_error__Rkw8j"
};


/***/ }),

/***/ 67435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ErrorBoundary */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46812);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53250);
/* harmony import */ var _ErrorBoundry_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38817);
/* harmony import */ var _ErrorBoundry_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ErrorBoundry_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_error_boundary__WEBPACK_IMPORTED_MODULE_1__]);
react_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-console */ 




const logError = (error, info)=>{
    console.error(error, info.componentStack);
};
function ErrorBoundary({ children }) {
    const { formatMessage, messages } = (0,components_hooks_useMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const fallbackRender = ({ error, resetErrorBoundary })=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ErrorBoundry_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),
            role: "alert",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: formatMessage(messages.error)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: error.message
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    children: error.stack
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    onClick: resetErrorBoundary,
                    children: "OK"
                })
            ]
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, {
        fallbackRender: fallbackRender,
        onError: logError,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useForceUpdate */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useForceUpdate() {
    const [, update] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.create(null));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        update(Object.create(null));
    }, [
        update
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useForceUpdate);


/***/ }),

/***/ 91998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73865);
/* harmony import */ var lib_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49674);
/* harmony import */ var store_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30433);
/* harmony import */ var components_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43168);
/* harmony import */ var public_intl_country_en_US_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_app__WEBPACK_IMPORTED_MODULE_5__]);
store_app__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const messages = {
    "en-US": public_intl_country_en_US_json__WEBPACK_IMPORTED_MODULE_7__
};
const selector = (state)=>state.locale;
function useLocale() {
    const locale = (0,store_app__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(selector);
    const { basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const forceUpdate = (0,components_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const dir = (0,lib_lang__WEBPACK_IMPORTED_MODULE_4__/* .getTextDirection */ .Ux)(locale);
    const dateLocale = (0,lib_lang__WEBPACK_IMPORTED_MODULE_4__/* .getDateLocale */ .t4)(locale);
    async function loadMessages(locale) {
        const { ok, data } = await (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.httpGet)(`${basePath}/intl/messages/${locale}.json`);
        if (ok) {
            messages[locale] = data;
        }
    }
    async function saveLocale(value) {
        if (!messages[value]) {
            await loadMessages(value);
        }
        (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.setItem)(lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .LOCALE_CONFIG */ .uO, value);
        document.getElementById("__next")?.setAttribute("dir", (0,lib_lang__WEBPACK_IMPORTED_MODULE_4__/* .getTextDirection */ .Ux)(value));
        if (locale !== value) {
            (0,store_app__WEBPACK_IMPORTED_MODULE_5__/* .setLocale */ .i_)(value);
        } else {
            forceUpdate();
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!messages[locale]) {
            saveLocale(locale);
        }
    }, [
        locale
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const url = new URL(window?.location?.href);
        const locale = url.searchParams.get("locale");
        if (locale) {
            saveLocale(locale);
        }
    }, []);
    return {
        locale,
        saveLocale,
        messages,
        dir,
        dateLocale
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocale);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ hooks_useMessages),
  y: () => (/* binding */ useMessages)
});

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(13126);
;// CONCATENATED MODULE: ./src/components/messages.js

const labels = (0,external_react_intl_.defineMessages)({
    unknown: {
        id: "label.unknown",
        defaultMessage: "Unknown"
    },
    required: {
        id: "label.required",
        defaultMessage: "Required"
    },
    save: {
        id: "label.save",
        defaultMessage: "Save"
    },
    cancel: {
        id: "label.cancel",
        defaultMessage: "Cancel"
    },
    continue: {
        id: "label.continue",
        defaultMessage: "Continue"
    },
    delete: {
        id: "label.delete",
        defaultMessage: "Delete"
    },
    leave: {
        id: "label.leave",
        defaultMessage: "Leave"
    },
    users: {
        id: "label.users",
        defaultMessage: "Users"
    },
    createUser: {
        id: "label.create-user",
        defaultMessage: "Create user"
    },
    deleteUser: {
        id: "label.delete-user",
        defaultMessage: "Delete user"
    },
    username: {
        id: "label.username",
        defaultMessage: "Username"
    },
    password: {
        id: "label.password",
        defaultMessage: "Password"
    },
    role: {
        id: "label.role",
        defaultMessage: "Role"
    },
    user: {
        id: "label.user",
        defaultMessage: "User"
    },
    viewOnly: {
        id: "label.view-only",
        defaultMessage: "View only"
    },
    admin: {
        id: "label.admin",
        defaultMessage: "Administrator"
    },
    confirm: {
        id: "label.confirm",
        defaultMessage: "Confirm"
    },
    details: {
        id: "label.details",
        defaultMessage: "Details"
    },
    website: {
        id: "label.website",
        defaultMessage: "Website"
    },
    websites: {
        id: "label.websites",
        defaultMessage: "Websites"
    },
    myWebsites: {
        id: "label.my-websites",
        defaultMessage: "My websites"
    },
    teamWebsites: {
        id: "label.team-websites",
        defaultMessage: "Team websites"
    },
    created: {
        id: "label.created",
        defaultMessage: "Created"
    },
    edit: {
        id: "label.edit",
        defaultMessage: "Edit"
    },
    name: {
        id: "label.name",
        defaultMessage: "Name"
    },
    members: {
        id: "label.members",
        defaultMessage: "Members"
    },
    accessCode: {
        id: "label.access-code",
        defaultMessage: "Access code"
    },
    teamId: {
        id: "label.team-id",
        defaultMessage: "Team ID"
    },
    team: {
        id: "label.team",
        defaultMessage: "Team"
    },
    teamName: {
        id: "label.team-name",
        defaultMessage: "Team name"
    },
    regenerate: {
        id: "label.regenerate",
        defaultMessage: "Regenerate"
    },
    remove: {
        id: "label.remove",
        defaultMessage: "Remove"
    },
    join: {
        id: "label.join",
        defaultMessage: "Join"
    },
    createTeam: {
        id: "label.create-team",
        defaultMessage: "Create team"
    },
    joinTeam: {
        id: "label.join-team",
        defaultMessage: "Join team"
    },
    settings: {
        id: "label.settings",
        defaultMessage: "Settings"
    },
    owner: {
        id: "label.owner",
        defaultMessage: "Owner"
    },
    teamOwner: {
        id: "label.team-owner",
        defaultMessage: "Team owner"
    },
    teamMember: {
        id: "label.team-member",
        defaultMessage: "Team member"
    },
    teamGuest: {
        id: "label.team-guest",
        defaultMessage: "Team guest"
    },
    enableShareUrl: {
        id: "label.enable-share-url",
        defaultMessage: "Enable share URL"
    },
    data: {
        id: "label.data",
        defaultMessage: "Data"
    },
    trackingCode: {
        id: "label.tracking-code",
        defaultMessage: "Tracking code"
    },
    shareUrl: {
        id: "label.share-url",
        defaultMessage: "Share URL"
    },
    actions: {
        id: "label.actions",
        defaultMessage: "Actions"
    },
    domain: {
        id: "label.domain",
        defaultMessage: "Domain"
    },
    websiteId: {
        id: "label.website-id",
        defaultMessage: "Website ID"
    },
    resetWebsite: {
        id: "label.reset-website",
        defaultMessage: "Reset website"
    },
    deleteWebsite: {
        id: "label.delete-website",
        defaultMessage: "Delete website"
    },
    reset: {
        id: "label.reset",
        defaultMessage: "Reset"
    },
    addWebsite: {
        id: "label.add-website",
        defaultMessage: "Add website"
    },
    addDescription: {
        id: "label.add-description",
        defaultMessage: "Add description"
    },
    changePassword: {
        id: "label.change-password",
        defaultMessage: "Change password"
    },
    currentPassword: {
        id: "label.current-password",
        defaultMessage: "Current password"
    },
    newPassword: {
        id: "label.new-password",
        defaultMessage: "New password"
    },
    confirmPassword: {
        id: "label.confirm-password",
        defaultMessage: "Confirm password"
    },
    timezone: {
        id: "label.timezone",
        defaultMessage: "Timezone"
    },
    defaultDateRange: {
        id: "label.default-date-range",
        defaultMessage: "Default date range"
    },
    language: {
        id: "label.language",
        defaultMessage: "Language"
    },
    theme: {
        id: "label.theme",
        defaultMessage: "Theme"
    },
    profile: {
        id: "label.profile",
        defaultMessage: "Profile"
    },
    dashboard: {
        id: "label.dashboard",
        defaultMessage: "Dashboard"
    },
    more: {
        id: "label.more",
        defaultMessage: "More"
    },
    realtime: {
        id: "label.realtime",
        defaultMessage: "Realtime"
    },
    queries: {
        id: "label.queries",
        defaultMessage: "Queries"
    },
    teams: {
        id: "label.teams",
        defaultMessage: "Teams"
    },
    analytics: {
        id: "label.analytics",
        defaultMessage: "Analytics"
    },
    login: {
        id: "label.login",
        defaultMessage: "Login"
    },
    logout: {
        id: "label.logout",
        defaultMessage: "Logout"
    },
    singleDay: {
        id: "label.single-day",
        defaultMessage: "Single day"
    },
    dateRange: {
        id: "label.date-range",
        defaultMessage: "Date range"
    },
    viewDetails: {
        id: "label.view-details",
        defaultMessage: "View details"
    },
    deleteTeam: {
        id: "label.delete-team",
        defaultMessage: "Delete team"
    },
    leaveTeam: {
        id: "label.leave-team",
        defaultMessage: "Leave team"
    },
    refresh: {
        id: "label.refresh",
        defaultMessage: "Refresh"
    },
    pages: {
        id: "label.pages",
        defaultMessage: "Pages"
    },
    referrers: {
        id: "label.referrers",
        defaultMessage: "Referrers"
    },
    screens: {
        id: "label.screens",
        defaultMessage: "Screens"
    },
    browsers: {
        id: "label.browsers",
        defaultMessage: "Browsers"
    },
    os: {
        id: "label.os",
        defaultMessage: "OS"
    },
    devices: {
        id: "label.devices",
        defaultMessage: "Devices"
    },
    countries: {
        id: "label.countries",
        defaultMessage: "Countries"
    },
    languages: {
        id: "label.languages",
        defaultMessage: "Languages"
    },
    event: {
        id: "label.event",
        defaultMessage: "Event"
    },
    events: {
        id: "label.events",
        defaultMessage: "Events"
    },
    query: {
        id: "label.query",
        defaultMessage: "Query"
    },
    queryParameters: {
        id: "label.query-parameters",
        defaultMessage: "Query parameters"
    },
    back: {
        id: "label.back",
        defaultMessage: "Back"
    },
    visitors: {
        id: "label.visitors",
        defaultMessage: "Visitors"
    },
    filterCombined: {
        id: "label.filter-combined",
        defaultMessage: "Combined"
    },
    filterRaw: {
        id: "label.filter-raw",
        defaultMessage: "Raw"
    },
    views: {
        id: "label.views",
        defaultMessage: "Views"
    },
    none: {
        id: "label.none",
        defaultMessage: "None"
    },
    clearAll: {
        id: "label.clear-all",
        defaultMessage: "Clear all"
    },
    today: {
        id: "label.today",
        defaultMessage: "Today"
    },
    lastHours: {
        id: "label.last-hours",
        defaultMessage: "Last {x} hours"
    },
    yesterday: {
        id: "label.yesterday",
        defaultMessage: "Yesterday"
    },
    thisWeek: {
        id: "label.this-week",
        defaultMessage: "This week"
    },
    lastDays: {
        id: "label.last-days",
        defaultMessage: "Last {x} days"
    },
    thisMonth: {
        id: "label.this-month",
        defaultMessage: "This month"
    },
    thisYear: {
        id: "label.this-year",
        defaultMessage: "This year"
    },
    allTime: {
        id: "label.all-time",
        defaultMessage: "All time"
    },
    customRange: {
        id: "label.custom-range",
        defaultMessage: "Custom range"
    },
    selectWebsite: {
        id: "label.select-website",
        defaultMessage: "Select website"
    },
    selectDate: {
        id: "label.select-date",
        defaultMessage: "Select date"
    },
    all: {
        id: "label.all",
        defaultMessage: "All"
    },
    sessions: {
        id: "label.sessions",
        defaultMessage: "Sessions"
    },
    pageNotFound: {
        id: "message.page-not-found",
        defaultMessage: "Page not found"
    },
    activityLog: {
        id: "label.activity-log",
        defaultMessage: "Activity log"
    },
    dismiss: {
        id: "label.dismiss",
        defaultMessage: "Dismiss"
    },
    poweredBy: {
        id: "label.powered-by",
        defaultMessage: "Powered by {name}"
    },
    pageViews: {
        id: "label.page-views",
        defaultMessage: "Page views"
    },
    uniqueVisitors: {
        id: "label.unique-visitors",
        defaultMessage: "Unique visitors"
    },
    bounceRate: {
        id: "label.bounce-rate",
        defaultMessage: "Bounce rate"
    },
    averageVisitTime: {
        id: "label.average-visit-time",
        defaultMessage: "Average visit time"
    },
    desktop: {
        id: "label.desktop",
        defaultMessage: "Desktop"
    },
    laptop: {
        id: "label.laptop",
        defaultMessage: "Laptop"
    },
    tablet: {
        id: "label.tablet",
        defaultMessage: "Tablet"
    },
    mobile: {
        id: "label.mobile",
        defaultMessage: "Mobile"
    },
    toggleCharts: {
        id: "label.toggle-charts",
        defaultMessage: "Toggle charts"
    },
    editDashboard: {
        id: "label.edit-dashboard",
        defaultMessage: "Edit dashboard"
    },
    title: {
        id: "label.title",
        defaultMessage: "Title"
    },
    view: {
        id: "label.view",
        defaultMessage: "View"
    },
    cities: {
        id: "label.cities",
        defaultMessage: "Cities"
    },
    regions: {
        id: "label.regions",
        defaultMessage: "Regions"
    },
    reports: {
        id: "label.reports",
        defaultMessage: "Reports"
    },
    eventData: {
        id: "label.event-data",
        defaultMessage: "Event data"
    },
    funnel: {
        id: "label.funnel",
        defaultMessage: "Funnel"
    },
    url: {
        id: "label.url",
        defaultMessage: "URL"
    },
    urls: {
        id: "label.urls",
        defaultMessage: "URLs"
    },
    add: {
        id: "label.add",
        defaultMessage: "Add"
    },
    window: {
        id: "label.window",
        defaultMessage: "Window"
    },
    runQuery: {
        id: "label.run-query",
        defaultMessage: "Run query"
    },
    field: {
        id: "label.field",
        defaultMessage: "Field"
    },
    fields: {
        id: "label.fields",
        defaultMessage: "Fields"
    },
    createReport: {
        id: "label.create-report",
        defaultMessage: "Create report"
    },
    description: {
        id: "label.description",
        defaultMessage: "Description"
    },
    untitled: {
        id: "label.untitled",
        defaultMessage: "Untitled"
    },
    type: {
        id: "label.type",
        defaultMessage: "Type"
    },
    filter: {
        id: "label.filter",
        defaultMessage: "Filter"
    },
    filters: {
        id: "label.filters",
        defaultMessage: "Filters"
    },
    breakdown: {
        id: "label.breakdown",
        defaultMessage: "Breakdown"
    },
    true: {
        id: "label.true",
        defaultMessage: "True"
    },
    false: {
        id: "label.false",
        defaultMessage: "False"
    },
    is: {
        id: "label.is",
        defaultMessage: "Is"
    },
    isNot: {
        id: "label.is-not",
        defaultMessage: "Is not"
    },
    isSet: {
        id: "label.is-set",
        defaultMessage: "Is set"
    },
    isNotSet: {
        id: "label.is-not-set",
        defaultMessage: "Is not set"
    },
    greaterThan: {
        id: "label.greater-than",
        defaultMessage: "Greater than"
    },
    lessThan: {
        id: "label.less-than",
        defaultMessage: "Less than"
    },
    greaterThanEquals: {
        id: "label.greater-than-equals",
        defaultMessage: "Greater than or equals"
    },
    lessThanEquals: {
        id: "label.less-than-equals",
        defaultMessage: "Less than or equals"
    },
    contains: {
        id: "label.contains",
        defaultMessage: "Contains"
    },
    doesNotContain: {
        id: "label.does-not-contain",
        defaultMessage: "Does not contain"
    },
    before: {
        id: "label.before",
        defaultMessage: "Before"
    },
    after: {
        id: "label.after",
        defaultMessage: "After"
    },
    total: {
        id: "label.total",
        defaultMessage: "Total"
    },
    sum: {
        id: "label.sum",
        defaultMessage: "Sum"
    },
    average: {
        id: "label.average",
        defaultMessage: "Average"
    },
    min: {
        id: "label.min",
        defaultMessage: "Min"
    },
    max: {
        id: "label.max",
        defaultMessage: "Max"
    },
    unique: {
        id: "label.unique",
        defaultMessage: "Unique"
    },
    value: {
        id: "label.value",
        defaultMessage: "Value"
    },
    overview: {
        id: "label.overview",
        defaultMessage: "Overview"
    },
    totalRecords: {
        id: "label.total-records",
        defaultMessage: "Total records"
    },
    insights: {
        id: "label.insights",
        defaultMessage: "Insights"
    },
    retention: {
        id: "label.retention",
        defaultMessage: "Retention"
    },
    dropoff: {
        id: "label.dropoff",
        defaultMessage: "Dropoff"
    },
    referrer: {
        id: "label.referrer",
        defaultMessage: "Referrer"
    },
    country: {
        id: "label.country",
        defaultMessage: "Country"
    },
    region: {
        id: "label.region",
        defaultMessage: "Region"
    },
    city: {
        id: "label.city",
        defaultMessage: "City"
    },
    browser: {
        id: "label.browser",
        defaultMessage: "Browser"
    },
    device: {
        id: "label.device",
        defaultMessage: "Device"
    },
    pageTitle: {
        id: "label.pageTitle",
        defaultMessage: "Page title"
    },
    day: {
        id: "label.day",
        defaultMessage: "Day"
    },
    date: {
        id: "label.date",
        defaultMessage: "Date"
    },
    pageOf: {
        id: "label.page-of",
        defaultMessage: "Page {current} of {total}"
    }
});
const messages = (0,external_react_intl_.defineMessages)({
    error: {
        id: "message.error",
        defaultMessage: "Something went wrong."
    },
    saved: {
        id: "message.saved",
        defaultMessage: "Saved."
    },
    noUsers: {
        id: "message.no-users",
        defaultMessage: "There are no users."
    },
    userDeleted: {
        id: "message.user-deleted",
        defaultMessage: "User deleted."
    },
    noDataAvailable: {
        id: "message.no-data-available",
        defaultMessage: "No data available."
    },
    confirmReset: {
        id: "message.confirm-reset",
        defaultMessage: "Are you sure you want to reset {target}?"
    },
    confirmDelete: {
        id: "message.confirm-delete",
        defaultMessage: "Are you sure you want to delete {target}?"
    },
    confirmLeave: {
        id: "message.confirm-leave",
        defaultMessage: "Are you sure you want to leave {target}?"
    },
    minPasswordLength: {
        id: "message.min-password-length",
        defaultMessage: "Minimum length of {n} characters"
    },
    noTeams: {
        id: "message.no-teams",
        defaultMessage: "You have not created any teams."
    },
    shareUrl: {
        id: "message.share-url",
        defaultMessage: "Your website stats are publically available at the following URL:"
    },
    trackingCode: {
        id: "message.tracking-code",
        defaultMessage: "To track stats for this website, place the following code in the <head>...</head> section of your HTML."
    },
    joinTeamWarning: {
        id: "message.team-already-member",
        defaultMessage: "You are already a member of the team."
    },
    deleteAccount: {
        id: "message.delete-account",
        defaultMessage: "To delete this account, type {confirmation} in the box below to confirm."
    },
    deleteWebsite: {
        id: "message.delete-website",
        defaultMessage: "To delete this website, type {confirmation} in the box below to confirm."
    },
    resetWebsite: {
        id: "message.reset-website",
        defaultMessage: "To reset this website, type {confirmation} in the box below to confirm."
    },
    invalidDomain: {
        id: "message.invalid-domain",
        defaultMessage: "Invalid domain. Do not include http/https."
    },
    resetWebsiteWarning: {
        id: "message.reset-website-warning",
        defaultMessage: "All statistics for this website will be deleted, but your settings will remain intact."
    },
    deleteWebsiteWarning: {
        id: "message.delete-website-warning",
        defaultMessage: "All website data will be deleted."
    },
    noResultsFound: {
        id: "message.no-results-found",
        defaultMessage: "No results found."
    },
    noWebsitesConfigured: {
        id: "message.no-websites-configured",
        defaultMessage: "You do not have any websites configured."
    },
    noTeamWebsites: {
        id: "message.no-team-websites",
        defaultMessage: "This team does not have any websites."
    },
    teamWebsitesInfo: {
        id: "message.team-websites-info",
        defaultMessage: "Websites can be viewed by anyone on the team."
    },
    noMatchPassword: {
        id: "message.no-match-password",
        defaultMessage: "Passwords do not match."
    },
    goToSettings: {
        id: "message.go-to-settings",
        defaultMessage: "Go to settings"
    },
    activeUsers: {
        id: "message.active-users",
        defaultMessage: "{x} current {x, plural, one {visitor} other {visitors}}"
    },
    teamNotFound: {
        id: "message.team-not-found",
        defaultMessage: "Team not found."
    },
    visitorLog: {
        id: "message.visitor-log",
        defaultMessage: "Visitor from {country} using {browser} on {os} {device}"
    },
    eventLog: {
        id: "message.event-log",
        defaultMessage: "{event} on {url}"
    },
    incorrectUsernamePassword: {
        id: "message.incorrect-username-password",
        defaultMessage: "Incorrect username and/or password."
    },
    noEventData: {
        id: "message.no-event-data",
        defaultMessage: "No event data is available."
    },
    newVersionAvailable: {
        id: "message.new-version-available",
        defaultMessage: "A new version of Umami {version} is available!"
    }
});

;// CONCATENATED MODULE: ./src/components/hooks/useMessages.js


function useMessages() {
    const intl = (0,external_react_intl_.useIntl)();
    const getMessage = (id)=>{
        const message = Object.values(messages).find((value)=>value.id === id);
        return message ? formatMessage(message) : id;
    };
    const formatMessage = (descriptor, values, opts)=>{
        return descriptor ? intl.formatMessage(descriptor, values, opts) : null;
    };
    return {
        formatMessage,
        FormattedMessage: external_react_intl_.FormattedMessage,
        messages: messages,
        labels: labels,
        getMessage
    };
}
/* harmony default export */ const hooks_useMessages = (useMessages);


/***/ }),

/***/ 73865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   An: () => (/* binding */ BROWSERS),
/* harmony export */   B2: () => (/* binding */ FILTER_RANGE),
/* harmony export */   Bv: () => (/* binding */ REPO_URL),
/* harmony export */   Cu: () => (/* binding */ MAP_FILE),
/* harmony export */   D2: () => (/* binding */ TIMEZONE_CONFIG),
/* harmony export */   D3: () => (/* binding */ DATA_TYPES),
/* harmony export */   DO: () => (/* binding */ DATE_RANGE_CONFIG),
/* harmony export */   H$: () => (/* binding */ REPORT_TYPES),
/* harmony export */   Iq: () => (/* binding */ REALTIME_INTERVAL),
/* harmony export */   K$: () => (/* binding */ ROLES),
/* harmony export */   K_: () => (/* binding */ FILTER_RAW),
/* harmony export */   Lx: () => (/* binding */ FILTER_DAY),
/* harmony export */   O0: () => (/* binding */ FILTER_COMBINED),
/* harmony export */   UA: () => (/* binding */ AUTH_TOKEN),
/* harmony export */   Wc: () => (/* binding */ SHARE_TOKEN_HEADER),
/* harmony export */   Xx: () => (/* binding */ DOMAIN_REGEX),
/* harmony export */   ZW: () => (/* binding */ DEFAULT_LOCALE),
/* harmony export */   _F: () => (/* binding */ DEFAULT_ANIMATION_DURATION),
/* harmony export */   aC: () => (/* binding */ VERSION_CHECK),
/* harmony export */   cZ: () => (/* binding */ REALTIME_RANGE),
/* harmony export */   fI: () => (/* binding */ DEFAULT_DATE_RANGE),
/* harmony export */   fP: () => (/* binding */ OPERATORS),
/* harmony export */   j_: () => (/* binding */ HOMEPAGE_URL),
/* harmony export */   kT: () => (/* binding */ THEME_COLORS),
/* harmony export */   kx: () => (/* binding */ ISO_COUNTRIES),
/* harmony export */   l3: () => (/* binding */ DEFAULT_WEBSITE_LIMIT),
/* harmony export */   mR: () => (/* binding */ THEME_CONFIG),
/* harmony export */   mS: () => (/* binding */ FILTER_PAGES),
/* harmony export */   nI: () => (/* binding */ UPDATES_URL),
/* harmony export */   t0: () => (/* binding */ DEFAULT_THEME),
/* harmony export */   tv: () => (/* binding */ REPORT_PARAMETERS),
/* harmony export */   uO: () => (/* binding */ LOCALE_CONFIG),
/* harmony export */   ut: () => (/* binding */ FILTER_REFERRERS),
/* harmony export */   we: () => (/* binding */ CURRENT_VERSION),
/* harmony export */   y2: () => (/* binding */ EVENT_COLORS),
/* harmony export */   zz: () => (/* binding */ DASHBOARD_CONFIG)
/* harmony export */ });
/* unused harmony exports TELEMETRY_PIXEL, DEFAULT_RESET_DATE, USER_FILTER_TYPES, WEBSITE_FILTER_TYPES, TEAM_FILTER_TYPES, REPORT_FILTER_TYPES, EVENT_COLUMNS, SESSION_COLUMNS, FILTER_COLUMNS, COLLECTION_TYPE, EVENT_TYPE, DATA_TYPE, KAFKA_TOPIC, PERMISSIONS, ROLE_PERMISSIONS, SHARE_ID_REGEX, UUID_REGEX, HOSTNAME_REGEX, DESKTOP_SCREEN_WIDTH, LAPTOP_SCREEN_WIDTH, MOBILE_SCREEN_WIDTH, URL_LENGTH, EVENT_NAME_LENGTH, DESKTOP_OS, MOBILE_OS */
/* eslint-disable no-unused-vars */ const CURRENT_VERSION = "2.6.2";
const AUTH_TOKEN = "umami.auth";
const LOCALE_CONFIG = "umami.locale";
const TIMEZONE_CONFIG = "umami.timezone";
const DATE_RANGE_CONFIG = "umami.date-range";
const THEME_CONFIG = "umami.theme";
const DASHBOARD_CONFIG = "umami.dashboard";
const VERSION_CHECK = "umami.version-check";
const SHARE_TOKEN_HEADER = "x-umami-share-token";
const HOMEPAGE_URL = "https://umami.is";
const REPO_URL = "https://github.com/umami-software/umami";
const UPDATES_URL = "https://api.umami.is/v1/updates";
const TELEMETRY_PIXEL = "https://i.umami.is/a.png";
const DEFAULT_LOCALE = process.env.defaultLocale ?? "en-US";
const DEFAULT_THEME = "light";
const DEFAULT_ANIMATION_DURATION = 300;
const DEFAULT_DATE_RANGE = "24hour";
const DEFAULT_WEBSITE_LIMIT = 10;
const DEFAULT_RESET_DATE = "2000-01-01";
const REALTIME_RANGE = 30;
const REALTIME_INTERVAL = 5000;
const FILTER_COMBINED = "filter-combined";
const FILTER_RAW = "filter-raw";
const FILTER_DAY = "filter-day";
const FILTER_RANGE = "filter-range";
const FILTER_REFERRERS = "filter-referrers";
const FILTER_PAGES = "filter-pages";
const USER_FILTER_TYPES = {
    all: "All",
    username: "Username"
};
const WEBSITE_FILTER_TYPES = {
    all: "All",
    name: "Name",
    domain: "Domain"
};
const TEAM_FILTER_TYPES = {
    all: "All",
    name: "Name",
    "user:username": "Owner"
};
const REPORT_FILTER_TYPES = {
    all: "All",
    name: "Name",
    description: "Description",
    type: "Type",
    "user:username": "Username",
    "website:name": "Website Name",
    "website:domain": "Website Domain"
};
const EVENT_COLUMNS = (/* unused pure expression or super */ null && ([
    "url",
    "referrer",
    "title",
    "query",
    "event"
]));
const SESSION_COLUMNS = (/* unused pure expression or super */ null && ([
    "browser",
    "os",
    "device",
    "screen",
    "language",
    "country",
    "region",
    "city"
]));
const FILTER_COLUMNS = {
    url: "url_path",
    referrer: "referrer_domain",
    title: "page_title",
    query: "url_query",
    os: "os",
    browser: "browser",
    device: "device",
    country: "country",
    region: "subdivision1",
    city: "city",
    language: "language",
    event: "event_name"
};
const COLLECTION_TYPE = {
    event: "event",
    identify: "identify"
};
const EVENT_TYPE = {
    pageView: 1,
    customEvent: 2
};
const DATA_TYPE = {
    string: 1,
    number: 2,
    boolean: 3,
    date: 4,
    array: 5
};
const OPERATORS = {
    equals: "eq",
    notEquals: "neq",
    set: "s",
    notSet: "ns",
    contains: "c",
    doesNotContain: "dnc",
    true: "t",
    false: "f",
    greaterThan: "gt",
    lessThan: "lt",
    greaterThanEquals: "gte",
    lessThanEquals: "lte",
    before: "bf",
    after: "af"
};
const DATA_TYPES = {
    [DATA_TYPE.string]: "string",
    [DATA_TYPE.number]: "number",
    [DATA_TYPE.boolean]: "boolean",
    [DATA_TYPE.date]: "date",
    [DATA_TYPE.array]: "array"
};
const REPORT_TYPES = {
    funnel: "funnel",
    insights: "insights",
    retention: "retention"
};
const REPORT_PARAMETERS = {
    fields: "fields",
    filters: "filters",
    groups: "groups"
};
const KAFKA_TOPIC = {
    event: "event",
    eventData: "event_data"
};
const ROLES = {
    admin: "admin",
    user: "user",
    viewOnly: "view-only",
    teamOwner: "team-owner",
    teamMember: "team-member"
};
const PERMISSIONS = {
    all: "all",
    websiteCreate: "website:create",
    websiteUpdate: "website:update",
    websiteDelete: "website:delete",
    teamCreate: "team:create",
    teamUpdate: "team:update",
    teamDelete: "team:delete"
};
const ROLE_PERMISSIONS = {
    [ROLES.admin]: [
        PERMISSIONS.all
    ],
    [ROLES.user]: [
        PERMISSIONS.websiteCreate,
        PERMISSIONS.websiteUpdate,
        PERMISSIONS.websiteDelete,
        PERMISSIONS.teamCreate
    ],
    [ROLES.viewOnly]: [],
    [ROLES.teamOwner]: [
        PERMISSIONS.teamUpdate,
        PERMISSIONS.teamDelete
    ],
    [ROLES.teamMember]: []
};
const THEME_COLORS = {
    light: {
        primary: "#2680eb",
        gray50: "#ffffff",
        gray75: "#fafafa",
        gray100: "#f5f5f5",
        gray200: "#eaeaea",
        gray300: "#e1e1e1",
        gray400: "#cacaca",
        gray500: "#b3b3b3",
        gray600: "#8e8e8e",
        gray700: "#6e6e6e",
        gray800: "#4b4b4b",
        gray900: "#2c2c2c"
    },
    dark: {
        primary: "#2680eb",
        gray50: "#252525",
        gray75: "#2f2f2f",
        gray100: "#323232",
        gray200: "#3e3e3e",
        gray300: "#4a4a4a",
        gray400: "#5a5a5a",
        gray500: "#6e6e6e",
        gray600: "#909090",
        gray700: "#b9b9b9",
        gray800: "#e3e3e3",
        gray900: "#ffffff"
    }
};
const EVENT_COLORS = [
    "#2680eb",
    "#9256d9",
    "#44b556",
    "#e68619",
    "#e34850",
    "#f7bd12",
    "#01bad7",
    "#6734bc",
    "#89c541",
    "#ffc301",
    "#ec1562",
    "#ffec16"
];
const DOMAIN_REGEX = /^(localhost(:[1-9]\d{0,4})?|((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9-]+(-[a-z0-9-]+)*\.)+(xn--)?[a-z0-9-]{2,63})$/;
const SHARE_ID_REGEX = /^[a-zA-Z0-9]{16}$/;
const UUID_REGEX = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
const HOSTNAME_REGEX = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/;
const DESKTOP_SCREEN_WIDTH = 1920;
const LAPTOP_SCREEN_WIDTH = 1024;
const MOBILE_SCREEN_WIDTH = 479;
const URL_LENGTH = 500;
const EVENT_NAME_LENGTH = 50;
const DESKTOP_OS = (/* unused pure expression or super */ null && ([
    "BeOS",
    "Chrome OS",
    "Linux",
    "Mac OS",
    "Open BSD",
    "OS/2",
    "QNX",
    "Sun OS",
    "Windows 10",
    "Windows 2000",
    "Windows 3.11",
    "Windows 7",
    "Windows 8",
    "Windows 8.1",
    "Windows 95",
    "Windows 98",
    "Windows ME",
    "Windows Server 2003",
    "Windows Vista",
    "Windows XP"
]));
const MOBILE_OS = (/* unused pure expression or super */ null && ([
    "Amazon OS",
    "Android OS",
    "BlackBerry OS",
    "iOS",
    "Windows Mobile"
]));
const BROWSERS = {
    android: "Android",
    aol: "AOL",
    beaker: "Beaker",
    bb10: "BlackBerry 10",
    chrome: "Chrome",
    "chromium-webview": "Chrome (webview)",
    crios: "Chrome (iOS)",
    curl: "Curl",
    edge: "Edge",
    "edge-chromium": "Edge (Chromium)",
    "edge-ios": "Edge (iOS)",
    facebook: "Facebook",
    firefox: "Firefox",
    fxios: "Firefox (iOS)",
    ie: "IE",
    instagram: "Instagram",
    ios: "iOS",
    "ios-webview": "iOS (webview)",
    kakaotalk: "KaKaoTalk",
    miui: "MIUI",
    opera: "Opera",
    "opera-mini": "Opera Mini",
    phantomjs: "PhantomJS",
    safari: "Safari",
    samsung: "Samsung",
    silk: "Silk",
    searchbot: "Searchbot",
    yandexbrowser: "Yandex"
};
const MAP_FILE = "/datamaps.world.json";
const ISO_COUNTRIES = {
    AFG: "AF",
    ALA: "AX",
    ALB: "AL",
    DZA: "DZ",
    ASM: "AS",
    AND: "AD",
    AGO: "AO",
    AIA: "AI",
    ATA: "AQ",
    ATG: "AG",
    ARG: "AR",
    ARM: "AM",
    ABW: "AW",
    AUS: "AU",
    AUT: "AT",
    AZE: "AZ",
    BHS: "BS",
    BHR: "BH",
    BGD: "BD",
    BRB: "BB",
    BLR: "BY",
    BEL: "BE",
    BLZ: "BZ",
    BEN: "BJ",
    BMU: "BM",
    BTN: "BT",
    BOL: "BO",
    BIH: "BA",
    BWA: "BW",
    BVT: "BV",
    BRA: "BR",
    VGB: "VG",
    IOT: "IO",
    BRN: "BN",
    BGR: "BG",
    BFA: "BF",
    BDI: "BI",
    KHM: "KH",
    CMR: "CM",
    CAN: "CA",
    CPV: "CV",
    CYM: "KY",
    CAF: "CF",
    TCD: "TD",
    CHL: "CL",
    CHN: "CN",
    HKG: "HK",
    MAC: "MO",
    CXR: "CX",
    CCK: "CC",
    COL: "CO",
    COM: "KM",
    COG: "CG",
    COD: "CD",
    COK: "CK",
    CRI: "CR",
    CIV: "CI",
    HRV: "HR",
    CUB: "CU",
    CYP: "CY",
    CZE: "CZ",
    DNK: "DK",
    DJI: "DJ",
    DMA: "DM",
    DOM: "DO",
    ECU: "EC",
    EGY: "EG",
    SLV: "SV",
    GNQ: "GQ",
    ERI: "ER",
    EST: "EE",
    ETH: "ET",
    FLK: "FK",
    FRO: "FO",
    FJI: "FJ",
    FIN: "FI",
    FRA: "FR",
    GUF: "GF",
    PYF: "PF",
    ATF: "TF",
    GAB: "GA",
    GMB: "GM",
    GEO: "GE",
    DEU: "DE",
    GHA: "GH",
    GIB: "GI",
    GRC: "GR",
    GRL: "GL",
    GRD: "GD",
    GLP: "GP",
    GUM: "GU",
    GTM: "GT",
    GGY: "GG",
    GIN: "GN",
    GNB: "GW",
    GUY: "GY",
    HTI: "HT",
    HMD: "HM",
    VAT: "VA",
    HND: "HN",
    HUN: "HU",
    ISL: "IS",
    IND: "IN",
    IDN: "ID",
    IRN: "IR",
    IRQ: "IQ",
    IRL: "IE",
    IMN: "IM",
    ISR: "IL",
    ITA: "IT",
    JAM: "JM",
    JPN: "JP",
    JEY: "JE",
    JOR: "JO",
    KAZ: "KZ",
    KEN: "KE",
    KIR: "KI",
    PRK: "KP",
    KOR: "KR",
    KWT: "KW",
    KGZ: "KG",
    LAO: "LA",
    LVA: "LV",
    LBN: "LB",
    LSO: "LS",
    LBR: "LR",
    LBY: "LY",
    LIE: "LI",
    LTU: "LT",
    LUX: "LU",
    MKD: "MK",
    MDG: "MG",
    MWI: "MW",
    MYS: "MY",
    MDV: "MV",
    MLI: "ML",
    MLT: "MT",
    MHL: "MH",
    MTQ: "MQ",
    MRT: "MR",
    MUS: "MU",
    MYT: "YT",
    MEX: "MX",
    FSM: "FM",
    MDA: "MD",
    MCO: "MC",
    MNG: "MN",
    MNE: "ME",
    MSR: "MS",
    MAR: "MA",
    MOZ: "MZ",
    MMR: "MM",
    NAM: "NA",
    NRU: "NR",
    NPL: "NP",
    NLD: "NL",
    ANT: "AN",
    NCL: "NC",
    NZL: "NZ",
    NIC: "NI",
    NER: "NE",
    NGA: "NG",
    NIU: "NU",
    NFK: "NF",
    MNP: "MP",
    NOR: "NO",
    OMN: "OM",
    PAK: "PK",
    PLW: "PW",
    PSE: "PS",
    PAN: "PA",
    PNG: "PG",
    PRY: "PY",
    PER: "PE",
    PHL: "PH",
    PCN: "PN",
    POL: "PL",
    PRT: "PT",
    PRI: "PR",
    QAT: "QA",
    REU: "RE",
    ROU: "RO",
    RUS: "RU",
    RWA: "RW",
    BLM: "BL",
    SHN: "SH",
    KNA: "KN",
    LCA: "LC",
    MAF: "MF",
    SPM: "PM",
    VCT: "VC",
    WSM: "WS",
    SMR: "SM",
    STP: "ST",
    SAU: "SA",
    SEN: "SN",
    SRB: "RS",
    SYC: "SC",
    SLE: "SL",
    SGP: "SG",
    SVK: "SK",
    SVN: "SI",
    SLB: "SB",
    SOM: "SO",
    ZAF: "ZA",
    SGS: "GS",
    SSD: "SS",
    ESP: "ES",
    LKA: "LK",
    SDN: "SD",
    SUR: "SR",
    SJM: "SJ",
    SWZ: "SZ",
    SWE: "SE",
    CHE: "CH",
    SYR: "SY",
    TWN: "TW",
    TJK: "TJ",
    TZA: "TZ",
    THA: "TH",
    TLS: "TL",
    TGO: "TG",
    TKL: "TK",
    TON: "TO",
    TTO: "TT",
    TUN: "TN",
    TUR: "TR",
    TKM: "TM",
    TCA: "TC",
    TUV: "TV",
    UGA: "UG",
    UKR: "UA",
    ARE: "AE",
    GBR: "GB",
    USA: "US",
    UMI: "UM",
    URY: "UY",
    UZB: "UZ",
    VUT: "VU",
    VEN: "VE",
    VNM: "VN",
    VIR: "VI",
    WLF: "WF",
    ESH: "EH",
    YEM: "YE",
    ZMB: "ZM",
    ZWE: "ZW",
    XKX: "XK"
};


/***/ }),

/***/ 49674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mj: () => (/* binding */ languages),
/* harmony export */   Ux: () => (/* binding */ getTextDirection),
/* harmony export */   t4: () => (/* binding */ getDateLocale)
/* harmony export */ });
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_0__);

const languages = {
    "ar-SA": {
        label: "العربية",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.arSA,
        dir: "rtl"
    },
    "be-BY": {
        label: "Беларуская",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.be
    },
    "bn-BD": {
        label: "বাংলা",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.bn
    },
    "ca-ES": {
        label: "Catal\xe0",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ca
    },
    "cs-CZ": {
        label: "Čeština",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.cs
    },
    "da-DK": {
        label: "Dansk",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.da
    },
    "de-CH": {
        label: "Schwiizerd\xfctsch",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.de
    },
    "de-DE": {
        label: "Deutsch",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.de
    },
    "el-GR": {
        label: "Ελληνικά",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.el
    },
    "en-GB": {
        label: "English (UK)",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.enGB
    },
    "en-US": {
        label: "English (US)",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.enUS
    },
    "es-MX": {
        label: "Espa\xf1ol",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.es
    },
    "fa-IR": {
        label: "فارسی",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.faIR,
        dir: "rtl"
    },
    "fi-FI": {
        label: "Suomi",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.fi
    },
    "fo-FO": {
        label: "F\xf8royskt"
    },
    "fr-FR": {
        label: "Fran\xe7ais",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.fr
    },
    "ga-ES": {
        label: "Galacian (Spain)",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.es
    },
    "he-IL": {
        label: "עברית",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.he
    },
    "hi-IN": {
        label: "हिन्दी",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.hi
    },
    "hr-HR": {
        label: "Hrvatski",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.hr
    },
    "hu-HU": {
        label: "Hungarian",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.hu
    },
    "id-ID": {
        label: "Bahasa Indonesia",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.id
    },
    "it-IT": {
        label: "Italiano",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.it
    },
    "ja-JP": {
        label: "日本語",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ja
    },
    "km-KH": {
        label: "ភាសាខ្មែរ",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.km
    },
    "ko-KR": {
        label: "한국어",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ko
    },
    "lt-LT": {
        label: "Lietuvių",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.lt
    },
    "mn-MN": {
        label: "Монгол",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.mn
    },
    "ms-MY": {
        label: "Malay",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ms
    },
    "my-MM": {
        label: "မြန်မာဘာသာ",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.enUS
    },
    "nl-NL": {
        label: "Nederlands",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.nl
    },
    "nb-NO": {
        label: "Norsk Bokm\xe5l",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.nb
    },
    "pl-PL": {
        label: "Polski",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.pl
    },
    "pt-BR": {
        label: "Portugu\xeas do Brasil",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ptBR
    },
    "pt-PT": {
        label: "Portugu\xeas",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.pt
    },
    "ro-RO": {
        label: "Rom\xe2nă",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ro
    },
    "ru-RU": {
        label: "Русский",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ru
    },
    "si-LK": {
        label: "සිංහල",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.id
    },
    "sk-SK": {
        label: "Slovenčina",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.sk
    },
    "sl-SI": {
        label: "Slovenščina",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.sl
    },
    "sv-SE": {
        label: "Svenska",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.sv
    },
    "ta-IN": {
        label: "தமிழ்",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.ta
    },
    "th-TH": {
        label: "ภาษาไทย",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.th
    },
    "tr-TR": {
        label: "T\xfcrk\xe7e",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.tr
    },
    "uk-UA": {
        label: "українська",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.uk
    },
    "ur-PK": {
        label: "Urdu (Pakistan)",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.uk,
        dir: "rtl"
    },
    "vi-VN": {
        label: "Tiếng Việt",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.vi
    },
    "zh-CN": {
        label: "中文",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.zhCN
    },
    "zh-TW": {
        label: "中文(繁體)",
        dateLocale: date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.zhTW
    }
};
function getDateLocale(locale) {
    return languages[locale]?.dateLocale || date_fns_locale__WEBPACK_IMPORTED_MODULE_0__.enUS;
}
function getTextDirection(locale) {
    return languages[locale]?.dir || "ltr";
}


/***/ }),

/***/ 28375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49752);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47554);
/* harmony import */ var react_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_basics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_common_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67435);
/* harmony import */ var components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91998);
/* harmony import */ var _fontsource_inter_400_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72303);
/* harmony import */ var _fontsource_inter_400_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_400_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fontsource_inter_700_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79826);
/* harmony import */ var _fontsource_inter_700_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter_700_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_basics_dist_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96178);
/* harmony import */ var react_basics_dist_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_basics_dist_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styles_variables_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3233);
/* harmony import */ var styles_variables_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styles_variables_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styles_locale_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16036);
/* harmony import */ var styles_locale_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styles_locale_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styles_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54729);
/* harmony import */ var styles_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styles_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, components_common_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__, chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_15__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, components_common_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__, components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__, chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const client = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
});
function App({ Component, pageProps }) {
    const { locale, messages } = (0,components_hooks_useLocale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { basePath, pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
        client: client,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__.IntlProvider, {
            locale: locale,
            messages: messages[locale],
            onError: ()=>null,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_basics__WEBPACK_IMPORTED_MODULE_3__.ReactBasicsProvider, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_common_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "icon",
                                    href: `${basePath}/favicon.ico`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "apple-touch-icon",
                                    sizes: "180x180",
                                    href: `${basePath}/apple-touch-icon.png`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "icon",
                                    type: "image/png",
                                    sizes: "32x32",
                                    href: `${basePath}/favicon-32x32.png`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "icon",
                                    type: "image/png",
                                    sizes: "16x16",
                                    href: `${basePath}/favicon-16x16.png`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "manifest",
                                    href: `${basePath}/site.webmanifest`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "mask-icon",
                                    href: `${basePath}/safari-pinned-tab.svg`,
                                    color: "#5bbad5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "msapplication-TileColor",
                                    content: "#da532c"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "theme-color",
                                    content: "#fafafa",
                                    media: "(prefers-color-scheme: light)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "theme-color",
                                    content: "#2f2f2f",
                                    media: "(prefers-color-scheme: dark)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "viewport",
                                    content: "width=device-width, initial-scale=1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "robots",
                                    content: "noindex,nofollow"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        !pathname.includes("/share/") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
                            src: `${basePath}/telemetry.js`
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: () => (/* binding */ setTheme),
/* harmony export */   Og: () => (/* binding */ setShareToken),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   av: () => (/* binding */ setUser),
/* harmony export */   i_: () => (/* binding */ setLocale),
/* harmony export */   t5: () => (/* binding */ setDateRange),
/* harmony export */   v6: () => (/* binding */ setConfig)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66912);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73865);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    locale: (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.getItem)(lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOCALE_CONFIG */ .uO) || lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LOCALE */ .ZW,
    theme: (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.getItem)(lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .THEME_CONFIG */ .mR) || lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_THEME */ .t0,
    dateRange: (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.getItem)(lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .DATE_RANGE_CONFIG */ .DO) || lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_DATE_RANGE */ .fI,
    shareToken: null,
    user: null,
    config: null
};
const store = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)(()=>({
        ...initialState
    }));
function setTheme(theme) {
    store.setState({
        theme
    });
}
function setLocale(locale) {
    store.setState({
        locale
    });
}
function setShareToken(shareToken) {
    store.setState({
        shareToken
    });
}
function setUser(user) {
    store.setState({
        user
    });
}
function setConfig(config) {
    store.setState({
        config
    });
}
function setDateRange(dateRange) {
    store.setState({
        dateRange
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54729:
/***/ (() => {



/***/ }),

/***/ 16036:
/***/ (() => {



/***/ }),

/***/ 3233:
/***/ (() => {



/***/ }),

/***/ 3979:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AF":"Afghanistan","AX":"Åland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua & Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia & Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","VG":"British Virgin Islands","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","BQ":"Caribbean Netherlands","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo - Brazzaville","CD":"Congo - Kinshasa","CK":"Cook Islands","CR":"Costa Rica","CI":"Côte d’Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curaçao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard & McDonald Islands","HN":"Honduras","HK":"Hong Kong SAR China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao SAR China","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar (Burma)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Islands","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Réunion","RO":"Romania","RU":"Russia","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"São Tomé & Príncipe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia & South Sandwich Islands","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","BL":"St. Barthélemy","SH":"St. Helena","KN":"St. Kitts & Nevis","LC":"St. Lucia","MF":"St. Martin","PM":"St. Pierre & Miquelon","VC":"St. Vincent & Grenadines","SD":"Sudan","SR":"Suriname","SJ":"Svalbard & Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad & Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks & Caicos Islands","TV":"Tuvalu","UM":"U.S. Outlying Islands","VI":"U.S. Virgin Islands","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican City","VE":"Venezuela","VN":"Vietnam","WF":"Wallis & Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}');

/***/ })

};
;