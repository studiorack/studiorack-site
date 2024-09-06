(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{7657:function(e,n,a){"use strict";var t=a(5893),s=a(6369),o=a.n(s),i=a(9159);n.Z=e=>{let{items:n}=e;return(0,t.jsx)("div",{className:o().crumb,children:(0,t.jsx)("ul",{className:o().crumbList,children:n.map((e,a)=>(0,t.jsxs)("li",{className:o().crumbItem,children:["/",(0,t.jsx)("a",{className:o().crumbLink,href:"".concat((0,i.bv)()).concat((0,i.X1)(n,e)),children:e})]},"".concat(e,"-").concat(a)))})})}},3362:function(e,n,a){"use strict";a.d(n,{Z:function(){return I}});var t=a(5893),s=a(8022),o=a.n(s),i=a(9159),l=a(7657),c=a(4492),r=a(3589),d=a(7294),u=a(1805),m=a.n(u),g=e=>{let{file:n}=e,[a,s]=(0,d.useState)(!1),o=()=>{s(!1)};return(0,t.jsxs)("div",{children:[a?(0,t.jsx)("img",{className:m().audio,src:"".concat((0,i.bv)(),"/images/icon-pause.svg"),alt:"Pause",onClick:()=>{let e=document.getElementById("audio");e.paused||(e.pause(),s(!1))}}):(0,t.jsx)("img",{className:m().audio,src:"".concat((0,i.bv)(),"/images/icon-play.svg"),alt:"Play",onClick:()=>{let e=document.getElementById("audio");e.paused&&(e.removeEventListener("ended",o),e.addEventListener("ended",o),e.currentTime=0,e.play(),s(!0))}}),(0,t.jsx)("audio",{src:n.url,id:"audio",children:"Your browser does not support the audio element."})]})},f=a(4823),h=a.n(f),_=a(4298),x=a.n(_),v=e=>{let{plugin:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{className:h().player,"data-name":n.name,"data-id":n.id,src:"".concat((0,i.bv)(),"/images/sfz-player.png"),alt:"open in sfz player",loading:"lazy",onClick:e=>{let n=document.getElementById("sfzPlayer");if(!n)return;if("open"===n.className){n.className="";return}let a=e.currentTarget.getAttribute("data-name")||"",t=e.currentTarget.getAttribute("data-id")||"";console.log("loadSfzPlayer",a,t),n.innerHTML="",new window.Sfz.Player("sfzPlayer",{audio:{},instrument:{name:a,id:t},interface:{}}),window.setTimeout(()=>{n.className="open"},0)}}),(0,t.jsx)(x(),{strategy:"beforeInteractive",id:"webaudio-controls-config",children:"window.WebAudioControlsOptions = { useMidi: 1 };"}),(0,t.jsx)(x(),{strategy:"beforeInteractive",src:"https://github.com/kmturley/webaudio-controls/releases/download/v1.0.0/webaudio-controls.min.js"}),(0,t.jsx)(x(),{strategy:"beforeInteractive",src:"https://sfzlab.github.io/sfz-web-player/sfz.min.js"})]})},p=e=>{let{plugin:n}=e;return n.tags.includes("sfz")?(0,t.jsxs)("span",{children:[" ","(This instrument needs to be loaded into a"," ",(0,t.jsx)("a",{href:"".concat((0,i.bv)(),"/instruments/sfztools/sfizz"),target:"_blank",children:"SFZ player"}),")"]}):n.tags.includes("sf2")?(0,t.jsxs)("span",{children:[" ","(This instrument needs to be loaded into a"," ",(0,t.jsx)("a",{href:"".concat((0,i.bv)(),"/instruments/studiorack/juicysf"),target:"_blank",children:"SoundFont 2 player"}),")"]}):(0,t.jsx)("span",{})},j=a(6474),b=a.n(j),y=e=>{let{plugin:n}=e;return(0,t.jsxs)("div",{className:"".concat(b().download),children:[(0,t.jsx)("p",{children:"Download and install manually:"}),n.tags.includes("sfz")||n.tags.includes("sf2")?(0,t.jsx)("span",{children:(0,t.jsxs)("a",{className:"button ".concat(b().downloadButton),href:(0,r.fk)(n,"linux"),title:"High-quality",children:["High-quality",(0,t.jsx)("img",{className:b().downloadButtonIcon,src:"".concat((0,i.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})]})}):(0,t.jsxs)("span",{children:[n.files.linux?(0,t.jsxs)("a",{className:"button ".concat(b().downloadButton),href:(0,r.fk)(n,"linux"),title:"Linux x64",children:["Linux",(0,t.jsx)("img",{className:b().downloadButtonIcon,src:"".concat((0,i.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})]}):"",n.files.mac?(0,t.jsxs)("a",{className:"button ".concat(b().downloadButton),href:(0,r.fk)(n,"mac"),title:"MacOS x64",children:["MacOS",(0,t.jsx)("img",{className:b().downloadButtonIcon,src:"".concat((0,i.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})]}):"",n.files.win?(0,t.jsxs)("a",{className:"button ".concat(b().downloadButton),href:(0,r.fk)(n,"win"),title:"Windows x64",children:["Windows",(0,t.jsx)("img",{className:b().downloadButtonIcon,src:"".concat((0,i.bv)(),"/images/icon-download.svg"),alt:"Download",loading:"lazy"})]}):""]})]})},w=a(7417),N=a.n(w),k=e=>{let{plugin:n}=e;return(0,t.jsxs)("div",{className:"".concat(N().code),children:[(0,t.jsxs)("p",{children:["Install via"," ",(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@studiorack/cli",target:"_blank",children:"StudioRack CLI"})]}),n.tags.includes("sfz")?(0,t.jsxs)("span",{children:[(0,t.jsx)("pre",{className:N().codeLine,children:"studiorack plugin install sfztools/sfizz"}),(0,t.jsxs)("pre",{className:N().codeLine,children:["studiorack plugin install ",n.id]})]}):n.tags.includes("sf2")?(0,t.jsxs)("span",{children:[(0,t.jsx)("pre",{className:N().codeLine,children:"studiorack plugin install studiorack/juicysf"}),(0,t.jsxs)("pre",{className:N().codeLine,children:["studiorack plugin install ",n.id]})]}):(0,t.jsxs)("pre",{className:N().codeLine,children:["studiorack plugin install ",n.id]})]})},L=a(2540),I=e=>{let{plugin:n,type:a}=e;return(0,t.jsxs)("article",{children:[(0,t.jsxs)("div",{className:o().header,children:[(0,t.jsx)("div",{className:o().headerInner2,children:(0,t.jsx)(l.Z,{items:[a,(0,c.fW)(n),(0,c.f6)(n)]})}),(0,t.jsxs)("div",{className:o().headerInner,children:[(0,t.jsx)("div",{className:o().media,children:(0,t.jsxs)("div",{className:o().imageContainer,children:[n.files.audio?(0,t.jsx)(g,{file:n.files.audio}):"",n.tags.includes("sfz")?(0,t.jsx)(v,{plugin:n}):"",n.files.image?(0,t.jsx)("img",{className:o().image,src:(0,r.fk)(n,"image"),alt:n.name||""}):""]})}),(0,t.jsxs)("div",{className:o().details,children:[(0,t.jsxs)("h3",{className:o().title,children:[n.name||""," ",(0,t.jsxs)("span",{className:o().version,children:["v",n.version]})]}),(0,t.jsxs)("p",{className:o().author,children:["By"," ",(0,t.jsx)("a",{href:n.homepage,target:"_blank",children:n.author})]}),(0,t.jsxs)("p",{children:[n.description,(0,t.jsx)(p,{plugin:n})]}),(0,t.jsxs)("div",{className:o().metadataList,children:[(0,t.jsxs)("div",{className:o().metadata,children:[(0,t.jsx)("img",{className:o().icon,src:"".concat((0,i.bv)(),"/images/icon-date.svg"),alt:"Date updated",loading:"lazy"})," ",(0,c.VG)(n.date)," ago"]}),(0,t.jsxs)("div",{className:o().metadata,children:[(0,t.jsx)("img",{className:o().icon,src:"".concat((0,i.bv)(),"/images/icon-license.svg"),alt:"License",loading:"lazy"})," ",n.license?(0,t.jsx)("a",{href:(0,L.tI)(n.license).url,target:"_blank",children:(0,L.tI)(n.license).name}):"none"]}),(0,t.jsxs)("div",{className:o().metadata,children:[(0,t.jsx)("img",{className:o().icon,src:"".concat((0,i.bv)(),"/images/icon-tag.svg"),alt:"Tags",loading:"lazy"}),(0,t.jsx)("ul",{className:o().tags,children:n.tags.map((e,a)=>(0,t.jsxs)("li",{className:o().tag,children:[e,a!==n.tags.length-1?",":""]},"".concat(e,"-").concat(a)))})]}),(0,t.jsx)("div",{className:o().metadataFooter,children:(0,t.jsx)("a",{href:n.homepage,target:"_blank",children:(0,t.jsx)("button",{className:"button button-clear",children:"View source"})})})]})]})]})]}),(0,t.jsx)("div",{id:"sfzPlayer"}),(0,t.jsx)("div",{className:o().options,children:(0,t.jsxs)("div",{className:o().row,children:[(0,t.jsx)(y,{plugin:n}),(0,t.jsx)(k,{plugin:n})]})})]})}},1152:function(e,n,a){"use strict";a.d(n,{ZP:function(){return f},y7:function(){return g}});var t=a(5893),s=a(9008),o=a.n(s),i=a(3979),l=a.n(i),c=a(9159),r=()=>(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{className:l().navMenuBtn,type:"checkbox",id:"menu-btn"}),(0,t.jsx)("label",{className:l().navMenuIcn,htmlFor:"menu-btn",children:(0,t.jsx)("span",{className:l().navMenuNavIcn})}),(0,t.jsxs)("ul",{className:l().navMenu,children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"".concat((0,c.bv)(),"/"),className:"".concat(l().navItem," ").concat((0,c.VL)("/")),children:"Tools"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"".concat((0,c.bv)(),"/instruments"),className:"".concat(l().navItem," ").concat((0,c.VL)("/instruments")),children:"Instruments"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"".concat((0,c.bv)(),"/effects"),className:"".concat(l().navItem," ").concat((0,c.VL)("/effects")),children:"Effects"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"".concat((0,c.bv)(),"/docs"),className:"".concat(l().navItem," ").concat((0,c.VL)("/docs")),children:"Docs"})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"https://discord.gg/9D94f98PxP",className:"".concat(l().navButton," button"),target:"_blank",children:["Community",(0,t.jsx)("img",{className:l().navButtonIcon,src:"".concat((0,c.bv)(),"/images/icon-external-link.svg"),alt:"External link",loading:"lazy"})]})})]})]}),d=a(5526),u=a.n(d),m=a(4492);let g="StudioRack";var f=e=>{let{children:n}=e;return(0,t.jsxs)("div",{className:u().layoutContainer,children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:(0,m.tj)(["An open-source audio plugin ecosystem"])}),(0,t.jsx)("meta",{name:"description",content:"Automate your plugin publishing workflow, easy plugin installation and management"}),(0,t.jsx)("meta",{name:"og:image",content:"".concat((0,c.bv)(),"/images/creators-mobile.jpg")}),(0,t.jsx)("meta",{name:"og:title",content:g}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat((0,c.bv)(),"/icons/apple-touch-icon.png")}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat((0,c.bv)(),"/icons/favicon-32x32.png")}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat((0,c.bv)(),"/icons/favicon-16x16.png")}),(0,t.jsx)("link",{rel:"manifest",href:"".concat((0,c.bv)(),"/icons/site.webmanifest")})]}),(0,t.jsxs)("header",{className:u().layoutHeader,children:[(0,t.jsxs)("a",{href:"".concat((0,c.bv)(),"/"),className:u().layoutLink,children:[(0,t.jsx)("img",{src:"".concat((0,c.bv)(),"/images/studio-rack-logo.svg"),alt:g,loading:"lazy"}),(0,t.jsxs)("span",{className:u().layoutLogo,children:["Studio",(0,t.jsx)("span",{className:u().layoutLogoBold,children:"Rack"})]})]}),(0,t.jsx)(r,{})]}),(0,t.jsx)("main",{children:n})]})}},3428:function(e,n,a){"use strict";a.d(n,{CP:function(){return s},G5:function(){return c},Jx:function(){return o},hx:function(){return l},xx:function(){return i}});var t=a(3589);function s(e){return"effects"===e?(0,t.Wr)("app","plugin","preset","project").pluginEffectCategories:(0,t.Wr)("app","plugin","preset","project").pluginInstrumentCategories}function o(e){let n=s(e);return delete n.all,Object.keys(n).map(e=>({label:n[e].name,value:e})).sort((e,n)=>e.label.localeCompare(n.label))}function i(){return(0,t.Wr)("app","plugin","preset","project").licenses}function l(){return i().map(e=>({label:e.name,value:e.key})).sort((e,n)=>e.label.localeCompare(n.label))}function c(){return[{label:"Linux",value:"linux"},{label:"Mac",value:"mac"},{label:"Windows",value:"win"}]}},9159:function(e,n,a){"use strict";a.d(n,{VL:function(){return i},X1:function(){return o},bv:function(){return s}});var t=a(1163);function s(){return(0,t.useRouter)().basePath}function o(e,n){let a="";for(let t of e)if(a+="/"+t,t===n)break;return a}function i(e){return"/"===e?(0,t.useRouter)().asPath===e?"active":"":(0,t.useRouter)().asPath.startsWith(e)?"active":""}},2540:function(e,n,a){"use strict";a.d(n,{qG:function(){return o},tI:function(){return i}}),a(3589);var t=a(4492),s=a(3428);function o(e,n,a){let s=a.query.category,o=[];s&&("string"==typeof s?o=e[s].tags:s.forEach(n=>{o=o.concat(e[n].tags)}));let i=a.query.license,l=a.query.platform,c=a.query.search;return n.filter(e=>{var n,a,r,d;let u=Object.keys(e.files);return(!s||!!(0,t.Bh)(o,e.tags))&&(!i||!!(0,t.Bh)(i,"object"==typeof e.license?e.license.key:e.license))&&(!l||!!(0,t.Bh)(l,u))&&(!c||(null===(n=e.id)||void 0===n?void 0:n.toLowerCase().indexOf(c.toLowerCase()))!==-1||(null===(a=e.name)||void 0===a?void 0:a.toLowerCase().indexOf(c.toLowerCase()))!==-1||(null===(r=e.description)||void 0===r?void 0:r.toLowerCase().indexOf(c.toLowerCase()))!==-1||(null===(d=e.tags)||void 0===d?void 0:d.indexOf(c.toLowerCase()))!==-1)&&e})}function i(e){if("string"!=typeof e)return e;let n=(0,s.xx)(),a=n[n.length-1];return n.forEach(n=>{if(e===n.key){a=n;return}}),a}},4492:function(e,n,a){"use strict";a.d(n,{Bh:function(){return l},Uu:function(){return u},VG:function(){return d},f6:function(){return r},fW:function(){return c},tj:function(){return i}});var t=a(1304),s=a.n(t),o=a(1152);function i(e){return o.y7+e.map(e=>" | ".concat(e)).join("")}function l(e,n){return!!e&&!!n&&("string"==typeof e?"string"==typeof n?e===u(n):n.some(n=>"string"==typeof n?n.toLowerCase()===e.toLowerCase():n.name.toLowerCase()===e.toLowerCase()):"object"==typeof e?"string"==typeof n?e.includes(u(n)):e.some(e=>n.some(n=>"string"==typeof n?n.toLowerCase()===e.toLowerCase():n.name.toLowerCase()===e.toLowerCase())):void 0)}function c(e){var n;return(null===(n=e.id)||void 0===n?void 0:n.split("/")[0])||""}function r(e){var n;return(null===(n=e.id)||void 0===n?void 0:n.split("/")[1])||""}function d(e){let n=Math.floor((new Date().getTime()-new Date(e).getTime())/1e3),a=n/31536e3;return a>2?Math.floor(a)+" years":a>1?Math.floor(a)+" year":(a=n/2592e3)>2?Math.floor(a)+" months":a>1?Math.floor(a)+" month":(a=n/86400)>2?Math.floor(a)+" days":a>1?Math.floor(a)+" day":(a=n/3600)>2?Math.floor(a)+" hours":a>1?Math.floor(a)+" hour":(a=n/60)>2?Math.floor(a)+" minutes":a>1?Math.floor(a)+" minute":Math.floor(n)+" seconds"}function u(e){return s()(e||"",{lower:!0})}},1805:function(e){e.exports={audio:"audio_audio__moRDb"}},7417:function(e){e.exports={code:"code_code__zGIJ9",codeLine:"code_codeLine__RFeKZ"}},6369:function(e){e.exports={crumb:"crumb_crumb__9IHnd",crumbList:"crumb_crumbList__9FcuG",crumbItem:"crumb_crumbItem__69lEI",crumbLink:"crumb_crumbLink__sEwKw"}},8022:function(e){e.exports={header:"details_header__djqB6",imageContainer:"details_imageContainer__36t1_",title:"details_title__de_Nh",author:"details_author__rdVSB",image:"details_image__F23VY",version:"details_version__KA3so",metadataList:"details_metadataList__qDQE7",metadata:"details_metadata__asPc1",metadataFooter:"details_metadataFooter__gHjCy",tags:"details_tags__yeM_7",icon:"details_icon__YKuIZ",tag:"details_tag__5kmuF",options:"details_options__sv6b2",headerInner:"details_headerInner__K_V9K",headerInner2:"details_headerInner2__LWNnO",media:"details_media__iuBuj",details:"details_details__S0oD_",row:"details_row__9TLBn",cell:"details_cell__Hlnw7"}},6474:function(e){e.exports={download:"download_download__k312W",downloadButton:"download_downloadButton__W31gH",progress:"download_progress__29tkY",downloadButtonIcon:"download_downloadButtonIcon__JBeIy"}},5526:function(e){e.exports={layoutHeader:"layout_layoutHeader____JVK",layoutLink:"layout_layoutLink__50Xmd",layoutLogo:"layout_layoutLogo__Fcowr",layoutLogoBold:"layout_layoutLogoBold__F7Svb"}},3979:function(e){e.exports={navItem:"navigation_navItem__P6KAS",navItemActive:"navigation_navItemActive__cT7Oe",navButton:"navigation_navButton__mo9ZV",navButtonIcon:"navigation_navButtonIcon__Lcs1g",navMenu:"navigation_navMenu__RyedR",navMenuIcn:"navigation_navMenuIcn__ZrcJ7",navMenuNavIcn:"navigation_navMenuNavIcn__nChMa",navMenuBtn:"navigation_navMenuBtn__nd3jr",steps:"navigation_steps__uZkkQ"}},4823:function(e){e.exports={player:"player_player__JDI1q"}}}]);