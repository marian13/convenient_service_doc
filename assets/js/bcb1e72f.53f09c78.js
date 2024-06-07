"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[2535],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905)),a=t(4996);const s={slug:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",sidebar_position:1,title:"How to rescue all result unhandled exceptions?"},o=void 0,l={unversionedId:"guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",id:"guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",title:"How to rescue all result unhandled exceptions?",description:"Use RescuesResultUnhandledExceptions plugin",source:"@site/docs/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions.mdx",sourceDirName:"guides/exception_handling",slug:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",permalink:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/guides/exception_handling/how_to_rescue_all_result_unhandled_exceptions",sidebar_position:1,title:"How to rescue all result unhandled exceptions?"},sidebar:"docs",previous:{title:"Exception handling",permalink:"/category/exception-handling"},next:{title:"Advanced",permalink:"/category/advanced"}},c={},u=[{value:"Use <strong>RescuesResultUnhandledExceptions</strong> plugin",id:"use-rescuesresultunhandledexceptions-plugin",level:2},{value:"Option 1: Modify config to rescue results in all services",id:"option-1-modify-config-to-rescue-results-in-all-services",level:3},{value:"Option 2: Modify service to rescue results in a single service",id:"option-2-modify-service-to-rescue-results-in-a-single-service",level:3},{value:"Result with exception becomes an error",id:"result-with-exception-becomes-an-error",level:2},{value:"Result has access to the original exception object",id:"result-has-access-to-the-original-exception-object",level:2}],p={toc:u};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"use-rescuesresultunhandledexceptions-plugin"},"Use ",(0,i.kt)("strong",{parentName:"h2"},"RescuesResultUnhandledExceptions")," plugin"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"RescuesResultUnhandledExceptions")," plugin intentionally ",(0,i.kt)("a",{parentName:"p",href:"https://thoughtbot.com/blog/rescue-standarderror-not-exception"},"rescues only StandardErrors, not Exceptions"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"RescuesResultUnhandledExceptions")," plugin is especially useful for the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fault_tolerance"},"Fault Tolerant")," production environments.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"RescuesResultUnhandledExceptions")," plugin is NOT included in the Standard config by default."),(0,i.kt)("p",{parentName:"admonition"},"It is up to the end-users to decide whether it is needed for thier applications or not.")),(0,i.kt)("h3",{id:"option-1-modify-config-to-rescue-results-in-all-services"},"Option 1: Modify config to rescue results in all services"),(0,i.kt)("img",{src:(0,a.Z)("img/guides/how_to_rescue_all_result_unhandled_exceptions/all_services_setup.png")}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# highlight-start\nConvenientService::Dependencies.require_rescues_result_unhandled_exceptions\n# highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"module ApplicationService\n  module Config\n    include ConvenientService::Concern\n\n    included do |service_class|\n      service_class.class_exec do\n        include ConvenientService::Standard::Config\n\n        # highlight-start\n        middlewares :result, scope: :class do\n          use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware\n        end\n        # highlight-end\n      end\n    end\n  end\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'class Service\n  include ApplicationService::Config\n\n  def result\n    raise StandardError, "exception message"\n  end\nend\n')),(0,i.kt)("h3",{id:"option-2-modify-service-to-rescue-results-in-a-single-service"},"Option 2: Modify service to rescue results in a single service"),(0,i.kt)("img",{src:(0,a.Z)("img/guides/how_to_rescue_all_result_unhandled_exceptions/single_service_setup.png")}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# highlight-start\nConvenientService::Dependencies.require_rescues_result_unhandled_exceptions\n# highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"module ApplicationService\n  module Config\n    include ConvenientService::Concern\n\n    included do |service_class|\n      service_class.class_exec do\n        include ConvenientService::Standard::Config\n      end\n    end\n  end\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'class Service\n  include ApplicationService::Config\n\n  # highlight-start\n  middlewares :result, scope: :class do\n    use ConvenientService::Plugins::Service::RescuesResultUnhandledExceptions::Middleware\n  end\n  # highlight-end\n\n  def result\n    raise StandardError, "exception message"\n  end\nend\n')),(0,i.kt)("h2",{id:"result-with-exception-becomes-an-error"},"Result with exception becomes an error"),(0,i.kt)("img",{src:(0,a.Z)("img/guides/how_to_rescue_all_result_unhandled_exceptions/failure_example.png")}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Convenient Service")," core team strongly believes that it is a responsibility of a developer to predict all possible exceptions reasonably."),(0,i.kt)("p",{parentName:"admonition"},"That is why the ",(0,i.kt)("a",{parentName:"p",href:"/basics/results"},"result")," is an ",(0,i.kt)("a",{parentName:"p",href:"/basics/errors"},"error"),", not a ",(0,i.kt)("a",{parentName:"p",href:"/basics/failures"},"failure"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result = Service.result\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result.success?\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"puts result.message\n")),(0,i.kt)("h2",{id:"result-has-access-to-the-original-exception-object"},"Result has access to the original exception object"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"result.data[:exception]")," is Ruby's ",(0,i.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/StandardError.html"},"StandardError")," object that inherits from ",(0,i.kt)("a",{parentName:"p",href:"https://ruby-doc.org/core-2.7.0/Exception.html"},"Exception"),".")),(0,i.kt)("img",{src:(0,a.Z)("img/guides/how_to_rescue_all_result_unhandled_exceptions/original_exception.png")}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result.data[:exception]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result.data[:exception].class\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result.data[:exception].message\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result.data[:exception].backtrace.to_a.take(10)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"result.data[:exception].cause\n")))}d.isMDXComponent=!0}}]);