import{aT as _,g as o,o as h,a as x,j as s,aS as l,u as t}from"./index-cb7d7a6d.js";const b={class:"p-4 bg-slate-200 rounded-xl"},g={class:"text-3xl uppercase font-bold"},y=s("hr",{class:"border-2 border-y-zinc-700"},null,-1),v={class:"my-5"},j=s("i",{class:"fa-solid fa-industry"},null,-1),C={class:"ml-2 uppercase"},w=s("i",{class:"fa-solid fa-toolbox"},null,-1),k={class:"ml-2 uppercase"},M=s("i",{class:"fa-solid fa-wifi"},null,-1),B={class:"ml-1 uppercase"},S=s("article",{class:"flex flex-col justify-center items-center p-4 flex-grow hover:cursor-pointer hover:bg-red-400/30"},[s("i",{class:"fa-solid fa-trash"}),s("p",null,"eliminar")],-1),U=s("article",{class:"flex flex-col justify-center items-center p-4 flex-grow hover:cursor-pointer hover:bg-amber-400/30"},[s("i",{class:"fa-solid fa-pencil"}),s("p",null,"editar")],-1),D=s("i",{class:"fa-solid fa-trash"},null,-1),q=s("p",null,"ver",-1),z=[D,q],E={__name:"ModuloComponent",props:{modulo:{type:Object,required:!0}},setup(n){const e=n,c=_(),i=()=>{c.push({name:"modulos-detalle",params:{id:e.modulo.id}})},d=o(()=>e.modulo.mac.toUpperCase()),u=o(()=>e.modulo.mina.toUpperCase()),p=o(()=>e.modulo.area.toUpperCase()),m=o(()=>e.modulo.sensores.length);return(a,r)=>(h(),x("article",b,[s("h2",g,l(t(d)),1),y,s("section",v,[s("p",null,[j,s("span",C," mina: "+l(t(u)),1)]),s("p",null,[w,s("span",k," area: "+l(t(p)),1)]),s("p",null,[M,s("span",B," sensores: "+l(t(m)),1)])]),s("footer",{class:"flex justify-between items-center bg-slate-300 rounded-xl",onClick:r[0]||(r[0]=(...f)=>a.hola&&a.hola(...f))},[S,U,s("article",{class:"flex flex-col justify-center items-center p-4 flex-grow hover:cursor-pointer hover:bg-cyan-400/30",onClick:i},z)])]))}};export{E as default};