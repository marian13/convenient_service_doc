"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[7975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={slug:"/best_practices/avoid_error_shadowing",sidebar_position:2,title:"Avoid error shadowing"},o=void 0,i={unversionedId:"best_practices/avoid_error_shadowing",id:"best_practices/avoid_error_shadowing",title:"Avoid error shadowing",description:"What is an error shadowing?",source:"@site/docs/best_practices/avoid_error_shadowing.mdx",sourceDirName:"best_practices",slug:"/best_practices/avoid_error_shadowing",permalink:"/best_practices/avoid_error_shadowing",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/best_practices/avoid_error_shadowing.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/best_practices/avoid_error_shadowing",sidebar_position:2,title:"Avoid error shadowing"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/category/best-practices"},next:{title:"Service has only one `success`",permalink:"/best_practices/service_has_only_one_success"}},l={},c=[{value:"What is an error shadowing?",id:"what-is-an-error-shadowing",level:2},{value:"When does error shadowing happen with services?",id:"when-does-error-shadowing-happen-with-services",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-error-shadowing"},"What is an error shadowing?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Error shadowing")," is a hiding of the original cause of the problem."),(0,a.kt)("p",null,"A common use case may be ",(0,a.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/action_controller_overview.html#rescue"},"always returning a 404 HTTP error code in production"),", even when the real code is different."),(0,a.kt)("p",null,"This way you make it a little bit harder for a possible attacker to find security holes in your web application."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"A professional ",(0,a.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/"},"web attacker")," may ",(0,a.kt)("a",{parentName:"p",href:"https://www.kali.org/"},"easily exploit any kind of security vulnerabilities"),"."),(0,a.kt)("p",{parentName:"admonition"},"That is why it is so important to be extremely careful."),(0,a.kt)("p",{parentName:"admonition"},"Please, constantly impove your security skills."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/security.html"},"Securing Rails Applications")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Ruby_on_Rails_Cheat_Sheet.html"},"OWASP: Ruby on Rails Cheat Sheet")," are good places to revisit from time to time.")),(0,a.kt)("p",null,"Also it is popular to ",(0,a.kt)("a",{parentName:"p",href:"https://www.exceptionalcreatures.com/guides/advanced-rescue-and-raise#changing-exceptions"},"rescue low-level exceptions")," to encapsulate internal details from the end-user."),(0,a.kt)("p",null,"The following example is taken directly from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rails/rails/blob/v7.0.0/activestorage/lib/active_storage/service/gcs_service.rb#L56"},"the Rails codebase"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def download_chunk(key, range)\n  instrument :download_chunk, key: key, range: range do\n    file_for(key).download(range: range).string\n  rescue Google::Cloud::NotFoundError\n    raise ActiveStorage::FileNotFoundError\n  end\nend\n")),(0,a.kt)("p",null,"As you can see, the original exception message is dropped and not reused anywhere."),(0,a.kt)("h2",{id:"when-does-error-shadowing-happen-with-services"},"When does error shadowing happen with services?"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/"},"Convenient Service"),", you may encounter an error shadowing as well."),(0,a.kt)("p",null,"But as always, any approach may have advantages and disadvantages."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.hubspot.com/sales/for-example-synonym"},"To illustrate")," that, check the service below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class MainService\n  # ...\n  def result\n    return error(message: "Something went wrong") unless sub_service_result.success?\n    # ...\n    success\n  end\n\n  private\n\n  def sub_service_result\n    @sub_service_result ||= SubService.result\n  end\n  # ...\nend\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MainService")," looks innocent, but the problem starts to appear when you execute it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'result = MainService.result\n\nresult.success?\n# => false\n\nresult.message\n# => "Something went wrong"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"result.message")," does NOT help to figure out what is actually wrong."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SubService")," is failing in reality, but it is NOT reflected in the outside world in any way."),(0,a.kt)("p",null,"If you don't want to intentionally confuse the service users or hide the internals from them, prefer to forward the original message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'class MainService\n  # ...\n  def result\n    # highlight-start\n    return error(message: "Something went wrong (#{sub_service_result.message})") unless sub_service_result.success?\n    # highlight-end\n    # ...\n    success\n  end\n  # ...\nend\n')),(0,a.kt)("p",null,"It is also OK to immediately return ",(0,a.kt)("inlineCode",{parentName:"p"},"SubService")," result when you don't need to provide any additional text to its message, since it also avoids error shadowing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"class MainService\n  # ...\n  def result\n    # highlight-start\n    return sub_service_result unless sub_service_result.success?\n    # highlight-end\n    # ...\n    success\n  end\n  # ...\nend\n")),(0,a.kt)("p",null,"But the best option is to utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"step")," macro."),(0,a.kt)("p",null,"It works as the previous example under the hood and when used frequently - helps to forget about error shadowing in the context of services completely."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"class MainService\n  # highlight-start\n  step SubService\n  # highlight-end\n  # ...\n  def result\n    # highlight-start\n    # This line is removed...\n    # highlight-end\n    # ...\n    success\n  end\n  # ...\nend\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are not safisfied how ",(0,a.kt)("inlineCode",{parentName:"p"},"step")," automatically prevents error shadowing - consider to create a plugin to extend/modify it.")))}u.isMDXComponent=!0}}]);