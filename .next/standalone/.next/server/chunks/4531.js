"use strict";
exports.id = 4531;
exports.ids = [4531];
exports.modules = {

/***/ 89225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E0: () => (/* binding */ setAuthKey),
/* harmony export */   Gl: () => (/* binding */ canUpdateUser),
/* harmony export */   KT: () => (/* binding */ canViewReport),
/* harmony export */   Mt: () => (/* binding */ canCreateWebsite),
/* harmony export */   UG: () => (/* binding */ canDeleteReport),
/* harmony export */   UV: () => (/* binding */ canUpdateWebsite),
/* harmony export */   XM: () => (/* binding */ canViewUser),
/* harmony export */   Xq: () => (/* binding */ canCreateTeam),
/* harmony export */   Y6: () => (/* binding */ canViewUsers),
/* harmony export */   bW: () => (/* binding */ getAuthToken),
/* harmony export */   bc: () => (/* binding */ canCreateUser),
/* harmony export */   bu: () => (/* binding */ canUpdateTeam),
/* harmony export */   bv: () => (/* binding */ canDeleteUser),
/* harmony export */   gr: () => (/* binding */ canViewWebsite),
/* harmony export */   n6: () => (/* binding */ canDeleteTeamUser),
/* harmony export */   o6: () => (/* binding */ canUpdateReport),
/* harmony export */   oy: () => (/* binding */ canDeleteTeamWebsite),
/* harmony export */   p: () => (/* binding */ canDeleteWebsite),
/* harmony export */   q9: () => (/* binding */ canViewTeam),
/* harmony export */   te: () => (/* binding */ canDeleteTeam),
/* harmony export */   wn: () => (/* binding */ parseShareToken)
/* harmony export */ });
/* unused harmony export hasPermission */
/* harmony import */ var _umami_redis_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86505);
/* harmony import */ var _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umami_redis_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96974);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55510);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30249);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37451);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_3__, queries__WEBPACK_IMPORTED_MODULE_5__, _load__WEBPACK_IMPORTED_MODULE_6__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_3__, queries__WEBPACK_IMPORTED_MODULE_5__, _load__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const log = debug__WEBPACK_IMPORTED_MODULE_1___default()("umami:auth");
const cloudMode = process.env.CLOUD_MODE;
async function setAuthKey(user, expire = 0) {
    const authKey = `auth:${(0,next_basics__WEBPACK_IMPORTED_MODULE_4__.getRandomChars)(32)}`;
    await _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().set(authKey, user);
    if (expire) {
        await _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().expire(authKey, expire);
    }
    return (0,next_basics__WEBPACK_IMPORTED_MODULE_4__.createSecureToken)({
        authKey
    }, (0,lib_crypto__WEBPACK_IMPORTED_MODULE_3__/* .secret */ .zY)());
}
function getAuthToken(req) {
    try {
        return req.headers.authorization.split(" ")[1];
    } catch  {
        return null;
    }
}
function parseShareToken(req) {
    try {
        return (0,next_basics__WEBPACK_IMPORTED_MODULE_4__.parseToken)(req.headers[lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .SHARE_TOKEN_HEADER */ .Wc], (0,lib_crypto__WEBPACK_IMPORTED_MODULE_3__/* .secret */ .zY)());
    } catch (e) {
        log(e);
        return null;
    }
}
async function canViewWebsite({ user, shareToken }, websiteId) {
    if (user?.isAdmin) {
        return true;
    }
    if (shareToken?.websiteId === websiteId) {
        return true;
    }
    const website = await (0,_load__WEBPACK_IMPORTED_MODULE_6__/* .loadWebsite */ .wh)(websiteId);
    if (user.id === website?.userId) {
        return true;
    }
    return !!await (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .findTeamWebsiteByUserId */ .j)(websiteId, user.id);
}
async function canCreateWebsite({ user, grant }) {
    if (cloudMode) {
        if (grant?.find((a)=>a === lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.websiteCreate)) {
            return true;
        }
        return false;
    }
    if (user.isAdmin) {
        return true;
    }
    return hasPermission(user.role, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.websiteCreate);
}
async function canUpdateWebsite({ user }, websiteId) {
    if (user.isAdmin) {
        return true;
    }
    const website = await (0,_load__WEBPACK_IMPORTED_MODULE_6__/* .loadWebsite */ .wh)(websiteId);
    return user.id === website?.userId;
}
async function canDeleteWebsite({ user }, websiteId) {
    if (user.isAdmin) {
        return true;
    }
    const website = await (0,_load__WEBPACK_IMPORTED_MODULE_6__/* .loadWebsite */ .wh)(websiteId);
    return user.id === website?.userId;
}
async function canViewReport(auth, report) {
    if (auth.user.isAdmin) {
        return true;
    }
    if (auth.user.id == report.userId) {
        return true;
    }
    return !!await canViewWebsite(auth, report.websiteId);
}
async function canUpdateReport({ user }, report) {
    if (user.isAdmin) {
        return true;
    }
    return user.id == report.userId;
}
async function canDeleteReport(auth, report) {
    return canUpdateReport(auth, report);
}
async function canCreateTeam({ user, grant }) {
    if (cloudMode) {
        if (grant?.find((a)=>a === lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.teamCreate)) {
            return true;
        }
        return false;
    }
    if (user.isAdmin) {
        return true;
    }
    return !!user;
}
async function canViewTeam({ user }, teamId) {
    if (user.isAdmin) {
        return true;
    }
    return (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .getTeamUser */ .PW)(teamId, user.id);
}
async function canUpdateTeam({ user }, teamId) {
    if (user.isAdmin) {
        return true;
    }
    const teamUser = await (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .getTeamUser */ .PW)(teamId, user.id);
    return teamUser && hasPermission(teamUser.role, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.teamUpdate);
}
async function canDeleteTeam({ user }, teamId) {
    if (user.isAdmin) {
        return true;
    }
    const teamUser = await (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .getTeamUser */ .PW)(teamId, user.id);
    return teamUser && hasPermission(teamUser.role, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.teamDelete);
}
async function canDeleteTeamUser({ user }, teamId, removeUserId) {
    if (user.isAdmin) {
        return true;
    }
    if (removeUserId === user.id) {
        return true;
    }
    const teamUser = await (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .getTeamUser */ .PW)(teamId, user.id);
    return teamUser && hasPermission(teamUser.role, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.teamUpdate);
}
async function canDeleteTeamWebsite({ user }, teamId, websiteId) {
    if (user.isAdmin) {
        return true;
    }
    const teamWebsite = await (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .getTeamWebsite */ .iJ)(teamId, websiteId);
    if (teamWebsite?.website?.userId === user.id) {
        return true;
    }
    if (teamWebsite) {
        const teamUser = await (0,queries__WEBPACK_IMPORTED_MODULE_5__/* .getTeamUser */ .PW)(teamWebsite.teamId, user.id);
        return hasPermission(teamUser.role, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .PERMISSIONS */ ._I.teamUpdate);
    }
    return false;
}
async function canCreateUser({ user }) {
    return user.isAdmin;
}
async function canViewUser({ user }, viewedUserId) {
    if (user.isAdmin) {
        return true;
    }
    return user.id === viewedUserId;
}
async function canViewUsers({ user }) {
    return user.isAdmin;
}
async function canUpdateUser({ user }, viewedUserId) {
    if (user.isAdmin) {
        return true;
    }
    return user.id === viewedUserId;
}
async function canDeleteUser({ user }) {
    return user.isAdmin;
}
async function hasPermission(role, permission) {
    return (0,next_basics__WEBPACK_IMPORTED_MODULE_4__.ensureArray)(permission).some((e)=>lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .ROLE_PERMISSIONS */ .IC[role]?.includes(e));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _umami_redis_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86505);
/* harmony import */ var _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umami_redis_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries__WEBPACK_IMPORTED_MODULE_1__]);
_queries__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const { fetchObject, storeObject, deleteObject, expire } = (_umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default());
async function fetchWebsite(id) {
    return fetchObject(`website:${id}`, ()=>(0,_queries__WEBPACK_IMPORTED_MODULE_1__/* .getWebsiteById */ .k3)(id), 86400);
}
async function storeWebsite(data) {
    const { id } = data;
    const key = `website:${id}`;
    const obj = await storeObject(key, data);
    await expire(key, 86400);
    return obj;
}
async function deleteWebsite(id) {
    return deleteObject(`website:${id}`);
}
async function fetchUser(id) {
    return fetchObject(`user:${id}`, ()=>(0,_queries__WEBPACK_IMPORTED_MODULE_1__/* .getUserById */ .GA)(id, {
            includePassword: true
        }), 86400);
}
async function storeUser(data) {
    const { id } = data;
    const key = `user:${id}`;
    const obj = await storeObject(key, data);
    await expire(key, 86400);
    return obj;
}
async function deleteUser(id) {
    return deleteObject(`user:${id}`);
}
async function fetchSession(id) {
    return fetchObject(`session:${id}`, ()=>(0,_queries__WEBPACK_IMPORTED_MODULE_1__/* .getSession */ .Gg)(id), 86400);
}
async function storeSession(data) {
    const { id } = data;
    const key = `session:${id}`;
    const obj = await storeObject(key, data);
    await expire(key, 86400);
    return obj;
}
async function deleteSession(id) {
    return deleteObject(`session:${id}`);
}
async function fetchUserBlock(userId) {
    const key = `user:block:${userId}`;
    return _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().get(key);
}
async function incrementUserBlock(userId) {
    const key = `user:block:${userId}`;
    return _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().incr(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    fetchWebsite,
    storeWebsite,
    deleteWebsite,
    fetchUser,
    storeUser,
    deleteUser,
    fetchSession,
    storeSession,
    deleteSession,
    fetchUserBlock,
    incrementUserBlock,
    enabled: (_umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().enabled)
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CLICKHOUSE_DATE_FORMATS */
/* harmony import */ var clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97679);
/* harmony import */ var clickhouse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clickhouse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70400);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96974);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56130);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55510);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81699);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80645);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dateformat__WEBPACK_IMPORTED_MODULE_1__, _load__WEBPACK_IMPORTED_MODULE_5__]);
([dateformat__WEBPACK_IMPORTED_MODULE_1__, _load__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CLICKHOUSE_DATE_FORMATS = {
    minute: "%Y-%m-%d %H:%M:00",
    hour: "%Y-%m-%d %H:00:00",
    day: "%Y-%m-%d",
    month: "%Y-%m-01",
    year: "%Y-01-01"
};
const log = debug__WEBPACK_IMPORTED_MODULE_2___default()("umami:clickhouse");
let clickhouse;
const enabled = Boolean(process.env.CLICKHOUSE_URL);
function getClient() {
    const { hostname, port, pathname, username = "default", password } = new URL(process.env.CLICKHOUSE_URL);
    const client = new clickhouse__WEBPACK_IMPORTED_MODULE_0__.ClickHouse({
        url: hostname,
        port: Number(port),
        format: "json",
        config: {
            database: pathname.replace("/", "")
        },
        basicAuth: password ? {
            username,
            password
        } : null
    });
    if (false) {}
    log("Clickhouse initialized");
    return client;
}
function getDateStringQuery(data, unit) {
    return `formatDateTime(${data}, '${CLICKHOUSE_DATE_FORMATS[unit]}')`;
}
function getDateQuery(field, unit, timezone) {
    if (timezone) {
        return `date_trunc('${unit}', ${field}, '${timezone}')`;
    }
    return `date_trunc('${unit}', ${field})`;
}
function getDateFormat(date) {
    return `'${(0,dateformat__WEBPACK_IMPORTED_MODULE_1__["default"])(date, "UTC:yyyy-mm-dd HH:MM:ss")}'`;
}
function mapFilter(column, operator, name, type = "String") {
    switch(operator){
        case _constants__WEBPACK_IMPORTED_MODULE_4__/* .OPERATORS */ .fP.equals:
            return `${column} = {${name}:${type}}`;
        case _constants__WEBPACK_IMPORTED_MODULE_4__/* .OPERATORS */ .fP.notEquals:
            return `${column} != {${name}:${type}}`;
        default:
            return "";
    }
}
function getFilterQuery(filters = {}, options = {}) {
    const query = Object.keys(filters).reduce((arr, name)=>{
        const value = filters[name];
        const operator = value?.filter ?? _constants__WEBPACK_IMPORTED_MODULE_4__/* .OPERATORS */ .fP.equals;
        const column = _constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_COLUMNS */ .MI[name] ?? options?.columns?.[name];
        if (value !== undefined && column) {
            arr.push(`and ${mapFilter(column, operator, name)}`);
            if (name === "referrer") {
                arr.push("and referrer_domain != {websiteDomain:String}");
            }
        }
        return arr;
    }, []);
    return query.join("\n");
}
function normalizeFilters(filters = {}) {
    return Object.keys(filters).reduce((obj, key)=>{
        const value = filters[key];
        obj[key] = value?.value ?? value;
        return obj;
    }, {});
}
async function parseFilters(websiteId, filters = {}, options) {
    const website = await (0,_load__WEBPACK_IMPORTED_MODULE_5__/* .loadWebsite */ .wh)(websiteId);
    return {
        filterQuery: getFilterQuery(filters, options),
        params: {
            ...normalizeFilters(filters),
            websiteId,
            startDate: (0,_date__WEBPACK_IMPORTED_MODULE_6__/* .maxDate */ .l7)(filters.startDate, website.resetAt),
            websiteDomain: website.domain
        }
    };
}
async function rawQuery(query, params = {}) {
    if (process.env.LOG_QUERY) {
        log("QUERY:\n", query);
        log("PARAMETERS:\n", params);
    }
    await connect();
    return clickhouse.query(query, {
        params
    }).toPromise();
}
async function findUnique(data) {
    if (data.length > 1) {
        throw `${data.length} records found when expecting 1.`;
    }
    return findFirst(data);
}
async function findFirst(data) {
    return data[0] ?? null;
}
async function connect() {
    if (enabled && !clickhouse) {
        clickhouse = process.env.CLICKHOUSE_URL && (global[lib_db__WEBPACK_IMPORTED_MODULE_3__/* .CLICKHOUSE */ .xO] || getClient());
    }
    return clickhouse;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    enabled,
    client: clickhouse,
    log,
    connect,
    getDateStringQuery,
    getDateQuery,
    getDateFormat,
    getFilterQuery,
    parseFilters,
    findUnique,
    findFirst,
    rawQuery
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K8: () => (/* binding */ isUuid),
/* harmony export */   Vj: () => (/* binding */ uuid),
/* harmony export */   zY: () => (/* binding */ secret)
/* harmony export */ });
/* unused harmony export salt */
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45914);
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function secret() {
    return (0,next_basics__WEBPACK_IMPORTED_MODULE_1__.hash)(process.env.APP_SECRET || process.env.DATABASE_URL);
}
function salt() {
    const ROTATING_SALT = hash(startOfMonth(new Date()).toUTCString());
    return hash(secret(), ROTATING_SALT);
}
function uuid(...args) {
    if (!args.length) return (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
    return (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v5)((0,next_basics__WEBPACK_IMPORTED_MODULE_1__.hash)(...args), uuid__WEBPACK_IMPORTED_MODULE_2__.v5.DNS);
}
function isUuid(value) {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_2__.validate)(value);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ flattenJSON)
/* harmony export */ });
/* unused harmony export getDataType */
/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15081);
/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_isValid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61369);
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55510);



