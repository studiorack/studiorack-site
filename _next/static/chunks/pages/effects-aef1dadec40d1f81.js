(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{8801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/effects",function(){return n(8866)}])},2540:function(e,t,n){"use strict";n.d(t,{qG:function(){return o},tI:function(){return s}}),n(3589);var r=n(4492),i=n(3428);function o(e,t,n){let i=n.query.category,o=[];i&&("string"==typeof i?o=e[i].tags:i.forEach(t=>{o=o.concat(e[t].tags)}));let s=n.query.license,u=n.query.platform,f=n.query.search;return t.filter(e=>{var t,n,c,l;let a=Object.keys(e.files);return(!i||!!(0,r.Bh)(o,e.tags))&&(!s||!!(0,r.Bh)(s,"object"==typeof e.license?e.license.key:e.license))&&(!u||!!(0,r.Bh)(u,a))&&(!f||(null===(t=e.id)||void 0===t?void 0:t.toLowerCase().indexOf(f.toLowerCase()))!==-1||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().indexOf(f.toLowerCase()))!==-1||(null===(c=e.description)||void 0===c?void 0:c.toLowerCase().indexOf(f.toLowerCase()))!==-1||(null===(l=e.tags)||void 0===l?void 0:l.indexOf(f.toLowerCase()))!==-1)&&e})}function s(e){if("string"!=typeof e)return e;let t=(0,i.xx)(),n=t[t.length-1];return t.forEach(t=>{if(e===t.key){n=t;return}}),n}},8866:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(5893),i=n(1163),o=n(2540),s=n(1152),u=n(9008),f=n.n(u),c=n(4492),l=n(3428),a=n(3874),d=!0;t.default=e=>{let{plugins:t}=e,n=(0,i.useRouter)(),u=(0,l.CP)("effects"),d=(0,o.qG)(u,t,n);return(0,r.jsxs)(s.ZP,{children:[(0,r.jsx)(f(),{children:(0,r.jsx)("title",{children:(0,c.tj)(["Effects"])})}),(0,r.jsx)(a.Z,{plugins:d,type:"effects",title:"Effects"})]})}}},function(e){e.O(0,[320,664,874,888,774,179],function(){return e(e.s=8801)}),_N_E=e.O()}]);