(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[388],{532:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presets/[userId]",function(){return t(6541)}])},2794:function(e,s,t){"use strict";var a=t(5893),c=t(8992),r=t.n(c),l=t(7733);s.Z=e=>{let{items:s}=e;return(0,a.jsx)("div",{className:r().crumb,children:(0,a.jsx)("ul",{className:r().crumbList,children:s.map((e,t)=>(0,a.jsxs)("li",{className:r().crumbItem,children:["/",(0,a.jsx)("a",{className:r().crumbLink,href:"".concat((0,l.bv)()).concat((0,l.X1)(s,e)),children:e})]},"".concat(e,"-").concat(t)))})})}},812:function(e,s,t){"use strict";t.d(s,{Z:function(){return q}});var a=t(5893),c=t(5047),r=t.n(c),l=t(8793),n=t.n(l),i=e=>{let{title:s,count:t}=e;return(0,a.jsx)("div",{className:n().header,children:(0,a.jsxs)("h3",{className:n().headerTitle,children:[s," ",t?(0,a.jsxs)("span",{className:n().headerCount,children:["(",t,")"]}):""]})})},o=t(8882),u=t.n(o),d=t(1664),m=t.n(d),_=t(7733),h=e=>{let{section:s,item:t,index:c}=e;return(0,a.jsx)(m(),{href:"/".concat(s,"/[userId]/[pluginId]"),as:"/".concat(s,"/").concat(t.slug),className:u().cardLink,children:(0,a.jsxs)("div",{className:u().card,children:[(0,a.jsxs)("div",{className:u().cardDetails,children:[(0,a.jsxs)("div",{className:u().cardHead,children:[(0,a.jsxs)("h4",{className:u().cardTitle,children:[t.versions[t.version].name," ",(0,a.jsxs)("span",{className:u().cardVersion,children:["v",t.version]})]}),(0,a.jsx)("span",{className:u().cardButton,children:(0,a.jsx)("img",{className:u().cardButtonIcon,src:"".concat((0,_.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})})]}),(0,a.jsxs)("ul",{className:u().cardTags,children:[(0,a.jsx)("img",{className:u().cardIcon,src:"".concat((0,_.bv)(),"/images/icon-tag.svg"),alt:"Tags",loading:"lazy"}),t.versions[t.version].tags.map((e,s)=>(0,a.jsxs)("li",{className:u().cardTag,children:[e,s!==t.versions[t.version].tags.length-1?",":""]},"".concat(e,"-").concat(s,"-").concat(c)))]})]}),t.versions[t.version].image?(0,a.jsx)("img",{className:u().cardImage,src:t.versions[t.version].image,alt:t.versions[t.version].name,loading:"lazy"}):""]})})},x=t(1163),p=t(9797),j=t.n(p),y=t(8997),g=t(4583),f=t.n(g),v=e=>{let{label:s,items:t}=e,c=(0,x.useRouter)(),r=(0,y.Uu)(s),l=e=>!!c.query[r]&&(0,y.Bh)(c.query[r],e),n=()=>{let e=document.getElementById(r);c.query[r]=Array.from(new FormData(e).keys()),c.push({pathname:c.pathname,query:c.query})};return(0,a.jsxs)("form",{className:f().multiselect,id:r,children:[(0,a.jsx)("select",{className:"".concat(f().multiselectTitle," ").concat(f()["icon-"+r]),onMouseDown:e=>{e.preventDefault(),e.target.blur(),window.focus();let t=document.getElementById(s);(null==t?void 0:t.style.display)==="block"?t&&(t.style.display="none"):t&&(t.style.display="block")},children:(0,a.jsx)("option",{children:s})}),(0,a.jsx)("div",{className:f().multiselectCheckboxes,id:s,children:t.map(e=>(0,a.jsxs)("div",{className:f().multiselectCheckbox,children:[(0,a.jsx)("input",{className:f().multiselectInput,type:"checkbox",id:(0,y.Uu)(e.value),name:(0,y.Uu)(e.value),onClick:n,defaultChecked:l(e.value)}),(0,a.jsx)("label",{className:f().multiselectLabel,htmlFor:(0,y.Uu)(e.value),title:e.name,children:e.name},(0,y.Uu)(e.value))]}))})]})},b=t(7674),N=t(6099),C=e=>{let s,{section:t}=e,c=(0,x.useRouter)(),r=(0,N.jS)(c,"type"),l=(0,N.jS)(c,"search"),n=r&&r[0]===b.zV.Effect?b.IP:b.xf;return t===b.K8.Plugins?s=b.Q:t===b.K8.Presets?s=b.eO:(n=b.KQ,s=b.oS),(0,a.jsxs)("div",{className:j().filters,children:[(0,a.jsx)("span",{className:j().filtersTitle,children:"Filter by:"}),(0,a.jsx)(v,{label:"Type",items:s}),(0,a.jsx)(v,{label:"Category",items:n}),(0,a.jsx)(v,{label:"System",items:b.Dr}),(0,a.jsx)(v,{label:"License",items:b.Ld}),(0,a.jsx)("input",{className:j().filtersSearch,placeholder:"Keyword",type:"search",id:"search",name:"search",value:l,onChange:e=>{let s=e.target;c.query.search=s.value?s.value.toLowerCase():"",c.push({pathname:c.pathname,query:c.query})}})]})},k=t(2794),I=t(1077),w=t.n(I),L=e=>{let{items:s}=e,t=(0,x.useRouter)(),c=(0,N.jS)(t,"category"),r=(0,N.jS)(t,"search"),l=e=>c&&c[0]===e?"selected":"",n=e=>{t.query.category=e.target.getAttribute("data-category")||"",t.push({pathname:t.pathname,query:t.query})};return(0,a.jsx)("div",{className:w().tabs,children:(0,a.jsxs)("ul",{className:w().tabsCategory,children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{"data-category":"all",onClick:n,className:l("all"),children:"All"})}),s.map((e,s)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{"data-category":e.value,onClick:n,className:l(e.value),children:e.name})},"".concat(e.value,"-").concat(s))),(0,a.jsx)("li",{children:(0,a.jsx)("input",{className:w().tabsSearch,placeholder:"Keyword",type:"search",id:"search",name:"search",value:r,onChange:e=>{let s=e.target;t.query.search=s.value?s.value.toLowerCase():"",t.push({pathname:t.pathname,query:t.query})}})})]})})},q=e=>{let{filters:s=!0,items:t,type:c,tabs:l,title:n}=e;return(0,a.jsxs)("section",{className:r().list,children:[(0,a.jsx)(k.Z,{items:[c]}),(0,a.jsx)(i,{title:n,count:t.length}),s?(0,a.jsx)(C,{section:c}):"",l?(0,a.jsx)(L,{items:l}):"",(0,a.jsx)("div",{className:r().listGrid,children:t.map((e,s)=>(0,a.jsx)(h,{section:c,item:e,index:s},"".concat(e.slug,"-").concat(s)))})]})}},6099:function(e,s,t){"use strict";t.d(s,{jS:function(){return c},qG:function(){return r}});var a=t(7674);function c(e,s){return"string"==typeof e.query[s]?[e.query[s]]:e.query[s]}function r(e,s){let t=c(e,"type"),r=c(e,"category"),l=[];r&&r.forEach(e=>{let s;a.xf.forEach(t=>{t.value===e&&(s=t)}),s&&(l=l.concat(s.tags.map(e=>e.toLowerCase())))});let n=c(e,"license"),i=c(e,"system"),o=c(e,"search"),u=[];for(let e in s){let c=s[e],d=c.versions[c.version];if(d){let e=d.tags.map(e=>e.toLowerCase());if(t&&!t.includes(d.type)||r&&0===l.filter(s=>e.includes(s)).length||n&&!n.includes(d.license)||i&&0===(0,a.ZE)(d,[a.jj.X64],i).length||o&&-1===c.slug.toLowerCase().indexOf(o[0].toLowerCase())&&-1===d.name.toLowerCase().indexOf(o[0].toLowerCase())&&-1===d.description.toLowerCase().indexOf(o[0].toLowerCase())&&-1===d.tags.indexOf(o[0].toLowerCase()))continue;u.push(c)}}return u.sort((e,s)=>e.versions[e.version].name.localeCompare(s.versions[s.version].name))}},6541:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return m}});var a=t(5893),c=t(7294),r=t(9008),l=t.n(r),n=t(3265),i=t(8997),o=t(812),u=t(7674);class d extends c.Component{render(){return(0,a.jsxs)(n.ZP,{children:[(0,a.jsx)(l(),{children:(0,a.jsx)("title",{children:(0,i.tj)(["Presets",this.state.userId])})}),(0,a.jsx)(o.Z,{items:this.state.packagesFiltered,type:u.K8.Presets,title:this.state.userId,filters:!1})]})}constructor(e){super(e),this.state={packagesFiltered:e.packagesFiltered||[],query:"",userId:e.userId}}}var m=!0;s.default=d},8882:function(e){e.exports={cardLink:"card_cardLink__IoOmv",card:"card_card__bu1Pk",cardDetails:"card_cardDetails__FQH4o",cardHead:"card_cardHead__XktMI",cardTitle:"card_cardTitle__V9Q9S",cardButton:"card_cardButton__YaRrq",cardButtonInstalled:"card_cardButtonInstalled__xZKFl",cardButtonIcon:"card_cardButtonIcon__dBPy7",cardVersion:"card_cardVersion__qfhlH",cardTags:"card_cardTags__j0f3J",cardIcon:"card_cardIcon__l4KXe",cardTag:"card_cardTag__MVb1V",cardImage:"card_cardImage__tSkze"}},8992:function(e){e.exports={crumb:"crumb_crumb__9IHnd",crumbList:"crumb_crumbList__9FcuG",crumbItem:"crumb_crumbItem__69lEI",crumbLink:"crumb_crumbLink__sEwKw"}},9797:function(e){e.exports={filters:"filters_filters__VhqO0",filtersTitle:"filters_filtersTitle__SRxPE",filtersSearch:"filters_filtersSearch__7sQjH"}},8793:function(e){e.exports={header:"header_header__IG54L",headerTitle:"header_headerTitle__ASJCX",headerCount:"header_headerCount__mcUSv"}},5047:function(e){e.exports={list:"list_list__7CKik",listGrid:"list_listGrid__CbZPj"}},4583:function(e){e.exports={multiselect:"multi-select_multiselect__zWaOD",multiselectTitle:"multi-select_multiselectTitle__kt8Z6","icon-category":"multi-select_icon-category__5j4M1","icon-license":"multi-select_icon-license__sP7H_","icon-cost":"multi-select_icon-cost__iZ9P9","icon-compatibility":"multi-select_icon-compatibility__FglPj","icon-platform":"multi-select_icon-platform__AbXO6","icon-system":"multi-select_icon-system__uw_4w","icon-type":"multi-select_icon-type__CvRhX",multiselectCheckboxes:"multi-select_multiselectCheckboxes__jbyua",multiselectCheckbox:"multi-select_multiselectCheckbox__3grHv",multiselectInput:"multi-select_multiselectInput___9974",multiselectLabel:"multi-select_multiselectLabel__SnyrD"}},1077:function(e){e.exports={tabs:"tabs_tabs__DMV1h",tabsCategory:"tabs_tabsCategory__m0Vze",tabsSearch:"tabs_tabsSearch___vbd0"}}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=532)}),_N_E=e.O()}]);