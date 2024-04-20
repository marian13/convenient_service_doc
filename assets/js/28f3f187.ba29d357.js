"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[9079],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(s),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return s?n.createElement(f,o(o({ref:t},u),{},{components:s})):n.createElement(f,o({ref:t},u))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=s[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},8156:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=s(7462),r=(s(7294),s(3905));const a={slug:"/basics/success",sidebar_position:6,title:"Success"},o=void 0,c={unversionedId:"basics/success",id:"basics/success",title:"Success",description:"What is a success?",source:"@site/docs/basics/success.mdx",sourceDirName:"basics",slug:"/basics/success",permalink:"/basics/success",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/success.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/basics/success",sidebar_position:6,title:"Success"},sidebar:"docs",previous:{title:"Failures",permalink:"/basics/failures"},next:{title:"Result-Ducks",permalink:"/basics/results_are_ducks"}},i={},l=[{value:"What is a success?",id:"what-is-a-success",level:2},{value:"Success data",id:"success-data",level:2}],u={toc:l};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-success"},"What is a success?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Success")," is a kind of result when the service objective is fully satisfied."),(0,r.kt)("p",null,"All errors and failures preconditions are met."),(0,r.kt)("p",null,"Every validation check is passed."),(0,r.kt)("p",null,"There is no obstacle that prohibits achieving the service goal."),(0,r.kt)("p",null,"In general, a service must have one and only one reason to return ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"No sense to hide the truth, sometimes it is really necessary to return multiple success cases from a single service (For example, fake HTTP responses for external testing systems)."),(0,r.kt)("p",{parentName:"admonition"},"As a rule of thumb, if you start to feel that you have such a scenario, always prefer to think about how to create multiple services instead."),(0,r.kt)("p",{parentName:"admonition"},"If not, be ready to strongly argue why your situation is truly exceptional and unavoidable.")),(0,r.kt)("h2",{id:"success-data"},"Success data"),(0,r.kt)("p",null,"Success results may have some data (So-called Boolean Services are often without success data)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Data")," is a hash-like structure with values received by service processing."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class FetchPopularVideos\n  # ...\n  def result\n    # ...\n    # Actual logic to fetch videos.\n    # ...\n    success(\n      own_channel_videos: own_channel_videos,\n      followers_videos: followers_videos,\n      all_videos: own_channel_videos.concat(followers_videos)\n    )\n  end\nend\n")),(0,r.kt)("p",null,"With invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"result = FetchPopularVideos.result\n\nif result.success?\n  # No `data` checks here, since `result.success?` guarantees that `result.data[:all_videos]` are 100% valid.\n  markup = result.data[:all_videos].map { |video| generate_markup(video) }.join\n  # ...\nend\n")))}p.isMDXComponent=!0}}]);