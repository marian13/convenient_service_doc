"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[1771,7918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(v,o(o({ref:n},u),{},{components:t})):a.createElement(v,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),i=t(6010),o=t(2389),l=t(7392),s=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:o,defaultValue:d,values:m,groupId:v,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=m??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,l.l)(_,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==h&&!_.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[w,C]=(0,r.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=v){const e=y[v];null!=e&&e!==w&&_.some((n=>n.value===e))&&C(e)}const E=e=>{const n=e.currentTarget,t=N.indexOf(n),a=_[t].value;a!==w&&(x(n),C(a),null!=v&&k(v,String(a)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},b)},_.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:S,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},6915:(e,n,t)=>{t.d(n,{Z:()=>a});const a="0.12.0"},8573:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7410),r=t(7294),i=t(814);(void 0!==t.g?t.g:window).Prism=a.Z,t(9385);function o(e){let{children:n,...t}=e;return r.createElement(r.Fragment,null,r.createElement(i.Z,t,(e=>{let n=e.toString().split("\n");n=""===n[0]?n.slice(1):n;const t=n.find((e=>e.length)).search(/[^ ]/),a=-1===t?0:t;return n.map((e=>e.trimEnd())).map((e=>"-"===e.trimStart()?"":e)).map((e=>e.slice(a))).join("\n")})(n)))}},7664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),i=t(5488),o=t(5162),l=t(8573),s=t(6915);const c={slug:"/guides/how_to_set_up_in_rails",sidebar_position:1,title:"Setup in a Rails project"},u=void 0,p={unversionedId:"guides/how_to_set_up_in_rails",id:"guides/how_to_set_up_in_rails",title:"Setup in a Rails project",description:"- As always, add a new entry to your Gemfile as the first step.",source:"@site/docs/guides/how_to_set_up_in_rails.mdx",sourceDirName:"guides",slug:"/guides/how_to_set_up_in_rails",permalink:"/guides/how_to_set_up_in_rails",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/guides/how_to_set_up_in_rails.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/guides/how_to_set_up_in_rails",sidebar_position:1,title:"Setup in a Rails project"},sidebar:"docs",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Setup in RSpec",permalink:"/guides/how_to_set_up_in_rspec"}},d={},m=[],v={toc:m};function b(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As always, add a new entry to your ",(0,r.kt)("a",{parentName:"p",href:"https://bundler.io/guides/gemfile.html"},"Gemfile")," as the first step."),(0,r.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},`gem "convenient_service", "~> ${s.Z}"`))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then run ",(0,r.kt)("a",{parentName:"p",href:"https://bundler.io/man/bundle-install.1.html"},"bundle")," to install the gem."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bundle install\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you are following the ",(0,r.kt)("a",{parentName:"p",href:"https://tutorialspoint.com/ruby-on-rails/rails-directory-structure.htm"},"classic Rails folder structure"),", we recommend creating ",(0,r.kt)("inlineCode",{parentName:"p"},"app/services")," directory like so:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p app/services\n")),(0,r.kt)("p",{parentName:"li"},"Feel free to select any folder you like."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"app/services")," was chosen for a demonstration since it is ",(0,r.kt)("a",{parentName:"p",href:"https://guides.rubyonrails.org/autoloading_and_reloading_constants.html#config-autoload-paths"},"autoloaded")," by Rails.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Place a configuration file into it."),(0,r.kt)("p",{parentName:"li"},"A common name may be ",(0,r.kt)("inlineCode",{parentName:"p"},"application_service/config.rb"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p app/services/application_service && touch app/services/application_service/config.rb\n")),(0,r.kt)("p",{parentName:"li"},"This example utilizes ",(0,r.kt)("inlineCode",{parentName:"p"},"Standard")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Rails")," config, but you can also pick any other ",(0,r.kt)("a",{parentName:"p",href:"./basics/tldr"},"predefined configuration"),", create customization, or even ",(0,r.kt)("a",{parentName:"p",href:"./basics/tldr"},"have multiple configs"),"."),(0,r.kt)(i.Z,{groupId:"config",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"ruby",title:"app/services/application_service/config.rb",mdxType:"CodeBlock"},"\n        module ApplicationService\n          module Config\n            include ConvenientService::Concern\n            -\n            included do |service_class|\n              service_class.include ConvenientService::Standard::Config\n            end\n          end\n        end\n      ")),(0,r.kt)(o.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"ruby",title:"app/services/application_service/config.rb",mdxType:"CodeBlock"},"\n        ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_active_model_attribute_assignment\n        ConvenientService::Dependencies.require_has_attributes_using_active_model_attributes\n        ConvenientService::Dependencies.require_has_result_params_validations_using_active_model_validations\n        -\n        module ApplicationService\n          module Config\n            include ConvenientService::Concern\n            -\n            included do |service_class|\n              service_class.class_exec do\n                include ConvenientService::Standard::Config\n                -\n                concerns do\n                  use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Concern\n                  use ConvenientService::Plugins::Common::HasAttributes::UsingActiveModelAttributes::Concern\n                  use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Concern\n                end\n                -\n                middlewares :initialize do\n                  use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Middleware\n                end\n                -\n                middlewares :result do\n                  use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Middleware\n                end\n              end\n            end\n          end\n        end\n      ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now you have everything ready to create fancy services for your application."),(0,r.kt)("p",{parentName:"li"},"(Do not forget to include config into them \ud83d\ude42)"),(0,r.kt)(i.Z,{groupId:"config",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"ruby",title:"app/services/print_what_cow_says.rb",mdxType:"CodeBlock"},'\n        class PrintWhatCowSays\n          include ApplicationService::Config\n          -\n          attr_reader :text\n          -\n          def initialize(text: "Hello World!")\n            @text = text\n          end\n          -\n          def result\n            puts template(text)\n            -\n            success\n          end\n          -\n          private\n          -\n          ##\n          # Copied with \u2764\ufe0f from https://github.com/gaborbata/rosetta-cow\n          #\n          def template(text)\n            cloud =\n              <<~HEREDOC\n                 #{border(text, "_")}\n                < #{text} >\n                 #{border(text, "-")}\n              HEREDOC\n            -\n            cow =\n              <<~\'HEREDOC\'.split("\\n").map { |line| " " * 10 + line }.join("\\n")\n                        \\   ^__^\n                         \\  (oo)\\_______\n                            (__)\\       )\\/\\\n                                ||----w |\n                                ||     ||\n              HEREDOC\n            -\n            cloud + cow\n          end\n          -\n          def border(text, char)\n            char * (text.length + 2)\n          end\n        end\n      ')),(0,r.kt)(o.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"ruby",title:"app/services/print_what_cow_says.rb",mdxType:"CodeBlock"},'\n        class PrintWhatCowSays\n          include ApplicationService::Config\n          -\n          attribute :text, :string, default: "Hello World!"\n          -\n          def result\n            puts template(text)\n            -\n            success\n          end\n          -\n          private\n          -\n          ##\n          # Copied with \u2764\ufe0f from https://github.com/gaborbata/rosetta-cow\n          #\n          def template(text)\n            cloud =\n              <<~HEREDOC\n                 #{border(text, "_")}\n                < #{text} >\n                 #{border(text, "-")}\n              HEREDOC\n            -\n            cow =\n              <<~\'HEREDOC\'.split("\\n").map { |line| " " * 10 + line }.join("\\n")\n                        \\   ^__^\n                         \\  (oo)\\_______\n                            (__)\\       )\\/\\\n                                ||----w |\n                                ||     ||\n              HEREDOC\n            -\n            cloud + cow\n          end\n          -\n          def border(text, char)\n            char * (text.length + 2)\n          end\n        end\n      ')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"That's it. Happy coding!"))))}b.isMDXComponent=!0}}]);