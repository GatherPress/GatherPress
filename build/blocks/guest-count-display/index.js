(()=>{"use strict";var e,r={5732:()=>{const e=window.wp.blocks,r=window.wp.i18n,t=window.wp.blockEditor,s=window.ReactJSXRuntime,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gatherpress/guest-count-display","version":"1.0.0","title":"Guest Count Display","description":"Displays the number of guests associated with a member\'s RSVP.","category":"gatherpress","ancestor":["gatherpress/rsvp-v2","gatherpress/rsvp-response-v2"],"icon":"yes","example":{},"attributes":{},"supports":{"align":["left","center","right"],"spacing":{"margin":true,"padding":true},"color":{"text":true,"background":true},"html":false,"interactivity":true},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');(0,e.registerBlockType)(i,{edit:()=>{const e=(0,t.useBlockProps)(),i=(0,r.sprintf)((0,r.__)("+%d guest","gatherpress"),1);return(0,s.jsx)("div",{...e,children:i})},save:()=>null})}},t={};function s(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.m=r,e=[],s.O=(r,t,i,o)=>{if(!t){var n=1/0;for(c=0;c<e.length;c++){for(var[t,i,o]=e[c],a=!0,p=0;p<t.length;p++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](t[p])))?t.splice(p--,1):(a=!1,o<n&&(n=o));if(a){e.splice(c--,1);var l=i();void 0!==l&&(r=l)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,i,o]},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={2878:0,9042:0};s.O.j=r=>0===e[r];var r=(r,t)=>{var i,o,[n,a,p]=t,l=0;if(n.some((r=>0!==e[r]))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(p)var c=p(s)}for(r&&r(t);l<n.length;l++)o=n[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},t=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var i=s.O(void 0,[9042],(()=>s(5732)));i=s.O(i)})();