"use strict";(self.webpackChunkoperator_for_redis_cluster=self.webpackChunkoperator_for_redis_cluster||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Contributing",slug:"/contributing"},u="Contributing",c={unversionedId:"CONTRIBUTING",id:"CONTRIBUTING",isDocsHomePage:!1,title:"Contributing",description:"By participating in this project, you agree to our code of conduct.",source:"@site/docs/CONTRIBUTING.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",editUrl:"https://ibm.github.io/operator-for-redis-cluster/docs/CONTRIBUTING.md",version:"current",lastUpdatedAt:1641504459,formattedLastUpdatedAt:"1/6/2022",frontMatter:{title:"Contributing",slug:"/contributing"},sidebar:"docs",previous:{title:"Key Migration",permalink:"/key-migration"},next:{title:"Code of Conduct",permalink:"/code-of-conduct"}},p=[{value:"Set up your machine",id:"set-up-your-machine",children:[]},{value:"Development process",id:"development-process",children:[{value:"Create a branch",id:"create-a-branch",children:[]},{value:"Commit your code",id:"commit-your-code",children:[]},{value:"End-to-end tests",id:"end-to-end-tests",children:[]},{value:"Submit a pull request",id:"submit-a-pull-request",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"By participating in this project, you agree to our ",(0,a.kt)("a",{parentName:"p",href:"/code-of-conduct"},"code of conduct"),"."),(0,a.kt)("h2",{id:"set-up-your-machine"},"Set up your machine"),(0,a.kt)("p",null,"Refer to our ",(0,a.kt)("a",{parentName:"p",href:"/cookbook#installation"},"cookbook")," to learn how to set up your machine."),(0,a.kt)("h2",{id:"development-process"},"Development process"),(0,a.kt)("p",null,"This section assumes you have already set up your environment to build and install the Redis operator and cluster."),(0,a.kt)("h3",{id:"create-a-branch"},"Create a branch"),(0,a.kt)("p",null,"The first step to contributing is creating a branch off of the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch in your forked project. Branch names should be well formatted. Start your branch name with a type. Choose one of the following:\n",(0,a.kt)("inlineCode",{parentName:"p"},"feat"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fix"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"docs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"style"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"refactor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"perf"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"move"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bump"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"release")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git checkout -b feat/node-scaling\n")),(0,a.kt)("h3",{id:"commit-your-code"},"Commit your code"),(0,a.kt)("p",null,"Make your desired changes to the branch and then commit your work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ git add .\n$ git commit -m "<USEFUL_MESSAGE>"\n$ git push --set-upstream origin <BRANCH_NAME>\n')),(0,a.kt)("p",null,"When you are ready to make a pull request, we suggest you run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ make generate\n//path/to/go/bin/controller-gen object paths="./..."\n$ make fmt\nfind . -name \'*.go\' -not -wholename \'./vendor/*\' | while read -r file; do gofmt -w -s "$file"; goimports -w "$file"; done\n$ make lint\ngolangci-lint run --enable exportloopref\n$ make test\n./go.test.sh\n...\n')),(0,a.kt)("p",null,"These steps will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Regenerate the RedisCluster CRD"),(0,a.kt)("li",{parentName:"ol"},"Format the code according to ",(0,a.kt)("inlineCode",{parentName:"li"},"gofmt")," standards"),(0,a.kt)("li",{parentName:"ol"},"Run the linter"),(0,a.kt)("li",{parentName:"ol"},"Run the unit tests")),(0,a.kt)("h3",{id:"end-to-end-tests"},"End-to-end tests"),(0,a.kt)("p",null,"To run the end-to-end tests, you need to have a running Kubernetes cluster. Follow the steps in the ",(0,a.kt)("a",{parentName:"p",href:"/cookbook#run-end-to-end-tests"},"cookbook"),"."),(0,a.kt)("h3",{id:"submit-a-pull-request"},"Submit a pull request"),(0,a.kt)("p",null,"Push your branch to your ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-operator")," fork and open a pull request against the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch in the official project. When you open a PR, be sure to include a description explaining your changes, as well as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Resolves #<ISSUE_NUMBER>\n")),(0,a.kt)("p",null,"We also ask that you add labels describing the t-shirt size of the task (S, M, L, XL) and the task type (enhancement, documentation, bug, etc.)."))}d.isMDXComponent=!0}}]);