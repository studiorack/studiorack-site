(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6192:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a(7173)}])},7657:function(e,t,a){"use strict";var l=a(5893),c=a(6369),s=a.n(c),r=a(9159);t.Z=e=>{let{items:t}=e;return(0,l.jsx)("div",{className:s().crumb,children:(0,l.jsx)("ul",{className:s().crumbList,children:t.map((e,a)=>(0,l.jsxs)("li",{className:s().crumbItem,children:["/",(0,l.jsx)("a",{className:s().crumbLink,href:"".concat((0,r.bv)()).concat((0,r.X1)(t,e)),children:e})]},"".concat(e,"-").concat(a)))})})}},4537:function(e,t,a){"use strict";a.d(t,{Z:function(){return q}});var l=a(5893),c=a(452),s=a.n(c),r=a(8504),n=a.n(r),i=e=>{let{title:t,count:a}=e;return(0,l.jsx)("div",{className:n().header,children:(0,l.jsxs)("h3",{className:n().headerTitle,children:[t," ",a?(0,l.jsxs)("span",{className:n().headerCount,children:["(",a,")"]}):""]})})},o=a(6850),u=a.n(o),d=a(1664),m=a.n(d),_=a(9159),h=a(3589),p=e=>{let{section:t,item:a,index:c}=e;return(0,l.jsx)(m(),{href:"/".concat(t,"/[userId]/[").concat("projects"===t?"projectId":"pluginId","]"),as:"/".concat(t,"/").concat(a.id),className:u().cardLink,children:(0,l.jsxs)("div",{className:u().card,children:[(0,l.jsxs)("div",{className:u().cardDetails,children:[(0,l.jsxs)("div",{className:u().cardHead,children:[(0,l.jsxs)("h4",{className:u().cardTitle,children:[a.name," ",(0,l.jsxs)("span",{className:u().cardVersion,children:["v",a.version]})]}),(0,l.jsx)("span",{className:u().cardButton,children:(0,l.jsx)("img",{className:u().cardButtonIcon,src:"".concat((0,_.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})})]}),(0,l.jsxs)("ul",{className:u().cardTags,children:[(0,l.jsx)("img",{className:u().cardIcon,src:"".concat((0,_.bv)(),"/images/icon-tag.svg"),alt:"Tags",loading:"lazy"}),a.tags.map((e,t)=>(0,l.jsxs)("li",{className:u().cardTag,children:[e,t!==a.tags.length-1?",":""]},"".concat(e,"-").concat(t,"-").concat(c)))]})]}),a.files.image?(0,l.jsx)("img",{className:u().cardImage,src:(0,h.fk)(a,"image"),alt:a.name,loading:"lazy"}):""]})})},x=a(1163),b=a(3428),j=a(7428),f=a.n(j),y=a(4492),g=a(6069),v=a.n(g),N=e=>{let{label:t,items:a}=e,c=(0,x.useRouter)(),s=(0,y.Uu)(t),r=e=>!!c.query[s]&&(0,y.Bh)(c.query[s],e),n=()=>{let e=document.getElementById(s);c.query[s]=Array.from(new FormData(e).keys()),c.push({pathname:c.pathname,query:c.query})};return(0,l.jsxs)("form",{className:v().multiselect,id:s,children:[(0,l.jsx)("select",{className:"".concat(v().multiselectTitle," ").concat(v()["icon-"+s]),onMouseDown:e=>{e.preventDefault(),e.target.blur(),window.focus();let a=document.getElementById(t);(null==a?void 0:a.style.display)==="block"?a&&(a.style.display="none"):a&&(a.style.display="block")},children:(0,l.jsx)("option",{children:t})}),(0,l.jsx)("div",{className:v().multiselectCheckboxes,id:t,children:a.map(e=>(0,l.jsxs)("label",{className:v().multiselectLabel,htmlFor:(0,y.Uu)(e.value),title:e.label,children:[(0,l.jsx)("input",{className:v().multiselectInput,type:"checkbox",id:(0,y.Uu)(e.value),name:(0,y.Uu)(e.value),onClick:n,defaultChecked:r(e.value)}),e.label]},(0,y.Uu)(e.value)))})]})},C=e=>{let{section:t}=e,a=(0,x.useRouter)(),c=a.query.search||"";return(0,l.jsxs)("div",{className:f().filters,children:[(0,l.jsx)("span",{className:f().filtersTitle,children:"Filter by:"}),(0,l.jsx)(N,{label:"Category",items:(0,b.Jx)(t)}),(0,l.jsx)(N,{label:"License",items:(0,b.hx)()}),(0,l.jsx)(N,{label:"Platform",items:(0,b.G5)()}),(0,l.jsx)("input",{className:f().filtersSearch,placeholder:"Keyword",type:"search",id:"search",name:"search",value:c,onChange:e=>{let t=e.target;a.query.search=t.value?t.value.toLowerCase():"",a.push({pathname:a.pathname,query:a.query})}})]})},k=a(7657),I=a(6068),w=a.n(I),L=e=>{let{items:t}=e,a=(0,x.useRouter)(),c=a.query.category||"all",s=a.query.search||"",r=e=>c===e?"selected":"",n=e=>{c=e.target.getAttribute("data-category")||"",a.query.category=c||"",a.push({pathname:a.pathname,query:a.query})};return(0,l.jsx)("div",{className:w().tabs,children:(0,l.jsxs)("ul",{className:w().tabsCategory,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{"data-category":"all",onClick:n,className:r("all"),children:"All"})}),Object.keys(t).map((e,a)=>(0,l.jsx)("li",{children:(0,l.jsx)("a",{"data-category":e,onClick:n,className:r(e),children:t[e].name})},"".concat(e,"-").concat(a))),(0,l.jsx)("li",{children:(0,l.jsx)("input",{className:w().tabsSearch,placeholder:"Keyword",type:"search",id:"search",name:"search",value:s,onChange:e=>{let t=e.target;a.query.search=t.value?t.value.toLowerCase():"",a.push({pathname:a.pathname,query:a.query})}})})]})})},q=e=>{let{filters:t=!0,items:a,type:c,tabs:r,title:n}=e;return(0,l.jsxs)("section",{className:s().list,children:[(0,l.jsx)(k.Z,{items:[c]}),(0,l.jsx)(i,{title:n,count:a.length}),t?(0,l.jsx)(C,{section:c}):"",r?(0,l.jsx)(L,{items:r}):"",(0,l.jsx)("div",{className:s().listGrid,children:a.map((e,t)=>(0,l.jsx)(p,{section:c,item:e,index:t},"".concat(e.id,"-").concat(t)))})]})}},3428:function(e,t,a){"use strict";a.d(t,{CP:function(){return c},G5:function(){return i},Jx:function(){return s},hx:function(){return n},xx:function(){return r}});var l=a(3589);function c(e){return"effects"===e?(0,l.Wr)("app","plugin","preset","project").pluginEffectCategories:(0,l.Wr)("app","plugin","preset","project").pluginInstrumentCategories}function s(e){let t=c(e);return delete t.all,Object.keys(t).map(e=>({label:t[e].name,value:e})).sort((e,t)=>e.label.localeCompare(t.label))}function r(){return(0,l.Wr)("app","plugin","preset","project").licenses}function n(){return r().map(e=>({label:e.name,value:e.key})).sort((e,t)=>e.label.localeCompare(t.label))}function i(){return[{label:"Linux",value:"linux"},{label:"Mac",value:"mac"},{label:"Windows",value:"win"}]}},7173:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return d},default:function(){return m}});var l=a(5893),c=a(3589),s=a(1163),r=a(1152),n=a(9008),i=a.n(n),o=a(4492),u=a(4537),d=!0,m=e=>{let{projects:t}=e,a=(0,s.useRouter)(),n=(0,c.Wr)("appFolder","pluginFolder","presetFolder","projectFolder").projectTypes,d=function(e,t,a){let l=a.query.category||"all",c=a.query.search;return t.filter(t=>{var a,s,r,n,i,o;return("all"===l||(null===(a=t.type)||void 0===a?void 0:a.ext)===(null===(s=e[l])||void 0===s?void 0:s.ext))&&(!c||(null===(r=t.id)||void 0===r?void 0:r.toLowerCase().indexOf(c.toLowerCase()))!==-1||(null===(n=t.name)||void 0===n?void 0:n.toLowerCase().indexOf(c.toLowerCase()))!==-1||(null===(i=t.description)||void 0===i?void 0:i.toLowerCase().indexOf(c.toLowerCase()))!==-1||(null===(o=t.tags)||void 0===o?void 0:o.indexOf(c.toLowerCase()))!==-1)&&t})}(n,t,a);return(0,l.jsxs)(r.ZP,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:(0,o.tj)(["Projects"])})}),(0,l.jsx)(u.Z,{items:d,type:"projects",title:"Projects",filters:!1,tabs:n})]})}},6850:function(e){e.exports={cardLink:"card_cardLink__IoOmv",card:"card_card__bu1Pk",cardDetails:"card_cardDetails__FQH4o",cardHead:"card_cardHead__XktMI",cardTitle:"card_cardTitle__V9Q9S",cardButton:"card_cardButton__YaRrq",cardButtonInstalled:"card_cardButtonInstalled__xZKFl",cardButtonIcon:"card_cardButtonIcon__dBPy7",cardVersion:"card_cardVersion__qfhlH",cardTags:"card_cardTags__j0f3J",cardIcon:"card_cardIcon__l4KXe",cardTag:"card_cardTag__MVb1V",cardImage:"card_cardImage__tSkze"}},6369:function(e){e.exports={crumb:"crumb_crumb__9IHnd",crumbList:"crumb_crumbList__9FcuG",crumbItem:"crumb_crumbItem__69lEI",crumbLink:"crumb_crumbLink__sEwKw"}},7428:function(e){e.exports={filters:"filters_filters__VhqO0",filtersTitle:"filters_filtersTitle__SRxPE",filtersSearch:"filters_filtersSearch__7sQjH"}},8504:function(e){e.exports={header:"header_header__IG54L",headerTitle:"header_headerTitle__ASJCX",headerCount:"header_headerCount__mcUSv"}},452:function(e){e.exports={list:"list_list__7CKik",listGrid:"list_listGrid__CbZPj"}},6069:function(e){e.exports={multiselect:"multi-select_multiselect__zWaOD",multiselectTitle:"multi-select_multiselectTitle__kt8Z6","icon-category":"multi-select_icon-category__5j4M1","icon-license":"multi-select_icon-license__sP7H_","icon-cost":"multi-select_icon-cost__iZ9P9","icon-compatibility":"multi-select_icon-compatibility__FglPj","icon-platform":"multi-select_icon-platform__AbXO6",multiselectCheckboxes:"multi-select_multiselectCheckboxes__jbyua",multiselectLabel:"multi-select_multiselectLabel__SnyrD",multiselectInput:"multi-select_multiselectInput___9974"}},6068:function(e){e.exports={tabs:"tabs_tabs__DMV1h",tabsCategory:"tabs_tabsCategory__m0Vze",tabsSearch:"tabs_tabsSearch___vbd0"}}},function(e){e.O(0,[589,664,888,774,179],function(){return e(e.s=6192)}),_N_E=e.O()}]);