_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"7Rgj":function(t,e,n){t.exports={container:"docs_container__18tj9",sidebar:"docs_sidebar__3mbp9",content:"docs_content__3OOKn"}},I8z9:function(t,e,n){t.exports={markdownH2:"doc_markdownH2__354Kf",markdown:"doc_markdown__2E8_P",markdownUl:"doc_markdownUl__2TtY8",markdownLi:"doc_markdownLi__1cowt",markdownA:"doc_markdownA__2F7Bl",markdownCode:"doc_markdownCode__2ZuOt",markdownPre:"doc_markdownPre__2JwWd"}},Vm61:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return b}));var a=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),c=n("md7G"),s=n("foSv"),u=n("q1tI"),i=n.n(u),l=n("pJr+"),d=n("5M6V"),m=n("I8z9"),f=n.n(m),h=n("g4pe"),p=n.n(h),_=n("20a2"),w=i.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t){Object(o.a)(n,t);var e=k(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={allDocs:t.allDocs,router:t.router},r}return Object(r.a)(n,[{key:"render",value:function(){return w(i.a.Fragment,null,w(d.a,null,w(p.a,null,w("title",null,"Documentation")),w(l.a,{docs:this.state.allDocs},w("h1",null,"Getting started"),w("p",null,"System Requirements:"),w("ul",{className:f.a.markdownUl},w("li",{className:f.a.markdownLi},"Linux, MacOS or Windows"),w("li",{className:f.a.markdownLi},"NodeJS 12+")),w("p",null,"To install the command line tool, run the command:"),w("pre",{className:f.a.markdownPre},"npm install @studiorack/cli -g"),w("p",null,"Verify the tool has been installed by running:"),w("pre",{className:f.a.markdownPre},"studiorack --version"),w("h2",{className:f.a.markdownH2},"Music producers"),w("p",null,"Follow our guide on how to start a music project and install plugins:"),w("p",null,w("a",{href:"".concat(this.state.router.basePath,"/docs/02-create-a-project-config"),className:f.a.markdownA},"Create a project config >")),w("h2",{className:f.a.markdownH2},"Plugin developers"),w("p",null,"Jump straight to the advanced guide on how to create your own audio plugins:"),w("p",null,w("a",{href:"".concat(this.state.router.basePath,"/docs/05-develop-new-plugins"),className:f.a.markdownA},"Develop new plugins >")))))}}]),n}(u.Component),b=!0;e.default=Object(_.withRouter)(v)},"pJr+":function(t,e,n){"use strict";var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),c=n("Ji7U"),s=n("md7G"),u=n("foSv"),i=n("rePB"),l=n("q1tI"),d=n.n(l),m=n("7Rgj"),f=n.n(m),h=n("20a2"),p=d.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var w=function(t){Object(c.a)(n,t);var e=_(n);function n(t){var r;return Object(a.a)(this,n),r=e.call(this,t),Object(i.a)(Object(o.a)(r),"isSelected",(function(t){return"/"===t?r.state.router.asPath===t?"active":"":r.state.router.asPath.startsWith(t)?"active":""})),r.state={children:t.children,docs:t.docs.filter((function(t){return"06-command-line"!==t.slug})),router:t.router},r}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return p("div",{className:f.a.container},p("div",{className:f.a.sidebar},p("h4",null,"Documentation"),p("ul",{className:f.a.menu},this.state.docs.map((function(e){return p("li",{className:f.a.menuItem,key:e.slug},p("a",{href:"".concat(t.state.router.basePath,"/docs/").concat(e.slug),className:t.isSelected("/docs/".concat(e.slug))},e.title))}))),p("h4",null,"API Reference"),p("ul",{className:f.a.menu},p("li",{className:f.a.menuItem,key:"06-command-line"},p("a",{href:"".concat(this.state.router.basePath,"/docs/06-command-line"),className:this.isSelected("/docs/06-command-line")},"Command line")))),p("div",{className:f.a.content},this.state.children))}}]),n}(l.Component);e.a=Object(h.withRouter)(w)},"rmy+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n("Vm61")}])}},[["rmy+",0,2,1,3]]]);