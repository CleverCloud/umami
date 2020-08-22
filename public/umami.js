!function(){"use strict";function e(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}var t=setTimeout;function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function i(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}a(t.promise,r)}else(1===e._state?a:u)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void f((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){u(e,t)}var r,i}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return;n=!0,u(t,e)}}o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r);return i(this,new s(e,t,n)),n},o.prototype["finally"]=e,o.all=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function a(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,(function(t){a(e,t)}),r)}o[e]=n,0==--i&&t(o)}catch(e){r(e)}}for(var u=0;u<o.length;u++)a(u,o[u])}))},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,a=e.length;i<a;i++)o.resolve(e[i]).then(t,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l["Promise"]=o,self.fetch||(self.fetch=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],a=[],u={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return i},entries:function(){return a},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var s in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){i.push(t=t.toLowerCase()),a.push([t,n]),u[t]=u[t]?u[t]+","+n:n})),n(c())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(s,t.headers[s]);o.send(t.body||null)}))});var d=function(e,t){return function(e,t,n){return fetch(t,{method:e,cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"},body:n}).then((function(t){return t.ok?t.json():["post","put","delete"].includes(e)?t.text():null}))}("post",e,JSON.stringify(t))},h=function(e,t,n){var r=e[t];return function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];return n.apply(null,t),r.apply(e,t)}},p=function(){return!!(window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack||"msTrackingProtectionEnabled"in window.external)&&!("1"!=window.doNotTrack&&"yes"!=navigator.doNotTrack&&"1"!=navigator.doNotTrack&&"1"!=navigator.msDoNotTrack&&!window.external.msTrackingProtectionEnabled())};!function(e){var t=e.screen,n=t.width,r=t.height,o=e.navigator.language,i=e.location,a=i.hostname,u=i.pathname,c=i.search,s=e.document,f=e.history,l=s.querySelector("script[data-website-id]");if(l&&!p()){var v=l.getAttribute("data-website-id"),y=new URL(l.src).origin,m=n+"x"+r,w=[],_=""+u+c,g=s.referrer,b=function(e,t){var n={url:_,referrer:g,website:v,hostname:a,screen:m,language:o};return t&&Object.keys(t).forEach((function(e){n[e]=t[e]})),d(y+"/api/collect",{type:e,payload:n})},T=function(){return b("pageview").then((function(){return setTimeout(E,300)}))},j=function(e,t,n){P(),g=_;var r=new URL(n);_=""+r.pathname+r.search,T()};f.pushState=h(f,"pushState",j),f.replaceState=h(f,"replaceState",j);var P=function(){w.forEach((function(e){var t=e[0],n=e[1],r=e[2];t&&t.removeEventListener(n,r,!0)})),w.length=0},E=function(){s.querySelectorAll("[class*='umami--']").forEach((function(e){e.className.split(" ").forEach((function(t){if(/^umami--([a-z]+)--([a-z0-9_]+[a-z0-9-_]+)$/.test(t)){var n=t.split("--"),r=n[1],o=n[2],i=function(){return b("event",{event_type:r,event_value:o})};w.push([e,r,i]),e.addEventListener(r,i,!0)}}))}))};T()}}(window)}();
