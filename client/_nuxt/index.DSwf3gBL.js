import{_ as S,a as B,b as I,c as q}from"./Card.60UEvyOe.js";import{g as C,h as N,r as z,o as n,c as r,b as a,w as _,a as o,t as w,i as e,j as g,k as U,d as p,n as L,l as W,m as A,u as D,q as M,F as V,s as O}from"./entry.DRxGBPn2.js";const P={class:"p-4 w-full md:w-6/12 lg:w-4/12"},T={class:"text-xl font-bold"},E={class:"flex flex-col items-between"},H=["title"],Y={class:"flex flex-row flex-wrap items-center text-md mb-2"},G={class:"flex flex-row items-center"},J=o("b",null,"Author:",-1),K=["href"],Q={class:"flex flex-row items-center text-md mb-2"},R=["href"],X={key:1},Z={class:"flex flex-row items-center text-md mb-2"},ee=o("b",null,"Models:",-1),te={class:"flex flex-row items-center text-md"},oe=o("b",null,"Installed:",-1),se={class:"flex flex-grow justify-between"},ne=C({__name:"ListItem",props:{flow:{type:Object,required:!0}},setup(s){const t=s,f=N(),c=z(f.flows_installed.filter(x=>{var i;return x.name===((i=t==null?void 0:t.flow)==null?void 0:i.name)}).length===1);return(x,i)=>{const d=W,h=A,m=S,j=B;return n(),r("div",P,[a(j,{as:"div",class:"hover:shadow-md"},{header:_(()=>{var l;return[o("h2",T,w((l=s.flow)==null?void 0:l.display_name),1)]}),footer:_(()=>{var l;return[o("div",se,[a(m,{text:"Mark flow as favorite",popper:{placement:"top"},"open-delay":500},{default:_(()=>{var u;return[e(f).isFlowInstalled((u=s.flow)==null?void 0:u.name)?(n(),g(h,{key:0,icon:e(f).isFlowFavorite(s.flow.name)?"i-heroicons-star-16-solid":"i-heroicons-star",variant:"outline",color:"yellow",onClick:i[0]||(i[0]=k=>e(f).markFlowFavorite(s.flow))},null,8,["icon"])):U("",!0)]}),_:1}),a(h,{to:`/workflows/${(l=s.flow)==null?void 0:l.name}`,icon:"i-heroicons-eye",class:"flex justify-center dark:bg-slate-500 bg-slate-500 dark:hover:bg-slate-700 hover:bg-slate-700 dark:text-white"},{default:_(()=>[p(" Open ")]),_:1},8,["to"])])]}),default:_(()=>{var l,u,k,b,y,v,$,F;return[o("div",E,[o("p",{class:"text-md text-slate-400 truncate text-ellipsis mb-2",title:(l=s.flow)==null?void 0:l.description},w((u=s.flow)==null?void 0:u.description),9,H),o("p",Y,[o("span",G,[a(d,{name:"i-heroicons-user-16-solid",class:"mr-1"}),J,p("  ")]),o("a",{class:"hover:underline flex flex-row items-center",href:(k=s.flow)==null?void 0:k.homepage,rel:"noopener",target:"_blank"},w((b=s.flow)==null?void 0:b.author),9,K)]),o("p",Q,[a(d,{name:"i-heroicons-document-text",class:"mr-1"}),(y=s.flow)!=null&&y.documentation?(n(),r("a",{key:0,class:"hover:underline",href:(v=s.flow)==null?void 0:v.documentation,rel:"noopener",target:"_blank"},"Documentation",8,R)):(n(),r("span",X,"No documentation"))]),o("p",Z,[a(d,{name:"i-heroicons-arrow-down-on-square-stack",class:"mr-1"}),ee,p("  "+w((F=($=s.flow)==null?void 0:$.models)==null?void 0:F.length),1)]),o("p",te,[oe,p("  "),a(d,{name:e(c)?"i-heroicons-check-badge":"i-heroicons-x-mark",class:"mx-1"},null,8,["name"]),o("span",{class:L({"text-green-500":e(c),"text-red-500":!e(c)})},w(e(c)?"Yes":"No"),3)])])]}),_:1})])}}}),le={key:0,class:"w-full sticky top-1 flex justify-center my-1"},ae={class:"flex flex-wrap justify-center items-center mb-10"},ce={key:2,class:"text-center text-slate-500"},de=C({__name:"index",setup(s){D({title:"Workflows - Visionatrix",meta:[{name:"description",content:"Workflows - Visionatrix"}]});const t=N();return(f,c)=>{const x=I,i=q,d=ne,h=M;return n(),g(h,{class:"lg:h-dvh"},{default:_(()=>[e(t).$state.loading.flows_available||e(t).loading.flows_installed||e(t).$state.loading.tasks_history?(n(),g(x,{key:0})):e(t).flows.length>0?(n(),r(V,{key:1},[e(t).flows.length>e(t).$state.pageSize?(n(),r("div",le,[a(i,{modelValue:e(t).$state.page,"onUpdate:modelValue":c[0]||(c[0]=m=>e(t).$state.page=m),"page-count":e(t).$state.pageSize,total:e(t).flows.length},null,8,["modelValue","page-count","total"])])):U("",!0),o("div",ae,[(n(!0),r(V,null,O(e(t).paginatedFlows,m=>(n(),g(d,{key:m.name,flow:m},null,8,["flow"]))),128))])],64)):(n(),r("p",ce,"No flows available"))]),_:1})}}});export{de as default};
