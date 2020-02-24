(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{277:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return s}));var t=n(1),l=n(9),r=(n(0),n(357)),i={id:"ecosystem-angularjs",title:"single-spa-angularjs",sidebar_label:"AngularJS"},o=[{value:"Installation",id:"installation",children:[]},{value:"With a bundler",id:"with-a-bundler",children:[]},{value:"Without a bundler",id:"without-a-bundler",children:[{value:"As a SystemJS module",id:"as-a-systemjs-module",children:[]},{value:"As a global variable",id:"as-a-global-variable",children:[]}]},{value:"Options",id:"options",children:[]},{value:"ES5 Example",id:"es5-example",children:[]}],p={rightToc:o},u="wrapper";function s(e){var a=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(u,Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"single-spa-angularjs is a helper library that helps implement ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://angularjs.org/"}),"AngularJS"),". Check out the ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-angularjs"}),"single-spa-angularjs github"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-angularjs\n")),Object(r.b)("p",null,"Note that you can alternatively ",Object(r.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-angularjs"><\/script>')," and access the library\nvia the ",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaAngularjs")," global variable if that is easier for you."),Object(r.b)("h2",{id:"with-a-bundler"},"With a bundler"),Object(r.b)("p",null,"If you're using a bundler such as webpack, add the following to your entry file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaAngularJS from 'single-spa-angularjs';\nimport angular from 'angular';\n\nconst ngLifecycles = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n});\n\nexport const bootstrap = ngLifecycles.bootstrap;\nexport const mount = ngLifecycles.mount;\nexport const unmount = ngLifecycles.unmount;\n")),Object(r.b)("h2",{id:"without-a-bundler"},"Without a bundler"),Object(r.b)("p",null,"If you're not using a bundler, you'll need to make your angularjs application a SystemJS module or a global variable. The SystemJS\nmodule is preferred, and you can read about it more in the ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/faq.html#is-there-a-recommended-setup"}),"recommended single-spa setup"),"."),Object(r.b)("h3",{id:"as-a-systemjs-module"},"As a SystemJS module"),Object(r.b)("p",null,"Add the following to your AngularJS application. If you're using gulp/grunt to concatenate files together, just create a new file called\n",Object(r.b)("inlineCode",{parentName:"p"},"single-spa-application.js")," and make sure it's included in your final build file."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"System.register([], function(_export) {\n  return {\n    execute: function() {\n      _export(singleSpaAngularJS({\n        angular: angular,\n        mainAngularModule: 'app',\n        uiRouter: true,\n        preserveGlobal: false,\n        template: '<my-component />',\n      }))\n    }\n  }\n})\n")),Object(r.b)("p",null,"Once you do this, you can ",Object(r.b)("inlineCode",{parentName:"p"},"System.import()")," the bundle file and SystemJS + single-spa will know what to do with your module. Your\n",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/configuration.html#loading-function-or-application"}),"loading function")," should be ",Object(r.b)("inlineCode",{parentName:"p"},"System.import('name-of-app')"),". Make sure to\nadd ",Object(r.b)("inlineCode",{parentName:"p"},"name-of-app")," to your ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://single-spa-playground.org/playground/import-map"}),"import map"),"."),Object(r.b)("h3",{id:"as-a-global-variable"},"As a global variable"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"window.myAngularApp = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n})\n")),Object(r.b)("p",null,"Your ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/configuration.html#loading-function-or-application"}),"loading function")," should just be the global variable itself. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication('my-angular-app', myAngularApp, () => true);\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"All options are passed to single-spa-angularjs via the ",Object(r.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(r.b)("inlineCode",{parentName:"p"},"singleSpaAngularJS(opts)"),". The following options are available:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"angular"),": (required) The main angular object, which is generally either exposed onto the window or is available via ",Object(r.b)("inlineCode",{parentName:"li"},"require('angular')")," or ",Object(r.b)("inlineCode",{parentName:"li"},"import angular from 'angular'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that takes in no arguments and returns a DOMElement. This dom element is where the angular\napplication will be bootstrapped, mounted, and unmounted. If not provided, the default is to create a div and append it to ",Object(r.b)("inlineCode",{parentName:"li"},"document.body"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mainAngularModule"),": (required) A string that is the name of the angular module that will be bootstrapped by angular. See ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap"}),"angular docs")," for ",Object(r.b)("inlineCode",{parentName:"li"},"angular.bootstrap()"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uiRouter"),": (optional) If you are using angular-ui-router, set this option to either ",Object(r.b)("inlineCode",{parentName:"li"},"true")," or to a string value. The string value will be the value of the ui-view html attribute. For example, ",Object(r.b)("inlineCode",{parentName:"li"},"uiRouter: 'core'")," will be ",Object(r.b)("inlineCode",{parentName:"li"},'<div ui-view="core" />')," whereas ",Object(r.b)("inlineCode",{parentName:"li"},"uiRouter: true")," turns into ",Object(r.b)("inlineCode",{parentName:"li"},"<div ui-view />"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"preserveGlobal"),": (optional) A boolean that defaults to false. Set if you want to keep angular on the global even after an app unmounts."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"elementId"),": (optional) A string which will be used to identify the element appended to the DOM and bootstrapped by Angular."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"strictDi"),": (optional - part of the bootstrap ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap#usage"}),"config object"),") A boolean that defaults to false. Set if you want to enable StrictDi mode"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"template"),": (optional) An html string that will be inserted into the DOM when the app is mounted. The template goes inside of the element returned by domElementGetter. If not provided, no template will be inserted. When using angular-ui-router, you often do not need to use this since ui-router will be putting a template onto the dom for you.")),Object(r.b)("h2",{id:"es5-example"},"ES5 Example"),Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/joeldenning/single-spa-es5-angularjs"}),"this example repo")))}s.isMDXComponent=!0},357:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return b}));var t=n(0),l=n.n(t),r=l.a.createContext({}),i=function(e){var a=l.a.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},o=function(e){var a=i(e.components);return l.a.createElement(r.Provider,{value:a},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},s=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,p=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),b=t,c=s[o+"."+b]||s[b]||u[b]||r;return n?l.a.createElement(c,Object.assign({},{ref:a},p,{components:n})):l.a.createElement(c,Object.assign({},{ref:a},p))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o[p]="string"==typeof e?e:t,i[1]=o;for(var b=2;b<r;b++)i[b]=n[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);