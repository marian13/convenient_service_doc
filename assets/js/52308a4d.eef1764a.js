"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[7575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),_=r,m=d["".concat(i,".").concat(_)]||d[_]||u[_]||s;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={slug:"/guides/usage/how_to_pass_value_to_step_class_or_instance_scope",sidebar_position:1,title:"How to pass a value to step from class/instance scope?"},o=void 0,p={unversionedId:"guides/usage/how_to_pass_value_to_step_class_or_instance_scope",id:"guides/usage/how_to_pass_value_to_step_class_or_instance_scope",title:"How to pass a value to step from class/instance scope?",description:"Let's consider the following service:",source:"@site/docs/guides/usage/how_to_pass_value_to_step_class_or_instance_scope.mdx",sourceDirName:"guides/usage",slug:"/guides/usage/how_to_pass_value_to_step_class_or_instance_scope",permalink:"/guides/usage/how_to_pass_value_to_step_class_or_instance_scope",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/usage/how_to_pass_value_to_step_class_or_instance_scope.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/guides/usage/how_to_pass_value_to_step_class_or_instance_scope",sidebar_position:1,title:"How to pass a value to step from class/instance scope?"},sidebar:"docs",previous:{title:"How to use service results?",permalink:"/guides/usage/how_to_use_results"},next:{title:"Debugging",permalink:"/category/debugging"}},i={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's consider the following service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"class Service\n  # ...\n\n  step EscapeRegexp, \\\n    in: {pattern: ???}, # `???` is just a placeholder here, it is not a valid Ruby syntax.\n    out: :escaped\n\n  # ...\nend\n")),(0,r.kt)("p",null,"We need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},'ENV["PATH_PATTERN"]')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EscapeRegexp")," step as the ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," param."),(0,r.kt)("p",null,"How that can be achievable?"),(0,r.kt)("p",null,"There are multiple ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step EscapeRegexp, \\\n  in: {pattern: raw(ENV["PATH_PATTERN"])},\n  out: :escaped\n')),(0,r.kt)("p",{parentName:"li"},"This is how ",(0,r.kt)("inlineCode",{parentName:"p"},"step"),' call is "translated" to regular service invocation under the hood:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'def step_result\n  @step_result ||= EscapeRegexp.result(pattern: ENV["PATH_PATTERN"])\nend\n')),(0,r.kt)("p",{parentName:"li"},"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"raw")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://rubyreferences.github.io/rubyref/language/methods-def.html#scope"},"class method")," you can pass it anything from the enclosing class scope."),(0,r.kt)("p",{parentName:"li"},"The value is forwarded without any intermediate processing."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step EscapeRegexp, \\\n  in: {pattern: raw(any_class_method)},\n  out: :escaped\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"proc")," form."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'step EscapeRegexp, \\\n  in: {pattern: -> { ENV["PATH_PATTERN"] }},\n  out: :escaped\n')),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proc")," form does not additionally process the passed value as well, but it is evaluated in the instance scope."),(0,r.kt)("p",{parentName:"li"},"So you can access any service instance methods in it."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"step EscapeRegexp, \\\n  in: {pattern: -> { any_instance_method }},\n  out: :escaped\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Check ",(0,r.kt)("a",{parentName:"p",href:"/basics/step_to_result_translation_table"},"the Step to Result Translation table")," for more detailed reference.")))}u.isMDXComponent=!0}}]);