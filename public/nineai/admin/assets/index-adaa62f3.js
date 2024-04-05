
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as re}from"./index-76271e87.js";import{d as se,r as b,Q as k,x as de,o as v,c as T,e as l,f as a,R as N,S as L,b as C,k as r,w as ie,I as x,t as g,P as M,E as j,h as d,X as pe,q as O}from"./index-087a273d.js";import{r as Q,U as me,q as fe}from"./index-a706b913.js";import{u as X}from"./utcformatTime-e76e5157.js";const ce=se({__name:"index",setup(be){const $=b(),z=b(0),V=b(!1),U=b(!1),y=b(!1),h=b(0),I=b(),w=k({status:0,id:0}),m=k({model3Count:0,model4Count:0,drawMjCount:0}),s=k({username:"",email:"",status:"",phone:"",page:1,size:15}),G=k({model3Count:[{required:!0,message:"请填写赠送基础模型额度",trigger:"blur"}],model4Count:[{required:!0,message:"请填写赠送高级模型额度",trigger:"blur"}],drawMjCount:[{required:!0,message:"请填写赠绘画积分额度",trigger:"blur"}]}),D=b([]);async function _(){try{U.value=!0;const n=await M.queryAllUser(s),{rows:t,count:p}=n.data;U.value=!1,z.value=p,D.value=t}catch{U.value=!1}}function H(n){V.value=!0,w.status=n.status,w.id=n.id}function J(n){y.value=!0,h.value=n.id}async function K(){(await M.updateUserStatus(w)).success&&j({type:"success",message:"变更用户状态成功！"}),V.value=!1,_()}function W(n){n==null||n.resetFields(),_()}async function Z(n){const{id:t,email:p}=n;(await M.resetUserPassword({id:t})).success&&j({type:"success",message:`重置用户[${p}密码为初始密码为[123456]完成！`})}function E(n){h.value=0,n==null||n.resetFields()}async function ee(n){n==null||n.validate(async t=>{t&&(await M.sendUserCrami({...m,userId:h.value}),j.success("赠送用户成功！"),y.value=!1,_())})}return de(()=>_()),(n,t)=>{const p=d("el-input"),i=d("el-form-item"),A=d("el-option"),R=d("el-select"),f=d("el-button"),S=d("el-form"),P=re,le=d("el-avatar"),o=d("el-table-column"),q=d("el-tag"),ae=d("el-popconfirm"),te=d("el-table"),ne=d("el-pagination"),oe=d("el-row"),Y=d("el-dialog"),ue=pe("loading");return v(),T("div",null,[l(P,null,{default:a(()=>[l(S,{ref_key:"formRef",ref:$,inline:!0,model:s},{default:a(()=>[l(i,{label:"用户名称",prop:"username"},{default:a(()=>[l(p,{modelValue:s.username,"onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),placeholder:"用户姓名[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"用户邮箱",prop:"email"},{default:a(()=>[l(p,{modelValue:s.email,"onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),placeholder:"用户邮箱[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"手机号码",prop:"phone"},{default:a(()=>[l(p,{modelValue:s.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>s.phone=e),placeholder:"手机号码[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"用户状态",prop:"status"},{default:a(()=>[l(R,{modelValue:s.status,"onUpdate:modelValue":t[3]||(t[3]=e=>s.status=e),placeholder:"请选择用户状态",clearable:""},{default:a(()=>[(v(!0),T(N,null,L(C(Q),e=>(v(),x(A,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(i,null,{default:a(()=>[l(f,{type:"primary",onClick:_},{default:a(()=>[r(" 查询 ")]),_:1}),l(f,{onClick:t[4]||(t[4]=e=>W($.value))},{default:a(()=>[r(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(P,{style:{width:"100%"}},{default:a(()=>[ie((v(),x(te,{border:"",data:D.value,style:{width:"100%"},size:"large"},{default:a(()=>[l(o,{prop:"avatar",label:"用户头像",fixed:"",width:"120"},{default:a(e=>[l(le,{src:e.row.avatar},null,8,["src"])]),_:1}),l(o,{fixed:"",prop:"username",label:"用户名称",width:"150"}),l(o,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),l(o,{prop:"phone",label:"用户手机号",width:"250",align:"left"},{default:a(e=>{var u;return[r(g(((u=e.row)==null?void 0:u.phone)||"未绑定手机号"),1)]}),_:1}),l(o,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:a(({row:e})=>[l(q,{type:C(me)[e.status]},{default:a(()=>[r(g(C(fe)[e.status]),1)]),_:2},1032,["type"])]),_:1}),l(o,{prop:"balanceInfo.model3Count",label:"基础模型",width:"120",align:"center"}),l(o,{prop:"balanceInfo.model4Count",label:"高级模型",width:"120",align:"center"}),l(o,{prop:"balanceInfo.drawMjCount",label:"绘画余额",width:"120",align:"center"}),r("expirationTime "),l(o,{prop:"balanceInfo.drawMjCount",label:"会员到期时间",width:"170",align:"center"},{default:a(e=>[l(q,{type:"success"},{default:a(()=>{var u,c,B,F;return[r(g((c=(u=e.row)==null?void 0:u.balanceInfo)!=null&&c.expirationTime?C(X)(new Date((F=(B=e.row)==null?void 0:B.balanceInfo)==null?void 0:F.expirationTime)):"非会员"),1)]}),_:2},1024)]),_:1}),l(o,{prop:"balanceInfo.memberModel3Count",label:"基础模型[会员]",width:"120",align:"center"}),l(o,{prop:"balanceInfo.memberModel4Count",label:"高级模型[会员]",width:"120",align:"center"}),l(o,{prop:"balanceInfo.memberDrawMjCount",label:"绘画余额[会员]",width:"120",align:"center"}),l(o,{prop:"balanceInfo.useModel3Count",label:"已用基础模型",width:"160",align:"center"},{default:a(e=>{var u,c;return[r(g(`${((u=e.row.balanceInfo)==null?void 0:u.useModel3Count)||0}次 | ${((c=e.row.balanceInfo)==null?void 0:c.useModel3Token)||0} Token`),1)]}),_:1}),l(o,{prop:"balanceInfo.useModel4Count",label:"已用高级模型",width:"160",align:"center"},{default:a(e=>{var u,c;return[r(g(`${((u=e.row.balanceInfo)==null?void 0:u.useModel4Count)||0}次 | ${((c=e.row.balanceInfo)==null?void 0:c.useModel4Token)||0} Token`),1)]}),_:1}),l(o,{prop:"balanceInfo.useDrawMjToken",label:"已用绘画积分",width:"160",align:"center"},{default:a(e=>{var u;return[r(g(`${((u=e.row.balanceInfo)==null?void 0:u.useDrawMjToken)||0} Token`),1)]}),_:1}),l(o,{prop:"createdAt",label:"注册时间",width:"200",align:"center"},{default:a(e=>[r(g(C(X)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),l(o,{fixed:"right",label:"操作",width:"250",align:"center"},{default:a(e=>[l(f,{link:"",type:"primary",size:"small",onClick:u=>H(e.row)},{default:a(()=>[r(" 修改状态 ")]),_:2},1032,["onClick"]),l(ae,{title:"确认重置此用户密码为【123456】?","confirm-button-text":"确认重置",onConfirm:u=>Z(e.row)},{reference:a(()=>[l(f,{link:"",type:"danger"},{default:a(()=>[r(" 重置密码 ")]),_:1})]),_:2},1032,["onConfirm"]),l(f,{link:"",type:"primary",size:"small",onClick:u=>J(e.row)},{default:a(()=>[r(" 赠送卡密 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[ue,U.value]]),l(oe,{class:"flex justify-end mt-5"},{default:a(()=>[l(ne,{"current-page":s.page,"onUpdate:currentPage":t[5]||(t[5]=e=>s.page=e),"page-size":s.size,"onUpdate:pageSize":t[6]||(t[6]=e=>s.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:z.value,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),l(Y,{modelValue:V.value,"onUpdate:modelValue":t[8]||(t[8]=e=>V.value=e),title:"变更用户状态",width:"500px"},{default:a(()=>[l(S,{model:w,inline:!0},{default:a(()=>[l(i,{label:"用户状态","label-width":"90px"},{default:a(()=>[l(R,{modelValue:w.status,"onUpdate:modelValue":t[7]||(t[7]=e=>w.status=e),placeholder:"请选择用户状态",clearable:""},{default:a(()=>[(v(!0),T(N,null,L(C(Q),e=>(v(),x(A,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(i,null,{default:a(()=>[l(f,{type:"primary",onClick:K},{default:a(()=>[r(" 确认变更 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(Y,{modelValue:y.value,"onUpdate:modelValue":t[14]||(t[14]=e=>y.value=e),title:"主动赠送用户",width:"450px",onClose:t[15]||(t[15]=e=>E(I.value))},{footer:a(()=>[l(f,{onClick:t[12]||(t[12]=e=>y.value=!1)},{default:a(()=>[r(" 放弃赠送 ")]),_:1}),l(f,{type:"primary",onClick:t[13]||(t[13]=e=>ee(I.value))},{default:a(()=>[r(" 确认赠送 ")]),_:1})]),default:a(()=>[l(S,{ref_key:"cramiRef",ref:I,model:m,rules:G,"label-width":"115px"},{default:a(()=>[l(i,{label:"基础模型积分",prop:"model3Count"},{default:a(()=>[l(p,{modelValue:m.model3Count,"onUpdate:modelValue":t[9]||(t[9]=e=>m.model3Count=e),modelModifiers:{number:!0},type:"number",placeholder:"赠送基础模型积分"},null,8,["modelValue"])]),_:1}),l(i,{label:"高级模型积分",prop:"model4Count"},{default:a(()=>[l(p,{modelValue:m.model4Count,"onUpdate:modelValue":t[10]||(t[10]=e=>m.model4Count=e),modelModifiers:{number:!0},type:"number",placeholder:"赠送高级模型积分"},null,8,["modelValue"])]),_:1}),l(i,{label:"绘画额度积分",prop:"drawMjCount"},{default:a(()=>[l(p,{modelValue:m.drawMjCount,"onUpdate:modelValue":t[11]||(t[11]=e=>m.drawMjCount=e),modelModifiers:{number:!0},type:"number",placeholder:"赠送绘画额度积分"},null,8,["modelValue"])]),_:1}),l(i,{class:"flex justify-end"})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});typeof O=="function"&&O(ce);export{ce as default};
