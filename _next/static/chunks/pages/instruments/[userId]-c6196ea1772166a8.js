(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{247:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instruments/[userId]",function(){return a(1185)}])},7657:function(e,t,a){"use strict";var s=a(5893),c=a(6369),l=a.n(c),r=a(9159);t.Z=e=>{let{items:t}=e;return(0,s.jsx)("div",{className:l().crumb,children:(0,s.jsx)("ul",{className:l().crumbList,children:t.map((e,a)=>(0,s.jsxs)("li",{className:l().crumbItem,children:["/",(0,s.jsx)("a",{className:l().crumbLink,href:"".concat((0,r.bv)()).concat((0,r.X1)(t,e)),children:e})]},"".concat(e,"-").concat(a)))})})}},4537:function(e,t,a){"use strict";a.d(t,{Z:function(){return w}});var s=a(5893),c=a(452),l=a.n(c),r=a(8504),n=a.n(r),i=e=>{let{title:t,count:a}=e;return(0,s.jsx)("div",{className:n().header,children:(0,s.jsxs)("h3",{className:n().headerTitle,children:[t," ",a?(0,s.jsxs)("span",{className:n().headerCount,children:["(",a,")"]}):""]})})},u=a(6850),o=a.n(u),d=a(1664),m=a.n(d),_=a(9159),h=a(3589),p=e=>{let{section:t,item:a,index:c}=e;return(0,s.jsx)(m(),{href:"/".concat(t,"/[userId]/[").concat("projects"===t?"projectId":"pluginId","]"),as:"/".concat(t,"/").concat(a.id),className:o().cardLink,children:(0,s.jsxs)("div",{className:o().card,children:[(0,s.jsxs)("div",{className:o().cardDetails,children:[(0,s.jsxs)("div",{className:o().cardHead,children:[(0,s.jsxs)("h4",{className:o().cardTitle,children:[a.name," ",(0,s.jsxs)("span",{className:o().cardVersion,children:["v",a.version]})]}),(0,s.jsx)("span",{className:o().cardButton,children:(0,s.jsx)("img",{className:o().cardButtonIcon,src:"".concat((0,_.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})})]}),(0,s.jsxs)("ul",{className:o().cardTags,children:[(0,s.jsx)("img",{className:o().cardIcon,src:"".concat((0,_.bv)(),"/images/icon-tag.svg"),alt:"Tags",loading:"lazy"}),a.tags.map((e,t)=>(0,s.jsxs)("li",{className:o().cardTag,children:[e,t!==a.tags.length-1?",":""]},"".concat(e,"-").concat(t,"-").concat(c)))]})]}),a.files.image?(0,s.jsx)("img",{className:o().cardImage,src:(0,h.fk)(a,"image"),alt:a.name,loading:"lazy"}):""]})})},x=a(1163),b=a(3428),j=a(7428),f=a.n(j),g=a(4492),y=a(6069),v=a.n(y),N=e=>{let{label:t,items:a}=e,c=(0,x.useRouter)(),l=(0,g.Uu)(t),r=e=>!!c.query[l]&&(0,g.Bh)(c.query[l],e),n=()=>{let e=document.getElementById(l);c.query[l]=Array.from(new FormData(e).keys()),c.push({pathname:c.pathname,query:c.query})};return(0,s.jsxs)("form",{className:v().multiselect,id:l,children:[(0,s.jsx)("select",{className:"".concat(v().multiselectTitle," ").concat(v()["icon-"+l]),onMouseDown:e=>{e.preventDefault(),e.target.blur(),window.focus();let a=document.getElementById(t);(null==a?void 0:a.style.display)==="block"?a&&(a.style.display="none"):a&&(a.style.display="block")},children:(0,s.jsx)("option",{children:t})}),(0,s.jsx)("div",{className:v().multiselectCheckboxes,id:t,children:a.map(e=>(0,s.jsxs)("label",{className:v().multiselectLabel,htmlFor:(0,g.Uu)(e.value),title:e.label,children:[(0,s.jsx)("input",{className:v().multiselectInput,type:"checkbox",id:(0,g.Uu)(e.value),name:(0,g.Uu)(e.value),onClick:n,defaultChecked:r(e.value)}),e.label]},(0,g.Uu)(e.value)))})]})},I=e=>{let{section:t}=e,a=(0,x.useRouter)(),c=a.query.search||"";return(0,s.jsxs)("div",{className:f().filters,children:[(0,s.jsx)("span",{className:f().filtersTitle,children:"Filter by:"}),(0,s.jsx)(N,{label:"Category",items:(0,b.Jx)(t)}),(0,s.jsx)(N,{label:"License",items:(0,b.hx)()}),(0,s.jsx)(N,{label:"Platform",items:(0,b.G5)()}),(0,s.jsx)("input",{className:f().filtersSearch,placeholder:"Keyword",type:"search",id:"search",name:"search",value:c,onChange:e=>{let t=e.target;a.query.search=t.value?t.value.toLowerCase():"",a.push({pathname:a.pathname,query:a.query})}})]})},k=a(7657),C=a(6068),q=a.n(C),T=e=>{let{items:t}=e,a=(0,x.useRouter)(),c=a.query.category||"all",l=a.query.search||"",r=e=>c===e?"selected":"",n=e=>{c=e.target.getAttribute("data-category")||"",a.query.category=c||"",a.push({pathname:a.pathname,query:a.query})};return(0,s.jsx)("div",{className:q().tabs,children:(0,s.jsxs)("ul",{className:q().tabsCategory,children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{"data-category":"all",onClick:n,className:r("all"),children:"All"})}),Object.keys(t).map((e,a)=>(0,s.jsx)("li",{children:(0,s.jsx)("a",{"data-category":e,onClick:n,className:r(e),children:t[e].name})},"".concat(e,"-").concat(a))),(0,s.jsx)("li",{children:(0,s.jsx)("input",{className:q().tabsSearch,placeholder:"Keyword",type:"search",id:"search",name:"search",value:l,onChange:e=>{let t=e.target;a.query.search=t.value?t.value.toLowerCase():"",a.push({pathname:a.pathname,query:a.query})}})})]})})},w=e=>{let{filters:t=!0,items:a,type:c,tabs:r,title:n}=e;return(0,s.jsxs)("section",{className:l().list,children:[(0,s.jsx)(k.Z,{items:[c]}),(0,s.jsx)(i,{title:n,count:a.length}),t?(0,s.jsx)(I,{section:c}):"",r?(0,s.jsx)(T,{items:r}):"",(0,s.jsx)("div",{className:l().listGrid,children:a.map((e,t)=>(0,s.jsx)(p,{section:c,item:e,index:t},"".concat(e.id,"-").concat(t)))})]})}},3428:function(e,t,a){"use strict";a.d(t,{CP:function(){return c},G5:function(){return i},Jx:function(){return l},hx:function(){return n},xx:function(){return r}});var s=a(3589);function c(e){return"effects"===e?(0,s.Wr)("app","plugin","preset","project").pluginEffectCategories:(0,s.Wr)("app","plugin","preset","project").pluginInstrumentCategories}function l(e){let t=c(e);return delete t.all,Object.keys(t).map(e=>({label:t[e].name,value:e})).sort((e,t)=>e.label.localeCompare(t.label))}function r(){return(0,s.Wr)("app","plugin","preset","project").licenses}function n(){return r().map(e=>({label:e.name,value:e.key})).sort((e,t)=>e.label.localeCompare(t.label))}function i(){return[{label:"Linux",value:"linux"},{label:"Mac",value:"mac"},{label:"Windows",value:"win"}]}},1185:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return d}});var s=a(5893),c=a(7294),l=a(9008),r=a.n(l),n=a(1152),i=a(4492),u=a(4537);class o extends c.Component{render(){return(0,s.jsxs)(n.ZP,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:(0,i.tj)(["Instruments",this.state.userId])})}),(0,s.jsx)(u.Z,{items:this.state.pluginsFiltered,type:"instruments",title:this.state.userId,filters:!1})]})}constructor(e){super(e),this.state={pluginsFiltered:e.plugins||[],query:"",userId:e.userId}}}var d=!0;t.default=o},6850:function(e){e.exports={cardLink:"card_cardLink__IoOmv",card:"card_card__bu1Pk",cardDetails:"card_cardDetails__FQH4o",cardHead:"card_cardHead__XktMI",cardTitle:"card_cardTitle__V9Q9S",cardButton:"card_cardButton__YaRrq",cardButtonInstalled:"card_cardButtonInstalled__xZKFl",cardButtonIcon:"card_cardButtonIcon__dBPy7",cardVersion:"card_cardVersion__qfhlH",cardTags:"card_cardTags__j0f3J",cardIcon:"card_cardIcon__l4KXe",cardTag:"card_cardTag__MVb1V",cardImage:"card_cardImage__tSkze"}},6369:function(e){e.exports={crumb:"crumb_crumb__9IHnd",crumbList:"crumb_crumbList__9FcuG",crumbItem:"crumb_crumbItem__69lEI",crumbLink:"crumb_crumbLink__sEwKw"}},7428:function(e){e.exports={filters:"filters_filters__VhqO0",filtersTitle:"filters_filtersTitle__SRxPE",filtersSearch:"filters_filtersSearch__7sQjH"}},8504:function(e){e.exports={header:"header_header__IG54L",headerTitle:"header_headerTitle__ASJCX",headerCount:"header_headerCount__mcUSv"}},452:function(e){e.exports={list:"list_list__7CKik",listGrid:"list_listGrid__CbZPj"}},6069:function(e){e.exports={multiselect:"multi-select_multiselect__zWaOD",multiselectTitle:"multi-select_multiselectTitle__kt8Z6","icon-category":"multi-select_icon-category__5j4M1","icon-license":"multi-select_icon-license__sP7H_","icon-cost":"multi-select_icon-cost__iZ9P9","icon-compatibility":"multi-select_icon-compatibility__FglPj","icon-platform":"multi-select_icon-platform__AbXO6",multiselectCheckboxes:"multi-select_multiselectCheckboxes__jbyua",multiselectLabel:"multi-select_multiselectLabel__SnyrD",multiselectInput:"multi-select_multiselectInput___9974"}},6068:function(e){e.exports={tabs:"tabs_tabs__DMV1h",tabsCategory:"tabs_tabsCategory__m0Vze",tabsSearch:"tabs_tabsSearch___vbd0"}}},function(e){e.O(0,[589,664,888,774,179],function(){return e(e.s=247)}),_N_E=e.O()}]);