(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $c(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gr={duration:.5,overwrite:!1,delay:0},So,At,at,mn=1e8,Je=1/mn,Za=Math.PI*2,Bu=Za/4,zu=0,Jc=Math.sqrt,Gu=Math.cos,Vu=Math.sin,bt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},Xn=function(e){return typeof e=="number"},yo=function(e){return typeof e>"u"},Dn=function(e){return typeof e=="object"},jt=function(e){return e!==!1},To=function(){return typeof window<"u"},ss=function(e){return pt(e)||bt(e)},Qc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},It=Array.isArray,ku=/random\([^)]+\)/g,Hu=/,\s*/g,il=/(?:-?\.?\d|\.)+/gi,eh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,la=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,th=/[+-]=-?[.\d]+/,Wu=/[^,'"\[\]\s]+/gi,Xu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,wn,$a,Eo,ln={},Is={},nh,ih=function(e){return(Is=hr(e,ln))&&Jt},bo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vr=function(e,t){return!t&&console.warn(e)},rh=function(e,t){return e&&(ln[e]=t)&&Is&&(Is[e]=t)||ln},kr=function(){return 0},qu={suppressEvents:!0,isStart:!0,kill:!1},Ps={suppressEvents:!0,kill:!1},Yu={suppressEvents:!0},wo={},oi=[],Ja={},sh,nn={},ca={},rl=30,Ls=[],Ao="",Ro=function(e){var t=e[0],n,i;if(Dn(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ls.length;i--&&!Ls[i].targetTest(t););n=Ls[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ah(e[i],n)))||e.splice(i,1);return e},Ci=function(e){return e._gsap||Ro(_n(e))[0]._gsap},ah=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():yo(n)&&e.getAttribute&&e.getAttribute(t)||n},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},ar=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ju=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ns=function(){var e=oi.length,t=oi.slice(0),n,i;for(Ja={},oi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Co=function(e){return!!(e._initted||e._startAt||e.add)},oh=function(e,t,n,i){oi.length&&!At&&Ns(),e.render(t,n,!!(At&&t<0&&Co(e))),oi.length&&!At&&Ns()},lh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wu).length<2?t:bt(e)?e.trim():e},ch=function(e){return e},cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ku=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},hr=function(e,t){for(var n in t)e[n]=t[n];return e},sl=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Dn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Fs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ir=function(e){var t=e.parent||ht,n=e.keyframes?Ku(It(e.keyframes)):cn;if(jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Zu=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},hh=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Zs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ui=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$u=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qa=function(e,t,n,i){return e._startAt&&(At?e._startAt.revert(Ps):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ju=function r(e){return!e||e._ts&&r(e.parent)},al=function(e){return e._repeat?ur(e._tTime,e=e.duration()+e._rDelay)*e:0},ur=function(e,t){var n=Math.floor(e=ct(e/t));return e&&n===e?n-1:n},Os=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$s=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Je)||0))},Js=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$s(e),n._dirty||Pi(n,e)),e},uh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Os(e.rawTime(),t),(!t._dur||Jr(0,t.totalDuration(),n)-t._tTime>Je)&&t.render(n,!0)),Pi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Je}},Cn=function(e,t,n,i){return t.parent&&ui(t),t._start=ct((Xn(n)?n:n||e!==ht?fn(e,n,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hh(e,t,"_first","_last",e._sort?"_start":0),eo(t)||(e._recent=t),i||uh(e,t),e._ts<0&&Js(e,e._tTime),e},fh=function(e,t){return(ln.ScrollTrigger||bo("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},dh=function(e,t,n,i,s){if(Lo(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!At&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sh!==rn.frame)return oi.push(e),e._lazy=[s,i],1},Qu=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},eo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ef=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Qu(e)&&!(!e._initted&&eo(e))||(e._ts<0||e._dp._ts<0)&&!eo(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Jr(0,e._tDur,t),h=ur(l,a),e._yoyo&&h&1&&(o=1-o),h!==ur(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||At||i||e._zTime===Je||!t&&e._zTime){if(!e._initted&&dh(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Je:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Qa(e,t,n,!0),e._onUpdate&&!n&&sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ui(e,1),!n&&!At&&(sn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tf=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},fr=function(e,t,n,i){var s=e._repeat,o=ct(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ct(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Js(e,e._tTime=e._tDur*a),e.parent&&$s(e),n||Pi(e.parent,e),e},ol=function(e){return e instanceof qt?Pi(e):fr(e,e._dur)},nf={_start:0,endTime:kr,totalDuration:kr},fn=function r(e,t,n){var i=e.labels,s=e._recent||nf,o=e.duration()>=mn?s.endTime(!1):e._dur,a,l,c;return bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(It(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Nr=function(e,t,n){var i=Xn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=jt(l.vars.inherit)&&l.parent;o.immediateRender=jt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new vt(t[0],o,t[s+1])},pi=function(e,t){return e||e===0?t(e):t},Jr=function(e,t,n){return n<e?e:n>t?t:n},Ut=function(e,t){return!bt(e)||!(t=Xu.exec(e))?"":t[1]},rf=function(e,t,n){return pi(n,function(i){return Jr(e,t,i)})},to=[].slice,ph=function(e,t){return e&&Dn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dn(e[0]))&&!e.nodeType&&e!==wn},sf=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return bt(i)&&!t||ph(i,1)?(s=n).push.apply(s,_n(i)):n.push(i)})||n},_n=function(e,t,n){return at&&!t&&at.selector?at.selector(e):bt(e)&&!n&&($a||!dr())?to.call((t||Eo).querySelectorAll(e),0):It(e)?sf(e,n):ph(e)?to.call(e,0):e?[e]:[]},no=function(e){return e=_n(e)[0]||Vr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _n(t,n.querySelectorAll?n:n===e?Vr("Invalid scope")||Eo.createElement("div"):e)}},mh=function(e){return e.sort(function(){return .5-Math.random()})},_h=function(e){if(pt(e))return e;var t=Dn(e)?e:{each:e},n=Li(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return bt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,m,g){var _=(g||t).length,p=o[_],d,M,x,y,A,C,E,U,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,mn])[1],!v){for(E=-mn;E<(E=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=o[_]=[],d=l?Math.min(v,_)*h-.5:i%v,M=v===mn?0:l?_*u/v-.5:i/v|0,E=0,U=mn,C=0;C<_;C++)x=C%v-d,y=M-(C/v|0),p[C]=A=c?Math.abs(c==="y"?y:x):Jc(x*x+y*y),A>E&&(E=A),A<U&&(U=A);i==="random"&&mh(p),p.max=E-U,p.min=U,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Ut(t.amount||t.each)||0,n=n&&_<0?vf(n):n}return _=(p[f]-p.min)/p.max||0,ct(p.b+(n?n(_):_)*p.v)+p.u}},io=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xn(n)?0:Ut(n))}},gh=function(e,t){var n=It(e),i,s;return!n&&Dn(e)&&(i=n=e.radius||mn,e.values?(e=_n(e.values),(s=!Xn(e[0]))&&(i*=i)):e=io(e.increment)),pi(t,n?pt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mn,h=0,u=e.length,f,m;u--;)s?(f=e[u].x-a,m=e[u].y-l,f=f*f+m*m):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,s||h===o||Xn(o)?h:h+Ut(o)}:io(e))},vh=function(e,t,n,i){return pi(It(e)?!t:n===!0?!!(n=0):!i,function(){return It(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},af=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},of=function(e,t){return function(n){return e(parseFloat(n))+(t||Ut(n))}},lf=function(e,t,n){return Mh(e,t,0,1,n)},xh=function(e,t,n){return pi(n,function(i){return e[~~t(i)]})},cf=function r(e,t,n){var i=t-e;return It(e)?xh(e,r(0,e.length),t):pi(n,function(s){return(i+(s-e)%i)%i+e})},hf=function r(e,t,n){var i=t-e,s=i*2;return It(e)?xh(e,r(0,e.length-1),t):pi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Hr=function(e){return e.replace(ku,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Hu);return vh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Mh=function(e,t,n,i,s){var o=t-e,a=i-n;return pi(s,function(l){return n+((l-e)/o*a||0)})},uf=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=bt(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(It(e)&&!It(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else i||(e=hr(It(e)?[]:{},e));if(!h){for(l in t)Po.call(a,e,l,"get",t[l]);s=function(g){return Io(g,a)||(o?e.p:e)}}}return pi(n,s)},ll=function(e,t,n){var i=e.labels,s=mn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},sn=function(e,t,n){var i=e.vars,s=i[t],o=at,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&oi.length&&Ns(),a&&(at=a),h=l?s.apply(c,l):s.call(c),at=o,h},Dr=function(e){return ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!At),e.progress()<1&&sn(e,"onInterrupt"),e},ir,Sh=[],yh=function(e){if(e)if(e=!e.name&&e.default||e,To()||e.headless){var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:kr,render:Io,add:Po,kill:Rf,modifier:Af,rawVars:0},o={targetTest:0,get:0,getSetter:Uo,aliases:{},register:0};if(dr(),e!==i){if(nn[t])return;cn(i,cn(Fs(e,s),o)),hr(i.prototype,hr(s,Fs(e,o))),nn[i.prop=t]=i,e.targetTest&&(Ls.push(i),wo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rh(t,i),e.register&&e.register(Jt,i,Zt)}else Sh.push(e)},$e=255,Ur={aqua:[0,$e,$e],lime:[0,$e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$e],navy:[0,0,128],white:[$e,$e,$e],olive:[128,128,0],yellow:[$e,$e,0],orange:[$e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$e,0,0],pink:[$e,192,203],cyan:[0,$e,$e],transparent:[$e,$e,$e,0]},ha=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*$e+.5|0},Th=function(e,t,n){var i=e?Xn(e)?[e>>16,e>>8&$e,e&$e]:0:Ur.black,s,o,a,l,c,h,u,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ur[e])i=Ur[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&$e,i&$e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&$e,e&$e]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(il),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ha(l+1/3,s,o),i[1]=ha(l,s,o),i[2]=ha(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(eh),n&&i.length<4&&(i[3]=1),i}else i=e.match(il)||Ur.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/$e,o=i[1]/$e,a=i[2]/$e,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===s?(o-a)/m+(o<a?6:0):u===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Eh=function(e){var t=[],n=[],i=-1;return e.split(li).forEach(function(s){var o=s.match(nr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},cl=function(e,t,n){var i="",s=(e+i).match(li),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=Th(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Eh(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(li,"1").split(nr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(li),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},li=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ur)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),ff=/hsl[a]?\(/,bh=function(e){var t=e.join(" "),n;if(li.lastIndex=0,li.test(t))return n=ff.test(t),e[1]=cl(e[1],n),e[0]=cl(e[0],n,Eh(e[1])),!0},Wr,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,m,g=function _(p){var d=r()-i,M=p===!0,x,y,A,C;if((d>e||d<0)&&(n+=d-t),i+=d,A=i-n,x=A-o,(x>0||M)&&(C=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(_)),y)for(m=0;m<a.length;m++)a[m](A,f,C,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){nh&&(!$a&&To()&&(wn=$a=window,Eo=wn.document||{},ln.gsap=Jt,(wn.gsapVersions||(wn.gsapVersions=[])).push(Jt.version),ih(Is||wn.GreenSockGlobals||!wn.gsap&&wn||{}),Sh.forEach(yh)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Wr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Wr=0,c=kr},lagSmoothing:function(p,d){e=p||1/0,t=Math.min(d||33,e)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,d,M){var x=d?function(y,A,C,E){p(y,A,C,E),u.remove(x)}:p;return u.remove(p),a[M?"unshift":"push"](x),dr(),x},remove:function(p,d){~(d=a.indexOf(p))&&a.splice(d,1)&&m>=d&&m--},_listeners:a},u}(),dr=function(){return!Wr&&rn.wake()},Xe={},df=/^[\d.\-M][\d.\-,\s]/,pf=/["']/g,mf=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(pf,"").trim():+c,i=l.substr(a+1).trim();return t},_f=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gf=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[mf(t[1])]:_f(e).split(",").map(lh)):Xe._CE&&df.test(e)?Xe._CE("",e):n},vf=function(e){return function(t){return 1-e(1-t)}},Li=function(e,t){return e&&(pt(e)?e:Xe[e]||gf(e))||t},Fi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Kt(e,function(a){Xe[a]=ln[a]=s,Xe[o=a.toLowerCase()]=n;for(var l in s)Xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[a+"."+l]=s[l]}),s},wh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ua=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Za*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Vu((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:wh(a);return s=Za/s,l.config=function(c,h){return r(e,c,h)},l},fa=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:wh(n);return i.config=function(s){return r(e,s)},i};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Fi("Elastic",ua("in"),ua("out"),ua());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Fi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Fi("Circ",function(r){return-(Jc(1-r*r)-1)});Fi("Sine",function(r){return r===1?1:-Gu(r*Bu)+1});Fi("Back",fa("in"),fa("out"),fa());Xe.SteppedEase=Xe.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Je;return function(a){return((i*Jr(0,o,a)|0)+s)*n}}};Gr.ease=Xe["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ao+=r+","+r+"Params,"});var Ah=function(e,t){this.id=zu++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ah,this.set=t?t.getSetter:Uo},Xr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fr(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),Wr||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,fr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(dr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Js(this,n),!s._dp||s.parent||uh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Je||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),oh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+al(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+al(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ur(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Os(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Je?0:this._rts,this.totalTime(Jr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),$s(this),$u(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(dr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Cn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Os(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Yu);var i=At;return At=n,Co(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),At=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ol(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ol(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(fn(this,n),jt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,jt(i)),this._dur||(this._zTime=-Je),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Je:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Je)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=pt(n)?n:ch,l=function(){var h=i.then;i.then=null,s&&s(),pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Dr(this)},r}();cn(Xr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var qt=function(r){$c(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=jt(n.sortChildren),ht&&Cn(n.parent||ht,Gn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fh(Gn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Nr(0,arguments,this),this},t.from=function(i,s,o){return Nr(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Nr(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ir(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(i,s,fn(this,o),1),this},t.call=function(i,s,o){return Cn(this,vt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new vt(i,o,fn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ir(o).immediateRender=jt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ir(a).immediateRender=jt(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ct(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,M,x,y,A,C,E;if(this!==ht&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,x=this._ts,d=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=ct(h%p),h===l?(_=this._repeat,f=c):(A=ct(h/p),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=ur(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),C&&_&1&&(f=c-f,E=1),_!==A&&!this._lock){var U=C&&A&1,v=U===(C&&_&1);if(_<A&&(U=!U),a=U?0:h%c?c:h,this._lock=1,this.render(a||(E?0:ct(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=tf(this,ct(a),ct(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!A&&(sn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!d){M=0,g&&(h+=this._zTime=-Je);break}}m=g}else{m=this._last;for(var T=i<0?i:f;m;){if(g=m._prev,(m._act||T<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,s,o||At&&Co(m)),f!==this._time||!this._ts&&!d){M=0,g&&(h+=this._zTime=T?-Je:Je);break}}m=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Je)._zTime=f>=a?1:-1,this._ts))return this._start=y,$s(this),this.render(i,s,o);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ui(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(sn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Xn(s)||(s=fn(this,s,i)),!(i instanceof Xr)){if(It(i))return i.forEach(function(a){return o.add(a,s)}),this;if(bt(i))return this.addLabel(i,s);if(pt(i))i=vt.delayedCall(0,i);else return this}return this!==i?Cn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof vt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return bt(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(i.parent===this&&Zs(this,i),i===this._recent&&(this._recent=this._last),Pi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=fn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=vt.delayedCall(0,s||kr,o);return a.data="isPause",this._hasPause=1,Cn(this,a,fn(this,i))},t.removePause=function(i){var s=this._first;for(i=fn(this,i);s;)s._start===i&&s.data==="isPause"&&ui(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ti!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=_n(i),l=this._first,c=Xn(s),h;l;)l instanceof vt?ju(l._targets,a)&&(c?(!ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=fn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=vt.to(o,cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Je,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&fr(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,cn({startAt:{time:fn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ll(this,fn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ll(this,fn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Je)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ct(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Pi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pi(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=mn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Cn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=ct(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;fr(o,o===ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ht._ts&&(oh(ht,Os(i,ht)),sh=rn.frame),rn.frame>=rl){rl+=on.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&on.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(Xr);cn(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var xf=function(e,t,n,i,s,o,a){var l=new Zt(this._pt,e,t,0,1,Uh,null,s),c=0,h=0,u,f,m,g,_,p,d,M;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Hr(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(la)||[];u=la.exec(i);)g=u[0],_=i.substring(c,u.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?ar(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=la.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(th.test(i)||d)&&(l.e=0),this._pt=l,l},Po=function(e,t,n,i,s,o,a,l,c,h){pt(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:pt(u)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,m=pt(u)?c?Ef:Lh:Do,g;if(bt(i)&&(~i.indexOf("random(")&&(i=Hr(i)),i.charAt(1)==="="&&(g=ar(f,i)+(Ut(f)||0),(g||g===0)&&(i=g))),!h||f!==i||ro)return!isNaN(f*i)&&i!==""?(g=new Zt(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?wf:Dh,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&bo(t,i),xf.call(this,e,t,f,i,m,l||on.stringFilter,c))},Mf=function(e,t,n,i,s){if(pt(e)&&(e=Fr(e,s,t,n,i)),!Dn(e)||e.style&&e.nodeType||It(e)||Qc(e))return bt(e)?Fr(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Fr(e[a],s,t,n,i);return o},Rh=function(e,t,n,i,s,o){var a,l,c,h;if(nn[e]&&(a=new nn[e]).init(s,a.rawVars?t[e]:Mf(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Zt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ir))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ti,ro,Lo=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,d=e.parent,M=d&&d.data==="nested"?d.vars.targets:p,x=e._overwrite==="auto"&&!So,y=e.timeline,A=i.easeReverse||u,C,E,U,v,T,V,G,$,L,F,z,K,j;if(y&&(!f||!s)&&(s="none"),e._ease=Li(s,Gr.ease),e._rEase=A&&(Li(A)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if($=p[0]?Ci(p[0]).harness:0,K=$&&i[$.prop],C=Fs(i,wo),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!m?_.render(-1,!0):_.revert(h&&g?Ps:qu),_._lazy=0),o){if(ui(e._startAt=vt.set(p,cn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&jt(l),startAt:null,delay:0,onUpdate:c&&function(){return sn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(At||!a&&!m)&&e._startAt.revert(Ps),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),U=cn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&jt(l),immediateRender:a,stagger:0,parent:d},C),K&&(U[$.prop]=K),ui(e._startAt=vt.set(p,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(At?e._startAt.revert(Ps):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Je,Je);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&jt(l)||l&&!g,E=0;E<p.length;E++){if(T=p[E],G=T._gsap||Ro(p)[E]._gsap,e._ptLookup[E]=F={},Ja[G.id]&&oi.length&&Ns(),z=M===p?E:M.indexOf(T),$&&(L=new $).init(T,K||C,e,z,M)!==!1&&(e._pt=v=new Zt(e._pt,T,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Z){F[Z]=v}),L.priority&&(V=1)),!$||K)for(U in C)nn[U]&&(L=Rh(U,C,e,z,T,M))?L.priority&&(V=1):F[U]=v=Po.call(e,T,U,"get",C[U],z,M,0,i.stringFilter);e._op&&e._op[E]&&e.kill(T,e._op[E]),x&&e._pt&&(ti=e,ht.killTweensOf(T,F,e.globalTime(t)),j=!e.parent,ti=0),e._pt&&l&&(Ja[G.id]=1)}V&&Ih(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&y.render(mn,!0,!0)},Sf=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,m;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,m=e._targets.length;m--;){if(h=f[m][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ro=1,e.vars[t]="+=0",Lo(e,a),ro=0,l?Vr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=_t(n)+Ut(u.e)),u.b&&(u.b=h.s+Ut(u.b))},yf=function(e,t){var n=e[0]?Ci(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=hr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Tf=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(It(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Fr=function(e,t,n,i,s){return pt(e)?e.call(t,n,i,s):bt(e)&&~e.indexOf("random(")?Hr(e):e},Ch=Ao+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ph={};Kt(Ch+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ph[r]=1});var vt=function(r){$c(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ir(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=i.parent||ht,M=(It(n)||Qc(n)?Xn(n[0]):"length"in i)?[n]:_n(n),x,y,A,C,E,U,v,T;if(a._targets=M.length?Ro(M):Vr("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||ss(c)||ss(h)){i=a.vars;var V=i.easeReverse||i.yoyoEase;if(x=a.timeline=new qt({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:M}),x.kill(),x.parent=x._dp=Gn(a),x._start=0,f||ss(c)||ss(h)){if(C=M.length,v=f&&_h(f),Dn(f))for(E in f)~Ch.indexOf(E)&&(T||(T={}),T[E]=f[E]);for(y=0;y<C;y++)A=Fs(i,Ph),A.stagger=0,V&&(A.easeReverse=V),T&&hr(A,T),U=M[y],A.duration=+Fr(c,Gn(a),y,U,M),A.delay=(+Fr(h,Gn(a),y,U,M)||0)-a._delay,!f&&C===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),x.to(U,A,v?v(y,U,M):0),x._ease=Xe.none;x.duration()?c=h=0:a.timeline=0}else if(g){Ir(cn(x.vars.defaults,{ease:"none"})),x._ease=Li(g.ease||i.ease||"none");var G=0,$,L,F;if(It(g))g.forEach(function(z){return x.to(M,z,">")}),x.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||Tf(E,g[E],A,g.easeEach);for(E in A)for($=A[E].sort(function(z,K){return z.t-K.t}),G=0,y=0;y<$.length;y++)L=$[y],F={ease:L.e,duration:(L.t-(y?$[y-1].t:0))/100*c},F[E]=L.v,x.to(M,F,G),G+=F.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return m===!0&&!So&&(ti=Gn(a),ht.killTweensOf(M),ti=0),Cn(d,Gn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===ct(d._time)&&jt(u)&&Ju(Gn(a))&&d.data!=="nested")&&(a._tTime=-Je,a.render(Math.max(0,-h)||0)),p&&fh(Gn(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Je&&!h?l:i<Je?0:i,f,m,g,_,p,d,M,x;if(!c)ef(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=ct(u%_),u===l?(g=this._repeat,f=c):(p=ct(u/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(f=c-f),p=ur(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=u,this;g!==p&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(ct(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(dh(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var A=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(f/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!p&&(sn(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Qa(this,i,s,o),sn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Qa(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ui(this,1),!s&&!(h&&!a)&&(u||a||d)&&(sn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Wr||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Lo(this,c),h=this._ease(c/this._dur),Sf(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Js(this,0),this.parent||hh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!At),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ti&&ti.vars.overwrite!==!0)._first||Dr(this),this.parent&&o!==this.timeline.totalDuration()&&fr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?_n(i):a,c=this._ptLookup,h=this._pt,u,f,m,g,_,p,d;if((!s||s==="all")&&Zu(a,l))return s==="all"&&(this._pt=0),Dr(this);for(u=this._op=this._op||[],s!=="all"&&(bt(s)&&(_={},Kt(s,function(M){return _[M]=1}),s=_),s=yf(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=c[d],s==="all"?(u[d]=s,g=f,m={}):(m=u[d]=u[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Zs(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&h&&Dr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Nr(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Nr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return ht.killTweensOf(i,s,o)},e}(Xr);cn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(r){vt[r]=function(){var e=new qt,t=to.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Do=function(e,t,n){return e[t]=n},Lh=function(e,t,n){return e[t](n)},Ef=function(e,t,n,i){return e[t](i.fp,n)},bf=function(e,t,n){return e.setAttribute(t,n)},Uo=function(e,t){return pt(e[t])?Lh:yo(e[t])&&e.setAttribute?bf:Do},Dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wf=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Uh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Io=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Af=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Rf=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Zs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Cf=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ih=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Zt=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Dh,this.d=l||this,this.set=c||Do,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Cf,this.m=n,this.mt=s,this.tween=i},r}();Kt(Ao+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return wo[r]=1});ln.TweenMax=ln.TweenLite=vt;ln.TimelineLite=ln.TimelineMax=qt;ht=new qt({sortChildren:!1,defaults:Gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=bh;var Di=[],Ds={},Pf=[],hl=0,Lf=0,da=function(e){return(Ds[e]||Pf).map(function(t){return t()})},so=function(){var e=Date.now(),t=[];e-hl>2&&(da("matchMediaInit"),Di.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=wn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),da("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hl=e,da("matchMedia"))},Nh=function(){function r(t,n){this.selector=n&&no(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lf++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){pt(n)&&(s=i,i=n,n=pt);var o=this,a=function(){var c=at,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=no(s)),at=o,u=i.apply(o,arguments),pt(u)&&o._r.push(u),at=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===pt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof vt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Di.length;o--;)Di[o].id===this.id&&Di.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Df=function(){function r(t){this.contexts=[],this.scope=t,at&&at.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Dn(n)||(n={matches:n});var o=new Nh(0,s||this.scope),a=o.conditions={},l,c,h;at&&!o.selector&&(o.selector=at.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wn.matchMedia(n[c]),l&&(Di.indexOf(o)<0&&Di.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(so):l.addEventListener("change",so)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Bs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return yh(i)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){bt(e)&&(e=_n(e)[0]);var s=Ci(e||{}).get,o=n?ch:lh;return n==="native"&&(n=""),e&&(t?o((nn[t]&&nn[t].get||s)(e,t,n,i)):function(a,l,c){return o((nn[a]&&nn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=_n(e),e.length>1){var i=e.map(function(h){return Jt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=nn[t],a=Ci(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;ir._pt=0,u.init(e,n?h+n:h,ir,0,[e]),u.render(1,u),ir._pt&&Io(1,ir)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Jt.to(e,cn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Li(e.ease,Gr.ease)),sl(Gr,e||{})},config:function(e){return sl(on,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!nn[a]&&!ln[a]&&Vr(t+" effect requires "+a+" plugin.")}),ca[t]=function(a,l,c){return n(_n(a),cn(l||{},s),c)},o&&(qt.prototype[t]=function(a,l,c){return this.add(ca[t](a,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=Li(t)},parseEase:function(e,t){return arguments.length?Li(e,t):Xe},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qt(e),i,s;for(n.smoothChildTiming=jt(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&Cn(n,i,i._start-i._delay),i=s;return Cn(ht,n,0),n},context:function(e,t){return e?new Nh(e,t):at},matchMedia:function(e){return new Df(e)},matchMediaRefresh:function(){return Di.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||so()},addEventListener:function(e,t){var n=Ds[e]||(Ds[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ds[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:cf,wrapYoyo:hf,distribute:_h,random:vh,snap:gh,normalize:lf,getUnit:Ut,clamp:rf,splitColor:Th,toArray:_n,selector:no,mapRange:Mh,pipe:af,unitize:of,interpolate:uf,shuffle:mh},install:ih,effects:ca,ticker:rn,updateRoot:qt.updateRoot,plugins:nn,globalTimeline:ht,core:{PropTween:Zt,globals:rh,Tween:vt,Timeline:qt,Animation:Xr,getCache:Ci,_removeLinkedListItem:Zs,reverting:function(){return At},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return So=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Bs[r]=vt[r]});rn.add(qt.updateRoot);ir=Bs.to({},{duration:0});var Uf=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},If=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Uf(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},pa=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(bt(s)&&(l={},Kt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}If(a,s)}}}},Jt=Bs.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)At?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},pa("roundProps",io),pa("modifiers"),pa("snap",gh))||Bs;vt.version=qt.version=Jt.version="3.15.0";nh=1;To()&&dr();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ul,ni,or,No,Ri,fl,Fo,Nf=function(){return typeof window<"u"},qn={},Ti=180/Math.PI,lr=Math.PI/180,Oi=Math.atan2,dl=1e8,Oo=/([A-Z])/g,Ff=/(left|right|width|margin|padding|x)/i,Of=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ao=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bf=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zf=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gf=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vf=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Oh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kf=function(e,t,n){return e.style[t]=n},Hf=function(e,t,n){return e.style.setProperty(t,n)},Wf=function(e,t,n){return e._gsap[t]=n},Xf=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qf=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Yf=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ut="transform",$t=ut+"Origin",jf=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in qn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Vn(i,a)}):this.tfm[e]=o.x?o[e]:Vn(i,e),e===$t&&(this.tfm.zOrigin=o.zOrigin);else return Pn.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(ut)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($t,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},Bh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kf=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Oo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Fo(),(!s||!s.isStart)&&!n[ut]&&(Bh(n),i.zOrigin&&n[$t]&&(n[$t]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zh=function(e,t){var n={target:e,props:[],revert:Kf,save:jf};return e._gsap||Jt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Gh,oo=function(e,t){var n=ni.createElementNS?ni.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ni.createElement(e);return n&&n.style?n:ni.createElement(e)},an=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Oo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,pr(t)||t,1)||""},pl="O,Moz,ms,Ms,Webkit".split(","),pr=function(e,t,n){var i=t||Ri,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(pl[o]+e in s););return o<0?null:(o===3?"ms":o>=0?pl[o]:"")+e},lo=function(){Nf()&&window.document&&(ul=window,ni=ul.document,or=ni.documentElement,Ri=oo("div")||{style:{}},oo("div"),ut=pr(ut),$t=ut+"Origin",Ri.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gh=!!pr("perspective"),Fo=Jt.core.reverting,No=1)},ml=function(e){var t=e.ownerSVGElement,n=oo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),or.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),or.removeChild(n),s},_l=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vh=function(e){var t,n;try{t=e.getBBox()}catch{t=ml(e),n=1}return t&&(t.width||t.height)||n||(t=ml(e)),t&&!t.width&&!t.x&&!t.y?{x:+_l(e,["x","cx","x1"])||0,y:+_l(e,["y","cy","y1"])||0,width:0,height:0}:t},kh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vh(e))},fi=function(e,t){if(t){var n=e.style,i;t in qn&&t!==$t&&(t=ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Oo,"-$1").toLowerCase())):n.removeAttribute(t)}},ii=function(e,t,n,i,s,o){var a=new Zt(e._pt,t,n,0,1,o?Oh:Fh);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},gl={deg:1,rad:1,turn:1},Zf={grid:1,flex:1},di=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ri.style,l=Ff.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",m=i==="%",g,_,p,d;if(i===o||!s||gl[i]||gl[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),d=e.getCTM&&kh(e),(m||o==="%")&&(qn[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[h],_t(m?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ni||!_.appendChild)&&(_=ni.body),p=_._gsap,p&&m&&p.width&&l&&p.time===rn.time&&!p.uncache)return _t(s/p.width*u);if(m&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=u+i,g=e[h],M?e.style[t]=M:fi(e,t)}else(m||o==="%")&&!Zf[an(_,"display")]&&(a.position=an(e,"position")),_===e&&(a.position="static"),_.appendChild(Ri),g=Ri[h],_.removeChild(Ri),a.position="absolute";return l&&m&&(p=Ci(_),p.time=rn.time,p.width=_[h]),_t(f?g*s/u:g&&s?u/g*s:0)},Vn=function(e,t,n,i){var s;return No||lo(),t in Pn&&t!=="transform"&&(t=Pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),qn[t]&&t!=="transform"?(s=Yr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gs(an(e,$t))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=zs[t]&&zs[t](e,t,n)||an(e,t)||ah(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?di(e,t,s,n)+n:s},$f=function(e,t,n,i){if(!n||n==="none"){var s=pr(t,e,1),o=s&&an(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=an(e,"borderTopColor"))}var a=new Zt(this._pt,e.style,t,0,1,Uh),l=0,c=0,h,u,f,m,g,_,p,d,M,x,y,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=an(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=an(e,t)||i,_?e.style[t]=_:fi(e,t)),h=[n,i],bh(h),n=h[0],i=h[1],f=n.match(nr)||[],A=i.match(nr)||[],A.length){for(;u=nr.exec(i);)p=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,y=_.substr((m+"").length),p.charAt(1)==="="&&(p=ar(m,p)+y),d=parseFloat(p),x=p.substr((d+"").length),l=nr.lastIndex-x.length,x||(x=x||on.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(m=di(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:m,c:d-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Oh:Fh;return th.test(i)&&(a.e=0),this._pt=a,a},vl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jf=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vl[n]||n,t[1]=vl[i]||i,t.join(" ")},Qf=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qn[a]&&(l=1,a=a==="transformOrigin"?$t:ut),fi(n,a);l&&(fi(n,ut),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Yr(n,1),o.uncache=1,Bh(i)))}},zs={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Zt(e._pt,t,n,0,0,Qf);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},qr=[1,0,0,1,0,0],Hh={},Wh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xl=function(e){var t=an(e,ut);return Wh(t)?qr:t.substr(7).match(eh).map(_t)},Bo=function(e,t){var n=e._gsap||Ci(e),i=e.style,s=xl(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qr:s):(s===qr&&!e.offsetParent&&e!==or&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,or.appendChild(e)),s=xl(e),l?i.display=l:fi(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):or.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},co=function(e,t,n,i,s,o){var a=e._gsap,l=s||Bo(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],M=l[5],x=t.split(" "),y=parseFloat(x[0])||0,A=parseFloat(x[1])||0,C,E,U,v;n?l!==qr&&(E=m*p-g*_)&&(U=y*(p/E)+A*(-_/E)+(_*M-p*d)/E,v=y*(-g/E)+A*(m/E)-(m*M-g*d)/E,y=U,A=v):(C=Vh(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),A=C.y+(~(x[1]||x[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&a.smooth?(d=y-c,M=A-h,a.xOffset=u+(d*m+M*_)-d,a.yOffset=f+(d*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[$t]="0px 0px",o&&(ii(o,a,"xOrigin",c,y),ii(o,a,"yOrigin",h,A),ii(o,a,"xOffset",u,a.xOffset),ii(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Yr=function(e,t){var n=e._gsap||new Ah(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=an(e,$t)||"0",h,u,f,m,g,_,p,d,M,x,y,A,C,E,U,v,T,V,G,$,L,F,z,K,j,Z,P,R,H,N,k,J;return h=u=f=_=p=d=M=x=y=0,m=g=1,n.svg=!!(e.getCTM&&kh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),i.scale=i.rotate=i.translate="none"),E=Bo(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),co(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,C=n.yOrigin||0,E!==qr&&(V=E[0],G=E[1],$=E[2],L=E[3],h=F=E[4],u=z=E[5],E.length===6?(m=Math.sqrt(V*V+G*G),g=Math.sqrt(L*L+$*$),_=V||G?Oi(G,V)*Ti:0,M=$||L?Oi($,L)*Ti+_:0,M&&(g*=Math.abs(Math.cos(M*lr))),n.svg&&(h-=A-(A*V+C*$),u-=C-(A*G+C*L))):(J=E[6],N=E[7],P=E[8],R=E[9],H=E[10],k=E[11],h=E[12],u=E[13],f=E[14],U=Oi(J,H),p=U*Ti,U&&(v=Math.cos(-U),T=Math.sin(-U),K=F*v+P*T,j=z*v+R*T,Z=J*v+H*T,P=F*-T+P*v,R=z*-T+R*v,H=J*-T+H*v,k=N*-T+k*v,F=K,z=j,J=Z),U=Oi(-$,H),d=U*Ti,U&&(v=Math.cos(-U),T=Math.sin(-U),K=V*v-P*T,j=G*v-R*T,Z=$*v-H*T,k=L*T+k*v,V=K,G=j,$=Z),U=Oi(G,V),_=U*Ti,U&&(v=Math.cos(U),T=Math.sin(U),K=V*v+G*T,j=F*v+z*T,G=G*v-V*T,z=z*v-F*T,V=K,F=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=_t(Math.sqrt(V*V+G*G+$*$)),g=_t(Math.sqrt(z*z+J*J)),U=Oi(F,z),M=Math.abs(U)>2e-4?U*Ti:0,y=k?1/(k<0?-k:k):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Wh(an(e,ut)),K&&e.setAttribute("transform",K))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=_t(m),n.scaleY=_t(g),n.rotation=_t(_)+a,n.rotationX=_t(p)+a,n.rotationY=_t(d)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[$t]=Gs(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?td:Gh?Xh:ed,n.uncache=0,n},Gs=function(e){return(e=e.split(" "))[0]+" "+e[1]},ma=function(e,t,n){var i=Ut(t);return _t(parseFloat(t)+parseFloat(di(e,"x",n+"px",i)))+i},ed=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Xh(e,t)},gi="0deg",wr="0px",vi=") ",Xh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,M=n.target,x=n.zOrigin,y="",A=d==="auto"&&e&&e!==1||d===!0;if(x&&(u!==gi||h!==gi)){var C=parseFloat(h)*lr,E=Math.sin(C),U=Math.cos(C),v;C=parseFloat(u)*lr,v=Math.cos(C),o=ma(M,o,E*v*-x),a=ma(M,a,-Math.sin(C)*-x),l=ma(M,l,U*v*-x+x)}p!==wr&&(y+="perspective("+p+vi),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(A||o!==wr||a!==wr||l!==wr)&&(y+=l!==wr||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vi),c!==gi&&(y+="rotate("+c+vi),h!==gi&&(y+="rotateY("+h+vi),u!==gi&&(y+="rotateX("+u+vi),(f!==gi||m!==gi)&&(y+="skew("+f+", "+m+vi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+vi),M.style[ut]=y||"translate(0, 0)"},td=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),A,C,E,U,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=lr,c*=lr,A=Math.cos(l)*u,C=Math.sin(l)*u,E=Math.sin(l-c)*-f,U=Math.cos(l-c)*f,c&&(h*=lr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),E*=v,U*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),A*=v,C*=v)),A=_t(A),C=_t(C),E=_t(E),U=_t(U)):(A=u,U=f,C=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=di(m,"x",o,"px"),y=di(m,"y",a,"px")),(g||_||p||d)&&(x=_t(x+g-(g*A+_*E)+p),y=_t(y+_-(g*C+_*U)+d)),(i||s)&&(v=m.getBBox(),x=_t(x+i/100*v.width),y=_t(y+s/100*v.height)),v="matrix("+A+","+C+","+E+","+U+","+x+","+y+")",m.setAttribute("transform",v),M&&(m.style[ut]=v)},nd=function(e,t,n,i,s){var o=360,a=bt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ti:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*dl)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*dl)%o-~~(c/o)*o)),e._pt=f=new Zt(e._pt,t,n,i,c,Bf),f.e=h,f.u="deg",e._props.push(n),f},Ml=function(e,t){for(var n in t)e[n]=t[n];return e},id=function(e,t,n){var i=Ml({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ut]=t,a=Yr(n,1),fi(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],o[ut]=t,a=Yr(n,1),o[ut]=c);for(l in qn)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(m=Ut(c),g=Ut(h),u=m!==g?di(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new Zt(e._pt,a,l,u,f-u,ao),e._pt.u=g||0,e._props.push(l));Ml(a,i)};Kt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});zs[e>1?"border"+r:r]=function(a,l,c,h,u){var f,m;if(arguments.length<4)return f=o.map(function(g){return Vn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},o.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,m,u)}});var qh={name:"css",register:lo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,m,g,_,p,d,M,x,y,A,C,E,U,v;No||lo(),this.styles=this.styles||zh(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(nn[_]&&Rh(_,t,n,i,e,s)))){if(m=typeof h,g=zs[_],m==="function"&&(h=h.call(n,i,e,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Hr(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",li.lastIndex=0,li.test(c)||(p=Ut(c),d=Ut(h),d?p!==d&&(c=di(e,_,c,d)+d):p&&(h+=p)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],bt(c)&&~c.indexOf("random(")&&(c=Hr(c)),Ut(c+"")||c==="auto"||(c+=on.units[_]||Ut(Vn(e,_))||""),(c+"").charAt(1)==="="&&(c=Vn(e,_))):c=Vn(e,_),f=parseFloat(c),M=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Pn&&(_==="autoAlpha"&&(f===1&&Vn(e,"visibility")==="hidden"&&u&&(f=0),U.push("visibility",0,a.visibility),ii(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Pn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in qn,x){if(this.styles.save(_),v=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=an(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=h,h=an(e,"perspective"),T?e.style.perspective=T:fi(e,"perspective")}u=parseFloat(h)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||Yr(e,t.parseTransform),C=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new Zt(this._pt,a,ut,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new Zt(this._pt,A,"scaleY",A.scaleY,(M?ar(A.scaleY,M+u):u)-A.scaleY||0,ao),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push($t,0,a[$t]),h=Jf(h),A.svg?co(e,h,0,C,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==A.zOrigin&&ii(this,A,"zOrigin",A.zOrigin,d),ii(this,a,_,Gs(c),Gs(h)));continue}else if(_==="svgOrigin"){co(e,h,1,C,0,this);continue}else if(_ in Hh){nd(this,A,_,f,M?ar(f,M+h):h);continue}else if(_==="smoothOrigin"){ii(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){id(this,h,e);continue}}else _ in a||(_=pr(_)||_);if(x||(u||u===0)&&(f||f===0)&&!Of.test(h)&&_ in a)p=(c+"").substr((f+"").length),u||(u=0),d=Ut(h)||(_ in on.units?on.units[_]:p),p!==d&&(f=di(e,_,c,d)),this._pt=new Zt(this._pt,x?A:a,_,f,(M?ar(f,M+u):u)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?Vf:ao),this._pt.u=d||0,x&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=Gf):p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=zf);else if(_ in a)$f.call(this,e,_,c,M?M+h:h);else if(_ in e)this.add(e,_,c||e[_],M?M+h:h,i,s);else if(_!=="parseTransform"){bo(_,h);continue}x||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}E&&Ih(this)},render:function(e,t){if(t.tween._time||!Fo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vn,aliases:Pn,getSetter:function(e,t,n){var i=Pn[t];return i&&i.indexOf(",")<0&&(t=i),t in qn&&t!==$t&&(e._gsap.x||Vn(e,"x"))?n&&fl===n?t==="scale"?Xf:Wf:(fl=n||{})&&(t==="scale"?qf:Yf):e.style&&!yo(e.style[t])?kf:~t.indexOf("-")?Hf:Uo(e,t)},core:{_removeProperty:fi,_getMatrix:Bo}};Jt.utils.checkPrefix=pr;Jt.core.getStyleSaver=zh;(function(r,e,t,n){var i=Kt(r+","+e+","+t,function(s){qn[s]=1});Kt(e,function(s){on.units[s]="deg",Hh[s]=1}),Pn[i[13]]=r+","+e,Kt(n,function(s){var o=s.split(":");Pn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});Jt.registerPlugin(qh);var ye=Jt.registerPlugin(qh)||Jt;ye.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="160",rd=0,Sl=1,sd=2,Yh=1,ad=2,zn=3,Yn=0,Ht=1,Vt=2,Hn=0,dn=1,jr=2,yl=3,Tl=4,od=5,bi=100,ld=101,cd=102,El=103,bl=104,hd=200,ud=201,fd=202,dd=203,ho=204,uo=205,pd=206,md=207,_d=208,gd=209,vd=210,xd=211,Md=212,Sd=213,yd=214,Td=0,Ed=1,bd=2,Vs=3,wd=4,Ad=5,Rd=6,Cd=7,jh=0,Pd=1,Ld=2,ci=0,Dd=1,Ud=2,Id=3,Kh=4,Nd=5,Fd=6,Zh=300,mr=301,_r=302,fo=303,po=304,Qs=306,ks=1e3,Tn=1001,mo=1002,Gt=1003,wl=1004,_a=1005,Et=1006,Od=1007,Kr=1008,hi=1009,Bd=1010,zd=1011,Go=1012,$h=1013,ri=1014,si=1015,Wn=1016,Jh=1017,Qh=1018,Ui=1020,Gd=1021,En=1023,Vd=1024,kd=1025,Ii=1026,gr=1027,Hd=1028,eu=1029,Wd=1030,tu=1031,nu=1033,ga=33776,va=33777,xa=33778,Ma=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,iu=36196,Ll=37492,Dl=37496,Ul=37808,Il=37809,Nl=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,Gl=37815,Vl=37816,kl=37817,Hl=37818,Wl=37819,Xl=37820,ql=37821,Sa=36492,Yl=36494,jl=36495,Xd=36283,Kl=36284,Zl=36285,$l=36286,ru=3e3,Ni=3001,qd=3200,Yd=3201,su=0,jd=1,pn="",wt="srgb",jn="srgb-linear",Vo="display-p3",ea="display-p3-linear",Hs="linear",st="srgb",Ws="rec709",Xs="p3",Bi=7680,Jl=519,Kd=512,Zd=513,$d=514,au=515,Jd=516,Qd=517,ep=518,tp=519,Ql=35044,ec="300 es",_o=1035,kn=2e3,qs=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const Or=Math.PI/180,Zr=180/Math.PI;function yr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function kt(r,e,t){return Math.max(e,Math.min(t,r))}function ko(r,e){return(r%e+e)%e}function np(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ip(r,e,t){return r!==e?(t-r)/(e-r):0}function Br(r,e,t){return(1-t)*r+t*e}function rp(r,e,t,n){return Br(r,e,1-Math.exp(-t*n))}function sp(r,e=1){return e-Math.abs(ko(r,e*2)-e)}function ap(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function op(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function lp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cp(r,e){return r+Math.random()*(e-r)}function hp(r){return r*(.5-Math.random())}function up(r){r!==void 0&&(tc=r);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fp(r){return r*Or}function dp(r){return r*Zr}function go(r){return(r&r-1)===0&&r!==0}function pp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const nc={DEG2RAD:Or,RAD2DEG:Zr,generateUUID:yr,clamp:kt,euclideanModulo:ko,mapLinear:np,inverseLerp:ip,lerp:Br,damp:rp,pingpong:sp,smoothstep:ap,smootherstep:op,randInt:lp,randFloat:cp,randFloatSpread:hp,seededRandom:up,degToRad:fp,radToDeg:dp,isPowerOfTwo:go,ceilPowerOfTwo:pp,floorPowerOfTwo:Ys,setQuaternionFromProperEuler:mp,normalize:Ot,denormalize:tr};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],M=i[1],x=i[4],y=i[7],A=i[2],C=i[5],E=i[8];return s[0]=o*_+a*M+l*A,s[3]=o*p+a*x+l*C,s[6]=o*d+a*y+l*E,s[1]=c*_+h*M+u*A,s[4]=c*p+h*x+u*C,s[7]=c*d+h*y+u*E,s[2]=f*_+m*M+g*A,s[5]=f*p+m*x+g*C,s[8]=f*d+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new He;function ou(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _p(){const r=$r("canvas");return r.style.display="block",r}const ic={};function zr(r){r in ic||(ic[r]=!0,console.warn(r))}const rc=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sc=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[jn]:{transfer:Hs,primaries:Ws,toReference:r=>r,fromReference:r=>r},[wt]:{transfer:st,primaries:Ws,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ea]:{transfer:Hs,primaries:Xs,toReference:r=>r.applyMatrix3(sc),fromReference:r=>r.applyMatrix3(rc)},[Vo]:{transfer:st,primaries:Xs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(sc),fromReference:r=>r.applyMatrix3(rc).convertLinearToSRGB()}},gp=new Set([jn,ea]),Ke={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!gp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=as[e].toReference,i=as[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return as[r].primaries},getTransfer:function(r){return r===pn?Hs:as[r].transfer}};function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zi;class lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=$r("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vp=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=yr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ea(i[o].image)):s.push(Ea(i[o]))}else s=Ea(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xp=0;class Wt extends Sr{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Tn,i=Tn,s=Et,o=Kr,a=En,l=hi,c=Wt.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=yr(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?wt:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Ni:ru}set encoding(e){zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ni?wt:pn}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Zh;Wt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(m+1)/2,A=(d+1)/2,C=(h+f)/4,E=(u+_)/4,U=(g+p)/4;return x>y&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=E/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=U/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=U/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mp extends Sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?wt:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Mp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hu extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sp extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,d*M);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const y=a*M;if(l=l*p+f*y,c=c*p+m*y,h=h*p+g*y,u=u*p+_*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new I,ac=new Qr;class es{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),ls.subVectors(this.max,Ar),Gi.subVectors(e.a,Ar),Vi.subVectors(e.b,Ar),ki.subVectors(e.c,Ar),Kn.subVectors(Vi,Gi),Zn.subVectors(ki,Vi),xi.subVectors(Gi,ki);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-xi.z,xi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,xi.z,0,-xi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-xi.y,xi.x,0];return!wa(t,Gi,Vi,ki,ls)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,Gi,Vi,ki,ls))?!1:(cs.crossVectors(Kn,Zn),t=[cs.x,cs.y,cs.z],wa(t,Gi,Vi,ki,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,os=new es,Gi=new I,Vi=new I,ki=new I,Kn=new I,Zn=new I,xi=new I,Ar=new I,ls=new I,cs=new I,Mi=new I;function wa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mi.fromArray(r,s);const a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yp=new es,Rr=new I,Aa=new I;class ta{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Aa)),this.expandByPoint(Rr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new I,Ra=new I,hs=new I,$n=new I,Ca=new I,us=new I,Pa=new I;class uu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=$n.dot(this.direction),l=-$n.dot(hs),c=$n.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ra).addScaledVector(hs,f),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){Ca.subVectors(t,e),us.subVectors(n,e),Pa.crossVectors(Ca,us);let o=this.direction.dot(Pa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(us.crossVectors($n,us));if(l<0)return null;const c=a*this.direction.dot(Ca.cross($n));if(c<0||l+c>o)return null;const h=-a*$n.dot(Pa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,s,o,a,l,c,h,u,f,m,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,m,g,_,p)}set(e,t,n,i,s,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ep)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),fs.crossVectors(en,Jn),i[0]=Jn.x,i[4]=fs.x,i[8]=en.x,i[1]=Jn.y,i[5]=fs.y,i[9]=en.y,i[2]=Jn.z,i[6]=fs.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],M=n[3],x=n[7],y=n[11],A=n[15],C=i[0],E=i[4],U=i[8],v=i[12],T=i[1],V=i[5],G=i[9],$=i[13],L=i[2],F=i[6],z=i[10],K=i[14],j=i[3],Z=i[7],P=i[11],R=i[15];return s[0]=o*C+a*T+l*L+c*j,s[4]=o*E+a*V+l*F+c*Z,s[8]=o*U+a*G+l*z+c*P,s[12]=o*v+a*$+l*K+c*R,s[1]=h*C+u*T+f*L+m*j,s[5]=h*E+u*V+f*F+m*Z,s[9]=h*U+u*G+f*z+m*P,s[13]=h*v+u*$+f*K+m*R,s[2]=g*C+_*T+p*L+d*j,s[6]=g*E+_*V+p*F+d*Z,s[10]=g*U+_*G+p*z+d*P,s[14]=g*v+_*$+p*K+d*R,s[3]=M*C+x*T+y*L+A*j,s[7]=M*E+x*V+y*F+A*Z,s[11]=M*U+x*G+y*z+A*P,s[15]=M*v+x*$+y*K+A*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*h-s*l*h)+p*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+d*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],M=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,x=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,y=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,A=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,C=t*M+n*x+i*y+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return e[0]=M*E,e[1]=(_*f*s-u*p*s-_*i*m+n*p*m+u*i*d-n*f*d)*E,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*d+n*l*d)*E,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*m-n*l*m)*E,e[4]=x*E,e[5]=(h*p*s-g*f*s+g*i*m-t*p*m-h*i*d+t*f*d)*E,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*d-t*l*d)*E,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*m+t*l*m)*E,e[8]=y*E,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*d-t*u*d)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*d+t*a*d)*E,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*E,e[12]=A*E,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*p+t*u*p)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,g=s*u,_=o*h,p=o*u,d=a*u,M=l*c,x=l*h,y=l*u,A=n.x,C=n.y,E=n.z;return i[0]=(1-(_+d))*A,i[1]=(m+y)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(m-y)*C,i[5]=(1-(f+d))*C,i[6]=(p+M)*C,i[7]=0,i[8]=(g+x)*E,i[9]=(p-M)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hi.set(i[0],i[1],i[2]).length();const o=Hi.set(i[4],i[5],i[6]).length(),a=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const c=1/s,h=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=kn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(a===kn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===qs)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=kn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),f=(t+e)*c,m=(n+i)*h;let g,_;if(a===kn)g=(o+s)*u,_=-2*u;else if(a===qs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new I,Mn=new ot,Tp=new I(0,0,0),Ep=new I(1,1,1),Jn=new I,fs=new I,en=new I,oc=new ot,lc=new Qr;class na{constructor(e=0,t=0,n=0,i=na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bp=0;const cc=new I,Wi=new Qr,Fn=new ot,ds=new I,Cr=new I,wp=new I,Ap=new Qr,hc=new I(1,0,0),uc=new I(0,1,0),fc=new I(0,0,1),Rp={type:"added"},Cp={type:"removed"};class Rt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new na,n=new Qr,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new He}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Cr,ds,this.up):Fn.lookAt(ds,Cr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,On=new I,La=new I,Bn=new I,Xi=new I,qi=new I,dc=new I,Da=new I,Ua=new I,Ia=new I;let ps=!1;class yn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Sn.subVectors(i,t),On.subVectors(n,t),La.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(On),l=Sn.dot(La),c=On.dot(On),h=On.dot(La),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,i,s,o,a,l){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),On.subVectors(e,t),Sn.cross(On).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Sn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ps=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Xi.subVectors(i,n),qi.subVectors(s,n),Da.subVectors(e,n);const l=Xi.dot(Da),c=qi.dot(Da);if(l<=0&&c<=0)return t.copy(n);Ua.subVectors(e,i);const h=Xi.dot(Ua),u=qi.dot(Ua);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Xi,o);Ia.subVectors(e,s);const m=Xi.dot(Ia),g=qi.dot(Ia);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return dc.subVectors(s,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(dc,a);const d=1/(p+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Na(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=ko(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Na(o,s,e+1/3),this.g=Na(o,s,e),this.b=Na(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ke.fromWorkingColorSpace(Dt.copy(this),e),Math.round(kt(Dt.r*255,0,255))*65536+Math.round(kt(Dt.g*255,0,255))*256+Math.round(kt(Dt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=wt){Ke.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(ms);const n=Br(Qn.h,ms.h,t),i=Br(Qn.s,ms.s,t),s=Br(Qn.l,ms.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ue;Ue.NAMES=du;let Pp=0;class Tr extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=dn,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dn&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zt extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,_s=new De;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ql,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class pu extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mu extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lp=0;const un=new ot,Fa=new Rt,Yi=new I,tn=new es,Pr=new es,Tt=new I;class vn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?mu:pu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(tn.min,Pr.min),tn.expandByPoint(Tt),Tt.addVectors(tn.max,Pr.max),tn.expandByPoint(Tt)):(tn.expandByPoint(Pr.min),tn.expandByPoint(Pr.max))}tn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Tt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),Tt.add(Yi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new I,h[T]=new I;const u=new I,f=new I,m=new I,g=new De,_=new De,p=new De,d=new I,M=new I;function x(T,V,G){u.fromArray(i,T*3),f.fromArray(i,V*3),m.fromArray(i,G*3),g.fromArray(o,T*2),_.fromArray(o,V*2),p.fromArray(o,G*2),f.sub(u),m.sub(u),_.sub(g),p.sub(g);const $=1/(_.x*p.y-p.x*_.y);isFinite($)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar($),M.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar($),c[T].add(d),c[V].add(d),c[G].add(d),h[T].add(M),h[V].add(M),h[G].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,V=y.length;T<V;++T){const G=y[T],$=G.start,L=G.count;for(let F=$,z=$+L;F<z;F+=3)x(n[F+0],n[F+1],n[F+2])}const A=new I,C=new I,E=new I,U=new I;function v(T){E.fromArray(s,T*3),U.copy(E);const V=c[T];A.copy(V),A.sub(E.multiplyScalar(E.dot(V))).normalize(),C.crossVectors(U,V);const $=C.dot(h[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=$}for(let T=0,V=y.length;T<V;++T){const G=y[T],$=G.start,L=G.count;for(let F=$,z=$+L;F<z;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Ln(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new ot,Si=new uu,gs=new ta,mc=new I,ji=new I,Ki=new I,Zi=new I,Oa=new I,vs=new I,xs=new De,Ms=new De,Ss=new De,_c=new I,gc=new I,vc=new I,ys=new I,Ts=new I;class nt extends Rt{constructor(e=new vn,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Oa.fromBufferAttribute(u,e),o?vs.addScaledVector(Oa,h):vs.addScaledVector(Oa.sub(t),h))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(gs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(gs,mc)===null||Si.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(s).invert(),Si.copy(e.ray).applyMatrix4(pc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,A=x;y<A;y+=3){const C=a.getX(y),E=a.getX(y+1),U=a.getX(y+2);i=Es(this,d,e,n,c,h,u,C,E,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Es(this,o,e,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,A=x;y<A;y+=3){const C=y,E=y+1,U=y+2;i=Es(this,d,e,n,c,h,u,C,E,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const M=p,x=p+1,y=p+2;i=Es(this,o,e,n,c,h,u,M,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Dp(r,e,t,n,i,s,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Yn,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:r}}function Es(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ji),r.getVertexPosition(l,Ki),r.getVertexPosition(c,Zi);const h=Dp(r,e,t,n,ji,Ki,Zi,ys);if(h){i&&(xs.fromBufferAttribute(i,a),Ms.fromBufferAttribute(i,l),Ss.fromBufferAttribute(i,c),h.uv=yn.getInterpolation(ys,ji,Ki,Zi,xs,Ms,Ss,new De)),s&&(xs.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,l),Ss.fromBufferAttribute(s,c),h.uv1=yn.getInterpolation(ys,ji,Ki,Zi,xs,Ms,Ss,new De),h.uv2=h.uv1),o&&(_c.fromBufferAttribute(o,a),gc.fromBufferAttribute(o,l),vc.fromBufferAttribute(o,c),h.normal=yn.getInterpolation(ys,ji,Ki,Zi,_c,gc,vc,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};yn.getNormal(ji,Ki,Zi,u.normal),h.face=u}return h}class ts extends vn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(_,p,d,M,x,y,A,C,E,U,v){const T=y/E,V=A/U,G=y/2,$=A/2,L=C/2,F=E+1,z=U+1;let K=0,j=0;const Z=new I;for(let P=0;P<z;P++){const R=P*V-$;for(let H=0;H<F;H++){const N=H*T-G;Z[_]=N*M,Z[p]=R*x,Z[d]=L,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[d]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(H/E),u.push(1-P/U),K+=1}}for(let P=0;P<U;P++)for(let R=0;R<E;R++){const H=f+R+F*P,N=f+R+F*(P+1),k=f+(R+1)+F*(P+1),J=f+(R+1)+F*P;l.push(H,N,J),l.push(N,k,J),j+=6}a.addGroup(m,j,v),m+=j,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const n=vr(r[t]);for(const i in n)e[i]=n[i]}return e}function Up(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _u(r){return r.getRenderTarget()===null?r.outputColorSpace:Ke.workingColorSpace}const xr={clone:vr,merge:Bt};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends gu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Ji=1;class Fp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt($i,Ji,e,t);i.layers=this.layers,this.add(i);const s=new Xt($i,Ji,e,t);s.layers=this.layers,this.add(s);const o=new Xt($i,Ji,e,t);o.layers=this.layers,this.add(o);const a=new Xt($i,Ji,e,t);a.layers=this.layers,this.add(a);const l=new Xt($i,Ji,e,t);l.layers=this.layers,this.add(l);const c=new Xt($i,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vu extends Wt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Op extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ni?wt:pn),this.texture=new vu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ts(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Hn});s.uniforms.tEquirect.value=t;const o=new nt(i,s),a=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Et),new Fp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ba=new I,Bp=new I,zp=new He;class ei{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ba.subVectors(n,t).cross(Bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zp.getNormalMatrix(e),i=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ta,bs=new I;class Ho{constructor(e=new ei,t=new ei,n=new ei,i=new ei,s=new ei,o=new ei){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],M=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,p-m,y-d).normalize(),n[1].setComponents(l+s,f+c,p+m,y+d).normalize(),n[2].setComponents(l+o,f+h,p+g,y+M).normalize(),n[3].setComponents(l-o,f-h,p-g,y-M).normalize(),n[4].setComponents(l-a,f-u,p-_,y-x).normalize(),t===kn)n[5].setComponents(l+a,f+u,p+_,y+x).normalize();else if(t===qs)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),m.count===-1&&g.length===0&&r.bufferSubData(u,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const d=g[_];t?r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class An extends vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const M=d*f-o;for(let x=0;x<c;x++){const y=x*u-s;g.push(y,-M,0),_.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const x=M+c*d,y=M+c*(d+1),A=M+1+c*(d+1),C=M+1+c*d;m.push(x,y,C),m.push(y,A,C)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hm=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fm=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Im=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Vm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U_=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j_=`#define DISTANCE
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
}`,K_=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rg=`#define MATCAP
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
}`,sg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ag=`#define NORMAL
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
}`,og=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fg=`#define TOON
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
}`,dg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,gg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Be={alphahash_fragment:Vp,alphahash_pars_fragment:kp,alphamap_fragment:Hp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:jp,batching_pars_vertex:Kp,batching_vertex:Zp,begin_vertex:$p,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:um,defaultnormal_vertex:fm,displacementmap_pars_vertex:dm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:_m,colorspace_fragment:gm,colorspace_pars_fragment:vm,envmap_fragment:xm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Im,envmap_vertex:Tm,fog_vertex:Em,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Um,lights_toon_fragment:Nm,lights_toon_pars_fragment:Fm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:km,lights_fragment_end:Hm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:Ym,map_fragment:jm,map_pars_fragment:Km,map_particle_fragment:Zm,map_particle_pars_fragment:$m,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:a_,normal_pars_vertex:o_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:__,project_vertex:g_,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:y_,shadowmap_pars_vertex:T_,shadowmap_vertex:E_,shadowmask_pars_fragment:b_,skinbase_vertex:w_,skinning_pars_vertex:A_,skinning_vertex:R_,skinnormal_vertex:C_,specularmap_fragment:P_,specularmap_pars_fragment:L_,tonemapping_fragment:D_,tonemapping_pars_fragment:U_,transmission_fragment:I_,transmission_pars_fragment:N_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:z_,background_vert:G_,background_frag:V_,backgroundCube_vert:k_,backgroundCube_frag:H_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:j_,distanceRGBA_frag:K_,equirect_vert:Z_,equirect_frag:$_,linedashed_vert:J_,linedashed_frag:Q_,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:rg,meshmatcap_frag:sg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:_g,shadow_frag:gg,sprite_vert:vg,sprite_frag:xg},ae={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Rn={basic:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Bt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Bt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Bt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Bt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Bt([ae.lights,ae.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Rn.physical={uniforms:Bt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ws={r:0,b:0,g:0};function Mg(r,e,t,n,i,s,o){const a=new Ue(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qs)?(h===void 0&&(h=new nt(new ts(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:vr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==st,(u!==x||f!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nt(new An(2,2),new Yt({name:"BackgroundMaterial",uniforms:vr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(ws,_u(r)),n.buffers.color.setClear(ws.r,ws.g,ws.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Sg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(L,F,z,K,j){let Z=!1;if(o){const P=_(K,z,F);c!==P&&(c=P,m(c.object)),Z=d(L,K,z,j),Z&&M(L,K,z,j)}else{const P=F.wireframe===!0;(c.geometry!==K.id||c.program!==z.id||c.wireframe!==P)&&(c.geometry=K.id,c.program=z.id,c.wireframe=P,Z=!0)}j!==null&&t.update(j,r.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,U(L,F,z,K),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,z){const K=z.wireframe===!0;let j=a[L.id];j===void 0&&(j={},a[L.id]=j);let Z=j[F.id];Z===void 0&&(Z={},j[F.id]=Z);let P=Z[K];return P===void 0&&(P=p(f()),Z[K]=P),P}function p(L){const F=[],z=[],K=[];for(let j=0;j<i;j++)F[j]=0,z[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,F,z,K){const j=c.attributes,Z=F.attributes;let P=0;const R=z.getAttributes();for(const H in R)if(R[H].location>=0){const k=j[H];let J=Z[H];if(J===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;P++}return c.attributesNum!==P||c.index!==K}function M(L,F,z,K){const j={},Z=F.attributes;let P=0;const R=z.getAttributes();for(const H in R)if(R[H].location>=0){let k=Z[H];k===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(k=L.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),j[H]=J,P++}c.attributes=j,c.attributesNum=P,c.index=K}function x(){const L=c.newAttributes;for(let F=0,z=L.length;F<z;F++)L[F]=0}function y(L){A(L,0)}function A(L,F){const z=c.newAttributes,K=c.enabledAttributes,j=c.attributeDivisors;z[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),j[L]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),j[L]=F)}function C(){const L=c.newAttributes,F=c.enabledAttributes;for(let z=0,K=F.length;z<K;z++)F[z]!==L[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function E(L,F,z,K,j,Z,P){P===!0?r.vertexAttribIPointer(L,F,z,j,Z):r.vertexAttribPointer(L,F,z,K,j,Z)}function U(L,F,z,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=K.attributes,Z=z.getAttributes(),P=F.defaultAttributeValues;for(const R in Z){const H=Z[R];if(H.location>=0){let N=j[R];if(N===void 0&&(R==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),R==="instanceColor"&&L.instanceColor&&(N=L.instanceColor)),N!==void 0){const k=N.normalized,J=N.itemSize,re=t.get(N);if(re===void 0)continue;const Q=re.buffer,le=re.type,pe=re.bytesPerElement,fe=n.isWebGL2===!0&&(le===r.INT||le===r.UNSIGNED_INT||N.gpuType===$h);if(N.isInterleavedBufferAttribute){const xe=N.data,O=xe.stride,qe=N.offset;if(xe.isInstancedInterleavedBuffer){for(let se=0;se<H.locationSize;se++)A(H.location+se,xe.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let se=0;se<H.locationSize;se++)y(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let se=0;se<H.locationSize;se++)E(H.location+se,J/H.locationSize,le,k,O*pe,(qe+J/H.locationSize*se)*pe,fe)}else{if(N.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)A(H.location+xe,N.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let xe=0;xe<H.locationSize;xe++)E(H.location+xe,J/H.locationSize,le,k,J*pe,J/H.locationSize*xe*pe,fe)}}else if(P!==void 0){const k=P[R];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(H.location,k);break;case 3:r.vertexAttrib3fv(H.location,k);break;case 4:r.vertexAttrib4fv(H.location,k);break;default:r.vertexAttrib1fv(H.location,k)}}}}C()}function v(){G();for(const L in a){const F=a[L];for(const z in F){const K=F[z];for(const j in K)g(K[j].object),delete K[j];delete F[z]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const z in F){const K=F[z];for(const j in K)g(K[j].object),delete K[j];delete F[z]}delete a[L.id]}function V(L){for(const F in a){const z=a[F];if(z[L.id]===void 0)continue;const K=z[L.id];for(const j in K)g(K[j].object),delete K[j];delete z[L.id]}}function G(){$(),h=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:$,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:y,disableUnusedAttributes:C}}function yg(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,f){if(f===0)return;let m,g;if(i)m=r,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,u,f),t.update(u,s,f)}function c(h,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Tg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),A=x&&y,C=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:C}}function Eg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ei,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const M=s?0:n,x=M*4;let y=d.clippingState||null;l.value=y,y=h(g,f,x,m);for(let A=0;A!==x;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,y=m;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function bg(r){let e=new WeakMap;function t(o,a){return a===fo?o.mapping=mr:a===po&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fo||a===po)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Op(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wo extends gu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,xc=[.125,.215,.35,.446,.526,.582],wi=20,za=new Wo,Mc=new Ue;let Ga=null,Va=0,ka=0;const Ei=(1+Math.sqrt(5))/2,Qi=1/Ei,Sc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ei,Qi),new I(0,Ei,-Qi),new I(Qi,0,Ei),new I(-Qi,0,Ei),new I(Ei,Qi,0),new I(-Ei,Qi,0)];class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,ka),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Wn,format:En,colorSpace:jn,depthBuffer:!1},i=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(s)),this._blurMaterial=Ag(s,e,t)}return i}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i){const a=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mc),h.toneMapping=ci,h.autoClear=!1;const m=new zt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new nt(new ts,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Mc),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;As(i,M*x,d>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mr||e.mapping===_r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Sc[(i-1)%Sc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const d=[];let M=0;for(let E=0;E<wi;++E){const U=E/_,v=Math.exp(-U*U/2);d.push(v),E===0?M+=v:E<p&&(M+=2*v)}for(let E=0;E<d.length;E++)d[E]=d[E]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],A=3*y*(i>x-rr?i-x+rr:0),C=4*(this._cubeSize-y);As(t,A,C,3*y,2*y),l.setRenderTarget(t),l.render(u,za)}}function wg(r){const e=[],t=[],n=[];let i=r;const s=r-rr+1+xc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-rr?l=xc[o-r+rr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),x=new Float32Array(p*g*m),y=new Float32Array(d*g*m);for(let C=0;C<m;C++){const E=C%3*2/3-1,U=C>2?0:-1,v=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];M.set(v,_*g*C),x.set(f,p*g*C);const T=[C,C,C,C,C,C];y.set(T,d*g*C)}const A=new vn;A.setAttribute("position",new Ln(M,_)),A.setAttribute("uv",new Ln(x,p)),A.setAttribute("faceIndex",new Ln(y,d)),e.push(A),i>rr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tc(r,e,t){const n=new gn(r,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ag(r,e,t){const n=new Float32Array(wi),i=new I(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ec(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function bc(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function Rg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fo||l===po,h=l===mr||l===_r;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new yc(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new yc(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pg(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,y=M.length;x<y;x+=3){const A=M[x+0],C=M[x+1],E=M[x+2];f.push(A,C,C,E,E,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const A=x+0,C=x+1,E=x+2;f.push(A,C,C,E,E,A)}}else return;const p=new(ou(f)?mu:pu)(f,1);p.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Lg(r,e,t,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){r.drawElements(s,g,a,m*l),t.update(g,s,1)}function u(m,g,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,g,a,m*l,_),t.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let d=0;for(let M=0;M<_;M++)d+=g[M];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Dg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ug(r,e){return r[0]-e[0]}function Ig(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ng(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let F=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),A===!0&&(v=3);let T=h.attributes.position.count*v,V=1;T>e.maxTextureSize&&(V=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*V*4*_),$=new hu(G,T,V,_);$.type=si,$.needsUpdate=!0;const L=v*4;for(let z=0;z<_;z++){const K=C[z],j=E[z],Z=U[z],P=T*V*4*z;for(let R=0;R<K.count;R++){const H=R*L;x===!0&&(o.fromBufferAttribute(K,R),G[P+H+0]=o.x,G[P+H+1]=o.y,G[P+H+2]=o.z,G[P+H+3]=0),y===!0&&(o.fromBufferAttribute(j,R),G[P+H+4]=o.x,G[P+H+5]=o.y,G[P+H+6]=o.z,G[P+H+7]=0),A===!0&&(o.fromBufferAttribute(Z,R),G[P+H+8]=o.x,G[P+H+9]=o.y,G[P+H+10]=o.z,G[P+H+11]=Z.itemSize===4?o.w:1)}}p={count:_,texture:$,size:new De(T,V)},s.set(h,p),h.addEventListener("dispose",F)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",M),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const A=_[y];A[0]=y,A[1]=f[y]}_.sort(Ig);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Ug);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const A=a[y],C=A[0],E=A[1];C!==Number.MAX_SAFE_INTEGER&&E?(p&&h.getAttribute("morphTarget"+y)!==p[C]&&h.setAttribute("morphTarget"+y,p[C]),d&&h.getAttribute("morphNormal"+y)!==d[C]&&h.setAttribute("morphNormal"+y,d[C]),i[y]=E,M+=E):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Fg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Mu extends Wt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Ii,h!==Ii&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ri),n===void 0&&h===gr&&(n=Ui),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Su=new Wt,yu=new Mu(1,1);yu.compareFunction=au;const Tu=new hu,Eu=new Sp,bu=new vu,wc=[],Ac=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function Er(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wc[i];if(s===void 0&&(s=new Float32Array(i),wc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ia(r,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Og(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function Gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Pc.set(n),r.uniformMatrix2fv(this.addr,!1,Pc),Mt(t,n)}}function kg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Cc.set(n),r.uniformMatrix3fv(this.addr,!1,Cc),Mt(t,n)}}function Hg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Rc.set(n),r.uniformMatrix4fv(this.addr,!1,Rc),Mt(t,n)}}function Wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function jg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function Jg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?yu:Su;t.setTexture2D(e||s,i)}function Qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}function e0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bu,i)}function t0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tu,i)}function n0(r){switch(r){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Gg;case 35674:return Vg;case 35675:return kg;case 35676:return Hg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return jg;case 36294:return Kg;case 36295:return Zg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(r,e){r.uniform1fv(this.addr,e)}function r0(r,e){const t=Er(e,this.size,2);r.uniform2fv(this.addr,t)}function s0(r,e){const t=Er(e,this.size,3);r.uniform3fv(this.addr,t)}function a0(r,e){const t=Er(e,this.size,4);r.uniform4fv(this.addr,t)}function o0(r,e){const t=Er(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function l0(r,e){const t=Er(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function c0(r,e){const t=Er(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function h0(r,e){r.uniform1iv(this.addr,e)}function u0(r,e){r.uniform2iv(this.addr,e)}function f0(r,e){r.uniform3iv(this.addr,e)}function d0(r,e){r.uniform4iv(this.addr,e)}function p0(r,e){r.uniform1uiv(this.addr,e)}function m0(r,e){r.uniform2uiv(this.addr,e)}function _0(r,e){r.uniform3uiv(this.addr,e)}function g0(r,e){r.uniform4uiv(this.addr,e)}function v0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Su,s[o])}function x0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eu,s[o])}function M0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||bu,s[o])}function S0(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tu,s[o])}function y0(r){switch(r){case 5126:return i0;case 35664:return r0;case 35665:return s0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return _0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=n0(t.type)}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y0(t.type)}}class b0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Lc(r,e){r.seq.push(e),r.map[e.id]=e}function w0(r,e,t){const n=r.name,i=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),o=Ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lc(t,c===void 0?new T0(a,r,e):new E0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new b0(a),Lc(t,u)),t=u}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);w0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Dc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const A0=37297;let R0=0;function C0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function P0(r){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(r);let n;switch(e===t?n="":e===Xs&&t===Ws?n="LinearDisplayP3ToLinearSRGB":e===Ws&&t===Xs&&(n="LinearSRGBToLinearDisplayP3"),r){case jn:case ea:return[n,"LinearTransferOETF"];case wt:case Vo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Uc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+C0(r.getShaderSource(e),o)}else return i}function L0(r,e){const t=P0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D0(r,e){let t;switch(e){case Dd:t="Linear";break;case Ud:t="Reinhard";break;case Id:t="OptimizedCineon";break;case Kh:t="ACESFilmic";break;case Fd:t="AgX";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function U0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function I0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sr).join(`
`)}function N0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function sr(r){return r!==""}function Ic(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(r){return r.replace(O0,z0)}const B0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function z0(r,e){let t=Be[e];if(t===void 0){const n=B0.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(r){return r.replace(G0,V0)}function V0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function H0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mr:case _r:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function q0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=k0(t),c=H0(t),h=W0(t),u=X0(t),f=q0(t),m=t.isWebGL2?"":U0(t),g=I0(t),_=N0(s),p=i.createProgram();let d,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sr).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(sr).join(`
`),M.length>0&&(M+=`
`)):(d=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),M=[m,Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Be.tonemapping_pars_fragment:"",t.toneMapping!==ci?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=vo(o),o=Ic(o,t),o=Nc(o,t),a=vo(a),a=Ic(a,t),a=Nc(a,t),o=Fc(o),a=Fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=x+d+o,A=x+M+a,C=Dc(i,i.VERTEX_SHADER,y),E=Dc(i,i.FRAGMENT_SHADER,A);i.attachShader(p,C),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function U(G){if(r.debug.checkShaderErrors){const $=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(C).trim(),F=i.getShaderInfoLog(E).trim();let z=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,C,E);else{const j=Uc(i,C,"vertex"),Z=Uc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+j+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||F==="")&&(K=!1);K&&(G.diagnostics={runnable:z,programLog:$,vertexShader:{log:L,prefix:d},fragmentShader:{log:F,prefix:M}})}i.deleteShader(C),i.deleteShader(E),v=new Us(i,p),T=F0(i,p)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(p,A0)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=E,this}let j0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z0(e),t.set(e,n)),n}}class Z0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function $0(r,e,t,n,i,s,o){const a=new fu,l=new K0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,T,V,G,$){const L=G.fog,F=$.geometry,z=v.isMeshStandardMaterial?G.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),j=K&&K.mapping===Qs?K.image.height:null,Z=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const P=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,R=P!==void 0?P.length:0;let H=0;F.morphAttributes.position!==void 0&&(H=1),F.morphAttributes.normal!==void 0&&(H=2),F.morphAttributes.color!==void 0&&(H=3);let N,k,J,re;if(Z){const Nt=Rn[Z];N=Nt.vertexShader,k=Nt.fragmentShader}else N=v.vertexShader,k=v.fragmentShader,l.update(v),J=l.getVertexShaderID(v),re=l.getFragmentShaderID(v);const Q=r.getRenderTarget(),le=$.isInstancedMesh===!0,pe=$.isBatchedMesh===!0,fe=!!v.map,xe=!!v.matcap,O=!!K,qe=!!v.aoMap,se=!!v.lightMap,Me=!!v.bumpMap,de=!!v.normalMap,We=!!v.displacementMap,be=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,W=v.anisotropy>0,ne=v.clearcoat>0,te=v.iridescence>0,ie=v.sheen>0,Se=v.transmission>0,ce=W&&!!v.anisotropyMap,_e=ne&&!!v.clearcoatMap,we=ne&&!!v.clearcoatNormalMap,Ie=ne&&!!v.clearcoatRoughnessMap,ee=te&&!!v.iridescenceMap,Ye=te&&!!v.iridescenceThicknessMap,ze=ie&&!!v.sheenColorMap,Pe=ie&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,ge=!!v.specularColorMap,Oe=!!v.specularIntensityMap,je=Se&&!!v.transmissionMap,ft=Se&&!!v.thicknessMap,Ve=!!v.gradientMap,oe=!!v.alphaMap,D=v.alphaTest>0,he=!!v.alphaHash,ue=!!v.extensions,Ce=!!F.attributes.uv1,Ae=!!F.attributes.uv2,Qe=!!F.attributes.uv3;let et=ci;return v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(et=r.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:N,fragmentShader:k,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:pe,instancing:le,instancingColor:le&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:jn,map:fe,matcap:xe,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:j,aoMap:qe,lightMap:se,bumpMap:Me,normalMap:de,displacementMap:f&&We,emissiveMap:be,normalMapObjectSpace:de&&v.normalMapType===jd,normalMapTangentSpace:de&&v.normalMapType===su,metalnessMap:w,roughnessMap:S,anisotropy:W,anisotropyMap:ce,clearcoat:ne,clearcoatMap:_e,clearcoatNormalMap:we,clearcoatRoughnessMap:Ie,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Ye,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Pe,specularMap:Ee,specularColorMap:ge,specularIntensityMap:Oe,transmission:Se,transmissionMap:je,thicknessMap:ft,gradientMap:Ve,opaque:v.transparent===!1&&v.blending===dn,alphaMap:oe,alphaTest:D,alphaHash:he,combine:v.combine,mapUv:fe&&_(v.map.channel),aoMapUv:qe&&_(v.aoMap.channel),lightMapUv:se&&_(v.lightMap.channel),bumpMapUv:Me&&_(v.bumpMap.channel),normalMapUv:de&&_(v.normalMap.channel),displacementMapUv:We&&_(v.displacementMap.channel),emissiveMapUv:be&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:ce&&_(v.anisotropyMap.channel),clearcoatMapUv:_e&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(v.sheenRoughnessMap.channel),specularMapUv:Ee&&_(v.specularMap.channel),specularColorMapUv:ge&&_(v.specularColorMap.channel),specularIntensityMapUv:Oe&&_(v.specularIntensityMap.channel),transmissionMapUv:je&&_(v.transmissionMap.channel),thicknessMapUv:ft&&_(v.thicknessMap.channel),alphaMapUv:oe&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(de||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ae,vertexUv3s:Qe,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(fe||oe),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:et,useLegacyLights:r._useLegacyLights,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ue&&v.extensions.derivatives===!0,extensionFragDepth:ue&&v.extensions.fragDepth===!0,extensionDrawBuffers:ue&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)T.push(V),T.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(M(T,v),x(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function M(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function y(v){const T=g[v.type];let V;if(T){const G=Rn[T];V=xr.clone(G.uniforms)}else V=v.uniforms;return V}function A(v,T){let V;for(let G=0,$=c.length;G<$;G++){const L=c[G];if(L.cacheKey===T){V=L,++V.usedTimes;break}}return V===void 0&&(V=new Y0(r,T,v,s),c.push(V)),V}function C(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:U}}function J0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,g,_,p){let d=r[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Q0),n.length>1&&n.sort(f||Bc),i.length>1&&i.sort(f||Bc)}function h(){for(let u=e,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function ev(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new zc,r.set(n,[o])):i>=s.length?(o=new zc,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function tv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function nv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iv=0;function rv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sv(r,e){const t=new tv,n=nv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const s=new I,o=new ot,a=new ot;function l(h,u){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,p=0,d=0,M=0,x=0,y=0,A=0,C=0,E=0,U=0,v=0;h.sort(rv);const T=u===!0?Math.PI:1;for(let G=0,$=h.length;G<$;G++){const L=h[G],F=L.color,z=L.intensity,K=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*z*T,m+=F.g*z*T,g+=F.b*z*T;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],z);v++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const P=L.shadow,R=n.get(L);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=j,i.directionalShadowMatrix[_]=L.shadow.matrix,y++}i.directional[_]=Z,_++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(F).multiplyScalar(z*T),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[d]=Z;const P=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,P.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[d]=P.matrix,L.castShadow){const R=n.get(L);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.spotShadow[d]=R,i.spotShadowMap[d]=j,C++}d++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(F).multiplyScalar(z),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=Z,M++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*T),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const P=L.shadow,R=n.get(L);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,R.shadowCameraNear=P.camera.near,R.shadowCameraFar=P.camera.far,i.pointShadow[p]=R,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=L.shadow.matrix,A++}i.point[p]=Z,p++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(z*T),Z.groundColor.copy(L.groundColor).multiplyScalar(z*T),i.hemi[x]=Z,x++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const V=i.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==d||V.rectAreaLength!==M||V.hemiLength!==x||V.numDirectionalShadows!==y||V.numPointShadows!==A||V.numSpotShadows!==C||V.numSpotMaps!==E||V.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=C+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=v,V.directionalLength=_,V.pointLength=p,V.spotLength=d,V.rectAreaLength=M,V.hemiLength=x,V.numDirectionalShadows=y,V.numPointShadows=A,V.numSpotShadows=C,V.numSpotMaps=E,V.numLightProbes=v,i.version=iv++)}function c(h,u){let f=0,m=0,g=0,_=0,p=0;const d=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){const y=h[M];if(y.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),f++}else if(y.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function Gc(r,e){const t=new sv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function av(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Gc(r,e),t.set(s,[l])):o>=a.length?(l=new Gc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ov extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lv extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function uv(r,e,t){let n=new Ho;const i=new De,s=new De,o=new rt,a=new ov({depthPacking:Yd}),l=new lv,c={},h=t.maxTextureSize,u={[Yn]:Ht,[Ht]:Yn,[Vt]:Vt},f=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yh;let d=this.type;this.render=function(C,E,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const v=r.getRenderTarget(),T=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Hn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=d!==zn&&this.type===zn,L=d===zn&&this.type!==zn;for(let F=0,z=C.length;F<z;F++){const K=C[F],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const Z=j.getFrameExtents();if(i.multiply(Z),s.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,j.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,j.mapSize.y=s.y)),j.map===null||$===!0||L===!0){const R=this.type!==zn?{minFilter:Gt,magFilter:Gt}:{};j.map!==null&&j.map.dispose(),j.map=new gn(i.x,i.y,R),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const P=j.getViewportCount();for(let R=0;R<P;R++){const H=j.getViewport(R);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),G.viewport(o),j.updateMatrices(K,R),n=j.getFrustum(),y(E,U,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===zn&&M(j,U),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(v,T,V)};function M(C,E){const U=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gn(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(E,null,U,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(E,null,U,m,_,null)}function x(C,E,U,v){let T=null;const V=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(V!==void 0)T=V;else if(T=U.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=T.uuid,$=E.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let F=L[$];F===void 0&&(F=T.clone(),L[$]=F,E.addEventListener("dispose",A)),T=F}if(T.visible=E.visible,T.wireframe=E.wireframe,v===zn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=r.properties.get(T);G.light=U}return T}function y(C,E,U,v,T){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const $=e.update(C),L=C.material;if(Array.isArray(L)){const F=$.groups;for(let z=0,K=F.length;z<K;z++){const j=F[z],Z=L[j.materialIndex];if(Z&&Z.visible){const P=x(C,Z,v,T);C.onBeforeShadow(r,C,E,U,$,P,j),r.renderBufferDirect(U,null,$,P,C,j),C.onAfterShadow(r,C,E,U,$,P,j)}}}else if(L.visible){const F=x(C,L,v,T);C.onBeforeShadow(r,C,E,U,$,F,null),r.renderBufferDirect(U,null,$,F,C,null),C.onAfterShadow(r,C,E,U,$,F,null)}}const G=C.children;for(let $=0,L=G.length;$<L;$++)y(G[$],E,U,v,T)}function A(C){C.target.removeEventListener("dispose",A);for(const U in c){const v=c[U],T=C.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function fv(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const he=new rt;let ue=null;const Ce=new rt(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!D&&(r.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,Qe,et,St,Nt){Nt===!0&&(Ae*=St,Qe*=St,et*=St),he.set(Ae,Qe,et,St),Ce.equals(he)===!1&&(r.clearColor(Ae,Qe,et,St),Ce.copy(he))},reset:function(){D=!1,ue=null,Ce.set(-1,0,0,0)}}}function s(){let D=!1,he=null,ue=null,Ce=null;return{setTest:function(Ae){Ae?pe(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(Ae){he!==Ae&&!D&&(r.depthMask(Ae),he=Ae)},setFunc:function(Ae){if(ue!==Ae){switch(Ae){case Td:r.depthFunc(r.NEVER);break;case Ed:r.depthFunc(r.ALWAYS);break;case bd:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case wd:r.depthFunc(r.EQUAL);break;case Ad:r.depthFunc(r.GEQUAL);break;case Rd:r.depthFunc(r.GREATER);break;case Cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){Ce!==Ae&&(r.clearDepth(Ae),Ce=Ae)},reset:function(){D=!1,he=null,ue=null,Ce=null}}}function o(){let D=!1,he=null,ue=null,Ce=null,Ae=null,Qe=null,et=null,St=null,Nt=null;return{setTest:function(tt){D||(tt?pe(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(tt){he!==tt&&!D&&(r.stencilMask(tt),he=tt)},setFunc:function(tt,Ft,bn){(ue!==tt||Ce!==Ft||Ae!==bn)&&(r.stencilFunc(tt,Ft,bn),ue=tt,Ce=Ft,Ae=bn)},setOp:function(tt,Ft,bn){(Qe!==tt||et!==Ft||St!==bn)&&(r.stencilOp(tt,Ft,bn),Qe=tt,et=Ft,St=bn)},setLocked:function(tt){D=tt},setClear:function(tt){Nt!==tt&&(r.clearStencil(tt),Nt=tt)},reset:function(){D=!1,he=null,ue=null,Ce=null,Ae=null,Qe=null,et=null,St=null,Nt=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,M=null,x=null,y=null,A=null,C=null,E=null,U=null,v=new Ue(0,0,0),T=0,V=!1,G=null,$=null,L=null,F=null,z=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Z=0;const P=r.getParameter(r.VERSION);P.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(P)[1]),j=Z>=1):P.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),j=Z>=2);let R=null,H={};const N=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),J=new rt().fromArray(N),re=new rt().fromArray(k);function Q(D,he,ue,Ce){const Ae=new Uint8Array(4),Qe=r.createTexture();r.bindTexture(D,Qe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<ue;et++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(he,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(he+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Qe}const le={};le[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(r.DEPTH_TEST),l.setFunc(Vs),be(!1),w(Sl),pe(r.CULL_FACE),de(Hn);function pe(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function fe(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function xe(D,he){return m[D]!==he?(r.bindFramebuffer(D,he),m[D]=he,n&&(D===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=he),D===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=he)),!0):!1}function O(D,he){let ue=_,Ce=!1;if(D)if(ue=g.get(he),ue===void 0&&(ue=[],g.set(he,ue)),D.isWebGLMultipleRenderTargets){const Ae=D.texture;if(ue.length!==Ae.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Qe=0,et=Ae.length;Qe<et;Qe++)ue[Qe]=r.COLOR_ATTACHMENT0+Qe;ue.length=Ae.length,Ce=!0}}else ue[0]!==r.COLOR_ATTACHMENT0&&(ue[0]=r.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==r.BACK&&(ue[0]=r.BACK,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function qe(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const se={[bi]:r.FUNC_ADD,[ld]:r.FUNC_SUBTRACT,[cd]:r.FUNC_REVERSE_SUBTRACT};if(n)se[El]=r.MIN,se[bl]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(se[El]=D.MIN_EXT,se[bl]=D.MAX_EXT)}const Me={[hd]:r.ZERO,[ud]:r.ONE,[fd]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[vd]:r.SRC_ALPHA_SATURATE,[_d]:r.DST_COLOR,[pd]:r.DST_ALPHA,[dd]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[gd]:r.ONE_MINUS_DST_COLOR,[md]:r.ONE_MINUS_DST_ALPHA,[xd]:r.CONSTANT_COLOR,[Md]:r.ONE_MINUS_CONSTANT_COLOR,[Sd]:r.CONSTANT_ALPHA,[yd]:r.ONE_MINUS_CONSTANT_ALPHA};function de(D,he,ue,Ce,Ae,Qe,et,St,Nt,tt){if(D===Hn){d===!0&&(fe(r.BLEND),d=!1);return}if(d===!1&&(pe(r.BLEND),d=!0),D!==od){if(D!==M||tt!==V){if((x!==bi||C!==bi)&&(r.blendEquation(r.FUNC_ADD),x=bi,C=bi),tt)switch(D){case dn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jr:r.blendFunc(r.ONE,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case dn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case yl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,A=null,E=null,U=null,v.set(0,0,0),T=0,M=D,V=tt}return}Ae=Ae||he,Qe=Qe||ue,et=et||Ce,(he!==x||Ae!==C)&&(r.blendEquationSeparate(se[he],se[Ae]),x=he,C=Ae),(ue!==y||Ce!==A||Qe!==E||et!==U)&&(r.blendFuncSeparate(Me[ue],Me[Ce],Me[Qe],Me[et]),y=ue,A=Ce,E=Qe,U=et),(St.equals(v)===!1||Nt!==T)&&(r.blendColor(St.r,St.g,St.b,Nt),v.copy(St),T=Nt),M=D,V=!1}function We(D,he){D.side===Vt?fe(r.CULL_FACE):pe(r.CULL_FACE);let ue=D.side===Ht;he&&(ue=!ue),be(ue),D.blending===dn&&D.transparent===!1?de(Hn):de(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ce=D.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function be(D){G!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),G=D)}function w(D){D!==rd?(pe(r.CULL_FACE),D!==$&&(D===Sl?r.cullFace(r.BACK):D===sd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),$=D}function S(D){D!==L&&(j&&r.lineWidth(D),L=D)}function W(D,he,ue){D?(pe(r.POLYGON_OFFSET_FILL),(F!==he||z!==ue)&&(r.polygonOffset(he,ue),F=he,z=ue)):fe(r.POLYGON_OFFSET_FILL)}function ne(D){D?pe(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function te(D){D===void 0&&(D=r.TEXTURE0+K-1),R!==D&&(r.activeTexture(D),R=D)}function ie(D,he,ue){ue===void 0&&(R===null?ue=r.TEXTURE0+K-1:ue=R);let Ce=H[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},H[ue]=Ce),(Ce.type!==D||Ce.texture!==he)&&(R!==ue&&(r.activeTexture(ue),R=ue),r.bindTexture(D,he||le[D]),Ce.type=D,Ce.texture=he)}function Se(){const D=H[R];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(D){J.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function je(D){re.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),re.copy(D))}function ft(D,he){let ue=u.get(he);ue===void 0&&(ue=new WeakMap,u.set(he,ue));let Ce=ue.get(D);Ce===void 0&&(Ce=r.getUniformBlockIndex(he,D.name),ue.set(D,Ce))}function Ve(D,he){const Ce=u.get(he).get(D);h.get(he)!==Ce&&(r.uniformBlockBinding(he,Ce,D.__bindingPointIndex),h.set(he,Ce))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},R=null,H={},m={},g=new WeakMap,_=[],p=null,d=!1,M=null,x=null,y=null,A=null,C=null,E=null,U=null,v=new Ue(0,0,0),T=0,V=!1,G=null,$=null,L=null,F=null,z=null,J.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:fe,bindFramebuffer:xe,drawBuffers:O,useProgram:qe,setBlending:de,setMaterial:We,setFlipSided:be,setCullFace:w,setLineWidth:S,setPolygonOffset:W,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:Se,compressedTexImage2D:ce,compressedTexImage3D:_e,texImage2D:Ee,texImage3D:ge,updateUBOMapping:ft,uniformBlockBinding:Ve,texStorage2D:ze,texStorage3D:Pe,texSubImage2D:we,texSubImage3D:Ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ye,scissor:Oe,viewport:je,reset:oe}}function dv(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return m?new OffscreenCanvas(w,S):$r("canvas")}function _(w,S,W,ne){let te=1;if((w.width>ne||w.height>ne)&&(te=ne/Math.max(w.width,w.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ie=S?Ys:Math.floor,Se=ie(te*w.width),ce=ie(te*w.height);u===void 0&&(u=g(Se,ce));const _e=W?g(Se,ce):u;return _e.width=Se,_e.height=ce,_e.getContext("2d").drawImage(w,0,0,Se,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+ce+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return go(w.width)&&go(w.height)}function d(w){return a?!1:w.wrapS!==Tn||w.wrapT!==Tn||w.minFilter!==Gt&&w.minFilter!==Et}function M(w,S){return w.generateMipmaps&&S&&w.minFilter!==Gt&&w.minFilter!==Et}function x(w){r.generateMipmap(w)}function y(w,S,W,ne,te=!1){if(a===!1)return S;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=S;if(S===r.RED&&(W===r.FLOAT&&(ie=r.R32F),W===r.HALF_FLOAT&&(ie=r.R16F),W===r.UNSIGNED_BYTE&&(ie=r.R8)),S===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ie=r.R8UI),W===r.UNSIGNED_SHORT&&(ie=r.R16UI),W===r.UNSIGNED_INT&&(ie=r.R32UI),W===r.BYTE&&(ie=r.R8I),W===r.SHORT&&(ie=r.R16I),W===r.INT&&(ie=r.R32I)),S===r.RG&&(W===r.FLOAT&&(ie=r.RG32F),W===r.HALF_FLOAT&&(ie=r.RG16F),W===r.UNSIGNED_BYTE&&(ie=r.RG8)),S===r.RGBA){const Se=te?Hs:Ke.getTransfer(ne);W===r.FLOAT&&(ie=r.RGBA32F),W===r.HALF_FLOAT&&(ie=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ie=Se===st?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function A(w,S,W){return M(w,W)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Et?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){return w===Gt||w===wl||w===_a?r.NEAREST:r.LINEAR}function E(w){const S=w.target;S.removeEventListener("dispose",E),v(S),S.isVideoTexture&&h.delete(S)}function U(w){const S=w.target;S.removeEventListener("dispose",U),V(S)}function v(w){const S=n.get(w);if(S.__webglInit===void 0)return;const W=w.source,ne=f.get(W);if(ne){const te=ne[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(w),Object.keys(ne).length===0&&f.delete(W)}n.remove(w)}function T(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const W=w.source,ne=f.get(W);delete ne[S.__cacheKey],o.memory.textures--}function V(w){const S=w.texture,W=n.get(w),ne=n.get(S);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(W.__webglFramebuffer[te]))for(let ie=0;ie<W.__webglFramebuffer[te].length;ie++)r.deleteFramebuffer(W.__webglFramebuffer[te][ie]);else r.deleteFramebuffer(W.__webglFramebuffer[te]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[te])}else{if(Array.isArray(W.__webglFramebuffer))for(let te=0;te<W.__webglFramebuffer.length;te++)r.deleteFramebuffer(W.__webglFramebuffer[te]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let te=0,ie=S.length;te<ie;te++){const Se=n.get(S[te]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(S[te])}n.remove(S),n.remove(w)}let G=0;function $(){G=0}function L(){const w=G;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),G+=1,w}function F(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function z(w,S){const W=n.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,w,S);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+S)}function K(w,S){const W=n.get(w);if(w.version>0&&W.__version!==w.version){J(W,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+S)}function j(w,S){const W=n.get(w);if(w.version>0&&W.__version!==w.version){J(W,w,S);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+S)}function Z(w,S){const W=n.get(w);if(w.version>0&&W.__version!==w.version){re(W,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+S)}const P={[ks]:r.REPEAT,[Tn]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},R={[Gt]:r.NEAREST,[wl]:r.NEAREST_MIPMAP_NEAREST,[_a]:r.NEAREST_MIPMAP_LINEAR,[Et]:r.LINEAR,[Od]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},H={[Kd]:r.NEVER,[tp]:r.ALWAYS,[Zd]:r.LESS,[au]:r.LEQUAL,[$d]:r.EQUAL,[ep]:r.GEQUAL,[Jd]:r.GREATER,[Qd]:r.NOTEQUAL};function N(w,S,W){if(W?(r.texParameteri(w,r.TEXTURE_WRAP_S,P[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,P[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,P[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,R[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,R[S.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,C(S.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==Gt&&S.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Gt||S.minFilter!==_a&&S.minFilter!==Kr||S.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Wn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(w,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function k(w,S){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",E));const ne=S.source;let te=f.get(ne);te===void 0&&(te={},f.set(ne,te));const ie=F(S);if(ie!==w.__cacheKey){te[ie]===void 0&&(te[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[ie].usedTimes++;const Se=te[w.__cacheKey];Se!==void 0&&(te[w.__cacheKey].usedTimes--,Se.usedTimes===0&&T(S)),w.__cacheKey=ie,w.__webglTexture=te[ie].texture}return W}function J(w,S,W){let ne=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=r.TEXTURE_3D);const te=k(w,S),ie=S.source;t.bindTexture(ne,w.__webglTexture,r.TEXTURE0+W);const Se=n.get(ie);if(ie.version!==Se.__version||te===!0){t.activeTexture(r.TEXTURE0+W);const ce=Ke.getPrimaries(Ke.workingColorSpace),_e=S.colorSpace===pn?null:Ke.getPrimaries(S.colorSpace),we=S.colorSpace===pn||ce===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ie=d(S)&&p(S.image)===!1;let ee=_(S.image,Ie,!1,i.maxTextureSize);ee=be(S,ee);const Ye=p(ee)||a,ze=s.convert(S.format,S.colorSpace);let Pe=s.convert(S.type),Ee=y(S.internalFormat,ze,Pe,S.colorSpace,S.isVideoTexture);N(ne,S,Ye);let ge;const Oe=S.mipmaps,je=a&&S.isVideoTexture!==!0&&Ee!==iu,ft=Se.__version===void 0||te===!0,Ve=A(S,ee,Ye);if(S.isDepthTexture)Ee=r.DEPTH_COMPONENT,a?S.type===si?Ee=r.DEPTH_COMPONENT32F:S.type===ri?Ee=r.DEPTH_COMPONENT24:S.type===Ui?Ee=r.DEPTH24_STENCIL8:Ee=r.DEPTH_COMPONENT16:S.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ii&&Ee===r.DEPTH_COMPONENT&&S.type!==Go&&S.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ri,Pe=s.convert(S.type)),S.format===gr&&Ee===r.DEPTH_COMPONENT&&(Ee=r.DEPTH_STENCIL,S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ui,Pe=s.convert(S.type))),ft&&(je?t.texStorage2D(r.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ze,Pe,null));else if(S.isDataTexture)if(Oe.length>0&&Ye){je&&ft&&t.texStorage2D(r.TEXTURE_2D,Ve,Ee,Oe[0].width,Oe[0].height);for(let oe=0,D=Oe.length;oe<D;oe++)ge=Oe[oe],je?t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ge.width,ge.height,ze,Pe,ge.data):t.texImage2D(r.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ze,Pe,ge.data);S.generateMipmaps=!1}else je?(ft&&t.texStorage2D(r.TEXTURE_2D,Ve,Ee,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,ze,Pe,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,ee.width,ee.height,0,ze,Pe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ee,Oe[0].width,Oe[0].height,ee.depth);for(let oe=0,D=Oe.length;oe<D;oe++)ge=Oe[oe],S.format!==En?ze!==null?je?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ee.depth,ze,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,ge.width,ge.height,ee.depth,ze,Pe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,Ee,ge.width,ge.height,ee.depth,0,ze,Pe,ge.data)}else{je&&ft&&t.texStorage2D(r.TEXTURE_2D,Ve,Ee,Oe[0].width,Oe[0].height);for(let oe=0,D=Oe.length;oe<D;oe++)ge=Oe[oe],S.format!==En?ze!==null?je?t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,ge.width,ge.height,ze,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ge.width,ge.height,ze,Pe,ge.data):t.texImage2D(r.TEXTURE_2D,oe,Ee,ge.width,ge.height,0,ze,Pe,ge.data)}else if(S.isDataArrayTexture)je?(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ee,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ze,Pe,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,ze,Pe,ee.data);else if(S.isData3DTexture)je?(ft&&t.texStorage3D(r.TEXTURE_3D,Ve,Ee,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ze,Pe,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,ze,Pe,ee.data);else if(S.isFramebufferTexture){if(ft)if(je)t.texStorage2D(r.TEXTURE_2D,Ve,Ee,ee.width,ee.height);else{let oe=ee.width,D=ee.height;for(let he=0;he<Ve;he++)t.texImage2D(r.TEXTURE_2D,he,Ee,oe,D,0,ze,Pe,null),oe>>=1,D>>=1}}else if(Oe.length>0&&Ye){je&&ft&&t.texStorage2D(r.TEXTURE_2D,Ve,Ee,Oe[0].width,Oe[0].height);for(let oe=0,D=Oe.length;oe<D;oe++)ge=Oe[oe],je?t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ze,Pe,ge):t.texImage2D(r.TEXTURE_2D,oe,Ee,ze,Pe,ge);S.generateMipmaps=!1}else je?(ft&&t.texStorage2D(r.TEXTURE_2D,Ve,Ee,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Pe,ee)):t.texImage2D(r.TEXTURE_2D,0,Ee,ze,Pe,ee);M(S,Ye)&&x(ne),Se.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function re(w,S,W){if(S.image.length!==6)return;const ne=k(w,S),te=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+W);const ie=n.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+W);const Se=Ke.getPrimaries(Ke.workingColorSpace),ce=S.colorSpace===pn?null:Ke.getPrimaries(S.colorSpace),_e=S.colorSpace===pn||Se===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!we&&!Ie?ee[oe]=_(S.image[oe],!1,!0,i.maxCubemapSize):ee[oe]=Ie?S.image[oe].image:S.image[oe],ee[oe]=be(S,ee[oe]);const Ye=ee[0],ze=p(Ye)||a,Pe=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type),ge=y(S.internalFormat,Pe,Ee,S.colorSpace),Oe=a&&S.isVideoTexture!==!0,je=ie.__version===void 0||ne===!0;let ft=A(S,Ye,ze);N(r.TEXTURE_CUBE_MAP,S,ze);let Ve;if(we){Oe&&je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,ge,Ye.width,Ye.height);for(let oe=0;oe<6;oe++){Ve=ee[oe].mipmaps;for(let D=0;D<Ve.length;D++){const he=Ve[D];S.format!==En?Pe!==null?Oe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,he.width,he.height,Pe,Ee,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,ge,he.width,he.height,0,Pe,Ee,he.data)}}}else{Ve=S.mipmaps,Oe&&je&&(Ve.length>0&&ft++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ft,ge,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(Ie){Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,Pe,Ee,ee[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ge,ee[oe].width,ee[oe].height,0,Pe,Ee,ee[oe].data);for(let D=0;D<Ve.length;D++){const ue=Ve[D].image[oe].image;Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,ue.width,ue.height,Pe,Ee,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,ge,ue.width,ue.height,0,Pe,Ee,ue.data)}}else{Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,Ee,ee[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ge,Pe,Ee,ee[oe]);for(let D=0;D<Ve.length;D++){const he=Ve[D];Oe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,Pe,Ee,he.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,ge,Pe,Ee,he.image[oe])}}}M(S,ze)&&x(r.TEXTURE_CUBE_MAP),ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,W,ne,te,ie){const Se=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),_e=y(W.internalFormat,Se,ce,W.colorSpace);if(!n.get(S).__hasExternalTextures){const Ie=Math.max(1,S.width>>ie),ee=Math.max(1,S.height>>ie);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,_e,Ie,ee,S.depth,0,Se,ce,null):t.texImage2D(te,ie,_e,Ie,ee,0,Se,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),de(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,te,n.get(W).__webglTexture,0,Me(S)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,te,n.get(W).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(w,S,W){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let ne=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(W||de(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===si?ne=r.DEPTH_COMPONENT32F:te.type===ri&&(ne=r.DEPTH_COMPONENT24));const ie=Me(S);de(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,ne,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ne,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Me(S);W&&de(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],Se=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),_e=y(ie.internalFormat,Se,ce,ie.colorSpace),we=Me(S);W&&de(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,_e,S.width,S.height):de(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,_e,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,_e,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,te=Me(S);if(S.depthTexture.format===Ii)de(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(S.depthTexture.format===gr)de(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function fe(w){const S=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,w)}else if(W){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=r.createRenderbuffer(),le(S.__webglDepthbuffer[ne],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),le(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(w,S,W){const ne=n.get(w);S!==void 0&&Q(ne.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&fe(w)}function O(w){const S=w.texture,W=n.get(w),ne=n.get(S);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=S.version,o.memory.textures++);const te=w.isWebGLCubeRenderTarget===!0,ie=w.isWebGLMultipleRenderTargets===!0,Se=p(w)||a;if(te){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let _e=0;_e<S.mipmaps.length;_e++)W.__webglFramebuffer[ce][_e]=r.createFramebuffer()}else W.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)W.__webglFramebuffer[ce]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ie)if(i.drawBuffers){const ce=w.texture;for(let _e=0,we=ce.length;_e<we;_e++){const Ie=n.get(ce[_e]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&de(w)===!1){const ce=ie?S:[S];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<ce.length;_e++){const we=ce[_e];W.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const Ie=s.convert(we.format,we.colorSpace),ee=s.convert(we.type),Ye=y(we.internalFormat,Ie,ee,we.colorSpace,w.isXRRenderTarget===!0),ze=Me(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,Ye,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),le(W.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),N(r.TEXTURE_CUBE_MAP,S,Se);for(let ce=0;ce<6;ce++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Q(W.__webglFramebuffer[ce][_e],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else Q(W.__webglFramebuffer[ce],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(S,Se)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=w.texture;for(let _e=0,we=ce.length;_e<we;_e++){const Ie=ce[_e],ee=n.get(Ie);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),N(r.TEXTURE_2D,Ie,Se),Q(W.__webglFramebuffer,w,Ie,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,0),M(Ie,Se)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ce=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ne.__webglTexture),N(ce,S,Se),a&&S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)Q(W.__webglFramebuffer[_e],w,S,r.COLOR_ATTACHMENT0,ce,_e);else Q(W.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,ce,0);M(S,Se)&&x(ce),t.unbindTexture()}w.depthBuffer&&fe(w)}function qe(w){const S=p(w)||a,W=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0,te=W.length;ne<te;ne++){const ie=W[ne];if(M(ie,S)){const Se=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=n.get(ie).__webglTexture;t.bindTexture(Se,ce),x(Se),t.unbindTexture()}}}function se(w){if(a&&w.samples>0&&de(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],W=w.width,ne=w.height;let te=r.COLOR_BUFFER_BIT;const ie=[],Se=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(w),_e=w.isWebGLMultipleRenderTargets===!0;if(_e)for(let we=0;we<S.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<S.length;we++){ie.push(r.COLOR_ATTACHMENT0+we),w.depthBuffer&&ie.push(Se);const Ie=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ie===!1&&(w.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),_e&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),Ie===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Se]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Se])),_e){const ee=n.get(S[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,W,ne,0,0,W,ne,te,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let we=0;we<S.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);const Ie=n.get(S[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Me(w){return Math.min(i.maxSamples,w.samples)}function de(w){const S=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function be(w,S){const W=w.colorSpace,ne=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===_o||W!==jn&&W!==pn&&(Ke.getTransfer(W)===st?a===!1?e.has("EXT_sRGB")===!0&&ne===En?(w.format=_o,w.minFilter=Et,w.generateMipmaps=!1):S=lu.sRGBToLinear(S):(ne!==En||te!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=xe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=de}function pv(r,e,t){const n=t.isWebGL2;function i(s,o=pn){let a;const l=Ke.getTransfer(o);if(s===hi)return r.UNSIGNED_BYTE;if(s===Jh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Bd)return r.BYTE;if(s===zd)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===$h)return r.INT;if(s===ri)return r.UNSIGNED_INT;if(s===si)return r.FLOAT;if(s===Wn)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Gd)return r.ALPHA;if(s===En)return r.RGBA;if(s===Vd)return r.LUMINANCE;if(s===kd)return r.LUMINANCE_ALPHA;if(s===Ii)return r.DEPTH_COMPONENT;if(s===gr)return r.DEPTH_STENCIL;if(s===_o)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hd)return r.RED;if(s===eu)return r.RED_INTEGER;if(s===Wd)return r.RG;if(s===tu)return r.RG_INTEGER;if(s===nu)return r.RGBA_INTEGER;if(s===ga||s===va||s===xa||s===Ma)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===Rl||s===Cl||s===Pl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Al)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===iu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ll||s===Dl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ll)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ul||s===Il||s===Nl||s===Fl||s===Ol||s===Bl||s===zl||s===Gl||s===Vl||s===kl||s===Hl||s===Wl||s===Xl||s===ql)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ul)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Il)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ol)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xl)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sa||s===Yl||s===jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Sa)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Kl||s===Zl||s===$l)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Sa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Kl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ui?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class mv extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gv extends Sr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const M=[],x=[],y=new De;let A=null;const C=new Xt;C.layers.enable(1),C.viewport=new rt;const E=new Xt;E.layers.enable(2),E.viewport=new rt;const U=[C,E],v=new mv;v.layers.enable(1),v.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=M[N];return k===void 0&&(k=new Wa,M[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=M[N];return k===void 0&&(k=new Wa,M[N]=k),k.getGripSpace()},this.getHand=function(N){let k=M[N];return k===void 0&&(k=new Wa,M[N]=k),k.getHandSpace()};function G(N){const k=x.indexOf(N.inputSource);if(k===-1)return;const J=M[k];J!==void 0&&(J.update(N.inputSource,N.frame,c||o),J.dispatchEvent({type:N.type,data:N.inputSource}))}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",L);for(let N=0;N<M.length;N++){const k=x[N];k!==null&&(x[N]=null,M[N].disconnect(k))}T=null,V=null,e.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,H.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new gn(m.framebufferWidth,m.framebufferHeight,{format:En,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let k=null,J=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=_.stencil?gr:Ii,J=_.stencil?Ui:ri);const Q={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Q),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new gn(f.textureWidth,f.textureHeight,{format:En,type:hi,depthTexture:new Mu(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const le=e.properties.get(d);le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(N){for(let k=0;k<N.removed.length;k++){const J=N.removed[k],re=x.indexOf(J);re>=0&&(x[re]=null,M[re].disconnect(J))}for(let k=0;k<N.added.length;k++){const J=N.added[k];let re=x.indexOf(J);if(re===-1){for(let le=0;le<M.length;le++)if(le>=x.length){x.push(J),re=le;break}else if(x[le]===null){x[le]=J,re=le;break}if(re===-1)break}const Q=M[re];Q&&Q.connect(J)}}const F=new I,z=new I;function K(N,k,J){F.setFromMatrixPosition(k.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const re=F.distanceTo(z),Q=k.projectionMatrix.elements,le=J.projectionMatrix.elements,pe=Q[14]/(Q[10]-1),fe=Q[14]/(Q[10]+1),xe=(Q[9]+1)/Q[5],O=(Q[9]-1)/Q[5],qe=(Q[8]-1)/Q[0],se=(le[8]+1)/le[0],Me=pe*qe,de=pe*se,We=re/(-qe+se),be=We*-qe;k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(be),N.translateZ(We),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const w=pe+We,S=fe+We,W=Me-be,ne=de+(re-be),te=xe*fe/S*w,ie=O*fe/S*w;N.projectionMatrix.makePerspective(W,ne,te,ie,w,S),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function j(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;v.near=E.near=C.near=N.near,v.far=E.far=C.far=N.far,(T!==v.near||V!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,V=v.far);const k=N.parent,J=v.cameras;j(v,k);for(let re=0;re<J.length;re++)j(J[re],k);J.length===2?K(v,C,E):v.projectionMatrix.copy(C.projectionMatrix),Z(N,v,k)};function Z(N,k,J){J===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(J.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Zr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let P=null;function R(N,k){if(h=k.getViewerPose(c||o),g=k,h!==null){const J=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let re=!1;J.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let Q=0;Q<J.length;Q++){const le=J[Q];let pe=null;if(m!==null)pe=m.getViewport(le);else{const xe=u.getViewSubImage(f,le);pe=xe.viewport,Q===0&&(e.setRenderTargetTextures(d,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(d))}let fe=U[Q];fe===void 0&&(fe=new Xt,fe.layers.enable(Q),fe.viewport=new rt,U[Q]=fe),fe.matrix.fromArray(le.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(le.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(pe.x,pe.y,pe.width,pe.height),Q===0&&(v.matrix.copy(fe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(fe)}}for(let J=0;J<M.length;J++){const re=x[J],Q=M[J];re!==null&&Q!==void 0&&Q.update(re,k,c||o)}P&&P(N,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const H=new xu;H.setAnimationLoop(R),this.setAnimationLoop=function(N){P=N},this.dispose=function(){}}}function vv(r,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,_u(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,M,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ht&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ht&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xv(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(M,A);const C=e.render.frame;s[M.id]!==C&&(f(M),s[M.id]=C)}function h(M){const x=u();M.__bindingPointIndex=x;const y=r.createBuffer(),A=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],y=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,E=y.length;C<E;C++){const U=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,T=U.length;v<T;v++){const V=U[v];if(m(V,C,v,A)===!0){const G=V.__offset,$=Array.isArray(V.value)?V.value:[V.value];let L=0;for(let F=0;F<$.length;F++){const z=$[F],K=_(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,G+L,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(M,x,y,A){const C=M.value,E=x+"_"+y;if(A[E]===void 0)return typeof C=="number"||typeof C=="boolean"?A[E]=C:A[E]=C.clone(),!0;{const U=A[E];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[E]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(M){const x=M.uniforms;let y=0;const A=16;for(let E=0,U=x.length;E<U;E++){const v=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,V=v.length;T<V;T++){const G=v[T],$=Array.isArray(G.value)?G.value:[G.value];for(let L=0,F=$.length;L<F;L++){const z=$[L],K=_(z),j=y%A;j!==0&&A-j<K.boundary&&(y+=A-j),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=K.storage}}}const C=y%A;return C>0&&(y+=A-C),M.__size=y,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}class wu{constructor(e={}){const{canvas:t=_p(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const x=this;let y=!1,A=0,C=0,E=null,U=-1,v=null;const T=new rt,V=new rt;let G=null;const $=new Ue(0);let L=0,F=t.width,z=t.height,K=1,j=null,Z=null;const P=new rt(0,0,F,z),R=new rt(0,0,F,z);let H=!1;const N=new Ho;let k=!1,J=!1,re=null;const Q=new ot,le=new De,pe=new I,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return E===null?K:1}let O=n;function qe(b,B){for(let q=0;q<b.length;q++){const Y=b[q],X=t.getContext(Y,B);if(X!==null)return X}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",he,!1),O===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),O=qe(B,b),O===null)throw qe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,Me,de,We,be,w,S,W,ne,te,ie,Se,ce,_e,we,Ie,ee,Ye,ze,Pe,Ee,ge,Oe,je;function ft(){se=new Cg(O),Me=new Tg(O,se,e),se.init(Me),ge=new pv(O,se,Me),de=new fv(O,se,Me),We=new Dg(O),be=new J0,w=new dv(O,se,de,be,Me,ge,We),S=new bg(x),W=new Rg(x),ne=new Gp(O,Me),Oe=new Sg(O,se,ne,Me),te=new Pg(O,ne,We,Oe),ie=new Fg(O,te,ne,We),ze=new Ng(O,Me,w),Ie=new Eg(be),Se=new $0(x,S,W,se,Me,Oe,Ie),ce=new vv(x,be),_e=new ev,we=new av(se,Me),Ye=new Mg(x,S,W,de,ie,f,l),ee=new uv(x,ie,Me),je=new xv(O,We,Me,de),Pe=new yg(O,se,We,Me),Ee=new Lg(O,se,We,Me),We.programs=Se.programs,x.capabilities=Me,x.extensions=se,x.properties=be,x.renderLists=_e,x.shadowMap=ee,x.state=de,x.info=We}ft();const Ve=new gv(x,O);this.xr=Ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(F,z,!1))},this.getSize=function(b){return b.set(F,z)},this.setSize=function(b,B,q=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,z=B,t.width=Math.floor(b*K),t.height=Math.floor(B*K),q===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(F*K,z*K).floor()},this.setDrawingBufferSize=function(b,B,q){F=b,z=B,K=q,t.width=Math.floor(b*q),t.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,B,q,Y){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,B,q,Y),de.viewport(T.copy(P).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,B,q,Y){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,B,q,Y),de.scissor(V.copy(R).multiplyScalar(K).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(b){de.setScissorTest(H=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(b=!0,B=!0,q=!0){let Y=0;if(b){let X=!1;if(E!==null){const me=E.texture.format;X=me===nu||me===tu||me===eu}if(X){const me=E.texture.type,Te=me===hi||me===ri||me===Go||me===Ui||me===Jh||me===Qh,Re=Ye.getClearColor(),Le=Ye.getClearAlpha(),Ge=Re.r,Ne=Re.g,Fe=Re.b;Te?(m[0]=Ge,m[1]=Ne,m[2]=Fe,m[3]=Le,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Ge,g[1]=Ne,g[2]=Fe,g[3]=Le,O.clearBufferiv(O.COLOR,0,g))}else Y|=O.COLOR_BUFFER_BIT}B&&(Y|=O.DEPTH_BUFFER_BIT),q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),we.dispose(),be.dispose(),S.dispose(),W.dispose(),ie.dispose(),Oe.dispose(),je.dispose(),Se.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Nt),Ve.removeEventListener("sessionend",tt),re&&(re.dispose(),re=null),Ft.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=We.autoReset,B=ee.enabled,q=ee.autoUpdate,Y=ee.needsUpdate,X=ee.type;ft(),We.autoReset=b,ee.enabled=B,ee.autoUpdate=q,ee.needsUpdate=Y,ee.type=X}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const B=b.target;B.removeEventListener("dispose",ue),Ce(B)}function Ce(b){Ae(b),be.remove(b)}function Ae(b){const B=be.get(b).programs;B!==void 0&&(B.forEach(function(q){Se.releaseProgram(q)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,Y,X,me){B===null&&(B=fe);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Re=Iu(b,B,q,Y,X);de.setMaterial(Y,Te);let Le=q.index,Ge=1;if(Y.wireframe===!0){if(Le=te.getWireframeAttribute(q),Le===void 0)return;Ge=2}const Ne=q.drawRange,Fe=q.attributes.position;let mt=Ne.start*Ge,Qt=(Ne.start+Ne.count)*Ge;me!==null&&(mt=Math.max(mt,me.start*Ge),Qt=Math.min(Qt,(me.start+me.count)*Ge)),Le!==null?(mt=Math.max(mt,0),Qt=Math.min(Qt,Le.count)):Fe!=null&&(mt=Math.max(mt,0),Qt=Math.min(Qt,Fe.count));const yt=Qt-mt;if(yt<0||yt===1/0)return;Oe.setup(X,Y,Re,q,Le);let Un,lt=Pe;if(Le!==null&&(Un=ne.get(Le),lt=Ee,lt.setIndex(Un)),X.isMesh)Y.wireframe===!0?(de.setLineWidth(Y.wireframeLinewidth*xe()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(X.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),de.setLineWidth(ke*xe()),X.isLineSegments?lt.setMode(O.LINES):X.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else X.isPoints?lt.setMode(O.POINTS):X.isSprite&&lt.setMode(O.TRIANGLES);if(X.isBatchedMesh)lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)lt.renderInstances(mt,yt,X.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ra=Math.min(q.instanceCount,ke);lt.renderInstances(mt,yt,ra)}else lt.render(mt,yt)};function Qe(b,B,q){b.transparent===!0&&b.side===Vt&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,rs(b,B,q),b.side=Yn,b.needsUpdate=!0,rs(b,B,q),b.side=Vt):rs(b,B,q)}this.compile=function(b,B,q=null){q===null&&(q=b),p=we.get(q),p.init(),M.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(x._useLegacyLights);const Y=new Set;return b.traverse(function(X){const me=X.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Re=me[Te];Qe(Re,q,X),Y.add(Re)}else Qe(me,q,X),Y.add(me)}),M.pop(),p=null,Y},this.compileAsync=function(b,B,q=null){const Y=this.compile(b,B,q);return new Promise(X=>{function me(){if(Y.forEach(function(Te){be.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){X(b);return}setTimeout(me,10)}se.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let et=null;function St(b){et&&et(b)}function Nt(){Ft.stop()}function tt(){Ft.start()}const Ft=new xu;Ft.setAnimationLoop(St),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(b){et=b,Ve.setAnimationLoop(b),b===null?Ft.stop():Ft.start()},Ve.addEventListener("sessionstart",Nt),Ve.addEventListener("sessionend",tt),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(B),B=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,E),p=we.get(b,M.length),p.init(),M.push(p),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),N.setFromProjectionMatrix(Q),J=this.localClippingEnabled,k=Ie.init(this.clippingPlanes,J),_=_e.get(b,d.length),_.init(),d.push(_),bn(b,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,Z),this.info.render.frame++,k===!0&&Ie.beginShadows();const q=p.state.shadowsArray;if(ee.render(q,b,B),k===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,b),p.setupLights(x._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let X=0,me=Y.length;X<me;X++){const Te=Y[X];$o(_,b,Te,Te.viewport)}}else $o(_,b,B);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,B),Oe.resetDefaultState(),U=-1,v=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function bn(b,B,q,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||N.intersectsSprite(b)){Y&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const Te=ie.update(b),Re=b.material;Re.visible&&_.push(b,Te,Re,q,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||N.intersectsObject(b))){const Te=ie.update(b),Re=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),pe.copy(Te.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(Re)){const Le=Te.groups;for(let Ge=0,Ne=Le.length;Ge<Ne;Ge++){const Fe=Le[Ge],mt=Re[Fe.materialIndex];mt&&mt.visible&&_.push(b,Te,mt,q,pe.z,Fe)}}else Re.visible&&_.push(b,Te,Re,q,pe.z,null)}}const me=b.children;for(let Te=0,Re=me.length;Te<Re;Te++)bn(me[Te],B,q,Y)}function $o(b,B,q,Y){const X=b.opaque,me=b.transmissive,Te=b.transparent;p.setupLightsView(q),k===!0&&Ie.setGlobalState(x.clippingPlanes,q),me.length>0&&Uu(X,me,B,q),Y&&de.viewport(T.copy(Y)),X.length>0&&is(X,B,q),me.length>0&&is(me,B,q),Te.length>0&&is(Te,B,q),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Uu(b,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const me=Me.isWebGL2;re===null&&(re=new gn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?Wn:hi,minFilter:Kr,samples:me?4:0})),x.getDrawingBufferSize(le),me?re.setSize(le.x,le.y):re.setSize(Ys(le.x),Ys(le.y));const Te=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor($),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=ci,is(b,q,Y),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re);let Le=!1;for(let Ge=0,Ne=B.length;Ge<Ne;Ge++){const Fe=B[Ge],mt=Fe.object,Qt=Fe.geometry,yt=Fe.material,Un=Fe.group;if(yt.side===Vt&&mt.layers.test(Y.layers)){const lt=yt.side;yt.side=Ht,yt.needsUpdate=!0,Jo(mt,q,Y,Qt,yt,Un),yt.side=lt,yt.needsUpdate=!0,Le=!0}}Le===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re)),x.setRenderTarget(Te),x.setClearColor($,L),x.toneMapping=Re}function is(b,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let X=0,me=b.length;X<me;X++){const Te=b[X],Re=Te.object,Le=Te.geometry,Ge=Y===null?Te.material:Y,Ne=Te.group;Re.layers.test(q.layers)&&Jo(Re,B,q,Le,Ge,Ne)}}function Jo(b,B,q,Y,X,me){b.onBeforeRender(x,B,q,Y,X,me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(x,B,q,Y,b,me),X.transparent===!0&&X.side===Vt&&X.forceSinglePass===!1?(X.side=Ht,X.needsUpdate=!0,x.renderBufferDirect(q,B,Y,X,b,me),X.side=Yn,X.needsUpdate=!0,x.renderBufferDirect(q,B,Y,X,b,me),X.side=Vt):x.renderBufferDirect(q,B,Y,X,b,me),b.onAfterRender(x,B,q,Y,X,me)}function rs(b,B,q){B.isScene!==!0&&(B=fe);const Y=be.get(b),X=p.state.lights,me=p.state.shadowsArray,Te=X.state.version,Re=Se.getParameters(b,X.state,me,B,q),Le=Se.getProgramCacheKey(Re);let Ge=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?W:S).get(b.envMap||Y.environment),Ge===void 0&&(b.addEventListener("dispose",ue),Ge=new Map,Y.programs=Ge);let Ne=Ge.get(Le);if(Ne!==void 0){if(Y.currentProgram===Ne&&Y.lightsStateVersion===Te)return el(b,Re),Ne}else Re.uniforms=Se.getUniforms(b),b.onBuild(q,Re,x),b.onBeforeCompile(Re,x),Ne=Se.acquireProgram(Re,Le),Ge.set(Le,Ne),Y.uniforms=Re.uniforms;const Fe=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ie.uniform),el(b,Re),Y.needsLights=Fu(b),Y.lightsStateVersion=Te,Y.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMap.value=X.state.directionalShadowMap,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotShadowMap.value=X.state.spotShadowMap,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMap.value=X.state.pointShadowMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Ne,Y.uniformsList=null,Ne}function Qo(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Us.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function el(b,B){const q=be.get(b);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Iu(b,B,q,Y,X){B.isScene!==!0&&(B=fe),w.resetTextureUnits();const me=B.fog,Te=Y.isMeshStandardMaterial?B.environment:null,Re=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:jn,Le=(Y.isMeshStandardMaterial?W:S).get(Y.envMap||Te),Ge=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ne=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!q.morphAttributes.position,mt=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color;let yt=ci;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(yt=x.toneMapping);const Un=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Un!==void 0?Un.length:0,ke=be.get(Y),ra=p.state.lights;if(k===!0&&(J===!0||b!==v)){const hn=b===v&&Y.id===U;Ie.setState(Y,b,hn)}let dt=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ra.state.version||ke.outputColorSpace!==Re||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||ke.envMap!==Le||Y.fog===!0&&ke.fog!==me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ie.numPlanes||ke.numIntersection!==Ie.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Ne||ke.morphTargets!==Fe||ke.morphNormals!==mt||ke.morphColors!==Qt||ke.toneMapping!==yt||Me.isWebGL2===!0&&ke.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,ke.__version=Y.version);let mi=ke.currentProgram;dt===!0&&(mi=rs(Y,B,X));let tl=!1,br=!1,sa=!1;const Pt=mi.getUniforms(),_i=ke.uniforms;if(de.useProgram(mi.program)&&(tl=!0,br=!0,sa=!0),Y.id!==U&&(U=Y.id,br=!0),tl||v!==b){Pt.setValue(O,"projectionMatrix",b.projectionMatrix),Pt.setValue(O,"viewMatrix",b.matrixWorldInverse);const hn=Pt.map.cameraPosition;hn!==void 0&&hn.setValue(O,pe.setFromMatrixPosition(b.matrixWorld)),Me.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,br=!0,sa=!0)}if(X.isSkinnedMesh){Pt.setOptional(O,X,"bindMatrix"),Pt.setOptional(O,X,"bindMatrixInverse");const hn=X.skeleton;hn&&(Me.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Pt.setValue(O,"boneTexture",hn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Pt.setOptional(O,X,"batchingTexture"),Pt.setValue(O,"batchingTexture",X._matricesTexture,w));const aa=q.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&Me.isWebGL2===!0)&&ze.update(X,q,mi),(br||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Pt.setValue(O,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(_i.envMap.value=Le,_i.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),br&&(Pt.setValue(O,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Nu(_i,sa),me&&Y.fog===!0&&ce.refreshFogUniforms(_i,me),ce.refreshMaterialUniforms(_i,Y,K,z,re),Us.upload(O,Qo(ke),_i,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Us.upload(O,Qo(ke),_i,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pt.setValue(O,"center",X.center),Pt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Pt.setValue(O,"normalMatrix",X.normalMatrix),Pt.setValue(O,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const hn=Y.uniformsGroups;for(let oa=0,Ou=hn.length;oa<Ou;oa++)if(Me.isWebGL2){const nl=hn[oa];je.update(nl,mi),je.bind(nl,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function Nu(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,B,q){be.get(b.texture).__webglTexture=B,be.get(b.depthTexture).__webglTexture=q;const Y=be.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const q=be.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,q=0){E=b,A=B,C=q;let Y=!0,X=null,me=!1,Te=!1;if(b){const Le=be.get(b);Le.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1):Le.__webglFramebuffer===void 0?w.setupRenderTarget(b):Le.__hasExternalTextures&&w.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const Ne=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?X=Ne[B][q]:X=Ne[B],me=!0):Me.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?X=be.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?X=Ne[q]:X=Ne,T.copy(b.viewport),V.copy(b.scissor),G=b.scissorTest}else T.copy(P).multiplyScalar(K).floor(),V.copy(R).multiplyScalar(K).floor(),G=H;if(de.bindFramebuffer(O.FRAMEBUFFER,X)&&Me.drawBuffers&&Y&&de.drawBuffers(b,X),de.viewport(T),de.scissor(V),de.setScissorTest(G),me){const Le=be.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,q)}else if(Te){const Le=be.get(b.texture),Ge=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.__webglTexture,q||0,Ge)}U=-1},this.readRenderTargetPixels=function(b,B,q,Y,X,me,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){de.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Le=b.texture,Ge=Le.format,Ne=Le.type;if(Ge!==En&&ge.convert(Ge)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===Wn&&(se.has("EXT_color_buffer_half_float")||Me.isWebGL2&&se.has("EXT_color_buffer_float"));if(Ne!==hi&&ge.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===si&&(Me.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&q>=0&&q<=b.height-X&&O.readPixels(B,q,Y,X,ge.convert(Ge),ge.convert(Ne),me)}finally{const Le=E!==null?be.get(E).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(b,B,q=0){const Y=Math.pow(2,-q),X=Math.floor(B.image.width*Y),me=Math.floor(B.image.height*Y);w.setTexture2D(B,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,b.x,b.y,X,me),de.unbindTexture()},this.copyTextureToTexture=function(b,B,q,Y=0){const X=B.image.width,me=B.image.height,Te=ge.convert(q.format),Re=ge.convert(q.type);w.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Y,b.x,b.y,X,me,Te,Re,B.image.data):B.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Y,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Te,B.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Y,b.x,b.y,Te,Re,B.image),Y===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(b,B,q,Y,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,Le=ge.convert(Y.format),Ge=ge.convert(Y.type);let Ne;if(Y.isData3DTexture)w.setTexture3D(Y,0),Ne=O.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),Ne=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const Fe=O.getParameter(O.UNPACK_ROW_LENGTH),mt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qt=O.getParameter(O.UNPACK_SKIP_PIXELS),yt=O.getParameter(O.UNPACK_SKIP_ROWS),Un=O.getParameter(O.UNPACK_SKIP_IMAGES),lt=q.isCompressedTexture?q.mipmaps[X]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(Ne,X,B.x,B.y,B.z,me,Te,Re,Le,Ge,lt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ne,X,B.x,B.y,B.z,me,Te,Re,Le,lt.data)):O.texSubImage3D(Ne,X,B.x,B.y,B.z,me,Te,Re,Le,Ge,lt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Fe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,yt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Un),X===0&&Y.generateMipmaps&&O.generateMipmap(Ne),de.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){A=0,C=0,E=null,de.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vo?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Ni:ru}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ni?wt:jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Mv extends wu{}Mv.prototype.isWebGL1Renderer=!0;class qo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sv extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Au extends Tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vc=new ot,xo=new uu,Rs=new ta,Cs=new I;class yv extends Rt{constructor(e=new vn,t=new Au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;Vc.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Cs.fromBufferAttribute(u,p),kc(Cs,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Cs.fromBufferAttribute(u,g),kc(Cs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kc(r,e,t,n,i,s,o){const a=xo.distanceSqToPoint(r);if(a<t){const l=new I;xo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class er extends Wt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends vn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(m,2));function M(){const y=new I,A=new I;let C=0;const E=(t-e)/n;for(let U=0;U<=s;U++){const v=[],T=U/s,V=T*(t-e)+e;for(let G=0;G<=i;G++){const $=G/i,L=$*l+a,F=Math.sin(L),z=Math.cos(L);A.x=V*F,A.y=-T*n+p,A.z=V*z,u.push(A.x,A.y,A.z),y.set(F,E,z).normalize(),f.push(y.x,y.y,y.z),m.push($,1-T),v.push(g++)}_.push(v)}for(let U=0;U<i;U++)for(let v=0;v<s;v++){const T=_[v][U],V=_[v+1][U],G=_[v+1][U+1],$=_[v][U+1];h.push(T,V,$),h.push(V,G,$),C+=6}c.addGroup(d,C,0),d+=C}function x(y){const A=g,C=new De,E=new I;let U=0;const v=y===!0?e:t,T=y===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const V=g;for(let G=0;G<=i;G++){const L=G/i*l+a,F=Math.cos(L),z=Math.sin(L);E.x=v*z,E.y=p*T,E.z=v*F,u.push(E.x,E.y,E.z),f.push(0,T,0),C.x=F*.5+.5,C.y=z*.5*T+.5,m.push(C.x,C.y),g++}for(let G=0;G<i;G++){const $=A+G,L=V+G;y===!0?h.push(L,L+1,$):h.push(L+1,L,$),U+=3}c.addGroup(d,U,y===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ai extends vn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const M=[],x=d/n;let y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const C=A/t;u.x=-e*Math.cos(i+C*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+C*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(C+y,1-x),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const x=h[d][M+1],y=h[d][M],A=h[d+1][M],C=h[d+1][M+1];(d!==0||o>0)&&m.push(x,y,C),(d!==n-1||l<Math.PI)&&m.push(y,A,C)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xa extends Tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Tv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Ev=new Tv;class Yo{constructor(e){this.manager=e!==void 0?e:Ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";class bv extends Yo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=$r("img");function l(){h(),Hc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class qa extends Yo{constructor(e){super(e)}load(e,t,n,i){const s=new Wt,o=new bv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class jo extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ya=new ot,Wc=new I,Xc=new I;class Ru{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qc=new ot,Lr=new I,ja=new I;class wv extends Ru{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lr),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class Yc extends jo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Av extends Ru{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rv extends jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cv extends jo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const Pu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pv=new Wo(-1,1,1,-1,0,1);class Lv extends vn{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}}const Dv=new Lv;class Lu{constructor(e){this._mesh=new nt(Dv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Uv extends ns{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xr.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kc extends ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Iv extends ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uv(Pu),this.copyPass.material.blending=Hn,this.clock=new Cu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kc!==void 0&&(o instanceof Kc?n=!0:o instanceof Iv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fv extends ns{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Ov={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Mr extends ns{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new gn(s,o,{type:Wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new gn(s,o,{type:Wn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=Ov;this.highPassUniforms=xr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new De(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Pu;this.copyUniforms=xr.clone(h.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:jr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Lu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new De(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Mr.BlurDirectionX=new De(1,0);Mr.BlurDirectionY=new De(0,1);class Bv extends nt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new I(.70707,.70707,0),u=new Ue(t.sunColor!==void 0?t.sunColor:16777215),f=new Ue(t.waterColor!==void 0?t.waterColor:8355711),m=t.eye!==void 0?t.eye:new I(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Yn,p=t.fog!==void 0?t.fog:!1,d=new ei,M=new I,x=new I,y=new I,A=new ot,C=new I(0,0,-1),E=new rt,U=new I,v=new I,T=new rt,V=new ot,G=new Xt,$=new gn(i,s),L={name:"MirrorShader",uniforms:xr.merge([ae.fog,ae.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ot},sunColor:{value:new Ue(8355711)},sunDirection:{value:new I(.70707,.70707,0)},eye:{value:new I},waterColor:{value:new Ue(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},F=new Yt({name:L.name,uniforms:xr.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,lights:!0,side:_,fog:p});F.uniforms.mirrorSampler.value=$.texture,F.uniforms.textureMatrix.value=V,F.uniforms.alpha.value=a,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=u,F.uniforms.waterColor.value=f,F.uniforms.sunDirection.value=h,F.uniforms.distortionScale.value=g,F.uniforms.eye.value=m,n.material=F,n.onBeforeRender=function(z,K,j){if(x.setFromMatrixPosition(n.matrixWorld),y.setFromMatrixPosition(j.matrixWorld),A.extractRotation(n.matrixWorld),M.set(0,0,1),M.applyMatrix4(A),U.subVectors(x,y),U.dot(M)>0)return;U.reflect(M).negate(),U.add(x),A.extractRotation(j.matrixWorld),C.set(0,0,-1),C.applyMatrix4(A),C.add(y),v.subVectors(x,C),v.reflect(M).negate(),v.add(x),G.position.copy(U),G.up.set(0,1,0),G.up.applyMatrix4(A),G.up.reflect(M),G.lookAt(v),G.far=j.far,G.updateMatrixWorld(),G.projectionMatrix.copy(j.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(G.projectionMatrix),V.multiply(G.matrixWorldInverse),d.setFromNormalAndCoplanarPoint(M,x),d.applyMatrix4(G.matrixWorldInverse),E.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const Z=G.projectionMatrix;T.x=(Math.sign(E.x)+Z.elements[8])/Z.elements[0],T.y=(Math.sign(E.y)+Z.elements[9])/Z.elements[5],T.z=-1,T.w=(1+Z.elements[10])/Z.elements[14],E.multiplyScalar(2/E.dot(T)),Z.elements[2]=E.x,Z.elements[6]=E.y,Z.elements[10]=E.z+1-o,Z.elements[14]=E.w,m.setFromMatrixPosition(j.matrixWorld);const P=z.getRenderTarget(),R=z.xr.enabled,H=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget($),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(K,G),n.visible=!0,z.xr.enabled=R,z.shadowMap.autoUpdate=H,z.setRenderTarget(P);const N=j.viewport;N!==void 0&&z.state.viewport(N)}}}class zv{constructor(){this.scene=new Sv,this.scene.background=new Ue("#010205"),this.scene.fog=new qo("#010205",.002),this.camera=new Xt(60,window.innerWidth/window.innerHeight,.1,3e3),this.renderer=new wu({antialias:!1,powerPreference:"high-performance"}),this.clock=new Cu,this.stars=null,this.moon=null,this.water=null,this.shootingStars=[],this.cakeGroup=null,this.flameLight=null,this.flameMesh=null,this.starPositions=[],this.heartTargetPositions=[],this.composer=null,this.bloomPass=null,this.birdMats=[]}init(e){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Kh,this.renderer.toneMappingExposure=1.2,e.appendChild(this.renderer.domElement),this.composer=new Nv(this.renderer);const t=new Fv(this.scene,this.camera);this.composer.addPass(t),this.bloomPass=new Mr(new De(window.innerWidth,window.innerHeight),1.2,.4,.85),this.bloomPass.threshold=.3,this.bloomPass.strength=1.2,this.bloomPass.radius=.8,this.composer.addPass(this.bloomPass),this.createStars(),this.createMoon(),this.createWater(),this.createShootingStars(),this.createTextMeshes(),this.createCake(),this.createInkScene(),this.camera.position.set(0,5,600),window.addEventListener("resize",this.onResize.bind(this))}createTextSprite(e,t,n,i,s="0px",o=10){const a=document.createElement("canvas"),l=a.getContext("2d");typeof l.letterSpacing<"u"&&(l.letterSpacing=s),l.font=`${n}px "${t}"`;const c=l.measureText(e).width,h=nc.ceilPowerOfTwo(c+100),u=nc.ceilPowerOfTwo(n*2.5);a.width=h,a.height=u,typeof l.letterSpacing<"u"&&(l.letterSpacing=s),l.font=`${n}px "${t}"`,l.textAlign="center",l.textBaseline="middle",l.fillStyle=i,l.fillText(e,h/2,u/2);const f=new er(a);f.minFilter=Et,f.magFilter=Et;const m=new zt({map:f,transparent:!0,opacity:0,side:Vt,blending:dn,depthWrite:!1}),g=h/u,_=new An(o*g,o),p=new nt(_,m);return p.userData={message:e,font:t,size:n,color:i,spacing:s,writeProgress:1},p}updateTextSpriteWriting(e,t){const n=e.material.map.image,i=n.getContext("2d"),{message:s,font:o,size:a,color:l,spacing:c}=e.userData;i.clearRect(0,0,n.width,n.height),typeof i.letterSpacing<"u"&&(i.letterSpacing=c),i.font=`${a}px "${o}"`,i.textAlign="center",i.textBaseline="middle",i.shadowColor=l,i.shadowBlur=2,i.fillStyle=l,i.save(),i.beginPath(),i.rect(0,0,n.width*t,n.height),i.clip(),i.fillText(s,n.width/2,n.height/2),i.restore(),e.material.map.needsUpdate=!0}updateTextSprite(e,t,n,i,s,o="0px"){const a=e.material.map.image,l=a.getContext("2d");l.clearRect(0,0,a.width,a.height),typeof l.letterSpacing<"u"&&(l.letterSpacing=o),l.font=`${i}px "${n}"`,l.textAlign="center",l.textBaseline="middle",l.fillStyle=s,l.fillText(t,a.width/2,a.height/2),e.material.map.needsUpdate=!0}createTextMeshes(){this.textName=this.createTextSprite("NGUYỆT HÀ","Montserrat",120,"#dddddf","15px",5),this.textName.position.set(0,7,20),this.scene.add(this.textName),this.textYear=this.createTextSprite("05.08.2005","Montserrat",80,"#aaccff","10px",2.5),this.textYear.position.set(0,4,20),this.scene.add(this.textYear),this.whispers=[],["Chúc mừng sinh nhật em, Nguyệt Hà.","Tuổi 21 có thể sẽ nhiều chênh vênh...","Cảm ơn em vì đã đến...","...giống như ánh trăng dịu dàng soi xuống dòng sông.","Dù thế nào đi nữa... Anh vẫn sẽ ở đây."].forEach(t=>{const n=this.createTextSprite(t,"Montserrat",80,"#ffeacc","2px",3);n.position.set(0,-1,25),this.scene.add(n),this.whispers.push(n)}),this.textWish=this.createTextSprite("Hãy nhắm mắt... ước một điều... và thổi nhẹ nhé.","Montserrat",80,"#dddddf","2px",2.5),this.textWish.position.set(0,6,25),this.scene.add(this.textWish),this.textHBD=this.createTextSprite("HAPPY 21ST BIRTHDAY","Montserrat",80,"#ffffff","20px",4),this.textHBD.position.set(0,12,30),this.scene.add(this.textHBD),this.textLove=this.createTextSprite("ANH YÊU EM ❤️","Montserrat",90,"#ffd700","15px",3),this.textLove.position.set(0,7,30),this.scene.add(this.textLove)}createProceduralMountain(e,t,n,i){const s=document.createElement("canvas");s.width=e,s.height=t;const o=s.getContext("2d");o.fillStyle=n,o.beginPath(),o.moveTo(0,t);for(let u=0;u<=e;u+=5){const f=Math.sin((u+i)*.005)*80+Math.sin((u+i)*.02)*20+Math.sin((u+i)*.08)*5;o.lineTo(u,t*.5+f)}o.lineTo(e,t),o.fill();const a=new er(s);a.minFilter=Et;const l=new zt({map:a,transparent:!0,opacity:0,depthWrite:!1,blending:dn}),c=new An(300,150);return new nt(c,l)}createInkMoonTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=256,i=256,s=180;for(let l=0;l<Math.PI*2;l+=.05){const c=l/(Math.PI*2),h=Math.sin(l*12)*4+Math.sin(l*3)*6,u=s+h,f=n+Math.cos(l)*u,m=i+Math.sin(l)*u,g=12+Math.sin(l*8)*4-c*6;if(t.beginPath(),t.arc(f,m,g,0,Math.PI*2),t.fillStyle=`rgba(30, 30, 35, ${.9-c*.5})`,t.fill(),Math.random()>.6){t.beginPath();const _=u+(Math.random()-.5)*35;t.arc(n+Math.cos(l)*_,i+Math.sin(l)*_,Math.random()*2.5,0,Math.PI*2),t.fillStyle=`rgba(40, 40, 45, ${Math.random()*.6})`,t.fill()}}const o=t.createRadialGradient(n,i,0,n,i,s);o.addColorStop(0,"rgba(255, 250, 240, 0.6)"),o.addColorStop(.8,"rgba(255, 250, 240, 0.2)"),o.addColorStop(1,"transparent"),t.beginPath(),t.arc(n,i,s,0,Math.PI*2),t.fillStyle=o,t.fill();const a=new er(e);return a.minFilter=Et,a}createSwallowBodyTexture(){const e=document.createElement("canvas");e.width=64,e.height=128;const t=e.getContext("2d");return t.fillStyle="rgba(25, 25, 30, 0.9)",t.shadowColor="rgba(25, 25, 30, 0.5)",t.shadowBlur=4,t.beginPath(),t.moveTo(32,10),t.quadraticCurveTo(45,40,32,75),t.lineTo(45,115),t.lineTo(32,95),t.lineTo(19,115),t.quadraticCurveTo(19,40,32,10),t.fill(),new er(e)}createSwallowWingTexture(){const e=document.createElement("canvas");e.width=128,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(25, 25, 30, 0.85)",t.shadowColor="rgba(25, 25, 30, 0.5)",t.shadowBlur=4,t.beginPath(),t.moveTo(10,32),t.quadraticCurveTo(40,5,115,15),t.quadraticCurveTo(80,50,10,45),t.fill(),new er(e)}createSingleBirdMesh(){const e=new ai;this.swallowBodyTex||(this.swallowBodyTex=this.createSwallowBodyTexture(),this.swallowBodyTex.minFilter=Et),this.swallowWingTex||(this.swallowWingTex=this.createSwallowWingTexture(),this.swallowWingTex.minFilter=Et);const t=new zt({map:this.swallowBodyTex,transparent:!0,opacity:0,depthWrite:!1,side:Vt}),n=new zt({map:this.swallowWingTex,transparent:!0,opacity:0,depthWrite:!1,side:Vt});this.birdMats.push(t,n);const i=new An(3,6),s=new nt(i,t);e.add(s);const o=new An(6,3);o.translate(3,0,0);const a=new nt(o,n);a.position.set(.5,.5,0),e.add(a);const l=new nt(o,n);return l.rotation.y=Math.PI,l.position.set(-.5,.5,0),e.add(l),e.userData={wingL:l,wingR:a},e}createInkBirds(){this.birds=new ai;for(let e=0;e<7;e++){const t=this.createSingleBirdMesh();t.rotation.z=Math.PI/2,t.rotation.x=-Math.PI/2+Math.PI/10,t.position.set(Math.random()*20+10,Math.random()*10+10,Math.random()*20-30),t.userData.speed=.2+Math.random()*.1,t.userData.flapSpeed=12+Math.random()*6,t.userData.yOffset=Math.random()*Math.PI*2,this.birds.add(t)}this.birds.position.set(20,0,0),this.scene.add(this.birds)}createPetalTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.beginPath(),t.moveTo(32,5),t.bezierCurveTo(55,15,60,45,32,60),t.bezierCurveTo(4,45,9,15,32,5);const n=t.createLinearGradient(32,5,32,60);return n.addColorStop(0,"rgba(255, 180, 200, 1.0)"),n.addColorStop(.5,"rgba(255, 130, 170, 0.8)"),n.addColorStop(1,"rgba(255, 200, 220, 0.4)"),t.fillStyle=n,t.fill(),new er(e)}createPetals(){this.petalsGroup=new ai;const e=this.createPetalTexture();this.petalMat=new zt({map:e,color:16777215,transparent:!0,opacity:0,side:Vt,depthWrite:!1,blending:dn});const t=new An(1.2,1.2);for(let n=0;n<150;n++){const i=new nt(t,this.petalMat);i.position.set((Math.random()-.5)*150,(Math.random()-.5)*100+30,(Math.random()-.5)*80),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),i.userData={rx:(Math.random()-.5)*.1,ry:(Math.random()-.5)*.1,rz:(Math.random()-.5)*.1,vx:-.05-Math.random()*.08,vy:-.08-Math.random()*.1},this.petalsGroup.add(i)}this.scene.add(this.petalsGroup)}createInkScene(){this.mountain1=this.createProceduralMountain(1024,512,"rgba(20, 25, 30, 0.9)",0),this.mountain1.position.set(0,15,-80),this.scene.add(this.mountain1),this.mountain2=this.createProceduralMountain(1024,512,"rgba(60, 65, 70, 0.6)",1e3),this.mountain2.position.set(-30,10,-120),this.scene.add(this.mountain2),this.mountain3=this.createProceduralMountain(1024,512,"rgba(100, 105, 110, 0.4)",2e3),this.mountain3.position.set(30,5,-160),this.scene.add(this.mountain3);const e=this.createInkMoonTexture();this.inkMoon=new nt(new An(80,80),new zt({map:e,transparent:!0,opacity:0,blending:dn,depthWrite:!1})),this.inkMoon.position.set(0,30,-100),this.scene.add(this.inkMoon),this.createInkBirds(),this.createPetals(),this.textPoem1=this.createTextSprite("Năm tháng trôi như dòng thủy mặc,","Dancing Script",120,"#222222","0px",8),this.textPoem1.position.set(0,25,150),this.textPoem1.material.opacity=0,this.textPoem1.userData.writeProgress=0,this.updateTextSpriteWriting(this.textPoem1,0),this.scene.add(this.textPoem1),this.textPoem1Reflect=new nt(this.textPoem1.geometry,new zt({map:this.textPoem1.material.map,transparent:!0,opacity:0,side:Vt,depthTest:!1,blending:dn})),this.textPoem1Reflect.position.set(0,-12,150),this.textPoem1Reflect.scale.y=-.5,this.textPoem1Reflect.renderOrder=10,this.scene.add(this.textPoem1Reflect),this.textPoem2=this.createTextSprite("Tâm an nhiên tĩnh tại tựa ngàn non.","Dancing Script",120,"#222222","0px",8),this.textPoem2.position.set(0,10,40),this.textPoem2.material.opacity=0,this.textPoem2.userData.writeProgress=0,this.updateTextSpriteWriting(this.textPoem2,0),this.scene.add(this.textPoem2),this.textPoem2Reflect=new nt(this.textPoem2.geometry,new zt({map:this.textPoem2.material.map,transparent:!0,opacity:0,side:Vt,depthTest:!1,blending:dn})),this.textPoem2Reflect.position.set(0,-12,40),this.textPoem2Reflect.scale.y=-.5,this.textPoem2Reflect.renderOrder=10,this.scene.add(this.textPoem2Reflect)}transitionToInkWash(){ye.to(this.bloomPass,{strength:0,duration:4}),ye.to(this.scene.background,{r:.91,g:.89,b:.85,duration:5}),ye.to(this.scene.fog.color,{r:.91,g:.89,b:.85,duration:5}),this.stars&&ye.to(this.stars.material,{opacity:0,duration:4}),this.moon&&ye.to(this.moon.scale,{x:.01,y:.01,z:.01,duration:4}),ye.to(this.water.material.uniforms.waterColor.value,{r:.8,g:.82,b:.85,duration:5}),ye.to(this.water.material.uniforms.sunColor.value,{r:1,g:1,b:1,duration:5}),ye.to(this.water.material.uniforms.distortionScale,{value:1,duration:5}),this.mountain3.position.y=-40,this.mountain2.position.y=-40,this.mountain1.position.y=-40,ye.to(this.mountain3.material,{opacity:1,duration:4,delay:1}),ye.to(this.mountain3.position,{y:5,duration:7,delay:1,ease:"power2.out"}),ye.to(this.mountain2.material,{opacity:1,duration:4,delay:2}),ye.to(this.mountain2.position,{y:10,duration:7,delay:2,ease:"power2.out"}),ye.to(this.mountain1.material,{opacity:1,duration:4,delay:3}),ye.to(this.mountain1.position,{y:15,duration:7,delay:3,ease:"power2.out"}),ye.to(this.inkMoon.material,{opacity:1,duration:5,delay:4}),this.birdMats.forEach(e=>ye.to(e,{opacity:1,duration:3,delay:3})),this.birds.position.set(30,0,0)}transitionToDawn(){ye.to(this.bloomPass,{strength:1.2,duration:5}),ye.to(this.scene.background,{r:.8,g:.3,b:.4,duration:8,ease:"power2.inOut"}),ye.to(this.scene.fog.color,{r:1,g:.53,b:.67,duration:8}),ye.to(this.mountain1.material,{opacity:0,duration:5}),ye.to(this.mountain2.material,{opacity:0,duration:5}),ye.to(this.mountain3.material,{opacity:0,duration:5}),ye.to(this.inkMoon.material,{opacity:0,duration:5}),this.birdMats.forEach(s=>ye.to(s,{opacity:0,duration:3})),ye.to(this.petalMat,{opacity:0,duration:4}),this.stars&&ye.to(this.stars.material,{opacity:.9,duration:5}),this.moon&&ye.to(this.moon.scale,{x:1,y:1,z:1,duration:5}),ye.to(this.moon.material,{emissiveIntensity:2,duration:4}),ye.to(this.water.material.uniforms.waterColor.value,{r:.004,g:.1,b:.18,duration:8}),ye.to(this.water.material.uniforms.sunColor.value,{r:1,g:.5,b:.5,duration:8}),ye.to(this.water.material.uniforms.distortionScale,{value:3.7,duration:8});const e=this.stars.geometry.attributes.position.array,t=new Float32Array(e),n=this.heartTargetPositions,i={p:0};ye.to(i,{p:1,duration:8,ease:"power3.inOut",onUpdate:()=>{for(let s=0;s<e.length;s++)e[s]=t[s]+(n[s]-t[s])*i.p;this.stars.geometry.attributes.position.needsUpdate=!0}}),ye.to(this.camera.position,{z:120,y:30,duration:20,ease:"power1.out"})}createStars(){const e=new vn,t=new Au({color:16777215,size:.3,transparent:!0,opacity:.9,blending:jr}),n=[],i=new Ue;for(let s=0;s<8e3;s++){const o=(Math.random()-.5)*1200,a=(Math.random()-.5)*1200,l=(Math.random()-.5)*1200;this.starPositions.push(o,a,l);const c=Math.random();c>.8?i.setHex(8965375):c>.6?i.setHex(16768426):i.setHex(16777215),n.push(i.r,i.g,i.b);const h=Math.random()*Math.PI*2,u=16*Math.pow(Math.sin(h),3),f=13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h),m=(Math.random()-.5)*20;this.heartTargetPositions.push(u*5,f*5+30,m*3-100)}e.setAttribute("position",new Ct(this.starPositions,3)),e.setAttribute("color",new Ct(n,3)),t.vertexColors=!0,this.stars=new yv(e,t),this.scene.add(this.stars)}createShootingStars(){const e=new js(0,.1,10,3),t=new zt({color:16777215,transparent:!0,opacity:.8});for(let n=0;n<5;n++){const i=new nt(e,t);i.position.set(Math.random()*400-200,Math.random()*200+100,Math.random()*-200-50),i.rotation.z=-Math.PI/4,i.rotation.x=Math.PI/8,this.scene.add(i),this.shootingStars.push({mesh:i,speed:Math.random()*2+1})}}createMoon(){const e=new qa,t=new Ai(25,64,64),n=e.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"),i=new Xa({map:n,emissive:2236979,emissiveIntensity:.5,roughness:1,metalness:0});this.moon=new nt(t,i),this.moon.position.set(0,25,-50);const s=new Ai(26.5,64,64),o=new zt({color:4886754,transparent:!0,opacity:.15,side:Ht,blending:jr});this.moon.add(new nt(s,o));const a=new Rv(16777215,2.5);a.position.set(50,50,50),this.scene.add(a);const l=new Yc(8965375,2,200);l.position.set(-30,20,-100),this.scene.add(l),this.scene.add(new Cv(1118498)),this.scene.add(this.moon)}createWater(){const e=new An(2e3,2e3),n=new qa().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg",function(i){i.wrapS=i.wrapT=ks});this.water=new Bv(e,{textureWidth:512,textureHeight:512,waterNormals:n,sunDirection:new I(50,50,50).normalize(),sunColor:16777215,waterColor:72239,distortionScale:3.7,fog:!0}),this.water.rotation.x=-Math.PI/2,this.water.position.y=-10,this.scene.add(this.water)}createCake(){this.cakeGroup=new ai,this.cakeGroup.position.set(60,40,200);const t=new qa().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"),n=new Ai(1.5,32,32),i=new Xa({map:t,emissive:3355460,emissiveIntensity:.8,roughness:.5,metalness:.5});this.tinyMoon=new nt(n,i),this.cakeGroup.add(this.tinyMoon);const s=new js(.02,.02,.8,8),o=new Xa({color:14540253,metalness:.9,roughness:.1}),a=new nt(s,o);a.position.set(0,1.9,0),this.cakeGroup.add(a),this.flameLight=new Yc(16755200,0,100),this.flameLight.position.set(0,2.4,0);const l=new Ai(.15,16,16),c=new zt({color:16777215,transparent:!0,opacity:0});this.flameMesh=new nt(l,c);const h=new Ai(.08,16,16),u=new zt({color:16777215,transparent:!0,opacity:0});this.flameCore=new nt(h,u),this.flameMesh.add(this.flameCore),this.flameLight.add(this.flameMesh),this.cakeGroup.add(this.flameLight),this.scene.add(this.cakeGroup)}showCake(){ye.to(this.cakeGroup.position,{x:0,y:12,z:25,duration:6,ease:"power2.out"}),ye.to(this.flameLight,{intensity:4,duration:2,delay:4}),ye.to(this.flameMesh.material,{opacity:.8,duration:2,delay:4}),ye.to(this.flameCore.material,{opacity:1,duration:2,delay:4})}hideCake(){ye.to(this.cakeGroup.position,{x:-20,y:25,z:-50,duration:4,ease:"power3.in"}),ye.to(this.cakeGroup.scale,{x:0,y:0,z:0,duration:4,ease:"power2.in"})}blowOutCandles(){ye.to(this.flameLight,{intensity:0,duration:.1}),ye.to(this.flameMesh.scale,{x:0,y:0,z:0,duration:.1})}warpSpeed(){ye.to(this.camera.position,{z:40,duration:6,ease:"power4.inOut"}),ye.to(this.camera,{fov:110,duration:3,ease:"power2.in",yoyo:!0,repeat:1,onUpdate:()=>this.camera.updateProjectionMatrix()})}tiltDown(){ye.to(this.camera.position,{y:-5,z:60,duration:4,ease:"sine.inOut"}),ye.to(this.camera.rotation,{x:-Math.PI/12,duration:4,ease:"sine.inOut"})}tiltUp(){ye.to(this.camera.position,{y:15,z:40,duration:4,ease:"sine.inOut"}),ye.to(this.camera.rotation,{x:0,duration:4,ease:"sine.inOut"})}update(){const e=this.clock.getElapsedTime();this.stars&&(this.stars.rotation.y=e*.005),this.moon&&(this.moon.rotation.y=e*.05,this.moon.position.y=25+Math.sin(e*.5)*1.5),this.water&&(this.water.material.uniforms.time.value+=1/60),this.birds&&this.birdMats.length>0&&this.birdMats[0].opacity>0&&(this.birds.position.x-=.3,this.birds.children.forEach(t=>{t.position.y+=Math.sin(e*2+t.userData.yOffset)*.02;const n=Math.sin(e*t.userData.flapSpeed)*.6;t.userData.wingR.rotation.y=-n,t.userData.wingL.rotation.y=Math.PI-n})),this.petalsGroup&&this.petalMat.opacity>0&&this.petalsGroup.children.forEach(t=>{t.position.x+=t.userData.vx,t.position.y+=t.userData.vy,t.rotation.x+=t.userData.rx,t.rotation.y+=t.userData.ry,t.rotation.z+=t.userData.rz,t.position.y<-10&&(t.position.y=50+Math.random()*20,t.position.x=(Math.random()-.5)*150)}),this.shootingStars&&this.shootingStars.forEach(t=>{t.mesh.position.x-=t.speed,t.mesh.position.y-=t.speed*.5,t.mesh.position.x<-300&&(t.mesh.position.x=300+Math.random()*200,t.mesh.position.y=100+Math.random()*200)}),this.cakeGroup&&(this.tinyMoon.rotation.y=e*.5,this.tinyMoon.rotation.x=e*.2,this.flameLight&&this.flameLight.intensity>0&&(this.flameLight.intensity=3+Math.random()*2,this.flameMesh.scale.setScalar(1+Math.random()*.1),this.flameLight.position.x=(Math.random()-.5)*.05)),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}}class Gv{constructor(){this.ctx=null,this.masterGain=null,this.compressor=null,this.reverbBus=null,this.reverbGain=null,this.isStarted=!1,this.currentScene="none",this.spacePadNodes=[],this.spacePadGain=null,this.atmosphereGain=null,this.atmosphereNode=null,this.inkWashGain=null,this.inkWashNodes=[],this.diveWhooshNode=null,this.diveWhooshGain=null,this.dawnGain=null,this.yearCountInterval=null}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(30,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.005,this.ctx.currentTime),this.compressor.release.setValueAtTime(.25,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.88,this.ctx.currentTime),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.setupReverbBus()}this.ctx.state==="suspended"&&this.ctx.resume()}setupReverbBus(){this.reverbBus=this.ctx.createGain(),this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.setValueAtTime(.4,this.ctx.currentTime);const e=this.ctx.createDelay(),t=this.ctx.createDelay();e.delayTime.setValueAtTime(.28,this.ctx.currentTime),t.delayTime.setValueAtTime(.42,this.ctx.currentTime);const n=this.ctx.createGain();n.gain.setValueAtTime(.35,this.ctx.currentTime);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1600,this.ctx.currentTime),this.reverbBus.connect(e),this.reverbBus.connect(t),e.connect(i),t.connect(i),i.connect(n),n.connect(e),n.connect(t),e.connect(this.reverbGain),t.connect(this.reverbGain),this.reverbGain.connect(this.compressor)}start(){this.initContext(),!this.isStarted&&(this.isStarted=!0,this.currentScene="space",this.startSpaceAmbient(),this.startDeepAtmosphere())}playCameraWhoosh(e=2.5,t=1,n="approach"){if(!this.ctx)return;const i=this.ctx.currentTime,s=this.createNoiseBuffer("pink",e),o=this.ctx.createBufferSource();o.buffer=s;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.Q.value=1.4,n==="approach"?(a.frequency.setValueAtTime(140,i),a.frequency.exponentialRampToValueAtTime(850,i+e*.55),a.frequency.exponentialRampToValueAtTime(220,i+e)):(a.frequency.setValueAtTime(700,i),a.frequency.exponentialRampToValueAtTime(150,i+e));const l=this.ctx.createGain();l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(.38*t,i+e*.5),l.gain.exponentialRampToValueAtTime(.001,i+e),o.connect(a),a.connect(l),l.connect(this.compressor),l.connect(this.reverbBus),o.start(i);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",n==="approach"?(c.frequency.setValueAtTime(50,i),c.frequency.exponentialRampToValueAtTime(88,i+e*.6),c.frequency.exponentialRampToValueAtTime(42,i+e)):(c.frequency.setValueAtTime(80,i),c.frequency.exponentialRampToValueAtTime(38,i+e)),h.gain.setValueAtTime(.001,i),h.gain.linearRampToValueAtTime(.45*t,i+e*.45),h.gain.exponentialRampToValueAtTime(.001,i+e),c.connect(h),h.connect(this.compressor),c.start(i),c.stop(i+e+.1)}playWarpWhoosh(){this.initContext();const e=this.ctx.currentTime;this.playCameraWhoosh(3.2,1.2,"approach");const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(32,e+3),n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.65,e+.3),n.gain.exponentialRampToValueAtTime(.001,e+3),t.connect(n),n.connect(this.compressor),t.start(e),t.stop(e+3.1)}playStarClickGlow(){this.initContext();const e=this.ctx.currentTime;this.playCameraWhoosh(1.8,.65,"approach"),this.playCinematicRhodes([146.83,220,329.63],e,.28,3.5)}playMoonApproachWhoosh(){if(!this.ctx)return;const e=this.ctx.currentTime,t=6,n=this.createNoiseBuffer("pink",t),i=this.ctx.createBufferSource();i.buffer=n;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.Q.value=1.6,s.frequency.setValueAtTime(120,e),s.frequency.exponentialRampToValueAtTime(980,e+3.8),s.frequency.exponentialRampToValueAtTime(250,e+t);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.42,e+3.5),o.gain.exponentialRampToValueAtTime(.001,e+t),i.connect(s),s.connect(o),o.connect(this.compressor),o.connect(this.reverbBus),i.start(e);const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(42,e),a.frequency.exponentialRampToValueAtTime(92,e+3.8),a.frequency.exponentialRampToValueAtTime(48,e+t),l.gain.setValueAtTime(.001,e),l.gain.linearRampToValueAtTime(.5,e+3.2),l.gain.exponentialRampToValueAtTime(.001,e+t),a.connect(l),l.connect(this.compressor),a.start(e),a.stop(e+t+.1)}startSpaceAmbient(){const e=this.ctx.currentTime;this.spacePadGain=this.ctx.createGain(),this.spacePadGain.gain.setValueAtTime(.001,e),this.spacePadGain.gain.linearRampToValueAtTime(.24,e+4);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(580,e);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.value=.07,i.gain.value=160,n.connect(t.frequency),n.start(e);const s=[146.83,185,220,277.18,329.63];s.forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=a%2===0?"sawtooth":"triangle",l.frequency.value=o+(Math.random()-.5)*.7,c.gain.value=.2/s.length,l.connect(c),c.connect(t),l.start(e),this.spacePadNodes.push({osc:l,gain:c})}),t.connect(this.spacePadGain),this.spacePadGain.connect(this.compressor),this.spacePadGain.connect(this.reverbBus)}startDeepAtmosphere(){const e=this.ctx.currentTime,t=this.createNoiseBuffer("pink",10);this.atmosphereNode=this.ctx.createBufferSource(),this.atmosphereNode.buffer=t,this.atmosphereNode.loop=!0;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(220,e),this.atmosphereGain=this.ctx.createGain(),this.atmosphereGain.gain.setValueAtTime(.001,e),this.atmosphereGain.gain.linearRampToValueAtTime(.14,e+5),this.atmosphereNode.connect(n),n.connect(this.atmosphereGain),this.atmosphereGain.connect(this.compressor),this.atmosphereNode.start(e)}playTitleChime(){if(!this.ctx)return;const e=this.ctx.currentTime;this.playCinematicRhodes([146.83,185,220,277.18],e,.3,4)}startYearCount(){if(!this.ctx||this.yearCountInterval)return;let e=0;this.yearCountInterval=setInterval(()=>{if(!this.ctx)return;const t=this.ctx.currentTime,n=e%2===0?110:146.83;this.playWarmPulse(n,t,.16,.45),e++},200)}stopYearCount(){if(this.yearCountInterval&&(clearInterval(this.yearCountInterval),this.yearCountInterval=null),!this.ctx)return;const e=this.ctx.currentTime;this.playCinematicRhodes([146.83,220,293.66,369.99],e,.35,4.5)}playWhisper(e){if(!this.ctx)return;const t=this.ctx.currentTime,n=[[146.83,220,293.66,369.99],[123.47,185,246.94,293.66],[110,164.81,220,329.63],[146.83,220,277.18,329.63],[146.83,220,293.66,440]],i=n[e%n.length];this.playCinematicRhodes(i,t,.28,4.2)}playCakeApproachWhoosh(){if(!this.ctx)return;const e=this.ctx.currentTime;this.playCameraWhoosh(3.2,.85,"approach");const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.06,e+1.2),n.gain.exponentialRampToValueAtTime(.001,e+6),t.connect(n),n.connect(this.reverbBus),t.start(e),t.stop(e+6.1)}playCandleBlow(){if(!this.ctx)return;const e=this.ctx.currentTime,t=this.createNoiseBuffer("white",1),n=this.ctx.createBufferSource();n.buffer=t;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1400,e),i.frequency.exponentialRampToValueAtTime(120,e+.7);const s=this.ctx.createGain();s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.32,e+.1),s.gain.exponentialRampToValueAtTime(.001,e+.8),n.connect(i),i.connect(s),s.connect(this.compressor),n.start(e),this.playCinematicRhodes([220,329.63,440],e+.2,.25,4)}transitionToInkWash(){if(!this.ctx||this.currentScene==="inkwash")return;this.currentScene="inkwash";const e=this.ctx.currentTime;this.spacePadGain&&this.spacePadGain.gain.linearRampToValueAtTime(.001,e+3),this.atmosphereGain&&this.atmosphereGain.gain.linearRampToValueAtTime(.001,e+3),this.playCameraWhoosh(3.6,.9,"approach"),this.startInkWashCinematicScore()}startInkWashCinematicScore(){const e=this.ctx.currentTime;this.inkWashGain=this.ctx.createGain(),this.inkWashGain.gain.setValueAtTime(.001,e),this.inkWashGain.gain.linearRampToValueAtTime(.28,e+3.5);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(680,e);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.value=.06,i.gain.value=180,n.connect(t.frequency),n.start(e);const s=[146.83,220,293.66,392];s.forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=a<2?"sawtooth":"triangle",l.frequency.value=o,c.gain.value=.22/s.length,l.connect(c),c.connect(t),l.start(e),this.inkWashNodes.push({osc:l,gain:c})}),t.connect(this.inkWashGain),this.inkWashGain.connect(this.compressor),this.inkWashGain.connect(this.reverbBus)}startInkWashDiveWhoosh(){if(!this.ctx||this.currentScene!=="inkwash")return;const e=this.ctx.currentTime,t=this.createNoiseBuffer("pink",22);this.diveWhooshNode=this.ctx.createBufferSource(),this.diveWhooshNode.buffer=t;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.Q.value=1.6,n.frequency.setValueAtTime(160,e);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=.18,s.gain.value=350,i.connect(n.frequency),i.start(e),i.stop(e+21),this.diveWhooshGain=this.ctx.createGain(),this.diveWhooshGain.gain.setValueAtTime(.001,e),this.diveWhooshGain.gain.linearRampToValueAtTime(.32,e+3),this.diveWhooshGain.gain.setValueAtTime(.32,e+17),this.diveWhooshGain.gain.linearRampToValueAtTime(.001,e+21),this.diveWhooshNode.connect(n),n.connect(this.diveWhooshGain),this.diveWhooshGain.connect(this.compressor),this.diveWhooshGain.connect(this.reverbBus),this.diveWhooshNode.start(e),this.diveWhooshNode.stop(e+21.5)}playPoemChime(e){if(!this.ctx)return;const t=this.ctx.currentTime;e===1?this.playCinematicRhodes([146.83,220,293.66,440],t,.32,4.5):this.playCinematicRhodes([146.83,220,329.63,440],t,.32,5)}transitionToDawn(){if(!this.ctx||this.currentScene==="dawn")return;this.currentScene="dawn";const e=this.ctx.currentTime;this.spacePadGain&&this.spacePadGain.gain.linearRampToValueAtTime(1e-4,e+2.5),this.atmosphereGain&&this.atmosphereGain.gain.linearRampToValueAtTime(1e-4,e+2.5),this.inkWashGain&&this.inkWashGain.gain.linearRampToValueAtTime(1e-4,e+2.5),this.diveWhooshGain&&this.diveWhooshGain.gain.linearRampToValueAtTime(1e-4,e+1),this.yearCountInterval&&(clearInterval(this.yearCountInterval),this.yearCountInterval=null),this.playCameraWhoosh(4,1,"approach"),this.dawnGain=this.ctx.createGain(),this.dawnGain.gain.setValueAtTime(.001,e),this.dawnGain.gain.linearRampToValueAtTime(.32,e+5),this.dawnGain.gain.setValueAtTime(.32,e+6),this.dawnGain.gain.linearRampToValueAtTime(1e-4,e+14);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(1400,e+6);const n=[73.42,146.83,220,293.66];n.forEach((i,s)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type=s<2?"sawtooth":"triangle",o.frequency.value=i,a.gain.value=.25/n.length,o.connect(a),a.connect(t),o.start(e),o.stop(e+14.2)}),t.connect(this.dawnGain),this.dawnGain.connect(this.compressor),this.dawnGain.connect(this.reverbBus)}playConfettiSparkles(){if(!this.ctx)return;const e=this.ctx.currentTime;this.playCinematicRhodes([73.42,146.83,220,293.66,369.99],e,.35,6)}playCinematicRhodes(e=[],t,n=.28,i=4){this.ctx&&e.forEach((s,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(s,t),l.type="lowpass",l.frequency.setValueAtTime(s*3.2,t),l.frequency.exponentialRampToValueAtTime(s*1.3,t+.5);const h=n/e.length;c.gain.setValueAtTime(.001,t),c.gain.linearRampToValueAtTime(h,t+.02),c.gain.exponentialRampToValueAtTime(1e-4,t+i),a.connect(l),l.connect(c),c.connect(this.compressor),c.connect(this.reverbBus),a.start(t),a.stop(t+i+.1)})}playWarmPulse(e,t,n=.18,i=.5){if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(e,t),o.type="lowpass",o.frequency.setValueAtTime(380,t),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(n,t+.05),a.gain.exponentialRampToValueAtTime(1e-4,t+i),s.connect(o),o.connect(a),a.connect(this.compressor),s.start(t),s.stop(t+i+.05)}createNoiseBuffer(e="pink",t=2){const n=this.ctx.sampleRate,i=n*t,s=this.ctx.createBuffer(1,i,n),o=s.getChannelData(0);if(e==="white")for(let a=0;a<i;a++)o[a]=Math.random()*2-1;else{let a=0,l=0,c=0,h=0,u=0,f=0,m=0;for(let g=0;g<i;g++){const _=Math.random()*2-1;a=.99886*a+_*.0555179,l=.99332*l+_*.0750759,c=.969*c+_*.153852,h=.8665*h+_*.3104856,u=.55*u+_*.5329522,f=-.7616*f-_*.016898,o[g]=(a+l+c+h+u+f+m+_*.5362)*.11,m=_*.115926}}return s}}function Vv(){return new Gv}function kv(r){navigator.mediaDevices.getUserMedia({audio:!0}).then(e=>{const t=new(window.AudioContext||window.webkitAudioContext),n=t.createAnalyser(),i=t.createMediaStreamSource(e),s=t.createScriptProcessor(2048,1,1);n.smoothingTimeConstant=.8,n.fftSize=1024,i.connect(n),n.connect(s),s.connect(t.destination),s.onaudioprocess=function(){const o=new Uint8Array(n.frequencyBinCount);n.getByteFrequencyData(o);let a=0;const l=o.length;for(let h=0;h<l;h++)a+=o[h];a/l>40&&(s.disconnect(),i.disconnect(),e.getTracks().forEach(h=>h.stop()),r())}}).catch(e=>{console.warn("Microphone access denied or not supported.",e),window.addEventListener("click",r,{once:!0})})}var Ko={};(function r(e,t,n,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),R=P.getContext("2d");R.fillRect(0,0,1,1);var H=P.transferToImageBitmap();R.createPattern(H,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var R=t.exports.Promise,H=R!==void 0?R:e.Promise;return typeof H=="function"?new H(P):(P(l,l),null)}var h=function(P,R){return{transform:function(H){if(P)return H;if(R.has(H))return R.get(H);var N=new OffscreenCanvas(H.width,H.height),k=N.getContext("2d");return k.drawImage(H,0,0),R.set(H,N),N},clear:function(){R.clear()}}}(a,new Map),u=function(){var P=Math.floor(16.666666666666668),R,H,N={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(J){var re=Math.random();return N[re]=requestAnimationFrame(function Q(le){k===le||k+P-1<le?(k=le,delete N[re],J()):N[re]=requestAnimationFrame(Q)}),re},H=function(J){N[J]&&cancelAnimationFrame(N[J])}):(R=function(J){return setTimeout(J,P)},H=function(J){return clearTimeout(J)}),{frame:R,cancel:H}}(),f=function(){var P,R,H={};function N(k){function J(re,Q){k.postMessage({options:re||{},callback:Q})}k.init=function(Q){var le=Q.transferControlToOffscreen();k.postMessage({canvas:le},[le])},k.fire=function(Q,le,pe){if(R)return J(Q,null),R;var fe=Math.random().toString(36).slice(2);return R=c(function(xe){function O(qe){qe.data.callback===fe&&(delete H[fe],k.removeEventListener("message",O),R=null,h.clear(),pe(),xe())}k.addEventListener("message",O),J(Q,fe),H[fe]=O.bind(null,{data:{callback:fe}})}),R},k.reset=function(){k.postMessage({reset:!0});for(var Q in H)H[Q](),delete H[Q]}}return function(){if(P)return P;if(!n&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([k])))}catch(J){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",J),null}N(P)}return P}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(P,R){return R?R(P):P}function _(P){return P!=null}function p(P,R,H){return g(P&&_(P[R])?P[R]:m[R],H)}function d(P){return P<0?0:Math.floor(P)}function M(P,R){return Math.floor(Math.random()*(R-P))+P}function x(P){return parseInt(P,16)}function y(P){return P.map(A)}function A(P){var R=String(P).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:x(R.substring(0,2)),g:x(R.substring(2,4)),b:x(R.substring(4,6))}}function C(P){var R=p(P,"origin",Object);return R.x=p(R,"x",Number),R.y=p(R,"y",Number),R}function E(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function U(P){var R=P.getBoundingClientRect();P.width=R.width,P.height=R.height}function v(P){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=P,R}function T(P,R,H,N,k,J,re,Q,le){P.save(),P.translate(R,H),P.rotate(J),P.scale(N,k),P.arc(0,0,1,re,Q,le),P.restore()}function V(P){var R=P.angle*(Math.PI/180),H=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-R+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function G(P,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var H=R.tick++/R.totalTicks,N=R.x+R.random*R.tiltCos,k=R.y+R.random*R.tiltSin,J=R.wobbleX+R.random*R.tiltCos,re=R.wobbleY+R.random*R.tiltSin;if(P.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-H)+")",P.beginPath(),o&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))P.fill(K(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(J-N)*.1,Math.abs(re-k)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var Q=Math.PI/10*R.wobble,le=Math.abs(J-N)*.1,pe=Math.abs(re-k)*.1,fe=R.shape.bitmap.width*R.scalar,xe=R.shape.bitmap.height*R.scalar,O=new DOMMatrix([Math.cos(Q)*le,Math.sin(Q)*le,-Math.sin(Q)*pe,Math.cos(Q)*pe,R.x,R.y]);O.multiplySelf(new DOMMatrix(R.shape.matrix));var qe=P.createPattern(h.transform(R.shape.bitmap),"no-repeat");qe.setTransform(O),P.globalAlpha=1-H,P.fillStyle=qe,P.fillRect(R.x-fe/2,R.y-xe/2,fe,xe),P.globalAlpha=1}else if(R.shape==="circle")P.ellipse?P.ellipse(R.x,R.y,Math.abs(J-N)*R.ovalScalar,Math.abs(re-k)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):T(P,R.x,R.y,Math.abs(J-N)*R.ovalScalar,Math.abs(re-k)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var se=Math.PI/2*3,Me=4*R.scalar,de=8*R.scalar,We=R.x,be=R.y,w=5,S=Math.PI/w;w--;)We=R.x+Math.cos(se)*de,be=R.y+Math.sin(se)*de,P.lineTo(We,be),se+=S,We=R.x+Math.cos(se)*Me,be=R.y+Math.sin(se)*Me,P.lineTo(We,be),se+=S;else P.moveTo(Math.floor(R.x),Math.floor(R.y)),P.lineTo(Math.floor(R.wobbleX),Math.floor(k)),P.lineTo(Math.floor(J),Math.floor(re)),P.lineTo(Math.floor(N),Math.floor(R.wobbleY));return P.closePath(),P.fill(),R.tick<R.totalTicks}function $(P,R,H,N,k){var J=R.slice(),re=P.getContext("2d"),Q,le,pe=c(function(fe){function xe(){Q=le=null,re.clearRect(0,0,N.width,N.height),h.clear(),k(),fe()}function O(){n&&!(N.width===i.width&&N.height===i.height)&&(N.width=P.width=i.width,N.height=P.height=i.height),!N.width&&!N.height&&(H(P),N.width=P.width,N.height=P.height),re.clearRect(0,0,N.width,N.height),J=J.filter(function(qe){return G(re,qe)}),J.length?Q=u.frame(O):xe()}Q=u.frame(O),le=xe});return{addFettis:function(fe){return J=J.concat(fe),pe},canvas:P,promise:pe,reset:function(){Q&&u.cancel(Q),le&&le()}}}function L(P,R){var H=!P,N=!!p(R||{},"resize"),k=!1,J=p(R,"disableForReducedMotion",Boolean),re=s&&!!p(R||{},"useWorker"),Q=re?f():null,le=H?E:U,pe=P&&Q?!!P.__confetti_initialized:!1,fe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,xe;function O(se,Me,de){for(var We=p(se,"particleCount",d),be=p(se,"angle",Number),w=p(se,"spread",Number),S=p(se,"startVelocity",Number),W=p(se,"decay",Number),ne=p(se,"gravity",Number),te=p(se,"drift",Number),ie=p(se,"colors",y),Se=p(se,"ticks",Number),ce=p(se,"shapes"),_e=p(se,"scalar"),we=!!p(se,"flat"),Ie=C(se),ee=We,Ye=[],ze=P.width*Ie.x,Pe=P.height*Ie.y;ee--;)Ye.push(V({x:ze,y:Pe,angle:be,spread:w,startVelocity:S,color:ie[ee%ie.length],shape:ce[M(0,ce.length)],ticks:Se,decay:W,gravity:ne,drift:te,scalar:_e,flat:we}));return xe?xe.addFettis(Ye):(xe=$(P,Ye,le,Me,de),xe.promise)}function qe(se){var Me=J||p(se,"disableForReducedMotion",Boolean),de=p(se,"zIndex",Number);if(Me&&fe)return c(function(S){S()});H&&xe?P=xe.canvas:H&&!P&&(P=v(de),document.body.appendChild(P)),N&&!pe&&le(P);var We={width:P.width,height:P.height};Q&&!pe&&Q.init(P),pe=!0,Q&&(P.__confetti_initialized=!0);function be(){if(Q){var S={getBoundingClientRect:function(){if(!H)return P.getBoundingClientRect()}};le(S),Q.postMessage({resize:{width:S.width,height:S.height}});return}We.width=We.height=null}function w(){xe=null,N&&(k=!1,e.removeEventListener("resize",be)),H&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,pe=!1)}return N&&!k&&(k=!0,e.addEventListener("resize",be,!1)),Q?Q.fire(se,We,w):O(se,We,w)}return qe.reset=function(){Q&&Q.reset(),xe&&xe.reset()},qe}var F;function z(){return F||(F=L(null,{useWorker:!0,resize:!0})),F}function K(P,R,H,N,k,J,re){var Q=new Path2D(P),le=new Path2D;le.addPath(Q,new DOMMatrix(R));var pe=new Path2D;return pe.addPath(le,new DOMMatrix([Math.cos(re)*k,Math.sin(re)*k,-Math.sin(re)*J,Math.cos(re)*J,H,N])),pe}function j(P){if(!o)throw new Error("path confetti are not supported in this browser");var R,H;typeof P=="string"?R=P:(R=P.path,H=P.matrix);var N=new Path2D(R),k=document.createElement("canvas"),J=k.getContext("2d");if(!H){for(var re=1e3,Q=re,le=re,pe=0,fe=0,xe,O,qe=0;qe<re;qe+=2)for(var se=0;se<re;se+=2)J.isPointInPath(N,qe,se,"nonzero")&&(Q=Math.min(Q,qe),le=Math.min(le,se),pe=Math.max(pe,qe),fe=Math.max(fe,se));xe=pe-Q,O=fe-le;var Me=10,de=Math.min(Me/xe,Me/O);H=[de,0,0,de,-Math.round(xe/2+Q)*de,-Math.round(O/2+le)*de]}return{type:"path",path:R,matrix:H}}function Z(P){var R,H=1,N="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?R=P:(R=P.text,H="scalar"in P?P.scalar:H,k="fontFamily"in P?P.fontFamily:k,N="color"in P?P.color:N);var J=10*H,re=""+J+"px "+k,Q=new OffscreenCanvas(J,J),le=Q.getContext("2d");le.font=re;var pe=le.measureText(R),fe=Math.ceil(pe.actualBoundingBoxRight+pe.actualBoundingBoxLeft),xe=Math.ceil(pe.actualBoundingBoxAscent+pe.actualBoundingBoxDescent),O=2,qe=pe.actualBoundingBoxLeft+O,se=pe.actualBoundingBoxAscent+O;fe+=O+O,xe+=O+O,Q=new OffscreenCanvas(fe,xe),le=Q.getContext("2d"),le.font=re,le.fillStyle=N,le.fillText(R,qe,se);var Me=1/H;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[Me,0,0,Me,-fe*Me/2,-xe*Me/2]}}t.exports=function(){return z().apply(this,arguments)},t.exports.reset=function(){z().reset()},t.exports.create=L,t.exports.shapeFromPath=j,t.exports.shapeFromText=Z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ko,!1);const Hv=Ko.exports;Ko.exports.create;const Ka=document.getElementById("trigger-star"),Zc=document.getElementById("hint-text"),Wv=document.getElementById("ui-act1");let ve,it,Mo=!1;const Ze=ye.timeline({paused:!0});document.fonts.ready.then(()=>{Zc.innerText="Đeo tai nghe và chạm nhẹ vào vì sao...",ve=new zv,ve.init(document.getElementById("canvas-container")),it=Vv(),Xv(),Ka.addEventListener("click",()=>{Mo||(Mo=!0,it.start(),it.playStarClickGlow(),ye.to(Ka,{scale:150,opacity:0,duration:2,ease:"power3.in"}),ye.to(Ka,{boxShadow:"0 0 100px 50px rgba(255,255,255,1)",duration:1},"<"),ye.to(Zc,{opacity:0,duration:.5}),setTimeout(()=>{Wv.style.display="none",Ze.play()},1800))}),Du()});function Xv(){Ze.add(()=>{ve.warpSpeed(),it.playMoonApproachWhoosh()},0),Ze.to(ve.textName.material,{opacity:1,duration:3,ease:"power2.inOut"},5),Ze.fromTo(ve.textName.position,{y:2},{y:6,duration:4,ease:"power2.out"},5),Ze.add(()=>it.playTitleChime(),5),Ze.to(ve.textYear.material,{opacity:1,duration:3},7),Ze.fromTo(ve.textYear.position,{y:-2},{y:2,duration:4,ease:"power2.out"},7),Ze.add(()=>it.startYearCount(),8);const r={val:2005};Ze.to(r,{val:2026,duration:5,ease:"slow(0.5, 0.8, false)",onUpdate:()=>{const e=Math.floor(r.val).toString();ve.updateTextSprite(ve.textYear,`05.08.${e}`,"Montserrat",80,"#aaccff","10px")}},8),Ze.fromTo(ve.textYear.scale,{x:.5,y:.5,z:.5},{x:1,y:1,z:1,duration:5,ease:"power1.inOut"},8),Ze.add(()=>it.stopYearCount(),13),Ze.to(ve.textName.material,{opacity:0,duration:2},14),Ze.to(ve.textYear.material,{opacity:0,duration:2},14),Ze.add(()=>{ve.tiltDown(),it.playCameraWhoosh(2.8,.7,"approach")},15);for(let e=0;e<5;e++){let t=19+e*6;const n=ve.whispers[e];Ze.add(()=>it.playWhisper(e),t),Ze.fromTo(n.material,{opacity:0},{opacity:1,duration:2,ease:"power2.out"},t),Ze.fromTo(n.position,{y:-2,z:20},{y:2,z:10,duration:5,ease:"power1.out"},t),Ze.to(n.material,{opacity:0,duration:2},t+4)}Ze.add(()=>{ve.tiltUp(),it.playCameraWhoosh(2.5,.75,"approach")},48),Ze.add(()=>{ve.showCake(),it.playCakeApproachWhoosh()},49),Ze.to(ve.textWish.material,{opacity:1,duration:3},51),Ze.fromTo(ve.textWish.position,{y:5},{y:8,duration:4,ease:"power2.out"},51),Ze.add(()=>{Ze.pause(),kv(()=>{Mo&&Zo()})},56)}let Ks=!1;function Zo(){if(Ks)return;Ks=!0;const r=ye.timeline();window.act3Timeline=r,ve.blowOutCandles(),it.playCandleBlow(),r.to(ve.textWish.material,{opacity:0,duration:1},0),r.add(()=>ve.hideCake(),.5),r.add(()=>{ve.transitionToInkWash(),it.transitionToInkWash()},1),r.to(ve.camera.position,{z:300,y:50,duration:4,ease:"power2.out"},1),r.to(ve.camera.rotation,{x:-Math.PI/12,duration:4,ease:"power2.out"},1),r.add(()=>it.startInkWashDiveWhoosh(),5),r.to(ve.camera.position,{z:-20,y:3,duration:21,ease:"none"},5),r.to(ve.camera.rotation,{x:-Math.PI/48,duration:21,ease:"none"},5),r.to(ve.birdMats,{opacity:.8,duration:3},4),r.set(ve.textPoem1.material,{opacity:1},10),r.set(ve.textPoem1Reflect.material,{opacity:.6},10),r.add(()=>it.playPoemChime(1),10),r.to(ve.textPoem1.userData,{writeProgress:1,duration:3,ease:"power1.inOut",onUpdate:()=>ve.updateTextSpriteWriting(ve.textPoem1,ve.textPoem1.userData.writeProgress)},10),r.to(ve.textPoem1.material,{opacity:0,duration:1.5},13.5),r.to(ve.textPoem1Reflect.material,{opacity:0,duration:1.5},13.5),r.to(ve.petalMat,{opacity:.7,duration:4},10),r.set(ve.textPoem2.material,{opacity:1},17.5),r.set(ve.textPoem2Reflect.material,{opacity:.6},17.5),r.add(()=>it.playPoemChime(2),17.5),r.to(ve.textPoem2.userData,{writeProgress:1,duration:3,ease:"power1.inOut",onUpdate:()=>ve.updateTextSpriteWriting(ve.textPoem2,ve.textPoem2.userData.writeProgress)},17.5),r.to(ve.textPoem2.material,{opacity:0,duration:1.5},21),r.to(ve.textPoem2Reflect.material,{opacity:0,duration:1.5},21),r.add(()=>{ve.transitionToDawn(),it.transitionToDawn()},26),r.to(ve.camera.rotation,{x:0,duration:2},26),r.to(ve.textHBD.material,{opacity:1,duration:3},33),r.fromTo(ve.textHBD.position,{z:40,y:14},{z:20,y:12,duration:5,ease:"power2.out"},33),r.to(ve.textLove.material,{opacity:1,duration:3},36),r.fromTo(ve.textLove.position,{z:45,y:9},{z:25,y:7,duration:5,ease:"power2.out"},36),r.add(()=>{qv(),it.playConfettiSparkles()},33)}function qv(){const e=Date.now()+15e3,t={startVelocity:30,spread:360,ticks:100,zIndex:100,colors:["#ffffff","#ff7e5f","#feb47b","#ffd700"]},n=setInterval(function(){const i=e-Date.now();if(i<=0)return clearInterval(n);const s=50*(i/15e3);Hv(Object.assign({},t,{particleCount:s,origin:{x:Math.random(),y:Math.random()-.2}}))},250)}function Du(){requestAnimationFrame(Du),ve&&ve.update()}window.skipToCake=()=>{console.log("⏩ Bỏ qua Intro, chuyển đến cảnh Bánh Sinh Nhật..."),Ze.seek(49),it&&it.playCakeAppear()};window.skipToInkWash=()=>{console.log("⏩ Bỏ qua thổi nến, tiến thẳng vào Sơn Thủy Nguyệt Hà..."),window.act3Timeline&&window.act3Timeline.kill(),Ze.seek(56),it&&it.transitionToInkWash(),ye.killTweensOf(ve.camera.position),ye.killTweensOf(ve.camera.rotation),ve.camera.position.set(0,15,40),ve.camera.rotation.set(0,0,0),Ks=!1,Zo()};window.skipToDawn=()=>{console.log("⏩ Chuyển thẳng đến màn bùng nổ cuối cùng (Dawn Finale)..."),window.act3Timeline?(window.act3Timeline.seek(26),it&&it.transitionToDawn()):(Ze.seek(56),ye.killTweensOf(ve.camera.position),ye.killTweensOf(ve.camera.rotation),ve.camera.position.set(0,15,40),ve.camera.rotation.set(0,0,0),Ks=!1,Zo(),setTimeout(()=>{window.act3Timeline.seek(26),it&&it.transitionToDawn()},50))};
