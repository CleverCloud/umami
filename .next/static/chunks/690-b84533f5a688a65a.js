(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{233:function(e,s,n){"use strict";var t=n(85893),l=n(60064),i=n.n(l),r=n(29120),a=n(44085);s.Z=function(e){let{page:s,pageSize:n,count:l,onPageChange:o}=e,{formatMessage:c,labels:u}=(0,a.Z)(),d=Math.ceil(l/n);if(0===l)return null;let x=e=>{let n=s+e;n>0&&n<=d&&o(n)};return 1===d?null:(0,t.jsxs)(r.DL,{justifyContent:"center",className:i().container,children:[(0,t.jsx)(r.zx,{onClick:()=>x(-1),disabled:1===s,children:(0,t.jsx)(r.JO,{rotate:90,children:(0,t.jsx)(r.PJ.ChevronDown,{})})}),(0,t.jsx)(r.DL,{alignItems:"center",className:i().text,children:c(u.pageOf,{current:s,total:d})}),(0,t.jsx)(r.zx,{onClick:()=>x(1),disabled:s===d,children:(0,t.jsx)(r.JO,{rotate:270,children:(0,t.jsx)(r.PJ.ChevronDown,{})})})]})}},16822:function(e,s,n){"use strict";n.d(s,{Z:function(){return V}});var t=n(85893),l=n(29120),i=n(9008),r=n.n(i),a=n(41664),o=n.n(a),c=n(11163),u=n(94184),d=n.n(u),x=n(43756),h=n(80483),m=n(52438),j=n(44085),_=n(18927),v=n(35177),b=n.n(v),p=n(91998),g=n(83454),f=function(){let{formatMessage:e,labels:s}=(0,j.Z)(),{user:n}=(0,_.Z)(),i=(0,c.useRouter)(),{dir:r}=(0,p.Z)(),a=!!g.env.cloudMode;return(0,t.jsxs)(l.qh,{children:[(0,t.jsxs)(l.zx,{variant:"quiet",children:[(0,t.jsx)(l.JO,{children:(0,t.jsx)(x.Z.Profile,{})}),(0,t.jsx)(l.JO,{size:"sm",children:(0,t.jsx)(x.Z.ChevronDown,{})})]}),(0,t.jsx)(l.GI,{position:"bottom",alignment:"rtl"===r?"start":"end",children:(0,t.jsxs)(l.v2,{variant:"popup",onSelect:e=>{"profile"===e&&i.push("/settings/profile"),"logout"===e&&i.push("/logout")},className:b().menu,children:[(0,t.jsx)(l.ck,{className:b().item,children:(0,t.jsx)(l.xv,{children:n.username})},"user"),(0,t.jsxs)(l.ck,{className:b().item,divider:!0,children:[(0,t.jsx)(l.JO,{children:(0,t.jsx)(x.Z.User,{})}),(0,t.jsx)(l.xv,{children:e(s.profile)})]},"profile"),!a&&(0,t.jsxs)(l.ck,{className:b().item,children:[(0,t.jsx)(l.JO,{children:(0,t.jsx)(x.Z.Logout,{})}),(0,t.jsx)(l.xv,{children:e(s.logout)})]},"logout")]})})]})},N=n(67294),k=n(73935),Z=n(93766),C=n.n(Z),y=function(e){let{items:s=[],onClose:n}=e,{pathname:l}=(0,c.useRouter)(),i=e=>{let{items:s,className:r}=e;return(0,t.jsx)("div",{className:d()(C().items,r),children:s.map(e=>{let{label:s,url:r,children:a}=e,c=l.startsWith(r);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o(),{href:r,className:d()(C().item,{[C().selected]:c}),onClick:n,children:s},r),a&&(0,t.jsx)(i,{items:a,className:C().submenu})]})})})};return(0,k.createPortal)((0,t.jsx)("div",{className:d()(C().menu),children:(0,t.jsx)(i,{items:s})}),document.body)},M=n(83454),w=function(){let{formatMessage:e,labels:s}=(0,j.Z)(),[n,i]=(0,N.useState)(!1),r=!!M.env.cloudMode,a=[{label:e(s.dashboard),url:"/dashboard"},!r&&{label:e(s.settings),url:"/settings",children:[{label:e(s.websites),url:"/settings/websites"},{label:e(s.teams),url:"/settings/teams"},{label:e(s.users),url:"/settings/users"},{label:e(s.profile),url:"/settings/profile"}]},r&&{label:e(s.profile),url:"/settings/profile"},!r&&{label:e(s.logout),url:"/logout"}].filter(e=>e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.zx,{variant:"quiet",onClick:()=>i(e=>!e),children:(0,t.jsx)(l.JO,{children:n?(0,t.jsx)(x.Z.Close,{}):(0,t.jsx)(x.Z.Menu,{})})}),n&&(0,t.jsx)(y,{items:a,onClose:()=>i(!1)})]})},B=n(52963),L=n.n(B),J=function(){let{pathname:e}=(0,c.useRouter)(),{formatMessage:s,labels:n}=(0,j.Z)(),i=[{label:s(n.dashboard),url:"/dashboard"},{label:s(n.websites),url:"/websites"},{label:s(n.reports),url:"/reports"},{label:s(n.settings),url:"/settings"}].filter(e=>e);return(0,t.jsx)("div",{className:d()(L().navbar),children:(0,t.jsxs)(l.X2,{children:[(0,t.jsxs)(l.sg,{className:L().left,children:[(0,t.jsxs)("div",{className:L().logo,children:[(0,t.jsx)(l.JO,{size:"lg",children:(0,t.jsx)(x.Z.Logo,{})}),(0,t.jsx)(l.xv,{className:L().text,children:"umami"})]}),(0,t.jsx)("div",{className:L().links,children:i.map(s=>{let{url:n,label:i}=s;return(0,t.jsx)(o(),{href:n,className:d()({[L().selected]:e.startsWith(n)}),children:(0,t.jsx)(l.xv,{children:i})},n)})})]}),(0,t.jsxs)(l.sg,{className:L().right,children:[(0,t.jsxs)("div",{className:L().actions,children:[(0,t.jsx)(h.Z,{}),(0,t.jsx)(m.Z,{}),(0,t.jsx)(f,{})]}),(0,t.jsx)("div",{className:L().mobile,children:(0,t.jsx)(w,{})})]})]})})},z=n(32955),D=n(64529),O=n(12902),P=n(81249),U=n.n(P),S=n(73865);let A={current:S.we,latest:null,hasUpdate:!1,checked:!1,releaseUrl:null},F=(0,D.Ue)(()=>({...A}));async function R(){let{current:e}=F.getState(),s=await fetch("".concat(S.nI,"?v=").concat(e),{method:"GET",headers:{Accept:"application/json"}}).then(e=>e.ok?e.json():null);s&&F.setState((0,O.Uy)(n=>{let{latest:t,url:l}=s,i=(0,z.rV)(S.aC),r=!!(t&&(null==i?void 0:i.version)!==t&&U().gt(t,e));return n.current=e,n.latest=t,n.hasUpdate=r,n.checked=!0,n.releaseUrl=l,n}))}var G=n(82299),W=n.n(G),q=function(e){let{user:s,config:n}=e,{formatMessage:i,labels:r,messages:a}=(0,j.Z)(),{latest:o,checked:u,hasUpdate:d,releaseUrl:x}=F(),{pathname:h}=(0,c.useRouter)(),[m,_]=(0,N.useState)(u),v=(null==s?void 0:s.isAdmin)&&!(null==n?void 0:n.updatesDisabled)&&!(null==n?void 0:n.cloudMode)&&!h.includes("/share/")&&!m,b=(0,N.useCallback)(()=>{(0,z.LS)(S.aC,{version:o,time:Date.now()})},[o]);return((0,N.useEffect)(()=>{v&&R()},[v]),v&&d)?(0,k.createPortal)((0,t.jsxs)(l.X2,{className:W().notice,children:[(0,t.jsx)(l.sg,{variant:"two",className:W().message,children:i(a.newVersionAvailable,{version:"v".concat(o)})}),(0,t.jsxs)(l.sg,{className:W().buttons,children:[(0,t.jsx)(l.zx,{variant:"primary",onClick:function(){b(),_(!0),open(x||S.Bv,"_blank")},children:i(r.viewDetails)}),(0,t.jsx)(l.zx,{onClick:function(){b(),_(!0)},children:i(r.dismiss)})]})]}),document.body):null},E=n(24474),I=n(51327),T=n.n(I),V=function(e){let{title:s,children:n}=e,{user:i}=(0,E.Gb)(),a=(0,E.ZR)();return!i||!a||(null==a?void 0:a.uiDisabled)?null:(0,t.jsxs)("div",{className:T().layout,children:[(0,t.jsx)(q,{user:i,config:a}),(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:s?"".concat(s," | umami"):"umami"})}),(0,t.jsx)("nav",{className:T().nav,children:(0,t.jsx)(J,{})}),(0,t.jsx)("main",{className:T().body,children:(0,t.jsx)(l.W2,{children:n})})]})}},70790:function(e,s,n){"use strict";var t=n(85893),l=n(94184),i=n.n(l),r=n(29120),a=n(44085),o=n(84325),c=n.n(o);s.Z=function(e){let{className:s,error:n,loading:l,children:o}=e,{formatMessage:u,messages:d}=(0,a.Z)();return n?(0,t.jsx)(r.jL,{variant:"error",children:u(d.error)}):l?(0,t.jsx)(r.gb,{icon:"spinner",size:"xl",position:"page"}):(0,t.jsx)("div",{className:i()(c().page,s),children:o})}},93766:function(e){e.exports={menu:"MobileMenu_menu__DO6aZ",items:"MobileMenu_items__N_NHj",item:"MobileMenu_item__iN83G",selected:"MobileMenu_selected__Z1kQJ",submenu:"MobileMenu_submenu__eW8zr"}},60064:function(e){e.exports={container:"Pager_container__a73u9",text:"Pager_text___6T_4"}},82299:function(e){e.exports={notice:"UpdateNotice_notice__vSRjT",message:"UpdateNotice_message__ntCR8",buttons:"UpdateNotice_buttons__F6euy"}},35177:function(e){e.exports={menu:"ProfileButton_menu__NQdVL",item:"ProfileButton_item__FBiu1"}},51327:function(e){e.exports={layout:"AppLayout_layout__8Fgjq",nav:"AppLayout_nav__Bmoe1",body:"AppLayout_body__pAojL"}},52963:function(e){e.exports={navbar:"NavBar_navbar__1L4iC",left:"NavBar_left__xjgkC",right:"NavBar_right__G2alC",logo:"NavBar_logo__0W9iy",links:"NavBar_links__Sh5Fe",selected:"NavBar_selected__jgveb",actions:"NavBar_actions__CpMkm",mobile:"NavBar_mobile__NlFK6"}},84325:function(e){e.exports={page:"Page_page__xxbhi"}}}]);