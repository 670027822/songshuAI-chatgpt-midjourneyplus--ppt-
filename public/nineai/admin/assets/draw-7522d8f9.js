
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as $}from"./index-76271e87.js";import{A as I}from"./chat-11829092.js";import{d as J,r as i,Q,x as W,o as s,c,e as l,f as t,R as m,S as f,b as A,k as v,w as X,I as d,a as h,P as G,h as o,X as H,t as L,J as S,E as K,q as U}from"./index-087a273d.js";import{R as Y,D as Z}from"./index-a706b913.js";const ee={class:"flex draw_container"},le={class:"draw_head"},ae={class:"draw_footer flex mt-3 justify-between items-center"},te=J({__name:"draw",setup(oe){const _=i(!1),D=i(),x=i(0),C=i([]),n=Q({userId:"",rec:"",model:"DALL-E2",page:1,size:14}),V=i([]);async function u(){_.value=!0;try{const r=await I.queryDrawAll(n),{rows:a,count:g}=r.data;_.value=!1,x.value=g,V.value=a}catch{_.value=!1}}async function M(r){const a=await I.recDrawImg({id:r});K.success(a.data),u()}async function R(r){const a=await G.queryAllUser({size:30,username:r});C.value=a.data.rows}function N(r){r==null||r.resetFields(),u()}return W(()=>{u()}),(r,a)=>{const g=o("el-alert"),y=$,w=o("el-option"),b=o("el-select"),p=o("el-form-item"),k=o("el-button"),P=o("el-form"),T=o("el-image"),j=o("el-tag"),q=o("Plus"),z=o("el-icon"),B=o("Minus"),E=o("el-pagination"),O=o("el-row"),F=H("loading");return s(),c("div",null,[l(y,null,{default:t(()=>[l(g,{closable:!1,"show-icon":"",title:"DALL-E绘画说明",description:"此处的midjourney模型选择是老版本的历史数据、新版迁移至新菜单分开！",type:"success"})]),_:1}),l(y,null,{default:t(()=>[l(P,{ref_key:"formRef",ref:D,inline:!0,model:n},{default:t(()=>[l(p,{label:"用户名称",prop:"userId"},{default:t(()=>[l(b,{modelValue:n.userId,"onUpdate:modelValue":a[0]||(a[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":R},{default:t(()=>[(s(!0),c(m,null,f(C.value,e=>(s(),d(w,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"图片状态",prop:"rec"},{default:t(()=>[l(b,{modelValue:n.rec,"onUpdate:modelValue":a[1]||(a[1]=e=>n.rec=e),placeholder:"请选择图片状态",clearable:""},{default:t(()=>[(s(!0),c(m,null,f(A(Y),e=>(s(),d(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,{label:"绘画模型",prop:"model"},{default:t(()=>[l(b,{modelValue:n.model,"onUpdate:modelValue":a[2]||(a[2]=e=>n.model=e),placeholder:"请选择绘画模型",clearable:""},{default:t(()=>[(s(!0),c(m,null,f(A(Z),e=>(s(),d(w,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(p,null,{default:t(()=>[l(k,{type:"primary",onClick:u},{default:t(()=>[v(" 查询 ")]),_:1}),l(k,{onClick:a[3]||(a[3]=e=>N(D.value))},{default:t(()=>[v(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),X((s(),d(y,{style:{width:"100%"}},{default:t(()=>[h("div",ee,[(s(!0),c(m,null,f(V.value,e=>(s(),c("div",{key:e.id,style:{height:"280px"},class:"draw_img_container flex border"},[h("div",le,[l(T,{fit:"contain","preview-src-list":[e.answer],src:e.thumbImg,lazy:"",class:"draw_img","hide-on-click-modal":""},null,8,["preview-src-list","src"])]),h("div",ae,[l(j,{class:"ml-2",type:e.rec?"success":"info"},{default:t(()=>[v(L(e.rec?"已推荐":"未推荐"),1)]),_:2},1032,["type"]),l(k,{type:"warning",plain:"",size:"small",onClick:ne=>M(e.id)},{default:t(()=>[v(L(e.rec?"取消推荐":"加入推荐")+" ",1),e.rec?S("",!0):(s(),d(z,{key:0},{default:t(()=>[l(q)]),_:1})),e.rec?(s(),d(z,{key:1},{default:t(()=>[l(B)]),_:1})):S("",!0)]),_:2},1032,["onClick"])])]))),128))]),l(O,{class:"flex justify-end mt-5"},{default:t(()=>[l(E,{"current-page":n.page,"onUpdate:currentPage":a[4]||(a[4]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":a[5]||(a[5]=e=>n.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:x.value,onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})),[[F,_.value]])])}}});typeof U=="function"&&U(te);export{te as default};
