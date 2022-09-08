(function(){"use strict";var t={690:function(t,n,e){var o=e(963),a=e(252);function i(t,n){const e=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(e)}var r=e(744);const s={},l=(0,r.Z)(s,[["render",i]]);var c=l,u=e(119);const d=t=>((0,a.dD)("data-v-764e94fe"),t=t(),(0,a.Cn)(),t),p={class:"container"},h=d((()=>(0,a._)("h1",null,"🎧 Mosaicofy 🎧",-1))),f=d((()=>(0,a._)("h3",null," Create a mosaic/collage type art from your most listened spotify songs' covers ",-1))),m=d((()=>(0,a._)("a",{href:"/api/login"},[(0,a._)("button",null,"Login with Spotify")],-1))),_=[h,f,m];function v(t,n){return(0,a.wg)(),(0,a.iD)("div",p,_)}const g={},k=(0,r.Z)(g,[["render",v],["__scopeId","data-v-764e94fe"]]);var b=k,y=e(577),w=e.p+"img/spotify.b1a8a1fb.png";const T=(0,a._)("h1",null,"🎧 Mosaicofy 🎧",-1),I={class:"options"},D=(0,a._)("label",{for:"range"},"Time Frame: ",-1),C=(0,a._)("option",{value:"short_term",selected:""},"Last Month",-1),O=(0,a._)("option",{value:"medium_term"},"Last 6 Months",-1),x=(0,a._)("option",{value:"long_term"},"All Time",-1),j=[C,O,x],M=(0,a._)("label",{for:"showInfo"},"Show Credits: ",-1),F=(0,a._)("label",{for:"size"},"Size: ",-1),U=(0,a._)("option",{value:"3",selected:""},"3 x 5",-1),z=(0,a._)("option",{value:"4"},"4 x 5",-1),L=(0,a._)("option",{value:"5"},"5 x 5",-1),S=[U,z,L],P={id:"mosaic-container"},H={key:0},Y=(0,a._)("div",{class:"lds-ring"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div")],-1),Z=[Y],q=["href"],A={key:1,class:"mosaicInfo"},K=(0,a._)("p",{id:"spotify-copy"},[(0,a.Uk)("Data and artwork provided by "),(0,a._)("img",{src:w,alt:""})],-1);function R(t,n,e,o,i,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[T,(0,a._)("div",I,[(0,a._)("div",null,[D,(0,a._)("select",{name:"range",id:"range",onChange:n[0]||(n[0]=t=>r.getTopTracks(t.target.value))},j,32)]),(0,a._)("div",null,[M,(0,a._)("input",{type:"checkbox",id:"showInfo",checked:"",onChange:n[1]||(n[1]=t=>i.showInfo=!i.showInfo)},null,32)]),(0,a._)("div",null,[F,(0,a._)("select",{id:"size",onChange:n[2]||(n[2]=t=>i.mosaicFormat=t.target.value)},S,32)])]),(0,a._)("div",P,[(0,a._)("div",{id:"mosaic",style:(0,y.j5)({"grid-template-columns":`repeat(${i.mosaicFormat}, auto)`})},[i.loading?((0,a.wg)(),(0,a.iD)("div",H,Z)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.tracksToDisplay,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"cover",style:(0,y.j5)({background:`url(${t.album.images[1].url}) no-repeat`,"background-size":"contain"})},[(0,a._)("a",{href:"https://open.spotify.com/album/"+t.album.id,target:"_blank"},null,8,q)],4)))),128)),!i.loading&&i.showInfo?((0,a.wg)(),(0,a.iD)("div",A," 🎧 "+(0,y.zw)(i.name)+"'s "+(0,y.zw)(r.timeRangeToText)+" most listened from mosaicofy.com 🎧 ",1)):(0,a.kq)("",!0)],4)]),K],64)}var X=e(669),$=e.n(X),E={data(){return{name:"",tracks:[],mosaicFormat:"3",time_range:"short_term",showSongs:!0,showInfo:!0,loading:!0}},computed:{tracksToDisplay(){return 3==this.mosaicFormat?this.tracks.slice(0,15):4==this.mosaicFormat?this.tracks.slice(0,20):this.tracks},timeRangeToText(){return"short_term"==this.time_range?"last month's":"medium_term"==this.time_range?"last 6 months'":"all time"}},created(){this.getUserInfo(),this.getTopTracks(this.time_range)},methods:{async getUserInfo(){try{const t=await $().get("/api/user");this.name=t.data.display_name.split(" ")[0]}catch(t){this.name=t}},async getTopTracks(t){this.loading=!0,this.tracks=[],this.time_range=t;try{const n=await $().get("/api/tracks/top/"+t);this.loading=!1,this.tracks=n.data.items}catch(n){this.tracks=n}},millisToMinutesAndSeconds(t){var n=Math.floor(t/6e4),e=(t%6e4/1e3).toFixed(0);return 60==e?n+1+":00":n+":"+(e<10?"0":"")+e}}};const Q=(0,r.Z)(E,[["render",R]]);var V=Q;const B=[{path:"/",name:"home",component:b},{path:"/app",name:"app",component:V}],G=(0,u.p7)({history:(0,u.PO)("/"),routes:B});var J=G;const N=t=>((0,a.dD)("data-v-201d96db"),t=t(),(0,a.Cn)(),t),W={key:0,id:"about"},tt=(0,a.Uk)(" Made by "),nt=N((()=>(0,a._)("a",{href:"https://www.linkedin.com/in/matheus-leite-87843216b/",target:"_blank"},"Matheus Leite",-1))),et=N((()=>(0,a._)("br",null,null,-1))),ot=N((()=>(0,a._)("a",{class:"donation",href:"https://www.paypal.com/donate/?hosted_button_id=V3MHLY7QKLS7U",target:"_blank"},"Paypal",-1))),at=(0,a.Uk)(" I do not save any of your data. "),it=N((()=>(0,a._)("p",{id:"paymentInfo"},null,-1))),rt=N((()=>(0,a._)("p",null,[(0,a.Uk)(" The source code to this project is available "),(0,a._)("a",{target:"_blank",href:"https://github.com/mathrl/mosaicofy"},"here"),(0,a.Uk)(". ")],-1)));function st(t,n,e,o,i,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("p",{id:"about-link",class:"link",onClick:n[0]||(n[0]=t=>i.open=!0)},"About"),i.open?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",null,[(0,a._)("p",null,[tt,nt,et,(0,a._)("a",{class:"donation",onClick:n[1]||(n[1]=t=>i.donation="51999639004")},"PIX"),ot,(0,a._)("span",null,(0,y.zw)(i.donation),1),at]),it,rt,(0,a._)("button",{onClick:n[2]||(n[2]=t=>i.open=!1)},"X")])])):(0,a.kq)("",!0)],64)}var lt={data(){return{open:!1,donation:""}}};const ct=(0,r.Z)(lt,[["render",st],["__scopeId","data-v-201d96db"]]);var ut=ct;const dt=(0,o.ri)(c);dt.use(J),dt.component("about-popup",ut),dt.mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(l)var u=l(e)}for(n&&n(o);c<r.length;c++)i=r[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(690)}));o=e.O(o)})();
//# sourceMappingURL=app.06bb52e3.js.map