import*as e from"@wordpress/interactivity";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const r=(o={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},n={},t.d(n,o),n);var o,n;function s(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}const{state:a}=(0,r.store)("gatherpress/rsvp",{callbacks:{renderBlocks(){const e=(0,r.getContext)();if(!a.status||e.postId!==a.activePostId)return;const t=(0,r.getElement)();fetch(s("urls.eventApiUrl")+"/rsvp-render",{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":s("misc.nonce")},body:JSON.stringify({status:a.status,post_id:e.postId,block_data:t.attributes["data-blocks"]})}).then((e=>e.json())).then((e=>{if(e.success){const r=t.ref.parentElement;Array.from(r.children).forEach((e=>{e!==t.ref&&e.hasAttribute("data-id")&&e.remove()})),t.ref.insertAdjacentHTML("beforebegin",function(e){const t=document.createElement("div");return t.innerHTML=e,t.querySelectorAll(["script","iframe","embed","object","applet","style","link","meta","form","input","textarea","button","select","option","frameset","frame","noframes"].join(",")).forEach((e=>{e.remove()})),t.querySelectorAll("*").forEach((e=>{Array.from(e.attributes).forEach((t=>{t.name.startsWith("on")&&e.removeAttribute(t.name)}))})),t.innerHTML}(e.content))}})).catch((()=>{}))}}});