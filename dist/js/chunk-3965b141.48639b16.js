(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3965b141"],{"614b":function(t,e,c){"use strict";c("fde8")},"83c5":function(t,e,c){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,c){var n=t.get(e);n&&n.push(c)||t.set(e,[c])},off:function(e,c){var n=t.get(e);n&&n.splice(n.indexOf(c)>>>0,1)},emit:function(e,c){(t.get(e)||[]).slice().map((function(t){t(c)})),(t.get("*")||[]).slice().map((function(t){t(e,c)}))}}};e["a"]=n()},e6dc:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a={class:"container"},o={class:"row mt-5"},i={class:"d-flex justify-content-center"},r={class:"card",style:{width:"18rem"}},s=Object(n["createVNode"])("div",{class:"overlay"},[Object(n["createVNode"])("div",{class:"text"},"查看更多")],-1),d={class:"card-body"},u={class:"card-title"},l={class:"h6"},p={class:"text-danger h4"};function g(t,e,c,g,b,h){var j=Object(n["resolveComponent"])("loading"),f=Object(n["resolveComponent"])("pagination");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(j,{active:b.isLoading},null,8,["active"]),Object(n["createVNode"])("div",a,[Object(n["createVNode"])("div",o,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(b.products,(function(t){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"col-md-4 col-lg-3 mb-3",key:t.id},[Object(n["createVNode"])("div",i,[Object(n["createVNode"])("div",r,[Object(n["createVNode"])("div",{class:"image",onClick:function(e){return h.goToProduct(t.id)}},[Object(n["createVNode"])("img",{src:t.imageUrl,class:"card-img-top img-fluid",alt:"product_img",style:{"background-position":"center center","object-fit":"cover"}},null,8,["src"]),s],8,["onClick"]),Object(n["createVNode"])("div",d,[Object(n["createVNode"])("h3",u,Object(n["toDisplayString"])(t.title),1),Object(n["createVNode"])("del",l,"原價： "+Object(n["toDisplayString"])(t.origin_price)+" 元",1),Object(n["createVNode"])("p",p,"優惠價： "+Object(n["toDisplayString"])(t.price)+" 元",1),Object(n["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:function(e){return h.addCart(t.id)}},"加入購物車",8,["onClick"])])])])])})),128))])]),Object(n["createVNode"])(f,{pagination:b.pagination,onGetProducts:h.getProducts},null,8,["pagination","onGetProducts"])],64)}c("99af");var b=c("1940"),h=c.n(b),j={class:"container my-2"},f={class:"pagination justify-content-center"};function O(t,e,c,a,o,i){return Object(n["openBlock"])(),Object(n["createBlock"])("div",j,[Object(n["createVNode"])("nav",null,[Object(n["createVNode"])("ul",f,[Object(n["createVNode"])("li",{class:["page-item",{disabled:!o.pages.has_pre}]},[Object(n["createVNode"])("button",{class:"page-link",onClick:e[1]||(e[1]=Object(n["withModifiers"])((function(e){return t.$emit("getProducts",o.pages.current_page-1)}),["prevent"]))},"上一頁")],2),(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(o.pages.total_pages,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("li",{class:["page-item",{active:e===o.pages.current_page}],key:e},[Object(n["createVNode"])("button",{class:"page-link",onClick:Object(n["withModifiers"])((function(c){return t.$emit("getProducts",e)}),["prevent"])},Object(n["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(n["createVNode"])("li",{class:["page-item",{disabled:!o.pages.has_next}]},[Object(n["createVNode"])("button",{class:"page-link",onClick:e[2]||(e[2]=Object(n["withModifiers"])((function(e){return t.$emit("getProducts",o.pages.current_page+1)}),["prevent"]))},"下一頁")],2)])])])}var v={props:["pagination"],data:function(){return{pages:{}}},watch:{pagination:function(){this.pages=this.pagination}}};v.render=O;var m=v,k=c("83c5"),N={data:function(){return{products:[],pagination:{},isLoading:!1}},components:{pagination:m},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/products?page=").concat(e);this.$http.get(c).then((function(e){if(e.data.success)return t.products=e.data.products,t.pagination=e.data.pagination,t.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart"))})).then((function(e){e.data.success&&(t.isLoading=!1,k["a"].emit("cart-number",e.data.data.carts.length))}))},goToProduct:function(t){this.$router.push("/products/".concat(t))},addCart:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart");this.$http.post(c,{data:{product_id:t,qty:1}}).then((function(t){if(t.data.success)return h()({text:"已加入購物車",icon:"success",buttons:!1,timer:1e3}),e.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart"))})).then((function(t){t.data.success&&(e.isLoading=!1,k["a"].emit("cart-number",t.data.data.carts.length))}))}},created:function(){this.getProducts()}};c("614b");N.render=g;e["default"]=N},fde8:function(t,e,c){}}]);
//# sourceMappingURL=chunk-3965b141.48639b16.js.map