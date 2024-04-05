
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as k}from"./index-76271e87.js";import{a as _}from"./config-de6df455.js";import{d as v,Q as F,r as f,x as L,o as M,c as q,e,f as o,a as x,k as B,E as d,h as l,q as g}from"./index-087a273d.js";const E={class:"flex justify-between"},N=x("b",null,"MJ参数设置",-1),U=v({__name:"prompt",setup(J){const a=F({mjCustomFanyiPrompt:"",mjCustomLianxiangPrompt:""}),y=f({}),r=f();async function m(){const n=await _.queryConfig({keys:["mjCustomFanyiPrompt","mjCustomLianxiangPrompt"]});Object.assign(a,n.data)}function C(){var n;(n=r.value)==null||n.validate(async t=>{if(t){try{await _.setConfig({settings:b(a)}),d.success("变更配置信息成功")}catch{}m()}else d.error("请填写完整信息")})}function b(n){return Object.keys(n).map(t=>({configKey:t,configVal:n[t]}))}return L(()=>{m()}),(n,t)=>{const c=l("el-alert"),j=k,w=l("el-button"),i=l("el-input"),u=l("el-form-item"),p=l("el-col"),P=l("el-row"),V=l("el-form"),h=l("el-card");return M(),q("div",null,[e(j,null,{default:o(()=>[e(c,{closable:!1,"show-icon":"",title:"MJ参数说明",description:"如果您是海外服务器则不强制开启代理、反之则需要开启代理、代理为系统配套项目、非常规代理、如果您想自己搭建代理请查看教程、如果您想使用系统提供的默认代理、那么选择开启代理并且不填写代理地址即可使用默认地址、如果想获取默认地址请在售后群获取地址！",type:"success"})]),_:1}),e(h,{style:{margin:"20px"}},{header:o(()=>[x("div",E,[N,e(w,{class:"button",text:"",onClick:C},{default:o(()=>[B(" 保存设置 ")]),_:1})])]),default:o(()=>[e(V,{ref_key:"formRef",ref:r,rules:y.value,model:a,"label-width":"130px"},{default:o(()=>[e(P,null,{default:o(()=>[e(p,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(u,{label:"自定义翻译提示词",prop:"mindCustomPrompt"},{default:o(()=>[e(i,{modelValue:a.mjCustomFanyiPrompt,"onUpdate:modelValue":t[0]||(t[0]=s=>a.mjCustomFanyiPrompt=s),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(u,{label:"自定义联想提示词",prop:"mindCustomPrompt"},{default:o(()=>[e(i,{modelValue:a.mjCustomLianxiangPrompt,"onUpdate:modelValue":t[1]||(t[1]=s=>a.mjCustomLianxiangPrompt=s),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof g=="function"&&g(U);export{U as default};
