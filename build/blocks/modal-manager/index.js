(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,s=window.ReactJSXRuntime,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gatherpress/modal-manager","version":"1.0.0","title":"Modal Manager","category":"gatherpress","icon":"external","example":{},"description":"Manage modals and their triggers with ease.","attributes":{},"supports":{"align":["wide","full"],"layout":{"allowSwitching":false,"allowInheriting":false,"default":{"justifyContent":"center","type":"flex"}},"html":false,"interactivity":true},"textdomain":"gatherpress","editorScript":"file:./index.js","viewScriptModule":"file:./view.js"}');(0,e.registerBlockType)(r,{edit:()=>{const e=(0,t.useBlockProps)();return(0,s.jsx)("div",{...e,children:(0,s.jsx)(t.InnerBlocks,{template:[["gatherpress/modal",{},[["gatherpress/modal-content",{}]]]]})})},save:()=>(0,s.jsx)("div",{...t.useBlockProps.save(),children:(0,s.jsx)(t.InnerBlocks.Content,{})})})})();