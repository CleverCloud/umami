"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{19999:function(t,e,r){r.d(e,{X:function(){return o}});var s=r(89886),i=r(30081),n=r(33989),u=r(32161);class o extends n.l{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let r=this.options;this.options=this.client.defaultMutationOptions(t),(0,u.VS)(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,s.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){i.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,r,s,i,n,u,o,a;t.onSuccess?(null==(e=(r=this.mutateOptions).onSuccess)||e.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(s=(i=this.mutateOptions).onSettled)||s.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(n=(u=this.mutateOptions).onError)||n.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(o=(a=this.mutateOptions).onSettled)||o.call(a,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}}},15668:function(t,e,r){r.r(e),r.d(e,{CancelledError:function(){return s.p8},Hydrate:function(){return X},InfiniteQueryObserver:function(){return b},IsRestoringProvider:function(){return k},MutationCache:function(){return R.L},MutationObserver:function(){return m.X},QueriesObserver:function(){return y},Query:function(){return E.A},QueryCache:function(){return i.t},QueryClient:function(){return n.S},QueryClientProvider:function(){return x.aH},QueryErrorResetBoundary:function(){return T},QueryObserver:function(){return c},defaultContext:function(){return x.Of},defaultShouldDehydrateMutation:function(){return Q},defaultShouldDehydrateQuery:function(){return O},dehydrate:function(){return C},focusManager:function(){return a.j},hashQueryKey:function(){return u.yF},hydrate:function(){return S},isCancelledError:function(){return s.DV},isError:function(){return u.VZ},isServer:function(){return u.sk},matchQuery:function(){return u._x},notifyManager:function(){return o.V},onlineManager:function(){return g.N},parseFilterArgs:function(){return u.I6},parseMutationArgs:function(){return u.lV},parseMutationFilterArgs:function(){return u.cb},parseQueryArgs:function(){return u._v},replaceEqualDeep:function(){return u.Q$},useHydrate:function(){return z},useInfiniteQuery:function(){return J},useIsFetching:function(){return Z},useIsMutating:function(){return G},useIsRestoring:function(){return w},useMutation:function(){return W.D},useQueries:function(){return B},useQuery:function(){return $},useQueryClient:function(){return x.NL},useQueryErrorResetBoundary:function(){return F}});var s=r(72379),i=r(48510),n=r(8758),u=r(32161),o=r(30081),a=r(15761),l=r(33989);class c extends l.l{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return d(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),(0,u.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let i=this.hasListeners();i&&f(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(e),i&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let n=this.computeRefetchInterval();i&&(this.currentQuery!==s||this.options.enabled!==r.enabled||n!==this.currentRefetchInterval)&&this.updateRefetchInterval(n)}getOptimisticResult(t){let e=this.client.getQueryCache().build(this.client,t),r=this.createResult(e,t);return t.keepPreviousData||(void 0!==t.placeholderData?!r.isPlaceholderData:(0,u.VS)(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){let e={};return Object.keys(t).forEach(r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){let e=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:null==(e=t.cancelRefetch)||e}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(u.ZT)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),u.sk||this.currentResult.isStale||!(0,u.PN)(this.options.staleTime))return;let t=(0,u.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t+1)}computeRefetchInterval(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!u.sk&&!1!==this.options.enabled&&(0,u.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||a.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){let r;let i=this.currentQuery,n=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,c=t!==i,d=c?t.state:this.currentQueryInitialState,y=c?this.currentResult:this.previousQueryResult,{state:v}=t,{dataUpdatedAt:b,error:R,errorUpdatedAt:m,fetchStatus:g,status:Q}=v,O=!1,C=!1;if(e._optimisticResults){let r=this.hasListeners(),u=!r&&h(t,e),o=r&&f(t,i,e,n);(u||o)&&(g=(0,s.Kw)(t.options.networkMode)?"fetching":"paused",b||(Q="loading")),"isRestoring"===e._optimisticResults&&(g="idle")}if(e.keepPreviousData&&!v.dataUpdatedAt&&null!=y&&y.isSuccess&&"error"!==Q)r=y.data,b=y.dataUpdatedAt,Q=y.status,O=!0;else if(e.select&&void 0!==v.data){if(o&&v.data===(null==a?void 0:a.data)&&e.select===this.selectFn)r=this.selectResult;else try{this.selectFn=e.select,r=e.select(v.data),r=(0,u.oE)(null==o?void 0:o.data,r,e),this.selectResult=r,this.selectError=null}catch(t){this.selectError=t}}else r=v.data;if(void 0!==e.placeholderData&&void 0===r&&"loading"===Q){let t;if(null!=o&&o.isPlaceholderData&&e.placeholderData===(null==l?void 0:l.placeholderData))t=o.data;else if(t="function"==typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.selectError=null}catch(t){this.selectError=t}void 0!==t&&(Q="success",r=(0,u.oE)(null==o?void 0:o.data,t,e),C=!0)}this.selectError&&(R=this.selectError,r=this.selectResult,m=Date.now(),Q="error");let S="fetching"===g,E="loading"===Q,M="error"===Q,I={status:Q,fetchStatus:g,isLoading:E,isSuccess:"success"===Q,isError:M,isInitialLoading:E&&S,data:r,dataUpdatedAt:b,error:R,errorUpdatedAt:m,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>d.dataUpdateCount||v.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!E,isLoadingError:M&&0===v.dataUpdatedAt,isPaused:"paused"===g,isPlaceholderData:C,isPreviousData:O,isRefetchError:M&&0!==v.dataUpdatedAt,isStale:p(t,e),refetch:this.refetch,remove:this.remove};return I}updateResult(t){let e=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,u.VS)(r,e))return;this.currentResult=r;let s={cache:!0};(null==t?void 0:t.listeners)!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.trackedProps.size)return!0;let s=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&s.add("error"),Object.keys(this.currentResult).some(t=>{let r=this.currentResult[t]!==e[t];return r&&s.has(t)})})()&&(s.listeners=!0),this.notify({...s,...t})}updateQuery(){let t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;let e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){let e={};"success"===t.type?e.onSuccess=!t.manual:"error"!==t.type||(0,s.DV)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){o.V.batch(()=>{var e,r,s,i,n,u,o,a;t.onSuccess?(null==(e=(r=this.options).onSuccess)||e.call(r,this.currentResult.data),null==(s=(i=this.options).onSettled)||s.call(i,this.currentResult.data,null)):t.onError&&(null==(n=(u=this.options).onError)||n.call(u,this.currentResult.error),null==(o=(a=this.options).onSettled)||o.call(a,void 0,this.currentResult.error)),t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function h(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)||t.state.dataUpdatedAt>0&&d(t,e,e.refetchOnMount)}function d(t,e,r){if(!1!==e.enabled){let s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&p(t,e)}return!1}function f(t,e,r,s){return!1!==r.enabled&&(t!==e||!1===s.enabled)&&(!r.suspense||"error"!==t.state.status)&&p(t,r)}function p(t,e){return t.isStaleByTime(e.staleTime)}class y extends l.l{constructor(t,e){super(),this.client=t,this.queries=[],this.result=[],this.observers=[],this.observersMap={},e&&this.setQueries(e)}onSubscribe(){1===this.listeners.size&&this.observers.forEach(t=>{t.subscribe(e=>{this.onUpdate(t,e)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.observers.forEach(t=>{t.destroy()})}setQueries(t,e){this.queries=t,o.V.batch(()=>{let t=this.observers,r=this.findMatchingObservers(this.queries);r.forEach(t=>t.observer.setOptions(t.defaultedQueryOptions,e));let s=r.map(t=>t.observer),i=Object.fromEntries(s.map(t=>[t.options.queryHash,t])),n=s.map(t=>t.getCurrentResult()),o=s.some((e,r)=>e!==t[r]);(t.length!==s.length||o)&&(this.observers=s,this.observersMap=i,this.result=n,this.hasListeners()&&((0,u.e5)(t,s).forEach(t=>{t.destroy()}),(0,u.e5)(s,t).forEach(t=>{t.subscribe(e=>{this.onUpdate(t,e)})}),this.notify()))})}getCurrentResult(){return this.result}getQueries(){return this.observers.map(t=>t.getCurrentQuery())}getObservers(){return this.observers}getOptimisticResult(t){return this.findMatchingObservers(t).map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions))}findMatchingObservers(t){let e=this.observers,r=new Map(e.map(t=>[t.options.queryHash,t])),s=t.map(t=>this.client.defaultQueryOptions(t)),i=s.flatMap(t=>{let e=r.get(t.queryHash);return null!=e?[{defaultedQueryOptions:t,observer:e}]:[]}),n=new Set(i.map(t=>t.defaultedQueryOptions.queryHash)),u=s.filter(t=>!n.has(t.queryHash)),o=new Set(i.map(t=>t.observer)),a=e.filter(t=>!o.has(t)),l=t=>{let e=this.client.defaultQueryOptions(t),r=this.observersMap[e.queryHash];return null!=r?r:new c(this.client,e)},h=u.map((t,e)=>{if(t.keepPreviousData){let r=a[e];if(void 0!==r)return{defaultedQueryOptions:t,observer:r}}return{defaultedQueryOptions:t,observer:l(t)}});return i.concat(h).sort((t,e)=>s.indexOf(t.defaultedQueryOptions)-s.indexOf(e.defaultedQueryOptions))}onUpdate(t,e){let r=this.observers.indexOf(t);-1!==r&&(this.result=(0,u.Rc)(this.result,r,e),this.notify())}notify(){o.V.batch(()=>{this.listeners.forEach(({listener:t})=>{t(this.result)})})}}var v=r(9499);class b extends c{constructor(t,e){super(t,e)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,e){super.setOptions({...t,behavior:(0,v.Gm)()},e)}getOptimisticResult(t){return t.behavior=(0,v.Gm)(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...e}={}){return this.fetch({...e,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...e}={}){return this.fetch({...e,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,e){var r,s,i,n,u,o;let{state:a}=t,l=super.createResult(t,e),{isFetching:c,isRefetching:h}=l,d=c&&(null==(r=a.fetchMeta)?void 0:null==(s=r.fetchMore)?void 0:s.direction)==="forward",f=c&&(null==(i=a.fetchMeta)?void 0:null==(n=i.fetchMore)?void 0:n.direction)==="backward";return{...l,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,v.Qy)(e,null==(u=a.data)?void 0:u.pages),hasPreviousPage:(0,v.ZF)(e,null==(o=a.data)?void 0:o.pages),isFetchingNextPage:d,isFetchingPreviousPage:f,isRefetching:h&&!d&&!f}}}var R=r(38593),m=r(19999),g=r(96474);function Q(t){return t.state.isPaused}function O(t){return"success"===t.state.status}function C(t,e={}){let r=[],s=[];if(!1!==e.dehydrateMutations){let s=e.shouldDehydrateMutation||Q;t.getMutationCache().getAll().forEach(t=>{s(t)&&r.push({mutationKey:t.options.mutationKey,state:t.state})})}if(!1!==e.dehydrateQueries){let r=e.shouldDehydrateQuery||O;t.getQueryCache().getAll().forEach(t=>{r(t)&&s.push({state:t.state,queryKey:t.queryKey,queryHash:t.queryHash})})}return{mutations:r,queries:s}}function S(t,e,r){if("object"!=typeof e||null===e)return;let s=t.getMutationCache(),i=t.getQueryCache(),n=e.mutations||[],u=e.queries||[];n.forEach(e=>{var i;s.build(t,{...null==r?void 0:null==(i=r.defaultOptions)?void 0:i.mutations,mutationKey:e.mutationKey},e.state)}),u.forEach(e=>{var s;let n=i.get(e.queryHash),u={...e.state,fetchStatus:"idle"};if(n){n.state.dataUpdatedAt<u.dataUpdatedAt&&n.setState(u);return}i.build(t,{...null==r?void 0:null==(s=r.defaultOptions)?void 0:s.queries,queryKey:e.queryKey,queryHash:e.queryHash},u)})}var E=r(98893),M=r(67294),I=r(464),x=r(85945);let P=M.createContext(!1),w=()=>M.useContext(P),k=P.Provider;function q(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}let U=M.createContext(q()),F=()=>M.useContext(U),T=({children:t})=>{let[e]=M.useState(()=>q());return M.createElement(U.Provider,{value:e},"function"==typeof t?t(e):t)};var L=r(24798);let D=(t,e)=>{(t.suspense||t.useErrorBoundary)&&!e.isReset()&&(t.retryOnMount=!1)},V=t=>{M.useEffect(()=>{t.clearReset()},[t])},A=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&(0,L.L)(r,[t.error,s]),N=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},H=(t,e)=>t.isLoading&&t.isFetching&&!e,K=(t,e,r)=>(null==t?void 0:t.suspense)&&H(e,r),_=(t,e,r)=>e.fetchOptimistic(t).then(({data:e})=>{null==t.onSuccess||t.onSuccess(e),null==t.onSettled||t.onSettled(e,null)}).catch(e=>{r.clearReset(),null==t.onError||t.onError(e),null==t.onSettled||t.onSettled(void 0,e)});function B({queries:t,context:e}){let r=(0,x.NL)({context:e}),s=w(),i=F(),n=M.useMemo(()=>t.map(t=>{let e=r.defaultQueryOptions(t);return e._optimisticResults=s?"isRestoring":"optimistic",e}),[t,r,s]);n.forEach(t=>{N(t),D(t,i)}),V(i);let[u]=M.useState(()=>new y(r,n)),a=u.getOptimisticResult(n);(0,I.$)(M.useCallback(t=>s?()=>void 0:u.subscribe(o.V.batchCalls(t)),[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),M.useEffect(()=>{u.setQueries(n,{listeners:!1})},[n,u]);let l=a.some((t,e)=>K(n[e],t,s)),c=l?a.flatMap((t,e)=>{let r=n[e],o=u.getObservers()[e];if(r&&o){if(K(r,t,s))return _(r,o,i);H(t,s)&&_(r,o,i)}return[]}):[];if(c.length>0)throw Promise.all(c);let h=u.getQueries(),d=a.find((t,e)=>{var r,s;return A({result:t,errorResetBoundary:i,useErrorBoundary:null!=(r=null==(s=n[e])?void 0:s.useErrorBoundary)&&r,query:h[e]})});if(null!=d&&d.error)throw d.error;return a}function j(t,e){let r=(0,x.NL)({context:t.context}),s=w(),i=F(),n=r.defaultQueryOptions(t);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=o.V.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=o.V.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=o.V.batchCalls(n.onSettled)),N(n),D(n,i),V(i);let[u]=M.useState(()=>new e(r,n)),a=u.getOptimisticResult(n);if((0,I.$)(M.useCallback(t=>{let e=s?()=>void 0:u.subscribe(o.V.batchCalls(t));return u.updateResult(),e},[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),M.useEffect(()=>{u.setOptions(n,{listeners:!1})},[n,u]),K(n,a,s))throw _(n,u,i);if(A({result:a,errorResetBoundary:i,useErrorBoundary:n.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:u.trackResult(a)}function $(t,e,r){let s=(0,u._v)(t,e,r);return j(s,c)}function z(t,e={}){let r=(0,x.NL)({context:e.context}),s=M.useRef(e);s.current=e,M.useMemo(()=>{t&&S(r,t,s.current)},[r,t])}let X=({children:t,options:e,state:r})=>(z(r,e),t);function Z(t,e,r){let[s,i={}]=(0,u.I6)(t,e,r),n=(0,x.NL)({context:i.context}),a=n.getQueryCache();return(0,I.$)(M.useCallback(t=>a.subscribe(o.V.batchCalls(t)),[a]),()=>n.isFetching(s),()=>n.isFetching(s))}function G(t,e,r){let[s,i={}]=(0,u.cb)(t,e,r),n=(0,x.NL)({context:i.context}),a=n.getMutationCache();return(0,I.$)(M.useCallback(t=>a.subscribe(o.V.batchCalls(t)),[a]),()=>n.isMutating(s),()=>n.isMutating(s))}var W=r(4846);function J(t,e,r){let s=(0,u._v)(t,e,r);return j(s,b)}},4846:function(t,e,r){r.d(e,{D:function(){return c}});var s=r(67294),i=r(32161),n=r(19999),u=r(30081),o=r(464),a=r(85945),l=r(24798);function c(t,e,r){let c=(0,i.lV)(t,e,r),d=(0,a.NL)({context:c.context}),[f]=s.useState(()=>new n.X(d,c));s.useEffect(()=>{f.setOptions(c)},[f,c]);let p=(0,o.$)(s.useCallback(t=>f.subscribe(u.V.batchCalls(t)),[f]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),y=s.useCallback((t,e)=>{f.mutate(t,e).catch(h)},[f]);if(p.error&&(0,l.L)(f.options.useErrorBoundary,[p.error]))throw p.error;return{...p,mutate:y,mutateAsync:p.mutate}}function h(){}},464:function(t,e,r){r.d(e,{$:function(){return i}});var s=r(61688);let i=s.useSyncExternalStore},24798:function(t,e,r){r.d(e,{L:function(){return s}});function s(t,e){return"function"==typeof t?t(...e):!!t}}}]);