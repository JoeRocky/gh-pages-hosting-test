import{m as g,q as H,a as L,i as _,s as j,r as v,t as h,h as w,e as P,p as c,j as $,b as u,T as p}from"./index-BzUayZfD.js";import{u as y,h as A,i as E,j as d}from"./routing-DVJfsetU.js";var N=h("<a>");function m(e){e=g({inactiveClass:"inactive",activeClass:"active"},e);const[,n]=H(e,["href","state","class","activeClass","inactiveClass","end"]),t=y(()=>e.href),r=A(t),o=E(),s=L(()=>{const a=t();if(a===void 0)return[!1,!1];const i=d(a.split(/[?#]/,1)[0]).toLowerCase(),l=d(o.pathname).toLowerCase();return[e.end?i===l:l.startsWith(i+"/")||l===i,i===l]});return(()=>{var a=_(N);return j(a,g(n,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s()[0],[e.activeClass]:s()[0],...n.classList}},link:"",get"aria-current"(){return s()[1]?"page":void 0}}),!1,!1),v(),a})()}var T=h("<button class=increment type=button>Clicks: <!$><!/>");function M(){const[e,n]=P(0);return(()=>{var t=_(T),r=t.firstChild,o=r.nextSibling,[s,a]=c(o.nextSibling);return t.$$click=()=>n(e()+1),$(t,e,s,a),v(),t})()}w(["click"]);var W=h("<main><!$><!/><h1>Hello world!</h1><!$><!/><p>Visit <a href=https://start.solidjs.com target=_blank>start.solidjs.com</a> to learn how to build SolidStart apps.</p><!$><!/><!$><!/>");function J(){return(()=>{var e=_(W),n=e.firstChild,[t,r]=c(n.nextSibling),o=t.nextSibling,s=o.nextSibling,[a,i]=c(s.nextSibling),l=a.nextSibling,b=l.nextSibling,[f,S]=c(b.nextSibling),x=f.nextSibling,[C,k]=c(x.nextSibling);return $(e,u(p,{children:"Hello World"}),t,r),$(e,u(M,{}),a,i),$(e,u(m,{href:"/about",children:"About"}),f,S),$(e,u(m,{href:"/test",children:"Test"}),C,k),e})()}export{J as default};