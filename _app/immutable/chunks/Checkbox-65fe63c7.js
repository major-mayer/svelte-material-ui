import{S as Me,i as ge,s as He,U as Z,k as B,a as J,R as se,l as G,m as V,c as Q,T as ae,h as v,V as z,n as K,b as Ke,C as R,W,D as X,X as re,Y as x,A as ie,Z as Oe,_ as ce,$ as Ue,a2 as w,o as ye,a0 as ve,a7 as ue,H as le}from"./index-0280c2c9.js";import{_ as Le,a as oe,M as Pe,c as q,u as de,f as Ve,d as Y}from"./useActions-d72238ee.js";import{p as Ee,e as he}from"./prefixFilter-4c6b67e2.js";import{R as je}from"./Ripple-3b49acfc.js";/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var F={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},D={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},_e={ANIM_END_LATCH_MS:250};/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var Be=function(s){Le(n,s);function n(e){var c=s.call(this,oe(oe({},n.defaultAdapter),e))||this;return c.currentCheckState=D.TRANSITION_STATE_INIT,c.currentAnimationClass="",c.animEndLatchTimer=0,c.enableAnimationEndHandler=!1,c}return Object.defineProperty(n,"cssClasses",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(F.UPGRADED)},n.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},n.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(F.DISABLED):this.adapter.removeClass(F.DISABLED)},n.prototype.handleAnimationEnd=function(){var e=this;!this.enableAnimationEndHandler||(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){e.adapter.removeClass(e.currentAnimationClass),e.enableAnimationEndHandler=!1},_e.ANIM_END_LATCH_MS))},n.prototype.handleChange=function(){this.transitionCheckState()},n.prototype.transitionCheckState=function(){if(!!this.adapter.hasNativeControl()){var e=this.currentCheckState,c=this.determineCheckState();if(e!==c){this.updateAriaChecked();var A=D.TRANSITION_STATE_UNCHECKED,f=F.SELECTED;c===A?this.adapter.removeClass(f):this.adapter.addClass(f),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(e,c),this.currentCheckState=c,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},n.prototype.determineCheckState=function(){var e=D.TRANSITION_STATE_INDETERMINATE,c=D.TRANSITION_STATE_CHECKED,A=D.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?e:this.adapter.isChecked()?c:A},n.prototype.getTransitionAnimationClass=function(e,c){var A=D.TRANSITION_STATE_INIT,f=D.TRANSITION_STATE_CHECKED,p=D.TRANSITION_STATE_UNCHECKED,C=n.cssClasses,o=C.ANIM_UNCHECKED_CHECKED,b=C.ANIM_UNCHECKED_INDETERMINATE,k=C.ANIM_CHECKED_UNCHECKED,M=C.ANIM_CHECKED_INDETERMINATE,N=C.ANIM_INDETERMINATE_CHECKED,S=C.ANIM_INDETERMINATE_UNCHECKED;switch(e){case A:return c===p?"":c===f?N:S;case p:return c===f?o:b;case f:return c===p?k:M;default:return c===f?N:S}},n.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(D.ARIA_CHECKED_ATTR,D.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(D.ARIA_CHECKED_ATTR)},n}(Pe);function Ge(s){let n,e,c,A,f,p,C,o,b,k,M,N,S,u,d,l,m,O,L,j,T=[{class:c=q({[s[9]]:!0,"mdc-checkbox__native-control":!0})},{type:"checkbox"},s[20],{disabled:s[1]},{__value:A=s[19](s[7])?s[6]:s[7]},{"data-indeterminate":f=!s[19](s[0])&&s[0]?"true":void 0},s[16],Ee(s[26],"input$")],_={};for(let a=0;a<T.length;a+=1)_=Z(_,T[a]);let E=[{class:d=q({[s[3]]:!0,"mdc-checkbox":!0,"mdc-checkbox--disabled":s[1],"mdc-checkbox--touch":s[5],"mdc-data-table__header-row-checkbox":s[21]==="data-table"&&s[22],"mdc-data-table__row-checkbox":s[21]==="data-table"&&!s[22],...s[14]})},{style:l=Object.entries(s[15]).map(fe).concat([s[4]]).join(" ")},he(s[26],["input$"])],I={};for(let a=0;a<E.length;a+=1)I=Z(I,E[a]);return{c(){n=B("div"),e=B("input"),C=J(),o=B("div"),b=se("svg"),k=se("path"),M=J(),N=B("div"),S=J(),u=B("div"),this.h()},l(a){n=G(a,"DIV",{class:!0,style:!0});var r=V(n);e=G(r,"INPUT",{class:!0,type:!0,"data-indeterminate":!0}),C=Q(r),o=G(r,"DIV",{class:!0});var g=V(o);b=ae(g,"svg",{class:!0,viewBox:!0});var P=V(b);k=ae(P,"path",{class:!0,fill:!0,d:!0}),V(k).forEach(v),P.forEach(v),M=Q(g),N=G(g,"DIV",{class:!0}),V(N).forEach(v),g.forEach(v),S=Q(r),u=G(r,"DIV",{class:!0}),V(u).forEach(v),r.forEach(v),this.h()},h(){z(e,_),K(k,"class","mdc-checkbox__checkmark-path"),K(k,"fill","none"),K(k,"d","M1.73,12.91 8.1,19.28 22.79,4.59"),K(b,"class","mdc-checkbox__checkmark"),K(b,"viewBox","0 0 24 24"),K(N,"class","mdc-checkbox__mixedmark"),K(o,"class","mdc-checkbox__background"),K(u,"class","mdc-checkbox__ripple"),z(n,I)},m(a,r){Ke(a,n,r),R(n,e),e.autofocus&&e.focus(),s[36](e),e.checked=s[12],R(n,C),R(n,o),R(o,b),R(b,k),R(o,M),R(o,N),R(n,S),R(n,u),s[38](n),L||(j=[W(p=de.call(null,e,s[8])),X(e,"change",s[37]),X(e,"blur",s[34]),X(e,"focus",s[35]),W(m=de.call(null,n,s[2])),W(s[18].call(null,n)),W(O=je.call(null,n,{unbounded:!0,addClass:s[23],removeClass:s[24],addStyle:s[25],active:s[17],eventTarget:s[11]})),X(n,"animationend",s[39])],L=!0)},p(a,r){z(e,_=re(T,[r[0]&512&&c!==(c=q({[a[9]]:!0,"mdc-checkbox__native-control":!0}))&&{class:c},{type:"checkbox"},a[20],r[0]&2&&{disabled:a[1]},r[0]&192&&A!==(A=a[19](a[7])?a[6]:a[7])&&{__value:A},r[0]&1&&f!==(f=!a[19](a[0])&&a[0]?"true":void 0)&&{"data-indeterminate":f},r[0]&65536&&a[16],r[0]&67108864&&Ee(a[26],"input$")])),p&&x(p.update)&&r[0]&256&&p.update.call(null,a[8]),r[0]&4096&&(e.checked=a[12]),z(n,I=re(E,[r[0]&16426&&d!==(d=q({[a[3]]:!0,"mdc-checkbox":!0,"mdc-checkbox--disabled":a[1],"mdc-checkbox--touch":a[5],"mdc-data-table__header-row-checkbox":a[21]==="data-table"&&a[22],"mdc-data-table__row-checkbox":a[21]==="data-table"&&!a[22],...a[14]}))&&{class:d},r[0]&32784&&l!==(l=Object.entries(a[15]).map(fe).concat([a[4]]).join(" "))&&{style:l},r[0]&67108864&&he(a[26],["input$"])])),m&&x(m.update)&&r[0]&4&&m.update.call(null,a[2]),O&&x(O.update)&&r[0]&133120&&O.update.call(null,{unbounded:!0,addClass:a[23],removeClass:a[24],addStyle:a[25],active:a[17],eventTarget:a[11]})},i:ie,o:ie,d(a){a&&v(n),s[36](null),s[38](null),L=!1,Oe(j)}}}const fe=([s,n])=>`${s}: ${n};`;function Fe(s,n,e){const c=["use","class","style","disabled","touch","indeterminate","group","checked","value","valueKey","input$use","input$class","getId","getElement"];let A=ce(n,c);var f;const p=Ve(Ue());let C=()=>{};function o(t){return t===C}let{use:b=[]}=n,{class:k=""}=n,{style:M=""}=n,{disabled:N=!1}=n,{touch:S=!1}=n,{indeterminate:u=C}=n,{group:d=C}=n,{checked:l=C}=n,{value:m=null}=n,{valueKey:O=C}=n,{input$use:L=[]}=n,{input$class:j=""}=n,T,_,E,I={},a={},r={},g=!1,P=(f=w("SMUI:generic:input:props"))!==null&&f!==void 0?f:{},i=o(d)?o(l)?!1:l!=null?l:void 0:d.indexOf(m)!==-1,Ce=w("SMUI:checkbox:context"),me=w("SMUI:data-table:row:header"),U=l,y=o(d)?[]:[...d],H=i;ye(()=>{e(11,E.indeterminate=!o(u)&&u,E),e(10,_=new Be({addClass:$,forceLayout:()=>T.offsetWidth,hasNativeControl:()=>!0,isAttachedToDOM:()=>Boolean(T.parentNode),isChecked:()=>i!=null?i:!1,isIndeterminate:()=>o(u)?!1:u,removeClass:ee,removeNativeControlAttr:Ne,setNativeControlAttr:Ae,setNativeControlDisabled:h=>e(1,N=h)}));const t={_smui_checkbox_accessor:!0,get element(){return te()},get checked(){return i!=null?i:!1},set checked(h){i!==h&&e(12,i=h)},get indeterminate(){return o(u)?!1:u},set indeterminate(h){e(0,u=h)},activateRipple(){N||e(17,g=!0)},deactivateRipple(){e(17,g=!1)}};return Y(T,"SMUIGenericInput:mount",t),Y(T,"SMUICheckbox:mount",t),_.init(),()=>{Y(T,"SMUIGenericInput:unmount",t),Y(T,"SMUICheckbox:unmount",t),_.destroy()}});function $(t){I[t]||e(14,I[t]=!0,I)}function ee(t){(!(t in I)||I[t])&&e(14,I[t]=!1,I)}function Te(t,h){a[t]!=h&&(h===""||h==null?(delete a[t],e(15,a)):e(15,a[t]=h,a))}function Ae(t,h){r[t]!==h&&e(16,r[t]=h,r)}function Ne(t){(!(t in r)||r[t]!=null)&&e(16,r[t]=void 0,r)}function Ie(){return P&&P.id}function te(){return T}function be(t){ue.call(this,s,t)}function ke(t){ue.call(this,s,t)}function De(t){le[t?"unshift":"push"](()=>{E=t,e(11,E),e(27,d),e(33,H),e(12,i),e(6,m),e(32,y),e(28,l),e(31,U),e(0,u),e(10,_)})}function pe(){i=this.checked,e(12,i),e(27,d),e(33,H),e(6,m),e(32,y),e(28,l),e(31,U),e(0,u),e(11,E),e(10,_)}function Se(t){le[t?"unshift":"push"](()=>{T=t,e(13,T)})}const Re=()=>_&&_.handleAnimationEnd();return s.$$set=t=>{n=Z(Z({},n),ve(t)),e(26,A=ce(n,c)),"use"in t&&e(2,b=t.use),"class"in t&&e(3,k=t.class),"style"in t&&e(4,M=t.style),"disabled"in t&&e(1,N=t.disabled),"touch"in t&&e(5,S=t.touch),"indeterminate"in t&&e(0,u=t.indeterminate),"group"in t&&e(27,d=t.group),"checked"in t&&e(28,l=t.checked),"value"in t&&e(6,m=t.value),"valueKey"in t&&e(7,O=t.valueKey),"input$use"in t&&e(8,L=t.input$use),"input$class"in t&&e(9,j=t.input$class)},s.$$.update=()=>{if(s.$$.dirty[0]&402660417|s.$$.dirty[1]&7){let t=!1;if(!o(d))if(H!==i){const h=d.indexOf(m);i&&h===-1?(d.push(m),e(27,d),e(33,H),e(12,i),e(6,m),e(32,y),e(28,l),e(31,U),e(0,u),e(11,E),e(10,_)):!i&&h!==-1&&(d.splice(h,1),e(27,d),e(33,H),e(12,i),e(6,m),e(32,y),e(28,l),e(31,U),e(0,u),e(11,E),e(10,_)),t=!0}else{const h=y.indexOf(m),ne=d.indexOf(m);h>-1&&ne===-1?(e(12,i=!1),t=!0):ne>-1&&h===-1&&(e(12,i=!0),t=!0)}o(l)?!!H!=!!i&&(t=!0):l!==(i!=null?i:null)&&(l===U?(e(28,l=i!=null?i:null),o(u)||e(0,u=!1)):e(12,i=l!=null?l:void 0),t=!0),E&&(o(u)?E.indeterminate&&(e(11,E.indeterminate=!1,E),t=!0):!u&&E.indeterminate?(e(11,E.indeterminate=!1,E),t=!0):u&&!E.indeterminate&&(e(11,E.indeterminate=!0,E),t=!0)),e(31,U=l),e(32,y=o(d)?[]:[...d]),e(33,H=i),t&&_&&_.handleChange()}},[u,N,b,k,M,S,m,O,L,j,_,E,i,T,I,a,r,g,p,o,P,Ce,me,$,ee,Te,A,d,l,Ie,te,U,y,H,be,ke,De,pe,Se,Re]}class Ye extends Me{constructor(n){super(),ge(this,n,Fe,Ge,He,{use:2,class:3,style:4,disabled:1,touch:5,indeterminate:0,group:27,checked:28,value:6,valueKey:7,input$use:8,input$class:9,getId:29,getElement:30},null,[-1,-1])}get getId(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}export{Ye as C};
