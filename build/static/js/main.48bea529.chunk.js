(this.webpackJsonpnewmovie=this.webpackJsonpnewmovie||[]).push([[0],{43:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(35),a=n.n(c),i=n(9),s=(n(43),n(10)),o=n(11),j=n(2),l=n(7),d=n(12),u=n.n(d),b=n(14),x=n(20),O=n.n(x);function h(e,t){switch(t.type){case"LOADING":return{loading:!0,data:null,error:null};case"SUCCESS":return{loading:!1,data:t.data,error:null};case"ERROR":return{loading:!1,data:null,error:t.error};case"END":return{loading:!1,data:null,error:null};default:return!1}}function m(e,t){var n=Object(l.a)(t,1)[0],c=Object(r.useReducer)(h,{loading:!1,data:null,error:null}),a=Object(l.a)(c,2),i=a[0],s=a[1],o=function(){var t=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"LOADING"}),t.prev=1,t.next=4,e();case 4:n=t.sent,s({type:"SUCCESS",data:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){return o(),function(){return s({type:"END"})}}),[n]),[i,o]}var p,v,g,f=n(0),y=Object(r.createContext)();function N(e){var t=e.children,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],i=c[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(y.Provider,{value:[a,i],children:t})})}function w(){return Object(r.useContext)(y)}function k(e){var t=e.cover_img,n=e.rating,r=e.id,c=e.title,a=e.desc,j=Object(o.a)(i.b)(p||(p=Object(s.a)(["\n    display:inline-block;\n    text-decoration:none;\n  "])));return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("li",{id:r,children:Object(f.jsx)(j,{to:{pathname:"/movedetail",state:{cover_img:t,rating:n,title:c,desc:a}},children:Object(f.jsxs)("div",{className:"movie-item",children:[Object(f.jsx)("div",{className:"img-box",children:Object(f.jsx)("img",{src:t,alt:""})}),Object(f.jsxs)("div",{className:"txt-box",children:[Object(f.jsx)("span",{className:"title",children:c}),Object(f.jsx)("span",{className:"rating",children:n})]})]})})})})}function _(e){var t=e.state,n=t.data;return t.loading?Object(f.jsx)("div",{className:"loading",children:"Loading\u2026"}):!!n&&Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"movie-list",children:Object(f.jsx)("ul",{children:n.map((function(e){return Object(f.jsx)(k,{id:e.id,cover_img:e.medium_cover_image,rating:e.rating,title:e.title,desc:e.description_full},e.id)}))})})})}function F(){var e=m(function(){var e=Object(b.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:return t=e.sent,n=t.data.data.movies,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[]),t=Object(l.a)(e,2),n=t[0],r=(t[1],n.data);return console.log(r),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"tit",children:"HOME"}),Object(f.jsx)(_,{state:n})]})}function C(e){var t=e.refetch,n=w(),r=Object(l.a)(n,2),c=r[0],a=r[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"searchBar",children:[Object(f.jsx)("input",{type:"text",value:c,name:"search",onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("button",{type:"button",onClick:t,children:"\uac80\uc0c9"})]})})}var E,S=["comedy","romance","horror","drama","crime"],R=o.a.div(v||(v=Object(s.a)(["\n  width : 500px;\n  height : auto;\n  a{\n    padding: 10px;\n    margin-right: 10px;\n    background: #fff;\n    color: #000;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    border-radius: 13px;\n  }\n"]))),D=Object(o.a)(i.c)(g||(g=Object(s.a)(["\n  &:active,&:hover{\n    color:red;\n  }\n  &.active{\n    color:red;\n  }\n"])));function B(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(R,{children:S.map((function(e){return Object(f.jsx)(D,{to:"all"===e?"/moviepage":"/moviepage/".concat(e),activeClassName:"active",exact:!0,children:e},e)}))})})}var I,L=o.a.div(E||(E=Object(s.a)(["\n  position:relative;\n  overflow-x : hidden;\n  padding-top:50px;\n  width:100%;\n"])));function M(e){var t,n=e.match;t=void 0===n.params.category?"all":n.params.category;var r=w(),c=Object(l.a)(r,1)[0],a=m(function(){var e=Object(b.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?query_term=".concat(c,"&genre=").concat(t));case 2:return n=e.sent,r=n.data.data.movies,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[t]),i=Object(l.a)(a,2),s=i[0],o=i[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(L,{children:[Object(f.jsx)(B,{category:t}),Object(f.jsx)(C,{refetch:o}),Object(f.jsx)(_,{state:s})]})})}function A(e){var t=e.location,n=e.history,r=t.state,c=r.cover_img,a=r.title,i=r.rating,s=r.desc;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:function(){return n.goBack()},children:"\ub4a4\ub85c\uac00\uae30"}),Object(f.jsxs)("div",{className:"detail_wrap",children:[Object(f.jsx)("div",{className:"img_box",children:Object(f.jsx)("img",{src:c,alt:a})}),Object(f.jsx)("p",{className:"title",children:a}),Object(f.jsx)("p",{className:"title",children:s}),Object(f.jsx)("p",{className:"desc",children:i})]})]})}function G(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{path:"/",exact:!0,component:F}),Object(f.jsx)(j.a,{path:"/moviepage",exact:!0,component:M}),Object(f.jsx)(j.a,{path:"/moviepage/:category",exact:!0,component:M}),Object(f.jsx)(j.a,{path:"/movedetail",exact:!0,component:A})]})}var H=Object(o.a)(i.c)(I||(I=Object(s.a)(["\n  color:#000;\n  text-decoration : none;\n"])));function J(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"gnb-wrap",children:[Object(f.jsx)(H,{to:"/",exact:!0,children:"HOME"}),Object(f.jsx)(H,{to:"/moviepage",children:"\uc601\ud654\uac80\uc0c9"})]}),Object(f.jsx)(G,{})]})}function U(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(N,{children:Object(f.jsx)(J,{})})})}var q=document.getElementById("root");a.a.render(Object(f.jsx)(i.a,{basename:"/pmy.github.io",children:Object(f.jsx)(r.StrictMode,{children:Object(f.jsx)(U,{})})}),q)}},[[68,1,2]]]);
//# sourceMappingURL=main.48bea529.chunk.js.map