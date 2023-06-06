import{aV as Re,aL as Ge,F as _e,g as L,f as N,w as Le,h as Me,aW as Oe,p as he,x as Ne,m as be,n as xe,v as K,E as u,ar as ge,aX as je,ah as v,aY as ve,af as A,ag as c,aZ as me,D as pe,B as Ve,a_ as ye,ae as Ae,as as I,at as de,aj as Ce,ai as Ke,aE as Qe,al as a,aD as Z,am as qe}from"./index-cb7d7a6d.js";function we(e,...r){if(Array.isArray(e))e.forEach(n=>we(n,...r));else return e(...r)}function Q(e){return e.some(r=>Re(r)?!(r.type===Ge||r.type===_e&&!Q(r.children)):!0)?e:null}function po(e,r){return e&&Q(e())||r()}function yo(e,r,n){return e&&Q(e(r))||n(r)}function ce(e,r){const n=e&&Q(e());return r(n||null)}function Ye(e){return!(e&&Q(e()))}function ue(e){return e.replace(/#|\(|\)|,|\s/g,"_")}const ee=typeof document<"u"&&typeof window<"u";function Xe(e){const r=L(e),n=N(r.value);return Le(r,l=>{n.value=l}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(l){e.set(l)}}}function Ue(){const e=N(!1);return Me(()=>{e.value=!0}),Oe(e)}const fe=xe("n-form-item");function Ze(e,{defaultSize:r="medium",mergedSize:n,mergedDisabled:l}={}){const s=he(fe,null);Ne(fe,null);const g=L(n?()=>n(s):()=>{const{size:h}=e;if(h)return h;if(s){const{mergedSize:j}=s;if(j.value!==void 0)return j.value}return r}),W=L(l?()=>l(s):()=>{const{disabled:h}=e;return h!==void 0?h:s?s.disabled.value:!1}),t=L(()=>{const{status:h}=e;return h||(s==null?void 0:s.mergedValidationStatus.value)});return be(()=>{s&&s.restoreValidation()}),{mergedSizeRef:g,mergedDisabledRef:W,mergedStatusRef:t,nTriggerFormBlur(){s&&s.handleContentBlur()},nTriggerFormChange(){s&&s.handleContentChange()},nTriggerFormFocus(){s&&s.handleContentFocus()},nTriggerFormInput(){s&&s.handleContentInput()}}}const Pe=K({name:"BaseIconSwitchTransition",setup(e,{slots:r}){const n=Ue();return()=>u(ge,{name:"icon-switch-transition",appear:n.value},r)}}),Je=K({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:r}){function n(t){e.width?t.style.maxWidth=`${t.offsetWidth}px`:t.style.maxHeight=`${t.offsetHeight}px`,t.offsetWidth}function l(t){e.width?t.style.maxWidth="0":t.style.maxHeight="0",t.offsetWidth;const{onLeave:h}=e;h&&h()}function s(t){e.width?t.style.maxWidth="":t.style.maxHeight="";const{onAfterLeave:h}=e;h&&h()}function g(t){if(t.style.transition="none",e.width){const h=t.offsetWidth;t.style.maxWidth="0",t.offsetWidth,t.style.transition="",t.style.maxWidth=`${h}px`}else if(e.reverse)t.style.maxHeight=`${t.offsetHeight}px`,t.offsetHeight,t.style.transition="",t.style.maxHeight="0";else{const h=t.offsetHeight;t.style.maxHeight="0",t.offsetWidth,t.style.transition="",t.style.maxHeight=`${h}px`}t.offsetWidth}function W(t){var h;e.width?t.style.maxWidth="":e.reverse||(t.style.maxHeight=""),(h=e.onAfterEnter)===null||h===void 0||h.call(e)}return()=>{const t=e.group?je:ge;return u(t,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:g,onAfterEnter:W,onBeforeLeave:n,onLeave:l,onAfterLeave:s},r)}}}),{cubicBezierEaseInOut:eo}=ve;function se({originalTransform:e="",left:r=0,top:n=0,transition:l=`all .3s ${eo} !important`}={}){return[v("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:r,top:n,opacity:0}),v("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:r,top:n,opacity:1}),v("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:n,transition:l})]}const oo=v([v("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),v("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),v("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),v("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),A("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[se()]),c("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[c("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),c("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[c("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),c("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),c("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[c("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[se({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),ro={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},to=K({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},ro),setup(e){me("-base-loading",oo,pe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:r,strokeWidth:n,stroke:l,scale:s}=this,g=r/s;return u("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},u(Pe,null,{default:()=>this.show?u("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},u("div",{class:`${e}-base-loading__container`},u("div",{class:`${e}-base-loading__container-layer`},u("div",{class:`${e}-base-loading__container-layer-left`},u("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:g,cy:g,r:r-n/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),u("div",{class:`${e}-base-loading__container-layer-patch`},u("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:g,cy:g,r:r-n/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),u("div",{class:`${e}-base-loading__container-layer-right`},u("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*g} ${2*g}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:g,cy:g,r:r-n/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r})))))):u("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),no=A("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),io=K({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){me("-base-wave",no,pe(e,"clsPrefix"));const r=N(null),n=N(!1);let l=null;return be(()=>{l!==null&&window.clearTimeout(l)}),{active:n,selfRef:r,play(){l!==null&&(window.clearTimeout(l),n.value=!1,l=null),Ve(()=>{var s;(s=r.value)===null||s===void 0||s.offsetHeight,n.value=!0,l=window.setTimeout(()=>{n.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:_}=ve;function so({duration:e=".2s",delay:r=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${_},
 max-width ${e} ${_} ${r},
 margin-left ${e} ${_} ${r},
 margin-right ${e} ${_} ${r};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${_} ${r},
 max-width ${e} ${_},
 margin-left ${e} ${_},
 margin-right ${e} ${_};
 `)]}const ao=ee&&"chrome"in window;ee&&navigator.userAgent.includes("Firefox");const lo=ee&&navigator.userAgent.includes("Safari")&&!ao;function O(e){return ye(e,[255,255,255,.16])}function J(e){return ye(e,[0,0,0,.12])}const co=xe("n-button-group"),uo={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},fo=e=>{const{heightTiny:r,heightSmall:n,heightMedium:l,heightLarge:s,borderRadius:g,fontSizeTiny:W,fontSizeSmall:t,fontSizeMedium:h,fontSizeLarge:j,opacityDisabled:oe,textColor2:S,textColor3:re,primaryColorHover:y,primaryColorPressed:k,borderColor:q,primaryColor:F,baseColor:f,infoColor:E,infoColorHover:$,infoColorPressed:i,successColor:b,successColorHover:w,successColorPressed:o,warningColor:H,warningColorHover:T,warningColorPressed:R,errorColor:z,errorColorHover:C,errorColorPressed:G,fontWeight:D,buttonColor2:V,buttonColor2Hover:B,buttonColor2Pressed:x,fontWeightStrong:Y}=e;return Object.assign(Object.assign({},uo),{heightTiny:r,heightSmall:n,heightMedium:l,heightLarge:s,borderRadiusTiny:g,borderRadiusSmall:g,borderRadiusMedium:g,borderRadiusLarge:g,fontSizeTiny:W,fontSizeSmall:t,fontSizeMedium:h,fontSizeLarge:j,opacityDisabled:oe,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:V,colorSecondaryHover:B,colorSecondaryPressed:x,colorTertiary:V,colorTertiaryHover:B,colorTertiaryPressed:x,colorQuaternary:"#0000",colorQuaternaryHover:B,colorQuaternaryPressed:x,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:S,textColorTertiary:re,textColorHover:y,textColorPressed:k,textColorFocus:y,textColorDisabled:S,textColorText:S,textColorTextHover:y,textColorTextPressed:k,textColorTextFocus:y,textColorTextDisabled:S,textColorGhost:S,textColorGhostHover:y,textColorGhostPressed:k,textColorGhostFocus:y,textColorGhostDisabled:S,border:`1px solid ${q}`,borderHover:`1px solid ${y}`,borderPressed:`1px solid ${k}`,borderFocus:`1px solid ${y}`,borderDisabled:`1px solid ${q}`,rippleColor:F,colorPrimary:F,colorHoverPrimary:y,colorPressedPrimary:k,colorFocusPrimary:y,colorDisabledPrimary:F,textColorPrimary:f,textColorHoverPrimary:f,textColorPressedPrimary:f,textColorFocusPrimary:f,textColorDisabledPrimary:f,textColorTextPrimary:F,textColorTextHoverPrimary:y,textColorTextPressedPrimary:k,textColorTextFocusPrimary:y,textColorTextDisabledPrimary:S,textColorGhostPrimary:F,textColorGhostHoverPrimary:y,textColorGhostPressedPrimary:k,textColorGhostFocusPrimary:y,textColorGhostDisabledPrimary:F,borderPrimary:`1px solid ${F}`,borderHoverPrimary:`1px solid ${y}`,borderPressedPrimary:`1px solid ${k}`,borderFocusPrimary:`1px solid ${y}`,borderDisabledPrimary:`1px solid ${F}`,rippleColorPrimary:F,colorInfo:E,colorHoverInfo:$,colorPressedInfo:i,colorFocusInfo:$,colorDisabledInfo:E,textColorInfo:f,textColorHoverInfo:f,textColorPressedInfo:f,textColorFocusInfo:f,textColorDisabledInfo:f,textColorTextInfo:E,textColorTextHoverInfo:$,textColorTextPressedInfo:i,textColorTextFocusInfo:$,textColorTextDisabledInfo:S,textColorGhostInfo:E,textColorGhostHoverInfo:$,textColorGhostPressedInfo:i,textColorGhostFocusInfo:$,textColorGhostDisabledInfo:E,borderInfo:`1px solid ${E}`,borderHoverInfo:`1px solid ${$}`,borderPressedInfo:`1px solid ${i}`,borderFocusInfo:`1px solid ${$}`,borderDisabledInfo:`1px solid ${E}`,rippleColorInfo:E,colorSuccess:b,colorHoverSuccess:w,colorPressedSuccess:o,colorFocusSuccess:w,colorDisabledSuccess:b,textColorSuccess:f,textColorHoverSuccess:f,textColorPressedSuccess:f,textColorFocusSuccess:f,textColorDisabledSuccess:f,textColorTextSuccess:b,textColorTextHoverSuccess:w,textColorTextPressedSuccess:o,textColorTextFocusSuccess:w,textColorTextDisabledSuccess:S,textColorGhostSuccess:b,textColorGhostHoverSuccess:w,textColorGhostPressedSuccess:o,textColorGhostFocusSuccess:w,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${w}`,borderPressedSuccess:`1px solid ${o}`,borderFocusSuccess:`1px solid ${w}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:H,colorHoverWarning:T,colorPressedWarning:R,colorFocusWarning:T,colorDisabledWarning:H,textColorWarning:f,textColorHoverWarning:f,textColorPressedWarning:f,textColorFocusWarning:f,textColorDisabledWarning:f,textColorTextWarning:H,textColorTextHoverWarning:T,textColorTextPressedWarning:R,textColorTextFocusWarning:T,textColorTextDisabledWarning:S,textColorGhostWarning:H,textColorGhostHoverWarning:T,textColorGhostPressedWarning:R,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:H,borderWarning:`1px solid ${H}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${R}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${H}`,rippleColorWarning:H,colorError:z,colorHoverError:C,colorPressedError:G,colorFocusError:C,colorDisabledError:z,textColorError:f,textColorHoverError:f,textColorPressedError:f,textColorFocusError:f,textColorDisabledError:f,textColorTextError:z,textColorTextHoverError:C,textColorTextPressedError:G,textColorTextFocusError:C,textColorTextDisabledError:S,textColorGhostError:z,textColorGhostHoverError:C,textColorGhostPressedError:G,textColorGhostFocusError:C,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${C}`,borderPressedError:`1px solid ${G}`,borderFocusError:`1px solid ${C}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:Y})},ho={name:"Button",common:Ae,self:fo},bo=ho,xo=v([A("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("color",[c("border",{borderColor:"var(--n-border-color)"}),I("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),de("disabled",[v("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),de("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),A("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ee&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[A("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[se({top:"50%",originalTransform:"translateY(-50%)"})]),so()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),go=Object.assign(Object.assign({},Ce.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!lo}}),vo=K({name:"Button",props:go,setup(e){const r=N(null),n=N(null),l=N(!1),s=Xe(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),g=he(co,{}),{mergedSizeRef:W}=Ze({},{defaultSize:"medium",mergedSize:i=>{const{size:b}=e;if(b)return b;const{size:w}=g;if(w)return w;const{mergedSize:o}=i||{};return o?o.value:"medium"}}),t=L(()=>e.focusable&&!e.disabled),h=i=>{var b;t.value||i.preventDefault(),!e.nativeFocusBehavior&&(i.preventDefault(),!e.disabled&&t.value&&((b=r.value)===null||b===void 0||b.focus({preventScroll:!0})))},j=i=>{var b;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&we(w,i),e.text||(b=n.value)===null||b===void 0||b.play()}},oe=i=>{switch(i.key){case"Enter":if(!e.keyboard)return;l.value=!1}},S=i=>{switch(i.key){case"Enter":if(!e.keyboard||e.loading){i.preventDefault();return}l.value=!0}},re=()=>{l.value=!1},{inlineThemeDisabled:y,mergedClsPrefixRef:k,mergedRtlRef:q}=Ke(e),F=Ce("Button","-button",xo,bo,e,k),f=Qe("Button",q,k),E=L(()=>{const i=F.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:w},self:o}=i,{rippleDuration:H,opacityDisabled:T,fontWeight:R,fontWeightStrong:z}=o,C=W.value,{dashed:G,type:D,ghost:V,text:B,color:x,round:Y,circle:te,textColor:M,secondary:$e,tertiary:ae,quaternary:Se,strong:Te}=e,ke={"font-weight":Te?z:R};let m={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const X=D==="tertiary",le=D==="default",d=X?"default":D;if(B){const p=M||x;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p||o[a("textColorText",d)],"--n-text-color-hover":p?O(p):o[a("textColorTextHover",d)],"--n-text-color-pressed":p?J(p):o[a("textColorTextPressed",d)],"--n-text-color-focus":p?O(p):o[a("textColorTextHover",d)],"--n-text-color-disabled":p||o[a("textColorTextDisabled",d)]}}else if(V||G){const p=M||x;m={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":x||o[a("rippleColor",d)],"--n-text-color":p||o[a("textColorGhost",d)],"--n-text-color-hover":p?O(p):o[a("textColorGhostHover",d)],"--n-text-color-pressed":p?J(p):o[a("textColorGhostPressed",d)],"--n-text-color-focus":p?O(p):o[a("textColorGhostHover",d)],"--n-text-color-disabled":p||o[a("textColorGhostDisabled",d)]}}else if($e){const p=le?o.textColor:X?o.textColorTertiary:o[a("color",d)],P=x||p,U=D!=="default"&&D!=="tertiary";m={"--n-color":U?Z(P,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":U?Z(P,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":U?Z(P,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":U?Z(P,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":P,"--n-text-color-hover":P,"--n-text-color-pressed":P,"--n-text-color-focus":P,"--n-text-color-disabled":P}}else if(ae||Se){const p=le?o.textColor:X?o.textColorTertiary:o[a("color",d)],P=x||p;ae?(m["--n-color"]=o.colorTertiary,m["--n-color-hover"]=o.colorTertiaryHover,m["--n-color-pressed"]=o.colorTertiaryPressed,m["--n-color-focus"]=o.colorSecondaryHover,m["--n-color-disabled"]=o.colorTertiary):(m["--n-color"]=o.colorQuaternary,m["--n-color-hover"]=o.colorQuaternaryHover,m["--n-color-pressed"]=o.colorQuaternaryPressed,m["--n-color-focus"]=o.colorQuaternaryHover,m["--n-color-disabled"]=o.colorQuaternary),m["--n-ripple-color"]="#0000",m["--n-text-color"]=P,m["--n-text-color-hover"]=P,m["--n-text-color-pressed"]=P,m["--n-text-color-focus"]=P,m["--n-text-color-disabled"]=P}else m={"--n-color":x||o[a("color",d)],"--n-color-hover":x?O(x):o[a("colorHover",d)],"--n-color-pressed":x?J(x):o[a("colorPressed",d)],"--n-color-focus":x?O(x):o[a("colorFocus",d)],"--n-color-disabled":x||o[a("colorDisabled",d)],"--n-ripple-color":x||o[a("rippleColor",d)],"--n-text-color":M||(x?o.textColorPrimary:X?o.textColorTertiary:o[a("textColor",d)]),"--n-text-color-hover":M||(x?o.textColorHoverPrimary:o[a("textColorHover",d)]),"--n-text-color-pressed":M||(x?o.textColorPressedPrimary:o[a("textColorPressed",d)]),"--n-text-color-focus":M||(x?o.textColorFocusPrimary:o[a("textColorFocus",d)]),"--n-text-color-disabled":M||(x?o.textColorDisabledPrimary:o[a("textColorDisabled",d)])};let ne={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};B?ne={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ne={"--n-border":o[a("border",d)],"--n-border-hover":o[a("borderHover",d)],"--n-border-pressed":o[a("borderPressed",d)],"--n-border-focus":o[a("borderFocus",d)],"--n-border-disabled":o[a("borderDisabled",d)]};const{[a("height",C)]:ie,[a("fontSize",C)]:He,[a("padding",C)]:ze,[a("paddingRound",C)]:Be,[a("iconSize",C)]:Fe,[a("borderRadius",C)]:Ee,[a("iconMargin",C)]:Ie,waveOpacity:We}=o,De={"--n-width":te&&!B?ie:"initial","--n-height":B?"initial":ie,"--n-font-size":He,"--n-padding":te||B?"initial":Y?Be:ze,"--n-icon-size":Fe,"--n-icon-margin":Ie,"--n-border-radius":B?"initial":te||Y?ie:Ee};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":w,"--n-ripple-duration":H,"--n-opacity-disabled":T,"--n-wave-opacity":We},ke),m),ne),De)}),$=y?qe("button",L(()=>{let i="";const{dashed:b,type:w,ghost:o,text:H,color:T,round:R,circle:z,textColor:C,secondary:G,tertiary:D,quaternary:V,strong:B}=e;b&&(i+="a"),o&&(i+="b"),H&&(i+="c"),R&&(i+="d"),z&&(i+="e"),G&&(i+="f"),D&&(i+="g"),V&&(i+="h"),B&&(i+="i"),T&&(i+="j"+ue(T)),C&&(i+="k"+ue(C));const{value:x}=W;return i+="l"+x[0],i+="m"+w[0],i}),E,e):void 0;return{selfElRef:r,waveElRef:n,mergedClsPrefix:k,mergedFocusable:t,mergedSize:W,showBorder:s,enterPressed:l,rtlEnabled:f,handleMousedown:h,handleKeydown:S,handleBlur:re,handleKeyup:oe,handleClick:j,customColorCssVars:L(()=>{const{color:i}=e;if(!i)return null;const b=O(i);return{"--n-border-color":i,"--n-border-color-hover":b,"--n-border-color-pressed":J(i),"--n-border-color-focus":b,"--n-border-color-disabled":i}}),cssVars:y?void 0:E,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){const{mergedClsPrefix:e,tag:r,onRender:n}=this;n==null||n();const l=ce(this.$slots.default,s=>s&&u("span",{class:`${e}-button__content`},s));return u(r,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,u(Je,{width:!0},{default:()=>ce(this.$slots.icon,s=>(this.loading||this.renderIcon||s)&&u("span",{class:`${e}-button__icon`,style:{margin:Ye(this.$slots.default)?"0":""}},u(Pe,null,{default:()=>this.loading?u(to,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():s)})))}),this.iconPlacement==="left"&&l,this.text?null:u(io,{ref:"waveElRef",clsPrefix:e}),this.showBorder?u("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Co=vo;export{Co as N,to as a,po as b,Ye as c,we as d,ue as e,Ze as f,ee as g,se as h,Ue as i,Pe as j,yo as k,lo as l,bo as m,ce as r,Xe as u};
