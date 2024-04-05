
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as j}from"./index-76271e87.js";import{a as _}from"./config-de6df455.js";import{d as H,Q as N,r as p,x as S,o as g,c as h,e as t,f as l,a as y,k as b,R as E,S as G,E as P,h as a,t as U,q as L}from"./index-087a273d.js";const B={class:"flex justify-between"},R=y("b",null,"客户端动态菜单设置参数设置",-1),D=H({__name:"logo",setup(J){const x=[{label:"ChatGpt聊天",path:"/chat"},{label:"Dall-E绘画",path:"/draw"},{label:"Midjourney绘画",path:"/midjourney"},{label:"mj公共预览页",path:"/market"},{label:"mind思维导图",path:"/mind"},{label:"应用广场",path:"/app-store"},{label:"不指定首页",path:""}],n=N({clientMenuList:[],clientHomePath:"",clientLogoPath:"",clientFavoIconPath:""}),v=p({clientHomePath:[{required:!1,trigger:"change",message:"请选择项目默认主页地址"}],clientMenuList:[{required:!1,trigger:"change",message:"请选择客户端开放的菜单"}],clientLogoPath:[{required:!1,trigger:"blur",message:"请填写您的网站LOGO图片链接"}],clientFavoIconPath:[{required:!1,trigger:"blur",message:"请填写您的网站favorit.ico网站logo地址"}]}),u=p();async function d(){const o=await _.queryConfig({keys:["clientHomePath","clientMenuList","clientLogoPath","clientFavoIconPath"]}),e=o.data;e.clientMenuList=e.clientMenuList?JSON.parse(e.clientMenuList):[],Object.assign(n,o.data)}function V(){var o;(o=u.value)==null||o.validate(async e=>{if(e){try{await _.setConfig({settings:C(n)}),P.success("变更配置信息成功")}catch{}d()}else P.error("请填写完整信息")})}function M(o,e){if(["clientMenuList"].includes(o)){if(!e)return[];if(e)return JSON.stringify(e)}else return e}function C(o){return Object.keys(o).map(e=>({configKey:e,configVal:M(e,o[e])}))}return S(()=>{d()}),(o,e)=>{const m=a("el-alert"),O=j,w=a("el-button"),k=a("el-radio"),q=a("el-radio-group"),r=a("el-form-item"),i=a("el-col"),c=a("el-row"),f=a("el-input"),F=a("el-form"),I=a("el-card");return g(),h("div",null,[t(O,null,{default:l(()=>[t(m,{closable:!1,"show-icon":"",title:"动态菜单配置说明",description:"动态菜单继承到下方、用户端logo配置在客户端左上角、ico为网站图标请使用svg格式、可以在线转格式！",type:"success"})]),_:1}),t(I,{style:{margin:"20px"}},{header:l(()=>[y("div",B,[R,t(w,{class:"button",text:"",onClick:V},{default:l(()=>[b(" 保存设置 ")]),_:1})])]),default:l(()=>[t(F,{ref_key:"formRef",ref:u,rules:v.value,model:n,"label-width":"130px"},{default:l(()=>[t(c,null,{default:l(()=>[t(i,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[t(r,{label:"设置指定首页",prop:"clientHomePath"},{default:l(()=>[t(q,{modelValue:n.clientHomePath,"onUpdate:modelValue":e[0]||(e[0]=s=>n.clientHomePath=s)},{default:l(()=>[(g(),h(E,null,G(x,s=>t(k,{key:s.path,size:"small",border:"",label:s.path},{default:l(()=>[b(U(s.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(i,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[t(r,{label:"用户端LOGO",prop:"clientLogoPath"},{default:l(()=>[t(f,{modelValue:n.clientLogoPath,"onUpdate:modelValue":e[1]||(e[1]=s=>n.clientLogoPath=s),placeholder:"请填写您要设置的网站LOGO图片链接",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(c,null,{default:l(()=>[t(i,{xs:24,md:24,lg:24,xl:24},{default:l(()=>[t(r,{label:"用户端ico",prop:"clientFavoIconPath"},{default:l(()=>[t(f,{modelValue:n.clientFavoIconPath,"onUpdate:modelValue":e[2]||(e[2]=s=>n.clientFavoIconPath=s),placeholder:"请填写您要设置的网站ico地址、格式为svg",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof L=="function"&&L(D);export{D as default};
