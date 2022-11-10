"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[9079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),l=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?s.createElement(v,o(o({ref:t},u),{},{components:n})):s.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(7462),r=(n(7294),n(3905));const a={slug:"/basics/success",sidebar_position:6,title:"Success"},o=void 0,c={unversionedId:"basics/success",id:"basics/success",title:"Success",description:"What is a success?",source:"@site/docs/basics/success.mdx",sourceDirName:"basics",slug:"/basics/success",permalink:"/convenient_service_docs/basics/success",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/success.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/basics/success",sidebar_position:6,title:"Success"},sidebar:"docs",previous:{title:"Errors",permalink:"/convenient_service_docs/basics/errors"},next:{title:"Steps",permalink:"/convenient_service_docs/basics/steps"}},i={},l=[{value:"What is a success?",id:"what-is-a-success",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-success"},"What is a success?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Success")," is a kind of result when the service objective is fully satisfied."),(0,r.kt)("p",null,"All the preconditions are met."),(0,r.kt)("p",null,"Every validation check is passed."),(0,r.kt)("p",null,"There is no obstacle that prohibits achieving the service goal."),(0,r.kt)("p",null,"In general, a service must have one and only one reason to return ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"No sense to hide the truth, sometimes it is really necessary to return multiple success cases from a single service (For example, fake HTTP responses for external testing systems)."),(0,r.kt)("p",{parentName:"admonition"},"As a rule of thumb, if you start to feel that you have such a scenario, always prefer to think about how to create multiple services one more time."),(0,r.kt)("p",{parentName:"admonition"},"If not, be ready to strongly argue why your situation is truly exceptional and unavoidable.")),(0,r.kt)("p",null,"Success results may have some data."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Data")," is a hash-like structure with values received by service processing."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class FetchPopularVideos\n  # ...\n  def result\n    # ...\n    # Actual logic to fetch videos.\n    # ...\n    success(data: {\n      own_channel_videos: own_channel_videos,\n      followers_videos: followers_videos,\n      all_videos: own_channel_videos.concact(followers_videos)\n    })\n  end\nend\n")),(0,r.kt)("p",null,"With invocation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"result = FetchPopularVideos.result\n\nif result.success?\n  # No `data` checks here, since `result.success?` guarantees that `result.data[:all_videos]` are 100% valid.\n  markup = result.data[:all_videos].map { |video| generate_markup(video) }.join\n  # ...\nend\n")))}p.isMDXComponent=!0}}]);