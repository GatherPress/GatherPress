import*as t from"@wordpress/interactivity";var e={d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const s=(n={getContext:()=>t.getContext,getElement:()=>t.getElement,store:()=>t.store},r={},e.d(r,n),r);var n,r;function o(t,e){e&&!t.posts[e]&&(t.posts[e]={eventResponses:{attending:0,waitingList:0,notAttending:0},currentUser:{status:"no_status",guests:0,anonymous:0},rsvpSelection:"attending"})}const{state:a,actions:i}=(0,s.store)("gatherpress",{state:{posts:{}},actions:{processRsvpSelection(t){i.linkHandler(t);const e=(0,s.getElement)();if(e&&e.ref){const t=e.ref.getAttribute("data-status");if(t){const e=(0,s.getContext)(),n=e?.postId||0;o(a,n),n&&(a.posts[n].rsvpSelection=t)}}}},callbacks:{processRsvpDropdown(){const t=(0,s.getContext)(),e=t?.postId||0,n=(0,s.getElement)(),r=n.ref.closest(".wp-block-gatherpress-rsvp-response-v2");o(a,e);const i=JSON.parse(r.getAttribute("data-counts"));if(r.removeAttribute("data-counts"),i&&(a.posts[e]={...a.posts[e],eventResponses:{attending:i?.attending||0,waitingList:i?.waiting_list||0,notAttending:i?.not_attending||0}}),n&&n.ref&&!n.ref.hasAttribute("data-label")){const t=n.ref.textContent.trim();t&&n.ref.setAttribute("data-label",t)}const p=n.ref.parentElement,d=p?.classList||[],l=n.ref.getAttribute("data-label"),c=n.ref.getAttribute("data-status")===a.posts[e]?.rsvpSelection||"attending"===n.ref.getAttribute("data-status")&&"no_status"===a.posts[e]?.rsvpSelection,g=n.ref.closest(".wp-block-gatherpress-dropdown"),b=g.querySelector(".wp-block-gatherpress-dropdown__trigger");let u=0;if(d.contains("gatherpress--rsvp-attending")?u=a.posts[e]?.eventResponses?.attending||0:d.contains("gatherpress--rsvp-waiting-list")?u=a.posts[e]?.eventResponses?.waitingList||0:d.contains("gatherpress--rsvp-not-attending")&&(u=a.posts[e]?.eventResponses?.notAttending||0),l){const t=l.replace("%d",u);n.ref.textContent=t}if(c){const t=n.ref.textContent.trim();g.querySelectorAll("[data-status]").forEach((t=>{t.classList.remove("gatherpress--is-disabled"),t.removeAttribute("tabindex"),t.removeAttribute("aria-disabled")})),n.ref.classList.add("gatherpress--is-disabled"),n.ref.setAttribute("tabindex","-1"),n.ref.setAttribute("aira-disabled","true"),b.textContent=t}0!==u||d.contains("gatherpress--rsvp-attending")?p.classList.remove("gatherpress--is-not-visible"):p.classList.add("gatherpress--is-not-visible");const f=g.querySelectorAll(".wp-block-gatherpress-dropdown-item:not(.gatherpress--is-not-visible)");1===f.length&&f[0].classList.contains("gatherpress--rsvp-attending")?(b.classList.add("gatherpress--is-disabled"),b.setAttribute("tabindex","-1")):(b.classList.remove("gatherpress--is-disabled"),b.setAttribute("tabindex","0"))}}});