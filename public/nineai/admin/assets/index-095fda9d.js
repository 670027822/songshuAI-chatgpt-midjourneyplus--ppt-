
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as h,y as x,z as A,A as L,B as D,C as b,x as $,D as r,F as H,o as n,c as g,a,e as o,G as v,b as t,H as I,I as l,J as u,f as d,T,w as V,v as z,K,L as N,M as P,g as R,h as c,_ as E,n as F}from"./index-087a273d.js";import{_ as G}from"./index-16b26aa1.js";import J from"./link-6e946955.js";import U from"./index-8b32cdd6.js";import j from"./index-4b54527e.js";import q from"./index-8ccd1d6a.js";import O from"./index-e5bfd0a0.js";import Q from"./index-d1f9400f.js";import W from"./index-caecd3ff.js";import X from"./index-7b21aa7e.js";import{u as Y}from"./index-763923e8.js";import{u as Z}from"./useMenu-36561a85.js";import"./config-de6df455.js";import"./index-76271e87.js";import"./index-5cc7c033.js";import"./index-e41edd59.js";import"./index-9bfc778c.js";const ee={class:"layout"},te={id:"app-main"},oe={class:"wrapper"},se={class:"main"},ne={key:0},ae=h({name:"Layout"}),ie=h({...ae,setup(re){const _=R(),e=x(),k=A(),m=L(),f=D(()=>!!_.meta.link);return b(()=>e.settings.menu.subMenuCollapse,s=>{e.mode==="mobile"&&(s?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))}),b(()=>_.path,()=>{e.mode==="mobile"&&e.$patch(s=>{s.settings.menu.subMenuCollapse=!0})}),$(()=>{r("f5",s=>{e.settings.toolbar.enablePageReload&&(s.preventDefault(),Y().reload())}),r("alt+`",s=>{e.settings.menu.enableHotkeys&&(s.preventDefault(),Z().switchTo(m.actived+1<m.allMenus.length?m.actived+1:0))})}),H(()=>{r.unbind("f5"),r.unbind("alt+`")}),(s,i)=>{const y=c("router-view"),S=G,C=c("el-backtop"),w=E,M=c("el-icon");return n(),g("div",ee,[a("div",te,[o(U),a("div",oe,[a("div",{class:v(["sidebar-container",{show:t(e).mode==="mobile"&&!t(e).settings.menu.subMenuCollapse}])},[o(j),o(q)],2),a("div",{class:v(["sidebar-mask",{show:t(e).mode==="mobile"&&!t(e).settings.menu.subMenuCollapse}]),onClick:i[0]||(i[0]=p=>t(e).toggleSidebarCollapse())},null,2),a("div",{class:"main-container",style:I({"padding-bottom":s.$route.meta.paddingBottom})},[t(e).settings.menu.menuMode==="head"&&!t(e).settings.menu.enableSubMenuCollapseButton&&!t(e).settings.breadcrumb.enable?u("",!0):(n(),l(O,{key:0})),a("div",se,[o(y,null,{default:d(({Component:p,route:B})=>[o(T,{name:"main",mode:"out-in",appear:""},{default:d(()=>[(n(),l(N,{include:t(k).list},[V((n(),l(K(p),{key:B.fullPath})),[[z,!t(f)]])],1032,["include"]))]),_:2},1024)]),_:1}),t(f)?(n(),l(J,{key:0})):u("",!0)]),o(S)],4)]),o(C,{right:20,bottom:20,title:"回到顶部"})]),o(Q),o(W),t(e).settings.app.enableAppSetting?(n(),g("div",ne,[o(M,{class:"app-setting",onClick:i[1]||(i[1]=p=>t(P).emit("global-app-setting-toggle"))},{default:d(()=>[o(w,{name:"ep:setting"})]),_:1}),o(X)])):u("",!0)])}}});const Me=F(ie,[["__scopeId","data-v-096f3f7e"]]);export{Me as default};
