var sdenv=function(){function t(t,e){return t===e||t!=t&&e!=e}function e(e,r){for(var n=e.length;n--;)if(t(e[n][0],r))return n;return-1}var r=Array.prototype.splice;function n(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}n.prototype.clear=function(){this.__data__=[],this.size=0},n.prototype.delete=function(t){var n=this.__data__,o=e(n,t);return!(o<0)&&(o==n.length-1?n.pop():r.call(n,o,1),--this.size,!0)},n.prototype.get=function(t){var r=this.__data__,n=e(r,t);return n<0?void 0:r[n][1]},n.prototype.has=function(t){return e(this.__data__,t)>-1},n.prototype.set=function(t,r){var n=this.__data__,o=e(n,t);return o<0?(++this.size,n.push([t,r])):n[o][1]=r,this};var o="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,u=o||i||Function("return this")(),a=u.Symbol,c=Object.prototype,s=c.hasOwnProperty,l=c.toString,f=a?a.toStringTag:void 0;var p=Object.prototype.toString;var d="[object Null]",y="[object Undefined]",h=a?a.toStringTag:void 0;function v(t){return null==t?void 0===t?y:d:h&&h in Object(t)?function(t){var e=s.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(t){}var o=l.call(t);return n&&(e?t[f]=r:delete t[f]),o}(t):function(t){return p.call(t)}(t)}function g(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var b="[object AsyncFunction]",m="[object Function]",_="[object GeneratorFunction]",j="[object Proxy]";function w(t){if(!g(t))return!1;var e=v(t);return e==m||e==_||e==b||e==j}var O,$=u["__core-js_shared__"],x=(O=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var A=Function.prototype.toString;function P(t){if(null!=t){try{return A.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var S=/^\[object .+?Constructor\]$/,D=Function.prototype,F=Object.prototype,R=D.toString,T=F.hasOwnProperty,E=RegExp("^"+R.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function z(t){return!(!g(t)||(e=t,x&&x in e))&&(w(t)?E:S).test(P(t));var e}function k(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return z(r)?r:void 0}var N=k(u,"Map"),M=k(Object,"create");var L=Object.prototype.hasOwnProperty;var C=Object.prototype.hasOwnProperty;function I(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function W(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function U(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}I.prototype.clear=function(){this.__data__=M?M(null):{},this.size=0},I.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},I.prototype.get=function(t){var e=this.__data__;if(M){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return L.call(e,t)?e[t]:void 0},I.prototype.has=function(t){var e=this.__data__;return M?void 0!==e[t]:C.call(e,t)},I.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=M&&void 0===e?"__lodash_hash_undefined__":e,this},U.prototype.clear=function(){this.size=0,this.__data__={hash:new I,map:new(N||n),string:new I}},U.prototype.delete=function(t){var e=W(this,t).delete(t);return this.size-=e?1:0,e},U.prototype.get=function(t){return W(this,t).get(t)},U.prototype.has=function(t){return W(this,t).has(t)},U.prototype.set=function(t,e){var r=W(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function B(t){var e=this.__data__=new n(t);this.size=e.size}B.prototype.clear=function(){this.__data__=new n,this.size=0},B.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},B.prototype.get=function(t){return this.__data__.get(t)},B.prototype.has=function(t){return this.__data__.has(t)},B.prototype.set=function(t,e){var r=this.__data__;if(r instanceof n){var o=r.__data__;if(!N||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new U(o)}return r.set(t,e),this.size=r.size,this};var K=function(){try{var t=k(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();function J(t,e,r){"__proto__"==e&&K?K(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function V(e,r,n){(void 0!==n&&!t(e[r],n)||void 0===n&&!(r in e))&&J(e,r,n)}var q,G=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),u=i.length;u--;){var a=i[q?u:++n];if(!1===e(o[a],a,o))break}return t},H="object"==typeof exports&&exports&&!exports.nodeType&&exports,Q=H&&"object"==typeof module&&module&&!module.nodeType&&module,X=Q&&Q.exports===H?u.Buffer:void 0,Y=X?X.allocUnsafe:void 0;var Z=u.Uint8Array;function tt(t,e){var r,n,o=e?(r=t.buffer,n=new r.constructor(r.byteLength),new Z(n).set(new Z(r)),n):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}var et=Object.create,rt=function(){function t(){}return function(e){if(!g(e))return{};if(et)return et(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function nt(t,e){return function(r){return t(e(r))}}var ot=nt(Object.getPrototypeOf,Object),it=Object.prototype;function ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||it)}function at(t){return null!=t&&"object"==typeof t}function ct(t){return at(t)&&"[object Arguments]"==v(t)}var st=Object.prototype,lt=st.hasOwnProperty,ft=st.propertyIsEnumerable,pt=ct(function(){return arguments}())?ct:function(t){return at(t)&&lt.call(t,"callee")&&!ft.call(t,"callee")},dt=Array.isArray,yt=9007199254740991;function ht(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=yt}function vt(t){return null!=t&&ht(t.length)&&!w(t)}var gt="object"==typeof exports&&exports&&!exports.nodeType&&exports,bt=gt&&"object"==typeof module&&module&&!module.nodeType&&module,mt=bt&&bt.exports===gt?u.Buffer:void 0,_t=(mt?mt.isBuffer:void 0)||function(){return!1},jt="[object Object]",wt=Function.prototype,Ot=Object.prototype,$t=wt.toString,xt=Ot.hasOwnProperty,At=$t.call(Object);var Pt={};function St(t){return function(e){return t(e)}}Pt["[object Float32Array]"]=Pt["[object Float64Array]"]=Pt["[object Int8Array]"]=Pt["[object Int16Array]"]=Pt["[object Int32Array]"]=Pt["[object Uint8Array]"]=Pt["[object Uint8ClampedArray]"]=Pt["[object Uint16Array]"]=Pt["[object Uint32Array]"]=!0,Pt["[object Arguments]"]=Pt["[object Array]"]=Pt["[object ArrayBuffer]"]=Pt["[object Boolean]"]=Pt["[object DataView]"]=Pt["[object Date]"]=Pt["[object Error]"]=Pt["[object Function]"]=Pt["[object Map]"]=Pt["[object Number]"]=Pt["[object Object]"]=Pt["[object RegExp]"]=Pt["[object Set]"]=Pt["[object String]"]=Pt["[object WeakMap]"]=!1;var Dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ft=Dt&&"object"==typeof module&&module&&!module.nodeType&&module,Rt=Ft&&Ft.exports===Dt&&o.process,Tt=function(){try{var t=Ft&&Ft.require&&Ft.require("util").types;return t||Rt&&Rt.binding&&Rt.binding("util")}catch(t){}}(),Et=Tt&&Tt.isTypedArray,zt=Et?St(Et):function(t){return at(t)&&ht(t.length)&&!!Pt[v(t)]};function kt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var Nt=Object.prototype.hasOwnProperty;function Mt(e,r,n){var o=e[r];Nt.call(e,r)&&t(o,n)&&(void 0!==n||r in e)||J(e,r,n)}var Lt=9007199254740991,Ct=/^(?:0|[1-9]\d*)$/;function It(t,e){var r=typeof t;return!!(e=null==e?Lt:e)&&("number"==r||"symbol"!=r&&Ct.test(t))&&t>-1&&t%1==0&&t<e}var Wt=Object.prototype.hasOwnProperty;function Ut(t,e){var r=dt(t),n=!r&&pt(t),o=!r&&!n&&_t(t),i=!r&&!n&&!o&&zt(t),u=r||n||o||i,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var s in t)!e&&!Wt.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||It(s,c))||a.push(s);return a}var Bt=Object.prototype.hasOwnProperty;function Kt(t){if(!g(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=ut(t),r=[];for(var n in t)("constructor"!=n||!e&&Bt.call(t,n))&&r.push(n);return r}function Jt(t){return vt(t)?Ut(t,!0):Kt(t)}function Vt(t){return function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,u=e.length;++i<u;){var a=e[i],c=n?n(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),o?J(r,a,c):Mt(r,a,c)}return r}(t,Jt(t))}function qt(t,e,r,n,o,i,u){var a=kt(t,r),c=kt(e,r),s=u.get(c);if(s)V(t,r,s);else{var l,f=i?i(a,c,r+"",t,e,u):void 0,p=void 0===f;if(p){var d=dt(c),y=!d&&_t(c),h=!d&&!y&&zt(c);f=c,d||y||h?dt(a)?f=a:at(l=a)&&vt(l)?f=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(a):y?(p=!1,f=function(t,e){if(e)return t.slice();var r=t.length,n=Y?Y(r):new t.constructor(r);return t.copy(n),n}(c,!0)):h?(p=!1,f=tt(c,!0)):f=[]:function(t){if(!at(t)||v(t)!=jt)return!1;var e=ot(t);if(null===e)return!0;var r=xt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&$t.call(r)==At}(c)||pt(c)?(f=a,pt(a)?f=Vt(a):g(a)&&!w(a)||(f=function(t){return"function"!=typeof t.constructor||ut(t)?{}:rt(ot(t))}(c))):p=!1}p&&(u.set(c,f),o(f,c,n,i,u),u.delete(c)),V(t,r,f)}}function Gt(t,e,r,n,o){t!==e&&G(e,(function(i,u){if(o||(o=new B),g(i))qt(t,e,u,r,Gt,n,o);else{var a=n?n(kt(t,u),i,u+"",t,e,o):void 0;void 0===a&&(a=i),V(t,u,a)}}),Jt)}function Ht(t){return t}var Qt=Math.max;var Xt=K?function(t,e){return K(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:Ht,Yt=Xt,Zt=Date.now;var te,ee,re,ne=(te=Yt,ee=0,re=0,function(){var t=Zt(),e=16-(t-re);if(re=t,e>0){if(++ee>=800)return arguments[0]}else ee=0;return te.apply(void 0,arguments)});function oe(t,e){return ne(function(t,e,r){return e=Qt(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=Qt(n.length-e,0),u=Array(i);++o<i;)u[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=r(u),function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(t,e,Ht),t+"")}var ie,ue=(ie=function(t,e,r){Gt(t,e,r)},oe((function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,u=o>2?r[2]:void 0;for(i=ie.length>3&&"function"==typeof i?(o--,i):void 0,u&&function(e,r,n){if(!g(n))return!1;var o=typeof r;return!!("number"==o?vt(n)&&It(r,n.length):"string"==o&&r in n)&&t(n[r],e)}(r[0],r[1],u)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var a=r[n];a&&ie(e,a,n,i)}return e})));const ae={adapt:{},tools:{},utils:{},config:{proxyOpen:!1,randomReturn:void 0,randomFixed:!1,timeInterval:void 0,timeTimeout:void 0,isNode:"undefined"==typeof window,isRemoveDebug:!0,isInited:!1},memory:{runinfo:{start:(new Date).getTime(),died:!1},timeout:null,sdEval:eval,sdWindow:"undefined"!=typeof window?window:global,sdFunction:Function},cache:{dynamicCode:[],runloop:{},runsArr:[],runsObj:[],runtime:{},monitor:{}},datas:{dateAndRandom:{}}};function ce(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}var se="[object Symbol]";function le(t){return"symbol"==typeof t||at(t)&&v(t)==se}var fe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;function de(t,e){if(dt(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!le(t))||(pe.test(t)||!fe.test(t)||null!=e&&t in Object(e))}var ye="Expected a function";function he(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(ye);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(he.Cache||U),r}he.Cache=U;var ve=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ge=/\\(\\)?/g,be=function(t){var e=he(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ve,(function(t,r,n,o){e.push(n?o.replace(ge,"$1"):r||t)})),e})),me=1/0,_e=a?a.prototype:void 0,je=_e?_e.toString:void 0;function we(t){if("string"==typeof t)return t;if(dt(t))return ce(t,we)+"";if(le(t))return je?je.call(t):"";var e=t+"";return"0"==e&&1/t==-me?"-0":e}function Oe(t,e){return dt(t)?t:de(t,e)?[t]:be(function(t){return null==t?"":we(t)}(t))}var $e=1/0;function xe(t){if("string"==typeof t||le(t))return t;var e=t+"";return"0"==e&&1/t==-$e?"-0":e}function Ae(t,e){for(var r=0,n=(e=Oe(e,t)).length;null!=t&&r<n;)t=t[xe(e[r++])];return r&&r==n?t:void 0}function Pe(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new U;++e<r;)this.add(t[e])}function Se(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}Pe.prototype.add=Pe.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Pe.prototype.has=function(t){return this.__data__.has(t)};var De=1,Fe=2;function Re(t,e,r,n,o,i){var u=r&De,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var s=i.get(t),l=i.get(e);if(s&&l)return s==e&&l==t;var f=-1,p=!0,d=r&Fe?new Pe:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var y=t[f],h=e[f];if(n)var v=u?n(h,y,f,e,t,i):n(y,h,f,t,e,i);if(void 0!==v){if(v)continue;p=!1;break}if(d){if(!Se(e,(function(t,e){if(u=e,!d.has(u)&&(y===t||o(y,t,r,n,i)))return d.push(e);var u}))){p=!1;break}}else if(y!==h&&!o(y,h,r,n,i)){p=!1;break}}return i.delete(t),i.delete(e),p}function Te(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function Ee(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var ze=1,ke=2,Ne="[object Boolean]",Me="[object Date]",Le="[object Error]",Ce="[object Map]",Ie="[object Number]",We="[object RegExp]",Ue="[object Set]",Be="[object String]",Ke="[object Symbol]",Je="[object ArrayBuffer]",Ve="[object DataView]",qe=a?a.prototype:void 0,Ge=qe?qe.valueOf:void 0;var He=Object.prototype.propertyIsEnumerable,Qe=Object.getOwnPropertySymbols,Xe=Qe?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i}(Qe(t),(function(e){return He.call(t,e)})))}:function(){return[]},Ye=Xe,Ze=nt(Object.keys,Object),tr=Object.prototype.hasOwnProperty;function er(t){return vt(t)?Ut(t):function(t){if(!ut(t))return Ze(t);var e=[];for(var r in Object(t))tr.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}function rr(t){return function(t,e,r){var n=e(t);return dt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,er,Ye)}var nr=1,or=Object.prototype.hasOwnProperty;var ir=k(u,"DataView"),ur=k(u,"Promise"),ar=k(u,"Set"),cr=k(u,"WeakMap"),sr="[object Map]",lr="[object Promise]",fr="[object Set]",pr="[object WeakMap]",dr="[object DataView]",yr=P(ir),hr=P(N),vr=P(ur),gr=P(ar),br=P(cr),mr=v;(ir&&mr(new ir(new ArrayBuffer(1)))!=dr||N&&mr(new N)!=sr||ur&&mr(ur.resolve())!=lr||ar&&mr(new ar)!=fr||cr&&mr(new cr)!=pr)&&(mr=function(t){var e=v(t),r="[object Object]"==e?t.constructor:void 0,n=r?P(r):"";if(n)switch(n){case yr:return dr;case hr:return sr;case vr:return lr;case gr:return fr;case br:return pr}return e});var _r=mr,jr=1,wr="[object Arguments]",Or="[object Array]",$r="[object Object]",xr=Object.prototype.hasOwnProperty;function Ar(e,r,n,o,i,u){var a=dt(e),c=dt(r),s=a?Or:_r(e),l=c?Or:_r(r),f=(s=s==wr?$r:s)==$r,p=(l=l==wr?$r:l)==$r,d=s==l;if(d&&_t(e)){if(!_t(r))return!1;a=!0,f=!1}if(d&&!f)return u||(u=new B),a||zt(e)?Re(e,r,n,o,i,u):function(e,r,n,o,i,u,a){switch(n){case Ve:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Je:return!(e.byteLength!=r.byteLength||!u(new Z(e),new Z(r)));case Ne:case Me:case Ie:return t(+e,+r);case Le:return e.name==r.name&&e.message==r.message;case We:case Be:return e==r+"";case Ce:var c=Te;case Ue:var s=o&ze;if(c||(c=Ee),e.size!=r.size&&!s)return!1;var l=a.get(e);if(l)return l==r;o|=ke,a.set(e,r);var f=Re(c(e),c(r),o,i,u,a);return a.delete(e),f;case Ke:if(Ge)return Ge.call(e)==Ge.call(r)}return!1}(e,r,s,n,o,i,u);if(!(n&jr)){var y=f&&xr.call(e,"__wrapped__"),h=p&&xr.call(r,"__wrapped__");if(y||h){var v=y?e.value():e,g=h?r.value():r;return u||(u=new B),i(v,g,n,o,u)}}return!!d&&(u||(u=new B),function(t,e,r,n,o,i){var u=r&nr,a=rr(t),c=a.length;if(c!=rr(e).length&&!u)return!1;for(var s=c;s--;){var l=a[s];if(!(u?l in e:or.call(e,l)))return!1}var f=i.get(t),p=i.get(e);if(f&&p)return f==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var y=u;++s<c;){var h=t[l=a[s]],v=e[l];if(n)var g=u?n(v,h,l,e,t,i):n(h,v,l,t,e,i);if(!(void 0===g?h===v||o(h,v,r,n,i):g)){d=!1;break}y||(y="constructor"==l)}if(d&&!y){var b=t.constructor,m=e.constructor;b==m||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m||(d=!1)}return i.delete(t),i.delete(e),d}(e,r,n,o,i,u))}function Pr(t,e,r,n,o){return t===e||(null==t||null==e||!at(t)&&!at(e)?t!=t&&e!=e:Ar(t,e,r,n,Pr,o))}var Sr=1,Dr=2;function Fr(t){return t==t&&!g(t)}function Rr(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}}function Tr(t){var e=function(t){for(var e=er(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,Fr(o)]}return e}(t);return 1==e.length&&e[0][2]?Rr(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,i=o,u=!n;if(null==t)return!i;for(t=Object(t);o--;){var a=r[o];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<i;){var c=(a=r[o])[0],s=t[c],l=a[1];if(u&&a[2]){if(void 0===s&&!(c in t))return!1}else{var f=new B;if(n)var p=n(s,l,c,t,e,f);if(!(void 0===p?Pr(l,s,Sr|Dr,n,f):p))return!1}}return!0}(r,t,e)}}function Er(t,e,r){var n=null==t?void 0:Ae(t,e);return void 0===n?r:n}function zr(t,e){return null!=t&&e in Object(t)}function kr(t,e){return null!=t&&function(t,e,r){for(var n=-1,o=(e=Oe(e,t)).length,i=!1;++n<o;){var u=xe(e[n]);if(!(i=null!=t&&r(t,u)))break;t=t[u]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&ht(o)&&It(u,o)&&(dt(t)||pt(t))}(t,e,zr)}var Nr=1,Mr=2;function Lr(t){return de(t)?(e=xe(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return Ae(e,t)}}(t);var e}function Cr(t){return"function"==typeof t?t:null==t?Ht:"object"==typeof t?dt(t)?(e=t[0],r=t[1],de(e)&&Fr(r)?Rr(xe(e),r):function(t){var n=Er(t,e);return void 0===n&&n===r?kr(t,e):Pr(r,n,Nr|Mr)}):Tr(t):Lr(t);var e,r}var Ir=function(t,e){return function(r,n){if(null==r)return r;if(!vt(r))return t(r,n);for(var o=r.length,i=e?o:-1,u=Object(r);(e?i--:++i<o)&&!1!==n(u[i],i,u););return r}}((function(t,e){return t&&G(t,e,er)}));function Wr(t,e){if(t!==e){var r=void 0!==t,n=null===t,o=t==t,i=le(t),u=void 0!==e,a=null===e,c=e==e,s=le(e);if(!a&&!s&&!i&&t>e||i&&u&&c&&!a&&!s||n&&u&&c||!r&&c||!o)return 1;if(!n&&!i&&!s&&t<e||s&&r&&o&&!n&&!i||a&&r&&o||!u&&o||!c)return-1}return 0}function Ur(t,e,r){e=e.length?ce(e,(function(t){return dt(t)?function(e){return Ae(e,1===t.length?t[0]:t)}:t})):[Ht];var n=-1;e=ce(e,St(Cr));var o=function(t,e){var r=-1,n=vt(t)?Array(t.length):[];return Ir(t,(function(t,o,i){n[++r]=e(t,o,i)})),n}(t,(function(t,r,o){return{criteria:ce(e,(function(e){return e(t)})),index:++n,value:t}}));return function(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t}(o,(function(t,e){return function(t,e,r){for(var n=-1,o=t.criteria,i=e.criteria,u=o.length,a=r.length;++n<u;){var c=Wr(o[n],i[n]);if(c)return n>=a?c:c*("desc"==r[n]?-1:1)}return t.index-e.index}(t,e,r)}))}const Br=()=>!ae.memory.runinfo.isDied,Kr=()=>ae.memory.runinfo.isDied,Jr=()=>{ae.memory.runinfo.isDied=!0},Vr=Function.toString,qr=[],Gr=function(){return qr.includes(this.name)?`function ${this.name||""}() { [native code] }`:Vr.apply(this)},Hr=function(t,e){if(t)return t.name=e||t.name||"",qr.push(t.name),Object.defineProperty(t,"toString",{enumerable:!1,configurable:!0,writable:!0,value:Gr}),t},Qr=function(t,e){return Object.defineProperty(t,"name",{configurable:!0,enumerable:!1,writable:!1,value:e}),t},Xr=function(t,e){return Qr(t,e),Hr(t,e),t};Xr(Gr,"toString");const Yr=function(t,e){return exports.setObjName(t,e),exports.setObjNative(t,e),t};function Zr(t,e){return ae.utils[e||t.name]=t,t}function tn(t){return ae.utils[t]}ae.memory.timeout=new class{constructor(){this.index=[],this.timeouts={},this.lastOp=ae.memory.runinfo.start,this.isLock=!1,this.id=0}addTimeout(t,e,r="timeout",n=this.index.length){const o=(new Date).getTime()-this.lastOp+e;void 0===this.timeouts[o]&&(this.timeouts[o]=[]);const i={func:t,type:r,flag:0,time:e,expect_time:o,real_time:null,index:n,id:this.id++};return this.timeouts[o].push(i),this.index[n]?this.index[n]=i:this.index.push(i),Br()&&this.exec(),n}addInterval(t,e,r=void 0){const n=this;return r=this.addTimeout((function(){try{t()}catch(t){console.error(t)}finally{-1!==n.index[r].flag&&n.addInterval(t,e,r)}}),e,"interval",r)}remove(t){if("number"!=typeof t||!this.index[t])return!1;if(0===this.index[t].flag)this.index[t].flag=-1;else{if([-1,2].includes(this.index[t].flag))return;if(1===this.index[t].flag)return!1}}exec(){this.isLock||(this.isLock=!0,setTimeout((()=>{this.isLock=!1,this.run()}),0))}run(){const t=Object.keys(this.timeouts).filter((t=>!(Number(t)+ae.memory.runinfo.start<=this.lastOp)));if(0===t.length)return!1;this.lastOp=Number(t[0])+ae.memory.runinfo.start,this.timeouts[t[0]].forEach((e=>{if(!Kr()&&-1!==e.flag){console.debug(`执行程序时间${t[0]}处${e.type}回调，延时：${e.time}，编号：${e.id}`),e.flag=1,e.real_time=(new Date).getTime()-ae.memory.runinfo.start;try{e.func()}catch(t){console.error(t)}e.flag=2}})),Br()&&this.exec()}};var en=Object.freeze({__proto__:null,addConstant:function(t,e,r){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})},addConstants:function(t,e){for(const r in e){const n=e[r];exports.addConstant.addConstant(t,r,n)}},addInterval:function(t,e){return ae.memory.timeout.addInterval(t,e)},addRuntimeData:function(t,e,r){ae.cache.runtime[t]||(ae.cache.runtime[t]={});const n=ae.cache.runtime[t];return n[e]||(n[e]=[]),n[e].push(r),r},addTimeout:function(t,e){return ae.memory.timeout.addTimeout(t,Number(e||0),"timeout")},addUtil:Zr,compressText:function(t,e=100){return t.length<=e?t:`${t.replace(/[\r\n]+/g," ").replace(/\s+/g," ").slice(0,e)}......`},exit:t=>{const e=ae.memory.sdWindow;Jr(),t.url&&e.onbeforeunload?.(t.url)},getMonitor:function(t){return t?ae.cache.monitor[t]:ae.cache.monitor},getNativeProto:function(t,e,r={}){const n=Xr((()=>{throw new TypeError("Illegal constructor")}),t);return[n,Yr({__proto__:n,...r},t)]},getRuntimeData:function(t,e){return Er(ae,["cache.runtime",t,e].filter((t=>void 0!==t)).join("."))},getUtil:tn,isAlive:Br,isDied:Kr,monitor:function(t,e,r={}){const n=ae.memory.sdWindow,{getLog:o,setLog:i,getKeys:u=[],setKeys:a=[],keys:c=[],getCb:s,setCb:l,cb:f,parse:p=((t,e)=>e)}=r;ae.cache.monitor[e]||(ae.cache.monitor[e]=[]);const d=new n.Proxy(t,{get:(t,r,i)=>(o&&n.console.log(`${e} Getting ${r}`),u.includes(r)||c.includes(r),(s||f)?.(r,e),Reflect.get(t,r,i)),set(t,r,o,u){const s=[n,n.Math,n.navigation].includes(o)&&o.toString?o.toString():o;return i&&n.console.log(`${e} Setting ${r} to ${s}`),a.includes(r)||c.includes(r),(l||f)?.(r,o,e),Reflect.set(t,r,p(r,o),u)}});return ae.cache.monitor[e].push(d),d},monitorFunction:function(t,e,r={}){const n=ae.memory.sdWindow,{log:o,isDebugger:i,cb:u}=r;ae.cache.monitor[e]||(ae.cache.monitor[e]=[]);const a=new n.Proxy(t,{apply(t,r,i){const a=Reflect.apply(t,r,i);return o&&n.console.log(`${e} Apply ${i}`),u?.(i,a,e),a}});return ae.cache.monitor[e].push(a),a},proxy:function(t,e){function r(t){return Object.prototype.toString.call(t)}function n(t){return{apply(e,r,n){const o=Reflect.apply(e,r,n);return r===console&&"log"===e.name||"toString"===e.name||console.log(`[${t}] apply function name is [${e.name}], argArray is [${n}], result is [${o}].`),o},construct(e,r,n){const o=Reflect.construct(e,r,n);return console.log(`[${t}] construct function name is [${e.name}], argArray is [${r}], result is [${o}].`),o}}}return!1===ae.config.proxyOpen?t:"function"==typeof t?new Proxy(t,n(e)):new Proxy(t,function t(e){return{get(o,i){try{if(!1===ae.config.proxy_proto&&"__proto__"===i)return console.log(`getting propKey-> ${e}.${i}  value-> ${o[i]}`),o[i];const u=Reflect.get(o,i,o),a=r(u);if(u instanceof Object){if(!1!==Object.getOwnPropertyDescriptor(o,i)?.writable)return"function"==typeof u?(console.log(`【getting】${e}.${i}  value-> ${ae.tools.compressText(String(u))}  typeof-> ${a}`),new Proxy(u,n(e))):(console.log(`\n【getting】${e}.${i}  value-> ${ae.tools.compressText(String(u))}  typeof-> ${a}`),new Proxy(u,t(`${e}.${i}`)));console.log(`【getting】${e}.${i.toString()} it is non-writable`)}return console.log(`\n【getting】${e}.${i.description??i}  result-> ${u}  typeof-> ${a}`),u}catch(t){console.error(`[${e}] getting error`),console.error(t.stack)}},set(t,n,o,i){const u=r(o);return console.log(`\n【setting】${e}.${n}  value-> ${ae.tools.compressText(String(o))}  typeof-> ${u}`),Reflect.set(t,n,o,i)},has(t,r){const n=Reflect.has(t,r);return console.log(`【has】${e}.${r}, result-> ${n}`),n},deleteProperty(t,r){const n=Reflect.deleteProperty(t,r);return console.log(`【delete】${e}.${r}, result-> ${n}`),n},getOwnPropertyDescriptor(t,r){const n=Reflect.getOwnPropertyDescriptor(t,r);try{console.log(`【getOwnPropertyDescriptor】${e}.${r.toString()} result-> ${String(n)}`)}catch(t){console.error(t.stack)}return n},defineProperty(t,r,n){const o=Reflect.defineProperty(t,r,n);try{console.log(`【defineProperty】${e}.${r} attributes is [${n}], result is [${o}]`)}catch(t){console.error(`[${e}] defineProperty error`),console.error(t.stack)}return o},getPrototypeOf(t){const r=Reflect.getPrototypeOf(t);return console.log(`[${e}] getPrototypeOf result is [${r}]`),r},setPrototypeOf(t,r){const n=Reflect.setPrototypeOf(t,r);return console.log(`[${e}] setPrototypeOf proto is [${r}], result is [${n}]`),n},preventExtensions(t){const r=Reflect.preventExtensions(t);return console.log(`[${e}] preventExtensions, result is [${r}]`),r},isExtensible(t){const r=Reflect.isExtensible(t);return console.log(`[${e}] isExtensible, result is [${r}]`),r},ownKeys(t){const r=Reflect.ownKeys(t);try{console.log(`[${e}] invoke ownkeys, result is [${String(r)}]`)}catch(t){console.error(t.stack)}return r}}}(e))},removeInterval:function(t){return ae.memory.timeout.remove(t)},removeTimeout:function(t){return ae.memory.timeout.remove(t)},setDied:Jr,setFuncName:Qr,setFuncNative:Hr,setNativeFuncName:Xr,setNativeObjName:Yr,setObjName:function(t,e){return Object.defineProperty(t,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:e}),t},setObjNative:function(t,e){return Object.defineProperty(t,"toString",{enumerable:!1,configurable:!0,writable:!0,value:()=>`[object ${e}]`}),t}});function rn(){const t=ae.cache.runloop={current:1},e={};Zr(((r,n,o,i="",u=0)=>{const a=[],c=t.current++;t[r]||(t[r]=[]);const s={idx:n,name:o,data:a,current:c,idxs:[],list:Array.isArray(i)?i.join():i,lens:u||(Array.isArray(i)?i.length:-1)};return t[r].push(s),{addLoop:(t,r,n)=>{s.data.push(r),s.idxs.push(t),Object.assign(e,{key:n,cur:c,num:a.length})},curLoop:()=>a.length,current:c,loopobj:s}}),"initLoop"),Zr((()=>({...e})),"getPreLoop"),Zr((e=>{const r=JSON.parse(JSON.stringify(t)),n={};return Object.entries(r).forEach((([t,e])=>{var r,o,i,u;Array.isArray(e)&&(n[t]={},e.forEach((e=>{e.data.forEach((e=>{void 0===n[t][e]&&(n[t][e]=0),n[t][e]++})),e.data=e.data.join(),e.idxs=e.idxs.join()})),n[t]=(r=Object.entries(n[t]).map((([t,e])=>({code:t,num:e}))),o="num",i="desc",null==r?[]:(dt(o)||(o=null==o?[]:[o]),dt(i=u?void 0:i)||(i=null==i?[]:[i]),Ur(r,o,i))))})),e&&(e(JSON.stringify(r)),console.log("运行时数据复制成功")),{ascii:n,...r}}),"getLoopData")}function nn(){const t=ae.memory.sdWindow;if(ae.config.randomFixed?this.data=ae.datas.dateAndRandom:this.data={},this.data?.firstMap&&Object.values(this.data.firstMap).some((t=>!t)))throw new Error("日期首位配置错误请检查");this.runs=[],this._now=t.Date.now,this._parse=t.Date.parse,this._valueOf=t.Date.prototype.valueOf,this._getTime=t.Date.prototype.getTime,this._toString=t.Date.prototype.toString,this._random=Math.random}function on(t,e={},r=0,n=[0]){void 0===e._count&&(e._count=0);const{taskKey:o,oneKey:i,twoKey:u,monitor:a={}}=e,c=t[o];return t.str=c,t.val={},c?(t.arr=c.split("").map((t=>t.charCodeAt())),e._count>0&&(t[o]=[...t.arr])):(t.arr=[],t[o]=[]),t.idx=`${n.join(">")}-${e._count++}`,t[i]=t[i].map(((t,o)=>t?(on(t,e,r+1,[...n,"one",o]),ae.tools.monitor(t,t.idx,{setLog:!0,...a})):t)),t[u]=t[u].map(((t,o)=>t?(on(t,e,r+1,[...n,"two",o]),ae.tools.monitor(t,t.idx,{setLog:!0,...a})):t)),t}nn.prototype.shift=function(t){const{firstMap:e}=this.data;let r=this.data[t].shift();return"number"==typeof e[t]&&(r+=e[t]),this.runs.push(r),r},nn.prototype.wrapFun=function(t,e){const r=`_${t}`;if(!this[r])return;void 0!==e||Array.isArray(this.data[r])||(this.data[r]=[]);const n=this;return Xr((function(){if(void 0!==e)return e;if(n.data.firstMap?.[r]){if(!n.data[r].length)throw new Error(`DateAndRandom的${r}数据不够`);return n.shift(r)}const t=n[r].call(this);return n.data[r].push(t),t}),t)},nn.prototype.wrapClass=function(t,e){const r=ae.memory.sdWindow,n=`_${t}`;Array.isArray(this.data[n])||(this.data[n]=[]);const o=this;return Xr(new Proxy(e,{construct(t,i,u){if(o.data.firstMap?.[n]){if(!o.data[n].length)throw new Error(`DateAndRandom的${n}数据不够`);return new e(o.shift(n))}const a=Reflect.construct(t,i,u);return o.data[n].push(r.Date.prototype.valueOf.call(a)),a},apply:(t,e,r)=>Reflect.apply(t,e,r)}),e.name||t)},nn.prototype.getData=function(t){const e=Object.entries(this.data).reduce(((t,[e,r])=>{if("firstMap"===e||!r.length)return t;if("_random"===e)return t[e]=r,t.firstMap[e]=!0,t;const n=r[0];return t.firstMap[e]=n,t[e]=r.map((t=>t-n)),t}),{firstMap:{}});return t&&(t(JSON.stringify(e)),console.log("日期与随机数数据复制成功")),e};var un=Object.freeze({__proto__:null,parseTaskTree:function(...t){ae.cache.runsObj=on(...t),ae.cache.runsArr=[]}}),an=Object.freeze({__proto__:null,rs:un});const cn={'!new function(){eval("this.a=1")}().a':"false"};return function(t,e=void 0){return ae.config.isInited||(ue(ae,t),Object.prototype.sdenv=ae,ae.config.isInited=!0,function(t){t&&Object.assign(ae.memory,{sdWindow:t,sdEval:t.eval,sdFunction:t.Function})}(e),rn(),function(){const t=ae.memory.sdWindow;if(!tn("dateAndRandom")){const e=new nn;Zr(e,"dateAndRandom"),t.Date.now=e.wrapFun("now"),t.Date.parse=e.wrapFun("parse"),t.Date.prototype.getTime=e.wrapFun("getTime"),t.Math.random=e.wrapFun("random",ae.config.randomReturn),t.Date=e.wrapClass("newdate",t.Date)}}(),ue(ae.tools,en),ue(ae.adapt,an),ae.config.isFuncProxy&&function(){const t=ae.memory.sdWindow;t.Function=ae.tools.setNativeFuncName(new Proxy(ae.memory.sdFunction,{apply(t,e,r){const n=r.map((t=>(t.includes("debugger")&&(t=t.replace(/debugger/g,"")),t.includes("sdDebugger")&&(t=t.replace(/sdDebugger/g,"debugger")),t)));ae.cache.dynamicCode.push({type:"Function",params:n});const o=Reflect.apply(t,e,n);return function(){return o()}}}),"Function"),t.Function.prototype.constructor=t.Function,ae.tools.setNativeFuncName(t.Function.prototype,"")}(),ae.config.isEvalProxy&&function(){const t=ae.memory.sdWindow;t.eval=new Proxy(t.eval,{apply(t,e,r){const n=r.map((t=>"string"==typeof cn[t]?cn[t]:(t.includes("debugger")&&(t=t.replace(/debugger/g,"")),t.includes("eval")&&(t=t.replace(/eval/g,"Object.sdenv.memory.sdEval")),t.includes("sdDebugger")&&(t=t.replace(/sdDebugger/g,"debugger")),t)));return ae.cache.dynamicCode.push({type:"eval",params:n}),Reflect.apply(t,e,n)}})}()),ae}}();
