_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"1OyB":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},"1nr8":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return j}));var a=n("1OyB"),r=n("vuIU"),o=n("JX7q"),i=n("Ji7U"),u=n("md7G"),s=n("foSv"),c=n("rePB"),l=n("q1tI"),p=n.n(l),f=n("8Kt/"),d=n.n(f),g=n("5M6V"),h=n("xoZS"),m=n.n(h),y=n("YFqc"),v=n.n(y),_=n("nOHt"),b=n("NmYn"),O=n.n(b),w=p.a.createElement;function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(u.a)(this,n)}}var I=/[^\w\s$*_+~.()'"!\-:@\/]+/g;function N(e){var t=function(e){return e.replace("","")}(e).split("/");return O()("".concat(t[0],"/").concat(t[1]),{lower:!0,remove:I})}var S=function(e){Object(i.a)(n,e);var t=E(n);function n(e){var r;return Object(a.a)(this,n),r=t.call(this,e),Object(c.a)(Object(o.a)(r),"handleChange",(function(e){var t=e.target,n=t.value?t.value.toLowerCase():"",a=r.props.plugins.filter((function(e){return!(-1===e.name.toLowerCase().indexOf(n)&&-1===e.description.toLowerCase().indexOf(n)&&!e.tags.includes(n))&&e}));r.setState({pluginsFiltered:a||[],query:n})})),Object(c.a)(Object(o.a)(r),"imageError",(function(e){var t=e.target,n="".concat(r.state.router.basePath,"/images/plugin.png");t.getAttribute("src")!==n&&t.setAttribute("src",n)})),r.state={pluginsFiltered:e.plugins||[],router:e.router,query:""},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return w(g.a,null,w(d.a,null,w("title",null,g.b)),w("section",{className:m.a.plugins},w("div",{className:m.a.pluginsHeader},w("h3",{className:m.a.pluginsTitle},"Plugins ",w("span",{className:m.a.pluginCount},"(",this.state.pluginsFiltered.length,")")),w("input",{className:m.a.pluginsSearch,placeholder:"Filter by keyword",value:this.state.query,onChange:this.handleChange})),w("div",{className:m.a.pluginsList},this.state.pluginsFiltered.map((function(t,n){return w(v.a,{href:"/plugins/[slug]",as:"/plugins/".concat(t.slug),key:"".concat(t.name,"-").concat(n)},w("div",{className:m.a.plugin},w("div",{className:m.a.pluginDetails},w("div",{className:m.a.pluginHead},w("h4",{className:m.a.pluginTitle},t.name," ",w("span",{className:m.a.pluginVersion},"v",t.version)),"installed"===t.status?w("span",{className:m.a.pluginButtonInstalled},w("img",{className:m.a.pluginButtonIcon,src:"".concat(e.state.router.basePath,"/images/icon-installed.svg"),alt:"Installed"})):w("span",{className:m.a.pluginButton},w("img",{className:m.a.pluginButtonIcon,src:"".concat(e.state.router.basePath,"/images/icon-download.svg"),alt:"Download"}))),w("ul",{className:m.a.pluginTags},w("img",{className:m.a.pluginIcon,src:"".concat(e.state.router.basePath,"/images/icon-tag.svg"),alt:"Tags"}),t.tags.map((function(e,t){return w("li",{className:m.a.pluginTag,key:"".concat(e,"-").concat(t)},e,",")})))),t.files.image?w("img",{className:m.a.pluginImage,src:"https://github.com/".concat(N(t.id||"id"),"/releases/download/").concat(t.release,"/").concat(t.files.image.name),alt:t.name,onError:e.imageError}):""))})))))}}]),n}(l.Component),j=!0;t.default=Object(_.withRouter)(S)},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return I}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),u=n("1OyB"),s=n("vuIU"),c=n("JX7q"),l=n("Ji7U"),p=n("md7G"),f=n("foSv"),d=n("rePB"),g=n("DMma"),h=n.n(g),m=n("nOHt"),y=r.a.createElement;function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}var _=function(e){Object(l.a)(n,e);var t=v(n);function n(e){var a;return Object(u.a)(this,n),a=t.call(this,e),Object(d.a)(Object(c.a)(a),"isSelected",(function(e){return"/"===e?a.state.router.asPath===e?"active":"":a.state.router.asPath.startsWith(e)?"active":""})),a.state={home:e.home,router:e.router},a}return Object(s.a)(n,[{key:"render",value:function(){return y("div",{className:h.a.navigation},y("input",{className:h.a.menuBtn,type:"checkbox",id:"menu-btn"}),y("label",{className:h.a.menuIcn,htmlFor:"menu-btn"},y("span",{className:h.a.menuNavIcn})),y("ul",{className:h.a.menu},y("li",null,y("a",{href:"".concat(this.state.router.basePath,"/"),className:this.isSelected("/")},"Tools")),y("li",null,y("a",{href:"".concat(this.state.router.basePath,"/plugins"),className:this.isSelected("/plugins")},"Plugins")),y("li",null,y("a",{href:"".concat(this.state.router.basePath,"/docs"),className:this.isSelected("/docs")},"Docs"))))}}]),n}(a.Component),b=Object(m.withRouter)(_),O=r.a.createElement,w="StudioRack",E="Automate your plugin publishing workflow, easy plugin installation and management";function I(e){var t=e.children,n=Object(m.useRouter)().basePath;return O("div",{className:h.a.container},O(i.a,null,O("meta",{name:"description",content:E}),O("meta",{property:"og:image",content:"".concat(n,"/images/creators-mobile.jpg")}),O("meta",{name:"og:title",content:w}),O("meta",{name:"twitter:card",content:"summary_large_image"}),O("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),O("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(n,"/icons/apple-touch-icon.png")}),O("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n,"/icons/favicon-32x32.png")}),O("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n,"/icons/favicon-16x16.png")}),O("link",{rel:"manifest",href:"".concat(n,"/icons/site.webmanifest")})),O("header",{className:h.a.header},O("a",{href:"".concat(n,"/"),className:h.a.headerLink},O("img",{className:h.a.logoImage,src:"".concat(n,"/images/studio-rack-logo.svg"),alt:w}),O("span",{className:h.a.logoText},"Studio",O("span",{className:h.a.logoTextBold},"Rack"))),O(b,null)),O("main",null,t))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),u=n("FYa8"),s=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=r.props[c],p=a[c]||new Set;p.has(l)?o=!1:(p.add(l),a[c]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function g(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}g.rewind=function(){};var h=g;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DMma:function(e,t,n){e.exports={header:"layout_header__1OJ41",headerLink:"layout_headerLink__3D5-W",logoText:"layout_logoText__16n85",logoTextBold:"layout_logoTextBold__IxEOB",navigation:"layout_navigation__1426p",menu:"layout_menu__3E6ov",menuIcn:"layout_menuIcn__2Js-c",menuNavIcn:"layout_menuNavIcn__ZfVtH",menuBtn:"layout_menuBtn__262aa",steps:"layout_steps__1d4RD"}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},Ji7U:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",(function(){return r}))},NmYn:function(e,t,n){var a;a=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial"}'),t=JSON.parse('{"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue"},"vi":{"\u0110":"D","\u0111":"d"}}');function n(n,a){if("string"!==typeof n)throw new Error("slugify: string argument expected");var r=t[(a="string"===typeof a?{replacement:a}:a||{}).locale]||{},o=void 0===a.replacement?"-":a.replacement,i=n.split("").reduce((function(t,n){return t+(r[n]||e[n]||n).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+o+"]+","g"),o);return a.lower&&(i=i.toLowerCase()),a.strict&&(i=i.replace(new RegExp("[^a-zA-Z0-9"+o+"]","g"),"").replace(new RegExp("[\\s"+o+"]+","g"),o)),i}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=a(),e.exports.default=a()},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),f=!1,d=function(e){u(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,f&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=d},YFqc:function(e,t,n){e.exports=n("cTJO")},YfdB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins",function(){return n("1nr8")}])},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),u=n("QmWs"),s=n("g/15"),c=n("nOHt"),l=n("elyg"),p=n("X24+");function f(e){return e&&(0,s.formatWithValidation)((0,p.normalizeTrailingSlash)("object"===typeof e?e:(0,u.parse)(e)))}var d=new Map,g=window.IntersectionObserver,h={};var m=function(e,t){var n=o||(g?o=new g((function(e){e.forEach((function(e){if(d.has(e.target)){var t=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),d.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),d.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}d.delete(e)}):function(){}};function y(e,t,n,a){e.prefetch(t,n,a).catch((function(e){0})),h[t+"%"+n]=!0}function v(e,t,n,a,r,o,i){var c=e.currentTarget,l=c.nodeName,p=c.target;"A"===l&&(p&&"_self"!==p||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,s.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(n)&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}var _=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],s=r[1],p=(0,c.useRouter)(),d=i.default.useMemo((function(){var t=(0,u.resolve)(p.pathname,f(e.href));return{href:t,as:e.as?(0,u.resolve)(p.pathname,f(e.as)):t}}),[p.pathname,e.href,e.as]),_=d.href,b=d.as;i.default.useEffect((function(){if(t&&g&&o&&o.tagName&&!h[_+"%"+b])return m(o,(function(){y(p,_,b)}))}),[t,o,_,b,p]);var O=e.children,w=e.replace,E=e.shallow,I=e.scroll;"string"===typeof O&&(O=i.default.createElement("a",null,O));var N=i.Children.only(O),S={ref:function(e){s(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||v(e,p,_,b,w,E,I)}};return t&&(S.onMouseEnter=function(e){N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),y(p,_,b,{priority:!0})}),!e.passHref&&("a"!==N.type||"href"in N.props)||(S.href=(0,l.addBasePath)(b)),i.default.cloneElement(N,S)};t.default=_},foSv:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return a}))},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},md7G:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}));var r=n("JX7q");function o(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(r.a)(e):t}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},vuIU:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return r}))},xoZS:function(e,t,n){e.exports={plugins:"plugins_plugins__2dNdD",pluginsTitle:"plugins_pluginsTitle__2p3GJ",pluginCount:"plugins_pluginCount__2Oy7s",pluginsHeader:"plugins_pluginsHeader__31AhY",pluginsCategory:"plugins_pluginsCategory__20pcK",pluginsSearch:"plugins_pluginsSearch__1rgj6",plugin:"plugins_plugin__1xG0k",pluginDetails:"plugins_pluginDetails__2eEMP",pluginHead:"plugins_pluginHead__EiVJg",pluginTitle:"plugins_pluginTitle__1NqYR",pluginButton:"plugins_pluginButton__ViK9P",pluginButtonInstalled:"plugins_pluginButtonInstalled__1cpJv",pluginButtonIcon:"plugins_pluginButtonIcon__3SUSj",pluginVersion:"plugins_pluginVersion__1IJnM",pluginTags:"plugins_pluginTags__35guJ",pluginIcon:"plugins_pluginIcon__3_zAB",pluginTag:"plugins_pluginTag__1CUTL",pluginImage:"plugins_pluginImage__3HkLy",pluginsList:"plugins_pluginsList__qsHK-"}}},[["YfdB",0,2,1]]]);