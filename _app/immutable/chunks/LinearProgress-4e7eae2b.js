import{S as ie,i as ne,s as oe,U as z,k as N,a as W,l as P,m as M,h as D,c as X,n as S,V as Q,b as le,C as L,W as k,D as ue,X as de,Y as fe,A as Z,Z as ce,_ as G,$ as pe,a2 as J,E as me,o as Ae,a0 as _e,a5 as he,H as ge}from"./index-0280c2c9.js";import{_ as ye,a as K,b as Se,M as be,c as w,u as Ee,f as ve}from"./useActions-d72238ee.js";import{g as Ce}from"./index-f615c1f2.js";/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var A={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},b={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},V={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Le=function(s){ye(e,s);function e(t){var n=s.call(this,K(K({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return A},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(A.INDETERMINATE_CLASS),this.adapter.addClass(A.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var u,p;if(!t.determinate)try{for(var d=Se(n),f=d.next();!f.done;f=d.next()){var c=f.value;c.contentRect&&t.calculateAndSetDimensions(c.contentRect.width)}}catch(E){u={error:E}}finally{try{f&&!f.done&&(p=d.return)&&p.call(d)}finally{if(u)throw u.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(A.INDETERMINATE_CLASS),this.adapter.setAttribute(b.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(b.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(b.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(A.INDETERMINATE_CLASS),this.adapter.removeAttribute(b.ARIA_VALUENOW),this.adapter.removeAttribute(b.ARIA_VALUEMAX),this.adapter.removeAttribute(b.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(b.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(A.CLOSED_CLASS),this.adapter.removeClass(A.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(b.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(A.CLOSED_CLASS),this.adapter.setAttribute(b.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(A.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(A.CLOSED_CLASS)&&this.adapter.addClass(A.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){s.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(A.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(A.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",u=typeof window<"u"?Ce(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(u,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(b.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*V.PRIMARY_HALF,u=t*V.PRIMARY_FULL,p=t*V.SECONDARY_QUARTER,d=t*V.SECONDARY_HALF,f=t*V.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",u+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-u+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",p+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-p+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",d+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-d+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",f+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-f+"px"),this.restartAnimation()},e}(be);function Ie(s){let e,t,n,u,p,d,f,c,E,I,O,_,v,R,i,m,h,g,y,C,Y,B=[{class:R=w({[s[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":s[3],"mdc-linear-progress--closed":s[4],"mdc-data-table__linear-progress":s[14]==="data-table",...s[8]})},{style:i=Object.entries(s[10]).map(ee).concat([s[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":m=0},{"aria-valuemax":h=1},{"aria-valuenow":g=s[3]?void 0:s[5]},s[9],s[16]],F={};for(let a=0;a<B.length;a+=1)F=z(F,B[a]);return{c(){e=N("div"),t=N("div"),n=N("div"),p=W(),d=N("div"),f=W(),c=N("div"),E=N("span"),O=W(),_=N("div"),v=N("span"),this.h()},l(a){e=P(a,"DIV",{class:!0,style:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0});var l=M(e);t=P(l,"DIV",{class:!0});var T=M(t);n=P(T,"DIV",{class:!0,style:!0}),M(n).forEach(D),p=X(T),d=P(T,"DIV",{class:!0}),M(d).forEach(D),T.forEach(D),f=X(l),c=P(l,"DIV",{class:!0,style:!0});var j=M(c);E=P(j,"SPAN",{class:!0}),M(E).forEach(D),j.forEach(D),O=X(l),_=P(l,"DIV",{class:!0});var H=M(_);v=P(H,"SPAN",{class:!0}),M(v).forEach(D),H.forEach(D),l.forEach(D),this.h()},h(){S(n,"class","mdc-linear-progress__buffer-bar"),S(n,"style",u=Object.entries(s[11]).map(x).join(" ")),S(d,"class","mdc-linear-progress__buffer-dots"),S(t,"class","mdc-linear-progress__buffer"),S(E,"class","mdc-linear-progress__bar-inner"),S(c,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),S(c,"style",I=Object.entries(s[12]).map($).join(" ")),S(v,"class","mdc-linear-progress__bar-inner"),S(_,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),Q(e,F)},m(a,l){le(a,e,l),L(e,t),L(t,n),L(t,p),L(t,d),L(e,f),L(e,c),L(c,E),L(e,O),L(e,_),L(_,v),s[19](e),C||(Y=[k(y=Ee.call(null,e,s[0])),k(s[13].call(null,e)),ue(e,"transitionend",s[20])],C=!0)},p(a,[l]){l&2048&&u!==(u=Object.entries(a[11]).map(x).join(" "))&&S(n,"style",u),l&4096&&I!==(I=Object.entries(a[12]).map($).join(" "))&&S(c,"style",I),Q(e,F=de(B,[l&282&&R!==(R=w({[a[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":a[3],"mdc-linear-progress--closed":a[4],"mdc-data-table__linear-progress":a[14]==="data-table",...a[8]}))&&{class:R},l&1028&&i!==(i=Object.entries(a[10]).map(ee).concat([a[2]]).join(" "))&&{style:i},{role:"progressbar"},{"aria-valuemin":m},{"aria-valuemax":h},l&40&&g!==(g=a[3]?void 0:a[5])&&{"aria-valuenow":g},l&512&&a[9],l&65536&&a[16]])),y&&fe(y.update)&&l&1&&y.update.call(null,a[0])},i:Z,o:Z,d(a){a&&D(e),s[19](null),C=!1,ce(Y)}}}const x=([s,e])=>`${s}: ${e};`,$=([s,e])=>`${s}: ${e};`,ee=([s,e])=>`${s}: ${e};`;function Re(s,e,t){const n=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let u=G(e,n),p;const d=ve(pe());let{use:f=[]}=e,{class:c=""}=e,{style:E=""}=e,{indeterminate:I=!1}=e,{closed:O=!1}=e,{progress:_=0}=e,{buffer:v=void 0}=e,R,i,m={},h={},g={},y={},C={},Y=J("SMUI:linear-progress:context"),B=J("SMUI:linear-progress:closed");me(s,B,r=>t(21,p=r)),Ae(()=>(t(6,i=new Le({addClass:a,forceLayout:()=>{U().getBoundingClientRect()},setBufferBarStyle:te,setPrimaryBarStyle:re,hasClass:F,removeAttribute:j,removeClass:l,setAttribute:T,setStyle:H,attachResizeObserver:r=>{const o=window.ResizeObserver;if(o){const q=new o(r);return q.observe(U()),q}return null},getWidth:()=>U().offsetWidth})),i.init(),()=>{i.destroy()}));function F(r){return r in m?m[r]:U().classList.contains(r)}function a(r){m[r]||t(8,m[r]=!0,m)}function l(r){(!(r in m)||m[r])&&t(8,m[r]=!1,m)}function T(r,o){h[r]!==o&&t(9,h[r]=o,h)}function j(r){(!(r in h)||h[r]!=null)&&t(9,h[r]=void 0,h)}function H(r,o){g[r]!=o&&(o===""||o==null?(delete g[r],t(10,g)):t(10,g[r]=o,g))}function te(r,o){y[r]!=o&&(o===""||o==null?(delete y[r],t(11,y)):t(11,y[r]=o,y))}function re(r,o){C[r]!=o&&(o===""||o==null?(delete C[r],t(12,C)):t(12,C[r]=o,C))}function U(){return R}function se(r){ge[r?"unshift":"push"](()=>{R=r,t(7,R)})}const ae=()=>i&&i.handleTransitionEnd();return s.$$set=r=>{e=z(z({},e),_e(r)),t(16,u=G(e,n)),"use"in r&&t(0,f=r.use),"class"in r&&t(1,c=r.class),"style"in r&&t(2,E=r.style),"indeterminate"in r&&t(3,I=r.indeterminate),"closed"in r&&t(4,O=r.closed),"progress"in r&&t(5,_=r.progress),"buffer"in r&&t(17,v=r.buffer)},s.$$.update=()=>{s.$$.dirty&16&&B&&he(B,p=O,p),s.$$.dirty&72&&i&&i.isDeterminate()!==!I&&i.setDeterminate(!I),s.$$.dirty&96&&i&&i.getProgress()!==_&&i.setProgress(_),s.$$.dirty&131136&&i&&(v==null?i.setBuffer(1):i.setBuffer(v)),s.$$.dirty&80&&i&&(O?i.close():i.open())},[f,c,E,I,O,_,i,R,m,h,g,y,C,d,Y,B,u,v,U,se,ae]}class Ne extends ie{constructor(e){super(),ne(this,e,Re,Ie,oe,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}export{Ne as L};
