(this["webpackJsonpuser-search"]=this["webpackJsonpuser-search"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(16),s=n.n(a),i=(n(31),n(23)),u=n(2),o=n(26),h=n(4),l=n.n(h),f=n(8),j=n(9),b=n(19),p=n.n(b),d=n(20),x=n.n(d),O=(n(33),n(21)),m=n(22),v=function(){function e(t,n,r,c){Object(O.a)(this,e),this.username=t,this.id=n,this.avatar_url=r,this.profile_url=c}return Object(m.a)(e,null,[{key:"fromJSON",value:function(t){return new e(t.login||t.username,t.id,t.avatar_url,t.html_url||t.web_url)}}]),e}(),g=function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,fetch("https://api.github.com/search/users?q="+t+"+in:login").then((function(e){return e.json()})).then((function(e){n=e.items.map((function(e){return v.fromJSON(e)})).slice(0,12)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v,e.next=3,fetch("https://api.github.com/users/"+t).then((function(e){return e.json()})).then((function(e){n=v.fromJSON(e)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,fetch("https://gitlab.com/api/v4/users?search="+t,{headers:{"PRIVATE-TOKEN":"9zXYGn_y4A5r9MP42xHx"}}).then((function(e){return e.json()})).then((function(e){n=e.map((function(e){return v.fromJSON(e)})).slice(0,12)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v,e.next=3,fetch("https://gitlab.com/api/v4/users?username="+t,{headers:{"PRIVATE-TOKEN":"9zXYGn_y4A5r9MP42xHx"}}).then((function(e){return e.json()})).then((function(e){n=v.fromJSON(e[0])}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(n(34),n(1)),S=function(e){var t=e.user;e.api;return Object(y.jsx)("div",{className:"usercard",onClick:function(){e.history.push({pathname:"/userProfile",state:{username:t.username,api:e.api}})},children:Object(y.jsxs)("div",{className:"usercard-inner",children:[Object(y.jsxs)("div",{className:"usercard-front",children:[Object(y.jsxs)("div",{children:["Username: ",t.username]}),Object(y.jsxs)("div",{children:["ID: ",t.id]})]}),Object(y.jsxs)("div",{className:"usercard-back",children:["Click to see ",t.username,"'s profile"]})]})})},C=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),u=i[0],h=i[1],b=Object(r.useState)([]),d=Object(j.a)(b,2),O=d[0],m=d[1],v=Object(r.useState)(""),k=Object(j.a)(v,2),N=k[0],C=k[1],_=x()(p.a),P=function(e,t,n){_.fire({icon:e,title:t,text:n})},E=function(){var e=Object(f.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("github"!=t){e.next=6;break}return e.next=3,g(u);case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,w(u);case 8:n=e.sent;case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=u.length){e.next=4;break}P("info","There is no user to seach","Write an username before search"),e.next=14;break;case 4:if(0!=c.length){e.next=8;break}P("info","Oops","Choose an API before search"),e.next=14;break;case 8:return C(Object(y.jsx)("div",{className:"loader"})),e.next=11,E(c);case 11:t=e.sent,m(t),C("");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"search-container",children:[Object(y.jsx)("div",{className:"title-container",children:"USER SEARCH"}),Object(y.jsxs)("div",{className:"search-inputs",children:[Object(y.jsx)("input",{value:u,onChange:function(e){return h(e.target.value)}}),Object(y.jsxs)("select",{onChange:function(e){a(e.target.value)},children:[Object(y.jsx)("option",{selected:!0,disabled:!0,children:"API"}),Object(y.jsx)("option",{value:"github",children:"GitHub"}),Object(y.jsx)("option",{value:"gitlab",children:"GitLab"})]}),Object(y.jsx)("button",{onClick:I,children:"Search"})]})]}),Object(y.jsxs)("div",{className:"results-container",children:[Object(y.jsx)("div",{className:"loader-container",children:N}),Object(o.a)(O).map((function(t){return Object(y.jsx)(S,{user:t,history:e.history,api:c},t.id)}))]})]})},_=(n(36),function(e){var t=e.location.state.username,n=e.location.state.api,c=Object(r.useState)(new v),a=Object(j.a)(c,2),s=a[0],i=a[1];Object(r.useEffect)((function(){(function(){var e=Object(f.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("github"!=n){e.next=6;break}return e.next=3,k(t);case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,N(t);case 8:r=e.sent;case 9:i(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(y.jsx)("div",{className:"profile-container",children:Object(y.jsxs)("div",{className:"profile",children:[Object(y.jsx)("img",{className:"user-avatar",src:s.avatar_url}),Object(y.jsx)("h2",{children:s.username}),Object(y.jsxs)("h3",{children:["ID: ",s.id]}),Object(y.jsx)("a",{href:s.profile_url,target:"_blank",title:"Click to go to profile",children:"github"==n?Object(y.jsx)("img",{style:{height:"100px",width:"130px"},src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png"}):Object(y.jsx)("img",{style:{height:"100px",width:"100px"},src:"http://assets.stickpng.com/images/5847f997cef1014c0b5e48c1.png"})})]})})}),P=function(){return Object(y.jsx)(i.a,{children:Object(y.jsxs)(u.d,{children:[Object(y.jsx)(u.b,{path:"/search",component:C}),Object(y.jsx)(u.b,{path:"/userProfile",component:_}),Object(y.jsx)(u.b,{render:function(){return Object(y.jsx)(u.a,{to:"/search"})}})]})})};var E=function(){return Object(y.jsx)(P,{})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(E,{})}),document.getElementById("root")),I()}},[[45,1,2]]]);
//# sourceMappingURL=main.ad7d2e3a.chunk.js.map