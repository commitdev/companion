"use strict";(self.webpackChunkcompanion=self.webpackChunkcompanion||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},u="Tutorial Intro",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/companion/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/companion/docs/tutorial-basics/create-a-page"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,o.kt)("p",null,"Or ",(0,o.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,o.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,o.kt)("p",null,"Generate a new Docusaurus site using the ",(0,o.kt)("strong",{parentName:"p"},"classic template"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,o.kt)("h2",{id:"start-your-site"},"Start your site"),(0,o.kt)("p",null,"Run the development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,o.kt)("p",null,"Your site starts at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,o.kt)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}d.isMDXComponent=!0}}]);