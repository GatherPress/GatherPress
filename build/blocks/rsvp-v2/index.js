(()=>{"use strict";var t,e={546:()=>{const t=window.wp.blocks,e=window.wp.blockEditor,a=window.wp.components,s=window.wp.i18n,r=window.wp.element,o=window.wp.data,n=[["gatherpress/modal-manager",{style:{spacing:{blockGap:"var:preset|spacing|40"}}},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"},metadata:{name:(0,s._x)("RSVP Buttons","Section title in editor","gatherpress")}},[["core/button",{text:(0,s._x)("Edit RSVP","Button label for editing RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["core/group",{style:{spacing:{blockGap:"0"}}},[["core/group",{style:{spacing:{blockGap:"var:preset|spacing|20"}},layout:{type:"flex",flexWrap:"nowrap"}},[["gatherpress/icon",{icon:"yes-alt",iconSize:24}],["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>Attending</strong>","RSVP status indicator","gatherpress")}]]],["gatherpress/rsvp-guest-count-display",{}]]],["gatherpress/modal",{className:"gatherpress--is-rsvp-modal",metadata:{name:(0,s._x)("RSVP Modal","Modal title in editor","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>You're Attending</strong>","RSVP modal header","gatherpress")}],["core/paragraph",{content:(0,s.__)("To set or change your attending status, simply click the <strong>Not Attending</strong> button below.","gatherpress")}],["gatherpress/rsvp-guest-count-input",{}],["gatherpress/rsvp-anonymous-checkbox",{}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,s._x)("Not Attending","RSVP button label for declining event attendance","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,s._x)("Close","Button label for closing modal dialog","gatherpress"),tagName:"button",className:"is-style-outline gatherpress--close-modal"}]]]]]]]]]];function l(t){if("object"==typeof GatherPress)return t.split(".").reduce(((t,e)=>t&&t[e]),GatherPress)}const i=[["gatherpress/modal-manager",{},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"},metadata:{name:(0,s._x)("RSVP Buttons","Section title in editor","gatherpress")}},[["core/button",{text:(0,s._x)("RSVP","Button label for editing RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["gatherpress/modal",{className:"gatherpress--is-rsvp-modal",metadata:{name:(0,s._x)("RSVP Modal","Modal title in editor","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>RSVP to this event</strong>","RSVP modal header","gatherpress")}],["core/paragraph",{content:(0,s.__)("To set or change your attending status, simply click the <strong>Attending</strong> button below.","gatherpress")}],["gatherpress/rsvp-anonymous-checkbox",{}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,s._x)("Attending","RSVP button label for confirming event attendance","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,s._x)("Close","Button label for closing modal dialog","gatherpress"),tagName:"button",className:"is-style-outline gatherpress--close-modal"}]]]]]]],["gatherpress/modal",{className:"gatherpress--is-login-modal",metadata:{name:(0,s._x)("Login Modal","Block title for the login modal","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>Login Required</strong>","Login modal header","gatherpress")}],["core/paragraph",{content:(0,s.sprintf)(/* translators: %s: Login URL. */ /* translators: %s: Login URL. */
(0,s.__)('This action requires an account. Please <a href="%s">Login</a> to RSVP to this event.',"gatherpress"),l("urls.loginUrl")),className:"gatherpress--has-login-url"}],["core/paragraph",{content:(0,s.sprintf)(/* translators: %s: Registration URL. */ /* translators: %s: Registration URL. */
(0,s.__)('Don\'t have an account? <a href="%s">Register here</a> to create one.',"gatherpress"),l("urls.registrationUrl")),className:"gatherpress--has-registration-url"}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,s._x)("Close","Button label for closing modal dialog","gatherpress"),tagName:"button",className:"gatherpress--close-modal"}]]]]]]]]]],p=[["gatherpress/modal-manager",{style:{spacing:{blockGap:"var:preset|spacing|40"}}},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"},metadata:{name:(0,s._x)("RSVP Buttons","Section title in editor","gatherpress")}},[["core/button",{text:(0,s._x)("Edit RSVP","Button label for editing RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["core/group",{style:{spacing:{blockGap:"var:preset|spacing|20"}},layout:{type:"flex",flexWrap:"nowrap"}},[["gatherpress/icon",{icon:"dismiss",iconSize:24}],["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>Not Attending</strong>","RSVP status indicator","gatherpress")}]]],["gatherpress/modal",{className:"gatherpress--is-rsvp-modal",metadata:{name:(0,s._x)("RSVP Modal","Modal title in editor","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>You're Not Attending</strong>","RSVP modal header","gatherpress")}],["core/paragraph",{content:(0,s.__)("To set or change your attending status, simply click the <strong>Attending</strong> button below.","gatherpress")}],["gatherpress/rsvp-anonymous-checkbox",{}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,s._x)("Attending","RSVP button label for confirming event attendance","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,s._x)("Close","Button label for closing modal dialog","gatherpress"),tagName:"button",className:"is-style-outline gatherpress--close-modal"}]]]]]]]]]],g={no_status:i,attending:n,waiting_list:[["gatherpress/modal-manager",{style:{spacing:{blockGap:"var:preset|spacing|40"}}},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"},metadata:{name:(0,s._x)("RSVP Buttons","Section title in editor","gatherpress")}},[["core/button",{text:(0,s._x)("Edit RSVP","Button label for editing RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["core/group",{style:{spacing:{blockGap:"var:preset|spacing|20"}},layout:{type:"flex",flexWrap:"nowrap"}},[["gatherpress/icon",{icon:"clock",iconSize:24}],["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>Waiting List</strong>","RSVP status indicator","gatherpress")}]]],["gatherpress/modal",{className:"gatherpress--is-rsvp-modal",metadata:{name:(0,s._x)("RSVP Modal","Modal title in editor","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,s._x)("<strong>You're Wait Listed</strong>","RSVP modal header","gatherpress")}],["core/paragraph",{content:(0,s.__)("To set or change your attending status, simply click the <strong>Not Attending</strong> button below.","gatherpress")}],["gatherpress/rsvp-anonymous-checkbox",{}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,s._x)("Not Attending","RSVP button label for declining event attendance","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,s._x)("Close","Button label for closing modal dialog","gatherpress"),tagName:"button",className:"is-style-outline gatherpress--close-modal"}]]]]]]]]]],not_attending:p,past:[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"},metadata:{name:(0,s._x)("RSVP Buttons","Section title in editor","gatherpress")}},[["core/button",{text:(0,s._x)("Past Event","Button label for past RSVP","gatherpress"),tagName:"button",className:"gatherpress--is-disabled"}]]]]},c=window.ReactJSXRuntime;function d(e){return e.map((([e,a,s])=>(0,t.createBlock)(e,a,d(s||[]))))}const u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gatherpress/rsvp-v2","version":"2.0.0","title":"RSVP V2","category":"gatherpress","icon":"insert","example":{},"description":"Enables members to easily confirm their attendance for an event.","usesContext":["postId","queryId"],"attributes":{"serializedInnerBlocks":{"type":"string","default":"[]"},"selectedStatus":{"type":"string","default":"no_status"}},"supports":{"gatherpress":{"postIdOverride":true},"html":false,"interactivity":true},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScriptModule":"file:./view.js"}');(0,t.registerBlockType)(u,{edit:({attributes:n,setAttributes:l,clientId:i})=>{const{serializedInnerBlocks:p="{}",selectedStatus:u}=n,h=(0,e.useBlockProps)(),{replaceInnerBlocks:m}=(0,o.useDispatch)(e.store),b=(0,o.useSelect)((t=>t(e.store).getBlocks(i)),[i]),y=(0,r.useCallback)(((e,a,s)=>{const r=JSON.parse(p||"{}"),o=(0,t.serialize)(s),n={...r,[e]:o};delete n[a],l({serializedInnerBlocks:JSON.stringify(n)})}),[p,l]),f=(0,r.useCallback)((e=>{const a=JSON.parse(p||"{}")[e];a&&a.length>0&&m(i,(0,t.parse)(a,{}))}),[i,m,p]);return(0,r.useEffect)((()=>{(()=>{const e=JSON.parse(p||"{}"),a=Object.keys(g).reduce(((a,s)=>{if(e[s])return a[s]=e[s],a;if(s!==u){const e=d(g[s]);a[s]=(0,t.serialize)(e)}return a}),{...e});l({serializedInnerBlocks:JSON.stringify(a)})})()}),[p,l,u]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.InspectorControls,{children:(0,c.jsx)(a.PanelBody,{children:(0,c.jsx)(a.SelectControl,{label:(0,s.__)("RSVP Status","gatherpress"),value:u,options:[{label:(0,s.__)("No Status (User has not responded)","gatherpress"),value:"no_status"},{label:(0,s.__)("Attending (User is confirmed)","gatherpress"),value:"attending"},{label:(0,s.__)("Waiting List (Pending confirmation)","gatherpress"),value:"waiting_list"},{label:(0,s.__)("Not Attending (User declined)","gatherpress"),value:"not_attending"},{label:(0,s.__)("Past Event (Event has already occurred)","gatherpress"),value:"past"}],onChange:t=>{f(t),l({selectedStatus:t}),y(u,t,b)}})})}),(0,c.jsx)("div",{...h,children:(0,c.jsx)(e.InnerBlocks,{template:g[u]})})]})},save:()=>(0,c.jsx)("div",{...e.useBlockProps.save(),children:(0,c.jsx)(e.InnerBlocks.Content,{})})})}},a={};function s(t){var r=a[t];if(void 0!==r)return r.exports;var o=a[t]={exports:{}};return e[t](o,o.exports,s),o.exports}s.m=e,t=[],s.O=(e,a,r,o)=>{if(!a){var n=1/0;for(g=0;g<t.length;g++){for(var[a,r,o]=t[g],l=!0,i=0;i<a.length;i++)(!1&o||n>=o)&&Object.keys(s.O).every((t=>s.O[t](a[i])))?a.splice(i--,1):(l=!1,o<n&&(n=o));if(l){t.splice(g--,1);var p=r();void 0!==p&&(e=p)}}return e}o=o||0;for(var g=t.length;g>0&&t[g-1][2]>o;g--)t[g]=t[g-1];t[g]=[a,r,o]},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={345:0,525:0};s.O.j=e=>0===t[e];var e=(e,a)=>{var r,o,[n,l,i]=a,p=0;if(n.some((e=>0!==t[e]))){for(r in l)s.o(l,r)&&(s.m[r]=l[r]);if(i)var g=i(s)}for(e&&e(a);p<n.length;p++)o=n[p],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(g)},a=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var r=s.O(void 0,[525],(()=>s(546)));r=s.O(r)})();