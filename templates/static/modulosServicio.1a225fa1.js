import{S as r}from"./index.fd997aa7.js";const o="modulos/",s=localStorage,t={headers:{Authorization:`Bearer ${s.getItem("access")}`}},a={get(){return r.get(o,t)},create(e){return r.post(o,e,t)},retrieve(e){return r.get(`${o}${e}/`,t)}};export{a as m};