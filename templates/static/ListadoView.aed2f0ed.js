<<<<<<<< HEAD:templates/static/ListadoView.d3e93b50.js
import{S as c,_ as f,d as l,r as m,o as u,c as _,f as i,F as g,h as E,b as v,a as d,i as b,j as O}from"./index.b95d0abd.js";const F="usuarios/",V=localStorage,h={headers:{Authorization:`Bearer ${V.getItem("access")}`}},x={get(){return c.get(F,h)},post(r){return c.post(F,r,h)}},y={components:{UsuarioForm:l(()=>d(()=>import("./UsuarioForm.7cf26953.js"),["static/UsuarioForm.7cf26953.js","static/UsuarioForm.42e47a35.css","static/index.b95d0abd.js","static/index.64017e9b.css"])),Usuario:l(()=>d(()=>import("./UsuarioComponent.7e8a8347.js"),["static/UsuarioComponent.7e8a8347.js","static/UsuarioComponent.bd0e3059.css","static/index.b95d0abd.js","static/index.64017e9b.css"]))},created(){this.mostrarUsuarios()},data(){return{usuarios:[],mostrarForm:!0,usuarioEditar:null}},methods:{async mostrarUsuarios(){try{const r=await x.get(),o=await r.data,{status:s,statusText:n}=r;if(s<200||s>299)throw{status:s,statusText:n};this.usuarios=o}catch({status:r,statusText:o}){console.log({mensaje:o||"Ocurrio un error",status:r})}},mostrarFormulario(){this.mostrarForm=!this.mostrarForm},editarUsuario(r){this.usuarioEditar=r,this.mostrarFormulario()}}},A=i("h1",null,"Usuarios",-1),L=i("i",{class:"fa-solid fa-plus"},null,-1),S=O(" Crear usuario "),T=[L,S];function j(r,o,s,n,e,a){const U=m("Usuario"),p=m("UsuarioForm");return u(),_("div",null,[A,i("button",{class:"boton-crear blanco-a",onClick:o[0]||(o[0]=(...t)=>a.mostrarFormulario&&a.mostrarFormulario(...t))},T),(u(!0),_(g,null,E(e.usuarios,t=>(u(),b(U,{usuario:t,key:t,onEditarUsuario:a.editarUsuario},null,8,["usuario","onEditarUsuario"]))),128)),v(p,{mostrarForm:e.mostrarForm,usuario:e.usuarioEditar,onOcultarFormulario:a.mostrarFormulario,onActualizarUsuarios:a.mostrarUsuarios},null,8,["mostrarForm","usuario","onOcultarFormulario","onActualizarUsuarios"])])}const k=f(y,[["render",j]]),B=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{B as L,x as u};
========
import{S as c,_ as f,d as l,r as m,o as u,c as _,f as i,F as g,h as E,b as v,a as d,i as b,j as O}from"./index.fd997aa7.js";const F="usuarios/",V=localStorage,h={headers:{Authorization:`Bearer ${V.getItem("access")}`}},x={get(){return c.get(F,h)},post(r){return c.post(F,r,h)}},y={components:{UsuarioForm:l(()=>d(()=>import("./UsuarioForm.7d6b42f6.js"),["static/UsuarioForm.7d6b42f6.js","static/UsuarioForm.42e47a35.css","static/index.fd997aa7.js","static/index.64017e9b.css"])),Usuario:l(()=>d(()=>import("./UsuarioComponent.200b2795.js"),["static/UsuarioComponent.200b2795.js","static/UsuarioComponent.bd0e3059.css","static/index.fd997aa7.js","static/index.64017e9b.css"]))},created(){this.mostrarUsuarios()},data(){return{usuarios:[],mostrarForm:!0,usuarioEditar:null}},methods:{async mostrarUsuarios(){try{const r=await x.get(),o=await r.data,{status:s,statusText:n}=r;if(s<200||s>299)throw{status:s,statusText:n};this.usuarios=o}catch({status:r,statusText:o}){console.log({mensaje:o||"Ocurrio un error",status:r})}},mostrarFormulario(){this.mostrarForm=!this.mostrarForm},editarUsuario(r){this.usuarioEditar=r,this.mostrarFormulario()}}},A=i("h1",null,"Usuarios",-1),L=i("i",{class:"fa-solid fa-plus"},null,-1),S=O(" Crear usuario "),T=[L,S];function j(r,o,s,n,e,a){const U=m("Usuario"),p=m("UsuarioForm");return u(),_("div",null,[A,i("button",{class:"boton-crear blanco-a",onClick:o[0]||(o[0]=(...t)=>a.mostrarFormulario&&a.mostrarFormulario(...t))},T),(u(!0),_(g,null,E(e.usuarios,t=>(u(),b(U,{usuario:t,key:t,onEditarUsuario:a.editarUsuario},null,8,["usuario","onEditarUsuario"]))),128)),v(p,{mostrarForm:e.mostrarForm,usuario:e.usuarioEditar,onOcultarFormulario:a.mostrarFormulario,onActualizarUsuarios:a.mostrarUsuarios},null,8,["mostrarForm","usuario","onOcultarFormulario","onActualizarUsuarios"])])}const k=f(y,[["render",j]]),B=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{B as L,x as u};
>>>>>>>> da4f03d66506e1569a7cc27650d4ee3e843b0d99:templates/static/ListadoView.aed2f0ed.js
