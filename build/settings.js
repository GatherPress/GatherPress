(()=>{"use strict";const e=window.wp.element,t=window.lodash,n=window.wp.components,o=window.wp.i18n,a=window.wp.coreData,s=window.wp.data,r=r=>{var l,i;const{name:d,option:u,value:p,fieldOptions:c}=r.attrs,[m,g]=(0,e.useState)(null!==(l=JSON.parse(p))&&void 0!==l?l:"[]"),{contentList:w}=(0,s.useSelect)((e=>{const{getEntityRecords:t}=e(a.store);return{contentList:t("user"!==c.type?"postType":"root",c.type||"post",{per_page:-1,context:"view"})}}),[m]),v=null!==(i=w?.reduce(((e,t)=>({...e,[t.title?.rendered||t.name]:t})),{}))&&void 0!==i?i:{};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.FormTokenField,{key:u,label:c.label||(0,o.__)("Select Posts","gatherpress"),name:d,value:m&&m.map((e=>({id:e.id,slug:e.slug,value:e.title?.rendered||e.name||e.value}))),suggestions:Object.keys(v),onChange:e=>{if(e.some((e=>"string"==typeof e&&!v[e])))return;const n=e.map((e=>"string"==typeof e?v[e]:e));if((0,t.includes)(n,null))return!1;g(n)},maxSuggestions:c.max_suggestions||20,maxLength:c.limit||0}),(0,e.createElement)("input",{type:"hidden",id:u,name:d,value:m&&JSON.stringify(m.map((e=>({id:e.id,slug:e.slug,value:e.title?.rendered||e.name||e.value}))))}))},l=document.querySelectorAll('[data-gp_component_name="autocomplete"]');for(let t=0;t<l.length;t++){const n=JSON.parse(l[t].dataset.gp_component_attrs);(0,e.createRoot)(l[t]).render((0,e.createElement)(r,{attrs:n}))}})();