(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(48),c=n(47),u=n(37),i=n(52),s=n(43),o=n(53),l=n(54),d=n(1);t.default=function(){var e=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)([]),l=Object(c.a)(o,2),d=l[0],b=l[1],m=Object(a.useState)({city:0,company:0}),f=Object(c.a)(m,2),j=f[0],p=f[1],h=Object(a.useState)(null),O=Object(c.a)(h,2),v=O[0],x=O[1],g=Object(a.useCallback)((function(e){var t=Object(r.a)({},j);t[e.target.name]=e.target.value,p(t)}),[j]);Object(a.useEffect)((function(){Promise.all([Object(i.a)(),Object(i.b)()]).then((function(e){s(e[0]),b(e[1])})).catch(console.error)}),[]);var y=Object(a.useCallback)((function(e){e.preventDefault(),Object(u.a)(j).then((function(e){var t=e.status,n=e.data;201!==t?x(n):window.location.href="/customers-api"})).catch((function(e){/409/.test(e.message)&&x({message:"Costumer email already created!"})}))}),[j]);return{alterField:g,customer:j,cities:n,companies:d,create:y,error:v}}(),t=e.customer,n=e.alterField,b=e.cities,m=e.companies,f=e.error,j=e.create;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)(s.a,{to:"/"}),"Criar cliente"]}),Object(d.jsx)("div",{className:"px-2 mx-auto mb-10 max-w-sm",children:Object(d.jsxs)("form",{action:"/customer",method:"post",className:"grid grid-flow-row",onSubmit:function(){return!1},children:[Object(d.jsx)(o.a,{name:"first_name",id:"first_name",value:t.first_name,onChange:n,label:"Primeiro nome:"}),Object(d.jsx)(o.a,{name:"last_name",id:"last_name",value:t.last_name,onChange:n,label:"Sobrenome:"}),Object(d.jsx)(o.a,{name:"email",onChange:n,value:t.email,id:"email",label:"E-mail:"}),Object(d.jsx)(l.a,{id:"city",label:"Cidade",name:"city",options:b.map((function(e){return{key:e.id,label:e.name}})),onChange:n,value:t.city}),Object(d.jsx)(l.a,{label:"Empresa:",name:"company",id:"company",options:m.map((function(e){return{key:e.id,label:e.name}})),onChange:n,value:t.company}),Object(d.jsx)(o.a,{label:"Titula\xe7\xe3o:",id:"titulation",name:"titulation",onChange:n,value:t.titulation}),Object(d.jsxs)("div",{"data-testid":"gender-container",children:[Object(d.jsx)("label",{htmlFor:"gender",children:"G\xeanero:"}),Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("label",{htmlFor:"male",children:[Object(d.jsx)("input",{type:"radio",name:"gender",id:"male",onChange:n,value:"male"}),"\xa0 Masculino"]}),Object(d.jsxs)("label",{htmlFor:"female",children:[Object(d.jsx)("input",{type:"radio",name:"gender",id:"female",onChange:n,value:"female"}),"\xa0 Feminino"]}),Object(d.jsxs)("label",{htmlFor:"uninformed",children:[Object(d.jsx)("input",{type:"radio",name:"gender",id:"uninformed",onChange:n,value:"uninformed"}),"\xa0 N\xe3o informar"]})]})]}),Object(d.jsx)("div",{className:"p-2 bg-red-200 border-red-900 border-2",hidden:null===f,children:Object(d.jsx)("span",{className:"text-black font-bold",children:(null===f||void 0===f?void 0:f.message)||""})}),Object(d.jsx)("div",{"data-testid":"submit-container",children:Object(d.jsx)("button",{className:"submit",onClick:j,type:"submit",children:"Criar"})})]})})]})}},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u}));var a=n(44),r=!0,c={PRODUCTION_URL:"https://customers-ghitiago.herokuapp.com/",DEVELOPMENT_URL:"http://localhost:8080"},u=n.n(a).a.create({baseURL:r?c.PRODUCTION_URL:c.DEVELOPMENT_URL})},37:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d}));var a=n(38),r=n.n(a),c=n(39),u=n(31),i=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.get("/customer/groupByCity");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.get("/customer/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:0,e.next=3,u.c.get("/customer",{params:{city:t,page:n}});case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.post("/customer",t);case 2:return n=e.sent,a=n.status,c=n.data,e.abrupt("return",{status:a,data:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.patch("/customer",t);case 2:return n=e.sent,a=n.status,c=n.data,e.abrupt("return",{status:a,data:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var a=n(9),r=n(1),c=function(e){var t=e.to;return Object(r.jsxs)(a.b,{to:t,children:[Object(r.jsx)("small",{className:"text-indigo-400",children:" \u2190 voltar "})," \xa0"]})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(38),r=n.n(a),c=n(39),u=n(31),i=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.get("/city");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.get("/company");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);var a=n(1),r=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:e.id,children:e.label}),Object(a.jsx)("input",{type:"text",name:e.name,id:e.id,defaultValue:e.value,onChange:e.onChange})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);var a=n(1),r=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:e.id,children:e.label}),Object(a.jsx)("select",{onChange:e.onChange,value:e.value,name:e.name,id:e.id,children:e.options.map((function(e){return Object(a.jsx)("option",{value:e.key,children:e.label},e.key)}))})]})}}}]);
//# sourceMappingURL=5.617a87a5.chunk.js.map