/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};


stacks.jQuery = jQuery.noConflict(true);


stacks.stacks_in_25_2 = {};

stacks.stacks_in_25_2 = (function(stack) {

    var jQuery = stacks.jQuery;
    var $ = jQuery;

// BEGIN DOMREADY
$(document).ready(function(){

(function(){var n,r="Expected a function",t=1,e=2,u=1,o=1/0,i=9007199254740991,c="[object Arguments]",f="[object Array]",a="[object AsyncFunction]",l="[object Boolean]",p="[object Date]",s="[object Error]",v="[object Function]",h="[object GeneratorFunction]",y="[object Number]",g="[object Object]",_="[object Proxy]",b="[object RegExp]",j="[object String]",d=/[&<>"']/g,m=RegExp(d.source),O=/^(?:0|[1-9]\d*)$/,x="object"==typeof global&&global&&global.Object===Object&&global,w="object"==typeof self&&self&&self.Object===Object&&self,A=x||w||Function("return this")(),E="object"==typeof exports&&exports&&!exports.nodeType&&exports,N=E&&"object"==typeof module&&module&&!module.nodeType&&module;function k(n,r){return n.push.apply(n,r),n}function F(r){return function(t){return null==t?n:t[r]}}var T,S=(T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},function(r){return null==T?n:T[r]});var B,I,R=Array.prototype,$=Object.prototype,q=$.hasOwnProperty,D=0,P=$.toString,z=A._,C=Object.create,G=$.propertyIsEnumerable,J=A.isFinite,M=(B=Object.keys,I=Object,function(n){return B(I(n))}),U=Math.max;function V(n){return n instanceof K?n:new K(n)}var H=function(){function r(){}return function(t){if(!Vn(t))return{};if(C)return C(t);r.prototype=t;var e=new r;return r.prototype=n,e}}();function K(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r}function L(n,r,t){n[r]=t}function Q(t,e,u){if("function"!=typeof t)throw new TypeError(r);return setTimeout(function(){t.apply(n,u)},e)}K.prototype=H(V.prototype),K.prototype.constructor=K;var W,X,Y=(W=un,function(n,r){if(null==n)return n;if(!Jn(n))return W(n,r);for(var t=n.length,e=X?t:-1,u=Object(n);(X?e--:++e<t)&&!1!==r(u[e],e,u););return n});function Z(r,t,e){for(var u=-1,o=r.length;++u<o;){var i=r[u],c=t(i);if(null!=c&&(f===n?c==c:e(c,f)))var f=c,a=i}return a}function nn(n,r){var t=[];return Y(n,function(n,e,u){r(n,e,u)&&t.push(n)}),t}function rn(n,r,t,e,u){var o=-1,i=n.length;for(t||(t=On),u||(u=[]);++o<i;){var c=n[o];r>0&&t(c)?r>1?rn(c,r-1,t,e,u):k(u,c):e||(u[u.length]=c)}return u}var tn,en=function(n,r,t){for(var e=-1,u=Object(n),o=t(n),i=o.length;i--;){var c=o[tn?i:++e];if(!1===r(u[c],c,u))break}return n};function un(n,r){return n&&en(n,r,er)}function on(n,r){return nn(r,function(r){return Un(n[r])})}function cn(n){return r=n,P.call(r);var r}function fn(n,r){return n>r}var an=pr;function ln(r,u,o,i,a){return r===u||(null==r||null==u||!Hn(r)&&!Hn(u)?r!=r&&u!=u:function(r,u,o,i,a,v){var h=Gn(r),_=Gn(u),d=h?f:cn(r),m=_?f:cn(u),O=(d=d==c?g:d)==g,x=(m=m==c?g:m)==g,w=d==m;v||(v=[]);var A=Bn(v,function(n){return n[0]==r}),E=Bn(v,function(n){return n[0]==u});if(A&&E)return A[1]==u;if(v.push([r,u]),v.push([u,r]),w&&!O){var N=h?function(r,u,o,i,c,f){var a=o&t,l=r.length,p=u.length;if(l!=p&&!(a&&p>l))return!1;var s=-1,v=!0,h=o&e?[]:n;for(;++s<l;){var y=r[s],g=u[s];if(void 0!==n){void 0,v=!1;break}if(h){if(!bn(u,function(n,r){if(!Fn(h,r)&&(y===n||c(y,n,o,i,f)))return h.push(r)})){v=!1;break}}else if(y!==g&&!c(y,g,o,i,f)){v=!1;break}}return v}(r,u,o,i,a,v):function(n,r,t,e,u,o,i){switch(t){case l:case p:case y:return zn(+n,+r);case s:return n.name==r.name&&n.message==r.message;case b:case j:return n==r+""}return!1}(r,u,d);return v.pop(),N}if(!(o&t)){var k=O&&q.call(r,"__wrapped__"),F=x&&q.call(u,"__wrapped__");if(k||F){var T=k?r.value():r,S=F?u.value():u,N=a(T,S,o,i,v);return v.pop(),N}}if(!w)return!1;var N=function(r,e,u,o,i,c){var f=u&t,a=er(r),l=a.length,p=er(e).length;if(l!=p&&!f)return!1;var s=l;for(;s--;){var v=a[s];if(!(f?v in e:q.call(e,v)))return!1}var h=!0,y=f;for(;++s<l;){v=a[s];var g=r[v],_=e[v];if(!(void 0===n?g===_||i(g,_,u,o,c):void 0)){h=!1;break}y||(y="constructor"==v)}if(h&&!y){var b=r.constructor,j=e.constructor;b!=j&&"constructor"in r&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof j&&j instanceof j)&&(h=!1)}return h}(r,u,o,i,a,v);return v.pop(),N}(r,u,o,i,ln,a))}function pn(n){return"function"==typeof n?n:null==n?cr:("object"==typeof n?hn:F)(n)}function sn(n,r){return n<r}function vn(n,r){var t=-1,e=Jn(n)?Array(n.length):[];return Y(n,function(n,u,o){e[++t]=r(n,u,o)}),e}function hn(n){var r=M(n);return function(u){var o=r.length;if(null==u)return!o;for(u=Object(u);o--;){var i=r[o];if(!(i in u&&ln(n[i],u[i],t|e)))return!1}return!0}}function yn(n,r){return En(An(n,r,cr),n+"")}function gn(n,r,t){var e=-1,u=n.length;r<0&&(r=-r>u?0:u+r),(t=t>u?u:t)<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(u);++e<u;)o[e]=n[e+r];return o}function _n(n){return gn(n,0,n.length)}function bn(n,r){var t;return Y(n,function(n,e,u){return!(t=r(n,e,u))}),!!t}function jn(r,t,e,u){var o=!e;e||(e={});for(var i,c,f,a,l=-1,p=t.length;++l<p;){var s=t[l],v=u?u(e[s],r[s],s,e,r):n;v===n&&(v=r[s]),o?L(e,s,v):(f=v,void 0,a=(i=e)[c=s],q.call(i,c)&&zn(a,f)&&(f!==n||c in i)||L(i,c,f))}return e}function dn(r){return yn(function(t,e){var u=-1,o=e.length,i=o>1?e[o-1]:n;for(i=r.length>3&&"function"==typeof i?(o--,i):n,t=Object(t);++u<o;){var c=e[u];c&&r(t,c,u,i)}return t})}function mn(n,t,e,o){if("function"!=typeof n)throw new TypeError(r);var i,c=t&u,f=(i=n,function(){var n=arguments,r=H(i.prototype),t=i.apply(r,n);return Vn(t)?t:r});return function r(){for(var t=-1,u=arguments.length,i=-1,a=o.length,l=Array(a+u),p=this&&this!==A&&this instanceof r?f:n;++i<a;)l[i]=o[i];for(;u--;)l[i++]=arguments[++t];return p.apply(c?e:this,l)}}function On(n){return Gn(n)||Cn(n)}function xn(n,r,t){if(!Vn(t))return!1;var e,u,o,c=typeof r;return!!("number"==c?Jn(t)&&(e=r,u=t.length,o=typeof e,(u=null==u?i:u)&&("number"==o||"symbol"!=o&&O.test(e))&&e>-1&&e%1==0&&e<u):"string"==c&&r in t)&&zn(t[r],n)}function wn(n){var r=[];if(null!=n)for(var t in Object(n))r.push(t);return r}function An(r,t,e){return t=U(t===n?r.length-1:t,0),function(){for(var n=arguments,u=-1,o=U(n.length-t,0),i=Array(o);++u<o;)i[u]=n[t+u];u=-1;for(var c=Array(t+1);++u<t;)c[u]=n[u];return c[t]=e(i),r.apply(this,c)}}var En=cr;function Nn(n){return(null==n?0:n.length)?rn(n,1):[]}function kn(r){return r&&r.length?r[0]:n}function Fn(n,r,t){for(var e=null==n?0:n.length,u=((t="number"==typeof t?t<0?U(e+t,0):t:0)||0)-1,o=r==r;++u<e;){var i=n[u];if(o?i===r:i!=i)return u}return-1}function Tn(n){var r=V(n);return r.__chain__=!0,r}var Sn,Bn=(Sn=function(n,r,t){var e=null==n?0:n.length;if(!e)return-1;var u=null==t?0:Wn(t);return u<0&&(u=U(e+u,0)),function(n,r,t,e){for(var u=n.length,o=t+(e?1:-1);e?o--:++o<u;)if(r(n[o],o,n))return o;return-1}(n,pn(r),u)},function(r,t,e){var u=Object(r);if(!Jn(r)){var o=pn(t);r=er(r),t=function(n){return o(u[n],n,u)}}var i=Sn(r,t,e);return i>-1?u[o?r[i]:i]:n});function In(n,r){return Y(n,pn(r))}function Rn(n,r,t){return e=n,u=pn(r),o=t,i=arguments.length<3,Y(e,function(n,r,t){o=i?(i=!1,n):u(o,n,r,t)}),o;var e,u,o,i}function $n(t,e){var u;if("function"!=typeof e)throw new TypeError(r);return t=Wn(t),function(){return--t>0&&(u=e.apply(this,arguments)),t<=1&&(e=n),u}}var qn=yn(function(n,r,t){return mn(n,32|u,r,t)}),Dn=yn(function(n,r){return Q(n,1,r)}),Pn=yn(function(n,r,t){return Q(n,Xn(r)||0,t)});function zn(n,r){return n===r||n!=n&&r!=r}var Cn=an(function(){return arguments}())?an:function(n){return Hn(n)&&q.call(n,"callee")&&!G.call(n,"callee")},Gn=Array.isArray;function Jn(n){return null!=n&&("number"==typeof(r=n.length)&&r>-1&&r%1==0&&r<=i)&&!Un(n);var r}var Mn=function(n){return Hn(n)&&cn(n)==p};function Un(n){if(!Vn(n))return!1;var r=cn(n);return r==v||r==h||r==a||r==_}function Vn(n){var r=typeof n;return null!=n&&("object"==r||"function"==r)}function Hn(n){return null!=n&&"object"==typeof n}function Kn(n){return"number"==typeof n||Hn(n)&&cn(n)==y}var Ln=function(n){return Hn(n)&&cn(n)==b};function Qn(n){return"string"==typeof n||!Gn(n)&&Hn(n)&&cn(n)==j}var Wn=Number,Xn=Number;function Yn(n){return"string"==typeof n?n:null==n?"":n+""}var Zn=dn(function(n,r){jn(r,M(r),n)}),nr=dn(function(n,r){jn(r,wn(r),n)});var rr=yn(function(r,t){r=Object(r);var e=-1,u=t.length,o=u>2?t[2]:n;for(o&&xn(t[0],t[1],o)&&(u=1);++e<u;)for(var i=t[e],c=ur(i),f=-1,a=c.length;++f<a;){var l=c[f],p=r[l];(p===n||zn(p,$[l])&&!q.call(r,l))&&(r[l]=i[l])}return r});var tr,er=M,ur=wn,or=En(An(tr=function(n,r){return null==n?{}:(t=n,e=r,t=Object(t),Rn(e,function(n,r){return r in t&&(n[r]=t[r]),n},{}));var t,e},n,Nn),tr+"");function ir(n){return null==n?[]:(r=n,vn(er(n),function(n){return r[n]}));var r}function cr(n){return n}var fr,ar=pn;function lr(n,r,t){var e=er(r),u=on(r,e);null!=t||Vn(r)&&(u.length||!e.length)||(t=r,r=n,n=this,u=on(r,er(r)));var o=!(Vn(t)&&"chain"in t&&!t.chain),i=Un(n);return Y(u,function(t){var e=r[t];n[t]=e,i&&(n.prototype[t]=function(){var r=this.__chain__;if(o||r){var t=n(this.__wrapped__);return(t.__actions__=_n(this.__actions__)).push({func:e,args:arguments,thisArg:n}),t.__chain__=r,t}return e.apply(n,k([this.value()],arguments))})}),n}function pr(){}V.assignIn=nr,V.before=$n,V.bind=qn,V.chain=Tn,V.compact=function(n){return nn(n,Boolean)},V.concat=function(){var n=arguments.length;if(!n)return[];for(var r=Array(n-1),t=arguments[0],e=n;e--;)r[e-1]=arguments[e];return k(Gn(t)?_n(t):[t],rn(r,1))},V.create=function(n,r){var t=H(n);return null==r?t:Zn(t,r)},V.defaults=rr,V.defer=Dn,V.delay=Pn,V.filter=function(n,r){return nn(n,pn(r))},V.flatten=Nn,V.flattenDeep=function(n){return null!=n&&n.length?rn(n,o):[]},V.iteratee=ar,V.keys=er,V.map=function(n,r){return vn(n,pn(r))},V.matches=function(n){return hn(Zn({},n))},V.mixin=lr,V.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){var r=arguments;return!n.apply(this,r)}},V.once=function(n){return $n(2,n)},V.pick=or,V.slice=function(r,t,e){var u=null==r?0:r.length;return t=null==t?0:+t,e=e===n?u:+e,u?gn(r,t,e):[]},V.sortBy=function(r,t){var e=0;return t=pn(t),vn(vn(r,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(r,t){return function(r,t){if(r!==t){var e=r!==n,u=null===r,o=r==r,i=t!==n,c=null===t,f=t==t;if(!c&&r>t||u&&i&&f||!e&&f||!o)return 1;if(!u&&r<t||c&&e&&o||!i&&o||!f)return-1}return 0}(r.criteria,t.criteria)||r.index-t.index}),F("value"))},V.tap=function(n,r){return r(n),n},V.thru=function(n,r){return r(n)},V.toArray=function(n){return Jn(n)?n.length?_n(n):[]:ir(n)},V.values=ir,V.extend=nr,lr(V,V),V.clone=function(n){return Vn(n)?Gn(n)?_n(n):jn(n,M(n)):n},V.escape=function(n){return(n=Yn(n))&&m.test(n)?n.replace(d,S):n},V.every=function(r,t,e){return u=r,o=pn(t=e?n:t),i=!0,Y(u,function(n,r,t){return i=!!o(n,r,t)}),i;var u,o,i},V.find=Bn,V.forEach=In,V.has=function(n,r){return null!=n&&q.call(n,r)},V.head=kn,V.identity=cr,V.indexOf=Fn,V.isArguments=Cn,V.isArray=Gn,V.isBoolean=function(n){return!0===n||!1===n||Hn(n)&&cn(n)==l},V.isDate=Mn,V.isEmpty=function(n){return Jn(n)&&(Gn(n)||Qn(n)||Un(n.splice)||Cn(n))?!n.length:!M(n).length},V.isEqual=function(n,r){return ln(n,r)},V.isFinite=function(n){return"number"==typeof n&&J(n)},V.isFunction=Un,V.isNaN=function(n){return Kn(n)&&n!=+n},V.isNull=function(n){return null===n},V.isNumber=Kn,V.isObject=Vn,V.isRegExp=Ln,V.isString=Qn,V.isUndefined=function(r){return r===n},V.last=function(r){var t=null==r?0:r.length;return t?r[t-1]:n},V.max=function(r){return r&&r.length?Z(r,cr,fn):n},V.min=function(r){return r&&r.length?Z(r,cr,sn):n},V.noConflict=function(){return A._===this&&(A._=z),this},V.noop=pr,V.reduce=Rn,V.result=function(r,t,e){var u=null==r?n:r[t];return u===n&&(u=e),Un(u)?u.call(r):u},V.size=function(n){return null==n?0:(n=Jn(n)?n:M(n)).length},V.some=function(r,t,e){return bn(r,pn(t=e?n:t))},V.uniqueId=function(n){var r=++D;return Yn(n)+r},V.each=In,V.first=kn,lr(V,(fr={},un(V,function(n,r){q.call(V.prototype,r)||(fr[r]=n)}),fr),{chain:!1}),V.VERSION="4.17.10",Y(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],function(n){var r=(/^(?:replace|split)$/.test(n)?String.prototype:R)[n],t=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);V.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return r.apply(Gn(u)?u:[],n)}return this[t](function(t){return r.apply(Gn(t)?t:[],n)})}}),V.prototype.toJSON=V.prototype.valueOf=V.prototype.value=function(){return n=this.__wrapped__,Rn(this.__actions__,function(n,r){return r.func.apply(r.thisArg,k([n],r.args))},n);var n},"function"==typeof define&&"object"==typeof define.amd&&define.amd?(A._=V,define(function(){return V})):N?((N.exports=V)._=V,E._=V):A._=V}).call(this);

	var DDS = {
		$el: $('#dds-stacks_in_25_2'),
		$dropdown: $('#dds-stacks_in_25_2 .dds-dropdown'),
		$list: $('#dds-stacks_in_25_2 .dds-dropdown li:not(.all)'),
		$grid: $('#dds-stacks_in_25_2 .dds-grid-item'),
		sortList: [],
		sort: function(){
			var that = this;
				this.$grid.removeClass('match')
				_.each(that.sortList, function(tag){
					$('#dds-stacks_in_25_2 .tag-'+tag).parents('.dds-grid-item').addClass('match')
				});
		},
		createTags: function(){
			var that = this;
			this.$grid.each(function(){
				var tags = '';
				$(this).data('cat').split(',').filter(function(tag){
					tag = tag.trim();
					tags += '<span class="tag tag-'+tag.replace(' ', '-').toLowerCase()+'" data-tag="'+tag+'"></span> ';
					$(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase()
					that.sortList.push(tag.replace(' ', '-').toLowerCase())
				});

				$(this).find('.dds-grid-item-inner')
				.append('<div class="tag-list">'+tags+'</div>')

			});
		},
		createTagColors: function(){
			var styles = ''
			this.$list.each(function(){
				var color = $(this).data('color')
				var style = '#dds-stacks_in_25_2 .tag.tag-'+$(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase()+' { background: '+color+'; }'
				styles += style+'\n'
			});
			styles = '<style>\n'+styles+'</style>'
			this.$el.prepend(styles)
		},
		initialize: function(){
			this.createTagColors();
			this.createTags();
		}
	}

	DDS.initialize();

	DDS.$dropdown.find('.dds-dropdown-selected').click(function(){
		DDS.$dropdown.toggleClass('closed');
	});

	DDS.$list.on('click',function(){
		if($(this).hasClass('on')){

			var tag = $(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase()
			DDS.sortList = DDS.sortList.filter(function(item){
				return item !== tag;
			})

			$(this).removeClass('on').addClass('off');

		} else {
			DDS.sortList.push($(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase())

			$(this).removeClass('off').addClass('on');
		}
		if(DDS.$dropdown.find('li.off').length < 1){
			DDS.$dropdown.find('li.all').addClass('on')
		} else {
			DDS.$dropdown.find('li.all').removeClass('on')
		}
		DDS.sort();
	});

	DDS.$dropdown.find('li.all').click(function(){
		if(!$(this).hasClass('on')){
			DDS.$dropdown.find('li:not(.all)').addClass('on').removeClass('off')
			DDS.$list.each(function(){
				DDS.sortList.push($(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase())
			});
			DDS.sort();
		} else {
			DDS.$dropdown.find('li:not(.all)').removeClass('on').addClass('off')
			DDS.sortList = [];
			DDS.sort();
		}
		$(this).toggleClass('on');

	})

	$(window).click(function() {
		if(!DDS.$dropdown.hasClass('closed')){
			DDS.$dropdown.addClass('closed');
		}
	});

	DDS.$dropdown.click(function(e){
		e.stopPropagation();
	});

// END DOCUMENT READY
});

    return stack;
})(stacks.stacks_in_25_2);



stacks.stacks_in_26_2 = {};

stacks.stacks_in_26_2 = (function(stack) {

    var jQuery = stacks.jQuery;
    var $ = jQuery;

// BEGIN DOMREADY
$(document).ready(function(){

(function(){var n,r="Expected a function",t=1,e=2,u=1,o=1/0,i=9007199254740991,c="[object Arguments]",f="[object Array]",a="[object AsyncFunction]",l="[object Boolean]",p="[object Date]",s="[object Error]",v="[object Function]",h="[object GeneratorFunction]",y="[object Number]",g="[object Object]",_="[object Proxy]",b="[object RegExp]",j="[object String]",d=/[&<>"']/g,m=RegExp(d.source),O=/^(?:0|[1-9]\d*)$/,x="object"==typeof global&&global&&global.Object===Object&&global,w="object"==typeof self&&self&&self.Object===Object&&self,A=x||w||Function("return this")(),E="object"==typeof exports&&exports&&!exports.nodeType&&exports,N=E&&"object"==typeof module&&module&&!module.nodeType&&module;function k(n,r){return n.push.apply(n,r),n}function F(r){return function(t){return null==t?n:t[r]}}var T,S=(T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},function(r){return null==T?n:T[r]});var B,I,R=Array.prototype,$=Object.prototype,q=$.hasOwnProperty,D=0,P=$.toString,z=A._,C=Object.create,G=$.propertyIsEnumerable,J=A.isFinite,M=(B=Object.keys,I=Object,function(n){return B(I(n))}),U=Math.max;function V(n){return n instanceof K?n:new K(n)}var H=function(){function r(){}return function(t){if(!Vn(t))return{};if(C)return C(t);r.prototype=t;var e=new r;return r.prototype=n,e}}();function K(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r}function L(n,r,t){n[r]=t}function Q(t,e,u){if("function"!=typeof t)throw new TypeError(r);return setTimeout(function(){t.apply(n,u)},e)}K.prototype=H(V.prototype),K.prototype.constructor=K;var W,X,Y=(W=un,function(n,r){if(null==n)return n;if(!Jn(n))return W(n,r);for(var t=n.length,e=X?t:-1,u=Object(n);(X?e--:++e<t)&&!1!==r(u[e],e,u););return n});function Z(r,t,e){for(var u=-1,o=r.length;++u<o;){var i=r[u],c=t(i);if(null!=c&&(f===n?c==c:e(c,f)))var f=c,a=i}return a}function nn(n,r){var t=[];return Y(n,function(n,e,u){r(n,e,u)&&t.push(n)}),t}function rn(n,r,t,e,u){var o=-1,i=n.length;for(t||(t=On),u||(u=[]);++o<i;){var c=n[o];r>0&&t(c)?r>1?rn(c,r-1,t,e,u):k(u,c):e||(u[u.length]=c)}return u}var tn,en=function(n,r,t){for(var e=-1,u=Object(n),o=t(n),i=o.length;i--;){var c=o[tn?i:++e];if(!1===r(u[c],c,u))break}return n};function un(n,r){return n&&en(n,r,er)}function on(n,r){return nn(r,function(r){return Un(n[r])})}function cn(n){return r=n,P.call(r);var r}function fn(n,r){return n>r}var an=pr;function ln(r,u,o,i,a){return r===u||(null==r||null==u||!Hn(r)&&!Hn(u)?r!=r&&u!=u:function(r,u,o,i,a,v){var h=Gn(r),_=Gn(u),d=h?f:cn(r),m=_?f:cn(u),O=(d=d==c?g:d)==g,x=(m=m==c?g:m)==g,w=d==m;v||(v=[]);var A=Bn(v,function(n){return n[0]==r}),E=Bn(v,function(n){return n[0]==u});if(A&&E)return A[1]==u;if(v.push([r,u]),v.push([u,r]),w&&!O){var N=h?function(r,u,o,i,c,f){var a=o&t,l=r.length,p=u.length;if(l!=p&&!(a&&p>l))return!1;var s=-1,v=!0,h=o&e?[]:n;for(;++s<l;){var y=r[s],g=u[s];if(void 0!==n){void 0,v=!1;break}if(h){if(!bn(u,function(n,r){if(!Fn(h,r)&&(y===n||c(y,n,o,i,f)))return h.push(r)})){v=!1;break}}else if(y!==g&&!c(y,g,o,i,f)){v=!1;break}}return v}(r,u,o,i,a,v):function(n,r,t,e,u,o,i){switch(t){case l:case p:case y:return zn(+n,+r);case s:return n.name==r.name&&n.message==r.message;case b:case j:return n==r+""}return!1}(r,u,d);return v.pop(),N}if(!(o&t)){var k=O&&q.call(r,"__wrapped__"),F=x&&q.call(u,"__wrapped__");if(k||F){var T=k?r.value():r,S=F?u.value():u,N=a(T,S,o,i,v);return v.pop(),N}}if(!w)return!1;var N=function(r,e,u,o,i,c){var f=u&t,a=er(r),l=a.length,p=er(e).length;if(l!=p&&!f)return!1;var s=l;for(;s--;){var v=a[s];if(!(f?v in e:q.call(e,v)))return!1}var h=!0,y=f;for(;++s<l;){v=a[s];var g=r[v],_=e[v];if(!(void 0===n?g===_||i(g,_,u,o,c):void 0)){h=!1;break}y||(y="constructor"==v)}if(h&&!y){var b=r.constructor,j=e.constructor;b!=j&&"constructor"in r&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof j&&j instanceof j)&&(h=!1)}return h}(r,u,o,i,a,v);return v.pop(),N}(r,u,o,i,ln,a))}function pn(n){return"function"==typeof n?n:null==n?cr:("object"==typeof n?hn:F)(n)}function sn(n,r){return n<r}function vn(n,r){var t=-1,e=Jn(n)?Array(n.length):[];return Y(n,function(n,u,o){e[++t]=r(n,u,o)}),e}function hn(n){var r=M(n);return function(u){var o=r.length;if(null==u)return!o;for(u=Object(u);o--;){var i=r[o];if(!(i in u&&ln(n[i],u[i],t|e)))return!1}return!0}}function yn(n,r){return En(An(n,r,cr),n+"")}function gn(n,r,t){var e=-1,u=n.length;r<0&&(r=-r>u?0:u+r),(t=t>u?u:t)<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(u);++e<u;)o[e]=n[e+r];return o}function _n(n){return gn(n,0,n.length)}function bn(n,r){var t;return Y(n,function(n,e,u){return!(t=r(n,e,u))}),!!t}function jn(r,t,e,u){var o=!e;e||(e={});for(var i,c,f,a,l=-1,p=t.length;++l<p;){var s=t[l],v=u?u(e[s],r[s],s,e,r):n;v===n&&(v=r[s]),o?L(e,s,v):(f=v,void 0,a=(i=e)[c=s],q.call(i,c)&&zn(a,f)&&(f!==n||c in i)||L(i,c,f))}return e}function dn(r){return yn(function(t,e){var u=-1,o=e.length,i=o>1?e[o-1]:n;for(i=r.length>3&&"function"==typeof i?(o--,i):n,t=Object(t);++u<o;){var c=e[u];c&&r(t,c,u,i)}return t})}function mn(n,t,e,o){if("function"!=typeof n)throw new TypeError(r);var i,c=t&u,f=(i=n,function(){var n=arguments,r=H(i.prototype),t=i.apply(r,n);return Vn(t)?t:r});return function r(){for(var t=-1,u=arguments.length,i=-1,a=o.length,l=Array(a+u),p=this&&this!==A&&this instanceof r?f:n;++i<a;)l[i]=o[i];for(;u--;)l[i++]=arguments[++t];return p.apply(c?e:this,l)}}function On(n){return Gn(n)||Cn(n)}function xn(n,r,t){if(!Vn(t))return!1;var e,u,o,c=typeof r;return!!("number"==c?Jn(t)&&(e=r,u=t.length,o=typeof e,(u=null==u?i:u)&&("number"==o||"symbol"!=o&&O.test(e))&&e>-1&&e%1==0&&e<u):"string"==c&&r in t)&&zn(t[r],n)}function wn(n){var r=[];if(null!=n)for(var t in Object(n))r.push(t);return r}function An(r,t,e){return t=U(t===n?r.length-1:t,0),function(){for(var n=arguments,u=-1,o=U(n.length-t,0),i=Array(o);++u<o;)i[u]=n[t+u];u=-1;for(var c=Array(t+1);++u<t;)c[u]=n[u];return c[t]=e(i),r.apply(this,c)}}var En=cr;function Nn(n){return(null==n?0:n.length)?rn(n,1):[]}function kn(r){return r&&r.length?r[0]:n}function Fn(n,r,t){for(var e=null==n?0:n.length,u=((t="number"==typeof t?t<0?U(e+t,0):t:0)||0)-1,o=r==r;++u<e;){var i=n[u];if(o?i===r:i!=i)return u}return-1}function Tn(n){var r=V(n);return r.__chain__=!0,r}var Sn,Bn=(Sn=function(n,r,t){var e=null==n?0:n.length;if(!e)return-1;var u=null==t?0:Wn(t);return u<0&&(u=U(e+u,0)),function(n,r,t,e){for(var u=n.length,o=t+(e?1:-1);e?o--:++o<u;)if(r(n[o],o,n))return o;return-1}(n,pn(r),u)},function(r,t,e){var u=Object(r);if(!Jn(r)){var o=pn(t);r=er(r),t=function(n){return o(u[n],n,u)}}var i=Sn(r,t,e);return i>-1?u[o?r[i]:i]:n});function In(n,r){return Y(n,pn(r))}function Rn(n,r,t){return e=n,u=pn(r),o=t,i=arguments.length<3,Y(e,function(n,r,t){o=i?(i=!1,n):u(o,n,r,t)}),o;var e,u,o,i}function $n(t,e){var u;if("function"!=typeof e)throw new TypeError(r);return t=Wn(t),function(){return--t>0&&(u=e.apply(this,arguments)),t<=1&&(e=n),u}}var qn=yn(function(n,r,t){return mn(n,32|u,r,t)}),Dn=yn(function(n,r){return Q(n,1,r)}),Pn=yn(function(n,r,t){return Q(n,Xn(r)||0,t)});function zn(n,r){return n===r||n!=n&&r!=r}var Cn=an(function(){return arguments}())?an:function(n){return Hn(n)&&q.call(n,"callee")&&!G.call(n,"callee")},Gn=Array.isArray;function Jn(n){return null!=n&&("number"==typeof(r=n.length)&&r>-1&&r%1==0&&r<=i)&&!Un(n);var r}var Mn=function(n){return Hn(n)&&cn(n)==p};function Un(n){if(!Vn(n))return!1;var r=cn(n);return r==v||r==h||r==a||r==_}function Vn(n){var r=typeof n;return null!=n&&("object"==r||"function"==r)}function Hn(n){return null!=n&&"object"==typeof n}function Kn(n){return"number"==typeof n||Hn(n)&&cn(n)==y}var Ln=function(n){return Hn(n)&&cn(n)==b};function Qn(n){return"string"==typeof n||!Gn(n)&&Hn(n)&&cn(n)==j}var Wn=Number,Xn=Number;function Yn(n){return"string"==typeof n?n:null==n?"":n+""}var Zn=dn(function(n,r){jn(r,M(r),n)}),nr=dn(function(n,r){jn(r,wn(r),n)});var rr=yn(function(r,t){r=Object(r);var e=-1,u=t.length,o=u>2?t[2]:n;for(o&&xn(t[0],t[1],o)&&(u=1);++e<u;)for(var i=t[e],c=ur(i),f=-1,a=c.length;++f<a;){var l=c[f],p=r[l];(p===n||zn(p,$[l])&&!q.call(r,l))&&(r[l]=i[l])}return r});var tr,er=M,ur=wn,or=En(An(tr=function(n,r){return null==n?{}:(t=n,e=r,t=Object(t),Rn(e,function(n,r){return r in t&&(n[r]=t[r]),n},{}));var t,e},n,Nn),tr+"");function ir(n){return null==n?[]:(r=n,vn(er(n),function(n){return r[n]}));var r}function cr(n){return n}var fr,ar=pn;function lr(n,r,t){var e=er(r),u=on(r,e);null!=t||Vn(r)&&(u.length||!e.length)||(t=r,r=n,n=this,u=on(r,er(r)));var o=!(Vn(t)&&"chain"in t&&!t.chain),i=Un(n);return Y(u,function(t){var e=r[t];n[t]=e,i&&(n.prototype[t]=function(){var r=this.__chain__;if(o||r){var t=n(this.__wrapped__);return(t.__actions__=_n(this.__actions__)).push({func:e,args:arguments,thisArg:n}),t.__chain__=r,t}return e.apply(n,k([this.value()],arguments))})}),n}function pr(){}V.assignIn=nr,V.before=$n,V.bind=qn,V.chain=Tn,V.compact=function(n){return nn(n,Boolean)},V.concat=function(){var n=arguments.length;if(!n)return[];for(var r=Array(n-1),t=arguments[0],e=n;e--;)r[e-1]=arguments[e];return k(Gn(t)?_n(t):[t],rn(r,1))},V.create=function(n,r){var t=H(n);return null==r?t:Zn(t,r)},V.defaults=rr,V.defer=Dn,V.delay=Pn,V.filter=function(n,r){return nn(n,pn(r))},V.flatten=Nn,V.flattenDeep=function(n){return null!=n&&n.length?rn(n,o):[]},V.iteratee=ar,V.keys=er,V.map=function(n,r){return vn(n,pn(r))},V.matches=function(n){return hn(Zn({},n))},V.mixin=lr,V.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){var r=arguments;return!n.apply(this,r)}},V.once=function(n){return $n(2,n)},V.pick=or,V.slice=function(r,t,e){var u=null==r?0:r.length;return t=null==t?0:+t,e=e===n?u:+e,u?gn(r,t,e):[]},V.sortBy=function(r,t){var e=0;return t=pn(t),vn(vn(r,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(r,t){return function(r,t){if(r!==t){var e=r!==n,u=null===r,o=r==r,i=t!==n,c=null===t,f=t==t;if(!c&&r>t||u&&i&&f||!e&&f||!o)return 1;if(!u&&r<t||c&&e&&o||!i&&o||!f)return-1}return 0}(r.criteria,t.criteria)||r.index-t.index}),F("value"))},V.tap=function(n,r){return r(n),n},V.thru=function(n,r){return r(n)},V.toArray=function(n){return Jn(n)?n.length?_n(n):[]:ir(n)},V.values=ir,V.extend=nr,lr(V,V),V.clone=function(n){return Vn(n)?Gn(n)?_n(n):jn(n,M(n)):n},V.escape=function(n){return(n=Yn(n))&&m.test(n)?n.replace(d,S):n},V.every=function(r,t,e){return u=r,o=pn(t=e?n:t),i=!0,Y(u,function(n,r,t){return i=!!o(n,r,t)}),i;var u,o,i},V.find=Bn,V.forEach=In,V.has=function(n,r){return null!=n&&q.call(n,r)},V.head=kn,V.identity=cr,V.indexOf=Fn,V.isArguments=Cn,V.isArray=Gn,V.isBoolean=function(n){return!0===n||!1===n||Hn(n)&&cn(n)==l},V.isDate=Mn,V.isEmpty=function(n){return Jn(n)&&(Gn(n)||Qn(n)||Un(n.splice)||Cn(n))?!n.length:!M(n).length},V.isEqual=function(n,r){return ln(n,r)},V.isFinite=function(n){return"number"==typeof n&&J(n)},V.isFunction=Un,V.isNaN=function(n){return Kn(n)&&n!=+n},V.isNull=function(n){return null===n},V.isNumber=Kn,V.isObject=Vn,V.isRegExp=Ln,V.isString=Qn,V.isUndefined=function(r){return r===n},V.last=function(r){var t=null==r?0:r.length;return t?r[t-1]:n},V.max=function(r){return r&&r.length?Z(r,cr,fn):n},V.min=function(r){return r&&r.length?Z(r,cr,sn):n},V.noConflict=function(){return A._===this&&(A._=z),this},V.noop=pr,V.reduce=Rn,V.result=function(r,t,e){var u=null==r?n:r[t];return u===n&&(u=e),Un(u)?u.call(r):u},V.size=function(n){return null==n?0:(n=Jn(n)?n:M(n)).length},V.some=function(r,t,e){return bn(r,pn(t=e?n:t))},V.uniqueId=function(n){var r=++D;return Yn(n)+r},V.each=In,V.first=kn,lr(V,(fr={},un(V,function(n,r){q.call(V.prototype,r)||(fr[r]=n)}),fr),{chain:!1}),V.VERSION="4.17.10",Y(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],function(n){var r=(/^(?:replace|split)$/.test(n)?String.prototype:R)[n],t=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);V.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return r.apply(Gn(u)?u:[],n)}return this[t](function(t){return r.apply(Gn(t)?t:[],n)})}}),V.prototype.toJSON=V.prototype.valueOf=V.prototype.value=function(){return n=this.__wrapped__,Rn(this.__actions__,function(n,r){return r.func.apply(r.thisArg,k([n],r.args))},n);var n},"function"==typeof define&&"object"==typeof define.amd&&define.amd?(A._=V,define(function(){return V})):N?((N.exports=V)._=V,E._=V):A._=V}).call(this);

	var DDS = {
		$el: $('#dds-stacks_in_26_2'),
		$dropdown: $('#dds-stacks_in_26_2 .dds-dropdown'),
		$list: $('#dds-stacks_in_26_2 .dds-dropdown li:not(.all)'),
		$grid: $('#dds-stacks_in_26_2 .dds-grid-item'),
		sortList: [],
		sort: function(){
			var that = this;
				this.$grid.removeClass('match')
				_.each(that.sortList, function(tag){
					$('#dds-stacks_in_26_2 .tag-'+tag).parents('.dds-grid-item').addClass('match')
				});
		},
		createTags: function(){
			var that = this;
			this.$grid.each(function(){
				var tags = '';
				$(this).data('cat').split(',').filter(function(tag){
					tag = tag.trim();
					tags += '<span class="tag tag-'+tag.replace(' ', '-').toLowerCase()+'" data-tag="'+tag+'"></span> ';
					$(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase()
					that.sortList.push(tag.replace(' ', '-').toLowerCase())
				});

				$(this).find('.dds-grid-item-inner')
				.append('<div class="tag-list">'+tags+'</div>')

			});
		},
		createTagColors: function(){
			var styles = ''
			this.$list.each(function(){
				var color = $(this).data('color')
				var style = '#dds-stacks_in_26_2 .tag.tag-'+$(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase()+' { background: '+color+'; }'
				styles += style+'\n'
			});
			styles = '<style>\n'+styles+'</style>'
			this.$el.prepend(styles)
		},
		initialize: function(){
			this.createTagColors();
			this.createTags();
		}
	}

	DDS.initialize();

	DDS.$dropdown.find('.dds-dropdown-selected').click(function(){
		DDS.$dropdown.toggleClass('closed');
	});

	DDS.$list.on('click',function(){
		if($(this).hasClass('on')){

			var tag = $(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase()
			DDS.sortList = DDS.sortList.filter(function(item){
				return item !== tag;
			})

			$(this).removeClass('on').addClass('off');

		} else {
			DDS.sortList.push($(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase())

			$(this).removeClass('off').addClass('on');
		}
		if(DDS.$dropdown.find('li.off').length < 1){
			DDS.$dropdown.find('li.all').addClass('on')
		} else {
			DDS.$dropdown.find('li.all').removeClass('on')
		}
		DDS.sort();
	});

	DDS.$dropdown.find('li.all').click(function(){
		if(!$(this).hasClass('on')){
			DDS.$dropdown.find('li:not(.all)').addClass('on').removeClass('off')
			DDS.$list.each(function(){
				DDS.sortList.push($(this).find('.dds-dropdown-text').text().replace(' ', '-').toLowerCase())
			});
			DDS.sort();
		} else {
			DDS.$dropdown.find('li:not(.all)').removeClass('on').addClass('off')
			DDS.sortList = [];
			DDS.sort();
		}
		$(this).toggleClass('on');

	})

	$(window).click(function() {
		if(!DDS.$dropdown.hasClass('closed')){
			DDS.$dropdown.addClass('closed');
		}
	});

	DDS.$dropdown.click(function(e){
		e.stopPropagation();
	});

// END DOCUMENT READY
});

    return stack;
})(stacks.stacks_in_26_2);


