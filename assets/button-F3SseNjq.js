import{createComponent as l,Dynamic as A,mergeProps as p,ssr as L,ssrHydrationKey as N}from"solid-js/web";import{mergeProps as P,splitProps as m,createSignal as D,createEffect as B,createMemo as d,For as I}from"solid-js";import{cva as M}from"class-variance-authority";import{clsx as H}from"clsx";import{twMerge as V}from"tailwind-merge";function mt(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function _(t){return Object.prototype.toString.call(t)==="[object String]"}function C(t){return typeof t=="function"}function bt(t){return e=>`${t()}-${e}`}function gt(t,e){return t?t===e||t.contains(e):!1}function O(t,e=!1){const{activeElement:n}=f(t);if(!n?.nodeName)return null;if(x(n)&&n.contentDocument)return O(n.contentDocument.body,e);if(e){const r=n.getAttribute("aria-activedescendant");if(r){const o=f(n).getElementById(r);if(o)return o}}return n}function vt(t){return f(t).defaultView||window}function f(t){return t?t.ownerDocument||t:document}function x(t){return t.tagName==="IFRAME"}var U=(t=>(t.Escape="Escape",t.Enter="Enter",t.Tab="Tab",t.Space=" ",t.ArrowDown="ArrowDown",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t.ArrowUp="ArrowUp",t.End="End",t.Home="Home",t.PageDown="PageDown",t.PageUp="PageUp",t))(U||{});function z(t){return typeof window<"u"&&window.navigator!=null?t.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function F(){return z(/^Mac/i)}function j(t,e){return e&&(C(e)?e(t):e[0](e[1],t)),t?.defaultPrevented}function yt(t){return e=>{for(const n of t)j(e,n)}}function ht(t){return F()?t.metaKey&&!t.ctrlKey:t.ctrlKey&&!t.metaKey}function wt(t){if(t)if(R())t.focus({preventScroll:!0});else{const e=k(t);t.focus(),$(e)}}var u=null;function R(){if(u==null){u=!1;try{document.createElement("div").focus({get preventScroll(){return u=!0,!0}})}catch{}}return u}function k(t){let e=t.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==r;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&n.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function $(t){for(const{element:e,scrollTop:n,scrollLeft:r}of t)e.scrollTop=n,e.scrollLeft=r}var W=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],S=W.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";function q(t,e){const r=Array.from(t.querySelectorAll(S)).filter(y);return e&&y(t)&&r.unshift(t),r.forEach((o,a)=>{if(x(o)&&o.contentDocument){const i=o.contentDocument.body,s=q(i,!1);r.splice(a,1,...s)}}),r}function y(t){return G(t)&&!Y(t)}function G(t){return t.matches(S)&&T(t)}function Y(t){return parseInt(t.getAttribute("tabindex")||"0",10)<0}function T(t,e){return t.nodeName!=="#comment"&&J(t)&&Q(t,e)&&(!t.parentElement||T(t.parentElement,t))}function J(t){if(!(t instanceof HTMLElement)&&!(t instanceof SVGElement))return!1;const{display:e,visibility:n}=t.style;let r=e!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!t.ownerDocument.defaultView)return r;const{getComputedStyle:o}=t.ownerDocument.defaultView,{display:a,visibility:i}=o(t);r=a!=="none"&&i!=="hidden"&&i!=="collapse"}return r}function Q(t,e){return!t.hasAttribute("hidden")&&(t.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}function Et(){}function X(t,e){return P(t,e)}var c=new Map,h=new Set;function w(){if(typeof window>"u")return;const t=n=>{if(!n.target)return;let r=c.get(n.target);r||(r=new Set,c.set(n.target,r),n.target.addEventListener("transitioncancel",e)),r.add(n.propertyName)},e=n=>{if(!n.target)return;const r=c.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",e),c.delete(n.target)),c.size===0)){for(const o of h)o();h.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",e)}typeof document<"u"&&(document.readyState!=="loading"?w():document.addEventListener("DOMContentLoaded",w));var xt={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Z(t){const[e,n]=m(t,["as"]);if(!e.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return l(A,p({get component(){return e.as}},n))}function K(t,e){const[n,r]=D(E(e?.()));return B(()=>{r(t()?.tagName.toLowerCase()||E(e?.()))}),n}function E(t){return _(t)?t:void 0}var tt=Object.defineProperty,et=(t,e)=>{for(var n in e)tt(t,n,{get:e[n],enumerable:!0})},nt={};et(nt,{Button:()=>it,Root:()=>b});var rt=["button","color","file","image","reset","submit"];function ot(t){const e=t.tagName.toLowerCase();return e==="button"?!0:e==="input"&&t.type?rt.indexOf(t.type)!==-1:!1}function b(t){let e;const n=X({type:"button"},t),[r,o]=m(n,["ref","type","disabled"]),a=K(()=>e,()=>"button"),i=d(()=>{const v=a();return v==null?!1:ot({tagName:v,type:r.type})}),s=d(()=>a()==="input"),g=d(()=>a()==="a"&&e?.getAttribute("href")!=null);return l(Z,p({as:"button",get type(){return i()||s()?r.type:void 0},get role(){return!i()&&!g()?"button":void 0},get tabIndex(){return!i()&&!g()&&!r.disabled?0:void 0},get disabled(){return i()||s()?r.disabled:void 0},get"aria-disabled"(){return!i()&&!s()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var it=b,at=["<br",">"];function st(...t){return V(H(t))}function St(t){return l(I,{get each(){return t.split(" ")},children:(e,n)=>[e,L(at,N())]})}const ct=M("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"size-10"}},defaultVariants:{variant:"default",size:"default"}}),Tt=t=>{const[e,n]=m(t,["variant","size","class"]);return l(b,p({get class(){return st(ct({variant:e.variant,size:e.size}),e.class)}},n))};export{b as B,U as E,Z as P,et as _,f as a,q as b,gt as c,ht as d,yt as e,wt as f,O as g,j as h,G as i,bt as j,st as k,K as l,X as m,Et as n,Tt as o,ct as p,St as q,mt as r,vt as s,C as t,xt as v};