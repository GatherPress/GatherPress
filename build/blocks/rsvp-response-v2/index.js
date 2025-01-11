(()=>{"use strict";var e,t={8392:(e,t,s)=>{const r=window.wp.blocks,n=window.wp.blockEditor,a=window.wp.i18n,o=window.wp.components,i=window.wp.element,p=window.wp.apiFetch;var l=s.n(p);const d=window.wp.data,c=window.wp.coreData;function u(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}const g=window.ReactJSXRuntime,h=({defaultStatus:e,setDefaultStatus:t})=>{var s;const r=u("eventDetails.responses"),n=u("eventDetails.postId"),[p,h]=(0,i.useState)(r),v=p[e].responses,{userList:m}=(0,d.useSelect)((e=>{const{getEntityRecords:t}=e(c.store);return{userList:t("root","user",{per_page:-1})}}),[]),f=null!==(s=m?.reduce(((e,t)=>({...e,[t.username]:t})),{}))&&void 0!==s?s:{},w=(e,t="attending")=>{l()({path:u("urls.eventApiPath")+"/rsvp",method:"POST",data:{post_id:n,status:t,user_id:e,_wpnonce:u("misc.nonce")}}).then((e=>{h(e.responses),function(e,t){if("object"!=typeof GatherPress)return;const s="eventDetails.responses".split("."),r=s.pop();s.reduce(((e,t)=>{var s;return null!==(s=e[t])&&void 0!==s?s:e[t]={}}),GatherPress)[r]=t}(0,e.responses)}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.SelectControl,{label:(0,a.__)("RSVP Status","gatherpress"),value:e,options:[{label:(0,a._x)("Attending","List Status","gatherpress"),value:"attending"},{label:(0,a._x)("Waiting List","List Status","gatherpress"),value:"waiting_list"},{label:(0,a._x)("Not Attending","List Status","gatherpress"),value:"not_attending"}],onChange:e=>t(e)}),(0,g.jsx)(o.FormTokenField,{label:(0,a.__)("Members","gatherpress"),value:v&&v.map((e=>({id:e.id,value:e.name}))),tokenizeOnSpace:!0,onChange:async t=>{t.length>v.length?t.forEach((t=>{f[t]&&w(f[t].id,e)})):v.forEach((e=>{!1===t.some((t=>t.id===e.id))&&w(e.id,"no_status")}))},suggestions:Object.keys(f),maxSuggestions:20},"query-controls-topics-select")]})},v={attending:(0,a.__)("Attending (%d)","gatherpress"),waitingList:(0,a.__)("Waiting List (%d)","gatherpress"),notAttending:(0,a.__)("Not Attending (%d)","gatherpress"),noOne:(0,a.__)("No one is attending this event yet.","gatherpress")},m=[["core/group",{style:{spacing:{blockGap:"var:preset|spacing|20",margin:{bottom:"var:preset|spacing|30"}}},layout:{type:"flex",flexWrap:"nowrap"}},[["gatherpress/icon",{icon:"groups"}],["gatherpress/dropdown",{actAsSelect:!0,dropdownId:"dropdown-7968ad05-cf12-41ae-8392-7fb01e166188",label:v.attending,metadata:{name:v.attending}},[["gatherpress/dropdown-item",{text:`<a href="#">${v.attending}</a>`,metadata:{name:v.attending},className:"gatherpress--rsvp-attending"}],["gatherpress/dropdown-item",{text:`<a href="#">${v.waitingList}</a>`,metadata:{name:v.waitingList},className:"gatherpress--rsvp-waiting-list"}],["gatherpress/dropdown-item",{text:`<a href="#">${v.notAttending}</a>`,metadata:{name:v.notAttending},className:"gatherpress--rsvp-not-attending"}]]]]],["core/group",{layout:{type:"grid",columns:3,justifyContent:"center",alignContent:"space-around",minimumColumnWidth:"8rem"},className:"gatherpress--rsvp-responses"},[["gatherpress/rsvp-template",{}]]],["core/group",{metadata:{name:(0,a.__)("Empty RSVP","gatherpress")},className:"gatherpress--empty-rsvp gatherpress--is-not-visible"},[["core/paragraph",{content:v.noOne}]]]],f=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gatherpress/rsvp-response-v2","version":"2.0.0","title":"RSVP Response V2","category":"gatherpress","icon":"groups","example":{},"description":"Displays a list of members who have confirmed their attendance for an event.","usesContext":["postId","queryId"],"supports":{"gatherpress":{"postIdOverride":true},"align":["wide","full"],"interactivity":true,"html":false},"providesContext":{"commentId":"commentId","postId":"postId"},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScriptModule":"file:./view.js"}');(0,r.registerBlockType)(f,{edit:({attributes:e,context:t})=>{var s,r;const p=(0,n.useBlockProps)(),[l,d]=(0,i.useState)(!1),[c,v]=(0,i.useState)(!1),[f,w]=(0,i.useState)("attending"),[x,_]=(0,i.useState)(null),[b,S]=(0,i.useState)(!0),[y,j]=(0,i.useState)(null),k=null!==(s=null!==(r=e?.postId)&&void 0!==r?r:t?.postId)&&void 0!==s?s:null;return(0,i.useEffect)((()=>{const e=document.querySelectorAll(".gatherpress--empty-rsvp"),t=document.querySelectorAll(".gatherpress--rsvp-responses");e.forEach((e=>{e.classList.toggle("gatherpress--is-not-visible",!c)})),t.forEach((e=>{e.classList.toggle("gatherpress--is-not-visible",c)}))}),[c,x]),(0,i.useEffect)((()=>{if(!k)return _(null),void S(!1);S(!0),j(null),async function(e){const t=u("urls.eventApiUrl");return(await fetch(`${t}/rsvp-responses?post_id=${e}`)).json()}(k).then((e=>{_(e.data),S(!1)})).catch((e=>{j(e.message),S(!1)}))}),[k]),b?(0,g.jsx)("div",{...p,children:(0,g.jsx)(o.Spinner,{})}):y?(0,g.jsx)("div",{...p,children:(0,g.jsx)("p",{children:(0,a.__)("Failed to load RSVP responses.","gatherpress")})}):(0,g.jsx)("div",{...p,children:(0,g.jsxs)(n.BlockContextProvider,{value:{"gatherpress/rsvpResponses":x,postId:k},children:[(0,g.jsx)(n.InspectorControls,{children:(0,g.jsx)(o.PanelBody,{children:(0,g.jsx)(o.ToggleControl,{label:(0,a.__)("Show Empty RSVP Block","gatherpress"),checked:c,onChange:e=>v(e),help:(0,a.__)("Toggle to show or hide the Empty RSVP block.","gatherpress")})})}),(0,g.jsx)(n.BlockControls,{children:(0,g.jsx)(o.ToolbarGroup,{children:(0,g.jsx)(o.ToolbarButton,{label:(0,a.__)("Edit","gatherpress"),text:l?(0,a.__)("Preview","gatherpress"):(0,a.__)("Edit","gatherpress"),onClick:e=>{e.preventDefault(),d(!l)}})})}),l&&(0,g.jsx)(h,{defaultStatus:f,setDefaultStatus:w}),!l&&(0,g.jsx)(n.InnerBlocks,{template:m})]})})},save:()=>(0,g.jsx)("div",{...n.useBlockProps.save(),children:(0,g.jsx)(n.InnerBlocks.Content,{})})})}},s={};function r(e){var n=s[e];if(void 0!==n)return n.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,s,n,a)=>{if(!s){var o=1/0;for(d=0;d<e.length;d++){for(var[s,n,a]=e[d],i=!0,p=0;p<s.length;p++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](s[p])))?s.splice(p--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={291:0,507:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var n,a,[o,i,p]=s,l=0;if(o.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(p)var d=p(r)}for(t&&t(s);l<o.length;l++)a=o[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},s=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var n=r.O(void 0,[507],(()=>r(8392)));n=r.O(n)})();