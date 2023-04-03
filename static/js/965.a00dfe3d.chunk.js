"use strict";(self.webpackChunkawais=self.webpackChunkawais||[]).push([[965],{965:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(791),r=n(413),s=n(885);function l(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var i=l("Tab"),c=l("TabList"),d=l("TabPanel");function o(e,t){return a.Children.map(e,(function(e){return null===e?null:function(e){return i(e)||c(e)||d(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,a.cloneElement)(e,(0,r.Z)((0,r.Z)({},e.props),{},{children:o(e.props.children,t)})):e}))}function u(e,t){return a.Children.forEach(e,(function(e){null!==e&&(i(e)||d(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(c(e)&&t(e),u(e.props.children,t)))}))}var f=n(925);function p(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var b=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(a&&(a+=" "),a+=t);return a};function m(e){var t=0;return u(e,(function(e){i(e)&&t++})),t}var h,g=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function v(e){return e&&"getAttribute"in e}function y(e){return v(e)&&e.getAttribute("data-rttab")}function N(e){return v(e)&&"true"===e.getAttribute("aria-disabled")}var x=function(e){var t=(0,a.useRef)([]),n=(0,a.useRef)([]),r=(0,a.useRef)();function s(t,n){t<0||t>=p()||(0,e.onSelect)(t,e.selectedIndex,n)}function l(e){for(var t=p(),n=e+1;n<t;n++)if(!N(v(n)))return n;for(var a=0;a<e;a++)if(!N(v(a)))return a;return e}function u(e){for(var t=e;t--;)if(!N(v(t)))return t;for(t=p();t-- >e;)if(!N(v(t)))return t;return e}function p(){return m(e.children)}function v(e){return t.current["tabs-".concat(e)]}function x(e){var t=e.target;do{if(w(t)){if(N(t))return;return void s([].slice.call(t.parentNode.children).filter(y).indexOf(t),e)}}while(null!=(t=t.parentNode))}function w(e){if(!y(e))return!1;var t=e.parentElement;do{if(t===r.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}e.children;var k=e.className,C=(e.disabledTabClassName,e.domRef),T=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,e.disableLeftRightKeys,(0,f.Z)(e,g));return a.createElement("div",Object.assign({},T,{className:b(k),onClick:x,onKeyDown:function(t){var n=e.direction,a=e.disableUpDownKeys,r=e.disableLeftRightKeys;if(w(t.target)){var i=e.selectedIndex,c=!1,d=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(c=!0,d=!1,x(t)),(r||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(a||38!==t.keyCode&&"ArrowUp"!==t.code)?(r||39!==t.keyCode&&"ArrowRight"!==t.code)&&(a||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(i=function(){for(var e=p();e--;)if(!N(v(e)))return e;return null}(),c=!0,d=!0):36!==t.keyCode&&"Home"!==t.code||(i=function(){for(var e=p(),t=0;t<e;t++)if(!N(v(t)))return t;return null}(),c=!0,d=!0):(i="rtl"===n?u(i):l(i),c=!0,d=!0):(i="rtl"===n?l(i):u(i),c=!0,d=!0),c&&t.preventDefault(),d&&s(i,t)}},ref:function(e){r.current=e,C&&C(e)},"data-rttabs":!0}),function(){var r=0,s=e.children,l=e.disabledTabClassName,u=e.focus,f=e.forceRenderTabPanel,b=e.selectedIndex,m=e.selectedTabClassName,g=e.selectedTabPanelClassName,y=e.environment;n.current=n.current||[];for(var N=n.current.length-p(),x=(0,a.useId)();N++<0;)n.current.push("".concat(x).concat(n.current.length));return o(s,(function(e){var s=e;if(c(e)){var p=0,N=!1;null==h&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{h=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){h=!1}}(y);var x=y||("undefined"!==typeof window?window:void 0);h&&x&&(N=a.Children.toArray(e.props.children).filter(i).some((function(e,t){return x.document.activeElement===v(t)}))),s=(0,a.cloneElement)(e,{children:o(e.props.children,(function(e){var r="tabs-".concat(p),s=b===p,i={tabRef:function(e){t.current[r]=e},id:n.current[p],selected:s,focus:s&&(u||N)};return m&&(i.selectedClassName=m),l&&(i.disabledClassName=l),p++,(0,a.cloneElement)(e,i)}))})}else if(d(e)){var w={id:n.current[r],selected:b===r};f&&(w.forceRender=f),g&&(w.selectedClassName=g),r++,s=(0,a.cloneElement)(e,w)}return s}))}())};x.defaultProps={className:"react-tabs",focus:!1},x.propTypes={};var w=x,k=function(e){var t=e.children,n=e.defaultFocus,l=e.defaultIndex,i=e.focusTabOnClick,c=e.onSelect,d=(0,a.useState)(n),o=(0,s.Z)(d,2),u=o[0],f=o[1],p=(0,a.useState)(function(e){return null===e.selectedIndex?1:0}(e)),b=(0,s.Z)(p,1)[0],h=(0,a.useState)(1===b?l||0:null),g=(0,s.Z)(h,2),v=g[0],y=g[1];if((0,a.useEffect)((function(){f(!1)}),[]),1===b){var N=m(t);(0,a.useEffect)((function(){if(null!=v){var e=Math.max(0,N-1);y(Math.min(v,e))}}),[N])}var x=(0,r.Z)({},e);return x.focus=u,x.onSelect=function(e,t,n){"function"===typeof c&&!1===c(e,t,n)||(i&&f(!0),1===b&&y(e))},null!=v&&(x.selectedIndex=v),delete x.defaultFocus,delete x.defaultIndex,delete x.focusTabOnClick,a.createElement(w,x,t)};k.propTypes={},k.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},k.tabsRole="Tabs";var C=k,T=["children","className"],j=function(e){var t=e.children,n=e.className,r=(0,f.Z)(e,T);return a.createElement("ul",Object.assign({},r,{className:b(n),role:"tablist"}),t)};j.tabsRole="TabList",j.propTypes={},j.defaultProps={className:"react-tabs__tab-list"};var R=j,E=n(942),Z=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"],I="react-tabs__tab",P={className:I,disabledClassName:"".concat(I,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(I,"--selected")},A=function(e){var t,n=(0,a.useRef)(),r=e.children,s=e.className,l=e.disabled,i=e.disabledClassName,c=e.focus,d=e.id,o=e.selected,u=e.selectedClassName,p=e.tabIndex,m=e.tabRef,h=(0,f.Z)(e,Z);return(0,a.useEffect)((function(){o&&c&&n.current.focus()}),[o,c]),a.createElement("li",Object.assign({},h,{className:b(s,(t={},(0,E.Z)(t,u,o),(0,E.Z)(t,i,l),t)),ref:function(e){n.current=e,m&&m(e)},role:"tab",id:"tab".concat(d),"aria-selected":o?"true":"false","aria-disabled":l?"true":"false","aria-controls":"panel".concat(d),tabIndex:p||(o?"0":null),"data-rttab":!0}),r)};A.propTypes={},A.tabsRole="Tab",A.defaultProps=P;var S=A,D=["children","className","forceRender","id","selected","selectedClassName"],O="react-tabs__tab-panel",K={className:O,forceRender:!1,selectedClassName:"".concat(O,"--selected")},L=function(e){var t=e.children,n=e.className,r=e.forceRender,s=e.id,l=e.selected,i=e.selectedClassName,c=(0,f.Z)(e,D);return a.createElement("div",Object.assign({},c,{className:b(n,(0,E.Z)({},i,l)),role:"tabpanel",id:"panel".concat(s),"aria-labelledby":"tab".concat(s)}),r||l?t:null)};L.tabsRole="TabPanel",L.propTypes={},L.defaultProps=K;var F=L,_=JSON.parse('[{"id":1,"basicTitle":"Ledger","description":"A fiverr client project dealing with blockchain, built with Next and Tailwind.","link":"https://ledger-design.netlify.app","gradient":"gradient-1","category":"next","stack":["next","tailwind"]},{"id":2,"basicTitle":"Febeth","description":"Fabeth is an Austrian play-and-earn gamefi DAO. Febeth partners with game developers across the globe to integrate their games on blockchains.","link":"https://febeth-redesign.netlify.app","gradient":"gradient-2","category":"next","stack":["next","tailwind"]},{"id":3,"basicTitle":"Shroombits","description":"ShroomBits is a collection of cute and unique pixel mushrooms that live on the Ethereum and Matic networks.","link":"https://shroombits-102471.netlify.app","gradient":"gradient-3","category":"react","stack":["react","tailwind"]},{"id":4,"basicTitle":"Dao-b Wallet","description":"Dao-b Wallet is a decentralized cryptocurrency wallet that supports more than 500 coins and tokens, providing simplicity, safety, and convenience for its users.","link":"https://dao-b-7c8a5a.netlify.app/admin/dashboard","gradient":"gradient-4","category":"react","stack":["react","tailwind"]},{"id":5,"basicTitle":"Unsplash Clone","description":"Responsive images gallery website built with React and Tailwind.","link":"https://unsplash-clone-d3.netlify.app/","gradient":"gradient-5","category":"react","stack":["react","tailwind"]},{"id":5,"basicTitle":"Zeej","description":"ZEEJ Events provides end-to-end event solutions powered by proprietary data and algorithms and executed by partners vetted for quality.","link":"https://zeej.netlify.app/","gradient":"gradient-6","category":"next","stack":["next","tailwind"]}]'),U=n(143),q=n(184),z=function(e){var t,n=e.project;return(0,q.jsx)("div",{className:"text-white",children:(0,q.jsxs)("div",{className:"gradient gradient-".concat(n.id," relative inline-block overflow-hidden mb-4 py-4 sm:h-72 h-auto w-full px-4 rounded-xl bg-no-repeat bg-cover"),children:[(0,q.jsx)("h4",{className:"font-bold leading-tight pb-2",children:n.basicTitle}),(0,q.jsx)("p",{className:"mb-4 text-sm",children:n.description}),(0,q.jsxs)("p",{className:"capitalize",children:[(0,q.jsx)("b",{children:"Stack:"})," ",null===(t=n.stack)||void 0===t?void 0:t.map((function(e,t){return"".concat(e).concat(t===n.stack.length-1?"":", ")}))]}),(0,q.jsx)("a",{className:"absolute bottom-4 right-4",href:n.link,target:"_blank",rel:"noopener noreferrer",children:(0,q.jsx)("i",{className:"fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"})})]})},n.id)};function M(){var e=(0,a.useRef)(),t=function(e){return _.map((function(t){return t.category===e&&(0,q.jsx)(a.Fragment,{children:(0,q.jsx)(z,{project:t})},t.id)}))};return(0,q.jsxs)("section",{className:"pt-12",children:[(0,q.jsx)(U.Z,{title:"Projects"}),(0,q.jsxs)(C,{className:"mt-10",children:[(0,q.jsxs)(R,{className:"border-b-[1px] border-gray-600",children:[(0,q.jsx)(S,{children:"React.js"}),(0,q.jsx)(S,{children:"Next.js"})]}),(0,q.jsx)(F,{className:"mt-8",children:(0,q.jsx)("div",{className:"overflow-hidden grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",ref:e,children:t("react")})}),(0,q.jsx)(F,{className:"mt-8",children:(0,q.jsx)("div",{className:"overflow-hidden grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",ref:e,children:t("next")})})]})]})}}}]);
//# sourceMappingURL=965.a00dfe3d.chunk.js.map