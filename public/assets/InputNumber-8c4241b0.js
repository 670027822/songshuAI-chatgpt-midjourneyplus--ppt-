import{d as le,aq as u,as as Me,at as X,aB as Se,aC as re,cl as Te,aV as Ce,r as B,aW as De,aX as Fe,aM as g,w as Pe,bz as Oe,b as Ae,N as ke,be as q,cm as Ue,bx as J,cn as _e,aJ as Q,aw as Y,co as Z,aK as $e,b0 as I,a9 as Ee}from"./index-7811a262.js";const He=le({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});function Le(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function je(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function H(n){return n==null?!0:!Number.isNaN(n)}function ee(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function L(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const ze=Me([X("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),X("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,Ge=Object.assign(Object.assign({},re.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),We=le({name:"InputNumber",props:Ge,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:C}=Se(n),a=re("InputNumber","-input-number",ze,Ue,n,p),{localeRef:v}=Te("InputNumber"),R=Ce(n),{mergedSizeRef:ie,mergedDisabledRef:ue,mergedStatusRef:ae}=R,c=B(null),j=B(null),z=B(null),D=B(n.defaultValue),oe=De(n,"value"),d=Fe(oe,D),h=B(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(l=>l===void 0?0:F(l));return Math.max(...t)},de=g(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),M=g(()=>{const e=L(n.step);return e!==null?e===0?1:Math.abs(e):1}),G=g(()=>{const e=L(n.min);return e!==null?e:null}),K=g(()=>{const e=L(n.max);return e!==null?e:null}),V=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":l,onUpdateValue:r,onChange:s}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=R;s&&I(s,e),r&&I(r,e),l&&I(l,e),D.value=e,f(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:l,isInputing:r})=>{const{value:s}=h;if(r&&je(s))return!1;const f=(n.parse||Le)(s);if(f===null)return t&&V(null),null;if(H(f)){const x=F(f),{precision:N}=n;if(N!==void 0&&N<x&&!l)return!1;let m=parseFloat((f+e).toFixed(N??se(f)));if(H(m)){const{value:$}=K,{value:E}=G;if($!==null&&m>$){if(!t||r)return!1;m=$}if(E!==null&&m<E){if(!t||r)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&V(m),m)}}return!1},b=()=>{const{value:e}=d;if(H(e)){const{format:t,precision:l}=n;t?h.value=t(e):e===null||l===void 0||F(e)>l?h.value=ee(e,void 0):h.value=ee(e,l)}else h.value=String(e)};b();const fe=g(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),O=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:l}=R;t&&I(t,e),l()}function me(e){var t,l;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const r=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(r!==!1){const x=(l=c.value)===null||l===void 0?void 0:l.inputElRef;x&&(x.value=String(r||"")),d.value===r&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:f}=R;s&&I(s,e),f(),Ee(()=>{b()})}function ve(e){const{onClear:t}=n;t&&I(t,e)}function A(){const{value:e}=O;if(!e){_();return}const{value:t}=d;if(t===null)n.validator||V(W());else{const{value:l}=M;o({offset:l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function k(){const{value:e}=P;if(!e){U();return}const{value:t}=d;if(t===null)n.validator||V(W());else{const{value:l}=M;o({offset:-l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const he=ce,ge=me;function W(){if(n.validator)return null;const{value:e}=G,{value:t}=K;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){ve(e),V(null)}function be(e){var t,l,r;!((t=z.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((l=j.value)===null||l===void 0)&&l.$el.contains(e.target)&&e.preventDefault(),(r=c.value)===null||r===void 0||r.activate()}let w=null,y=null,S=null;function U(){S&&(window.clearTimeout(S),S=null),w&&(window.clearInterval(w),w=null)}function _(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function xe(){U(),S=window.setTimeout(()=>{w=window.setInterval(()=>{k()},te)},ne),J("mouseup",document,U,{once:!0})}let T=null;function Ie(){_(),T=window.setTimeout(()=>{y=window.setInterval(()=>{A()},te)},ne),J("mouseup",document,_,{once:!0})}const Ve=()=>{y||A()},we=()=>{w||k()};function ye(e){var t,l;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((l=c.value)===null||l===void 0||l.deactivate())}else if(e.key==="ArrowUp"){if(!O.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&k()}}function Ne(e){h.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Pe(d,()=>{b()});const Be={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Re=Oe("InputNumber",C,p);return Object.assign(Object.assign({},Be),{rtlEnabled:Re,inputInstRef:c,minusButtonInstRef:j,addButtonInstRef:z,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:D,mergedValue:d,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:ie,mergedDisabled:ue,displayedValue:h,addable:O,minusable:P,mergedStatus:ae,handleFocus:he,handleBlur:ge,handleClear:pe,handleMouseDown:be,handleAddClick:Ve,handleMinusClick:we,handleAddMousedown:Ie,handleMinusMousedown:xe,handleKeyDown:ye,handleUpdateDisplayedValue:Ne,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Ae(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,l,r,s]=_e(e);return{textColorTextDisabled:`rgb(${t}, ${l}, ${r})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>u(Z,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Q(i["minus-icon"],()=>[u(Y,{clsPrefix:n},{default:()=>u(He,null)})])}),C=()=>u(Z,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Q(i["add-icon"],()=>[u(Y,{clsPrefix:n},{default:()=>u($e,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(ke,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),q(i.prefix,v=>v?u("span",{class:`${n}-input-number-prefix`},v):null)]:(a=i.prefix)===null||a===void 0?void 0:a.call(i)},suffix:()=>{var a;return this.showButton?[q(i.suffix,v=>v?u("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,C()]:(a=i.suffix)===null||a===void 0?void 0:a.call(i)}}))}});export{We as N};