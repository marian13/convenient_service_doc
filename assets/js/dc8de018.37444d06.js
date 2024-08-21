"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[7522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),v=o,m=d["".concat(c,".").concat(v)]||d[v]||p[v]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={slug:"/guides/usage/how_to_create_and_invoke_services",sidebar_position:1,title:"How to create and invoke services?"},i=void 0,s={unversionedId:"guides/usage/how_to_create_and_invoke_services",id:"guides/usage/how_to_create_and_invoke_services",title:"How to create and invoke services?",description:"How to create a service?",source:"@site/docs/guides/usage/how_to_create_and_invoke_services.mdx",sourceDirName:"guides/usage",slug:"/guides/usage/how_to_create_and_invoke_services",permalink:"/guides/usage/how_to_create_and_invoke_services",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/usage/how_to_create_and_invoke_services.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/guides/usage/how_to_create_and_invoke_services",sidebar_position:1,title:"How to create and invoke services?"},sidebar:"docs",previous:{title:"Usage",permalink:"/category/usage"},next:{title:"How to use service results?",permalink:"/guides/usage/how_to_use_results"}},c={},l=[{value:"How to create a service?",id:"how-to-create-a-service",level:2},{value:"How to invoke a service?",id:"how-to-invoke-a-service",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-create-a-service"},"How to create a service?"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.1/Class.html"},"class"),", include some ",(0,o.kt)("a",{parentName:"p",href:"/"},"Convenient Service")," configuration, define the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," method \ud83d\ude42."),(0,o.kt)("p",null,"Here is the minimal example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class Service\n  include ConvenientService::Standard::Config\n\n  def result\n    success\n  end\nend\n")),(0,o.kt)("h2",{id:"how-to-invoke-a-service"},"How to invoke a service?"),(0,o.kt)("p",null,"There a two ways to do it."),(0,o.kt)("p",null,"First one - using the ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.1/doc/syntax/methods_rdoc.html#label-Scope"},"class method")," ",(0,o.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"result = Service.result\n")),(0,o.kt)("p",null,"Second one - using the ",(0,o.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.1/doc/syntax/methods_rdoc.html#label-Scope"},"instance method")," ",(0,o.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"service = Service.new\n\nresult = service.result\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Most of the time you will utilize the class method variant (",(0,o.kt)("inlineCode",{parentName:"p"},"Service.result"),")."),(0,o.kt)("p",{parentName:"admonition"},"But keep in my mind, that allocating a service instance may be useful when it is needed to delay result calculation.")))}p.isMDXComponent=!0}}]);