function flattenJSON(eventData, keyValues = [], parentKey = "") {
    return Object.keys(eventData).reduce((acc, key)=>{
        const value = eventData[key];
        const type = typeof eventData[key];
        // nested object
        if (value && type === "object" && !Array.isArray(value) && !date_fns_isValid__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
            flattenJSON(value, acc.keyValues, getKeyName(key, parentKey));
        } else {
            createKey(getKeyName(key, parentKey), value, acc);
        }
        return acc;
    }, {
        keyValues,
        parentKey
    }).keyValues;
}
function getDataType(value) {
    let type = typeof value;
    if (type === "string" && date_fns_isValid__WEBPACK_IMPORTED_MODULE_0___default()(value) || date_fns_isValid__WEBPACK_IMPORTED_MODULE_0___default()(date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1___default()(value))) {
        type = "date";
    }
    return type;
}
function createKey(key, value, acc) {
    const type = getDataType(value);
    let dynamicDataType = null;
    switch(type){
        case "number":
            dynamicDataType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .DATA_TYPE */ .h6.number;
            break;
        case "string":
            dynamicDataType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .DATA_TYPE */ .h6.string;
            break;
        case "boolean":
            dynamicDataType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .DATA_TYPE */ .h6.boolean;
            value = value ? "true" : "false";
            break;
        case "date":
            dynamicDataType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .DATA_TYPE */ .h6.date;
            break;
        case "object":
            dynamicDataType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .DATA_TYPE */ .h6.array;
            value = JSON.stringify(value);
            break;
        default:
            dynamicDataType = _constants__WEBPACK_IMPORTED_MODULE_2__/* .DATA_TYPE */ .h6.string;
            break;
    }
    acc.keyValues.push({
        key,
        value,
        dynamicDataType
    });
}
function getKeyName(key, parentKey) {
    if (!parentKey) {
        return key;
    }
    return `${parentKey}.${key}`;
}


/***/ }),

/***/ 80645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J5: () => (/* binding */ getAllowedUnits),
  XJ: () => (/* binding */ getMinimumUnit),
  l7: () => (/* binding */ maxDate)
});

// UNUSED EXPORTS: CUSTOM_FORMATS, TIME_UNIT, formatDate, getDateArray, getDateFromString, getDateLength, getDateRangeValues, getLocalTime, getTimezone, incrementDateRange, minDate, parseDateRange

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__(68362);
// EXTERNAL MODULE: external "date-fns/addMinutes"
var addMinutes_ = __webpack_require__(45569);
var addMinutes_default = /*#__PURE__*/__webpack_require__.n(addMinutes_);
// EXTERNAL MODULE: external "date-fns/addHours"
var addHours_ = __webpack_require__(97309);
var addHours_default = /*#__PURE__*/__webpack_require__.n(addHours_);
// EXTERNAL MODULE: external "date-fns/addDays"
var addDays_ = __webpack_require__(66011);
var addDays_default = /*#__PURE__*/__webpack_require__.n(addDays_);
// EXTERNAL MODULE: external "date-fns/addMonths"
var addMonths_ = __webpack_require__(54538);
var addMonths_default = /*#__PURE__*/__webpack_require__.n(addMonths_);
// EXTERNAL MODULE: external "date-fns/addYears"
var addYears_ = __webpack_require__(74403);
var addYears_default = /*#__PURE__*/__webpack_require__.n(addYears_);
// EXTERNAL MODULE: external "date-fns/subHours"
var subHours_ = __webpack_require__(97863);
// EXTERNAL MODULE: external "date-fns/subDays"
var subDays_ = __webpack_require__(95358);
// EXTERNAL MODULE: external "date-fns/subMonths"
var subMonths_ = __webpack_require__(61360);
// EXTERNAL MODULE: external "date-fns/subYears"
var subYears_ = __webpack_require__(75809);
// EXTERNAL MODULE: external "date-fns/startOfMinute"
var startOfMinute_ = __webpack_require__(58535);
var startOfMinute_default = /*#__PURE__*/__webpack_require__.n(startOfMinute_);
// EXTERNAL MODULE: external "date-fns/startOfHour"
var startOfHour_ = __webpack_require__(26538);
var startOfHour_default = /*#__PURE__*/__webpack_require__.n(startOfHour_);
// EXTERNAL MODULE: external "date-fns/startOfDay"
var startOfDay_ = __webpack_require__(7585);
var startOfDay_default = /*#__PURE__*/__webpack_require__.n(startOfDay_);
// EXTERNAL MODULE: external "date-fns/startOfWeek"
var startOfWeek_ = __webpack_require__(2659);
// EXTERNAL MODULE: external "date-fns/startOfMonth"
var startOfMonth_ = __webpack_require__(45914);
var startOfMonth_default = /*#__PURE__*/__webpack_require__.n(startOfMonth_);
// EXTERNAL MODULE: external "date-fns/startOfYear"
var startOfYear_ = __webpack_require__(92559);
var startOfYear_default = /*#__PURE__*/__webpack_require__.n(startOfYear_);
// EXTERNAL MODULE: external "date-fns/endOfHour"
var endOfHour_ = __webpack_require__(71463);
// EXTERNAL MODULE: external "date-fns/endOfDay"
var endOfDay_ = __webpack_require__(40557);
// EXTERNAL MODULE: external "date-fns/endOfWeek"
var endOfWeek_ = __webpack_require__(63864);
// EXTERNAL MODULE: external "date-fns/endOfMonth"
var endOfMonth_ = __webpack_require__(96924);
// EXTERNAL MODULE: external "date-fns/endOfYear"
var endOfYear_ = __webpack_require__(55018);
// EXTERNAL MODULE: external "date-fns/differenceInMinutes"
var differenceInMinutes_ = __webpack_require__(69472);
var differenceInMinutes_default = /*#__PURE__*/__webpack_require__.n(differenceInMinutes_);
// EXTERNAL MODULE: external "date-fns/differenceInHours"
var differenceInHours_ = __webpack_require__(40581);
var differenceInHours_default = /*#__PURE__*/__webpack_require__.n(differenceInHours_);
// EXTERNAL MODULE: external "date-fns/differenceInCalendarDays"
var differenceInCalendarDays_ = __webpack_require__(14521);
var differenceInCalendarDays_default = /*#__PURE__*/__webpack_require__.n(differenceInCalendarDays_);
// EXTERNAL MODULE: external "date-fns/differenceInCalendarMonths"
var differenceInCalendarMonths_ = __webpack_require__(61829);
var differenceInCalendarMonths_default = /*#__PURE__*/__webpack_require__.n(differenceInCalendarMonths_);
// EXTERNAL MODULE: external "date-fns/differenceInCalendarYears"
var differenceInCalendarYears_ = __webpack_require__(96016);
var differenceInCalendarYears_default = /*#__PURE__*/__webpack_require__.n(differenceInCalendarYears_);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__(14384);
// EXTERNAL MODULE: external "date-fns/max"
var max_ = __webpack_require__(90986);
var max_default = /*#__PURE__*/__webpack_require__.n(max_);
// EXTERNAL MODULE: external "date-fns/min"
var min_ = __webpack_require__(78542);
// EXTERNAL MODULE: external "date-fns/isDate"
var isDate_ = __webpack_require__(35646);
var isDate_default = /*#__PURE__*/__webpack_require__.n(isDate_);
// EXTERNAL MODULE: external "date-fns/subWeeks"
var subWeeks_ = __webpack_require__(62695);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(45564);
;// CONCATENATED MODULE: ./src/lib/lang.js

const languages = {
    "ar-SA": {
        label: "العربية",
        dateLocale: locale_.arSA,
        dir: "rtl"
    },
    "be-BY": {
        label: "Беларуская",
        dateLocale: locale_.be
    },
    "bn-BD": {
        label: "বাংলা",
        dateLocale: locale_.bn
    },
    "ca-ES": {
        label: "Catal\xe0",
        dateLocale: locale_.ca
    },
    "cs-CZ": {
        label: "Čeština",
        dateLocale: locale_.cs
    },
    "da-DK": {
        label: "Dansk",
        dateLocale: locale_.da
    },
    "de-CH": {
        label: "Schwiizerd\xfctsch",
        dateLocale: locale_.de
    },
    "de-DE": {
        label: "Deutsch",
        dateLocale: locale_.de
    },
    "el-GR": {
        label: "Ελληνικά",
        dateLocale: locale_.el
    },
    "en-GB": {
        label: "English (UK)",
        dateLocale: locale_.enGB
    },
    "en-US": {
        label: "English (US)",
        dateLocale: locale_.enUS
    },
    "es-MX": {
        label: "Espa\xf1ol",
        dateLocale: locale_.es
    },
    "fa-IR": {
        label: "فارسی",
        dateLocale: locale_.faIR,
        dir: "rtl"
    },
    "fi-FI": {
        label: "Suomi",
        dateLocale: locale_.fi
    },
    "fo-FO": {
        label: "F\xf8royskt"
    },
    "fr-FR": {
        label: "Fran\xe7ais",
        dateLocale: locale_.fr
    },
    "ga-ES": {
        label: "Galacian (Spain)",
        dateLocale: locale_.es
    },
    "he-IL": {
        label: "עברית",
        dateLocale: locale_.he
    },
    "hi-IN": {
        label: "हिन्दी",
        dateLocale: locale_.hi
    },
    "hr-HR": {
        label: "Hrvatski",
        dateLocale: locale_.hr
    },
    "hu-HU": {
        label: "Hungarian",
        dateLocale: locale_.hu
    },
    "id-ID": {
        label: "Bahasa Indonesia",
        dateLocale: locale_.id
    },
    "it-IT": {
        label: "Italiano",
        dateLocale: locale_.it
    },
    "ja-JP": {
        label: "日本語",
        dateLocale: locale_.ja
    },
    "km-KH": {
        label: "ភាសាខ្មែរ",
        dateLocale: locale_.km
    },
    "ko-KR": {
        label: "한국어",
        dateLocale: locale_.ko
    },
    "lt-LT": {
        label: "Lietuvių",
        dateLocale: locale_.lt
    },
    "mn-MN": {
        label: "Монгол",
        dateLocale: locale_.mn
    },
    "ms-MY": {
        label: "Malay",
        dateLocale: locale_.ms
    },
    "my-MM": {
        label: "မြန်မာဘာသာ",
        dateLocale: locale_.enUS
    },
    "nl-NL": {
        label: "Nederlands",
        dateLocale: locale_.nl
    },
    "nb-NO": {
        label: "Norsk Bokm\xe5l",
        dateLocale: locale_.nb
    },
    "pl-PL": {
        label: "Polski",
        dateLocale: locale_.pl
    },
    "pt-BR": {
        label: "Portugu\xeas do Brasil",
        dateLocale: locale_.ptBR
    },
    "pt-PT": {
        label: "Portugu\xeas",
        dateLocale: locale_.pt
    },
    "ro-RO": {
        label: "Rom\xe2nă",
        dateLocale: locale_.ro
    },
    "ru-RU": {
        label: "Русский",
        dateLocale: locale_.ru
    },
    "si-LK": {
        label: "සිංහල",
        dateLocale: locale_.id
    },
    "sk-SK": {
        label: "Slovenčina",
        dateLocale: locale_.sk
    },
    "sl-SI": {
        label: "Slovenščina",
        dateLocale: locale_.sl
    },
    "sv-SE": {
        label: "Svenska",
        dateLocale: locale_.sv
    },
    "ta-IN": {
        label: "தமிழ்",
        dateLocale: locale_.ta
    },
    "th-TH": {
        label: "ภาษาไทย",
        dateLocale: locale_.th
    },
    "tr-TR": {
        label: "T\xfcrk\xe7e",
        dateLocale: locale_.tr
    },
    "uk-UA": {
        label: "українська",
        dateLocale: locale_.uk
    },
    "ur-PK": {
        label: "Urdu (Pakistan)",
        dateLocale: locale_.uk,
        dir: "rtl"
    },
    "vi-VN": {
        label: "Tiếng Việt",
        dateLocale: locale_.vi
    },
    "zh-CN": {
        label: "中文",
        dateLocale: locale_.zhCN
    },
    "zh-TW": {
        label: "中文(繁體)",
        dateLocale: locale_.zhTW
    }
};
function lang_getDateLocale(locale) {
    return languages[locale]?.dateLocale || enUS;
}
function getTextDirection(locale) {
    return languages[locale]?.dir || "ltr";
}

;// CONCATENATED MODULE: ./src/lib/date.ts
































const TIME_UNIT = {
    minute: "minute",
    hour: "hour",
    day: "day",
    week: "week",
    month: "month",
    year: "year"
};
const dateFuncs = {
    minute: [
        (differenceInMinutes_default()),
        (addMinutes_default()),
        (startOfMinute_default())
    ],
    hour: [
        (differenceInHours_default()),
        (addHours_default()),
        (startOfHour_default())
    ],
    day: [
        (differenceInCalendarDays_default()),
        (addDays_default()),
        (startOfDay_default())
    ],
    month: [
        (differenceInCalendarMonths_default()),
        (addMonths_default()),
        (startOfMonth_default())
    ],
    year: [
        (differenceInCalendarYears_default()),
        (addYears_default()),
        (startOfYear_default())
    ]
};
function getTimezone() {
    return moment.tz.guess();
}
function getLocalTime(t) {
    return addMinutes(new Date(t), new Date().getTimezoneOffset());
}
function parseDateRange(value, locale = "en-US") {
    if (typeof value === "object") {
        return value;
    }
    if (value === "all") {
        return {
            startDate: new Date(0),
            endDate: new Date(1),
            value
        };
    }
    if (value?.startsWith?.("range")) {
        const [, startTime, endTime] = value.split(":");
        const startDate = new Date(+startTime);
        const endDate = new Date(+endTime);
        return {
            ...getDateRangeValues(startDate, endDate),
            value
        };
    }
    const now = new Date();
    const dateLocale = getDateLocale(locale);
    const match = value?.match?.(/^(?<num>[0-9-]+)(?<unit>hour|day|week|month|year)$/);
    if (!match) return null;
    const { num, unit } = match.groups;
    const selectedUnit = {
        num,
        unit
    };
    if (+num === 1) {
        switch(unit){
            case "day":
                return {
                    startDate: startOfDay(now),
                    endDate: endOfDay(now),
                    unit: "hour",
                    value,
                    selectedUnit
                };
            case "week":
                return {
                    startDate: startOfWeek(now, {
                        locale: dateLocale
                    }),
                    endDate: endOfWeek(now, {
                        locale: dateLocale
                    }),
                    unit: "day",
                    value,
                    selectedUnit
                };
            case "month":
                return {
                    startDate: startOfMonth(now),
                    endDate: endOfMonth(now),
                    unit: "day",
                    value,
                    selectedUnit
                };
            case "year":
                return {
                    startDate: startOfYear(now),
                    endDate: endOfYear(now),
                    unit: "month",
                    value,
                    selectedUnit
                };
        }
    }
    if (+num === -1) {
        switch(unit){
            case "day":
                return {
                    startDate: subDays(startOfDay(now), 1),
                    endDate: subDays(endOfDay(now), 1),
                    unit: "hour",
                    value,
                    selectedUnit
                };
            case "week":
                return {
                    startDate: subDays(startOfWeek(now, {
                        locale: dateLocale
                    }), 7),
                    endDate: subDays(endOfWeek(now, {
                        locale: dateLocale
                    }), 1),
                    unit: "day",
                    value,
                    selectedUnit
                };
            case "month":
                return {
                    startDate: subMonths(startOfMonth(now), 1),
                    endDate: subMonths(endOfMonth(now), 1),
                    unit: "day",
                    value,
                    selectedUnit
                };
            case "year":
                return {
                    startDate: subYears(startOfYear(now), 1),
                    endDate: subYears(endOfYear(now), 1),
                    unit: "month",
                    value,
                    selectedUnit
                };
        }
    }
    switch(unit){
        case "day":
            return {
                startDate: subDays(startOfDay(now), num - 1),
                endDate: endOfDay(now),
                unit,
                value,
                selectedUnit
            };
        case "hour":
            return {
                startDate: subHours(startOfHour(now), num - 1),
                endDate: endOfHour(now),
                unit,
                value,
                selectedUnit
            };
    }
}
function incrementDateRange(value, increment) {
    const { startDate, endDate, selectedUnit } = value;
    const { num, unit } = selectedUnit;
    const sub = num * increment;
    switch(unit){
        case "hour":
            return {
                ...value,
                startDate: subHours(startDate, sub),
                endDate: subHours(endDate, sub),
                value: "range"
            };
        case "day":
            return {
                ...value,
                startDate: subDays(startDate, sub),
                endDate: subDays(endDate, sub),
                value: "range"
            };
        case "week":
            return {
                ...value,
                startDate: subWeeks(startDate, sub),
                endDate: subWeeks(endDate, sub),
                value: "range"
            };
        case "month":
            return {
                ...value,
                startDate: subMonths(startDate, sub),
                endDate: subMonths(endDate, sub),
                value: "range"
            };
        case "year":
            return {
                ...value,
                startDate: subYears(startDate, sub),
                endDate: subYears(endDate, sub),
                value: "range"
            };
    }
}
function getAllowedUnits(startDate, endDate) {
    const units = [
        "minute",
        "hour",
        "day",
        "month",
        "year"
    ];
    const minUnit = getMinimumUnit(startDate, endDate);
    const index = units.indexOf(minUnit);
    return index >= 0 ? units.splice(index) : [];
}
function getMinimumUnit(startDate, endDate) {
    if (differenceInMinutes_default()(endDate, startDate) <= 60) {
        return "minute";
    } else if (differenceInHours_default()(endDate, startDate) <= 48) {
        return "hour";
    } else if (differenceInCalendarDays_default()(endDate, startDate) <= 90) {
        return "day";
    } else if (differenceInCalendarMonths_default()(endDate, startDate) <= 24) {
        return "month";
    }
    return "year";
}
function getDateRangeValues(startDate, endDate) {
    return {
        startDate: startOfDay(startDate),
        endDate: endOfDay(endDate),
        unit: getMinimumUnit(startDate, endDate)
    };
}
function getDateFromString(str) {
    const [ymd, hms] = str.split(" ");
    const [year, month, day] = ymd.split("-");
    if (hms) {
        const [hour, min, sec] = hms.split(":");
        return new Date(year, month - 1, day, hour, min, sec);
    }
    return new Date(year, month - 1, day);
}
function getDateArray(data, startDate, endDate, unit) {
    const arr = [];
    const [diff, add, normalize] = dateFuncs[unit];
    const n = diff(endDate, startDate) + 1;
    function findData(date) {
        const d = data.find(({ x })=>{
            return normalize(getDateFromString(x)).getTime() === date.getTime();
        });
        return d?.y || 0;
    }
    for(let i = 0; i < n; i++){
        const t = normalize(add(startDate, i));
        const y = findData(t);
        arr.push({
            x: t,
            y
        });
    }
    return arr;
}
function getDateLength(startDate, endDate, unit) {
    const [diff] = dateFuncs[unit];
    return diff(endDate, startDate) + 1;
}
const CUSTOM_FORMATS = {
    "en-US": {
        p: "ha",
        pp: "h:mm:ss"
    },
    "fr-FR": {
        "M/d": "d/M",
        "MMM d": "d MMM",
        "EEE M/d": "EEE d/M"
    }
};
function formatDate(date, str, locale = "en-US") {
    return format(typeof date === "string" ? new Date(date) : date, CUSTOM_FORMATS?.[locale]?.[str] || str, {
        locale: getDateLocale(locale)
    });
}
function maxDate(...args) {
    return max_default()(args.filter((n)=>isDate_default()(n)));
}
function minDate(...args) {
    return min(args.filter((n)=>isDate(n)));
}


