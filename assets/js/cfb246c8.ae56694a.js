"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[3020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),_=c(r),d=o,f=_["".concat(a,".").concat(d)]||_[d]||u[d]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=_;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},4340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={slug:"/guides/how_to_set_up_in_rspec",sidebar_position:2,title:"Setup in RSpec"},s=void 0,p={unversionedId:"guides/how_to_set_up_in_rspec",id:"guides/how_to_set_up_in_rspec",title:"Setup in RSpec",description:"- Add the following line to your spechelper.rb or railshelper.rb.",source:"@site/docs/guides/how_to_set_up_in_rspec.mdx",sourceDirName:"guides",slug:"/guides/how_to_set_up_in_rspec",permalink:"/guides/how_to_set_up_in_rspec",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/how_to_set_up_in_rspec.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/guides/how_to_set_up_in_rspec",sidebar_position:2,title:"Setup in RSpec"},sidebar:"docs",previous:{title:"Setup in a Rails project",permalink:"/guides/how_to_set_up_in_rails"},next:{title:"How to pass a value to step from class/instance scope?",permalink:"/guides/how_to_pass_value_to_step_class_or_instance_scope"}},a={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the following line to your ",(0,o.kt)("a",{parentName:"p",href:"https://relishapp.com/rspec/rspec-core/docs"},"spec_helper.rb")," or ",(0,o.kt)("a",{parentName:"p",href:"https://relishapp.com/rspec/rspec-rails/docs"},"rails_helper.rb"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"ConvenientService::Dependencies.require_rspec_extentions\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"That's it. Happy testing!"))))}u.isMDXComponent=!0}}]);