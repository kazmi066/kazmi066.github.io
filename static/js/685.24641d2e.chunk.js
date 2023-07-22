"use strict";(self.webpackChunkawais=self.webpackChunkawais||[]).push([[685],{685:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(791),a=n(942);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(885);function l(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var o=l("Tab"),d=l("TabList"),u=l("TabPanel");function f(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return o(e)||d(e)||u(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,r.cloneElement)(e,i(i({},e.props),{},{children:f(e.props.children,t)})):e}))}function p(e,t){return r.Children.forEach(e,(function(e){null!==e&&(o(e)||u(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(d(e)&&t(e),p(e.props.children,t)))}))}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var h=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r};function g(e){var t=0;return p(e,(function(e){o(e)&&t++})),t}var v,y=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function x(e){return e&&"getAttribute"in e}function N(e){return x(e)&&e.getAttribute("data-rttab")}function w(e){return x(e)&&"true"===e.getAttribute("aria-disabled")}var j=function(e){var t=(0,r.useRef)([]),n=(0,r.useRef)([]),a=(0,r.useRef)();function c(t,n){t<0||t>=l()||(0,e.onSelect)(t,e.selectedIndex,n)}function i(e){for(var t=l(),n=e+1;n<t;n++)if(!w(p(n)))return n;for(var r=0;r<e;r++)if(!w(p(r)))return r;return e}function s(e){for(var t=e;t--;)if(!w(p(t)))return t;for(t=l();t-- >e;)if(!w(p(t)))return t;return e}function l(){return g(e.children)}function p(e){return t.current["tabs-".concat(e)]}function m(e){var t=e.target;do{if(x(t)){if(w(t))return;return void c([].slice.call(t.parentNode.children).filter(N).indexOf(t),e)}}while(null!=(t=t.parentNode))}function x(e){if(!N(e))return!1;var t=e.parentElement;do{if(t===a.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}e.children;var j=e.className,k=(e.disabledTabClassName,e.domRef),C=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,e.disableLeftRightKeys,b(e,y));return r.createElement("div",Object.assign({},C,{className:h(j),onClick:m,onKeyDown:function(t){var n=e.direction,r=e.disableUpDownKeys,a=e.disableLeftRightKeys;if(x(t.target)){var o=e.selectedIndex,d=!1,u=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(d=!0,u=!1,m(t)),(a||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(a||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(o=function(){for(var e=l();e--;)if(!w(p(e)))return e;return null}(),d=!0,u=!0):36!==t.keyCode&&"Home"!==t.code||(o=function(){for(var e=l(),t=0;t<e;t++)if(!w(p(t)))return t;return null}(),d=!0,u=!0):(o="rtl"===n?s(o):i(o),d=!0,u=!0):(o="rtl"===n?i(o):s(o),d=!0,u=!0),d&&t.preventDefault(),u&&c(o,t)}},ref:function(e){a.current=e,k&&k(e)},"data-rttabs":!0}),function(){var a=0,c=e.children,i=e.disabledTabClassName,s=e.focus,b=e.forceRenderTabPanel,m=e.selectedIndex,h=e.selectedTabClassName,g=e.selectedTabPanelClassName,y=e.environment;n.current=n.current||[];for(var x=n.current.length-l(),N=(0,r.useId)();x++<0;)n.current.push("".concat(N).concat(n.current.length));return f(c,(function(e){var c=e;if(d(e)){var l=0,x=!1;null==v&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{v=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){v=!1}}(y);var N=y||("undefined"!==typeof window?window:void 0);v&&N&&(x=r.Children.toArray(e.props.children).filter(o).some((function(e,t){return N.document.activeElement===p(t)}))),c=(0,r.cloneElement)(e,{children:f(e.props.children,(function(e){var a="tabs-".concat(l),c=m===l,o={tabRef:function(e){t.current[a]=e},id:n.current[l],selected:c,focus:c&&(s||x)};return h&&(o.selectedClassName=h),i&&(o.disabledClassName=i),l++,(0,r.cloneElement)(e,o)}))})}else if(u(e)){var w={id:n.current[a],selected:m===a};b&&(w.forceRender=b),g&&(w.selectedClassName=g),a++,c=(0,r.cloneElement)(e,w)}return c}))}())};j.defaultProps={className:"react-tabs",focus:!1},j.propTypes={};var k=j,C=function(e){var t=e.children,n=e.defaultFocus,a=e.defaultIndex,c=e.focusTabOnClick,l=e.onSelect,o=(0,r.useState)(n),d=(0,s.Z)(o,2),u=d[0],f=d[1],p=(0,r.useState)(function(e){return null===e.selectedIndex?1:0}(e)),b=(0,s.Z)(p,1)[0],m=(0,r.useState)(1===b?a||0:null),h=(0,s.Z)(m,2),v=h[0],y=h[1];if((0,r.useEffect)((function(){f(!1)}),[]),1===b){var x=g(t);(0,r.useEffect)((function(){if(null!=v){var e=Math.max(0,x-1);y(Math.min(v,e))}}),[x])}var N=i({},e);return N.focus=u,N.onSelect=function(e,t,n){"function"===typeof l&&!1===l(e,t,n)||(c&&f(!0),1===b&&y(e))},null!=v&&(N.selectedIndex=v),delete N.defaultFocus,delete N.defaultIndex,delete N.focusTabOnClick,r.createElement(k,N,t)};C.propTypes={},C.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},C.tabsRole="Tabs";var T=C,O=["children","className"],R=function(e){var t=e.children,n=e.className,a=b(e,O);return r.createElement("ul",Object.assign({},a,{className:h(n),role:"tablist"}),t)};R.tabsRole="TabList",R.propTypes={},R.defaultProps={className:"react-tabs__tab-list"};var P=R,E=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"],I="react-tabs__tab",S={className:I,disabledClassName:"".concat(I,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(I,"--selected")},A=function(e){var t,n=(0,r.useRef)(),c=e.children,i=e.className,s=e.disabled,l=e.disabledClassName,o=e.focus,d=e.id,u=e.selected,f=e.selectedClassName,p=e.tabIndex,m=e.tabRef,g=b(e,E);return(0,r.useEffect)((function(){u&&o&&n.current.focus()}),[u,o]),r.createElement("li",Object.assign({},g,{className:h(i,(t={},(0,a.Z)(t,f,u),(0,a.Z)(t,l,s),t)),ref:function(e){n.current=e,m&&m(e)},role:"tab",id:"tab".concat(d),"aria-selected":u?"true":"false","aria-disabled":s?"true":"false","aria-controls":"panel".concat(d),tabIndex:p||(u?"0":null),"data-rttab":!0}),c)};A.propTypes={},A.tabsRole="Tab",A.defaultProps=S;var D=A,K=["children","className","forceRender","id","selected","selectedClassName"],L="react-tabs__tab-panel",U={className:L,forceRender:!1,selectedClassName:"".concat(L,"--selected")},Z=function(e){var t=e.children,n=e.className,c=e.forceRender,i=e.id,s=e.selected,l=e.selectedClassName,o=b(e,K);return r.createElement("div",Object.assign({},o,{className:h(n,(0,a.Z)({},l,s)),role:"tabpanel",id:"panel".concat(i),"aria-labelledby":"tab".concat(i)}),c||s?t:null)};Z.tabsRole="TabPanel",Z.propTypes={},Z.defaultProps=U;var F=Z,_=n(489),z=n(714),M=n(677),q=n(114),B=n(532),W=n(521),H=(n(265),[{id:1,basicTitle:"Ledger",description:"A fiverr client project dealing with blockchain, built with Next and Tailwind.",link:"https://ledger-design.netlify.app",gradient:"gradient-1",category:"next",picture:_,stack:["next","tailwind"]},{id:2,basicTitle:"Treasure Market",description:"Treasure is an online platform where people can collect and preserve rare and historic items, build an awesome collection, and comment on their collections and experiences.",link:"https://www.treasuremarket.com",gradient:"gradient-7",category:"next",picture:M,stack:["next","material-ui","next-auth","redux"]},{id:3,basicTitle:"Shroombits",description:"ShroomBits is a collection of cute and unique pixel mushrooms that live on the Ethereum and Matic networks.",link:"https://shroombits-102471.netlify.app",gradient:"gradient-3",category:"react",picture:B,stack:["react","tailwind"]},{id:5,basicTitle:"Unsplash Clone",description:"Responsive images gallery website built with React and Tailwind.",link:"https://unsplash-clone-d3.netlify.app/",githubUrl:"https://github.com/kazmi066/unsplash-clone",gradient:"gradient-5",category:"react",picture:W,stack:["react","tailwind"]},{id:4,basicTitle:"Dao-b Wallet",description:"Dao-b Wallet is a decentralized cryptocurrency wallet that supports more than 500 coins and tokens, providing simplicity, safety, and convenience for its users.",link:"https://dao-b-7c8a5a.netlify.app/admin/dashboard",gradient:"gradient-4",category:"react",picture:q,stack:["react","tailwind","redux"]},{id:6,basicTitle:"Febeth",description:"Fabeth is an Austrian play-and-earn gamefi DAO. Febeth partners with game developers across the globe to integrate their games on blockchains.",link:"https://febeth-redesign.netlify.app",gradient:"gradient-2",category:"next",picture:z,stack:["next","tailwind"]}]),G=n(143),J=n(184),Q=function(e){var t=e.url,n=e.children;return t&&(0,J.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})},V=function(e){var t,n=e.project;return(0,J.jsx)("div",{className:"text-white relative group",children:(0,J.jsxs)("div",{className:"gradient gradient-".concat(n.id," relative inline-block overflow-hidden mb-4 py-4 w-full px-4 rounded-xl bg-no-repeat bg-cover"),children:[(0,J.jsx)("div",{className:"project-card-overlay"}),(0,J.jsx)("img",{src:n.picture,alt:"Project pic",className:"rounded-lg mb-6"}),(0,J.jsx)("h4",{className:"font-bold leading-tight pb-2",children:n.basicTitle}),(0,J.jsx)("p",{className:"mb-4 text-sm",children:n.description}),(0,J.jsxs)("p",{className:"capitalize text-sm",children:[(0,J.jsx)("span",{className:"text-[16px] font-medium",children:"Stack:"})," ",null===(t=n.stack)||void 0===t?void 0:t.map((function(e,t){return"".concat(e).concat(t===n.stack.length-1?"":", ")}))]}),(0,J.jsx)("div",{className:"absolute bottom-4 right-4 group-hover:opacity-100 opacity-0 transition-opacity",children:(0,J.jsxs)("div",{className:"flex items-center gap-2",children:[(0,J.jsx)(Q,{url:n.githubUrl,children:(0,J.jsx)("i",{className:"fa-brands fa-github bg-white text-black p-2 rounded-full"})}),(0,J.jsx)(Q,{url:n.link,children:(0,J.jsx)("i",{className:"fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"})})]})})]})},n.id)};function X(){var e=(0,r.useRef)(),t=function(e){return H.map((function(t){return t.category===e&&(0,J.jsx)(r.Fragment,{children:(0,J.jsx)(V,{project:t})},t.id)}))};return(0,J.jsxs)("section",{className:"pt-12",children:[(0,J.jsx)(G.Z,{title:"Projects"}),(0,J.jsxs)(T,{className:"mt-10",children:[(0,J.jsxs)(P,{className:"border-b-[1px] border-gray-600",children:[(0,J.jsx)(D,{children:"React.js"}),(0,J.jsx)(D,{children:"Next.js"})]}),(0,J.jsx)(F,{className:"mt-8 ",children:(0,J.jsx)("div",{className:"overflow-hidden sm:columns-2 columns-auto gap-4",ref:e,children:t("react")})}),(0,J.jsx)(F,{className:"mt-8",children:(0,J.jsx)("div",{className:"overflow-hidden sm:columns-2 columns-auto gap-4",ref:e,children:t("next")})})]})]})}},114:function(e,t,n){e.exports=n.p+"static/media/daoB.21c5c479c470756d5b06.png"},714:function(e,t,n){e.exports=n.p+"static/media/febeth.f6fe49b65c5cebbca492.png"},489:function(e,t,n){e.exports=n.p+"static/media/ledger.cfd9191589bd87bd5c13.png"},532:function(e,t,n){e.exports=n.p+"static/media/shroombits.82daa7748331979532b0.png"},677:function(e,t,n){e.exports=n.p+"static/media/treasure.5efd8f367ea01fe6a07b.png"},521:function(e,t,n){e.exports=n.p+"static/media/unsplash.c109096300f5a3991790.png"},265:function(e,t,n){e.exports=n.p+"static/media/zeej.f54d665121435bbb600d.png"}}]);
//# sourceMappingURL=685.24641d2e.chunk.js.map