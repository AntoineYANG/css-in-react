!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.laputarednerer=e(require("react")):r.laputarednerer=e(r.react)}(window,(function(r){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=1)}([function(e,t){e.exports=r},function(r,e,t){"use strict";t.r(e);var n={};t.r(n),t.d(n,"createStyle",(function(){return P})),t.d(n,"useStyleWrapper",(function(){return M})),t.d(n,"createAnimation",(function(){return F})),t.d(n,"StyledWrapperCC",(function(){return L})),t.d(n,"connectStyle",(function(){return T}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var o=function(r,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};var i=function(){return(i=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)};var u={},c=function(r){var e=[];for(var t in r)if(r.hasOwnProperty(t)){for(var n=t,o=n.search(/[A-Z]/);-1!==o;)o=(n=n.slice(0,o)+"-"+n.charAt(o).toLowerCase()+n.slice(o+1)).search(/[A-Z]/);var i=r[t];e.push(n+": "+i+";")}return e},a=t(0),f=t.n(a),s=function(r){return p(l(d(r)))};function l(r){return v(A(h(r),8*r.length))}function p(r){for(var e,t="0123456789abcdef",n="",o=0;o<r.length;o++)e=r.charCodeAt(o),n+=t.charAt(e>>>4&15)+t.charAt(15&e);return n}function d(r){for(var e,t,n="",o=-1;++o<r.length;)e=r.charCodeAt(o),t=o+1<r.length?r.charCodeAt(o+1):0,55296<=e&&e<=56319&&56320<=t&&t<=57343&&(e=65536+((1023&e)<<10)+(1023&t),o++),e<=127?n+=String.fromCharCode(e):e<=2047?n+=String.fromCharCode(192|e>>>6&31,128|63&e):e<=65535?n+=String.fromCharCode(224|e>>>12&15,128|e>>>6&63,128|63&e):e<=2097151&&(n+=String.fromCharCode(240|e>>>18&7,128|e>>>12&63,128|e>>>6&63,128|63&e));return n}function h(r){for(var e=Array(r.length>>2),t=0;t<e.length;t++)e[t]=0;for(t=0;t<8*r.length;t+=8)e[t>>5]|=(255&r.charCodeAt(t/8))<<24-t%32;return e}function v(r){for(var e="",t=0;t<32*r.length;t+=8)e+=String.fromCharCode(r[t>>5]>>>24-t%32&255);return e}function y(r,e){return r>>>e|r<<32-e}function m(r,e){return r>>>e}function g(r,e,t){return r&e^~r&t}function b(r,e,t){return r&e^r&t^e&t}function j(r){return y(r,2)^y(r,13)^y(r,22)}function O(r){return y(r,6)^y(r,11)^y(r,25)}function C(r){return y(r,7)^y(r,18)^m(r,3)}var S=new Array(1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998);function A(r,e){var t,n,o,i,u,c,a,f,s,l,p,d,h,v=new Array(1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225),A=new Array(64);for(r[e>>5]|=128<<24-e%32,r[15+(e+64>>9<<4)]=e,s=0;s<r.length;s+=16){for(t=v[0],n=v[1],o=v[2],i=v[3],u=v[4],c=v[5],a=v[6],f=v[7],l=0;l<64;l++)A[l]=l<16?r[l+s]:_(_(_(y(h=A[l-2],17)^y(h,19)^m(h,10),A[l-7]),C(A[l-15])),A[l-16]),p=_(_(_(_(f,O(u)),g(u,c,a)),S[l]),A[l]),d=_(j(t),b(t,n,o)),f=a,a=c,c=u,u=_(i,p),i=o,o=n,n=t,t=_(p,d);v[0]=_(t,v[0]),v[1]=_(n,v[1]),v[2]=_(o,v[2]),v[3]=_(i,v[3]),v[4]=_(u,v[4]),v[5]=_(c,v[5]),v[6]=_(a,v[6]),v[7]=_(f,v[7])}return v}function _(r,e){var t=(65535&r)+(65535&e);return(r>>16)+(e>>16)+(t>>16)<<16|65535&t}var w=function(r){for(var e=s(JSON.stringify(r)),t="",n=0;n<64;n+=8){var o=parseInt(e.substr(n,8),16);for(o<0&&(o=Math.abs(parseInt(e.substr(n+1,7),16)));o>=16;)o/=2;t+=Math.floor(o).toString(16)}return"s"+t},E=function(r,e){var t="",n=0;return(r=r.trim().split(/ {2,}/).join(" ").split(", ").join(",")).split("").forEach((function(r){" "===r||">"===r?(0===n&&(t+="."+e),n+=1):","===r?(0===n&&(t+="."+e),n=0):0!==n||"["!==r&&"+"!==r&&":"!==r?"]"!==r&&")"!==r||(n+=1):(t+="."+e,":"===r&&(n+=1)),t+=r})),0===n&&(t+="."+e),t.replace("*.",".")||"."+e},x=function(r){var e=[];if(Object(a.useLayoutEffect)((function(){e.forEach((function(e){e.current&&e.current.classList&&e.current.classList.add(r.id)}))})),r.children){if(r.children.length){var t=r.children;return f.a.createElement(f.a.Fragment,null,t.map((function(r,t){if(r.ref)return e.push(r.ref),i(i({},r),{key:t});var n=Object(a.createRef)();return e.push(n),i(i({},r),{key:t,ref:n})})))}var n=r.children;if(n.ref)return e.push(n.ref),n;var o=Object(a.createRef)();return e.push(o),i(i({},n),{ref:o})}return f.a.createElement(f.a.Fragment,null)},P=function(r){var e=w(r);return Object.entries(r).forEach((function(r){var t=E(r[0],e);!function(r,e,t,n){if(void 0===n&&(n=0),u.hasOwnProperty(r))for(var o=u[r],i=0;i<o.sheet.cssRules.length;i++){if(o.sheet.cssRules[i].selectorText===e)return}else{var a=document.createElement("style");a.type="text/css",a.id=r,u[r]=a,document.head.appendChild(a)}var f=u[r];f.sheet.insertRule(e+" { "+c(t).join("\n")+" }",Math.min(n,f.sheet.rules.length))}(e,t,r[1])})),{id:e}},M=function(r){return function(e){return f.a.createElement(x,i({},r),e.children)}},R=function(){function r(r,e){var t=e.duration,n=void 0===t?"400ms":t,o=e.timingFunction,i=void 0===o?"ease":o,u=e.delay,c=void 0===u?0:u,a=e.iterationCount,f=void 0===a?1:a,s=e.direction,l=void 0===s?"normal":s;this.config={name:r,duration:n,timingFunction:i,delay:c,iterationCount:f,direction:l}}return r.safeTime=function(r){return"number"==typeof r?r+"s":r.endsWith("s")?r:r+"s"},r.prototype.toString=function(){return this.config.name+" "+r.safeTime(this.config.duration)+" "+this.config.timingFunction+" "+r.safeTime(this.config.delay)+" "+this.config.iterationCount+" "+this.config.direction},r}(),F=function(r,e){var t="ani_"+w(r);return document.getElementById(t)||function(r,e,t){if(!u.hasOwnProperty(r)){var n=document.createElement("style");n.type="text/css",n.id=r,u[r]=n,document.head.appendChild(n);var o=u[r],i=Object.entries(t);o.sheet.insertRule("@keyframes "+e+" { "+i.map((function(r){return r[0]+" { "+c(r[1]).join(" ")+" }"})).join("\n")+" }")}}(t,r,e),function(e){return new R(r,null!=e?e:{}).toString()}},L=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.ref=[],e}return function(r,e){function t(){this.constructor=r}o(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}(e,r),e.prototype.render=function(){var r=this;if(this.props.children){if(this.props.children.length){var e=this.props.children;return f.a.createElement(f.a.Fragment,null,e.map((function(e,t){if(e.ref)return r.ref.push(e.ref),i(i({},e),{key:t});var n=Object(a.createRef)();return r.ref.push(n),i(i({},e),{key:t,ref:n})})))}var t=this.props.children;if(t.ref)return this.ref.push(t.ref),t;var n=Object(a.createRef)();return this.ref.push(n),i(i({},t),{ref:n})}return f.a.createElement(f.a.Fragment,null)},e.prototype.componentDidMount=function(){var r=this;this.ref.forEach((function(e){e.current&&e.current.classList&&e.current.classList.add(r.props.id)}))},e}(f.a.Component),T=function(r){return function(e,t,n){var o=e.render;n.value=function(){return f.a.createElement(L,i({},r),o.bind(this)())}}};e.default=n}])}));