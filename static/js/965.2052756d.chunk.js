"use strict";(self.webpackChunkawais=self.webpackChunkawais||[]).push([[965],{965:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(791),r=a(413),s=a(885);function l(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var c=l("Tab"),i=l("TabList"),o=l("TabPanel");function d(e,t){return n.Children.map(e,(function(e){return null===e?null:function(e){return c(e)||i(e)||o(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,n.cloneElement)(e,(0,r.Z)((0,r.Z)({},e.props),{},{children:d(e.props.children,t)})):e}))}function u(e,t){return n.Children.forEach(e,(function(e){null!==e&&(c(e)||o(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(i(e)&&t(e),u(e.props.children,t)))}))}var f=a(925);function p(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=p(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var b=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=p(e))&&(n&&(n+=" "),n+=t);return n};function m(e){var t=0;return u(e,(function(e){c(e)&&t++})),t}var h,g=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function v(e){return e&&"getAttribute"in e}function y(e){return v(e)&&e.getAttribute("data-rttab")}function N(e){return v(e)&&"true"===e.getAttribute("aria-disabled")}var x=function(e){var t=(0,n.useRef)([]),a=(0,n.useRef)([]),r=(0,n.useRef)();function s(t,a){t<0||t>=p()||(0,e.onSelect)(t,e.selectedIndex,a)}function l(e){for(var t=p(),a=e+1;a<t;a++)if(!N(v(a)))return a;for(var n=0;n<e;n++)if(!N(v(n)))return n;return e}function u(e){for(var t=e;t--;)if(!N(v(t)))return t;for(t=p();t-- >e;)if(!N(v(t)))return t;return e}function p(){return m(e.children)}function v(e){return t.current["tabs-".concat(e)]}function x(e){var t=e.target;do{if(k(t)){if(N(t))return;return void s([].slice.call(t.parentNode.children).filter(y).indexOf(t),e)}}while(null!=(t=t.parentNode))}function k(e){if(!y(e))return!1;var t=e.parentElement;do{if(t===r.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}e.children;var w=e.className,C=(e.disabledTabClassName,e.domRef),T=(e.focus,e.forceRenderTabPanel,e.onSelect,e.selectedIndex,e.selectedTabClassName,e.selectedTabPanelClassName,e.environment,e.disableUpDownKeys,e.disableLeftRightKeys,(0,f.Z)(e,g));return n.createElement("div",Object.assign({},T,{className:b(w),onClick:x,onKeyDown:function(t){var a=e.direction,n=e.disableUpDownKeys,r=e.disableLeftRightKeys;if(k(t.target)){var c=e.selectedIndex,i=!1,o=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(i=!0,o=!1,x(t)),(r||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(n||38!==t.keyCode&&"ArrowUp"!==t.code)?(r||39!==t.keyCode&&"ArrowRight"!==t.code)&&(n||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(c=function(){for(var e=p();e--;)if(!N(v(e)))return e;return null}(),i=!0,o=!0):36!==t.keyCode&&"Home"!==t.code||(c=function(){for(var e=p(),t=0;t<e;t++)if(!N(v(t)))return t;return null}(),i=!0,o=!0):(c="rtl"===a?u(c):l(c),i=!0,o=!0):(c="rtl"===a?l(c):u(c),i=!0,o=!0),i&&t.preventDefault(),o&&s(c,t)}},ref:function(e){r.current=e,C&&C(e)},"data-rttabs":!0}),function(){var r=0,s=e.children,l=e.disabledTabClassName,u=e.focus,f=e.forceRenderTabPanel,b=e.selectedIndex,m=e.selectedTabClassName,g=e.selectedTabPanelClassName,y=e.environment;a.current=a.current||[];for(var N=a.current.length-p(),x=(0,n.useId)();N++<0;)a.current.push("".concat(x).concat(a.current.length));return d(s,(function(e){var s=e;if(i(e)){var p=0,N=!1;null==h&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{h=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(a){h=!1}}(y);var x=y||("undefined"!==typeof window?window:void 0);h&&x&&(N=n.Children.toArray(e.props.children).filter(c).some((function(e,t){return x.document.activeElement===v(t)}))),s=(0,n.cloneElement)(e,{children:d(e.props.children,(function(e){var r="tabs-".concat(p),s=b===p,c={tabRef:function(e){t.current[r]=e},id:a.current[p],selected:s,focus:s&&(u||N)};return m&&(c.selectedClassName=m),l&&(c.disabledClassName=l),p++,(0,n.cloneElement)(e,c)}))})}else if(o(e)){var k={id:a.current[r],selected:b===r};f&&(k.forceRender=f),g&&(k.selectedClassName=g),r++,s=(0,n.cloneElement)(e,k)}return s}))}())};x.defaultProps={className:"react-tabs",focus:!1},x.propTypes={};var k=x,w=function(e){var t=e.children,a=e.defaultFocus,l=e.defaultIndex,c=e.focusTabOnClick,i=e.onSelect,o=(0,n.useState)(a),d=(0,s.Z)(o,2),u=d[0],f=d[1],p=(0,n.useState)(function(e){return null===e.selectedIndex?1:0}(e)),b=(0,s.Z)(p,1)[0],h=(0,n.useState)(1===b?l||0:null),g=(0,s.Z)(h,2),v=g[0],y=g[1];if((0,n.useEffect)((function(){f(!1)}),[]),1===b){var N=m(t);(0,n.useEffect)((function(){if(null!=v){var e=Math.max(0,N-1);y(Math.min(v,e))}}),[N])}var x=(0,r.Z)({},e);return x.focus=u,x.onSelect=function(e,t,a){"function"===typeof i&&!1===i(e,t,a)||(c&&f(!0),1===b&&y(e))},null!=v&&(x.selectedIndex=v),delete x.defaultFocus,delete x.defaultIndex,delete x.focusTabOnClick,n.createElement(k,x,t)};w.propTypes={},w.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},w.tabsRole="Tabs";var C=w,T=["children","className"],j=function(e){var t=e.children,a=e.className,r=(0,f.Z)(e,T);return n.createElement("ul",Object.assign({},r,{className:b(a),role:"tablist"}),t)};j.tabsRole="TabList",j.propTypes={},j.defaultProps={className:"react-tabs__tab-list"};var R=j,I=a(942),E=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"],P="react-tabs__tab",A={className:P,disabledClassName:"".concat(P,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(P,"--selected")},Z=function(e){var t,a=(0,n.useRef)(),r=e.children,s=e.className,l=e.disabled,c=e.disabledClassName,i=e.focus,o=e.id,d=e.selected,u=e.selectedClassName,p=e.tabIndex,m=e.tabRef,h=(0,f.Z)(e,E);return(0,n.useEffect)((function(){d&&i&&a.current.focus()}),[d,i]),n.createElement("li",Object.assign({},h,{className:b(s,(t={},(0,I.Z)(t,u,d),(0,I.Z)(t,c,l),t)),ref:function(e){a.current=e,m&&m(e)},role:"tab",id:"tab".concat(o),"aria-selected":d?"true":"false","aria-disabled":l?"true":"false","aria-controls":"panel".concat(o),tabIndex:p||(d?"0":null),"data-rttab":!0}),r)};Z.propTypes={},Z.tabsRole="Tab",Z.defaultProps=A;var S=Z,D=["children","className","forceRender","id","selected","selectedClassName"],K="react-tabs__tab-panel",L={className:K,forceRender:!1,selectedClassName:"".concat(K,"--selected")},O=function(e){var t=e.children,a=e.className,r=e.forceRender,s=e.id,l=e.selected,c=e.selectedClassName,i=(0,f.Z)(e,D);return n.createElement("div",Object.assign({},i,{className:b(a,(0,I.Z)({},c,l)),role:"tabpanel",id:"panel".concat(s),"aria-labelledby":"tab".concat(s)}),r||l?t:null)};O.tabsRole="TabPanel",O.propTypes={},O.defaultProps=L;var F=O,U=JSON.parse('[{"id":1,"basicTitle":"Ledger","description":"A fiverr client project dealing with blockchain, built with Next and Tailwind.","link":"https://ledger-design.netlify.app","backgroundImg":"https://media.giphy.com/media/dejmNXDWTU7gmy2Y0N/giphy.gif","category":"next","stack":["next","tailwind"]},{"id":2,"basicTitle":"Febeth","description":"Fabeth is an Austrian play-and-earn gamefi DAO. Febeth partners with game developers across the globe to integrate their games on blockchains.","link":"https://febeth-redesign.netlify.app","backgroundImg":"https://media.giphy.com/media/8LpEhnKQ4olb2/giphy.gif","category":"next","stack":["next","tailwind"]},{"id":3,"basicTitle":"Shroombits","description":"ShroomBits is a collection of cute and unique pixel mushrooms that live on the Ethereum and Matic networks.","link":"https://shroombits-102471.netlify.app","backgroundImg":"https://media.giphy.com/media/uXYy46IRliHQdfX0Jw/giphy.gif","category":"react","stack":["react","tailwind"]},{"id":4,"basicTitle":"Dao-b Wallet","description":"Dao-b Wallet is a decentralized cryptocurrency wallet that supports more than 500 coins and tokens, providing simplicity, safety, and convenience for its users.","link":"https://dao-b-7c8a5a.netlify.app/admin/dashboard","backgroundImg":"https://media.giphy.com/media/RCrvFCK5LTNe5mw4Wv/giphy.gif","category":"react","stack":["react","tailwind"]},{"id":5,"basicTitle":"Unsplash Clone","description":"Responsive images gallery website built with React and Tailwind.","link":"https://unsplash-clone-d3.netlify.app/","backgroundImg":"https://media.giphy.com/media/11y9UBjLh2Rs40/giphy.gif","category":"react","stack":["react","tailwind"]}]'),_=a(143),W=a(184),M=function(e){var t,a=e.project;return(0,W.jsx)("div",{className:"text-white",children:(0,W.jsxs)("div",{style:{backgroundColor:"black",backgroundImage:"url(".concat(a.backgroundImg,")")},className:"relative inline-block overflow-hidden mb-4 sm:h-72 h-44 w-full px-4 rounded-xl bg-no-repeat bg-cover",children:[(0,W.jsx)("h4",{className:"font-bold pt-4 leading-tight pb-2",children:a.basicTitle}),(0,W.jsx)("p",{className:"mb-4 text-sm",children:a.description}),(0,W.jsxs)("p",{className:"capitalize",children:[(0,W.jsx)("b",{children:"Stack:"})," ",null===(t=a.stack)||void 0===t?void 0:t.map((function(e,t){return"".concat(e).concat(t===a.stack.length-1?"":", ")}))]}),(0,W.jsx)("a",{className:"absolute bottom-4 right-4",href:a.link,target:"_blank",rel:"noopener noreferrer",children:(0,W.jsx)("i",{className:"fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"})})]})},a.id)};function X(){var e=(0,n.useRef)(),t=function(e){return U.map((function(t){return t.category===e&&(0,W.jsx)(n.Fragment,{children:(0,W.jsx)(M,{project:t})},t.id)}))};return(0,W.jsxs)("section",{className:"pt-12",children:[(0,W.jsx)(_.Z,{title:"Projects"}),(0,W.jsxs)(C,{className:"mt-10 sticky top-0",children:[(0,W.jsxs)(R,{className:"border-b-[1px] border-gray-600",children:[(0,W.jsx)(S,{children:"React.js"}),(0,W.jsx)(S,{children:"Next.js"})]}),(0,W.jsx)(F,{className:"mt-8",children:(0,W.jsx)("div",{className:"overflow-hidden grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",ref:e,children:t("react")})}),(0,W.jsx)(F,{className:"mt-8",children:(0,W.jsx)("div",{className:"overflow-hidden grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",ref:e,children:t("next")})})]})]})}}}]);
//# sourceMappingURL=965.2052756d.chunk.js.map