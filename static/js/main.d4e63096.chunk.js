(this["webpackJsonpmosters-rolodex"]=this["webpackJsonpmosters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(4),o=n.n(a),i=(n(14),n(5)),h=n(6),l=n(2),u=n(8),d=n(7),j=(n(15),n(16),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(r.jsx)("h2",{children:e.monster.name}),Object(r.jsx)("p",{children:e.monster.email})]})}),m=(n(17),function(e){return Object(r.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(r.jsx)(j,{monster:e})}))})}),b=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("input",{class:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange2=function(t){e.setState({searchString:t.target.value})},e.state={monsters:[],searchString:""},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"handleChange",value:function(e){this.setState({searchString:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchString,s=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{class:"header",children:"Monster Roledex"}),s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{placeholder:"search monster",handleChange:this.handleChange2}),Object(r.jsx)(m,{monsters:s})]})]})}}]),n}(s.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),g()}],[[19,1,2]]]);
//# sourceMappingURL=main.d4e63096.chunk.js.map