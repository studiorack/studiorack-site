(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{7986:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/effects",function(){return r(6457)}])},6457:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return _}});var n=r(5893),o=r(7294),i=r(9008),u=r(1163),a=r(9067),c=r(4040),s=r.n(c),l=r(5126),f=r(8099),p=r(543);function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,r,o,u=b(c);function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=u.call(this,e)).updateUrl=function(e,r){t.state.router.push("/effects?category=".concat(e,"&query=").concat(r),void 0,{shallow:!0})},t.handleChange=function(e){var r=e.target,n=r.value?r.value.toLowerCase():"";t.updateUrl(t.state.category,n)},t.isSelected=function(e){return t.state.category===e?"selected":""},t.selectCategory=function(e){var r=e.currentTarget.getAttribute("data-category")||"";t.updateUrl(r,t.state.query)};var r=e.router.query,n=r.category||"all",o=(0,f.W)("appFolder","pluginFolder","projectFolder").pluginEffectCategories,i=e.plugins||[],a=r.query||"";return t.state={category:n,pluginTypes:o,plugins:i,pluginsFiltered:(0,p.q)(n,i,o,a),query:a,router:e.router},t}return t=c,(r=[{key:"componentDidUpdate",value:function(e){var t=e.router.query,r=this.props.router.query;if(r.category!==t.category){var n=this;this.setState({category:r.category},(function(){n.updateFilter()}))}if(r.query!==t.query){var o=this;this.setState({query:r.query},(function(){o.updateFilter()}))}}},{key:"updateFilter",value:function(){this.setState({pluginsFiltered:(0,p.q)(this.state.category,this.state.plugins,this.state.pluginTypes,this.state.query)})}},{key:"render",value:function(){var e=this;return(0,n.jsxs)(a.ZP,{children:[(0,n.jsx)(i.default,{children:(0,n.jsx)("title",{children:a.y7})}),(0,n.jsxs)("section",{className:s().plugins,children:[(0,n.jsxs)("div",{className:s().pluginsHeader,children:[(0,n.jsxs)("h3",{className:s().pluginsTitle,children:["Effects ",(0,n.jsxs)("span",{className:s().pluginCount,children:["(",this.state.pluginsFiltered.length,")"]})]}),(0,n.jsx)("input",{className:s().pluginsSearch,placeholder:"Filter by keyword",type:"search",value:this.state.query,onChange:this.handleChange})]}),(0,n.jsx)("div",{className:s().pluginsCategoryWrapper,children:(0,n.jsx)("ul",{className:s().pluginsCategory,children:Object.keys(this.state.pluginTypes).map((function(t,r){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{"data-category":t,onClick:e.selectCategory,className:e.isSelected(t),children:e.state.pluginTypes[t].name})},"".concat(t,"-").concat(r))}))})}),(0,n.jsx)("div",{className:s().pluginsList,children:this.state.pluginsFiltered.map((function(e,t){return(0,n.jsx)(l.Z,{section:"effects",plugin:e,pluginIndex:t},"".concat(e.repo,"/").concat(e.id,"-").concat(t))}))})]})]})}}])&&y(t.prototype,r),o&&y(t,o),c}(o.Component),_=!0;t.default=(0,u.withRouter)(j)}},function(e){e.O(0,[677,860,774,888,179],(function(){return t=7986,e(e.s=t);var t}));var t=e.O();_N_E=t}]);