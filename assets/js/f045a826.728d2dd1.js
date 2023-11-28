"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[5029],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(b,o(o({ref:r},u),{},{components:t})):n.createElement(b,o({ref:r},u))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7352:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),s=(t(7294),t(3905));const a={slug:"/basics/errors",sidebar_position:5,title:"Errors"},o=void 0,i={unversionedId:"basics/errors",id:"basics/errors",title:"Errors",description:"What is an error?",source:"@site/docs/basics/errors.mdx",sourceDirName:"basics",slug:"/basics/errors",permalink:"/basics/errors",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/errors.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/basics/errors",sidebar_position:5,title:"Errors"},sidebar:"docs",previous:{title:"Failures",permalink:"/basics/failures"},next:{title:"Success",permalink:"/basics/success"}},l={},c=[{value:"What is an error?",id:"what-is-an-error",level:2},{value:"How to process errors?",id:"how-to-process-errors",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-an-error"},"What is an error?"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Error")," prevents the achievement of the service goal."),(0,s.kt)("p",null,"That is why is so vital to use meaningful names for services."),(0,s.kt)("p",null,"For instance, when the aim is ",(0,s.kt)("u",null,"to schedule a delayed job"),", call it - ",(0,s.kt)("inlineCode",{parentName:"p"},"ScheduleDelayedJob"),"."),(0,s.kt)("p",null,"When a job was not registered into the queue for whatever reason (except validation, since it is a failure), it should be treated as an error."),(0,s.kt)("p",null,"Please, read the following code snippet carefully:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class ScheduleDelayedJob\n  # ...\n  def result\n    return failure(data: {id: "User id is NOT alphanumeric"}) unless user_id.alphanumeric?\n\n    return error(message: "Queue has no space") if queue.full?\n    return error(message: "Job is NOT unique") if job.duplicated?\n\n    job_tracker = ApplicationScheduler.delay(job)\n\n    success(data: {tracker: job_tracker})\n  end\nend\n')),(0,s.kt)("p",null,"In contrast, when your objective is just ",(0,s.kt)("u",null,"to try to schedule a job"),", but it does not really important whether it was scheduled or not, the service name should reflect such desire explicitly."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'class TryToScheduleDelayedJob\n  # ...\n  def result\n    return failure(data: {id: "User id is NOT alphanumeric"}) unless user_id.alphanumeric?\n\n    job_tracker =\n      if job.unique? && !queue.full? && !queue.stuck?\n        ApplicationScheduler.delay(job)\n      else\n        ""\n      end\n\n    ##\n    # Even if the `tracker` is empty, the service still is considered successful.\n    # Since the trial is the target, but not the guarantee.\n    # `tracker` is more like a metadata here.\n    #\n    success(data: {tracker: job_tracker})\n  end\nend\n')),(0,s.kt)("h2",{id:"how-to-process-errors"},"How to process errors?"),(0,s.kt)("p",null,"Most of the time, handling is the same for all kinds of errors, just like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},"result = ScheduleDelayedJob.result\n\nif result.error?\n  # `result.message` is a string-like object with error reason.\n  send_alert(result.message)\nend\n")),(0,s.kt)("p",null,"But when you need to treat them differently, do NOT parse strings, please."),(0,s.kt)("p",null,"There is the second option ",(0,s.kt)("inlineCode",{parentName:"p"},"code"),", exactly for this purpose, that can be passed to any error calls."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ruby"},'# ...\nreturn error(message: "Queue has no space", code: :full_queue) if queue.full?\nreturn error(message: "Job is NOT unique", code: :duplicated_job) if job.duplicated?\n# ...\n\nif result.error?\n  case result.code # symbol-like object\n  when :full_queue\n    notify_devops\n  when :duplicated_job\n    notify_devs\n  else\n  # ...\nend\n')))}p.isMDXComponent=!0}}]);