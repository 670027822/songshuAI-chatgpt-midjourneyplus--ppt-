
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as $}from"./index-76271e87.js";import{A as U}from"./chat-11829092.js";import{d as E,r as _,Q,x as W,B as X,o as s,c,e as a,f as t,R as m,S as v,b,k as g,w as G,I as i,a as k,P as H,h as r,X as K,t as D,J as S,E as Y,q as A}from"./index-087a273d.js";import{R as Z,a as ee}from"./index-a706b913.js";const le={class:"flex draw_container"},ae={class:"draw_head"},te={class:"draw_footer flex mt-3 justify-between items-center"},oe=E({__name:"midjourney",setup(ne){const p=_(!1),x=_(),C=_(0),V=_([]),n=Q({userId:"",rec:"",status:3,page:1,size:10}),h=_([]);async function u(){p.value=!0;try{const o=await U.queryMjDrawAll(n),{rows:l,count:d}=o.data;p.value=!1,C.value=d,h.value=l}catch{p.value=!1}}async function M(o){const l=await U.recMjDrawImg({id:o});Y.success(l.data),u()}async function T(o){const l=await H.queryAllUser({size:30,username:o});V.value=l.data.rows}function j(o){o==null||o.resetFields(),u()}W(()=>{u()});const R=X(()=>h.value.filter(o=>o.gk===1));return(o,l)=>{const d=r("el-option"),y=r("el-select"),f=r("el-form-item"),w=r("el-button"),N=r("el-form"),z=$,B=r("el-image"),P=r("el-tag"),q=r("Plus"),I=r("el-icon"),L=r("Minus"),O=r("el-pagination"),F=r("el-row"),J=K("loading");return s(),c("div",null,[a(z,null,{default:t(()=>[a(N,{ref_key:"formRef",ref:x,inline:!0,model:n},{default:t(()=>[a(f,{label:"用户名称",prop:"userId"},{default:t(()=>[a(y,{modelValue:n.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":T},{default:t(()=>[(s(!0),c(m,null,v(V.value,e=>(s(),i(d,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:"推荐状态",prop:"rec"},{default:t(()=>[a(y,{modelValue:n.rec,"onUpdate:modelValue":l[1]||(l[1]=e=>n.rec=e),placeholder:"请选择推荐状态",clearable:""},{default:t(()=>[(s(!0),c(m,null,v(b(Z),e=>(s(),i(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:"绘制状态",prop:"status"},{default:t(()=>[a(y,{modelValue:n.status,"onUpdate:modelValue":l[2]||(l[2]=e=>n.status=e),placeholder:"请选择图片绘制状态",clearable:""},{default:t(()=>[(s(!0),c(m,null,v(b(ee),e=>(s(),i(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,null,{default:t(()=>[a(w,{type:"primary",onClick:u},{default:t(()=>[g(" 查询 ")]),_:1}),a(w,{onClick:l[3]||(l[3]=e=>j(x.value))},{default:t(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),G((s(),i(z,{style:{width:"100%"}},{default:t(()=>[k("div",le,[(s(!0),c(m,null,v(b(R),e=>(s(),c("div",{key:e.id,style:{height:"280px"},class:"draw_img_container flex border"},[k("div",ae,[a(B,{fit:"contain","preview-src-list":[e.fileInfo.cosUrl],src:e.fileInfo.cosUrl,lazy:"",class:"draw_img","hide-on-click-modal":""},null,8,["preview-src-list","src"])]),k("div",te,[a(P,{class:"ml-2",type:e.rec?"success":"info"},{default:t(()=>[g(D(e.rec?"已推荐":"未推荐"),1)]),_:2},1032,["type"]),a(w,{type:"warning",plain:"",size:"small",onClick:se=>M(e.id)},{default:t(()=>[g(D(e.rec?"取消推荐":"加入推荐")+" ",1),e.rec?S("",!0):(s(),i(I,{key:0},{default:t(()=>[a(q)]),_:1})),e.rec?(s(),i(I,{key:1},{default:t(()=>[a(L)]),_:1})):S("",!0)]),_:2},1032,["onClick"])])]))),128))]),a(F,{class:"flex justify-end mt-5"},{default:t(()=>[a(O,{"current-page":n.page,"onUpdate:currentPage":l[4]||(l[4]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":l[5]||(l[5]=e=>n.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:C.value,onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})),[[J,p.value]])])}}});typeof A=="function"&&A(oe);export{oe as default};