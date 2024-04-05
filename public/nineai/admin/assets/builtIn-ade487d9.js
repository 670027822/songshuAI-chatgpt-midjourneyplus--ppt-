
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as K}from"./index-76271e87.js";import{a as m}from"./config-de6df455.js";import{d as C,Q as k,r as f,x as q,o as U,c as j,e,f as t,a as S,k as E,E as v,h as i,q as B}from"./index-087a273d.js";const N={class:"flex justify-between"},M=S("b",null,"百度文本审核参数设置",-1),O=C({__name:"builtIn",setup(R){const l=k({nineaiBuiltInSensitiveStatus:"",nineaiBuiltInSensitiveApiBase:"",nineaiBuiltInSensitiveAuthKey:""}),g=f({nineaiBuiltInSensitiveStatus:[{required:!0,trigger:"blur",message:"请选择是否启用官方敏感词审核"}],nineaiBuiltInSensitiveApiBase:[{required:!0,trigger:"blur",message:"请填写官方敏感词审核Api地址"}],nineaiBuiltInSensitiveAuthKey:[{required:!0,trigger:"blur",message:"请填写官方敏感词审核授权Key"}]}),c=f();async function _(){const a=await m.queryConfig({keys:["nineaiBuiltInSensitiveStatus","nineaiBuiltInSensitiveAuthKey","nineaiBuiltInSensitiveApiBase"]});Object.assign(l,a.data)}function y(){var a;(a=c.value)==null||a.validate(async n=>{if(n){try{await m.setConfig({settings:I(l)}),v.success("变更配置信息成功")}catch{}_()}else v.error("请填写完整信息")})}function I(a){return Object.keys(a).map(n=>({configKey:n,configVal:a[n]}))}return q(()=>{_()}),(a,n)=>{const p=i("el-alert"),b=K,A=i("el-button"),h=i("el-switch"),x=i("el-tooltip"),s=i("el-form-item"),u=i("el-col"),r=i("el-row"),d=i("el-input"),V=i("el-form"),w=i("el-card");return U(),j("div",null,[e(b,null,{default:t(()=>[e(p,{closable:!1,"show-icon":"",title:"松鼠Ai敏感词说明",description:"官方提供的敏感词检测Api、价格相对实惠、如需使用请联系管理员购买、后续开通专有的通道！",type:"success"})]),_:1}),e(w,{style:{margin:"20px"}},{header:t(()=>[S("div",N,[M,e(A,{class:"button",text:"",onClick:y},{default:t(()=>[E(" 保存设置 ")]),_:1})])]),default:t(()=>[e(V,{ref_key:"formRef",ref:c,rules:g.value,model:l,"label-width":"150px"},{default:t(()=>[e(r,null,{default:t(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"开启此敏感词设置",prop:"nineaiBuiltInSensitiveStatus"},{default:t(()=>[e(x,{content:"开启将打开敏感词检测、如果同时开启其他敏感词将会通过菜单顺序仅同时开启一个！",placement:"top","show-after":500},{default:t(()=>[e(h,{modelValue:l.nineaiBuiltInSensitiveStatus,"onUpdate:modelValue":n[0]||(n[0]=o=>l.nineaiBuiltInSensitiveStatus=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"文本审核ApiKey",prop:"nineaiBuiltInSensitiveApiBase"},{default:t(()=>[e(d,{modelValue:l.nineaiBuiltInSensitiveApiBase,"onUpdate:modelValue":n[1]||(n[1]=o=>l.nineaiBuiltInSensitiveApiBase=o),placeholder:"请填写官方敏感词审核Api地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(s,{label:"文本审核SecretKey",prop:"nineaiBuiltInSensitiveAuthKey"},{default:t(()=>[e(d,{modelValue:l.nineaiBuiltInSensitiveAuthKey,"onUpdate:modelValue":n[2]||(n[2]=o=>l.nineaiBuiltInSensitiveAuthKey=o),placeholder:"请填写官方敏感词审核授权Key",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof B=="function"&&B(O);export{O as default};
