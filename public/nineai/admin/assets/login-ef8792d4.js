
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as Q}from"./index-16b26aa1.js";import{d as z,u as W,r as n,o as X,c as Y,a as t,b as l,w as S,v as C,e,f as o,g as Z,h as g,p as ee,i as oe,t as le,j as ae,k as c,l as U,m as se,_ as te,E as I,n as re,q as E}from"./index-087a273d.js";import"./config-de6df455.js";const v=x=>(ee("data-v-9a38dfff"),x=x(),oe(),x),ne=v(()=>t("div",{class:"bg-banner"},null,-1)),ue={id:"login-box"},de={class:"login-banner"},ie=v(()=>t("div",{class:"logo"},null,-1)),pe=["src"],me={class:"title-container"},ce={class:"title"},_e={class:"flex-bar"},ge=v(()=>t("div",{class:"sub-link"},null,-1)),fe=v(()=>t("div",{class:"title-container"},[t("h3",{class:"title"},"探索从这里开始! 🚀")],-1)),ve={class:"sub-link"},we=v(()=>t("span",{class:"text"},"已经有帐号?",-1)),be=v(()=>t("div",{class:"title-container"},[t("h3",{class:"title"},"忘记密码了? 🔒")],-1)),he={class:"sub-link"},xe=z({name:"Login"}),B=z({...xe,setup(x){var P;const K=Z(),L=se(),N=W(),$=new URL("/nineai/admin/assets/login-banner-604b778b.png",self.location).href,A="松鼠AI-Admin",w=n("login"),f=n(!1),D=n(((P=K.query.redirect)==null?void 0:P.toString())??"/"),y=n(),u=n({username:localStorage.login_username||"",password:"",remember:!!localStorage.login_username}),M=n({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function q(){y.value&&y.value.validate(b=>{b&&(f.value=!0,N.login(u.value).then(()=>{f.value=!1,u.value.remember?localStorage.setItem("login_username",u.value.username):localStorage.removeItem("login_username"),L.push(D.value)}).catch(()=>{f.value=!1}))})}const V=n(),d=n({username:"",captcha:"",password:"",checkPassword:""}),T=n({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkPassword:[{required:!0,trigger:"blur",message:"请再次输入密码"},{validator:(b,a,r)=>{a!==d.value.password?r(new Error("两次输入的密码不一致")):r()}}]});function j(){I({message:"注册模块仅提供界面演示，无实际功能，需开发者自行扩展",type:"warning"}),V.value&&V.value.validate(b=>{})}const k=n(),_=n({username:localStorage.login_username||"",captcha:"",newPassword:""}),G=n({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function H(){I({message:"重置密码模块仅提供界面演示，无实际功能，需开发者自行扩展",type:"warning"}),k.value&&k.value.validate(b=>{})}return(b,a)=>{const r=te,i=g("el-icon"),p=g("el-input"),m=g("el-form-item"),J=g("el-checkbox"),h=g("el-button"),R=g("el-form"),F=g("el-link"),O=Q;return X(),Y("div",null,[ne,t("div",ue,[t("div",de,[ie,t("img",{src:l($),class:"banner"},null,8,pe)]),S(e(R,{ref_key:"loginFormRef",ref:y,model:l(u),rules:l(M),class:"login-form",autocomplete:"on"},{default:o(()=>[t("div",me,[t("h3",ce,"欢迎来到 "+le(l(A))+" ! 👋🏻",1)]),t("div",null,[e(m,{prop:"username"},{default:o(()=>[e(p,{modelValue:l(u).username,"onUpdate:modelValue":a[0]||(a[0]=s=>l(u).username=s),placeholder:"用户名",text:"",tabindex:"1",autocomplete:"on"},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:user"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"password"},{default:o(()=>[e(p,{modelValue:l(u).password,"onUpdate:modelValue":a[1]||(a[1]=s=>l(u).password=s),type:"password",placeholder:"密码",tabindex:"2",autocomplete:"on","show-password":"",onKeyup:ae(q,["enter"])},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:lock"})]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1})]),t("div",_e,[e(J,{modelValue:l(u).remember,"onUpdate:modelValue":a[2]||(a[2]=s=>l(u).remember=s)},{default:o(()=>[c(" 记住我 ")]),_:1},8,["modelValue"])]),e(h,{loading:l(f),type:"primary",size:"large",style:{width:"100%"},onClick:U(q,["prevent"])},{default:o(()=>[c(" 登录 ")]),_:1},8,["loading","onClick"]),ge]),_:1},8,["model","rules"]),[[C,l(w)==="login"]]),S(e(R,{ref_key:"registerFormRef",ref:V,model:l(d),rules:l(T),class:"login-form","auto-complete":"on"},{default:o(()=>[fe,t("div",null,[e(m,{prop:"username"},{default:o(()=>[e(p,{modelValue:l(d).username,"onUpdate:modelValue":a[3]||(a[3]=s=>l(d).username=s),placeholder:"用户名",tabindex:"1",autocomplete:"on"},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:user"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"captcha"},{default:o(()=>[e(p,{modelValue:l(d).captcha,"onUpdate:modelValue":a[4]||(a[4]=s=>l(d).captcha=s),placeholder:"验证码",tabindex:"2",autocomplete:"on"},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:key"})]),_:1})]),append:o(()=>[e(h,null,{default:o(()=>[c("发送验证码")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"password"},{default:o(()=>[e(p,{modelValue:l(d).password,"onUpdate:modelValue":a[5]||(a[5]=s=>l(d).password=s),type:"password",placeholder:"密码",tabindex:"3",autocomplete:"on","show-password":""},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:lock"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"checkPassword"},{default:o(()=>[e(p,{modelValue:l(d).checkPassword,"onUpdate:modelValue":a[6]||(a[6]=s=>l(d).checkPassword=s),type:"password",placeholder:"确认密码",tabindex:"4",autocomplete:"on","show-password":""},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:lock"})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(h,{loading:l(f),type:"primary",size:"large",style:{width:"100%","margin-top":"20px"},onClick:U(j,["prevent"])},{default:o(()=>[c(" 注册 ")]),_:1},8,["loading","onClick"]),t("div",ve,[we,e(F,{type:"primary",underline:!1,onClick:a[7]||(a[7]=s=>w.value="login")},{default:o(()=>[c(" 去登录 ")]),_:1})])]),_:1},8,["model","rules"]),[[C,l(w)==="register"]]),S(e(R,{ref_key:"resetFormRef",ref:k,model:l(_),rules:l(G),class:"login-form","auto-complete":"on"},{default:o(()=>[be,t("div",null,[e(m,{prop:"username"},{default:o(()=>[e(p,{modelValue:l(_).username,"onUpdate:modelValue":a[8]||(a[8]=s=>l(_).username=s),placeholder:"用户名",tabindex:"1",autocomplete:"on"},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:user"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"captcha"},{default:o(()=>[e(p,{modelValue:l(_).captcha,"onUpdate:modelValue":a[9]||(a[9]=s=>l(_).captcha=s),placeholder:"验证码",tabindex:"2",autocomplete:"on"},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:key"})]),_:1})]),append:o(()=>[e(h,null,{default:o(()=>[c("发送验证码")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"newPassword"},{default:o(()=>[e(p,{modelValue:l(_).newPassword,"onUpdate:modelValue":a[10]||(a[10]=s=>l(_).newPassword=s),type:"password",placeholder:"新密码",tabindex:"3",autocomplete:"on","show-password":""},{prefix:o(()=>[e(i,null,{default:o(()=>[e(r,{name:"ep:lock"})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e(h,{loading:l(f),type:"primary",size:"large",style:{width:"100%","margin-top":"20px"},onClick:U(H,["prevent"])},{default:o(()=>[c(" 确认 ")]),_:1},8,["loading","onClick"]),t("div",he,[e(F,{type:"primary",underline:!1,onClick:a[11]||(a[11]=s=>w.value="login")},{default:o(()=>[c(" 返回登录 ")]),_:1})])]),_:1},8,["model","rules"]),[[C,l(w)==="reset"]])]),e(O)])}}});typeof E=="function"&&E(B);const Re=re(B,[["__scopeId","data-v-9a38dfff"]]);export{Re as default};
