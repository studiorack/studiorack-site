_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"7Rgj":function(t,e,n){t.exports={container:"docs_container__18tj9",sidebar:"docs_sidebar__3mbp9",content:"docs_content__3OOKn"}},I8z9:function(t,e,n){t.exports={markdownH2:"doc_markdownH2__354Kf",markdown:"doc_markdown__2E8_P",markdownUl:"doc_markdownUl__2TtY8",markdownLi:"doc_markdownLi__1cowt",markdownA:"doc_markdownA__2F7Bl",markdownCode:"doc_markdownCode__2ZuOt",markdownPre:"doc_markdownPre__2JwWd"}},JYFF:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[slug]",function(){return n("SqIG")}])},SqIG:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return w}));var c=n("1OyB"),r=n("vuIU"),a=n("Ji7U"),o=n("md7G"),s=n("foSv"),u=n("q1tI"),i=n.n(u),l=n("pJr+"),d=n("5M6V"),f=n("I8z9"),m=n.n(f),_=n("20a2"),h=i.a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var v=function(t){Object(a.a)(n,t);var e=p(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={allDocs:t.allDocs,doc:t.doc,router:t.router},r}return Object(r.a)(n,[{key:"convertToSlug",value:function(t){return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}},{key:"render",value:function(){var t=this,e=this.state.doc.content.replace("/docs","".concat(this.state.router.basePath,"/docs"));return e=e.replace(/<h2>(.*?)<\/h2>/g,(function(e,n){return'<span id="'.concat(t.convertToSlug(n),'"></span>').concat(e)})),h(d.a,null,h(l.a,{docs:this.state.allDocs},h("h1",null,this.state.doc.title),h("div",{className:m.a.markdown,dangerouslySetInnerHTML:{__html:e}})))}}]),n}(u.Component),w=!0;e.default=Object(_.withRouter)(v)},"pJr+":function(t,e,n){"use strict";var c=n("1OyB"),r=n("vuIU"),a=n("JX7q"),o=n("Ji7U"),s=n("md7G"),u=n("foSv"),i=n("rePB"),l=n("q1tI"),d=n.n(l),f=n("7Rgj"),m=n.n(f),_=n("20a2"),h=d.a.createElement;function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(u.a)(t);if(e){var r=Object(u.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(s.a)(this,n)}}var v=function(t){Object(o.a)(n,t);var e=p(n);function n(t){var r;return Object(c.a)(this,n),r=e.call(this,t),Object(i.a)(Object(a.a)(r),"isSelected",(function(t){return"/"===t?r.state.router.asPath===t?"active":"":r.state.router.asPath.startsWith(t)?"active":""})),r.state={children:t.children,docs:t.docs.filter((function(t){return"06-command-line"!==t.slug})),router:t.router},r}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return h("div",{className:m.a.container},h("div",{className:m.a.sidebar},h("h4",null,"Documentation"),h("ul",{className:m.a.menu},this.state.docs.map((function(e){return h("li",{className:m.a.menuItem,key:e.slug},h("a",{href:"".concat(t.state.router.basePath,"/docs/").concat(e.slug),className:t.isSelected("/docs/".concat(e.slug))},e.title))}))),h("h4",null,"API Reference"),h("ul",{className:m.a.menu},h("li",{className:m.a.menuItem,key:"06-command-line"},h("a",{href:"".concat(this.state.router.basePath,"/docs/06-command-line"),className:this.isSelected("/docs/06-command-line")},"Command line")))),h("div",{className:m.a.content},this.state.children))}}]),n}(l.Component);e.a=Object(_.withRouter)(v)}},[["JYFF",0,2,1,3]]]);