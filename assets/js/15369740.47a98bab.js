"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[8893],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,y=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5990:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const o={slug:"/glossary/decorator_middleware",sidebar_position:1,title:"Decorator Middleware"},i=void 0,l={unversionedId:"glossary/decorator_middleware",id:"glossary/decorator_middleware",title:"Decorator Middleware",description:"A decorator middleware is a kind of middleware that always calls the next middleware in a chain.",source:"@site/docs/glossary/decorator_middleware.mdx",sourceDirName:"glossary",slug:"/glossary/decorator_middleware",permalink:"/convenient_service_docs/glossary/decorator_middleware",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/glossary/decorator_middleware.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/glossary/decorator_middleware",sidebar_position:1,title:"Decorator Middleware"},sidebar:"docs",previous:{title:"Glossary",permalink:"/convenient_service_docs/category/glossary"},next:{title:"Proxy Middleware",permalink:"/convenient_service_docs/glossary/proxy_middleware"}},c={},d=[],s={toc:d};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A decorator middleware is a kind of middleware that always calls the next middleware in a chain."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/plugins/common/has_callbacks"},"HasCallbacks")," is a good example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"module ConvenientService\n  module Common\n    module Plugins\n      module HasCallbacks\n        class Middleware < Core::MethodChainMiddleware\n          # ...\n          # highlight-start\n          def next(...)\n            entity.callbacks.for([:before, method]).each { |callback| callback.call_in_context(entity) }\n\n            original_value = chain.next(...)\n\n            entity.callbacks.for([:after, method]).reverse_each { |callback| callback.call_in_context(entity, original_value) }\n\n            original_value\n          end\n          # highlight-end\n          # ...\n        end\n      end\n    end\n  end\nend\n")),(0,a.kt)("p",null,"It triggers before callbacks, then ",(0,a.kt)("inlineCode",{parentName:"p"},"chain.next(...)"),", and later after callbacks."),(0,a.kt)("p",null,"There are no conditionals that may skip ",(0,a.kt)("inlineCode",{parentName:"p"},"chain.next(...)")," invocation."),(0,a.kt)("p",null,"That is why this middleware is considered ",(0,a.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/decorator"},"decorator")," middleware."),(0,a.kt)("p",null,"In contrast, ",(0,a.kt)("a",{parentName:"p",href:"/glossary/proxy_middleware"},"proxy middlewares")," may not call ",(0,a.kt)("inlineCode",{parentName:"p"},"chain.next")," if needed."))}p.isMDXComponent=!0}}]);