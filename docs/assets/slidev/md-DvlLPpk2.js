import{d as u,A as c,f,o as i,g as r,j as p,k as m,b as _,w as g,v as h,x as k,D as a}from"../modules/vue-DfsxyRHQ.js";import{u as d,f as v}from"./context-BJZbi0SO.js";import"../index-B7ZfpJ8s.js";import"../modules/shiki-BNVJBgo1.js";function l(e){return e.startsWith("/")?"/decompiled-lightning-frontend-sql-slides/"+e.slice(1):e}function b(e,o=!1){const t=e&&["#","rgb","hsl"].some(n=>e.indexOf(n)===0),s={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?o?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const x={class:"my-auto w-full"},y=u({__name:"cover",props:{background:{default:""}},setup(e){d();const o=e,t=c(()=>b(o.background,!0));return(s,n)=>(i(),f("div",{class:"slidev-layout cover",style:m(t.value)},[r("div",x,[p(s.$slots,"default")])],4))}}),C={__name:"slides.md__slidev_1",setup(e){const{$clicksContext:o,$frontmatter:t}=d();return o.setup(),(s,n)=>(i(),_(y,h(k(a(v)(a(t),0))),{default:g(()=>n[0]||(n[0]=[r("h1",null,"SQL databases in your browser",-1),r("p",null," ",-1),r("p",null,"Erik Söhnel (github.com/hoeck)",-1)])),_:1},16))}};export{C as default};
