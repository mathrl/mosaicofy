(function(){"use strict";var t={190:function(t,e,n){var o=n(963),i=n(252);function a(t,e){const n=(0,i.up)("router-view"),o=(0,i.up)("about-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),(0,i.Wm)(o)],64)}var s=n(744);const r={},l=(0,s.Z)(r,[["render",a]]);var c=l,u=n(119);const d=t=>((0,i.dD)("data-v-036335b7"),t=t(),(0,i.Cn)(),t),p={class:"container"},h=d((()=>(0,i._)("h1",null,"🎧 Mosaicofy 🎧",-1))),m=d((()=>(0,i._)("h3",null," Create a mosaic/collage type art from your most listened spotify songs' covers ",-1))),f=d((()=>(0,i._)("a",{href:"/api/login"},[(0,i._)("button",null,"Login with Spotify")],-1))),_=[h,m,f];function g(t,e){return(0,i.wg)(),(0,i.iD)("div",p,_)}const v={},y=(0,s.Z)(v,[["render",g],["__scopeId","data-v-036335b7"]]);var k=y,w=n(577);const b=(0,i._)("h1",null,"🎧 Mosaicofy 🎧",-1),T={class:"options"},D=(0,i._)("label",{for:"range"},"Time Frame: ",-1),I=(0,i._)("option",{value:"short_term",selected:""},"Last Month",-1),C=(0,i._)("option",{value:"medium_term"},"Last 6 Months",-1),S=(0,i._)("option",{value:"long_term"},"All Time",-1),x=[I,C,S],O=(0,i._)("label",{for:"size"},"Size: ",-1),M=(0,i._)("option",{value:"3",selected:""},"3 x 5",-1),z=(0,i._)("option",{value:"4"},"4 x 5",-1),j=(0,i._)("option",{value:"5"},"5 x 5",-1),F=[M,z,j],U=(0,i._)("label",{for:"showSongs"},"Show songs: ",-1),L=(0,i._)("label",{for:"displayType"},"Display type: ",-1),q=["disabled"],H=(0,i._)("option",{value:"full",selected:""},"Full",-1),P=(0,i._)("option",{value:"discrete"},"Discrete",-1),Y=[H,P],A=(0,i._)("label",{for:"showInfo"},"Show Info: ",-1),Z={id:"mosaic-container"},K={key:0},N=(0,i._)("div",{class:"lds-ring"},[(0,i._)("div"),(0,i._)("div"),(0,i._)("div"),(0,i._)("div")],-1),R=[N],W=["href"],X={key:0,id:"duration"},$={key:1,class:"mosaicInfo"};function E(t,e,n,o,a,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[b,(0,i._)("div",T,[(0,i._)("div",null,[D,(0,i._)("select",{name:"range",id:"range",onChange:e[0]||(e[0]=t=>s.getTopTracks(t.target.value))},x,32)]),(0,i._)("div",null,[O,(0,i._)("select",{id:"size",onChange:e[1]||(e[1]=t=>a.mosaicFormat=t.target.value)},F,32)]),(0,i._)("div",null,[U,(0,i._)("input",{type:"checkbox",id:"showInfo",checked:"",onChange:e[2]||(e[2]=t=>a.showSongs=!a.showSongs)},null,32)]),(0,i._)("div",null,[L,(0,i._)("select",{name:"displayType",id:"displayType",onChange:e[3]||(e[3]=t=>a.discrete=!a.discrete),disabled:!a.showSongs},Y,40,q)]),(0,i._)("div",null,[A,(0,i._)("input",{type:"checkbox",id:"showInfo",checked:"",onChange:e[4]||(e[4]=t=>a.showInfo=!a.showInfo)},null,32)])]),(0,i._)("div",Z,[(0,i._)("div",{id:"mosaic",style:(0,w.j5)({"grid-template-columns":`repeat(${a.mosaicFormat}, auto)`})},[a.loading?((0,i.wg)(),(0,i.iD)("div",K,R)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.tracksToDisplay,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id,class:"cover",style:(0,w.j5)({background:`url(${t.album.images[1].url}) no-repeat`,"background-size":"contain"})},[a.showSongs?((0,i.wg)(),(0,i.iD)("a",{key:0,id:"songInfo",class:(0,w.C_)({discrete:a.discrete}),href:"https://open.spotify.com/album/"+t.album.id,target:"_blank"},[(0,i._)("p",{id:"songName",class:(0,w.C_)({discrete:a.discrete})},(0,w.zw)(t.name),3),(0,i._)("p",{id:"artistName",class:(0,w.C_)({discrete:a.discrete})},(0,w.zw)(t.artists[0].name),3),a.discrete?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",X,(0,w.zw)(s.millisToMinutesAndSeconds(t.duration_ms)),1))],10,W)):(0,i.kq)("",!0)],4)))),128)),!a.loading&&a.showInfo?((0,i.wg)(),(0,i.iD)("div",$," 🎧 "+(0,w.zw)(a.name)+"'s "+(0,w.zw)(s.timeRangeToText)+" most listened from mosaicofy.com 🎧 ",1)):(0,i.kq)("",!0)],4)])],64)}var Q=n(669),V=n.n(Q),B={data(){return{name:"",tracks:[],mosaicFormat:"3",displayType:"full",time_range:"short_term",showSongs:!0,showInfo:!0,loading:!0,discrete:!1}},computed:{tracksToDisplay(){return 3==this.mosaicFormat?this.tracks.slice(0,15):4==this.mosaicFormat?this.tracks.slice(0,20):this.tracks},timeRangeToText(){return"short_term"==this.time_range?"last month's":"medium_term"==this.time_range?"last 6 months'":"all time"}},created(){this.getUserInfo(),this.getTopTracks(this.time_range)},methods:{async getUserInfo(){try{const t=await V().get("/api/user");this.name=t.data.display_name.split(" ")[0]}catch(t){this.name=t}},async getTopTracks(t){this.loading=!0,this.tracks=[],this.time_range=t;try{const e=await V().get("/api/tracks/top/"+t);this.loading=!1,this.tracks=e.data.items,console.log(this.tracks)}catch(e){this.tracks=e}},millisToMinutesAndSeconds(t){var e=Math.floor(t/6e4),n=(t%6e4/1e3).toFixed(0);return 60==n?e+1+":00":e+":"+(n<10?"0":"")+n}}};const G=(0,s.Z)(B,[["render",E]]);var J=G;const tt=[{path:"/",name:"home",component:k},{path:"/app",name:"app",component:J}],et=(0,u.p7)({history:(0,u.PO)("/"),routes:tt});var nt=et;const ot=t=>((0,i.dD)("data-v-201d96db"),t=t(),(0,i.Cn)(),t),it={key:0,id:"about"},at=(0,i.Uk)(" Made by "),st=ot((()=>(0,i._)("a",{href:"https://www.linkedin.com/in/matheus-leite-87843216b/",target:"_blank"},"Matheus Leite",-1))),rt=ot((()=>(0,i._)("br",null,null,-1))),lt=ot((()=>(0,i._)("a",{class:"donation",href:"https://www.paypal.com/donate/?hosted_button_id=V3MHLY7QKLS7U",target:"_blank"},"Paypal",-1))),ct=(0,i.Uk)(" I do not save any of your data. "),ut=ot((()=>(0,i._)("p",{id:"paymentInfo"},null,-1))),dt=ot((()=>(0,i._)("p",null,[(0,i.Uk)(" The source code to this project is available "),(0,i._)("a",{target:"_blank",href:"https://github.com/mathrl/mosaicofy"},"here"),(0,i.Uk)(". ")],-1)));function pt(t,e,n,o,a,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("p",{id:"about-link",class:"link",onClick:e[0]||(e[0]=t=>a.open=!0)},"About"),a.open?((0,i.wg)(),(0,i.iD)("div",it,[(0,i._)("div",null,[(0,i._)("p",null,[at,st,rt,(0,i._)("a",{class:"donation",onClick:e[1]||(e[1]=t=>a.donation="51999639004")},"PIX"),lt,(0,i._)("span",null,(0,w.zw)(a.donation),1),ct]),ut,dt,(0,i._)("button",{onClick:e[2]||(e[2]=t=>a.open=!1)},"X")])])):(0,i.kq)("",!0)],64)}var ht={data(){return{open:!1,donation:""}}};const mt=(0,s.Z)(ht,[["render",pt],["__scopeId","data-v-201d96db"]]);var ft=mt;const _t=(0,o.ri)(c);_t.use(nt),_t.component("about-popup",ft),_t.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(e&&e(o);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(190)}));o=n.O(o)})();
//# sourceMappingURL=app.689cc8df.js.map