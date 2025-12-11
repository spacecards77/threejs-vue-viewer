(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function _c(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},hr=[],Dn=()=>{},Hu=()=>!1,la=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vc=n=>n.startsWith("onUpdate:"),It=Object.assign,Ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ld=Object.prototype.hasOwnProperty,et=(n,e)=>Ld.call(n,e),Xe=Array.isArray,Gr=n=>ua(n)==="[object Map]",Ud=n=>ua(n)==="[object Set]",We=n=>typeof n=="function",Et=n=>typeof n=="string",Tr=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",ku=n=>(At(n)||We(n))&&We(n.then)&&We(n.catch),Id=Object.prototype.toString,ua=n=>Id.call(n),Fd=n=>ua(n).slice(8,-1),Nd=n=>ua(n)==="[object Object]",Sc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hr=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Od=/-\w/g,Ai=fa(n=>n.replace(Od,e=>e.slice(1).toUpperCase())),Bd=/\B([A-Z])/g,Xi=fa(n=>n.replace(Bd,"-$1").toLowerCase()),Wu=fa(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=fa(n=>n?`on${Wu(n)}`:""),gi=(n,e)=>!Object.is(n,e),Ea=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},zd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let fl;const da=()=>fl||(fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mc(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?kd(i):Mc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||At(n))return n}const Vd=/;(?![^(]*\))/g,Gd=/:([^]+)/,Hd=/\/\*[^]*?\*\//g;function kd(n){const e={};return n.replace(Hd,"").split(Vd).forEach(t=>{if(t){const i=t.split(Gd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ha(n){let e="";if(Et(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=ha(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Wd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xd=_c(Wd);function Yu(n){return!!n||n===""}let Xt;class Yd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){++this._on===1&&(this.prevScope=Xt,Xt=this)}off(){this._on>0&&--this._on===0&&(Xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function qd(){return Xt}let ct;const Ta=new WeakSet;class qu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ju(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dl(this),Zu(this);const e=ct,t=vn;ct=this,vn=!0;try{return this.fn()}finally{Qu(this),ct=e,vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,dl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){po(this)&&this.run()}get dirty(){return po(this)}}let Ku=0,kr,Wr;function ju(n,e=!1){if(n.flags|=8,e){n.next=Wr,Wr=n;return}n.next=kr,kr=n}function bc(){Ku++}function yc(){if(--Ku>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;kr;){let e=kr;for(kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Zu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ec(i),Kd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function po(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ju(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ju(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qr)||(n.globalVersion=Qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!po(n))))return;n.flags|=2;const e=n.dep,t=ct,i=vn;ct=n,vn=!0;try{Zu(n);const r=n.fn(n._value);(e.version===0||gi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=t,vn=i,Qu(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ec(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Kd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let vn=!0;const $u=[];function Jn(){$u.push(vn),vn=!1}function $n(){const n=$u.pop();vn=n===void 0?!0:n}function dl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let Qr=0;class jd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ct||!vn||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new jd(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,ef(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=i)}return t}trigger(e){this.version++,Qr++,this.notify(e)}notify(e){bc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{yc()}}}function ef(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ef(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const mo=new WeakMap,Gi=Symbol(""),xo=Symbol(""),Jr=Symbol("");function Lt(n,e,t){if(vn&&ct){let i=mo.get(n);i||mo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tc),r.map=i,r.key=t),r.track()}}function Xn(n,e,t,i,r,s){const a=mo.get(n);if(!a){Qr++;return}const o=c=>{c&&c.trigger()};if(bc(),e==="clear")a.forEach(o);else{const c=Xe(n),l=c&&Sc(t);if(c&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Jr||!Tr(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),l&&o(a.get(Jr)),e){case"add":c?l&&o(a.get("length")):(o(a.get(Gi)),Gr(n)&&o(a.get(xo)));break;case"delete":c||(o(a.get(Gi)),Gr(n)&&o(a.get(xo)));break;case"set":Gr(n)&&o(a.get(Gi));break}}yc()}function qi(n){const e=$e(n);return e===n?e:(Lt(e,"iterate",Jr),An(n)?e:e.map(ei))}function wc(n){return Lt(n=$e(n),"iterate",Jr),n}function ui(n,e){return Si(n)?pr(n)?$r(ei(e)):$r(e):ei(e)}const Zd={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,n=>ui(this,n))},concat(...n){return qi(this).concat(...n.map(e=>Xe(e)?qi(e):e))},entries(){return wa(this,"entries",n=>(n[1]=ui(this,n[1]),n))},every(n,e){return Fn(this,"every",n,e,void 0,arguments)},filter(n,e){return Fn(this,"filter",n,e,t=>t.map(i=>ui(this,i)),arguments)},find(n,e){return Fn(this,"find",n,e,t=>ui(this,t),arguments)},findIndex(n,e){return Fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fn(this,"findLast",n,e,t=>ui(this,t),arguments)},findLastIndex(n,e){return Fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ca(this,"includes",n)},indexOf(...n){return Ca(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return Ca(this,"lastIndexOf",n)},map(n,e){return Fn(this,"map",n,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...n){return Lr(this,"push",n)},reduce(n,...e){return hl(this,"reduce",n,e)},reduceRight(n,...e){return hl(this,"reduceRight",n,e)},shift(){return Lr(this,"shift")},some(n,e){return Fn(this,"some",n,e,void 0,arguments)},splice(...n){return Lr(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return Lr(this,"unshift",n)},values(){return wa(this,"values",n=>ui(this,n))}};function wa(n,e,t){const i=wc(n),r=i[e]();return i!==n&&!An(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Qd=Array.prototype;function Fn(n,e,t,i,r,s){const a=wc(n),o=a!==n&&!An(n),c=a[e];if(c!==Qd[e]){const f=c.apply(n,s);return o?ei(f):f}let l=t;a!==n&&(o?l=function(f,d){return t.call(this,ui(n,f),d,n)}:t.length>2&&(l=function(f,d){return t.call(this,f,d,n)}));const u=c.call(a,l,i);return o&&r?r(u):u}function hl(n,e,t,i){const r=wc(n);let s=t;return r!==n&&(An(n)?t.length>3&&(s=function(a,o,c){return t.call(this,a,o,c,n)}):s=function(a,o,c){return t.call(this,a,ui(n,o),c,n)}),r[e](s,...i)}function Ca(n,e,t){const i=$e(n);Lt(i,"iterate",Jr);const r=i[e](...t);return(r===-1||r===!1)&&Dc(t[0])?(t[0]=$e(t[0]),i[e](...t)):r}function Lr(n,e,t=[]){Jn(),bc();const i=$e(n)[e].apply(n,t);return yc(),$n(),i}const Jd=_c("__proto__,__v_isRef,__isVue"),tf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Tr));function $d(n){Tr(n)||(n=String(n));const e=$e(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class nf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?lh:of:s?af:sf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Xe(e);if(!r){let c;if(a&&(c=Zd[t]))return c;if(t==="hasOwnProperty")return $d}const o=Reflect.get(e,t,Ut(e)?e:i);if((Tr(t)?tf.has(t):Jd(t))||(r||Lt(e,"get",t),s))return o;if(Ut(o)){const c=a&&Sc(t)?o:o.value;return r&&At(c)?_o(c):c}return At(o)?r?_o(o):Rc(o):o}}class rf extends nf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Xe(e)&&Sc(t);if(!this._isShallow){const l=Si(s);if(!An(i)&&!Si(i)&&(s=$e(s),i=$e(i)),!a&&Ut(s)&&!Ut(i))return l||(s.value=i),!0}const o=a?Number(t)<e.length:et(e,t),c=Reflect.set(e,t,i,Ut(e)?e:r);return e===$e(r)&&(o?gi(i,s)&&Xn(e,"set",t,i):Xn(e,"add",t,i)),c}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Tr(t)||!tf.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Xe(e)?"length":Gi),Reflect.ownKeys(e)}}class eh extends nf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const th=new rf,nh=new eh,ih=new rf(!0);const go=n=>n,ms=n=>Reflect.getPrototypeOf(n);function rh(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),a=Gr(s),o=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,l=r[n](...i),u=t?go:e?$r:ei;return!e&&Lt(s,"iterate",c?xo:Gi),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function xs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sh(n,e){const t={get(r){const s=this.__v_raw,a=$e(s),o=$e(r);n||(gi(r,o)&&Lt(a,"get",r),Lt(a,"get",o));const{has:c}=ms(a),l=e?go:n?$r:ei;if(c.call(a,r))return l(s.get(r));if(c.call(a,o))return l(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt($e(r),"iterate",Gi),r.size},has(r){const s=this.__v_raw,a=$e(s),o=$e(r);return n||(gi(r,o)&&Lt(a,"has",r),Lt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,c=$e(o),l=e?go:n?$r:ei;return!n&&Lt(c,"iterate",Gi),o.forEach((u,f)=>r.call(s,l(u),l(f),a))}};return It(t,n?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(r){!e&&!An(r)&&!Si(r)&&(r=$e(r));const s=$e(this);return ms(s).has.call(s,r)||(s.add(r),Xn(s,"add",r,r)),this},set(r,s){!e&&!An(s)&&!Si(s)&&(s=$e(s));const a=$e(this),{has:o,get:c}=ms(a);let l=o.call(a,r);l||(r=$e(r),l=o.call(a,r));const u=c.call(a,r);return a.set(r,s),l?gi(s,u)&&Xn(a,"set",r,s):Xn(a,"add",r,s),this},delete(r){const s=$e(this),{has:a,get:o}=ms(s);let c=a.call(s,r);c||(r=$e(r),c=a.call(s,r)),o&&o.call(s,r);const l=s.delete(r);return c&&Xn(s,"delete",r,void 0),l},clear(){const r=$e(this),s=r.size!==0,a=r.clear();return s&&Xn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=rh(r,n,e)}),t}function Cc(n,e){const t=sh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const ah={get:Cc(!1,!1)},oh={get:Cc(!1,!0)},ch={get:Cc(!0,!1)};const sf=new WeakMap,af=new WeakMap,of=new WeakMap,lh=new WeakMap;function uh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fh(n){return n.__v_skip||!Object.isExtensible(n)?0:uh(Fd(n))}function Rc(n){return Si(n)?n:Pc(n,!1,th,ah,sf)}function dh(n){return Pc(n,!1,ih,oh,af)}function _o(n){return Pc(n,!0,nh,ch,of)}function Pc(n,e,t,i,r){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=fh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function pr(n){return Si(n)?pr(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function Dc(n){return n?!!n.__v_raw:!1}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function hh(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&Xu(n,"__v_skip",!0),n}const ei=n=>At(n)?Rc(n):n,$r=n=>At(n)?_o(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function vo(n){return ph(n,!1)}function ph(n,e){return Ut(n)?n:new mh(n,e)}class mh{constructor(e,t){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:$e(e),this._value=t?e:ei(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||Si(e);e=i?e:$e(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:ei(e),this.dep.trigger())}}function Ct(n){return Ut(n)?n.value:n}const xh={get:(n,e,t)=>e==="__v_raw"?n:Ct(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function cf(n){return pr(n)?n:new Proxy(n,xh)}class gh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return ju(this,!0),!0}get value(){const e=this.dep.track();return Ju(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _h(n,e,t=!1){let i,r;return We(n)?i=n:(i=n.get,r=n.set),new gh(i,r,t)}const gs={},Js=new WeakMap;let Ni;function vh(n,e=!1,t=Ni){if(t){let i=Js.get(t);i||Js.set(t,i=[]),i.push(n)}}function Ah(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:c}=t,l=y=>r?y:An(y)||r===!1||r===0?hi(y,1):hi(y);let u,f,d,p,g=!1,_=!1;if(Ut(n)?(f=()=>n.value,g=An(n)):pr(n)?(f=()=>l(n),g=!0):Xe(n)?(_=!0,g=n.some(y=>pr(y)||An(y)),f=()=>n.map(y=>{if(Ut(y))return y.value;if(pr(y))return l(y);if(We(y))return c?c(y,2):y()})):We(n)?e?f=c?()=>c(n,2):n:f=()=>{if(d){Jn();try{d()}finally{$n()}}const y=Ni;Ni=u;try{return c?c(n,3,[p]):n(p)}finally{Ni=y}}:f=Dn,e&&r){const y=f,P=r===!0?1/0:r;f=()=>hi(y(),P)}const m=qd(),h=()=>{u.stop(),m&&m.active&&Ac(m.effects,u)};if(s&&e){const y=e;e=(...P)=>{y(...P),h()}}let w=_?new Array(n.length).fill(gs):gs;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const P=u.run();if(r||g||(_?P.some((T,D)=>gi(T,w[D])):gi(P,w))){d&&d();const T=Ni;Ni=u;try{const D=[P,w===gs?void 0:_&&w[0]===gs?[]:w,p];w=P,c?c(e,3,D):e(...D)}finally{Ni=T}}}else u.run()};return o&&o(E),u=new qu(f),u.scheduler=a?()=>a(E,!1):E,p=y=>vh(y,!1,u),d=u.onStop=()=>{const y=Js.get(u);if(y){if(c)c(y,4);else for(const P of y)P();Js.delete(u)}},e?i?E(!0):w=u.run():a?a(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function hi(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))hi(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)hi(n[i],e,t);else if(Ud(n)||Gr(n))n.forEach(i=>{hi(i,e,t)});else if(Nd(n)){for(const i in n)hi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],e,t)}return n}function ls(n,e,t,i){try{return i?n(...i):n()}catch(r){pa(r,e,t)}}function Ln(n,e,t,i){if(We(n)){const r=ls(n,e,t,i);return r&&ku(r)&&r.catch(s=>{pa(s,e,t)}),r}if(Xe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Ln(n[s],e,t,i));return r}}function pa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||lt;if(e){let o=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,c,l)===!1)return}o=o.parent}if(s){Jn(),ls(s,null,10,[n,c,l]),$n();return}}Sh(n,t,r,i,a)}function Sh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Vt=[];let Tn=-1;const mr=[];let fi=null,fr=0;const lf=Promise.resolve();let $s=null;function Mh(n){const e=$s||lf;return n?e.then(this?n.bind(this):n):e}function bh(n){let e=Tn+1,t=Vt.length;for(;e<t;){const i=e+t>>>1,r=Vt[i],s=es(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Lc(n){if(!(n.flags&1)){const e=es(n),t=Vt[Vt.length-1];!t||!(n.flags&2)&&e>=es(t)?Vt.push(n):Vt.splice(bh(e),0,n),n.flags|=1,uf()}}function uf(){$s||($s=lf.then(df))}function yh(n){Xe(n)?mr.push(...n):fi&&n.id===-1?fi.splice(fr+1,0,n):n.flags&1||(mr.push(n),n.flags|=1),uf()}function pl(n,e,t=Tn+1){for(;t<Vt.length;t++){const i=Vt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ff(n){if(mr.length){const e=[...new Set(mr)].sort((t,i)=>es(t)-es(i));if(mr.length=0,fi){fi.push(...e);return}for(fi=e,fr=0;fr<fi.length;fr++){const t=fi[fr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}fi=null,fr=0}}const es=n=>n.id==null?n.flags&2?-1:1/0:n.id;function df(n){try{for(Tn=0;Tn<Vt.length;Tn++){const e=Vt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ls(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Vt.length;Tn++){const e=Vt[Tn];e&&(e.flags&=-2)}Tn=-1,Vt.length=0,ff(),$s=null,(Vt.length||mr.length)&&df()}}let Rn=null,hf=null;function ea(n){const e=Rn;return Rn=n,hf=n&&n.type.__scopeId||null,e}function Eh(n,e=Rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&yl(-1);const s=ea(e);let a;try{a=n(...r)}finally{ea(s),i._d&&yl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function wi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let c=o.dir[i];c&&(Jn(),Ln(c,t,8,[n.el,o,n,e]),$n())}}const Th=Symbol("_vte"),wh=n=>n.__isTeleport,Ch=Symbol("_leaveCb");function Uc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Uc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function pf(n,e){return We(n)?It({name:n.name},e,{setup:n}):n}function mf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ta=new WeakMap;function Xr(n,e,t,i,r=!1){if(Xe(n)){n.forEach((g,_)=>Xr(g,e&&(Xe(e)?e[_]:e),t,i,r));return}if(Yr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Bc(i.component):i.el,a=r?null:s,{i:o,r:c}=n,l=e&&e.r,u=o.refs===lt?o.refs={}:o.refs,f=o.setupState,d=$e(f),p=f===lt?Hu:g=>et(d,g);if(l!=null&&l!==c){if(ml(e),Et(l))u[l]=null,p(l)&&(f[l]=null);else if(Ut(l)){l.value=null;const g=e;g.k&&(u[g.k]=null)}}if(We(c))ls(c,o,12,[a,u]);else{const g=Et(c),_=Ut(c);if(g||_){const m=()=>{if(n.f){const h=g?p(c)?f[c]:u[c]:c.value;if(r)Xe(h)&&Ac(h,s);else if(Xe(h))h.includes(s)||h.push(s);else if(g)u[c]=[s],p(c)&&(f[c]=u[c]);else{const w=[s];c.value=w,n.k&&(u[n.k]=w)}}else g?(u[c]=a,p(c)&&(f[c]=a)):_&&(c.value=a,n.k&&(u[n.k]=a))};if(a){const h=()=>{m(),ta.delete(n)};h.id=-1,ta.set(n,h),en(h,t)}else ml(n),m()}}}function ml(n){const e=ta.get(n);e&&(e.flags|=8,ta.delete(n))}da().requestIdleCallback;da().cancelIdleCallback;const Yr=n=>!!n.type.__asyncLoader,xf=n=>n.type.__isKeepAlive;function Rh(n,e){gf(n,"a",e)}function Ph(n,e){gf(n,"da",e)}function gf(n,e,t=Gt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ma(e,i,t),t){let r=t.parent;for(;r&&r.parent;)xf(r.parent.vnode)&&Dh(i,e,t,r),r=r.parent}}function Dh(n,e,t,i){const r=ma(e,n,i,!0);Ic(()=>{Ac(i[e],r)},t)}function ma(n,e,t=Gt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Jn();const o=us(t),c=Ln(e,t,n,a);return o(),$n(),c});return i?r.unshift(s):r.push(s),s}}const ii=n=>(e,t=Gt)=>{(!ns||n==="sp")&&ma(n,(...i)=>e(...i),t)},Lh=ii("bm"),_f=ii("m"),Uh=ii("bu"),Ih=ii("u"),Fh=ii("bum"),Ic=ii("um"),Nh=ii("sp"),Oh=ii("rtg"),Bh=ii("rtc");function zh(n,e=Gt){ma("ec",n,e)}const Vh=Symbol.for("v-ndc"),Ao=n=>n?Vf(n)?Bc(n):Ao(n.parent):null,qr=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ao(n.parent),$root:n=>Ao(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Af(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=Mh.bind(n.proxy)),$watch:n=>Jh.bind(n)}),Ra=(n,e)=>n!==lt&&!n.__isScriptSetup&&et(n,e),Gh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:c}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ra(i,e))return a[e]=1,i[e];if(r!==lt&&et(r,e))return a[e]=2,r[e];if(et(s,e))return a[e]=3,s[e];if(t!==lt&&et(t,e))return a[e]=4,t[e];So&&(a[e]=0)}}const l=qr[e];let u,f;if(l)return e==="$attrs"&&Lt(n.attrs,"get",""),l(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==lt&&et(t,e))return a[e]=4,t[e];if(f=c.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ra(r,e)?(r[e]=t,!0):i!==lt&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let c;return!!(t[o]||n!==lt&&o[0]!=="$"&&et(n,o)||Ra(e,o)||et(s,o)||et(i,o)||et(qr,o)||et(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xl(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let So=!0;function Hh(n){const e=Af(n),t=n.proxy,i=n.ctx;So=!1,e.beforeCreate&&gl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:E,unmounted:y,render:P,renderTracked:T,renderTriggered:D,errorCaptured:V,serverPrefetch:b,expose:S,inheritAttrs:F,components:B,directives:q,filters:ee}=e;if(l&&kh(l,i,null),a)for(const ne in a){const k=a[ne];We(k)&&(i[ne]=k.bind(t))}if(r){const ne=r.call(t,t);At(ne)&&(n.data=Rc(ne))}if(So=!0,s)for(const ne in s){const k=s[ne],fe=We(k)?k.bind(t,t):We(k.get)?k.get.bind(t,t):Dn,pe=!We(k)&&We(k.set)?k.set.bind(t):Dn,Pe=Lp({get:fe,set:pe});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:Oe=>Pe.value=Oe})}if(o)for(const ne in o)vf(o[ne],i,t,ne);if(c){const ne=We(c)?c.call(t):c;Reflect.ownKeys(ne).forEach(k=>{jh(k,ne[k])})}u&&gl(u,n,"c");function J(ne,k){Xe(k)?k.forEach(fe=>ne(fe.bind(t))):k&&ne(k.bind(t))}if(J(Lh,f),J(_f,d),J(Uh,p),J(Ih,g),J(Rh,_),J(Ph,m),J(zh,V),J(Bh,T),J(Oh,D),J(Fh,w),J(Ic,y),J(Nh,b),Xe(S))if(S.length){const ne=n.exposed||(n.exposed={});S.forEach(k=>{Object.defineProperty(ne,k,{get:()=>t[k],set:fe=>t[k]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Dn&&(n.render=P),F!=null&&(n.inheritAttrs=F),B&&(n.components=B),q&&(n.directives=q),b&&mf(n)}function kh(n,e,t=Dn){Xe(n)&&(n=Mo(n));for(const i in n){const r=n[i];let s;At(r)?"default"in r?s=Ws(r.from||i,r.default,!0):s=Ws(r.from||i):s=Ws(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function gl(n,e,t){Ln(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vf(n,e,t,i){let r=i.includes(".")?bf(t,i):()=>t[i];if(Et(n)){const s=e[n];We(s)&&Pa(r,s)}else if(We(n))Pa(r,n.bind(t));else if(At(n))if(Xe(n))n.forEach(s=>vf(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&Pa(r,s,n)}}function Af(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let c;return o?c=o:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>na(c,l,a,!0)),na(c,e,a)),At(e)&&s.set(e,c),c}function na(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&na(n,s,t,!0),r&&r.forEach(a=>na(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Wh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Wh={data:_l,props:vl,emits:vl,methods:zr,computed:zr,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:zr,directives:zr,watch:Yh,provide:_l,inject:Xh};function _l(n,e){return e?n?function(){return It(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Xh(n,e){return zr(Mo(n),Mo(e))}function Mo(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function zr(n,e){return n?It(Object.create(null),n,e):e}function vl(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:It(Object.create(null),xl(n),xl(e??{})):e}function Yh(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Sf(){return{app:null,config:{isNativeTag:Hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qh=0;function Kh(n,e){return function(i,r=null){We(i)||(i=It({},i)),r!=null&&!At(r)&&(r=null);const s=Sf(),a=new WeakSet,o=[];let c=!1;const l=s.app={_uid:qh++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Up,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(l,...f)):We(u)&&(a.add(u),u(l,...f))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,f){return f?(s.components[u]=f,l):s.components[u]},directive(u,f){return f?(s.directives[u]=f,l):s.directives[u]},mount(u,f,d){if(!c){const p=l._ceVNode||_i(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),c=!0,l._container=u,u.__vue_app__=l,Bc(p.component)}},onUnmount(u){o.push(u)},unmount(){c&&(Ln(o,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,f){return s.provides[u]=f,l},runWithContext(u){const f=xr;xr=l;try{return u()}finally{xr=f}}};return l}}let xr=null;function jh(n,e){if(Gt){let t=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===t&&(t=Gt.provides=Object.create(i)),t[n]=e}}function Ws(n,e,t=!1){const i=Tp();if(i||xr){let r=xr?xr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const Zh=Symbol.for("v-scx"),Qh=()=>Ws(Zh);function Pa(n,e,t){return Mf(n,e,t)}function Mf(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:a}=t,o=It({},t),c=e&&i||!e&&s!=="post";let l;if(ns){if(s==="sync"){const p=Qh();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=Dn,p.resume=Dn,p.pause=Dn,p}}const u=Gt;o.call=(p,g,_)=>Ln(p,u,g,_);let f=!1;s==="post"?o.scheduler=p=>{en(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,g)=>{g?p():Lc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Ah(n,e,o);return ns&&(l?l.push(d):c&&d()),d}function Jh(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?bf(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const a=us(this),o=Mf(r,s.bind(i),t);return a(),o}function bf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const $h=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ai(e)}Modifiers`]||n[`${Xi(e)}Modifiers`];function ep(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),a=s&&$h(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Et(u)?u.trim():u)),a.number&&(r=t.map(zd)));let o,c=i[o=ya(e)]||i[o=ya(Ai(e))];!c&&s&&(c=i[o=ya(Xi(e))]),c&&Ln(c,n,6,r);const l=i[o+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Ln(l,n,6,r)}}const tp=new WeakMap;function yf(n,e,t=!1){const i=t?tp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!We(n)){const c=l=>{const u=yf(l,e,!0);u&&(o=!0,It(a,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!o?(At(n)&&i.set(n,null),null):(Xe(s)?s.forEach(c=>a[c]=null):It(a,s),At(n)&&i.set(n,a),a)}function xa(n,e){return!n||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Xi(e))||et(n,e))}function Al(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:c,render:l,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=n,m=ea(n);let h,w;try{if(t.shapeFlag&4){const y=r||i,P=y;h=wn(l.call(P,y,u,f,p,d,g)),w=o}else{const y=e;h=wn(y.length>1?y(f,{attrs:o,slots:a,emit:c}):y(f,null)),w=e.props?o:np(o)}}catch(y){Kr.length=0,pa(y,n,1),h=_i(vr)}let E=h;if(w&&_!==!1){const y=Object.keys(w),{shapeFlag:P}=E;y.length&&P&7&&(s&&y.some(vc)&&(w=ip(w,s)),E=Ar(E,w,!1,!0))}return t.dirs&&(E=Ar(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Uc(E,t.transition),h=E,ea(m),h}const np=n=>{let e;for(const t in n)(t==="class"||t==="style"||la(t))&&((e||(e={}))[t]=n[t]);return e},ip=(n,e)=>{const t={};for(const i in n)(!vc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Sl(i,a,l):!!a;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!xa(l,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Sl(i,a,l):!0:!!a;return!1}function Sl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!xa(t,s))return!0}return!1}function sp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ef={},Tf=()=>Object.create(Ef),wf=n=>Object.getPrototypeOf(n)===Ef;function ap(n,e,t,i=!1){const r={},s=Tf();n.propsDefaults=Object.create(null),Cf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:dh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function op(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$e(r),[c]=n.propsOptions;let l=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(xa(n.emitsOptions,d))continue;const p=e[d];if(c)if(et(s,d))p!==s[d]&&(s[d]=p,l=!0);else{const g=Ai(d);r[g]=bo(c,o,g,p,n,!1)}else p!==s[d]&&(s[d]=p,l=!0)}}}else{Cf(n,e,r,s)&&(l=!0);let u;for(const f in o)(!e||!et(e,f)&&((u=Xi(f))===f||!et(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=bo(c,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!et(e,f))&&(delete s[f],l=!0)}l&&Xn(n.attrs,"set","")}function Cf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let c in e){if(Hr(c))continue;const l=e[c];let u;r&&et(r,u=Ai(c))?!s||!s.includes(u)?t[u]=l:(o||(o={}))[u]=l:xa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,a=!0)}if(s){const c=$e(t),l=o||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=bo(r,c,f,l[f],n,!et(l,f))}}return a}function bo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&We(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=us(r);i=l[t]=c.call(null,e),u()}}else i=c;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Xi(t))&&(i=!0))}return i}const cp=new WeakMap;function Rf(n,e,t=!1){const i=t?cp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let c=!1;if(!We(n)){const u=f=>{c=!0;const[d,p]=Rf(f,e,!0);It(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return At(n)&&i.set(n,hr),hr;if(Xe(s))for(let u=0;u<s.length;u++){const f=Ai(s[u]);Ml(f)&&(a[f]=lt)}else if(s)for(const u in s){const f=Ai(u);if(Ml(f)){const d=s[u],p=a[f]=Xe(d)||We(d)?{type:d}:It({},d),g=p.type;let _=!1,m=!0;if(Xe(g))for(let h=0;h<g.length;++h){const w=g[h],E=We(w)&&w.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=We(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||et(p,"default"))&&o.push(f)}}const l=[a,o];return At(n)&&i.set(n,l),l}function Ml(n){return n[0]!=="$"&&!Hr(n)}const Fc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>Xe(n)?n.map(wn):[wn(n)],lp=(n,e,t)=>{if(e._n)return e;const i=Eh((...r)=>Nc(e(...r)),t);return i._c=!1,i},Pf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fc(r))continue;const s=n[r];if(We(s))e[r]=lp(r,s,i);else if(s!=null){const a=Nc(s);e[r]=()=>a}}},Df=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},Lf=(n,e,t)=>{for(const i in e)(t||!Fc(i))&&(n[i]=e[i])},up=(n,e,t)=>{const i=n.slots=Tf();if(n.vnode.shapeFlag&32){const r=e._;r?(Lf(i,e,t),t&&Xu(i,"_",r,!0)):Pf(e,i)}else e&&Df(n,e)},fp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=lt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Lf(r,e,t):(s=!e.$stable,Pf(e,r)),a=e}else e&&(Df(n,e),a={default:1});if(s)for(const o in r)!Fc(o)&&a[o]==null&&delete r[o]},en=xp;function dp(n){return hp(n)}function hp(n,e){const t=da();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Dn,insertStaticContent:g}=n,_=(C,R,G,M=null,j=null,Z=null,oe=void 0,Y=null,se=!!R.dynamicChildren)=>{if(C===R)return;C&&!Ur(C,R)&&(M=re(C),Oe(C,j,Z,!0),C=null),R.patchFlag===-2&&(se=!1,R.dynamicChildren=null);const{type:H,ref:ce,shapeFlag:v}=R;switch(H){case ga:m(C,R,G,M);break;case vr:h(C,R,G,M);break;case La:C==null&&w(R,G,M,oe);break;case Wn:B(C,R,G,M,j,Z,oe,Y,se);break;default:v&1?P(C,R,G,M,j,Z,oe,Y,se):v&6?q(C,R,G,M,j,Z,oe,Y,se):(v&64||v&128)&&H.process(C,R,G,M,j,Z,oe,Y,se,De)}ce!=null&&j?Xr(ce,C&&C.ref,Z,R||C,!R):ce==null&&C&&C.ref!=null&&Xr(C.ref,null,Z,C,!0)},m=(C,R,G,M)=>{if(C==null)i(R.el=o(R.children),G,M);else{const j=R.el=C.el;R.children!==C.children&&l(j,R.children)}},h=(C,R,G,M)=>{C==null?i(R.el=c(R.children||""),G,M):R.el=C.el},w=(C,R,G,M)=>{[C.el,C.anchor]=g(C.children,R,G,M,C.el,C.anchor)},E=({el:C,anchor:R},G,M)=>{let j;for(;C&&C!==R;)j=d(C),i(C,G,M),C=j;i(R,G,M)},y=({el:C,anchor:R})=>{let G;for(;C&&C!==R;)G=d(C),r(C),C=G;r(R)},P=(C,R,G,M,j,Z,oe,Y,se)=>{if(R.type==="svg"?oe="svg":R.type==="math"&&(oe="mathml"),C==null)T(R,G,M,j,Z,oe,Y,se);else{const H=C.el&&C.el._isVueCE?C.el:null;try{H&&H._beginPatch(),b(C,R,j,Z,oe,Y,se)}finally{H&&H._endPatch()}}},T=(C,R,G,M,j,Z,oe,Y)=>{let se,H;const{props:ce,shapeFlag:v,transition:x,dirs:I}=C;if(se=C.el=a(C.type,Z,ce&&ce.is,ce),v&8?u(se,C.children):v&16&&V(C.children,se,null,M,j,Da(C,Z),oe,Y),I&&wi(C,null,M,"created"),D(se,C,C.scopeId,oe,M),ce){for(const Q in ce)Q!=="value"&&!Hr(Q)&&s(se,Q,null,ce[Q],Z,M);"value"in ce&&s(se,"value",null,ce.value,Z),(H=ce.onVnodeBeforeMount)&&bn(H,M,C)}I&&wi(C,null,M,"beforeMount");const W=pp(j,x);W&&x.beforeEnter(se),i(se,R,G),((H=ce&&ce.onVnodeMounted)||W||I)&&en(()=>{H&&bn(H,M,C),W&&x.enter(se),I&&wi(C,null,M,"mounted")},j)},D=(C,R,G,M,j)=>{if(G&&p(C,G),M)for(let Z=0;Z<M.length;Z++)p(C,M[Z]);if(j){let Z=j.subTree;if(R===Z||Ff(Z.type)&&(Z.ssContent===R||Z.ssFallback===R)){const oe=j.vnode;D(C,oe,oe.scopeId,oe.slotScopeIds,j.parent)}}},V=(C,R,G,M,j,Z,oe,Y,se=0)=>{for(let H=se;H<C.length;H++){const ce=C[H]=Y?di(C[H]):wn(C[H]);_(null,ce,R,G,M,j,Z,oe,Y)}},b=(C,R,G,M,j,Z,oe)=>{const Y=R.el=C.el;let{patchFlag:se,dynamicChildren:H,dirs:ce}=R;se|=C.patchFlag&16;const v=C.props||lt,x=R.props||lt;let I;if(G&&Ci(G,!1),(I=x.onVnodeBeforeUpdate)&&bn(I,G,R,C),ce&&wi(R,C,G,"beforeUpdate"),G&&Ci(G,!0),(v.innerHTML&&x.innerHTML==null||v.textContent&&x.textContent==null)&&u(Y,""),H?S(C.dynamicChildren,H,Y,G,M,Da(R,j),Z):oe||k(C,R,Y,null,G,M,Da(R,j),Z,!1),se>0){if(se&16)F(Y,v,x,G,j);else if(se&2&&v.class!==x.class&&s(Y,"class",null,x.class,j),se&4&&s(Y,"style",v.style,x.style,j),se&8){const W=R.dynamicProps;for(let Q=0;Q<W.length;Q++){const z=W[Q],Ae=v[z],ue=x[z];(ue!==Ae||z==="value")&&s(Y,z,Ae,ue,j,G)}}se&1&&C.children!==R.children&&u(Y,R.children)}else!oe&&H==null&&F(Y,v,x,G,j);((I=x.onVnodeUpdated)||ce)&&en(()=>{I&&bn(I,G,R,C),ce&&wi(R,C,G,"updated")},M)},S=(C,R,G,M,j,Z,oe)=>{for(let Y=0;Y<R.length;Y++){const se=C[Y],H=R[Y],ce=se.el&&(se.type===Wn||!Ur(se,H)||se.shapeFlag&198)?f(se.el):G;_(se,H,ce,null,M,j,Z,oe,!0)}},F=(C,R,G,M,j)=>{if(R!==G){if(R!==lt)for(const Z in R)!Hr(Z)&&!(Z in G)&&s(C,Z,R[Z],null,j,M);for(const Z in G){if(Hr(Z))continue;const oe=G[Z],Y=R[Z];oe!==Y&&Z!=="value"&&s(C,Z,Y,oe,j,M)}"value"in G&&s(C,"value",R.value,G.value,j)}},B=(C,R,G,M,j,Z,oe,Y,se)=>{const H=R.el=C?C.el:o(""),ce=R.anchor=C?C.anchor:o("");let{patchFlag:v,dynamicChildren:x,slotScopeIds:I}=R;I&&(Y=Y?Y.concat(I):I),C==null?(i(H,G,M),i(ce,G,M),V(R.children||[],G,ce,j,Z,oe,Y,se)):v>0&&v&64&&x&&C.dynamicChildren?(S(C.dynamicChildren,x,G,j,Z,oe,Y),(R.key!=null||j&&R===j.subTree)&&Uf(C,R,!0)):k(C,R,G,ce,j,Z,oe,Y,se)},q=(C,R,G,M,j,Z,oe,Y,se)=>{R.slotScopeIds=Y,C==null?R.shapeFlag&512?j.ctx.activate(R,G,M,oe,se):ee(R,G,M,j,Z,oe,se):$(C,R,se)},ee=(C,R,G,M,j,Z,oe)=>{const Y=C.component=Ep(C,M,j);if(xf(C)&&(Y.ctx.renderer=De),wp(Y,!1,oe),Y.asyncDep){if(j&&j.registerDep(Y,J,oe),!C.el){const se=Y.subTree=_i(vr);h(null,se,R,G),C.placeholder=se.el}}else J(Y,C,R,G,j,Z,oe)},$=(C,R,G)=>{const M=R.component=C.component;if(rp(C,R,G))if(M.asyncDep&&!M.asyncResolved){ne(M,R,G);return}else M.next=R,M.update();else R.el=C.el,M.vnode=R},J=(C,R,G,M,j,Z,oe)=>{const Y=()=>{if(C.isMounted){let{next:v,bu:x,u:I,parent:W,vnode:Q}=C;{const Me=If(C);if(Me){v&&(v.el=Q.el,ne(C,v,oe)),Me.asyncDep.then(()=>{C.isUnmounted||Y()});return}}let z=v,Ae;Ci(C,!1),v?(v.el=Q.el,ne(C,v,oe)):v=Q,x&&Ea(x),(Ae=v.props&&v.props.onVnodeBeforeUpdate)&&bn(Ae,W,v,Q),Ci(C,!0);const ue=Al(C),Ee=C.subTree;C.subTree=ue,_(Ee,ue,f(Ee.el),re(Ee),C,j,Z),v.el=ue.el,z===null&&sp(C,ue.el),I&&en(I,j),(Ae=v.props&&v.props.onVnodeUpdated)&&en(()=>bn(Ae,W,v,Q),j)}else{let v;const{el:x,props:I}=R,{bm:W,m:Q,parent:z,root:Ae,type:ue}=C,Ee=Yr(R);Ci(C,!1),W&&Ea(W),!Ee&&(v=I&&I.onVnodeBeforeMount)&&bn(v,z,R),Ci(C,!0);{Ae.ce&&Ae.ce._def.shadowRoot!==!1&&Ae.ce._injectChildStyle(ue);const Me=C.subTree=Al(C);_(null,Me,G,M,C,j,Z),R.el=Me.el}if(Q&&en(Q,j),!Ee&&(v=I&&I.onVnodeMounted)){const Me=R;en(()=>bn(v,z,Me),j)}(R.shapeFlag&256||z&&Yr(z.vnode)&&z.vnode.shapeFlag&256)&&C.a&&en(C.a,j),C.isMounted=!0,R=G=M=null}};C.scope.on();const se=C.effect=new qu(Y);C.scope.off();const H=C.update=se.run.bind(se),ce=C.job=se.runIfDirty.bind(se);ce.i=C,ce.id=C.uid,se.scheduler=()=>Lc(ce),Ci(C,!0),H()},ne=(C,R,G)=>{R.component=C;const M=C.vnode.props;C.vnode=R,C.next=null,op(C,R.props,M,G),fp(C,R.children,G),Jn(),pl(C),$n()},k=(C,R,G,M,j,Z,oe,Y,se=!1)=>{const H=C&&C.children,ce=C?C.shapeFlag:0,v=R.children,{patchFlag:x,shapeFlag:I}=R;if(x>0){if(x&128){pe(H,v,G,M,j,Z,oe,Y,se);return}else if(x&256){fe(H,v,G,M,j,Z,oe,Y,se);return}}I&8?(ce&16&&te(H,j,Z),v!==H&&u(G,v)):ce&16?I&16?pe(H,v,G,M,j,Z,oe,Y,se):te(H,j,Z,!0):(ce&8&&u(G,""),I&16&&V(v,G,M,j,Z,oe,Y,se))},fe=(C,R,G,M,j,Z,oe,Y,se)=>{C=C||hr,R=R||hr;const H=C.length,ce=R.length,v=Math.min(H,ce);let x;for(x=0;x<v;x++){const I=R[x]=se?di(R[x]):wn(R[x]);_(C[x],I,G,null,j,Z,oe,Y,se)}H>ce?te(C,j,Z,!0,!1,v):V(R,G,M,j,Z,oe,Y,se,v)},pe=(C,R,G,M,j,Z,oe,Y,se)=>{let H=0;const ce=R.length;let v=C.length-1,x=ce-1;for(;H<=v&&H<=x;){const I=C[H],W=R[H]=se?di(R[H]):wn(R[H]);if(Ur(I,W))_(I,W,G,null,j,Z,oe,Y,se);else break;H++}for(;H<=v&&H<=x;){const I=C[v],W=R[x]=se?di(R[x]):wn(R[x]);if(Ur(I,W))_(I,W,G,null,j,Z,oe,Y,se);else break;v--,x--}if(H>v){if(H<=x){const I=x+1,W=I<ce?R[I].el:M;for(;H<=x;)_(null,R[H]=se?di(R[H]):wn(R[H]),G,W,j,Z,oe,Y,se),H++}}else if(H>x)for(;H<=v;)Oe(C[H],j,Z,!0),H++;else{const I=H,W=H,Q=new Map;for(H=W;H<=x;H++){const Te=R[H]=se?di(R[H]):wn(R[H]);Te.key!=null&&Q.set(Te.key,H)}let z,Ae=0;const ue=x-W+1;let Ee=!1,Me=0;const ae=new Array(ue);for(H=0;H<ue;H++)ae[H]=0;for(H=I;H<=v;H++){const Te=C[H];if(Ae>=ue){Oe(Te,j,Z,!0);continue}let we;if(Te.key!=null)we=Q.get(Te.key);else for(z=W;z<=x;z++)if(ae[z-W]===0&&Ur(Te,R[z])){we=z;break}we===void 0?Oe(Te,j,Z,!0):(ae[we-W]=H+1,we>=Me?Me=we:Ee=!0,_(Te,R[we],G,null,j,Z,oe,Y,se),Ae++)}const de=Ee?mp(ae):hr;for(z=de.length-1,H=ue-1;H>=0;H--){const Te=W+H,we=R[Te],ve=R[Te+1],Ie=Te+1<ce?ve.el||ve.placeholder:M;ae[H]===0?_(null,we,G,Ie,j,Z,oe,Y,se):Ee&&(z<0||H!==de[z]?Pe(we,G,Ie,2):z--)}}},Pe=(C,R,G,M,j=null)=>{const{el:Z,type:oe,transition:Y,children:se,shapeFlag:H}=C;if(H&6){Pe(C.component.subTree,R,G,M);return}if(H&128){C.suspense.move(R,G,M);return}if(H&64){oe.move(C,R,G,De);return}if(oe===Wn){i(Z,R,G);for(let v=0;v<se.length;v++)Pe(se[v],R,G,M);i(C.anchor,R,G);return}if(oe===La){E(C,R,G);return}if(M!==2&&H&1&&Y)if(M===0)Y.beforeEnter(Z),i(Z,R,G),en(()=>Y.enter(Z),j);else{const{leave:v,delayLeave:x,afterLeave:I}=Y,W=()=>{C.ctx.isUnmounted?r(Z):i(Z,R,G)},Q=()=>{Z._isLeaving&&Z[Ch](!0),v(Z,()=>{W(),I&&I()})};x?x(Z,W,Q):Q()}else i(Z,R,G)},Oe=(C,R,G,M=!1,j=!1)=>{const{type:Z,props:oe,ref:Y,children:se,dynamicChildren:H,shapeFlag:ce,patchFlag:v,dirs:x,cacheIndex:I}=C;if(v===-2&&(j=!1),Y!=null&&(Jn(),Xr(Y,null,G,C,!0),$n()),I!=null&&(R.renderCache[I]=void 0),ce&256){R.ctx.deactivate(C);return}const W=ce&1&&x,Q=!Yr(C);let z;if(Q&&(z=oe&&oe.onVnodeBeforeUnmount)&&bn(z,R,C),ce&6)it(C.component,G,M);else{if(ce&128){C.suspense.unmount(G,M);return}W&&wi(C,null,R,"beforeUnmount"),ce&64?C.type.remove(C,R,G,De,M):H&&!H.hasOnce&&(Z!==Wn||v>0&&v&64)?te(H,R,G,!1,!0):(Z===Wn&&v&384||!j&&ce&16)&&te(se,R,G),M&&Je(C)}(Q&&(z=oe&&oe.onVnodeUnmounted)||W)&&en(()=>{z&&bn(z,R,C),W&&wi(C,null,R,"unmounted")},G)},Je=C=>{const{type:R,el:G,anchor:M,transition:j}=C;if(R===Wn){nt(G,M);return}if(R===La){y(C);return}const Z=()=>{r(G),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:oe,delayLeave:Y}=j,se=()=>oe(G,Z);Y?Y(C.el,Z,se):se()}else Z()},nt=(C,R)=>{let G;for(;C!==R;)G=d(C),r(C),C=G;r(R)},it=(C,R,G)=>{const{bum:M,scope:j,job:Z,subTree:oe,um:Y,m:se,a:H}=C;bl(se),bl(H),M&&Ea(M),j.stop(),Z&&(Z.flags|=8,Oe(oe,C,R,G)),Y&&en(Y,R),en(()=>{C.isUnmounted=!0},R)},te=(C,R,G,M=!1,j=!1,Z=0)=>{for(let oe=Z;oe<C.length;oe++)Oe(C[oe],R,G,M,j)},re=C=>{if(C.shapeFlag&6)return re(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const R=d(C.anchor||C.el),G=R&&R[Th];return G?d(G):R};let be=!1;const Be=(C,R,G)=>{C==null?R._vnode&&Oe(R._vnode,null,null,!0):_(R._vnode||null,C,R,null,null,null,G),R._vnode=C,be||(be=!0,pl(),ff(),be=!1)},De={p:_,um:Oe,m:Pe,r:Je,mt:ee,mc:V,pc:k,pbc:S,n:re,o:n};return{render:Be,hydrate:void 0,createApp:Kh(Be)}}function Da({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ci({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uf(n,e,t=!1){const i=n.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=di(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Uf(a,o)),o.type===ga&&o.patchFlag!==-1&&(o.el=a.el),o.type===vr&&!o.el&&(o.el=a.el)}}function mp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<l?s=o+1:a=o;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function If(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:If(e)}function bl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ff=n=>n.__isSuspense;function xp(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):yh(n)}const Wn=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),La=Symbol.for("v-stc"),Kr=[];let rn=null;function Nf(n=!1){Kr.push(rn=n?null:[])}function gp(){Kr.pop(),rn=Kr[Kr.length-1]||null}let ts=1;function yl(n,e=!1){ts+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function _p(n){return n.dynamicChildren=ts>0?rn||hr:null,gp(),ts>0&&rn&&rn.push(n),n}function Of(n,e,t,i,r,s){return _p(ht(n,e,t,i,r,s,!0))}function Bf(n){return n?n.__v_isVNode===!0:!1}function Ur(n,e){return n.type===e.type&&n.key===e.key}const zf=({key:n})=>n??null,Xs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Ut(n)||We(n)?{i:Rn,r:n,k:e,f:!!t}:n:null);function ht(n,e=null,t=null,i=0,r=null,s=n===Wn?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&zf(e),ref:e&&Xs(e),scopeId:hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Rn};return o?(Oc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Et(t)?8:16),ts>0&&!a&&rn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&rn.push(c),c}const _i=vp;function vp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vh)&&(n=vr),Bf(n)){const o=Ar(n,e,!0);return t&&Oc(o,t),ts>0&&!s&&rn&&(o.shapeFlag&6?rn[rn.indexOf(n)]=o:rn.push(o)),o.patchFlag=-2,o}if(Dp(n)&&(n=n.__vccOpts),e){e=Ap(e);let{class:o,style:c}=e;o&&!Et(o)&&(e.class=ha(o)),At(c)&&(Dc(c)&&!Xe(c)&&(c=It({},c)),e.style=Mc(c))}const a=Et(n)?1:Ff(n)?128:wh(n)?64:At(n)?4:We(n)?2:0;return ht(n,e,t,i,r,a,s,!0)}function Ap(n){return n?Dc(n)||wf(n)?It({},n):n:null}function Ar(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:c}=n,l=e?Mp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&zf(l),ref:e&&e.ref?t&&s?Xe(s)?s.concat(Xs(e)):[s,Xs(e)]:Xs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ar(n.ssContent),ssFallback:n.ssFallback&&Ar(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Uc(u,c.clone(u)),u}function Sp(n=" ",e=0){return _i(ga,null,n,e)}function wn(n){return n==null||typeof n=="boolean"?_i(vr):Xe(n)?_i(Wn,null,n.slice()):Bf(n)?di(n):_i(ga,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ar(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!wf(e)?e._ctx=Rn:r===3&&Rn&&(Rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Rn},t=32):(e=String(e),i&64?(t=16,e=[Sp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Mp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ha([e.class,i.class]));else if(r==="style")e.style=Mc([e.style,i.style]);else if(la(r)){const s=e[r],a=i[r];a&&s!==a&&!(Xe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function bn(n,e,t,i=null){Ln(n,e,7,[t,i])}const bp=Sf();let yp=0;function Ep(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||bp,s={uid:yp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(i,r),emitsOptions:yf(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ep.bind(null,s),n.ce&&n.ce(s),s}let Gt=null;const Tp=()=>Gt||Rn;let ia,yo;{const n=da(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ia=e("__VUE_INSTANCE_SETTERS__",t=>Gt=t),yo=e("__VUE_SSR_SETTERS__",t=>ns=t)}const us=n=>{const e=Gt;return ia(n),n.scope.on(),()=>{n.scope.off(),ia(e)}},El=()=>{Gt&&Gt.scope.off(),ia(null)};function Vf(n){return n.vnode.shapeFlag&4}let ns=!1;function wp(n,e=!1,t=!1){e&&yo(e);const{props:i,children:r}=n.vnode,s=Vf(n);ap(n,i,s,e),up(n,r,t||e);const a=s?Cp(n,e):void 0;return e&&yo(!1),a}function Cp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gh);const{setup:i}=t;if(i){Jn();const r=n.setupContext=i.length>1?Pp(n):null,s=us(n),a=ls(i,n,0,[n.props,r]),o=ku(a);if($n(),s(),(o||n.sp)&&!Yr(n)&&mf(n),o){if(a.then(El,El),e)return a.then(c=>{Tl(n,c)}).catch(c=>{pa(c,n,0)});n.asyncDep=a}else Tl(n,a)}else Gf(n)}function Tl(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=cf(e)),Gf(n)}function Gf(n,e,t){const i=n.type;n.render||(n.render=i.render||Dn);{const r=us(n);Jn();try{Hh(n)}finally{$n(),r()}}}const Rp={get(n,e){return Lt(n,"get",""),n[e]}};function Pp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Rp),slots:n.slots,emit:n.emit,expose:e}}function Bc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cf(hh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function Dp(n){return We(n)&&"__vccOpts"in n}const Lp=(n,e)=>_h(n,e,ns),Up="3.5.25";let Eo;const wl=typeof window<"u"&&window.trustedTypes;if(wl)try{Eo=wl.createPolicy("vue",{createHTML:n=>n})}catch{}const Hf=Eo?n=>Eo.createHTML(n):n=>n,Ip="http://www.w3.org/2000/svg",Fp="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Cl=kn&&kn.createElement("template"),Np={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?kn.createElementNS(Ip,n):e==="mathml"?kn.createElementNS(Fp,n):t?kn.createElement(n,{is:t}):kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>kn.createTextNode(n),createComment:n=>kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Cl.innerHTML=Hf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Cl.content;if(i==="svg"||i==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Op=Symbol("_vtc");function Bp(n,e,t){const i=n[Op];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Rl=Symbol("_vod"),zp=Symbol("_vsh"),Vp=Symbol(""),Gp=/(?:^|;)\s*display\s*:/;function Hp(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ys(i,o,"")}else for(const a in e)t[a]==null&&Ys(i,a,"");for(const a in t)a==="display"&&(s=!0),Ys(i,a,t[a])}else if(r){if(e!==t){const a=i[Vp];a&&(t+=";"+a),i.cssText=t,s=Gp.test(t)}}else e&&n.removeAttribute("style");Rl in n&&(n[Rl]=s?i.display:"",n[zp]&&(i.display="none"))}const Pl=/\s*!important$/;function Ys(n,e,t){if(Xe(t))t.forEach(i=>Ys(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=kp(n,e);Pl.test(t)?n.setProperty(Xi(i),t.replace(Pl,""),"important"):n[i]=t}}const Dl=["Webkit","Moz","ms"],Ua={};function kp(n,e){const t=Ua[e];if(t)return t;let i=Ai(e);if(i!=="filter"&&i in n)return Ua[e]=i;i=Wu(i);for(let r=0;r<Dl.length;r++){const s=Dl[r]+i;if(s in n)return Ua[e]=s}return e}const Ll="http://www.w3.org/1999/xlink";function Ul(n,e,t,i,r,s=Xd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ll,e.slice(6,e.length)):n.setAttributeNS(Ll,e,t):t==null||s&&!Yu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Tr(t)?String(t):t)}function Il(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(o!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Yu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Wp(n,e,t,i){n.addEventListener(e,t,i)}function Xp(n,e,t,i){n.removeEventListener(e,t,i)}const Fl=Symbol("_vei");function Yp(n,e,t,i,r=null){const s=n[Fl]||(n[Fl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,c]=qp(e);if(i){const l=s[e]=Zp(i,r);Wp(n,o,l,c)}else a&&(Xp(n,o,a,c),s[e]=void 0)}}const Nl=/(?:Once|Passive|Capture)$/;function qp(n){let e;if(Nl.test(n)){e={};let i;for(;i=n.match(Nl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),e]}let Ia=0;const Kp=Promise.resolve(),jp=()=>Ia||(Kp.then(()=>Ia=0),Ia=Date.now());function Zp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(Qp(i,t.value),e,5,[i])};return t.value=n,t.attached=jp(),t}function Qp(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ol=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Bp(n,i,a):e==="style"?Hp(n,t,i):la(e)?vc(e)||Yp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$p(n,e,i,a))?(Il(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ul(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?Il(n,Ai(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ul(n,e,i,a))};function $p(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ol(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ol(e)&&Et(t)?!1:e in n}const em=It({patchProp:Jp},Np);let Bl;function tm(){return Bl||(Bl=dp(em))}const nm=((...n)=>{const e=tm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=rm(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,im(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function im(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function rm(n){return Et(n)?document.querySelector(n):n}const zc="181",Ki={ROTATE:0,DOLLY:1,PAN:2},sm=0,zl=1,am=2,kf=1,om=2,Hn=3,Mi=0,qt=1,Yn=2,jn=0,gr=1,Vl=2,Gl=3,Hl=4,cm=5,Bi=100,lm=101,um=102,fm=103,dm=104,hm=200,pm=201,mm=202,xm=203,To=204,wo=205,gm=206,_m=207,vm=208,Am=209,Sm=210,Mm=211,bm=212,ym=213,Em=214,Co=0,Ro=1,Po=2,Sr=3,Do=4,Lo=5,Uo=6,Io=7,Wf=0,Tm=1,wm=2,vi=0,Cm=1,Rm=2,Pm=3,Dm=4,Lm=5,Um=6,Im=7,Xf=300,Mr=301,br=302,Fo=303,No=304,_a=306,Oo=1e3,qn=1001,Bo=1002,sn=1003,Fm=1004,_s=1005,fn=1006,Fa=1007,Vi=1008,ti=1009,Yf=1010,qf=1011,is=1012,Vc=1013,ki=1014,Kn=1015,wr=1016,Gc=1017,Hc=1018,rs=1020,Kf=35902,jf=35899,Zf=1021,Qf=1022,_n=1023,ss=1026,as=1027,Jf=1028,kc=1029,Wc=1030,Xc=1031,Yc=1033,qs=33776,Ks=33777,js=33778,Zs=33779,zo=35840,Vo=35841,Go=35842,Ho=35843,ko=36196,Wo=37492,Xo=37496,Yo=37808,qo=37809,Ko=37810,jo=37811,Zo=37812,Qo=37813,Jo=37814,$o=37815,ec=37816,tc=37817,nc=37818,ic=37819,rc=37820,sc=37821,ac=36492,oc=36494,cc=36495,lc=36283,uc=36284,fc=36285,dc=36286,Nm=3200,Om=3201,Bm=0,zm=1,pi="",ln="srgb",yr="srgb-linear",ra="linear",at="srgb",ji=7680,kl=519,Vm=512,Gm=513,Hm=514,$f=515,km=516,Wm=517,Xm=518,Ym=519,hc=35044,Wl="300 es",Pn=2e3,sa=2001;function ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qm(){const n=aa("canvas");return n.style.display="block",n}const Xl={};function oa(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function vt(...n){const e="THREE."+n.shift();console.error(e,...n)}function os(...n){const e=n.join(" ");e in Xl||(Xl[e]=!0,Ve(...n))}function Km(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const jr=Math.PI/180,cs=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function qc(n,e){return(n%e+e)%e}function jm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Zm(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function Qm(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function Jm(n,e=1){return e-Math.abs(qc(n,e*2)-e)}function $m(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function e0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function t0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function n0(n,e){return n+Math.random()*(e-n)}function i0(n){return n*(.5-Math.random())}function r0(n){n!==void 0&&(Yl=n);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(n){return n*jr}function a0(n){return n*cs}function o0(n){return(n&n-1)===0&&n!==0}function c0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function l0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u0(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*u,o*l);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pc={DEG2RAD:jr,RAD2DEG:cs,generateUUID:Zn,clamp:Ge,euclideanModulo:qc,mapLinear:jm,inverseLerp:Zm,lerp:Zr,damp:Qm,pingpong:Jm,smoothstep:$m,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:r0,degToRad:s0,radToDeg:a0,isPowerOfTwo:o0,ceilPowerOfTwo:c0,floorPowerOfTwo:l0,setQuaternionFromProperEuler:u0,normalize:tt,denormalize:xn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==p||u!==g){let m=c*d+l*p+u*g+f*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let h=1-o;if(m<.9995){const w=Math.acos(m),E=Math.sin(w);h=Math.sin(h*w)/E,o=Math.sin(o*w)/E,c=c*h+d*o,l=l*h+p*o,u=u*h+g*o,f=f*h+_*o}else{c=c*h+d*o,l=l*h+p*o,u=u*h+g*o,f=f*h+_*o;const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-o*p,e[t+2]=l*g+u*p+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new U,ql=new bi;class He{constructor(e,t,i,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],w=r[1],E=r[4],y=r[7],P=r[2],T=r[5],D=r[8];return s[0]=a*_+o*w+c*P,s[3]=a*m+o*E+c*T,s[6]=a*h+o*y+c*D,s[1]=l*_+u*w+f*P,s[4]=l*m+u*E+f*T,s[7]=l*h+u*y+f*D,s[2]=d*_+p*w+g*P,s[5]=d*m+p*E+g*T,s[8]=d*h+p*y+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new He,Kl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function f0(){const n={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?ra:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yr]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Kl,fromXYZ:jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Kl,fromXYZ:jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const Ze=f0();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class d0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zi===void 0&&(Zi=aa("canvas")),Zi.width=e.width,Zi.height=e.height;const r=Zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h0=0;class Kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ba(r[a].image)):s.push(Ba(r[a]))}else s=Ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?d0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let p0=0;const za=new U;class Ht extends Cr{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=qn,r=qn,s=fn,a=Vi,o=_n,c=ti,l=Ht.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Zn(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Xf;Ht.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(p+1)/2,P=(h+1)/2,T=(u+d)/4,D=(f+_)/4,V=(g+m)/4;return E>y&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=T/i,s=D/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=V/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=D/s,r=V/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m0 extends Cr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ht(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Kc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends m0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class td extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),As.subVectors(this.max,Ir),Qi.subVectors(e.a,Ir),Ji.subVectors(e.b,Ir),$i.subVectors(e.c,Ir),ri.subVectors(Ji,Qi),si.subVectors($i,Ji),Ri.subVectors(Qi,$i);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,si.z,0,-si.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ri.y,Ri.x,0];return!Va(t,Qi,Ji,$i,As)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Qi,Ji,$i,As))?!1:(Ss.crossVectors(ri,si),t=[Ss.x,Ss.y,Ss.z],Va(t,Qi,Ji,$i,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,vs=new yi,Qi=new U,Ji=new U,$i=new U,ri=new U,si=new U,Ri=new U,Ir=new U,As=new U,Ss=new U,Pi=new U;function Va(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Pi.fromArray(n,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const g0=new yi,Fr=new U,Ga=new U;class Rr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):g0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Ga)),this.expandByPoint(Fr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new U,Ha=new U,Ms=new U,ai=new U,ka=new U,bs=new U,Wa=new U;class nd{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=ai.dot(this.direction),c=-ai.dot(Ms),l=ai.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ha).addScaledVector(Ms,d),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,r,s){ka.subVectors(t,e),bs.subVectors(i,e),Wa.crossVectors(ka,bs);let a=this.direction.dot(Wa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const c=o*this.direction.dot(bs.crossVectors(ai,bs));if(c<0)return null;const l=o*this.direction.dot(ka.cross(ai));if(l<0||c+l>a)return null;const u=-o*ai.dot(Wa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,r,s,a,o,c,l,u,f,d,p,g,_,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,p,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,v0)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),oi.crossVectors(i,Jt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),oi.crossVectors(i,Jt)),oi.normalize(),ys.crossVectors(Jt,oi),r[0]=oi.x,r[4]=ys.x,r[8]=Jt.x,r[1]=oi.y,r[5]=ys.y,r[9]=Jt.y,r[2]=oi.z,r[6]=ys.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],w=i[3],E=i[7],y=i[11],P=i[15],T=r[0],D=r[4],V=r[8],b=r[12],S=r[1],F=r[5],B=r[9],q=r[13],ee=r[2],$=r[6],J=r[10],ne=r[14],k=r[3],fe=r[7],pe=r[11],Pe=r[15];return s[0]=a*T+o*S+c*ee+l*k,s[4]=a*D+o*F+c*$+l*fe,s[8]=a*V+o*B+c*J+l*pe,s[12]=a*b+o*q+c*ne+l*Pe,s[1]=u*T+f*S+d*ee+p*k,s[5]=u*D+f*F+d*$+p*fe,s[9]=u*V+f*B+d*J+p*pe,s[13]=u*b+f*q+d*ne+p*Pe,s[2]=g*T+_*S+m*ee+h*k,s[6]=g*D+_*F+m*$+h*fe,s[10]=g*V+_*B+m*J+h*pe,s[14]=g*b+_*q+m*ne+h*Pe,s[3]=w*T+E*S+y*ee+P*k,s[7]=w*D+E*F+y*$+P*fe,s[11]=w*V+E*B+y*J+P*pe,s[15]=w*b+E*q+y*ne+P*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*p-i*c*p)+_*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+t*l*f-t*o*p-s*a*f+i*a*p+s*o*u-i*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],w=f*m*l-_*d*l+_*c*p-o*m*p-f*c*h+o*d*h,E=g*d*l-u*m*l-g*c*p+a*m*p+u*c*h-a*d*h,y=u*_*l-g*f*l+g*o*p-a*_*p-u*o*h+a*f*h,P=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,T=t*w+i*E+r*y+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=w*D,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*D,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*h+i*c*h)*D,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*p-i*c*p)*D,e[4]=E*D,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*h+t*d*h)*D,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*h-t*c*h)*D,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*p+t*c*p)*D,e[8]=y*D,e[9]=(g*f*s-u*_*s-g*i*p+t*_*p+u*i*h-t*f*h)*D,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*h+t*o*h)*D,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*p-t*o*p)*D,e[12]=P*D,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*D,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*D,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,g=s*f,_=a*u,m=a*f,h=o*f,w=c*l,E=c*u,y=c*f,P=i.x,T=i.y,D=i.z;return r[0]=(1-(_+h))*P,r[1]=(p+y)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+E)*D,r[9]=(m-w)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const a=er.set(r[4],r[5],r[6]).length(),o=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const l=1/s,u=1/a,f=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Pn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Pn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sa)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Pn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===sa)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const er=new U,pn=new xt,_0=new U(0,0,0),v0=new U(1,1,1),oi=new U,ys=new U,Jt=new U,Zl=new xt,Ql=new bi;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let A0=0;const Jl=new U,tr=new bi,Bn=new xt,Es=new U,Nr=new U,S0=new U,M0=new bi,$l=new U(1,0,0),eu=new U(0,1,0),tu=new U(0,0,1),nu={type:"added"},b0={type:"removed"},nr={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Kt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new U,t=new ni,i=new bi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new He}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Es.copy(e):Es.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Nr,Es,this.up):Bn.lookAt(Es,Nr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Bn),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),nr.child=e,this.dispatchEvent(nr),nr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b0),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new U,zn=new U,Ya=new U,Vn=new U,ir=new U,rr=new U,iu=new U,qa=new U,Ka=new U,ja=new U,Za=new ut,Qa=new ut,Ja=new ut;class gn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mn.subVectors(r,t),zn.subVectors(i,t),Ya.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(zn),c=mn.dot(Ya),l=zn.dot(zn),u=zn.dot(Ya),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Za.setScalar(0),Qa.setScalar(0),Ja.setScalar(0),Za.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Za,s.x),a.addScaledVector(Qa,s.y),a.addScaledVector(Ja,s.z),a}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),zn.subVectors(e,t),mn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),mn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ir.subVectors(r,i),rr.subVectors(s,i),qa.subVectors(e,i);const c=ir.dot(qa),l=rr.dot(qa);if(c<=0&&l<=0)return t.copy(i);Ka.subVectors(e,r);const u=ir.dot(Ka),f=rr.dot(Ka);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ir,a);ja.subVectors(e,s);const p=ir.dot(ja),g=rr.dot(ja);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(rr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return iu.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(iu,o);const h=1/(m+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(ir,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=qc(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=$a(a,s,e+1/3),this.g=$a(a,s,e),this.b=$a(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=ln){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ze.workingToColorSpace(Dt.copy(this),e),Math.round(Ge(Dt.r*255,0,255))*65536+Math.round(Ge(Dt.g*255,0,255))*256+Math.round(Ge(Dt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=ln){Ze.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Ts);const i=Zr(ci.h,Ts.h,t),r=Zr(ci.s,Ts.s,t),s=Zr(ci.l,Ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Qe;Qe.NAMES=rd;let y0=0;class fs extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=gr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=wo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==To&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jc extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new U,ws=new Ke;let E0=0;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class sd extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ad extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let T0=0;const cn=new xt,eo=new Kt,sr=new U,$t=new yi,Or=new yi,yt=new U;class an extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?ad:sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors($t.min,Or.min),$t.expandByPoint(yt),yt.addVectors($t.max,Or.max),$t.expandByPoint(yt)):($t.expandByPoint(Or.min),$t.expandByPoint(Or.max))}$t.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)yt.fromBufferAttribute(o,l),c&&(sr.fromBufferAttribute(e,l),yt.add(sr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<i.count;V++)o[V]=new U,c[V]=new U;const l=new U,u=new U,f=new U,d=new Ke,p=new Ke,g=new Ke,_=new U,m=new U;function h(V,b,S){l.fromBufferAttribute(i,V),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,V),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(F),o[V].add(_),o[b].add(_),o[S].add(_),c[V].add(m),c[b].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let V=0,b=w.length;V<b;++V){const S=w[V],F=S.start,B=S.count;for(let q=F,ee=F+B;q<ee;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new U,y=new U,P=new U,T=new U;function D(V){P.fromBufferAttribute(r,V),T.copy(P);const b=o[V];E.copy(b),E.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(T,b);const F=y.dot(c[V])<0?-1:1;a.setXYZW(V,E.x,E.y,E.z,F)}for(let V=0,b=w.length;V<b;++V){const S=w[V],F=S.start,B=S.count;for(let q=F,ee=F+B;q<ee;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Sn(d,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ru=new xt,Di=new nd,Cs=new Rr,su=new U,Rs=new U,Ps=new U,Ds=new U,to=new U,Ls=new U,au=new U,Us=new U;class Un extends Kt{constructor(e=new an,t=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ls.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(to.fromBufferAttribute(f,e),a?Ls.addScaledVector(to,u):Ls.addScaledVector(to.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(Cs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Cs,su)===null||Di.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(ru.copy(s).invert(),Di.copy(e.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,P=E;y<P;y+=3){const T=o.getX(y),D=o.getX(y+1),V=o.getX(y+2);r=Is(this,h,e,i,l,u,f,T,D,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);r=Is(this,a,e,i,l,u,f,w,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,P=E;y<P;y+=3){const T=y,D=y+1,V=y+2;r=Is(this,h,e,i,l,u,f,T,D,V),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=m,E=m+1,y=m+2;r=Is(this,a,e,i,l,u,f,w,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function w0(n,e,t,i,r,s,a,o){let c;if(e.side===qt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Mi,o),c===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Us);return l<t.near||l>t.far?null:{distance:l,point:Us.clone(),object:n}}function Is(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Rs),n.getVertexPosition(c,Ps),n.getVertexPosition(l,Ds);const u=w0(n,e,t,i,Rs,Ps,Ds,au);if(u){const f=new U;gn.getBarycoord(au,Rs,Ps,Ds,f),r&&(u.uv=gn.getInterpolatedAttribute(r,o,c,l,f,new Ke)),s&&(u.uv1=gn.getInterpolatedAttribute(s,o,c,l,f,new Ke)),a&&(u.normal=gn.getInterpolatedAttribute(a,o,c,l,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};gn.getNormal(Rs,Ps,Ds,d.normal),u.face=d,u.barycoord=f}return u}class ds extends an{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function g(_,m,h,w,E,y,P,T,D,V,b){const S=y/D,F=P/V,B=y/2,q=P/2,ee=T/2,$=D+1,J=V+1;let ne=0,k=0;const fe=new U;for(let pe=0;pe<J;pe++){const Pe=pe*F-q;for(let Oe=0;Oe<$;Oe++){const Je=Oe*S-B;fe[_]=Je*w,fe[m]=Pe*E,fe[h]=ee,l.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[h]=T>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Oe/D),f.push(1-pe/V),ne+=1}}for(let pe=0;pe<V;pe++)for(let Pe=0;Pe<D;Pe++){const Oe=d+Pe+$*pe,Je=d+Pe+$*(pe+1),nt=d+(Pe+1)+$*(pe+1),it=d+(Pe+1)+$*pe;c.push(Oe,Je,it),c.push(Je,nt,it),k+=6}o.addGroup(p,k,b),p+=k,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function C0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Zc={clone:Er,merge:Bt};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cd extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new U,ou=new Ke,cu=new Ke;class un extends cd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,ou,cu),t.subVectors(cu,ou)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,or=1;class D0 extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(ar,or,e,t);r.layers=this.layers,this.add(r);const s=new un(ar,or,e,t);s.layers=this.layers,this.add(s);const a=new un(ar,or,e,t);a.layers=this.layers,this.add(a);const o=new un(ar,or,e,t);o.layers=this.layers,this.add(o);const c=new un(ar,or,e,t);c.layers=this.layers,this.add(c);const l=new un(ar,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ld extends Ht{constructor(e=[],t=Mr,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L0 extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ld(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ds(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:jn});s.uniforms.tEquirect.value=t;const a=new Un(r,s),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=fn),new D0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class dr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U0={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class I0 extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class F0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new U;class mi{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class N0 extends Ht{constructor(e=null,t=1,i=1,r,s,a,o,c,l=sn,u=sn,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const io=new U,O0=new U,B0=new He;class Oi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=io.subVectors(i,t).cross(O0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(io),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||B0.getNormalMatrix(e),r=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Rr,z0=new Ke(.5,.5),Fs=new U;class ud{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],h=s[11],w=s[12],E=s[13],y=s[14],P=s[15];if(r[0].setComponents(l-a,p-u,h-g,P-w).normalize(),r[1].setComponents(l+a,p+u,h+g,P+w).normalize(),r[2].setComponents(l+o,p+f,h+_,P+E).normalize(),r[3].setComponents(l-o,p-f,h-_,P-E).normalize(),i)r[4].setComponents(c,d,m,y).normalize(),r[5].setComponents(l-c,p-d,h-m,P-y).normalize();else if(r[4].setComponents(l-c,p-d,h-m,P-y).normalize(),t===Pn)r[5].setComponents(l+c,p+d,h+m,P+y).normalize();else if(t===sa)r[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=z0.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fd extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lu=new xt,mc=new nd,Ns=new Rr,Os=new U;class V0 extends Kt{constructor(e=new an,t=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;lu.copy(r).invert(),mc.copy(e.ray).applyMatrix4(lu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Os.fromBufferAttribute(f,m),uu(Os,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Os.fromBufferAttribute(f,g),uu(Os,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function uu(n,e,t,i,r,s,a){const o=mc.distanceSqToPoint(n);if(o<t){const c=new U;mc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class dd extends Ht{constructor(e,t,i=ki,r,s,a,o=sn,c=sn,l,u=ss,f=1){if(u!==ss&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hd extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qc extends an{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let h=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2));function w(){const y=new U,P=new U;let T=0;const D=(t-e)/i;for(let V=0;V<=s;V++){const b=[],S=V/s,F=S*(t-e)+e;for(let B=0;B<=r;B++){const q=B/r,ee=q*c+o,$=Math.sin(ee),J=Math.cos(ee);P.x=F*$,P.y=-S*i+m,P.z=F*J,f.push(P.x,P.y,P.z),y.set($,D,J).normalize(),d.push(y.x,y.y,y.z),p.push(q,1-S),b.push(g++)}_.push(b)}for(let V=0;V<r;V++)for(let b=0;b<s;b++){const S=_[b][V],F=_[b+1][V],B=_[b+1][V+1],q=_[b][V+1];(e>0||b!==0)&&(u.push(S,F,q),T+=3),(t>0||b!==s-1)&&(u.push(F,B,q),T+=3)}l.addGroup(h,T,0),h+=T}function E(y){const P=g,T=new Ke,D=new U;let V=0;const b=y===!0?e:t,S=y===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const F=g;for(let B=0;B<=r;B++){const ee=B/r*c+o,$=Math.cos(ee),J=Math.sin(ee);D.x=b*J,D.y=m*S,D.z=b*$,f.push(D.x,D.y,D.z),d.push(0,S,0),T.x=$*.5+.5,T.y=J*.5*S+.5,p.push(T.x,T.y),g++}for(let B=0;B<r;B++){const q=P+B,ee=F+B;y===!0?u.push(ee,ee+1,q):u.push(ee+1,ee,q),V+=3}l.addGroup(h,V,y===!0?1:2),h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jc extends Qc{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class va extends an{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const w=h*d-a;for(let E=0;E<l;E++){const y=E*f-s;g.push(y,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let w=0;w<o;w++){const E=w+l*h,y=w+l*(h+1),P=w+1+l*(h+1),T=w+1+l*h;p.push(E,y,T),p.push(y,P,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}class G0 extends an{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new U,s=new U;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const f=c[l],d=f.start,p=f.count;for(let g=d,_=d+p;g<_;g+=3)for(let m=0;m<3;m++){const h=o.getX(g+m),w=o.getX(g+(m+1)%3);r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,w),fu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),fu(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new jt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function fu(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class H0 extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pd extends cd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W0 extends an{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class X0 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xc extends F0{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const du=new U,Bs=new U,cr=new U,lr=new U,ro=new U,Y0=new U,q0=new U;class K0{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){du.subVectors(e,this.start),Bs.subVectors(this.end,this.start);const i=Bs.dot(Bs);let s=Bs.dot(du)/i;return t&&(s=Ge(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Y0,i=q0){const r=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,u=e.end;cr.subVectors(l,o),lr.subVectors(u,c),ro.subVectors(o,c);const f=cr.dot(cr),d=lr.dot(lr),p=lr.dot(ro);if(f<=r&&d<=r)return t.copy(o),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,a=p/d,a=Ge(a,0,1);else{const g=cr.dot(ro);if(d<=r)a=0,s=Ge(-g/f,0,1);else{const _=cr.dot(lr),m=f*d-_*_;m!==0?s=Ge((_*p-g*d)/m,0,1):s=0,a=(_*s+p)/d,a<0?(a=0,s=Ge(-g/f,0,1)):a>1&&(a=1,s=Ge((_-g)/f,0,1))}}return t.copy(o).add(cr.multiplyScalar(s)),i.copy(c).add(lr.multiplyScalar(a)),t.sub(i),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function hu(n,e,t,i){const r=j0(i);switch(t){case Zf:return n*e;case Jf:return n*e/r.components*r.byteLength;case kc:return n*e/r.components*r.byteLength;case Wc:return n*e*2/r.components*r.byteLength;case Xc:return n*e*2/r.components*r.byteLength;case Qf:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Yc:return n*e*4/r.components*r.byteLength;case qs:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case js:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Ho:return Math.max(n,16)*Math.max(e,8)/4;case zo:case Go:return Math.max(n,8)*Math.max(e,8)/2;case ko:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j0(n){switch(n){case ti:case Yf:return{byteLength:1,components:1};case is:case qf:case wr:return{byteLength:2,components:1};case Gc:case Hc:return{byteLength:2,components:4};case ki:case Vc:case Kn:return{byteLength:4,components:1};case Kf:case jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);function md(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Z0(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ux=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,__=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Q0,alphahash_pars_fragment:J0,alphamap_fragment:$0,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ax,begin_vertex:ox,beginnormal_vertex:cx,bsdfs:lx,iridescence_fragment:ux,bumpmap_pars_fragment:fx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:xx,color_pars_fragment:gx,color_pars_vertex:_x,color_vertex:vx,common:Ax,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:Mx,displacementmap_pars_vertex:bx,displacementmap_vertex:yx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,colorspace_fragment:wx,colorspace_pars_fragment:Cx,envmap_fragment:Rx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Dx,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:kx,envmap_vertex:Ux,fog_vertex:Ix,fog_pars_vertex:Fx,fog_fragment:Nx,fog_pars_fragment:Ox,gradientmap_pars_fragment:Bx,lightmap_pars_fragment:zx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Hx,lights_toon_fragment:Wx,lights_toon_pars_fragment:Xx,lights_phong_fragment:Yx,lights_phong_pars_fragment:qx,lights_physical_fragment:Kx,lights_physical_pars_fragment:jx,lights_fragment_begin:Zx,lights_fragment_maps:Qx,lights_fragment_end:Jx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:rg,map_particle_fragment:sg,map_particle_pars_fragment:ag,metalnessmap_fragment:og,metalnessmap_pars_fragment:cg,morphinstance_vertex:lg,morphcolor_vertex:ug,morphnormal_vertex:fg,morphtarget_pars_vertex:dg,morphtarget_vertex:hg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:xg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:bg,opaque_fragment:yg,packing:Eg,premultiplied_alpha_fragment:Tg,project_vertex:wg,dithering_fragment:Cg,dithering_pars_fragment:Rg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Ug,shadowmap_vertex:Ig,shadowmask_pars_fragment:Fg,skinbase_vertex:Ng,skinning_pars_vertex:Og,skinning_vertex:Bg,skinnormal_vertex:zg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Hg,tonemapping_pars_fragment:kg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:Yg,uv_pars_vertex:qg,uv_vertex:Kg,worldpos_vertex:jg,background_vert:Zg,background_frag:Qg,backgroundCube_vert:Jg,backgroundCube_frag:$g,cube_vert:e_,cube_frag:t_,depth_vert:n_,depth_frag:i_,distanceRGBA_vert:r_,distanceRGBA_frag:s_,equirect_vert:a_,equirect_frag:o_,linedashed_vert:c_,linedashed_frag:l_,meshbasic_vert:u_,meshbasic_frag:f_,meshlambert_vert:d_,meshlambert_frag:h_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:x_,meshnormal_frag:g_,meshphong_vert:__,meshphong_frag:v_,meshphysical_vert:A_,meshphysical_frag:S_,meshtoon_vert:M_,meshtoon_frag:b_,points_vert:y_,points_frag:E_,shadow_vert:T_,shadow_frag:w_,sprite_vert:C_,sprite_frag:R_},ge={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Yt={basic:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Bt([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Bt([ge.lights,ge.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yt.physical={uniforms:Bt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const zs={r:0,b:0,g:0},Ui=new ni,P_=new xt;function D_(n,e,t,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const P=g(E);P===null?h(o,c):P&&P.isColor&&(h(P,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const P=g(y);P&&(P.isCubeTexture||P.mapping===_a)?(u===void 0&&(u=new Un(new ds(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Er(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ui.copy(y.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Ui)),u.material.toneMapped=Ze.getTransfer(P.colorSpace)!==at,(f!==P||d!==P.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,p=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Un(new va(2,2),new In({name:"BackgroundMaterial",uniforms:Er(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(P.colorSpace)!==at,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=P,d=P.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,y){E.getRGB(zs,od(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,y,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,h(o,c)},render:_,addToRenderList:m,dispose:w}}function L_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,F,B,q,ee){let $=!1;const J=f(q,B,F);s!==J&&(s=J,l(s.object)),$=p(S,q,B,ee),$&&g(S,q,B,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(S,F,B,q),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,F,B){const q=B.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let $=ee[F.id];$===void 0&&($={},ee[F.id]=$);let J=$[q];return J===void 0&&(J=d(c()),$[q]=J),J}function d(S){const F=[],B=[],q=[];for(let ee=0;ee<t;ee++)F[ee]=0,B[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:q,object:S,attributes:{},index:null}}function p(S,F,B,q){const ee=s.attributes,$=F.attributes;let J=0;const ne=B.getAttributes();for(const k in ne)if(ne[k].location>=0){const pe=ee[k];let Pe=$[k];if(Pe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Pe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Pe=S.instanceColor)),pe===void 0||pe.attribute!==Pe||Pe&&pe.data!==Pe.data)return!0;J++}return s.attributesNum!==J||s.index!==q}function g(S,F,B,q){const ee={},$=F.attributes;let J=0;const ne=B.getAttributes();for(const k in ne)if(ne[k].location>=0){let pe=$[k];pe===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const Pe={};Pe.attribute=pe,pe&&pe.data&&(Pe.data=pe.data),ee[k]=Pe,J++}s.attributes=ee,s.attributesNum=J,s.index=q}function _(){const S=s.newAttributes;for(let F=0,B=S.length;F<B;F++)S[F]=0}function m(S){h(S,0)}function h(S,F){const B=s.newAttributes,q=s.enabledAttributes,ee=s.attributeDivisors;B[S]=1,q[S]===0&&(n.enableVertexAttribArray(S),q[S]=1),ee[S]!==F&&(n.vertexAttribDivisor(S,F),ee[S]=F)}function w(){const S=s.newAttributes,F=s.enabledAttributes;for(let B=0,q=F.length;B<q;B++)F[B]!==S[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function E(S,F,B,q,ee,$,J){J===!0?n.vertexAttribIPointer(S,F,B,ee,$):n.vertexAttribPointer(S,F,B,q,ee,$)}function y(S,F,B,q){_();const ee=q.attributes,$=B.getAttributes(),J=F.defaultAttributeValues;for(const ne in $){const k=$[ne];if(k.location>=0){let fe=ee[ne];if(fe===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const pe=fe.normalized,Pe=fe.itemSize,Oe=e.get(fe);if(Oe===void 0)continue;const Je=Oe.buffer,nt=Oe.type,it=Oe.bytesPerElement,te=nt===n.INT||nt===n.UNSIGNED_INT||fe.gpuType===Vc;if(fe.isInterleavedBufferAttribute){const re=fe.data,be=re.stride,Be=fe.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<k.locationSize;De++)h(k.location+De,re.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<k.locationSize;De++)m(k.location+De);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let De=0;De<k.locationSize;De++)E(k.location+De,Pe/k.locationSize,nt,pe,be*it,(Be+Pe/k.locationSize*De)*it,te)}else{if(fe.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)h(k.location+re,fe.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let re=0;re<k.locationSize;re++)m(k.location+re);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let re=0;re<k.locationSize;re++)E(k.location+re,Pe/k.locationSize,nt,pe,Pe*it,Pe/k.locationSize*re*it,te)}}else if(J!==void 0){const pe=J[ne];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(k.location,pe);break;case 3:n.vertexAttrib3fv(k.location,pe);break;case 4:n.vertexAttrib4fv(k.location,pe);break;default:n.vertexAttrib1fv(k.location,pe)}}}}w()}function P(){V();for(const S in i){const F=i[S];for(const B in F){const q=F[B];for(const ee in q)u(q[ee].object),delete q[ee];delete F[B]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const F=i[S.id];for(const B in F){const q=F[B];for(const ee in q)u(q[ee].object),delete q[ee];delete F[B]}delete i[S.id]}function D(S){for(const F in i){const B=i[F];if(B[S.id]===void 0)continue;const q=B[S.id];for(const ee in q)u(q[ee].object),delete q[ee];delete B[S.id]}}function V(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:V,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function U_(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function c(l,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function I_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==_n&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const V=D===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ti&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kn&&!V)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:P,maxSamples:T}}function F_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Oi,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,E=w*4;let y=h.clippingState||null;c.value=y,y=u(g,d,E,p);for(let P=0;P!==E;++P)y[P]=t[P];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=p+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,y=p;E!==_;++E,y+=4)a.copy(f[E]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function N_(n){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=Mr:o===No&&(a.mapping=br),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fo||o===No)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new L0(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const xi=4,pu=[.125,.215,.35,.446,.526,.582],zi=20,O_=256,Br=new pd,mu=new Qe;let so=null,ao=0,oo=0,co=!1;const B_=new U;class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=B_}=s;so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,ao,oo),this._renderer.xr.enabled=co,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:wr,format:_n,colorSpace:yr,depthBuffer:!1},r=gu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z_(s)),this._blurMaterial=G_(s,e,t),this._ggxMaterial=V_(s,e,t)}return r}_compileMaterial(e){const t=new Un(new an,e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,i,r,s){const c=new un(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(mu),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new ds,new jc({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,h=!0):(m.color.copy(mu),h=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));const P=this._cubeSize;ur(r,y*P,E>2?P:0,P,P),f.setRenderTarget(r),h&&f.render(_,c),f.render(e,c)}f.toneMapping=p,f.autoClear=d,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mr||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ur(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=.05+l*.95,p=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-xi?i-g+xi:0),h=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,ur(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(o,Br),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,ur(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(o,Br)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):zi;m>zi&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const h=[];let w=0;for(let D=0;D<zi;++D){const V=D/_,b=Math.exp(-V*V/2);h.push(b),D===0?w+=b:D<m&&(w+=2*b)}for(let D=0;D<h.length;D++)h[D]=h[D]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const y=this._sizeLods[r],P=3*y*(r>E-xi?r-E+xi:0),T=4*(this._cubeSize-y);ur(t,P,T,3*y,2*y),c.setRenderTarget(t),c.render(f,Br)}}function z_(n){const e=[],t=[],i=[];let r=n;const s=n-xi+1+pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-xi?c=pu[a-n+xi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,w=new Float32Array(_*g*p),E=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let T=0;T<p;T++){const D=T%3*2/3-1,V=T>2?0:-1,b=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];w.set(b,_*g*T),E.set(d,m*g*T);const S=[T,T,T,T,T,T];y.set(S,h*g*T)}const P=new an;P.setAttribute("position",new Sn(w,_)),P.setAttribute("uv",new Sn(E,m)),P.setAttribute("faceIndex",new Sn(y,h)),i.push(new Un(P,null)),r>xi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function gu(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function V_(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function G_(n,e,t){const i=new Float32Array(zi),r=new U(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function _u(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function vu(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fo||c===No,u=c===Mr||c===br;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xu(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new xu(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function k_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&os("WebGLRenderer: "+i+" extension not supported."),r}}}function W_(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let E=0,y=w.length;E<y;E+=3){const P=w[E+0],T=w[E+1],D=w[E+2];d.push(P,T,T,D,D,P)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){const P=E+0,T=E+1,D=E+2;d.push(P,T,T,D,D,P)}}else return;const m=new(ed(d)?ad:sd)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function X_(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*_[w];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Y_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:vt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q_(n,e,t){const i=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){V.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let P=o.attributes.position.count*y,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*T*4*f),V=new td(D,P,T,f);V.type=Kn,V.needsUpdate=!0;const b=y*4;for(let F=0;F<f;F++){const B=h[F],q=w[F],ee=E[F],$=P*T*4*F;for(let J=0;J<B.count;J++){const ne=J*b;g===!0&&(r.fromBufferAttribute(B,J),D[$+ne+0]=r.x,D[$+ne+1]=r.y,D[$+ne+2]=r.z,D[$+ne+3]=0),_===!0&&(r.fromBufferAttribute(q,J),D[$+ne+4]=r.x,D[$+ne+5]=r.y,D[$+ne+6]=r.z,D[$+ne+7]=0),m===!0&&(r.fromBufferAttribute(ee,J),D[$+ne+8]=r.x,D[$+ne+9]=r.y,D[$+ne+10]=r.z,D[$+ne+11]=ee.itemSize===4?r.w:1)}}d={count:f,texture:V,size:new Ke(P,T)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function K_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const xd=new Ht,Au=new dd(1,1),gd=new td,_d=new x0,vd=new ld,Su=[],Mu=[],bu=new Float32Array(16),yu=new Float32Array(9),Eu=new Float32Array(4);function Pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sa(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function $_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),bt(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),bt(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),bt(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=$f,s=Au):s=xd,t.setTexture2D(e||s,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_d,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vd,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gd,r)}function pv(n){switch(n){case 5126:return j_;case 35664:return Z_;case 35665:return Q_;case 35666:return J_;case 35674:return $_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return av;case 36294:return ov;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return hv}}function mv(n,e){n.uniform1fv(this.addr,e)}function xv(n,e){const t=Pr(e,this.size,2);n.uniform2fv(this.addr,t)}function gv(n,e){const t=Pr(e,this.size,3);n.uniform3fv(this.addr,t)}function _v(n,e){const t=Pr(e,this.size,4);n.uniform4fv(this.addr,t)}function vv(n,e){const t=Pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Av(n,e){const t=Pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sv(n,e){const t=Pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mv(n,e){n.uniform1iv(this.addr,e)}function bv(n,e){n.uniform2iv(this.addr,e)}function yv(n,e){n.uniform3iv(this.addr,e)}function Ev(n,e){n.uniform4iv(this.addr,e)}function Tv(n,e){n.uniform1uiv(this.addr,e)}function wv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Rv(n,e){n.uniform4uiv(this.addr,e)}function Pv(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xd,s[a])}function Dv(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_d,s[a])}function Lv(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vd,s[a])}function Uv(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gd,s[a])}function Iv(n){switch(n){case 5126:return mv;case 35664:return xv;case 35665:return gv;case 35666:return _v;case 35674:return vv;case 35675:return Av;case 35676:return Sv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return yv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return wv;case 36295:return Cv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Uv}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}}class Nv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iv(t.type)}}class Ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function Bv(n,e,t){const i=n.name,r=i.length;for(lo.lastIndex=0;;){const s=lo.exec(i),a=lo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Tu(t,l===void 0?new Fv(o,n,e):new Nv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ov(o),Tu(t,f)),t=f}}}class Qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Bv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zv=37297;let Vv=0;function Gv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Cu=new He;function Hv(n){Ze._getMatrix(Cu,Ze.workingColorSpace,n);const e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ra:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Gv(n.getShaderSource(e),o)}else return s}function kv(n,e){const t=Hv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wv(n,e){let t;switch(e){case Cm:t="Linear";break;case Rm:t="Reinhard";break;case Pm:t="Cineon";break;case Dm:t="ACESFilmic";break;case Um:t="AgX";break;case Im:t="Neutral";break;case Lm:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new U;function Xv(){Ze.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function qv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vr(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(jv,Qv)}const Zv=new Map;function Qv(n,e){let t=ke[e];if(t===void 0){const i=Zv.get(e);if(i!==void 0)t=ke[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(Jv,$v)}function $v(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===om?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function tA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case br:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function iA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Tm:e="ENVMAP_BLENDING_MIX";break;case wm:e="ENVMAP_BLENDING_ADD";break}return e}function rA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sA(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=eA(t),l=tA(t),u=nA(t),f=iA(t),d=rA(t),p=Yv(t),g=qv(s),_=r.createProgram();let m,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),h.length>0&&(h+=`
`)):(m=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),h=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ke.tonemapping_pars_fragment:"",t.toneMapping!==vi?Wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=gc(a),a=Pu(a,t),a=Du(a,t),o=gc(o),o=Pu(o,t),o=Du(o,t),a=Lu(a),o=Lu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=w+m+a,y=w+h+o,P=wu(r,r.VERTEX_SHADER,E),T=wu(r,r.FRAGMENT_SHADER,y);r.attachShader(_,P),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(F){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",q=r.getShaderInfoLog(P)||"",ee=r.getShaderInfoLog(T)||"",$=B.trim(),J=q.trim(),ne=ee.trim();let k=!0,fe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,T);else{const pe=Ru(r,P,"vertex"),Pe=Ru(r,T,"fragment");vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+$+`
`+pe+`
`+Pe)}else $!==""?Ve("WebGLProgram: Program Info Log:",$):(J===""||ne==="")&&(fe=!1);fe&&(F.diagnostics={runnable:k,programLog:$,vertexShader:{log:J,prefix:m},fragmentShader:{log:ne,prefix:h}})}r.deleteShader(P),r.deleteShader(T),V=new Qs(r,_),b=Kv(r,_)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,zv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let aA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cA(e),t.set(e,i)),i}}class cA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function lA(n,e,t,i,r,s,a){const o=new id,c=new oA,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,F,B,q){const ee=B.fog,$=q.geometry,J=b.isMeshStandardMaterial?B.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||J),k=ne&&ne.mapping===_a?ne.image.height:null,fe=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Pe=pe!==void 0?pe.length:0;let Oe=0;$.morphAttributes.position!==void 0&&(Oe=1),$.morphAttributes.normal!==void 0&&(Oe=2),$.morphAttributes.color!==void 0&&(Oe=3);let Je,nt,it,te;if(fe){const rt=Yt[fe];Je=rt.vertexShader,nt=rt.fragmentShader}else Je=b.vertexShader,nt=b.fragmentShader,c.update(b),it=c.getVertexShaderID(b),te=c.getFragmentShaderID(b);const re=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Be=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,Ye=!!b.map,C=!!b.matcap,R=!!ne,G=!!b.aoMap,M=!!b.lightMap,j=!!b.bumpMap,Z=!!b.normalMap,oe=!!b.displacementMap,Y=!!b.emissiveMap,se=!!b.metalnessMap,H=!!b.roughnessMap,ce=b.anisotropy>0,v=b.clearcoat>0,x=b.dispersion>0,I=b.iridescence>0,W=b.sheen>0,Q=b.transmission>0,z=ce&&!!b.anisotropyMap,Ae=v&&!!b.clearcoatMap,ue=v&&!!b.clearcoatNormalMap,Ee=v&&!!b.clearcoatRoughnessMap,Me=I&&!!b.iridescenceMap,ae=I&&!!b.iridescenceThicknessMap,de=W&&!!b.sheenColorMap,Te=W&&!!b.sheenRoughnessMap,we=!!b.specularMap,ve=!!b.specularColorMap,Ie=!!b.specularIntensityMap,L=Q&&!!b.transmissionMap,_e=Q&&!!b.thicknessMap,me=!!b.gradientMap,xe=!!b.alphaMap,le=b.alphaTest>0,ie=!!b.alphaHash,Ce=!!b.extensions;let ze=vi;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ze=n.toneMapping);const ft={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:nt,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:Be,instancingColor:Be&&q.instanceColor!==null,instancingMorph:Be&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:yr,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:C,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:k,aoMap:G,lightMap:M,bumpMap:j,normalMap:Z,displacementMap:d&&oe,emissiveMap:Y,normalMapObjectSpace:Z&&b.normalMapType===zm,normalMapTangentSpace:Z&&b.normalMapType===Bm,metalnessMap:se,roughnessMap:H,anisotropy:ce,anisotropyMap:z,clearcoat:v,clearcoatMap:Ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:I,iridescenceMap:Me,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:we,specularColorMap:ve,specularIntensityMap:Ie,transmission:Q,transmissionMap:L,thicknessMap:_e,gradientMap:me,opaque:b.transparent===!1&&b.blending===gr&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:le,alphaHash:ie,combine:b.combine,mapUv:Ye&&_(b.map.channel),aoMapUv:G&&_(b.aoMap.channel),lightMapUv:M&&_(b.lightMap.channel),bumpMapUv:j&&_(b.bumpMap.channel),normalMapUv:Z&&_(b.normalMap.channel),displacementMapUv:oe&&_(b.displacementMap.channel),emissiveMapUv:Y&&_(b.emissiveMap.channel),metalnessMapUv:se&&_(b.metalnessMap.channel),roughnessMapUv:H&&_(b.roughnessMap.channel),anisotropyMapUv:z&&_(b.anisotropyMap.channel),clearcoatMapUv:Ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(b.sheenRoughnessMap.channel),specularMapUv:we&&_(b.specularMap.channel),specularColorMapUv:ve&&_(b.specularColorMap.channel),specularIntensityMapUv:Ie&&_(b.specularIntensityMap.channel),transmissionMapUv:L&&_(b.transmissionMap.channel),thicknessMapUv:_e&&_(b.thicknessMap.channel),alphaMapUv:xe&&_(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Z||ce),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!$.attributes.uv&&(Ye||xe),fog:!!ee,useFog:b.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:q.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:Y&&b.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Yn,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function h(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)S.push(F),S.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(w(S,b),E(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function E(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const S=g[b.type];let F;if(S){const B=Yt[S];F=Zc.clone(B.uniforms)}else F=b.uniforms;return F}function P(b,S){let F;for(let B=0,q=u.length;B<q;B++){const ee=u[B];if(ee.cacheKey===S){F=ee,++F.usedTimes;break}}return F===void 0&&(F=new sA(n,S,b,s),u.push(F)),F}function T(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function D(b){c.remove(b)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:P,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:V}}function uA(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function fA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Iu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,p,g,_,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function o(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||fA),i.length>1&&i.sort(d||Iu),r.length>1&&r.sort(d||Iu)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function dA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Fu,n.set(i,[a])):r>=s.length?(a=new Fu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Qe};break;case"SpotLight":t={position:new U,direction:new U,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function pA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mA=0;function xA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gA(n){const e=new hA,t=pA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new xt,a=new xt;function o(l){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,w=0,E=0,y=0,P=0,T=0,D=0;l.sort(xA);for(let b=0,S=l.length;b<S;b++){const F=l[b],B=F.color,q=F.intensity,ee=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=B.r*q,f+=B.g*q,d+=B.b*q;else if(F.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(F.sh.coefficients[J],q);D++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ne=F.shadow,k=t.get(F);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=F.shadow.matrix,w++}i.directional[p]=J,p++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(B).multiplyScalar(q),J.distance=ee,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,i.spot[_]=J;const ne=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,ne.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[_]=ne.matrix,F.castShadow){const k=t.get(F);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=$,y++}_++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(B).multiplyScalar(q),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=J,m++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const ne=F.shadow,k=t.get(F);k.shadowIntensity=ne.intensity,k.shadowBias=ne.bias,k.shadowNormalBias=ne.normalBias,k.shadowRadius=ne.radius,k.shadowMapSize=ne.mapSize,k.shadowCameraNear=ne.camera.near,k.shadowCameraFar=ne.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=F.shadow.matrix,E++}i.point[g]=J,g++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(q),J.groundColor.copy(F.groundColor).multiplyScalar(q),i.hemi[h]=J,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const V=i.hash;(V.directionalLength!==p||V.pointLength!==g||V.spotLength!==_||V.rectAreaLength!==m||V.hemiLength!==h||V.numDirectionalShadows!==w||V.numPointShadows!==E||V.numSpotShadows!==y||V.numSpotMaps!==P||V.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,V.directionalLength=p,V.pointLength=g,V.spotLength=_,V.rectAreaLength=m,V.hemiLength=h,V.numDirectionalShadows=w,V.numPointShadows=E,V.numSpotShadows=y,V.numSpotMaps=P,V.numLightProbes=D,i.version=mA++)}function c(l,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const E=l[h];if(E.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Nu(n){const e=new gA(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function _A(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nu(n),e.set(r,[o])):s>=a.length?(o=new Nu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(n,e,t){let i=new ud;const r=new Ke,s=new Ke,a=new ut,o=new H0({depthPacking:Om}),c=new k0,l={},u=t.maxTextureSize,f={[Mi]:qt,[qt]:Mi,[Yn]:Yn},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:vA,fragmentShader:AA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let h=this.type;this.render=function(T,D,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(jn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=h!==Hn&&this.type===Hn,ee=h===Hn&&this.type!==Hn;for(let $=0,J=T.length;$<J;$++){const ne=T[$],k=ne.shadow;if(k===void 0){Ve("WebGLShadowMap:",ne,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const fe=k.getFrameExtents();if(r.multiply(fe),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,k.mapSize.y=s.y)),k.map===null||q===!0||ee===!0){const Pe=this.type!==Hn?{minFilter:sn,magFilter:sn}:{};k.map!==null&&k.map.dispose(),k.map=new Wi(r.x,r.y,Pe),k.map.texture.name=ne.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const pe=k.getViewportCount();for(let Pe=0;Pe<pe;Pe++){const Oe=k.getViewport(Pe);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),B.viewport(a),k.updateMatrices(ne,Pe),i=k.getFrustum(),y(D,V,k.camera,ne,this.type)}k.isPointLightShadow!==!0&&this.type===Hn&&w(k,V),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,F)};function w(T,D){const V=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,V,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,V,p,_,null)}function E(T,D,V,b){let S=null;const F=V.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)S=F;else if(S=V.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const B=S.uuid,q=D.uuid;let ee=l[B];ee===void 0&&(ee={},l[B]=ee);let $=ee[q];$===void 0&&($=S.clone(),ee[q]=$,D.addEventListener("dispose",P)),S=$}if(S.visible=D.visible,S.wireframe=D.wireframe,b===Hn?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=V}return S}function y(T,D,V,b,S){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Hn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld);const q=e.update(T),ee=T.material;if(Array.isArray(ee)){const $=q.groups;for(let J=0,ne=$.length;J<ne;J++){const k=$[J],fe=ee[k.materialIndex];if(fe&&fe.visible){const pe=E(T,fe,b,S);T.onBeforeShadow(n,T,D,V,q,pe,k),n.renderBufferDirect(V,null,q,pe,T,k),T.onAfterShadow(n,T,D,V,q,pe,k)}}}else if(ee.visible){const $=E(T,ee,b,S);T.onBeforeShadow(n,T,D,V,q,$,null),n.renderBufferDirect(V,null,q,$,T,null),T.onAfterShadow(n,T,D,V,q,$,null)}}const B=T.children;for(let q=0,ee=B.length;q<ee;q++)y(B[q],D,V,b,S)}function P(T){T.target.removeEventListener("dispose",P);for(const V in l){const b=l[V],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const MA={[Co]:Ro,[Po]:Uo,[Do]:Io,[Sr]:Lo,[Ro]:Co,[Uo]:Po,[Io]:Do,[Lo]:Sr};function bA(n,e){function t(){let L=!1;const _e=new ut;let me=null;const xe=new ut(0,0,0,0);return{setMask:function(le){me!==le&&!L&&(n.colorMask(le,le,le,le),me=le)},setLocked:function(le){L=le},setClear:function(le,ie,Ce,ze,ft){ft===!0&&(le*=ze,ie*=ze,Ce*=ze),_e.set(le,ie,Ce,ze),xe.equals(_e)===!1&&(n.clearColor(le,ie,Ce,ze),xe.copy(_e))},reset:function(){L=!1,me=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,_e=!1,me=null,xe=null,le=null;return{setReversed:function(ie){if(_e!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),_e=ie;const ze=le;le=null,this.setClear(ze)}},getReversed:function(){return _e},setTest:function(ie){ie?re(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ie){me!==ie&&!L&&(n.depthMask(ie),me=ie)},setFunc:function(ie){if(_e&&(ie=MA[ie]),xe!==ie){switch(ie){case Co:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Po:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case Do:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Uo:n.depthFunc(n.GREATER);break;case Io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ie}},setLocked:function(ie){L=ie},setClear:function(ie){le!==ie&&(_e&&(ie=1-ie),n.clearDepth(ie),le=ie)},reset:function(){L=!1,me=null,xe=null,le=null,_e=!1}}}function r(){let L=!1,_e=null,me=null,xe=null,le=null,ie=null,Ce=null,ze=null,ft=null;return{setTest:function(rt){L||(rt?re(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(rt){_e!==rt&&!L&&(n.stencilMask(rt),_e=rt)},setFunc:function(rt,Mn,dn){(me!==rt||xe!==Mn||le!==dn)&&(n.stencilFunc(rt,Mn,dn),me=rt,xe=Mn,le=dn)},setOp:function(rt,Mn,dn){(ie!==rt||Ce!==Mn||ze!==dn)&&(n.stencilOp(rt,Mn,dn),ie=rt,Ce=Mn,ze=dn)},setLocked:function(rt){L=rt},setClear:function(rt){ft!==rt&&(n.clearStencil(rt),ft=rt)},reset:function(){L=!1,_e=null,me=null,xe=null,le=null,ie=null,Ce=null,ze=null,ft=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,E=null,y=null,P=null,T=null,D=new Qe(0,0,0),V=0,b=!1,S=null,F=null,B=null,q=null,ee=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=ne>=1):k.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=ne>=2);let fe=null,pe={};const Pe=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Je=new ut().fromArray(Pe),nt=new ut().fromArray(Oe);function it(L,_e,me,xe){const le=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<me;Ce++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(_e+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ie}const te={};te[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(Sr),j(!1),Z(zl),re(n.CULL_FACE),G(jn);function re(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Be(L,_e){return f[L]!==_e?(n.bindFramebuffer(L,_e),f[L]=_e,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function De(L,_e){let me=p,xe=!1;if(L){me=d.get(_e),me===void 0&&(me=[],d.set(_e,me));const le=L.textures;if(me.length!==le.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ce=le.length;ie<Ce;ie++)me[ie]=n.COLOR_ATTACHMENT0+ie;me.length=le.length,xe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,xe=!0);xe&&n.drawBuffers(me)}function Ye(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const C={[Bi]:n.FUNC_ADD,[lm]:n.FUNC_SUBTRACT,[um]:n.FUNC_REVERSE_SUBTRACT};C[fm]=n.MIN,C[dm]=n.MAX;const R={[hm]:n.ZERO,[pm]:n.ONE,[mm]:n.SRC_COLOR,[To]:n.SRC_ALPHA,[Sm]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[gm]:n.DST_ALPHA,[xm]:n.ONE_MINUS_SRC_COLOR,[wo]:n.ONE_MINUS_SRC_ALPHA,[Am]:n.ONE_MINUS_DST_COLOR,[_m]:n.ONE_MINUS_DST_ALPHA,[Mm]:n.CONSTANT_COLOR,[bm]:n.ONE_MINUS_CONSTANT_COLOR,[ym]:n.CONSTANT_ALPHA,[Em]:n.ONE_MINUS_CONSTANT_ALPHA};function G(L,_e,me,xe,le,ie,Ce,ze,ft,rt){if(L===jn){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),L!==cm){if(L!==m||rt!==b){if((h!==Bi||y!==Bi)&&(n.blendEquation(n.FUNC_ADD),h=Bi,y=Bi),rt)switch(L){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:vt("WebGLState: Invalid blending: ",L);break}else switch(L){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gl:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",L);break}w=null,E=null,P=null,T=null,D.set(0,0,0),V=0,m=L,b=rt}return}le=le||_e,ie=ie||me,Ce=Ce||xe,(_e!==h||le!==y)&&(n.blendEquationSeparate(C[_e],C[le]),h=_e,y=le),(me!==w||xe!==E||ie!==P||Ce!==T)&&(n.blendFuncSeparate(R[me],R[xe],R[ie],R[Ce]),w=me,E=xe,P=ie,T=Ce),(ze.equals(D)===!1||ft!==V)&&(n.blendColor(ze.r,ze.g,ze.b,ft),D.copy(ze),V=ft),m=L,b=!1}function M(L,_e){L.side===Yn?be(n.CULL_FACE):re(n.CULL_FACE);let me=L.side===qt;_e&&(me=!me),j(me),L.blending===gr&&L.transparent===!1?G(jn):G(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Y(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function Z(L){L!==sm?(re(n.CULL_FACE),L!==F&&(L===zl?n.cullFace(n.BACK):L===am?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),F=L}function oe(L){L!==B&&(J&&n.lineWidth(L),B=L)}function Y(L,_e,me){L?(re(n.POLYGON_OFFSET_FILL),(q!==_e||ee!==me)&&(n.polygonOffset(_e,me),q=_e,ee=me)):be(n.POLYGON_OFFSET_FILL)}function se(L){L?re(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function H(L){L===void 0&&(L=n.TEXTURE0+$-1),fe!==L&&(n.activeTexture(L),fe=L)}function ce(L,_e,me){me===void 0&&(fe===null?me=n.TEXTURE0+$-1:me=fe);let xe=pe[me];xe===void 0&&(xe={type:void 0,texture:void 0},pe[me]=xe),(xe.type!==L||xe.texture!==_e)&&(fe!==me&&(n.activeTexture(me),fe=me),n.bindTexture(L,_e||te[L]),xe.type=L,xe.texture=_e)}function v(){const L=pe[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function W(){try{n.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ue(){try{n.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ee(){try{n.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Me(){try{n.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ae(){try{n.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function de(L){Je.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Je.copy(L))}function Te(L){nt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function we(L,_e){let me=l.get(_e);me===void 0&&(me=new WeakMap,l.set(_e,me));let xe=me.get(L);xe===void 0&&(xe=n.getUniformBlockIndex(_e,L.name),me.set(L,xe))}function ve(L,_e){const xe=l.get(_e).get(L);c.get(_e)!==xe&&(n.uniformBlockBinding(_e,xe,L.__bindingPointIndex),c.set(_e,xe))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,pe={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,E=null,y=null,P=null,T=null,D=new Qe(0,0,0),V=0,b=!1,S=null,F=null,B=null,q=null,ee=null,Je.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:be,bindFramebuffer:Be,drawBuffers:De,useProgram:Ye,setBlending:G,setMaterial:M,setFlipSided:j,setCullFace:Z,setLineWidth:oe,setPolygonOffset:Y,setScissorTest:se,activeTexture:H,bindTexture:ce,unbindTexture:v,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Me,texImage3D:ae,updateUBOMapping:we,uniformBlockBinding:ve,texStorage2D:ue,texStorage3D:Ee,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:z,compressedTexSubImage3D:Ae,scissor:de,viewport:Te,reset:Ie}}function yA(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,x){return p?new OffscreenCanvas(v,x):aa("canvas")}function _(v,x,I){let W=1;const Q=ce(v);if((Q.width>I||Q.height>I)&&(W=I/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const z=Math.floor(W*Q.width),Ae=Math.floor(W*Q.height);f===void 0&&(f=g(z,Ae));const ue=x?g(z,Ae):f;return ue.width=z,ue.height=Ae,ue.getContext("2d").drawImage(v,0,0,z,Ae),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+z+"x"+Ae+")."),ue}else return"data"in v&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),v;return v}function m(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function w(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,x,I,W,Q=!1){if(v!==null){if(n[v]!==void 0)return n[v];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let z=x;if(x===n.RED&&(I===n.FLOAT&&(z=n.R32F),I===n.HALF_FLOAT&&(z=n.R16F),I===n.UNSIGNED_BYTE&&(z=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.R8UI),I===n.UNSIGNED_SHORT&&(z=n.R16UI),I===n.UNSIGNED_INT&&(z=n.R32UI),I===n.BYTE&&(z=n.R8I),I===n.SHORT&&(z=n.R16I),I===n.INT&&(z=n.R32I)),x===n.RG&&(I===n.FLOAT&&(z=n.RG32F),I===n.HALF_FLOAT&&(z=n.RG16F),I===n.UNSIGNED_BYTE&&(z=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.RG8UI),I===n.UNSIGNED_SHORT&&(z=n.RG16UI),I===n.UNSIGNED_INT&&(z=n.RG32UI),I===n.BYTE&&(z=n.RG8I),I===n.SHORT&&(z=n.RG16I),I===n.INT&&(z=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.RGB8UI),I===n.UNSIGNED_SHORT&&(z=n.RGB16UI),I===n.UNSIGNED_INT&&(z=n.RGB32UI),I===n.BYTE&&(z=n.RGB8I),I===n.SHORT&&(z=n.RGB16I),I===n.INT&&(z=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),I===n.UNSIGNED_INT&&(z=n.RGBA32UI),I===n.BYTE&&(z=n.RGBA8I),I===n.SHORT&&(z=n.RGBA16I),I===n.INT&&(z=n.RGBA32I)),x===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),x===n.RGBA){const Ae=Q?ra:Ze.getTransfer(W);I===n.FLOAT&&(z=n.RGBA32F),I===n.HALF_FLOAT&&(z=n.RGBA16F),I===n.UNSIGNED_BYTE&&(z=Ae===at?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function y(v,x){let I;return v?x===null||x===ki||x===rs?I=n.DEPTH24_STENCIL8:x===Kn?I=n.DEPTH32F_STENCIL8:x===is&&(I=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===rs?I=n.DEPTH_COMPONENT24:x===Kn?I=n.DEPTH_COMPONENT32F:x===is&&(I=n.DEPTH_COMPONENT16),I}function P(v,x){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==sn&&v.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function T(v){const x=v.target;x.removeEventListener("dispose",T),V(x),x.isVideoTexture&&u.delete(x)}function D(v){const x=v.target;x.removeEventListener("dispose",D),S(x)}function V(v){const x=i.get(v);if(x.__webglInit===void 0)return;const I=v.source,W=d.get(I);if(W){const Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(v),Object.keys(W).length===0&&d.delete(I)}i.remove(v)}function b(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const I=v.source,W=d.get(I);delete W[x.__cacheKey],a.memory.textures--}function S(v){const x=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Q=0;Q<x.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=v.textures;for(let W=0,Q=I.length;W<Q;W++){const z=i.get(I[W]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(I[W])}i.remove(v)}let F=0;function B(){F=0}function q(){const v=F;return v>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),F+=1,v}function ee(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function $(v,x){const I=i.get(v);if(v.isVideoTexture&&se(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&I.__version!==v.version){const W=v.image;if(W===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,v,x);return}}else v.isExternalTexture&&(I.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function J(v,x){const I=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&I.__version!==v.version){te(I,v,x);return}else v.isExternalTexture&&(I.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function ne(v,x){const I=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&I.__version!==v.version){te(I,v,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function k(v,x){const I=i.get(v);if(v.version>0&&I.__version!==v.version){re(I,v,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const fe={[Oo]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},pe={[sn]:n.NEAREST,[Fm]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},Pe={[Vm]:n.NEVER,[Ym]:n.ALWAYS,[Gm]:n.LESS,[$f]:n.LEQUAL,[Hm]:n.EQUAL,[Xm]:n.GEQUAL,[km]:n.GREATER,[Wm]:n.NOTEQUAL};function Oe(v,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===Fa||x.magFilter===_s||x.magFilter===Vi||x.minFilter===fn||x.minFilter===Fa||x.minFilter===_s||x.minFilter===Vi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,fe[x.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,fe[x.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,fe[x.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,pe[x.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===sn||x.minFilter!==_s&&x.minFilter!==Vi||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Je(v,x){let I=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",T));const W=x.source;let Q=d.get(W);Q===void 0&&(Q={},d.set(W,Q));const z=ee(x);if(z!==v.__cacheKey){Q[z]===void 0&&(Q[z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Q[z].usedTimes++;const Ae=Q[v.__cacheKey];Ae!==void 0&&(Q[v.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(x)),v.__cacheKey=z,v.__webglTexture=Q[z].texture}return I}function nt(v,x,I){return Math.floor(Math.floor(v/I)/x)}function it(v,x,I,W){const z=v.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,I,W,x.data);else{z.sort((ae,de)=>ae.start-de.start);let Ae=0;for(let ae=1;ae<z.length;ae++){const de=z[Ae],Te=z[ae],we=de.start+de.count,ve=nt(Te.start,x.width,4),Ie=nt(de.start,x.width,4);Te.start<=we+1&&ve===Ie&&nt(Te.start+Te.count-1,x.width,4)===ve?de.count=Math.max(de.count,Te.start+Te.count-de.start):(++Ae,z[Ae]=Te)}z.length=Ae+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ae=0,de=z.length;ae<de;ae++){const Te=z[ae],we=Math.floor(Te.start/4),ve=Math.ceil(Te.count/4),Ie=we%x.width,L=Math.floor(we/x.width),_e=ve,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ie,L,_e,me,I,W,x.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function te(v,x,I){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const Q=Je(v,x),z=x.source;t.bindTexture(W,v.__webglTexture,n.TEXTURE0+I);const Ae=i.get(z);if(z.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const ue=Ze.getPrimaries(Ze.workingColorSpace),Ee=x.colorSpace===pi?null:Ze.getPrimaries(x.colorSpace),Me=x.colorSpace===pi||ue===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ae=_(x.image,!1,r.maxTextureSize);ae=H(x,ae);const de=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let we=E(x.internalFormat,de,Te,x.colorSpace,x.isVideoTexture);Oe(W,x);let ve;const Ie=x.mipmaps,L=x.isVideoTexture!==!0,_e=Ae.__version===void 0||Q===!0,me=z.dataReady,xe=P(x,ae);if(x.isDepthTexture)we=y(x.format===as,x.type),_e&&(L?t.texStorage2D(n.TEXTURE_2D,1,we,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,we,ae.width,ae.height,0,de,Te,null));else if(x.isDataTexture)if(Ie.length>0){L&&_e&&t.texStorage2D(n.TEXTURE_2D,xe,we,Ie[0].width,Ie[0].height);for(let le=0,ie=Ie.length;le<ie;le++)ve=Ie[le],L?me&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,de,Te,ve.data):t.texImage2D(n.TEXTURE_2D,le,we,ve.width,ve.height,0,de,Te,ve.data);x.generateMipmaps=!1}else L?(_e&&t.texStorage2D(n.TEXTURE_2D,xe,we,ae.width,ae.height),me&&it(x,ae,de,Te)):t.texImage2D(n.TEXTURE_2D,0,we,ae.width,ae.height,0,de,Te,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,we,Ie[0].width,Ie[0].height,ae.depth);for(let le=0,ie=Ie.length;le<ie;le++)if(ve=Ie[le],x.format!==_n)if(de!==null)if(L){if(me)if(x.layerUpdates.size>0){const Ce=hu(ve.width,ve.height,x.format,x.type);for(const ze of x.layerUpdates){const ft=ve.data.subarray(ze*Ce/ve.data.BYTES_PER_ELEMENT,(ze+1)*Ce/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ze,ve.width,ve.height,1,de,ft)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,ae.depth,de,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,we,ve.width,ve.height,ae.depth,0,ve.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,ae.depth,de,Te,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,we,ve.width,ve.height,ae.depth,0,de,Te,ve.data)}else{L&&_e&&t.texStorage2D(n.TEXTURE_2D,xe,we,Ie[0].width,Ie[0].height);for(let le=0,ie=Ie.length;le<ie;le++)ve=Ie[le],x.format!==_n?de!==null?L?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,de,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,le,we,ve.width,ve.height,0,ve.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?me&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve.width,ve.height,de,Te,ve.data):t.texImage2D(n.TEXTURE_2D,le,we,ve.width,ve.height,0,de,Te,ve.data)}else if(x.isDataArrayTexture)if(L){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,we,ae.width,ae.height,ae.depth),me)if(x.layerUpdates.size>0){const le=hu(ae.width,ae.height,x.format,x.type);for(const ie of x.layerUpdates){const Ce=ae.data.subarray(ie*le/ae.data.BYTES_PER_ELEMENT,(ie+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,de,Te,Ce)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,Te,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,de,Te,ae.data);else if(x.isData3DTexture)L?(_e&&t.texStorage3D(n.TEXTURE_3D,xe,we,ae.width,ae.height,ae.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,Te,ae.data)):t.texImage3D(n.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,de,Te,ae.data);else if(x.isFramebufferTexture){if(_e)if(L)t.texStorage2D(n.TEXTURE_2D,xe,we,ae.width,ae.height);else{let le=ae.width,ie=ae.height;for(let Ce=0;Ce<xe;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,we,le,ie,0,de,Te,null),le>>=1,ie>>=1}}else if(Ie.length>0){if(L&&_e){const le=ce(Ie[0]);t.texStorage2D(n.TEXTURE_2D,xe,we,le.width,le.height)}for(let le=0,ie=Ie.length;le<ie;le++)ve=Ie[le],L?me&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,de,Te,ve):t.texImage2D(n.TEXTURE_2D,le,we,de,Te,ve);x.generateMipmaps=!1}else if(L){if(_e){const le=ce(ae);t.texStorage2D(n.TEXTURE_2D,xe,we,le.width,le.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Te,ae)}else t.texImage2D(n.TEXTURE_2D,0,we,de,Te,ae);m(x)&&h(W),Ae.__version=z.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function re(v,x,I){if(x.image.length!==6)return;const W=Je(v,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+I);const z=i.get(Q);if(Q.version!==z.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const Ae=Ze.getPrimaries(Ze.workingColorSpace),ue=x.colorSpace===pi?null:Ze.getPrimaries(x.colorSpace),Ee=x.colorSpace===pi||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!Me&&!ae?de[ie]=_(x.image[ie],!0,r.maxCubemapSize):de[ie]=ae?x.image[ie].image:x.image[ie],de[ie]=H(x,de[ie]);const Te=de[0],we=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Ie=E(x.internalFormat,we,ve,x.colorSpace),L=x.isVideoTexture!==!0,_e=z.__version===void 0||W===!0,me=Q.dataReady;let xe=P(x,Te);Oe(n.TEXTURE_CUBE_MAP,x);let le;if(Me){L&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ie,Te.width,Te.height);for(let ie=0;ie<6;ie++){le=de[ie].mipmaps;for(let Ce=0;Ce<le.length;Ce++){const ze=le[Ce];x.format!==_n?we!==null?L?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,ze.width,ze.height,we,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Ie,ze.width,ze.height,0,ze.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,ze.width,ze.height,we,ve,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Ie,ze.width,ze.height,0,we,ve,ze.data)}}}else{if(le=x.mipmaps,L&&_e){le.length>0&&xe++;const ie=ce(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ie,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,we,ve,de[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,de[ie].width,de[ie].height,0,we,ve,de[ie].data);for(let Ce=0;Ce<le.length;Ce++){const ft=le[Ce].image[ie].image;L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,ft.width,ft.height,we,ve,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Ie,ft.width,ft.height,0,we,ve,ft.data)}}else{L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,ve,de[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,we,ve,de[ie]);for(let Ce=0;Ce<le.length;Ce++){const ze=le[Ce];L?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,we,ve,ze.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Ie,we,ve,ze.image[ie])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),z.__version=Q.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function be(v,x,I,W,Q,z){const Ae=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),Ee=E(I.internalFormat,Ae,ue,I.colorSpace),Me=i.get(x),ae=i.get(I);if(ae.__renderTarget=x,!Me.__hasExternalTextures){const de=Math.max(1,x.width>>z),Te=Math.max(1,x.height>>z);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,z,Ee,de,Te,x.depth,0,Ae,ue,null):t.texImage2D(Q,z,Ee,de,Te,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,ae.__webglTexture,0,oe(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,ae.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(v,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,v),x.depthBuffer){const W=x.depthTexture,Q=W&&W.isDepthTexture?W.type:null,z=y(x.stencilBuffer,Q),Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=oe(x);Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,z,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,v)}else{const W=x.textures;for(let Q=0;Q<W.length;Q++){const z=W[Q],Ae=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),Ee=E(z.internalFormat,Ae,ue,z.colorSpace),Me=oe(x);I&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Ee,x.width,x.height):Y(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,Ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Q=W.__webglTexture,z=oe(x);if(x.depthTexture.format===ss)Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===as)Y(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(v){const x=i.get(v),I=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=W}if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const W=v.texture.mipmaps;W&&W.length>0?De(x.__webglFramebuffer[0],v):De(x.__webglFramebuffer,v)}else if(I){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Be(x.__webglDepthbuffer[W],v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,z)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Be(x.__webglDepthbuffer,v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(v,x,I){const W=i.get(v);x!==void 0&&be(W.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ye(v)}function R(v){const x=v.texture,I=i.get(v),W=i.get(x);v.addEventListener("dispose",D);const Q=v.textures,z=v.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),z){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)I.__webglFramebuffer[ue][Ee]=n.createFramebuffer()}else I.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)I.__webglFramebuffer[ue]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,Ee=Q.length;ue<Ee;ue++){const Me=i.get(Q[ue]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&Y(v)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const Ee=Q[ue];I.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Me=s.convert(Ee.format,Ee.colorSpace),ae=s.convert(Ee.type),de=E(Ee.internalFormat,Me,ae,Ee.colorSpace,v.isXRRenderTarget===!0),Te=oe(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,de,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(I.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)be(I.__webglFramebuffer[ue][Ee],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee);else be(I.__webglFramebuffer[ue],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,Ee=Q.length;ue<Ee;ue++){const Me=Q[ue],ae=i.get(Me);let de=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(de=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ae.__webglTexture),Oe(de,Me),be(I.__webglFramebuffer,v,Me,n.COLOR_ATTACHMENT0+ue,de,0),m(Me)&&h(de)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ue=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),Oe(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)be(I.__webglFramebuffer[Ee],v,x,n.COLOR_ATTACHMENT0,ue,Ee);else be(I.__webglFramebuffer,v,x,n.COLOR_ATTACHMENT0,ue,0);m(x)&&h(ue),t.unbindTexture()}v.depthBuffer&&Ye(v)}function G(v){const x=v.textures;for(let I=0,W=x.length;I<W;I++){const Q=x[I];if(m(Q)){const z=w(v),Ae=i.get(Q).__webglTexture;t.bindTexture(z,Ae),h(z),t.unbindTexture()}}}const M=[],j=[];function Z(v){if(v.samples>0){if(Y(v)===!1){const x=v.textures,I=v.width,W=v.height;let Q=n.COLOR_BUFFER_BIT;const z=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(v),ue=x.length>1;if(ue)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=v.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const ae=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,Q,n.NEAREST),c===!0&&(M.length=0,j.length=0,M.push(n.COLOR_ATTACHMENT0+Me),v.depthBuffer&&v.resolveDepthBuffer===!1&&(M.push(z),j.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,M))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const ae=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const x=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function oe(v){return Math.min(r.maxSamples,v.samples)}function Y(v){const x=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function se(v){const x=a.render.frame;u.get(v)!==x&&(u.set(v,x),v.update())}function H(v,x){const I=v.colorSpace,W=v.format,Q=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||I!==yr&&I!==pi&&(Ze.getTransfer(I)===at?(W!==_n||Q!==ti)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",I)),x}function ce(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=C,this.setupRenderTarget=R,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Y}function EA(n,e){function t(i,r=pi){let s;const a=Ze.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===Gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yf)return n.BYTE;if(i===qf)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===Vc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===wr)return n.HALF_FLOAT;if(i===Zf)return n.ALPHA;if(i===Qf)return n.RGB;if(i===_n)return n.RGBA;if(i===ss)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===Jf)return n.RED;if(i===kc)return n.RED_INTEGER;if(i===Wc)return n.RG;if(i===Xc)return n.RG_INTEGER;if(i===Yc)return n.RGBA_INTEGER;if(i===qs||i===Ks||i===js||i===Zs)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Vo||i===Go||i===Ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ko||i===Wo)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yo||i===qo||i===Ko||i===jo||i===Zo||i===Qo||i===Jo||i===$o||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jo)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$o)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===oc||i===cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===uc||i===fc||i===dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new hd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:TA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends Cr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new CA,h={},w=t.getContextAttributes();let E=null,y=null;const P=[],T=[],D=new Ke;let V=null;const b=new un;b.viewport=new ut;const S=new un;S.viewport=new ut;const F=[b,S],B=new X0;let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=P[te];return re===void 0&&(re=new no,P[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=P[te];return re===void 0&&(re=new no,P[te]=re),re.getGripSpace()},this.getHand=function(te){let re=P[te];return re===void 0&&(re=new no,P[te]=re),re.getHandSpace()};function $(te){const re=T.indexOf(te.inputSource);if(re===-1)return;const be=P[re];be!==void 0&&(be.update(te.inputSource,te.frame,l||a),be.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ne);for(let te=0;te<P.length;te++){const re=T[te];re!==null&&(T[te]=null,P[te].disconnect(re))}q=null,ee=null,m.reset();for(const te in h)delete h[te];e.setRenderTarget(E),p=null,d=null,f=null,r=null,y=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,De=null;w.depth&&(De=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=w.stencil?as:ss,Be=w.stencil?rs:ki);const Ye={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wi(d.textureWidth,d.textureHeight,{format:_n,type:ti,depthTexture:new dd(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Wi(p.framebufferWidth,p.framebufferHeight,{format:_n,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(te){for(let re=0;re<te.removed.length;re++){const be=te.removed[re],Be=T.indexOf(be);Be>=0&&(T[Be]=null,P[Be].disconnect(be))}for(let re=0;re<te.added.length;re++){const be=te.added[re];let Be=T.indexOf(be);if(Be===-1){for(let Ye=0;Ye<P.length;Ye++)if(Ye>=T.length){T.push(be),Be=Ye;break}else if(T[Ye]===null){T[Ye]=be,Be=Ye;break}if(Be===-1)break}const De=P[Be];De&&De.connect(be)}}const k=new U,fe=new U;function pe(te,re,be){k.setFromMatrixPosition(re.matrixWorld),fe.setFromMatrixPosition(be.matrixWorld);const Be=k.distanceTo(fe),De=re.projectionMatrix.elements,Ye=be.projectionMatrix.elements,C=De[14]/(De[10]-1),R=De[14]/(De[10]+1),G=(De[9]+1)/De[5],M=(De[9]-1)/De[5],j=(De[8]-1)/De[0],Z=(Ye[8]+1)/Ye[0],oe=C*j,Y=C*Z,se=Be/(-j+Z),H=se*-j;if(re.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(H),te.translateZ(se),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ce=C+se,v=R+se,x=oe-H,I=Y+(Be-H),W=G*R/v*ce,Q=M*R/v*ce;te.projectionMatrix.makePerspective(x,I,W,Q,ce,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Pe(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let re=te.near,be=te.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(be=m.depthFar)),B.near=S.near=b.near=re,B.far=S.far=b.far=be,(q!==B.near||ee!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,ee=B.far),B.layers.mask=te.layers.mask|6,b.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Be=te.parent,De=B.cameras;Pe(B,Be);for(let Ye=0;Ye<De.length;Ye++)Pe(De[Ye],Be);De.length===2?pe(B,b,S):B.projectionMatrix.copy(b.projectionMatrix),Oe(te,B,Be)};function Oe(te,re,be){be===null?te.matrix.copy(re.matrixWorld):(te.matrix.copy(be.matrixWorld),te.matrix.invert(),te.matrix.multiply(re.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=cs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(te){return h[te]};let Je=null;function nt(te,re){if(u=re.getViewerPose(l||a),g=re,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Be=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Be=!0);for(let R=0;R<be.length;R++){const G=be[R];let M=null;if(p!==null)M=p.getViewport(G);else{const Z=f.getViewSubImage(d,G);M=Z.viewport,R===0&&(e.setRenderTargetTextures(y,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(y))}let j=F[R];j===void 0&&(j=new un,j.layers.enable(R),j.viewport=new ut,F[R]=j),j.matrix.fromArray(G.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(G.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(M.x,M.y,M.width,M.height),R===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Be===!0&&B.cameras.push(j)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const R=f.getDepthInformation(be[0]);R&&R.isValid&&R.texture&&m.init(R,r.renderState)}if(De&&De.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<be.length;R++){const G=be[R].camera;if(G){let M=h[G];M||(M=new hd,h[G]=M);const j=f.getCameraImage(G);M.sourceTexture=j}}}}for(let be=0;be<P.length;be++){const Be=T[be],De=P[be];Be!==null&&De!==void 0&&De.update(Be,re,l||a)}Je&&Je(te,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const it=new md;it.setAnimationLoop(nt),this.setAnimationLoop=function(te){Je=te},this.dispose=function(){}}}const Ii=new ni,PA=new xt;function DA(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,od(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,E,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,w,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===qt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===qt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),E=w.envMap,y=w.envMapRotation;E&&(m.envMap.value=E,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(Ii)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,w,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LA(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const y=E.program;i.uniformBlockBinding(w,y)}function l(w,E){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(w,P);const T=e.render.frame;s[w.id]!==T&&(d(w),s[w.id]=T)}function u(w){const E=f();w.__bindingPointIndex=E;const y=n.createBuffer(),P=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=r[w.id],y=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,D=y.length;T<D;T++){const V=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,S=V.length;b<S;b++){const F=V[b];if(p(F,T,b,P)===!0){const B=F.__offset,q=Array.isArray(F.value)?F.value:[F.value];let ee=0;for(let $=0;$<q.length;$++){const J=q[$],ne=_(J);typeof J=="number"||typeof J=="boolean"?(F.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,B+ee,F.__data)):J.isMatrix3?(F.__data[0]=J.elements[0],F.__data[1]=J.elements[1],F.__data[2]=J.elements[2],F.__data[3]=0,F.__data[4]=J.elements[3],F.__data[5]=J.elements[4],F.__data[6]=J.elements[5],F.__data[7]=0,F.__data[8]=J.elements[6],F.__data[9]=J.elements[7],F.__data[10]=J.elements[8],F.__data[11]=0):(J.toArray(F.__data,ee),ee+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,y,P){const T=w.value,D=E+"_"+y;if(P[D]===void 0)return typeof T=="number"||typeof T=="boolean"?P[D]=T:P[D]=T.clone(),!0;{const V=P[D];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return P[D]=T,!0}else if(V.equals(T)===!1)return V.copy(T),!0}return!1}function g(w){const E=w.uniforms;let y=0;const P=16;for(let D=0,V=E.length;D<V;D++){const b=Array.isArray(E[D])?E[D]:[E[D]];for(let S=0,F=b.length;S<F;S++){const B=b[S],q=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,$=q.length;ee<$;ee++){const J=q[ee],ne=_(J),k=y%P,fe=k%ne.boundary,pe=k+fe;y+=fe,pe!==0&&P-pe<ne.storage&&(y+=P-pe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=ne.storage}}}const T=y%P;return T>0&&(y+=P-T),w.__size=y,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}const UA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Gn=null;function IA(){return Gn===null&&(Gn=new N0(UA,32,32,Wc,wr),Gn.minFilter=fn,Gn.magFilter=fn,Gn.wrapS=qn,Gn.wrapT=qn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class FA{constructor(e={}){const{canvas:t=qm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Set([Yc,Xc,kc]),_=new Set([ti,ki,is,rs,Gc,Hc]),m=new Uint32Array(4),h=new Int32Array(4);let w=null,E=null;const y=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=ln;let V=0,b=0,S=null,F=-1,B=null;const q=new ut,ee=new ut;let $=null;const J=new Qe(0);let ne=0,k=t.width,fe=t.height,pe=1,Pe=null,Oe=null;const Je=new ut(0,0,k,fe),nt=new ut(0,0,k,fe);let it=!1;const te=new ud;let re=!1,be=!1;const Be=new xt,De=new U,Ye=new ut,C={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function G(){return S===null?pe:1}let M=i;function j(A,N){return t.getContext(A,N)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),M===null){const N="webgl2";if(M=j(N,A),M===null)throw j(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let Z,oe,Y,se,H,ce,v,x,I,W,Q,z,Ae,ue,Ee,Me,ae,de,Te,we,ve,Ie,L,_e;function me(){Z=new k_(M),Z.init(),Ie=new EA(M,Z),oe=new I_(M,Z,e,Ie),Y=new bA(M,Z),oe.reversedDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),se=new Y_(M),H=new uA,ce=new yA(M,Z,Y,H,oe,Ie,se),v=new N_(T),x=new H_(T),I=new Z0(M),L=new L_(M,I),W=new W_(M,I,se,L),Q=new K_(M,W,I,se),Te=new q_(M,oe,ce),Me=new F_(H),z=new lA(T,v,x,Z,oe,L,Me),Ae=new DA(T,H),ue=new dA,Ee=new _A(Z),de=new D_(T,v,x,Y,Q,p,c),ae=new SA(T,Q,oe),_e=new LA(M,se,oe,Y),we=new U_(M,Z,se),ve=new X_(M,Z,se),se.programs=z.programs,T.capabilities=oe,T.extensions=Z,T.properties=H,T.renderLists=ue,T.shadowMap=ae,T.state=Y,T.info=se}me();const xe=new RA(T,M);this.xr=xe,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(A){A!==void 0&&(pe=A,this.setSize(k,fe,!1))},this.getSize=function(A){return A.set(k,fe)},this.setSize=function(A,N,X=!0){if(xe.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,fe=N,t.width=Math.floor(A*pe),t.height=Math.floor(N*pe),X===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(k*pe,fe*pe).floor()},this.setDrawingBufferSize=function(A,N,X){k=A,fe=N,pe=X,t.width=Math.floor(A*X),t.height=Math.floor(N*X),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,N,X,K){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,N,X,K),Y.viewport(q.copy(Je).multiplyScalar(pe).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,N,X,K){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,N,X,K),Y.scissor(ee.copy(nt).multiplyScalar(pe).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){Y.setScissorTest(it=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){Oe=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(A=!0,N=!0,X=!0){let K=0;if(A){let O=!1;if(S!==null){const he=S.texture.format;O=g.has(he)}if(O){const he=S.texture.type,Se=_.has(he),Re=de.getClearColor(),ye=de.getClearAlpha(),Fe=Re.r,Ne=Re.g,Le=Re.b;Se?(m[0]=Fe,m[1]=Ne,m[2]=Le,m[3]=ye,M.clearBufferuiv(M.COLOR,0,m)):(h[0]=Fe,h[1]=Ne,h[2]=Le,h[3]=ye,M.clearBufferiv(M.COLOR,0,h))}else K|=M.COLOR_BUFFER_BIT}N&&(K|=M.DEPTH_BUFFER_BIT),X&&(K|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),de.dispose(),ue.dispose(),Ee.dispose(),H.dispose(),v.dispose(),x.dispose(),Q.dispose(),L.dispose(),_e.dispose(),z.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",rl),xe.removeEventListener("sessionend",sl),Ei.stop()};function le(A){A.preventDefault(),oa("WebGLRenderer: Context Lost."),D=!0}function ie(){oa("WebGLRenderer: Context Restored."),D=!1;const A=se.autoReset,N=ae.enabled,X=ae.autoUpdate,K=ae.needsUpdate,O=ae.type;me(),se.autoReset=A,ae.enabled=N,ae.autoUpdate=X,ae.needsUpdate=K,ae.type=O}function Ce(A){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const N=A.target;N.removeEventListener("dispose",ze),ft(N)}function ft(A){rt(A),H.remove(A)}function rt(A){const N=H.get(A).programs;N!==void 0&&(N.forEach(function(X){z.releaseProgram(X)}),A.isShaderMaterial&&z.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,X,K,O,he){N===null&&(N=C);const Se=O.isMesh&&O.matrixWorld.determinant()<0,Re=Td(A,N,X,K,O);Y.setMaterial(K,Se);let ye=X.index,Fe=1;if(K.wireframe===!0){if(ye=W.getWireframeAttribute(X),ye===void 0)return;Fe=2}const Ne=X.drawRange,Le=X.attributes.position;let qe=Ne.start*Fe,st=(Ne.start+Ne.count)*Fe;he!==null&&(qe=Math.max(qe,he.start*Fe),st=Math.min(st,(he.start+he.count)*Fe)),ye!==null?(qe=Math.max(qe,0),st=Math.min(st,ye.count)):Le!=null&&(qe=Math.max(qe,0),st=Math.min(st,Le.count));const gt=st-qe;if(gt<0||gt===1/0)return;L.setup(O,K,Re,X,ye);let _t,ot=we;if(ye!==null&&(_t=I.get(ye),ot=ve,ot.setIndex(_t)),O.isMesh)K.wireframe===!0?(Y.setLineWidth(K.wireframeLinewidth*G()),ot.setMode(M.LINES)):ot.setMode(M.TRIANGLES);else if(O.isLine){let Ue=K.linewidth;Ue===void 0&&(Ue=1),Y.setLineWidth(Ue*G()),O.isLineSegments?ot.setMode(M.LINES):O.isLineLoop?ot.setMode(M.LINE_LOOP):ot.setMode(M.LINE_STRIP)}else O.isPoints?ot.setMode(M.POINTS):O.isSprite&&ot.setMode(M.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)os("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,pt=O._multiDrawCounts,je=O._multiDrawCount,Zt=ye?I.get(ye).bytesPerElement:1,Yi=H.get(K).currentProgram.getUniforms();for(let Qt=0;Qt<je;Qt++)Yi.setValue(M,"_gl_DrawID",Qt),ot.render(Ue[Qt]/Zt,pt[Qt])}else if(O.isInstancedMesh)ot.renderInstances(qe,gt,O.count);else if(X.isInstancedBufferGeometry){const Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pt=Math.min(X.instanceCount,Ue);ot.renderInstances(qe,gt,pt)}else ot.render(qe,gt)};function Mn(A,N,X){A.transparent===!0&&A.side===Yn&&A.forceSinglePass===!1?(A.side=qt,A.needsUpdate=!0,ps(A,N,X),A.side=Mi,A.needsUpdate=!0,ps(A,N,X),A.side=Yn):ps(A,N,X)}this.compile=function(A,N,X=null){X===null&&(X=A),E=Ee.get(X),E.init(N),P.push(E),X.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),A!==X&&A.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights();const K=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Re=he[Se];Mn(Re,X,O),K.add(Re)}else Mn(he,X,O),K.add(he)}),E=P.pop(),K},this.compileAsync=function(A,N,X=null){const K=this.compile(A,N,X);return new Promise(O=>{function he(){if(K.forEach(function(Se){H.get(Se).currentProgram.isReady()&&K.delete(Se)}),K.size===0){O(A);return}setTimeout(he,10)}Z.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let dn=null;function Ed(A){dn&&dn(A)}function rl(){Ei.stop()}function sl(){Ei.start()}const Ei=new md;Ei.setAnimationLoop(Ed),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){dn=A,xe.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},xe.addEventListener("sessionstart",rl),xe.addEventListener("sessionend",sl),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,N,S),E=Ee.get(A,P.length),E.init(N),P.push(E),Be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(Be,Pn,N.reversedDepth),be=this.localClippingEnabled,re=Me.init(this.clippingPlanes,be),w=ue.get(A,y.length),w.init(),y.push(w),xe.enabled===!0&&xe.isPresenting===!0){const he=T.xr.getDepthSensingMesh();he!==null&&Ma(he,N,-1/0,T.sortObjects)}Ma(A,N,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(Pe,Oe),R=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,R&&de.addToRenderList(w,A),this.info.render.frame++,re===!0&&Me.beginShadows();const X=E.state.shadowsArray;ae.render(X,A,N),re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=w.opaque,O=w.transmissive;if(E.setupLights(),N.isArrayCamera){const he=N.cameras;if(O.length>0)for(let Se=0,Re=he.length;Se<Re;Se++){const ye=he[Se];ol(K,O,A,ye)}R&&de.render(A);for(let Se=0,Re=he.length;Se<Re;Se++){const ye=he[Se];al(w,A,ye,ye.viewport)}}else O.length>0&&ol(K,O,A,N),R&&de.render(A),al(w,A,N);S!==null&&b===0&&(ce.updateMultisampleRenderTarget(S),ce.updateRenderTargetMipmap(S)),A.isScene===!0&&A.onAfterRender(T,A,N),L.resetDefaultState(),F=-1,B=null,P.pop(),P.length>0?(E=P[P.length-1],re===!0&&Me.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?w=y[y.length-1]:w=null};function Ma(A,N,X,K){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const Se=Q.update(A),Re=A.material;Re.visible&&w.push(A,Se,Re,X,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Se=Q.update(A),Re=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ye.copy(Se.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(Re)){const ye=Se.groups;for(let Fe=0,Ne=ye.length;Fe<Ne;Fe++){const Le=ye[Fe],qe=Re[Le.materialIndex];qe&&qe.visible&&w.push(A,Se,qe,X,Ye.z,Le)}}else Re.visible&&w.push(A,Se,Re,X,Ye.z,null)}}const he=A.children;for(let Se=0,Re=he.length;Se<Re;Se++)Ma(he[Se],N,X,K)}function al(A,N,X,K){const{opaque:O,transmissive:he,transparent:Se}=A;E.setupLightsView(X),re===!0&&Me.setGlobalState(T.clippingPlanes,X),K&&Y.viewport(q.copy(K)),O.length>0&&hs(O,N,X),he.length>0&&hs(he,N,X),Se.length>0&&hs(Se,N,X),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function ol(A,N,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[K.id]===void 0&&(E.state.transmissionRenderTarget[K.id]=new Wi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?wr:ti,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const he=E.state.transmissionRenderTarget[K.id],Se=K.viewport||q;he.setSize(Se.z*T.transmissionResolutionScale,Se.w*T.transmissionResolutionScale);const Re=T.getRenderTarget(),ye=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(he),T.getClearColor(J),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),R&&de.render(X);const Ne=T.toneMapping;T.toneMapping=vi;const Le=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),re===!0&&Me.setGlobalState(T.clippingPlanes,K),hs(A,X,K),ce.updateMultisampleRenderTarget(he),ce.updateRenderTargetMipmap(he),Z.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let st=0,gt=N.length;st<gt;st++){const _t=N[st],{object:ot,geometry:Ue,material:pt,group:je}=_t;if(pt.side===Yn&&ot.layers.test(K.layers)){const Zt=pt.side;pt.side=qt,pt.needsUpdate=!0,cl(ot,X,K,Ue,pt,je),pt.side=Zt,pt.needsUpdate=!0,qe=!0}}qe===!0&&(ce.updateMultisampleRenderTarget(he),ce.updateRenderTargetMipmap(he))}T.setRenderTarget(Re,ye,Fe),T.setClearColor(J,ne),Le!==void 0&&(K.viewport=Le),T.toneMapping=Ne}function hs(A,N,X){const K=N.isScene===!0?N.overrideMaterial:null;for(let O=0,he=A.length;O<he;O++){const Se=A[O],{object:Re,geometry:ye,group:Fe}=Se;let Ne=Se.material;Ne.allowOverride===!0&&K!==null&&(Ne=K),Re.layers.test(X.layers)&&cl(Re,N,X,ye,Ne,Fe)}}function cl(A,N,X,K,O,he){A.onBeforeRender(T,N,X,K,O,he),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(T,N,X,K,A,he),O.transparent===!0&&O.side===Yn&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,T.renderBufferDirect(X,N,K,O,A,he),O.side=Mi,O.needsUpdate=!0,T.renderBufferDirect(X,N,K,O,A,he),O.side=Yn):T.renderBufferDirect(X,N,K,O,A,he),A.onAfterRender(T,N,X,K,O,he)}function ps(A,N,X){N.isScene!==!0&&(N=C);const K=H.get(A),O=E.state.lights,he=E.state.shadowsArray,Se=O.state.version,Re=z.getParameters(A,O.state,he,N,X),ye=z.getProgramCacheKey(Re);let Fe=K.programs;K.environment=A.isMeshStandardMaterial?N.environment:null,K.fog=N.fog,K.envMap=(A.isMeshStandardMaterial?x:v).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?N.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",ze),Fe=new Map,K.programs=Fe);let Ne=Fe.get(ye);if(Ne!==void 0){if(K.currentProgram===Ne&&K.lightsStateVersion===Se)return ul(A,Re),Ne}else Re.uniforms=z.getUniforms(A),A.onBeforeCompile(Re,T),Ne=z.acquireProgram(Re,ye),Fe.set(ye,Ne),K.uniforms=Re.uniforms;const Le=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=Me.uniform),ul(A,Re),K.needsLights=Cd(A),K.lightsStateVersion=Se,K.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=Ne,K.uniformsList=null,Ne}function ll(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function ul(A,N){const X=H.get(A);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Td(A,N,X,K,O){N.isScene!==!0&&(N=C),ce.resetTextureUnits();const he=N.fog,Se=K.isMeshStandardMaterial?N.environment:null,Re=S===null?T.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:yr,ye=(K.isMeshStandardMaterial?x:v).get(K.envMap||Se),Fe=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ne=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,st=!!X.morphAttributes.color;let gt=vi;K.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(gt=T.toneMapping);const _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=_t!==void 0?_t.length:0,Ue=H.get(K),pt=E.state.lights;if(re===!0&&(be===!0||A!==B)){const Ft=A===B&&K.id===F;Me.setState(K,A,Ft)}let je=!1;K.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==pt.state.version||Ue.outputColorSpace!==Re||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==ye||K.fog===!0&&Ue.fog!==he||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Me.numPlanes||Ue.numIntersection!==Me.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==Ne||Ue.morphTargets!==Le||Ue.morphNormals!==qe||Ue.morphColors!==st||Ue.toneMapping!==gt||Ue.morphTargetsCount!==ot)&&(je=!0):(je=!0,Ue.__version=K.version);let Zt=Ue.currentProgram;je===!0&&(Zt=ps(K,N,O));let Yi=!1,Qt=!1,Dr=!1;const mt=Zt.getUniforms(),kt=Ue.uniforms;if(Y.useProgram(Zt.program)&&(Yi=!0,Qt=!0,Dr=!0),K.id!==F&&(F=K.id,Qt=!0),Yi||B!==A){Y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(M,"projectionMatrix",A.projectionMatrix),mt.setValue(M,"viewMatrix",A.matrixWorldInverse);const Wt=mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(M,De.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&mt.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&mt.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Qt=!0,Dr=!0)}if(O.isSkinnedMesh){mt.setOptional(M,O,"bindMatrix"),mt.setOptional(M,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),mt.setValue(M,"boneTexture",Ft.boneTexture,ce))}O.isBatchedMesh&&(mt.setOptional(M,O,"batchingTexture"),mt.setValue(M,"batchingTexture",O._matricesTexture,ce),mt.setOptional(M,O,"batchingIdTexture"),mt.setValue(M,"batchingIdTexture",O._indirectTexture,ce),mt.setOptional(M,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(M,"batchingColorTexture",O._colorsTexture,ce));const on=X.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Te.update(O,X,Zt),(Qt||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,mt.setValue(M,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(kt.envMap.value=ye,kt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&N.environment!==null&&(kt.envMapIntensity.value=N.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=IA()),Qt&&(mt.setValue(M,"toneMappingExposure",T.toneMappingExposure),Ue.needsLights&&wd(kt,Dr),he&&K.fog===!0&&Ae.refreshFogUniforms(kt,he),Ae.refreshMaterialUniforms(kt,K,pe,fe,E.state.transmissionRenderTarget[A.id]),Qs.upload(M,ll(Ue),kt,ce)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qs.upload(M,ll(Ue),kt,ce),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&mt.setValue(M,"center",O.center),mt.setValue(M,"modelViewMatrix",O.modelViewMatrix),mt.setValue(M,"normalMatrix",O.normalMatrix),mt.setValue(M,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ft=K.uniformsGroups;for(let Wt=0,ba=Ft.length;Wt<ba;Wt++){const Ti=Ft[Wt];_e.update(Ti,Zt),_e.bind(Ti,Zt)}}return Zt}function wd(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function Cd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(A,N,X){const K=H.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),H.get(A.texture).__webglTexture=N,H.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:X,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,N){const X=H.get(A);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Rd=M.createFramebuffer();this.setRenderTarget=function(A,N=0,X=0){S=A,V=N,b=X;let K=!0,O=null,he=!1,Se=!1;if(A){const ye=H.get(A);if(ye.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(M.FRAMEBUFFER,null),K=!1;else if(ye.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(ye.__hasExternalTextures)ce.rebindTextures(A,H.get(A.texture).__webglTexture,H.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Le=A.depthTexture;if(ye.__boundDepthTexture!==Le){if(Le!==null&&H.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const Ne=H.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?O=Ne[N][X]:O=Ne[N],he=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?O=H.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[X]:O=Ne,q.copy(A.viewport),ee.copy(A.scissor),$=A.scissorTest}else q.copy(Je).multiplyScalar(pe).floor(),ee.copy(nt).multiplyScalar(pe).floor(),$=it;if(X!==0&&(O=Rd),Y.bindFramebuffer(M.FRAMEBUFFER,O)&&K&&Y.drawBuffers(A,O),Y.viewport(q),Y.scissor(ee),Y.setScissorTest($),he){const ye=H.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,X)}else if(Se){const ye=N;for(let Fe=0;Fe<A.textures.length;Fe++){const Ne=H.get(A.textures[Fe]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Fe,Ne.__webglTexture,X,ye)}}else if(A!==null&&X!==0){const ye=H.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,ye.__webglTexture,X)}F=-1},this.readRenderTargetPixels=function(A,N,X,K,O,he,Se,Re=0){if(!(A&&A.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye){Y.bindFramebuffer(M.FRAMEBUFFER,ye);try{const Fe=A.textures[Re],Ne=Fe.format,Le=Fe.type;if(!oe.textureFormatReadable(Ne)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Le)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-K&&X>=0&&X<=A.height-O&&(A.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Re),M.readPixels(N,X,K,O,Ie.convert(Ne),Ie.convert(Le),he))}finally{const Fe=S!==null?H.get(S).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,N,X,K,O,he,Se,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye)if(N>=0&&N<=A.width-K&&X>=0&&X<=A.height-O){Y.bindFramebuffer(M.FRAMEBUFFER,ye);const Fe=A.textures[Re],Ne=Fe.format,Le=Fe.type;if(!oe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,qe),M.bufferData(M.PIXEL_PACK_BUFFER,he.byteLength,M.STREAM_READ),A.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Re),M.readPixels(N,X,K,O,Ie.convert(Ne),Ie.convert(Le),0);const st=S!==null?H.get(S).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,st);const gt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Km(M,gt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,qe),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,he),M.deleteBuffer(qe),M.deleteSync(gt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,N=null,X=0){const K=Math.pow(2,-X),O=Math.floor(A.image.width*K),he=Math.floor(A.image.height*K),Se=N!==null?N.x:0,Re=N!==null?N.y:0;ce.setTexture2D(A,0),M.copyTexSubImage2D(M.TEXTURE_2D,X,0,0,Se,Re,O,he),Y.unbindTexture()};const Pd=M.createFramebuffer(),Dd=M.createFramebuffer();this.copyTextureToTexture=function(A,N,X=null,K=null,O=0,he=null){he===null&&(O!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=O,O=0):he=0);let Se,Re,ye,Fe,Ne,Le,qe,st,gt;const _t=A.isCompressedTexture?A.mipmaps[he]:A.image;if(X!==null)Se=X.max.x-X.min.x,Re=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Ne=X.min.y,Le=X.isBox3?X.min.z:0;else{const on=Math.pow(2,-O);Se=Math.floor(_t.width*on),Re=Math.floor(_t.height*on),A.isDataArrayTexture?ye=_t.depth:A.isData3DTexture?ye=Math.floor(_t.depth*on):ye=1,Fe=0,Ne=0,Le=0}K!==null?(qe=K.x,st=K.y,gt=K.z):(qe=0,st=0,gt=0);const ot=Ie.convert(N.format),Ue=Ie.convert(N.type);let pt;N.isData3DTexture?(ce.setTexture3D(N,0),pt=M.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ce.setTexture2DArray(N,0),pt=M.TEXTURE_2D_ARRAY):(ce.setTexture2D(N,0),pt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,N.unpackAlignment);const je=M.getParameter(M.UNPACK_ROW_LENGTH),Zt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Yi=M.getParameter(M.UNPACK_SKIP_PIXELS),Qt=M.getParameter(M.UNPACK_SKIP_ROWS),Dr=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,_t.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,_t.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ne),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Le);const mt=A.isDataArrayTexture||A.isData3DTexture,kt=N.isDataArrayTexture||N.isData3DTexture;if(A.isDepthTexture){const on=H.get(A),Ft=H.get(N),Wt=H.get(on.__renderTarget),ba=H.get(Ft.__renderTarget);Y.bindFramebuffer(M.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let Ti=0;Ti<ye;Ti++)mt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,H.get(A).__webglTexture,O,Le+Ti),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,H.get(N).__webglTexture,he,gt+Ti)),M.blitFramebuffer(Fe,Ne,Se,Re,qe,st,Se,Re,M.DEPTH_BUFFER_BIT,M.NEAREST);Y.bindFramebuffer(M.READ_FRAMEBUFFER,null),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(O!==0||A.isRenderTargetTexture||H.has(A)){const on=H.get(A),Ft=H.get(N);Y.bindFramebuffer(M.READ_FRAMEBUFFER,Pd),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,Dd);for(let Wt=0;Wt<ye;Wt++)mt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,on.__webglTexture,O,Le+Wt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,on.__webglTexture,O),kt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ft.__webglTexture,he,gt+Wt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ft.__webglTexture,he),O!==0?M.blitFramebuffer(Fe,Ne,Se,Re,qe,st,Se,Re,M.COLOR_BUFFER_BIT,M.NEAREST):kt?M.copyTexSubImage3D(pt,he,qe,st,gt+Wt,Fe,Ne,Se,Re):M.copyTexSubImage2D(pt,he,qe,st,Fe,Ne,Se,Re);Y.bindFramebuffer(M.READ_FRAMEBUFFER,null),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?M.texSubImage3D(pt,he,qe,st,gt,Se,Re,ye,ot,Ue,_t.data):N.isCompressedArrayTexture?M.compressedTexSubImage3D(pt,he,qe,st,gt,Se,Re,ye,ot,_t.data):M.texSubImage3D(pt,he,qe,st,gt,Se,Re,ye,ot,Ue,_t):A.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,he,qe,st,Se,Re,ot,Ue,_t.data):A.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,he,qe,st,_t.width,_t.height,ot,_t.data):M.texSubImage2D(M.TEXTURE_2D,he,qe,st,Se,Re,ot,Ue,_t);M.pixelStorei(M.UNPACK_ROW_LENGTH,je),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Zt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Yi),M.pixelStorei(M.UNPACK_SKIP_ROWS,Qt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Dr),he===0&&N.generateMipmaps&&M.generateMipmap(pt),Y.unbindTexture()},this.initRenderTarget=function(A){H.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),Y.unbindTexture()},this.resetState=function(){V=0,b=0,S=null,Y.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class $c{id;x;y;z;constructor(e){if(e.ID!==void 0){const t=e;this.id=t.ID,this.x=t.X,this.y=t.Y,this.z=t.Z}else{const t=e;this.id=t.id,this.x=t.x,this.y=t.y,this.z=t.z}}static fromJSON(e){return new $c(e)}}class el{id;node1Id;node2Id;constructor(e){if(e.ID!==void 0){const t=e;this.id=t.ID,this.node1Id=t.N1,this.node2Id=t.N2}else{const t=e;this.id=t.id,this.node1Id=t.node1Id,this.node2Id=t.node2Id}}static fromJSON(e){return new el(e)}}const tn={autoLoadJson:"/threejs-vue-viewer/modelBig.json",coordinateAxes:{length:1.5,lineWidth:3,widgetSize:200,widgetMargin:0,connectedAxesLayer:1},standardMaxRadius:20};class Ad{parentGroup;coordinateBegin;startPosition;startQuaternion;startScaleFactor;scene;constructor(e,t){this.scene=e,this.parentGroup=new dr,this.scene.add(this.parentGroup),this.parentGroup.name="GroupParent",this.coordinateBegin=new dr;const i=new U;this.coordinateBegin.position.copy(i.clone().sub(t)),this.coordinateBegin.name="CoordinateBegin",this.parentGroup.add(this.coordinateBegin),this.startPosition=this.position.clone(),this.startQuaternion=this.quaternion.clone(),this.startScaleFactor=1}get scale(){return this.parentGroup.scale}storeStarting(){this.startPosition=this.position.clone(),this.startQuaternion=this.quaternion.clone(),this.startScaleFactor=1}get position(){return this.parentGroup.position}get quaternion(){return this.parentGroup.quaternion}setScaleExceptCoordinateAxes(e){this.scale.multiplyScalar(e),this.coordinateBegin.scale.multiplyScalar(1/e)}restoreStarting(){this.position.copy(this.startPosition),this.quaternion.copy(this.startQuaternion),this.setScaleExceptCoordinateAxes(this.startScaleFactor)}get parent(){return this.parentGroup.parent}add(e){this.parentGroup.add(e)}remove(e){this.parentGroup.remove(e)}getWorldPosition(e){return this.parentGroup.getWorldPosition(e)}dispose(){this.parentGroup.traverse(e=>{if(e!==this.parentGroup&&e!==this.coordinateBegin&&("geometry"in e&&e.geometry&&e.geometry.dispose(),"material"in e&&e.material)){const t=e.material;Array.isArray(t)?t.forEach(i=>i.dispose()):t.dispose()}}),this.scene.remove(this.parentGroup)}}class ca{idToNode;members;nodes;center;box;maxRadius;GeometryView=null;constructor(e,t){this.members=e,this.nodes=t,this.idToNode=new Map(t.map(r=>[r.id,r]));const i=ca.computeParameters(t);this.center=i.center,this.box=i.box,this.maxRadius=i.maxRadius}static fromJSON(e){const t=(e.Nodes||[]).map(r=>$c.fromJSON(r)),i=(e.Members||[]).map(r=>el.fromJSON(r));return new ca(i,t)}getCenter(){return this.center}static computeParameters(e){if(!e||e.length===0){const f=new U(0,0,0);return{center:f,box:f,maxRadius:0}}const t=Math.min(...e.map(f=>f.x)),i=Math.max(...e.map(f=>f.x)),r=Math.min(...e.map(f=>f.y)),s=Math.max(...e.map(f=>f.y)),a=Math.min(...e.map(f=>f.z)),o=Math.max(...e.map(f=>f.z)),c=new U((t+i)/2,(r+s)/2,(a+o)/2),l=new U(i-t,s-r,o-a),u=Math.hypot(l.x,l.y,l.z)/2;return{center:c,box:l,maxRadius:u}}getBox(){return this.box}getMaxRadius(){return this.maxRadius}}class tl{geometry;constructor(e){this.geometry=e}static fromJSON(e){return new tl(ca.fromJSON(e.Geometry))}}const Ou=new yi,Gs=new U;class Sd extends W0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new jt(e,3)),this.setAttribute("uv",new jt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new xc(t,6,1);return this.setAttribute("instanceStart",new mi(i,3,0)),this.setAttribute("instanceEnd",new mi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new xc(t,6,1);return this.setAttribute("instanceColorStart",new mi(i,3,0)),this.setAttribute("instanceColorEnd",new mi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new G0(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ou.setFromBufferAttribute(t),this.boundingBox.union(Ou))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gs.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gs)),Gs.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Gs));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Yt.line={uniforms:Zc.merge([ge.common,ge.fog,ge.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class nl extends In{constructor(e){super({type:"LineMaterial",uniforms:Zc.clone(Yt.line.uniforms),vertexShader:Yt.line.vertexShader,fragmentShader:Yt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const uo=new ut,Bu=new U,zu=new U,Tt=new ut,wt=new ut,yn=new ut,fo=new U,ho=new xt,Rt=new K0,Vu=new U,Hs=new yi,ks=new Rr,En=new ut;let Cn,Hi;function Gu(n,e,t){return En.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),En.multiplyScalar(1/En.w),En.x=Hi/t.width,En.y=Hi/t.height,En.applyMatrix4(n.projectionMatrixInverse),En.multiplyScalar(1/En.w),Math.abs(Math.max(En.x,En.y))}function NA(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,c=a;o<c;o++){Rt.start.fromBufferAttribute(r,o),Rt.end.fromBufferAttribute(s,o),Rt.applyMatrix4(t);const l=new U,u=new U;Cn.distanceSqToSegment(Rt.start,Rt.end,u,l),u.distanceTo(l)<Hi*.5&&e.push({point:u,pointOnLine:l,distance:Cn.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function OA(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),f=-e.near;Cn.at(1,yn),yn.w=1,yn.applyMatrix4(e.matrixWorldInverse),yn.applyMatrix4(i),yn.multiplyScalar(1/yn.w),yn.x*=s.x/2,yn.y*=s.y/2,yn.z=0,fo.copy(yn),ho.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,p=u;d<p;d++){if(Tt.fromBufferAttribute(c,d),wt.fromBufferAttribute(l,d),Tt.w=1,wt.w=1,Tt.applyMatrix4(ho),wt.applyMatrix4(ho),Tt.z>f&&wt.z>f)continue;if(Tt.z>f){const E=Tt.z-wt.z,y=(Tt.z-f)/E;Tt.lerp(wt,y)}else if(wt.z>f){const E=wt.z-Tt.z,y=(wt.z-f)/E;wt.lerp(Tt,y)}Tt.applyMatrix4(i),wt.applyMatrix4(i),Tt.multiplyScalar(1/Tt.w),wt.multiplyScalar(1/wt.w),Tt.x*=s.x/2,Tt.y*=s.y/2,wt.x*=s.x/2,wt.y*=s.y/2,Rt.start.copy(Tt),Rt.start.z=0,Rt.end.copy(wt),Rt.end.z=0;const _=Rt.closestPointToPointParameter(fo,!0);Rt.at(_,Vu);const m=pc.lerp(Tt.z,wt.z,_),h=m>=-1&&m<=1,w=fo.distanceTo(Vu)<Hi*.5;if(h&&w){Rt.start.fromBufferAttribute(c,d),Rt.end.fromBufferAttribute(l,d),Rt.start.applyMatrix4(a),Rt.end.applyMatrix4(a);const E=new U,y=new U;Cn.distanceSqToSegment(Rt.start,Rt.end,y,E),t.push({point:y,pointOnLine:E,distance:Cn.origin.distanceTo(y),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class BA extends Un{constructor(e=new Sd,t=new nl({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)Bu.fromBufferAttribute(t,a),zu.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Bu.distanceTo(zu);const s=new xc(r,2,1);return e.setAttribute("instanceDistanceStart",new mi(s,1,0)),e.setAttribute("instanceDistanceEnd",new mi(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Cn=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Hi=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),ks.copy(o.boundingSphere).applyMatrix4(a);let l;if(i)l=Hi*.5;else{const f=Math.max(r.near,ks.distanceToPoint(Cn.origin));l=Gu(r,f,c.resolution)}if(ks.radius+=l,Cn.intersectsSphere(ks)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Hs.copy(o.boundingBox).applyMatrix4(a);let u;if(i)u=Hi*.5;else{const f=Math.max(r.near,Hs.distanceToPoint(Cn.origin));u=Gu(r,f,c.resolution)}Hs.expandByScalar(u),Cn.intersectsBox(Hs)!==!1&&(i?NA(this,t):OA(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(uo),this.material.uniforms.resolution.value.set(uo.z,uo.w))}}class Md extends Sd{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}setFromPoints(e){const t=e.length-1,i=new Float32Array(6*t);for(let r=0;r<t;r++)i[6*r]=e[r].x,i[6*r+1]=e[r].y,i[6*r+2]=e[r].z||0,i[6*r+3]=e[r+1].x,i[6*r+4]=e[r+1].y,i[6*r+5]=e[r+1].z||0;return super.setPositions(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class zA extends BA{constructor(e=new Md,t=new nl({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class VA{lines=[];dots=[];cones=[];scene;geometryView;coneRadius=.15;coneHeight=.5;constructor(e,t){this.scene=e,this.geometryView=new Ad(this.scene,t)}drawSquare(e,t){const i=new an;i.setAttribute("position",new jt([e.x-this.geometryView.position.x,e.y-this.geometryView.position.y,e.z-this.geometryView.position.z],3));const r=new fd({color:t.color||16711680,size:t.size,sizeAttenuation:!1,depthTest:!1,depthWrite:!1,transparent:!0}),s=new V0(i,r);s.renderOrder=999,s.frustumCulled=!1,this.geometryView.add(s),this.dots.push(s)}drawLine(e,t,i){const r=new nl({linewidth:i?.linewidth||2,vertexColors:!0}),s=e.clone().sub(this.geometryView.position),a=t.clone().sub(this.geometryView.position),o=new Md().setFromPoints([s,a]),c=new Qe(i?.color??255);o.setColors([c.r,c.g,c.b,c.r,c.g,c.b]);const l=new zA(o,r),u=new U().addVectors(e,t).multiplyScalar(.5);l.name="Line("+u.x.toFixed(2)+","+u.y.toFixed(2)+","+u.z.toFixed(2)+")",i?.parent?i.parent.add(l):this.geometryView.add(l),this.lines.push(l)}drawArrow(e,t,i){const r=new U().subVectors(t,e);r.normalize(),this.drawLine(e,t,i);const s=i?.kSizeFactor??1,a=this.coneRadius*s,o=this.coneHeight*s,c=new Jc(a,o,16),l=new Qe(i?.color??255),u=new jc({color:l}),f=new Un(c,u),d=t.clone().sub(this.geometryView.position);f.position.copy(d);const p=new U(0,1,0),g=new bi().setFromUnitVectors(p,r);f.setRotationFromQuaternion(g),f.name="ArrowCone("+t.x.toFixed(2)+","+t.y.toFixed(2)+","+t.z.toFixed(2)+")",i?.parent?i.parent.add(f):this.geometryView.add(f),this.cones.push(f)}drawCoordinateAxes(e){const t=new U().sub(this.geometryView.coordinateBegin.position),i=this.geometryView.coordinateBegin;let r=tn.coordinateAxes.lineWidth,s=tn.coordinateAxes.length*e;this.drawArrow(t,new U(t.x+s,t.y,t.z),{color:12189696,linewidth:r,parent:i,kSizeFactor:e}),this.drawArrow(t,new U(t.x,t.y+s,t.z),{color:50432,linewidth:r,parent:i,kSizeFactor:e}),this.drawArrow(t,new U(t.x,t.y,t.z+s),{color:65535,linewidth:r,parent:i,kSizeFactor:e})}clearAllLines(){for(const e of this.lines)e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose(),e.parent?.remove(e);this.lines=[];for(const e of this.cones)e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose(),e.parent?.remove(e);this.cones=[];for(const e of this.dots)e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose(),e.parent?.remove(e);this.dots=[]}dispose(){this.geometryView.dispose(),this.lines=[],this.dots=[],this.cones=[]}}class GA extends VA{}class HA{sceneService;mainLineService;constructor(e){this.sceneService=e}addConstructionToScene(e){const t=e.geometry.getCenter();this.createServices(t),this.addGeometryToScene(e.geometry),this.addUiToScene(e.geometry.getMaxRadius())}addGeometryToScene(e){const t=e.getCenter();this.mainLineService.clearAllLines(),this.mainLineService.geometryView.position.copy(t);for(const i of e.members){const r=e.idToNode.get(i.node1Id),s=e.idToNode.get(i.node2Id);if(!r||!s){r||console.warn(`Invalid Node1Id for member ${i.id}: Node1Id=${i.node1Id}`),s||console.warn(`Invalid Node2Id for member ${i.id}: Node2Id=${i.node2Id}`);continue}const a=new U(r.x,r.y,r.z),o=new U(s.x,s.y,s.z);this.mainLineService.drawLine(a,o,{color:10079436})}for(const i of e.nodes){const r=new U(i.x,i.y,i.z);this.mainLineService.drawSquare(r,{color:16711680,size:3})}console.log(`Model displayed: ${e.members.length} members drawn`),e.GeometryView=this.mainLineService.geometryView,e.GeometryView.storeStarting()}addUiToScene(e){this.mainLineService.drawCoordinateAxes(e/tn.standardMaxRadius),this.mainLineService.geometryView.coordinateBegin.traverse(t=>t.layers.enable(tn.coordinateAxes.connectedAxesLayer))}dispose(){this.mainLineService&&this.mainLineService.dispose()}createServices(e){this.mainLineService&&this.mainLineService.dispose(),this.mainLineService=new GA(this.sceneService.mainScene,e)}}const dt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2};class kA{sceneService;rotationSpeed=.002;zoomSpeed=.004;panSpeed=.5;state=dt.NONE;keyState=dt.NONE;previousMousePosition={x:0,y:0};mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.PAN,RIGHT:Ki.DOLLY};keys=["ControlLeft;ControlRight","",""];noRotate=!1;noZoom=!1;noPan=!1;desiredUp=new U(0,0,-1);maxAngleToStartAlign=Math.PI/10;maxAlignAngle=Math.PI/500;mouseXMoveRotationAxis=new U(0,0,-1);mouseYMoveRotationAxis=new U(1,0,0);zoomStart=new Ke;zoomEnd=new Ke;panStart=new Ke;panEnd=new Ke;boundOnMouseDown;boundOnMouseMove;boundOnMouseUp;boundOnMouseLeave;boundOnMouseWheel;boundOnKeyDown;boundOnKeyUp;constructor(e){this.sceneService=e,this.boundOnMouseDown=this.onMouseDown.bind(this),this.boundOnMouseMove=this.onMouseMove.bind(this),this.boundOnMouseUp=this.onMouseUp.bind(this),this.boundOnMouseLeave=this.onMouseLeave.bind(this),this.boundOnMouseWheel=this.onMouseWheel.bind(this),this.boundOnKeyDown=this.onKeyDown.bind(this),this.boundOnKeyUp=this.onKeyUp.bind(this),this.setupEventListeners()}dispose(){const e=this.sceneService.rendererService.domElement;e.removeEventListener("mousedown",this.boundOnMouseDown),e.removeEventListener("mousemove",this.boundOnMouseMove),e.removeEventListener("mouseup",this.boundOnMouseUp),e.removeEventListener("mouseleave",this.boundOnMouseLeave),e.removeEventListener("wheel",this.boundOnMouseWheel),window.removeEventListener("keydown",this.boundOnKeyDown),window.removeEventListener("keyup",this.boundOnKeyUp)}onMouseDown(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ki.DOLLY:this.noZoom||(this.state=dt.ZOOM);break;case Ki.ROTATE:this.noRotate||(this.state=dt.ROTATE);break;case Ki.PAN:this.noPan||(this.state=dt.PAN);break;default:this.state=dt.NONE}const i=this.keyState!==dt.NONE?this.keyState:this.state;i===dt.ROTATE&&!this.noRotate||(i===dt.ZOOM&&!this.noZoom?(this.zoomStart.set(e.clientX,e.clientY),this.zoomEnd.copy(this.zoomStart)):i===dt.PAN&&!this.noPan&&(this.panStart.set(e.clientX,e.clientY),this.panEnd.copy(this.panStart))),this.previousMousePosition={x:e.clientX,y:e.clientY}}onMouseMove(e){if(this.state===dt.NONE)return;const t=e.clientX-this.previousMousePosition.x,i=e.clientY-this.previousMousePosition.y,r=this.keyState!==dt.NONE?this.keyState:this.state;r===dt.ROTATE&&!this.noRotate?(this.rotateObject(t,i),this.alignObjectUpVector()):r===dt.ZOOM&&!this.noZoom?(this.zoomEnd.set(e.clientX,e.clientY),this.zoomModel()):r===dt.PAN&&!this.noPan&&(this.panEnd.set(e.clientX,e.clientY),this.panModel()),this.previousMousePosition={x:e.clientX,y:e.clientY}}onMouseUp(){this.state=dt.NONE}onMouseLeave(){this.state=dt.NONE}onKeyDown(e){this.keyState===dt.NONE&&(this.isKeyMatch(e.code,this.keys[dt.ROTATE])&&!this.noRotate?this.keyState=dt.ROTATE:this.isKeyMatch(e.code,this.keys[dt.ZOOM])&&!this.noZoom?this.keyState=dt.ZOOM:this.isKeyMatch(e.code,this.keys[dt.PAN])&&!this.noPan&&(this.keyState=dt.PAN))}isKeyMatch(e,t){return t?t.split(";").map(r=>r.trim()).includes(e):!1}onKeyUp(){this.keyState=dt.NONE}onMouseWheel(e){if(!this.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:this.zoomStart.y-=e.deltaY*30;break;case 1:this.zoomStart.y-=e.deltaY*12;break;default:this.zoomStart.y-=e.deltaY*.3;break}this.zoomModel()}}setupEventListeners(){const e=this.sceneService.rendererService.domElement;e.addEventListener("mousedown",this.boundOnMouseDown),e.addEventListener("mousemove",this.boundOnMouseMove),e.addEventListener("mouseup",this.boundOnMouseUp),e.addEventListener("mouseleave",this.boundOnMouseLeave),e.addEventListener("wheel",this.boundOnMouseWheel,{passive:!1}),window.addEventListener("keydown",this.boundOnKeyDown),window.addEventListener("keyup",this.boundOnKeyUp)}rotateObject(e,t){if(!this.sceneService.geometryView)return;const i=new U;this.sceneService.geometryView.getWorldPosition(i);const r=new U;this.sceneService.mainCamera.getWorldPosition(r);const s=new U().subVectors(r,i).normalize(),a=this.mouseXMoveRotationAxis.clone().normalize(),o=new U().crossVectors(a,s).normalize();if(o.length()<.001&&o.copy(this.mouseYMoveRotationAxis).normalize(),e!==0){const c=e*this.rotationSpeed;this.rotateAroundWorldAxis(a,c,i)}if(t!==0){const c=t*this.rotationSpeed;this.rotateAroundWorldAxis(o,c,i)}}rotateAroundWorldAxis(e,t,i){if(!this.sceneService.geometryView)return;const r=new bi;r.setFromAxisAngle(e,t);const s=new U;this.sceneService.geometryView.getWorldPosition(s);const a=s.sub(i);a.applyQuaternion(r);const o=new U().addVectors(i,a);if(this.sceneService.geometryView.parent){const c=new xt;c.copy(this.sceneService.geometryView.parent.matrixWorld);const l=new xt;l.copy(c).invert(),o.applyMatrix4(l)}this.sceneService.geometryView.position.copy(o),this.sceneService.geometryView.quaternion.multiplyQuaternions(r,this.sceneService.geometryView.quaternion)}alignObjectUpVector(){if(!this.sceneService.geometryView)return;const e=new U;this.sceneService.mainCamera.getWorldPosition(e);const t=new U;this.sceneService.geometryView.getWorldPosition(t);const i=new U().subVectors(e,t);if(i.length()<.001)return;i.normalize();const s=this.desiredUp.clone();s.applyQuaternion(this.sceneService.geometryView.quaternion),s.normalize();const a=pc.clamp(s.dot(this.desiredUp),-1,1);if(Math.acos(a)>this.maxAngleToStartAlign)return;const c=s.clone().sub(i.clone().multiplyScalar(s.dot(i))).normalize(),l=this.desiredUp.clone().sub(i.clone().multiplyScalar(this.desiredUp.dot(i))).normalize();if(c.length()<.001||l.length()<.001)return;const u=pc.clamp(c.dot(l),-1,1),f=Math.min(this.maxAlignAngle,Math.acos(u)),d=new U().crossVectors(c,l),p=Math.sign(d.dot(i)),g=new bi;g.setFromAxisAngle(i,f*p),this.sceneService.geometryView.quaternion.multiplyQuaternions(g,this.sceneService.geometryView.quaternion)}zoomModel(){if(!this.sceneService.geometryView)return;const e=1+(this.zoomEnd.y-this.zoomStart.y)*this.zoomSpeed;e!==1&&e>0&&(this.sceneService.geometryView.setScaleExceptCoordinateAxes(1/e),this.zoomStart.y=this.zoomEnd.y)}panModel(){if(!this.sceneService.geometryView)return;const e=this.panEnd.x-this.panStart.x,t=this.panEnd.y-this.panStart.y;if(e!==0||t!==0){const i=new U;this.sceneService.mainCamera.getWorldPosition(i);const r=new U;this.sceneService.geometryView.getWorldPosition(r);const s=i.distanceTo(r),a=new U().subVectors(r,i).normalize(),o=new U().crossVectors(a,this.sceneService.mainCamera.up).normalize(),c=this.sceneService.mainCamera.up.clone().normalize(),l=s*this.panSpeed*.001,u=new U;u.add(o.multiplyScalar(-e*l)),u.add(c.multiplyScalar(t*l)),this.sceneService.geometryView.position.add(u.multiplyScalar(-1))}this.panStart.copy(this.panEnd)}}class il extends Error{constructor(e){super(e),this.name="DevException",Object.setPrototypeOf(this,il.prototype)}}class nn{static isTrue(e,t,...i){e||nn.fail(t,...i)}static IsFalse(e,t,...i){e&&nn.fail(t,...i)}static fail(e,...t){const i=nn.format(e,...t);throw new il(i)}static isNotNull(e,t,...i){nn.isTrue(e!=null,t,...i)}static isNotNullOrWhiteSpace(e,t,...i){nn.isTrue(e!=null&&e.toString().trim().length>0,t,...i)}static incorrectEnumValue(e,t){nn.fail(`Incorrect enum ${e} value ${t}`)}static isNull(e,t,...i){nn.isTrue(e==null,t,...i)}static format(e,...t){return e?!t||t.length===0?e:e.replace(/{(\d+)}/g,(i,r)=>{const s=parseInt(r,10);return typeof t[s]<"u"?String(t[s]):i}):""}}class WA{renderer;sceneService;animationId=0;coordinateAxesPosition=new U;screenPos=new U;constructor(e){this.sceneService=e,this.renderer=new FA({antialias:!0}),this.renderer.setSize(this.sceneService.width,this.sceneService.height),nn.isNotNull(this.sceneService.canvasElement,"RendererService: canvasContainer is null."),this.sceneService.canvasElement?.appendChild(this.renderer.domElement),this.prepareAndStartRender()}get domElement(){return this.renderer.domElement}setSize(e,t){this.renderer.setSize(e,t)}prepareAndStartRender(){this.renderer.autoClear=!1;const e=()=>{this.animationId=requestAnimationFrame(e),this.renderer.clear(),this.renderMain(),this.renderer.clearDepth(),this.renderSeparateAxes()};e()}renderMain(){this.renderer.setViewport(0,0,this.sceneService.width,this.sceneService.height),this.renderer.setScissorTest(!1),this.sceneService.mainCamera.layers.set(0),this.renderer.render(this.sceneService.mainScene,this.sceneService.mainCamera)}renderSeparateAxes(){this.setSeparateAxesCameraViewOffset();const e=tn.coordinateAxes.widgetMargin,t=tn.coordinateAxes.widgetSize;this.renderer.setViewport(e,e,t,t),this.renderer.setScissor(e,e,t,t),this.renderer.setScissorTest(!0),this.sceneService.separateAxesCamera.layers.set(tn.coordinateAxes.connectedAxesLayer),this.renderer.render(this.sceneService.mainScene,this.sceneService.separateAxesCamera)}setSeparateAxesCameraViewOffset(){this.sceneService.geometryView.coordinateBegin.getWorldPosition(this.coordinateAxesPosition),this.sceneService.separateAxesCamera.clearViewOffset(),this.screenPos.copy(this.coordinateAxesPosition).project(this.sceneService.separateAxesCamera);const e=(this.screenPos.x*.5+.5)*this.sceneService.width,t=(-(this.screenPos.y*.5)+.5)*this.sceneService.height,i=e-tn.coordinateAxes.widgetSize/2,r=t-tn.coordinateAxes.widgetSize/2;this.sceneService.separateAxesCamera.setViewOffset(this.sceneService.width,this.sceneService.height,i,r,tn.coordinateAxes.widgetSize,tn.coordinateAxes.widgetSize)}dispose(){cancelAnimationFrame(this.animationId),this.renderer.dispose()}}const zt={Isometric:0,XDirection:1,YDirection:2,ZDirection:3,ReverseXDirection:4,ReverseYDirection:5,ReverseZDirection:6};class Fi{backward;up;constructor(e,t){this.backward=e,this.up=t}}class XA{cameraViewParameters=new Map([[zt.Isometric,new Fi(new U(1,1,-1),new U(0,0,-1))],[zt.XDirection,new Fi(new U(-1,0,0),new U(0,0,-1))],[zt.YDirection,new Fi(new U(0,-1,0),new U(0,0,-1))],[zt.ZDirection,new Fi(new U(0,0,-1),new U(0,-1,0))],[zt.ReverseXDirection,new Fi(new U(1,0,0),new U(0,0,-1))],[zt.ReverseYDirection,new Fi(new U(0,1,0),new U(0,0,-1))],[zt.ReverseZDirection,new Fi(new U(0,0,1),new U(0,1,0))]]);sceneService;constructor(e){this.sceneService=e}setCameraView(e,t){nn.isTrue(this.cameraViewParameters.has(e),"Camera view parameters not found for camera view: {0}",e);const i=t.getCenter(),r=this.cameraViewParameters.get(e);if(!r)return;const s=t.getMaxRadius(),a=this.calculateRequiredDistance(s)*1.1,o=r.backward.clone().normalize().multiplyScalar(a),c=i.clone().add(o),l=r.up.clone().normalize(),u=this.sceneService.mainPerspectiveCamera;u.position.copy(c),u.up=l,u.lookAt(i),u.updateMatrixWorld(!0),u.updateProjectionMatrix();const f=this.sceneService.mainOrthographicCamera;f.position.copy(c),f.up=l,f.lookAt(i),this.setFrustumSizeForOrthographicCamera(f,s),f.updateMatrixWorld(!0),f.updateProjectionMatrix();const d=this.sceneService.separateAxesCamera;d.position.copy(c.clone().add(o.clone().multiplyScalar(5))),d.up=l,d.lookAt(i),this.setFrustumSizeForOrthographicCamera(d,s),d.updateMatrixWorld(!0),d.updateProjectionMatrix(),this.sceneService.modelNavigationService.mouseXMoveRotationAxis=r.up.clone(),this.sceneService.modelNavigationService.mouseYMoveRotationAxis=r.backward.clone().cross(r.up).normalize()}calculateRequiredDistance(e){const t=this.sceneService.mainPerspectiveCamera,i=t.fov*Math.PI/180,r=e/Math.tan(i/2),s=e/t.aspect/Math.tan(i/2);return Math.max(r,s)}setFrustumSizeForOrthographicCamera(e,t){const i=Math.abs(e.left/e.top);e.left=-t*i,e.right=t*i,e.top=t,e.bottom=-t}}class YA{drawService;cameraViewService;modelNavigationService;mainScene;mainCamera;separateAxesCamera;rendererService;canvasElement;width=0;height=0;geometryView;isMainPerspective=!1;mainOrthographicCamera;mainPerspectiveCamera;constructor(e){this.canvasElement=e,this.updateSizeForContainer(),this.mainScene=this.createMainScene(),this.mainPerspectiveCamera=this.createPerspectiveCamera(),this.mainOrthographicCamera=this.createOrthographicCamera(),this.prepareMainCamera(),this.separateAxesCamera=this.createOrthographicCamera(),this.separateAxesCamera.layers.set(tn.coordinateAxes.connectedAxesLayer),this.drawService=new HA(this),this.geometryView=new Ad(this.mainScene,new U),this.rendererService=new WA(this),this.modelNavigationService=new kA(this),this.cameraViewService=new XA(this),this.setupEventListeners()}prepareMainCamera(){this.mainCamera=this.isMainPerspective?this.mainPerspectiveCamera:this.mainOrthographicCamera}setGeometryView(e){this.geometryView=e}updateSizeForContainer(){nn.isNotNull(this.canvasElement,"SceneService: canvasElement is null."),this.width=this.canvasElement?.clientWidth??0,this.height=this.canvasElement?.clientHeight??0}createMainScene(){const e=new I0;return e.background=new Qe(0),e}createPerspectiveCamera(){const e=this.width/this.height;return new un(35,e,.1,1e3)}createOrthographicCamera(){const e=this.width/this.height,t=40;return new pd(t*e/-2,t*e/2,t/2,t/-2,.1,1e3)}setupEventListeners(){window.addEventListener("resize",()=>{this.updateSizeForContainer();const e=this.width/this.height;this.mainOrthographicCamera.left=40*e/-2,this.mainOrthographicCamera.right=40*e/2,this.mainOrthographicCamera.top=40/2,this.mainOrthographicCamera.bottom=40/-2,this.mainOrthographicCamera.updateProjectionMatrix(),this.mainPerspectiveCamera.aspect=e,this.mainPerspectiveCamera.updateProjectionMatrix(),this.separateAxesCamera.left=40*e/-2,this.separateAxesCamera.right=40*e/2,this.separateAxesCamera.top=40/2,this.separateAxesCamera.bottom=40/-2,this.separateAxesCamera.updateProjectionMatrix(),this.rendererService.setSize(this.width,this.height)})}dispose(){this.modelNavigationService.dispose(),this.rendererService.dispose(),this.drawService.dispose(),this.geometryView&&this.geometryView.dispose()}setMainCamera(e){this.isMainPerspective=e,this.prepareMainCamera()}}class bd{deserialize(e){let t;try{t=JSON.parse(e)}catch(s){const a=s&&s.message?s.message:String(s);throw new Error(`Invalid JSON: ${a}`)}const i=t?.Geometry??{},r={Nodes:Array.isArray(i.Nodes)?i.Nodes:[],Members:Array.isArray(i.Members)?i.Members:[]};return tl.fromJSON({Geometry:r})}}class qA{jsonService;onConstructionLoaded;constructor(e){this.jsonService=new bd,this.onConstructionLoaded=e}async tryAutoload(e){if(!e||e.trim()==="")return;const t=e.startsWith("/")?e:`/${e}`;try{const i=await fetch(t);nn.isTrue(i.ok,`Failed to fetch ${t}: ${i.status} ${i.statusText}`);const r=await i.text(),s=this.jsonService.deserialize(r);this.onConstructionLoaded?.(s)}catch(i){console.error("AutoLoadJsonService: autoload failed",i),typeof window<"u"&&alert(`Ошибка автозагрузки модели: ${i}`)}}}class KA{handleConstructionLoaded;constructor(e){this.handleConstructionLoaded=e}loadFile(e){const t=new FileReader;t.onload=i=>{try{const r=i.target?.result,a=new bd().deserialize(r);nn.isNotNull(a,"Construction data is null after deserialization"),this.handleConstructionLoaded(a)}catch(r){console.error("Error loading JSON file:",r),alert(`Ошибка загрузки файла: ${r}`)}},t.onerror=()=>{console.error("Error reading file"),alert("Ошибка чтения файла")},t.readAsText(e)}}let jA=class{sceneService;drawService;cameraViewService;construction=null;loadJsonFileMenuItem;constructor(e){this.sceneService=new YA(e),this.drawService=this.sceneService.drawService,this.cameraViewService=this.sceneService.cameraViewService,this.loadJsonFileMenuItem=new KA(this.handleConstructionLoaded);const t=tn.autoLoadJson?.trim();t&&new qA(this.handleConstructionLoaded).tryAutoload(t)}loadJsonFile(e){this.loadJsonFileMenuItem.loadFile(e)}setMainCamera(e){this.sceneService.setMainCamera(e)}setCameraView(e){this.construction&&(this.construction.geometry.GeometryView.restoreStarting(),this.cameraViewService.setCameraView(e,this.construction.geometry))}handleConstructionLoaded=e=>{e?this.processConstruction(e):this.construction=null};processConstruction(e){this.construction=e,this.drawService.addConstructionToScene(this.construction),this.sceneService.setGeometryView(e.geometry.GeometryView),this.setCameraView(zt.ReverseYDirection)}dispose(){this.sceneService.dispose()}};const ZA=pf({__name:"Viewer",setup(n,{expose:e}){const t=vo(null);let i=null;return e({loadJsonFile:o=>{i&&i.loadJsonFile(o)},setMainCamera:o=>{i&&i.setMainCamera(o)},setCameraView:o=>{i&&i.setCameraView(o)}}),_f(()=>{t.value&&(i=new jA(t.value))}),Ic(()=>{i&&i.dispose()}),(o,c)=>(Nf(),Of("div",{ref_key:"containerRef",ref:t,class:"canvas-container"},null,512))}}),yd=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},QA=yd(ZA,[["__scopeId","data-v-a1b5f3dc"]]),JA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAAx9JREFUSEvtlE9oXFUUxn9vZmhNtM1CioukYsckUxps0yBqcCPtRtTSRoPFirgQBP8gSAUXbtwoFFFcK1alFtFFUcGotFEXHWKSBis1KUkhhlqJpk06SYeZ99659xwXr53My8RGXfeDw3vncN/3nT/3PLiBNRCsDPwbjP0yaaOnfmZhYZ5CRx6A9s4CO7blG/gaAmvhRHHSjg9dQoImmje2MDE8AMCmdTM8sudh8vl2ugq313j/s8DA4Gmbm53i7MSv/P5XxP37DwJw7L13iUp/sqU14MjHH/x/gXq8f/gTG52+BMAD/S9x+M23KP32BadGh2q8ufoPAAa+PGTlK2XMlJYNTQBEdit7+55rSObOzi4uSPIeVhz5bT2cHD+aOpNJeYBhYCRWC9Y7y7B/iNcjldXgN2/bzkIVU8GrQzVJ74fiHGNTrWzf3k02t1x0GFY5NzkJwMxshdaufsa+e4Mfj3+1+gw+O/Ka7e7NoT5G1WHmAYiiEC9CFkXVoTiUGFPP9HkFYHjqPpqam9mwsYXnn316dYFPP3rVdvUGqApnxmcRiQFYWqxg6jHzKAKmqHlQz8yF5MzZP+5iz94+ntzfl+JMOUc/PGi77oXLpTJnxs+xtf0WAFQV9Zo8VTEzzHtQxWtSpaoyV7qJ6s0v8NQTj9Z4U0NWNTDh5NA0nVuaCMwvG55s4MkFjhxCNhCCQMhkPJmMJ5vxnJ6oMD9/sZ5y5S3yLC1eIRtUwDxOBCeClxiVCCcRIhGxxIgIzjmcE5wT5haqlFwvbW2bU4xpAfUMjZxna34dXqKaOYkQF18VdDjnECfEIsRxYoPFJcygf99DqbanBKIwpFpdJJd1iESIxIk5hxNH7ITYCSKCiENEKFdCypWQ4fHb6N7ZU08HKwXWXpvrY7XFSwmE1Sodd2STVjiHXDNJ2iFxMpNrlTmJKY6UKI6U2NHdQ0dnoZ4OVl7Tdw49Y5vWj3HxcoiIYpYskZmiZpgpppZkakouY3z/U7IHDz72Oq+8/GLD/yoV+PzY1zZ44lsWS6X68HXRc/c9ALS1bebA4/saBG5gTfwNEbTczblcUMIAAAAASUVORK5CYII=",$A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACKUExURc/V5p2lxGhzoOnu98/V5Z2lw+jt9pykw83T45ykwrS80szS4pujwrO70pujwcvR4eTp8bO70MrQ4JqiweLn8LG50LG5z8nP35qiwMjO3rC4z5mhwMfN3cbM3N7j65igv8XL29zh6pigvsTK2tvg6JefvsPJ2drf55efvcLI2JaevcLI15aevAAAACspjvsAAAAudFJOU////////////////////////////////////////////////////////////wCCj3NVAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBQYWludC5ORVQgNS4xLjlsbto+AAAAtmVYSWZJSSoACAAAAAUAGgEFAAEAAABKAAAAGwEFAAEAAABSAAAAKAEDAAEAAAACAAAAMQECABAAAABaAAAAaYcEAAEAAABqAAAAAAAAAGAAAAABAAAAYAAAAAEAAABQYWludC5ORVQgNS4xLjkAAwAAkAcABAAAADAyMzABoAMAAQAAAAEAAAAFoAQAAQAAAJQAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAATM/ASCWP16AAAAC2SURBVChTldHpDoIwEEZR+klZBAGxoiLgguL+/q9n2g5Cm5jo/TknnZbgvL7k2IO+H8FhUFngMDYBY4xZ4HLX88A55yb4egvg+yMIwjDAVGbdEcVxhJnMhCRJ0wxzGZClCUG+yIUQAksZIBY5QX8rUBQFsFrLJQo2FMqyBLZqu4KK0seqAWoKTVPvdvqdCvYUDvujHhO0FE7n1oCOwuXaGXCjcLv3cw0PCs/P3PrAYT7+H2b/wxuYZUpUD2IixgAAAABJRU5ErkJggg==",eS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAA35JREFUSEvtlM9rHGUYxz/zIzP7I7PZzMZs0lRaqhZjpUJVCEQKwZaKN/HiUSl4UBB6iOClGmh7FDwIei0iCILtobUplq2NGrIlpqVF2JZIa9dUu9kf2Z2dndmZ2dfDZrc7u1r/gX4f3mHmmS/f7/u8PM8Lj/E/kPoTvfjqm/MCYMuSiUTiiH5CX+Z+/haHD80y8+J0V1cJMbaRvXZLWA3lk8XFy2Sza+ixUXbt2omqKqiqiiLL2A2bVhDgOg08r8nZM9+xsnyFdHqK7899u9DRGqhg4dTn4szZcxw+9CoTk08CUK61eOftN/up2HadUydOArCRv8OBl+d4+qndvHf09a5uyODTL86LX9dymKNJzJSJbTUAaLgeO6bGQQiEEOi6jh7RKZcesLZyAYDjCye5unqTpuPw/tHXurrqQ3m4dv0203snGH9iDFmScVwdgLv3PXakFSzLQpZVZNnFbdbJ5f7gw4+OAxCPJ5BEC8t2eiWRez/E9kNsv4vt6P3fWYO5MLeDUAU7pyZJTyTZ//yzADhuE4Att8CRI/uRlYf7qVZrZK/+jl2vA5AyU8RiEYqbtS6H/grMkWGKxQpCgBCgaxq6puE3mzQcr5sXAgzDwDCGKZXKlEplhIB4PMa9fL5Xss8gZWDbXrfcTsRietugL3RtiGrNolqzEAgMw0Dq6/yQgaoItqq18GELGFIl7IY/kI9EhnAaLk7DBQHRaBSr3u68DkIGiWGdIJAHdqoqAsv6lwoiKq7n43p+m6cquJ7XKxk2GBmJYjte96ADPyDwAyqVMqvXCyxe+otLP/5NZqnAL9kKQRBlfT3P+nqeixczLC+vUikWeiXDBrFYhFrVoun5uE2PpZUcSys5ZEnw3J446aTPsGYzrNk06w8QwqG2Vemuy5kfkFuPMJg5sFeKxw0Km0UyP+UYUhWGVIW5gy9gmglM02BywiQ9nmTP7jSjiShjYynGxlLEo4J7d24zP/9Br2TYoAMh2gPTaclQf/YuBidP9A3bgEEiESNz5SbJRITZmX3MzuxDkqX+BkLQ7qJSxaJUsTh9+muOHXuXuVdeCt1vA7fpZ19eEDd+yyPJMorc9td0FU3TMeIRJAmE8AHBxsafbBbKAEw/E+XEx/MDegOJDn7O3hC27QJQrzu0WgKn6eO6HnbDJwhAVTXMUQ2At944+J9aj/FI/APG/7oYfnu9lAAAAABJRU5ErkJggg==",tS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAArtJREFUSEvtlFtIFHEUxn9juksXkCwzSwUjiCASCizcrJBIQhax1TLRWCTxQg8+RBRFPfRQaJZdKEqwe9ENkehipuWlVjTKIlukB+mCPkTsWnSxdeb0sO6068xCRdBL3zzM/5w5833n//3PDPzHv4YyPvGo57k01p/EMzhI0tI0ANJs6Vis1pA6l6uDi01nSIlfBMCaLDvrHXYDnyHRsWm7LPuq0pcwRNlABwCDRBIRMQFUYBTQYDjaw/tVQlT7VwBmd84gJ2sdB2v2hXAaBHyFO+TO3HK6d/fi5RUAol8amn7X8PCBhaQA8A0PL9tfUKE6WZ1h03kNAn27D8vVoY1MWhlN74tcAL7HWYicGMVHn5dRnwrA65EB4ioXM9nrt06uDFM+p5TsrFUhnBHBAYCMW4uelKAgsA4uFkTGJ0128Kjnuew6msz8BVYmDO0EoPZAlaHubvdDOfv2NA6Lf5c59kxDDWY7UFBQVR+KomCxWLFYQqcngNWpNuW8o07JsWcq4cgxExARfOro2NEanfhdmApoIz5E8/tKkK83mx7ItOmxcr3xjgA03rwnxSXlUlxSHrYPEwENVR0FQNNUNM0/NQBZmSuVmtqjHKndD8DDzjbq644r9XXHf92i3qdP+PLJg6b5cLv7cLv7aGrt1Dt0Fq5XZsbHY0tfIVV794QlDsAgcOjMPJSJKagyiX5vNf3earq7XCE1qUvTePf2Dc33XWGtCcAgEK3WkZwMW7ZBbMxnYmM+k5CYqD+/cbtFYqbGcOzEKSpKnSHvmsEgYPaxBKdEfv44/ggXLjdIdskzaXgssja3WNbmFutMLW1dUrG5Uo8defmSX1Ak+QVFYdVMD6lsa6MkzUlh1pRuAJyF6xSAcxevSWRUFBvyshXGmtFU/5TNTkgkY/kSUz4DbjW75NSl1rBd/cdfxQ/JciUMS09KuQAAAABJRU5ErkJggg==",nS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAArRJREFUSEvtlF1IU3EUwH93mj5NMjVLEKQgjHRmqYFakFCBFCQREmVKpVb0IIJB0EMUZVEPBUXli7pKTEkLS3GKCKX4gVMrW6KplNSLVlCj1nZ3elib290spcf6wb2c//mfj3vO4Vz4z98wMDwqA8OjotUvBkWrALj/oElanjRhGzIDkHYgn9SMzT42P2w2urue0tfbDcCKlTEUHCoiPdXgE9Pn0D9okZq71TQ11HFw+h1H7U4AKqIimFgazhIgFAgBnKqKKjMkXtvq8t0Vi63BSdWe6/MnMHV0SezZW8QbUiAyErr7XRfhy0GnQLAOdL+eYMWli1kHwPFNaViTTmOM/k0CgEdP2uXzjWvkfQxHsdoAMNmf8y1uFQqgCw4iKGwpXx12Plg/EZrfAsCDKUhLv8j5zFM+MXXeBwARAdHMVdwvmZPdotZMg18FbhqbWiWuvhYAteAIKVkZfrYlpSfFHnMJgME+4UrZS78h+1XgJmfXDiXZWKkkGyuVQMEBQkJCPbJDBSXA986bYCF4t+SH3eZqr4aACe7dbxS9PkxuVlTLzYpqj1d6xhapb2yeiyKCe2RO1REwQbBWAbA/N0e5ev22tJmaPTpTR5dMTU6wNyfb0wenU/Xcq3Y7Iq698SZgBQAlJ4qVN+NjvBkfw1hTL+2mFooO53mCt3Y8E4tlBKcKThWsn2cYGnRt/oJp7+yR9s4e0evDpGdgxKf+cxcuS5RhWgrLRQrLRVZniUSv7Zde8yv/Pv2JiIhIP6fKO7WSkGWRWRGZFZHtxSIpqbl+dvO26E8EmGfAIS8ogUN1aFUYktazZtkZei3QawG+T1Jatk9rFmAzvHj4uE0AzAP9bNiYyu6d23zsq+7WyfsvWQCMve6h9FgCifFxv//ZLQbzizExD70FICY6lOztmX8V7x/lJ0lSIt7nNd7uAAAAAElFTkSuQmCC",iS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAAqBJREFUSEvtk01IVFEYhp+bOjqm0EL8vypWIEggKiJNv1KZP2Nkpi0KkxIxiYI2LYQKy6KoXIS2KDO1NDcWVFaSEaZRGpYtIgKJ/rBGS6yNOnO/FmPizLlhRNDGd3PPee/L893vu+fAvP63NG+jt29QGuobGf7kIC19GQDLbSux+Pt75J71dNPffBmfpGQAsnLsFG2xKzzFOHT8gyyOi2JJ/3s6G3cA8CP4I5qPDxPAFDAJxI19o9jxnXo/JwAt0TpZ+YWcPX3Cg6kUqKl3yeucDmpbhuCNy20aAk7D/TQMcE7vxx2QluLOfB3l5asBhg+WsiHDNsNVCpxvnJTmdZWsDg8l1PYcgEjdxUJfP1zjY7ic7qL+b4fYaE1Cgt2jawoaZVHFPjblrPNgLpi9ARCvtcyYMmvzaz07LIh4myYd9PYNSmFAGclRqcQftQJQc+akkuvv6hGt4QLvtm4DYLM9U8lg1oGGxpTT/eMsFn8sFs/T80upGTYtpfGSttmeqf0OjlkBEUGmDPfaa2R/I19vQ0QwJqem6Sq++/GA3Lp5Az0mFoD7nXcAKNlVhj0rQ+nEpAMD54QTMDAMF4YxfVSnNTrq4MSxw1pFWYlmtVoZcTgYcThM4aY6V3dRAlt0yf5cLtm5eZKdmyd3ux4prfQ+fSHR0briz6mwcxHi+yRO1k6WSEBriAS0hkhV9SkFtGLVGjldU6v43lJGpLfHEB++lEq/IwRZwgiyhBGt6x6ZqupTEhkZxYH9e+Yci1LA7LKYWKbeH+nKtXZJfLBeqqVN8guKJL+gyAN1r6tH9JhYBX+17briYXaTATY1F0uELY70nkQAdm4vnMkVl5SKNdBKQoL73cjIFwDCwiPYW77blKfodtdDqetoMv2ief1z/QRe+AW3Cab96wAAAABJRU5ErkJggg==",rS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAAxRJREFUSEvtk1tsTFsYx397OqMlUpeWtGjwgLinJaNFS6epNiG8uJTUPZLj5XAkdUtOcuIelxAeSCTVptWa0jQyekMpWlqSotLOqXiQU+HlYDAaOrP352H2bGamg8YDD347e6+1v/Xt/3+vb60Fv/nZKMGB3nD0+El53PEvAIMGx5BuyyQzPSVAs0cDe7lDqisdPHzXAsAK22pSklKN8a73XZSfL6XVfpYJLhcAi+MnE7FhNZaM2aSnWg3dAIN7951SUlxIRWMZrxK9mKyRAFhuf2SAuy+YgAgFTdMY1/A/C5+qtPMOgIxJqViTrNzsJ+ScOtyzweVrjZIvJYy2jSWKaDrcvulH9x+ACRMKit6aSNvVTOKhFt54PQBUfXDhoRtz8jT+bmro2QDgYuVVKXxaDFl9eR/dDUBnYTsJUQkAmC1mIrstJJ97RJ5TeKt6AWj68JJSzwvG5+1g28F9hq7J3/EjIiASFPQ/RO8bTShBAyEz8FPhqJWK7ioAckcuZd70WQG5Z+0VEr9tD5Ne+xQfedw0TxvGzlv1395F38ufm/PENGIrAI+dXWxf/5K0mUkBmiEl6g2RUVH6PyqoqorZbA5OCW9QWVsvMbFDJCZ2iJRfrBH0DbBuw8bPVRZ9TQS8HtW3fkGEWurMz5qrFBTbBeDEscMANDbcIP/0SaMEmqYa+ZrqRUQz3v2EnQHAmtxlyprcZUpcfDyzUufIwf27DfHaaw3idLahqR401UOX+y0P7vtO/pcEGGRkZktGZrbsPXAkYK7W5Jk86/yPK9fvGPG7TXd47vkHVeJQJY6IPmPILx9Fc0t7aJ3C4aiuE0d1nRQU2aWytl7GjB1nfHym6JzYljZKq0uk1SWyZJNLpqf8ESL+1RKJiO/Wr8CxgFc9FhoMa1B3o0lqqi5RU3WJtStzlAVZ6cqUqYnkrFgpAOtW5SgDtVKcbeBsAz52sOWv7GCZ8AetqOSCmC0WAJYvWaSgn15NVRk+IgFb2gyloLhMnrsnAvCi8wkn9vryviQk0FuKyq4LwNDYfmTZZvyw3q/HJ0vNRkpc2XA8AAAAAElFTkSuQmCC",sS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAAvlJREFUSEvtk1lIlGEUhp9xxhkVxpaxQuqiCFtuMjUjWy1amGwzrYZ2WkmKNuqiooKCwjaii2ghqMiwuTApWkYzUbPNmbRy2jSosOXCdLBttv90UQ79/mNl173w/fC95z3n/f7zfQf+4w/QtSWuFZdLWWkJHz820q//AAA2rM3R6ACcNc8kJbF/2FgrVEFHSaVUBp2crD1Bw6VHdH7bBQDbuAXMzLYRHRMd0j65VU513lm+JCYBMMmagS17msZMRSw7tk58qQYelN3j0Y3b0DcGgKRyPROb4tDpIwgg+ICeTd/I8BkpFB8Ajq46BmVms3DRUlKTBobqqgwG5wyR6uZaIkxGood3wRATCcCmd4PY+ioNRCCogKKAIuD1Q0LvH8ktHipev8C7ah7jxwwL1dWHqgNZVtvOqicVmNIsRCV0IrKbCX2nSPw3PegbI3jp9fDc28RTn4f66ir6BRU8H97hbXiD/fN7dItmYZ0wWnXoiF83iKi2Kkjrp3Vpw1o2zCsauSFdans2Ez0gFlPdVwD29trOnKypKq2rtFK+nLbTmD0ZgOkZEzS1CGdQVumSfae60yfBiO79fgAOH8rV6P4W6hYBBoOBoKIAYDSZMJpMbSUdgsZARAj4Az+bKmHv5Vx+gZjNsXL0+GlVcPiI0WIvuKLiwhgoiOIHAUUJoijBthLmzcnU7dqzjyLHlRDnKLkli5csZ1bm5N+8IsBZdY+vLS0oih+3+zFu92Oul1RofmPd6pW6+roXnMmzy5k8uxQ7rrJi6YLf39Vdl1sSx16TUbZPsvmgSLK1RpKtNZJ74IgAbNuxW+YvXCJ7cg8JQHHpHTGbY8VsjpU7zlrNIcIiZehymb2+WaqbRNKzHJKe5ZDzFwrbTbZY4sRiiWs3rmmRqMblx/iouY5BY7BxYwbif8ZDF8RHFRIfVcjc2TPa7W0gGCAQDLSlQwibuGZLgXTu0YuB8Q0A7RpcvFwkLud9AJJTUpkxJfw0a1BUel/yL5b9e1/+oyP4DhGPO4LrMedfAAAAAElFTkSuQmCC",aS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAAxJJREFUSEvtlH9IlHccx193p6d3q/y1qI3yzJF55raaOilL5IJAj/PHPJnNjRzRxK0tIibCcIzaP7FBxBZElJUlKnShzjByFKVWN2lDR2cTnSL7Y7vT7oK13c3ysz90N5/nucD8u/fzPH983s+b9+fzeT7P5wvPsRS4f/ZIp/u6qPmlQKcmAKpb94spJYEifz4AjkKbQjfw07B0dlwi2ZIS5q5euczemn3stG1VaPULA4COrh4ZjZ/kpdx1uC624LrYopYwNeXj8Bef6fa+X6Uzm8yYTWamfF6NeUTkVGyRLfec0i6DYm3aJtambdLedTXi5/pxaETWJltkbbIl4nvUHQwNj8tkXoDfHk5yfvoM00Y/00Y/E+PjALxd+a5sSLdKTe3HAnBgfy119Q3U1TcstFFAkUDkaYXM8YIwf4dpmb8WjW9PnBZL8xtSdu8jsTtKxO4okWu9bo3Dka+Pya6q3RpeDc2Qs7LexJS4DH20AWtGJtaMTGzbcxXDu9F/V45/c5SW5nMK3tVxRZMwSk2ICHqjAQCdTpMfgKazpygpLceakRk29Pm8TE/5lMJIe9DvHpQPggdJX51BauMKAL468qVGt1hoSpyZ+QdDdBSIEAwFCYaCaskzQVHZoGdMave1Mvk4m4SVmzE8GADg05oQVZVvKbTunpsSamrDW24HwFlaFLFLBVlTe1hONt5nddpuklbloTeaAVj3+yGcKcO8EBUT1sZ4xihKSuUv8xzXZgyxvLqSijJlIkXwWu7nMjIWwhizjPiX7RiN8QAcWDnKh2uGQARmZ+Hxf88TSJs/jx4GuDUxzIM9ThyFO8K+qkVbGC0N6mVVdLDnk2Z5MbmAvr7b9H9/nbjENAA2+LvITxpFbzAwA4QAS+BPih+Zcc3+DUD3qmg22oupfOc9bPn/741qUbplwhtL44UgnjvniTPdB6DMmYOjuIzYWFNY+8sPd/C42ni08VUAbDt28vrmLHI2pT99BgBtru/kdn8vgYCf1FfWA5BfYKMgL1v1x/0qPu8fxMXPzSlnk1Xj9RyLwr9LsSA/zpi3ZAAAAABJRU5ErkJggg==",oS={class:"app-container"},cS={class:"toolbar"},lS={class:"toolbar-button",title:"Открыть json"},uS=["src"],fS=["src"],dS=["src"],hS=["src"],pS=["src"],mS=["src"],xS=["src"],gS=["src"],_S=["src"],vS=pf({__name:"App",setup(n){const e=vo(null),t=vo(!1),i=JA,r=$A,s=eS,a=tS,o=nS,c=iS,l=rS,u=sS,f=aS,d=_=>{const m=_.target,h=m.files?.[0];h&&e.value&&e.value.loadJsonFile(h),m&&(m.value="")},p=()=>{t.value=!t.value,e.value&&e.value.setMainCamera(t.value)},g=_=>{e.value&&e.value.setCameraView(_)};return(_,m)=>(Nf(),Of("div",oS,[_i(QA,{ref_key:"sceneRef",ref:e},null,512),ht("div",cS,[ht("label",lS,[ht("img",{src:Ct(i),alt:"Open",class:"toolbar-icon"},null,8,uS),ht("input",{type:"file",accept:".json",style:{display:"none"},onChange:d},null,32)]),m[7]||(m[7]=ht("div",{class:"toolbar-separator"},null,-1)),ht("button",{class:"toolbar-button",title:"Изометрический вид",onClick:m[0]||(m[0]=h=>g(Ct(zt).Isometric))},[ht("img",{src:Ct(s),alt:"Isometric View",class:"toolbar-icon"},null,8,fS)]),ht("button",{class:ha(["toolbar-button",{active:t.value}]),onClick:p,title:"Перспективная камера"},[ht("img",{src:Ct(r),alt:"Perspective View",class:"toolbar-icon"},null,8,dS)],2),m[8]||(m[8]=ht("div",{class:"toolbar-separator"},null,-1)),ht("button",{class:"toolbar-button",title:"Вид в направлении X",onClick:m[1]||(m[1]=h=>g(Ct(zt).XDirection))},[ht("img",{src:Ct(a),alt:"X Direction View",class:"toolbar-icon"},null,8,hS)]),ht("button",{class:"toolbar-button",title:"Вид в направлении Y",onClick:m[2]||(m[2]=h=>g(Ct(zt).YDirection))},[ht("img",{src:Ct(o),alt:"Y Direction View",class:"toolbar-icon"},null,8,pS)]),ht("button",{class:"toolbar-button",title:"Вид в направлении Z",onClick:m[3]||(m[3]=h=>g(Ct(zt).ZDirection))},[ht("img",{src:Ct(c),alt:"Z Direction View",class:"toolbar-icon"},null,8,mS)]),m[9]||(m[9]=ht("div",{class:"toolbar-separator"},null,-1)),ht("button",{class:"toolbar-button",title:"Вид в обратном направлении X",onClick:m[4]||(m[4]=h=>g(Ct(zt).ReverseXDirection))},[ht("img",{src:Ct(l),alt:"Reverse X Direction View",class:"toolbar-icon"},null,8,xS)]),ht("button",{class:"toolbar-button",title:"Вид в обратном направлении Y",onClick:m[5]||(m[5]=h=>g(Ct(zt).ReverseYDirection))},[ht("img",{src:Ct(u),alt:"Reverse Y Direction View",class:"toolbar-icon"},null,8,gS)]),ht("button",{class:"toolbar-button",title:"Вид в обратном направлении Z",onClick:m[6]||(m[6]=h=>g(Ct(zt).ReverseZDirection))},[ht("img",{src:Ct(f),alt:"Reverse Z Direction View",class:"toolbar-icon"},null,8,_S)])])]))}}),AS=yd(vS,[["__scopeId","data-v-fce5960c"]]);nm(AS).mount("#app");
