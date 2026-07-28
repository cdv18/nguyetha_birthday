(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function Xn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Nh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},is={duration:.5,overwrite:!1,delay:0},Xo,Ue,le,Mn=1e8,te=1/Mn,Mo=Math.PI*2,Tf=Mo/4,Ef=0,Oh=Math.sqrt,bf=Math.cos,wf=Math.sin,Ie=function(t){return typeof t=="string"},ge=function(t){return typeof t=="function"},Jn=function(t){return typeof t=="number"},qo=function(t){return typeof t>"u"},On=function(t){return typeof t=="object"},Qe=function(t){return t!==!1},Yo=function(){return typeof window<"u"},Ts=function(t){return ge(t)||Ie(t)},Fh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ge=Array.isArray,Af=/random\([^)]+\)/g,Cf=/,\s*/g,Pl=/(?:-?\.?\d|\.)+/gi,Bh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gh=/[+-]=-?[.\d]+/,Rf=/[^,'"\[\]\s]+/gi,Pf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Dn,yo,jo,dn={},na={},zh,kh=function(t){return(na=Er(t,dn))&&rn},Zo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},rs=function(t,e){return!e&&console.warn(t)},Hh=function(t,e){return t&&(dn[t]=e)&&na&&(na[t]=e)||dn},ss=function(){return 0},Lf={suppressEvents:!0,isStart:!0,kill:!1},Ks={suppressEvents:!0,kill:!1},Df={suppressEvents:!0},Ko={},mi=[],So={},Vh,ln={},La={},Ll=30,$s=[],$o="",Jo=function(t){var e=t[0],n,i;if(On(e)||ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=$s.length;i--&&!$s[i].targetTest(e););n=$s[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new uu(t[i],n)))||t.splice(i,1);return t},ki=function(t){return t._gsap||Jo(yn(t))[0]._gsap},Wh=function(t,e,n){return(n=t[e])&&ge(n)?t[e]():qo(n)&&t.getAttribute&&t.getAttribute(e)||n},tn=function(t,e){return(t=t.split(",")).forEach(e)||t},ve=function(t){return Math.round(t*1e5)/1e5||0},he=function(t){return Math.round(t*1e7)/1e7||0},Mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},If=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ia=function(){var t=mi.length,e=mi.slice(0),n,i;for(So={},mi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qo=function(t){return!!(t._initted||t._startAt||t.add)},Xh=function(t,e,n,i){mi.length&&!Ue&&ia(),t.render(e,n,!!(Ue&&e<0&&Qo(t))),mi.length&&!Ue&&ia()},qh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Rf).length<2?e:Ie(t)?t.trim():t},Yh=function(t){return t},pn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Uf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Er=function(t,e){for(var n in e)t[n]=e[n];return t},Dl=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=On(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ra=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Yr=function(t){var e=t.parent||ue,n=t.keyframes?Uf(Ge(t.keyframes)):pn;if(Qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Nf=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jh=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Hi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Of=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},To=function(t,e,n,i){return t._startAt&&(Ue?t._startAt.revert(Ks):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ff=function r(t){return!t||t._ts&&r(t.parent)},Il=function(t){return t._repeat?br(t._tTime,t=t.duration()+t._rDelay)*t:0},br=function(t,e){var n=Math.floor(t=he(t/e));return t&&n===t?n-1:n},sa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ma=function(t){return t._end=he(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},ya=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=he(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ma(t),n._dirty||Hi(n,t)),t},Zh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=sa(t.rawTime(),e),(!e._dur||ps(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),Hi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Un=function(t,e,n,i){return e.parent&&xi(e),e._start=he((Jn(n)?n:n||t!==ue?_n(t,n,e):t._time)+e._delay),e._end=he(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jh(t,e,"_first","_last",t._sort?"_start":0),Eo(e)||(t._recent=e),i||Zh(t,e),t._ts<0&&ya(t,t._tTime),t},Kh=function(t,e){return(dn.ScrollTrigger||Zo("scrollTrigger",e))&&dn.ScrollTrigger.create(e,t)},$h=function(t,e,n,i,s){if(el(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Vh!==cn.frame)return mi.push(t),t._lazy=[s,i],1},Bf=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Eo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gf=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Bf(t)&&!(!t._initted&&Eo(t))||(t._ts<0||t._dp._ts<0)&&!Eo(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=ps(0,t._tDur,e),h=br(l,a),t._yoyo&&h&1&&(o=1-o),h!==br(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ue||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&$h(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&To(t,e,n,!0),t._onUpdate&&!n&&hn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&hn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&xi(t,1),!n&&!Ue&&(hn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},zf=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wr=function(t,e,n,i){var s=t._repeat,o=he(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:he(o*(s+1)+t._rDelay*s):o,a>0&&!i&&ya(t,t._tTime=t._tDur*a),t.parent&&Ma(t),n||Hi(t.parent,t),t},Ul=function(t){return t instanceof Je?Hi(t):wr(t,t._dur)},kf={_start:0,endTime:ss,totalDuration:ss},_n=function r(t,e,n){var i=t.labels,s=t._recent||kf,o=t.duration()>=Mn?s.endTime(!1):t._dur,a,l,c;return Ie(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ge(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},jr=function(t,e,n){var i=Jn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Qe(l.vars.inherit)&&l.parent;o.immediateRender=Qe(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Me(e[0],o,e[s+1])},Si=function(t,e){return t||t===0?e(t):e},ps=function(t,e,n){return n<t?t:n>e?e:n},Be=function(t,e){return!Ie(t)||!(e=Pf.exec(t))?"":e[1]},Hf=function(t,e,n){return Si(n,function(i){return ps(t,e,i)})},bo=[].slice,Jh=function(t,e){return t&&On(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&On(t[0]))&&!t.nodeType&&t!==Dn},Vf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ie(i)&&!e||Jh(i,1)?(s=n).push.apply(s,yn(i)):n.push(i)})||n},yn=function(t,e,n){return le&&!e&&le.selector?le.selector(t):Ie(t)&&!n&&(yo||!Ar())?bo.call((e||jo).querySelectorAll(t),0):Ge(t)?Vf(t,n):Jh(t)?bo.call(t,0):t?[t]:[]},wo=function(t){return t=yn(t)[0]||rs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yn(e,n.querySelectorAll?n:n===t?rs("Invalid scope")||jo.createElement("div"):t)}},Qh=function(t){return t.sort(function(){return .5-Math.random()})},tu=function(t){if(ge(t))return t;var e=On(t)?t:{each:t},n=Vi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ie(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,m,_){var g=(_||e).length,d=o[g],p,x,v,S,w,A,E,I,M;if(!d){if(M=e.grid==="auto"?0:(e.grid||[1,Mn])[1],!M){for(E=-Mn;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(d=o[g]=[],p=l?Math.min(M,g)*h-.5:i%M,x=M===Mn?0:l?g*u/M-.5:i/M|0,E=0,I=Mn,A=0;A<g;A++)v=A%M-p,S=x-(A/M|0),d[A]=w=c?Math.abs(c==="y"?S:v):Oh(v*v+S*S),w>E&&(E=w),w<I&&(I=w);i==="random"&&Qh(d),d.max=E-I,d.min=I,d.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),d.b=g<0?s-g:s,d.u=Be(e.amount||e.each)||0,n=n&&g<0?nd(n):n}return g=(d[f]-d.min)/d.max||0,he(d.b+(n?n(g):g)*d.v)+d.u}},Ao=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=he(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Jn(n)?0:Be(n))}},eu=function(t,e){var n=Ge(t),i,s;return!n&&On(t)&&(i=n=t.radius||Mn,t.values?(t=yn(t.values),(s=!Jn(t[0]))&&(i*=i)):t=Ao(t.increment)),Si(e,n?ge(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Mn,h=0,u=t.length,f,m;u--;)s?(f=t[u].x-a,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Jn(o)?h:h+Be(o)}:Ao(t))},nu=function(t,e,n,i){return Si(Ge(t)?!e:n===!0?!!(n=0):!i,function(){return Ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Wf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Xf=function(t,e){return function(n){return t(parseFloat(n))+(e||Be(n))}},qf=function(t,e,n){return ru(t,e,0,1,n)},iu=function(t,e,n){return Si(n,function(i){return t[~~e(i)]})},Yf=function r(t,e,n){var i=e-t;return Ge(t)?iu(t,r(0,t.length),e):Si(n,function(s){return(i+(s-t)%i)%i+t})},jf=function r(t,e,n){var i=e-t,s=i*2;return Ge(t)?iu(t,r(0,t.length-1),e):Si(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},as=function(t){return t.replace(Af,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Cf);return nu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ru=function(t,e,n,i,s){var o=e-t,a=i-n;return Si(s,function(l){return n+((l-t)/o*a||0)})},Zf=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var o=Ie(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ge(t)&&!Ge(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Er(Ge(t)?[]:{},t));if(!h){for(l in e)tl.call(a,t,l,"get",e[l]);s=function(_){return rl(_,a)||(o?t.p:t)}}}return Si(n,s)},Nl=function(t,e,n){var i=t.labels,s=Mn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hn=function(t,e,n){var i=t.vars,s=i[e],o=le,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&mi.length&&ia(),a&&(le=a),h=l?s.apply(c,l):s.call(c),le=o,h},Xr=function(t){return xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ue),t.progress()<1&&hn(t,"onInterrupt"),t},_r,su=[],au=function(t){if(t)if(t=!t.name&&t.default||t,Yo()||t.headless){var e=t.name,n=ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ss,render:rl,add:tl,kill:fd,modifier:ud,rawVars:0},o={targetTest:0,get:0,getSetter:il,aliases:{},register:0};if(Ar(),t!==i){if(ln[e])return;pn(i,pn(ra(t,s),o)),Er(i.prototype,Er(s,ra(t,o))),ln[i.prop=e]=i,t.targetTest&&($s.push(i),Ko[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Hh(e,i),t.register&&t.register(rn,i,en)}else su.push(t)},Qt=255,qr={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},Da=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Qt+.5|0},ou=function(t,e,n){var i=t?Jn(t)?[t>>16,t>>8&Qt,t&Qt]:0:qr.black,s,o,a,l,c,h,u,f,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),qr[t])i=qr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Qt,i&Qt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Qt,t&Qt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Pl),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Da(l+1/3,s,o),i[1]=Da(l,s,o),i[2]=Da(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Bh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Pl)||qr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Qt,o=i[1]/Qt,a=i[2]/Qt,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===s?(o-a)/m+(o<a?6:0):u===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},lu=function(t){var e=[],n=[],i=-1;return t.split(gi).forEach(function(s){var o=s.match(gr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Ol=function(t,e,n){var i="",s=(t+i).match(gi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=ou(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=lu(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(gi,"1").split(gr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(gi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},gi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in qr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Kf=/hsl[a]?\(/,cu=function(t){var e=t.join(" "),n;if(gi.lastIndex=0,gi.test(e))return n=Kf.test(e),t[1]=Ol(t[1],n),t[0]=Ol(t[0],n,lu(t[1])),!0},os,cn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,m,_=function g(d){var p=r()-i,x=d===!0,v,S,w,A;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,v=w-o,(v>0||x)&&(A=++u.frame,f=w-u.time*1e3,u.time=w=w/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=c(g)),S)for(m=0;m<a.length;m++)a[m](w,f,A,d)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){zh&&(!yo&&Yo()&&(Dn=yo=window,jo=Dn.document||{},dn.gsap=rn,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(rn.version),kh(na||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),su.forEach(au)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(d){return setTimeout(d,o-u.time*1e3+1|0)},os=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),os=0,c=ss},lagSmoothing:function(d,p){t=d||1/0,e=Math.min(p||33,t)},fps:function(d){s=1e3/(d||240),o=u.time*1e3+s},add:function(d,p,x){var v=p?function(S,w,A,E){d(S,w,A,E),u.remove(v)}:d;return u.remove(d),a[x?"unshift":"push"](v),Ar(),v},remove:function(d,p){~(p=a.indexOf(d))&&a.splice(p,1)&&m>=p&&m--},_listeners:a},u}(),Ar=function(){return!os&&cn.wake()},qt={},$f=/^[\d.\-M][\d.\-,\s]/,Jf=/["']/g,Qf=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Jf,"").trim():+c,i=l.substr(a+1).trim();return e},td=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ed=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Qf(e[1])]:td(t).split(",").map(qh)):qt._CE&&$f.test(t)?qt._CE("",t):n},nd=function(t){return function(e){return 1-t(1-e)}},Vi=function(t,e){return t&&(ge(t)?t:qt[t]||ed(t))||e},ji=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return tn(t,function(a){qt[a]=dn[a]=s,qt[o=a.toLowerCase()]=n;for(var l in s)qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[a+"."+l]=s[l]}),s},hu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ia=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Mo*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*wf((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:hu(a);return s=Mo/s,l.config=function(c,h){return r(t,c,h)},l},Ua=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:hu(n);return i.config=function(s){return r(t,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ji(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;ji("Elastic",Ia("in"),Ia("out"),Ia());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ji("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ji("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ji("Circ",function(r){return-(Oh(1-r*r)-1)});ji("Sine",function(r){return r===1?1:-bf(r*Tf)+1});ji("Back",Ua("in"),Ua("out"),Ua());qt.SteppedEase=qt.steps=dn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-te;return function(a){return((i*ps(0,o,a)|0)+s)*n}}};is.ease=qt["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $o+=r+","+r+"Params,"});var uu=function(t,e){this.id=Ef++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Wh,this.set=e?e.getSetter:il},ls=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wr(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),os||cn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ar(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ya(this,n),!s._dp||s.parent||Zh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Il(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Il(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?br(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(ps(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ma(this),Of(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=he(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Un(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Df);var i=Ue;return Ue=n,Qo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ue=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ul(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ul(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(_n(this,n),Qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qe(i)),this._dur||(this._zTime=-te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-te)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=ge(n)?n:Yh,l=function(){var h=i.then;i.then=null,s&&s(),ge(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Xr(this)},r}();pn(ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var Je=function(r){Nh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qe(n.sortChildren),ue&&Un(n.parent||ue,Xn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kh(Xn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return jr(0,arguments,this),this},e.from=function(i,s,o){return jr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return jr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Yr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Me(i,s,_n(this,o),1),this},e.call=function(i,s,o){return Un(this,Me.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Me(i,o,_n(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Yr(o).immediateRender=Qe(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Yr(a).immediateRender=Qe(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:he(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,g,d,p,x,v,S,w,A,E;if(this!==ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,S=this._start,v=this._ts,p=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,o);if(f=he(h%d),h===l?(g=this._repeat,f=c):(w=he(h/d),g=~~w,g&&g===w&&(f=c,g--),f>c&&(f=c)),w=br(this._tTime,d),!a&&this._tTime&&w!==g&&this._tTime-w*d-this._dur<=0&&(w=g),A&&g&1&&(f=c-f,E=1),g!==w&&!this._lock){var I=A&&w&1,M=I===(A&&g&1);if(g<w&&(I=!I),a=I?0:h%c?c:h,this._lock=1,this.render(a||(E?0:he(g*d)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=zf(this,he(a),he(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!w&&(hn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!p){x=0,_&&(h+=this._zTime=-te);break}}m=_}else{m=this._last;for(var T=i<0?i:f;m;){if(_=m._prev,(m._act||T<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,s,o||Ue&&Qo(m)),f!==this._time||!this._ts&&!p){x=0,_&&(h+=this._zTime=T?-te:te);break}}m=_}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-te)._zTime=f>=a?1:-1,this._ts))return this._start=S,Ma(this),this.render(i,s,o);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(hn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Jn(s)||(s=_n(this,s,i)),!(i instanceof ls)){if(Ge(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ie(i))return this.addLabel(i,s);if(ge(i))i=Me.delayedCall(0,i);else return this}return this!==i?Un(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Me?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ie(i)?this.removeLabel(i):ge(i)?this.killTweensOf(i):(i.parent===this&&xa(this,i),i===this._recent&&(this._recent=this._last),Hi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=he(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=_n(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Me.delayedCall(0,s||ss,o);return a.data="isPause",this._hasPause=1,Un(this,a,_n(this,i))},e.removePause=function(i){var s=this._first;for(i=_n(this,i);s;)s._start===i&&s.data==="isPause"&&xi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)hi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=yn(i),l=this._first,c=Jn(s),h;l;)l instanceof Me?If(l._targets,a)&&(c?(!hi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=_n(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,_=Me.to(o,pn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||te,onStart:function(){if(o.pause(),!m){var d=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==d&&wr(_,d,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,pn({startAt:{time:_n(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nl(this,_n(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nl(this,_n(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=he(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Hi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Mn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Un(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=he(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;wr(o,o===ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ue._ts&&(Xh(ue,sa(i,ue)),Vh=cn.frame),cn.frame>=Ll){Ll+=fn.autoSleep||120;var s=ue._first;if((!s||!s._ts)&&fn.autoSleep&&cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||cn.sleep()}}},t}(ls);pn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var id=function(t,e,n,i,s,o,a){var l=new en(this._pt,t,e,0,1,_u,null,s),c=0,h=0,u,f,m,_,g,d,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=as(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(Pa)||[];u=Pa.exec(i);)_=u[0],g=i.substring(c,u.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==f[h++]&&(d=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:d,c:_.charAt(1)==="="?Mr(d,_)-d:parseFloat(_)-d,m:m&&m<4?Math.round:0},c=Pa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gh.test(i)||p)&&(l.e=0),this._pt=l,l},tl=function(t,e,n,i,s,o,a,l,c,h){ge(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:ge(u)?c?t[e.indexOf("set")||!ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=ge(u)?c?ld:mu:nl,_;if(Ie(i)&&(~i.indexOf("random(")&&(i=as(i)),i.charAt(1)==="="&&(_=Mr(f,i)+(Be(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Co)return!isNaN(f*i)&&i!==""?(_=new en(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?hd:gu,0,m),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Zo(e,i),id.call(this,t,e,f,i,m,l||fn.stringFilter,c))},rd=function(t,e,n,i,s){if(ge(t)&&(t=Zr(t,s,e,n,i)),!On(t)||t.style&&t.nodeType||Ge(t)||Fh(t))return Ie(t)?Zr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Zr(t[a],s,e,n,i);return o},fu=function(t,e,n,i,s,o){var a,l,c,h;if(ln[t]&&(a=new ln[t]).init(s,a.rawVars?e[t]:rd(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new en(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==_r))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},hi,Co,el=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,m=i.autoRevert,_=t._dur,g=t._startAt,d=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:d,v=t._overwrite==="auto"&&!Xo,S=t.timeline,w=i.easeReverse||u,A,E,I,M,T,G,F,$,L,N,z,K,j;if(S&&(!f||!s)&&(s="none"),t._ease=Vi(s,is.ease),t._rEase=w&&(Vi(w)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||f&&!i.stagger){if($=d[0]?ki(d[0]).harness:0,K=$&&i[$.prop],A=ra(i,Ko),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!m?g.render(-1,!0):g.revert(h&&_?Ks:Lf),g._lazy=0),o){if(xi(t._startAt=Me.set(d,pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Qe(l),startAt:null,delay:0,onUpdate:c&&function(){return hn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue||!a&&!m)&&t._startAt.revert(Ks),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),I=pn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Qe(l),immediateRender:a,stagger:0,parent:p},A),K&&(I[$.prop]=K),xi(t._startAt=Me.set(d,I)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue?t._startAt.revert(Ks):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Qe(l)||l&&!_,E=0;E<d.length;E++){if(T=d[E],F=T._gsap||Jo(d)[E]._gsap,t._ptLookup[E]=N={},So[F.id]&&mi.length&&ia(),z=x===d?E:x.indexOf(T),$&&(L=new $).init(T,K||A,t,z,x)!==!1&&(t._pt=M=new en(t._pt,T,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(q){N[q]=M}),L.priority&&(G=1)),!$||K)for(I in A)ln[I]&&(L=fu(I,A,t,z,T,x))?L.priority&&(G=1):N[I]=M=tl.call(t,T,I,"get",A[I],z,x,0,i.stringFilter);t._op&&t._op[E]&&t.kill(T,t._op[E]),v&&t._pt&&(hi=t,ue.killTweensOf(T,N,t.globalTime(e)),j=!t.parent,hi=0),t._pt&&l&&(So[F.id]=1)}G&&vu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,f&&e<=0&&S.render(Mn,!0,!0)},sd=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,m;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(h=f[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Co=1,t.vars[e]="+=0",el(t,a),Co=0,l?rs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ve(n)+Be(u.e)),u.b&&(u.b=h.s+Be(u.b))},ad=function(t,e){var n=t[0]?ki(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Er({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},od=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ge(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Zr=function(t,e,n,i,s){return ge(t)?t.call(e,n,i,s):Ie(t)&&~t.indexOf("random(")?as(t):t},du=$o+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pu={};tn(du+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pu[r]=1});var Me=function(r){Nh(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Yr(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,d=l.scrollTrigger,p=i.parent||ue,x=(Ge(n)||Fh(n)?Jn(n[0]):"length"in i)?[n]:yn(n),v,S,w,A,E,I,M,T;if(a._targets=x.length?Jo(x):rs("GSAP target "+n+" not found. https://gsap.com",!fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,_||f||Ts(c)||Ts(h)){i=a.vars;var G=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Je({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:x}),v.kill(),v.parent=v._dp=Xn(a),v._start=0,f||Ts(c)||Ts(h)){if(A=x.length,M=f&&tu(f),On(f))for(E in f)~du.indexOf(E)&&(T||(T={}),T[E]=f[E]);for(S=0;S<A;S++)w=ra(i,pu),w.stagger=0,G&&(w.easeReverse=G),T&&Er(w,T),I=x[S],w.duration=+Zr(c,Xn(a),S,I,x),w.delay=(+Zr(h,Xn(a),S,I,x)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),v.to(I,w,M?M(S,I,x):0),v._ease=qt.none;v.duration()?c=h=0:a.timeline=0}else if(_){Yr(pn(v.vars.defaults,{ease:"none"})),v._ease=Vi(_.ease||i.ease||"none");var F=0,$,L,N;if(Ge(_))_.forEach(function(z){return v.to(x,z,">")}),v.duration();else{w={};for(E in _)E==="ease"||E==="easeEach"||od(E,_[E],w,_.easeEach);for(E in w)for($=w[E].sort(function(z,K){return z.t-K.t}),F=0,S=0;S<$.length;S++)L=$[S],N={ease:L.e,duration:(L.t-(S?$[S-1].t:0))/100*c},N[E]=L.v,v.to(x,N,F),F+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return m===!0&&!Xo&&(hi=Xn(a),ue.killTweensOf(x),hi=0),Un(p,Xn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===he(p._time)&&Qe(u)&&Ff(Xn(a))&&p.data!=="nested")&&(a._tTime=-te,a.render(Math.max(0,-h)||0)),d&&Kh(Xn(a),d),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,f,m,_,g,d,p,x,v;if(!c)Gf(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(f=he(u%g),u===l?(_=this._repeat,f=c):(d=he(u/g),_=~~d,_&&_===d?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),d=br(this._tTime,g),f===a&&!o&&this._initted&&_===d)return this._tTime=u,this;_!==d&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(he(g*_),!0).invalidate()._lock=0)}if(!this._initted){if($h(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==d))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var w=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!d&&(hn(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&To(this,i,s,o),hn(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&To(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&xi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(hn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){os||cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||el(this,c),h=this._ease(c/this._dur),sd(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(ya(this,0),this.parent||jh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ue),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,hi&&hi.vars.overwrite!==!0)._first||Xr(this),this.parent&&o!==this.timeline.totalDuration()&&wr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yn(i):a,c=this._ptLookup,h=this._pt,u,f,m,_,g,d,p;if((!s||s==="all")&&Nf(a,l))return s==="all"&&(this._pt=0),Xr(this);for(u=this._op=this._op||[],s!=="all"&&(Ie(s)&&(g={},tn(s,function(x){return g[x]=1}),s=g),s=ad(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,_=f,m={}):(m=u[p]=u[p]||{},_=s);for(g in _)d=f&&f[g],d&&((!("kill"in d.d)||d.d.kill(g)===!0)&&xa(this,d,"_pt"),delete f[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&h&&Xr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return jr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return jr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ue.killTweensOf(i,s,o)},t}(ls);pn(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){Me[r]=function(){var t=new Je,e=bo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var nl=function(t,e,n){return t[e]=n},mu=function(t,e,n){return t[e](n)},ld=function(t,e,n,i){return t[e](i.fp,n)},cd=function(t,e,n){return t.setAttribute(e,n)},il=function(t,e){return ge(t[e])?mu:qo(t[e])&&t.setAttribute?cd:nl},gu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},hd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},_u=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ud=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},fd=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},dd=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},vu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},en=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||gu,this.d=l||this,this.set=c||nl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=dd,this.m=n,this.mt=s,this.tween=i},r}();tn($o+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ko[r]=1});dn.TweenMax=dn.TweenLite=Me;dn.TimelineLite=dn.TimelineMax=Je;ue=new Je({sortChildren:!1,defaults:is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=cu;var Wi=[],Js={},pd=[],Fl=0,md=0,Na=function(t){return(Js[t]||pd).map(function(e){return e()})},Ro=function(){var t=Date.now(),e=[];t-Fl>2&&(Na("matchMediaInit"),Wi.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Dn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Na("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Fl=t,Na("matchMedia"))},xu=function(){function r(e,n){this.selector=n&&wo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=md++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ge(n)&&(s=i,i=n,n=ge);var o=this,a=function(){var c=le,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=wo(s)),le=o,u=i.apply(o,arguments),ge(u)&&o._r.push(u),le=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=le;le=null,n(this),le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Me&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Je?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Me)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Wi.length;o--;)Wi[o].id===this.id&&Wi.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),gd=function(){function r(e){this.contexts=[],this.scope=e,le&&le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){On(n)||(n={matches:n});var o=new xu(0,s||this.scope),a=o.conditions={},l,c,h;le&&!o.selector&&(o.selector=le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Dn.matchMedia(n[c]),l&&(Wi.indexOf(o)<0&&Wi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ro):l.addEventListener("change",Ro)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),aa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return au(i)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ie(t)&&(t=yn(t)[0]);var s=ki(t||{}).get,o=n?Yh:qh;return n==="native"&&(n=""),t&&(e?o((ln[e]&&ln[e].get||s)(t,e,n,i)):function(a,l,c){return o((ln[a]&&ln[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yn(t),t.length>1){var i=t.map(function(h){return rn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=ln[e],a=ki(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;_r._pt=0,u.init(t,n?h+n:h,_r,0,[t]),u.render(1,u),_r._pt&&rl(1,_r)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=rn.to(t,pn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,is.ease)),Dl(is,t||{})},config:function(t){return Dl(fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ln[a]&&!dn[a]&&rs(e+" effect requires "+a+" plugin.")}),La[e]=function(a,l,c){return n(yn(a),pn(l||{},s),c)},o&&(Je.prototype[e]=function(a,l,c){return this.add(La[e](a,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=Vi(e)},parseEase:function(t,e){return arguments.length?Vi(t,e):qt},getById:function(t){return ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),i,s;for(n.smoothChildTiming=Qe(t.smoothChildTiming),ue.remove(n),n._dp=0,n._time=n._tTime=ue._time,i=ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Me&&i.vars.onComplete===i._targets[0]))&&Un(n,i,i._start-i._delay),i=s;return Un(ue,n,0),n},context:function(t,e){return t?new xu(t,e):le},matchMedia:function(t){return new gd(t)},matchMediaRefresh:function(){return Wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ro()},addEventListener:function(t,e){var n=Js[t]||(Js[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Js[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Yf,wrapYoyo:jf,distribute:tu,random:nu,snap:eu,normalize:qf,getUnit:Be,clamp:Hf,splitColor:ou,toArray:yn,selector:wo,mapRange:ru,pipe:Wf,unitize:Xf,interpolate:Zf,shuffle:Qh},install:kh,effects:La,ticker:cn,updateRoot:Je.updateRoot,plugins:ln,globalTimeline:ue,core:{PropTween:en,globals:Hh,Tween:Me,Timeline:Je,Animation:ls,getCache:ki,_removeLinkedListItem:xa,reverting:function(){return Ue},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return Xo=t}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return aa[r]=Me[r]});cn.add(Je.updateRoot);_r=aa.to({},{duration:0});var _d=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},vd=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=_d(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Oa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ie(s)&&(l={},tn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}vd(a,s)}}}},rn=aa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oa("roundProps",Ao),Oa("modifiers"),Oa("snap",eu))||aa;Me.version=Je.version=rn.version="3.15.0";zh=1;Yo()&&Ar();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bl,ui,yr,sl,Bi,Gl,al,xd=function(){return typeof window<"u"},Qn={},Ii=180/Math.PI,Sr=Math.PI/180,Ki=Math.atan2,zl=1e8,ol=/([A-Z])/g,Md=/(left|right|width|margin|padding|x)/i,yd=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Po=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Td=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ed=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Mu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},wd=function(t,e,n){return t.style[e]=n},Ad=function(t,e,n){return t.style.setProperty(e,n)},Cd=function(t,e,n){return t._gsap[e]=n},Rd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Pd=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ld=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},fe="transform",nn=fe+"Origin",Dd=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Qn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Nn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=qn(i,a)}):this.tfm[t]=o.x?o[t]:qn(i,t),t===nn&&(this.tfm.zOrigin=o.zOrigin);else return Nn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(fe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=fe}(s||e)&&this.props.push(t,e,s[t])},Su=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Id=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ol,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=al(),(!s||!s.isStart)&&!n[fe]&&(Su(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Tu=function(t,e){var n={target:t,props:[],revert:Id,save:Dd};return t._gsap||rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Eu,Lo=function(t,e){var n=ui.createElementNS?ui.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ui.createElement(t);return n&&n.style?n:ui.createElement(t)},un=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ol,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Cr(e)||e,1)||""},kl="O,Moz,ms,Ms,Webkit".split(","),Cr=function(t,e,n){var i=e||Bi,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(kl[o]+t in s););return o<0?null:(o===3?"ms":o>=0?kl[o]:"")+t},Do=function(){xd()&&window.document&&(Bl=window,ui=Bl.document,yr=ui.documentElement,Bi=Lo("div")||{style:{}},Lo("div"),fe=Cr(fe),nn=fe+"Origin",Bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eu=!!Cr("perspective"),al=rn.core.reverting,sl=1)},Hl=function(t){var e=t.ownerSVGElement,n=Lo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),yr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),yr.removeChild(n),s},Vl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},bu=function(t){var e,n;try{e=t.getBBox()}catch{e=Hl(t),n=1}return e&&(e.width||e.height)||n||(e=Hl(t)),e&&!e.width&&!e.x&&!e.y?{x:+Vl(t,["x","cx","x1"])||0,y:+Vl(t,["y","cy","y1"])||0,width:0,height:0}:e},wu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&bu(t))},Mi=function(t,e){if(e){var n=t.style,i;e in Qn&&e!==nn&&(e=fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ol,"-$1").toLowerCase())):n.removeAttribute(e)}},fi=function(t,e,n,i,s,o){var a=new en(t._pt,e,n,0,1,o?yu:Mu);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Wl={deg:1,rad:1,turn:1},Ud={grid:1,flex:1},yi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Bi.style,l=Md.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",m=i==="%",_,g,d,p;if(i===o||!s||Wl[i]||Wl[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&wu(t),(m||o==="%")&&(Qn[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],ve(m?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(f?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ui||!g.appendChild)&&(g=ui.body),d=g._gsap,d&&m&&d.width&&l&&d.time===cn.time&&!d.uncache)return ve(s/d.width*u);if(m&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,_=t[h],x?t.style[e]=x:Mi(t,e)}else(m||o==="%")&&!Ud[un(g,"display")]&&(a.position=un(t,"position")),g===t&&(a.position="static"),g.appendChild(Bi),_=Bi[h],g.removeChild(Bi),a.position="absolute";return l&&m&&(d=ki(g),d.time=cn.time,d.width=g[h]),ve(f?_*s/u:_&&s?u/_*s:0)},qn=function(t,e,n,i){var s;return sl||Do(),e in Nn&&e!=="transform"&&(e=Nn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Qn[e]&&e!=="transform"?(s=hs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:la(un(t,nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=oa[e]&&oa[e](t,e,n)||un(t,e)||Wh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(t,e,s,n)+n:s},Nd=function(t,e,n,i){if(!n||n==="none"){var s=Cr(e,t,1),o=s&&un(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=un(t,"borderTopColor"))}var a=new en(this._pt,t.style,e,0,1,_u),l=0,c=0,h,u,f,m,_,g,d,p,x,v,S,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=un(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=un(t,e)||i,g?t.style[e]=g:Mi(t,e)),h=[n,i],cu(h),n=h[0],i=h[1],f=n.match(gr)||[],w=i.match(gr)||[],w.length){for(;u=gr.exec(i);)d=u[0],x=i.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),d!==(g=f[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),d.charAt(1)==="="&&(d=Mr(m,d)+S),p=parseFloat(d),v=d.substr((p+"").length),l=gr.lastIndex-v.length,v||(v=v||fn.units[e]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(m=yi(t,e,g,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:m,c:p-m,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?yu:Mu;return Gh.test(i)&&(a.e=0),this._pt=a,a},Xl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Od=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Xl[n]||n,e[1]=Xl[i]||i,e.join(" ")},Fd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Qn[a]&&(l=1,a=a==="transformOrigin"?nn:fe),Mi(n,a);l&&(Mi(n,fe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",hs(n,1),o.uncache=1,Su(i)))}},oa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new en(t._pt,e,n,0,0,Fd);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},cs=[1,0,0,1,0,0],Au={},Cu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ql=function(t){var e=un(t,fe);return Cu(e)?cs:e.substr(7).match(Bh).map(ve)},ll=function(t,e){var n=t._gsap||ki(t),i=t.style,s=ql(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?cs:s):(s===cs&&!t.offsetParent&&t!==yr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,yr.appendChild(t)),s=ql(t),l?i.display=l:Mi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):yr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Io=function(t,e,n,i,s,o){var a=t._gsap,l=s||ll(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,m=l[0],_=l[1],g=l[2],d=l[3],p=l[4],x=l[5],v=e.split(" "),S=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,E,I,M;n?l!==cs&&(E=m*d-_*g)&&(I=S*(d/E)+w*(-g/E)+(g*x-d*p)/E,M=S*(-_/E)+w*(m/E)-(m*x-_*p)/E,S=I,w=M):(A=bu(t),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=S-c,x=w-h,a.xOffset=u+(p*m+x*g)-p,a.yOffset=f+(p*_+x*d)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[nn]="0px 0px",o&&(fi(o,a,"xOrigin",c,S),fi(o,a,"yOrigin",h,w),fi(o,a,"xOffset",u,a.xOffset),fi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+w)},hs=function(t,e){var n=t._gsap||new uu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=un(t,nn)||"0",h,u,f,m,_,g,d,p,x,v,S,w,A,E,I,M,T,G,F,$,L,N,z,K,j,q,P,R,Z,O,H,J;return h=u=f=g=d=p=x=v=S=0,m=_=1,n.svg=!!(t.getCTM&&wu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),i.scale=i.rotate=i.translate="none"),E=ll(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",K=""):K=!e&&t.getAttribute("data-svg-origin"),Io(t,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,A=n.yOrigin||0,E!==cs&&(G=E[0],F=E[1],$=E[2],L=E[3],h=N=E[4],u=z=E[5],E.length===6?(m=Math.sqrt(G*G+F*F),_=Math.sqrt(L*L+$*$),g=G||F?Ki(F,G)*Ii:0,x=$||L?Ki($,L)*Ii+g:0,x&&(_*=Math.abs(Math.cos(x*Sr))),n.svg&&(h-=w-(w*G+A*$),u-=A-(w*F+A*L))):(J=E[6],O=E[7],P=E[8],R=E[9],Z=E[10],H=E[11],h=E[12],u=E[13],f=E[14],I=Ki(J,Z),d=I*Ii,I&&(M=Math.cos(-I),T=Math.sin(-I),K=N*M+P*T,j=z*M+R*T,q=J*M+Z*T,P=N*-T+P*M,R=z*-T+R*M,Z=J*-T+Z*M,H=O*-T+H*M,N=K,z=j,J=q),I=Ki(-$,Z),p=I*Ii,I&&(M=Math.cos(-I),T=Math.sin(-I),K=G*M-P*T,j=F*M-R*T,q=$*M-Z*T,H=L*T+H*M,G=K,F=j,$=q),I=Ki(F,G),g=I*Ii,I&&(M=Math.cos(I),T=Math.sin(I),K=G*M+F*T,j=N*M+z*T,F=F*M-G*T,z=z*M-N*T,G=K,N=j),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,p=180-p),m=ve(Math.sqrt(G*G+F*F+$*$)),_=ve(Math.sqrt(z*z+J*J)),I=Ki(N,z),x=Math.abs(I)>2e-4?I*Ii:0,S=H?1/(H<0?-H:H):0),n.svg&&(K=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Cu(un(t,fe)),K&&t.setAttribute("transform",K))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(m*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ve(m),n.scaleY=ve(_),n.rotation=ve(g)+a,n.rotationX=ve(d)+a,n.rotationY=ve(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[nn]=la(c)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?Gd:Eu?Ru:Bd,n.uncache=0,n},la=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fa=function(t,e,n){var i=Be(e);return ve(parseFloat(e)+parseFloat(yi(t,"x",n+"px",i)))+i},Bd=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ru(t,e)},bi="0deg",Gr="0px",wi=") ",Ru=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,d=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,S="",w=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==bi||h!==bi)){var A=parseFloat(h)*Sr,E=Math.sin(A),I=Math.cos(A),M;A=parseFloat(u)*Sr,M=Math.cos(A),o=Fa(x,o,E*M*-v),a=Fa(x,a,-Math.sin(A)*-v),l=Fa(x,l,I*M*-v+v)}d!==Gr&&(S+="perspective("+d+wi),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(w||o!==Gr||a!==Gr||l!==Gr)&&(S+=l!==Gr||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+wi),c!==bi&&(S+="rotate("+c+wi),h!==bi&&(S+="rotateY("+h+wi),u!==bi&&(S+="rotateX("+u+wi),(f!==bi||m!==bi)&&(S+="skew("+f+", "+m+wi),(_!==1||g!==1)&&(S+="scale("+_+", "+g+wi),x.style[fe]=S||"translate(0, 0)"},Gd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,d=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),S=parseFloat(a),w,A,E,I,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Sr,c*=Sr,w=Math.cos(l)*u,A=Math.sin(l)*u,E=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(h*=Sr,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,I*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,A*=M)),w=ve(w),A=ve(A),E=ve(E),I=ve(I)):(w=u,I=f,A=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=yi(m,"x",o,"px"),S=yi(m,"y",a,"px")),(_||g||d||p)&&(v=ve(v+_-(_*w+g*E)+d),S=ve(S+g-(_*A+g*I)+p)),(i||s)&&(M=m.getBBox(),v=ve(v+i/100*M.width),S=ve(S+s/100*M.height)),M="matrix("+w+","+A+","+E+","+I+","+v+","+S+")",m.setAttribute("transform",M),x&&(m.style[fe]=M)},zd=function(t,e,n,i,s){var o=360,a=Ie(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ii:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*zl)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*zl)%o-~~(c/o)*o)),t._pt=f=new en(t._pt,e,n,i,c,Sd),f.e=h,f.u="deg",t._props.push(n),f},Yl=function(t,e){for(var n in e)t[n]=e[n];return t},kd=function(t,e,n){var i=Yl({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[fe]=e,a=hs(n,1),Mi(n,fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[fe],o[fe]=e,a=hs(n,1),o[fe]=c);for(l in Qn)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(m=Be(c),_=Be(h),u=m!==_?yi(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new en(t._pt,a,l,u,f-u,Po),t._pt.u=_||0,t._props.push(l));Yl(a,i)};tn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});oa[t>1?"border"+r:r]=function(a,l,c,h,u){var f,m;if(arguments.length<4)return f=o.map(function(_){return qn(a,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},o.forEach(function(_,g){return m[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,m,u)}});var Pu={name:"css",register:Do,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,m,_,g,d,p,x,v,S,w,A,E,I,M;sl||Do(),this.styles=this.styles||Tu(t),I=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ln[g]&&fu(g,e,n,i,t,s)))){if(m=typeof h,_=oa[g],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=as(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",gi.lastIndex=0,gi.test(c)||(d=Be(c),p=Be(h),p?d!==p&&(c=yi(t,g,c,p)+p):d&&(h+=d)),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ie(c)&&~c.indexOf("random(")&&(c=as(c)),Be(c+"")||c==="auto"||(c+=fn.units[g]||Be(qn(t,g))||""),(c+"").charAt(1)==="="&&(c=qn(t,g))):c=qn(t,g),f=parseFloat(c),x=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in Nn&&(g==="autoAlpha"&&(f===1&&qn(t,"visibility")==="hidden"&&u&&(f=0),I.push("visibility",0,a.visibility),fi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Nn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Qn,v){if(this.styles.save(g),M=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=un(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=un(t,"perspective"),T?t.style.perspective=T:Mi(t,"perspective")}u=parseFloat(h)}if(S||(w=t._gsap,w.renderTransform&&!e.parseTransform||hs(t,e.parseTransform),A=e.smoothOrigin!==!1&&w.smooth,S=this._pt=new en(this._pt,a,fe,0,1,w.renderTransform,w,0,-1),S.dep=1),g==="scale")this._pt=new en(this._pt,w,"scaleY",w.scaleY,(x?Mr(w.scaleY,x+u):u)-w.scaleY||0,Po),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(nn,0,a[nn]),h=Od(h),w.svg?Io(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&fi(this,w,"zOrigin",w.zOrigin,p),fi(this,a,g,la(c),la(h)));continue}else if(g==="svgOrigin"){Io(t,h,1,A,0,this);continue}else if(g in Au){zd(this,w,g,f,x?Mr(f,x+h):h);continue}else if(g==="smoothOrigin"){fi(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){kd(this,h,t);continue}}else g in a||(g=Cr(g)||g);if(v||(u||u===0)&&(f||f===0)&&!yd.test(h)&&g in a)d=(c+"").substr((f+"").length),u||(u=0),p=Be(h)||(g in fn.units?fn.units[g]:d),d!==p&&(f=yi(t,g,c,p)),this._pt=new en(this._pt,v?w:a,g,f,(x?Mr(f,x+u):u)-f,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?bd:Po),this._pt.u=p||0,v&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Ed):d!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Td);else if(g in a)Nd.call(this,t,g,c,x?x+h:h);else if(g in t)this.add(t,g,c||t[g],x?x+h:h,i,s);else if(g!=="parseTransform"){Zo(g,h);continue}v||(g in a?I.push(g,0,a[g]):typeof t[g]=="function"?I.push(g,2,t[g]()):I.push(g,1,c||t[g])),o.push(g)}}E&&vu(this)},render:function(t,e){if(e.tween._time||!al())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:qn,aliases:Nn,getSetter:function(t,e,n){var i=Nn[e];return i&&i.indexOf(",")<0&&(e=i),e in Qn&&e!==nn&&(t._gsap.x||qn(t,"x"))?n&&Gl===n?e==="scale"?Rd:Cd:(Gl=n||{})&&(e==="scale"?Pd:Ld):t.style&&!qo(t.style[e])?wd:~e.indexOf("-")?Ad:il(t,e)},core:{_removeProperty:Mi,_getMatrix:ll}};rn.utils.checkPrefix=Cr;rn.core.getStyleSaver=Tu;(function(r,t,e,n){var i=tn(r+","+t+","+e,function(s){Qn[s]=1});tn(t,function(s){fn.units[s]="deg",Au[s]=1}),Nn[i[13]]=r+","+t,tn(n,function(s){var o=s.split(":");Nn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fn.units[r]="px"});rn.registerPlugin(Pu);var tt=rn.registerPlugin(Pu)||rn;tt.core.Tween;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="160",Hd=0,jl=1,Vd=2,Lu=1,Wd=2,Wn=3,ti=0,je=1,ye=2,Kn=0,vn=1,We=2,Zl=3,Kl=4,Xd=5,Ni=100,qd=101,Yd=102,$l=103,Jl=104,jd=200,Zd=201,Kd=202,$d=203,Uo=204,No=205,Jd=206,Qd=207,tp=208,ep=209,np=210,ip=211,rp=212,sp=213,ap=214,op=0,lp=1,cp=2,ca=3,hp=4,up=5,fp=6,dp=7,Du=0,pp=1,mp=2,_i=0,gp=1,_p=2,vp=3,Iu=4,xp=5,Mp=6,Uu=300,Rr=301,Pr=302,Oo=303,Fo=304,Sa=306,ha=1e3,Cn=1001,Bo=1002,qe=1003,Ql=1004,Ba=1005,Pe=1006,yp=1007,us=1008,vi=1009,Sp=1010,Tp=1011,hl=1012,Nu=1013,di=1014,pi=1015,$n=1016,Ou=1017,Fu=1018,Xi=1020,Ep=1021,Rn=1023,bp=1024,wp=1025,qi=1026,Lr=1027,Ap=1028,Bu=1029,Cp=1030,Gu=1031,zu=1033,Ga=33776,za=33777,ka=33778,Ha=33779,tc=35840,ec=35841,nc=35842,ic=35843,ku=36196,rc=37492,sc=37496,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,_c=37819,vc=37820,xc=37821,Va=36492,Mc=36494,yc=36495,Rp=36283,Sc=36284,Tc=36285,Ec=36286,Hu=3e3,Yi=3001,Pp=3200,Lp=3201,Vu=0,Dp=1,xn="",Re="srgb",ei="srgb-linear",ul="display-p3",Ta="display-p3-linear",ua="linear",se="srgb",fa="rec709",da="p3",$i=7680,bc=519,Ip=512,Up=513,Np=514,Wu=515,Op=516,Fp=517,Bp=518,Gp=519,wc=35044,Ac="300 es",Go=1035,jn=2e3,pa=2001;class Nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const Kr=Math.PI/180,fs=180/Math.PI;function Or(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[r&255]+Oe[r>>8&255]+Oe[r>>16&255]+Oe[r>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ye(r,t,e){return Math.max(t,Math.min(e,r))}function fl(r,t){return(r%t+t)%t}function zp(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function kp(r,t,e){return r!==t?(e-r)/(t-r):0}function $r(r,t,e){return(1-e)*r+e*t}function Hp(r,t,e,n){return $r(r,t,1-Math.exp(-e*n))}function Vp(r,t=1){return t-Math.abs(fl(r,t*2)-t)}function Wp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Xp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function qp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Yp(r,t){return r+Math.random()*(t-r)}function jp(r){return r*(.5-Math.random())}function Zp(r){r!==void 0&&(Cc=r);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kp(r){return r*Kr}function $p(r){return r*fs}function zo(r){return(r&r-1)===0&&r!==0}function Jp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ma(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qp(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*m,a*c);break;case"YXY":r.set(l*m,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function He(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:Kr,RAD2DEG:fs,generateUUID:Or,clamp:Ye,euclideanModulo:fl,mapLinear:zp,inverseLerp:kp,lerp:$r,damp:Hp,pingpong:Vp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:jp,seededRandom:Zp,degToRad:Kp,radToDeg:$p,isPowerOfTwo:zo,ceilPowerOfTwo:Jp,floorPowerOfTwo:ma,setQuaternionFromProperEuler:Qp,normalize:He,denormalize:mr};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],g=i[0],d=i[3],p=i[6],x=i[1],v=i[4],S=i[7],w=i[2],A=i[5],E=i[8];return s[0]=o*g+a*x+l*w,s[3]=o*d+a*v+l*A,s[6]=o*p+a*S+l*E,s[1]=c*g+h*x+u*w,s[4]=c*d+h*v+u*A,s[7]=c*p+h*S+u*E,s[2]=f*g+m*x+_*w,s[5]=f*d+m*v+_*A,s[8]=f*p+m*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,_=e*u+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Vt;function Xu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tm(){const r=ds("canvas");return r.style.display="block",r}const Pc={};function Jr(r){r in Pc||(Pc[r]=!0,console.warn(r))}const Lc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[ei]:{transfer:ua,primaries:fa,toReference:r=>r,fromReference:r=>r},[Re]:{transfer:se,primaries:fa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ta]:{transfer:ua,primaries:da,toReference:r=>r.applyMatrix3(Dc),fromReference:r=>r.applyMatrix3(Lc)},[ul]:{transfer:se,primaries:da,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Dc),fromReference:r=>r.applyMatrix3(Lc).convertLinearToSRGB()}},em=new Set([ei,Ta]),$t={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!em.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Es[t].toReference,i=Es[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Es[r].primaries},getTransfer:function(r){return r===xn?ua:Es[r].transfer}};function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ji;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=ds("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tr(e[n]/255)*255):e[n]=Tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nm=0;class Yu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Or(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qa(i[o].image)):s.push(qa(i[o]))}else s=qa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;class Ze extends Nr{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Cn,i=Cn,s=Pe,o=us,a=Rn,l=vi,c=Ze.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Or(),this.name="",this.source=new Yu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yi?Re:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Yi:Hu}set encoding(t){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yi?Re:xn}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Uu;Ze.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],g=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(m+1)/2,w=(p+1)/2,A=(h+f)/4,E=(u+g)/4,I=(_+d)/4;return v>S&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((d-_)*(d-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(d-_)/x,this.y=(u-g)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends Nr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yi?Re:xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ze(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends rm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ju extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sm extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==m||h!==_){let d=1-a;const p=l*f+c*m+h*_+u*g,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,p*x);d=Math.sin(d*A)/w,a=Math.sin(a*A)/w}const S=a*x;if(l=l*d+f*S,c=c*d+m*S,h=h*d+_*S,u=u*d+g*S,d===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*m-c*f,t[e+1]=l*_+h*f+c*u-a*m,t[e+2]=c*_+h*m+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new U,Ic=new ms;class gs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),ws.subVectors(this.max,zr),Qi.subVectors(t.a,zr),tr.subVectors(t.b,zr),er.subVectors(t.c,zr),ni.subVectors(tr,Qi),ii.subVectors(er,tr),Ai.subVectors(Qi,er);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ai.z,Ai.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ai.z,0,-Ai.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ai.y,Ai.x,0];return!ja(e,Qi,tr,er,ws)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,Qi,tr,er,ws))?!1:(As.crossVectors(ni,ii),e=[As.x,As.y,As.z],ja(e,Qi,tr,er,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,bs=new gs,Qi=new U,tr=new U,er=new U,ni=new U,ii=new U,Ai=new U,zr=new U,ws=new U,As=new U,Ci=new U;function ja(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ci.fromArray(r,s);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const am=new gs,kr=new U,Za=new U;class _s{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):am.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(Za)),this.expandByPoint(kr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new U,Ka=new U,Cs=new U,ri=new U,$a=new U,Rs=new U,Ja=new U;class Ea{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ka.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ka);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cs),a=ri.dot(this.direction),l=-ri.dot(Cs),c=ri.lengthSq(),h=Math.abs(1-o*o);let u,f,m,_;if(h>0)if(u=o*l-a,f=o*a-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ka).addScaledVector(Cs,f),m}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,s){$a.subVectors(e,t),Rs.subVectors(n,t),Ja.crossVectors($a,Rs);let o=this.direction.dot(Ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const l=a*this.direction.dot(Rs.crossVectors(ri,Rs));if(l<0)return null;const c=a*this.direction.dot($a.cross(ri));if(c<0||l+c>o)return null;const h=-a*ri.dot(Ja);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,s,o,a,l,c,h,u,f,m,_,g,d){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,m,_,g,d)}set(t,e,n,i,s,o,a,l,c,h,u,f,m,_,g,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=_,p[11]=g,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),o=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(om,t,lm)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),si.crossVectors(n,an),si.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),si.crossVectors(n,an)),si.normalize(),Ps.crossVectors(an,si),i[0]=si.x,i[4]=Ps.x,i[8]=an.x,i[1]=si.y,i[5]=Ps.y,i[9]=an.y,i[2]=si.z,i[6]=Ps.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],g=n[6],d=n[10],p=n[14],x=n[3],v=n[7],S=n[11],w=n[15],A=i[0],E=i[4],I=i[8],M=i[12],T=i[1],G=i[5],F=i[9],$=i[13],L=i[2],N=i[6],z=i[10],K=i[14],j=i[3],q=i[7],P=i[11],R=i[15];return s[0]=o*A+a*T+l*L+c*j,s[4]=o*E+a*G+l*N+c*q,s[8]=o*I+a*F+l*z+c*P,s[12]=o*M+a*$+l*K+c*R,s[1]=h*A+u*T+f*L+m*j,s[5]=h*E+u*G+f*N+m*q,s[9]=h*I+u*F+f*z+m*P,s[13]=h*M+u*$+f*K+m*R,s[2]=_*A+g*T+d*L+p*j,s[6]=_*E+g*G+d*N+p*q,s[10]=_*I+g*F+d*z+p*P,s[14]=_*M+g*$+d*K+p*R,s[3]=x*A+v*T+S*L+w*j,s[7]=x*E+v*G+S*N+w*q,s[11]=x*I+v*F+S*z+w*P,s[15]=x*M+v*$+S*K+w*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],g=t[7],d=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*m-n*l*m)+g*(+e*l*m-e*c*f+s*o*f-i*o*m+i*c*h-s*l*h)+d*(+e*c*u-e*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],g=t[13],d=t[14],p=t[15],x=u*d*c-g*f*c+g*l*m-a*d*m-u*l*p+a*f*p,v=_*f*c-h*d*c-_*l*m+o*d*m+h*l*p-o*f*p,S=h*g*c-_*u*c+_*a*m-o*g*m-h*a*p+o*u*p,w=_*u*l-h*g*l-_*a*f+o*g*f+h*a*d-o*u*d,A=e*x+n*v+i*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=x*E,t[1]=(g*f*s-u*d*s-g*i*m+n*d*m+u*i*p-n*f*p)*E,t[2]=(a*d*s-g*l*s+g*i*c-n*d*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*m-n*l*m)*E,t[4]=v*E,t[5]=(h*d*s-_*f*s+_*i*m-e*d*m-h*i*p+e*f*p)*E,t[6]=(_*l*s-o*d*s-_*i*c+e*d*c+o*i*p-e*l*p)*E,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*m+e*l*m)*E,t[8]=S*E,t[9]=(_*u*s-h*g*s-_*n*m+e*g*m+h*n*p-e*u*p)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*m-e*a*m)*E,t[12]=w*E,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*d+e*u*d)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*d-e*a*d)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,_=s*u,g=o*h,d=o*u,p=a*u,x=l*c,v=l*h,S=l*u,w=n.x,A=n.y,E=n.z;return i[0]=(1-(g+p))*w,i[1]=(m+S)*w,i[2]=(_-v)*w,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(f+p))*A,i[6]=(d+x)*A,i[7]=0,i[8]=(_+v)*E,i[9]=(d-x)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=nr.set(i[0],i[1],i[2]).length();const o=nr.set(i[4],i[5],i[6]).length(),a=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);const c=1/s,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=jn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,_;if(a===jn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===pa)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=jn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,m=(n+i)*h;let _,g;if(a===jn)_=(o+s)*u,g=-2*u;else if(a===pa)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nr=new U,En=new ae,om=new U(0,0,0),lm=new U(1,1,1),si=new U,Ps=new U,an=new U,Uc=new ae,Nc=new ms;class vs{constructor(t=0,e=0,n=0,i=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cm=0;const Oc=new U,ir=new ms,zn=new ae,Ls=new U,Hr=new U,hm=new U,um=new ms,Fc=new U(1,0,0),Bc=new U(0,1,0),Gc=new U(0,0,1),fm={type:"added"},dm={type:"removed"};class De extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new U,e=new vs,n=new ms,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Vt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ls.copy(t):Ls.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Hr,Ls,this.up):zn.lookAt(Ls,Hr,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(zn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(fm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dm)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new U(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,kn=new U,Qa=new U,Hn=new U,rr=new U,sr=new U,zc=new U,to=new U,eo=new U,no=new U;let Ds=!1;class An{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),kn.subVectors(n,e),Qa.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(kn),l=bn.dot(Qa),c=kn.dot(kn),h=kn.dot(Qa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(t,e,n,i,s,o,a,l){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),kn.subVectors(t,e),bn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),bn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),An.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return An.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;rr.subVectors(i,n),sr.subVectors(s,n),to.subVectors(t,n);const l=rr.dot(to),c=sr.dot(to);if(l<=0&&c<=0)return e.copy(n);eo.subVectors(t,i);const h=rr.dot(eo),u=sr.dot(eo);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(rr,o);no.subVectors(t,s);const m=rr.dot(no),_=sr.dot(no);if(_>=0&&m<=_)return e.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(sr,a);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return zc.subVectors(s,i),a=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(zc,a);const p=1/(d+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(rr,o).addScaledVector(sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Is={h:0,s:0,l:0};function io(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=fl(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=io(o,s,t+1/3),this.g=io(o,s,t),this.b=io(o,s,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return $t.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ye(Fe.r*255,0,255))*65536+Math.round(Ye(Fe.g*255,0,255))*256+Math.round(Ye(Fe.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,s=Fe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Re){$t.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Is);const n=$r(ai.h,Is.h,e),i=$r(ai.s,Is.s,e),s=$r(ai.l,Is.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Rt;Rt.NAMES=Zu;let pm=0;class Zi extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=vn,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vn&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class me extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new U,Us=new Lt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wc&&(t.usage=this.usage),t}}class Ku extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $u extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mm=0;const gn=new ae,ro=new De,ar=new U,on=new gs,Vr=new gs,Ae=new U;class Se extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?$u:Ku)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(on.min,Vr.min),on.expandByPoint(Ae),Ae.addVectors(on.max,Vr.max),on.expandByPoint(Ae)):(on.expandByPoint(Vr.min),on.expandByPoint(Vr.max))}on.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(t,c),Ae.add(ar)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new U,h[T]=new U;const u=new U,f=new U,m=new U,_=new Lt,g=new Lt,d=new Lt,p=new U,x=new U;function v(T,G,F){u.fromArray(i,T*3),f.fromArray(i,G*3),m.fromArray(i,F*3),_.fromArray(o,T*2),g.fromArray(o,G*2),d.fromArray(o,F*2),f.sub(u),m.sub(u),g.sub(_),d.sub(_);const $=1/(g.x*d.y-d.x*g.y);isFinite($)&&(p.copy(f).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar($),x.copy(m).multiplyScalar(g.x).addScaledVector(f,-d.x).multiplyScalar($),c[T].add(p),c[G].add(p),c[F].add(p),h[T].add(x),h[G].add(x),h[F].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,G=S.length;T<G;++T){const F=S[T],$=F.start,L=F.count;for(let N=$,z=$+L;N<z;N+=3)v(n[N+0],n[N+1],n[N+2])}const w=new U,A=new U,E=new U,I=new U;function M(T){E.fromArray(s,T*3),I.copy(E);const G=c[T];w.copy(G),w.sub(E.multiplyScalar(E.dot(G))).normalize(),A.crossVectors(I,G);const $=A.dot(h[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=$}for(let T=0,G=S.length;T<G;++T){const F=S[T],$=F.start,L=F.count;for(let N=$,z=$+L;N<z;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),g=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,d),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[m++]}return new Ce(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new ae,Ri=new Ea,Ns=new _s,Hc=new U,or=new U,lr=new U,cr=new U,so=new U,Os=new U,Fs=new Lt,Bs=new Lt,Gs=new Lt,Vc=new U,Wc=new U,Xc=new U,zs=new U,ks=new U;class Wt extends De{constructor(t=new Se,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(so.fromBufferAttribute(u,t),o?Os.addScaledVector(so,h):Os.addScaledVector(so.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ri.copy(t.ray).recast(t.near),!(Ns.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ns,Hc)===null||Ri.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(kc.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const d=f[_],p=o[d.materialIndex],x=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let S=x,w=v;S<w;S+=3){const A=a.getX(S),E=a.getX(S+1),I=a.getX(S+2);i=Hs(this,p,t,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=_,p=g;d<p;d+=3){const x=a.getX(d),v=a.getX(d+1),S=a.getX(d+2);i=Hs(this,o,t,n,c,h,u,x,v,S),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const d=f[_],p=o[d.materialIndex],x=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let S=x,w=v;S<w;S+=3){const A=S,E=S+1,I=S+2;i=Hs(this,p,t,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=_,p=g;d<p;d+=3){const x=d,v=d+1,S=d+2;i=Hs(this,o,t,n,c,h,u,x,v,S),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function gm(r,t,e,n,i,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ti,a),l===null)return null;ks.copy(a),ks.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:r}}function Hs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,or),r.getVertexPosition(l,lr),r.getVertexPosition(c,cr);const h=gm(r,t,e,n,or,lr,cr,zs);if(h){i&&(Fs.fromBufferAttribute(i,a),Bs.fromBufferAttribute(i,l),Gs.fromBufferAttribute(i,c),h.uv=An.getInterpolation(zs,or,lr,cr,Fs,Bs,Gs,new Lt)),s&&(Fs.fromBufferAttribute(s,a),Bs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),h.uv1=An.getInterpolation(zs,or,lr,cr,Fs,Bs,Gs,new Lt),h.uv2=h.uv1),o&&(Vc.fromBufferAttribute(o,a),Wc.fromBufferAttribute(o,l),Xc.fromBufferAttribute(o,c),h.normal=An.getInterpolation(zs,or,lr,cr,Vc,Wc,Xc,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};An.getNormal(or,lr,cr,u.normal),h.face=u}return h}class xs extends Se{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function _(g,d,p,x,v,S,w,A,E,I,M){const T=S/E,G=w/I,F=S/2,$=w/2,L=A/2,N=E+1,z=I+1;let K=0,j=0;const q=new U;for(let P=0;P<z;P++){const R=P*G-$;for(let Z=0;Z<N;Z++){const O=Z*T-F;q[g]=O*x,q[d]=R*v,q[p]=L,c.push(q.x,q.y,q.z),q[g]=0,q[d]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(Z/E),u.push(1-P/I),K+=1}}for(let P=0;P<I;P++)for(let R=0;R<E;R++){const Z=f+R+N*P,O=f+R+N*(P+1),H=f+(R+1)+N*(P+1),J=f+(R+1)+N*P;l.push(Z,O,J),l.push(O,H,J),j+=6}a.addGroup(m,j,M),m+=j,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(r){const t={};for(let e=0;e<r.length;e++){const n=Dr(r[e]);for(const i in n)t[i]=n[i]}return t}function _m(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ju(r){return r.getRenderTarget()===null?r.outputColorSpace:$t.workingColorSpace}const Ir={clone:Dr,merge:Ve};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Le extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends Qu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hr=-90,ur=1;class Mm extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(hr,ur,t,e);i.layers=this.layers,this.add(i);const s=new $e(hr,ur,t,e);s.layers=this.layers,this.add(s);const o=new $e(hr,ur,t,e);o.layers=this.layers,this.add(o);const a=new $e(hr,ur,t,e);a.layers=this.layers,this.add(a);const l=new $e(hr,ur,t,e);l.layers=this.layers,this.add(l);const c=new $e(hr,ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class tf extends Ze{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ym extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yi?Re:xn),this.texture=new tf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xs(5,5,5),s=new Le({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Kn});s.uniforms.tEquirect.value=e;const o=new Wt(i,s),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Pe),new Mm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ao=new U,Sm=new U,Tm=new Vt;class ci{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ao.subVectors(n,e).cross(Sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tm.getNormalMatrix(t),i=this.coplanarPoint(ao).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new _s,Vs=new U;class pl{constructor(t=new ci,e=new ci,n=new ci,i=new ci,s=new ci,o=new ci){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],_=i[9],g=i[10],d=i[11],p=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,d-m,S-p).normalize(),n[1].setComponents(l+s,f+c,d+m,S+p).normalize(),n[2].setComponents(l+o,f+h,d+_,S+x).normalize(),n[3].setComponents(l-o,f-h,d-_,S-x).normalize(),n[4].setComponents(l-a,f-u,d-g,S-v).normalize(),e===jn)n[5].setComponents(l+a,f+u,d+g,S+v).normalize();else if(e===pa)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Vs.x=i.normal.x>0?t.max.x:t.min.x,Vs.y=i.normal.y>0?t.max.y:t.min.y,Vs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ef(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Em(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=u.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const f=h.array,m=h._updateRange,_=h.updateRanges;if(r.bindBuffer(u,c),m.count===-1&&_.length===0&&r.bufferSubData(u,0,f),_.length!==0){for(let g=0,d=_.length;g<d;g++){const p=_[g];e?r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Xe extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,m=[],_=[],g=[],d=[];for(let p=0;p<h;p++){const x=p*f-o;for(let v=0;v<c;v++){const S=v*u-s;_.push(S,-x,0),g.push(0,0,1),d.push(v/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,S=x+c*(p+1),w=x+1+c*(p+1),A=x+1+c*p;m.push(v,S,A),m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new oe(_,3)),this.setAttribute("normal",new oe(g,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.widthSegments,t.heightSegments)}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
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
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
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
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`
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
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
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
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,E0=`struct PhysicalMaterial {
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
}`,b0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
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
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Ig=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,jg=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,$g=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,e_=`uniform vec3 color;
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
}`,n_=`uniform float rotation;
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
}`,i_=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:bm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Cm,alphatest_fragment:Rm,alphatest_pars_fragment:Pm,aomap_fragment:Lm,aomap_pars_fragment:Dm,batching_pars_vertex:Im,batching_vertex:Um,begin_vertex:Nm,beginnormal_vertex:Om,bsdfs:Fm,iridescence_fragment:Bm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:jm,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Km,displacementmap_pars_vertex:$m,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:t0,colorspace_fragment:e0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:r0,envmap_pars_fragment:s0,envmap_pars_vertex:a0,envmap_physical_pars_fragment:v0,envmap_vertex:o0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:f0,lightmap_fragment:d0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:x0,lights_toon_pars_fragment:M0,lights_phong_fragment:y0,lights_phong_pars_fragment:S0,lights_physical_fragment:T0,lights_physical_pars_fragment:E0,lights_fragment_begin:b0,lights_fragment_maps:w0,lights_fragment_end:A0,logdepthbuf_fragment:C0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:P0,logdepthbuf_vertex:L0,map_fragment:D0,map_pars_fragment:I0,map_particle_fragment:U0,map_particle_pars_fragment:N0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphcolor_vertex:B0,morphnormal_vertex:G0,morphtarget_pars_vertex:z0,morphtarget_vertex:k0,normal_fragment_begin:H0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:$0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:rg,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:fg,skinnormal_vertex:dg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:_g,transmission_fragment:vg,transmission_pars_fragment:xg,uv_pars_fragment:Mg,uv_pars_vertex:yg,uv_vertex:Sg,worldpos_vertex:Tg,background_vert:Eg,background_frag:bg,backgroundCube_vert:wg,backgroundCube_frag:Ag,cube_vert:Cg,cube_frag:Rg,depth_vert:Pg,depth_frag:Lg,distanceRGBA_vert:Dg,distanceRGBA_frag:Ig,equirect_vert:Ug,equirect_frag:Ng,linedashed_vert:Og,linedashed_frag:Fg,meshbasic_vert:Bg,meshbasic_frag:Gg,meshlambert_vert:zg,meshlambert_frag:kg,meshmatcap_vert:Hg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:jg,meshphysical_frag:Zg,meshtoon_vert:Kg,meshtoon_frag:$g,points_vert:Jg,points_frag:Qg,shadow_vert:t_,shadow_frag:e_,sprite_vert:n_,sprite_frag:i_},lt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},In={basic:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ve([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ve([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ve([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ve([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ve([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ve([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ve([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ve([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ve([lt.common,lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ve([lt.lights,lt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};In.physical={uniforms:Ve([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ws={r:0,b:0,g:0};function r_(r,t,e,n,i,s,o){const a=new Rt(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function _(d,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sa)?(h===void 0&&(h=new Wt(new xs(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:Dr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=$t.getTransfer(v.colorSpace)!==se,(u!==v||f!==v.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=r.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wt(new Xe(2,2),new Le({name:"BackgroundMaterial",uniforms:Dr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){d.getRGB(Ws,Ju(r)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:_}}function s_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,h=!1;function u(L,N,z,K,j){let q=!1;if(o){const P=g(K,z,N);c!==P&&(c=P,m(c.object)),q=p(L,K,z,j),q&&x(L,K,z,j)}else{const P=N.wireframe===!0;(c.geometry!==K.id||c.program!==z.id||c.wireframe!==P)&&(c.geometry=K.id,c.program=z.id,c.wireframe=P,q=!0)}j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,I(L,N,z,K),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,N,z){const K=z.wireframe===!0;let j=a[L.id];j===void 0&&(j={},a[L.id]=j);let q=j[N.id];q===void 0&&(q={},j[N.id]=q);let P=q[K];return P===void 0&&(P=d(f()),q[K]=P),P}function d(L){const N=[],z=[],K=[];for(let j=0;j<i;j++)N[j]=0,z[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,N,z,K){const j=c.attributes,q=N.attributes;let P=0;const R=z.getAttributes();for(const Z in R)if(R[Z].location>=0){const H=j[Z];let J=q[Z];if(J===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;P++}return c.attributesNum!==P||c.index!==K}function x(L,N,z,K){const j={},q=N.attributes;let P=0;const R=z.getAttributes();for(const Z in R)if(R[Z].location>=0){let H=q[Z];H===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const J={};J.attribute=H,H&&H.data&&(J.data=H.data),j[Z]=J,P++}c.attributes=j,c.attributesNum=P,c.index=K}function v(){const L=c.newAttributes;for(let N=0,z=L.length;N<z;N++)L[N]=0}function S(L){w(L,0)}function w(L,N){const z=c.newAttributes,K=c.enabledAttributes,j=c.attributeDivisors;z[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),j[L]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),j[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let z=0,K=N.length;z<K;z++)N[z]!==L[z]&&(r.disableVertexAttribArray(z),N[z]=0)}function E(L,N,z,K,j,q,P){P===!0?r.vertexAttribIPointer(L,N,z,j,q):r.vertexAttribPointer(L,N,z,K,j,q)}function I(L,N,z,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const j=K.attributes,q=z.getAttributes(),P=N.defaultAttributeValues;for(const R in q){const Z=q[R];if(Z.location>=0){let O=j[R];if(O===void 0&&(R==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),R==="instanceColor"&&L.instanceColor&&(O=L.instanceColor)),O!==void 0){const H=O.normalized,J=O.itemSize,at=e.get(O);if(at===void 0)continue;const et=at.buffer,ht=at.type,gt=at.bytesPerElement,pt=n.isWebGL2===!0&&(ht===r.INT||ht===r.UNSIGNED_INT||O.gpuType===Nu);if(O.isInterleavedBufferAttribute){const Mt=O.data,B=Mt.stride,Yt=O.offset;if(Mt.isInstancedInterleavedBuffer){for(let ot=0;ot<Z.locationSize;ot++)w(Z.location+ot,Mt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ot=0;ot<Z.locationSize;ot++)S(Z.location+ot);r.bindBuffer(r.ARRAY_BUFFER,et);for(let ot=0;ot<Z.locationSize;ot++)E(Z.location+ot,J/Z.locationSize,ht,H,B*gt,(Yt+J/Z.locationSize*ot)*gt,pt)}else{if(O.isInstancedBufferAttribute){for(let Mt=0;Mt<Z.locationSize;Mt++)w(Z.location+Mt,O.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)S(Z.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,et);for(let Mt=0;Mt<Z.locationSize;Mt++)E(Z.location+Mt,J/Z.locationSize,ht,H,J*gt,J/Z.locationSize*Mt*gt,pt)}}else if(P!==void 0){const H=P[R];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(Z.location,H);break;case 3:r.vertexAttrib3fv(Z.location,H);break;case 4:r.vertexAttrib4fv(Z.location,H);break;default:r.vertexAttrib1fv(Z.location,H)}}}}A()}function M(){F();for(const L in a){const N=a[L];for(const z in N){const K=N[z];for(const j in K)_(K[j].object),delete K[j];delete N[z]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const z in N){const K=N[z];for(const j in K)_(K[j].object),delete K[j];delete N[z]}delete a[L.id]}function G(L){for(const N in a){const z=a[N];if(z[L.id]===void 0)continue;const K=z[L.id];for(const j in K)_(K[j].object),delete K[j];delete z[L.id]}}function F(){$(),h=!0,c!==l&&(c=l,m(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function a_(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,f){if(f===0)return;let m,_;if(i)m=r,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,h,u,f),e.update(u,s,f)}function c(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function o_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||t.has("OES_texture_float"),w=v&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:A}}function l_(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ci,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!d)s?h(null):c();else{const x=s?0:n,v=x*4;let S=p.clippingState||null;l.value=S,S=h(_,f,v,m);for(let w=0;w!==v;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,_){const g=u!==null?u.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const p=m+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,S=m;v!==g;++v,S+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(d,S),d[S+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function c_(r){let t=new WeakMap;function e(o,a){return a===Oo?o.mapping=Rr:a===Fo&&(o.mapping=Pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oo||a===Fo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ym(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ml extends Qu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vr=4,qc=[.125,.215,.35,.446,.526,.582],Oi=20,oo=new ml,Yc=new Rt;let lo=null,co=0,ho=0;const Ui=(1+Math.sqrt(5))/2,fr=1/Ui,jc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ui,fr),new U(0,Ui,-fr),new U(fr,0,Ui),new U(-fr,0,Ui),new U(Ui,fr,0),new U(-Ui,fr,0)];class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,ho),t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:$n,format:Rn,colorSpace:ei,depthBuffer:!1},i=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(s)),this._blurMaterial=u_(s,t,e)}return i}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,i){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yc),h.toneMapping=_i,h.autoClear=!1;const m=new me({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),_=new Wt(new xs,m);let g=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,g=!0):(m.color.copy(Yc),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Xs(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Rr||t.mapping===Pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=jc[(i-1)%jc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Wt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Oi-1),g=s/_,d=isFinite(s)?1+Math.floor(h*g):Oi;d>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Oi}`);const p=[];let x=0;for(let E=0;E<Oi;++E){const I=E/g,M=Math.exp(-I*I/2);p.push(M),E===0?x+=M:E<d&&(x+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const S=this._sizeLods[i],w=3*S*(i>v-vr?i-v+vr:0),A=4*(this._cubeSize-S);Xs(e,w,A,3*S,2*S),l.setRenderTarget(e),l.render(u,oo)}}function h_(r){const t=[],e=[],n=[];let i=r;const s=r-vr+1+qc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-vr?l=qc[o-r+vr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,d=2,p=1,x=new Float32Array(g*_*m),v=new Float32Array(d*_*m),S=new Float32Array(p*_*m);for(let A=0;A<m;A++){const E=A%3*2/3-1,I=A>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];x.set(M,g*_*A),v.set(f,d*_*A);const T=[A,A,A,A,A,A];S.set(T,p*_*A)}const w=new Se;w.setAttribute("position",new Ce(x,g)),w.setAttribute("uv",new Ce(v,d)),w.setAttribute("faceIndex",new Ce(S,p)),t.push(w),i>vr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(r,t,e){const n=new Sn(r,t,e);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function u_(r,t,e){const n=new Float32Array(Oi),i=new U(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function $c(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Jc(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function f_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oo||l===Fo,h=l===Rr||l===Pr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Zc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Zc(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function d_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p_(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let d=0,p=g.length;d<p;d++)t.remove(g[d])}f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let d=0,p=g.length;d<p;d++)t.update(g[d],r.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let v=0,S=x.length;v<S;v+=3){const w=x[v+0],A=x[v+1],E=x[v+2];f.push(w,A,A,E,E,w)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const w=v+0,A=v+1,E=v+2;f.push(w,A,A,E,E,w)}}else return;const d=new(Xu(f)?$u:Ku)(f,1);d.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,d)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function m_(r,t,e,n){const i=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){r.drawElements(s,_,a,m*l),e.update(_,s,1)}function u(m,_,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,_,a,m*l,g),e.update(_,s,g)}function f(m,_,g){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<g;p++)this.render(m[p]/l,_[p]);else{d.multiDrawElementsWEBGL(s,_,0,a,m,0,g);let p=0;for(let x=0;x<g;x++)p+=_[x];e.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function g_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function __(r,t){return r[0]-t[0]}function v_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function x_(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let L=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let I=0;x===!0&&(I=1),v===!0&&(I=2),S===!0&&(I=3);let M=h.attributes.position.count*I,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const G=new Float32Array(M*T*4*_),F=new ju(G,M,T,_);F.type=pi,F.needsUpdate=!0;const $=I*4;for(let N=0;N<_;N++){const z=w[N],K=A[N],j=E[N],q=M*T*4*N;for(let P=0;P<z.count;P++){const R=P*$;x===!0&&(o.fromBufferAttribute(z,P),G[q+R+0]=o.x,G[q+R+1]=o.y,G[q+R+2]=o.z,G[q+R+3]=0),v===!0&&(o.fromBufferAttribute(K,P),G[q+R+4]=o.x,G[q+R+5]=o.y,G[q+R+6]=o.z,G[q+R+7]=0),S===!0&&(o.fromBufferAttribute(j,P),G[q+R+8]=o.x,G[q+R+9]=o.y,G[q+R+10]=o.z,G[q+R+11]=j.itemSize===4?o.w:1)}}g={count:_,texture:F,size:new Lt(M,T)},s.set(h,g),h.addEventListener("dispose",L)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const p=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<m;v++){const S=_[v];S[0]=v,S[1]=f[v]}_.sort(v_);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(__);const g=h.morphAttributes.position,d=h.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const S=a[v],w=S[0],A=S[1];w!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+v)!==g[w]&&h.setAttribute("morphTarget"+v,g[w]),d&&h.getAttribute("morphNormal"+v)!==d[w]&&h.setAttribute("morphNormal"+v,d[w]),i[v]=A,p+=A):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function M_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class nf extends Ze{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:qi,h!==qi&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=di),n===void 0&&h===Lr&&(n=Xi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rf=new Ze,sf=new nf(1,1);sf.compareFunction=Wu;const af=new ju,of=new sm,lf=new tf,Qc=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Fr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Qc[i];if(s===void 0&&(s=new Float32Array(i),Qc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Te(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ee(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ba(r,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function y_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function S_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2fv(this.addr,t),Ee(e,t)}}function T_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;r.uniform3fv(this.addr,t),Ee(e,t)}}function E_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4fv(this.addr,t),Ee(e,t)}}function b_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;ih.set(n),r.uniformMatrix2fv(this.addr,!1,ih),Ee(e,n)}}function w_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;nh.set(n),r.uniformMatrix3fv(this.addr,!1,nh),Ee(e,n)}}function A_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,n))return;eh.set(n),r.uniformMatrix4fv(this.addr,!1,eh),Ee(e,n)}}function C_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function R_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2iv(this.addr,t),Ee(e,t)}}function P_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;r.uniform3iv(this.addr,t),Ee(e,t)}}function L_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4iv(this.addr,t),Ee(e,t)}}function D_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function I_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2uiv(this.addr,t),Ee(e,t)}}function U_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;r.uniform3uiv(this.addr,t),Ee(e,t)}}function N_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4uiv(this.addr,t),Ee(e,t)}}function O_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?sf:rf;e.setTexture2D(t||s,i)}function F_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||of,i)}function B_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lf,i)}function G_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||af,i)}function z_(r){switch(r){case 5126:return y_;case 35664:return S_;case 35665:return T_;case 35666:return E_;case 35674:return b_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return I_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return G_}}function k_(r,t){r.uniform1fv(this.addr,t)}function H_(r,t){const e=Fr(t,this.size,2);r.uniform2fv(this.addr,e)}function V_(r,t){const e=Fr(t,this.size,3);r.uniform3fv(this.addr,e)}function W_(r,t){const e=Fr(t,this.size,4);r.uniform4fv(this.addr,e)}function X_(r,t){const e=Fr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function q_(r,t){const e=Fr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Y_(r,t){const e=Fr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function j_(r,t){r.uniform1iv(this.addr,t)}function Z_(r,t){r.uniform2iv(this.addr,t)}function K_(r,t){r.uniform3iv(this.addr,t)}function $_(r,t){r.uniform4iv(this.addr,t)}function J_(r,t){r.uniform1uiv(this.addr,t)}function Q_(r,t){r.uniform2uiv(this.addr,t)}function tv(r,t){r.uniform3uiv(this.addr,t)}function ev(r,t){r.uniform4uiv(this.addr,t)}function nv(r,t,e){const n=this.cache,i=t.length,s=ba(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||rf,s[o])}function iv(r,t,e){const n=this.cache,i=t.length,s=ba(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||of,s[o])}function rv(r,t,e){const n=this.cache,i=t.length,s=ba(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lf,s[o])}function sv(r,t,e){const n=this.cache,i=t.length,s=ba(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||af,s[o])}function av(r){switch(r){case 5126:return k_;case 35664:return H_;case 35665:return V_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return j_;case 35667:case 35671:return Z_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return Q_;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}class ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=z_(e.type)}}class lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}}class cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function rh(r,t){r.seq.push(t),r.map[t.id]=t}function hv(r,t,e){const n=r.name,i=n.length;for(uo.lastIndex=0;;){const s=uo.exec(n),o=uo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rh(e,c===void 0?new ov(a,r,t):new lv(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new cv(a),rh(e,u)),e=u}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);hv(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function sh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const uv=37297;let fv=0;function dv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function pv(r){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(r);let n;switch(t===e?n="":t===da&&e===fa?n="LinearDisplayP3ToLinearSRGB":t===fa&&e===da&&(n="LinearSRGBToLinearDisplayP3"),r){case ei:case Ta:return[n,"LinearTransferOETF"];case Re:case ul:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function ah(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+dv(r.getShaderSource(t),o)}else return i}function mv(r,t){const e=pv(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gv(r,t){let e;switch(t){case gp:e="Linear";break;case _p:e="Reinhard";break;case vp:e="OptimizedCineon";break;case Iu:e="ACESFilmic";break;case Mp:e="AgX";break;case xp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _v(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function vv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xr).join(`
`)}function xv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xr(r){return r!==""}function oh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(r){return r.replace(yv,Tv)}const Sv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tv(r,t){let e=Bt[t];if(e===void 0){const n=Sv.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}const Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(r){return r.replace(Ev,bv)}function bv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hh(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case Pr:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Rv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Du:t="ENVMAP_BLENDING_MULTIPLY";break;case pp:t="ENVMAP_BLENDING_MIX";break;case mp:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lv(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=wv(e),c=Av(e),h=Cv(e),u=Rv(e),f=Pv(e),m=e.isWebGL2?"":_v(e),_=vv(e),g=xv(s),d=i.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),x.length>0&&(x+=`
`)):(p=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),x=[m,hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Bt.tonemapping_pars_fragment:"",e.toneMapping!==_i?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=ko(o),o=oh(o,e),o=lh(o,e),a=ko(a),a=oh(a,e),a=lh(a,e),o=ch(o),a=ch(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+p+o,w=v+x+a,A=sh(i,i.VERTEX_SHADER,S),E=sh(i,i.FRAGMENT_SHADER,w);i.attachShader(d,A),i.attachShader(d,E),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d);function I(F){if(r.debug.checkShaderErrors){const $=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(E).trim();let z=!0,K=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,d,A,E);else{const j=ah(i,A,"vertex"),q=ah(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+j+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(L===""||N==="")&&(K=!1);K&&(F.diagnostics={runnable:z,programLog:$,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:x}})}i.deleteShader(A),i.deleteShader(E),M=new Qs(i,d),T=Mv(i,d)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(d,uv)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=E,this}let Dv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Dv++,this.code=t,this.usedTimes=0}}function Nv(r,t,e,n,i,s,o){const a=new dl,l=new Iv,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function d(M,T,G,F,$){const L=F.fog,N=$.geometry,z=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),j=K&&K.mapping===Sa?K.image.height:null,q=_[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const P=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,R=P!==void 0?P.length:0;let Z=0;N.morphAttributes.position!==void 0&&(Z=1),N.morphAttributes.normal!==void 0&&(Z=2),N.morphAttributes.color!==void 0&&(Z=3);let O,H,J,at;if(q){const ze=In[q];O=ze.vertexShader,H=ze.fragmentShader}else O=M.vertexShader,H=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),at=l.getFragmentShaderID(M);const et=r.getRenderTarget(),ht=$.isInstancedMesh===!0,gt=$.isBatchedMesh===!0,pt=!!M.map,Mt=!!M.matcap,B=!!K,Yt=!!M.aoMap,ot=!!M.lightMap,yt=!!M.bumpMap,mt=!!M.normalMap,Xt=!!M.displacementMap,bt=!!M.emissiveMap,C=!!M.metalnessMap,y=!!M.roughnessMap,V=M.anisotropy>0,rt=M.clearcoat>0,it=M.iridescence>0,st=M.sheen>0,St=M.transmission>0,ut=V&&!!M.anisotropyMap,vt=rt&&!!M.clearcoatMap,wt=rt&&!!M.clearcoatNormalMap,Ut=rt&&!!M.clearcoatRoughnessMap,nt=it&&!!M.iridescenceMap,jt=it&&!!M.iridescenceThicknessMap,Gt=st&&!!M.sheenColorMap,Dt=st&&!!M.sheenRoughnessMap,Et=!!M.specularMap,xt=!!M.specularColorMap,Ft=!!M.specularIntensityMap,Kt=St&&!!M.transmissionMap,de=St&&!!M.thicknessMap,kt=!!M.gradientMap,ct=!!M.alphaMap,D=M.alphaTest>0,ft=!!M.alphaHash,dt=!!M.extensions,Pt=!!N.attributes.uv1,At=!!N.attributes.uv2,ee=!!N.attributes.uv3;let ne=_i;return M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ne=r.toneMapping),{isWebGL2:h,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:O,fragmentShader:H,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:gt,instancing:ht,instancingColor:ht&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ei,map:pt,matcap:Mt,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:j,aoMap:Yt,lightMap:ot,bumpMap:yt,normalMap:mt,displacementMap:f&&Xt,emissiveMap:bt,normalMapObjectSpace:mt&&M.normalMapType===Dp,normalMapTangentSpace:mt&&M.normalMapType===Vu,metalnessMap:C,roughnessMap:y,anisotropy:V,anisotropyMap:ut,clearcoat:rt,clearcoatMap:vt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Ut,iridescence:it,iridescenceMap:nt,iridescenceThicknessMap:jt,sheen:st,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:Et,specularColorMap:xt,specularIntensityMap:Ft,transmission:St,transmissionMap:Kt,thicknessMap:de,gradientMap:kt,opaque:M.transparent===!1&&M.blending===vn,alphaMap:ct,alphaTest:D,alphaHash:ft,combine:M.combine,mapUv:pt&&g(M.map.channel),aoMapUv:Yt&&g(M.aoMap.channel),lightMapUv:ot&&g(M.lightMap.channel),bumpMapUv:yt&&g(M.bumpMap.channel),normalMapUv:mt&&g(M.normalMap.channel),displacementMapUv:Xt&&g(M.displacementMap.channel),emissiveMapUv:bt&&g(M.emissiveMap.channel),metalnessMapUv:C&&g(M.metalnessMap.channel),roughnessMapUv:y&&g(M.roughnessMap.channel),anisotropyMapUv:ut&&g(M.anisotropyMap.channel),clearcoatMapUv:vt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(M.sheenRoughnessMap.channel),specularMapUv:Et&&g(M.specularMap.channel),specularColorMapUv:xt&&g(M.specularColorMap.channel),specularIntensityMapUv:Ft&&g(M.specularIntensityMap.channel),transmissionMapUv:Kt&&g(M.transmissionMap.channel),thicknessMapUv:de&&g(M.thicknessMap.channel),alphaMapUv:ct&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(mt||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:At,vertexUv3s:ee,pointsUvs:$.isPoints===!0&&!!N.attributes.uv&&(pt||ct),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,useLegacyLights:r._useLegacyLights,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&$t.getTransfer(M.map.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ye,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:dt&&M.extensions.derivatives===!0,extensionFragDepth:dt&&M.extensions.fragDepth===!0,extensionDrawBuffers:dt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(x(T,M),v(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const T=_[M.type];let G;if(T){const F=In[T];G=Ir.clone(F.uniforms)}else G=M.uniforms;return G}function w(M,T){let G;for(let F=0,$=c.length;F<$;F++){const L=c[F];if(L.cacheKey===T){G=L,++G.usedTimes;break}}return G===void 0&&(G=new Lv(r,T,M,s),c.push(G)),G}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:I}}function Ov(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function uh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,_,g,d){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:d},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=d),t++,p}function a(u,f,m,_,g,d){const p=o(u,f,m,_,g,d);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(u,f,m,_,g,d){const p=o(u,f,m,_,g,d);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Fv),n.length>1&&n.sort(f||uh),i.length>1&&i.sort(f||uh)}function h(){for(let u=t,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Bv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new fh,r.set(n,[o])):i>=s.length?(o=new fh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Gv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Rt};break;case"SpotLight":e={position:new U,direction:new U,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function zv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let kv=0;function Hv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Vv(r,t){const e=new Gv,n=zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const s=new U,o=new ae,a=new ae;function l(h,u){let f=0,m=0,_=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,d=0,p=0,x=0,v=0,S=0,w=0,A=0,E=0,I=0,M=0;h.sort(Hv);const T=u===!0?Math.PI:1;for(let F=0,$=h.length;F<$;F++){const L=h[F],N=L.color,z=L.intensity,K=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*z*T,m+=N.g*z*T,_+=N.b*z*T;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],z);M++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const P=L.shadow,R=n.get(L);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.directionalShadow[g]=R,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=L.shadow.matrix,S++}i.directional[g]=q,g++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(z*T),q.distance=K,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[p]=q;const P=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,P.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[p]=P.matrix,L.castShadow){const R=n.get(L);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=j,A++}p++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(N).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=q,x++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*T),q.distance=L.distance,q.decay=L.decay,L.castShadow){const P=L.shadow,R=n.get(L);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,R.shadowCameraNear=P.camera.near,R.shadowCameraFar=P.camera.far,i.pointShadow[d]=R,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=L.shadow.matrix,w++}i.point[d]=q,d++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z*T),q.groundColor.copy(L.groundColor).multiplyScalar(z*T),i.hemi[v]=q,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const G=i.hash;(G.directionalLength!==g||G.pointLength!==d||G.spotLength!==p||G.rectAreaLength!==x||G.hemiLength!==v||G.numDirectionalShadows!==S||G.numPointShadows!==w||G.numSpotShadows!==A||G.numSpotMaps!==E||G.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=x,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=M,G.directionalLength=g,G.pointLength=d,G.spotLength=p,G.rectAreaLength=x,G.hemiLength=v,G.numDirectionalShadows=S,G.numPointShadows=w,G.numSpotShadows=A,G.numSpotMaps=E,G.numLightProbes=M,i.version=kv++)}function c(h,u){let f=0,m=0,_=0,g=0,d=0;const p=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(S.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),d++}}}return{setup:l,setupView:c,state:i}}function dh(r,t){const e=new Vv(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wv(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new dh(r,t),e.set(s,[l])):o>=a.length?(l=new dh(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Xv extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qv extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
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
}`;function Zv(r,t,e){let n=new pl;const i=new Lt,s=new Lt,o=new re,a=new Xv({depthPacking:Lp}),l=new qv,c={},h=e.maxTextureSize,u={[ti]:je,[je]:ti,[ye]:ye},f=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Yv,fragmentShader:jv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Se;_.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wt(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let p=this.type;this.render=function(A,E,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),T=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=p!==Wn&&this.type===Wn,L=p===Wn&&this.type!==Wn;for(let N=0,z=A.length;N<z;N++){const K=A[N],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const q=j.getFrameExtents();if(i.multiply(q),s.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,j.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,j.mapSize.y=s.y)),j.map===null||$===!0||L===!0){const R=this.type!==Wn?{minFilter:qe,magFilter:qe}:{};j.map!==null&&j.map.dispose(),j.map=new Sn(i.x,i.y,R),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const P=j.getViewportCount();for(let R=0;R<P;R++){const Z=j.getViewport(R);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),F.viewport(o),j.updateMatrices(K,R),n=j.getFrustum(),S(E,I,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Wn&&x(j,I),j.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(M,T,G)};function x(A,E){const I=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,I,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,I,m,g,null)}function v(A,E,I,M){let T=null;const G=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)T=G;else if(T=I.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=T.uuid,$=E.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let N=L[$];N===void 0&&(N=T.clone(),L[$]=N,E.addEventListener("dispose",w)),T=N}if(T.visible=E.visible,T.wireframe=E.wireframe,M===Wn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,I.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const F=r.properties.get(T);F.light=I}return T}function S(A,E,I,M,T){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const $=t.update(A),L=A.material;if(Array.isArray(L)){const N=$.groups;for(let z=0,K=N.length;z<K;z++){const j=N[z],q=L[j.materialIndex];if(q&&q.visible){const P=v(A,q,M,T);A.onBeforeShadow(r,A,E,I,$,P,j),r.renderBufferDirect(I,null,$,P,A,j),A.onAfterShadow(r,A,E,I,$,P,j)}}}else if(L.visible){const N=v(A,L,M,T);A.onBeforeShadow(r,A,E,I,$,N,null),r.renderBufferDirect(I,null,$,N,A,null),A.onAfterShadow(r,A,E,I,$,N,null)}}const F=A.children;for(let $=0,L=F.length;$<L;$++)S(F[$],E,I,M,T)}function w(A){A.target.removeEventListener("dispose",w);for(const I in c){const M=c[I],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Kv(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const ft=new re;let dt=null;const Pt=new re(0,0,0,0);return{setMask:function(At){dt!==At&&!D&&(r.colorMask(At,At,At,At),dt=At)},setLocked:function(At){D=At},setClear:function(At,ee,ne,be,ze){ze===!0&&(At*=be,ee*=be,ne*=be),ft.set(At,ee,ne,be),Pt.equals(ft)===!1&&(r.clearColor(At,ee,ne,be),Pt.copy(ft))},reset:function(){D=!1,dt=null,Pt.set(-1,0,0,0)}}}function s(){let D=!1,ft=null,dt=null,Pt=null;return{setTest:function(At){At?gt(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(At){ft!==At&&!D&&(r.depthMask(At),ft=At)},setFunc:function(At){if(dt!==At){switch(At){case op:r.depthFunc(r.NEVER);break;case lp:r.depthFunc(r.ALWAYS);break;case cp:r.depthFunc(r.LESS);break;case ca:r.depthFunc(r.LEQUAL);break;case hp:r.depthFunc(r.EQUAL);break;case up:r.depthFunc(r.GEQUAL);break;case fp:r.depthFunc(r.GREATER);break;case dp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=At}},setLocked:function(At){D=At},setClear:function(At){Pt!==At&&(r.clearDepth(At),Pt=At)},reset:function(){D=!1,ft=null,dt=null,Pt=null}}}function o(){let D=!1,ft=null,dt=null,Pt=null,At=null,ee=null,ne=null,be=null,ze=null;return{setTest:function(ie){D||(ie?gt(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!D&&(r.stencilMask(ie),ft=ie)},setFunc:function(ie,ke,Pn){(dt!==ie||Pt!==ke||At!==Pn)&&(r.stencilFunc(ie,ke,Pn),dt=ie,Pt=ke,At=Pn)},setOp:function(ie,ke,Pn){(ee!==ie||ne!==ke||be!==Pn)&&(r.stencilOp(ie,ke,Pn),ee=ie,ne=ke,be=Pn)},setLocked:function(ie){D=ie},setClear:function(ie){ze!==ie&&(r.clearStencil(ie),ze=ie)},reset:function(){D=!1,ft=null,dt=null,Pt=null,At=null,ee=null,ne=null,be=null,ze=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},_=new WeakMap,g=[],d=null,p=!1,x=null,v=null,S=null,w=null,A=null,E=null,I=null,M=new Rt(0,0,0),T=0,G=!1,F=null,$=null,L=null,N=null,z=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,q=0;const P=r.getParameter(r.VERSION);P.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(P)[1]),j=q>=1):P.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),j=q>=2);let R=null,Z={};const O=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),J=new re().fromArray(O),at=new re().fromArray(H);function et(D,ft,dt,Pt){const At=new Uint8Array(4),ee=r.createTexture();r.bindTexture(D,ee),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<dt;ne++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(ft+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return ee}const ht={};ht[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(r.DEPTH_TEST),l.setFunc(ca),bt(!1),C(jl),gt(r.CULL_FACE),mt(Kn);function gt(D){f[D]!==!0&&(r.enable(D),f[D]=!0)}function pt(D){f[D]!==!1&&(r.disable(D),f[D]=!1)}function Mt(D,ft){return m[D]!==ft?(r.bindFramebuffer(D,ft),m[D]=ft,n&&(D===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ft),D===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function B(D,ft){let dt=g,Pt=!1;if(D)if(dt=_.get(ft),dt===void 0&&(dt=[],_.set(ft,dt)),D.isWebGLMultipleRenderTargets){const At=D.texture;if(dt.length!==At.length||dt[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,ne=At.length;ee<ne;ee++)dt[ee]=r.COLOR_ATTACHMENT0+ee;dt.length=At.length,Pt=!0}}else dt[0]!==r.COLOR_ATTACHMENT0&&(dt[0]=r.COLOR_ATTACHMENT0,Pt=!0);else dt[0]!==r.BACK&&(dt[0]=r.BACK,Pt=!0);Pt&&(e.isWebGL2?r.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Yt(D){return d!==D?(r.useProgram(D),d=D,!0):!1}const ot={[Ni]:r.FUNC_ADD,[qd]:r.FUNC_SUBTRACT,[Yd]:r.FUNC_REVERSE_SUBTRACT};if(n)ot[$l]=r.MIN,ot[Jl]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(ot[$l]=D.MIN_EXT,ot[Jl]=D.MAX_EXT)}const yt={[jd]:r.ZERO,[Zd]:r.ONE,[Kd]:r.SRC_COLOR,[Uo]:r.SRC_ALPHA,[np]:r.SRC_ALPHA_SATURATE,[tp]:r.DST_COLOR,[Jd]:r.DST_ALPHA,[$d]:r.ONE_MINUS_SRC_COLOR,[No]:r.ONE_MINUS_SRC_ALPHA,[ep]:r.ONE_MINUS_DST_COLOR,[Qd]:r.ONE_MINUS_DST_ALPHA,[ip]:r.CONSTANT_COLOR,[rp]:r.ONE_MINUS_CONSTANT_COLOR,[sp]:r.CONSTANT_ALPHA,[ap]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(D,ft,dt,Pt,At,ee,ne,be,ze,ie){if(D===Kn){p===!0&&(pt(r.BLEND),p=!1);return}if(p===!1&&(gt(r.BLEND),p=!0),D!==Xd){if(D!==x||ie!==G){if((v!==Ni||A!==Ni)&&(r.blendEquation(r.FUNC_ADD),v=Ni,A=Ni),ie)switch(D){case vn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case We:r.blendFunc(r.ONE,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case We:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,E=null,I=null,M.set(0,0,0),T=0,x=D,G=ie}return}At=At||ft,ee=ee||dt,ne=ne||Pt,(ft!==v||At!==A)&&(r.blendEquationSeparate(ot[ft],ot[At]),v=ft,A=At),(dt!==S||Pt!==w||ee!==E||ne!==I)&&(r.blendFuncSeparate(yt[dt],yt[Pt],yt[ee],yt[ne]),S=dt,w=Pt,E=ee,I=ne),(be.equals(M)===!1||ze!==T)&&(r.blendColor(be.r,be.g,be.b,ze),M.copy(be),T=ze),x=D,G=!1}function Xt(D,ft){D.side===ye?pt(r.CULL_FACE):gt(r.CULL_FACE);let dt=D.side===je;ft&&(dt=!dt),bt(dt),D.blending===vn&&D.transparent===!1?mt(Kn):mt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Pt=D.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(D){F!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),F=D)}function C(D){D!==Hd?(gt(r.CULL_FACE),D!==$&&(D===jl?r.cullFace(r.BACK):D===Vd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),$=D}function y(D){D!==L&&(j&&r.lineWidth(D),L=D)}function V(D,ft,dt){D?(gt(r.POLYGON_OFFSET_FILL),(N!==ft||z!==dt)&&(r.polygonOffset(ft,dt),N=ft,z=dt)):pt(r.POLYGON_OFFSET_FILL)}function rt(D){D?gt(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function it(D){D===void 0&&(D=r.TEXTURE0+K-1),R!==D&&(r.activeTexture(D),R=D)}function st(D,ft,dt){dt===void 0&&(R===null?dt=r.TEXTURE0+K-1:dt=R);let Pt=Z[dt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Z[dt]=Pt),(Pt.type!==D||Pt.texture!==ft)&&(R!==dt&&(r.activeTexture(dt),R=dt),r.bindTexture(D,ft||ht[D]),Pt.type=D,Pt.texture=ft)}function St(){const D=Z[R];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){J.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function Kt(D){at.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function de(D,ft){let dt=u.get(ft);dt===void 0&&(dt=new WeakMap,u.set(ft,dt));let Pt=dt.get(D);Pt===void 0&&(Pt=r.getUniformBlockIndex(ft,D.name),dt.set(D,Pt))}function kt(D,ft){const Pt=u.get(ft).get(D);h.get(ft)!==Pt&&(r.uniformBlockBinding(ft,Pt,D.__bindingPointIndex),h.set(ft,Pt))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},R=null,Z={},m={},_=new WeakMap,g=[],d=null,p=!1,x=null,v=null,S=null,w=null,A=null,E=null,I=null,M=new Rt(0,0,0),T=0,G=!1,F=null,$=null,L=null,N=null,z=null,J.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:gt,disable:pt,bindFramebuffer:Mt,drawBuffers:B,useProgram:Yt,setBlending:mt,setMaterial:Xt,setFlipSided:bt,setCullFace:C,setLineWidth:y,setPolygonOffset:V,setScissorTest:rt,activeTexture:it,bindTexture:st,unbindTexture:St,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:Et,texImage3D:xt,updateUBOMapping:de,uniformBlockBinding:kt,texStorage2D:Gt,texStorage3D:Dt,texSubImage2D:wt,texSubImage3D:Ut,compressedTexSubImage2D:nt,compressedTexSubImage3D:jt,scissor:Ft,viewport:Kt,reset:ct}}function $v(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return m?new OffscreenCanvas(C,y):ds("canvas")}function g(C,y,V,rt){let it=1;if((C.width>rt||C.height>rt)&&(it=rt/Math.max(C.width,C.height)),it<1||y===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const st=y?ma:Math.floor,St=st(it*C.width),ut=st(it*C.height);u===void 0&&(u=_(St,ut));const vt=V?_(St,ut):u;return vt.width=St,vt.height=ut,vt.getContext("2d").drawImage(C,0,0,St,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+St+"x"+ut+")."),vt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function d(C){return zo(C.width)&&zo(C.height)}function p(C){return a?!1:C.wrapS!==Cn||C.wrapT!==Cn||C.minFilter!==qe&&C.minFilter!==Pe}function x(C,y){return C.generateMipmaps&&y&&C.minFilter!==qe&&C.minFilter!==Pe}function v(C){r.generateMipmap(C)}function S(C,y,V,rt,it=!1){if(a===!1)return y;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=y;if(y===r.RED&&(V===r.FLOAT&&(st=r.R32F),V===r.HALF_FLOAT&&(st=r.R16F),V===r.UNSIGNED_BYTE&&(st=r.R8)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(st=r.R8UI),V===r.UNSIGNED_SHORT&&(st=r.R16UI),V===r.UNSIGNED_INT&&(st=r.R32UI),V===r.BYTE&&(st=r.R8I),V===r.SHORT&&(st=r.R16I),V===r.INT&&(st=r.R32I)),y===r.RG&&(V===r.FLOAT&&(st=r.RG32F),V===r.HALF_FLOAT&&(st=r.RG16F),V===r.UNSIGNED_BYTE&&(st=r.RG8)),y===r.RGBA){const St=it?ua:$t.getTransfer(rt);V===r.FLOAT&&(st=r.RGBA32F),V===r.HALF_FLOAT&&(st=r.RGBA16F),V===r.UNSIGNED_BYTE&&(st=St===se?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)}return(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function w(C,y,V){return x(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==Pe?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){return C===qe||C===Ql||C===Ba?r.NEAREST:r.LINEAR}function E(C){const y=C.target;y.removeEventListener("dispose",E),M(y),y.isVideoTexture&&h.delete(y)}function I(C){const y=C.target;y.removeEventListener("dispose",I),G(y)}function M(C){const y=n.get(C);if(y.__webglInit===void 0)return;const V=C.source,rt=f.get(V);if(rt){const it=rt[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(C),Object.keys(rt).length===0&&f.delete(V)}n.remove(C)}function T(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const V=C.source,rt=f.get(V);delete rt[y.__cacheKey],o.memory.textures--}function G(C){const y=C.texture,V=n.get(C),rt=n.get(y);if(rt.__webglTexture!==void 0&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(V.__webglFramebuffer[it]))for(let st=0;st<V.__webglFramebuffer[it].length;st++)r.deleteFramebuffer(V.__webglFramebuffer[it][st]);else r.deleteFramebuffer(V.__webglFramebuffer[it]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[it])}else{if(Array.isArray(V.__webglFramebuffer))for(let it=0;it<V.__webglFramebuffer.length;it++)r.deleteFramebuffer(V.__webglFramebuffer[it]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let it=0;it<V.__webglColorRenderbuffer.length;it++)V.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[it]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let it=0,st=y.length;it<st;it++){const St=n.get(y[it]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(y[it])}n.remove(y),n.remove(C)}let F=0;function $(){F=0}function L(){const C=F;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),F+=1,C}function N(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){const V=n.get(C);if(C.isVideoTexture&&Xt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const rt=C.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,C,y);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function K(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function j(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){J(V,C,y);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function q(C,y){const V=n.get(C);if(C.version>0&&V.__version!==C.version){at(V,C,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const P={[ha]:r.REPEAT,[Cn]:r.CLAMP_TO_EDGE,[Bo]:r.MIRRORED_REPEAT},R={[qe]:r.NEAREST,[Ql]:r.NEAREST_MIPMAP_NEAREST,[Ba]:r.NEAREST_MIPMAP_LINEAR,[Pe]:r.LINEAR,[yp]:r.LINEAR_MIPMAP_NEAREST,[us]:r.LINEAR_MIPMAP_LINEAR},Z={[Ip]:r.NEVER,[Gp]:r.ALWAYS,[Up]:r.LESS,[Wu]:r.LEQUAL,[Np]:r.EQUAL,[Bp]:r.GEQUAL,[Op]:r.GREATER,[Fp]:r.NOTEQUAL};function O(C,y,V){if(V?(r.texParameteri(C,r.TEXTURE_WRAP_S,P[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,P[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,P[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,R[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,R[y.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Cn||y.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,A(y.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==qe&&y.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Z[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===qe||y.minFilter!==Ba&&y.minFilter!==us||y.type===pi&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===$n&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(C,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function H(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",E));const rt=y.source;let it=f.get(rt);it===void 0&&(it={},f.set(rt,it));const st=N(y);if(st!==C.__cacheKey){it[st]===void 0&&(it[st]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[st].usedTimes++;const St=it[C.__cacheKey];St!==void 0&&(it[C.__cacheKey].usedTimes--,St.usedTimes===0&&T(y)),C.__cacheKey=st,C.__webglTexture=it[st].texture}return V}function J(C,y,V){let rt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(rt=r.TEXTURE_3D);const it=H(C,y),st=y.source;e.bindTexture(rt,C.__webglTexture,r.TEXTURE0+V);const St=n.get(st);if(st.version!==St.__version||it===!0){e.activeTexture(r.TEXTURE0+V);const ut=$t.getPrimaries($t.workingColorSpace),vt=y.colorSpace===xn?null:$t.getPrimaries(y.colorSpace),wt=y.colorSpace===xn||ut===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ut=p(y)&&d(y.image)===!1;let nt=g(y.image,Ut,!1,i.maxTextureSize);nt=bt(y,nt);const jt=d(nt)||a,Gt=s.convert(y.format,y.colorSpace);let Dt=s.convert(y.type),Et=S(y.internalFormat,Gt,Dt,y.colorSpace,y.isVideoTexture);O(rt,y,jt);let xt;const Ft=y.mipmaps,Kt=a&&y.isVideoTexture!==!0&&Et!==ku,de=St.__version===void 0||it===!0,kt=w(y,nt,jt);if(y.isDepthTexture)Et=r.DEPTH_COMPONENT,a?y.type===pi?Et=r.DEPTH_COMPONENT32F:y.type===di?Et=r.DEPTH_COMPONENT24:y.type===Xi?Et=r.DEPTH24_STENCIL8:Et=r.DEPTH_COMPONENT16:y.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===qi&&Et===r.DEPTH_COMPONENT&&y.type!==hl&&y.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=di,Dt=s.convert(y.type)),y.format===Lr&&Et===r.DEPTH_COMPONENT&&(Et=r.DEPTH_STENCIL,y.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Xi,Dt=s.convert(y.type))),de&&(Kt?e.texStorage2D(r.TEXTURE_2D,1,Et,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Et,nt.width,nt.height,0,Gt,Dt,null));else if(y.isDataTexture)if(Ft.length>0&&jt){Kt&&de&&e.texStorage2D(r.TEXTURE_2D,kt,Et,Ft[0].width,Ft[0].height);for(let ct=0,D=Ft.length;ct<D;ct++)xt=Ft[ct],Kt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,xt.width,xt.height,Gt,Dt,xt.data):e.texImage2D(r.TEXTURE_2D,ct,Et,xt.width,xt.height,0,Gt,Dt,xt.data);y.generateMipmaps=!1}else Kt?(de&&e.texStorage2D(r.TEXTURE_2D,kt,Et,nt.width,nt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,Gt,Dt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Et,nt.width,nt.height,0,Gt,Dt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Et,Ft[0].width,Ft[0].height,nt.depth);for(let ct=0,D=Ft.length;ct<D;ct++)xt=Ft[ct],y.format!==Rn?Gt!==null?Kt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,nt.depth,Gt,xt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,Et,xt.width,xt.height,nt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,nt.depth,Gt,Dt,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,Et,xt.width,xt.height,nt.depth,0,Gt,Dt,xt.data)}else{Kt&&de&&e.texStorage2D(r.TEXTURE_2D,kt,Et,Ft[0].width,Ft[0].height);for(let ct=0,D=Ft.length;ct<D;ct++)xt=Ft[ct],y.format!==Rn?Gt!==null?Kt?e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,xt.width,xt.height,Gt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,Et,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,xt.width,xt.height,Gt,Dt,xt.data):e.texImage2D(r.TEXTURE_2D,ct,Et,xt.width,xt.height,0,Gt,Dt,xt.data)}else if(y.isDataArrayTexture)Kt?(de&&e.texStorage3D(r.TEXTURE_2D_ARRAY,kt,Et,nt.width,nt.height,nt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Gt,Dt,nt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Et,nt.width,nt.height,nt.depth,0,Gt,Dt,nt.data);else if(y.isData3DTexture)Kt?(de&&e.texStorage3D(r.TEXTURE_3D,kt,Et,nt.width,nt.height,nt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Gt,Dt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Et,nt.width,nt.height,nt.depth,0,Gt,Dt,nt.data);else if(y.isFramebufferTexture){if(de)if(Kt)e.texStorage2D(r.TEXTURE_2D,kt,Et,nt.width,nt.height);else{let ct=nt.width,D=nt.height;for(let ft=0;ft<kt;ft++)e.texImage2D(r.TEXTURE_2D,ft,Et,ct,D,0,Gt,Dt,null),ct>>=1,D>>=1}}else if(Ft.length>0&&jt){Kt&&de&&e.texStorage2D(r.TEXTURE_2D,kt,Et,Ft[0].width,Ft[0].height);for(let ct=0,D=Ft.length;ct<D;ct++)xt=Ft[ct],Kt?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,Gt,Dt,xt):e.texImage2D(r.TEXTURE_2D,ct,Et,Gt,Dt,xt);y.generateMipmaps=!1}else Kt?(de&&e.texStorage2D(r.TEXTURE_2D,kt,Et,nt.width,nt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,Dt,nt)):e.texImage2D(r.TEXTURE_2D,0,Et,Gt,Dt,nt);x(y,jt)&&v(rt),St.__version=st.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function at(C,y,V){if(y.image.length!==6)return;const rt=H(C,y),it=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const st=n.get(it);if(it.version!==st.__version||rt===!0){e.activeTexture(r.TEXTURE0+V);const St=$t.getPrimaries($t.workingColorSpace),ut=y.colorSpace===xn?null:$t.getPrimaries(y.colorSpace),vt=y.colorSpace===xn||St===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const wt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,nt=[];for(let ct=0;ct<6;ct++)!wt&&!Ut?nt[ct]=g(y.image[ct],!1,!0,i.maxCubemapSize):nt[ct]=Ut?y.image[ct].image:y.image[ct],nt[ct]=bt(y,nt[ct]);const jt=nt[0],Gt=d(jt)||a,Dt=s.convert(y.format,y.colorSpace),Et=s.convert(y.type),xt=S(y.internalFormat,Dt,Et,y.colorSpace),Ft=a&&y.isVideoTexture!==!0,Kt=st.__version===void 0||rt===!0;let de=w(y,jt,Gt);O(r.TEXTURE_CUBE_MAP,y,Gt);let kt;if(wt){Ft&&Kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,de,xt,jt.width,jt.height);for(let ct=0;ct<6;ct++){kt=nt[ct].mipmaps;for(let D=0;D<kt.length;D++){const ft=kt[D];y.format!==Rn?Dt!==null?Ft?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,xt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,0,0,ft.width,ft.height,Dt,Et,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,xt,ft.width,ft.height,0,Dt,Et,ft.data)}}}else{kt=y.mipmaps,Ft&&Kt&&(kt.length>0&&de++,e.texStorage2D(r.TEXTURE_CUBE_MAP,de,xt,nt[0].width,nt[0].height));for(let ct=0;ct<6;ct++)if(Ut){Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,nt[ct].width,nt[ct].height,Dt,Et,nt[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,nt[ct].width,nt[ct].height,0,Dt,Et,nt[ct].data);for(let D=0;D<kt.length;D++){const dt=kt[D].image[ct].image;Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,0,0,dt.width,dt.height,Dt,Et,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,xt,dt.width,dt.height,0,Dt,Et,dt.data)}}else{Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Dt,Et,nt[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,Dt,Et,nt[ct]);for(let D=0;D<kt.length;D++){const ft=kt[D];Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,0,0,Dt,Et,ft.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,xt,Dt,Et,ft.image[ct])}}}x(y,Gt)&&v(r.TEXTURE_CUBE_MAP),st.__version=it.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function et(C,y,V,rt,it,st){const St=s.convert(V.format,V.colorSpace),ut=s.convert(V.type),vt=S(V.internalFormat,St,ut,V.colorSpace);if(!n.get(y).__hasExternalTextures){const Ut=Math.max(1,y.width>>st),nt=Math.max(1,y.height>>st);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,st,vt,Ut,nt,y.depth,0,St,ut,null):e.texImage2D(it,st,vt,Ut,nt,0,St,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),mt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,it,n.get(V).__webglTexture,0,yt(y)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,it,n.get(V).__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(C,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer&&!y.stencilBuffer){let rt=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||mt(y)){const it=y.depthTexture;it&&it.isDepthTexture&&(it.type===pi?rt=r.DEPTH_COMPONENT32F:it.type===di&&(rt=r.DEPTH_COMPONENT24));const st=yt(y);mt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,rt,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,st,rt,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,rt,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(y.depthBuffer&&y.stencilBuffer){const rt=yt(y);V&&mt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,y.width,y.height):mt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const rt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let it=0;it<rt.length;it++){const st=rt[it],St=s.convert(st.format,st.colorSpace),ut=s.convert(st.type),vt=S(st.internalFormat,St,ut,st.colorSpace),wt=yt(y);V&&mt(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,vt,y.width,y.height):mt(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,vt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,vt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const rt=n.get(y.depthTexture).__webglTexture,it=yt(y);if(y.depthTexture.format===qi)mt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(y.depthTexture.format===Lr)mt(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function pt(C){const y=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,C)}else if(V){y.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[rt]),y.__webglDepthbuffer[rt]=r.createRenderbuffer(),ht(y.__webglDepthbuffer[rt],C,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),ht(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(C,y,V){const rt=n.get(C);y!==void 0&&et(rt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&pt(C)}function B(C){const y=C.texture,V=n.get(C),rt=n.get(y);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=y.version,o.memory.textures++);const it=C.isWebGLCubeRenderTarget===!0,st=C.isWebGLMultipleRenderTargets===!0,St=d(C)||a;if(it){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let vt=0;vt<y.mipmaps.length;vt++)V.__webglFramebuffer[ut][vt]=r.createFramebuffer()}else V.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)V.__webglFramebuffer[ut]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(st)if(i.drawBuffers){const ut=C.texture;for(let vt=0,wt=ut.length;vt<wt;vt++){const Ut=n.get(ut[vt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&mt(C)===!1){const ut=st?y:[y];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let vt=0;vt<ut.length;vt++){const wt=ut[vt];V.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[vt]);const Ut=s.convert(wt.format,wt.colorSpace),nt=s.convert(wt.type),jt=S(wt.internalFormat,Ut,nt,wt.colorSpace,C.isXRRenderTarget===!0),Gt=yt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,jt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,V.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(it){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),O(r.TEXTURE_CUBE_MAP,y,St);for(let ut=0;ut<6;ut++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)et(V.__webglFramebuffer[ut][vt],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else et(V.__webglFramebuffer[ut],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);x(y,St)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const ut=C.texture;for(let vt=0,wt=ut.length;vt<wt;vt++){const Ut=ut[vt],nt=n.get(Ut);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),O(r.TEXTURE_2D,Ut,St),et(V.__webglFramebuffer,C,Ut,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),x(Ut,St)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ut=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,rt.__webglTexture),O(ut,y,St),a&&y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)et(V.__webglFramebuffer[vt],C,y,r.COLOR_ATTACHMENT0,ut,vt);else et(V.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,ut,0);x(y,St)&&v(ut),e.unbindTexture()}C.depthBuffer&&pt(C)}function Yt(C){const y=d(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let rt=0,it=V.length;rt<it;rt++){const st=V[rt];if(x(st,y)){const St=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=n.get(st).__webglTexture;e.bindTexture(St,ut),v(St),e.unbindTexture()}}}function ot(C){if(a&&C.samples>0&&mt(C)===!1){const y=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,rt=C.height;let it=r.COLOR_BUFFER_BIT;const st=[],St=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(C),vt=C.isWebGLMultipleRenderTargets===!0;if(vt)for(let wt=0;wt<y.length;wt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let wt=0;wt<y.length;wt++){st.push(r.COLOR_ATTACHMENT0+wt),C.depthBuffer&&st.push(St);const Ut=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ut===!1&&(C.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]),Ut===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[St]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[St])),vt){const nt=n.get(y[wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,nt,0)}r.blitFramebuffer(0,0,V,rt,0,0,V,rt,it,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let wt=0;wt<y.length;wt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]);const Ut=n.get(y[wt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function yt(C){return Math.min(i.maxSamples,C.samples)}function mt(C){const y=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xt(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function bt(C,y){const V=C.colorSpace,rt=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Go||V!==ei&&V!==xn&&($t.getTransfer(V)===se?a===!1?t.has("EXT_sRGB")===!0&&rt===Rn?(C.format=Go,C.minFilter=Pe,C.generateMipmaps=!1):y=qu.sRGBToLinear(y):(rt!==Rn||it!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}this.allocateTextureUnit=L,this.resetTextureUnits=$,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Mt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=mt}function Jv(r,t,e){const n=e.isWebGL2;function i(s,o=xn){let a;const l=$t.getTransfer(o);if(s===vi)return r.UNSIGNED_BYTE;if(s===Ou)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Sp)return r.BYTE;if(s===Tp)return r.SHORT;if(s===hl)return r.UNSIGNED_SHORT;if(s===Nu)return r.INT;if(s===di)return r.UNSIGNED_INT;if(s===pi)return r.FLOAT;if(s===$n)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ep)return r.ALPHA;if(s===Rn)return r.RGBA;if(s===bp)return r.LUMINANCE;if(s===wp)return r.LUMINANCE_ALPHA;if(s===qi)return r.DEPTH_COMPONENT;if(s===Lr)return r.DEPTH_STENCIL;if(s===Go)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ap)return r.RED;if(s===Bu)return r.RED_INTEGER;if(s===Cp)return r.RG;if(s===Gu)return r.RG_INTEGER;if(s===zu)return r.RGBA_INTEGER;if(s===Ga||s===za||s===ka||s===Ha)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tc||s===ec||s===nc||s===ic)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ku)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rc||s===sc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rc)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ac||s===oc||s===lc||s===cc||s===hc||s===uc||s===fc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ac)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_c)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xc)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Va||s===Mc||s===yc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Va)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rp||s===Sc||s===Tc||s===Ec)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Va)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ec)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Qv extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ke extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const d=e.getJointPose(g,n),p=this._getHandJoint(c,g);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ex extends Nr{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const g=e.getContextAttributes();let d=null,p=null;const x=[],v=[],S=new Lt;let w=null;const A=new $e;A.layers.enable(1),A.viewport=new re;const E=new $e;E.layers.enable(2),E.viewport=new re;const I=[A,E],M=new Qv;M.layers.enable(1),M.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let H=x[O];return H===void 0&&(H=new fo,x[O]=H),H.getTargetRaySpace()},this.getControllerGrip=function(O){let H=x[O];return H===void 0&&(H=new fo,x[O]=H),H.getGripSpace()},this.getHand=function(O){let H=x[O];return H===void 0&&(H=new fo,x[O]=H),H.getHandSpace()};function F(O){const H=v.indexOf(O.inputSource);if(H===-1)return;const J=x[H];J!==void 0&&(J.update(O.inputSource,O.frame,c||o),J.dispatchEvent({type:O.type,data:O.inputSource}))}function $(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",L);for(let O=0;O<x.length;O++){const H=v[O];H!==null&&(v[O]=null,x[O].disconnect(H))}T=null,G=null,t.setRenderTarget(d),m=null,f=null,u=null,i=null,p=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",$),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,H),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Sn(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,J=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=g.stencil?Lr:qi,J=g.stencil?Xi:di);const et={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Sn(f.textureWidth,f.textureHeight,{format:Rn,type:vi,depthTexture:new nf(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const ht=t.properties.get(p);ht.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(O){for(let H=0;H<O.removed.length;H++){const J=O.removed[H],at=v.indexOf(J);at>=0&&(v[at]=null,x[at].disconnect(J))}for(let H=0;H<O.added.length;H++){const J=O.added[H];let at=v.indexOf(J);if(at===-1){for(let ht=0;ht<x.length;ht++)if(ht>=v.length){v.push(J),at=ht;break}else if(v[ht]===null){v[ht]=J,at=ht;break}if(at===-1)break}const et=x[at];et&&et.connect(J)}}const N=new U,z=new U;function K(O,H,J){N.setFromMatrixPosition(H.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const at=N.distanceTo(z),et=H.projectionMatrix.elements,ht=J.projectionMatrix.elements,gt=et[14]/(et[10]-1),pt=et[14]/(et[10]+1),Mt=(et[9]+1)/et[5],B=(et[9]-1)/et[5],Yt=(et[8]-1)/et[0],ot=(ht[8]+1)/ht[0],yt=gt*Yt,mt=gt*ot,Xt=at/(-Yt+ot),bt=Xt*-Yt;H.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(bt),O.translateZ(Xt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const C=gt+Xt,y=pt+Xt,V=yt-bt,rt=mt+(at-bt),it=Mt*pt/y*C,st=B*pt/y*C;O.projectionMatrix.makePerspective(V,rt,it,st,C,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function j(O,H){H===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(H.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;M.near=E.near=A.near=O.near,M.far=E.far=A.far=O.far,(T!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,G=M.far);const H=O.parent,J=M.cameras;j(M,H);for(let at=0;at<J.length;at++)j(J[at],H);J.length===2?K(M,A,E):M.projectionMatrix.copy(A.projectionMatrix),q(O,M,H)};function q(O,H,J){J===null?O.matrix.copy(H.matrixWorld):(O.matrix.copy(J.matrixWorld),O.matrix.invert(),O.matrix.multiply(H.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(H.projectionMatrix),O.projectionMatrixInverse.copy(H.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=fs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let P=null;function R(O,H){if(h=H.getViewerPose(c||o),_=H,h!==null){const J=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let at=!1;J.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let et=0;et<J.length;et++){const ht=J[et];let gt=null;if(m!==null)gt=m.getViewport(ht);else{const Mt=u.getViewSubImage(f,ht);gt=Mt.viewport,et===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let pt=I[et];pt===void 0&&(pt=new $e,pt.layers.enable(et),pt.viewport=new re,I[et]=pt),pt.matrix.fromArray(ht.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ht.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(gt.x,gt.y,gt.width,gt.height),et===0&&(M.matrix.copy(pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(pt)}}for(let J=0;J<x.length;J++){const at=v[J],et=x[J];at!==null&&et!==void 0&&et.update(at,H,c||o)}P&&P(O,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),_=null}const Z=new ef;Z.setAnimationLoop(R),this.setAnimationLoop=function(O){P=O},this.dispose=function(){}}}function nx(r,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Ju(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,S)):p.isMeshMatcapMaterial?(s(d,p),_(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),g(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,x,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===je&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===je&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,d.lightMapTransform)}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,x,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=v*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){const x=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ix(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(_(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",d));const w=v.program;n.updateUBOMapping(x,w);const A=t.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const S=r.createBuffer(),w=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],S=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=S.length;A<E;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,T=I.length;M<T;M++){const G=I[M];if(m(G,A,M,w)===!0){const F=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let L=0;for(let N=0;N<$.length;N++){const z=$[N],K=g(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,F+L,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(x,v,S,w){const A=x.value,E=v+"_"+S;if(w[E]===void 0)return typeof A=="number"||typeof A=="boolean"?w[E]=A:w[E]=A.clone(),!0;{const I=w[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return w[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(x){const v=x.uniforms;let S=0;const w=16;for(let E=0,I=v.length;E<I;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,G=M.length;T<G;T++){const F=M[T],$=Array.isArray(F.value)?F.value:[F.value];for(let L=0,N=$.length;L<N;L++){const z=$[L],K=g(z),j=S%w;j!==0&&w-j<K.boundary&&(S+=w-j),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=K.storage}}}const A=S%w;return A>0&&(S+=w-A),x.__size=S,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(x){const v=x.target;v.removeEventListener("dispose",d);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class cf{constructor(t={}){const{canvas:e=tm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const v=this;let S=!1,w=0,A=0,E=null,I=-1,M=null;const T=new re,G=new re;let F=null;const $=new Rt(0);let L=0,N=e.width,z=e.height,K=1,j=null,q=null;const P=new re(0,0,N,z),R=new re(0,0,N,z);let Z=!1;const O=new pl;let H=!1,J=!1,at=null;const et=new ae,ht=new Lt,gt=new U,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return E===null?K:1}let B=n;function Yt(b,k){for(let X=0;X<b.length;X++){const Y=b[X],W=e.getContext(Y,k);if(W!==null)return W}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ft,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),B=Yt(k,b),B===null)throw Yt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ot,yt,mt,Xt,bt,C,y,V,rt,it,st,St,ut,vt,wt,Ut,nt,jt,Gt,Dt,Et,xt,Ft,Kt;function de(){ot=new d_(B),yt=new o_(B,ot,t),ot.init(yt),xt=new Jv(B,ot,yt),mt=new Kv(B,ot,yt),Xt=new g_(B),bt=new Ov,C=new $v(B,ot,mt,bt,yt,xt,Xt),y=new c_(v),V=new f_(v),rt=new Em(B,yt),Ft=new s_(B,ot,rt,yt),it=new p_(B,rt,Xt,Ft),st=new M_(B,it,rt,Xt),Gt=new x_(B,yt,C),Ut=new l_(bt),St=new Nv(v,y,V,ot,yt,Ft,Ut),ut=new nx(v,bt),vt=new Bv,wt=new Wv(ot,yt),jt=new r_(v,y,V,mt,st,f,l),nt=new Zv(v,st,yt),Kt=new ix(B,Xt,yt,mt),Dt=new a_(B,ot,Xt,yt),Et=new m_(B,ot,Xt,yt),Xt.programs=St.programs,v.capabilities=yt,v.extensions=ot,v.properties=bt,v.renderLists=vt,v.shadowMap=nt,v.state=mt,v.info=Xt}de();const kt=new ex(v,B);this.xr=kt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(N,z,!1))},this.getSize=function(b){return b.set(N,z)},this.setSize=function(b,k,X=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,z=k,e.width=Math.floor(b*K),e.height=Math.floor(k*K),X===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(N*K,z*K).floor()},this.setDrawingBufferSize=function(b,k,X){N=b,z=k,K=X,e.width=Math.floor(b*X),e.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,k,X,Y){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,k,X,Y),mt.viewport(T.copy(P).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,k,X,Y){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,k,X,Y),mt.scissor(G.copy(R).multiplyScalar(K).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(b){mt.setScissorTest(Z=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,k=!0,X=!0){let Y=0;if(b){let W=!1;if(E!==null){const _t=E.texture.format;W=_t===zu||_t===Gu||_t===Bu}if(W){const _t=E.texture.type,Tt=_t===vi||_t===di||_t===hl||_t===Xi||_t===Ou||_t===Fu,Ct=jt.getClearColor(),It=jt.getClearAlpha(),zt=Ct.r,Nt=Ct.g,Ot=Ct.b;Tt?(m[0]=zt,m[1]=Nt,m[2]=Ot,m[3]=It,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=zt,_[1]=Nt,_[2]=Ot,_[3]=It,B.clearBufferiv(B.COLOR,0,_))}else Y|=B.COLOR_BUFFER_BIT}k&&(Y|=B.DEPTH_BUFFER_BIT),X&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),wt.dispose(),bt.dispose(),y.dispose(),V.dispose(),st.dispose(),Ft.dispose(),Kt.dispose(),St.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",ze),kt.removeEventListener("sessionend",ie),at&&(at.dispose(),at=null),ke.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Xt.autoReset,k=nt.enabled,X=nt.autoUpdate,Y=nt.needsUpdate,W=nt.type;de(),Xt.autoReset=b,nt.enabled=k,nt.autoUpdate=X,nt.needsUpdate=Y,nt.type=W}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dt(b){const k=b.target;k.removeEventListener("dispose",dt),Pt(k)}function Pt(b){At(b),bt.remove(b)}function At(b){const k=bt.get(b).programs;k!==void 0&&(k.forEach(function(X){St.releaseProgram(X)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,X,Y,W,_t){k===null&&(k=pt);const Tt=W.isMesh&&W.matrixWorld.determinant()<0,Ct=xf(b,k,X,Y,W);mt.setMaterial(Y,Tt);let It=X.index,zt=1;if(Y.wireframe===!0){if(It=it.getWireframeAttribute(X),It===void 0)return;zt=2}const Nt=X.drawRange,Ot=X.attributes.position;let _e=Nt.start*zt,sn=(Nt.start+Nt.count)*zt;_t!==null&&(_e=Math.max(_e,_t.start*zt),sn=Math.min(sn,(_t.start+_t.count)*zt)),It!==null?(_e=Math.max(_e,0),sn=Math.min(sn,It.count)):Ot!=null&&(_e=Math.max(_e,0),sn=Math.min(sn,Ot.count));const we=sn-_e;if(we<0||we===1/0)return;Ft.setup(W,Y,Ct,X,It);let Fn,ce=Dt;if(It!==null&&(Fn=rt.get(It),ce=Et,ce.setIndex(Fn)),W.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*Mt()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(W.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),mt.setLineWidth(Ht*Mt()),W.isLineSegments?ce.setMode(B.LINES):W.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else W.isPoints?ce.setMode(B.POINTS):W.isSprite&&ce.setMode(B.TRIANGLES);if(W.isBatchedMesh)ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ce.renderInstances(_e,we,W.count);else if(X.isInstancedBufferGeometry){const Ht=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wa=Math.min(X.instanceCount,Ht);ce.renderInstances(_e,we,wa)}else ce.render(_e,we)};function ee(b,k,X){b.transparent===!0&&b.side===ye&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,Ss(b,k,X),b.side=ti,b.needsUpdate=!0,Ss(b,k,X),b.side=ye):Ss(b,k,X)}this.compile=function(b,k,X=null){X===null&&(X=b),d=wt.get(X),d.init(),x.push(d),X.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),b!==X&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(v._useLegacyLights);const Y=new Set;return b.traverse(function(W){const _t=W.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const Ct=_t[Tt];ee(Ct,X,W),Y.add(Ct)}else ee(_t,X,W),Y.add(_t)}),x.pop(),d=null,Y},this.compileAsync=function(b,k,X=null){const Y=this.compile(b,k,X);return new Promise(W=>{function _t(){if(Y.forEach(function(Tt){bt.get(Tt).currentProgram.isReady()&&Y.delete(Tt)}),Y.size===0){W(b);return}setTimeout(_t,10)}ot.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ne=null;function be(b){ne&&ne(b)}function ze(){ke.stop()}function ie(){ke.start()}const ke=new ef;ke.setAnimationLoop(be),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(b){ne=b,kt.setAnimationLoop(b),b===null?ke.stop():ke.start()},kt.addEventListener("sessionstart",ze),kt.addEventListener("sessionend",ie),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(k),k=kt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,E),d=wt.get(b,x.length),d.init(),x.push(d),et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O.setFromProjectionMatrix(et),J=this.localClippingEnabled,H=Ut.init(this.clippingPlanes,J),g=vt.get(b,p.length),g.init(),p.push(g),Pn(b,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(j,q),this.info.render.frame++,H===!0&&Ut.beginShadows();const X=d.state.shadowsArray;if(nt.render(X,b,k),H===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(g,b),d.setupLights(v._useLegacyLights),k.isArrayCamera){const Y=k.cameras;for(let W=0,_t=Y.length;W<_t;W++){const Tt=Y[W];El(g,b,Tt,Tt.viewport)}}else El(g,b,k);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(v,b,k),Ft.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Pn(b,k,X,Y){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||O.intersectsSprite(b)){Y&&gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(et);const Tt=st.update(b),Ct=b.material;Ct.visible&&g.push(b,Tt,Ct,X,gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||O.intersectsObject(b))){const Tt=st.update(b),Ct=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),gt.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),gt.copy(Tt.boundingSphere.center)),gt.applyMatrix4(b.matrixWorld).applyMatrix4(et)),Array.isArray(Ct)){const It=Tt.groups;for(let zt=0,Nt=It.length;zt<Nt;zt++){const Ot=It[zt],_e=Ct[Ot.materialIndex];_e&&_e.visible&&g.push(b,Tt,_e,X,gt.z,Ot)}}else Ct.visible&&g.push(b,Tt,Ct,X,gt.z,null)}}const _t=b.children;for(let Tt=0,Ct=_t.length;Tt<Ct;Tt++)Pn(_t[Tt],k,X,Y)}function El(b,k,X,Y){const W=b.opaque,_t=b.transmissive,Tt=b.transparent;d.setupLightsView(X),H===!0&&Ut.setGlobalState(v.clippingPlanes,X),_t.length>0&&vf(W,_t,k,X),Y&&mt.viewport(T.copy(Y)),W.length>0&&ys(W,k,X),_t.length>0&&ys(_t,k,X),Tt.length>0&&ys(Tt,k,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function vf(b,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const _t=yt.isWebGL2;at===null&&(at=new Sn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")?$n:vi,minFilter:us,samples:_t?4:0})),v.getDrawingBufferSize(ht),_t?at.setSize(ht.x,ht.y):at.setSize(ma(ht.x),ma(ht.y));const Tt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor($),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=_i,ys(b,X,Y),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at);let It=!1;for(let zt=0,Nt=k.length;zt<Nt;zt++){const Ot=k[zt],_e=Ot.object,sn=Ot.geometry,we=Ot.material,Fn=Ot.group;if(we.side===ye&&_e.layers.test(Y.layers)){const ce=we.side;we.side=je,we.needsUpdate=!0,bl(_e,X,Y,sn,we,Fn),we.side=ce,we.needsUpdate=!0,It=!0}}It===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at)),v.setRenderTarget(Tt),v.setClearColor($,L),v.toneMapping=Ct}function ys(b,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let W=0,_t=b.length;W<_t;W++){const Tt=b[W],Ct=Tt.object,It=Tt.geometry,zt=Y===null?Tt.material:Y,Nt=Tt.group;Ct.layers.test(X.layers)&&bl(Ct,k,X,It,zt,Nt)}}function bl(b,k,X,Y,W,_t){b.onBeforeRender(v,k,X,Y,W,_t),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,k,X,Y,b,_t),W.transparent===!0&&W.side===ye&&W.forceSinglePass===!1?(W.side=je,W.needsUpdate=!0,v.renderBufferDirect(X,k,Y,W,b,_t),W.side=ti,W.needsUpdate=!0,v.renderBufferDirect(X,k,Y,W,b,_t),W.side=ye):v.renderBufferDirect(X,k,Y,W,b,_t),b.onAfterRender(v,k,X,Y,W,_t)}function Ss(b,k,X){k.isScene!==!0&&(k=pt);const Y=bt.get(b),W=d.state.lights,_t=d.state.shadowsArray,Tt=W.state.version,Ct=St.getParameters(b,W.state,_t,k,X),It=St.getProgramCacheKey(Ct);let zt=Y.programs;Y.environment=b.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(b.isMeshStandardMaterial?V:y).get(b.envMap||Y.environment),zt===void 0&&(b.addEventListener("dispose",dt),zt=new Map,Y.programs=zt);let Nt=zt.get(It);if(Nt!==void 0){if(Y.currentProgram===Nt&&Y.lightsStateVersion===Tt)return Al(b,Ct),Nt}else Ct.uniforms=St.getUniforms(b),b.onBuild(X,Ct,v),b.onBeforeCompile(Ct,v),Nt=St.acquireProgram(Ct,It),zt.set(It,Nt),Y.uniforms=Ct.uniforms;const Ot=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Ut.uniform),Al(b,Ct),Y.needsLights=yf(b),Y.lightsStateVersion=Tt,Y.needsLights&&(Ot.ambientLightColor.value=W.state.ambient,Ot.lightProbe.value=W.state.probe,Ot.directionalLights.value=W.state.directional,Ot.directionalLightShadows.value=W.state.directionalShadow,Ot.spotLights.value=W.state.spot,Ot.spotLightShadows.value=W.state.spotShadow,Ot.rectAreaLights.value=W.state.rectArea,Ot.ltc_1.value=W.state.rectAreaLTC1,Ot.ltc_2.value=W.state.rectAreaLTC2,Ot.pointLights.value=W.state.point,Ot.pointLightShadows.value=W.state.pointShadow,Ot.hemisphereLights.value=W.state.hemi,Ot.directionalShadowMap.value=W.state.directionalShadowMap,Ot.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ot.spotShadowMap.value=W.state.spotShadowMap,Ot.spotLightMatrix.value=W.state.spotLightMatrix,Ot.spotLightMap.value=W.state.spotLightMap,Ot.pointShadowMap.value=W.state.pointShadowMap,Ot.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Nt,Y.uniformsList=null,Nt}function wl(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Qs.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Al(b,k){const X=bt.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function xf(b,k,X,Y,W){k.isScene!==!0&&(k=pt),C.resetTextureUnits();const _t=k.fog,Tt=Y.isMeshStandardMaterial?k.environment:null,Ct=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ei,It=(Y.isMeshStandardMaterial?V:y).get(Y.envMap||Tt),zt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Nt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,sn=!!X.morphAttributes.color;let we=_i;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(we=v.toneMapping);const Fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=Fn!==void 0?Fn.length:0,Ht=bt.get(Y),wa=d.state.lights;if(H===!0&&(J===!0||b!==M)){const mn=b===M&&Y.id===I;Ut.setState(Y,b,mn)}let pe=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==wa.state.version||Ht.outputColorSpace!==Ct||W.isBatchedMesh&&Ht.batching===!1||!W.isBatchedMesh&&Ht.batching===!0||W.isInstancedMesh&&Ht.instancing===!1||!W.isInstancedMesh&&Ht.instancing===!0||W.isSkinnedMesh&&Ht.skinning===!1||!W.isSkinnedMesh&&Ht.skinning===!0||W.isInstancedMesh&&Ht.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ht.instancingColor===!1&&W.instanceColor!==null||Ht.envMap!==It||Y.fog===!0&&Ht.fog!==_t||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Ut.numPlanes||Ht.numIntersection!==Ut.numIntersection)||Ht.vertexAlphas!==zt||Ht.vertexTangents!==Nt||Ht.morphTargets!==Ot||Ht.morphNormals!==_e||Ht.morphColors!==sn||Ht.toneMapping!==we||yt.isWebGL2===!0&&Ht.morphTargetsCount!==ce)&&(pe=!0):(pe=!0,Ht.__version=Y.version);let Ti=Ht.currentProgram;pe===!0&&(Ti=Ss(Y,k,W));let Cl=!1,Br=!1,Aa=!1;const Ne=Ti.getUniforms(),Ei=Ht.uniforms;if(mt.useProgram(Ti.program)&&(Cl=!0,Br=!0,Aa=!0),Y.id!==I&&(I=Y.id,Br=!0),Cl||M!==b){Ne.setValue(B,"projectionMatrix",b.projectionMatrix),Ne.setValue(B,"viewMatrix",b.matrixWorldInverse);const mn=Ne.map.cameraPosition;mn!==void 0&&mn.setValue(B,gt.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&Ne.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ne.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Br=!0,Aa=!0)}if(W.isSkinnedMesh){Ne.setOptional(B,W,"bindMatrix"),Ne.setOptional(B,W,"bindMatrixInverse");const mn=W.skeleton;mn&&(yt.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Ne.setValue(B,"boneTexture",mn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ne.setOptional(B,W,"batchingTexture"),Ne.setValue(B,"batchingTexture",W._matricesTexture,C));const Ca=X.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&yt.isWebGL2===!0)&&Gt.update(W,X,Ti),(Br||Ht.receiveShadow!==W.receiveShadow)&&(Ht.receiveShadow=W.receiveShadow,Ne.setValue(B,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ei.envMap.value=It,Ei.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Br&&(Ne.setValue(B,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Mf(Ei,Aa),_t&&Y.fog===!0&&ut.refreshFogUniforms(Ei,_t),ut.refreshMaterialUniforms(Ei,Y,K,z,at),Qs.upload(B,wl(Ht),Ei,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qs.upload(B,wl(Ht),Ei,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ne.setValue(B,"center",W.center),Ne.setValue(B,"modelViewMatrix",W.modelViewMatrix),Ne.setValue(B,"normalMatrix",W.normalMatrix),Ne.setValue(B,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const mn=Y.uniformsGroups;for(let Ra=0,Sf=mn.length;Ra<Sf;Ra++)if(yt.isWebGL2){const Rl=mn[Ra];Kt.update(Rl,Ti),Kt.bind(Rl,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function Mf(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,k,X){bt.get(b.texture).__webglTexture=k,bt.get(b.depthTexture).__webglTexture=X;const Y=bt.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const X=bt.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,X=0){E=b,w=k,A=X;let Y=!0,W=null,_t=!1,Tt=!1;if(b){const It=bt.get(b);It.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1):It.__webglFramebuffer===void 0?C.setupRenderTarget(b):It.__hasExternalTextures&&C.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Tt=!0);const Nt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?W=Nt[k][X]:W=Nt[k],_t=!0):yt.isWebGL2&&b.samples>0&&C.useMultisampledRTT(b)===!1?W=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?W=Nt[X]:W=Nt,T.copy(b.viewport),G.copy(b.scissor),F=b.scissorTest}else T.copy(P).multiplyScalar(K).floor(),G.copy(R).multiplyScalar(K).floor(),F=Z;if(mt.bindFramebuffer(B.FRAMEBUFFER,W)&&yt.drawBuffers&&Y&&mt.drawBuffers(b,W),mt.viewport(T),mt.scissor(G),mt.setScissorTest(F),_t){const It=bt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,It.__webglTexture,X)}else if(Tt){const It=bt.get(b.texture),zt=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,X||0,zt)}I=-1},this.readRenderTargetPixels=function(b,k,X,Y,W,_t,Tt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){mt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const It=b.texture,zt=It.format,Nt=It.type;if(zt!==Rn&&xt.convert(zt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===$n&&(ot.has("EXT_color_buffer_half_float")||yt.isWebGL2&&ot.has("EXT_color_buffer_float"));if(Nt!==vi&&xt.convert(Nt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===pi&&(yt.isWebGL2||ot.has("OES_texture_float")||ot.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Y&&X>=0&&X<=b.height-W&&B.readPixels(k,X,Y,W,xt.convert(zt),xt.convert(Nt),_t)}finally{const It=E!==null?bt.get(E).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(b,k,X=0){const Y=Math.pow(2,-X),W=Math.floor(k.image.width*Y),_t=Math.floor(k.image.height*Y);C.setTexture2D(k,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,b.x,b.y,W,_t),mt.unbindTexture()},this.copyTextureToTexture=function(b,k,X,Y=0){const W=k.image.width,_t=k.image.height,Tt=xt.convert(X.format),Ct=xt.convert(X.type);C.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,b.x,b.y,W,_t,Tt,Ct,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,Tt,k.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Y,b.x,b.y,Tt,Ct,k.image),Y===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,X,Y,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=b.max.x-b.min.x+1,Tt=b.max.y-b.min.y+1,Ct=b.max.z-b.min.z+1,It=xt.convert(Y.format),zt=xt.convert(Y.type);let Nt;if(Y.isData3DTexture)C.setTexture3D(Y,0),Nt=B.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Nt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ot=B.getParameter(B.UNPACK_ROW_LENGTH),_e=B.getParameter(B.UNPACK_IMAGE_HEIGHT),sn=B.getParameter(B.UNPACK_SKIP_PIXELS),we=B.getParameter(B.UNPACK_SKIP_ROWS),Fn=B.getParameter(B.UNPACK_SKIP_IMAGES),ce=X.isCompressedTexture?X.mipmaps[W]:X.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ce.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Nt,W,k.x,k.y,k.z,_t,Tt,Ct,It,zt,ce.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Nt,W,k.x,k.y,k.z,_t,Tt,Ct,It,ce.data)):B.texSubImage3D(Nt,W,k.x,k.y,k.z,_t,Tt,Ct,It,zt,ce),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e),B.pixelStorei(B.UNPACK_SKIP_PIXELS,sn),B.pixelStorei(B.UNPACK_SKIP_ROWS,we),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Fn),W===0&&Y.generateMipmaps&&B.generateMipmap(Nt),mt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,mt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ul?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===Ta?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Yi:Hu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yi?Re:ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class rx extends cf{}rx.prototype.isWebGL1Renderer=!0;class _l{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new _l(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sx extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class hf extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ph=new U,mh=new U,gh=new ae,po=new Ea,qs=new _s;class ax extends De{constructor(t=new Se,e=new hf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ph.fromBufferAttribute(e,i-1),mh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ph.distanceTo(mh);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,t.ray.intersectsSphere(qs)===!1)return;gh.copy(i).invert(),po.copy(t.ray).applyMatrix4(gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,f=new U,m=this.isLineSegments?2:1,_=n.index,d=n.attributes.position;if(_!==null){const p=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=p,S=x-1;v<S;v+=m){const w=_.getX(v),A=_.getX(v+1);if(c.fromBufferAttribute(d,w),h.fromBufferAttribute(d,A),po.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=p,S=x-1;v<S;v+=m){if(c.fromBufferAttribute(d,v),h.fromBufferAttribute(d,v+1),po.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const _h=new U,vh=new U;class ox extends ax{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)_h.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_h.distanceTo(vh);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ta extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xh=new ae,Ho=new Ea,Ys=new _s,js=new U;class Zs extends De{constructor(t=new Se,e=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=s,t.ray.intersectsSphere(Ys)===!1)return;xh.copy(i).invert(),Ho.copy(t.ray).applyMatrix4(xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m;_<g;_++){const d=c.getX(_);js.fromBufferAttribute(u,d),Mh(js,d,l,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m;_<g;_++)js.fromBufferAttribute(u,_),Mh(js,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mh(r,t,e,n,i,s,o){const a=Ho.distanceSqToPoint(r);if(a<e){const l=new U;Ho.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class dr extends Ze{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ga extends Se{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let _=0;const g=[],d=n/2;let p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(m,2));function x(){const S=new U,w=new U;let A=0;const E=(e-t)/n;for(let I=0;I<=s;I++){const M=[],T=I/s,G=T*(e-t)+t;for(let F=0;F<=i;F++){const $=F/i,L=$*l+a,N=Math.sin(L),z=Math.cos(L);w.x=G*N,w.y=-T*n+d,w.z=G*z,u.push(w.x,w.y,w.z),S.set(N,E,z).normalize(),f.push(S.x,S.y,S.z),m.push($,1-T),M.push(_++)}g.push(M)}for(let I=0;I<i;I++)for(let M=0;M<s;M++){const T=g[M][I],G=g[M+1][I],F=g[M+1][I+1],$=g[M][I+1];h.push(T,G,$),h.push(G,F,$),A+=6}c.addGroup(p,A,0),p+=A}function v(S){const w=_,A=new Lt,E=new U;let I=0;const M=S===!0?t:e,T=S===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,d*T,0),f.push(0,T,0),m.push(.5,.5),_++;const G=_;for(let F=0;F<=i;F++){const L=F/i*l+a,N=Math.cos(L),z=Math.sin(L);E.x=M*z,E.y=d*T,E.z=M*N,u.push(E.x,E.y,E.z),f.push(0,T,0),A.x=N*.5+.5,A.y=z*.5*T+.5,m.push(A.x,A.y),_++}for(let F=0;F<i;F++){const $=w+F,L=G+F;S===!0?h.push(L,L+1,$):h.push(L+1,L,$),I+=3}c.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends Se{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,m=new U,_=new Lt;for(let g=0;g<=i;g++){for(let d=0;d<=n;d++){const p=s+d/n*o;m.x=u*Math.cos(p),m.y=u*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<i;g++){const d=g*(n+1);for(let p=0;p<n;p++){const x=p+d,v=x,S=x+n+1,w=x+n+2,A=x+1;a.push(v,S,A),a.push(S,w,A)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ln extends Se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,f=new U,m=[],_=[],g=[],d=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let w=0;w<=e;w++){const A=w/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),d.push(A+S,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],S=h[p][x],w=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&m.push(v,S,A),(p!==n-1||l<Math.PI)&&m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new oe(_,3)),this.setAttribute("normal",new oe(g,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xl extends Se{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const g=_/i*s,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(g),u.y=(t+e*Math.cos(d))*Math.sin(g),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const g=(i+1)*m+_-1,d=(i+1)*(m-1)+_-1,p=(i+1)*(m-1)+_,x=(i+1)*m+_;o.push(g,d,x),o.push(d,p,x)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mo extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const yh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lx{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const cx=new lx;class Ml{constructor(t){this.manager=t!==void 0?t:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";class hx extends Ml{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=yh.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ds("img");function l(){h(),yh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ea extends Ml{constructor(t){super(t)}load(t,e,n,i){const s=new Ze,o=new hx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class yl extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const go=new ae,Sh=new U,Th=new U;class uf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Eh=new ae,Wr=new U,_o=new U;class ux extends uf{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wr),_o.copy(n.position),_o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_o),n.updateMatrixWorld(),i.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class bh extends yl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fx extends uf{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dx extends yl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new fx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class px extends yl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ff{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wh(){return(typeof performance>"u"?Date:performance).now()}class mx{constructor(t,e,n=0,i=1/0){this.ray=new Ea(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Vo(t,this,n,e),n.sort(Ah),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Vo(t[i],this,n,e);return n.sort(Ah),n}}function Ah(r,t){return r.distance-t.distance}function Vo(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Vo(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const df={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gx=new ml(-1,1,1,-1,0,1);class _x extends Se{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const vx=new _x;class pf{constructor(t){this._mesh=new Wt(vx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class xx extends Ms{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ir.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new pf(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ch extends Ms{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Mx extends Ms{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class yx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Lt);this._width=n.width,this._height=n.height,e=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xx(df),this.copyPass.material.blending=Kn,this.clock=new ff}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ch!==void 0&&(o instanceof Ch?n=!0:o instanceof Mx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sx extends Ms{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Tx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ur extends Ms{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Lt(t.x,t.y):new Lt(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,o,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Sn(s,o,{type:$n});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Sn(s,o,{type:$n});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=Tx;this.highPassUniforms=Ir.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Le({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Lt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=df;this.copyUniforms=Ir.clone(h.uniforms),this.blendMaterial=new Le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:We,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new me,this.fsQuad=new pf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Lt(.5,.5)},direction:{value:new Lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ur.BlurDirectionX=new Lt(1,0);Ur.BlurDirectionY=new Lt(0,1);class Ex extends Wt{constructor(t,e={}){super(t),this.isWater=!0;const n=this,i=e.textureWidth!==void 0?e.textureWidth:512,s=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new U(.70707,.70707,0),u=new Rt(e.sunColor!==void 0?e.sunColor:16777215),f=new Rt(e.waterColor!==void 0?e.waterColor:8355711),m=e.eye!==void 0?e.eye:new U(0,0,0),_=e.distortionScale!==void 0?e.distortionScale:20,g=e.side!==void 0?e.side:ti,d=e.fog!==void 0?e.fog:!1,p=new ci,x=new U,v=new U,S=new U,w=new ae,A=new U(0,0,-1),E=new re,I=new U,M=new U,T=new re,G=new ae,F=new $e,$=new Sn(i,s),L={name:"MirrorShader",uniforms:Ir.merge([lt.fog,lt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ae},sunColor:{value:new Rt(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new Rt(5592405)}}]),vertexShader:`
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
				}`},N=new Le({name:L.name,uniforms:Ir.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,lights:!0,side:g,fog:d});N.uniforms.mirrorSampler.value=$.texture,N.uniforms.textureMatrix.value=G,N.uniforms.alpha.value=a,N.uniforms.time.value=l,N.uniforms.normalSampler.value=c,N.uniforms.sunColor.value=u,N.uniforms.waterColor.value=f,N.uniforms.sunDirection.value=h,N.uniforms.distortionScale.value=_,N.uniforms.eye.value=m,n.material=N,n.onBeforeRender=function(z,K,j){if(v.setFromMatrixPosition(n.matrixWorld),S.setFromMatrixPosition(j.matrixWorld),w.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(w),I.subVectors(v,S),I.dot(x)>0)return;I.reflect(x).negate(),I.add(v),w.extractRotation(j.matrixWorld),A.set(0,0,-1),A.applyMatrix4(w),A.add(S),M.subVectors(v,A),M.reflect(x).negate(),M.add(v),F.position.copy(I),F.up.set(0,1,0),F.up.applyMatrix4(w),F.up.reflect(x),F.lookAt(M),F.far=j.far,F.updateMatrixWorld(),F.projectionMatrix.copy(j.projectionMatrix),G.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),G.multiply(F.projectionMatrix),G.multiply(F.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(x,v),p.applyMatrix4(F.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const q=F.projectionMatrix;T.x=(Math.sign(E.x)+q.elements[8])/q.elements[0],T.y=(Math.sign(E.y)+q.elements[9])/q.elements[5],T.z=-1,T.w=(1+q.elements[10])/q.elements[14],E.multiplyScalar(2/E.dot(T)),q.elements[2]=E.x,q.elements[6]=E.y,q.elements[10]=E.z+1-o,q.elements[14]=E.w,m.setFromMatrixPosition(j.matrixWorld);const P=z.getRenderTarget(),R=z.xr.enabled,Z=z.shadowMap.autoUpdate;n.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget($),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(K,F),n.visible=!0,z.xr.enabled=R,z.shadowMap.autoUpdate=Z,z.setRenderTarget(P);const O=j.viewport;O!==void 0&&z.state.viewport(O)}}}const bx=""+new URL("206bff05-828d-47c0-901a-538ae8447a9d_20260512_220945_405_3600-BuGrX_Zx.jpg",import.meta.url).href,wx=""+new URL("3268500f-c634-4cfe-8326-63ebe3f7ac7c_20260512_212512_564_IMG_0001_20260512_212510_3600-1-DO4W7Gzw.JPG",import.meta.url).href,Ax=""+new URL("44bae090-5484-4b2e-8522-9a069d237df4_20260512_212732_138_IMG_0009_20260512_212730_3600-Doous9Yl.JPG",import.meta.url).href,Cx=""+new URL("846995b7-dbe5-43b2-b285-86bbab1f0fd7_20260512_220602_154_3600-BDS3FeF9.jpg",import.meta.url).href,Rx=""+new URL("IMG_0096_20260711_071255_3600-DO_OuDy-.JPG",import.meta.url).href,Px=""+new URL("IMG_9246-BisxON_5.JPG",import.meta.url).href,Lx=""+new URL("IMG_9247-qU-ji6Q_.JPG",import.meta.url).href,Dx=""+new URL("IMG_9248-DMJ7DeyU.JPG",import.meta.url).href,Ix=""+new URL("IMG_9249-gMqphL-v.JPG",import.meta.url).href,Ux=""+new URL("IMG_9250-C45w7VgM.JPG",import.meta.url).href,Nx=""+new URL("Locket_1778663298520_56-Cu6OFmiD.jpg",import.meta.url).href,Ox=""+new URL("ab35f926-e088-49b7-b2fc-be1a49009cb4_20260512_212613_244_IMG_0004_20260512_212611_3600-1-BqRYPogu.JPG",import.meta.url).href,Fx=""+new URL("f131374f-245c-4490-8df2-a64652ebc9ba_20260512_212807_324_IMG_0011_20260512_212805_3600-B16BmaIs.JPG",import.meta.url).href,Bx=Object.assign({"/src/assets/nh/206bff05-828d-47c0-901a-538ae8447a9d_20260512_220945_405_3600.jpg":bx,"/src/assets/nh/3268500f-c634-4cfe-8326-63ebe3f7ac7c_20260512_212512_564_IMG_0001_20260512_212510_3600-1.JPG":wx,"/src/assets/nh/44bae090-5484-4b2e-8522-9a069d237df4_20260512_212732_138_IMG_0009_20260512_212730_3600.JPG":Ax,"/src/assets/nh/846995b7-dbe5-43b2-b285-86bbab1f0fd7_20260512_220602_154_3600.jpg":Cx,"/src/assets/nh/IMG_0096_20260711_071255_3600.JPG":Rx,"/src/assets/nh/IMG_9246.JPG":Px,"/src/assets/nh/IMG_9247.JPG":Lx,"/src/assets/nh/IMG_9248.JPG":Dx,"/src/assets/nh/IMG_9249.JPG":Ix,"/src/assets/nh/IMG_9250.JPG":Ux,"/src/assets/nh/Locket_1778663298520_56.jpg":Nx,"/src/assets/nh/ab35f926-e088-49b7-b2fc-be1a49009cb4_20260512_212613_244_IMG_0004_20260512_212611_3600-1.JPG":Ox,"/src/assets/nh/f131374f-245c-4490-8df2-a64652ebc9ba_20260512_212807_324_IMG_0011_20260512_212805_3600.JPG":Fx}),Rh=Object.values(Bx);class Gx{constructor(t,e){this.scene=t,this.camera=e,this.group=new Ke,this.group.position.set(0,12,0),this.group.visible=!1,this.scene.add(this.group),this.cards=[],this.state="SPHERE",this.previousState="SPHERE",this.activeCard=null,this.hoveredCard=null,this.hoverStartTime=0,this.lastHoverSeenTime=0,this.closeHoverStartTime=null,this.enlargeTimestamp=0,this.galleryScrollX=0,this.targetScrollX=0,this.raycaster=new mx,this.mouse2D=new Lt,window.addEventListener("keydown",n=>{n.key==="Escape"&&this.state==="FULLVIEW"&&this.closeFullView()}),window.addEventListener("click",n=>{this.state==="FULLVIEW"&&performance.now()-(this.enlargeTimestamp||0)>400&&this.closeFullView()}),this.initPhotos()}initPhotos(){const t=new ea,e=Rh.length||1,n=13.5,i=Math.PI*(3-Math.sqrt(5));Rh.forEach((s,o)=>{const a=1-o/(e-1)*2,l=Math.sqrt(1-a*a),c=i*o,h=Math.cos(c)*l,u=Math.sin(c)*l,f=new U(h*n,a*n,u*n),_=(o-(e-1)/2)*7.5,g=new U(_,0,15),d=new Ke;d.position.copy(f),d.lookAt(0,0,0);const p=new Xe(6.2,4.4),x=new me({color:65535,wireframe:!1,transparent:!0,opacity:.15,side:ye}),v=new Wt(p,x);v.position.z=-.05,d.add(v);const S=new Xe(5.8,4),w=t.load(s);w.colorSpace=Re;const A=new me({map:w,side:ye,transparent:!0,opacity:0}),E=new Wt(S,A);E.userData={index:o,spherePos:f.clone(),sphereRot:d.rotation.clone(),galleryPos:g.clone(),cardGroup:d,frameMesh:v,isHovered:!1},d.add(E),this.group.add(d),this.cards.push(E)})}show(){this.group.visible=!0,this.state="SPHERE",this.cards.forEach((t,e)=>{tt.to(t.material,{opacity:1,duration:2.5,delay:e*.1,ease:"power2.out"}),tt.to(t.userData.frameMesh.material,{opacity:.4,duration:2.5,delay:e*.1})})}updateSpreadLayout(t){const e=Math.max(0,Math.min(1,t));this.cards.forEach(n=>{n.userData.cardGroup.parent!==this.group&&this.group.attach(n.userData.cardGroup);const i=n.userData.spherePos,s=n.userData.galleryPos,o=n.userData.sphereRot;n.userData.cardGroup.position.lerpVectors(i,s,e),n.userData.cardGroup.rotation.x=o.x*(1-e),n.userData.cardGroup.rotation.y=o.y*(1-e),n.userData.cardGroup.rotation.z=o.z*(1-e)})}disperseToGallery(){this.state!=="GALLERY"&&(this.state="GALLERY",this.activeCard=null,console.log("✋ PHÂN GIẢI QUẢ CẦU: Dàn ảnh thành danh sách trôi nổi (Gallery)!"),this.cards.forEach(t=>{t.userData.cardGroup.parent!==this.group&&this.group.attach(t.userData.cardGroup);const e=t.userData.galleryPos;tt.to(t.userData.cardGroup.position,{x:e.x,y:e.y,z:e.z,duration:1.5,ease:"power3.out"}),tt.to(t.userData.cardGroup.rotation,{x:0,y:0,z:0,duration:1.5,ease:"power3.out"}),tt.to(t.userData.frameMesh.material.color,{r:0,g:1,b:1,duration:1}),tt.to(t.userData.frameMesh.material,{opacity:.35,duration:1})}))}collapseToSphere(){this.state!=="SPHERE"&&(this.state="SPHERE",this.activeCard=null,this.unhighlightAllCards(),console.log("✊ THU GỌN ẢNH: Đưa về dạng Quả cầu 3D xoay tròn!"),this.cards.forEach(t=>{t.userData.cardGroup.parent!==this.group&&this.group.attach(t.userData.cardGroup);const e=t.userData.spherePos,n=t.userData.sphereRot;tt.to(t.userData.cardGroup.position,{x:e.x,y:e.y,z:e.z,duration:1.5,ease:"power3.out"}),tt.to(t.userData.cardGroup.rotation,{x:n.x,y:n.y,z:n.z,duration:1.5,ease:"power3.out"}),tt.to(t.scale,{x:1,y:1,z:1,duration:1}),tt.to(t.userData.frameMesh.scale,{x:1,y:1,z:1,duration:1}),tt.to(t.userData.frameMesh.material.color,{r:0,g:1,b:1,duration:1}),tt.to(t.userData.frameMesh.material,{opacity:.4,duration:1})}))}highlightCard(t){!t||t.userData.isHovered||this.state==="FULLVIEW"||(t.userData.isHovered=!0,tt.to(t.scale,{x:1.15,y:1.15,z:1.15,duration:.35,ease:"power2.out"}),tt.to(t.userData.frameMesh.scale,{x:1.15,y:1.15,z:1.15,duration:.35,ease:"power2.out"}),tt.to(t.userData.frameMesh.material.color,{r:1,g:.84,b:0,duration:.3}),tt.to(t.userData.frameMesh.material,{opacity:.85,duration:.3}))}unhighlightCard(t){!t||!t.userData.isHovered||this.state==="FULLVIEW"||(t.userData.isHovered=!1,tt.to(t.scale,{x:1,y:1,z:1,duration:.35,ease:"power2.out"}),tt.to(t.userData.frameMesh.scale,{x:1,y:1,z:1,duration:.35,ease:"power2.out"}),tt.to(t.userData.frameMesh.material.color,{r:0,g:1,b:1,duration:.3}),tt.to(t.userData.frameMesh.material,{opacity:.4,duration:.3}))}unhighlightAllCards(){this.cards.forEach(t=>this.unhighlightCard(t)),this.hoveredCard=null}enlargeCard(t){this.state==="FULLVIEW"&&this.activeCard===t||(this.previousState=this.state==="FULLVIEW"?this.previousState||"SPHERE":this.state,this.state="FULLVIEW",this.activeCard=t,this.enlargeTimestamp=performance.now(),this.unhighlightAllCards(),console.log(`✨ VIEW LỚN BỨC ẢNH #${t.userData.index+1}`),this.showCloseButtonUI(),this.scene.attach(t.userData.cardGroup),tt.to(t.userData.cardGroup.position,{x:0,y:12,z:24,duration:1.2,ease:"power3.out"}),tt.to(t.userData.cardGroup.rotation,{x:0,y:0,z:0,duration:1.2,ease:"power3.out"}),tt.to(t.scale,{x:2.2,y:2.2,z:2.2,duration:1.2,ease:"power3.out"}),tt.to(t.userData.frameMesh.scale,{x:2.2,y:2.2,z:2.2,duration:1.2,ease:"power3.out"}),tt.to(t.userData.frameMesh.material.color,{r:1,g:.843,b:0,duration:1}),tt.to(t.userData.frameMesh.material,{opacity:.8,duration:1}),this.cards.forEach(e=>{e!==t&&tt.to(e.material,{opacity:.2,duration:.8})}))}showCloseButtonUI(){let t=document.getElementById("ai-close-photo-btn");t||(t=document.createElement("button"),t.id="ai-close-photo-btn",t.innerHTML='✕ Đóng ảnh <span style="font-size: 11px; opacity: 0.85; margin-left: 6px;">(✊ Nắm tay / ✋ Xòe / ESC)</span>',Object.assign(t.style,{position:"fixed",bottom:"40px",left:"50%",transform:"translateX(-50%)",zIndex:"10000",background:"rgba(255, 60, 60, 0.85)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.4)",borderRadius:"30px",padding:"12px 32px",color:"#ffffff",fontFamily:"'Montserrat', sans-serif",fontSize:"15px",fontWeight:"700",cursor:"pointer",boxShadow:"0 10px 30px rgba(255, 0, 0, 0.4), 0 0 20px rgba(255, 255, 0.2)",transition:"all 0.4s ease",opacity:"0"}),t.addEventListener("click",e=>{e.stopPropagation(),this.closeFullView()}),document.body.appendChild(t)),t.style.display="inline-block",requestAnimationFrame(()=>{t.style.opacity="1"})}hideCloseButtonUI(){const t=document.getElementById("ai-close-photo-btn");t&&(t.style.opacity="0",setTimeout(()=>{t&&(t.style.display="none")},300))}closeFullView(){if(this.state!=="FULLVIEW"||!this.activeCard||performance.now()-(this.enlargeTimestamp||0)<500)return;console.log("❌ HỦY XEM ẢNH: Trở về trạng thái trước đó."),this.hideCloseButtonUI();const t=this.previousState==="FULLVIEW"?"SPHERE":this.previousState||"SPHERE",e=this.activeCard;e.userData.cardGroup.parent!==this.group&&this.group.attach(e.userData.cardGroup);const n=t==="GALLERY"?e.userData.galleryPos:e.userData.spherePos,i=t==="GALLERY"?new vs(0,0,0):e.userData.sphereRot;tt.to(e.userData.cardGroup.position,{x:n.x,y:n.y,z:n.z,duration:1.2,ease:"power3.out"}),tt.to(e.userData.cardGroup.rotation,{x:i.x,y:i.y,z:i.z,duration:1.2,ease:"power3.out"}),tt.to(e.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"}),tt.to(e.userData.frameMesh.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"}),tt.to(e.userData.frameMesh.material.color,{r:0,g:1,b:1,duration:1}),tt.to(e.userData.frameMesh.material,{opacity:t==="GALLERY"?.35:.4,duration:1}),this.cards.forEach(s=>{tt.to(s.material,{opacity:1,duration:.8})}),this.state=t,this.activeCard=null,this.hoveredCard=null,this.closeHoverStartTime=null}handleAction(t,e){if(!this.group.visible||!t)return;const{action:n,params:i}=t,s=performance.now();if(n==="SPREAD_MOVE"||n==="COLLAPSE_MOVE"){i&&i.spreadRatio!==void 0&&this.updateSpreadLayout(i.spreadRatio);return}if(n==="SPREAD_COMMIT"){this.disperseToGallery();return}if(n==="COLLAPSE_COMMIT"){this.collapseToSphere();return}if(n==="CLOSE_IMAGE"||n==="RESET_ALL"){this.state==="FULLVIEW"?this.closeFullView():n==="RESET_ALL"&&this.state!=="SPHERE"&&this.collapseToSphere();return}if(n==="HOVER_CARD"){if(this.state==="FULLVIEW")return;const o=i.cursorX!==void 0?i.cursorX:.5,a=i.cursorY!==void 0?i.cursorY:.5;this.mouse2D.x=o*2-1,this.mouse2D.y=-(a*2)+1,this.raycaster.setFromCamera(this.mouse2D,this.camera);const l=this.raycaster.intersectObjects(this.cards);if(l.length>0){const c=l[0].object;if(this.lastHoverSeenTime=s,this.hoveredCard!==c)this.hoveredCard&&this.unhighlightCard(this.hoveredCard),this.hoveredCard=c,this.hoverStartTime=s,this.highlightCard(c);else{const h=(s-this.hoverStartTime)/1e3,u=Math.min(1,h/1);e&&e(u),u>=1&&(this.enlargeCard(c),e&&e(0))}}else this.hoveredCard&&s-this.lastHoverSeenTime>150&&(this.unhighlightCard(this.hoveredCard),this.hoveredCard=null,e&&e(0));return}if(n==="SELECT_CARD"){this.hoveredCard&&this.state!=="FULLVIEW"&&this.enlargeCard(this.hoveredCard);return}}handleHandGesture(t,e,n,i,s,o,a=0){if(this.group.visible){if(this.state==="FULLVIEW"){if(t==="FIST"||t==="OPEN_PALM"){this.closeFullView();return}return}if(t==="OPEN_PALM"&&this.state==="SPHERE"){this.disperseToGallery();return}if(t==="FIST"&&this.state==="GALLERY"){this.collapseToSphere();return}this.state==="SPHERE"&&t==="PINCH_GRAB"&&(Math.abs(i)>.001||Math.abs(s)>.001)&&(this.group.rotation.y+=i*4.5,this.group.rotation.x=Math.max(-.6,Math.min(.6,this.group.rotation.x+s*3))),this.state==="GALLERY"&&(t==="PINCH_GRAB"||t==="POINTING")&&Math.abs(i)>.001&&(this.targetScrollX-=i*65),t==="POINTING"&&(this.state==="SPHERE"||this.state==="GALLERY")?this.handleAction({action:"HOVER_CARD",params:{cursorX:e,cursorY:n}},o):this.hoveredCard&&(this.unhighlightAllCards(),o&&o(0))}}update(t){this.group.visible&&(this.state==="SPHERE"&&(this.group.rotation.y+=t*.12),this.state==="GALLERY"?(this.galleryScrollX+=(this.targetScrollX-this.galleryScrollX)*.1,this.group.position.x=this.galleryScrollX):this.group.position.x+=(0-this.group.position.x)*.1)}}class zx{constructor(){this.scene=new sx,this.scene.background=new Rt("#010205"),this.scene.fog=new _l("#010205",.002),this.camera=new $e(60,window.innerWidth/window.innerHeight,.1,3e3),this.renderer=new cf({antialias:!1,powerPreference:"high-performance"}),this.clock=new ff,this.stars=null,this.moon=null,this.water=null,this.shootingStars=[],this.cakeGroup=null,this.flameLight=null,this.flameMesh=null,this.starPositions=[],this.heartTargetPositions=[],this.composer=null,this.bloomPass=null,this.birdMats=[],this.photoSphere=null,this.sparklingPoint=null,this.blackHoleGroup=null,this.accretionUniforms=null,this.accretionEmbers=null,this.lensingUniforms=null}init(t){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Iu,this.renderer.toneMappingExposure=1.2,t.appendChild(this.renderer.domElement),this.composer=new yx(this.renderer);const e=new Sx(this.scene,this.camera);this.composer.addPass(e),this.bloomPass=new Ur(new Lt(window.innerWidth,window.innerHeight),1.2,.4,.85),this.bloomPass.threshold=.3,this.bloomPass.strength=1.2,this.bloomPass.radius=.8,this.composer.addPass(this.bloomPass),this.createStars(),this.createMoon(),this.createWater(),this.createShootingStars(),this.createTextMeshes(),this.createCake(),this.createInkScene(),this.photoSphere=new Gx(this.scene,this.camera),this.createSparklingLightPoint(),this.createRealisticBlackHoleSingularity(),this.createSpaceStarfield(),this.camera.position.set(0,5,600),window.addEventListener("resize",this.onResize.bind(this))}createTextSprite(t,e,n,i,s="0px",o=10){const a=document.createElement("canvas"),l=a.getContext("2d");typeof l.letterSpacing<"u"&&(l.letterSpacing=s),l.font=`${n}px "${e}"`;const c=l.measureText(t).width,h=Rc.ceilPowerOfTwo(c+100),u=Rc.ceilPowerOfTwo(n*2.5);a.width=h,a.height=u,typeof l.letterSpacing<"u"&&(l.letterSpacing=s),l.font=`${n}px "${e}"`,l.textAlign="center",l.textBaseline="middle",l.fillStyle=i,l.fillText(t,h/2,u/2);const f=new dr(a);f.minFilter=Pe,f.magFilter=Pe;const m=new me({map:f,transparent:!0,opacity:0,side:ye,blending:vn,depthWrite:!1}),_=h/u,g=new Xe(o*_,o),d=new Wt(g,m);return d.userData={message:t,font:e,size:n,color:i,spacing:s,writeProgress:1},d}updateTextSpriteWriting(t,e){const n=t.material.map.image,i=n.getContext("2d"),{message:s,font:o,size:a,color:l,spacing:c}=t.userData;i.clearRect(0,0,n.width,n.height),typeof i.letterSpacing<"u"&&(i.letterSpacing=c),i.font=`${a}px "${o}"`,i.textAlign="center",i.textBaseline="middle",i.shadowColor=l,i.shadowBlur=2,i.fillStyle=l,i.save(),i.beginPath(),i.rect(0,0,n.width*e,n.height),i.clip(),i.fillText(s,n.width/2,n.height/2),i.restore(),t.material.map.needsUpdate=!0}updateTextSprite(t,e,n,i,s,o="0px"){const a=t.material.map.image,l=a.getContext("2d");l.clearRect(0,0,a.width,a.height),typeof l.letterSpacing<"u"&&(l.letterSpacing=o),l.font=`${i}px "${n}"`,l.textAlign="center",l.textBaseline="middle",l.fillStyle=s,l.fillText(e,a.width/2,a.height/2),t.material.map.needsUpdate=!0}createTextMeshes(){this.textName=this.createTextSprite("NGUYỆT HÀ","Montserrat",120,"#dddddf","15px",5),this.textName.position.set(0,7,20),this.scene.add(this.textName),this.textYear=this.createTextSprite("05.08.2005","Montserrat",80,"#aaccff","10px",2.5),this.textYear.position.set(0,4,20),this.scene.add(this.textYear),this.whispers=[],["Chúc mừng sinh nhật em, Nguyệt Hà.","Tuổi 21 có thể sẽ nhiều chênh vênh...","Cảm ơn em vì đã đến...","...giống như ánh trăng dịu dàng soi xuống dòng sông.","Dù thế nào đi nữa... Anh vẫn sẽ ở đây."].forEach(e=>{const n=this.createTextSprite(e,"Montserrat",80,"#ffeacc","2px",3);n.position.set(0,-1,25),this.scene.add(n),this.whispers.push(n)}),this.textWish=this.createTextSprite("Hãy nhắm mắt... ước một điều... và thổi nhẹ nhé.","Montserrat",80,"#dddddf","2px",2.5),this.textWish.position.set(0,6,25),this.scene.add(this.textWish),this.textHBD=this.createTextSprite("HAPPY 21ST BIRTHDAY","Montserrat",80,"#ffffff","20px",4),this.textHBD.position.set(0,12,30),this.scene.add(this.textHBD),this.textLove=this.createTextSprite("ANH YÊU EM ❤️","Montserrat",90,"#ffd700","15px",3),this.textLove.position.set(0,7,30),this.scene.add(this.textLove)}createProceduralMountain(t,e,n,i){const s=document.createElement("canvas");s.width=t,s.height=e;const o=s.getContext("2d");o.fillStyle=n,o.beginPath(),o.moveTo(0,e);for(let u=0;u<=t;u+=5){const f=Math.sin((u+i)*.005)*80+Math.sin((u+i)*.02)*20+Math.sin((u+i)*.08)*5;o.lineTo(u,e*.5+f)}o.lineTo(t,e),o.fill();const a=new dr(s);a.minFilter=Pe;const l=new me({map:a,transparent:!0,opacity:0,depthWrite:!1,blending:vn}),c=new Xe(300,150);return new Wt(c,l)}createInkMoonTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=256,i=256,s=180;for(let l=0;l<Math.PI*2;l+=.05){const c=l/(Math.PI*2),h=Math.sin(l*12)*4+Math.sin(l*3)*6,u=s+h,f=n+Math.cos(l)*u,m=i+Math.sin(l)*u,_=12+Math.sin(l*8)*4-c*6;if(e.beginPath(),e.arc(f,m,_,0,Math.PI*2),e.fillStyle=`rgba(30, 30, 35, ${.9-c*.5})`,e.fill(),Math.random()>.6){e.beginPath();const g=u+(Math.random()-.5)*35;e.arc(n+Math.cos(l)*g,i+Math.sin(l)*g,Math.random()*2.5,0,Math.PI*2),e.fillStyle=`rgba(40, 40, 45, ${Math.random()*.6})`,e.fill()}}const o=e.createRadialGradient(n,i,0,n,i,s);o.addColorStop(0,"rgba(255, 250, 240, 0.6)"),o.addColorStop(.8,"rgba(255, 250, 240, 0.2)"),o.addColorStop(1,"transparent"),e.beginPath(),e.arc(n,i,s,0,Math.PI*2),e.fillStyle=o,e.fill();const a=new dr(t);return a.minFilter=Pe,a}createSwallowBodyTexture(){const t=document.createElement("canvas");t.width=64,t.height=128;const e=t.getContext("2d");return e.fillStyle="rgba(25, 25, 30, 0.9)",e.shadowColor="rgba(25, 25, 30, 0.5)",e.shadowBlur=4,e.beginPath(),e.moveTo(32,10),e.quadraticCurveTo(45,40,32,75),e.lineTo(45,115),e.lineTo(32,95),e.lineTo(19,115),e.quadraticCurveTo(19,40,32,10),e.fill(),new dr(t)}createSwallowWingTexture(){const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");return e.fillStyle="rgba(25, 25, 30, 0.85)",e.shadowColor="rgba(25, 25, 30, 0.5)",e.shadowBlur=4,e.beginPath(),e.moveTo(10,32),e.quadraticCurveTo(40,5,115,15),e.quadraticCurveTo(80,50,10,45),e.fill(),new dr(t)}createSingleBirdMesh(){const t=new Ke;this.swallowBodyTex||(this.swallowBodyTex=this.createSwallowBodyTexture(),this.swallowBodyTex.minFilter=Pe),this.swallowWingTex||(this.swallowWingTex=this.createSwallowWingTexture(),this.swallowWingTex.minFilter=Pe);const e=new me({map:this.swallowBodyTex,transparent:!0,opacity:0,depthWrite:!1,side:ye}),n=new me({map:this.swallowWingTex,transparent:!0,opacity:0,depthWrite:!1,side:ye});this.birdMats.push(e,n);const i=new Xe(3,6),s=new Wt(i,e);t.add(s);const o=new Xe(6,3);o.translate(3,0,0);const a=new Wt(o,n);a.position.set(.5,.5,0),t.add(a);const l=new Wt(o,n);return l.rotation.y=Math.PI,l.position.set(-.5,.5,0),t.add(l),t.userData={wingL:l,wingR:a},t}createInkBirds(){this.birds=new Ke;for(let t=0;t<7;t++){const e=this.createSingleBirdMesh();e.rotation.z=Math.PI/2,e.rotation.x=-Math.PI/2+Math.PI/10,e.position.set(Math.random()*20+10,Math.random()*10+10,Math.random()*20-30),e.userData.speed=.2+Math.random()*.1,e.userData.flapSpeed=12+Math.random()*6,e.userData.yOffset=Math.random()*Math.PI*2,this.birds.add(e)}this.birds.position.set(20,0,0),this.scene.add(this.birds)}createPetalTexture(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.beginPath(),e.moveTo(32,5),e.bezierCurveTo(55,15,60,45,32,60),e.bezierCurveTo(4,45,9,15,32,5);const n=e.createLinearGradient(32,5,32,60);return n.addColorStop(0,"rgba(255, 180, 200, 1.0)"),n.addColorStop(.5,"rgba(255, 130, 170, 0.8)"),n.addColorStop(1,"rgba(255, 200, 220, 0.4)"),e.fillStyle=n,e.fill(),new dr(t)}createPetals(){this.petalsGroup=new Ke;const t=this.createPetalTexture();this.petalMat=new me({map:t,color:16777215,transparent:!0,opacity:0,side:ye,depthWrite:!1,blending:vn});const e=new Xe(1.2,1.2);for(let n=0;n<150;n++){const i=new Wt(e,this.petalMat);i.position.set((Math.random()-.5)*150,(Math.random()-.5)*100+30,(Math.random()-.5)*80),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),i.userData={rx:(Math.random()-.5)*.1,ry:(Math.random()-.5)*.1,rz:(Math.random()-.5)*.1,vx:-.05-Math.random()*.08,vy:-.08-Math.random()*.1},this.petalsGroup.add(i)}this.scene.add(this.petalsGroup)}createInkScene(){this.mountain1=this.createProceduralMountain(1024,512,"rgba(20, 25, 30, 0.9)",0),this.mountain1.position.set(0,15,-80),this.scene.add(this.mountain1),this.mountain2=this.createProceduralMountain(1024,512,"rgba(60, 65, 70, 0.6)",1e3),this.mountain2.position.set(-30,10,-120),this.scene.add(this.mountain2),this.mountain3=this.createProceduralMountain(1024,512,"rgba(100, 105, 110, 0.4)",2e3),this.mountain3.position.set(30,5,-160),this.scene.add(this.mountain3);const t=this.createInkMoonTexture();this.inkMoon=new Wt(new Xe(80,80),new me({map:t,transparent:!0,opacity:0,blending:vn,depthWrite:!1})),this.inkMoon.position.set(0,30,-100),this.scene.add(this.inkMoon),this.createInkBirds(),this.createPetals(),this.textPoem1=this.createTextSprite("Năm tháng trôi như dòng thủy mặc,","Dancing Script",120,"#222222","0px",8),this.textPoem1.position.set(0,25,150),this.textPoem1.material.opacity=0,this.textPoem1.userData.writeProgress=0,this.updateTextSpriteWriting(this.textPoem1,0),this.scene.add(this.textPoem1),this.textPoem1Reflect=new Wt(this.textPoem1.geometry,new me({map:this.textPoem1.material.map,transparent:!0,opacity:0,side:ye,depthTest:!1,blending:vn})),this.textPoem1Reflect.position.set(0,-12,150),this.textPoem1Reflect.scale.y=-.5,this.textPoem1Reflect.renderOrder=10,this.scene.add(this.textPoem1Reflect),this.textPoem2=this.createTextSprite("Tâm an nhiên tĩnh tại tựa ngàn non.","Dancing Script",120,"#222222","0px",8),this.textPoem2.position.set(0,10,40),this.textPoem2.material.opacity=0,this.textPoem2.userData.writeProgress=0,this.updateTextSpriteWriting(this.textPoem2,0),this.scene.add(this.textPoem2),this.textPoem2Reflect=new Wt(this.textPoem2.geometry,new me({map:this.textPoem2.material.map,transparent:!0,opacity:0,side:ye,depthTest:!1,blending:vn})),this.textPoem2Reflect.position.set(0,-12,40),this.textPoem2Reflect.scale.y=-.5,this.textPoem2Reflect.renderOrder=10,this.scene.add(this.textPoem2Reflect)}transitionToInkWash(){tt.to(this.bloomPass,{strength:0,duration:4}),tt.to(this.scene.background,{r:.91,g:.89,b:.85,duration:5}),tt.to(this.scene.fog.color,{r:.91,g:.89,b:.85,duration:5}),this.stars&&tt.to(this.stars.material,{opacity:0,duration:4}),this.moon&&tt.to(this.moon.scale,{x:.01,y:.01,z:.01,duration:4}),tt.to(this.water.material.uniforms.waterColor.value,{r:.8,g:.82,b:.85,duration:5}),tt.to(this.water.material.uniforms.sunColor.value,{r:1,g:1,b:1,duration:5}),tt.to(this.water.material.uniforms.distortionScale,{value:1,duration:5}),this.mountain3.position.y=-40,this.mountain2.position.y=-40,this.mountain1.position.y=-40,tt.to(this.mountain3.material,{opacity:1,duration:4,delay:1}),tt.to(this.mountain3.position,{y:5,duration:7,delay:1,ease:"power2.out"}),tt.to(this.mountain2.material,{opacity:1,duration:4,delay:2}),tt.to(this.mountain2.position,{y:10,duration:7,delay:2,ease:"power2.out"}),tt.to(this.mountain1.material,{opacity:1,duration:4,delay:3}),tt.to(this.mountain1.position,{y:15,duration:7,delay:3,ease:"power2.out"}),tt.to(this.inkMoon.material,{opacity:1,duration:5,delay:4}),this.birdMats.forEach(t=>tt.to(t,{opacity:1,duration:3,delay:3})),this.birds.position.set(30,0,0)}transitionToDawn(){tt.to(this.bloomPass,{strength:1.2,duration:5}),tt.to(this.scene.background,{r:.8,g:.3,b:.4,duration:8,ease:"power2.inOut"}),tt.to(this.scene.fog.color,{r:1,g:.53,b:.67,duration:8}),tt.to(this.mountain1.material,{opacity:0,duration:5}),tt.to(this.mountain2.material,{opacity:0,duration:5}),tt.to(this.mountain3.material,{opacity:0,duration:5}),tt.to(this.inkMoon.material,{opacity:0,duration:5}),this.birdMats.forEach(s=>tt.to(s,{opacity:0,duration:3})),tt.to(this.petalMat,{opacity:0,duration:4}),this.stars&&tt.to(this.stars.material,{opacity:.9,duration:5}),this.moon&&tt.to(this.moon.scale,{x:1,y:1,z:1,duration:5}),tt.to(this.moon.material,{emissiveIntensity:2,duration:4}),tt.to(this.water.material.uniforms.waterColor.value,{r:.004,g:.1,b:.18,duration:8}),tt.to(this.water.material.uniforms.sunColor.value,{r:1,g:.5,b:.5,duration:8}),tt.to(this.water.material.uniforms.distortionScale,{value:3.7,duration:8});const t=this.stars.geometry.attributes.position.array,e=new Float32Array(t),n=this.heartTargetPositions,i={p:0};tt.to(i,{p:1,duration:8,ease:"power3.inOut",onUpdate:()=>{for(let s=0;s<t.length;s++)t[s]=e[s]+(n[s]-e[s])*i.p;this.stars.geometry.attributes.position.needsUpdate=!0}}),tt.to(this.camera.position,{z:120,y:30,duration:20,ease:"power1.out"})}createStars(){const t=new Se,e=new ta({color:16777215,size:.3,transparent:!0,opacity:.9,blending:We}),n=[],i=new Rt;for(let s=0;s<8e3;s++){const o=(Math.random()-.5)*1200,a=(Math.random()-.5)*1200,l=(Math.random()-.5)*1200;this.starPositions.push(o,a,l);const c=Math.random();c>.8?i.setHex(8965375):c>.6?i.setHex(16768426):i.setHex(16777215),n.push(i.r,i.g,i.b);const h=Math.random()*Math.PI*2,u=16*Math.pow(Math.sin(h),3),f=13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h),m=(Math.random()-.5)*20;this.heartTargetPositions.push(u*5,f*5+30,m*3-100)}t.setAttribute("position",new oe(this.starPositions,3)),t.setAttribute("color",new oe(n,3)),e.vertexColors=!0,this.stars=new Zs(t,e),this.scene.add(this.stars)}createShootingStars(){const t=new ga(0,.1,10,3),e=new me({color:16777215,transparent:!0,opacity:.8});for(let n=0;n<5;n++){const i=new Wt(t,e);i.position.set(Math.random()*400-200,Math.random()*200+100,Math.random()*-200-50),i.rotation.z=-Math.PI/4,i.rotation.x=Math.PI/8,this.scene.add(i),this.shootingStars.push({mesh:i,speed:Math.random()*2+1})}}createMoon(){const t=new ea,e=new Ln(25,64,64),n=t.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"),i=new mo({map:n,emissive:2236979,emissiveIntensity:.5,roughness:1,metalness:0});this.moon=new Wt(e,i),this.moon.position.set(0,25,-50);const s=new Ln(26.5,64,64),o=new me({color:4886754,transparent:!0,opacity:.15,side:je,blending:We});this.moon.add(new Wt(s,o));const a=new dx(16777215,2.5);a.position.set(50,50,50),this.scene.add(a);const l=new bh(8965375,2,200);l.position.set(-30,20,-100),this.scene.add(l),this.scene.add(new px(1118498)),this.scene.add(this.moon)}createWater(){const t=new Xe(2e3,2e3),n=new ea().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg",function(i){i.wrapS=i.wrapT=ha});this.water=new Ex(t,{textureWidth:512,textureHeight:512,waterNormals:n,sunDirection:new U(50,50,50).normalize(),sunColor:16777215,waterColor:72239,distortionScale:3.7,fog:!0}),this.water.rotation.x=-Math.PI/2,this.water.position.y=-10,this.scene.add(this.water)}createCake(){this.cakeGroup=new Ke,this.cakeGroup.position.set(60,40,200);const e=new ea().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"),n=new Ln(1.5,32,32),i=new mo({map:e,emissive:3355460,emissiveIntensity:.8,roughness:.5,metalness:.5});this.tinyMoon=new Wt(n,i),this.cakeGroup.add(this.tinyMoon);const s=new ga(.02,.02,.8,8),o=new mo({color:14540253,metalness:.9,roughness:.1}),a=new Wt(s,o);a.position.set(0,1.9,0),this.cakeGroup.add(a),this.flameLight=new bh(16755200,0,100),this.flameLight.position.set(0,2.4,0);const l=new Ln(.15,16,16),c=new me({color:16777215,transparent:!0,opacity:0});this.flameMesh=new Wt(l,c);const h=new Ln(.08,16,16),u=new me({color:16777215,transparent:!0,opacity:0});this.flameCore=new Wt(h,u),this.flameMesh.add(this.flameCore),this.flameLight.add(this.flameMesh),this.cakeGroup.add(this.flameLight),this.scene.add(this.cakeGroup)}showCake(){tt.to(this.cakeGroup.position,{x:0,y:12,z:25,duration:6,ease:"power2.out"}),tt.to(this.flameLight,{intensity:4,duration:2,delay:4}),tt.to(this.flameMesh.material,{opacity:.8,duration:2,delay:4}),tt.to(this.flameCore.material,{opacity:1,duration:2,delay:4})}hideCake(){tt.to(this.cakeGroup.position,{x:-20,y:25,z:-50,duration:4,ease:"power3.in"}),tt.to(this.cakeGroup.scale,{x:0,y:0,z:0,duration:4,ease:"power2.in"})}blowOutCandles(){tt.to(this.flameLight,{intensity:0,duration:.1}),tt.to(this.flameMesh.scale,{x:0,y:0,z:0,duration:.1})}warpSpeed(){tt.to(this.camera.position,{z:40,duration:6,ease:"power4.inOut"}),tt.to(this.camera,{fov:110,duration:3,ease:"power2.in",yoyo:!0,repeat:1,onUpdate:()=>this.camera.updateProjectionMatrix()})}tiltDown(){tt.to(this.camera.position,{y:-5,z:60,duration:4,ease:"sine.inOut"}),tt.to(this.camera.rotation,{x:-Math.PI/12,duration:4,ease:"sine.inOut"})}tiltUp(){tt.to(this.camera.position,{y:15,z:40,duration:4,ease:"sine.inOut"}),tt.to(this.camera.rotation,{x:0,duration:4,ease:"sine.inOut"})}update(){const t=this.clock.getElapsedTime();if(this.stars&&(this.stars.rotation.y=t*.005),this.moon&&(this.moon.rotation.y=t*.05,this.moon.position.y=25+Math.sin(t*.5)*1.5),this.water&&(this.water.material.uniforms.time.value+=1/60),this.birds&&this.birdMats.length>0&&this.birdMats[0].opacity>0&&(this.birds.position.x-=.3,this.birds.children.forEach(e=>{e.position.y+=Math.sin(t*2+e.userData.yOffset)*.02;const n=Math.sin(t*e.userData.flapSpeed)*.6;e.userData.wingR.rotation.y=-n,e.userData.wingL.rotation.y=Math.PI-n})),this.petalsGroup&&this.petalMat.opacity>0&&this.petalsGroup.children.forEach(e=>{e.position.x+=e.userData.vx,e.position.y+=e.userData.vy,e.rotation.x+=e.userData.rx,e.rotation.y+=e.userData.ry,e.rotation.z+=e.userData.rz,e.position.y<-10&&(e.position.y=50+Math.random()*20,e.position.x=(Math.random()-.5)*150)}),this.shootingStars&&this.shootingStars.forEach(e=>{e.mesh.position.x-=e.speed,e.mesh.position.y-=e.speed*.5,e.mesh.position.x<-300&&(e.mesh.position.x=300+Math.random()*200,e.mesh.position.y=100+Math.random()*200)}),this.cakeGroup&&(this.tinyMoon.rotation.y=t*.5,this.tinyMoon.rotation.x=t*.2,this.flameLight&&this.flameLight.intensity>0&&(this.flameLight.intensity=3+Math.random()*2,this.flameMesh.scale.setScalar(1+Math.random()*.1),this.flameLight.position.x=(Math.random()-.5)*.05)),this.photoSphere&&this.photoSphere.update(1/60),this.sparklingPoint&&this.sparklingPoint.visible&&(this.sparklingPoint.rotation.y=t*2,this.sparklingPoint.scale.setScalar(1+Math.sin(t*5)*.25)),this.spaceStarfield&&this.spaceStarfield.visible&&(this.spaceStarfield.rotation.y+=15e-5),this.blackHoleGroup&&this.blackHoleGroup.visible&&(this.blackHoleGroup.rotation.y+=.035,this.accretionUniforms&&(this.accretionUniforms.uTime.value=t),this.lensingUniforms&&(this.lensingUniforms.uTime.value=t),this.accretionEmbers&&(this.accretionEmbers.rotation.y+=.045,this.accretionEmbers.rotation.z-=.015)),this.suctionStreamers&&this.suctionStreamers.visible&&this.suctionStreamers.geometry){this.suctionStreamers.rotation.z+=.03;const e=this.suctionStreamers.geometry.attributes.position;if(e&&e.array){const n=e.array,i=typeof this.warpVelocity=="number"&&!isNaN(this.warpVelocity)?this.warpVelocity:25;for(let s=0;s<n.length;s+=6)if(n[s+2]+=i,n[s+5]+=i,n[s+2]>100){const o=n[s+2]-n[s+5];n[s+2]=-160,n[s+5]=-160-o}e.needsUpdate=!0}}this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}createSparklingLightPoint(){this.sparklingPoint=new Ke,this.sparklingPoint.position.set(0,12,18),this.sparklingPoint.visible=!1;const t=new Ln(.5,32,32),e=new me({color:16777215}),n=new Wt(t,e);this.sparklingPoint.add(n);const i=new Xe(8,8),s=new me({color:16770688,transparent:!0,opacity:.85,blending:We,side:ye}),o=new Wt(i,s);this.sparklingPoint.add(o),this.scene.add(this.sparklingPoint)}createSpaceStarfield(){this.spaceStarfield=new Ke,this.spaceStarfield.visible=!1;const t=4500,e=new Se,n=new Float32Array(t*3),i=new Float32Array(t*3),s=new Rt;for(let u=0;u<t;u++){const f=90+Math.random()*260,m=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1);n[u*3]=f*Math.sin(_)*Math.cos(m),n[u*3+1]=f*Math.sin(_)*Math.sin(m),n[u*3+2]=f*Math.cos(_);const g=Math.random();g>.85?s.setHex(10079487):g>.5?s.setHex(16777215):g>.25?s.setHex(16772768):s.setHex(16764040),i[u*3]=s.r,i[u*3+1]=s.g,i[u*3+2]=s.b}e.setAttribute("position",new Ce(n,3)),e.setAttribute("color",new Ce(i,3));const o=new ta({size:1.25,vertexColors:!0,transparent:!0,opacity:.95,blending:We});this.spaceStarfield.add(new Zs(e,o));const a=800,l=new Se,c=new Float32Array(a*3);for(let u=0;u<a;u++)c[u*3]=(Math.random()-.5)*320,c[u*3+1]=(Math.random()-.5)*160,c[u*3+2]=(Math.random()-.5)*320;l.setAttribute("position",new Ce(c,3));const h=new ta({color:1586022,size:3.5,transparent:!0,opacity:.4,blending:We});this.spaceStarfield.add(new Zs(l,h)),this.scene.add(this.spaceStarfield)}createRealisticBlackHoleSingularity(){this.blackHoleGroup=new Ke,this.blackHoleGroup.position.set(0,12,0),this.blackHoleGroup.visible=!1;const t=new Ln(5.2,64,64),e=new me({color:0});this.blackHoleGroup.add(new Wt(t,e));const n=new Xe(36,36);this.lensingUniforms={uTime:{value:0}};const i=new Le({uniforms:this.lensingUniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          float dist = length(vUv - vec2(0.5)) * 2.0; // 0.0 ở tâm, 1.0 ở rìa
          // Bóng đen hố đen (Event Horizon shadow)
          float shadow = smoothstep(0.28, 0.31, dist);
          // Vòng sáng phô-tông hội tụ mãnh liệt tại rìa chân trời sự kiện
          float photonRing = exp(-pow((dist - 0.31) * 24.0, 2.0)) * 2.8;
          // Hào quang khí quyển tương đối tính lan tỏa siêu mềm ra ngoài không gian (Không có viền cứng)
          float softAtmosphere = exp(-(dist - 0.31) * 3.6) * smoothstep(0.25, 0.35, dist);

          vec3 goldenLight = vec3(1.0, 0.85, 0.35);
          vec3 cyanWarp = vec3(0.2, 0.88, 1.0);
          vec3 color = mix(goldenLight, cyanWarp, sin(uTime * 1.5) * 0.5 + 0.5);

          gl_FragColor = vec4(color, (photonRing + softAtmosphere * 0.85) * shadow);
        }
      `,transparent:!0,blending:We,depthWrite:!1});this.blackHoleGroup.add(new Wt(n,i));const s=new vl(5.4,38,128,64);this.accretionUniforms={uTime:{value:0}};const o=new Le({uniforms:this.accretionUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          vUv = uv;
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPos;
        void main() {
          float angle = atan(vPos.y, vPos.x);
          float radius = length(vPos.xy);

          // Hiệu ứng Doppler Beaming (Doppler Boost): bên tiến về phía ta sáng chói rực rỡ hơn bên ra xa
          float doppler = 1.0 + 0.72 * sin(angle - 0.4);

          // Các luồng khí plasma xoáy ốc thiên văn nhiều lớp mượt mà
          float w1 = sin(angle * 5.0 - radius * 0.9 - uTime * 5.0) * 0.5 + 0.5;
          float w2 = cos(angle * 11.0 - radius * 1.8 - uTime * 8.0) * 0.5 + 0.5;
          float w3 = sin(angle * 21.0 - radius * 0.4 - uTime * 12.0) * 0.5 + 0.5;
          float gasStreams = pow(w1 * 0.5 + w2 * 0.35 + w3 * 0.15, 1.3);

          // Phân tầng nhiệt độ: lõi siêu nhiệt trắng kim cương, giữa vàng hổ phách, rìa ngoài đỏ thẫm
          vec3 whitePlasma = vec3(1.0, 1.0, 1.0);
          vec3 amberPlasma = vec3(1.0, 0.68, 0.15);
          vec3 crimsonHalo = vec3(0.75, 0.12, 0.05);

          float mixVal = clamp((radius - 5.4) / 20.0, 0.0, 1.0);
          vec3 color = mix(whitePlasma, amberPlasma, mixVal);
          color = mix(color, crimsonHalo, pow(mixVal, 1.7));

          // Độ mờ vô cực theo hàm mũ exp: tuyệt đối KHÔNG CÓ VIỀN VÒNG TRÒN CỨNG
          float innerFade = smoothstep(5.4, 6.8, radius);
          float outerSoftFade = exp(-(radius - 6.5) * 0.135);
          float alpha = gasStreams * innerFade * outerSoftFade * doppler;

          gl_FragColor = vec4(color, alpha * 0.95);
        }
      `,transparent:!0,blending:We,side:ye,depthWrite:!1}),a=new Wt(s,o);a.rotation.x=Math.PI/2.55,a.rotation.y=.15,this.blackHoleGroup.add(a);const l=new Xe(28,28),c=new Le({uniforms:this.lensingUniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        void main() {
          vec2 c = vUv - vec2(0.5);
          float dist = length(c) * 2.0;
          float angle = atan(c.y, c.x);

          // Vòng sáng phía trên và phía dưới bị bẻ cong bởi trọng lực hố đen
          float topArch = exp(-pow((dist - 0.42) * 12.0, 2.0)) * smoothstep(0.0, 0.8, sin(angle));
          float bottomArch = exp(-pow((dist - 0.46) * 10.0, 2.0)) * smoothstep(0.0, 0.8, -sin(angle)) * 0.6;

          vec3 archColor = vec3(1.0, 0.78, 0.25);
          float alpha = (topArch + bottomArch) * smoothstep(0.28, 0.34, dist);
          gl_FragColor = vec4(archColor, alpha * 0.85);
        }
      `,transparent:!0,blending:We,depthWrite:!1}),h=new Wt(l,c);h.position.z=-.5,this.blackHoleGroup.add(h);const u=12e3,f=new Se,m=new Float32Array(u*3),_=new Float32Array(u*3),g=new Float32Array(u),d=new Rt;for(let F=0;F<u;F++){const $=6+Math.pow(Math.random(),.7)*32,L=Math.random()*Math.PI*2,N=(Math.random()-.5)*($*.28);m[F*3]=$*Math.cos(L),m[F*3+1]=N,m[F*3+2]=$*Math.sin(L),g[F]=1.2+Math.random()*3.8;const z=Math.random();$<9?d.setHex(16777215):$<17?d.setHex(16755234):z>.5?d.setHex(14496512):d.setHex(61168),_[F*3]=d.r,_[F*3+1]=d.g,_[F*3+2]=d.b}f.setAttribute("position",new Ce(m,3)),f.setAttribute("color",new Ce(_,3)),f.setAttribute("size",new Ce(g,1));const p=new Le({vertexShader:`
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float glow = exp(-dist * dist * 16.0);
          float core = smoothstep(0.5, 0.0, dist);
          gl_FragColor = vec4(vColor, (glow * 0.75 + core * 0.25) * 0.95);
        }
      `,transparent:!0,blending:We,depthWrite:!1});this.accretionEmbers=new Zs(f,p),this.accretionEmbers.rotation.x=Math.PI/2.55,this.blackHoleGroup.add(this.accretionEmbers),this.scene.add(this.blackHoleGroup);const x=2500,v=new Se,S=new Float32Array(x*2*3),w=new Float32Array(x*2*3),A=new Rt;for(let F=0;F<x;F++){const $=3.5+Math.pow(Math.random(),.7)*42,L=Math.random()*Math.PI*2,N=$*Math.cos(L),z=$*Math.sin(L),K=80-Math.random()*160,j=10+Math.random()*28;S[F*6]=N,S[F*6+1]=z+12,S[F*6+2]=K,S[F*6+3]=N,S[F*6+4]=z+12,S[F*6+5]=K-j;const q=Math.random();q>.75?A.setHex(65535):q>.4?A.setHex(16777215):q>.2?A.setHex(16755234):A.setHex(5605631);for(let P=0;P<2;P++)w[F*6+P*3]=A.r,w[F*6+P*3+1]=A.g,w[F*6+P*3+2]=A.b}v.setAttribute("position",new Ce(S,3)),v.setAttribute("color",new Ce(w,3));const E=new hf({vertexColors:!0,transparent:!0,opacity:.9,blending:We});this.suctionStreamers=new ox(v,E),this.suctionStreamers.visible=!1,this.scene.add(this.suctionStreamers),this.birthFlashGroup=new Ke,this.birthFlashGroup.position.set(0,12,0),this.birthFlashGroup.visible=!1;const I=new Ln(1,32,32),M=new me({color:16777215,transparent:!0,opacity:1,blending:We});this.birthFlashCore=new Wt(I,M),this.birthFlashGroup.add(this.birthFlashCore);const T=new xl(2,.4,32,64),G=new me({color:65535,transparent:!0,opacity:.9,blending:We});this.birthShockwave=new Wt(T,G),this.birthShockwave.rotation.x=Math.PI/2.7,this.birthFlashGroup.add(this.birthShockwave),this.scene.add(this.birthFlashGroup)}triggerBlackHoleSuction(t,e){this.sparklingPoint&&(this.sparklingPoint.visible=!1),this.bloomPass&&tt.to(this.bloomPass,{strength:.35,threshold:.65,radius:.4,duration:2.5}),tt.to(this.scene.background,{r:5e-4,g:.001,b:.002,duration:2,ease:"power2.inOut"}),tt.to(this.scene.fog.color,{r:5e-4,g:.001,b:.002,duration:2,ease:"power2.inOut"}),this.stars&&(this.stars.visible=!1),this.birthFlashGroup&&(this.birthFlashGroup.visible=!0,this.birthFlashCore.scale.set(.1,.1,.1),this.birthFlashCore.material.opacity=1,this.birthShockwave.scale.set(.2,.2,.2),this.birthShockwave.material.opacity=.9,tt.to(this.birthFlashCore.scale,{x:25,y:25,z:25,duration:1.4,ease:"power2.out"}),tt.to(this.birthFlashCore.material,{opacity:0,duration:1.4,ease:"power2.out"}),tt.to(this.birthShockwave.scale,{x:20,y:20,z:20,duration:1.6,ease:"power2.out"}),tt.to(this.birthShockwave.material,{opacity:0,duration:1.6,ease:"power2.out",onComplete:()=>{this.birthFlashGroup.visible=!1}})),this.blackHoleGroup&&(this.blackHoleGroup.visible=!0,this.blackHoleGroup.scale.set(.1,.1,.1),tt.to(this.blackHoleGroup.scale,{x:2.2,y:2.2,z:2.2,duration:2.6,ease:"power2.out"})),this.suctionStreamers&&(this.suctionStreamers.visible=!0,this.warpVelocity=25),e&&typeof e.playBlackHoleSuction=="function"&&e.playBlackHoleSuction(),console.log("🌌 HỐ ĐEN VŨ TRỤ XUẤT HIỆN: Ánh chớp sinh ra uy nghi, ban đầu từ từ chậm bị hút vào sau mới lao nhanh!");const n=[this.textHBD,this.textLove,this.cakeGroup,this.moon,this.birds].filter(Boolean);n.forEach((i,s)=>{tt.to(i.position,{x:0,y:12,z:0,duration:2.8,delay:s*.06,ease:"power3.in"}),tt.to(i.rotation,{x:"+=3.14",y:"+=6.28",z:"+=3.14",duration:2.8,delay:s*.06,ease:"power3.in"}),tt.to(i.scale,{x:0,y:0,z:0,duration:2.8,delay:s*.06,ease:"power3.in",onComplete:()=>{i.visible=!1}})}),this.water&&tt.to(this.water.position,{y:-150,duration:2.8,ease:"power2.in",onComplete:()=>{this.water.visible=!1}}),setTimeout(()=>{e&&typeof e.playBlackHoleWarp=="function"&&e.playBlackHoleWarp()},1200),tt.to(this.camera,{fov:98,duration:3.4,ease:"power3.in",onUpdate:()=>this.camera.updateProjectionMatrix()}),tt.to(this.camera.rotation,{z:.08,duration:1.7,yoyo:!0,repeat:1,ease:"sine.inOut"}),console.log("🚀 HÚT GÓC NHÌN CAMERA VÀO TRONG HỐ ĐEN: Vệt sáng lướt qua hai bên và phía sau tạo cảm giác lao tới!"),tt.to(this.camera.position,{x:0,y:12,z:-45,duration:3.5,ease:"power3.in",onComplete:()=>{this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(0,12,36),this.camera.rotation.set(0,0,0),this.blackHoleGroup&&(this.blackHoleGroup.visible=!1),this.suctionStreamers&&(this.suctionStreamers.visible=!1),this.birthFlashGroup&&(this.birthFlashGroup.visible=!1),this.water&&(this.water.visible=!1),this.stars&&(this.stars.visible=!1),this.spaceStarfield&&(this.spaceStarfield.visible=!0),n.forEach(i=>{i&&(i.visible=!1)}),this.scene.background.setRGB(.001,.002,.005),this.scene.fog.color.setRGB(.001,.002,.005),this.bloomPass&&(this.bloomPass.strength=.4),this.photoSphere&&this.photoSphere.show(),t&&t()}})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}}class kx{constructor(){this.ctx=null,this.masterGain=null,this.compressor=null,this.reverbBus=null,this.reverbGain=null,this.isStarted=!1,this.currentScene="none",this.spacePadNodes=[],this.spacePadGain=null,this.atmosphereGain=null,this.atmosphereNode=null,this.inkWashGain=null,this.inkWashNodes=[],this.diveWhooshNode=null,this.diveWhooshGain=null,this.dawnGain=null,this.yearCountInterval=null}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(30,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.005,this.ctx.currentTime),this.compressor.release.setValueAtTime(.25,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.88,this.ctx.currentTime),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.setupReverbBus()}this.ctx.state==="suspended"&&this.ctx.resume()}setupReverbBus(){this.reverbBus=this.ctx.createGain(),this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.setValueAtTime(.4,this.ctx.currentTime);const t=this.ctx.createDelay(),e=this.ctx.createDelay();t.delayTime.setValueAtTime(.28,this.ctx.currentTime),e.delayTime.setValueAtTime(.42,this.ctx.currentTime);const n=this.ctx.createGain();n.gain.setValueAtTime(.35,this.ctx.currentTime);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1600,this.ctx.currentTime),this.reverbBus.connect(t),this.reverbBus.connect(e),t.connect(i),e.connect(i),i.connect(n),n.connect(t),n.connect(e),t.connect(this.reverbGain),e.connect(this.reverbGain),this.reverbGain.connect(this.compressor)}start(){this.initContext(),!this.isStarted&&(this.isStarted=!0,this.currentScene="space",this.startSpaceAmbient(),this.startDeepAtmosphere())}playCameraWhoosh(t=2.5,e=1,n="approach"){if(!this.ctx)return;const i=this.ctx.currentTime,s=this.createNoiseBuffer("pink",t),o=this.ctx.createBufferSource();o.buffer=s;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.Q.value=1.4,n==="approach"?(a.frequency.setValueAtTime(140,i),a.frequency.exponentialRampToValueAtTime(850,i+t*.55),a.frequency.exponentialRampToValueAtTime(220,i+t)):(a.frequency.setValueAtTime(700,i),a.frequency.exponentialRampToValueAtTime(150,i+t));const l=this.ctx.createGain();l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(.38*e,i+t*.5),l.gain.exponentialRampToValueAtTime(.001,i+t),o.connect(a),a.connect(l),l.connect(this.compressor),l.connect(this.reverbBus),o.start(i);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",n==="approach"?(c.frequency.setValueAtTime(50,i),c.frequency.exponentialRampToValueAtTime(88,i+t*.6),c.frequency.exponentialRampToValueAtTime(42,i+t)):(c.frequency.setValueAtTime(80,i),c.frequency.exponentialRampToValueAtTime(38,i+t)),h.gain.setValueAtTime(.001,i),h.gain.linearRampToValueAtTime(.45*e,i+t*.45),h.gain.exponentialRampToValueAtTime(.001,i+t),c.connect(h),h.connect(this.compressor),c.start(i),c.stop(i+t+.1)}playWarpWhoosh(){this.initContext();const t=this.ctx.currentTime;this.playCameraWhoosh(3.2,1.2,"approach");const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(32,t+3),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.65,t+.3),n.gain.exponentialRampToValueAtTime(.001,t+3),e.connect(n),n.connect(this.compressor),e.start(t),e.stop(t+3.1)}playStarClickGlow(){this.initContext();const t=this.ctx.currentTime;this.playCameraWhoosh(1.8,.65,"approach"),this.playCinematicRhodes([146.83,220,329.63],t,.28,3.5)}playMoonApproachWhoosh(){if(!this.ctx)return;const t=this.ctx.currentTime,e=6,n=this.createNoiseBuffer("pink",e),i=this.ctx.createBufferSource();i.buffer=n;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.Q.value=1.6,s.frequency.setValueAtTime(120,t),s.frequency.exponentialRampToValueAtTime(980,t+3.8),s.frequency.exponentialRampToValueAtTime(250,t+e);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.42,t+3.5),o.gain.exponentialRampToValueAtTime(.001,t+e),i.connect(s),s.connect(o),o.connect(this.compressor),o.connect(this.reverbBus),i.start(t);const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(42,t),a.frequency.exponentialRampToValueAtTime(92,t+3.8),a.frequency.exponentialRampToValueAtTime(48,t+e),l.gain.setValueAtTime(.001,t),l.gain.linearRampToValueAtTime(.5,t+3.2),l.gain.exponentialRampToValueAtTime(.001,t+e),a.connect(l),l.connect(this.compressor),a.start(t),a.stop(t+e+.1)}startSpaceAmbient(){const t=this.ctx.currentTime;this.spacePadGain=this.ctx.createGain(),this.spacePadGain.gain.setValueAtTime(.001,t),this.spacePadGain.gain.linearRampToValueAtTime(.24,t+4);const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(580,t);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.value=.07,i.gain.value=160,n.connect(e.frequency),n.start(t);const s=[146.83,185,220,277.18,329.63];s.forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=a%2===0?"sawtooth":"triangle",l.frequency.value=o+(Math.random()-.5)*.7,c.gain.value=.2/s.length,l.connect(c),c.connect(e),l.start(t),this.spacePadNodes.push({osc:l,gain:c})}),e.connect(this.spacePadGain),this.spacePadGain.connect(this.compressor),this.spacePadGain.connect(this.reverbBus)}startDeepAtmosphere(){const t=this.ctx.currentTime,e=this.createNoiseBuffer("pink",10);this.atmosphereNode=this.ctx.createBufferSource(),this.atmosphereNode.buffer=e,this.atmosphereNode.loop=!0;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(220,t),this.atmosphereGain=this.ctx.createGain(),this.atmosphereGain.gain.setValueAtTime(.001,t),this.atmosphereGain.gain.linearRampToValueAtTime(.14,t+5),this.atmosphereNode.connect(n),n.connect(this.atmosphereGain),this.atmosphereGain.connect(this.compressor),this.atmosphereNode.start(t)}playTitleChime(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCinematicRhodes([146.83,185,220,277.18],t,.3,4)}startYearCount(){if(!this.ctx||this.yearCountInterval)return;let t=0;this.yearCountInterval=setInterval(()=>{if(!this.ctx)return;const e=this.ctx.currentTime,n=t%2===0?110:146.83;this.playWarmPulse(n,e,.16,.45),t++},200)}stopYearCount(){if(this.yearCountInterval&&(clearInterval(this.yearCountInterval),this.yearCountInterval=null),!this.ctx)return;const t=this.ctx.currentTime;this.playCinematicRhodes([146.83,220,293.66,369.99],t,.35,4.5)}playWhisper(t){if(!this.ctx)return;const e=this.ctx.currentTime,n=[[146.83,220,293.66,369.99],[123.47,185,246.94,293.66],[110,164.81,220,329.63],[146.83,220,277.18,329.63],[146.83,220,293.66,440]],i=n[t%n.length];this.playCinematicRhodes(i,e,.28,4.2)}playCakeApproachWhoosh(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCameraWhoosh(3.2,.85,"approach");const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(220,t),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.06,t+1.2),n.gain.exponentialRampToValueAtTime(.001,t+6),e.connect(n),n.connect(this.reverbBus),e.start(t),e.stop(t+6.1)}playCandleBlow(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.createNoiseBuffer("white",1),n=this.ctx.createBufferSource();n.buffer=e;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1400,t),i.frequency.exponentialRampToValueAtTime(120,t+.7);const s=this.ctx.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.32,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.8),n.connect(i),i.connect(s),s.connect(this.compressor),n.start(t),this.playCinematicRhodes([220,329.63,440],t+.2,.25,4)}transitionToInkWash(){if(!this.ctx||this.currentScene==="inkwash")return;this.currentScene="inkwash";const t=this.ctx.currentTime;this.spacePadGain&&this.spacePadGain.gain.linearRampToValueAtTime(.001,t+3),this.atmosphereGain&&this.atmosphereGain.gain.linearRampToValueAtTime(.001,t+3),this.playCameraWhoosh(3.6,.9,"approach"),this.startInkWashCinematicScore()}startInkWashCinematicScore(){const t=this.ctx.currentTime;this.inkWashGain=this.ctx.createGain(),this.inkWashGain.gain.setValueAtTime(.001,t),this.inkWashGain.gain.linearRampToValueAtTime(.28,t+3.5);const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(680,t);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.value=.06,i.gain.value=180,n.connect(e.frequency),n.start(t);const s=[146.83,220,293.66,392];s.forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=a<2?"sawtooth":"triangle",l.frequency.value=o,c.gain.value=.22/s.length,l.connect(c),c.connect(e),l.start(t),this.inkWashNodes.push({osc:l,gain:c})}),e.connect(this.inkWashGain),this.inkWashGain.connect(this.compressor),this.inkWashGain.connect(this.reverbBus)}startInkWashDiveWhoosh(){if(!this.ctx||this.currentScene!=="inkwash")return;const t=this.ctx.currentTime,e=this.createNoiseBuffer("pink",22);this.diveWhooshNode=this.ctx.createBufferSource(),this.diveWhooshNode.buffer=e;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.Q.value=1.6,n.frequency.setValueAtTime(160,t);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=.18,s.gain.value=350,i.connect(n.frequency),i.start(t),i.stop(t+21),this.diveWhooshGain=this.ctx.createGain(),this.diveWhooshGain.gain.setValueAtTime(.001,t),this.diveWhooshGain.gain.linearRampToValueAtTime(.32,t+3),this.diveWhooshGain.gain.setValueAtTime(.32,t+17),this.diveWhooshGain.gain.linearRampToValueAtTime(.001,t+21),this.diveWhooshNode.connect(n),n.connect(this.diveWhooshGain),this.diveWhooshGain.connect(this.compressor),this.diveWhooshGain.connect(this.reverbBus),this.diveWhooshNode.start(t),this.diveWhooshNode.stop(t+21.5)}playPoemChime(t){if(!this.ctx)return;const e=this.ctx.currentTime;t===1?this.playCinematicRhodes([146.83,220,293.66,440],e,.32,4.5):this.playCinematicRhodes([146.83,220,329.63,440],e,.32,5)}transitionToDawn(){if(!this.ctx||this.currentScene==="dawn")return;this.currentScene="dawn";const t=this.ctx.currentTime;this.spacePadGain&&this.spacePadGain.gain.linearRampToValueAtTime(1e-4,t+2.5),this.atmosphereGain&&this.atmosphereGain.gain.linearRampToValueAtTime(1e-4,t+2.5),this.inkWashGain&&this.inkWashGain.gain.linearRampToValueAtTime(1e-4,t+2.5),this.diveWhooshGain&&this.diveWhooshGain.gain.linearRampToValueAtTime(1e-4,t+1),this.yearCountInterval&&(clearInterval(this.yearCountInterval),this.yearCountInterval=null),this.playCameraWhoosh(4,1,"approach"),this.dawnGain=this.ctx.createGain(),this.dawnGain.gain.setValueAtTime(.001,t),this.dawnGain.gain.linearRampToValueAtTime(.32,t+5),this.dawnGain.gain.setValueAtTime(.32,t+6),this.dawnGain.gain.linearRampToValueAtTime(1e-4,t+14);const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(1400,t+6);const n=[73.42,146.83,220,293.66];n.forEach((i,s)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type=s<2?"sawtooth":"triangle",o.frequency.value=i,a.gain.value=.25/n.length,o.connect(a),a.connect(e),o.start(t),o.stop(t+14.2)}),e.connect(this.dawnGain),this.dawnGain.connect(this.compressor),this.dawnGain.connect(this.reverbBus)}playConfettiSparkles(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCinematicRhodes([73.42,146.83,220,293.66,369.99],t,.35,6)}playBlackHoleSuction(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(32,t),e.frequency.exponentialRampToValueAtTime(95,t+3),e.frequency.exponentialRampToValueAtTime(22,t+5.5);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(180,t),i.frequency.exponentialRampToValueAtTime(650,t+3),i.frequency.exponentialRampToValueAtTime(80,t+5.5),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.65,t+3),n.gain.exponentialRampToValueAtTime(.001,t+5.8),e.connect(i),i.connect(n),n.connect(this.compressor),n.connect(this.reverbBus),e.start(t),e.stop(t+6),this.playCameraWhoosh(5.5,1.4,"approach")}playBlackHoleWarp(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCameraWhoosh(4,1.5,"approach"),this.playCinematicRhodes([73.42,110,146.83,220,329.63],t,.45,6)}playPhotoSphereOpen(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCinematicRhodes([220,329.63,440,587.33],t,.25,3),this.playCameraWhoosh(1.5,.5,"approach")}playPhotoSphereClose(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCinematicRhodes([146.83,220,293.66],t,.22,2.5)}playPhotoEnlarge(){if(!this.ctx)return;const t=this.ctx.currentTime;this.playCinematicRhodes([146.83,220,293.66,440,659.25],t,.35,4.5),this.playCameraWhoosh(1.2,.6,"approach")}playCinematicRhodes(t=[],e,n=.28,i=4){this.ctx&&t.forEach((s,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(s,e),l.type="lowpass",l.frequency.setValueAtTime(s*3.2,e),l.frequency.exponentialRampToValueAtTime(s*1.3,e+.5);const h=n/t.length;c.gain.setValueAtTime(.001,e),c.gain.linearRampToValueAtTime(h,e+.02),c.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(l),l.connect(c),c.connect(this.compressor),c.connect(this.reverbBus),a.start(e),a.stop(e+i+.1)})}playWarmPulse(t,e,n=.18,i=.5){if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,e),o.type="lowpass",o.frequency.setValueAtTime(380,e),a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(n,e+.05),a.gain.exponentialRampToValueAtTime(1e-4,e+i),s.connect(o),o.connect(a),a.connect(this.compressor),s.start(e),s.stop(e+i+.05)}createNoiseBuffer(t="pink",e=2){const n=this.ctx.sampleRate,i=n*e,s=this.ctx.createBuffer(1,i,n),o=s.getChannelData(0);if(t==="white")for(let a=0;a<i;a++)o[a]=Math.random()*2-1;else{let a=0,l=0,c=0,h=0,u=0,f=0,m=0;for(let _=0;_<i;_++){const g=Math.random()*2-1;a=.99886*a+g*.0555179,l=.99332*l+g*.0750759,c=.969*c+g*.153852,h=.8665*h+g*.3104856,u=.55*u+g*.5329522,f=-.7616*f-g*.016898,o[_]=(a+l+c+h+u+f+m+g*.5362)*.11,m=g*.115926}}return s}}function Hx(){return new kx}let li=!1,Vn=!1,Qr=null,ts=null,Yn=null,Gi=null,es=null;function Ph(r){return new Promise((t,e)=>{if(document.querySelector(`script[src="${r}"]`)){t();return}const n=document.createElement("script");n.src=r,n.crossOrigin="anonymous",n.onload=()=>t(),n.onerror=()=>e(new Error(`Failed to load ${r}`)),document.head.appendChild(n)})}function Vx(r){const t=document.getElementById("smart-blow-hud");t&&t.remove();const e=document.createElement("div");e.id="smart-blow-hud",e.innerHTML=`
    <div style="display: flex; align-items: center; gap: 8px;">
      <span id="ai-cam-dot" style="width: 10px; height: 10px; border-radius: 50%; background: #ffaa00; display: inline-block; box-shadow: 0 0 8px #ffaa00;"></span>
      <span id="ai-cam-text" style="font-size: 13px; font-weight: 600;">📷 Chu môi thổi nến</span>
    </div>
    <div style="width: 1px; height: 18px; background: rgba(255,255,255,0.2);"></div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <span id="ai-mic-dot" style="width: 10px; height: 10px; border-radius: 50%; background: #ffaa00; display: inline-block; box-shadow: 0 0 8px #ffaa00;"></span>
      <span id="ai-mic-text" style="font-size: 13px; font-weight: 600;">🎙️ Thổi vào micro</span>
    </div>
    <div style="width: 1px; height: 18px; background: rgba(255,255,255,0.2);"></div>
    <button id="ai-skip-btn" style="background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.3); color: #fff; padding: 6px 16px; border-radius: 20px; cursor: pointer; font-size: 12px; font-family: inherit; transition: all 0.25s;">
      Chạm để thổi ✨
    </button>
  `,Object.assign(e.style,{position:"fixed",bottom:"40px",left:"50%",transform:"translateX(-50%)",zIndex:"9999",background:"rgba(12, 18, 36, 0.82)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.22)",borderRadius:"50px",padding:"12px 26px",display:"flex",alignItems:"center",gap:"16px",boxShadow:"0 12px 35px rgba(0, 0, 0, 0.6)",color:"#ffffff",fontFamily:"'Montserrat', sans-serif",transition:"all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",opacity:"0",pointerEvents:"auto"}),document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1",e.style.bottom="50px"});const n=e.querySelector("#ai-skip-btn");return n.addEventListener("click",()=>{r("manual")}),n.addEventListener("mouseenter",()=>{n.style.background="rgba(255, 255, 255, 0.35)"}),n.addEventListener("mouseleave",()=>{n.style.background="rgba(255, 255, 255, 0.18)"}),e}function Li(r,t,e){const n=document.getElementById(`ai-${r}-dot`),i=document.getElementById(`ai-${r}-text`);!n||!i||(t==="active"?(n.style.background="#00ff88",n.style.boxShadow="0 0 10px #00ff88",e&&(i.textContent=e)):t==="trigger"?(n.style.background="#00ffff",n.style.boxShadow="0 0 16px #00ffff",i.textContent=e||"✨ ĐÃ PHÁT HIỆN!"):t==="error"&&(n.style.background="#ff4444",n.style.boxShadow="none",e&&(i.textContent=e)))}function Wx(){li=!1,Qr&&(Qr.getTracks().forEach(t=>t.stop()),Qr=null),ts&&(ts.getTracks().forEach(t=>t.stop()),ts=null),Yn&&typeof Yn.close=="function"&&(Yn.close(),Yn=null),Gi&&(Gi.disconnect(),Gi=null),es&&(es.disconnect(),es=null);const r=document.getElementById("smart-blow-hud");r&&(r.style.opacity="0",r.style.bottom="20px",setTimeout(()=>r.remove(),600))}async function Xx(r){if(li||Vn){r();return}li=!0,Vn=!1;const t=n=>{Vn||(Vn=!0,console.log(`🎂 NẾN ĐÃ ĐƯỢC THỔI TẮT qua: [${n.toUpperCase()}]`),n==="camera"?Li("cam","trigger","👄 ĐÃ CHU MÔI THỔI!!"):n==="mic"&&Li("mic","trigger","💨 ĐÃ THỔI GIÓ!!"),setTimeout(()=>{Wx(),r()},400))};Vx(t);try{ts=await navigator.mediaDevices.getUserMedia({audio:!0});const n=new(window.AudioContext||window.webkitAudioContext),i=n.createAnalyser();es=n.createMediaStreamSource(ts),Gi=n.createScriptProcessor(2048,1,1),i.smoothingTimeConstant=.8,i.fftSize=1024,es.connect(i),i.connect(Gi),Gi.connect(n.destination),Li("mic","active","🎙️ Thổi vào micro"),Gi.onaudioprocess=()=>{if(!li||Vn)return;const s=new Uint8Array(i.frequencyBinCount);i.getByteFrequencyData(s);let o=0;for(let l=0;l<s.length;l++)o+=s[l];o/s.length>38&&t("mic")}}catch(n){console.warn("🎙️ Micro không khả dụng hoặc bị từ chối:",n),Li("mic","error","🎙️ Micro tắt")}try{Qr=await navigator.mediaDevices.getUserMedia({video:{width:320,height:240,facingMode:"user"}});const n=document.createElement("video");if(n.srcObject=Qr,n.playsInline=!0,n.muted=!0,await n.play(),Li("cam","active","📷 Đang tải AI chu môi..."),await Ph("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"),await Ph("https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"),window.FaceMesh){Yn=new window.FaceMesh({locateFile:o=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${o}`}),Yn.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5});let i=0;Yn.onResults(o=>{if(!li||Vn||!o.multiFaceLandmarks||o.multiFaceLandmarks.length===0)return;const a=o.multiFaceLandmarks[0],l=Math.hypot(a[454].x-a[234].x,a[454].y-a[234].y),c=Math.hypot(a[291].x-a[61].x,a[291].y-a[61].y),h=Math.hypot(a[14].x-a[13].x,a[14].y-a[13].y);if(l>0){const u=c/l,f=h/c;u<.285&&f>.235?(i++,i>=3&&(console.log(`👄 AI phát hiện hành động CHU MÔI (PuckerRatio: ${u.toFixed(3)}, OShape: ${f.toFixed(3)})`),t("camera"))):i=Math.max(0,i-1)}}),Li("cam","active","📷 Chu môi thổi nến");const s=async()=>{if(!(!li||Vn)){if(n.readyState>=2&&Yn)try{await Yn.send({image:n})}catch{}li&&!Vn&&requestAnimationFrame(s)}};requestAnimationFrame(s)}}catch(n){console.warn("📷 Camera không khả dụng hoặc bị từ chối:",n),Li("cam","error","📷 Camera tắt")}const e=()=>{li&&!Vn&&(window.removeEventListener("click",e),t("manual"))};window.addEventListener("click",e,{once:!0})}const pr={mediapipe:{maxNumHands:2,modelComplexity:1,minDetectionConfidence:.65,minTrackingConfidence:.65},filter:{minCutoff:1,beta:.007,dCutoff:1},cursor:{lerpFactor:.35,deadZone:.008},gesture:{pointingEnterThreshold:1.18,pointingExitThreshold:1.1,pinchEnterThreshold:.08,pinchExitThreshold:.14,fistMaxExtension:1.15,confirmFrames:2,gestureCooldownMs:150},state:{readyHoldMs:300,stopHoldMs:400,resetHoldMs:1500,spreadCommitThreshold:.65,transitionCooldownMs:300,handLostGraceMs:500},sphere:{rotationSensitivity:3.5,rotationDeadZone:.005,maxRotationX:.7,inertiaDecay:.92,minInertia:.001,proximityZoomSensitivity:150,zoomSensitivity:2.5,zoomDeadZone:.002,zoomMin:18,zoomMax:52,zoomLerp:.12},hover:{dwellTimeMs:600,selectPinchThreshold:.07,selectDwellMs:1200,hoverScaleBoost:1.15,hoverZOffset:2}};function zi(r,t,e){return Math.max(t,Math.min(e,r))}function Lh(r,t,e){return r+(t-r)*zi(e,0,1)}function _a(r,t){return Math.abs(r)<t?0:r>0?r-t:r+t}function Fi(r,t){return Math.hypot(r.x-t.x,r.y-t.y)}class qx{constructor(t=1,e=.007,n=1){this.minCutoff=t,this.beta=e,this.dCutoff=n,this.xPrev=null,this.dxPrev=0,this.tPrev=null}smoothingFactor(t,e){const n=2*Math.PI*e*t;return n/(n+1)}filter(t,e){if(this.tPrev===null||this.xPrev===null)return this.xPrev=t,this.dxPrev=0,this.tPrev=e,t;const n=Math.max((e-this.tPrev)/1e3,1e-4),i=(t-this.xPrev)/n,s=this.smoothingFactor(n,this.dCutoff),o=s*i+(1-s)*this.dxPrev,a=this.minCutoff+this.beta*Math.abs(o),l=this.smoothingFactor(n,a),c=l*t+(1-l)*this.xPrev;return this.xPrev=c,this.dxPrev=o,this.tPrev=e,c}reset(){this.xPrev=null,this.dxPrev=0,this.tPrev=null}}class Dh{constructor(t){this.config=t||{minCutoff:1,beta:.007,dCutoff:1},this.filters=[];for(let e=0;e<21*3;e++)this.filters.push(new qx(this.config.minCutoff,this.config.beta,this.config.dCutoff))}smooth(t,e){return!t||!Array.isArray(t)?t:t.map((n,i)=>{const s=i*3;return{x:this.filters[s].filter(n.x,e),y:this.filters[s+1].filter(n.y,e),z:this.filters[s+2].filter(n.z||0,e)}})}reset(){for(let t=0;t<this.filters.length;t++)this.filters[t].reset()}}class Ih{constructor(t){this.config=t.gesture,this.confirmedGesture="NONE",this.candidateGesture="NONE",this.candidateCount=0,this.lastTransitionTime=0}getFingerExtensionRatio(t,e,n,i){const s=Fi(t[e],t[i]),o=Fi(t[n],t[i]);return o>1e-4?s/o:1}isFingerExtended(t,e){const n=this.config.pointingEnterThreshold||1.3,i=this.config.pointingExitThreshold||1.18;return e?t>i:t>n}classifyRaw(t){if(!t||t.length<21)return{raw:"NONE",pinchDist:1,fingerStates:[!1,!1,!1,!1]};const e=Fi(t[4],t[8]),n=Fi(t[4],t[12]),i=Fi(t[8],t[12]),o=this.confirmedGesture==="PINCH_GRAB"?this.config.pinchExitThreshold||.14:this.config.pinchEnterThreshold||.08,a=e<o&&(n<.15||i<.1),l=this.getFingerExtensionRatio(t,8,6,0),c=this.getFingerExtensionRatio(t,12,10,0),h=this.getFingerExtensionRatio(t,16,14,0),u=this.getFingerExtensionRatio(t,20,18,0),f=this.confirmedGesture==="POINTING",m=this.confirmedGesture==="OPEN_PALM",_=this.isFingerExtended(l,f||m),g=this.isFingerExtended(c,m),d=this.isFingerExtended(h,m),p=this.isFingerExtended(u,m),x=[_,g,d,p];if(a)return{raw:"PINCH_GRAB",pinchDist:e,fingerStates:x};if(_&&g&&d&&p)return{raw:"OPEN_PALM",pinchDist:e,fingerStates:x};if(_&&!g&&!d&&!p)return{raw:"POINTING",pinchDist:e,fingerStates:x};const v=this.config.fistMaxExtension||1.15;return l<v&&c<v&&h<v&&u<v?{raw:"FIST",pinchDist:e,fingerStates:x}:_?{raw:"POINTING",pinchDist:e,fingerStates:x}:{raw:"NONE",pinchDist:e,fingerStates:x}}classify(t,e){const{raw:n,pinchDist:i,fingerStates:s}=this.classifyRaw(t);n===this.candidateGesture?this.candidateCount++:(this.candidateGesture=n,this.candidateCount=1);const a=e-this.lastTransitionTime>=(this.config.gestureCooldownMs||250),l=this.config.confirmFrames||4;let c=!1;a&&this.candidateCount>=l&&this.candidateGesture!==this.confirmedGesture&&(this.confirmedGesture=this.candidateGesture,this.lastTransitionTime=e,c=!0);const h=Math.min(1,this.candidateCount/l);return{gesture:this.confirmedGesture,confirmed:c,confidence:h,pinchDist:i,fingerStates:s,raw:n}}reset(){this.confirmedGesture="NONE",this.candidateGesture="NONE",this.candidateCount=0,this.lastTransitionTime=0}}class Yx{constructor(t){this.config=t,this.handsInstance=null,this.cameraInstance=null,this.videoElem=null,this.running=!1,this.frameCallback=null,this.smoothers=[new Dh(t.filter),new Dh(t.filter)],this.classifiers=[new Ih(t),new Ih(t)],this.cursorX=.5,this.cursorY=.5,this.cursorDX=0,this.cursorDY=0,this.lastPinchDist=null,this.lastTwoHandDist=null,this.lastHandSeenTime=0}async loadScripts(){const t=e=>new Promise((n,i)=>{if(document.querySelector(`script[src="${e}"]`)){n();return}const s=document.createElement("script");s.src=e,s.crossOrigin="anonymous",s.onload=n,s.onerror=()=>i(new Error(`Failed to load ${e}`)),document.head.appendChild(s)});(!window.Hands||!window.Camera)&&(await t("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"),await t("https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"))}async init(){try{return await this.loadScripts(),this.videoElem=document.createElement("video"),this.videoElem.style.display="none",this.videoElem.setAttribute("playsinline",""),document.body.appendChild(this.videoElem),this.handsInstance=new window.Hands({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${t}`}),this.handsInstance.setOptions({maxNumHands:this.config.mediapipe.maxNumHands||2,modelComplexity:this.config.mediapipe.modelComplexity||1,minDetectionConfidence:this.config.mediapipe.minDetectionConfidence||.65,minTrackingConfidence:this.config.mediapipe.minTrackingConfidence||.65}),this.handsInstance.onResults(t=>this.processResults(t)),this.cameraInstance=new window.Camera(this.videoElem,{onFrame:async()=>{this.running&&this.handsInstance&&await this.handsInstance.send({image:this.videoElem})},width:640,height:480}),await this.cameraInstance.start(),this.running=!0,console.log("✅ HandTracker: Khởi tạo camera và MediaPipe thành công (Hỗ trợ 2 tay)"),!0}catch(t){return console.error("❌ HandTracker init error:",t),!1}}onFrame(t){this.frameCallback=t}processResults(t){const e=performance.now(),n=t.multiHandLandmarks?t.multiHandLandmarks.length:0;if(n===0){const l=e-this.lastHandSeenTime,c=this.config.state.handLostGraceMs||500;l>c&&(this.lastPinchDist=null,this.lastTwoHandDist=null,this.cursorDX=0,this.cursorDY=0),this.frameCallback&&this.frameCallback({handCount:0,hands:[],twoHandDist:null,twoHandDelta:0,timestamp:e});return}this.lastHandSeenTime=e;const i=[],s=Math.min(n,2);for(let l=0;l<s;l++){const c=t.multiHandLandmarks[l],h=this.smoothers[l].smooth(c,e),u=this.classifiers[l].classify(h,e),f=zi(1-h[8].x,0,1),m=zi(h[8].y,0,1);let _=f,g=m,d=0,p=0;if(l===0){const v=this.config.cursor.lerpFactor||.35,S=Lh(this.cursorX,f,v),w=Lh(this.cursorY,m,v),A=S-this.cursorX,E=w-this.cursorY,I=this.config.cursor.deadZone||.008;d=_a(A,I),p=_a(E,I),this.cursorX+=d,this.cursorY+=p,this.cursorDX=d,this.cursorDY=p,_=this.cursorX,g=this.cursorY}const x=Fi(h[0],h[9]);i.push({index:l,landmarks:h,gesture:u,cursorX:_,cursorY:g,cursorDX:d,cursorDY:p,pinchDist:u.pinchDist,palmSize:x})}let o=null,a=0;if(s===2){const l=i[0].landmarks[9],c=i[1].landmarks[9];o=Fi(l,c),this.lastTwoHandDist!==null&&(a=o-this.lastTwoHandDist),this.lastTwoHandDist=o}else this.lastTwoHandDist=null;this.frameCallback&&this.frameCallback({handCount:s,hands:i,twoHandDist:o,twoHandDelta:a,timestamp:e})}stop(){this.running=!1,this.cameraInstance&&this.cameraInstance.stop(),this.videoElem&&this.videoElem.parentNode&&this.videoElem.parentNode.removeChild(this.videoElem),console.log("🛑 HandTracker stopped.")}isRunning(){return this.running}}class jx{constructor(t){this.config=t.state||{},this.state="IDLE",this.lastTransitionTime=0,this.handLostTimestamp=null,this.palmHoldStartTime=0,this.twoPalmHoldStartTime=0,this.anchorCursor={x:.5,y:.5}}canTransition(t){const e=this.config.transitionCooldownMs||300;return t-this.lastTransitionTime>=e}transitionTo(t,e){return this.state===t?!1:(this.state=t,this.lastTransitionTime=e,!0)}update(t,e){const{handCount:n,hands:i,twoHandDist:s,twoHandDelta:o}=t,a=this.canTransition(e);if(n===0){this.handLostTimestamp===null&&(this.handLostTimestamp=e);const x=e-this.handLostTimestamp,v=this.config.handLostGraceMs||500;return x>v&&(this.state="IDLE",this.palmHoldStartTime=0,this.twoPalmHoldStartTime=0),{state:this.state,action:null,params:{},canTransition:a}}this.handLostTimestamp=null;const l=i[0],{gesture:c,cursorX:h,cursorY:u,cursorDX:f,cursorDY:m,pinchDist:_,palmSize:g}=l;if(n===2&&i[0].gesture.gesture==="OPEN_PALM"&&i[1].gesture.gesture==="OPEN_PALM"){if(this.twoPalmHoldStartTime===0)this.twoPalmHoldStartTime=e;else if(e-this.twoPalmHoldStartTime>=(this.config.resetHoldMs||1500))return this.transitionTo("IDLE",e),this.twoPalmHoldStartTime=0,{state:"IDLE",action:"RESET_ALL",params:{},canTransition:!1}}else this.twoPalmHoldStartTime=0;if(c.gesture==="OPEN_PALM")if(this.palmHoldStartTime===0)this.palmHoldStartTime=e;else{const x=e-this.palmHoldStartTime;if(this.state!=="IDLE"&&this.state!=="READY"&&x>=(this.config.stopHoldMs||400))return this.transitionTo("READY",e),{state:"READY",action:"ROTATE_END",params:{},canTransition:!1};this.state==="IDLE"&&x>=(this.config.readyHoldMs||300)&&this.transitionTo("READY",e)}else this.palmHoldStartTime=0;let d=null,p={cursorX:h,cursorY:u,dx:f,dy:m,pinchDist:_,palmSize:g};switch(this.state){case"IDLE":case"READY":a&&(c.gesture==="PINCH_GRAB"||c.gesture==="FIST")?(Math.abs(f)>.003||Math.abs(m)>.003)&&(this.transitionTo("ROTATING",e),this.anchorCursor={x:h,y:u},d="ROTATE_START"):c.gesture==="POINTING"?(a&&this.state!=="POINTING"&&this.transitionTo("POINTING",e),d="HOVER_CARD"):n===2&&o&&o>.02&&a&&(this.transitionTo("SPREADING",e),d="SPREAD_MOVE",p.spreadRatio=Math.min(1,Math.max(0,s*1.8)));break;case"ROTATING":c.gesture==="PINCH_GRAB"||c.gesture==="FIST"?(d="ROTATE_MOVE",p.dx=f,p.dy=m):(this.transitionTo("INERTIA",e),d="ROTATE_END");break;case"INERTIA":c.gesture==="PINCH_GRAB"||c.gesture==="FIST"?(this.transitionTo("ROTATING",e),d="ROTATE_START"):c.gesture==="POINTING"&&(this.transitionTo("POINTING",e),d="HOVER_CARD");break;case"POINTING":c.gesture==="POINTING"?d="HOVER_CARD":c.gesture==="PINCH_GRAB"?a&&(this.transitionTo("IMAGE_VIEWING",e),d="SELECT_CARD"):c.gesture==="OPEN_PALM"||c.gesture==="NONE"?a&&this.transitionTo("READY",e):c.gesture==="FIST"&&a&&(this.transitionTo("ROTATING",e),d="ROTATE_START");break;case"SPREADING":if(n===2){const x=Math.min(1,Math.max(0,(s-.15)*2.2));p.spreadRatio=x,d="SPREAD_MOVE";const v=this.config.spreadCommitThreshold||.65;x>=v&&(this.transitionTo("GRID",e),d="SPREAD_COMMIT")}else this.transitionTo("READY",e),d="COLLAPSE_COMMIT";break;case"GRID":n===2&&o&&o<-.02?(this.transitionTo("COLLAPSING",e),d="COLLAPSE_MOVE"):c.gesture==="POINTING"?d="HOVER_CARD":c.gesture==="PINCH_GRAB"&&a&&(this.transitionTo("IMAGE_VIEWING",e),d="SELECT_CARD");break;case"COLLAPSING":if(n===2){const x=Math.max(0,Math.min(1,(s-.15)*2.2));p.spreadRatio=x,d="COLLAPSE_MOVE",x<.35&&(this.transitionTo("READY",e),d="COLLAPSE_COMMIT")}else this.transitionTo("GRID",e);break;case"IMAGE_VIEWING":c.gesture==="FIST"||c.gesture==="OPEN_PALM"?a&&(this.transitionTo("READY",e),d="CLOSE_IMAGE"):c.gesture==="PINCH_GRAB"&&(d="VIEW_PAN",p.dx=f,p.dy=m);break;default:this.state="IDLE";break}return{state:this.state,action:d,params:p,canTransition:a}}forceState(t){this.state=t}reset(){this.state="IDLE",this.lastTransitionTime=0,this.handLostTimestamp=null,this.palmHoldStartTime=0,this.twoPalmHoldStartTime=0}}class Zx{constructor(t,e,n){this.config=t.sphere||{},this.group=e,this.camera=n,this.isRotating=!1,this.lastDX=0,this.lastDY=0,this.inertiaVX=0,this.inertiaVY=0,this.targetCameraZ=n?n.position.z:36,this.lastPinchDist=null,this.lastPalmSize=null}startRotation(){this.isRotating=!0,this.inertiaVX=0,this.inertiaVY=0}updateRotation(t,e){if(!this.group)return;const n=this.config.rotationDeadZone||.005,i=_a(t,n),s=_a(e,n),o=this.config.rotationSensitivity||3.5,a=i*o,l=s*o*.7;this.group.rotation.y+=a,this.group.rotation.x+=l;const c=this.config.maxRotationX||.7;this.group.rotation.x=zi(this.group.rotation.x,-c,c),this.lastDX=a,this.lastDY=l}endRotation(){this.isRotating=!1,this.inertiaVX=this.lastDX,this.inertiaVY=this.lastDY}applyProximityZoom(t){if(t==null||isNaN(t)){this.lastPalmSize=null;return}if(this.lastPalmSize===null){this.lastPalmSize=t;return}const e=t-this.lastPalmSize,n=this.config.zoomDeadZone||.002;if(Math.abs(e)>n){const i=this.config.proximityZoomSensitivity||150,s=-e*i;this.targetCameraZ+=s;const o=this.config.zoomMin||18,a=this.config.zoomMax||52;this.targetCameraZ=zi(this.targetCameraZ,o,a)}this.lastPalmSize=t}applyPinchZoom(t){if(t==null){this.lastPinchDist=null;return}if(this.lastPinchDist===null){this.lastPinchDist=t;return}const e=t-this.lastPinchDist,n=this.config.zoomDeadZone||.01;if(Math.abs(e)>n){const i=this.config.zoomSensitivity||2.5,s=-e*40*i;this.targetCameraZ+=s;const o=this.config.zoomMin||18,a=this.config.zoomMax||52;this.targetCameraZ=zi(this.targetCameraZ,o,a)}this.lastPinchDist=t}update(){if(!this.group||!this.camera)return;if(!this.isRotating){const e=this.config.inertiaDecay||.92,n=this.config.minInertia||.001;if(Math.abs(this.inertiaVX)>n||Math.abs(this.inertiaVY)>n){this.group.rotation.y+=this.inertiaVX,this.group.rotation.x+=this.inertiaVY;const i=this.config.maxRotationX||.7;this.group.rotation.x=zi(this.group.rotation.x,-i,i),this.inertiaVX*=e,this.inertiaVY*=e}else this.inertiaVX=0,this.inertiaVY=0}const t=this.config.zoomLerp||.12;this.camera.position.z+=(this.targetCameraZ-this.camera.position.z)*t}handleAction(t){if(!t)return;const{action:e,params:n}=t;switch(e){case"ROTATE_START":this.startRotation();break;case"ROTATE_MOVE":n&&this.updateRotation(n.dx||0,n.dy||0);break;case"ROTATE_END":this.endRotation();break;case"RESET_ALL":this.reset();break}n&&n.palmSize!==void 0?this.applyProximityZoom(n.palmSize):n&&n.pinchDist!==void 0?this.applyPinchZoom(n.pinchDist):(this.lastPalmSize=null,this.lastPinchDist=null)}reset(){this.isRotating=!1,this.inertiaVX=0,this.inertiaVY=0,this.lastPinchDist=null,this.lastPalmSize=null,this.targetCameraZ=36,this.group&&this.group.rotation.set(0,0,0),this.camera&&this.camera.position.set(0,12,36)}}class Kx{constructor(t){this.config=t||{},this.cursorElem=null,this.badgeElem=null,this.progressCircle=null,this.hudElem=null,this.toastElem=null,this.initUI()}initUI(){this.cursorElem=document.createElement("div"),this.cursorElem.id="ai-hand-cursor-v2",Object.assign(this.cursorElem.style,{position:"fixed",width:"24px",height:"24px",borderRadius:"50%",background:"radial-gradient(circle, #00ffff 0%, rgba(0, 255, 255, 0.4) 50%, rgba(0,255,255,0) 70%)",border:"2px solid #00ffff",boxShadow:"0 0 15px #00ffff, 0 0 30px rgba(0,255,255,0.5)",pointerEvents:"none",zIndex:"99999",top:"0",left:"0",transform:"translate(-50%, -50%)",display:"none",transition:"opacity 0.3s ease, border-color 0.3s ease, transform 0.08s ease-out"}),this.cursorElem.innerHTML=`
      <svg width="40" height="40" viewBox="0 0 40 40" style="position:absolute; top:-10px; left:-10px; transform:rotate(-90deg);">
        <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(0, 255, 255, 0.25)" stroke-width="2.5"></circle>
        <circle id="ai-hand-progress-v2" cx="20" cy="20" r="16" fill="none" stroke="#00ffff" stroke-width="2.5" 
                stroke-dasharray="100.5" stroke-dashoffset="100.5" stroke-linecap="round"></circle>
      </svg>
      <div id="ai-hand-badge-v2" style="position:absolute; top:28px; left:50%; transform:translateX(-50%); 
           background:rgba(0,10,20,0.85); border:1px solid #00ffff; border-radius:12px; padding:2px 8px; 
           font-family:'Montserrat',sans-serif; font-size:10px; font-weight:700; color:#00ffff; 
           white-space:nowrap; box-shadow:0 0 10px rgba(0,255,255,0.4);">READY</div>
    `,document.body.appendChild(this.cursorElem),this.progressCircle=this.cursorElem.querySelector("#ai-hand-progress-v2"),this.badgeElem=this.cursorElem.querySelector("#ai-hand-badge-v2"),this.hudElem=document.createElement("div"),this.hudElem.id="ai-hand-hud",Object.assign(this.hudElem.style,{position:"fixed",top:"20px",left:"50%",transform:"translateX(-50%)",zIndex:"10000",background:"rgba(5, 15, 30, 0.75)",backdropFilter:"blur(12px)",border:"1px solid rgba(0, 255, 255, 0.3)",borderRadius:"24px",padding:"6px 18px",color:"#00ffff",fontFamily:"'Montserrat', sans-serif",fontSize:"12px",fontWeight:"600",letterSpacing:"1px",display:"none",alignItems:"center",gap:"8px",boxShadow:"0 4px 20px rgba(0, 255, 255, 0.2)"}),this.hudElem.innerHTML=`
      <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#00ff88; box-shadow:0 0 8px #00ff88;"></span>
      <span id="ai-hand-hud-text">HAND TRACKING ACTIVE</span>
    `,document.body.appendChild(this.hudElem)}showToast(t,e=3e3){this.toastElem||(this.toastElem=document.createElement("div"),Object.assign(this.toastElem.style,{position:"fixed",bottom:"100px",left:"50%",transform:"translateX(-50%)",zIndex:"100000",background:"rgba(10, 25, 45, 0.9)",border:"1px solid #00ffff",borderRadius:"30px",padding:"12px 28px",color:"#ffffff",fontFamily:"'Montserrat', sans-serif",fontSize:"14px",fontWeight:"600",boxShadow:"0 10px 30px rgba(0,255,255,0.3)",transition:"opacity 0.3s ease"}),document.body.appendChild(this.toastElem)),this.toastElem.textContent=t,this.toastElem.style.opacity="1",setTimeout(()=>{this.toastElem&&(this.toastElem.style.opacity="0")},e)}update(t,e,n=0){if(!t)return;const{handCount:i,hands:s}=t;if(i===0){this.cursorElem&&(this.cursorElem.style.opacity="0.25");return}this.cursorElem.style.display==="none"?(this.cursorElem.style.display="block",this.hudElem.style.display="flex",this.cursorElem.style.opacity="1"):this.cursorElem.style.opacity="1";const o=s[0],{cursorX:a,cursorY:l,gesture:c}=o,h=a*window.innerWidth,u=l*window.innerHeight;this.cursorElem.style.left=`${h}px`,this.cursorElem.style.top=`${u}px`;let f="READY",m="#00ffff";switch(c.gesture){case"POINTING":f="👆 POINTING",m="#00ffff";break;case"PINCH_GRAB":f="🤏 PINCH GRAB",m="#ffaa00";break;case"OPEN_PALM":f="✋ OPEN PALM",m="#00ff88";break;case"FIST":f="✊ FIST",m="#ff3366";break;default:f="READY",m="#00ffff";break}i===2&&(f="👐 TWO HANDS"),this.cursorElem.style.borderColor=m,this.badgeElem&&(this.badgeElem.textContent=f,this.badgeElem.style.borderColor=m,this.badgeElem.style.color=m);const _=this.hudElem.querySelector("#ai-hand-hud-text");if(_&&e&&(_.textContent=`MODE: ${e.state} (${i} ${i===1?"HAND":"HANDS"})`),this.progressCircle){const d=100.5-Math.min(1,Math.max(0,n))*100.5;this.progressCircle.setAttribute("stroke-dashoffset",String(d)),this.progressCircle.setAttribute("stroke",m)}}show(){this.cursorElem&&(this.cursorElem.style.display="block"),this.hudElem&&(this.hudElem.style.display="flex")}hide(){this.cursorElem&&(this.cursorElem.style.display="none"),this.hudElem&&(this.hudElem.style.display="none")}}let Di=null,vo=null,oi=null,wn=null,ns=0;async function mf(r,t,e,n){Di&&Di.isRunning()&&Di.stop(),wn=new Kx(pr),vo=new jx(pr),oi=new Zx(pr,r?r.group:null,t),Di=new Yx(pr),Di.onFrame(s=>{const o=s.timestamp||performance.now(),a=vo.update(s,o);if(oi&&(oi.update(),oi.handleAction(a)),r&&r.group&&r.group.visible&&r.handleAction(a,l=>{ns=l}),wn&&wn.update(s,a,ns),n&&typeof n=="function"){const l=s.hands&&s.hands.length>0?s.hands[0]:null,c=l?l.gesture.gesture:"NONE",h=l?l.cursorX:.5,u=l?l.cursorY:.5,f=l?l.cursorDX:0,m=l?l.cursorDY:0;l&&l.pinchDist;const _=l?l.palmSize:null;let g=0;if(l&&oi&&oi.lastPalmSize!==null&&_!==null){const d=_-oi.lastPalmSize;Math.abs(d)>(pr.sphere.zoomDeadZone||.002)&&(g=-d*(pr.sphere.proximityZoomSensitivity||150))}n(c,h,u,f,m,d=>{ns=d},g)}});const i=await Di.init();return!i&&wn?wn.showToast("⚠️ Camera không khả dụng. Hệ thống đã tự động bật chế độ chuột/phím.",4500):i&&wn&&wn.showToast("✅ Nhận diện tay AI 2.0 đã kích hoạt (Hỗ trợ 2 tay & Bộ lọc One Euro)",3e3),$x(r),{tracker:Di,stateMachine:vo,sphereController:oi,ui:wn}}function $x(r,t){let e=!1,n=0,i=0;window.addEventListener("mousedown",s=>{e=!0,n=s.clientX,i=s.clientY}),window.addEventListener("mouseup",()=>{e=!1}),window.addEventListener("mousemove",s=>{if(!r||!r.group||!r.group.visible)return;const o=s.clientX/window.innerWidth,a=s.clientY/window.innerHeight;if(e){const l=(s.clientX-n)*.005,c=(s.clientY-i)*.005;r.handleHandGesture("PINCH_GRAB",o,a,l,c,null,0),n=s.clientX,i=s.clientY}else r.handleHandGesture("POINTING",o,a,0,0,l=>{ns=l},0)}),window.addEventListener("wheel",s=>{if(!r||!r.group||!r.group.visible)return;const o=s.clientX/window.innerWidth,a=s.clientY/window.innerHeight,l=s.deltaY*.005;r.handleHandGesture("POINTING",o,a,0,0,null,l)})}function gf(r){const t=window._globalPhotoSphere||null,e=window._globalCamera||null;mf(t,e,null,r)}function Zn(r){if(ns=r,wn&&wn.progressCircle){const e=100.5-Math.min(1,Math.max(0,r))*100.5;wn.progressCircle.setAttribute("stroke-dashoffset",String(e))}}var Sl={};(function r(t,e,n,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),R=P.getContext("2d");R.fillRect(0,0,1,1);var Z=P.transferToImageBitmap();R.createPattern(Z,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var R=e.exports.Promise,Z=R!==void 0?R:t.Promise;return typeof Z=="function"?new Z(P):(P(l,l),null)}var h=function(P,R){return{transform:function(Z){if(P)return Z;if(R.has(Z))return R.get(Z);var O=new OffscreenCanvas(Z.width,Z.height),H=O.getContext("2d");return H.drawImage(Z,0,0),R.set(Z,O),O},clear:function(){R.clear()}}}(a,new Map),u=function(){var P=Math.floor(16.666666666666668),R,Z,O={},H=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(J){var at=Math.random();return O[at]=requestAnimationFrame(function et(ht){H===ht||H+P-1<ht?(H=ht,delete O[at],J()):O[at]=requestAnimationFrame(et)}),at},Z=function(J){O[J]&&cancelAnimationFrame(O[J])}):(R=function(J){return setTimeout(J,P)},Z=function(J){return clearTimeout(J)}),{frame:R,cancel:Z}}(),f=function(){var P,R,Z={};function O(H){function J(at,et){H.postMessage({options:at||{},callback:et})}H.init=function(et){var ht=et.transferControlToOffscreen();H.postMessage({canvas:ht},[ht])},H.fire=function(et,ht,gt){if(R)return J(et,null),R;var pt=Math.random().toString(36).slice(2);return R=c(function(Mt){function B(Yt){Yt.data.callback===pt&&(delete Z[pt],H.removeEventListener("message",B),R=null,h.clear(),gt(),Mt())}H.addEventListener("message",B),J(et,pt),Z[pt]=B.bind(null,{data:{callback:pt}})}),R},H.reset=function(){H.postMessage({reset:!0});for(var et in Z)Z[et](),delete Z[et]}}return function(){if(P)return P;if(!n&&s){var H=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([H])))}catch(J){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",J),null}O(P)}return P}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(P,R){return R?R(P):P}function g(P){return P!=null}function d(P,R,Z){return _(P&&g(P[R])?P[R]:m[R],Z)}function p(P){return P<0?0:Math.floor(P)}function x(P,R){return Math.floor(Math.random()*(R-P))+P}function v(P){return parseInt(P,16)}function S(P){return P.map(w)}function w(P){var R=String(P).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:v(R.substring(0,2)),g:v(R.substring(2,4)),b:v(R.substring(4,6))}}function A(P){var R=d(P,"origin",Object);return R.x=d(R,"x",Number),R.y=d(R,"y",Number),R}function E(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function I(P){var R=P.getBoundingClientRect();P.width=R.width,P.height=R.height}function M(P){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=P,R}function T(P,R,Z,O,H,J,at,et,ht){P.save(),P.translate(R,Z),P.rotate(J),P.scale(O,H),P.arc(0,0,1,at,et,ht),P.restore()}function G(P){var R=P.angle*(Math.PI/180),Z=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-R+(.5*Z-Math.random()*Z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function F(P,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var Z=R.tick++/R.totalTicks,O=R.x+R.random*R.tiltCos,H=R.y+R.random*R.tiltSin,J=R.wobbleX+R.random*R.tiltCos,at=R.wobbleY+R.random*R.tiltSin;if(P.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-Z)+")",P.beginPath(),o&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))P.fill(K(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(J-O)*.1,Math.abs(at-H)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var et=Math.PI/10*R.wobble,ht=Math.abs(J-O)*.1,gt=Math.abs(at-H)*.1,pt=R.shape.bitmap.width*R.scalar,Mt=R.shape.bitmap.height*R.scalar,B=new DOMMatrix([Math.cos(et)*ht,Math.sin(et)*ht,-Math.sin(et)*gt,Math.cos(et)*gt,R.x,R.y]);B.multiplySelf(new DOMMatrix(R.shape.matrix));var Yt=P.createPattern(h.transform(R.shape.bitmap),"no-repeat");Yt.setTransform(B),P.globalAlpha=1-Z,P.fillStyle=Yt,P.fillRect(R.x-pt/2,R.y-Mt/2,pt,Mt),P.globalAlpha=1}else if(R.shape==="circle")P.ellipse?P.ellipse(R.x,R.y,Math.abs(J-O)*R.ovalScalar,Math.abs(at-H)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):T(P,R.x,R.y,Math.abs(J-O)*R.ovalScalar,Math.abs(at-H)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var ot=Math.PI/2*3,yt=4*R.scalar,mt=8*R.scalar,Xt=R.x,bt=R.y,C=5,y=Math.PI/C;C--;)Xt=R.x+Math.cos(ot)*mt,bt=R.y+Math.sin(ot)*mt,P.lineTo(Xt,bt),ot+=y,Xt=R.x+Math.cos(ot)*yt,bt=R.y+Math.sin(ot)*yt,P.lineTo(Xt,bt),ot+=y;else P.moveTo(Math.floor(R.x),Math.floor(R.y)),P.lineTo(Math.floor(R.wobbleX),Math.floor(H)),P.lineTo(Math.floor(J),Math.floor(at)),P.lineTo(Math.floor(O),Math.floor(R.wobbleY));return P.closePath(),P.fill(),R.tick<R.totalTicks}function $(P,R,Z,O,H){var J=R.slice(),at=P.getContext("2d"),et,ht,gt=c(function(pt){function Mt(){et=ht=null,at.clearRect(0,0,O.width,O.height),h.clear(),H(),pt()}function B(){n&&!(O.width===i.width&&O.height===i.height)&&(O.width=P.width=i.width,O.height=P.height=i.height),!O.width&&!O.height&&(Z(P),O.width=P.width,O.height=P.height),at.clearRect(0,0,O.width,O.height),J=J.filter(function(Yt){return F(at,Yt)}),J.length?et=u.frame(B):Mt()}et=u.frame(B),ht=Mt});return{addFettis:function(pt){return J=J.concat(pt),gt},canvas:P,promise:gt,reset:function(){et&&u.cancel(et),ht&&ht()}}}function L(P,R){var Z=!P,O=!!d(R||{},"resize"),H=!1,J=d(R,"disableForReducedMotion",Boolean),at=s&&!!d(R||{},"useWorker"),et=at?f():null,ht=Z?E:I,gt=P&&et?!!P.__confetti_initialized:!1,pt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Mt;function B(ot,yt,mt){for(var Xt=d(ot,"particleCount",p),bt=d(ot,"angle",Number),C=d(ot,"spread",Number),y=d(ot,"startVelocity",Number),V=d(ot,"decay",Number),rt=d(ot,"gravity",Number),it=d(ot,"drift",Number),st=d(ot,"colors",S),St=d(ot,"ticks",Number),ut=d(ot,"shapes"),vt=d(ot,"scalar"),wt=!!d(ot,"flat"),Ut=A(ot),nt=Xt,jt=[],Gt=P.width*Ut.x,Dt=P.height*Ut.y;nt--;)jt.push(G({x:Gt,y:Dt,angle:bt,spread:C,startVelocity:y,color:st[nt%st.length],shape:ut[x(0,ut.length)],ticks:St,decay:V,gravity:rt,drift:it,scalar:vt,flat:wt}));return Mt?Mt.addFettis(jt):(Mt=$(P,jt,ht,yt,mt),Mt.promise)}function Yt(ot){var yt=J||d(ot,"disableForReducedMotion",Boolean),mt=d(ot,"zIndex",Number);if(yt&&pt)return c(function(y){y()});Z&&Mt?P=Mt.canvas:Z&&!P&&(P=M(mt),document.body.appendChild(P)),O&&!gt&&ht(P);var Xt={width:P.width,height:P.height};et&&!gt&&et.init(P),gt=!0,et&&(P.__confetti_initialized=!0);function bt(){if(et){var y={getBoundingClientRect:function(){if(!Z)return P.getBoundingClientRect()}};ht(y),et.postMessage({resize:{width:y.width,height:y.height}});return}Xt.width=Xt.height=null}function C(){Mt=null,O&&(H=!1,t.removeEventListener("resize",bt)),Z&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,gt=!1)}return O&&!H&&(H=!0,t.addEventListener("resize",bt,!1)),et?et.fire(ot,Xt,C):B(ot,Xt,C)}return Yt.reset=function(){et&&et.reset(),Mt&&Mt.reset()},Yt}var N;function z(){return N||(N=L(null,{useWorker:!0,resize:!0})),N}function K(P,R,Z,O,H,J,at){var et=new Path2D(P),ht=new Path2D;ht.addPath(et,new DOMMatrix(R));var gt=new Path2D;return gt.addPath(ht,new DOMMatrix([Math.cos(at)*H,Math.sin(at)*H,-Math.sin(at)*J,Math.cos(at)*J,Z,O])),gt}function j(P){if(!o)throw new Error("path confetti are not supported in this browser");var R,Z;typeof P=="string"?R=P:(R=P.path,Z=P.matrix);var O=new Path2D(R),H=document.createElement("canvas"),J=H.getContext("2d");if(!Z){for(var at=1e3,et=at,ht=at,gt=0,pt=0,Mt,B,Yt=0;Yt<at;Yt+=2)for(var ot=0;ot<at;ot+=2)J.isPointInPath(O,Yt,ot,"nonzero")&&(et=Math.min(et,Yt),ht=Math.min(ht,ot),gt=Math.max(gt,Yt),pt=Math.max(pt,ot));Mt=gt-et,B=pt-ht;var yt=10,mt=Math.min(yt/Mt,yt/B);Z=[mt,0,0,mt,-Math.round(Mt/2+et)*mt,-Math.round(B/2+ht)*mt]}return{type:"path",path:R,matrix:Z}}function q(P){var R,Z=1,O="#000000",H='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?R=P:(R=P.text,Z="scalar"in P?P.scalar:Z,H="fontFamily"in P?P.fontFamily:H,O="color"in P?P.color:O);var J=10*Z,at=""+J+"px "+H,et=new OffscreenCanvas(J,J),ht=et.getContext("2d");ht.font=at;var gt=ht.measureText(R),pt=Math.ceil(gt.actualBoundingBoxRight+gt.actualBoundingBoxLeft),Mt=Math.ceil(gt.actualBoundingBoxAscent+gt.actualBoundingBoxDescent),B=2,Yt=gt.actualBoundingBoxLeft+B,ot=gt.actualBoundingBoxAscent+B;pt+=B+B,Mt+=B+B,et=new OffscreenCanvas(pt,Mt),ht=et.getContext("2d"),ht.font=at,ht.fillStyle=O,ht.fillText(R,Yt,ot);var yt=1/Z;return{type:"bitmap",bitmap:et.transferToImageBitmap(),matrix:[yt,0,0,yt,-pt*yt/2,-Mt*yt/2]}}e.exports=function(){return z().apply(this,arguments)},e.exports.reset=function(){z().reset()},e.exports.create=L,e.exports.shapeFromPath=j,e.exports.shapeFromText=q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Sl,!1);const Jx=Sl.exports;Sl.exports.create;const xo=document.getElementById("trigger-star"),Uh=document.getElementById("hint-text"),Qx=document.getElementById("ui-act1");let Q,Zt,Wo=!1;const Jt=tt.timeline({paused:!0});document.fonts.ready.then(()=>{Uh.innerText="Đeo tai nghe và chạm nhẹ vào vì sao...",Q=new zx,Q.init(document.getElementById("canvas-container")),window._globalPhotoSphere=Q.photoSphere,window._globalCamera=Q.camera,Zt=Hx(),tM(),xo.addEventListener("click",()=>{Wo||(Wo=!0,Zt.start(),Zt.playStarClickGlow(),tt.to(xo,{scale:150,opacity:0,duration:2,ease:"power3.in"}),tt.to(xo,{boxShadow:"0 0 100px 50px rgba(255,255,255,1)",duration:1},"<"),tt.to(Uh,{opacity:0,duration:.5}),setTimeout(()=>{Qx.style.display="none",Jt.play()},1800))}),_f()});function tM(){Jt.add(()=>{Q.warpSpeed(),Zt.playMoonApproachWhoosh()},0),Jt.to(Q.textName.material,{opacity:1,duration:3,ease:"power2.inOut"},5),Jt.fromTo(Q.textName.position,{y:2},{y:6,duration:4,ease:"power2.out"},5),Jt.add(()=>Zt.playTitleChime(),5),Jt.to(Q.textYear.material,{opacity:1,duration:3},7),Jt.fromTo(Q.textYear.position,{y:-2},{y:2,duration:4,ease:"power2.out"},7),Jt.add(()=>Zt.startYearCount(),8);const r={val:2005};Jt.to(r,{val:2026,duration:5,ease:"slow(0.5, 0.8, false)",onUpdate:()=>{const t=Math.floor(r.val).toString();Q.updateTextSprite(Q.textYear,`05.08.${t}`,"Montserrat",80,"#aaccff","10px")}},8),Jt.fromTo(Q.textYear.scale,{x:.5,y:.5,z:.5},{x:1,y:1,z:1,duration:5,ease:"power1.inOut"},8),Jt.add(()=>Zt.stopYearCount(),13),Jt.to(Q.textName.material,{opacity:0,duration:2},14),Jt.to(Q.textYear.material,{opacity:0,duration:2},14),Jt.add(()=>{Q.tiltDown(),Zt.playCameraWhoosh(2.8,.7,"approach")},15);for(let t=0;t<5;t++){let e=19+t*6;const n=Q.whispers[t];Jt.add(()=>Zt.playWhisper(t),e),Jt.fromTo(n.material,{opacity:0},{opacity:1,duration:2,ease:"power2.out"},e),Jt.fromTo(n.position,{y:-2,z:20},{y:2,z:10,duration:5,ease:"power1.out"},e),Jt.to(n.material,{opacity:0,duration:2},e+4)}Jt.add(()=>{Q.tiltUp(),Zt.playCameraWhoosh(2.5,.75,"approach")},48),Jt.add(()=>{Q.showCake(),Zt.playCakeApproachWhoosh()},49),Jt.to(Q.textWish.material,{opacity:1,duration:3},51),Jt.fromTo(Q.textWish.position,{y:5},{y:8,duration:4,ease:"power2.out"},51),Jt.add(()=>{Jt.pause(),Xx(()=>{Wo&&Tl()})},56)}let va=!1;function Tl(){if(va)return;va=!0;const r=tt.timeline();window.act3Timeline=r,Q.blowOutCandles(),Zt.playCandleBlow(),r.to(Q.textWish.material,{opacity:0,duration:1},0),r.add(()=>Q.hideCake(),.5),r.add(()=>{Q.transitionToInkWash(),Zt.transitionToInkWash()},1),r.to(Q.camera.position,{z:300,y:50,duration:4,ease:"power2.out"},1),r.to(Q.camera.rotation,{x:-Math.PI/12,duration:4,ease:"power2.out"},1),r.add(()=>Zt.startInkWashDiveWhoosh(),5),r.to(Q.camera.position,{z:-20,y:3,duration:21,ease:"none"},5),r.to(Q.camera.rotation,{x:-Math.PI/48,duration:21,ease:"none"},5),r.to(Q.birdMats,{opacity:.8,duration:3},4),r.set(Q.textPoem1.material,{opacity:1},10),r.set(Q.textPoem1Reflect.material,{opacity:.6},10),r.add(()=>Zt.playPoemChime(1),10),r.to(Q.textPoem1.userData,{writeProgress:1,duration:3,ease:"power1.inOut",onUpdate:()=>Q.updateTextSpriteWriting(Q.textPoem1,Q.textPoem1.userData.writeProgress)},10),r.to(Q.textPoem1.material,{opacity:0,duration:1.5},13.5),r.to(Q.textPoem1Reflect.material,{opacity:0,duration:1.5},13.5),r.to(Q.petalMat,{opacity:.7,duration:4},10),r.set(Q.textPoem2.material,{opacity:1},17.5),r.set(Q.textPoem2Reflect.material,{opacity:.6},17.5),r.add(()=>Zt.playPoemChime(2),17.5),r.to(Q.textPoem2.userData,{writeProgress:1,duration:3,ease:"power1.inOut",onUpdate:()=>Q.updateTextSpriteWriting(Q.textPoem2,Q.textPoem2.userData.writeProgress)},17.5),r.to(Q.textPoem2.material,{opacity:0,duration:1.5},21),r.to(Q.textPoem2Reflect.material,{opacity:0,duration:1.5},21),r.add(()=>{Q.transitionToDawn(),Zt.transitionToDawn()},26),r.to(Q.camera.rotation,{x:0,duration:2},26),r.to(Q.textHBD.material,{opacity:1,duration:3},33),r.fromTo(Q.textHBD.position,{z:40,y:14},{z:20,y:12,duration:5,ease:"power2.out"},33),r.to(Q.textLove.material,{opacity:1,duration:3},36),r.fromTo(Q.textLove.position,{z:45,y:9},{z:25,y:7,duration:5,ease:"power2.out"},36),r.add(()=>{eM(),Zt.playConfettiSparkles()},33),r.add(()=>{Q.sparklingPoint&&(Q.sparklingPoint.visible=!0,Q.sparklingPoint.scale.set(0,0,0),tt.to(Q.sparklingPoint.scale,{x:1,y:1,z:1,duration:2,ease:"back.out(2)"}));let t=!1,e=!1,n=0;mf(Q.photoSphere,Q.camera,Zt,(s,o,a,l,c,h,u)=>{!t&&Q.sparklingPoint&&Q.sparklingPoint.visible&&(Math.abs(o-.5)<.35&&Math.abs(a-.5)<.35&&s!=="NONE"?(n+=16.6,Zn(Math.min(1,n/300)),n>=300&&(t=!0,Zn(0),console.log("✨ CHẠM TAY VÀO VÌ SAO -> KÍCH HOẠT HỐ ĐEN GARGANTUA!"),Q.triggerBlackHoleSuction(()=>{e=!0},Zt))):(n=Math.max(0,n-10),Zn(Math.min(1,n/300)))),e&&Q.photoSphere&&Q.photoSphere.handleHandGesture(s,o,a,l,c,f=>{Zn(f)},u)});const i=()=>{!t&&Q.sparklingPoint&&Q.sparklingPoint.visible&&(t=!0,window.removeEventListener("click",i),Q.triggerBlackHoleSuction(()=>{e=!0},Zt))};window.addEventListener("click",i)},39)}function eM(){const t=Date.now()+15e3,e={startVelocity:30,spread:360,ticks:100,zIndex:100,colors:["#ffffff","#ff7e5f","#feb47b","#ffd700"]},n=setInterval(function(){const i=t-Date.now();if(i<=0)return clearInterval(n);const s=50*(i/15e3);Jx(Object.assign({},e,{particleCount:s,origin:{x:Math.random(),y:Math.random()-.2}}))},250)}function _f(){requestAnimationFrame(_f),Q&&Q.update()}window.skipToCake=()=>{console.log("⏩ Bỏ qua Intro, chuyển đến cảnh Bánh Sinh Nhật..."),Jt.seek(49),Zt&&Zt.playCakeAppear()};window.skipToInkWash=()=>{console.log("⏩ Bỏ qua thổi nến, tiến thẳng vào Sơn Thủy Nguyệt Hà..."),window.act3Timeline&&window.act3Timeline.kill(),Jt.seek(56),Zt&&Zt.transitionToInkWash(),tt.killTweensOf(Q.camera.position),tt.killTweensOf(Q.camera.rotation),Q.camera.position.set(0,15,40),Q.camera.rotation.set(0,0,0),va=!1,Tl()};window.skipToDawn=()=>{console.log("⏩ Chuyển thẳng đến màn bùng nổ cuối cùng (Dawn Finale)..."),window.act3Timeline?(window.act3Timeline.seek(26),Zt&&Zt.transitionToDawn()):(Jt.seek(56),tt.killTweensOf(Q.camera.position),tt.killTweensOf(Q.camera.rotation),Q.camera.position.set(0,15,40),Q.camera.rotation.set(0,0,0),va=!1,Tl(),setTimeout(()=>{window.act3Timeline.seek(26),Zt&&Zt.transitionToDawn()},50))};window.skipToBlackHole=()=>{console.log("⏩ Bỏ qua toàn bộ, nhảy thẳng đến Điểm sáng chói & Hố đen Gargantua..."),window.skipToDawn(),setTimeout(()=>{let r=!1,t=!1,e=0;Q&&Q.sparklingPoint&&(Q.sparklingPoint.visible=!0,Q.sparklingPoint.scale.set(1,1,1),Q.stars&&(Q.stars.visible=!1),Q.spaceStarfield&&(Q.spaceStarfield.visible=!0)),gf((n,i,s,o,a,l,c)=>{!r&&Q&&Q.sparklingPoint&&Q.sparklingPoint.visible&&(Math.abs(i-.5)<.35&&Math.abs(s-.5)<.35&&n!=="NONE"?(e+=16.6,Zn(Math.min(1,e/300)),e>=300&&(r=!0,Zn(0),console.log("✨ CHẠM TAY VÀO VÌ SAO -> KÍCH HOẠT HỐ ĐEN GARGANTUA!"),Q.triggerBlackHoleSuction(()=>{t=!0},Zt))):(e=Math.max(0,e-10),Zn(Math.min(1,e/300)))),(t||Q.photoSphere&&Q.photoSphere.group.visible)&&Q.photoSphere&&Q.photoSphere.handleHandGesture(n,i,s,o,a,h=>Zn(h),c)})},1e3)};window.skipToPhotoSphere=()=>{console.log("⏩ Nhảy thẳng đến Quả cầu ảnh Nguyệt Hà 3D..."),window.skipToDawn(),setTimeout(()=>{Q&&(Q.camera.position.set(0,12,36),Q.camera.rotation.set(0,0,0),Q.water&&(Q.water.visible=!1),Q.timeTunnelGroup&&(Q.timeTunnelGroup.visible=!1),Q.stars&&(Q.stars.visible=!1),Q.spaceStarfield&&(Q.spaceStarfield.visible=!0),Q.scene.background.setRGB(.002,.004,.01),Q.scene.fog.color.setRGB(.002,.004,.01),Q.photoSphere&&Q.photoSphere.show()),gf((r,t,e,n,i,s,o)=>{Q&&Q.photoSphere&&Q.photoSphere.handleHandGesture(r,t,e,n,i,a=>Zn(a),o)})},500)};
