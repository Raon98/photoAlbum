(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[189],{2294:function(e){!function(t,o){e.exports=o()}(0,(function(){var e="__v-click-outside",t="undefined"!=typeof window,o="undefined"!=typeof navigator,n=t&&("ontouchstart"in window||o&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,o=e.handler;(0,e.middleware)(t)&&o(t)}function l(t,o){var l=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe),capture:!!e.capture}}(o.value),a=l.handler,r=l.middleware,s=l.detectIframe,u=l.capture;if(l.isActive){if(t[e]=l.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(e){var t=e.el,o=e.event,n=e.handler,l=e.middleware,a=o.composedPath&&o.composedPath()||o.path;(a?a.indexOf(t)<0:!t.contains(o.target))&&i({event:o,handler:n,middleware:l})}({el:t,event:e,handler:a,middleware:r})},capture:u}})),s){var d={event:"blur",srcTarget:window,handler:function(e){return function(e){var t=e.el,o=e.event,n=e.handler,l=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:o,handler:n,middleware:l})}),0)}({el:t,event:e,handler:a,middleware:r})},capture:u};t[e]=[].concat(t[e],[d])}t[e].forEach((function(o){var n=o.event,i=o.srcTarget,l=o.handler;return setTimeout((function(){t[e]&&i.addEventListener(n,l,u)}),0)}))}}function a(t){(t[e]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,e.capture)})),delete t[e]}var r=t?{bind:l,update:function(e,t){var o=t.value,n=t.oldValue;JSON.stringify(o)!==JSON.stringify(n)&&(a(e),l(e,{value:o}))},unbind:a}:{};return{install:function(e){e.directive("click-outside",r)},directive:r}}))},9189:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return it}});var n=o(9269),i=o(3201);const l=e=>((0,n.dD)("data-v-09f15afc"),e=e(),(0,n.Cn)(),e),a={class:"q-pa-md q-gutter-sm",id:"layerPopup"},r=l((()=>(0,n._)("div",{class:"absolute-bottom text-h6"}," Title ",-1)));function s(e,t,o,l,s,u){const d=(0,n.up)("q-btn"),c=(0,n.up)("q-header"),v=(0,n.up)("q-img"),f=(0,n.up)("q-card-section"),p=(0,n.up)("q-card"),m=(0,n.up)("q-layout"),h=(0,n.up)("q-dialog"),g=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(h,{modelValue:l.active,"onUpdate:modelValue":t[1]||(t[1]=e=>l.active=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{view:"Lhh lpR fff",container:"",class:"bg-white",style:{height:"60%","overflow-y":"hidden",overflow:"hidden"}},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"bg-white text-green-100",style:{"text-align":"right"}},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(d,{flat:"",round:"",dense:"",icon:"close",onClick:t[0]||(t[0]=e=>l.dialogClose())},null,512),[[g]])])),_:1}),(0,n.Wm)(p,{class:"my-card"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{src:"https://cdn.quasar.dev/img/parallax2.jpg",height:"100%"},{default:(0,n.w5)((()=>[r])),_:1}),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(l.lorem),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var u=o(6237),d=o(2294),c=o.n(d),v={name:"dialog",components:{clickOutside:c()},props:["active"],setup(e,{emit:t}){const o=(0,n.Fl)((()=>e.active)),i=(0,u.iH)(!1),l=(0,u.iH)(1),a="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",r=(0,u.iH)(3),s=(0,u.iH)(39),d=(0,u.iH)(56),c=(0,u.iH)(63),v=()=>{o.value=!1,t("update:active",!o.value)};return(0,n.bv)((()=>{})),{active:o,carousel:i,slide:l,lorem:a,stars:r,slideVol:s,slideAlarm:d,slideVibration:c,dialogClose:v}}},f=o(7617),p=o(5102),m=o(6114);function h(e,t,o){let i;function l(){void 0!==i&&(m.Z.remove(i),i=void 0)}return(0,n.Jd)((()=>{!0===e.value&&l()})),{removeFromHistory:l,addToHistory(){i={condition:()=>!0===o.value,handler:t},m.Z.add(i)}}}var g=o(6380);function w(){let e;const t=(0,n.FN)();function o(){clearTimeout(e)}return(0,n.se)(o),(0,n.Jd)(o),{removeTimeout:o,registerTimeout(o,n){clearTimeout(e),!1===(0,g.$D)(t)&&(e=setTimeout(o,n))}}}function y(){let e;const t=(0,n.FN)();function o(){e=void 0}return(0,n.se)(o),(0,n.Jd)(o),{removeTick:o,registerTick(o){e=o,(0,n.Y3)((()=>{e===o&&(!1===(0,g.$D)(t)&&e(),e=void 0)}))}}}const b={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},q=["beforeShow","show","beforeHide","hide"];function S({showing:e,canShow:t,hideOnRouteChange:o,handleShow:i,handleHide:l,processOnMount:a}){const r=(0,n.FN)(),{props:s,emit:u,proxy:d}=r;let c;function v(t){!0===e.value?m(t):f(t)}function f(e){if(!0===s.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const o=void 0!==s["onUpdate:modelValue"];!0===o&&(u("update:modelValue",!0),c=e,(0,n.Y3)((()=>{c===e&&(c=void 0)}))),null!==s.modelValue&&!1!==o||p(e)}function p(t){!0!==e.value&&(e.value=!0,u("beforeShow",t),void 0!==i?i(t):u("show",t))}function m(e){if(!0===s.disable)return;const t=void 0!==s["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),c=e,(0,n.Y3)((()=>{c===e&&(c=void 0)}))),null!==s.modelValue&&!1!==t||h(e)}function h(t){!1!==e.value&&(e.value=!1,u("beforeHide",t),void 0!==l?l(t):u("hide",t))}function w(t){if(!0===s.disable&&!0===t)void 0!==s["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?p:h;e(c)}}(0,n.YP)((()=>s.modelValue),w),void 0!==o&&!0===(0,g.Rb)(r)&&(0,n.YP)((()=>d.$route.fullPath),(()=>{!0===o.value&&!0===e.value&&m()})),!0===a&&(0,n.bv)((()=>{w(s.modelValue)}));const y={show:f,hide:m,toggle:v};return Object.assign(d,y),y}const x={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function L(e,t=(()=>{}),o=(()=>{})){return{transitionProps:(0,n.Fl)((()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}})),transitionStyle:(0,n.Fl)((()=>`--q-transition-duration: ${e.transitionDuration}ms`))}}o(4719);var T=o(3027);let _=[],H=[];function E(e){H=H.filter((t=>t!==e))}function F(e){E(e),H.push(e)}function k(e){E(e),0===H.length&&_.length>0&&(_[_.length-1](),_=[])}function C(e){0===H.length?e():_.push(e)}var z=o(4233);const P=[];let B=document.body;function $(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==z.w6.globalNodes){const e=z.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return B.appendChild(t),P.push(t),t}function O(e){P.splice(P.indexOf(e),1),e.remove()}const V=[];function N(e){return V.find((t=>null!==t.contentEl&&t.contentEl.contains(e)))}function R(e,t){do{if("QMenu"===e.$options.name){if(e.hide(t),!0===e.$props.separateClosePopup)return(0,g.O2)(e)}else if(!0===e.__qPortal){const o=(0,g.O2)(e);return void 0!==o&&"QPopupProxy"===o.$options.name?(e.hide(t),o):e}e=(0,g.O2)(e)}while(void 0!==e&&null!==e)}function Y(e,t,o){while(0!==o&&void 0!==e&&null!==e){if(!0===e.__qPortal){if(o--,"QMenu"===e.$options.name){e=R(e,t);continue}e.hide(t)}e=(0,g.O2)(e)}}var Q=o(3613);function W(e){e=e.parent;while(void 0!==e&&null!==e){if("QGlobalDialog"===e.type.name)return!0;if("QDialog"===e.type.name||"QMenu"===e.type.name)return!1;e=e.parent}return!1}function D(e,t,o,i){const l=(0,u.iH)(!1),a=(0,u.iH)(!1);let r=null;const s={},d=!0===i&&W(e);function c(t){if(!0===t)return k(s),void(a.value=!0);a.value=!1,!1===l.value&&(!1===d&&null===r&&(r=$()),l.value=!0,V.push(e.proxy),F(s))}function v(t){if(a.value=!1,!0!==t)return;k(s),l.value=!1;const o=V.indexOf(e.proxy);-1!==o&&V.splice(o,1),null!==r&&(O(r),r=null)}return(0,n.Ah)((()=>{v(!0)})),e.proxy.__qPortal=!0,(0,Q.g)(e.proxy,"contentEl",(()=>t.value)),{showPortal:c,hidePortal:v,portalIsActive:l,portalIsAccessible:a,renderPortal:()=>!0===d?o():!0===l.value?[(0,n.h)(n.lR,{to:r},o())]:void 0}}var A=o(6145);const M=[null,document,document.body,document.scrollingElement,document.documentElement];function j(e,t){let o=(0,A.sb)(t);if(void 0===o){if(void 0===e||null===e)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return M.includes(o)?window:o}function U(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function I(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let J;function K(){if(void 0!==J)return J;const e=document.createElement("p"),t=document.createElement("div");(0,A.iv)(e,{width:"100%",height:"200px"}),(0,A.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),J=o-n,J}function X(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}var Z=o(1013);let G,ee,te,oe,ne,ie,le=0,ae=!1;function re(e){se(e)&&(0,T.NS)(e)}function se(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,T.AZ)(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||n?e.deltaY:e.deltaX;for(let l=0;l<t.length;l++){const e=t[l];if(X(e,n))return n?i<0&&0===e.scrollTop||i>0&&e.scrollTop+e.clientHeight===e.scrollHeight:i<0&&0===e.scrollLeft||i>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function ue(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function de(e){!0!==ae&&(ae=!0,requestAnimationFrame((()=>{ae=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;void 0!==te&&t===window.innerHeight||(te=o-t,document.scrollingElement.scrollTop=n),n>te&&(document.scrollingElement.scrollTop-=Math.ceil((n-te)/8))})))}function ce(e){const t=document.body,o=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:n}=window.getComputedStyle(t);G=I(window),ee=U(window),oe=t.style.left,ne=t.style.top,t.style.left=`-${G}px`,t.style.top=`-${ee}px`,"hidden"!==n&&("scroll"===n||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===Z.Lp.is.ios&&(!0===o?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",de,T.rU.passiveCapture),window.visualViewport.addEventListener("scroll",de,T.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ue,T.rU.passiveCapture))}!0===Z.Lp.is.desktop&&!0===Z.Lp.is.mac&&window[`${e}EventListener`]("wheel",re,T.rU.notPassive),"remove"===e&&(!0===Z.Lp.is.ios&&(!0===o?(window.visualViewport.removeEventListener("resize",de,T.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",de,T.rU.passiveCapture)):window.removeEventListener("scroll",ue,T.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=oe,t.style.top=ne,window.scrollTo(G,ee),te=void 0)}function ve(e){let t="add";if(!0===e){if(le++,void 0!==ie)return clearTimeout(ie),void(ie=void 0);if(le>1)return}else{if(0===le)return;if(le--,le>0)return;if(t="remove",!0===Z.Lp.is.ios&&!0===Z.Lp.is.nativeMobile)return clearTimeout(ie),void(ie=setTimeout((()=>{ce(t),ie=void 0}),100))}ce(t)}function fe(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,ve(t))}}}var pe=o(3856),me=o(64),he=o(6809);const ge=[];let we;function ye(e){we=27===e.keyCode}function be(){!0===we&&(we=!1)}function qe(e){!0===we&&(we=!1,!0===(0,he.So)(e,27)&&ge[ge.length-1](e))}function Se(e){window[e]("keydown",ye),window[e]("blur",be),window[e]("keyup",qe),we=!1}function xe(e){!0===Z.Lp.is.desktop&&(ge.push(e),1===ge.length&&Se("addEventListener"))}function Le(e){const t=ge.indexOf(e);t>-1&&(ge.splice(t,1),0===ge.length&&Se("removeEventListener"))}const Te=[];function _e(e){Te[Te.length-1](e)}function He(e){!0===Z.Lp.is.desktop&&(Te.push(e),1===Te.length&&document.body.addEventListener("focusin",_e))}function Ee(e){const t=Te.indexOf(e);t>-1&&(Te.splice(t,1),0===Te.length&&document.body.removeEventListener("focusin",_e))}let Fe=0;const ke={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ce={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var ze=(0,pe.L)({name:"QDialog",inheritAttrs:!1,props:{...b,...x,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>"standard"===e||["top","bottom","left","right"].includes(e)}},emits:[...q,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:i}){const l=(0,n.FN)(),a=(0,u.iH)(null),r=(0,u.iH)(!1),s=(0,u.iH)(!1);let d,c,v,f=null;const m=(0,n.Fl)((()=>!0!==e.persistent&&!0!==e.noRouteDismiss&&!0!==e.seamless)),{preventBodyScroll:g}=fe(),{registerTimeout:b}=w(),{registerTick:q,removeTick:x}=y(),{transitionProps:T,transitionStyle:_}=L(e,(()=>Ce[e.position][0]),(()=>Ce[e.position][1])),{showPortal:H,hidePortal:E,portalIsAccessible:F,renderPortal:k}=D(l,a,X,!0),{hide:z}=S({showing:r,hideOnRouteChange:m,handleShow:R,handleHide:Y,processOnMount:!0}),{addToHistory:P,removeFromHistory:B}=h(r,z,m),$=(0,n.Fl)((()=>"q-dialog__inner flex no-pointer-events q-dialog__inner--"+(!0===e.maximized?"maximized":"minimized")+` q-dialog__inner--${e.position} ${ke[e.position]}`+(!0===s.value?" q-dialog__inner--animating":"")+(!0===e.fullWidth?" q-dialog__inner--fullwidth":"")+(!0===e.fullHeight?" q-dialog__inner--fullheight":"")+(!0===e.square?" q-dialog__inner--square":""))),O=(0,n.Fl)((()=>!0===r.value&&!0!==e.seamless)),V=(0,n.Fl)((()=>!0===e.autoClose?{onClick:I}:{})),N=(0,n.Fl)((()=>["q-dialog fullscreen no-pointer-events q-dialog--"+(!0===O.value?"modal":"seamless"),i.class]));function R(t){P(),f=!1===e.noRefocus&&null!==document.activeElement?document.activeElement:null,U(e.maximized),H(),s.value=!0,!0!==e.noFocus?(null!==document.activeElement&&document.activeElement.blur(),q(Q)):x(),b((()=>{if(!0===l.proxy.$q.platform.is.ios){if(!0!==e.seamless&&document.activeElement){const{top:e,bottom:t}=document.activeElement.getBoundingClientRect(),{innerHeight:o}=window,n=void 0!==window.visualViewport?window.visualViewport.height:o;e>0&&t>n/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-n,t>=o?1/0:Math.ceil(document.scrollingElement.scrollTop+t-n/2))),document.activeElement.scrollIntoView()}v=!0,a.value.click(),v=!1}H(!0),s.value=!1,o("show",t)}),e.transitionDuration)}function Y(t){x(),B(),j(!0),s.value=!0,E(),null!==f&&(((t&&0===t.type.indexOf("key")?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),b((()=>{E(!0),s.value=!1,o("hide",t)}),e.transitionDuration)}function Q(e){C((()=>{let t=a.value;null!==t&&!0!==t.contains(document.activeElement)&&(t=(""!==e?t.querySelector(e):null)||t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))}))}function W(e){e&&"function"===typeof e.focus?e.focus({preventScroll:!0}):Q(),o("shake");const t=a.value;null!==t&&(t.classList.remove("q-animate--scale"),t.classList.add("q-animate--scale"),clearTimeout(d),d=setTimeout((()=>{null!==a.value&&(t.classList.remove("q-animate--scale"),Q())}),170))}function M(){!0!==e.seamless&&(!0===e.persistent||!0===e.noEscDismiss?!0!==e.maximized&&!0!==e.noShake&&W():(o("escapeKey"),z()))}function j(t){clearTimeout(d),!0!==t&&!0!==r.value||(U(!1),!0!==e.seamless&&(g(!1),Ee(K),Le(M))),!0!==t&&(f=null)}function U(e){!0===e?!0!==c&&(Fe<1&&document.body.classList.add("q-body--dialog"),Fe++,c=!0):!0===c&&(Fe<2&&document.body.classList.remove("q-body--dialog"),Fe--,c=!1)}function I(e){!0!==v&&(z(e),o("click",e))}function J(t){!0!==e.persistent&&!0!==e.noBackdropDismiss?z(t):!0!==e.noShake&&W(t.relatedTarget)}function K(t){!0!==e.allowFocusOutside&&!0===F.value&&!0!==(0,A.mY)(a.value,t.target)&&Q('[tabindex]:not([tabindex="-1"])')}function X(){return(0,n.h)("div",{role:"dialog","aria-modal":!0===O.value?"true":"false",...i,class:N.value},[(0,n.h)(p.uT,{name:"q-transition--fade",appear:!0},(()=>!0===O.value?(0,n.h)("div",{class:"q-dialog__backdrop fixed-full",style:_.value,"aria-hidden":"true",tabindex:-1,onFocusin:J}):null)),(0,n.h)(p.uT,T.value,(()=>!0===r.value?(0,n.h)("div",{ref:a,class:$.value,style:_.value,tabindex:-1,...V.value},(0,me.KR)(t.default)):null))])}return(0,n.YP)((()=>e.maximized),(e=>{!0===r.value&&U(e)})),(0,n.YP)(O,(e=>{g(e),!0===e?(He(K),xe(M)):(Ee(K),Le(M))})),Object.assign(l.proxy,{focus:Q,shake:W,__updateRefocusTarget(e){f=e||null}}),(0,n.Jd)(j),k}});const{passive:Pe}=T.rU,Be=["both","horizontal","vertical"];var $e=(0,pe.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Be.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,l,a=null;function r(){null!==a&&a();const n=Math.max(0,U(i)),l=I(i),r={top:n-o.position.top,left:l-o.position.left};if("vertical"===e.axis&&0===r.top||"horizontal"===e.axis&&0===r.left)return;const s=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";o.position={top:n,left:l},o.directionChanged=o.direction!==s,o.delta=r,!0===o.directionChanged&&(o.direction=s,o.inflectionPoint=o.position),t("scroll",{...o})}function s(){i=j(l,e.scrollTarget),i.addEventListener("scroll",d,Pe),d(!0)}function u(){void 0!==i&&(i.removeEventListener("scroll",d,Pe),i=void 0)}function d(t){if(!0===t||0===e.debounce||"0"===e.debounce)r();else if(null===a){const[t,o]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];a=()=>{o(t),a=null}}}(0,n.YP)((()=>e.scrollTarget),(()=>{u(),s()}));const{proxy:c}=(0,n.FN)();return(0,n.YP)((()=>c.$q.lang.rtl),r),(0,n.bv)((()=>{l=c.$el.parentNode,s()})),(0,n.Jd)((()=>{null!==a&&a(),u()})),Object.assign(c,{trigger:d,getPosition:()=>o}),T.ZT}});function Oe(){const e=(0,u.iH)(!Z.uX.value);return!1===e.value&&(0,n.bv)((()=>{e.value=!0})),e}const Ve="undefined"!==typeof ResizeObserver,Ne=!0===Ve?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Re=(0,pe.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let o,i=null,l={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?r():null===i&&(i=setTimeout(r,e.debounce))}function r(){if(clearTimeout(i),i=null,o){const{offsetWidth:e,offsetHeight:n}=o;e===l.width&&n===l.height||(l={width:e,height:n},t("resize",l))}}const{proxy:s}=(0,n.FN)();if(!0===Ve){let u;const d=e=>{o=s.$el.parentNode,o?(u=new ResizeObserver(a),u.observe(o),r()):!0!==e&&(0,n.Y3)((()=>{d(!0)}))};return(0,n.bv)((()=>{d()})),(0,n.Jd)((()=>{clearTimeout(i),void 0!==u&&(void 0!==u.disconnect?u.disconnect():o&&u.unobserve(o))})),T.ZT}{const c=Oe();let v;function f(){clearTimeout(i),void 0!==v&&(void 0!==v.removeEventListener&&v.removeEventListener("resize",a,T.rU.passive),v=void 0)}function p(){f(),o&&o.contentDocument&&(v=o.contentDocument.defaultView,v.addEventListener("resize",a,T.rU.passive),r())}return(0,n.bv)((()=>{(0,n.Y3)((()=>{o=s.$el,o&&p()}))})),(0,n.Jd)(f),s.trigger=a,()=>{if(!0===c.value)return(0,n.h)("object",{style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:p})}}}}),Ye=o(4300),Qe=(0,pe.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:o}){const{proxy:{$q:i}}=(0,n.FN)(),l=(0,u.iH)(null),a=(0,u.iH)(i.screen.height),r=(0,u.iH)(!0===e.container?0:i.screen.width),s=(0,u.iH)({position:0,direction:"down",inflectionPoint:0}),d=(0,u.iH)(0),c=(0,u.iH)(!0===Z.uX.value?0:K()),v=(0,n.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),f=(0,n.Fl)((()=>!1===e.container?{minHeight:i.screen.height+"px"}:null)),p=(0,n.Fl)((()=>0!==c.value?{[!0===i.lang.rtl?"left":"right"]:`${c.value}px`}:null)),m=(0,n.Fl)((()=>0!==c.value?{[!0===i.lang.rtl?"right":"left"]:0,[!0===i.lang.rtl?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null));function h(t){if(!0===e.container||!0!==document.qScrollPrevented){const n={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};s.value=n,void 0!==e.onScroll&&o("scroll",n)}}function g(t){const{height:n,width:i}=t;let l=!1;a.value!==n&&(l=!0,a.value=n,void 0!==e.onScrollHeight&&o("scrollHeight",n),y()),r.value!==i&&(l=!0,r.value=i),!0===l&&void 0!==e.onResize&&o("resize",t)}function w({height:e}){d.value!==e&&(d.value=e,y())}function y(){if(!0===e.container){const e=a.value>d.value?K():0;c.value!==e&&(c.value=e)}}let b;const q={instances:{},view:(0,n.Fl)((()=>e.view)),isContainer:(0,n.Fl)((()=>e.container)),rootRef:l,height:a,containerHeight:d,scrollbarWidth:c,totalWidth:(0,n.Fl)((()=>r.value+c.value)),rows:(0,n.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,u.qj)({size:0,offset:0,space:!1}),right:(0,u.qj)({size:300,offset:0,space:!1}),footer:(0,u.qj)({size:0,offset:0,space:!1}),left:(0,u.qj)({size:300,offset:0,space:!1}),scroll:s,animate(){void 0!==b?clearTimeout(b):document.body.classList.add("q-body--layout-animate"),b=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),b=void 0}),155)},update(e,t,o){q[e][t]=o}};if((0,n.JJ)(Ye.YE,q),K()>0){let S=null;const x=document.body;function L(){S=null,x.classList.remove("hide-scrollbar")}function T(){if(null===S){if(x.scrollHeight>i.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(S);S=setTimeout(L,300)}function _(e){null!==S&&"remove"===e&&(clearTimeout(S),L()),window[`${e}EventListener`]("resize",T)}(0,n.YP)((()=>!0!==e.container?"add":"remove"),_),!0!==e.container&&_("add"),(0,n.Ah)((()=>{_("remove")}))}return()=>{const o=(0,me.vs)(t.default,[(0,n.h)($e,{onScroll:h}),(0,n.h)(Re,{onResize:g})]),i=(0,n.h)("div",{class:v.value,style:f.value,ref:!0===e.container?void 0:l,tabindex:-1},o);return!0===e.container?(0,n.h)("div",{class:"q-layout-container overflow-hidden",ref:l},[(0,n.h)(Re,{onResize:w}),(0,n.h)("div",{class:"absolute-full",style:p.value},[(0,n.h)("div",{class:"scroll",style:m.value},[i])])]):i}}}),We=(0,pe.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:i}}=(0,n.FN)(),l=(0,n.f3)(Ye.YE,Ye.qO);if(l===Ye.qO)return console.error("QHeader needs to be child of QLayout"),Ye.qO;const a=(0,u.iH)(parseInt(e.heightHint,10)),r=(0,u.iH)(!0),s=(0,n.Fl)((()=>!0===e.reveal||l.view.value.indexOf("H")>-1||i.platform.is.ios&&!0===l.isContainer.value)),d=(0,n.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===s.value)return!0===r.value?a.value:0;const t=a.value-l.scroll.value.position;return t>0?t:0})),c=(0,n.Fl)((()=>!0!==e.modelValue||!0===s.value&&!0!==r.value)),v=(0,n.Fl)((()=>!0===e.modelValue&&!0===c.value&&!0===e.reveal)),f=(0,n.Fl)((()=>"q-header q-layout__section--marginal "+(!0===s.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===c.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),p=(0,n.Fl)((()=>{const e=l.rows.value.top,t={};return"l"===e[0]&&!0===l.left.space&&(t[!0===i.lang.rtl?"right":"left"]=`${l.left.size}px`),"r"===e[2]&&!0===l.right.space&&(t[!0===i.lang.rtl?"left":"right"]=`${l.right.size}px`),t}));function m(e,t){l.update("header",e,t)}function h(e,t){e.value!==t&&(e.value=t)}function g({height:e}){h(a,e),m("size",e)}function w(e){!0===v.value&&h(r,!0),o("focusin",e)}(0,n.YP)((()=>e.modelValue),(e=>{m("space",e),h(r,!0),l.animate()})),(0,n.YP)(d,(e=>{m("offset",e)})),(0,n.YP)((()=>e.reveal),(t=>{!1===t&&h(r,e.modelValue)})),(0,n.YP)(r,(e=>{l.animate(),o("reveal",e)})),(0,n.YP)(l.scroll,(t=>{!0===e.reveal&&h(r,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const y={};return l.instances.header=y,!0===e.modelValue&&m("size",a.value),m("space",e.modelValue),m("offset",d.value),(0,n.Jd)((()=>{l.instances.header===y&&(l.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))})),()=>{const o=(0,me.Bl)(t.default,[]);return!0===e.elevated&&o.push((0,n.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push((0,n.h)(Re,{debounce:0,onResize:g})),(0,n.h)("header",{class:f.value,style:p.value,onFocusin:w},o)}}}),De=o(3237);const Ae={dark:{type:Boolean,default:null}};function Me(e,t){return(0,n.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}var je=(0,pe.L)({name:"QCard",props:{...Ae,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=(0,n.FN)(),i=Me(e,o),l=(0,n.Fl)((()=>"q-card"+(!0===i.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,n.h)(e.tag,{class:l.value},(0,me.KR)(t.default))}}),Ue=o(2605);const Ie={ratio:[String,Number]};function Je(e,t){return(0,n.Fl)((()=>{const o=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(o)&&o>0?{paddingBottom:100/o+"%"}:null}))}const Ke=16/9;var Xe=(0,pe.L)({name:"QImg",props:{...Ie,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ke},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:o}){const i=(0,u.iH)(e.initialRatio),l=Je(e,i);let a;const r=[(0,u.iH)(null),(0,u.iH)(w())],s=(0,u.iH)(0),d=(0,u.iH)(!1),c=(0,u.iH)(!1),v=(0,n.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),f=(0,n.Fl)((()=>({width:e.width,height:e.height}))),m=(0,n.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),h=(0,n.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function g(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function w(){return void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null}function y(e){clearTimeout(a),c.value=!1,null===e?(d.value=!1,r[1^s.value].value=w()):d.value=!0,r[s.value].value=e}function b({target:e}){null!==a&&(clearTimeout(a),i.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,q(e,1))}function q(e,t){null!==a&&1e3!==t&&(!0===e.complete?S(e):a=setTimeout((()=>{q(e,t+1)}),50))}function S(e){null!==a&&(s.value=1^s.value,r[s.value].value=null,d.value=!1,c.value=!1,o("load",e.currentSrc||e.src))}function x(e){clearTimeout(a),d.value=!1,c.value=!0,r[s.value].value=null,r[1^s.value].value=w(),o("error",e)}function L(t){const o=r[t].value,i={key:"img_"+t,class:m.value,style:h.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...o};return s.value===t?(i.class+=" q-img__image--waiting",Object.assign(i,{onLoad:b,onError:x})):i.class+=" q-img__image--loaded",(0,n.h)("div",{class:"q-img__container absolute-full",key:"img"+t},(0,n.h)("img",i))}function T(){return!0!==d.value?(0,n.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,me.KR)(t[!0===c.value?"error":"default"])):(0,n.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==t.loading?t.loading():!0===e.noSpinner?void 0:[(0,n.h)(Ue.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,n.YP)((()=>g()),y),y(g()),(0,n.Jd)((()=>{clearTimeout(a),a=null})),()=>{const t=[];return null!==l.value&&t.push((0,n.h)("div",{key:"filler",style:l.value})),!0!==c.value&&(null!==r[0].value&&t.push(L(0)),null!==r[1].value&&t.push(L(1))),t.push((0,n.h)(p.uT,{name:"q-transition--fade"},T)),(0,n.h)("div",{class:v.value,style:f.value,role:"img","aria-label":e.alt},t)}}}),Ze=(0,pe.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=(0,n.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,n.h)(e.tag,{class:o.value},(0,me.KR)(t.default))}});function Ge(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var et=(0,pe.f)({name:"close-popup",beforeMount(e,{value:t}){const o={depth:Ge(t),handler(t){0!==o.depth&&setTimeout((()=>{const n=N(e);void 0!==n&&Y(n,t,o.depth)}))},handlerKey(e){!0===(0,he.So)(e,13)&&o.handler(e)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=Ge(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}),tt=o(1410),ot=o.n(tt);const nt=(0,f.Z)(v,[["render",s],["__scopeId","data-v-09f15afc"]]);var it=nt;ot()(v,"components",{QDialog:ze,QLayout:Qe,QHeader:We,QBtn:De.Z,QCard:je,QImg:Xe,QCardSection:Ze}),ot()(v,"directives",{ClosePopup:et})}}]);
//# sourceMappingURL=189.ca106c9b.js.map