(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{8801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/effects",function(){return r(6457)}])},6457:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j}});var n=r(1438),s=r(8029),a=r(6567),i=r(5893),u=r(7294),c=r(9008),l=r.n(c),o=r(1163),p=r(9067),d=r(4040),g=r.n(d),h=r(5126),y=r(8099),f=r(543),v=function(e){(0,s.Z)(r,e);var t=(0,a.Z)(r);function r(e){var s;(0,n.Z)(this,r),(s=t.call(this,e)).updateUrl=function(e,t){s.state.router.push("/effects?category=".concat(e,"&query=").concat(t),void 0,{shallow:!0})},s.handleChange=function(e){var t=e.target,r=t.value?t.value.toLowerCase():"";s.updateUrl(s.state.category,r)},s.isSelected=function(e){return s.state.category===e?"selected":""},s.selectCategory=function(e){var t=e.currentTarget.getAttribute("data-category")||"";s.updateUrl(t,s.state.query)};var a=e.router.query,i=a.category||"all",u=(0,y.W)("appFolder","pluginFolder","projectFolder").pluginEffectCategories,c=e.plugins||[],l=a.query||"";return s.state={category:i,pluginTypes:u,plugins:c,pluginsFiltered:(0,f.q)(i,c,u,l),query:l,router:e.router},s}var u=r.prototype;return u.componentDidUpdate=function(e){var t=this,r=e.router.query,n=this.props.router.query;n.category!==r.category&&this.setState({category:n.category},(function(){t.updateFilter()})),n.query!==r.query&&this.setState({query:n.query},(function(){t.updateFilter()}))},u.updateFilter=function(){this.setState({pluginsFiltered:(0,f.q)(this.state.category,this.state.plugins,this.state.pluginTypes,this.state.query)})},u.render=function(){var e=this;return(0,i.jsxs)(p.ZP,{children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:p.y7})}),(0,i.jsxs)("section",{className:g().plugins,children:[(0,i.jsxs)("div",{className:g().pluginsHeader,children:[(0,i.jsxs)("h3",{className:g().pluginsTitle,children:["Effects ",(0,i.jsxs)("span",{className:g().pluginCount,children:["(",this.state.pluginsFiltered.length,")"]})]}),(0,i.jsx)("input",{className:g().pluginsSearch,placeholder:"Filter by keyword",type:"search",value:this.state.query,onChange:this.handleChange})]}),(0,i.jsx)("div",{className:g().pluginsCategoryWrapper,children:(0,i.jsx)("ul",{className:g().pluginsCategory,children:Object.keys(this.state.pluginTypes).map((function(t,r){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{"data-category":t,onClick:e.selectCategory,className:e.isSelected(t),children:e.state.pluginTypes[t].name})},"".concat(t,"-").concat(r))}))})}),(0,i.jsx)("div",{className:g().pluginsList,children:this.state.pluginsFiltered.map((function(e,t){return(0,i.jsx)(h.Z,{section:"effects",plugin:e,pluginIndex:t},"".concat(e.repo,"/").concat(e.id,"-").concat(t))}))})]})]})},r}(u.Component),j=!0;t.default=(0,o.withRouter)(v)}},function(e){e.O(0,[895,860,774,888,179],(function(){return t=8801,e(e.s=t);var t}));var t=e.O();_N_E=t}]);