/***/ }),

/***/ 56130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dm: () => (/* binding */ MYSQL),
/* harmony export */   EQ: () => (/* binding */ notImplemented),
/* harmony export */   NS: () => (/* binding */ KAFKA),
/* harmony export */   PQ: () => (/* binding */ POSTGRESQL),
/* harmony export */   Tk: () => (/* binding */ getDatabaseType),
/* harmony export */   Vn: () => (/* binding */ runQuery),
/* harmony export */   e9: () => (/* binding */ PRISMA),
/* harmony export */   n4: () => (/* binding */ KAFKA_PRODUCER),
/* harmony export */   xO: () => (/* binding */ CLICKHOUSE)
/* harmony export */ });
const PRISMA = "prisma";
const POSTGRESQL = "postgresql";
const MYSQL = "mysql";
const CLICKHOUSE = "clickhouse";
const KAFKA = "kafka";
const KAFKA_PRODUCER = "kafka-producer";
// Fixes issue with converting bigint values
BigInt.prototype.toJSON = function() {
    return Number(this);
};
function getDatabaseType(url = process.env.DATABASE_URL) {
    const type = url && url.split(":")[0];
    if (type === "postgres") {
        return POSTGRESQL;
    }
    return type;
}
async function runQuery(queries) {
    const db = getDatabaseType(process.env.CLICKHOUSE_URL || process.env.DATABASE_URL);
    if (db === POSTGRESQL || db === MYSQL) {
        return queries[PRISMA]();
    }
    if (db === CLICKHOUSE) {
        if (queries[KAFKA]) {
            return queries[KAFKA]();
        }
        return queries[CLICKHOUSE]();
    }
}
function notImplemented() {
    throw new Error("Not implemented.");
}


/***/ }),

/***/ 4249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I_: () => (/* binding */ getIpAddress),
/* harmony export */   nQ: () => (/* binding */ getClientInfo)
/* harmony export */ });
/* unused harmony exports getDevice, getLocation */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var request_ip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52316);
/* harmony import */ var request_ip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(request_ip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43791);
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is_localhost_ip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9028);
/* harmony import */ var is_localhost_ip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is_localhost_ip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var maxmind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85524);
/* harmony import */ var maxmind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(maxmind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55510);







