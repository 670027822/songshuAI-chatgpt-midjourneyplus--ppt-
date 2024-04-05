
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as be}from"./index-76271e87.js";import{A as x}from"./package-eb843579.js";import{d as ye,r as c,Q as S,B as Ce,x as ve,o as u,c as v,e as t,f as a,R as z,S as q,b as n,k as d,a as A,I as _,J as k,w as we,t as M,U as $,P as ke,E as j,h as s,X as Ve,q as G}from"./index-087a273d.js";import{u as he}from"./utcformatTime-e76e5157.js";import{C as Ue}from"./index-a706b913.js";const xe={style:{float:"right"}},Me={key:1},Ie={class:"dialog-footer"},ze={style:{"max-height":"200px",overflow:"scroll"}},qe={class:"dialog-footer"},Ae=ye({__name:"crami",setup(De){const L=c(),N=c(0),w=c(!1),V=c(!1),D=c(),h=c(0),T=c([]),P=c([]),b=c(!1),y=c([]),B=c([]),i=S({packageId:null,count:1,drawMjCount:0,model3Count:0,model4Count:0}),f=S({useId:"",status:"",page:1,size:15}),H=S({packageId:[{required:!0,message:"请选择套餐类型",trigger:"change"}],days:[{required:!0,message:"请填写有效期天数",trigger:"blur"}],count:[{required:!0,message:"请填写想要生成的数量",trigger:"blur"}],drawMjCount:[{required:!0,message:"卡密携带绘画数量",trigger:"blur"}],model3Count:[{required:!0,message:"卡密携带基础模型对话数量",trigger:"blur"}],model4Count:[{required:!0,message:"卡密携带高级模型金额",trigger:"blur"}]}),R=c([]);async function g(){try{b.value=!0;const o=await x.queryAllCrami(f),{rows:l,count:C}=o.data;b.value=!1,N.value=C,R.value=l}catch{b.value=!1}}async function K(o){const l=await ke.queryAllUser({size:30,username:o});P.value=l.data.rows}async function W(){const o=await x.queryAllPackage({size:100});T.value=o.data.rows}function Z(){W(),w.value=!0}async function E(o){o==null||o.validate(async l=>{l&&(await x.createCrami(i),j({type:"success",message:"生成卡密成功！"}),w.value=!1,g())})}function ee(o){o==null||o.resetFields()}function le(o){o==null||o.resetFields(),g()}async function te(o){await x.delCrami({id:o.id}),j({type:"success",message:"删除卡密成功！"}),g()}async function ae(o){y.value=o}async function oe(){try{b.value=!0,await x.batchDelCrami({ids:y.value.map(o=>o.id)}),b.value=!1,j({type:"success",message:"删除卡密成功！"}),g()}catch{b.value=!1}}function ne(){V.value=!0;const o=y.value.map(l=>`${l.code}<---->${l.packageName||"自定义套餐"}`);B.value=o}function re(o){return o.join(`
`)}function ue(o,l){const C=re(o),U=new Blob([C],{type:"text/plain"}),m=URL.createObjectURL(U),r=document.createElement("a");r.href=m,r.download=`${l}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(m),0)}function se(){const o=y.value.map(l=>`${l.code}<---->${l.packageName||"自定义套餐"}`);ue(o,"卡密信息")}const de=Ce(()=>R.value.some(o=>o.email));return ve(()=>{g()}),(o,l)=>{const C=s("el-option"),U=s("el-select"),m=s("el-form-item"),r=s("el-button"),ie=s("Plus"),me=s("el-icon"),F=s("el-form"),O=be,p=s("el-table-column"),Y=s("el-tag"),pe=s("el-popconfirm"),ce=s("el-table"),fe=s("el-pagination"),J=s("el-row"),_e=s("el-switch"),I=s("el-input"),Q=s("el-dialog"),ge=Ve("loading");return u(),v("div",null,[t(O,null,{default:a(()=>[t(F,{ref_key:"formRef",ref:L,inline:!0,model:f},{default:a(()=>[t(m,{label:"用户名称",prop:"useId"},{default:a(()=>[t(U,{modelValue:f.useId,"onUpdate:modelValue":l[0]||(l[0]=e=>f.useId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":K},{default:a(()=>[(u(!0),v(z,null,q(n(P),e=>(u(),_(C,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"卡密状态",prop:"status"},{default:a(()=>[t(U,{modelValue:f.status,"onUpdate:modelValue":l[1]||(l[1]=e=>f.status=e),placeholder:"请选择卡密状态",clearable:""},{default:a(()=>[(u(!0),v(z,null,q(n(Ue),e=>(u(),_(C,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,null,{default:a(()=>[t(r,{type:"primary",onClick:g},{default:a(()=>[d(" 查询 ")]),_:1}),t(r,{onClick:l[2]||(l[2]=e=>le(n(L)))},{default:a(()=>[d(" 重置 ")]),_:1})]),_:1}),A("div",xe,[n(y).length?(u(),_(r,{key:0,type:"danger",onClick:ne},{default:a(()=>[d(" 显示选中卡密 ")]),_:1})):k("",!0),n(y).length?(u(),_(r,{key:1,type:"danger",onClick:oe},{default:a(()=>[d(" 批量删除卡密 ")]),_:1})):k("",!0),n(y).length?(u(),_(r,{key:2,type:"primary",onClick:se},{default:a(()=>[d(" 批量导出卡密 ")]),_:1})):k("",!0),t(r,{type:"success",onClick:Z},{default:a(()=>[d(" 批量生成卡密 "),t(me,{class:"ml-3"},{default:a(()=>[t(ie)]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1}),t(O,{style:{width:"100%"}},{default:a(()=>[we((u(),_(ce,{border:"",data:n(R),style:{width:"100%"},size:"large",onSelectionChange:ae},{default:a(()=>[t(p,{type:"selection",width:"55"}),t(p,{prop:"code",label:"卡密账号",width:"180"}),t(p,{prop:"packageName",label:"套餐类型",width:"180"},{default:a(e=>[t(Y,{type:e.row.packageName?"success":"danger"},{default:a(()=>[d(M(e.row.packageName||"自定义卡密"),1)]),_:2},1032,["type"])]),_:1}),t(p,{prop:"code",label:"卡密状态",width:"180"},{default:a(e=>[t(Y,{type:e.row.status?"danger":"success"},{default:a(()=>[d(M(e.row.status?"已使用":"未使用"),1)]),_:2},1032,["type"])]),_:1}),t(p,{prop:"useId",label:"使用人ID",width:"90"}),n(de)?(u(),_(p,{key:0,prop:"email",label:"使用人邮箱",width:"180"})):k("",!0),t(p,{prop:"model3Count",label:"基础模型额度"}),t(p,{prop:"model4Count",label:"高级模型额度"}),t(p,{prop:"drawMjCount",label:"绘画模型额度"}),t(p,{prop:"days",label:"有效天数"},{default:a(e=>[d(M(e.row.days>0?`${e.row.days}天`:"永久"),1)]),_:1}),t(p,{prop:"createdAt",label:"注册时间",width:"200"},{default:a(e=>[d(M(n(he)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),t(p,{label:"操作"},{default:a(e=>[t(pe,{title:"确认删除此卡密么?",width:"200","icon-color":"red",onConfirm:X=>te(e.row)},{reference:a(()=>[t(r,{link:"",type:"danger",size:"small"},{default:a(()=>[d(" 删除卡密 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[ge,n(b)]]),t(J,{class:"flex justify-end mt-5"},{default:a(()=>[t(fe,{"current-page":f.page,"onUpdate:currentPage":l[3]||(l[3]=e=>f.page=e),"page-size":f.size,"onUpdate:pageSize":l[4]||(l[4]=e=>f.size=e),class:"mr-5","page-sizes":[15,50,100,200],layout:"total, sizes, prev, pager, next, jumper",total:n(N),onSizeChange:g,onCurrentChange:g},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),t(Q,{modelValue:n(w),"onUpdate:modelValue":l[13]||(l[13]=e=>$(w)?w.value=e:null),title:"生成卡密",width:"450",onClose:l[14]||(l[14]=e=>ee(n(D)))},{footer:a(()=>[A("span",Ie,[t(r,{onClick:l[11]||(l[11]=e=>w.value=!1)},{default:a(()=>[d("放弃生成")]),_:1}),t(r,{type:"primary",onClick:l[12]||(l[12]=e=>E(n(D)))},{default:a(()=>[d(" 确定生成 ")]),_:1})])]),default:a(()=>[t(F,{ref_key:"formCramiRef",ref:D,"label-position":"right","label-width":"100px",model:i,rules:H},{default:a(()=>[t(J,null,{default:a(()=>[t(m,{label:"是否生成自定义卡密","label-width":"170px"},{default:a(()=>[t(_e,{modelValue:n(h),"onUpdate:modelValue":l[5]||(l[5]=e=>$(h)?h.value=e:null),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1}),n(h)?k("",!0):(u(),_(m,{key:0,label:"套餐类型",prop:"packageId"},{default:a(()=>[t(U,{modelValue:i.packageId,"onUpdate:modelValue":l[6]||(l[6]=e=>i.packageId=e),modelModifiers:{number:!0},placeholder:"请选择套餐类型",clearable:"",style:{width:"100%"}},{default:a(()=>[(u(!0),v(z,null,q(n(T),e=>(u(),_(C,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})),n(h)?(u(),v("div",Me,[t(m,{label:"基础模型额度",prop:"model3Count"},{default:a(()=>[t(I,{modelValue:i.model3Count,"onUpdate:modelValue":l[7]||(l[7]=e=>i.model3Count=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带基础模型额度"},null,8,["modelValue"])]),_:1}),t(m,{label:"高级模型额度",prop:"model4Count"},{default:a(()=>[t(I,{modelValue:i.model4Count,"onUpdate:modelValue":l[8]||(l[8]=e=>i.model4Count=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带高级模型额度"},null,8,["modelValue"])]),_:1}),t(m,{label:"绘画模型额度",prop:"drawMjCount"},{default:a(()=>[t(I,{modelValue:i.drawMjCount,"onUpdate:modelValue":l[9]||(l[9]=e=>i.drawMjCount=e),modelModifiers:{number:!0},type:"number",placeholder:"卡密携带绘画积分额度"},null,8,["modelValue"])]),_:1})])):k("",!0),t(m,{label:"生成数量",prop:"count"},{default:a(()=>[t(I,{modelValue:i.count,"onUpdate:modelValue":l[10]||(l[10]=e=>i.count=e),modelModifiers:{number:!0},type:"number",placeholder:"本次生成的张数"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),t(Q,{modelValue:n(V),"onUpdate:modelValue":l[16]||(l[16]=e=>$(V)?V.value=e:null),title:"卡密列表"},{footer:a(()=>[A("span",qe,[t(r,{onClick:l[15]||(l[15]=e=>V.value=!1)},{default:a(()=>[d("关闭弹窗")]),_:1})])]),default:a(()=>[A("div",ze,[(u(!0),v(z,null,q(n(B),(e,X)=>(u(),v("div",{key:X},M(e),1))),128))])]),_:1},8,["modelValue"])])}}});typeof G=="function"&&G(Ae);export{Ae as default};
