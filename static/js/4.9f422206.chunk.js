(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{64:function(e,t,c){"use strict";function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function n(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,r)}return c}function s(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?n(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):n(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}c.d(t,"a",(function(){return s}))},68:function(e,t,c){"use strict";c.r(t);var r=c(64),n=c(1),s=c(11),i=c(0),a=function(e){return Object(i.jsxs)(s.b,{to:"/customer/".concat(e.id),className:"customer-card",children:[Object(i.jsx)("div",{className:"w-24",children:Object(i.jsx)("img",{src:"https://via.placeholder.com/64x64?text=".concat(e.first_name),alt:"profile of ".concat(e.email),className:"rounded-l-md w-full h-full"})}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h4",{children:Object(i.jsx)("small",{title:e.email,className:"text-gray-600",children:e.email})}),Object(i.jsx)("h3",{"data-testid":"customer-name",className:"text-xl",children:e.first_name+" "+e.last_name}),Object(i.jsx)("h4",{children:Object(i.jsx)("small",{children:e.company})})]})]})},l=c(17),o=c(20),j=c(2),b=c(12),u=c(13);t.default=function(){var e=function(){var e=Object(j.e)().params.city_id,t=Object(n.useState)(!0),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)([]),a=Object(l.a)(i,2),b=a[0],u=a[1];return Object(n.useEffect)((function(){Object(o.b)(e||"0").then(u).catch(console.error).finally((function(){return s(!1)}))}),[]),{customers:b,loading:r}}(),t=e.customers,c=e.loading;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h2",{children:[Object(i.jsx)(u.a,{to:"/cities"}),"Clientes na cidade:"]}),Object(i.jsx)("div",{hidden:!c,children:Object(i.jsx)(b.a,{})}),Object(i.jsx)("div",{className:"customer-list",hidden:c,children:t.map((function(e,t){return Object(n.createElement)(a,Object(r.a)(Object(r.a)({},e),{},{key:t}))}))})]})}}}]);
//# sourceMappingURL=4.9f422206.chunk.js.map