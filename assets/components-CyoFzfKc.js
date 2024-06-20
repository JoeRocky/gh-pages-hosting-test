import{isServer as _,getRequestEvent as K,ssrElement as ie,mergeProps as ce}from"solid-js/web";import{getOwner as ue,runWithOwner as N,createMemo as v,createContext as T,useContext as I,createSignal as O,createRenderEffect as le,on as J,startTransition as fe,resetErrorBoundaries as he,batch as de,untrack as pe,createComponent as me,mergeProps as ge,splitProps as ve}from"solid-js";function ye(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const a={to:r,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const c of e)c.listener({...a,from:c.location,retry:u=>{u&&(n=!0),c.navigate(r,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:s}}let D;function X(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),D=window.history.state._depth}_||X();function Me(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function We(e,t){let n=!1;return()=>{const s=D;X();const r=s==null?null:D-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const we=/^(?:[a-z0-9]+:)?\/\//i,Pe=/^\/+|(\/)\/+$/g,Re="http://sr";function b(e,t=!1){const n=e.replace(Pe,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function B(e,t,n){if(we.test(t))return;const s=b(e),r=n&&b(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+b(t,!o)}function xe(e,t){if(e==null)throw new Error(t);return e}function be(e,t){return b(e).replace(/\/*(\*.*)?$/g,"")+b(t)}function G(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function Ce(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),a=o.length;return c=>{const u=c.split("/").filter(Boolean),f=u.length-a;if(f<0||f>0&&r===void 0&&!t)return null;const h={path:a?"":"/",params:{}},m=p=>n===void 0?void 0:n[p];for(let p=0;p<a;p++){const d=o[p],w=u[p],P=d[0]===":",E=P?d.slice(1):d;if(P&&$(w,m(E)))h.params[E]=w;else if(P||!$(w,d))return null;h.path+=`/${w}`}if(r){const p=f?u.slice(-f).join("/"):"";if($(p,m(r)))h.params[r]=p;else return null}return h}}function $(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ee(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function Q(e){const t=new Map,n=ue();return new Proxy({},{get(s,r){return t.has(r)||N(n,()=>t.set(r,v(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function V(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return V(s).reduce((o,a)=>[...o,...r.map(c=>c+a)],[])}const Le=100,Ae=T(),Y=T(),M=()=>xe(I(Ae),"<A> and 'use' router primitives can be only used inside a Route."),Se=()=>I(Y)||M().base,Oe=e=>{const t=Se();return v(()=>t.resolvePath(e()))},_e=e=>{const t=M();return v(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Be=()=>M().location;function je(e,t=""){const{component:n,load:s,children:r,info:o}=e,a=!r||Array.isArray(r)&&!r.length,c={key:e,component:n,load:s,info:o};return Z(e.path).reduce((u,f)=>{for(const h of V(f)){const m=be(t,h);let p=a?m:m.split("/*",1)[0];p=p.split("/").map(d=>d.startsWith(":")||d.startsWith("*")?d:encodeURIComponent(d)).join("/"),u.push({...c,originalPath:f,pattern:p,matcher:Ce(p,!a,e.matchFilters)})}return u},[])}function Fe(e,t=0){return{routes:e,score:Ee(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],a=o.matcher(n);if(!a)return null;s.unshift({...a,route:o})}return s}}}function Z(e){return Array.isArray(e)?e:[e]}function $e(e,t="",n=[],s=[]){const r=Z(e);for(let o=0,a=r.length;o<a;o++){const c=r[o];if(c&&typeof c=="object"){c.hasOwnProperty("path")||(c.path="");const u=je(c,t);for(const f of u){n.push(f);const h=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!h)$e(c.children,f.pattern,n,s);else{const m=Fe([...n],s.length);s.push(m)}n.pop()}}}return n.length?s:s.sort((o,a)=>a.score-o.score)}function k(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function ke(e,t){const n=new URL(Re),s=v(u=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),u}},n,{equals:(u,f)=>u.href===f.href}),r=v(()=>s().pathname),o=v(()=>s().search,!0),a=v(()=>s().hash),c=()=>"";return{get pathname(){return r()},get search(){return o()},get hash(){return a()},get state(){return t()},get key(){return c()},query:Q(J(o,()=>G(s())))}}let x;function qe(){return x}function Ue(e,t,n,s={}){const{signal:[r,o],utils:a={}}=e,c=a.parsePath||(i=>i),u=a.renderPath||(i=>i),f=a.beforeLeave||ye(),h=B("",s.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&o({value:h,replace:!0,scroll:!1});const[m,p]=O(!1);let d;const w=(i,l)=>{l.value===P()&&l.state===L()||(d===void 0&&p(!0),x=i,d=l,fe(()=>{d===l&&(E(d.value),ee(d.state),he(),_||W[1]([]))}).finally(()=>{d===l&&de(()=>{x=void 0,i==="navigate"&&se(d),p(!1),d=void 0})}))},[P,E]=O(r().value),[L,ee]=O(r().state),j=ke(P,L),A=[],W=O(_?ae():[]),q=v(()=>typeof s.transformUrl=="function"?k(t(),s.transformUrl(j.pathname)):k(t(),j.pathname)),te=Q(()=>{const i=q(),l={};for(let g=0;g<i.length;g++)Object.assign(l,i[g].params);return l}),U={pattern:h,path:()=>h,outlet:()=>null,resolvePath(i){return B(h,i)}};return le(J(r,i=>w("native",i),{defer:!0})),{base:U,location:j,params:te,isRouting:m,renderPath:u,parsePath:c,navigatorFactory:re,matches:q,beforeLeave:f,preloadRoute:oe,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:W};function ne(i,l,g){pe(()=>{if(typeof l=="number"){l&&(a.go?a.go(l):console.warn("Router integration does not support relative routing"));return}const{replace:S,resolve:F,scroll:R,state:C}={replace:!1,resolve:!0,scroll:!0,...g},y=F?i.resolvePath(l):B("",l);if(y===void 0)throw new Error(`Path '${l}' is not a routable path`);if(A.length>=Le)throw new Error("Too many redirects");const z=P();if(y!==z||C!==L())if(_){const H=K();H&&(H.response={status:302,headers:new Headers({Location:y})}),o({value:y,replace:S,scroll:R,state:C})}else f.confirm(y,g)&&(A.push({value:z,replace:S,scroll:R,state:L()}),w("navigate",{value:y,state:C}))})}function re(i){return i=i||I(Y)||U,(l,g)=>ne(i,l,g)}function se(i){const l=A[0];l&&(o({...i,replace:l.replace,scroll:l.scroll}),A.length=0)}function oe(i,l={}){const g=k(t(),i.pathname),S=x;x="preload";for(let F in g){const{route:R,params:C}=g[F];R.component&&R.component.preload&&R.component.preload();const{load:y}=R;l.preloadData&&y&&N(n(),()=>y({params:C,location:{pathname:i.pathname,search:i.search,hash:i.hash,query:G(i),state:null,key:""},intent:"preload"}))}x=S}function ae(){const i=K();return i&&i.router&&i.router.submission?[i.router.submission]:[]}}function ze(e,t,n,s){const{base:r,location:o,params:a}=e,{pattern:c,component:u,load:f}=s().route,h=v(()=>s().path);u&&u.preload&&u.preload();const m=f?f({params:a,location:o,intent:x||"initial"}):void 0;return{parent:t,pattern:c,path:h,outlet:()=>u?me(u,{params:a,location:o,data:m,get children(){return n()}}):n(),resolvePath(d){return B(r.path(),d,h())}}}function He(e){e=ge({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ve(e,["href","state","class","activeClass","inactiveClass","end"]),n=Oe(()=>e.href),s=_e(n),r=Be(),o=v(()=>{const a=n();if(a===void 0)return[!1,!1];const c=b(a.split(/[?#]/,1)[0]).toLowerCase(),u=b(r.pathname).toLowerCase();return[e.end?c===u:u.startsWith(c+"/")||u===c,c===u]});return ie("a",ce(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o()[0],[e.activeClass]:o()[0],...t.classList}},link:!0,get"aria-current"(){return o()[1]?"page":void 0}}),void 0,!0)}export{He as A,Ae as R,Ue as a,ze as b,$e as c,Y as d,qe as e,ye as f,k as g,Me as k,Re as m,We as n,X as s,Be as u};
