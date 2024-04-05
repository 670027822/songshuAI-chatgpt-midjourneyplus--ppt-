import{d as re,u as ae,a5 as ie,g as le,r as d,b as W,R as ce,w as V,h as ue,a6 as de,c as k,k as s,U as C,F as pe,m as he,o as p,i as I,l as h,j as l,a7 as fe,t as ge,C as M,X as j,J as D,a8 as R,p as L,a9 as me}from"./index-7811a262.js";import{c as ve}from"./index-c94da121.js";function _e(a,v){let r,g;return function(...$){g=$,r||(r=setTimeout(()=>{a.apply(this,g),r=null},v))}}const xe={class:"min-h-full overflow-hidden flex flex-col"},we={class:"flex-1 min-h-full p-4 relative"},ye=["id"],be=["id","src","onLoad","onError","onClick"],ke={class:"menu p-2 text-[#cbd5e1]"},Ce={class:"prompt"},Ie={class:"flex justify-end items-end space-x-2"},Le=["onClick"],$e={class:"text-sm dark:text-slate-400"},Pe=s("span",null,"画同款",-1),Be=["onClick"],Ee={class:"text-sm dark:text-slate-400"},We=s("span",null,"使用当前画同款",-1),Me=["onClick"],je={class:"text-sm dark:text-slate-400"},De=s("span",null,"复制提示词",-1),Re=s("div",{id:"footer",class:"w-full absolute bottom-[350px]"},null,-1),ze=re({__name:"index",props:{dataList:null,scaleWidth:null,isDrawLike:{type:Boolean},usePropmpt:{type:Boolean},copyPropmpt:{type:Boolean},gap:{default:5},preOrigin:{type:Boolean}},emits:["loadMore","usePropmptDraw"],setup(a,{emit:v}){var O;const r=a,g=ae(),H=(O=ie())==null?void 0:O.appContext.config.globalProperties.$viewerApi,$=le(),N=d({}),z=d(0),c=d(160),f=d(0),P=d([]),B=d(null),S=d(0),F=W(()=>g.isLogin),T=W(()=>r.scaleWidth?Number(r.scaleWidth)*2+r.gap+150:150),J=ce();function X(){G(),K();const t=f.value,o=c.value,e=[];r.dataList.forEach((i,n)=>{const{width:u,height:x}=i.fileInfo;let m=null,E=null;if(typeof u=="string"){let y=u.replace("px","");m=parseInt(y,10);let b=x.replace("px","");E=parseInt(b,10)}else m=u,E=x;const ne=o/m,U=E*ne+r.gap+z.value,w=N.value[i.id];if(e.length<t)w.style.top="0px",w.style.left=`${(o+r.gap)*n}px`,e.push(U);else{const y=Math.min.apply(null,e),b=e.findIndex(se=>se===y);w.style.top=`${y+0}px`,w.style.left=`${b*(c.value+r.gap)}px`,e[b]+=U}}),S.value=5e3}function q(t,o){t&&o&&(N.value[o.id]=t)}function G(){const{showName:t=0,showOther:o=0}={};z.value=[t,o].filter(e=>e).length*15}V(()=>r.scaleWidth,t=>{_()}),V(()=>r.dataList,t=>{t&&me(()=>{_()})},{immediate:!0});function K(){if(!B.value)return;const t=B.value.clientWidth;f.value=Math.floor(t/T.value);const o=t-f.value*T.value,e=(f.value-1)*r.gap;o-e<0&&(f.value-=1),c.value=Math.floor((t-e)/f.value)}function Q(t,o){P.value.push(o.id)}function Y(t,o){P.value.push(o.id)}function Z(t){if(!F.value)return g.setLoginDialog(!0);const{prompt:o}=t;ve({text:o}),$.success("复制prompt成功")}function ee(t){J.push(`/midjourney?mjId=${t.id}`)}function te(t){const{prompt:o}=t;v("usePropmptDraw",o)}function oe(t){const{fileInfo:o}=t,{cosUrl:e}=o;H({options:{},images:[e]})}const A=W(()=>t=>{const{fileInfo:o}=t,{width:e,height:i}=o;let n=null,u=null;if(typeof e=="string"){let x=e.replace("px","");n=parseInt(x,10);let m=i.replace("px","");u=parseInt(m,10)}else n=e,u=i;return u/(n/c.value)}),_=_e(function(){X()},200);return ue(async()=>{window.addEventListener("resize",_);const t=document.getElementById("footer");new IntersectionObserver((e,i)=>{e.forEach(n=>{n.isIntersecting&&v("loadMore")})}).observe(t)}),de(()=>{window.removeEventListener("resize",_)}),(t,o)=>(p(),k("div",xe,[s("div",we,[s("div",{id:"wapper",ref_key:"wapperRef",ref:B,class:"wapper",style:C({height:`${S.value}px`})},[(p(!0),k(pe,null,he(a.dataList,(e,i)=>(p(),k("div",{id:e.id,key:i,ref_for:!0,ref:n=>q(n,e),class:"wapper-item",style:C({width:`${c.value}px`})},[I(fe,{name:"img",css:!0},{default:h(()=>[s("img",{id:e.id,class:"item-file rounded-sm",style:C({width:`${c.value}px`,height:`${l(A)(e)}px`}),src:a.preOrigin?e.fileInfo.cosUrl:e.fileInfo.thumbImg,loading:"lazy",onLoad:n=>Q(n,e),onError:n=>Y(n,e),onClick:n=>oe(e)},null,44,be)]),_:2},1024),s("div",ke,[s("div",Ce,ge(e.fullPrompt),1),s("div",Ie,[a.isDrawLike?(p(),M(l(R),{key:0,trigger:"hover"},{trigger:h(()=>[s("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:j(n=>ee(e),["stop"])},[s("span",$e,[I(l(D),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Le)]),default:h(()=>[Pe]),_:2},1024)):L("",!0),a.usePropmpt?(p(),M(l(R),{key:1,trigger:"hover"},{trigger:h(()=>[s("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:j(n=>te(e),["stop"])},[s("span",Ee,[I(l(D),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Be)]),default:h(()=>[We]),_:2},1024)):L("",!0),a.copyPropmpt?(p(),M(l(R),{key:2,trigger:"hover"},{trigger:h(()=>[s("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:j(n=>Z(e),["stop"])},[s("span",je,[I(l(D),{icon:"tabler:copy",class:"text-sm"})])],8,Me)]),default:h(()=>[De]),_:2},1024)):L("",!0)])]),P.value.includes(e.id)?L("",!0):(p(),k("div",{key:0,class:"item-loading",style:C({width:`${c.value}px`,height:`${l(A)(e)}px`})},null,4))],12,ye))),128)),Re],4)])]))}});export{ze as _};