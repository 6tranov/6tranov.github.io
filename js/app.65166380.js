(function(){"use strict";var e={4941:function(e,t,i){var n=i(9242),o=i(3396);function r(e,t,i,n,r,a){const s=(0,o.up)("TimeTable"),l=(0,o.up)("BootstrapText");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(l)],64)}var a=i(7139);const s={class:"card"},l={class:"card-header"},d={class:"card-body"},u=["onUpdate:modelValue","onBlur","onKeydown"],m=(0,o._)("br",null,null,-1),c=["onUpdate:modelValue","onKeydown"],h=(0,o._)("span",{class:"handle-only-this"},"Drag",-1);function f(e,t,i,r,f,b){const w=(0,o.up)("draggable");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(w,{list:f.emptyListOfDeleteArea,disabled:!f.enabled,"item-key":"id",handle:".handle-only-this",animation:"350",group:"day",style:{border:"solid",height:"57px"},id:"deleteArea"},{item:(0,o.w5)((({element:e})=>[(0,o._)("div",null,(0,a.zw)(e),1)])),_:1},8,["list","disabled"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(f.timeTable,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("div",s,[(0,o._)("div",l,(0,a.zw)(e.date),1),(0,o._)("div",d,[(0,o.Wm)(w,{list:e.rows,disabled:!f.enabled,"item-key":"id",onChange:t=>b.modifyTimeWhenMoved(t,b.getDateIndexFromDateID(e.id)),onStart:b.enableDeleteArea,onEnd:t[1]||(t[1]=e=>{b.disableDeleteArea(),b.clearEmptyListOfDeleteArea()}),handle:".handle-only-this",animation:"350",group:"day"},{item:(0,o.w5)((({element:e})=>[(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"time","onUpdate:modelValue":t=>e.time=t,onFocus:t[0]||(t[0]=e=>b.setOldTime(e.target.value)),onBlur:t=>b.modifyTimeWhenChanged(b.getDateIndexAndRowIndexPairFromRowID(e.id)),onKeydown:(0,n.D2)((t=>b.focusNextAction(e.id)),["enter"]),ref_for:!0,ref:"time"+e.id},null,40,u),[[n.nr,e.time]]),m,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t=>e.action=t,placeholder:"Write your action",onKeydown:(0,n.D2)((t=>{b.createRowWhenLastDateLastRow(b.getDateIndexAndRowIndexPairFromRowID(e.id)),this.$nextTick((function(){b.focusNextTime(b.getDateIndexAndRowIndexPairFromRowID(e.id))}))}),["enter"]),ref_for:!0,ref:"action"+e.id},null,40,c),[[n.nr,e.action]]),h])])),_:2},1032,["list","disabled","onChange","onStart"])])])])))),128)),(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"time","onUpdate:modelValue":t[2]||(t[2]=e=>f.lastTime=e),ref:"lastTime"},null,512),[[n.nr,f.lastTime]])]),(0,o._)("button",{class:"btn btn-secondary",onClick:t[3]||(t[3]=(...e)=>b.pushRow&&b.pushRow(...e))}," スケジュールを追加 "),(0,o._)("button",{class:"btn btn-secondary",onClick:t[4]||(t[4]=(...e)=>b.copyToClipboard&&b.copyToClipboard(...e))},"Copy")])}var b=i(6983),w=i.n(b);function g(e,t){const i=Number(e.substr(0,2)),n=Number(t.substr(0,2));if(i<n)return!0;if(n<i)return!1;const o=Number(e.substr(3,2)),r=Number(t.substr(3,2));return o<=r}function T(){const e=new Date,t=("0000"+e.getFullYear()).slice(-4),i=("00"+e.getMonth()).slice(-2),n=("00"+e.getDate()).slice(-2);return`${t}-${i}-${n}`}function p(e,t){for(var i=[],n=0;n<e.length;n++){var o=!1;if(0<n){var r=new Date(e[n-1].date.substr(0,4),e[n-1].date.substr(5,2),e[n-1].date.substr(8,2));r.setDate(r.getDate()+1);var a=new Date(e[n].date.substr(0,4),e[n].date.substr(5,2),e[n].date.substr(8,2));while(r<a){const t=("0000"+r.getFullYear()).slice(-4),o=("00"+r.getMonth()).slice(-2),a=("00"+r.getDate()).slice(-2);i.push({date:`${t}-${o}-${a}`,time:"00:00~24:00",action:e[n-1].rows[e[n-1].rows.length-1].action}),r.setDate(r.getDate()+1)}e[n].rows.length>0&&"00:00"!==e[n].rows[0].time&&(i.push({date:e[n].date,time:`00:00~${e[n].rows[0].time}`,action:e[n-1].rows[e[n-1].rows.length-1].action}),o=!0),0==e[n].rows.length&&"00:00"!==t&&(i.push({date:e[n].date,time:`00:00~${t}`,action:e[n-1].rows[e[n-1].rows.length-1].action}),o=!0)}for(var s=0;s<e[n].rows.length;s++){var l="";o||(l=e[n].date,o=!0),s<e[n].rows.length-1?i.push({date:l,time:`${e[n].rows[s].time}~${e[n].rows[s+1].time}`,action:e[n].rows[s].action}):n<e.length-1?i.push({date:l,time:`${e[n].rows[s].time}~24:00`,action:e[n].rows[s].action}):i.push({date:l,time:`${e[n].rows[s].time}~${t}`,action:e[n].rows[s].action})}}return i}function y(e){var t="";t+="|日付|時間|行動|\n",t+="|:-:|:-:|:-:|\n";for(const i of e)t+=`|${i.date}|${i.time}|${i.action}|\n`;return t}function v(e){return`time${e}`}var D={name:"TimeTable",display:"TimeTable",order:0,components:{draggable:w()},data(){return{enabled:!0,dragging:!1,timeTable:[{id:0,date:T(),rows:[{id:0,time:"09:15",action:""}]}],lastTime:"18:45",lastTimeRef:"lastTime",emptyListOfDeleteArea:[],oldTime:"00:00",lastRowID:1}},computed:{draggingInfo(){return this.dragging?"under drag":""}},methods:{getDateIndexFromDateID(e){for(var t=0;t<this.timeTable.length;t++)if(this.timeTable[t].id===e)return t;return null},getDateIndexAndRowIndexPairFromRowID(e){for(var t=0;t<this.timeTable.length;t++)for(var i=0;i<this.timeTable[t].rows.length;i++)if(this.timeTable[t].rows[i].id===e)return[t,i];return null},addNewRowBehindLastDateLastRow:function(){const e={id:this.lastID+1,time:this.lastTime,action:""};this.timeTable.push(e)},checkMove:function(e){document.getElementById("deleteArea").style.backgroundColor="red"},a:function(e){alert(e)},ai:function(e){alert(e.moved.newIndex)},enableDeleteArea:function(){document.getElementById("deleteArea").style.backgroundColor="red"},disableDeleteArea:function(){document.getElementById("deleteArea").style.backgroundColor="white"},clearEmptyListOfDeleteArea:function(){this.emptyListOfDeleteArea=[]},copyToClipboard:function(){const e=p(this.timeTable,this.lastTime),t=y(e);navigator.clipboard.writeText(t),alert("copied.")},modifyTimeWhenMoved(e,t){if("undefined"!==typeof e.removed)return;const i=t;var n=null;"undefined"!==typeof e.moved&&(n=e.moved.newIndex),"undefined"!==typeof e.added&&(n=e.added.newIndex),this.setSameTimeAsBelow(i,n)},setSameTimeAsBelow(e,t){t<this.timeTable[e].rows.length-1?this.timeTable[e].rows[t].time=this.timeTable[e].rows[t+1].time:e!=this.timeTable.length-1?this.timeTable[e].rows[t].time=0<t?this.timeTable[e].rows[t-1].time:"00:00":this.timeTable[e].rows[t].time=this.lastTime},setOldTime(e){this.oldTime=e},modifyTimeWhenChanged(e){const t=e[0],i=e[1];if(!this.isCorrectTimeOrder(t,i)){this.timeTable[t].rows[i].time=this.oldTime,alert("wrong time order.");const e=this.timeTable[t].rows[i].id;this.$refs[`time${e}`][0].focus()}},isCorrectTimeOrder(e,t){var i=null,n=this.timeTable[e].rows[t].time,o=null;return i=0<t?this.timeTable[e].rows[t-1].time:"00:00",o=t<this.timeTable[e].rows.length-1?this.timeTable[e].rows[t+1].time:e===this.timeTable.length-1?this.lastTime:"23:59",g(i,n)&&g(n,o)},focusNextAction(e){this.$refs[`action${e}`][0].focus()},focusNextTime(e){const t=e[0],i=e[1];var n=null;if(i<this.timeTable[t].rows.length-1){const e=this.timeTable[t].rows[i+1].id;n=v(e)}else if(t<this.timeTable.length-1)if(0===this.timeTable[t+1].rows.length)n=this.lastTimeRef;else{const e=this.timeTable[t+1].rows[0].id;n=v(e)}else n=this.lastTimeRef;n===this.lastTimeRef?this.$refs[n].focus():this.$refs[n][0].focus()},createRowWhenLastDateLastRow(e){const t=e[0],i=e[1];t===this.timeTable.length-1&&i===this.timeTable[t].rows.length-1&&this.pushRow()},pushRow(){this.lastRowID++,this.timeTable[this.timeTable.length-1].rows.push({id:this.lastRowID,time:this.lastTime,action:""})}}},x=i(89);const I=(0,x.Z)(D,[["render",f]]);var R=I,_=(0,o.aZ)({name:"App",components:{TimeTable:R}});const $=(0,x.Z)(_,[["render",r]]);var A=$;(0,n.ri)(A).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],s=n[1],l=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var u=l(i)}for(t&&t(n);d<a.length;d++)r=a[d],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},n=self["webpackChunktime_table_maker"]=self["webpackChunktime_table_maker"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(4941)}));n=i.O(n)})();
//# sourceMappingURL=app.65166380.js.map