var O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function D(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}function F(c){if(c.__esModule)return c;var m=c.default;if(typeof m=="function"){var h=function a(){return this instanceof a?Reflect.construct(m,arguments,this.constructor):m.apply(this,arguments)};h.prototype=m.prototype}else h={};return Object.defineProperty(h,"__esModule",{value:!0}),Object.keys(c).forEach(function(a){var w=Object.getOwnPropertyDescriptor(c,a);Object.defineProperty(h,a,w.get?w:{enumerable:!0,get:function(){return c[a]}})}),h}var W={exports:{}};function L(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var z={exports:{}};const $={},U=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),M=F(U);var j;function V(){return j||(j=1,function(c,m){(function(h,a){c.exports=a()})(O,function(){var h=h||function(a,w){var u;if(typeof window<"u"&&window.crypto&&(u=window.crypto),typeof self<"u"&&self.crypto&&(u=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(u=globalThis.crypto),!u&&typeof window<"u"&&window.msCrypto&&(u=window.msCrypto),!u&&typeof O<"u"&&O.crypto&&(u=O.crypto),!u&&typeof L=="function")try{u=M}catch{}var P=function(){if(u){if(typeof u.getRandomValues=="function")try{return u.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof u.randomBytes=="function")try{return u.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},x=Object.create||function(){function t(){}return function(r){var e;return t.prototype=r,e=new t,t.prototype=null,e}}(),S={},b=S.lib={},_=b.Base=function(){return{extend:function(t){var r=x(this);return t&&r.mixIn(t),(!r.hasOwnProperty("init")||this.init===r.init)&&(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),v=b.WordArray=_.extend({init:function(t,r){t=this.words=t||[],r!=w?this.sigBytes=r:this.sigBytes=t.length*4},toString:function(t){return(t||y).stringify(this)},concat:function(t){var r=this.words,e=t.words,o=this.sigBytes,s=t.sigBytes;if(this.clamp(),o%4)for(var f=0;f<s;f++){var l=e[f>>>2]>>>24-f%4*8&255;r[o+f>>>2]|=l<<24-(o+f)%4*8}else for(var d=0;d<s;d+=4)r[o+d>>>2]=e[d>>>2];return this.sigBytes+=s,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=a.ceil(r/4)},clone:function(){var t=_.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var r=[],e=0;e<t;e+=4)r.push(P());return new v.init(r,t)}}),C=S.enc={},y=C.Hex={stringify:function(t){for(var r=t.words,e=t.sigBytes,o=[],s=0;s<e;s++){var f=r[s>>>2]>>>24-s%4*8&255;o.push((f>>>4).toString(16)),o.push((f&15).toString(16))}return o.join("")},parse:function(t){for(var r=t.length,e=[],o=0;o<r;o+=2)e[o>>>3]|=parseInt(t.substr(o,2),16)<<24-o%8*4;return new v.init(e,r/2)}},g=C.Latin1={stringify:function(t){for(var r=t.words,e=t.sigBytes,o=[],s=0;s<e;s++){var f=r[s>>>2]>>>24-s%4*8&255;o.push(String.fromCharCode(f))}return o.join("")},parse:function(t){for(var r=t.length,e=[],o=0;o<r;o++)e[o>>>2]|=(t.charCodeAt(o)&255)<<24-o%4*8;return new v.init(e,r)}},n=C.Utf8={stringify:function(t){try{return decodeURIComponent(escape(g.stringify(t)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(t){return g.parse(unescape(encodeURIComponent(t)))}},i=b.BufferedBlockAlgorithm=_.extend({reset:function(){this._data=new v.init,this._nDataBytes=0},_append:function(t){typeof t=="string"&&(t=n.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var r,e=this._data,o=e.words,s=e.sigBytes,f=this.blockSize,l=f*4,d=s/l;t?d=a.ceil(d):d=a.max((d|0)-this._minBufferSize,0);var H=d*f,B=a.min(H*4,s);if(H){for(var R=0;R<H;R+=f)this._doProcessBlock(o,R);r=o.splice(0,H),e.sigBytes-=B}return new v.init(r,B)},clone:function(){var t=_.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});b.Hasher=i.extend({cfg:_.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){i.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var r=this._doFinalize();return r},blockSize:16,_createHelper:function(t){return function(r,e){return new t.init(e).finalize(r)}},_createHmacHelper:function(t){return function(r,e){return new p.HMAC.init(t,e).finalize(r)}}});var p=S.algo={};return S}(Math);return h})}(z)),z.exports}(function(c,m){(function(h,a){c.exports=a(V())})(O,function(h){return function(a){var w=h,u=w.lib,P=u.WordArray,x=u.Hasher,S=w.algo,b=[],_=[];(function(){function y(p){for(var t=a.sqrt(p),r=2;r<=t;r++)if(!(p%r))return!1;return!0}function g(p){return(p-(p|0))*4294967296|0}for(var n=2,i=0;i<64;)y(n)&&(i<8&&(b[i]=g(a.pow(n,1/2))),_[i]=g(a.pow(n,1/3)),i++),n++})();var v=[],C=S.SHA256=x.extend({_doReset:function(){this._hash=new P.init(b.slice(0))},_doProcessBlock:function(y,g){for(var n=this._hash.words,i=n[0],p=n[1],t=n[2],r=n[3],e=n[4],o=n[5],s=n[6],f=n[7],l=0;l<64;l++){if(l<16)v[l]=y[g+l]|0;else{var d=v[l-15],H=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,B=v[l-2],R=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;v[l]=H+v[l-7]+R+v[l-16]}var q=e&o^~e&s,k=i&p^i&t^p&t,E=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),T=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25),A=f+T+q+_[l]+v[l],I=E+k;f=s,s=o,o=e,e=r+A|0,r=t,t=p,p=i,i=A+I|0}n[0]=n[0]+i|0,n[1]=n[1]+p|0,n[2]=n[2]+t|0,n[3]=n[3]+r|0,n[4]=n[4]+e|0,n[5]=n[5]+o|0,n[6]=n[6]+s|0,n[7]=n[7]+f|0},_doFinalize:function(){var y=this._data,g=y.words,n=this._nDataBytes*8,i=y.sigBytes*8;return g[i>>>5]|=128<<24-i%32,g[(i+64>>>9<<4)+14]=a.floor(n/4294967296),g[(i+64>>>9<<4)+15]=n,y.sigBytes=g.length*4,this._process(),this._hash},clone:function(){var y=x.clone.call(this);return y._hash=this._hash.clone(),y}});w.SHA256=x._createHelper(C),w.HmacSHA256=x._createHmacHelper(C)}(Math),h.SHA256})})(W);var G=W.exports;const K=D(G);export{O as c,D as g,K as s};
