import{m as _}from"./modulosServicio.d4978c22.js";import{_ as h,o as r,c as n,f as o,t as a,F as p,h as f,g as d,n as v,p as g,e as y}from"./index.b95d0abd.js";const D={created(){this.obtenerDatosModulo(),this.referenciaPeticion=setInterval(()=>{this.obtenerDatosModulo()},this.tiempoPeticion)},beforeUnmount(){this.detenerPeticion()},data(){return{modulo:null,referenciaPeticion:null,tiempoPeticion:5e3}},methods:{detenerPeticion(){clearInterval(this.referenciaPeticion),this.referenciaPeticion=null},async obtenerDatosModulo(){try{const{id:e}=this.$route.params,s=await _.retrieve(e),l=await s.data,{status:i,statusText:t}=s;if(console.log("DATA"),console.log(l),i<200||i>299)throw{status:i,statusText:t};this.modulo=l}catch({status:e,statusText:s}){console.log({mensaje:s||"Ocurrio un error",status:e})}}},computed:{moduloCargado(){return this.modulo!=null},sensoresCargados(){return this.modulo.sensores.length>0},sensores(){return this.modulo.sensores},ultimoValor(){return e=>e.length===0?"N/E":e.pop().valor},estadoSensor(){return e=>e.length===0?"S/E":e.pop().estado?"sensor--activo":"sensor--inactivo"}}},m=e=>(g("data-v-444f8ed0"),e=e(),y(),e),P=m(()=>o("h1",null,"Detalles del modulo",-1)),S={key:0},w={key:0,class:"sensores"},x={class:"sensor__clave"},C=m(()=>o("hr",null,null,-1));function I(e,s,l,i,t,c){return r(),n("div",null,[P,c.moduloCargado?(r(),n("article",S,[o("h3",null,"Modulo: "+a(t.modulo.mac),1),o("p",null,"Zona: "+a(t.modulo.area),1),o("p",null,"Mina: "+a(t.modulo.mina),1),c.sensoresCargados?(r(),n("section",w,[(r(!0),n(p,null,f(t.modulo.sensores,u=>(r(),n("article",{class:v(["sensor",c.estadoSensor(u.datos)]),key:u},[o("p",x,a(u.clave),1),C,o("p",null,"Ultimo valor: "+a(c.ultimoValor(u.datos)),1)],2))),128))])):d("",!0)])):d("",!0)])}const M=h(D,[["render",I],["__scopeId","data-v-444f8ed0"]]);export{M as default};