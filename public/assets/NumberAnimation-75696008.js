import{cp as b,cq as I,bk as N,d as R,cl as S,r as V,b as v,h as A,aN as T}from"./index-b6f4ce48.js";var F=1/0,x=17976931348623157e292;function p(t){if(!t)return t===0?t:0;if(t=b(t),t===F||t===-F){var e=t<0?-1:1;return e*x}return t===t?t:0}function E(t){var e=p(t),a=e%1;return e===e?a?e-a:e:0}var _=I.isFinite,k=Math.min;function q(t){var e=Math[t];return function(a,n){if(a=b(a),n=n==null?0:k(E(n),292),n&&_(a)){var r=(N(a)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(N(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(a)}}var B=q("round");const L=B,O=t=>1-Math.pow(1-t,5);function P(t){const{from:e,to:a,duration:n,onUpdate:r,onFinish:i}=t,u=()=>{const c=performance.now(),s=Math.min(c-d,n),f=e+(a-e)*O(s/n);if(s===n){i();return}r(f),requestAnimationFrame(u)},d=performance.now();u()}const U={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},G=R({name:"NumberAnimation",props:U,setup(t){const{localeRef:e}=S("name"),{duration:a}=t,n=V(t.from),r=v(()=>{const{locale:o}=t;return o!==void 0?o:e.value});let i=!1;const u=o=>{n.value=o},d=()=>{var o;n.value=t.to,i=!1,(o=t.onFinish)===null||o===void 0||o.call(t)},c=(o=t.from,l=t.to)=>{i=!0,n.value=t.from,o!==l&&P({from:o,to:l,duration:a,onUpdate:u,onFinish:d})},s=v(()=>{var o;const m=L(n.value,t.precision).toFixed(t.precision).split("."),h=new Intl.NumberFormat(r.value),M=(o=h.formatToParts(.5).find(y=>y.type==="decimal"))===null||o===void 0?void 0:o.value,g=t.showSeparator?h.format(Number(m[0])):m[0],w=m[1];return{integer:g,decimal:w,decimalSeparator:M}});function f(){i||c()}return A(()=>{T(()=>{t.active&&c()})}),Object.assign({formattedValue:s},{play:f})},render(){const{formattedValue:{integer:t,decimal:e,decimalSeparator:a}}=this;return[t,e?a:null,e]}});export{G as N};
