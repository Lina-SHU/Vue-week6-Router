(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),c={class:"container"},r={class:"row d-flex justify-content-center"},n={class:"col-md-8"},s=Object(o["createVNode"])("h2",{class:"mt-5 mb-3 text-center"},"後台管理登入",-1),l={class:"mb-3"},i=Object(o["createVNode"])("label",{for:"email"},"Email",-1),d={class:"mb-3"},u=Object(o["createVNode"])("label",{for:"password"},"密碼",-1),m=Object(o["createVNode"])("div",{class:"d-flex justify-content-center"},[Object(o["createVNode"])("button",{class:"btn btn-primary btn-lg",type:"submit"},"登入")],-1);function b(e,t,a,b,p,f){var j=Object(o["resolveComponent"])("Field"),v=Object(o["resolveComponent"])("error-message"),O=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",n,[s,Object(o["createVNode"])(O,{onSubmit:f.login},{default:Object(o["withCtx"])((function(e){var a=e.errors;return[Object(o["createVNode"])("div",l,[i,Object(o["createVNode"])(j,{type:"email",class:["form-control",{"is-invalid":a["email"]}],name:"email",rules:"email|required",placeholder:"請輸入 Email",modelValue:p.user.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return p.user.username=e}),id:"email"},null,8,["class","modelValue"]),Object(o["createVNode"])(v,{name:"email",class:"invalid-feedback"})]),Object(o["createVNode"])("div",d,[u,Object(o["createVNode"])(j,{type:"password",class:["form-control",{"is-invalid":a["密碼"]}],name:"密碼",rules:"required",placeholder:"請輸入密碼",modelValue:p.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.user.password=e}),id:"password"},null,8,["class","modelValue"]),Object(o["createVNode"])(v,{name:"密碼",class:"invalid-feedback"})]),m]})),_:1},8,["onSubmit"])])])])}a("99af");var p=a("1940"),f=a.n(p),j={data:function(){return{user:{}}},methods:{login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var a=t.data,o=a.token,c=a.expired;document.cookie="hexToken=".concat(o,"; expires=").concat(new Date(c)),e.$router.push("/admin")}else f()({text:"帳號密碼錯誤",icon:"error",buttons:!1,timer:1e3})}))}}};j.render=b;t["default"]=j}}]);
//# sourceMappingURL=chunk-2d2086b7.6eb45548.js.map