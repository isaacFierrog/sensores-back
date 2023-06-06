import{u as ye,a as Q}from"./UsuariosView-0c055e3c.js";import{h as Z,f as xe,c as j,r as _,j as ke,a as _e,d as T,N as ee}from"./Button-bfeba12d.js";import{ae as Se,aD as Ce,af as oe,ag as a,ah as I,as as b,at as te,v as Be,ai as Re,aj as ae,f as K,D as $e,g as F,al as S,J as X,I as p,am as Ve,E as c,o as $,c as Y,i as V,b as v,u as o,b0 as Ue,j as n,a as J,k as M,b1 as q,F as ze}from"./index-cb7d7a6d.js";import{a as De,b as C}from"./Input-d6f1a23b.js";import{u as Fe}from"./use-notification-bc2cf5c8.js";import{N as Ne,a as He}from"./Modal-85031b3c.js";import"./service-34bee0cf.js";import"./Grid-73ef9cd7.js";import"./fade-in-scale-up.cssr-0582f448.js";const We={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Me=t=>{const{primaryColor:e,opacityDisabled:d,borderRadius:h,textColor3:f}=t,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},We),{iconColor:f,textColor:"white",loadingColor:e,opacityDisabled:d,railColor:m,railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:h,railBorderRadiusMedium:h,railBorderRadiusLarge:h,buttonBorderRadiusSmall:h,buttonBorderRadiusMedium:h,buttonBorderRadiusLarge:h,boxShadowFocus:`0 0 0 2px ${Ce(e,{alpha:.2})}`})},Ee={name:"Switch",common:Se,self:Me},Oe=Ee,Pe=oe("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[a("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),a("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),a("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),oe("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Z({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),a("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),a("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),a("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),I("&:focus",[a("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),b("round",[a("rail","border-radius: calc(var(--n-rail-height) / 2);",[a("button","border-radius: calc(var(--n-button-height) / 2);")])]),te("disabled",[te("icon",[b("rubber-band",[b("pressed",[a("rail",[a("button","max-width: var(--n-button-width-pressed);")])]),a("rail",[I("&:active",[a("button","max-width: var(--n-button-width-pressed);")])]),b("active",[b("pressed",[a("rail",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),a("rail",[I("&:active",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),b("active",[a("rail",[a("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),a("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[a("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Z()]),a("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),b("active",[a("rail","background-color: var(--n-rail-color-active);")]),b("loading",[a("rail",`
 cursor: wait;
 `)]),b("disabled",[a("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ae=Object.assign(Object.assign({},ae.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let D;const Le=Be({name:"Switch",props:Ae,setup(t){D===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?D=CSS.supports("width","max(1px)"):D=!1:D=!0);const{mergedClsPrefixRef:e,inlineThemeDisabled:d}=Re(t),h=ae("Switch","-switch",Pe,Oe,t,e),f=xe(t),{mergedSizeRef:m,mergedDisabledRef:u}=f,r=K(t.defaultValue),s=$e(t,"value"),k=De(s,r),U=F(()=>k.value===t.checkedValue),B=K(!1),l=K(!1),g=F(()=>{const{railStyle:i}=t;if(i)return i({focused:l.value,checked:U.value})});function w(i){const{"onUpdate:value":N,onChange:H,onUpdateValue:W}=t,{nTriggerFormInput:E,nTriggerFormChange:O}=f;N&&T(N,i),W&&T(W,i),H&&T(H,i),r.value=i,E(),O()}function re(){const{nTriggerFormFocus:i}=f;i()}function ie(){const{nTriggerFormBlur:i}=f;i()}function se(){t.loading||u.value||(k.value!==t.checkedValue?w(t.checkedValue):w(t.uncheckedValue))}function ne(){l.value=!0,re()}function le(){l.value=!1,ie(),B.value=!1}function de(i){t.loading||u.value||i.key===" "&&(k.value!==t.checkedValue?w(t.checkedValue):w(t.uncheckedValue),B.value=!1)}function ue(i){t.loading||u.value||i.key===" "&&(i.preventDefault(),B.value=!0)}const G=F(()=>{const{value:i}=m,{self:{opacityDisabled:N,railColor:H,railColorActive:W,buttonBoxShadow:E,buttonColor:O,boxShadowFocus:ce,loadingColor:he,textColor:fe,iconColor:be,[S("buttonHeight",i)]:y,[S("buttonWidth",i)]:pe,[S("buttonWidthPressed",i)]:ve,[S("railHeight",i)]:x,[S("railWidth",i)]:z,[S("railBorderRadius",i)]:me,[S("buttonBorderRadius",i)]:ge},common:{cubicBezierEaseInOut:we}}=h.value;let P,A,L;return D?(P=`calc((${x} - ${y}) / 2)`,A=`max(${x}, ${y})`,L=`max(${z}, calc(${z} + ${y} - ${x}))`):(P=X((p(x)-p(y))/2),A=X(Math.max(p(x),p(y))),L=p(x)>p(y)?z:X(p(z)+p(y)-p(x))),{"--n-bezier":we,"--n-button-border-radius":ge,"--n-button-box-shadow":E,"--n-button-color":O,"--n-button-width":pe,"--n-button-width-pressed":ve,"--n-button-height":y,"--n-height":A,"--n-offset":P,"--n-opacity-disabled":N,"--n-rail-border-radius":me,"--n-rail-color":H,"--n-rail-color-active":W,"--n-rail-height":x,"--n-rail-width":z,"--n-width":L,"--n-box-shadow-focus":ce,"--n-loading-color":he,"--n-text-color":fe,"--n-icon-color":be}}),R=d?Ve("switch",F(()=>m.value[0]),G,t):void 0;return{handleClick:se,handleBlur:le,handleFocus:ne,handleKeyup:de,handleKeydown:ue,mergedRailStyle:g,pressed:B,mergedClsPrefix:e,mergedValue:k,checked:U,mergedDisabled:u,cssVars:d?void 0:G,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:e,checked:d,mergedRailStyle:h,onRender:f,$slots:m}=this;f==null||f();const{checked:u,unchecked:r,icon:s,"checked-icon":k,"unchecked-icon":U}=m,B=!(j(s)&&j(k)&&j(U));return c("div",{role:"switch","aria-checked":d,class:[`${t}-switch`,this.themeClass,B&&`${t}-switch--icon`,d&&`${t}-switch--active`,e&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:h},_(u,l=>_(r,g=>l||g?c("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},c("div",{class:`${t}-switch__rail-placeholder`},c("div",{class:`${t}-switch__button-placeholder`}),l),c("div",{class:`${t}-switch__rail-placeholder`},c("div",{class:`${t}-switch__button-placeholder`}),g)):null)),c("div",{class:`${t}-switch__button`},_(s,l=>_(k,g=>_(U,w=>c(ke,null,{default:()=>this.loading?c(_e,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(g||l)?c("div",{class:`${t}-switch__button-icon`,key:g?"checked-icon":"icon"},g||l):!this.checked&&(w||l)?c("div",{class:`${t}-switch__button-icon`,key:w?"unchecked-icon":"icon"},w||l):null})))),_(u,l=>l&&c("div",{key:"checked",class:`${t}-switch__checked`},l)),_(r,l=>l&&c("div",{key:"unchecked",class:`${t}-switch__unchecked`},l)))))}}),je=n("h2",{class:"uppercase font-bold text-xl"}," Formulario de usuarios ",-1),Te=n("hr",{class:"my-3"},null,-1),Ie={class:"mb-3"},Ke=n("p",{class:"uppercase font-bold"},"correo",-1),Xe={class:"mb-3"},Ye=n("p",{class:"uppercase font-bold"},"nombre",-1),Je={class:"mb-3"},qe=n("p",{class:"uppercase font-bold"},"apellido",-1),Ge={class:"mb-3"},Qe=n("p",{class:"uppercase font-bold"},"mina",-1),Ze={class:"mb-3"},eo=n("p",{class:"uppercase font-bold"},"area",-1),oo={key:0,class:"flex items-center justify-end my-3"},to=n("p",{class:"mr-3 uppercase"},"Editar contraseña",-1),ao={class:"mb-3"},ro=n("p",{class:"uppercase font-bold"},"contraseña",-1),io={class:"mb-3"},so=n("p",{class:"uppercase font-bold"},"confirmar contraseña",-1),no={key:2,class:"flex justify-end"},go={__name:"FormularioComponent",setup(t){const e=ye(),d=Fe(),h=async()=>{if(e.passwordEditar){if(!e.camposLlenos){d.error({duration:2500,content:"Campos vacios",meta:"Debe de llenar todos los campos para crear un usuario",keepAliveOnHover:!0});return}if(!e.passwordCorrecto){d.error({duration:2500,content:"Password incorrecto",meta:"El password de verificacion no coincide",keepAliveOnHover:!0});return}}else delete e.usuario.password;try{const u=await Q.update(e.usuarioId,e.usuario);e.usuario.password,e.actualizarUsuarios(),e.ocultarModalUsuario(),d.success({duration:2500,content:"registro exitoso",meta:"Se ha editado al usuario de forma exitosa",keepAliveOnHover:!0})}catch(u){console.log(u),d.error({duration:2500,content:"ocurrio un error",meta:"El registro no se ha podido crear",keepAliveOnHover:!0})}},f=async()=>{if(!e.camposLlenos){d.error({duration:2500,content:"Campos vacios",meta:"Debe de llenar todos los campos para crear un usuario",keepAliveOnHover:!0});return}if(!e.passwordCorrecto){d.error({duration:2500,content:"Password incorrecto",meta:"El password de verificacion no coincide",keepAliveOnHover:!0});return}try{const u=await Q.create(e.usuario);e.actualizarUsuarios(),e.ocultarModalUsuario(),d.success({duration:2500,content:"registro exitoso",meta:"Se ha creado al usuario de forma exitosa",keepAliveOnHover:!0})}catch(u){console.log(u),d.error({duration:2500,content:"ocurrio un error",meta:"El registro no se ha podido crear",keepAliveOnHover:!0})}},m=F(()=>({width:"33.3%"}));return(u,r)=>($(),Y(o(He),{show:o(e).modalUsuario,"onUpdate:show":r[8]||(r[8]=s=>o(e).modalUsuario=s)},{default:V(()=>[v(o(Ne),{style:Ue(o(m))},{default:V(()=>[je,Te,n("section",null,[n("article",Ie,[Ke,v(o(C),{readonly:o(e).mostrarDatos,value:o(e).usuario.correo,"onUpdate:value":r[0]||(r[0]=s=>o(e).usuario.correo=s)},null,8,["readonly","value"])]),n("article",Xe,[Ye,v(o(C),{readonly:o(e).mostrarDatos,value:o(e).usuario.nombre,"onUpdate:value":r[1]||(r[1]=s=>o(e).usuario.nombre=s)},null,8,["readonly","value"])]),n("article",Je,[qe,v(o(C),{readonly:o(e).mostrarDatos,value:o(e).usuario.apellido,"onUpdate:value":r[2]||(r[2]=s=>o(e).usuario.apellido=s)},null,8,["readonly","value"])]),n("article",Ge,[Qe,v(o(C),{readonly:o(e).mostrarDatos,value:o(e).usuario.mina,"onUpdate:value":r[3]||(r[3]=s=>o(e).usuario.mina=s)},null,8,["readonly","value"])]),n("article",Ze,[eo,v(o(C),{readonly:o(e).mostrarDatos,value:o(e).usuario.area,"onUpdate:value":r[4]||(r[4]=s=>o(e).usuario.area=s)},null,8,["readonly","value"])]),o(e).editarDatos?($(),J("section",oo,[to,v(o(Le),{value:o(e).passwordEditar,"onUpdate:value":r[5]||(r[5]=s=>o(e).passwordEditar=s)},{checked:V(()=>[M(" SI ")]),unchecked:V(()=>[M(" NO ")]),_:1},8,["value"])])):q("",!0),o(e).crearDatos||o(e).editarDatos&&o(e).passwordEditar?($(),J(ze,{key:1},[n("article",ao,[ro,v(o(C),{type:"password",value:o(e).usuario.password,"onUpdate:value":r[6]||(r[6]=s=>o(e).usuario.password=s)},null,8,["value"])]),n("article",io,[so,v(o(C),{type:"password",value:o(e).verificacionPassword,"onUpdate:value":r[7]||(r[7]=s=>o(e).verificacionPassword=s)},null,8,["value"])])],64)):q("",!0),o(e).editarDatos||o(e).crearDatos?($(),J("footer",no,[o(e).editarDatos?($(),Y(o(ee),{key:0,onClick:h},{default:V(()=>[M(" Editar usuario ")]),_:1})):($(),Y(o(ee),{key:1,onClick:f},{default:V(()=>[M(" Crear usuario ")]),_:1}))])):q("",!0)])]),_:1},8,["style"])]),_:1},8,["show"]))}};export{go as default};
