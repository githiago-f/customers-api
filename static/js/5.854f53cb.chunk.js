(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{156:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(38),a=n.n(o),i=n(39),c=n(52),u=n(51),s=n(40),l=n(58),f=n(59),d=n(79),p=n(45),m=n(77),v=n(78),b=n(1);e.default=function(){var t=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],p=Object(r.useState)([]),m=Object(u.a)(p,2),v=m[0],b=m[1],h=Object(r.useState)({}),_=Object(u.a)(h,2),j=_[0],y=_[1],O=Object(r.useState)(null),x=Object(u.a)(O,2),w=x[0],g=x[1],C=Object(r.useCallback)((function(t){var e=Object(c.a)({},j);e[t.target.name]=t.target.value,y(e)}),[j]);Object(r.useEffect)((function(){Promise.all([Object(l.a)(),Object(l.b)()]).then((function(t){var e=Object(u.a)(t,2),n=e[0],r=e[1];o(Object(d.a)(n)),b(Object(d.b)(r))})).catch(g)}),[]);var E=Object(r.useCallback)(function(){var t=Object(i.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,n=Object(f.Customer)(j),t.next=5,Object(s.a)(n);case 5:201===t.sent.status&&(window.location.href="/customers-api"),t.next=16;break;case 10:if(t.prev=10,t.t0=t.catch(1),!t.t0.response){t.next=15;break}return g(t.t0.response.data),t.abrupt("return");case 15:g(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),[j]);return{alterField:C,customer:j,cities:n,companies:v,create:E,error:w}}(),e=t.customer,n=t.alterField,o=t.cities,h=t.companies,_=t.error,j=t.create;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)(p.a,{to:"/"}),"Criar cliente"]}),Object(b.jsx)("div",{className:"px-2 mx-auto mb-10 max-w-sm",children:Object(b.jsxs)("form",{action:"/customer",method:"post",className:"grid grid-flow-row",onSubmit:function(){return!1},children:[Object(b.jsx)(m.a,{name:"first_name",id:"first_name",value:e.first_name,onChange:n,label:"Primeiro nome:"}),Object(b.jsx)(m.a,{name:"last_name",id:"last_name",value:e.last_name,onChange:n,label:"Sobrenome:"}),Object(b.jsx)(m.a,{name:"email",onChange:n,value:e.email,id:"email",label:"E-mail:"}),Object(b.jsx)(v.a,{id:"city",label:"Cidade",name:"city",options:o.map((function(t){return{key:t.id,label:t.name}})),onChange:n,value:e.city}),Object(b.jsx)(v.a,{label:"Empresa:",name:"company",id:"company",options:h.map((function(t){return{key:t.id,label:t.name}})),onChange:n,value:e.company}),Object(b.jsx)(m.a,{label:"Titula\xe7\xe3o:",id:"titulation",name:"titulation",onChange:n,value:e.titulation}),Object(b.jsxs)("div",{"data-testid":"gender-container",children:[Object(b.jsx)("label",{htmlFor:"gender",children:"G\xeanero:"}),Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsxs)("label",{htmlFor:"male",children:[Object(b.jsx)("input",{type:"radio",name:"gender",id:"male",onChange:n,value:"male"}),"\xa0 Masculino"]}),Object(b.jsxs)("label",{htmlFor:"female",children:[Object(b.jsx)("input",{type:"radio",name:"gender",id:"female",onChange:n,value:"female"}),"\xa0 Feminino"]}),Object(b.jsxs)("label",{htmlFor:"uninformed",children:[Object(b.jsx)("input",{type:"radio",name:"gender",id:"uninformed",onChange:n,value:"uninformed"}),"\xa0 N\xe3o informar"]})]})]}),Object(b.jsx)("div",{className:"p-2 bg-red-200 border-red-900 border-2",hidden:null===_,children:Object(b.jsx)("span",{className:"text-black font-bold",children:(null===_||void 0===_?void 0:_.message)||""})}),Object(b.jsx)("div",{"data-testid":"submit-container",children:Object(b.jsx)("button",{className:"submit",onClick:j,type:"submit",children:"Criar"})})]})})]})}},31:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}));var r=n(48),o=!0,a={PRODUCTION_URL:"https://customers-portifolio.herokuapp.com/",DEVELOPMENT_URL:"http://localhost:8080"},i=n.n(r).a.create({baseURL:o?a.PRODUCTION_URL:a.DEVELOPMENT_URL})},37:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};e.__esModule=!0,o(n(41),e),o(n(64),e),o(n(65),e),o(n(66),e),o(n(67),e),o(n(68),e)},40:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n(38),o=n.n(r),a=n(39),i=n(31),c=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.get("/customer/groupByCity");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.get("/customer/"+e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r,a,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:0,t.next=3,i.c.get("/customer",{params:{city:e,page:n}});case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.post("/customer",e);case 2:return n=t.sent,r=n.status,a=n.data,t.abrupt("return",{status:r,data:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},41:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};e.__esModule=!0,o(n(62),e),o(n(63),e),o(n(47),e)},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(0);var r=n(9),o=n(1),a=function(t){var e=t.to;return Object(o.jsxs)(r.b,{to:e,children:[Object(o.jsx)("small",{className:"text-indigo-400",children:" \u2190 voltar "})," \xa0"]})}},47:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0,e.InvalidEmail=void 0;var o=function(t){function e(e){var n=t.call(this,"Invalid email: "+e)||this;return n.name="InvalidEmail",n}return r(e,t),e}(Error);e.InvalidEmail=o},58:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u}));var r=n(38),o=n.n(r),a=n(39),i=n(31),c=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.get("/city");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.get("/company");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},59:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};e.__esModule=!0,o(n(60),e),o(n(37),e),o(n(73),e)},60:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};e.__esModule=!0,o(n(61),e),o(n(69),e),o(n(70),e)},61:function(t,e,n){"use strict";e.__esModule=!0,e.City=void 0;var r=n(37);e.City=function(t){return{id:t.id,name:r.Name(t.name)}}},62:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0,e.InvalidName=void 0;var o=function(t){function e(e){var n=t.call(this,"Invalid name: "+e)||this;return n.name="InvalidName",n}return r(e,t),e}(Error);e.InvalidName=o},63:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0,e.InvalidGender=void 0;var o=function(t){function e(){var e=t.call(this,'Gender should be "male", "female" or "uninformed"')||this;return e.name="InvalidGender",e}return r(e,t),e}(Error);e.InvalidGender=o},64:function(t,e,n){"use strict";e.__esModule=!0,e.Email=void 0;var r=n(47);e.Email=function(t){if(!t)throw new r.InvalidEmail("E-mail should not be null or empty");var e=t.trim().length,n=["E-mail too short (min size is 4)","E-mail too long (max size is 320)"],o=n[0],a=n[1];if(e<=3||e>320)throw new r.InvalidEmail(e>320?a:o);if(!/^[\w.-]+@([\w-]+\.)+\w{2,}$/.test(t))throw new r.InvalidEmail(t+" is not an e-mail");return t}},65:function(t,e,n){"use strict";e.__esModule=!0,e.Gender=void 0;var r=n(46),o=n(41),a=["male","female","uninformed"];e.Gender=function(t){if(!t)throw new o.InvalidGender;if(t.trim().length<1&&!r.some(a,t.toLowerCase()))throw new o.InvalidGender;return t}},66:function(t,e,n){"use strict";e.__esModule=!0,e.Name=void 0;var r=n(41);e.Name=function(t){if(!t)throw new r.InvalidName("Name should not be null or empty");var e=t.trim().length;if(e<=2||e>80)throw new r.InvalidName(e>80?"Name is too long (max 80)":"Name is too short (min 3)");return t}},67:function(t,e,n){"use strict";e.__esModule=!0,e.CustomersInCity=void 0;e.CustomersInCity=function(t,e){return{city_id:t.id,city:t.name,customers_total:e}}},68:function(t,e,n){"use strict";e.__esModule=!0,e.Paged=void 0;e.Paged=function(t){return{results:t.results,pages:t.pages}}},69:function(t,e,n){"use strict";e.__esModule=!0,e.Company=void 0;var r=n(37);e.Company=function(t){return{id:t.id,name:r.Name(t.name)}}},70:function(t,e,n){"use strict";e.__esModule=!0,e.Customer=void 0;var r=n(46),o=n(37),a=n(71),i=n(72);e.Customer=function(t){if(r.isNumber(t.city)&&t.city<1)throw new a.InvalidCity;if(r.isNumber(t.company)&&t.company<1)throw new i.InvalidCompany;return{id:t.id,first_name:o.Name(t.first_name),last_name:o.Name(t.last_name),email:o.Email(t.email),company:t.company,city:t.city,titulation:t.titulation,gender:o.Gender(t.gender)}}},71:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0,e.InvalidCity=void 0;var o=function(t){function e(){var e=t.call(this,"City can't be zero")||this;return e.name="InvalidCity",e}return r(e,t),e}(Error);e.InvalidCity=o},72:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0,e.InvalidCompany=void 0;var o=function(t){function e(){var e=t.call(this,"Company can't be zero")||this;return e.name="InvalidCompany",e}return r(e,t),e}(Error);e.InvalidCompany=o},73:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};e.__esModule=!0,o(n(74),e),o(n(75),e),o(n(76),e)},74:function(t,e,n){"use strict";e.__esModule=!0},75:function(t,e,n){"use strict";e.__esModule=!0},76:function(t,e,n){"use strict";e.__esModule=!0},77:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(1),o=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:t.id,children:t.label}),Object(r.jsx)("input",{type:"text",name:t.name,id:t.id,defaultValue:t.value,onChange:t.onChange})]})}},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(1),o=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:t.id,children:t.label}),Object(r.jsx)("select",{onChange:t.onChange,value:t.value,name:t.name,id:t.id,children:t.options.map((function(t){return Object(r.jsx)("option",{value:t.key,children:t.label},t.key)}))})]})}},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n(54);var o=n(53);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=function(t){return[{id:0,name:"Selecione uma cidade"}].concat(a(t))},c=function(t){return[{id:0,name:"Selecione uma compania"}].concat(a(t))}}}]);
//# sourceMappingURL=5.854f53cb.chunk.js.map