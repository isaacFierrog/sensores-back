import"./service-eaac5c30.js";import{u as x}from"./UsuariosView-30479c7d.js";import{l as a,o as U,c as g,b as s,t as i,u as l}from"./index-c6405e8c.js";import"./Grid-a545350e.js";const C={class:"p-4 bg-slate-700 rounded-sm"},v={class:"text-3xl uppercase font-bold text-slate-100"},y={class:"mt-3 mb-5"},k={class:"text-slate-400"},j=s("i",{class:"fa-solid fa-industry"},null,-1),w={class:"ml-2 uppercase"},D={class:"text-slate-400"},M=s("i",{class:"fa-solid fa-toolbox"},null,-1),S={class:"ml-2 uppercase"},B={class:"text-slate-400"},$=s("i",{class:"fa-solid fa-circle-user"},null,-1),E={class:"ml-2 uppercase"},N=s("i",{class:"fa-solid fa-trash"},null,-1),O=s("p",null,"eliminar",-1),R=[N,O],q=s("i",{class:"fa-solid fa-pencil"},null,-1),A=s("p",null,"editar",-1),L=[q,A],V=s("i",{class:"fa-solid fa-trash"},null,-1),z=s("p",null,"ver",-1),F=[V,z],K={__name:"UsuarioComponent",props:{usuario:{type:Object,required:!0}},setup(n){const e=n,r=x(),c=[{rol:1,nombre:"administrador"},{rol:2,nombre:"supervisor"},{rol:1,nombre:"operador"}],u=()=>{r.mostrarDatosUsuario(),r.obtenerUsuario(e.usuario.id),r.mostrarModalUsuario()},d=()=>{r.mostrarModalConfirmar(),r.obtenerUsuario(e.usuario.id)},p=()=>{r.editarDatosUsuario(),r.obtenerUsuario(e.usuario.id),r.mostrarModalUsuario()},_=a(()=>{const o=`${e.usuario.nombre} ${e.usuario.apellido}`.toUpperCase();return o.length>=17?`${o.slice(0,17)} . . .`:o}),m=a(()=>{var o,t;return((t=(o=e.usuario.mina)==null?void 0:o.toUpperCase)==null?void 0:t.call(o))??"sin asignar"}),f=a(()=>{var o,t;return((t=(o=e.usuario.area)==null?void 0:o.toUpperCase)==null?void 0:t.call(o))??"sin asignar"}),h=a(()=>e.usuario.rol?c.find(({rol:o})=>o===e.usuario.rol).nombre:"");return(o,t)=>(U(),g("article",C,[s("h2",v,i(l(_)),1),s("section",y,[s("p",k,[j,s("span",w," mina: "+i(l(m)),1)]),s("p",D,[M,s("span",S," area: "+i(l(f)),1)]),s("p",B,[$,s("span",E," rol: "+i(l(h)),1)])]),s("footer",{class:"flex justify-between items-center bg-slate-300 rounded-xl",onClick:t[0]||(t[0]=(...b)=>o.hola&&o.hola(...b))},[s("article",{class:"flex flex-col justify-center items-center p-4 flex-grow hover:cursor-pointer hover:bg-red-400/30",onClick:d},R),s("article",{class:"flex flex-col justify-center items-center p-4 flex-grow hover:cursor-pointer hover:bg-amber-400/30",onClick:p},L),s("article",{class:"flex flex-col justify-center items-center p-4 flex-grow hover:cursor-pointer hover:bg-cyan-400/30",onClick:u},F)])]))}};export{K as default};
