<<<<<<<< HEAD:templates/static/ListadoView.53192323.js
import{_ as h,d,r as m,o as a,c,f as n,b as F,F as M,h as v,g as k,a as i,i as V,p as b,e as x,j as y}from"./index.b95d0abd.js";import{m as C}from"./modulosServicio.d4978c22.js";const g={components:{ModuloForm:d(()=>i(()=>import("./ModuloForm.410dbf3d.js"),["static/ModuloForm.410dbf3d.js","static/ModuloForm.09339349.css","static/modulosServicio.d4978c22.js","static/index.b95d0abd.js","static/index.64017e9b.css"])),Modulo:d(()=>i(()=>import("./ModuloComponent.1f9e3eb3.js"),["static/ModuloComponent.1f9e3eb3.js","static/ModuloComponent.07c151e5.css","static/index.b95d0abd.js","static/index.64017e9b.css"]))},created(){this.obtenerModulos()},data(){return{modulos:[],mostrarForm:!0}},methods:{verDetallesModulo(o){console.log(`Este es el modulo: ${o}`),this.$router.push({name:"modulos-detalle",params:{id:o}})},async obtenerModulos(){try{const o=await C.get(),e=await o.data,{status:s,statusText:u}=o;if(s<200||s>299)throw{status:s,statusText:u};this.modulos=e}catch({status:o,statusText:e}){console.log({mensaje:e||"Ocurrio un error",status:o})}},refrescarModulos(){this.obtenerModulos()},mostrarFormulario(){this.mostrarForm=!this.mostrarForm}}},_=o=>(b("data-v-1faaca66"),o=o(),x(),o),w=_(()=>n("h1",{class:"titulo"},"Modulos",-1)),E=_(()=>n("i",{class:"fa-solid fa-plus"},null,-1)),I=y(" Crear modulo "),L=[E,I],O={key:0,class:"modulos"};function T(o,e,s,u,l,r){const p=m("ModuloForm"),f=m("Modulo");return a(),c("div",null,[w,n("button",{class:"boton-crear blanco-a",onClick:e[0]||(e[0]=(...t)=>r.mostrarFormulario&&r.mostrarFormulario(...t))},L),F(p,{mostrarForm:l.mostrarForm,onOcultarFormulario:r.mostrarFormulario,onRefrescarModulos:r.refrescarModulos},null,8,["mostrarForm","onOcultarFormulario","onRefrescarModulos"]),l.modulos?(a(),c("section",O,[(a(!0),c(M,null,v(l.modulos,t=>(a(),V(f,{key:t.id,modulo:t,onClick:B=>r.verDetallesModulo(t.id)},null,8,["modulo","onClick"]))),128))])):k("",!0)])}const R=h(g,[["render",T],["__scopeId","data-v-1faaca66"]]);export{R as default};
========
import{_ as h,d,r as m,o as a,c,f as n,b as F,F as M,h as v,g as k,a as i,i as V,p as b,e as x,j as y}from"./index.fd997aa7.js";import{m as C}from"./modulosServicio.1a225fa1.js";const g={components:{ModuloForm:d(()=>i(()=>import("./ModuloForm.96ebc2e5.js"),["static/ModuloForm.96ebc2e5.js","static/ModuloForm.ae320f07.css","static/modulosServicio.1a225fa1.js","static/index.fd997aa7.js","static/index.64017e9b.css"])),Modulo:d(()=>i(()=>import("./ModuloComponent.90f902fb.js"),["static/ModuloComponent.90f902fb.js","static/ModuloComponent.07c151e5.css","static/index.fd997aa7.js","static/index.64017e9b.css"]))},created(){this.obtenerModulos()},data(){return{modulos:[],mostrarForm:!0}},methods:{verDetallesModulo(o){console.log(`Este es el modulo: ${o}`),this.$router.push({name:"modulos-detalle",params:{id:o}})},async obtenerModulos(){try{const o=await C.get(),e=await o.data,{status:s,statusText:u}=o;if(s<200||s>299)throw{status:s,statusText:u};this.modulos=e}catch({status:o,statusText:e}){console.log({mensaje:e||"Ocurrio un error",status:o})}},refrescarModulos(){this.obtenerModulos()},mostrarFormulario(){this.mostrarForm=!this.mostrarForm}}},_=o=>(b("data-v-1faaca66"),o=o(),x(),o),w=_(()=>n("h1",{class:"titulo"},"Modulos",-1)),E=_(()=>n("i",{class:"fa-solid fa-plus"},null,-1)),I=y(" Crear modulo "),L=[E,I],O={key:0,class:"modulos"};function T(o,e,s,u,l,r){const p=m("ModuloForm"),f=m("Modulo");return a(),c("div",null,[w,n("button",{class:"boton-crear blanco-a",onClick:e[0]||(e[0]=(...t)=>r.mostrarFormulario&&r.mostrarFormulario(...t))},L),F(p,{mostrarForm:l.mostrarForm,onOcultarFormulario:r.mostrarFormulario,onRefrescarModulos:r.refrescarModulos},null,8,["mostrarForm","onOcultarFormulario","onRefrescarModulos"]),l.modulos?(a(),c("section",O,[(a(!0),c(M,null,v(l.modulos,t=>(a(),V(f,{key:t.id,modulo:t,onClick:B=>r.verDetallesModulo(t.id)},null,8,["modulo","onClick"]))),128))])):k("",!0)])}const R=h(g,[["render",T],["__scopeId","data-v-1faaca66"]]);export{R as default};
>>>>>>>> da4f03d66506e1569a7cc27650d4ee3e843b0d99:templates/static/ListadoView.f210881b.js
