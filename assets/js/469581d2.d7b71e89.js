"use strict";(self.webpackChunkconvenient_service_docs=self.webpackChunkconvenient_service_docs||[]).push([[1573,7918],{5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(6010);const s="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,r),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),i=t(7294),s=t(6010),r=t(2389),l=t(7392),o=t(7094),d=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var n;const{lazy:t,block:r,defaultValue:p,values:m,groupId:v,className:b}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,l.l)(g,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:_}=(0,o.U)(),[T,C]=(0,i.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:Z}=(0,d.o5)();if(null!=v){const e=k[v];null!=e&&e!==T&&g.some((n=>n.value===e))&&C(e)}const S=e=>{const n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==T&&(Z(n),C(a),null!=v&&_(v,String(a)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>x.push(e),onKeyDown:A,onFocus:S,onClick:S},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(n)},e))}},8573:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7410),i=t(7294),s=t(814);(void 0!==t.g?t.g:window).Prism=a.Z,t(9385);function r(e){let{children:n,...t}=e;return i.createElement(i.Fragment,null,i.createElement(s.Z,t,(e=>{let n=e.toString().split("\n");n=""===n[0]?n.slice(1):n;const t=n.find((e=>e.length)).search(/[^ ]/),a=-1===t?0:t;return n.map((e=>e.trimEnd())).map((e=>"-"===e.trimStart()?"":e)).map((e=>e.slice(a))).join("\n")})(n)))}},810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>v,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(7462),i=(t(7294),t(3905)),s=t(5488),r=t(5162),l=t(8573);const o={slug:"/basics/tldr",sidebar_position:1,title:"TL;DR"},d=void 0,u={unversionedId:"basics/tldr",id:"basics/tldr",title:"TL;DR",description:"I have no time to read tons of docs.",source:"@site/docs/basics/tldr.mdx",sourceDirName:"basics",slug:"/basics/tldr",permalink:"/convenient_service_docs/basics/tldr",draft:!1,editUrl:"https://github.com/marian13/convenient_service_docs/blob/main/docs/basics/tldr.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/basics/tldr",sidebar_position:1,title:"TL;DR"},sidebar:"docs",previous:{title:"Basics",permalink:"/convenient_service_docs/category/basics"},next:{title:"Services",permalink:"/convenient_service_docs/basics/services"}},c={},p=[{value:"More examples",id:"more-examples",level:2}],m={toc:p};function v(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I have no time to read tons of docs. ",(0,i.kt)("br",null),"\nJust show me an example use case and I'll quickly craft something similar \ud83d\ude0e."),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 A lazy developer")),(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n    def read_file_content(path)\n      result = ReadFileContent.result(path: path)\n      -\n      content = result.success? ? result.data[:content] : ""\n      -\n      puts result.message unless result.success?\n      -\n      content\n    end\n  '),(0,i.kt)(s.Z,{groupId:"config",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'require "convenient_service"')),(0,i.kt)(r.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        require "active_model" # NOTE: Minimal `active_model` version - `5.2.0`.\n        -\n        require "convenient_service"\n        -\n        ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_active_model_attribute_assignment\n        ConvenientService::Dependencies.require_has_attributes_using_active_model_attributes\n        ConvenientService::Dependencies.require_has_result_params_validations_using_active_model_validations\n      ')),(0,i.kt)(r.Z,{value:"dry",label:"Dry",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        require "dry-initializer" # NOTE: Minimal `dry-initializer` version - `3.0.0`.\n        require "dry-validation" # NOTE: Minimal `dry-validation` version - `1.5.0`.\n        -\n        require "convenient_service"\n        -\n        ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_dry_initializer\n        ConvenientService::Dependencies.require_has_result_params_validations_using_dry_validation\n      '))),(0,i.kt)(s.Z,{groupId:"config",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},"\n        module ApplicationService\n          module Config\n            def self.included(service_class)\n              service_class.include ConvenientService::Standard::Config\n            end\n          end\n        end\n      ")),(0,i.kt)(r.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},"\n        module RailsService\n          module Config\n            def self.included(service_class)\n              service_class.class_exec do\n                include ConvenientService::Standard::Config\n                -\n                concerns do\n                  use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Concern\n                  use ConvenientService::Plugins::Common::HasAttributes::UsingActiveModelAttributes::Concern\n                  use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Concern\n                end\n                -\n                middlewares :initialize do\n                  use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Middleware\n                end\n                -\n                middlewares :result do\n                  use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Middleware\n                end\n              end\n            end\n          end\n        end\n      ")),(0,i.kt)(r.Z,{value:"dry",label:"Dry",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},"\n        module DryService\n          module Config\n            def self.included(service_class)\n              service_class.class_exec do\n                include ConvenientService::Standard::Config\n                -\n                concerns do\n                  use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingDryInitializer::Concern\n                  use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingDryValidation::Concern\n                end\n                -\n                middlewares :result do\n                  use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingDryValidation::Middleware\n                end\n              end\n            end\n          end\n        end\n      "))),(0,i.kt)(s.Z,{groupId:"config",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class AssertFileExists\n          include ApplicationService::Config\n          -\n          attr_reader :path\n          -\n          def initialize(path:)\n            @path = path\n          end\n          -\n          def result\n            return failure(path: "Path is `nil`") if path.nil?\n            return failure(path: "Path is empty") if path.empty?\n            -\n            return error("File does not exist at path `#{path}`") unless ::File.exist?(path)\n            -\n            success\n          end\n        end\n      ')),(0,i.kt)(r.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class AssertFileExists\n          include RailsService::Config\n          -\n          attribute :path, :string\n          -\n          validates :path, presence: true\n          -\n          def result\n            return error("File does not exist at path `#{path}`") unless ::File.exist?(path)\n            -\n            success\n          end\n        end\n      ')),(0,i.kt)(r.Z,{value:"dry",label:"Dry",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class AssertFileExists\n          include DryService::Config\n          -\n          option :path\n          -\n          contract do\n            schema do\n              required(:path).value(:string)\n            end\n          end\n          -\n          def result\n            return error("File does not exist at path `#{path}`") unless ::File.exist?(path)\n            -\n            success\n          end\n        end\n      '))),(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'result = AssertFileExists.result(path: "Gemfile")'),(0,i.kt)(s.Z,{groupId:"config",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class AssertFileNotEmpty\n          include ApplicationService::Config\n          -\n          attr_accessor :path\n          -\n          def initialize(path:)\n            @path = path\n          end\n          -\n          def result\n            return failure(path: "Path is `nil`") if path.nil?\n            return failure(path: "Path is empty") if path.empty?\n            -\n            return error("File is empty at path `#{path}`") if ::File.zero?(path)\n            -\n            success\n          end\n        end\n      ')),(0,i.kt)(r.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class AssertFileNotEmpty\n          include RailsService::Config\n          -\n          attribute :path, :string\n          -\n          validates :path, presence: true\n          -\n          def result\n            return error("File is empty at path `#{path}`") if ::File.zero?(path)\n            -\n            success\n          end\n        end\n      ')),(0,i.kt)(r.Z,{value:"dry",label:"Dry",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class AssertFileNotEmpty\n          include DryService::Config\n          -\n          option :path\n          -\n          contract do\n            schema do\n              required(:path).value(:string)\n            end\n          end\n          -\n          def result\n            return error("File is empty at path `#{path}`") if ::File.zero?(path)\n            -\n            success\n          end\n        end\n      '))),(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'result = AssertFileNotEmpty.result(path: "Gemfile")'),(0,i.kt)(s.Z,{groupId:"config",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"standard",label:"Standard",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'\n        class ReadFileContent\n          include ApplicationService::Config\n          -\n          attr_reader :path\n          -\n          step :validate_path\n          step AssertFileExists, in: :path\n          step AssertFileNotEmpty, in: :path\n          step :result, in: :path, out: :content\n          -\n          def initialize(path:)\n            @path = path\n          end\n          -\n          def result\n            success(content: ::File.read(path))\n          end\n          -\n          private\n          -\n          def validate_path\n            return failure(path: "Path is `nil`") if path.nil?\n            return failure(path: "Path is empty") if path.empty?\n            -\n            success\n          end\n        end\n      ')),(0,i.kt)(r.Z,{value:"rails",label:"Rails",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},"\n        class ReadFileContent\n          include RailsService::Config\n          -\n          attribute :path, :string\n          -\n          validates :path, presence: true\n          -\n          step AssertFileExists, in: :path\n          step AssertFileNotEmpty, in: :path\n          step :result, in: :path, out: :content\n          -\n          def result\n            success(content: ::File.read(path))\n          end\n        end\n      ")),(0,i.kt)(r.Z,{value:"dry",label:"Dry",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},"\n        class ReadFileContent\n          include DryService::Config\n          -\n          option :path\n          -\n          contract do\n            schema do\n              required(:path).value(:string)\n            end\n          end\n          -\n          step AssertFileExists, in: :path\n          step AssertFileNotEmpty, in: :path\n          step :result, in: :path, out: :content\n          -\n          def result\n            success(content: ::File.read(path))\n          end\n        end\n      "))),(0,i.kt)(l.Z,{language:"ruby",mdxType:"CodeBlock"},'result = ReadFileContent.result(path: "Gemfile")'),(0,i.kt)("h2",{id:"more-examples"},"More examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/marian13/convenient_service/tree/main/lib/convenient_service/examples"},"lib/convenient_service/examples")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/marian13/convenient_service/tree/main/spec/lib/convenient_service/examples"},"spec/lib/convenient_service"))))))}v.isMDXComponent=!0}}]);