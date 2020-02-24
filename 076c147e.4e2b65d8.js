(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var o=t(1),r=t(9),i=(t(0),t(357)),a={id:"ecosystem-dojo",title:"single-spa-dojo",sidebar_label:"Dojo"},p=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],l={rightToc:p},c="wrapper";function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://travis-ci.com/single-spa/single-spa-dojo"}),Object(i.b)("img",Object(o.a)({parentName:"a"},{src:"https://travis-ci.com/single-spa/single-spa-dojo.svg?branch=master",alt:"Build Status"})))),Object(i.b)("p",null,"single-spa-dojo is a helper library that helps implement ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for use with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://dojo.io/"}),"Dojo"),". Check out the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-dojo"}),"single-spa-dojo github"),"."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-dojo\n\n# Or\nyarn add single-spa-dojo\n")),Object(i.b)("h2",{id:"quickstart"},"Quickstart"),Object(i.b)("p",null,'Your bundler\'s "entry file" should look like this, which allows your application to be downloaded as an in-browser ES module.'),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { renderer } from '@dojo/framework/core/vdom';\nimport { v, w } from '@dojo/framework/widget-core/d';\nimport singleSpaDojo from 'single-spa-dojo';\nimport App from './app';\n\nconst dojoLifecycles = singleSpaDojo({\n  // required\n  renderer,\n\n  // required\n  v,\n\n  // required\n  w,\n\n  // required\n  appComponent: App,\n\n  // optional - see https://dojo.io/learn/creating-widgets/rendering-widgets#mountoptions-properties\n  mountOptions: {\n    // optional\n    registry: myRegistry,\n\n    // optional - one will be provided by single-spa automatically\n    domNode: document.getElementById('myContainer'),\n\n    // optional\n    sync: true\n  }\n});\n\nexport const bootstrap = dojoLifecycles.bootstrap;\nexport const mount = dojoLifecycles.mount;\nexport const unmount = dojoLifecycles.unmount;\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"All options are passed to single-spa-dojo via the ",Object(i.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaDojo(opts)"),". The following options are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"renderer")," (required): The ",Object(i.b)("inlineCode",{parentName:"li"},"renderer")," function imported from Dojo. See ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://dojo.io/learn/creating-widgets/rendering-widgets#rendering-to-the-dom"}),"https://dojo.io/learn/creating-widgets/rendering-widgets#rendering-to-the-dom"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"v")," (required): The function used to render dom elements in Dojo. Often JSX hides this function from you, but it can be found at ",Object(i.b)("inlineCode",{parentName:"li"},"import { v } from '@dojo/framework/widget-core/d'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"w")," (required): The function used to render dom elements in Dojo. Often JSX hides this function from you, but it can be found at ",Object(i.b)("inlineCode",{parentName:"li"},"import { w } from '@dojo/framework/widget-core/d'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"appComponent")," (required): The class or function for your root Dojo component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mountOptions")," (optional): An object of ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://dojo.io/learn/creating-widgets/rendering-widgets#mountoptions-properties"}),"Dojo MountOptions"),". Note that a ",Object(i.b)("inlineCode",{parentName:"li"},"domNode")," will be provided by single-spa-dojo, if one is not provided.")))}s.isMDXComponent=!0},357:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o),i=r.a.createContext({}),a=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},p=function(e){var n=a(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),s=a(t),d=o,b=s[p+"."+d]||s[d]||c[d]||i;return t?r.a.createElement(b,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(b,Object.assign({},{ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[l]="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=t[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);