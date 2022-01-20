(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{8503:function(e,n,t){"use strict";var a=t(4155),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.slugToId=n.safeSlug=n.pluginFileUrl=n.pathGetWithoutExt=n.pathGetVersion=n.pathGetRepo=n.pathGetId=n.pathGetFilename=n.pathGetExt=n.pathGetDirectory=n.inputGetParts=n.idToSlug=n.getPlatform=void 0;var r=i(t(1304)),o={aix:"linux",android:"linux",cygwin:"linux",darwin:"mac",freebsd:"linux",linux:"linux",netbsd:"linux",openbsd:"linux",sunos:"linux",win32:"win",win64:"win"},s=/[^\w\s$*_+~.()'"!\-:@\/]+/g,u=/([0-9]+)\.([0-9]+)\.([0-9]+)/g;function l(e){return e.substring(0,e.lastIndexOf("/"))}function c(e){return r.default(e,{lower:!0,remove:s})}n.getPlatform=function(){return o[a.platform]},n.idToSlug=function(e){return c(e.replace(/\//g,"_"))},n.inputGetParts=function(e){return e.split("@")},n.pathGetDirectory=l,n.pathGetExt=function(e){return e.substring(e.lastIndexOf(".")+1)},n.pathGetFilename=function(e){var n=e.substring(e.lastIndexOf("/")+1);return-1!==n.lastIndexOf(".")&&(n=n.substring(0,n.lastIndexOf("."))),n},n.pathGetId=function(e){var n=l(e).split("/");return n.length>2?c(n[2]):c(l(e))},n.pathGetRepo=function(e){var n=l(e).split("/");return n.length>1?c(n[0]+"/"+n[1]):c(l(e))},n.pathGetVersion=function(e){var n=e.match(u);return n?n[0]:"0.0.0"},n.pathGetWithoutExt=function(e){var n=e.lastIndexOf(".");if(-1!==n){var t=e.length-n;if(4===t||5===t||".component"===e.substr(-10))return e.substring(0,e.lastIndexOf("."))}return e},n.pluginFileUrl=function(e,n){var t=e.files[n];return t.name.startsWith("https://")?t.name:"https://github.com/"+e.repo+"/releases/download/"+e.release+"/"+t.name},n.safeSlug=c,n.slugToId=function(e){return c(e.replace(/_/g,"/"))}},2506:function(e,n,t){"use strict";var a=t(5893),i=t(2415),r=t.n(i),o=t(4834);n.Z=function(e){var n=e.items;return(0,a.jsx)("div",{className:r().crumb,children:(0,a.jsx)("ul",{className:r().crumbList,children:n.map((function(e,t){return(0,a.jsxs)("li",{className:r().crumbItem,children:["/",(0,a.jsx)("a",{className:r().crumbLink,href:"".concat((0,o.bv)()).concat((0,o.X1)(n,e)),children:e})]},"".concat(e,"-").concat(t))}))})})}},9067:function(e,n,t){"use strict";t.d(n,{ZP:function(){return c},y7:function(){return l}});var a=t(5893),i=t(9008),r=t(5016),o=t.n(r),s=t(4834),u=function(){return(0,a.jsxs)("div",{className:o().navigation,children:[(0,a.jsx)("input",{className:o().menuBtn,type:"checkbox",id:"menu-btn"}),(0,a.jsx)("label",{className:o().menuIcn,htmlFor:"menu-btn",children:(0,a.jsx)("span",{className:o().menuNavIcn})}),(0,a.jsxs)("ul",{className:o().menu,children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat((0,s.bv)(),"/"),className:"".concat(o().navItem," ").concat((0,s.VL)("/")),children:"Tools"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat((0,s.bv)(),"/instruments"),className:"".concat(o().navItem," ").concat((0,s.VL)("/instruments")),children:"Instruments"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat((0,s.bv)(),"/effects"),className:"".concat(o().navItem," ").concat((0,s.VL)("/effects")),children:"Effects"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"".concat((0,s.bv)(),"/docs"),className:"".concat(o().navItem," ").concat((0,s.VL)("/docs")),children:"Docs"})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"https://discord.gg/9D94f98PxP",className:"".concat(o().navButton," button"),target:"_blank",children:["Community",(0,a.jsx)("img",{className:o().navButtonIcon,src:"".concat((0,s.bv)(),"/images/icon-external-link.svg"),alt:"External link",loading:"lazy"})]})})]})]})},l="StudioRack",c=function(e){var n=e.children;return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("meta",{name:"description",content:"Automate your plugin publishing workflow, easy plugin installation and management"}),(0,a.jsx)("meta",{property:"og:image",content:"".concat((0,s.bv)(),"/images/creators-mobile.jpg")}),(0,a.jsx)("meta",{name:"og:title",content:l}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat((0,s.bv)(),"/icons/apple-touch-icon.png")}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat((0,s.bv)(),"/icons/favicon-32x32.png")}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat((0,s.bv)(),"/icons/favicon-16x16.png")}),(0,a.jsx)("link",{rel:"manifest",href:"".concat((0,s.bv)(),"/icons/site.webmanifest")})]}),(0,a.jsxs)("header",{className:o().header,children:[(0,a.jsxs)("a",{href:"".concat((0,s.bv)(),"/"),className:o().headerLink,children:[(0,a.jsx)("img",{className:o().logoImage,src:"".concat((0,s.bv)(),"/images/studio-rack-logo.svg"),alt:l,loading:"lazy"}),(0,a.jsxs)("span",{className:o().logoText,children:["Studio",(0,a.jsx)("span",{className:o().logoTextBold,children:"Rack"})]})]}),(0,a.jsx)(u,{})]}),(0,a.jsx)("main",{children:n})]})}},4834:function(e,n,t){"use strict";t.d(n,{bv:function(){return i},X1:function(){return r},VL:function(){return o}});var a=t(1163);function i(){return(0,a.useRouter)().basePath}function r(e,n){var t="",a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var u=o.value;if(t+="/"+u,u===n)break}}catch(l){i=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return t}function o(e){return"/"===e?(0,a.useRouter)().asPath===e?"active":"":(0,a.useRouter)().asPath.startsWith(e)?"active":""}},2415:function(e){e.exports={crumb:"crumb_crumb__UwVqh",crumbList:"crumb_crumbList__Vc_mG",crumbLink:"crumb_crumbLink___jIN7"}},5016:function(e){e.exports={header:"layout_header__H1FPN",headerLink:"layout_headerLink__b5duO",logoText:"layout_logoText__k_NiD",logoTextBold:"layout_logoTextBold__5Z4GQ",navItem:"layout_navItem__8ttv4",navItemActive:"layout_navItemActive__HTH8A",navButton:"layout_navButton__iG9NC",navButtonIcon:"layout_navButtonIcon__I1yBf",menu:"layout_menu__hdTv4",menuIcn:"layout_menuIcn__ci3L7",menuNavIcn:"layout_menuNavIcn__Ugihm",menuBtn:"layout_menuBtn__MfdF9",steps:"layout_steps__fE_xu"}},8496:function(e){e.exports={header:"plugin_header__hRwwm",imageContainer:"plugin_imageContainer__JsNO_",imagePlay:"plugin_imagePlay__f_xm4",title:"plugin_title__nxa2R",author:"plugin_author__HL0xy",image:"plugin_image__Y_ASQ",version:"plugin_version__BroM1",metadataList:"plugin_metadataList__jpxwB",metadata:"plugin_metadata__gpa7f",tags:"plugin_tags__tLjGN",icon:"plugin_icon__DwjOI",tag:"plugin_tag___Pw9n",options:"plugin_options__nmUBN",download:"plugin_download__ZuCXI",install:"plugin_install__ZeUaJ",button:"plugin_button__PKK4v",codeBox:"plugin_codeBox__tHZrh",headerInner:"plugin_headerInner__vIEKw",headerInner2:"plugin_headerInner2__pN281",media:"plugin_media__f3dPa",details:"plugin_details__maIlI",row:"plugin_row__vxmAo",cell:"plugin_cell__DS_hW"}},9008:function(e,n,t){e.exports=t(5443)},1163:function(e,n,t){e.exports=t(387)},1304:function(e){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E\'","\u0538":"Y\'","\u0539":"T\'","\u053a":"JH","\u053b":"I","\u053c":"L","\u053d":"X","\u053e":"C\'","\u053f":"K","\u0540":"H","\u0541":"D\'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054a":"P","\u054b":"J","\u054c":"R\'","\u054d":"S","\u054e":"V","\u054f":"T","\u0550":"R","\u0551":"C","\u0553":"P\'","\u0554":"Q\'","\u0555":"O\'\'","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062a":"t","\u062b":"th","\u062c":"j","\u062d":"h","\u062e":"kh","\u062f":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063a":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064a":"y","\u064b":"an","\u064c":"on","\u064d":"en","\u064e":"a","\u064f":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067e":"p","\u0686":"ch","\u0698":"zh","\u06a9":"k","\u06af":"g","\u06cc":"y","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2013":"-","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u201e":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial","\ufef5":"laa","\ufef7":"laa","\ufef9":"lai","\ufefb":"la"}'),n=JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042a":"A","\u042c":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044a":"a","\u044c":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","\u20a3":"francos","\u2211":"suma","\u221e":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","\u2211":"soma","\xa3":"libra","\u221e":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"}}');function t(t,a){if("string"!==typeof t)throw new Error("slugify: string argument expected");var i=n[(a="string"===typeof a?{replacement:a}:a||{}).locale]||{},r=void 0===a.replacement?"-":a.replacement,o=void 0===a.trim||a.trim,s=t.normalize().split("").reduce((function(n,t){return n+(i[t]||e[t]||(t===r?" ":t)).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return a.strict&&(s=s.replace(/[^A-Za-z0-9\s]/g,"")),o&&(s=s.trim()),s=s.replace(/\s+/g,r),a.lower&&(s=s.toLowerCase()),s}return t.extend=function(n){Object.assign(e,n)},t},e.exports=n(),e.exports.default=n()}}]);