let lookup;
function getIpAddress(req) {
    // Custom header
    if (req.headers[process.env.CLIENT_IP_HEADER]) {
        return req.headers[process.env.CLIENT_IP_HEADER];
    } else if (req.headers["cf-connecting-ip"]) {
        return req.headers["cf-connecting-ip"];
    }
    return (0,request_ip__WEBPACK_IMPORTED_MODULE_1__.getClientIp)(req);
}
function getDevice(screen, os) {
    if (!screen) return;
    const [width] = screen.split("x");
    if (_constants__WEBPACK_IMPORTED_MODULE_6__/* .DESKTOP_OS */ .Yp.includes(os)) {
        if (os === "Chrome OS" || width < _constants__WEBPACK_IMPORTED_MODULE_6__/* .DESKTOP_SCREEN_WIDTH */ .Av) {
            return "laptop";
        }
        return "desktop";
    } else if (_constants__WEBPACK_IMPORTED_MODULE_6__/* .MOBILE_OS */ .Ty.includes(os)) {
        if (os === "Amazon OS" || width > _constants__WEBPACK_IMPORTED_MODULE_6__/* .MOBILE_SCREEN_WIDTH */ .q9) {
            return "tablet";
        }
        return "mobile";
    }
    if (width >= _constants__WEBPACK_IMPORTED_MODULE_6__/* .DESKTOP_SCREEN_WIDTH */ .Av) {
        return "desktop";
    } else if (width >= _constants__WEBPACK_IMPORTED_MODULE_6__/* .LAPTOP_SCREEN_WIDTH */ .uv) {
        return "laptop";
    } else if (width >= _constants__WEBPACK_IMPORTED_MODULE_6__/* .MOBILE_SCREEN_WIDTH */ .q9) {
        return "tablet";
    } else {
        return "mobile";
    }
}
function getRegionCode(country, region) {
    if (!country || !region) {
        return undefined;
    }
    return region.includes("-") ? region : `${country}-${region}`;
}
async function getLocation(ip, req) {
    // Ignore local ips
    if (await is_localhost_ip__WEBPACK_IMPORTED_MODULE_3___default()(ip)) {
        return;
    }
    // Cloudflare headers
    if (req.headers["cf-ipcountry"]) {
        const country = (0,next_basics__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(req.headers["cf-ipcountry"]);
        const subdivision1 = (0,next_basics__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(req.headers["cf-region-code"]);
        const city = (0,next_basics__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(req.headers["cf-ipcity"]);
        return {
            country,
            subdivision1: getRegionCode(country, subdivision1),
            city
        };
    }
    // Vercel headers
    if (req.headers["x-vercel-ip-country"]) {
        const country = (0,next_basics__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(req.headers["x-vercel-ip-country"]);
        const subdivision1 = (0,next_basics__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(req.headers["x-vercel-ip-country-region"]);
        const city = (0,next_basics__WEBPACK_IMPORTED_MODULE_5__.safeDecodeURIComponent)(req.headers["x-vercel-ip-city"]);
        return {
            country,
            subdivision1: getRegionCode(country, subdivision1),
            city
        };
    }
    // Database lookup
    if (!lookup) {
        const dir = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "geo");
        lookup = await maxmind__WEBPACK_IMPORTED_MODULE_4___default().open(path__WEBPACK_IMPORTED_MODULE_0___default().resolve(dir, "GeoLite2-City.mmdb"));
    }
    const result = lookup.get(ip);
    if (result) {
        return {
            country: result.country?.iso_code ?? result?.registered_country?.iso_code,
            subdivision1: result.subdivisions?.[0]?.iso_code,
            subdivision2: result.subdivisions?.[1]?.names?.en,
            city: result.city?.names?.en
        };
    }
}
async function getClientInfo(req, { screen }) {
    const userAgent = req.headers["user-agent"];
    const ip = getIpAddress(req);
    const location = await getLocation(ip, req);
    const country = location?.country;
    const subdivision1 = location?.subdivision1;
    const subdivision2 = location?.subdivision2;
    const city = location?.city;
    const browser = (0,detect_browser__WEBPACK_IMPORTED_MODULE_2__.browserName)(userAgent);
    const os = (0,detect_browser__WEBPACK_IMPORTED_MODULE_2__.detectOS)(userAgent);
    const device = getDevice(screen, os);
    return {
        userAgent,
        browser,
        os,
        ip,
        country,
        subdivision1,
        subdivision2,
        city,
        device
    };
}


/***/ }),

/***/ 66501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70400);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96974);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44543);
/* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kafkajs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dateformat__WEBPACK_IMPORTED_MODULE_0__]);
dateformat__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const log = debug__WEBPACK_IMPORTED_MODULE_1___default()("umami:kafka");
let kafka;
let producer;
const enabled = Boolean(process.env.KAFKA_URL && process.env.KAFKA_BROKER);
function getClient() {
    const { username, password } = new URL(process.env.KAFKA_URL);
    const brokers = process.env.KAFKA_BROKER.split(",");
    const ssl = username && password ? {
        ssl: {
            checkServerIdentity: ()=>undefined,
            ca: [
                process.env.CA_CERT
            ],
            key: process.env.CLIENT_KEY,
            cert: process.env.CLIENT_CERT
        },
        sasl: {
            mechanism: "plain",
            username,
            password
        }
    } : {};
    const client = new kafkajs__WEBPACK_IMPORTED_MODULE_2__.Kafka({
        clientId: "umami",
        brokers: brokers,
        connectionTimeout: 3000,
        logLevel: kafkajs__WEBPACK_IMPORTED_MODULE_2__.logLevel.ERROR,
        ...ssl
    });
    if (false) {}
    log("Kafka initialized");
    return client;
}
async function getProducer() {
    const producer = kafka.producer();
    await producer.connect();
    if (false) {}
    log("Kafka producer initialized");
    return producer;
}
function getDateFormat(date, format) {
    return (0,dateformat__WEBPACK_IMPORTED_MODULE_0__["default"])(date, format ? format : "UTC:yyyy-mm-dd HH:MM:ss");
}
async function sendMessage(message, topic) {
    await connect();
    return producer.send({
        topic,
        messages: [
            {
                value: JSON.stringify(message)
            }
        ],
        acks: -1
    });
}
async function sendMessages(messages, topic) {
    await connect();
    await producer.send({
        topic,
        messages: messages.map((a)=>{
            return {
                value: JSON.stringify(a)
            };
        }),
        acks: 1
    });
}
async function connect() {
    if (!kafka) {
        kafka = process.env.KAFKA_URL && process.env.KAFKA_BROKER && (global[lib_db__WEBPACK_IMPORTED_MODULE_3__/* .KAFKA */ .NS] || getClient());
        if (kafka) {
            producer = global[lib_db__WEBPACK_IMPORTED_MODULE_3__/* .KAFKA_PRODUCER */ .n4] || await getProducer();
        }
    }
    return kafka;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    enabled,
    client: kafka,
    producer,
    log,
    connect,
    getDateFormat,
    sendMessage,
    sendMessages
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dF: () => (/* binding */ loadSession),
/* harmony export */   wh: () => (/* binding */ loadWebsite)
/* harmony export */ });
/* unused harmony export loadUser */
/* harmony import */ var lib_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73471);
/* harmony import */ var queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_cache__WEBPACK_IMPORTED_MODULE_0__, queries__WEBPACK_IMPORTED_MODULE_1__]);
([lib_cache__WEBPACK_IMPORTED_MODULE_0__, queries__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function loadWebsite(websiteId) {
    let website;
    if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
        website = await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.fetchWebsite(websiteId);
    } else {
        website = await (0,queries__WEBPACK_IMPORTED_MODULE_1__/* .getWebsiteById */ .k3)(websiteId);
    }
    if (!website || website.deletedAt) {
        return null;
    }
    return website;
}
async function loadSession(sessionId) {
    let session;
    if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
        session = await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.fetchSession(sessionId);
    } else {
        session = await (0,queries__WEBPACK_IMPORTED_MODULE_1__/* .getSession */ .Gg)(sessionId);
    }
    if (!session) {
        return null;
    }
    return session;
}
async function loadUser(userId) {
    let user;
    if (cache.enabled) {
        user = await cache.fetchUser(userId);
    } else {
        user = await getUserById(userId);
    }
    if (!user || user.deletedAt) {
        return null;
    }
    return user;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _w: () => (/* binding */ useValidate),
/* harmony export */   aC: () => (/* binding */ useAuth),
/* harmony export */   kP: () => (/* binding */ useSession),
/* harmony export */   mS: () => (/* binding */ useCors)
/* harmony export */ });
/* harmony import */ var _umami_redis_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86505);
/* harmony import */ var _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umami_redis_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96974);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89225);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55510);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30249);
/* harmony import */ var lib_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49217);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_auth__WEBPACK_IMPORTED_MODULE_3__, lib_crypto__WEBPACK_IMPORTED_MODULE_5__, lib_session__WEBPACK_IMPORTED_MODULE_6__, _queries__WEBPACK_IMPORTED_MODULE_8__]);
([lib_auth__WEBPACK_IMPORTED_MODULE_3__, lib_crypto__WEBPACK_IMPORTED_MODULE_5__, lib_session__WEBPACK_IMPORTED_MODULE_6__, _queries__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const log = debug__WEBPACK_IMPORTED_MODULE_2___default()("umami:middleware");
const useCors = (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.createMiddleware)(cors__WEBPACK_IMPORTED_MODULE_1___default()({
    // Cache CORS preflight request 24 hours by default
    maxAge: process.env.CORS_MAX_AGE || 86400
}));
const useSession = (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.createMiddleware)(async (req, res, next)=>{
    try {
        const session = await (0,lib_session__WEBPACK_IMPORTED_MODULE_6__/* .findSession */ .J)(req);
        if (!session) {
            log("useSession: Session not found");
            return (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.badRequest)(res, "Session not found.");
        }
        req.session = session;
    } catch (e) {
        if (e.message === "Usage Limit.") {
            return (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.tooManyRequest)(res, e.message);
        }
        return (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.badRequest)(res, e.message);
    }
    next();
});
const useAuth = (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.createMiddleware)(async (req, res, next)=>{
    const token = (0,lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .getAuthToken */ .bW)(req);
    const payload = (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.parseSecureToken)(token, (0,lib_crypto__WEBPACK_IMPORTED_MODULE_5__/* .secret */ .zY)());
    const shareToken = await (0,lib_auth__WEBPACK_IMPORTED_MODULE_3__/* .parseShareToken */ .wn)(req);
    let user = null;
    const { userId, authKey, grant } = payload || {};
    if ((0,lib_crypto__WEBPACK_IMPORTED_MODULE_5__/* .isUuid */ .K8)(userId)) {
        user = await (0,_queries__WEBPACK_IMPORTED_MODULE_8__/* .getUserById */ .GA)(userId);
    } else if ((_umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().enabled) && authKey) {
        user = await _umami_redis_client__WEBPACK_IMPORTED_MODULE_0___default().get(authKey);
    }
    if (false) {}
    if (!user?.id && !shareToken) {
        log("useAuth: User not authorized");
        return (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.unauthorized)(res);
    }
    if (user) {
        user.isAdmin = user.role === lib_constants__WEBPACK_IMPORTED_MODULE_4__/* .ROLES */ .K$.admin;
    }
    req.auth = {
        user,
        grant,
        token,
        shareToken,
        authKey
    };
    next();
});
const useValidate = (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.createMiddleware)(async (req, res, next)=>{
    try {
        const { yup } = req;
        yup[req.method] && yup[req.method].validateSync({
            ...req.query,
            ...req.body
        });
    } catch (e) {
        return (0,next_basics__WEBPACK_IMPORTED_MODULE_7__.badRequest)(res, e.message);
    }
    next();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _umami_prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33009);
/* harmony import */ var _umami_prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umami_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68362);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81699);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80645);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_load__WEBPACK_IMPORTED_MODULE_4__]);
_load__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MYSQL_DATE_FORMATS = {
    minute: "%Y-%m-%d %H:%i:00",
    hour: "%Y-%m-%d %H:00:00",
    day: "%Y-%m-%d",
    month: "%Y-%m-01",
    year: "%Y-01-01"
};
const POSTGRESQL_DATE_FORMATS = {
    minute: "YYYY-MM-DD HH24:MI:00",
    hour: "YYYY-MM-DD HH24:00:00",
    day: "YYYY-MM-DD",
    month: "YYYY-MM-01",
    year: "YYYY-01-01"
};
function getAddMinutesQuery(field, minutes) {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)(process.env.DATABASE_URL);
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ) {
        return `${field} + interval '${minutes} minute'`;
    }
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm) {
        return `DATE_ADD(${field}, interval ${minutes} minute)`;
    }
}
function getDayDiffQuery(field1, field2) {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)(process.env.DATABASE_URL);
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ) {
        return `${field1}::date - ${field2}::date`;
    }
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm) {
        return `DATEDIFF(${field1}, ${field2})`;
    }
}
function getCastColumnQuery(field, type) {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)(process.env.DATABASE_URL);
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ) {
        return `${field}::${type}`;
    }
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm) {
        return `${field}`;
    }
}
function getDateQuery(field, unit, timezone) {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)();
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ) {
        if (timezone) {
            return `to_char(date_trunc('${unit}', ${field} at time zone '${timezone}'), '${POSTGRESQL_DATE_FORMATS[unit]}')`;
        }
        return `to_char(date_trunc('${unit}', ${field}), '${POSTGRESQL_DATE_FORMATS[unit]}')`;
    }
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm) {
        if (timezone) {
            const tz = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(timezone).format("Z");
            return `date_format(convert_tz(${field},'+00:00','${tz}'), '${MYSQL_DATE_FORMATS[unit]}')`;
        }
        return `date_format(${field}, '${MYSQL_DATE_FORMATS[unit]}')`;
    }
}
function getTimestampIntervalQuery(field) {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)();
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ) {
        return `floor(extract(epoch from max(${field}) - min(${field})))`;
    }
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm) {
        return `floor(unix_timestamp(max(${field})) - unix_timestamp(min(${field})))`;
    }
}
function mapFilter(column, operator, name, type = "varchar") {
    switch(operator){
        case _constants__WEBPACK_IMPORTED_MODULE_3__/* .OPERATORS */ .fP.equals:
            return `${column} = {{${name}::${type}}}`;
        case _constants__WEBPACK_IMPORTED_MODULE_3__/* .OPERATORS */ .fP.notEquals:
            return `${column} != {{${name}::${type}}}`;
        default:
            return "";
    }
}
function getFilterQuery(filters = {}, options = {}) {
    const query = Object.keys(filters).reduce((arr, name)=>{
        const value = filters[name];
        const operator = value?.filter ?? _constants__WEBPACK_IMPORTED_MODULE_3__/* .OPERATORS */ .fP.equals;
        const column = _constants__WEBPACK_IMPORTED_MODULE_3__/* .FILTER_COLUMNS */ .MI[name] ?? options?.columns?.[name];
        if (value !== undefined && column) {
            arr.push(`and ${mapFilter(column, operator, name)}`);
            if (name === "referrer") {
                arr.push("and (website_event.referrer_domain != {{websiteDomain}} or website_event.referrer_domain is null)");
            }
        }
        return arr;
    }, []);
    return query.join("\n");
}
function normalizeFilters(filters = {}) {
    return Object.keys(filters).reduce((obj, key)=>{
        const value = filters[key];
        obj[key] = value?.value ?? value;
        return obj;
    }, {});
}
async function parseFilters(websiteId, filters = {}, options = {}) {
    const website = await (0,_load__WEBPACK_IMPORTED_MODULE_4__/* .loadWebsite */ .wh)(websiteId);
    return {
        joinSession: options?.joinSession || Object.keys(filters).find((key)=>_constants__WEBPACK_IMPORTED_MODULE_3__/* .SESSION_COLUMNS */ .H1.includes(key)) ? `inner join session on website_event.session_id = session.session_id` : "",
        filterQuery: getFilterQuery(filters, options),
        params: {
            ...normalizeFilters(filters),
            websiteId,
            startDate: (0,_date__WEBPACK_IMPORTED_MODULE_5__/* .maxDate */ .l7)(filters.startDate, website.resetAt),
            websiteDomain: website.domain
        }
    };
}
async function rawQuery(sql, data) {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)();
    const params = [];
    if (db !== lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ && db !== lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm) {
        return Promise.reject(new Error("Unknown database."));
    }
    const query = sql?.replaceAll(/\{\{\s*(\w+)(::\w+)?\s*\}\}/g, (...args)=>{
        const [, name, type] = args;
        params.push(data[name]);
        return db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .MYSQL */ .Dm ? "?" : `$${params.length}${type ?? ""}`;
    });
    return _umami_prisma_client__WEBPACK_IMPORTED_MODULE_0___default().rawQuery(query, params);
}
function getPageFilters(filters) {
    const { pageSize = 10, page = 1, orderBy } = filters || {};
    return [
        {
            ...pageSize > 0 && {
                take: pageSize,
                skip: pageSize * (page - 1)
            },
            ...orderBy && {
                orderBy: [
                    {
                        [orderBy]: "asc"
                    }
                ]
            }
        },
        {
            pageSize,
            page: +page,
            orderBy
        }
    ];
}
function getSearchMode() {
    const db = (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getDatabaseType */ .Tk)();
    if (db === lib_db__WEBPACK_IMPORTED_MODULE_2__/* .POSTGRESQL */ .PQ) {
        return {
            mode: "insensitive"
        };
    }
    return {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ...(_umami_prisma_client__WEBPACK_IMPORTED_MODULE_0___default()),
    getAddMinutesQuery,
    getDayDiffQuery,
    getCastColumnQuery,
    getDateQuery,
    getTimestampIntervalQuery,
    getFilterQuery,
    parseFilters,
    getPageFilters,
    getSearchMode,
    rawQuery
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49217:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ findSession)
/* harmony export */ });
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30249);
/* harmony import */ var lib_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4249);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37451);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73471);
/* harmony import */ var _clickhouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25196);
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_0__, queries__WEBPACK_IMPORTED_MODULE_3__, _cache__WEBPACK_IMPORTED_MODULE_4__, _clickhouse__WEBPACK_IMPORTED_MODULE_5__, _load__WEBPACK_IMPORTED_MODULE_6__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_0__, queries__WEBPACK_IMPORTED_MODULE_3__, _cache__WEBPACK_IMPORTED_MODULE_4__, _clickhouse__WEBPACK_IMPORTED_MODULE_5__, _load__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function findSession(req) {
    const { payload } = req.body;
    if (!payload) {
        throw new Error("Invalid payload.");
    }
    // Check if cache token is passed
    const cacheToken = req.headers["x-umami-cache"];
    if (cacheToken) {
        const result = await (0,next_basics__WEBPACK_IMPORTED_MODULE_2__.parseToken)(cacheToken, (0,lib_crypto__WEBPACK_IMPORTED_MODULE_0__/* .secret */ .zY)());
        if (result) {
            await checkUserBlock(result?.ownerId);
            return result;
        }
    }
    // Verify payload
    const { website: websiteId, hostname, screen, language } = payload;
    // Check the hostname value for legality to eliminate dirty data
    const validHostnameRegex = /^[\w-.]+$/;
    if (!validHostnameRegex.test(hostname)) {
        throw new Error("Invalid hostname.");
    }
    if (!(0,lib_crypto__WEBPACK_IMPORTED_MODULE_0__/* .isUuid */ .K8)(websiteId)) {
        throw new Error("Invalid website ID.");
    }
    // Find website
    const website = await (0,_load__WEBPACK_IMPORTED_MODULE_6__/* .loadWebsite */ .wh)(websiteId);
    if (!website) {
        throw new Error(`Website not found: ${websiteId}.`);
    }
    await checkUserBlock(website.userId);
    const { userAgent, browser, os, ip, country, subdivision1, subdivision2, city, device } = await (0,lib_detect__WEBPACK_IMPORTED_MODULE_1__/* .getClientInfo */ .nQ)(req, payload);
    const sessionId = (0,lib_crypto__WEBPACK_IMPORTED_MODULE_0__/* .uuid */ .Vj)(websiteId, hostname, ip, userAgent);
    // Clickhouse does not require session lookup
    if (_clickhouse__WEBPACK_IMPORTED_MODULE_5__["default"].enabled) {
        return {
            id: sessionId,
            websiteId,
            hostname,
            browser,
            os: os,
            device,
            screen,
            language,
            country,
            subdivision1,
            subdivision2,
            city,
            ownerId: website.userId
        };
    }
    // Find session
    let session = await (0,_load__WEBPACK_IMPORTED_MODULE_6__/* .loadSession */ .dF)(sessionId);
    // Create a session if not found
    if (!session) {
        try {
            session = await (0,queries__WEBPACK_IMPORTED_MODULE_3__/* .createSession */ .ed)({
                id: sessionId,
                websiteId,
                hostname,
                browser,
                os,
                device,
                screen,
                language,
                country,
                subdivision1,
                subdivision2,
                city
            });
        } catch (e) {
            if (!e.message.toLowerCase().includes("unique constraint")) {
                throw e;
            }
        }
    }
    return {
        ...session,
        ownerId: website.userId
    };
}
async function checkUserBlock(userId) {
    if (process.env.ENABLE_BLOCKER && await _cache__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.fetchUserBlock(userId)) {
        await _cache__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.incrementUserBlock(userId);
        throw new Error("Usage Limit.");
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GR: () => (/* binding */ deleteReport),
/* harmony export */   GV: () => (/* binding */ getReportsByWebsiteId),
/* harmony export */   Pt: () => (/* binding */ updateReport),
/* harmony export */   W4: () => (/* binding */ getReportById),
/* harmony export */   Zn: () => (/* binding */ createReport),
/* harmony export */   nd: () => (/* binding */ getReportsByUserId)
/* harmony export */ });
/* unused harmony export getReports */
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55510);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_1__]);
lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function createReport(data) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.report.create({
        data
    });
}
async function getReportById(reportId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.report.findUnique({
        where: {
            id: reportId
        }
    });
}
async function updateReport(reportId, data) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.report.update({
        where: {
            id: reportId
        },
        data
    });
}
async function deleteReport(reportId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.report.delete({
        where: {
            id: reportId
        }
    });
}
async function getReports(ReportSearchFilter, options) {
    const { userId, websiteId, includeTeams, filter, filterType = lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all } = ReportSearchFilter;
    const mode = lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchMode();
    const where = {
        ...userId && {
            userId: userId
        },
        ...websiteId && {
            websiteId: websiteId
        },
        AND: [
            {
                OR: [
                    {
                        ...userId && {
                            userId: userId
                        }
                    },
                    {
                        ...includeTeams && {
                            website: {
                                teamWebsite: {
                                    some: {
                                        team: {
                                            teamUser: {
                                                some: {
                                                    userId
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            {
                OR: [
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.name) && {
                            name: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.description) && {
                            description: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.type) && {
                            type: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG["user:username"]) && {
                            user: {
                                username: {
                                    startsWith: filter,
                                    ...mode
                                }
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG["website:name"]) && {
                            website: {
                                name: {
                                    startsWith: filter,
                                    ...mode
                                }
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .REPORT_FILTER_TYPES */ .MG["website:domain"]) && {
                            website: {
                                domain: {
                                    startsWith: filter,
                                    ...mode
                                }
                            }
                        }
                    }
                ]
            }
        ]
    };
    const [pageFilters, getParameters] = lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].getPageFilters(ReportSearchFilter);
    const reports = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.report.findMany({
        where,
        ...pageFilters,
        ...options?.include && {
            include: options.include
        }
    });
    const count = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.report.count({
        where
    });
    return {
        data: reports,
        count,
        ...getParameters
    };
}
async function getReportsByUserId(userId, filter) {
    return getReports({
        userId,
        ...filter
    }, {
        include: {
            website: {
                select: {
                    domain: true,
                    userId: true
                }
            }
        }
    });
}
async function getReportsByWebsiteId(websiteId, filter) {
    return getReports({
        websiteId,
        ...filter
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cm: () => (/* binding */ createTeam),
/* harmony export */   aS: () => (/* binding */ getTeamByAccessCode),
/* harmony export */   fC: () => (/* binding */ deleteTeam),
/* harmony export */   fs: () => (/* binding */ updateTeam),
/* harmony export */   mW: () => (/* binding */ getTeamById),
/* harmony export */   t3: () => (/* binding */ getTeamsByUserId)
/* harmony export */ });
/* unused harmony export getTeams */
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55510);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30249);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getTeam(where, options = {}) {
    const { includeTeamUser = false } = options;
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.team.findFirst({
        where,
        include: {
            teamUser: includeTeamUser
        }
    });
}
function getTeamById(teamId, options = {}) {
    return getTeam({
        id: teamId
    }, options);
}
function getTeamByAccessCode(accessCode, options = {}) {
    return getTeam({
        accessCode
    }, options);
}
async function createTeam(data, userId) {
    const { id } = data;
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].transaction([
        lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.team.create({
            data
        }),
        lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.teamUser.create({
            data: {
                id: (0,lib_crypto__WEBPACK_IMPORTED_MODULE_1__/* .uuid */ .Vj)(),
                teamId: id,
                userId,
                role: lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .ROLES */ .K$.teamOwner
            }
        })
    ]);
}
async function updateTeam(teamId, data) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.team.update({
        where: {
            id: teamId
        },
        data: {
            ...data,
            updatedAt: new Date()
        }
    });
}
async function deleteTeam(teamId) {
    const { client, transaction } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    return transaction([
        client.teamWebsite.deleteMany({
            where: {
                teamId
            }
        }),
        client.teamUser.deleteMany({
            where: {
                teamId
            }
        }),
        client.team.delete({
            where: {
                id: teamId
            }
        })
    ]);
}
async function getTeams(TeamSearchFilter, options) {
    const { userId, filter, filterType = lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .TEAM_FILTER_TYPES */ .$r.all } = TeamSearchFilter;
    const mode = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].getSearchMode();
    const where = {
        ...userId && {
            teamUser: {
                some: {
                    userId
                }
            }
        },
        ...filter && {
            AND: {
                OR: [
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .TEAM_FILTER_TYPES */ .$r.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .TEAM_FILTER_TYPES */ .$r.name) && {
                            name: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .TEAM_FILTER_TYPES */ .$r.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .TEAM_FILTER_TYPES */ .$r["user:username"]) && {
                            teamUser: {
                                some: {
                                    role: lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .ROLES */ .K$.teamOwner,
                                    user: {
                                        username: {
                                            startsWith: filter,
                                            ...mode
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    };
    const [pageFilters, getParameters] = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].getPageFilters({
        orderBy: "name",
        ...TeamSearchFilter
    });
    const teams = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.team.findMany({
        where: {
            ...where
        },
        ...pageFilters,
        ...options?.include && {
            include: options?.include
        }
    });
    const count = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.team.count({
        where
    });
    return {
        data: teams,
        count,
        ...getParameters
    };
}
async function getTeamsByUserId(userId, filter) {
    return getTeams({
        userId,
        ...filter
    }, {
        include: {
            teamUser: {
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true
                        }
                    }
                }
            }
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PW: () => (/* binding */ getTeamUser),
/* harmony export */   r4: () => (/* binding */ createTeamUser),
/* harmony export */   vA: () => (/* binding */ deleteTeamUser)
/* harmony export */ });
/* unused harmony exports getTeamUserById, getTeamUsers, updateTeamUser, deleteTeamUserByUserId */
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30249);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_1__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function getTeamUserById(teamUserId) {
    return prisma.client.teamUser.findUnique({
        where: {
            id: teamUserId
        }
    });
}
async function getTeamUser(teamId, userId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.teamUser.findFirst({
        where: {
            teamId,
            userId
        }
    });
}
async function getTeamUsers(teamId) {
    return prisma.client.teamUser.findMany({
        where: {
            teamId
        },
        include: {
            user: {
                select: {
                    id: true,
                    username: true
                }
            }
        }
    });
}
async function createTeamUser(userId, teamId, role) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.teamUser.create({
        data: {
            id: (0,lib_crypto__WEBPACK_IMPORTED_MODULE_0__/* .uuid */ .Vj)(),
            userId,
            teamId,
            role
        }
    });
}
async function updateTeamUser(teamUserId, data) {
    return prisma.client.teamUser.update({
        where: {
            id: teamUserId
        },
        data
    });
}
async function deleteTeamUser(teamId, userId) {
    const { client, transaction } = lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"];
    return transaction([
        client.teamWebsite.deleteMany({
            where: {
                teamId: teamId,
                website: {
                    userId: userId
                }
            }
        }),
        client.teamUser.deleteMany({
            where: {
                teamId,
                userId
            }
        })
    ]);
}
async function deleteTeamUserByUserId(userId, teamId) {
    return prisma.client.teamUser.deleteMany({
        where: {
            userId,
            teamId
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rx: () => (/* binding */ createTeamWebsites),
/* harmony export */   Vr: () => (/* binding */ deleteTeamWebsite),
/* harmony export */   iJ: () => (/* binding */ getTeamWebsite),
/* harmony export */   j: () => (/* binding */ findTeamWebsiteByUserId)
/* harmony export */ });
/* unused harmony exports getTeamWebsites, createTeamWebsite */
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55510);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30249);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getTeamWebsite(teamId, websiteId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.teamWebsite.findFirst({
        where: {
            teamId,
            websiteId
        },
        include: {
            website: true
        }
    });
}
async function findTeamWebsiteByUserId(websiteId, userId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.teamWebsite.findFirst({
        where: {
            websiteId,
            team: {
                teamUser: {
                    some: {
                        userId
                    }
                }
            }
        }
    });
}
async function getTeamWebsites(teamId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.teamWebsite.findMany({
        where: {
            teamId
        },
        include: {
            team: {
                include: {
                    teamUser: {
                        where: {
                            role: lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .ROLES */ .K$.teamOwner
                        }
                    }
                }
            },
            website: {
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true
                        }
                    }
                }
            }
        },
        orderBy: [
            {
                team: {
                    name: "asc"
                }
            }
        ]
    });
}
async function createTeamWebsite(teamId, websiteId) {
    return prisma.client.teamWebsite.create({
        data: {
            id: uuid(),
            teamId,
            websiteId
        }
    });
}
async function createTeamWebsites(teamId, websiteIds) {
    const currentTeamWebsites = await getTeamWebsites(teamId);
    // filter out websites that already exists on the team
    const addWebsites = websiteIds.filter((websiteId)=>!currentTeamWebsites.some((a)=>a.websiteId === websiteId));
    const teamWebsites = addWebsites.map((a)=>{
        return {
            id: (0,lib_crypto__WEBPACK_IMPORTED_MODULE_1__/* .uuid */ .Vj)(),
            teamId,
            websiteId: a
        };
    });
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.teamWebsite.createMany({
        data: teamWebsites
    });
}
async function deleteTeamWebsite(teamId, websiteId) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.teamWebsite.deleteMany({
        where: {
            teamId,
            websiteId
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GA: () => (/* binding */ getUserById),
/* harmony export */   Nq: () => (/* binding */ updateUser),
/* harmony export */   Rf: () => (/* binding */ getUsers),
/* harmony export */   Sf: () => (/* binding */ getUsersByTeamId),
/* harmony export */   dQ: () => (/* binding */ getUserByUsername),
/* harmony export */   h8: () => (/* binding */ deleteUser),
/* harmony export */   r4: () => (/* binding */ createUser)
/* harmony export */ });
/* harmony import */ var lib_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73471);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55510);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_cache__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_cache__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getUser(where, options = {}) {
    const { includePassword = false, showDeleted = false } = options;
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.user.findFirst({
        where: {
            ...where,
            ...showDeleted ? {} : {
                deletedAt: null
            }
        },
        select: {
            id: true,
            username: true,
            password: includePassword,
            role: true,
            createdAt: true
        }
    });
}
async function getUserById(userId, options = {}) {
    return getUser({
        id: userId
    }, options);
}
async function getUserByUsername(username, options = {}) {
    return getUser({
        username
    }, options);
}
async function getUsers(searchFilter, options) {
    const { teamId, filter, filterType = lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_FILTER_TYPES */ .E0.all } = searchFilter;
    const mode = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].getSearchMode();
    const where = {
        ...teamId && {
            teamUser: {
                some: {
                    teamId
                }
            }
        },
        ...filter && {
            AND: {
                OR: [
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_FILTER_TYPES */ .E0.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_FILTER_TYPES */ .E0.username) && {
                            username: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    }
                ]
            }
        }
    };
    const [pageFilters, getParameters] = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].getPageFilters({
        orderBy: "username",
        ...searchFilter
    });
    const users = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.user.findMany({
        where: {
            ...where,
            deletedAt: null
        },
        ...pageFilters,
        ...options?.include && {
            include: options.include
        }
    }).then((a)=>{
        return a.map(({ password, ...rest })=>rest);
    });
    const count = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.user.count({
        where: {
            ...where,
            deletedAt: null
        }
    });
    return {
        data: users,
        count,
        ...getParameters
    };
}
async function getUsersByTeamId(teamId, filter) {
    return getUsers({
        teamId,
        ...filter
    });
}
async function createUser(data) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.user.create({
        data,
        select: {
            id: true,
            username: true,
            role: true
        }
    });
}
async function updateUser(data, where) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.user.update({
        where,
        data,
        select: {
            id: true,
            username: true,
            role: true,
            createdAt: true
        }
    });
}
async function deleteUser(userId) {
    const { client } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    const cloudMode = process.env.CLOUD_MODE;
    const websites = await client.website.findMany({
        where: {
            userId
        }
    });
    let websiteIds = [];
    if (websites.length > 0) {
        websiteIds = websites.map((a)=>a.id);
    }
    const teams = await client.team.findMany({
        where: {
            teamUser: {
                some: {
                    userId,
                    role: lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROLES */ .K$.teamOwner
                }
            }
        }
    });
    const teamIds = teams.map((a)=>a.id);
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].transaction([
        client.eventData.deleteMany({
            where: {
                websiteId: {
                    in: websiteIds
                }
            }
        }),
        client.websiteEvent.deleteMany({
            where: {
                websiteId: {
                    in: websiteIds
                }
            }
        }),
        client.session.deleteMany({
            where: {
                websiteId: {
                    in: websiteIds
                }
            }
        }),
        client.teamWebsite.deleteMany({
            where: {
                OR: [
                    {
                        websiteId: {
                            in: websiteIds
                        }
                    },
                    {
                        teamId: {
                            in: teamIds
                        }
                    }
                ]
            }
        }),
        client.teamWebsite.deleteMany({
            where: {
                teamId: {
                    in: teamIds
                }
            }
        }),
        client.teamUser.deleteMany({
            where: {
                OR: [
                    {
                        teamId: {
                            in: teamIds
                        }
                    },
                    {
                        userId
                    }
                ]
            }
        }),
        client.team.deleteMany({
            where: {
                id: {
                    in: teamIds
                }
            }
        }),
        client.report.deleteMany({
            where: {
                OR: [
                    {
                        websiteId: {
                            in: websiteIds
                        }
                    },
                    {
                        userId
                    }
                ]
            }
        }),
        cloudMode ? client.website.updateMany({
            data: {
                deletedAt: new Date()
            },
            where: {
                id: {
                    in: websiteIds
                }
            }
        }) : client.website.deleteMany({
            where: {
                id: {
                    in: websiteIds
                }
            }
        }),
        cloudMode ? client.user.update({
            data: {
                username: (0,next_basics__WEBPACK_IMPORTED_MODULE_3__.getRandomChars)(32),
                deletedAt: new Date()
            },
            where: {
                id: userId
            }
        }) : client.user.delete({
            where: {
                id: userId
            }
        })
    ]).then(async (data)=>{
        if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
            const ids = websites.map((a)=>a.id);
            for(let i = 0; i < ids.length; i++){
                await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.deleteWebsite(`website:${ids[i]}`);
            }
        }
        return data;
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AN: () => (/* binding */ getUserWebsites),
/* harmony export */   Ee: () => (/* binding */ deleteWebsite),
/* harmony export */   Ku: () => (/* binding */ updateWebsite),
/* harmony export */   br: () => (/* binding */ getWebsitesByUserId),
/* harmony export */   bz: () => (/* binding */ createWebsite),
/* harmony export */   ie: () => (/* binding */ getWebsiteByShareId),
/* harmony export */   jf: () => (/* binding */ resetWebsite),
/* harmony export */   k3: () => (/* binding */ getWebsiteById),
/* harmony export */   w: () => (/* binding */ getWebsitesByTeamId)
/* harmony export */ });
/* unused harmony export getWebsites */
/* harmony import */ var lib_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73471);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55510);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_cache__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_cache__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getWebsite(where) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.findUnique({
        where
    });
}
async function getWebsiteById(id) {
    return getWebsite({
        id
    });
}
async function getWebsiteByShareId(shareId) {
    return getWebsite({
        shareId
    });
}
async function getWebsites(WebsiteSearchFilter, options) {
    const { userId, teamId, includeTeams, onlyTeams, filter, filterType = lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .WEBSITE_FILTER_TYPES */ .I2.all } = WebsiteSearchFilter;
    const mode = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].getSearchMode();
    const where = {
        ...teamId && {
            teamWebsite: {
                some: {
                    teamId
                }
            }
        },
        AND: [
            {
                OR: [
                    {
                        ...userId && !onlyTeams && {
                            userId
                        }
                    },
                    {
                        ...(includeTeams || onlyTeams) && {
                            AND: [
                                {
                                    teamWebsite: {
                                        some: {
                                            team: {
                                                teamUser: {
                                                    some: {
                                                        userId
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    userId: {
                                        not: userId
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            {
                OR: [
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .WEBSITE_FILTER_TYPES */ .I2.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .WEBSITE_FILTER_TYPES */ .I2.name) && {
                            name: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    },
                    {
                        ...(filterType === lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .WEBSITE_FILTER_TYPES */ .I2.all || filterType === lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .WEBSITE_FILTER_TYPES */ .I2.domain) && {
                            domain: {
                                startsWith: filter,
                                ...mode
                            }
                        }
                    }
                ]
            }
        ]
    };
    const [pageFilters, getParameters] = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].getPageFilters({
        orderBy: "name",
        ...WebsiteSearchFilter
    });
    const websites = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.findMany({
        where: {
            ...where,
            deletedAt: null
        },
        ...pageFilters,
        ...options?.include && {
            include: options.include
        }
    });
    const count = await lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.count({
        where: {
            ...where,
            deletedAt: null
        }
    });
    return {
        data: websites,
        count,
        ...getParameters
    };
}
async function getWebsitesByUserId(userId, filter) {
    return getWebsites({
        userId,
        ...filter
    }, {
        include: {
            teamWebsite: {
                include: {
                    team: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            user: {
                select: {
                    username: true,
                    id: true
                }
            }
        }
    });
}
async function getWebsitesByTeamId(teamId, filter) {
    return getWebsites({
        teamId,
        ...filter,
        includeTeams: true
    }, {
        include: {
            teamWebsite: {
                include: {
                    team: {
                        include: {
                            teamUser: {
                                where: {
                                    role: lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .ROLES */ .K$.teamOwner
                                }
                            }
                        }
                    }
                }
            },
            user: {
                select: {
                    id: true,
                    username: true
                }
            }
        }
    });
}
async function getUserWebsites(userId, options) {
    const { rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    if (options?.includeTeams) {
        const websites = await rawQuery(`
      select
        website_id as "id",
        name,
        domain,
        share_id as "shareId",
        reset_at as "resetAt",
        user_id as "userId",
        created_at as "createdAt",
        updated_at as "updatedAt",
        deleted_at as "deletedAt",
        null as "teamId",
        null as "teamName"
      from website
      where user_id = {{userId::uuid}}
        and deleted_at is null
      union
      select           
        w.website_id as "id",
        w.name,
        w.domain,
        w.share_id as "shareId",
        w.reset_at as "resetAt",
        w.user_id as "userId",
        w.created_at as "createdAt",
        w.updated_at as "updatedAt",
        w.deleted_at as "deletedAt",
        t.team_id as "teamId",
        t.name as "teamName"
      from website w
      inner join team_website tw
        on tw.website_id = w.website_id
      inner join team t
        on t.team_id = tw.team_id
      inner join team_user tu 
        on tu.team_id = tw.team_id
      where tu.user_id = {{userId::uuid}}
        and w.deleted_at is null
      `, {
            userId
        });
        return websites.reduce((arr, item)=>{
            if (!arr.find(({ id })=>id === item.id)) {
                return arr.concat(item);
            }
            return arr;
        }, []);
    }
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.findMany({
        where: {
            userId,
            deletedAt: null
        },
        orderBy: [
            {
                name: "asc"
            }
        ]
    });
}
async function createWebsite(data) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.create({
        data
    }).then(async (data)=>{
        if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
            await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storeWebsite(data);
        }
        return data;
    });
}
async function updateWebsite(websiteId, data) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.update({
        where: {
            id: websiteId
        },
        data
    });
}
async function resetWebsite(websiteId) {
    const { client, transaction } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    return transaction([
        client.eventData.deleteMany({
            where: {
                websiteId
            }
        }),
        client.websiteEvent.deleteMany({
            where: {
                websiteId
            }
        }),
        client.session.deleteMany({
            where: {
                websiteId
            }
        }),
        client.website.update({
            where: {
                id: websiteId
            },
            data: {
                resetAt: new Date()
            }
        })
    ]).then(async (data)=>{
        if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
            await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storeWebsite(data[2]);
        }
        return data;
    });
}
async function deleteWebsite(websiteId) {
    const { client, transaction } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    const cloudMode = process.env.CLOUD_MODE;
    return transaction([
        client.eventData.deleteMany({
            where: {
                websiteId
            }
        }),
        client.websiteEvent.deleteMany({
            where: {
                websiteId
            }
        }),
        client.session.deleteMany({
            where: {
                websiteId
            }
        }),
        client.teamWebsite.deleteMany({
            where: {
                websiteId
            }
        }),
        client.report.deleteMany({
            where: {
                websiteId
            }
        }),
        cloudMode ? lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.website.update({
            data: {
                deletedAt: new Date()
            },
            where: {
                id: websiteId
            }
        }) : client.website.delete({
            where: {
                id: websiteId
            }
        })
    ]).then(async (data)=>{
        if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
            await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.deleteWebsite(websiteId);
        }
        return data;
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getEventDataEvents)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getEventDataEvents(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { rawQuery, parseFilters } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { event } = filters;
    const { params } = await parseFilters(websiteId, filters);
    if (event) {
        return rawQuery(`
      select
        website_event.event_name as "eventName",
        event_data.event_key as "fieldName",
        event_data.data_type as "dataType",
        event_data.string_value as "fieldValue",
        count(*) as "total"
      from event_data
      inner join website_event
        on website_event.event_id = event_data.website_event_id
      where event_data.website_id = {{websiteId::uuid}}
        and event_data.created_at between {{startDate}} and {{endDate}}
        and website_event.event_name = {{event}}
      group by website_event.event_name, event_data.event_key, event_data.data_type, event_data.string_value
      order by 1 asc, 2 asc, 3 asc, 4 desc
      `, params);
    }
    return rawQuery(`
    select
      website_event.event_name as "eventName",
      event_data.event_key as "fieldName",
      event_data.data_type as "dataType",
      count(*) as "total"
    from event_data
    inner join website_event
      on website_event.event_id = event_data.website_event_id
    where event_data.website_id = {{websiteId::uuid}}
      and event_data.created_at between {{startDate}} and {{endDate}}
    group by website_event.event_name, event_data.event_key, event_data.data_type
    order by 1 asc, 2 asc
    limit 100
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { rawQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { event } = filters;
    const { params } = await parseFilters(websiteId, filters);
    if (event) {
        return rawQuery(`
      select
        event_name as eventName,
        event_key as fieldName,
        data_type as dataType,
        string_value as fieldValue,
        count(*) as total
      from event_data
      where website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime} and {endDate:DateTime}
        and event_name = {event:String}
      group by event_key, data_type, string_value, event_name
      order by 1 asc, 2 asc, 3 asc, 4 desc
      limit 100
      `, params);
    }
    return rawQuery(`
    select
      event_name as eventName,
      event_key as fieldName,
      data_type as dataType,
      count(*) as total
    from event_data
    where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime} and {endDate:DateTime}
    group by event_key, data_type, event_name
    order by 1 asc, 2 asc
    limit 100
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getEventDataFields)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getEventDataFields(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { rawQuery, parseFilters } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, filters, {
        columns: {
            field: "event_key"
        }
    });
    return rawQuery(`
    select
      event_key as "fieldName",
      data_type as "dataType",
      string_value as "fieldValue",
      count(*) as "total"
    from event_data
    where website_id = {{websiteId::uuid}}
      and created_at between {{startDate}} and {{endDate}}
    ${filterQuery}
    group by event_key, data_type, string_value
    order by 3 desc, 2 desc, 1 asc
    limit 100
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { rawQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, filters, {
        columns: {
            field: "event_key"
        }
    });
    return rawQuery(`
    select
      event_key as fieldName,
      data_type as dataType,
      string_value as fieldValue,
      count(*) as total
    from event_data
    where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime} and {endDate:DateTime}
    ${filterQuery}
    group by event_key, data_type, string_value
    order by 3 desc, 2 desc, 1 asc
    limit 100
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ getEventDataStats)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getEventDataStats(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    }).then((results)=>results[0]);
}
async function relationalQuery(websiteId, filters) {
    const { rawQuery, parseFilters } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, filters);
    return rawQuery(`
    select 
      count(distinct t.website_event_id) as "events",
      count(distinct t.event_key) as "fields",
      sum(t.total) as "records"
    from (
      select
        website_event_id,
        event_key,
        count(*) as "total"
      from event_data
      where website_id = {{websiteId::uuid}}
        and created_at between {{startDate}} and {{endDate}}
      ${filterQuery}
      group by website_event_id, event_key
      ) as t
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { rawQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, filters);
    return rawQuery(`
    select 
      count(distinct t.event_id) as "events",
      count(distinct t.event_key) as "fields",
      sum(t.total) as "records"
    from (
      select
        event_id,
        event_key,
        count(*) as "total"
      from event_data
      where website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime} and {endDate:DateTime}
      ${filterQuery}
      group by event_id, event_key
      ) as t
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getEventDataUsage)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__]);
lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getEventDataUsage(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: lib_db__WEBPACK_IMPORTED_MODULE_1__/* .notImplemented */ .EQ,
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
function clickhouseQuery(websiteIds, startDate, endDate) {
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    return rawQuery(`
    select 
      website_id as websiteId,
      count(*) as count
    from event_data 
    where created_at between {startDate:DateTime64} and {endDate:DateTime64}
      and website_id in {websiteIds:Array(UUID)}
    group by website_id
    `, {
        websiteIds,
        startDate,
        endDate
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ saveEventData)
/* harmony export */ });
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55510);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30249);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var lib_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59650);
/* harmony import */ var lib_kafka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66501);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_kafka__WEBPACK_IMPORTED_MODULE_4__, lib_prisma__WEBPACK_IMPORTED_MODULE_5__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_kafka__WEBPACK_IMPORTED_MODULE_4__, lib_prisma__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function saveEventData(args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(args)
    });
}
async function relationalQuery(data) {
    const { websiteId, eventId, eventData } = data;
    const jsonKeys = (0,lib_data__WEBPACK_IMPORTED_MODULE_3__/* .flattenJSON */ .h)(eventData);
    // id, websiteEventId, eventStringValue
    const flattendData = jsonKeys.map((a)=>({
            id: (0,lib_crypto__WEBPACK_IMPORTED_MODULE_1__/* .uuid */ .Vj)(),
            websiteEventId: eventId,
            websiteId,
            eventKey: a.key,
            stringValue: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.number ? parseFloat(a.value).toFixed(4) : a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.date ? a.value.split(".")[0] + "Z" : a.value.toString(),
            numberValue: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.number ? a.value : null,
            dateValue: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.date ? new Date(a.value) : null,
            dataType: a.dynamicDataType
        }));
    return lib_prisma__WEBPACK_IMPORTED_MODULE_5__["default"].client.eventData.createMany({
        data: flattendData
    });
}
async function clickhouseQuery(data) {
    const { websiteId, sessionId, eventId, urlPath, eventName, eventData, createdAt } = data;
    const { getDateFormat, sendMessages } = lib_kafka__WEBPACK_IMPORTED_MODULE_4__["default"];
    const jsonKeys = (0,lib_data__WEBPACK_IMPORTED_MODULE_3__/* .flattenJSON */ .h)(eventData);
    const messages = jsonKeys.map((a)=>({
            website_id: websiteId,
            session_id: sessionId,
            event_id: eventId,
            url_path: urlPath,
            event_name: eventName,
            event_key: a.key,
            string_value: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.date ? getDateFormat(a.value, "isoUtcDateTime") : a.value.toString(),
            number_value: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.number ? a.value : null,
            date_value: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.date ? getDateFormat(a.value) : null,
            data_type: a.dynamicDataType,
            created_at: createdAt
        }));
    await sendMessages(messages, "event_data");
    return data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ getEventMetrics)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getEventMetrics(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { timezone = "utc", unit = "day" } = filters;
    const { rawQuery, getDateQuery, parseFilters } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.customEvent
    });
    return rawQuery(`
    select
      event_name x,
      ${getDateQuery("created_at", unit, timezone)} t,
      count(*) y
    from website_event
    ${joinSession}
    where website_id = {{websiteId::uuid}}
      and created_at between {{startDate}} and {{endDate}}
      and event_type = {{eventType}}
      ${filterQuery}
    group by 1, 2
    order by 2
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { timezone = "UTC", unit = "day" } = filters;
    const { rawQuery, getDateQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.customEvent
    });
    return rawQuery(`
    select
      event_name x,
      ${getDateQuery("created_at", unit, timezone)} t,
      count(*) y
    from website_event
    where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime} and {endDate:DateTime}
      and event_type = {eventType:UInt32}
      ${filterQuery}
    group by x, t
    order by t
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ getEventUsage)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__]);
lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function getEventUsage(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: lib_db__WEBPACK_IMPORTED_MODULE_1__/* .notImplemented */ .EQ,
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
function clickhouseQuery(websiteIds, startDate, endDate) {
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    return rawQuery(`
    select 
      website_id as websiteId,
      count(*) as count
    from website_event 
    where website_id in {websiteIds:Array(UUID)}
      and created_at between {startDate:DateTime64} and {endDate:DateTime64}
    group by website_id
    `, {
        websiteIds,
        startDate,
        endDate
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ getEvents)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function getEvents(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
function relationalQuery(websiteId, startDate, eventType) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"].client.websiteEvent.findMany({
        where: {
            websiteId,
            eventType,
            createdAt: {
                gte: startDate
            }
        }
    });
}
function clickhouseQuery(websiteId, startDate, eventType) {
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    return rawQuery(`
    select
      event_id as id,
      website_id as websiteId, 
      session_id as sessionId,
      created_at as createdAt,
      toUnixTimestamp(created_at) as timestamp,
      url_path as urlPath,
      referrer_domain as referrerDomain,
      event_name as eventName
    from website_event
    where website_id = {websiteId:UUID}
      and created_at >= {startDate:DateTime}
      and event_type = {eventType:UInt32}
    `, {
        websiteId,
        startDate,
        eventType
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93872:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ saveEvent)
/* harmony export */ });
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55510);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
/* harmony import */ var lib_kafka__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66501);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74445);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30249);
/* harmony import */ var queries_analytics_eventData_saveEventData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_kafka__WEBPACK_IMPORTED_MODULE_2__, lib_prisma__WEBPACK_IMPORTED_MODULE_3__, lib_crypto__WEBPACK_IMPORTED_MODULE_4__, queries_analytics_eventData_saveEventData__WEBPACK_IMPORTED_MODULE_5__]);
([lib_kafka__WEBPACK_IMPORTED_MODULE_2__, lib_prisma__WEBPACK_IMPORTED_MODULE_3__, lib_crypto__WEBPACK_IMPORTED_MODULE_4__, queries_analytics_eventData_saveEventData__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function saveEvent(args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: ()=>relationalQuery(args),
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(args)
    });
}
async function relationalQuery(data) {
    const { websiteId, sessionId, urlPath, urlQuery, referrerPath, referrerQuery, referrerDomain, eventName, eventData, pageTitle } = data;
    const websiteEventId = (0,lib_crypto__WEBPACK_IMPORTED_MODULE_4__/* .uuid */ .Vj)();
    const websiteEvent = lib_prisma__WEBPACK_IMPORTED_MODULE_3__["default"].client.websiteEvent.create({
        data: {
            id: websiteEventId,
            websiteId,
            sessionId,
            urlPath: urlPath?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            urlQuery: urlQuery?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            referrerPath: referrerPath?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            referrerQuery: referrerQuery?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            referrerDomain: referrerDomain?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            pageTitle,
            eventType: eventName ? lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_TYPE */ .Ze.customEvent : lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_TYPE */ .Ze.pageView,
            eventName: eventName ? eventName?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_NAME_LENGTH */ .r5) : null
        }
    });
    if (eventData) {
        await (0,queries_analytics_eventData_saveEventData__WEBPACK_IMPORTED_MODULE_5__/* .saveEventData */ .E)({
            websiteId,
            sessionId,
            eventId: websiteEventId,
            urlPath: urlPath?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            eventName: eventName?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_NAME_LENGTH */ .r5),
            eventData
        });
    }
    return websiteEvent;
}
async function clickhouseQuery(data) {
    const { websiteId, sessionId, urlPath, urlQuery, referrerPath, referrerQuery, referrerDomain, pageTitle, eventName, eventData, country, subdivision1, subdivision2, city, ...args } = data;
    const { getDateFormat, sendMessage } = lib_kafka__WEBPACK_IMPORTED_MODULE_2__["default"];
    const eventId = (0,lib_crypto__WEBPACK_IMPORTED_MODULE_4__/* .uuid */ .Vj)();
    const createdAt = getDateFormat(new Date());
    const message = {
        ...args,
        website_id: websiteId,
        session_id: sessionId,
        event_id: (0,lib_crypto__WEBPACK_IMPORTED_MODULE_4__/* .uuid */ .Vj)(),
        country: country,
        subdivision1: country && subdivision1 ? subdivision1.includes("-") ? subdivision1 : `${country}-${subdivision1}` : null,
        subdivision2: subdivision2,
        city: city,
        url_path: urlPath?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
        url_query: urlQuery?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
        referrer_path: referrerPath?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
        referrer_query: referrerQuery?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
        referrer_domain: referrerDomain?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
        page_title: pageTitle,
        event_type: eventName ? lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_TYPE */ .Ze.customEvent : lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_TYPE */ .Ze.pageView,
        event_name: eventName ? eventName?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_NAME_LENGTH */ .r5) : null,
        created_at: createdAt
    };
    await sendMessage(message, "event");
    if (eventData) {
        await (0,queries_analytics_eventData_saveEventData__WEBPACK_IMPORTED_MODULE_5__/* .saveEventData */ .E)({
            websiteId,
            sessionId,
            eventId,
            urlPath: urlPath?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .URL_LENGTH */ .t5),
            eventName: eventName?.substring(0, lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .EVENT_NAME_LENGTH */ .r5),
            eventData,
            createdAt
        });
    }
    return data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ getActiveVisitors)
