(function(){"use strict";var e={3878:function(e,a,n){var t=n(5130),r=n(6768);const o={class:"containerSearch"},l={class:"containerPagination"},u={key:1};function s(e,a,n,t,s,c){const i=(0,r.g2)("my-select"),d=(0,r.g2)("my-input"),v=(0,r.g2)("my-pagination"),g=(0,r.g2)("cards-list");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",o,[(0,r.bF)(i,{modelValue:e.selectedSort,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectedSort=a)},null,8,["modelValue"]),(0,r.bF)(d,{modelValue:e.filteredName,"onUpdate:modelValue":a[1]||(a[1]=a=>e.filteredName=a)},null,8,["modelValue"]),(0,r.Lk)("button",{onClick:a[2]||(a[2]=(...a)=>e.sendFilteredCards&&e.sendFilteredCards(...a))},"Filter")]),(0,r.Lk)("div",l,[(0,r.bF)(v,{"total-page":e.totalPage,page:e.page,"change-page":e.changePage,"prev-change-page":e.prevChangePage,"next-change-page":e.nextChangePage},null,8,["total-page","page","change-page","prev-change-page","next-change-page"])]),e.isCardsLoading?((0,r.uX)(),(0,r.CE)("div",u," Идет загрузка...")):((0,r.uX)(),(0,r.Wv)(g,{key:0,cards:e.cards},null,8,["cards"]))])}var c=n(144);const i={class:"container"};function d(e,a,n,t,o,l){const u=(0,r.g2)("card-component");return(0,r.uX)(),(0,r.CE)("div",i,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.cards,(e=>((0,r.uX)(),(0,r.Wv)(u,{key:e.id,card:e},null,8,["card"])))),128))])}var v=n(4232);const g=e=>((0,r.Qi)("data-v-b0fc652c"),e=e(),(0,r.jt)(),e),p={class:"container"},f=["src"],m={class:"content"},h={class:"name"},k={class:"statusInfo"},y={class:"status"},b={class:"status"},C=g((()=>(0,r.Lk)("div",{class:"title"},"Last known location:",-1))),P={class:"location"},L=g((()=>(0,r.Lk)("div",{class:"title"},"First seen in:",-1))),E={class:"location"};function O(e,a,n,t,o,l){return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.Lk)("img",{src:e.card.image,class:"avatar",alt:"img"},null,8,f),(0,r.Lk)("div",m,[(0,r.Lk)("div",null,[(0,r.Lk)("div",h,(0,v.v_)(e.card.name),1),(0,r.Lk)("div",k,[(0,r.Lk)("div",{class:"circle",style:(0,v.Tr)({backgroundColor:e.circleColor})},null,4),(0,r.Lk)("div",y,(0,v.v_)(e.card.status)+" -",1),(0,r.Lk)("div",b,(0,v.v_)(e.card.species),1)])]),(0,r.Lk)("div",null,[C,(0,r.Lk)("div",P,(0,v.v_)(e.card.location.name),1)]),(0,r.Lk)("div",null,[L,(0,r.Lk)("div",E,(0,v.v_)(e.firstSeen),1)])])])}var _=(0,r.pM)({props:{card:{type:Object,required:!0}},setup(e){const a=(0,r.EW)((()=>e.card.episode[0])),n=(0,r.EW)((()=>{switch(e.card.status){case"Alive":return"green";case"Dead":return"red";default:return"gray"}}));return{firstSeen:a,circleColor:n}}}),w=n(1241);const V=(0,w.A)(_,[["render",O],["__scopeId","data-v-b0fc652c"]]);var F=V,A=(0,r.pM)({components:{CardComponent:F},props:{cards:{type:Array,required:!0}}});const M=(0,w.A)(A,[["render",d],["__scopeId","data-v-41538b6d"]]);var K=M,S=n(4373);const X={withCredentials:!1},R=S.A.create({baseURL:"https://rickandmortyapi.com/api",...X}),j=(0,r.Lk)("option",{value:""},"All",-1),x=(0,r.Lk)("option",{value:"alive"},"Alive",-1),I=(0,r.Lk)("option",{value:"dead"},"Dead",-1),W=(0,r.Lk)("option",{value:"unknown"},"Unknown",-1),T=[j,x,I,W];function U(e,a,n,o,l,u){return(0,r.bo)(((0,r.uX)(),(0,r.CE)("select",{"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectedValue=a),onChange:a[1]||(a[1]=(...a)=>e.changeOption&&e.changeOption(...a))},T,544)),[[t.u1,e.selectedValue]])}var q=(0,r.pM)({name:"my-select",setup(e,{emit:a}){const n=(0,c.KR)(""),t=e=>{a("update:selectedValue",e.target.value)};return{selectedValue:n,changeOption:t}}});const N=(0,w.A)(q,[["render",U]]);var D=N;function B(e,a,n,o,l,u){return(0,r.bo)(((0,r.uX)(),(0,r.CE)("input",{"onUpdate:modelValue":a[0]||(a[0]=a=>e.namePerson=a),onChange:a[1]||(a[1]=(...a)=>e.changeValue&&e.changeValue(...a))},null,544)),[[t.Jo,e.namePerson]])}var J=(0,r.pM)({name:"my-input",setup(e,{emit:a}){const n=(0,c.KR)(""),t=e=>{a("update:namePerson",e.target.value)};return{namePerson:n,changeValue:t}}});const Q=(0,w.A)(J,[["render",B]]);var $=Q;const z={class:"container"},G=["disabled"],H=["onClick"],Y=["disabled"];function Z(e,a,n,t,o,l){return(0,r.uX)(),(0,r.CE)("div",z,[(0,r.Lk)("button",{onClick:a[0]||(a[0]=(...a)=>e.decrement&&e.decrement(...a)),disabled:e.isFirstPage},"prev",8,G),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.paginatedPages,(a=>((0,r.uX)(),(0,r.CE)("div",{key:a,class:(0,v.C4)(["page",{currentPage:e.page===a}]),onClick:n=>e.handleChangePage(a)},(0,v.v_)(a),11,H)))),128)),(0,r.Lk)("button",{onClick:a[1]||(a[1]=(...a)=>e.increment&&e.increment(...a)),disabled:e.isLastPage},"next",8,Y)])}n(4114);var ee=(0,r.pM)({name:"MyPagination",props:{totalPage:{type:Number,required:!0},page:{type:Number,required:!0},changePage:{type:Function,required:!0}},setup(e){const a=(0,c.KR)(e.page),n=(0,r.EW)((()=>1===a.value)),t=(0,r.EW)((()=>a.value===e.totalPage)),o=(0,r.EW)((()=>{const n=[],t=2,r=a.value-t,o=a.value+t;for(let a=1;a<=e.totalPage;a++)1===a||a===e.totalPage||a>=r&&a<=o?n.push(a):(a<r&&"..."!==n[n.length-1]||a>o&&"..."!==n[n.length-1])&&n.push("...");return n})),l=n=>{"number"===typeof n&&(a.value=n,e.changePage(n))},u=()=>{a.value<e.totalPage&&(a.value++,e.changePage(a.value))},s=()=>{a.value>1&&(a.value--,e.changePage(a.value))};return(0,r.wB)((()=>e.page),(e=>{a.value=e})),{currentPage:a,isFirstPage:n,isLastPage:t,paginatedPages:o,handleChangePage:l,increment:u,decrement:s}}});const ae=(0,w.A)(ee,[["render",Z],["__scopeId","data-v-38c40350"]]);var ne=ae,te=(0,r.pM)({name:"App",components:{MyPagination:ne,MySelect:D,CardsList:K,MyInput:$},setup(){const e=(0,c.KR)([]),a=(0,c.KR)(""),n=(0,c.KR)(""),t=(0,c.KR)(1),r=(0,c.KR)(0),o=(0,c.KR)({}),l=(0,c.KR)(!1),u=async(a={})=>{try{l.value=!0;const n=await R.get("/character",{params:{status:a.status,name:a.name,page:a.page??t.value}});r.value=n.data.info.pages,e.value=n.data.results,o.value=n.data.info}catch(n){alert("some error")}finally{l.value=!1}},s=()=>{t.value=1,u({status:a.value,name:n.value,page:t.value})},i=e=>{t.value=e,u({status:a.value,name:n.value,page:e})},d=()=>{t.value>1&&(t.value-=1,u({status:a.value,name:n.value,page:t.value}))},v=()=>{t.value<r.value&&(t.value+=1,u({status:a.value,name:n.value,page:t.value}))};return u(),{cards:e,selectedSort:a,filteredName:n,page:t,totalPage:r,isCardsLoading:l,sendFilteredCards:s,changePage:i,prevChangePage:d,nextChangePage:v}}});const re=(0,w.A)(te,[["render",s]]);var oe=re,le=n(1387);const ue=[],se=(0,le.aE)({history:(0,le.LA)("/rickandmortyTest/"),routes:ue});var ce=se,ie=n(782),de=(0,ie.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,t.Ef)(oe).use(de).use(ce).mount("#app")}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(a,t,r,o){if(!t){var l=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],o=e[i][2];for(var u=!0,s=0;s<t.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[s])}))?t.splice(s--,1):(u=!1,o<l&&(l=o));if(u){e.splice(i--,1);var c=r();void 0!==c&&(a=c)}}return a}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,r,o]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,o,l=t[0],u=t[1],s=t[2],c=0;if(l.some((function(a){return 0!==e[a]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var i=s(n)}for(a&&a(t);c<l.length;c++)o=l[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},t=self["webpackChunkrickandmorty"]=self["webpackChunkrickandmorty"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(3878)}));t=n.O(t)})();
//# sourceMappingURL=app.576908bc.js.map