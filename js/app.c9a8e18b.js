(function(t){function o(o){for(var n,c,i=o[0],l=o[1],s=o[2],p=0,h=[];p<i.length;p++)c=i[p],r[c]&&h.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(o);while(h.length)h.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(n=!1)}n&&(a.splice(o--,1),t=c(c.s=e[0]))}return t}var n={},r={app:0},a=[];function c(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,o,e){c.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,o){if(1&o&&(t=c(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)c.d(e,n,function(o){return t[o]}.bind(null,n));return e},c.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(o,"a",o),o},c.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},c.p="/Breakout_web/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=o,i=i.slice();for(var s=0;s<i.length;s++)o(i[s]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("64a9"),r=e.n(n);r.a},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],c=(e("034f"),e("2877")),i={},l=Object(c["a"])(i,r,a,!1,null,null,null),s=l.exports,u=e("8c4f"),p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"home"},[e("div",{staticClass:"mainCanvas",style:{width:1e3/t.scale+"px",height:1e3/t.scale+"px"}},[t._l(t.rightsArray,function(o,n){return t._l(o,function(o){return e("span",{style:{left:o[0]/t.scale+"px",top:o[1]/t.scale+"px",width:t.round+"px",height:t.round+"px",borderRadius:t.round+"px",backgroundColor:t.colors[n]},on:{click:function(e){return t.showInfo(o)}}})})})],2),e("div",{staticClass:"mainColors"},t._l(t.colors,function(t,o){return e("p",{style:{backgroundColor:t}})}),0),e("div",{staticClass:"mainInput"},[e("p",[e("label",[t._v("颜色起始值")]),e("button",{on:{click:function(o){t.changeStartColor=!t.changeStartColor}}},[t._v("Edit")]),t.changeStartColor?e("photoshop-picker",{on:{ok:function(o){t.changeStartColor=!1},cancel:function(o){t.changeStartColor=!1}},model:{value:t.startColor,callback:function(o){t.startColor=o},expression:"startColor"}}):t._e()],1),e("p",[e("label",[t._v("颜色中间值")]),e("button",{on:{click:function(o){t.changeMidColor=!t.changeMidColor}}},[t._v("Edit")]),t.changeMidColor?e("photoshop-picker",{on:{ok:function(o){t.changeMidColor=!1},cancel:function(o){t.changeMidColor=!1}},model:{value:t.midColor,callback:function(o){t.midColor=o},expression:"midColor"}}):t._e()],1),e("p",[e("label",[t._v("颜色终点值")]),e("button",{on:{click:function(o){t.changeEndColor=!t.changeEndColor}}},[t._v("Edit")]),t.changeEndColor?e("photoshop-picker",{on:{ok:function(o){t.changeEndColor=!1},cancel:function(o){t.changeEndColor=!1}},model:{value:t.endColor,callback:function(o){t.endColor=o},expression:"endColor"}}):t._e()],1),e("p",[e("label",[t._v("分块数目")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorSteps,expression:"colorSteps"}],attrs:{type:"number"},domProps:{value:t.colorSteps},on:{input:function(o){o.target.composing||(t.colorSteps=o.target.value)}}})]),e("p",[e("label",[t._v("点半径")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.round,expression:"round"}],attrs:{type:"number"},domProps:{value:t.round},on:{input:function(o){o.target.composing||(t.round=o.target.value)}}})]),e("p",[e("button",{on:{click:t.init}},[t._v("重新初始化")])])]),e("div",{staticClass:"mainButton"},[e("button",{on:{click:function(o){return t.zoom("+")}}},[t._v("ZoomIn(+)")]),e("button",{on:{click:function(o){return t.zoom("reset")}}},[t._v("Reset")]),e("button",{on:{click:function(o){return t.zoom("-")}}},[t._v(" ZoomOut(-)")])]),t.selected?e("div",{staticClass:"mainInfo"},[e("button",{on:{click:function(o){t.selected=!1}}},[t._v("close")]),e("p",[e("span",[t._v("X:")]),t._v(t._s(t.selectInfo[0]))]),e("p",[e("span",[t._v("Y:")]),t._v(t._s(t.selectInfo[1]))]),e("p",[e("span",[t._v("Weight:")]),t._v(t._s(t.selectInfo[2]))]),e("p",[e("img",{attrs:{src:"./stateImg/state-"+(t.selectInfo[3]-1)+".png"}})]),e("p",[t._v("State")]),e("p",[e("img",{attrs:{src:"./nextStateImg/nextState-"+(t.selectInfo[3]-1)+".png"}})]),e("p",[t._v("nextStateImg")])]):t._e()])},h=[],f=(e("c5f6"),e("6b54"),e("a481"),e("28a5"),e("c345")),d={name:"home",components:{"material-picker":f["Material"],"compact-picker":f["Compact"],"swatches-picker":f["Swatches"],"slider-picker":f["Slider"],"sketch-picker":f["Sketch"],"chrome-picker":f["Chrome"],"photoshop-picker":f["Photoshop"]},computed:{startColorC:function(){return this.startColor.hex},midColorC:function(){return this.midColor.hex},endColorC:function(){return this.endColor.hex}},data:function(){return{scale:1,res:[],startColor:{hex:"#FFFFFF"},changeStartColor:!1,midColor:{hex:"#0000FF"},changeMidColor:!1,endColor:{hex:"#00FF00"},changeEndColor:!1,colorSteps:30,colors:[],rightsArray:[],round:3,selected:!1,selectInfo:[0,0,0]}},methods:{zoom:function(t){switch(t){case"reset":this.scale=1;break;case"+":this.scale-=.1;break;case"-":this.scale+=.1;break}},init:function(){var t=0,o=0,e=this.res.data;e.length>0&&(t=e[0][2],o=e[e.length-1][2]),console.log(t,o);var n=this.gradientColor(this.startColorC,this.midColorC,Math.ceil(this.colorSteps/2)),r=this.gradientColor(this.midColorC,this.endColorC,Math.floor(this.colorSteps/2));this.colors=n.concat(r),console.log(this.colors);var a=Math.ceil(e.length/this.colorSteps);this.rightsArray=[];for(var c=0;c<this.colorSteps-1;c++)this.rightsArray.push(e.slice(c*a,(c+1)*a));this.rightsArray.push(e.slice((this.colorSteps-1)*a,e.length)),console.log(this.rightsArray)},showInfo:function(t){this.selected=!0,this.selectInfo=t,console.log(t)},gradientColor:function(t,o,e){for(var n=this.colorRgb(t),r=n[0],a=n[1],c=n[2],i=this.colorRgb(o),l=i[0],s=i[1],u=i[2],p=(l-r)/e,h=(s-a)/e,f=(u-c)/e,d=[],g=0;g<e;g++){var v=this.colorHex("rgb("+parseInt(p*g+r)+","+parseInt(h*g+a)+","+parseInt(f*g+c)+")");d.push(v)}return d},colorRgb:function(t){var o=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;t=t.toLowerCase();if(t&&o.test(t)){if(4===t.length){for(var e="#",n=1;n<4;n+=1)e+=t.slice(n,n+1).concat(t.slice(n,n+1));t=e}var r=[];for(n=1;n<7;n+=2)r.push(parseInt("0x"+t.slice(n,n+2)));return r}return t},colorHex:function(t){var o=t,e=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(o)){for(var n=o.replace(/(?:(|)|rgb|RGB)*/g,"").split(","),r="#",a=0;a<n.length;a++){var c=Number(n[a]).toString(16);c=c<10?"0"+c:c,"0"===c&&(c+=c),r+=c}return 7!==r.length&&(r=o),r}if(!e.test(o))return o;var i=o.replace(/#/,"").split("");if(6===i.length)return o;if(3===i.length){var l="#";for(a=0;a<i.length;a+=1)l+=i[a]+i[a];return l}}},mounted:function(){var t=this;this.$axios.get("./data_json.json").then(function(o){t.res=o.data,t.init()})}},g=d,v=(e("de16"),Object(c["a"])(g,p,h,!1,null,null,null)),m=v.exports;n["a"].use(u["a"]);var C=new u["a"]({routes:[{path:"/",name:"home",component:m}]}),b=e("bc3a"),_=e.n(b);n["a"].config.productionTip=!1,n["a"].prototype.$axios=_.a,new n["a"]({router:C,render:function(t){return t(s)}}).$mount("#app")},"64a9":function(t,o,e){},de16:function(t,o,e){"use strict";var n=e("f3e7"),r=e.n(n);r.a},f3e7:function(t,o,e){}});
//# sourceMappingURL=app.c9a8e18b.js.map