/* harmony export */ });
/* harmony import */ var date_fns_subMinutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30829);
/* harmony import */ var date_fns_subMinutes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_subMinutes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_1__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_1__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getActiveVisitors(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_3__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_3__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_3__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId) {
    const { rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"];
    return rawQuery(`
    select count(distinct session_id) x
    from website_event
    where website_id = {{websiteId::uuid}}
    and created_at >= {{startAt}}
    `, {
        websiteId,
        startAt: date_fns_subMinutes__WEBPACK_IMPORTED_MODULE_0___default()(new Date(), 5)
    });
}
async function clickhouseQuery(websiteId) {
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__["default"];
    return rawQuery(`
    select
      count(distinct session_id) x
    from website_event
    where website_id = {websiteId:UUID}
      and created_at >= {startAt:DateTime}
    `, {
        websiteId,
        startAt: date_fns_subMinutes__WEBPACK_IMPORTED_MODULE_0___default()(new Date(), 5)
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getRealtimeData)
/* harmony export */ });
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68884);
/* harmony import */ var next_basics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_basics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var queries_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37451);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([queries_index__WEBPACK_IMPORTED_MODULE_1__]);
queries_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function getRealtimeData(websiteId, time) {
    const [pageviews, sessions, events] = await Promise.all([
        (0,queries_index__WEBPACK_IMPORTED_MODULE_1__/* .getEvents */ .vw)(websiteId, time, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_TYPE */ .Ze.pageView),
        (0,queries_index__WEBPACK_IMPORTED_MODULE_1__/* .getSessions */ .sD)(websiteId, time),
        (0,queries_index__WEBPACK_IMPORTED_MODULE_1__/* .getEvents */ .vw)(websiteId, time, lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_TYPE */ .Ze.customEvent)
    ]);
    const decorate = (id, data)=>{
        return data.map((props)=>({
                ...props,
                __id: (0,next_basics__WEBPACK_IMPORTED_MODULE_0__.md5)(id, ...Object.values(props)),
                __type: id,
                timestamp: props.timestamp ? props.timestamp * 1000 : new Date(props.createdAt).getTime()
            }));
    };
    return {
        pageviews: decorate("pageview", pageviews),
        sessions: decorate("session", sessions),
        events: decorate("event", events),
        timestamp: Date.now()
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ getValues)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getValues(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, column) {
    const { rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    return rawQuery(`
    select distinct ${column} as "value"
    from website_event
    inner join session
      on session.session_id = website_event.session_id
    where website_event.website_id = {{websiteId::uuid}}
    `, {
        websiteId
    });
}
async function clickhouseQuery(websiteId, column) {
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    return rawQuery(`
    select distinct ${column} as value
    from website_event
    where website_id = {websiteId:UUID}
    `, {
        websiteId
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getWebsiteDateRange)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getWebsiteDateRange(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId) {
    const { rawQuery, parseFilters } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { params } = await parseFilters(websiteId, {
        startDate: new Date(lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_RESET_DATE */ .Fq)
    });
    const result = await rawQuery(`
    select
      min(created_at) as mindate,
      max(created_at) as maxdate
    from website_event
    where website_id = {{websiteId::uuid}}
      and created_at >= {{startDate}}
    `, params);
    return result[0] ?? null;
}
async function clickhouseQuery(websiteId) {
    const { rawQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { params } = await parseFilters(websiteId, {
        startDate: new Date(lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_RESET_DATE */ .Fq)
    });
    const result = await rawQuery(`
    select
      min(created_at) as mindate,
      max(created_at) as maxdate
    from website_event
    where website_id = {websiteId:UUID}
      and created_at >= {startDate:DateTime}
    `, params);
    return result[0] ?? null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ getWebsiteStats)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getWebsiteStats(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { getDateQuery, getTimestampIntervalQuery, parseFilters, rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select
      sum(t.c) as "pageviews",
      count(distinct t.session_id) as "uniques",
      sum(case when t.c = 1 then 1 else 0 end) as "bounces",
      sum(t.time) as "totaltime"
    from (
      select
        website_event.session_id,
        ${getDateQuery("website_event.created_at", "hour")},
        count(*) as c,
        ${getTimestampIntervalQuery("website_event.created_at")} as "time"
      from website_event
      join website 
        on website_event.website_id = website.website_id
        ${joinSession}
      where website.website_id = {{websiteId::uuid}}
        and website_event.created_at between {{startDate}} and {{endDate}}
        and event_type = {{eventType}}
        ${filterQuery}
      group by 1, 2
    ) as t
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { rawQuery, getDateQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select 
      sum(t.c) as "pageviews",
      count(distinct t.session_id) as "uniques",
      sum(if(t.c = 1, 1, 0)) as "bounces",
      sum(if(max_time < min_time + interval 1 hour, max_time-min_time, 0)) as "totaltime"
    from (
      select
        session_id,
        ${getDateQuery("created_at", "day")} time_series,
        count(*) c,
        min(created_at) min_time,
        max(created_at) max_time
      from website_event
      where website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime} and {endDate:DateTime}
        and event_type = {eventType:UInt32}
        ${filterQuery}
      group by session_id, time_series
    ) as t;
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ getPageviewMetrics)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getPageviewMetrics(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, column, filters) {
    const { rawQuery, parseFilters } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: column === "event_name" ? lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.customEvent : lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    }, {
        joinSession: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SESSION_COLUMNS */ .H1.includes(column)
    });
    return rawQuery(`
    select ${column} x, count(*) y
    from website_event
    ${joinSession}
    where website_event.website_id = {{websiteId::uuid}}
      and website_event.created_at between {{startDate}} and {{endDate}}
      and event_type = {{eventType}}
      ${filterQuery}
    group by 1
    order by 2 desc
    limit 100
    `, params);
}
async function clickhouseQuery(websiteId, column, filters) {
    const { rawQuery, parseFilters } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: column === "event_name" ? lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.customEvent : lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select ${column} x, count(*) y
    from website_event
    where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime} and {endDate:DateTime}
      and event_type = {eventType:UInt32}
      ${filterQuery}
    group by x
    order by y desc
    limit 100
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getPageviewStats)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getPageviewStats(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { timezone = "utc", unit = "day" } = filters;
    const { getDateQuery, parseFilters, rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select
      ${getDateQuery("website_event.created_at", unit, timezone)} x,
      count(*) y
    from website_event
      ${joinSession}
    where website_event.website_id = {{websiteId::uuid}}
      and website_event.created_at between {{startDate}} and {{endDate}}
      and event_type = {{eventType}}
      ${filterQuery}
    group by 1
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { timezone = "UTC", unit = "day" } = filters;
    const { parseFilters, rawQuery, getDateStringQuery, getDateQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select
      ${getDateStringQuery("g.t", unit)} as x, 
      g.y as y
    from (
      select 
        ${getDateQuery("created_at", unit, timezone)} as t,
        count(*) as y
      from website_event
      where website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime} and {endDate:DateTime}
        and event_type = {eventType:UInt32}
        ${filterQuery}
      group by t
    ) as g
    order by t
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ getFunnel)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getFunnel(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, criteria) {
    const { windowMinutes, startDate, endDate, urls } = criteria;
    const { rawQuery, getAddMinutesQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    const { levelQuery, sumQuery } = getFunnelQuery(urls, windowMinutes);
    function getFunnelQuery(urls, windowMinutes) {
        return urls.reduce((pv, cv, i)=>{
            const levelNumber = i + 1;
            const startSum = i > 0 ? "union " : "";
            if (levelNumber >= 2) {
                pv.levelQuery += `
          , level${levelNumber} AS (
            select distinct we.session_id, we.created_at
            from level${i} l
            join website_event we
                on l.session_id = we.session_id
            where we.website_id = {{websiteId::uuid}}
                and we.created_at between l.created_at and ${getAddMinutesQuery(`l.created_at `, windowMinutes)}
                and we.referrer_path = {{${i - 1}}}
                and we.url_path = {{${i}}}
                and we.created_at <= {{endDate}}
          )`;
            }
            pv.sumQuery += `\n${startSum}select ${levelNumber} as level, count(distinct(session_id)) as count from level${levelNumber}`;
            return pv;
        }, {
            levelQuery: "",
            sumQuery: ""
        });
    }
    return rawQuery(`
    WITH level1 AS (
      select distinct session_id, created_at
      from website_event
      where website_id = {{websiteId::uuid}}
        and created_at between {{startDate}} and {{endDate}}
        and url_path = {{0}}
    )
    ${levelQuery}
    ${sumQuery}
    ORDER BY level;
    `, {
        websiteId,
        startDate,
        endDate,
        ...urls
    }).then((results)=>{
        return urls.map((a, i)=>({
                x: a,
                y: results[i]?.count || 0,
                z: (1 - Number(results[i]?.count) / Number(results[i - 1]?.count)) * 100 || 0
            }));
    });
}
async function clickhouseQuery(websiteId, criteria) {
    const { windowMinutes, startDate, endDate, urls } = criteria;
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { levelQuery, sumQuery, urlFilterQuery, urlParams } = getFunnelQuery(urls, windowMinutes);
    function getFunnelQuery(urls, windowMinutes) {
        return urls.reduce((pv, cv, i)=>{
            const levelNumber = i + 1;
            const startSum = i > 0 ? "union all " : "";
            const startFilter = i > 0 ? ", " : "";
            if (levelNumber >= 2) {
                pv.levelQuery += `\n
          , level${levelNumber} AS (
            select distinct y.session_id as session_id,
                y.url_path as url_path,
                y.referrer_path as referrer_path,
                y.created_at as created_at
            from level${i} x
            join level0 y
            on x.session_id = y.session_id
            where y.created_at between x.created_at and x.created_at + interval ${windowMinutes} minute
                and y.referrer_path = {url${i - 1}:String}
                and y.url_path = {url${i}:String}
          )`;
            }
            pv.sumQuery += `\n${startSum}select ${levelNumber} as level, count(distinct(session_id)) as count from level${levelNumber}`;
            pv.urlFilterQuery += `${startFilter}{url${i}:String} `;
            pv.urlParams[`url${i}`] = cv;
            return pv;
        }, {
            levelQuery: "",
            sumQuery: "",
            urlFilterQuery: "",
            urlParams: {}
        });
    }
    return rawQuery(`
    WITH level0 AS (
      select distinct session_id, url_path, referrer_path, created_at
      from umami.website_event
      where url_path in (${urlFilterQuery})
        and website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime64} and {endDate:DateTime64}
    ),
    level1 AS (
      select *
      from level0
      where url_path = {url0:String}
    )
    ${levelQuery}
    select *
    from (
      ${sumQuery} 
    ) ORDER BY level;
    `, {
        websiteId,
        startDate,
        endDate,
        ...urlParams
    }).then((results)=>{
        return urls.map((a, i)=>({
                x: a,
                y: results[i]?.count || 0,
                z: (1 - Number(results[i]?.count) / Number(results[i - 1]?.count)) * 100 || 0
            }));
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ getInsights)
/* harmony export */ });
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56130);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25196);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_1__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_1__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getInsights(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_0__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_0__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_0__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, fields, filters) {
    const { parseFilters, rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    }, {
        joinSession: !!fields.find(({ name })=>lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SESSION_COLUMNS */ .H1.includes(name))
    });
    return rawQuery(`
    select 
      ${parseFields(fields)}
    from website_event
      ${joinSession}
    where website_event.website_id = {{websiteId::uuid}}
      and website_event.created_at between {{startDate}} and {{endDate}}
      and website_event.event_type = {{eventType}}
      ${filterQuery}
    ${parseGroupBy(fields)}
    order by 1 desc, 2 desc
    limit 500
    `, params);
}
async function clickhouseQuery(websiteId, fields, filters) {
    const { parseFilters, rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_2__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select 
      ${parseFields(fields)}
    from website_event
    where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime} and {endDate:DateTime}
      and event_type = {eventType:UInt32}
      ${filterQuery}
    ${parseGroupBy(fields)}
    order by 1 desc, 2 desc
    limit 500
    `, params);
}
function parseFields(fields) {
    const query = fields.reduce((arr, field)=>{
        const { name } = field;
        return arr.concat(`${lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .FILTER_COLUMNS */ .MI[name]} as "${name}"`);
    }, [
        "count(*) as views",
        "count(distinct website_event.session_id) as visitors"
    ]);
    return query.join(",\n");
}
function parseGroupBy(fields) {
    if (!fields.length) {
        return "";
    }
    return `group by ${fields.map(({ name })=>lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .FILTER_COLUMNS */ .MI[name]).join(",")}`;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ getRetention)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getRetention(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { startDate, endDate, timezone = "UTC" } = filters;
    const { getDateQuery, getDayDiffQuery, getCastColumnQuery, rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    const unit = "day";
    return rawQuery(`
    WITH cohort_items AS (
      select session_id,
        ${getDateQuery("created_at", unit, timezone)} as cohort_date  
      from session 
      where website_id = {{websiteId::uuid}}
        and created_at between {{startDate}} and {{endDate}}
    ),
    user_activities AS (
      select distinct
        w.session_id,
        ${getDayDiffQuery(getDateQuery("created_at", unit, timezone), "c.cohort_date")} as day_number
      from website_event w
      join cohort_items c
      on w.session_id = c.session_id
      where website_id = {{websiteId::uuid}}
          and created_at between {{startDate}} and {{endDate}}
      ),
    cohort_size as (
      select cohort_date,
        count(*) as visitors
      from cohort_items
      group by 1
      order by 1
    ),
    cohort_date as (
      select
        c.cohort_date,
        a.day_number,
        count(*) as visitors
      from user_activities a
      join cohort_items c
      on a.session_id = c.session_id
      group by 1, 2
    )
    select
      c.cohort_date as date,
      c.day_number as day,
      s.visitors,
      c.visitors as "returnVisitors",
      ${getCastColumnQuery("c.visitors", "float")} * 100 / s.visitors  as percentage
    from cohort_date c
    join cohort_size s
    on c.cohort_date = s.cohort_date
    where c.day_number <= 31
    order by 1, 2`, {
        websiteId,
        startDate,
        endDate
    }).then((results)=>{
        return results.map((i)=>({
                ...i,
                percentage: Number(i.percentage) || 0
            }));
    });
}
async function clickhouseQuery(websiteId, filters) {
    const { startDate, endDate, timezone = "UTC" } = filters;
    const { getDateQuery, getDateStringQuery, rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    const unit = "day";
    return rawQuery(`
    WITH cohort_items AS (
      select
        min(${getDateQuery("created_at", unit, timezone)}) as cohort_date,
        session_id
      from website_event
      where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime64} and {endDate:DateTime64}
      group by session_id
    ),
    user_activities AS (
      select distinct
        w.session_id,
        (${getDateQuery("created_at", unit, timezone)} - c.cohort_date) / 86400 as day_number
      from website_event w
      join cohort_items c
      on w.session_id = c.session_id
      where website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime64} and {endDate:DateTime64}
    ),
    cohort_size as (
      select cohort_date,
        count(*) as visitors
      from cohort_items
      group by 1
      order by 1
    ),
    cohort_date as (
      select
        c.cohort_date,
        a.day_number,
        count(*) as visitors
      from user_activities a
      join cohort_items c
      on a.session_id = c.session_id
      group by 1, 2
    )
    select
      ${getDateStringQuery("c.cohort_date", unit)} as date,
      c.day_number as day,
      s.visitors as visitors,
      c.visitors returnVisitors,
      c.visitors * 100 / s.visitors as percentage
    from cohort_date c
    join cohort_size s
    on c.cohort_date = s.cohort_date
    where c.day_number <= 31
    order by 1, 2`, {
        websiteId,
        startDate,
        endDate
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createSession)
/* harmony export */ });
/* harmony import */ var lib_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73471);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_cache__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_1__]);
([lib_cache__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


async function createSession(data) {
    const { id, websiteId, hostname, browser, os, device, screen, language, country, subdivision1, subdivision2, city } = data;
    return lib_prisma__WEBPACK_IMPORTED_MODULE_1__["default"].client.session.create({
        data: {
            id,
            websiteId,
            hostname,
            browser,
            os,
            device,
            screen,
            language,
            country,
            subdivision1,
            subdivision2,
            city
        }
    }).then(async (data)=>{
        if (lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.enabled) {
            await lib_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storeSession(data);
        }
        return data;
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getSession)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__]);
lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getSession(id) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"].client.session.findUnique({
        where: {
            id
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63152:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ getSessionMetrics)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getSessionMetrics(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, column, filters) {
    const { parseFilters, rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    }, {
        joinSession: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .SESSION_COLUMNS */ .H1.includes(column)
    });
    const includeCountry = column === "city" || column === "subdivision1";
    return rawQuery(`
    select 
      ${column} x,
      count(*) y
      ${includeCountry ? ", country" : ""}
    from website_event
    ${joinSession}
    where website_event.website_id = {{websiteId::uuid}}
      and website_event.created_at between {{startDate}} and {{endDate}}
      and website_event.event_type = {{eventType}}
    ${filterQuery}
    group by 1 
    ${includeCountry ? ", 3" : ""}
    order by 2 desc
    limit 100`, params);
}
async function clickhouseQuery(websiteId, column, filters) {
    const { parseFilters, rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    const includeCountry = column === "city" || column === "subdivision1";
    return rawQuery(`
    select
      ${column} x,
      count(distinct session_id) y
      ${includeCountry ? ", country" : ""}
    from website_event
    where website_id = {websiteId:UUID}
      and created_at between {startDate:DateTime} and {endDate:DateTime}
      and event_type = {eventType:UInt32}
      ${filterQuery}
    group by x 
    ${includeCountry ? ", country" : ""}
    order by y desc
    limit 100
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8157:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getSessionStats)
/* harmony export */ });
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56130);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74445);
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__]);
([lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__, lib_prisma__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function getSessionStats(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_1__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_1__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, filters) {
    const { timezone = "utc", unit = "day" } = filters;
    const { getDateQuery, parseFilters, rawQuery } = lib_prisma__WEBPACK_IMPORTED_MODULE_2__["default"];
    const { filterQuery, joinSession, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select
      ${getDateQuery("website_event.created_at", unit, timezone)} x,
      count(distinct website_event.session_id) y
    from website_event
      ${joinSession}
    where website_event.website_id = {{websiteId::uuid}}
      and website_event.created_at between {{startDate}} and {{endDate}}
      and event_type = {{eventType}}
      ${filterQuery}
    group by 1
    `, params);
}
async function clickhouseQuery(websiteId, filters) {
    const { timezone = "UTC", unit = "day" } = filters;
    const { parseFilters, rawQuery, getDateStringQuery, getDateQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { filterQuery, params } = await parseFilters(websiteId, {
        ...filters,
        eventType: lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT_TYPE */ .Ze.pageView
    });
    return rawQuery(`
    select
      ${getDateStringQuery("g.t", unit)} as x, 
      g.y as y
    from (
      select 
        ${getDateQuery("created_at", unit, timezone)} as t,
        count(distinct session_id) as y
      from website_event
      where website_id = {websiteId:UUID}
        and created_at between {startDate:DateTime} and {endDate:DateTime}
        and event_type = {eventType:UInt32}
        ${filterQuery}
      group by t
    ) as g
    order by t
    `, params);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ getSessions)
/* harmony export */ });
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74445);
/* harmony import */ var lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25196);
/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__]);
([lib_prisma__WEBPACK_IMPORTED_MODULE_0__, lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getSessions(...args) {
    return (0,lib_db__WEBPACK_IMPORTED_MODULE_2__/* .runQuery */ .Vn)({
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .PRISMA */ .e9]: ()=>relationalQuery(...args),
        [lib_db__WEBPACK_IMPORTED_MODULE_2__/* .CLICKHOUSE */ .xO]: ()=>clickhouseQuery(...args)
    });
}
async function relationalQuery(websiteId, startDate) {
    return lib_prisma__WEBPACK_IMPORTED_MODULE_0__["default"].client.session.findMany({
        where: {
            websiteId,
            createdAt: {
                gte: startDate
            }
        }
    });
}
async function clickhouseQuery(websiteId, startDate) {
    const { rawQuery } = lib_clickhouse__WEBPACK_IMPORTED_MODULE_1__["default"];
    return rawQuery(`
    select distinct
      session_id as id,
      website_id as websiteId,
      created_at as createdAt,
      toUnixTimestamp(created_at) as timestamp,
      hostname,
      browser,
      os,
      device,
      screen,
      language,
      country,
      subdivision1,
      subdivision2,
      city
    from website_event
    where website_id = {websiteId:UUID}
    and created_at >= {startDate:DateTime}
    `, {
        websiteId,
        startDate
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ saveSessionData)
/* harmony export */ });
/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55510);
/* harmony import */ var lib_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30249);
/* harmony import */ var lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59650);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_prisma__WEBPACK_IMPORTED_MODULE_3__]);
([lib_crypto__WEBPACK_IMPORTED_MODULE_1__, lib_prisma__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function saveSessionData(data) {
    const { client, transaction } = lib_prisma__WEBPACK_IMPORTED_MODULE_3__["default"];
    const { websiteId, sessionId, sessionData } = data;
    const jsonKeys = (0,lib_data__WEBPACK_IMPORTED_MODULE_2__/* .flattenJSON */ .h)(sessionData);
    const flattendData = jsonKeys.map((a)=>({
            id: (0,lib_crypto__WEBPACK_IMPORTED_MODULE_1__/* .uuid */ .Vj)(),
            websiteId,
            sessionId,
            key: a.key,
            stringValue: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.number ? parseFloat(a.value).toFixed(4) : a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.date ? a.value.split(".")[0] + "Z" : a.value.toString(),
            numberValue: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.number ? a.value : null,
            dateValue: a.dynamicDataType === lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .DATA_TYPE */ .h6.date ? new Date(a.value) : null,
            dataType: a.dynamicDataType
        }));
    return transaction([
        client.sessionData.deleteMany({
            where: {
                sessionId
            }
        }),
        client.sessionData.createMany({
            data: flattendData
        })
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $D: () => (/* reexport safe */ _analytics_getWebsiteDateRange__WEBPACK_IMPORTED_MODULE_28__.$),
/* harmony export */   $t: () => (/* reexport safe */ _analytics_sessions_getSessionStats__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   AN: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.AN),
/* harmony export */   CG: () => (/* reexport safe */ _analytics_eventData_getEventDataStats__WEBPACK_IMPORTED_MODULE_11__.C),
/* harmony export */   Cl: () => (/* reexport safe */ _analytics_events_getEventMetrics__WEBPACK_IMPORTED_MODULE_6__.C),
/* harmony export */   Cm: () => (/* reexport safe */ _admin_team__WEBPACK_IMPORTED_MODULE_1__.Cm),
/* harmony export */   Ee: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.Ee),
/* harmony export */   GA: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.GA),
/* harmony export */   GR: () => (/* reexport safe */ _admin_report__WEBPACK_IMPORTED_MODULE_0__.GR),
/* harmony export */   GV: () => (/* reexport safe */ _admin_report__WEBPACK_IMPORTED_MODULE_0__.GV),
/* harmony export */   GY: () => (/* reexport safe */ _analytics_eventData_getEventDataUsage__WEBPACK_IMPORTED_MODULE_12__.G),
/* harmony export */   Gg: () => (/* reexport safe */ _analytics_sessions_getSession__WEBPACK_IMPORTED_MODULE_20__.G),
/* harmony export */   Ji: () => (/* reexport safe */ _analytics_eventData_getEventDataFields__WEBPACK_IMPORTED_MODULE_10__.J),
/* harmony export */   KX: () => (/* reexport safe */ _analytics_getValues__WEBPACK_IMPORTED_MODULE_27__.K),
/* harmony export */   Ku: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.Ku),
/* harmony export */   Nl: () => (/* reexport safe */ _analytics_getActiveVisitors__WEBPACK_IMPORTED_MODULE_25__.N),
/* harmony export */   Nq: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.Nq),
/* harmony export */   PW: () => (/* reexport safe */ _admin_teamUser__WEBPACK_IMPORTED_MODULE_2__.PW),
/* harmony export */   Pt: () => (/* reexport safe */ _admin_report__WEBPACK_IMPORTED_MODULE_0__.Pt),
/* harmony export */   Rf: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.Rf),
/* harmony export */   Sf: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.Sf),
/* harmony export */   VE: () => (/* reexport safe */ _analytics_reports_getRetention__WEBPACK_IMPORTED_MODULE_15__.V),
/* harmony export */   W4: () => (/* reexport safe */ _admin_report__WEBPACK_IMPORTED_MODULE_0__.W4),
/* harmony export */   Zn: () => (/* reexport safe */ _admin_report__WEBPACK_IMPORTED_MODULE_0__.Zn),
/* harmony export */   _r: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.r4),
/* harmony export */   aS: () => (/* reexport safe */ _admin_team__WEBPACK_IMPORTED_MODULE_1__.aS),
/* harmony export */   br: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.br),
/* harmony export */   bz: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.bz),
/* harmony export */   cx: () => (/* reexport safe */ _analytics_getRealtimeData__WEBPACK_IMPORTED_MODULE_26__.c),
/* harmony export */   dQ: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.dQ),
/* harmony export */   ed: () => (/* reexport safe */ _analytics_sessions_createSession__WEBPACK_IMPORTED_MODULE_19__.e),
/* harmony export */   fC: () => (/* reexport safe */ _admin_team__WEBPACK_IMPORTED_MODULE_1__.fC),
/* harmony export */   fW: () => (/* reexport safe */ _analytics_sessions_saveSessionData__WEBPACK_IMPORTED_MODULE_24__.f),
/* harmony export */   fk: () => (/* reexport safe */ _analytics_pageviews_getPageviewStats__WEBPACK_IMPORTED_MODULE_18__.f),
/* harmony export */   fs: () => (/* reexport safe */ _admin_team__WEBPACK_IMPORTED_MODULE_1__.fs),
/* harmony export */   gH: () => (/* reexport safe */ _analytics_eventData_getEventDataEvents__WEBPACK_IMPORTED_MODULE_9__.g),
/* harmony export */   h8: () => (/* reexport safe */ _admin_user__WEBPACK_IMPORTED_MODULE_4__.h8),
/* harmony export */   iJ: () => (/* reexport safe */ _admin_teamWebsite__WEBPACK_IMPORTED_MODULE_3__.iJ),
/* harmony export */   iR: () => (/* reexport safe */ _analytics_events_getEventUsage__WEBPACK_IMPORTED_MODULE_7__.i),
/* harmony export */   ie: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.ie),
/* harmony export */   ig: () => (/* reexport safe */ _analytics_reports_getFunnel__WEBPACK_IMPORTED_MODULE_14__.i),
/* harmony export */   j: () => (/* reexport safe */ _admin_teamWebsite__WEBPACK_IMPORTED_MODULE_3__.j),
/* harmony export */   jf: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.jf),
/* harmony export */   k3: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.k3),
/* harmony export */   mW: () => (/* reexport safe */ _admin_team__WEBPACK_IMPORTED_MODULE_1__.mW),
/* harmony export */   nd: () => (/* reexport safe */ _admin_report__WEBPACK_IMPORTED_MODULE_0__.nd),
/* harmony export */   on: () => (/* reexport safe */ _analytics_reports_getInsights__WEBPACK_IMPORTED_MODULE_16__.o),
/* harmony export */   r4: () => (/* reexport safe */ _admin_teamUser__WEBPACK_IMPORTED_MODULE_2__.r4),
/* harmony export */   ry: () => (/* reexport safe */ _analytics_events_saveEvent__WEBPACK_IMPORTED_MODULE_13__.r),
/* harmony export */   sD: () => (/* reexport safe */ _analytics_sessions_getSessions__WEBPACK_IMPORTED_MODULE_22__.R),
/* harmony export */   si: () => (/* reexport safe */ _analytics_getWebsiteStats__WEBPACK_IMPORTED_MODULE_29__.s),
/* harmony export */   t3: () => (/* reexport safe */ _admin_team__WEBPACK_IMPORTED_MODULE_1__.t3),
/* harmony export */   tr: () => (/* reexport safe */ _analytics_sessions_getSessionMetrics__WEBPACK_IMPORTED_MODULE_21__.t),
/* harmony export */   uk: () => (/* reexport safe */ _analytics_pageviews_getPageviewMetrics__WEBPACK_IMPORTED_MODULE_17__.u),
/* harmony export */   vA: () => (/* reexport safe */ _admin_teamUser__WEBPACK_IMPORTED_MODULE_2__.vA),
/* harmony export */   vw: () => (/* reexport safe */ _analytics_events_getEvents__WEBPACK_IMPORTED_MODULE_8__.v),
/* harmony export */   w: () => (/* reexport safe */ _admin_website__WEBPACK_IMPORTED_MODULE_5__.w)
/* harmony export */ });
/* harmony import */ var _admin_report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9873);
/* harmony import */ var _admin_team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43615);
/* harmony import */ var _admin_teamUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10544);
/* harmony import */ var _admin_teamWebsite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21403);
/* harmony import */ var _admin_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3369);
/* harmony import */ var _admin_website__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23968);
/* harmony import */ var _analytics_events_getEventMetrics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22560);
/* harmony import */ var _analytics_events_getEventUsage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41059);
/* harmony import */ var _analytics_events_getEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96030);
/* harmony import */ var _analytics_eventData_getEventDataEvents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66879);
/* harmony import */ var _analytics_eventData_getEventDataFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4328);
/* harmony import */ var _analytics_eventData_getEventDataStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97369);
/* harmony import */ var _analytics_eventData_getEventDataUsage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93122);
/* harmony import */ var _analytics_events_saveEvent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93872);
/* harmony import */ var _analytics_reports_getFunnel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46587);
/* harmony import */ var _analytics_reports_getRetention__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2734);
/* harmony import */ var _analytics_reports_getInsights__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19748);
/* harmony import */ var _analytics_pageviews_getPageviewMetrics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14989);
/* harmony import */ var _analytics_pageviews_getPageviewStats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(30212);
/* harmony import */ var _analytics_sessions_createSession__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55257);
/* harmony import */ var _analytics_sessions_getSession__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(38488);
/* harmony import */ var _analytics_sessions_getSessionMetrics__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(63152);
/* harmony import */ var _analytics_sessions_getSessions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11675);
/* harmony import */ var _analytics_sessions_getSessionStats__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8157);
/* harmony import */ var _analytics_sessions_saveSessionData__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51321);
/* harmony import */ var _analytics_getActiveVisitors__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29188);
/* harmony import */ var _analytics_getRealtimeData__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6972);
/* harmony import */ var _analytics_getValues__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(47198);
/* harmony import */ var _analytics_getWebsiteDateRange__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(97723);
/* harmony import */ var _analytics_getWebsiteStats__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(17857);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_admin_report__WEBPACK_IMPORTED_MODULE_0__, _admin_team__WEBPACK_IMPORTED_MODULE_1__, _admin_teamUser__WEBPACK_IMPORTED_MODULE_2__, _admin_teamWebsite__WEBPACK_IMPORTED_MODULE_3__, _admin_user__WEBPACK_IMPORTED_MODULE_4__, _admin_website__WEBPACK_IMPORTED_MODULE_5__, _analytics_events_getEventMetrics__WEBPACK_IMPORTED_MODULE_6__, _analytics_events_getEventUsage__WEBPACK_IMPORTED_MODULE_7__, _analytics_events_getEvents__WEBPACK_IMPORTED_MODULE_8__, _analytics_eventData_getEventDataEvents__WEBPACK_IMPORTED_MODULE_9__, _analytics_eventData_getEventDataFields__WEBPACK_IMPORTED_MODULE_10__, _analytics_eventData_getEventDataStats__WEBPACK_IMPORTED_MODULE_11__, _analytics_eventData_getEventDataUsage__WEBPACK_IMPORTED_MODULE_12__, _analytics_events_saveEvent__WEBPACK_IMPORTED_MODULE_13__, _analytics_reports_getFunnel__WEBPACK_IMPORTED_MODULE_14__, _analytics_reports_getRetention__WEBPACK_IMPORTED_MODULE_15__, _analytics_reports_getInsights__WEBPACK_IMPORTED_MODULE_16__, _analytics_pageviews_getPageviewMetrics__WEBPACK_IMPORTED_MODULE_17__, _analytics_pageviews_getPageviewStats__WEBPACK_IMPORTED_MODULE_18__, _analytics_sessions_createSession__WEBPACK_IMPORTED_MODULE_19__, _analytics_sessions_getSession__WEBPACK_IMPORTED_MODULE_20__, _analytics_sessions_getSessionMetrics__WEBPACK_IMPORTED_MODULE_21__, _analytics_sessions_getSessions__WEBPACK_IMPORTED_MODULE_22__, _analytics_sessions_getSessionStats__WEBPACK_IMPORTED_MODULE_23__, _analytics_sessions_saveSessionData__WEBPACK_IMPORTED_MODULE_24__, _analytics_getActiveVisitors__WEBPACK_IMPORTED_MODULE_25__, _analytics_getRealtimeData__WEBPACK_IMPORTED_MODULE_26__, _analytics_getValues__WEBPACK_IMPORTED_MODULE_27__, _analytics_getWebsiteDateRange__WEBPACK_IMPORTED_MODULE_28__, _analytics_getWebsiteStats__WEBPACK_IMPORTED_MODULE_29__]);
([_admin_report__WEBPACK_IMPORTED_MODULE_0__, _admin_team__WEBPACK_IMPORTED_MODULE_1__, _admin_teamUser__WEBPACK_IMPORTED_MODULE_2__, _admin_teamWebsite__WEBPACK_IMPORTED_MODULE_3__, _admin_user__WEBPACK_IMPORTED_MODULE_4__, _admin_website__WEBPACK_IMPORTED_MODULE_5__, _analytics_events_getEventMetrics__WEBPACK_IMPORTED_MODULE_6__, _analytics_events_getEventUsage__WEBPACK_IMPORTED_MODULE_7__, _analytics_events_getEvents__WEBPACK_IMPORTED_MODULE_8__, _analytics_eventData_getEventDataEvents__WEBPACK_IMPORTED_MODULE_9__, _analytics_eventData_getEventDataFields__WEBPACK_IMPORTED_MODULE_10__, _analytics_eventData_getEventDataStats__WEBPACK_IMPORTED_MODULE_11__, _analytics_eventData_getEventDataUsage__WEBPACK_IMPORTED_MODULE_12__, _analytics_events_saveEvent__WEBPACK_IMPORTED_MODULE_13__, _analytics_reports_getFunnel__WEBPACK_IMPORTED_MODULE_14__, _analytics_reports_getRetention__WEBPACK_IMPORTED_MODULE_15__, _analytics_reports_getInsights__WEBPACK_IMPORTED_MODULE_16__, _analytics_pageviews_getPageviewMetrics__WEBPACK_IMPORTED_MODULE_17__, _analytics_pageviews_getPageviewStats__WEBPACK_IMPORTED_MODULE_18__, _analytics_sessions_createSession__WEBPACK_IMPORTED_MODULE_19__, _analytics_sessions_getSession__WEBPACK_IMPORTED_MODULE_20__, _analytics_sessions_getSessionMetrics__WEBPACK_IMPORTED_MODULE_21__, _analytics_sessions_getSessions__WEBPACK_IMPORTED_MODULE_22__, _analytics_sessions_getSessionStats__WEBPACK_IMPORTED_MODULE_23__, _analytics_sessions_saveSessionData__WEBPACK_IMPORTED_MODULE_24__, _analytics_getActiveVisitors__WEBPACK_IMPORTED_MODULE_25__, _analytics_getRealtimeData__WEBPACK_IMPORTED_MODULE_26__, _analytics_getValues__WEBPACK_IMPORTED_MODULE_27__, _analytics_getWebsiteDateRange__WEBPACK_IMPORTED_MODULE_28__, _analytics_getWebsiteStats__WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;