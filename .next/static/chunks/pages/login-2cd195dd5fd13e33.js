(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{99369:function(n,t,e){"use strict";var r,i,o=e(67294);function u(){return(u=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}t.Z=function(n){return o.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 428 389.11"},n),r||(r=o.createElement("circle",{cx:214.15,cy:181,r:171,fill:"none",stroke:"currentColor",strokeMiterlimit:10,strokeWidth:20})),i||(i=o.createElement("path",{d:"M413 134.11H15.29a15 15 0 0 0-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 0 0-15-15Z"})))}},36429:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e(24891)}])},35338:function(n,t,e){"use strict";e.d(t,{h:function(){return a}});var r=e(11163),i=e(15668),o=e(32955),u=e(424),s=e(73865),c=e(30433);let l=n=>n.shareToken;function a(){let{basePath:n}=(0,r.useRouter)(),t=(0,c.ZP)(l),{get:e,post:a,put:d,del:f}=(0,o.h_)({authorization:"Bearer ".concat((0,u.LH)()),[s.Wc]:null==t?void 0:t.token},n);return{get:e,post:a,put:d,del:f,...i}}t.Z=a},424:function(n,t,e){"use strict";e.d(t,{LH:function(){return o},nB:function(){return u},qE:function(){return s}});var r=e(32955),i=e(73865);function o(){return(0,r.rV)(i.UA)}function u(n){(0,r.LS)(i.UA,n)}function s(){(0,r.cl)(i.UA)}},24891:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSP:function(){return w},default:function(){return b}});var r=e(85893),i=e(9008),o=e.n(i),u=e(91998),s=e(30277),c=e.n(s),l=function(n){let{children:t}=n,{dir:e}=(0,u.Z)();return(0,r.jsxs)("div",{className:c().layout,dir:e,children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Login | umami"})}),t]})},a=e(4846),d=e(29120),f=e(11163),h=e(35338),_=e(30433),m=e(424),x=e(44085),p=e(99369),g=e(23921),j=e.n(g),v=function(){let{formatMessage:n,labels:t,getMessage:e}=(0,x.Z)(),i=(0,f.useRouter)(),{post:o}=(0,h.Z)(),{mutate:u,error:s,isLoading:c}=(0,a.D)(n=>o("/auth/login",n)),l=async n=>{u(n,{onSuccess:async n=>{let{token:t,user:e}=n;(0,m.nB)(t),(0,_.av)(e),await i.push("/dashboard")}})};return(0,r.jsxs)("div",{className:j().login,children:[(0,r.jsx)(d.JO,{className:j().icon,size:"xl",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:j().title,children:"umami"}),(0,r.jsxs)(d.l0,{className:j().form,onSubmit:l,error:e(s),children:[(0,r.jsx)(d.p7,{label:n(t.username),children:(0,r.jsx)(d.Tr,{name:"username",rules:{required:n(t.required)},children:(0,r.jsx)(d.nv,{autoComplete:"off"})})}),(0,r.jsx)(d.p7,{label:n(t.password),children:(0,r.jsx)(d.Tr,{name:"password",rules:{required:n(t.required)},children:(0,r.jsx)(d.ZI,{})})}),(0,r.jsx)(d.Au,{children:(0,r.jsx)(d.Mm,{className:j().button,variant:"primary",disabled:c,children:n(t.login)})})]})]})},w=!0;function b(n){let{disabled:t}=n;return t?null:(0,r.jsx)(l,{title:"login",children:(0,r.jsx)(v,{})})}},23921:function(n){n.exports={login:"LoginForm_login__t5EIv",form:"LoginForm_form__ppxDT",title:"LoginForm_title__INPQl",icon:"LoginForm_icon__xBi9q",button:"LoginForm_button__N718m"}},30277:function(n){n.exports={layout:"LoginLayout_layout__aythB"}}},function(n){n.O(0,[668,774,888,179],function(){return n(n.s=36429)}),_N_E=n.O()}]);