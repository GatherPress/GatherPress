(()=>{"use strict";const e=window.wp.blocks,t=(window.wp.i18n,window.wp.blockEditor),s=(window.wp.components,window.ReactJSXRuntime),a=[["core/image",{alt:"{{name}}",className:"rsvp-avatar"}],["core/paragraph",{content:"{{name}}",className:"rsvp-name"}]];(0,e.registerBlockType)("gatherpress/rsvp-template",{edit:({attributes:e,setAttributes:n})=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{children:(0,s.jsx)(t.InnerBlocks,{template:a,templateLock:"all"})})}),save:()=>(0,s.jsx)(InnerBlocks.Content,{})})})();