(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c40c9614"],{"1dde":function(e,t,a){var r=a("d039"),c=a("b622"),o=a("2d00"),n=c("species");e.exports=function(e){return o>=51||!r((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var r=a("861d"),c=a("e8b5"),o=a("b622"),n=o("species");e.exports=function(e,t){var a;return c(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!c(a.prototype)?r(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8418:function(e,t,a){"use strict";var r=a("c04e"),c=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=r(t);n in e?c.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var r=a("23e7"),c=a("d039"),o=a("e8b5"),n=a("861d"),l=a("7b0b"),s=a("50c4"),d=a("8418"),i=a("65f0"),u=a("1dde"),b=a("b622"),m=a("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,V="Maximum allowed index exceeded",j=m>=51||!c((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),O=u("concat"),v=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},N=!j||!O;r({target:"Array",proto:!0,forced:N},{concat:function(e){var t,a,r,c,o,n=l(this),u=i(n,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?n:arguments[t],v(o)){if(c=s(o.length),b+c>p)throw TypeError(V);for(a=0;a<c;a++,b++)a in o&&d(u,b,o[a])}else{if(b>=p)throw TypeError(V);d(u,b++,o)}return u.length=b,u}})},b0c0:function(e,t,a){var r=a("83ab"),c=a("9bf2").f,o=Function.prototype,n=o.toString,l=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&c(o,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},cf2a:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),c={class:"container py-5"},o=Object(r["createVNode"])("ol",{class:"form-row text-center pl-0 d-flex",style:{"list-style":"none"}},[Object(r["createVNode"])("li",{class:"col-12 col-md-4"},[Object(r["createVNode"])("div",{class:"alert alert-dark rounded-pill mb-0 ",role:"alert"}," 1.確認訂購商品 ")]),Object(r["createVNode"])("li",{class:"col-12 col-md-4"},[Object(r["createVNode"])("div",{class:"alert alert-info rounded-pill mb-0 ",role:"alert"}," 2.訂購人資訊填寫 ")]),Object(r["createVNode"])("li",{class:"col-12 col-md-4"},[Object(r["createVNode"])("div",{class:"alert alert-light rounded-pill mb-0",role:"alert"}," 3.完成 ")])],-1),n={class:"row justify-content-center"},l={class:"col-md-6"},s=Object(r["createVNode"])("h1",{class:"text-center text-secondary my-3 h2"},"訂購人資訊填寫",-1),d={class:"mb-3"},i=Object(r["createVNode"])("label",{for:"email"},[Object(r["createTextVNode"])("Email"),Object(r["createVNode"])("span",{class:"text-danger ms-2"},"(必填)")],-1),u={class:"mb-3"},b=Object(r["createVNode"])("label",{for:"name"},[Object(r["createTextVNode"])("姓名"),Object(r["createVNode"])("span",{class:"text-danger ms-2"},"(必填)")],-1),m={class:"mb-3"},f=Object(r["createVNode"])("label",{for:"tel"},[Object(r["createTextVNode"])("電話"),Object(r["createVNode"])("span",{class:"text-danger ms-2"},"(必填)")],-1),p={class:"mb-3"},V=Object(r["createVNode"])("label",{for:"address"},[Object(r["createTextVNode"])("地址"),Object(r["createVNode"])("span",{class:"text-danger ms-2"},"(必填)")],-1),j={class:"mb-3"},O=Object(r["createVNode"])("label",{for:"message"},"留言",-1),v=Object(r["createVNode"])("div",{class:"d-flex justify-content-end"},[Object(r["createVNode"])("button",{class:"btn btn-primary btn-lg",type:"submit"},"建立訂單")],-1);function N(e,t,a,N,h,g){var x=Object(r["resolveComponent"])("Field"),y=Object(r["resolveComponent"])("error-message"),w=Object(r["resolveComponent"])("Form");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[o,Object(r["createVNode"])("div",n,[Object(r["createVNode"])("div",l,[s,Object(r["createVNode"])(w,{onSubmit:g.onSubmit},{default:Object(r["withCtx"])((function(e){var a=e.errors;return[Object(r["createVNode"])("div",d,[i,Object(r["createVNode"])(x,{type:"email",class:["form-control",{"is-invalid":a["email"]}],name:"email",rules:"email|required",placeholder:"請輸入 Email",modelValue:h.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.user.email=e}),id:"email"},null,8,["class","modelValue"]),Object(r["createVNode"])(y,{name:"email",class:"invalid-feedback"})]),Object(r["createVNode"])("div",u,[b,Object(r["createVNode"])(x,{type:"text",class:["form-control",{"is-invalid":a["姓名"]}],name:"姓名",rules:"required",placeholder:"請輸入姓名",modelValue:h.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h.user.name=e}),id:"name"},null,8,["class","modelValue"]),Object(r["createVNode"])(y,{name:"姓名",class:"invalid-feedback"})]),Object(r["createVNode"])("div",m,[f,Object(r["createVNode"])(x,{type:"tel",class:["form-control",{"is-invalid":a["電話"]}],name:"電話",rules:"min:10|required",placeholder:"請輸入電話",modelValue:h.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h.user.tel=e}),id:"tel"},null,8,["class","modelValue"]),Object(r["createVNode"])(y,{name:"電話",class:"invalid-feedback"})]),Object(r["createVNode"])("div",p,[V,Object(r["createVNode"])(x,{type:"text",class:["form-control",{"is-invalid":a["地址"]}],name:"地址",rules:"required",placeholder:"請輸入地址",modelValue:h.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h.user.address=e}),id:"address"},null,8,["class","modelValue"]),Object(r["createVNode"])(y,{name:"地址",class:"invalid-feedback"})]),Object(r["createVNode"])("div",j,[O,Object(r["createVNode"])(x,{modelValue:h.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h.message=e}),type:"text",name:"留言",id:"message"},{default:Object(r["withCtx"])((function(e){var t=e.field;return[Object(r["createVNode"])("textarea",Object(r["mergeProps"])(t,{rows:"3",placeholder:"歡迎留言給我們！",class:"form-control",id:"message"}),null,16)]})),_:1},8,["modelValue"]),Object(r["createVNode"])(y,{name:"留言",class:"invalid-feedback"})]),v]})),_:1},8,["onSubmit"])])])])}a("99af");var h={data:function(){return{user:{},message:"",isLoading:!1}},methods:{onSubmit:function(e,t){var a=this,r=t.resetForm;this.isLoading=!1;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/order");this.$http.post(c,{data:{user:this.user,message:this.message}}).then((function(e){e.data.success&&(a.isLoading=!1,a.$router.push("/orderSubmit"))})).catch((function(e){console.log(e)})),r()}}};h.render=N;t["default"]=h},e8b5:function(e,t,a){var r=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-c40c9614.7b2c7341.js.map