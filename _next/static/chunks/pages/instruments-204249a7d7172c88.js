(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{7958:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruments",function(){return n(9631)}])},9631:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j}});var r=n(5893),u=n(7294),i=n(9008),o=n(1163),a=n(9067),s=n(4040),c=n.n(s),l=n(5126),p=n(8099),f=n(543);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var u=h(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return d(this,n)}}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,u,o=m(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,e)).updateUrl=function(e,n){t.state.router.push("/instruments?category=".concat(e,"&query=").concat(n),void 0,{shallow:!0})},t.handleChange=function(e){var n=e.target,r=n.value?n.value.toLowerCase():"";t.updateUrl(t.state.category,r)},t.isSelected=function(e){return t.state.category===e?"selected":""},t.selectCategory=function(e){var n=e.currentTarget.getAttribute("data-category")||"";t.updateUrl(n,t.state.query)};var n=e.router.query,r=n.category||"all",u=(0,p.W)("appFolder","pluginFolder","projectFolder").pluginInstrumentCategories,i=e.plugins||[],a=n.query||"";return t.state={category:r,pluginTypes:u,plugins:i,pluginsFiltered:(0,f.q)(r,i,u,a),query:a,router:e.router},t}return t=s,(n=[{key:"componentDidUpdate",value:function(e){var t=e.router.query,n=this.props.router.query;if(n.category!==t.category){var r=this;this.setState({category:n.category},(function(){r.updateFilter()}))}if(n.query!==t.query){var u=this;this.setState({query:n.query},(function(){u.updateFilter()}))}}},{key:"updateFilter",value:function(){this.setState({pluginsFiltered:(0,f.q)(this.state.category,this.state.plugins,this.state.pluginTypes,this.state.query)})}},{key:"render",value:function(){var e=this;return(0,r.jsxs)(a.ZP,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:a.y7})}),(0,r.jsxs)("section",{className:c().plugins,children:[(0,r.jsxs)("div",{className:c().pluginsHeader,children:[(0,r.jsxs)("h3",{className:c().pluginsTitle,children:["Instruments ",(0,r.jsxs)("span",{className:c().pluginCount,children:["(",this.state.pluginsFiltered.length,")"]})]}),(0,r.jsx)("input",{className:c().pluginsSearch,placeholder:"Filter by keyword",type:"search",value:this.state.query,onChange:this.handleChange})]}),(0,r.jsx)("div",{className:c().pluginsCategoryWrapper,children:(0,r.jsx)("ul",{className:c().pluginsCategory,children:Object.keys(this.state.pluginTypes).map((function(t,n){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{"data-category":t,onClick:e.selectCategory,className:e.isSelected(t),children:e.state.pluginTypes[t].name})},"".concat(t,"-").concat(n))}))})}),(0,r.jsx)("div",{className:c().pluginsList,children:this.state.pluginsFiltered.map((function(e,t){return(0,r.jsx)(l.Z,{section:"instruments",plugin:e,pluginIndex:t},"".concat(e.repo,"/").concat(e.id,"-").concat(t))}))})]})]})}}])&&y(t.prototype,n),u&&y(t,u),s}(u.Component),j=!0;t.default=(0,o.withRouter)(b)}},function(e){e.O(0,[677,860,774,888,179],(function(){return t=7958,e(e.s=t);var t}));var t=e.O();_N_E=t}]);