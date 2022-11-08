"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[4867],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={slug:"/basics/failures",sidebar_position:4,title:"Failures"},o=void 0,s={unversionedId:"basics/failures",id:"basics/failures",title:"Failures",description:"Failure is a problem caused by the wrong input data.",source:"@site/docs/basics/failures.mdx",sourceDirName:"basics",slug:"/basics/failures",permalink:"/convenient_service_docs/basics/failures",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/failures.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/basics/failures",sidebar_position:4,title:"Failures"},sidebar:"docs",previous:{title:"Results",permalink:"/convenient_service_docs/basics/results"},next:{title:"Errors",permalink:"/convenient_service_docs/basics/errors"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Failure is a problem caused by the wrong input data."),(0,a.kt)("p",null,"It may be a validation error or an unmet precondition based on service arguments."),(0,a.kt)("p",null,"It is a responsibility of a developer/service user to provide correct inputs."),(0,a.kt)("p",null,"Otherwise, there is no sense in even starting any service processing."),(0,a.kt)("p",null,"Check out the folloiwng example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class EnsureFeatureActive\n  # ...\n  def initialize(name:)\n    @name = name\n  end\n\n  def result\n    return failure(data: {name: "Feature name can not be `nil`"}) if name.nil?\n    return failure(data: {name: "Unknown feature - `#{name}`"}) unless Feature.exist?(name: name)\n\n    # ... Tricky and non trivial logic to ensure that feature is active...\n  end\nend\n')),(0,a.kt)("p",null,"There is no point to involve all the heavy machinery when the feature name is ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,a.kt)("p",null,"Why do we need to waste any expensive resources if the feature name is unknown?"),(0,a.kt)("p",null,"The purpose of failure is to say that the callers need to adjust their code, not the service authors."))}p.isMDXComponent=!0}}]);