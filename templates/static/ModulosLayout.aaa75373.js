import{_ as t,m as s,r as a,o as n,c,b as r,g as i}from"./index.fd997aa7.js";const u={beforeMount(){console.log("Iniciando Modulos"),this.estaAutenticado?console.log("Esta autenticado"):(console.log("No esta autenticado"),this.$router.push({name:"login"}))},computed:{...s(["estaAutenticado"])}},d={key:0,class:"container"};function l(e,p,_,m,f,g){const o=a("router-view");return e.estaAutenticado?(n(),c("div",d,[r(o)])):i("",!0)}const $=t(u,[["render",l]]);export{$ as default};
