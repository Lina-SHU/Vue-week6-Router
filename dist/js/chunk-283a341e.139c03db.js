(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-283a341e"],{"1dde":function(e,t,a){var n=a("d039"),r=a("b622"),c=a("2d00"),o=r("species");e.exports=function(e){return c>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4702:function(e,t,a){},"65f0":function(e,t,a){var n=a("861d"),r=a("e8b5"),c=a("b622"),o=c("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"83c5":function(e,t,a){"use strict";var n=function(e){return{all:e=e||new Map,on:function(t,a){var n=e.get(t);n&&n.push(a)||e.set(t,[a])},off:function(t,a){var n=e.get(t);n&&n.splice(n.indexOf(a)>>>0,1)},emit:function(t,a){(e.get(t)||[]).slice().map((function(e){e(a)})),(e.get("*")||[]).slice().map((function(e){e(t,a)}))}}};t["a"]=n()},8418:function(e,t,a){"use strict";var n=a("c04e"),r=a("9bf2"),c=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?r.f(e,o,c(0,a)):e[o]=a}},"99af":function(e,t,a){"use strict";var n=a("23e7"),r=a("d039"),c=a("e8b5"),o=a("861d"),i=a("7b0b"),s=a("50c4"),u=a("8418"),d=a("65f0"),l=a("1dde"),b=a("b622"),f=a("2d00"),v=b("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",O=f>=51||!r((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),j=l("concat"),N=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:c(e)},h=!O||!j;n({target:"Array",proto:!0,forced:h},{concat:function(e){var t,a,n,r,c,o=i(this),l=d(o,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?o:arguments[t],N(c)){if(r=s(c.length),b+r>p)throw TypeError(g);for(a=0;a<r;a++,b++)a in c&&u(l,b,c[a])}else{if(b>=p)throw TypeError(g);u(l,b++,c)}return l.length=b,l}})},b5f9:function(e,t,a){"use strict";a("4702")},de8a:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={class:"navbar navbar-expand-lg navbar-light bg-primary fixed-top"},c={class:"container"},o=Object(n["createTextVNode"])("Navbar"),i=Object(n["createVNode"])("button",{class:"navbar-toggler shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav ms-auto"},d={class:"nav-item"},l=Object(n["createTextVNode"])("所有商品"),b={class:"nav-item"},f=Object(n["createTextVNode"])("後台登入"),v={class:"nav-item"},p={class:"carts"},g={class:"carts"},O={class:"container pt-5"};function j(e,t,a,j,N,h){var m=Object(n["resolveComponent"])("router-link"),V=Object(n["resolveComponent"])("font-awesome-icon"),w=Object(n["resolveComponent"])("loading"),x=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("nav",r,[Object(n["createVNode"])("div",c,[Object(n["createVNode"])(m,{to:"/",class:"navbar-brand"},{default:Object(n["withCtx"])((function(){return[o]})),_:1}),i,Object(n["createVNode"])("div",s,[Object(n["createVNode"])("ul",u,[Object(n["createVNode"])("li",d,[Object(n["createVNode"])(m,{to:"/products",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[l]})),_:1})]),Object(n["createVNode"])("li",b,[Object(n["createVNode"])(m,{to:"/login",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[f]})),_:1})]),Object(n["createVNode"])("li",v,[Object(n["createVNode"])(m,{to:"/products/carts",class:"nav-link"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",p,[Object(n["createVNode"])(V,{icon:["fas","shopping-cart"],class:"cartIcon"}),Object(n["createVNode"])("span",g,Object(n["toDisplayString"])(N.cartNumber||N.originNumber),1)])]})),_:1})])])])])]),Object(n["createVNode"])("div",O,[Object(n["createVNode"])(w,{active:N.isLoading},null,8,["active"]),Object(n["createVNode"])(x)])],64)}a("99af");var N=a("83c5"),h={data:function(){return{cartNumber:"",originNumber:"",isLoading:!1}},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.originNumber=t.data.data.carts.length,e.isLoading=!1)}))}},created:function(){var e=this;this.getCart(),N["a"].on("cart-number",(function(t){e.cartNumber=t,e.originNumber=t}))}};a("b5f9");h.render=j;t["default"]=h},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-283a341e.139c03db.js.map