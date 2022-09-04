(()=>{"use strict";var e,t={762:()=>{const e=window.wp.blocks,t=window.wp.element,l=(window.wp.i18n,window.wp.blockEditor),n=window.wp.components,a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress-event/event-template","version":"0.1.1","title":"Gatherpress Event Template","category":"gatherpress-event","icon":{"background":"#29c8aa","foreground":"white","src":"flag"},"description":"Using Blocks to build a Block.","supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,e.registerBlockType)(a,{example:{attributes:{message:"Basic Template for a TextControl input and message attribute"}},edit:function(e){let{attributes:a,setAttributes:r}=e;const o=(0,l.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:o["data-title"],initialOpen:!0},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("h3",null,"Why useBlockProps:")),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("label",null,"id:")," ",o.id),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("label",null,"className:")," ",o.className),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("label",null,"aria-label:")," ",o["aria-label"]),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("label",null,"data-block:")," ",o["data-block"]),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("label",null,"data-type:")," ",o["data-type"]),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("label",null,"data-title:")," ",o["data-title"]))),(0,t.createElement)("div",o,(0,t.createElement)(l.InnerBlocks,{template:[["core/heading",{content:"JS Event Template Title"}],["core/paragraph",{content:"Event Summary -- this is from the GP JS block template called `event-template`"}],["core/columns",{},[["core/column",{},[["core/paragraph",{content:"Event Start"}]]],["core/column",{},[["gatherpress-event/event-start",{}]]]]],["core/columns",{},[["core/column",{},[["core/paragraph",{content:"Event End"}]]],["core/column",{},[["gatherpress-event/event-end",{}]]]]]],templateLock:"all"})))},save:function(e){let{attributes:n}=e;const a=l.useBlockProps.save();return(0,t.createElement)("div",a,(0,t.createElement)(l.InnerBlocks.Content,null))}})}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,a,r)=>{if(!l){var o=1/0;for(p=0;p<e.length;p++){l=e[p][0],a=e[p][1],r=e[p][2];for(var c=!0,s=0;s<l.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(c=!1,r<o&&(o=r));if(c){e.splice(p--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[l,a,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={22:0,312:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,r,o=l[0],c=l[1],s=l[2],i=0;if(o.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var p=s(n)}for(t&&t(l);i<o.length;i++)r=o[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},l=self.webpackChunkdate_block=self.webpackChunkdate_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=n.O(void 0,[312],(()=>n(762)));a=n.O(a)})();