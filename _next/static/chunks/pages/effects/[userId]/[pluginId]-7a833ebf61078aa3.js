(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{5221:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/effects/[userId]/[pluginId]",function(){return s(7725)}])},7725:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return j}});var a=s(5893),i=s(7294),n=s(7657),l=s(1152),c=s(9008),r=s.n(c),o=s(6195),h=s.n(o),d=s(1163),u=s(4618),g=s(4606),m=s(8542),p=s(2540);class x extends i.Component{formatBytes(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";let s=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,s)).toFixed(e<0?0:e))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}timeSince(t){let e=Math.floor((new Date().getTime()-new Date(t).getTime())/1e3),s=e/31536e3;return s>2?Math.floor(s)+" years":s>1?Math.floor(s)+" year":(s=e/2592e3)>2?Math.floor(s)+" months":s>1?Math.floor(s)+" month":(s=e/86400)>2?Math.floor(s)+" days":s>1?Math.floor(s)+" day":(s=e/3600)>2?Math.floor(s)+" hours":s>1?Math.floor(s)+" hour":(s=e/60)>2?Math.floor(s)+" minutes":s>1?Math.floor(s)+" minute":Math.floor(e)+" seconds"}getPlayButton(){return this.state.isPlaying?(0,a.jsx)("img",{className:h().imagePlay,src:"".concat(this.state.router.basePath,"/images/icon-pause.svg"),alt:"Pause",onClick:this.pause}):(0,a.jsx)("img",{className:h().imagePlay,src:"".concat(this.state.router.basePath,"/images/icon-play.svg"),alt:"Play",onClick:this.play})}render(){var t,e;return(0,a.jsxs)(l.ZP,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:this.state.plugin.name||""}),(0,a.jsx)("meta",{name:"description",content:this.state.plugin.description||""}),(0,a.jsx)("meta",{name:"og:image",content:(0,u.fk)(this.state.plugin,"image")}),(0,a.jsx)("meta",{name:"og:title",content:this.state.plugin.name||""})]}),(0,a.jsxs)("article",{children:[(0,a.jsxs)("div",{className:h().header,children:[(0,a.jsx)("div",{className:h().headerInner2,children:(0,a.jsx)(n.Z,{items:["effects",(null===(t=this.state.plugin.id)||void 0===t?void 0:t.split("/")[0])||"",(null===(e=this.state.plugin.id)||void 0===e?void 0:e.split("/")[1])||""]})}),(0,a.jsxs)("div",{className:h().headerInner,children:[(0,a.jsxs)("div",{className:h().media,children:[(0,a.jsxs)("div",{className:h().imageContainer,children:[this.state.plugin.files.audio?this.getPlayButton():"",this.state.plugin.files.image?(0,a.jsx)("img",{className:h().image,src:(0,u.fk)(this.state.plugin,"image"),alt:this.state.plugin.name||""}):""]}),this.state.plugin.files.audio?(0,a.jsx)("audio",{src:(0,u.fk)(this.state.plugin,"audio"),id:"audio",children:"Your browser does not support the audio element."}):""]}),(0,a.jsxs)("div",{className:h().details,children:[(0,a.jsxs)("h3",{className:h().title,children:[this.state.plugin.name||""," ",(0,a.jsxs)("span",{className:h().version,children:["v",this.state.plugin.version]})]}),(0,a.jsxs)("p",{className:h().author,children:["By"," ",(0,a.jsx)("a",{href:this.state.plugin.homepage,target:"_blank",children:this.state.plugin.author})]}),(0,a.jsxs)("p",{children:[this.state.plugin.description,(0,a.jsx)(g.Z,{plugin:this.state.plugin,message:!0})]}),(0,a.jsxs)("div",{className:h().metadataList,children:[(0,a.jsxs)("div",{className:h().metadata,children:[(0,a.jsx)("img",{className:h().icon,src:"".concat(this.state.router.basePath,"/images/icon-date.svg"),alt:"Date updated",loading:"lazy"})," ",this.timeSince(this.state.plugin.date)," ago"]}),(0,a.jsxs)("div",{className:h().metadata,children:[(0,a.jsx)("img",{className:h().icon,src:"".concat(this.state.router.basePath,"/images/icon-license.svg"),alt:"License",loading:"lazy"})," ",this.state.plugin.license?(0,a.jsx)("a",{href:(0,p.tI)(this.state.plugin.license).url,target:"_blank",children:(0,p.tI)(this.state.plugin.license).name}):"none"]}),(0,a.jsxs)("div",{className:h().metadata,children:[(0,a.jsx)("img",{className:h().icon,src:"".concat(this.state.router.basePath,"/images/icon-tag.svg"),alt:"Tags",loading:"lazy"}),(0,a.jsx)("ul",{className:h().tags,children:this.state.plugin.tags.map((t,e)=>(0,a.jsxs)("li",{className:h().tag,children:[t,e!==this.state.plugin.tags.length-1?",":""]},"".concat(t,"-").concat(e)))})]}),(0,a.jsx)("div",{className:h().metadataFooter,children:(0,a.jsx)("a",{href:this.state.plugin.homepage,target:"_blank",children:(0,a.jsx)("button",{className:"button button-clear",children:"View source"})})})]})]})]})]}),(0,a.jsx)("div",{className:h().options,children:(0,a.jsxs)("div",{className:h().row,children:[(0,a.jsxs)("div",{className:"".concat(h().cell," ").concat(h().download),children:[(0,a.jsx)("p",{children:"Download and install manually:"}),(0,a.jsx)(m.Z,{plugin:this.state.plugin})]}),(0,a.jsxs)("div",{className:"".concat(h().cell," ").concat(h().install),children:[(0,a.jsxs)("p",{children:["Install via"," ",(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@studiorack/cli",target:"_blank",children:"StudioRack CLI"}),":"]}),(0,a.jsx)(g.Z,{plugin:this.state.plugin}),(0,a.jsxs)("pre",{className:h().codeBox,children:["studiorack plugin install ",this.state.plugin.id]})]})]})})]})]})}constructor(t){super(t),this.play=()=>{let t=document.getElementById("audio");t.paused&&(t.removeEventListener("ended",this.ended),t.addEventListener("ended",this.ended),t.currentTime=0,t.play(),this.setState({isPlaying:!0}))},this.pause=()=>{let t=document.getElementById("audio");t.paused||(t.pause(),this.setState({isPlaying:!1}))},this.ended=()=>{this.setState({isPlaying:!1})},this.state={isPlaying:!1,plugin:t.plugin,router:t.router}}}var j=!0;e.default=(0,d.withRouter)(x)}},function(t){t.O(0,[477,83,888,774,179],function(){return t(t.s=5221)}),_N_E=t.O()}]);