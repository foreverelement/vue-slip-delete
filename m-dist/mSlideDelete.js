!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mSlideDelete=t():e.mSlideDelete=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"m-slide",data:function(){return{delAreaWidth:70,open:!1}},props:{threshold:{type:Number,default:35},delCls:{type:String,default:"m-slide__del-red"}},methods:{getTouch:function(e){return e.changedTouches[0]||e.targetTouches[0]},setTranslateX:function(e,t){e.style.transform="translateX("+t+"px)"},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;e.style.transition="transform "+t+"s ease"}},directives:{slide:{bind:function(e,t,n){var r=void 0,o=void 0,i=n.context,s=e.childNodes[0];e.addEventListener("touchstart",function(e){r=i.getTouch(e).clientX}),e.addEventListener("touchmove",function(e){o=i.getTouch(e).clientX-r,Math.abs(o)<=i.delAreaWidth&&(o<0&&!i.open||o>0&&i.open)&&(i.setTransition(s,0),i.setTranslateX(s,i.open?o-i.delAreaWidth:o))}),e.addEventListener("touchend",function(e){(o=i.getTouch(e).clientX-r)>0&&!i.open||(i.setTransition(s),o>0&&o>i.threshold||o<0&&o>-i.threshold?(i.open=!1,i.setTranslateX(s,0)):(o>0&&o<=i.threshold||o<0&&o<=-i.threshold)&&(i.open=!0,i.setTranslateX(s,-i.delAreaWidth)))})}}}}},function(e,t,n){"use strict";function r(e){n(2)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(8),s=n(7),a=r,d=s(o.a,i.a,!1,a,null,null);t.default=d.exports},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(5)("25834093",r,!0,null)},function(e,t,n){t=e.exports=n(4)(!0),t.push([e.i,".m-slide{position:relative}.m-slide .m-slide__top{position:relative;width:100%;z-index:1;background-color:#fff}.m-slide .m-slide__del{position:absolute;right:0;top:0;bottom:0;width:70px;color:#fff;z-index:0}.m-slide .m-slide__del span{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.m-slide .m-slide__del-red{background-color:#f23030}","",{version:3,sources:["/Users/yangming/Documents/github/vue-slip-delete/src/components/SlideDelete.vue"],names:[],mappings:"AACA,SAAS,iBAAiB,CACzB,AACD,uBAAuB,kBAAkB,WAAW,UAAU,qBAAqB,CAClF,AACD,uBAAuB,kBAAkB,QAAQ,MAAM,SAAS,WAAW,WAAW,SAAS,CAC9F,AACD,4BAA4B,kBAAkB,QAAQ,SAAS,uCAAwC,8BAA+B,CACrI,AACD,2BAA2B,wBAAwB,CAClD",file:"SlideDelete.vue",sourcesContent:["\n.m-slide{position:relative\n}\n.m-slide .m-slide__top{position:relative;width:100%;z-index:1;background-color:#fff\n}\n.m-slide .m-slide__del{position:absolute;right:0;top:0;bottom:0;width:70px;color:#fff;z-index:0\n}\n.m-slide .m-slide__del span{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)\n}\n.m-slide .m-slide__del-red{background-color:#f23030\n}\n"],sourceRoot:""}])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+A+'~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(g){var i=p++;r=f||(f=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(ssridKey,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(6),u={},c=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v=null,A="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,v=o||{};var i=l(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=u[s.id];a.refs--,n.push(a)}t?(i=l(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete u[a.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],d=i[2],l=i[3],u={id:e+":"+o,css:a,media:d,sourceMap:l};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o);var u;if(i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var c=l.functional,f=c?l.render:l.beforeCreate;c?(l._injectStyles=u,l.render=function(e,t){return u.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"slide",rawName:"v-slide"}],staticClass:"m-slide"},[n("div",{staticClass:"m-slide__top"},[e._t("item")],2),e._v(" "),n("div",{class:"m-slide__del "+e.delCls,on:{click:function(t){e.$emit("del-click")}}},[n("span",[e._t("del",[e._v("删除")])],2)])])},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=mSlideDelete.js.map