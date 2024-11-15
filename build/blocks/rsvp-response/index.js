(()=>{"use strict";var e,s={8474:(e,s,t)=>{const r=window.wp.blocks,n=window.wp.blockEditor,a=window.wp.components,i=window.wp.element,o=window.wp.i18n,l=window.wp.data,p=(e,s="")=>{for(const[t,r]of Object.entries(e)){let e=t;s&&(e+="_"+String(s)),addEventListener(e,(e=>{r(e.detail)}),!1)}};function c(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,s)=>e&&e[s]),GatherPress)}const d=window.ReactJSXRuntime,u=({item:e,activeItem:s=!1,count:t,onTitleClick:r,defaultLimit:n})=>{const{title:a,value:o}=e,l=!(0===t&&"attending"!==o),p=s?"span":"a",u=c("eventDetails.postId"),v=t>n;return(0,i.useEffect)((()=>{s&&((e,s="")=>{for(const[t,r]of Object.entries(e)){let e=t;s&&(e+="_"+String(s));const n=new CustomEvent(e,{detail:r});dispatchEvent(n)}})({setRsvpSeeAllLink:v},u)})),l?(0,d.jsxs)("div",{className:"gatherpress-rsvp-response__navigation-item",children:[(0,d.jsx)(p,{className:"gatherpress-rsvp-response__anchor","data-item":o,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gatherpress-rsvp-${o}`,onClick:e=>r(e,o),children:a}),(0,d.jsxs)("span",{className:"gatherpress-rsvp-response__count",children:["(",t,")"]})]}):""},v=({items:e,activeValue:s,onTitleClick:r,defaultLimit:n})=>{var a;const o={all:0,attending:0,not_attending:0,waiting_list:0},l=null!==(a=c("eventDetails.responses"))&&void 0!==a?a:{};for(const[e,s]of Object.entries(l))o[e]=s.count;const[v,h]=(0,i.useState)(o),[g,m]=(0,i.useState)(!1),[_,f]=(0,i.useState)(!0),x=_?"span":"a";p({setRsvpCount:h},c("eventDetails.postId"));let j=0;const b=e.map(((e,t)=>{const a=e.value===s;return a&&(j=t),(0,d.jsx)(u,{item:e,count:v[e.value],activeItem:a,onTitleClick:r,defaultLimit:n},t)}));return(0,i.useEffect)((()=>{t.g.document.addEventListener("click",(({target:e})=>{e.closest(".gatherpress-rsvp-response__navigation-active")||m(!1)})),t.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&m(!1)}))})),(0,i.useEffect)((()=>{0===v.not_attending&&0===v.waiting_list?f(!0):f(!1)}),[v]),(0,d.jsxs)("div",{className:"gatherpress-rsvp-response__navigation-wrapper",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{href:"#",className:"gatherpress-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),m(!g)})(e),children:e[j].title})," ",(0,d.jsxs)("span",{children:["(",v[s],")"]})]}),!_&&g&&(0,d.jsx)("nav",{className:"gatherpress-rsvp-response__navigation",children:b})]})},h=({items:e,activeValue:s,onTitleClick:t,rsvpLimit:r,setRsvpLimit:n,defaultLimit:a})=>{let l;l=!1===r?(0,o.__)("See fewer","gatherpress"):(0,o.__)("See all","gatherpress");let u=!1;const h=c("eventDetails.responses");var g;h&&h[s]&&(u=(null!==(g=c("eventDetails.responses")[s].count)&&void 0!==g?g:0)>a);const[m,_]=(0,i.useState)(u);return p({setRsvpSeeAllLink:_},c("eventDetails.postId")),(0,d.jsxs)("div",{className:"gatherpress-rsvp-response__header",children:[(0,d.jsx)("div",{className:"dashicons dashicons-groups"}),(0,d.jsx)(v,{items:e,activeValue:s,onTitleClick:t,defaultLimit:a}),m&&(0,d.jsx)("div",{className:"gatherpress-rsvp-response__see-all",children:(0,d.jsx)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),n(!1===r&&a)})(e),children:l})})]})},g=({value:e,limit:s,responses:t=[]})=>{let r="";return"object"==typeof t&&void 0!==t[e]&&(t=[...t[e].responses],s&&(t=t.splice(0,s)),r=t.map(((e,s)=>{const{profile:t,name:r,photo:n,role:a}=e,{guests:i}=e;return(0,d.jsxs)("div",{className:"gatherpress-rsvp-response__item",children:[(0,d.jsx)("figure",{className:"gatherpress-rsvp-response__member-avatar",children:""!==t?(0,d.jsx)("a",{href:t,children:(0,d.jsx)("img",{alt:r,title:r,src:n})}):(0,d.jsx)("img",{alt:r,title:r,src:n})}),(0,d.jsxs)("div",{className:"gatherpress-rsvp-response__member-info",children:[(0,d.jsx)("div",{className:"gatherpress-rsvp-response__member-name",children:""!==t?(0,d.jsx)("a",{href:t,title:r,children:r}):(0,d.jsx)("span",{children:r})}),(0,d.jsx)("div",{className:"gatherpress-rsvp-response__member-role",children:a}),0!==i&&(0,d.jsx)("small",{className:"gatherpress-rsvp-response__guests",children:(0,o.sprintf)(/* translators: %d: Number of guests. */ /* translators: %d: Number of guests. */
(0,o._n)("+%d guest","+%d guests",i,"gatherpress"),i)})]})]},s)}))),(0,d.jsxs)(d.Fragment,{children:["attending"===e&&0===r.length&&(0,d.jsx)("div",{className:"gatherpress-rsvp-response__no-responses",children:!1===c("eventDetails.hasEventPast")?(0,o.__)("No one is attending this event yet.","gatherpress"):(0,o.__)("No one went to this event.","gatherpress")}),r]})},m=({items:e,activeValue:s,limit:t=!1})=>{const r=c("eventDetails.postId"),[n,a]=(0,i.useState)(c("eventDetails.responses"));p({setRsvpResponse:a},r);const o=e.map(((e,r)=>{const{value:a}=e;return a===s?(0,d.jsx)("div",{className:"gatherpress-rsvp-response__items",id:`gatherpress-rsvp-${a}`,role:"tabpanel","aria-labelledby":`gatherpress-rsvp-${a}-tab`,children:(0,d.jsx)(g,{value:a,limit:t,responses:n})},r):""}));return(0,d.jsx)("div",{className:"gatherpress-rsvp-response__content",children:o})},_=({defaultStatus:e="attending"})=>{const s=c("eventDetails.hasEventPast"),t=[{title:!1===s?(0,o._x)("Attending","Responded Status","gatherpress"):(0,o._x)("Went","Responded Status","gatherpress"),value:"attending"},{title:!1===s?(0,o._x)("Waiting List","Responded Status","gatherpress"):(0,o._x)("Wait Listed","Responded Status","gatherpress"),value:"waiting_list"},{title:!1===s?(0,o._x)("Not Attending","Responded Status","gatherpress"):(0,o._x)("Didn't Go","Responded Status","gatherpress"),value:"not_attending"}],[r,n]=(0,i.useState)(e),[a,l]=(0,i.useState)(8);return p({setRsvpStatus:n},c("eventDetails.postId")),t.some((e=>e.value===r))||n(e),(0,d.jsxs)("div",{className:"gatherpress-rsvp-response",children:[(0,d.jsx)(h,{items:t,activeValue:r,onTitleClick:(e,s)=>{e.preventDefault(),n(s)},rsvpLimit:a,setRsvpLimit:l,defaultLimit:8}),(0,d.jsx)(m,{items:t,activeValue:r,limit:a})]})},f=window.wp.apiFetch;var x=t.n(f);const j=window.wp.coreData,b=({defaultStatus:e,setDefaultStatus:s})=>{var t;const r=c("eventDetails.responses"),n=c("eventDetails.postId"),[p,u]=(0,i.useState)(r),v=p[e].responses,{userList:h}=(0,l.useSelect)((e=>{const{getEntityRecords:s}=e(j.store);return{userList:s("root","user",{per_page:-1})}}),[]),g=null!==(t=h?.reduce(((e,s)=>({...e,[s.username]:s})),{}))&&void 0!==t?t:{},m=(e,s="attending")=>{x()({path:c("urls.eventRestApi")+"/rsvp",method:"POST",data:{post_id:n,status:s,user_id:e,_wpnonce:c("misc.nonce")}}).then((e=>{u(e.responses),function(e,s){if("object"!=typeof GatherPress)return;const t="eventDetails.responses".split("."),r=t.pop();t.reduce(((e,s)=>{var t;return null!==(t=e[s])&&void 0!==t?t:e[s]={}}),GatherPress)[r]=s}(0,e.responses)}))};return(0,d.jsxs)("div",{className:"gatherpress-rsvp-response",children:[(0,d.jsx)(a.SelectControl,{label:(0,o.__)("Status","gatherpress"),value:e,options:[{label:(0,o._x)("Attending","List Status","gatherpress"),value:"attending"},{label:(0,o._x)("Waiting List","List Status","gatherpress"),value:"waiting_list"},{label:(0,o._x)("Not Attending","List Status","gatherpress"),value:"not_attending"}],onChange:e=>s(e)}),(0,d.jsx)(a.FormTokenField,{label:(0,o.__)("Members","gatherpress"),value:v&&v.map((e=>({id:e.id,value:e.name}))),tokenizeOnSpace:!0,onChange:async s=>{s.length>v.length?s.forEach((s=>{g[s]&&m(g[s].id,e)})):v.forEach((e=>{!1===s.some((s=>s.id===e.id))&&m(e.id,"no_status")}))},suggestions:Object.keys(g),maxSuggestions:20},"query-controls-topics-select")]})},w=e=>{const{isSelected:s}=e,t=s?"none":"block";return(0,d.jsxs)("div",{style:{position:"relative"},children:[e.children,(0,d.jsx)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:t}})]})},S=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/rsvp-response","version":"1.0.1","title":"RSVP Response","category":"gatherpress","icon":"groups","example":{},"description":"Displays a list of members who have confirmed their attendance for an event.","attributes":{"blockId":{"type":"string"},"content":{"type":"string"},"color":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./rsvp-response.js","render":"file:./render.php"}');(0,r.registerBlockType)(S,{edit:()=>{const e=(0,l.select)("core").canUser("create","posts"),s=(0,n.useBlockProps)(),[t,r]=(0,i.useState)(!1),[p,c]=(0,i.useState)("attending");return(0,d.jsxs)("div",{...s,children:[t&&(0,d.jsx)(b,{defaultStatus:p,setDefaultStatus:c}),!t&&(0,d.jsx)(w,{children:(0,d.jsx)(_,{defaultStatus:p})}),e&&(0,d.jsx)(n.BlockControls,{children:(0,d.jsx)(a.ToolbarGroup,{children:(0,d.jsx)(a.ToolbarButton,{label:(0,o.__)("Edit","gatherpress"),text:t?(0,o.__)("Preview","gatherpress"):(0,o.__)("Edit","gatherpress"),onClick:e=>{e.preventDefault(),r(!t)}})})})]})},save:()=>null})}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return s[e](a,a.exports,r),a.exports}r.m=s,e=[],r.O=(s,t,n,a)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],a=e[c][2];for(var o=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(o=!1,a<i&&(i=a));if(o){e.splice(c--,1);var p=n();void 0!==p&&(s=p)}}return s}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,n,a]},r.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return r.d(s,{a:s}),s},r.d=(e,s)=>{for(var t in s)r.o(s,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={788:0,556:0};r.O.j=s=>0===e[s];var s=(s,t)=>{var n,a,i=t[0],o=t[1],l=t[2],p=0;if(i.some((s=>0!==e[s]))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var c=l(r)}for(s&&s(t);p<i.length;p++)a=i[p],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},t=self.webpackChunkgatherpress=self.webpackChunkgatherpress||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})();var n=r.O(void 0,[556],(()=>r(8474)));n=r.O(n)})();