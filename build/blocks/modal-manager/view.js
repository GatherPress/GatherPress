import*as e from"@wordpress/interactivity";var r={d:(e,s)=>{for(var t in s)r.o(s,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};var s,t;(0,(s={store:()=>e.store},t={},r.d(t,s),t).store)("gatherpress",{actions:{openModal(e){e.preventDefault();const r=e.target.closest(".wp-block-gatherpress-modal-manager");if(r){const e=r.querySelector(".wp-block-gatherpress-modal");e&&e.classList.add("gatherpress--is-visible")}},closeModal(e){e.preventDefault();const r=e.target.closest(".wp-block-gatherpress-modal-manager");if(r){const e=r.querySelector(".wp-block-gatherpress-modal");e&&e.classList.remove("gatherpress--is-visible")}}}});