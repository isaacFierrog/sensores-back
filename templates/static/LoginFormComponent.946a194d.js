import{_ as p,l as u,m as d,o as m,c as _,f as s,q as c,v as n,s as h,p as f,e as w}from"./index.4c77faae.js";const l=localStorage,g={data(){return{correo:"",password:""}},methods:{guardarTokens({access:e,refresh:o}){l.setItem("access",e),l.setItem("refresh",o)},reiniciarCampos(){this.correo="",this.password=""},autenticarUsuario(){if(this.campoCorreoVacio||this.campoPasswordVacio){alert("Debes de llenar todos los campos para ingresar");return}this.autenticar({correo:this.correo,password:this.password}),this.reiniciarCampos(),this.redireccionar()},redireccionar(){this.estaAutenticado&&(console.log("Hola"),this.$router.push({name:"usuarios-listar"}))},...u({autenticar:"autenticarUsuario"})},computed:{campoCorreoVacio(){return this.correo.length===0},campoPasswordVacio(){return this.password.length===0},...d(["estaAutenticado"])}},r=e=>(f("data-v-5a965fe1"),e=e(),w(),e),v={class:"layout-login"},b=r(()=>s("h2",{class:"titulo-vista blanco-a"},"Inicio de sesion",-1)),C=r(()=>s("p",{class:"blanco-a form__label"},"CORREO",-1)),I=r(()=>s("p",{class:"blanco-a form__label"},"CONTRASE\xD1A",-1)),x=r(()=>s("input",{type:"submit",value:"Ingresar",class:"form__submit blanco-a txt-upper"},null,-1));function V(e,o,y,S,t,i){return m(),_("div",v,[b,s("form",{onSubmit:o[2]||(o[2]=h((...a)=>i.autenticarUsuario&&i.autenticarUsuario(...a),["prevent"])),class:"form"},[C,c(s("input",{type:"text",placeholder:"Correo de usuario","onUpdate:modelValue":o[0]||(o[0]=a=>t.correo=a),class:"form__input"},null,512),[[n,t.correo]]),I,c(s("input",{type:"password",placeholder:"Password de usuario","onUpdate:modelValue":o[1]||(o[1]=a=>t.password=a),class:"form__input"},null,512),[[n,t.password]]),x],32)])}const A=p(g,[["render",V],["__scopeId","data-v-5a965fe1"]]);export{A as default};