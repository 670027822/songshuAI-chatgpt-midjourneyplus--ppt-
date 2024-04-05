import{bj as jt,bk as Ot,bl as Kt,bm as dt,aY as Ut,ai as Gt,aH as Xt,aG as Ft,d as le,aB as Te,r as A,bn as Wt,aq as E,bo as Yt,b as v,h as Ne,T as ft,at as qt,aT as x,as as H,au as w,aX as Ht,aW as Zt,aN as Jt,ae as Qt,w as ee,aC as pt,aF as en,bp as tn,bq as nt,br as ot,V as vt,bs as ht,a7 as nn,bt as at,bu as xe,a9 as Xe,bv as on,U as Fe,bw as an,bx as ye,aa as We,o as P,c as N,k as $,A as Y,t as te,j as s,F as be,m as mt,i as C,J as B,C as se,N as gt,p as j,l as Z,n as sn,e as xt,R as yt,S as ln,f as bt,u as wt,a2 as rn,af as un,g as cn,H as dn,y as pe,ag as fn}from"./index-7811a262.js";import{N as pn}from"./Popconfirm-1b9f8976.js";import{N as st}from"./NumberAnimation-5727886d.js";import{N as vn}from"./LayoutSider-f306a503.js";function hn(e){return jt(Ot(e).toLowerCase())}var mn=Kt(function(e,o,a){return o=o.toLowerCase(),e+(a?hn(o):o)});const lt=mn;function gn(e){const{length:o}=e;return o>1&&(e.push(it(e[0],0,"append")),e.unshift(it(e[o-1],o-1,"prepend"))),e}function it(e,o,a){return dt(e,{key:`carousel-item-duplicate-${o}-${a}`})}function rt(e,o,a){return a?e===0?o-3:e===o-1?0:e-1:e}function Ue(e,o){return o?e+1:e}function xn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function yn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function bn(e,o){return o&&e>3?e-2:e}function ut(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ct(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const i=getComputedStyle(e);a=a-parseFloat(i.getPropertyValue("padding-left"))-parseFloat(i.getPropertyValue("padding-right")),r=r-parseFloat(i.getPropertyValue("padding-top"))-parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function De(e,o,a){return e<o?o:e>a?a:e}function wn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,i="ms"]=a;return Number(r)*(i==="ms"?1:1e3)}return 0}const St=Ft("n-carousel-methods"),Sn=e=>Ut(St,e),Ye=(e="unknown",o="component")=>{const a=Gt(St);return a||Xt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},_n={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},kn=le({name:"CarouselDots",props:_n,setup(e){const{mergedClsPrefixRef:o}=Te(e),a=A([]),r=Ye();function i(m,c){switch(m.key){case"Enter":case" ":m.preventDefault(),r.to(c);return}e.keyboard&&R(m)}function y(m){e.trigger==="hover"&&r.to(m)}function V(m){e.trigger==="click"&&r.to(m)}function R(m){var c;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const _=(c=document.activeElement)===null||c===void 0?void 0:c.nodeName.toLowerCase();if(_==="input"||_==="textarea")return;const{code:z}=m,L=z==="PageUp"||z==="ArrowUp",S=z==="PageDown"||z==="ArrowDown",d=z==="PageUp"||z==="ArrowRight",b=z==="PageDown"||z==="ArrowLeft",f=r.isVertical(),k=f?L:d,u=f?S:b;!k&&!u||(m.preventDefault(),k&&!r.isNextDisabled()?(r.next(),I(r.currentIndexRef.value)):u&&!r.isPrevDisabled()&&(r.prev(),I(r.currentIndexRef.value)))}function I(m){var c;(c=a.value[m])===null||c===void 0||c.focus()}return Wt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:i,handleMouseenter:y,handleClick:V}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return E("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Yt(this.total,a=>{const r=a===this.currentIndex;return E("div",{"aria-selected":r,ref:i=>o.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>this.handleClick(a),onMouseenter:()=>this.handleMouseenter(a),onKeydown:i=>this.handleKeydown(i,a)})}))}}),Cn=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},E("g",{fill:"none"},E("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Rn=E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},E("g",{fill:"none"},E("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Pn=le({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=Te(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:i,prev:y,next:V}=Ye();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:i,prev:y,next:V}},render(){const{mergedClsPrefix:e}=this;return E("div",{class:`${e}-carousel__arrow-group`},E("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Cn),E("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Rn))}}),$e="CarouselItem",In=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===$e},Dn=le({name:$e,setup(e){const{mergedClsPrefixRef:o}=Te(e),a=Ye(lt($e),`n-${lt($e)}`),r=A(),i=v(()=>{const{value:c}=r;return c?a.getSlideIndex(c):-1}),y=v(()=>a.isPrev(i.value)),V=v(()=>a.isNext(i.value)),R=v(()=>a.isActive(i.value)),I=v(()=>a.getSlideStyle(i.value));Ne(()=>a.addSlide(r.value)),ft(()=>{a.removeSlide(r.value)});function m(c){const{value:_}=i;_!==void 0&&(a==null||a.onCarouselItemClick(_,c))}return{mergedClsPrefix:o,selfElRef:r,isPrev:y,isNext:V,isActive:R,index:i,style:I,handleClick:m}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:i,isActive:y,index:V,style:R}=this,I=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:y,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:i}];return E("div",{ref:"selfElRef",class:I,role:"option",tabindex:"-1","data-index":V,"aria-hidden":!y,style:R,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:i,isActive:y,index:V}))}}),zn=qt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[x("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[x("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[H("> img",`
 display: block;
 `)])]),x("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[w("dot",[x("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[H("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),w("active",`
 background-color: var(--n-dot-color-active);
 `)])]),w("line",[x("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[H("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),w("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),x("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[H("svg",`
 height: 1em;
 width: 1em;
 `),H("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),w("vertical",`
 touch-action: pan-x;
 `,[x("slides",`
 flex-direction: column;
 `),w("fade",[x("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),w("card",[x("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[w("current",`
 transform: translateY(-50%) translateZ(0);
 `),w("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),w("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),w("usercontrol",[x("slides",[H(">",[H("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),w("left",[x("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[w("line",[x("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[w("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),x("dot",`
 margin: 4px 0;
 `)]),x("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),w("vertical",[x("arrow",`
 transform: rotate(90deg);
 `)]),w("show-arrow",[w("bottom",[x("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),w("top",[x("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),w("left",[x("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),w("right",[x("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),w("left",[x("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[H("> *:first-child",`
 margin-bottom: 12px;
 `)])]),w("right",[x("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[w("line",[x("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[w("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),x("dot",`
 margin: 4px 0;
 `),x("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[H("> *:first-child",`
 margin-bottom: 12px;
 `)])]),w("top",[x("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[w("line",[x("dot",`
 margin: 0 4px;
 `)])]),x("dot",`
 margin: 0 4px;
 `),x("arrow-group",`
 top: 12px;
 right: 12px;
 `,[H("> *:first-child",`
 margin-right: 12px;
 `)])]),w("bottom",[x("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[w("line",[x("dot",`
 margin: 0 4px;
 `)])]),x("dot",`
 margin: 0 4px;
 `),x("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[H("> *:first-child",`
 margin-right: 12px;
 `)])]),w("fade",[x("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[w("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),w("card",[x("slides",`
 perspective: 1000px;
 `),x("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[w("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),w("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),w("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),$n=["transitionDuration","transitionTimingFunction"],Tn=Object.assign(Object.assign({},pt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ge=!1;const Nn=le({name:"Carousel",props:Tn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=Te(e),r=A(null),i=A(null),y=A([]),V={value:[]},R=v(()=>e.direction==="vertical"),I=v(()=>R.value?"height":"width"),m=v(()=>R.value?"bottom":"right"),c=v(()=>e.effect==="slide"),_=v(()=>e.loop&&e.slidesPerView===1&&c.value),z=v(()=>e.effect==="custom"),L=v(()=>!c.value||e.centeredSlides?1:e.slidesPerView),S=v(()=>z.value?1:e.slidesPerView),d=v(()=>L.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),b=A({width:0,height:0}),f=v(()=>{const{value:t}=y;if(!t.length)return[];const{value:n}=d;if(n)return t.map(T=>ct(T));const{value:l}=S,{value:h}=b,{value:g}=I;let p=h[g];if(l!=="auto"){const{spaceBetween:T}=e,W=p-(l-1)*T,Ie=1/Math.max(1,l);p=W*Ie}const D=Object.assign(Object.assign({},h),{[g]:p});return t.map(()=>D)}),k=v(()=>{const{value:t}=f;if(!t.length)return[];const{centeredSlides:n,spaceBetween:l}=e,{value:h}=I,{[h]:g}=b.value;let p=0;return t.map(({[h]:D})=>{let T=p;return n&&(T+=(D-g)/2),p+=D+l,T})}),u=A(!1),X=v(()=>{const{transitionStyle:t}=e;return t?at(t,$n):{}}),J=v(()=>z.value?0:wn(X.value.transitionDuration)),ve=v(()=>{const{value:t}=y;if(!t.length)return[];const n=!(d.value||S.value===1),l=D=>{if(n){const{value:T}=I;return{[T]:`${f.value[D][T]}px`}}};if(z.value)return t.map((D,T)=>l(T));const{effect:h,spaceBetween:g}=e,{value:p}=m;return t.reduce((D,T,W)=>{const Ie=Object.assign(Object.assign({},l(W)),{[`margin-${p}`]:`${g}px`});return D.push(Ie),u.value&&(h==="fade"||h==="card")&&Object.assign(Ie,X.value),D},[])}),U=v(()=>{const{value:t}=L,{length:n}=y.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:l}=f,{length:h}=l;if(!h)return n;const{value:g}=k,{value:p}=I,D=b.value[p];let T=l[l.length-1][p],W=h;for(;W>1&&T<D;)W--,T+=g[W]-g[W-1];return De(W+1,1,h)}}),ie=v(()=>bn(U.value,_.value)),we=Ue(e.defaultIndex,_.value),he=A(rt(we,U.value,_.value)),O=Ht(Zt(e,"currentIndex"),he),G=v(()=>Ue(O.value,_.value));function oe(t){var n,l;t=De(t,0,U.value-1);const h=rt(t,U.value,_.value),{value:g}=O;h!==O.value&&(he.value=h,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,h,g),(l=e.onUpdateCurrentIndex)===null||l===void 0||l.call(e,h,g))}function re(t=G.value){return xn(t,U.value,e.loop)}function ne(t=G.value){return yn(t,U.value,e.loop)}function Ve(t){const n=ue(t);return n!==null&&re()===n}function qe(t){const n=ue(t);return n!==null&&ne()===n}function M(t){return G.value===ue(t)}function F(t){return O.value===t}function K(){return re()===null}function He(){return ne()===null}function Ae(t){const n=De(Ue(t,_.value),0,U.value);(t!==O.value||n!==G.value)&&oe(n)}function Ee(){const t=re();t!==null&&oe(t)}function Se(){const t=ne();t!==null&&oe(t)}function _t(){(!q||!_.value)&&Ee()}function kt(){(!q||!_.value)&&Se()}let q=!1,ae=0;const Me=A({});function _e(t,n=0){Me.value=Object.assign({},X.value,{transform:R.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function me(t=0){c.value?Be(G.value,t):ae!==0&&(!q&&t>0&&(q=!0),_e(ae=0,t))}function Be(t,n){const l=Ze(t);l!==ae&&n>0&&(q=!0),ae=Ze(G.value),_e(l,n)}function Ze(t){let n;return t>=U.value-1?n=Je():n=k.value[t]||0,n}function Je(){if(L.value==="auto"){const{value:t}=I,{[t]:n}=b.value,{value:l}=k,h=l[l.length-1];let g;if(h===void 0)g=n;else{const{value:p}=f;g=h+p[p.length-1][t]}return g-n}else{const{value:t}=k;return t[U.value-1]||0}}const ge={currentIndexRef:O,to:Ae,prev:_t,next:kt,isVertical:()=>R.value,isHorizontal:()=>!R.value,isPrev:Ve,isNext:qe,isActive:M,isPrevDisabled:K,isNextDisabled:He,getSlideIndex:ue,getSlideStyle:Pt,addSlide:Ct,removeSlide:Rt,onCarouselItemClick:It};Sn(ge);function Ct(t){t&&y.value.push(t)}function Rt(t){if(!t)return;const n=ue(t);n!==-1&&y.value.splice(n,1)}function ue(t){return typeof t=="number"?t:t?y.value.indexOf(t):-1}function Pt(t){const n=ue(t);if(n!==-1){const l=[ve.value[n]],h=ge.isPrev(n),g=ge.isNext(n);return h&&l.push(e.prevSlideStyle||""),g&&l.push(e.nextSlideStyle||""),Fe(l)}}function It(t,n){let l=!q&&!Re&&!Ke;e.effect==="card"&&l&&!M(t)&&(Ae(t),l=!1),l||(n.preventDefault(),n.stopPropagation())}let ke=null;function Ce(){ke&&(clearInterval(ke),ke=null)}function ce(){Ce(),!e.autoplay||ie.value<2||(ke=window.setInterval(Se,e.interval))}let Le=0,je=0,Q=0,Oe=0,Re=!1,Ke=!1;function Qe(t){var n;if(Ge||!(!((n=i.value)===null||n===void 0)&&n.contains(an(t))))return;Ge=!0,Re=!0,Ke=!1,Oe=Date.now(),Ce(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const l=ut(t)?t.touches[0]:t;R.value?je=l.clientY:Le=l.clientX,e.touchable&&(ye("touchmove",document,Pe,{passive:!0}),ye("touchend",document,de),ye("touchcancel",document,de)),e.draggable&&(ye("mousemove",document,Pe),ye("mouseup",document,de))}function Pe(t){const{value:n}=R,{value:l}=I,h=ut(t)?t.touches[0]:t,g=n?h.clientY-je:h.clientX-Le,p=b.value[l];Q=De(g,-p,p),t.cancelable&&t.preventDefault(),c.value&&_e(ae-Q,0)}function de(){const{value:t}=G;let n=t;if(!q&&Q!==0&&c.value){const l=ae-Q,h=[...k.value.slice(0,U.value-1),Je()];let g=null;for(let p=0;p<h.length;p++){const D=Math.abs(h[p]-l);if(g!==null&&g<D)break;g=D,n=p}}if(n===t){const l=Date.now()-Oe,{value:h}=I,g=b.value[h];Q>g/2||Q/l>.4?n=re(t):(Q<-g/2||Q/l<-.4)&&(n=ne(t))}n!==null&&n!==t?(Ke=!0,oe(n),Xe(()=>{(!_.value||he.value!==O.value)&&me(J.value)})):me(J.value),et(),ce()}function et(){Re&&(Ge=!1),Re=!1,Le=0,je=0,Q=0,Oe=0,xe("touchmove",document,Pe),xe("touchend",document,de),xe("touchcancel",document,de),xe("mousemove",document,Pe),xe("mouseup",document,de)}function Dt(){if(c.value&&q){const{value:t}=G;Be(t,0)}else ce();c.value&&(Me.value.transitionDuration="0ms"),q=!1}function zt(t){if(t.preventDefault(),q)return;let{deltaX:n,deltaY:l}=t;t.shiftKey&&!n&&(n=l);const h=-1,g=1,p=(n||l)>0?g:h;let D=0,T=0;R.value?T=p:D=p;const W=10;(T*l>=W||D*n>=W)&&(p===g&&!He()?Se():p===h&&!K()&&Ee())}function $t(){b.value=ct(r.value,!0),ce()}function Tt(){var t,n;d.value&&((n=(t=f.effect).scheduler)===null||n===void 0||n.call(t),f.effect.run())}function Nt(){e.autoplay&&Ce()}function Vt(){e.autoplay&&ce()}Ne(()=>{Jt(ce),requestAnimationFrame(()=>u.value=!0)}),ft(()=>{et(),Ce()}),Qt(()=>{const{value:t}=y,{value:n}=V,l=new Map,h=p=>l.has(p)?l.get(p):-1;let g=!1;for(let p=0;p<t.length;p++){const D=n.findIndex(T=>T.el===t[p]);D!==p&&(g=!0),l.set(t[p],D)}g&&t.sort((p,D)=>h(p)-h(D))}),ee(G,(t,n)=>{if(t!==n)if(ce(),c.value){if(_.value&&ie.value>2){const{value:l}=U;t===l-2&&n===1?t=0:t===1&&n===l-2&&(t=l-1)}Be(t,J.value)}else me()},{immediate:!0}),ee([_,L],()=>void Xe(()=>oe(G.value))),ee(k,()=>c.value&&me(),{deep:!0}),ee(c,t=>{t?me():(q=!1,_e(ae=0))});const At=v(()=>({onTouchstartPassive:e.touchable?Qe:void 0,onMousedown:e.draggable?Qe:void 0,onWheel:e.mousewheel?zt:void 0})),Et=v(()=>Object.assign(Object.assign({},at(ge,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ie.value,currentIndex:O.value})),Mt=v(()=>({total:ie.value,currentIndex:O.value,to:ge.to})),Bt={getCurrentIndex:()=>O.value,to:Ae,prev:Ee,next:Se},Lt=pt("Carousel","-carousel",zn,on,e,o),tt=v(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:l,dotColorActive:h,dotColorFocus:g,dotLineWidth:p,dotLineWidthActive:D,arrowColor:T}}=Lt.value;return{"--n-bezier":t,"--n-dot-color":l,"--n-dot-color-focus":g,"--n-dot-color-active":h,"--n-dot-size":n,"--n-dot-line-width":p,"--n-dot-line-width-active":D,"--n-arrow-color":T}}),fe=a?en("carousel",void 0,tt,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:i,slideVNodes:V,duplicatedable:_,userWantsControl:z,autoSlideSize:d,displayIndex:O,realIndex:G,slideStyles:ve,translateStyle:Me,slidesControlListeners:At,handleTransitionEnd:Dt,handleResize:$t,handleSlideResize:Tt,handleMouseenter:Nt,handleMouseleave:Vt,isActive:F,arrowSlotProps:Et,dotSlotProps:Mt},Bt),{cssVars:a?void 0:tt,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:i,dotType:y,dotPlacement:V,slidesControlListeners:R,transitionProps:I={},arrowSlotProps:m,dotSlotProps:c,$slots:{default:_,dots:z,arrow:L}}=this,S=_&&tn(_())||[];let d=Vn(S);return d.length||(d=S.map(b=>E(Dn,null,{default:()=>dt(b)}))),this.duplicatedable&&(d=gn(d)),this.slideVNodes.value=d,this.autoSlideSize&&(d=d.map(b=>E(nt,{onResize:this.handleSlideResize},{default:()=>b}))),(e=this.onRender)===null||e===void 0||e.call(this),E("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${V}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},R,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),E(nt,{onResize:this.handleResize},{default:()=>E("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?d.map((b,f)=>E("div",{style:i[f],key:f},vt(E(nn,Object.assign({},I),{default:()=>b}),[[ht,this.isActive(f)]]))):d)}),this.showDots&&c.total>1&&ot(z,c,()=>[E(kn,{key:y+V,total:c.total,currentIndex:c.currentIndex,dotType:y,trigger:this.trigger,keyboard:this.keyboard})]),a&&ot(L,m,()=>[E(Pn,null)]))}});function Vn(e){return e.reduce((o,a)=>(In(a)&&o.push(a),o),[])}function An(e,o){let a;return(...r)=>{const i=()=>{clearTimeout(a),e(...r)};clearTimeout(a),a=setTimeout(i,o)}}const En={class:"mb-2 text-xs text-neutral-400 font-bold"},Mn={class:"ml-1"},Bn=["onClick"],Ln={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},jn={key:1},On={key:0,class:"absolute z-10 flex visible right-1"},Kn=["onClick"],Un={class:"p-1"},Gn={key:0,class:"p-1"},Xn={class:"p-1"},ze=le({__name:"ListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup(e,{emit:o}){const a=e,r=a.dataSources,i=We();async function y(S){o("select",S)}function V(S,d,b){b==null||b.stopPropagation(),S.isEdit=d}async function R(S,d){d==null||d.stopPropagation(),await i.updateGroupInfo({isSticky:!S.isSticky,groupId:S.uuid}),await i.queryMyGroup()}async function I(S,d){d==null||d.stopPropagation(),o("delete",S)}const m=An(I,600);async function c(S){const{uuid:d,title:b}=S;S.isEdit=!1,await i.updateGroupInfo({groupId:d,title:b}),await i.queryMyGroup()}async function _(S,d){d==null||d.stopPropagation(),d.key==="Enter"&&c(S)}function z(S,d){d==null||d.stopPropagation(),c(S)}function L(S){return i.active===S}return(S,d)=>{var b;return P(),N(be,null,[$("p",En,[Y(te(a.title)+" ",1),$("span",Mn,"("+te((b=s(r))==null?void 0:b.length)+")",1)]),(P(!0),N(be,null,mt(s(r),f=>(P(),N("div",{key:`${f.uuid}`},[$("a",{class:sn(["relative flex items-center gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]",L(f.uuid)&&["border-[#3076FD]","bg-neutral-100","text-[#846EF7]","dark:bg-[#24272e]","dark:border-[#3076fd]","pr-20"]]),onClick:k=>y(f),style:{"padding-top":"0.3rem","padding-bottom":"0.3rem"}},[$("span",null,[C(s(B),{icon:f.isSticky?"ri:pushpin-2-line":f.appId?"icon-park-outline:application-one":"ri:message-3-line"},null,8,["icon"])]),$("div",Ln,[f.isEdit?(P(),se(s(gt),{key:0,value:f.title,"onUpdate:value":k=>f.title=k,size:"tiny",onKeypress:k=>_(f,k)},null,8,["value","onUpdate:value","onKeypress"])):(P(),N("span",jn,te(f.title),1))]),L(f.uuid)?(P(),N("div",On,[f.isEdit?(P(),N("button",{key:0,class:"p-1",onClick:k=>z(f,k)},[C(s(B),{icon:"ri:save-line"})],8,Kn)):(P(),N(be,{key:1},[$("button",Un,[C(s(B),{icon:f.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:k=>R(f,k)},null,8,["icon","onClick"])]),f.appId?j("",!0):(P(),N("button",Gn,[C(s(B),{icon:"ri:edit-line",onClick:k=>V(f,!0,k)},null,8,["onClick"])])),C(s(pn),{placement:"bottom",onPositiveClick:k=>s(m)(f,k)},{trigger:Z(()=>[$("button",Xn,[C(s(B),{icon:"ri:delete-bin-line"})])]),default:Z(()=>[Y(" "+te(S.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):j("",!0)],10,Bn)]))),128))],64)}}}),Fn={class:"flex flex-col gap-3 text-sm",style:{gap:"0.3rem"}},Wn={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},Yn=le({__name:"List",setup(e){const{isMobile:o}=xt(),a=yt(),r=ln(),i=bt(),y=We(),V=wt(),R=A(100),I=v(()=>y.groupList),m=v(()=>y.groupKeyWord);ee(I,()=>R.value=R.value+1),ee(m,()=>R.value=R.value+1),v(()=>V.isLogin);function c(u){const J=new Date(u).getTime()+8*60*60*1e3;return new Date(J).getTime()}const _=new Date().setHours(0,0,0,0),z=v(()=>I.value.filter(u=>m.value?u.title.includes(m.value)&&u.isSticky:u.isSticky)),L=v(()=>I.value.filter(u=>m.value?u.title.includes(m.value)&&!u.isSticky&&u.appId:!u.isSticky&&u.appId)),S=v(()=>I.value.filter(u=>m.value?u.title.includes(m.value)&&!u.isSticky&&!u.appId&&c(u.createdAt)>=_:!u.isSticky&&!u.appId&&c(u.createdAt)>=_)),d=v(()=>I.value.filter(u=>m.value?u.title.includes(m.value)&&!u.isSticky&&!u.appId&&c(u.createdAt)<_:!u.isSticky&&!u.appId&&c(u.createdAt)<_));async function b(u){const{uuid:X}=u;k(X)||(await y.setActiveGroup(X),r.name!=="Chat"&&a.push("/chat"),o.value&&i.setSiderCollapsed(!0))}async function f(u){event==null||event.stopPropagation(),await y.deleteGroup(u),await y.queryMyGroup(),o.value&&i.setSiderCollapsed(!0)}function k(u){return y.active===u}return Ne(()=>{y.queryMyGroup()}),(u,X)=>(P(),se(s(rn),{class:"px-4"},{default:Z(()=>[$("div",Fn,[s(I).length?(P(),N(be,{key:1},[s(z).length?(P(),se(ze,{key:1e3+R.value,title:"置顶","data-sources":s(z),onSelect:b,onDelete:f},null,8,["data-sources"])):j("",!0),s(L).length?(P(),se(ze,{key:2e3+R.value,title:"应用分类组","data-sources":s(L),onSelect:b,onDelete:f},null,8,["data-sources"])):j("",!0),s(S).length?(P(),se(ze,{key:3e3+R.value,title:"今天","data-sources":s(S),onSelect:b,onDelete:f},null,8,["data-sources"])):j("",!0),s(d).length?(P(),se(ze,{key:4e3+R.value,title:"其他","data-sources":s(d),onSelect:b,onDelete:f},null,8,["data-sources"])):j("",!0)],64)):(P(),N("div",Wn,[C(s(B),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),$("span",null,te(u.$t("common.noData")),1)]))])]),_:1}))}}),qn={class:"flex flex-col h-full flex-1 min-h-0"},Hn=["src"],Zn={key:1,class:"flex h-14 items-center space-x-2 bg-[#fafbfc] dark:bg-[#18181c]"},Jn={class:"flex-1"},Qn={key:2,class:"flex h-14 items-center space-x-2 px-2 bg-[#fafbfc] dark:bg-[#18181c]"},eo={class:"flex-1"},to={class:"flex-1 min-h-0 pb-4 overflow-hidden"},no={class:"px-6 py-2 flex items-center border-t dark:border-t-neutral-800",style:{"box-shadow":"0 -5px 4px -5px #846ef7","padding-bottom":"0px"}},oo={class:"p-4 border-t dark:border-t-neutral-800 flex flex-col",style:{"padding-top":"0"}},ao={key:0,class:"my-1 flex items-center select-none",style:{"margin-top":"0rem","margin-bottom":"0.1rem"}},so={key:1,class:"my-1 flex items-center select-none",style:{"margin-top":"0rem","margin-bottom":"0.1rem"}},lo={key:2,class:"my-1 flex items-center select-none",style:{"margin-top":"0rem","margin-bottom":"0.1rem"}},io={key:3,class:"my-1 flex items-center select-none",style:{"margin-top":"0rem","margin-bottom":"0.1rem"}},ro={key:4,class:"my-1 flex items-center select-none",style:{"margin-top":"0rem","margin-bottom":"0.1rem"}},uo={key:5,class:"my-1 flex items-center select-none",style:{"margin-top":"0rem","margin-bottom":"0.1rem"}},co={class:"flex justify-between my-3",style:{"margin-top":"0rem"}},fo=$("span",{class:"mr-2"},"公告栏",-1),po=$("span",{class:"mr-3"},"工作台",-1),vo={class:"flex justify-betweenx",style:{"background-color":"rgba(199, 99, 99, 0.767)"}},ho=$("span",{class:"mr-3"},"清空全部非置顶会话",-1),bo=le({__name:"index",setup(e){const o=un(),a=yt(),r=bt(),i=We(),y=wt();cn();const V=A(null),R=A(null),I=v(()=>y.userBalance),m=dn(),c=v(()=>i==null?void 0:i.activeModelKeyDeductType),_=v(()=>i==null?void 0:i.activeModelKeyPrice),z=A(0),L=A(0),S=A(0),d=A(0),b=A(!1),f=A(null);ee(()=>y.userBalance.useModel3Token,(M,F)=>{var K;z.value=F||0,L.value=M||0,(K=V.value)==null||K.play()},{immediate:!0,flush:"post"}),ee(()=>y.userBalance.useModel4Token,(M,F)=>{var K;S.value=F||0,d.value=M||0,(K=R.value)==null||K.play()},{immediate:!0,flush:"post"});const{isMobile:k}=xt(),u=A(!1),X=v(()=>r.siderCollapsed),J=A("");function ve(M){J.value=M,i.setGroupKeyWord(M)}function U(){b.value=!1}function ie(){a.push("/role")}async function we(){try{u.value=!0,await i.addNewChatGroup(),await i.queryMyGroup(),u.value=!1,k.value&&r.setSiderCollapsed(!0)}catch{u.value=!1}}async function he(){m.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await i.delAllGroup()}})}function O(){r.setSiderCollapsed(!X.value)}function G(){b.value=!0,Xe(()=>{var M;(M=f.value)==null||M.focus()})}const oe=v(()=>k.value?{position:"fixed",zIndex:50}:{}),re=v(()=>k.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});ee(k,M=>{r.setSiderCollapsed(M)},{immediate:!0,flush:"post"});const ne=A([]);function Ve(){return fn({url:"/lunbo"})}return Ne(async()=>{try{const M=await Ve();ne.value=M}catch(M){console.error(M)}}),(M,F)=>(P(),N("div",null,[C(s(vn),{collapsed:s(X),"collapsed-width":0,width:260,"show-trigger":s(k)?!1:"bar","collapse-mode":"transform",position:"absolute",style:Fe(s(oe)),bordered:!0,"trigger-class":"custom-trigger-class",onUpdateCollapsed:O},{default:Z(()=>[$("div",{class:"flex flex-col h-full bg-[#eee] dark:bg-[#18181c]",style:Fe(s(re))},[$("main",qn,[ne.value.length>0?(P(),se(s(Nn),{key:0,interval:1e3,autoplay:"",style:{height:"auto"}},{default:Z(()=>[(P(!0),N(be,null,mt(ne.value,K=>(P(),N("div",null,[$("img",{class:"carousel-img",src:K.url},null,8,Hn)]))),256))]),_:1})):j("",!0),b.value?(P(),N("div",Zn,[C(s(pe),{type:"primary",loading:u.value,onClick:we},{default:Z(()=>[C(s(B),{icon:"ion:add-outline",class:"text-xl"})]),_:1},8,["loading"]),$("div",Jn,[C(s(gt),{modelValue:J.value,"onUpdate:modelValue":F[0]||(F[0]=K=>J.value=K),ref_key:"searchRef",ref:f,type:"text",placeholder:"对话历史查找",onBlur:U,clearable:"",onInput:ve},null,8,["modelValue"])])])):j("",!0),b.value?j("",!0):(P(),N("div",Qn,[$("div",eo,[C(s(pe),{type:"primary",style:{width:"100%","--n-color":"#846ef7"},loading:u.value,onClick:we},{default:Z(()=>[Y(" 新对话 "),C(s(B),{icon:"ion:add-outline",class:"text-xl"})]),_:1},8,["loading"])]),C(s(pe),{onClick:G},{default:Z(()=>[C(s(B),{icon:"icon-park-outline:search",class:"text-xl"})]),_:1})])),$("div",to,[C(Yn)]),$("div",no,[$("div",{class:"flex items-center w-full p-1 mb-1 text-[#3076fd] rounded cursor-pointer transition hover:bg-[#eef0f3] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:F[1]||(F[1]=K=>s(o).updateGoodsDialog(!0)),style:{color:"#846ef7"}},[C(s(B),{icon:"material-symbols:shopping-bag-outline",class:"mr-1 text-base"}),Y(" 进入市场选购您的套餐 ")])]),$("div",oo,[s(c)===1?(P(),N("div",ao,[C(s(B),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),Y("普通额度： "+te(`${s(I).sumModel3Count||0} 积分`),1)])):j("",!0),s(c)===1?(P(),N("div",so,[C(s(B),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),Y(" 我已使用： "),C(s(st),{ref_key:"model3AnimationInstRef",ref:V,from:z.value,to:L.value},null,8,["from","to"]),Y(" Token ")])):j("",!0),s(c)===1?(P(),N("div",lo,[C(s(B),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),Y(" 模型费用： "+te(`${s(_)||0}积分 / 次对话`),1)])):j("",!0),s(c)===2?(P(),N("div",io,[C(s(B),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),Y("我已使用： "),C(s(st),{ref_key:"model4AnimationInstRef",ref:R,from:S.value,to:d.value},null,8,["from","to"]),Y(" Token ")])):j("",!0),s(c)===2?(P(),N("div",ro,[C(s(B),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),Y("高级额度： "+te(`${s(I).sumModel4Count||0} 积分`),1)])):j("",!0),s(c)===2?(P(),N("div",uo,[C(s(B),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),Y("模型费用： "+te(`${s(_)||0}积分 / 次对话`),1)])):j("",!0),$("div",co,[C(s(pe),{type:"tertiary",size:"small",onClick:F[2]||(F[2]=K=>s(o).updateNoticeDialog(!0))},{default:Z(()=>[C(s(B),{icon:"mdi:notice-board",class:"ml-2 mr-2 text-sm"}),fo]),_:1}),C(s(pe),{type:"tertiary",size:"small",onClick:ie},{default:Z(()=>[C(s(B),{icon:"ri:emoji-sticker-line",class:"ml-2 mr-2 text-sm"}),po]),_:1})]),$("div",vo,[C(s(pe),{type:"tertiary",size:"small",style:{width:"100%"},onClick:he},{default:Z(()=>[C(s(B),{icon:"ant-design:delete-outlined",class:"ml-2 mr-2 text-sm"}),ho]),_:1})])])])],4)]),_:1},8,["collapsed","show-trigger","style"]),s(k)?vt((P(),N("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:O},null,512)),[[ht,!s(X)]]):j("",!0)]))}});export{bo as _};
