import{m as f}from"./modulosService-3394e504.js";import{u as _}from"./ModulosView-4de5c3d6.js";import{u as h}from"./use-notification-bc2cf5c8.js";import{g as v,o as d,c as x,i as r,b as l,u as o,b0 as y,j as t,a as b,aS as k,b1 as g,k as C}from"./index-cb7d7a6d.js";import{N as S,a as N}from"./Modal-85031b3c.js";import{b as i}from"./Input-d6f1a23b.js";import{N as u}from"./Button-bfeba12d.js";import"./service-34bee0cf.js";import"./fade-in-scale-up.cssr-0582f448.js";import"./Grid-73ef9cd7.js";const M=t("h2",{class:"uppercase font-bold text-xl"}," Formulario de modulos ",-1),w=t("hr",{class:"my-3"},null,-1),E={class:"mb-3"},U=t("p",{class:"uppercase font-bold"},"mac",-1),j={class:"mb-3"},A=t("p",{class:"uppercase font-bold"},"mina",-1),B={class:"mb-3"},O=t("p",{class:"uppercase font-bold"},"area",-1),D={key:0,class:"flex justify-between items-center mb-3"},V=t("p",{class:"text-2xl"},"-",-1),H=t("p",{class:"text-2xl"},"+",-1),L={class:"flex justify-end"},W={__name:"FormularioComponent",setup(R){const e=_(),c=h(),m=async()=>{if(!e.camposLlenos){c.error({duration:2500,content:"Campos vacios",meta:"Debe de llenar todos los campos para crear un usuario",keepAliveOnHover:!0});return}try{const n=(await f.create(e.modulo)).data;console.log("RESPUESTA DE CREAR MODULO"),console.log(n),e.actualizarModulos(),e.ocultarModalModulo(),c.success({duration:2500,content:"registro exitoso",meta:"Se ha creado el modulo de forma exitosa",keepAliveOnHover:!0})}catch(n){console.log(n),c.error({duration:2500,content:"ocurrio un error",meta:"El registro no se ha podido crear",keepAliveOnHover:!0})}},p=v(()=>({width:"30%"}));return(n,s)=>(d(),x(o(N),{show:o(e).modalModulo,"onUpdate:show":s[3]||(s[3]=a=>o(e).modalModulo=a)},{default:r(()=>[l(o(S),{style:y(o(p))},{default:r(()=>[M,w,t("section",null,[t("article",E,[U,l(o(i),{value:o(e).modulo.mac,"onUpdate:value":s[0]||(s[0]=a=>o(e).modulo.mac=a)},null,8,["value"])]),t("article",j,[A,l(o(i),{value:o(e).modulo.mina,"onUpdate:value":s[1]||(s[1]=a=>o(e).modulo.mina=a)},null,8,["value"])]),t("article",B,[O,l(o(i),{value:o(e).modulo.area,"onUpdate:value":s[2]||(s[2]=a=>o(e).modulo.area=a)},null,8,["value"])]),o(e).camposLlenos?(d(),b("article",D,[l(o(u),{type:"info",ghost:!1,circle:!0,class:"flex justify-center items-center",onClick:o(e).eliminarSensor},{default:r(()=>[V]),_:1},8,["onClick"]),t("p",null,k(o(e).numeroSensores),1),l(o(u),{type:"info",ghost:!1,circle:!0,class:"flex justify-center items-center",onClick:o(e).agregarSensor},{default:r(()=>[H]),_:1},8,["onClick"])])):g("",!0)]),t("footer",L,[l(o(u),{type:"info",ghost:!1,onClick:m},{default:r(()=>[C(" Crear modulo ")]),_:1})])]),_:1},8,["style"])]),_:1},8,["show"]))}};export{W as default};
