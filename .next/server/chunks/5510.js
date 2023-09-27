"use strict";
exports.id = 5510;
exports.ids = [5510];
exports.modules = {

/***/ 55510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ TEAM_FILTER_TYPES),
/* harmony export */   Av: () => (/* binding */ DESKTOP_SCREEN_WIDTH),
/* harmony export */   E0: () => (/* binding */ USER_FILTER_TYPES),
/* harmony export */   Fq: () => (/* binding */ DEFAULT_RESET_DATE),
/* harmony export */   H1: () => (/* binding */ SESSION_COLUMNS),
/* harmony export */   I2: () => (/* binding */ WEBSITE_FILTER_TYPES),
/* harmony export */   IC: () => (/* binding */ ROLE_PERMISSIONS),
/* harmony export */   Ii: () => (/* binding */ COLLECTION_TYPE),
/* harmony export */   K$: () => (/* binding */ ROLES),
/* harmony export */   MG: () => (/* binding */ REPORT_FILTER_TYPES),
/* harmony export */   MI: () => (/* binding */ FILTER_COLUMNS),
/* harmony export */   Ty: () => (/* binding */ MOBILE_OS),
/* harmony export */   Wc: () => (/* binding */ SHARE_TOKEN_HEADER),
/* harmony export */   Yp: () => (/* binding */ DESKTOP_OS),
/* harmony export */   Ze: () => (/* binding */ EVENT_TYPE),
/* harmony export */   _I: () => (/* binding */ PERMISSIONS),
/* harmony export */   dc: () => (/* binding */ SHARE_ID_REGEX),
/* harmony export */   fP: () => (/* binding */ OPERATORS),
/* harmony export */   h6: () => (/* binding */ DATA_TYPE),
/* harmony export */   m$: () => (/* binding */ HOSTNAME_REGEX),
/* harmony export */   o9: () => (/* binding */ TELEMETRY_PIXEL),
/* harmony export */   q9: () => (/* binding */ MOBILE_SCREEN_WIDTH),
/* harmony export */   r5: () => (/* binding */ EVENT_NAME_LENGTH),
/* harmony export */   t5: () => (/* binding */ URL_LENGTH),
/* harmony export */   uv: () => (/* binding */ LAPTOP_SCREEN_WIDTH),
/* harmony export */   vh: () => (/* binding */ EVENT_COLUMNS),
/* harmony export */   we: () => (/* binding */ CURRENT_VERSION)
/* harmony export */ });
/* unused harmony exports AUTH_TOKEN, LOCALE_CONFIG, TIMEZONE_CONFIG, DATE_RANGE_CONFIG, THEME_CONFIG, DASHBOARD_CONFIG, VERSION_CHECK, HOMEPAGE_URL, REPO_URL, UPDATES_URL, DEFAULT_LOCALE, DEFAULT_THEME, DEFAULT_ANIMATION_DURATION, DEFAULT_DATE_RANGE, DEFAULT_WEBSITE_LIMIT, REALTIME_RANGE, REALTIME_INTERVAL, FILTER_COMBINED, FILTER_RAW, FILTER_DAY, FILTER_RANGE, FILTER_REFERRERS, FILTER_PAGES, DATA_TYPES, REPORT_TYPES, REPORT_PARAMETERS, KAFKA_TOPIC, THEME_COLORS, EVENT_COLORS, DOMAIN_REGEX, UUID_REGEX, BROWSERS, MAP_FILE, ISO_COUNTRIES */
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
const EVENT_COLUMNS = [
    "url",
    "referrer",
    "title",
    "query",
    "event"
];
const SESSION_COLUMNS = [
    "browser",
    "os",
    "device",
    "screen",
    "language",
    "country",
    "region",
    "city"
];
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
const EVENT_COLORS = (/* unused pure expression or super */ null && ([
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
]));
const DOMAIN_REGEX = /^(localhost(:[1-9]\d{0,4})?|((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9-]+(-[a-z0-9-]+)*\.)+(xn--)?[a-z0-9-]{2,63})$/;
const SHARE_ID_REGEX = /^[a-zA-Z0-9]{16}$/;
const UUID_REGEX = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
const HOSTNAME_REGEX = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/;
const DESKTOP_SCREEN_WIDTH = 1920;
const LAPTOP_SCREEN_WIDTH = 1024;
const MOBILE_SCREEN_WIDTH = 479;
const URL_LENGTH = 500;
const EVENT_NAME_LENGTH = 50;
const DESKTOP_OS = [
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
];
const MOBILE_OS = [
    "Amazon OS",
    "Android OS",
    "BlackBerry OS",
    "iOS",
    "Windows Mobile"
];
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


/***/ })

};
;