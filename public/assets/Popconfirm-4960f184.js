import{aG as B,d as k,cl as m,aB as y,ai as O,b as u,aF as _,aW as g,aJ as h,aq as a,be as S,cy as w,y as P,aw as R,az as I,at as C,aT as f,as as x,aC as z,r as $,bt as F,cB as U,a8 as q,cC as E,d4 as K,b0 as b,aY as V}from"./index-ee4bc876.js";const N=B("n-popconfirm"),j={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},T=w(j),W=k({name:"NPopconfirmPanel",props:j,setup(e){const{localeRef:t}=m("Popconfirm"),{inlineThemeDisabled:s}=y(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:r}=O(N),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:l}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":l}}),o=s?_("popconfirm-panel",void 0,d,r):void 0;return Object.assign(Object.assign({},m("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:g(r,"positiveButtonProps"),negativeButtonProps:g(r,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=h(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(P,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(P,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},S(n.default,r=>s||r?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},h(n.icon,()=>[a(R,{clsPrefix:t},{default:()=>a(I,null)})])):null,r):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),L=C("popconfirm",[f("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[f("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),f("action",`
 display: flex;
 justify-content: flex-end;
 `,[x("&:not(:first-child)","margin-top: 8px"),C("button",[x("&:not(:last-child)","margin-right: 8px;")])])]),M=Object.assign(Object.assign(Object.assign({},z.props),E),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),G=k({name:"Popconfirm",props:M,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=y(),s=z("Popconfirm","-popconfirm",L,K,e,t),n=$(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var l;v!==!1&&((l=n.value)===null||l===void 0||l.setShow(!1),c&&b(c,!1))})}function r(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var l;v!==!1&&((l=n.value)===null||l===void 0||l.setShow(!1),c&&b(c,!1))})}return V(N,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:r})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(q,U(t,T,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=F(t,T);return a(W,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{G as N};
