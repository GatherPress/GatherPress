(()=>{"use strict";var e,s={2630:()=>{const e=window.wp.blocks,s=window.wp.blockEditor,t=window.wp.data,n=window.wp.element,o=[["core/group",{style:{spacing:{blockGap:0}}},[["core/avatar",{isLink:!0,align:"center"}],["core/comment-author-name",{metadata:{name:(0,window.wp.i18n.__)("Display Name","gatherpress")},textAlign:"center",style:{spacing:{margin:{top:"0",bottom:"0"}}},fontSize:"medium"}],["gatherpress/rsvp-guest-count-display",{align:"center",style:{spacing:{margin:{top:"0",bottom:"0"}}},fontSize:"small"}]]]],r=window.ReactJSXRuntime,i=({response:e,blocks:t,activeRsvpId:n,setActiveRsvpId:i,firstRsvpId:l})=>{const{children:a,...p}=(0,s.useInnerBlocksProps)({},{template:o});return(0,r.jsxs)("div",{...p,children:[e.commentId===(n||l)?a:null,(0,r.jsx)(c,{blocks:t,commentId:e.commentId,setActiveRsvpId:i,isHidden:e.commentId===(n||l)})]})},c=(0,n.memo)((({blocks:e,commentId:t,setActiveRsvpId:n,isHidden:o})=>{const i=(0,s.__experimentalUseBlockPreview)({blocks:e}),c=()=>{n(t)},l={display:o?"none":void 0};return(0,r.jsx)("div",{...i,tabIndex:0,role:"button",style:l,onClick:c,onKeyPress:c})})),l=({responses:e,blocks:t,blockProps:n,activeRsvpId:o,setActiveRsvpId:c,firstRsvpId:l})=>(0,r.jsx)(r.Fragment,{children:e&&e.map((({commentId:e,...a},p)=>{const d=parseInt(e,10);return(0,r.jsx)(s.BlockContextProvider,{value:{commentId:d<0?null:d},children:(0,r.jsx)(i,{response:{commentId:d,...a},blockProps:n,blocks:t,activeRsvpId:o,setActiveRsvpId:c,firstRsvpId:l})},d||p)}))});(0,e.registerBlockType)("gatherpress/rsvp-template",{edit:({clientId:e})=>{var o;const i=(0,s.useBlockProps)(),c=function(){if("object"==typeof GatherPress)return"eventDetails.responses".split(".").reduce(((e,s)=>e&&e[s]),GatherPress)}(),[a,p]=(0,n.useState)(null!==(o=parseInt(c.attending.responses[0]?.commentId,10))&&void 0!==o?o:null),{blocks:d}=(0,t.useSelect)((t=>{const{getBlocks:n}=t(s.store);return{blocks:n(e)}}),[e]);let v=[{commentId:-1}];return c.attending.responses.length&&(v=c.attending.responses),(0,r.jsx)(l,{responses:v,blockProps:i,blocks:d,activeRsvpId:a,setActiveRsvpId:p,firstRsvpId:v[0]?.commentId})},save:()=>(0,r.jsx)(s.InnerBlocks.Content,{})})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return s[e](r,r.exports,n),r.exports}n.m=s,e=[],n.O=(s,t,o,r)=>{if(!t){var i=1/0;for(p=0;p<e.length;p++){for(var[t,o,r]=e[p],c=!0,l=0;l<t.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(c=!1,r<i&&(i=r));if(c){e.splice(p--,1);var a=o();void 0!==a&&(s=a)}}return s}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[t,o,r]},n.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={687:0,967:0};n.O.j=s=>0===e[s];var s=(s,t)=>{var o,r,[i,c,l]=t,a=0;if(i.some((s=>0!==e[s]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var p=l(n)}for(s&&s(t);a<i.length;a++)r=i[a],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},t=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})();var o=n.O(void 0,[967],(()=>n(2630)));o=n.O(o)})();