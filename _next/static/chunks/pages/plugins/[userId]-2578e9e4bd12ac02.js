(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{9715:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins/[userId]",function(){return t(9961)}])},2506:function(n,e,t){"use strict";var r=t(5893),i=t(2415),a=t.n(i),s=t(1163);function o(n,e){var t="",r=!0,i=!1,a=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var c=s.value;if(t+="/"+c,c===e)break}}catch(u){i=!0,a=u}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return t}e.Z=function(n){var e=n.items;return(0,r.jsx)("div",{className:a().crumb,children:(0,r.jsx)("ul",{className:a().crumbList,children:e.map((function(n,t){return(0,r.jsxs)("li",{className:a().crumbItem,children:["/",(0,r.jsx)("a",{className:a().crumbLink,href:"".concat((0,s.useRouter)().basePath).concat(o(e,n)),children:n})]},"".concat(n,"-").concat(t))}))})})}},9067:function(n,e,t){"use strict";t.d(e,{ZP:function(){return y},y7:function(){return d}});var r=t(5893),i=t(9008),a=t(7294),s=t(5016),o=t.n(s),c=t(1163);function u(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function p(n,e){return!e||"object"!==f(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var f=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function _(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=l(n);if(e){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return p(this,t)}}var m=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}(s,n);var e,t,i,a=_(s);function s(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,n)).isSelected=function(n){return"/"===n?e.state.router.asPath===n?o().navItemActive:"":e.state.router.asPath.startsWith(n)?o().navItemActive:""},e.state={home:n.home,router:n.router},e}return e=s,(t=[{key:"render",value:function(){return(0,r.jsxs)("div",{className:o().navigation,children:[(0,r.jsx)("input",{className:o().menuBtn,type:"checkbox",id:"menu-btn"}),(0,r.jsx)("label",{className:o().menuIcn,htmlFor:"menu-btn",children:(0,r.jsx)("span",{className:o().menuNavIcn})}),(0,r.jsxs)("ul",{className:o().menu,children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"".concat(this.state.router.basePath,"/"),className:"".concat(o().navItem," ").concat(this.isSelected("/")),children:"Tools"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"".concat(this.state.router.basePath,"/plugins"),className:"".concat(o().navItem," ").concat(this.isSelected("/plugins")),children:"Plugins"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"".concat(this.state.router.basePath,"/docs"),className:"".concat(o().navItem," ").concat(this.isSelected("/docs")),children:"Docs"})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:"https://discord.gg/6VSA7n6J",className:"".concat(o().navButton," button"),target:"_blank",children:["Community",(0,r.jsx)("img",{className:o().navButtonIcon,src:"".concat(this.state.router.basePath,"/images/icon-external-link.svg"),alt:"External link",loading:"lazy"})]})})]})]})}}])&&u(e.prototype,t),i&&u(e,i),s}(a.Component),h=(0,c.withRouter)(m),d="StudioRack";function y(n){var e=n.children,t=(0,c.useRouter)().basePath;return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Automate your plugin publishing workflow, easy plugin installation and management"}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(t,"/images/creators-mobile.jpg")}),(0,r.jsx)("meta",{name:"og:title",content:d}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(t,"/icons/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t,"/icons/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t,"/icons/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"manifest",href:"".concat(t,"/icons/site.webmanifest")})]}),(0,r.jsxs)("header",{className:o().header,children:[(0,r.jsxs)("a",{href:"".concat(t,"/"),className:o().headerLink,children:[(0,r.jsx)("img",{className:o().logoImage,src:"".concat(t,"/images/studio-rack-logo.svg"),alt:d,loading:"lazy"}),(0,r.jsxs)("span",{className:o().logoText,children:["Studio",(0,r.jsx)("span",{className:o().logoTextBold,children:"Rack"})]})]}),(0,r.jsx)(h,{})]}),(0,r.jsx)("main",{children:e})]})}},9961:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return x}});var r=t(5893),i=t(7294),a=t(9008),s=t(2506),o=t(9067),c=t(5793),u=t.n(c),l=t(1664),p=t(1163),g=t(8503);function f(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _(n){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function m(n,e){return!e||"object"!==d(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function h(n,e){return(h=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var d=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function y(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=_(n);if(e){var i=_(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return m(this,t)}}var v=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&h(n,e)}(p,n);var e,t,i,c=y(p);function p(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(e=c.call(this,n)).handleChange=function(n){var t=n.target,r=t.value?t.value.toLowerCase():"",i=e.props.plugins.filter((function(n){return!(-1===n.name.toLowerCase().indexOf(r)&&-1===n.description.toLowerCase().indexOf(r)&&!n.tags.filter((function(n){return-1!==n.toLowerCase().indexOf(r)})).length)&&n}));e.setState({pluginsFiltered:i||[],query:r})},e.imageError=function(n){var t=n.target,r="".concat(e.state.router.basePath,"/images/plugin.png");t.getAttribute("src")!==r&&t.setAttribute("src",r)},e.state={pluginsFiltered:n.plugins||[],router:n.router,query:"",userId:n.userId},e}return e=p,(t=[{key:"render",value:function(){var n=this;return(0,r.jsxs)(o.ZP,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:o.y7})}),(0,r.jsxs)("section",{className:u().plugins,children:[(0,r.jsx)(s.Z,{items:["plugins"]}),(0,r.jsx)("h2",{children:this.state.userId}),(0,r.jsx)("div",{className:u().pluginsList,children:this.state.pluginsFiltered.map((function(e,t){return(0,r.jsx)(l.default,{href:"/plugins/[userId]/[repoId]/[pluginId]",as:"/plugins/".concat(e.repo,"/").concat(e.id),children:(0,r.jsxs)("div",{className:u().plugin,children:[(0,r.jsxs)("div",{className:u().pluginDetails,children:[(0,r.jsxs)("div",{className:u().pluginHead,children:[(0,r.jsxs)("h4",{className:u().pluginTitle,children:[e.name," ",(0,r.jsxs)("span",{className:u().pluginVersion,children:["v",e.version]})]}),(0,r.jsx)("span",{className:u().pluginButton,children:(0,r.jsx)("img",{className:u().pluginButtonIcon,src:"".concat(n.state.router.basePath,"/images/icon-download.svg"),alt:"Download",loading:"lazy"})})]}),(0,r.jsxs)("ul",{className:u().pluginTags,children:[(0,r.jsx)("img",{className:u().pluginIcon,src:"".concat(n.state.router.basePath,"/images/icon-tag.svg"),alt:"Tags",loading:"lazy"}),e.tags.map((function(n,e){return(0,r.jsxs)("li",{className:u().pluginTag,children:[n,","]},"".concat(n,"-").concat(e,"-").concat(t))}))]})]}),e.files.image?(0,r.jsx)("img",{className:u().pluginImage,src:(0,g.pluginFileUrl)(e,"image"),alt:e.name,onError:n.imageError,loading:"lazy"}):""]})},"".concat(e.repo,"/").concat(e.id,"-").concat(t))}))})]})]})}}])&&f(e.prototype,t),i&&f(e,i),p}(i.Component),x=!0;e.default=(0,p.withRouter)(v)},2415:function(n){n.exports={crumb:"crumb_crumb__UwVqh",crumbList:"crumb_crumbList__Vc_mG",crumbLink:"crumb_crumbLink___jIN7"}},5016:function(n){n.exports={header:"layout_header__H1FPN",headerLink:"layout_headerLink__b5duO",logoText:"layout_logoText__k_NiD",logoTextBold:"layout_logoTextBold__5Z4GQ",navItem:"layout_navItem__8ttv4",navItemActive:"layout_navItemActive__HTH8A",navButton:"layout_navButton__iG9NC",navButtonIcon:"layout_navButtonIcon__I1yBf",menu:"layout_menu__hdTv4",menuIcn:"layout_menuIcn__ci3L7",menuNavIcn:"layout_menuNavIcn__Ugihm",menuBtn:"layout_menuBtn__MfdF9",steps:"layout_steps__fE_xu"}},5793:function(n){n.exports={plugins:"plugins_plugins__MnuvA",pluginsTitle:"plugins_pluginsTitle__mmJf_",pluginCount:"plugins_pluginCount__UHig9",pluginsHeader:"plugins_pluginsHeader__IcSNl",pluginsCategory:"plugins_pluginsCategory__vT21k",pluginsSearch:"plugins_pluginsSearch__1di_v",plugin:"plugins_plugin__O08Ve",pluginDetails:"plugins_pluginDetails__DypuS",pluginHead:"plugins_pluginHead__r6b7O",pluginTitle:"plugins_pluginTitle__2N526",pluginButton:"plugins_pluginButton__i4fvU",pluginButtonInstalled:"plugins_pluginButtonInstalled__DRQAy",pluginButtonIcon:"plugins_pluginButtonIcon__jhz9t",pluginVersion:"plugins_pluginVersion__2rJuV",pluginTags:"plugins_pluginTags__a6eQh",pluginIcon:"plugins_pluginIcon__Cv4b3",pluginTag:"plugins_pluginTag__1k2YS",pluginImage:"plugins_pluginImage__3BgBx",pluginsList:"plugins_pluginsList__yO_gw"}}},function(n){n.O(0,[16,774,888,179],(function(){return e=9715,n(n.s=e);var e}));var e=n.O();_N_E=e}]);