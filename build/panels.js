(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,n=window.wp.i18n,s=window.wp.data,r=window.wp.components,a=window.wp.plugins,l=window.wp.editPost,i=window.moment;var o=e.n(i);const c=window.wp.apiFetch;var m=e.n(c);const u=window.wp.element;function d(){(0,s.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function p(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function g(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),s=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[s]=t}const _=window.wp.date,h="YYYY-MM-DDTHH:mm:ss",E="YYYY-MM-DD HH:mm:ss",v=o().tz(S()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(h),f=o().tz(v,S()).add(2,"hours").format(h);function b(){return w(p("settings.dateFormat"))+" "+w(p("settings.timeFormat"))}function S(e=p("eventDetails.dateTime.timezone")){return o().tz.zone(e)?e:(0,n.__)("GMT","gatherpress")}function T(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function P(e,t=null){!function(e){const t=o().tz(p("eventDetails.dateTime.datetime_end"),S()).valueOf(),n=o().tz(e,S()).valueOf();n>=t&&D(o().tz(n,S()).add(2,"hours").format(h))}(e),g("eventDetails.dateTime.datetime_start",e),"function"==typeof t&&t(e),d()}function D(e,t=null){!function(e){const t=o().tz(p("eventDetails.dateTime.datetime_start"),S()).valueOf(),n=o().tz(e,S()).valueOf();n<=t&&P(o().tz(n,S()).subtract(2,"hours").format(h))}(e),g("eventDetails.dateTime.datetime_end",e),null!==t&&t(e),d()}function C(){const e=(0,s.select)("core/editor").isSavingPost(),t=(0,s.select)("core/editor").isAutosavingPost();y()&&e&&!t&&m()({path:p("urls.eventRestApi")+"/datetime",method:"POST",data:{post_id:p("eventDetails.postId"),datetime_start:o().tz(p("eventDetails.dateTime.datetime_start"),S()).format(E),datetime_end:o().tz(p("eventDetails.dateTime.datetime_end"),S()).format(E),timezone:p("eventDetails.dateTime.timezone"),_wpnonce:p("misc.nonce")}}).then((()=>{!function(){const e="gatherpress_event_communcation",t=(0,s.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,s.select)("core/editor").getEditedPostAttribute("status")||N()||t.createNotice("success",(0,n.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{z({setOpen:!0})},label:(0,n.__)("Compose Message","gatherpress")}]})}()}))}function w(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map(((e,n,s)=>{const r=s[n-1];return e in t&&"\\"!==r?t[e]:e})).join("")}const z=(e,t="")=>{for(const[n,s]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:s});dispatchEvent(r)}},k=(e,t="")=>{for(const[n,s]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{s(e.detail)}),!1)}};function y(){return"gatherpress_event"===(0,s.select)("core/editor")?.getCurrentPostType()}function N(){const e=o().tz(p("eventDetails.dateTime.datetime_end"),S());return"gatherpress_event"===(0,s.select)("core/editor")?.getCurrentPostType()&&o().tz(S()).valueOf()>e.valueOf()}function x(){const e="gatherpress_event_past",t=(0,s.dispatch)("core/notices");t.removeNotice(e),N()&&t.createNotice("warning",(0,n.__)("This event has already passed.","gatherpress"),{id:e,isDismissible:!1})}const O=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),l=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_enable_anonymous_rsvp),[]);l&&(i=p("settings.enableAnonymousRsvp"));const[o,c]=(0,u.useState)(i),m=(0,u.useCallback)((t=>{const n={gatherpress_enable_anonymous_rsvp:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,u.useEffect)((()=>{l&&0!==i&&m(i)}),[l,i,m]),(0,t.createElement)(r.CheckboxControl,{label:(0,n.__)("Enable Anonymous RSVP","gatherpress"),checked:o,onChange:e=>{m(e)}})},A=()=>(0,t.createElement)("section",null,(0,t.createElement)(O,null)),M=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),l=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_enable_initial_decline),[]);l&&(i=p("settings.enableInitialDecline"));const[o,c]=(0,u.useState)(i),m=(0,u.useCallback)((t=>{const n={gatherpress_enable_initial_decline:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,u.useEffect)((()=>{l&&0!==i&&m(i)}),[l,i,m]),(0,t.createElement)(r.CheckboxControl,{label:(0,n.__)('Enable Immediate "Not Attending" Option for Attendees',"gatherpress"),checked:o,onChange:e=>{m(e)}})},F=()=>(0,t.createElement)("section",null,(0,t.createElement)(M,null)),Y=e=>{const{dateTimeStart:t}=e;return o().tz(t,S()).format(b())},j=e=>{const{dateTimeEnd:t}=e;return o().tz(t,S()).format(b())},I=e=>{const{dateTimeStart:n,setDateTimeStart:s}=e,a=(0,_.getSettings)(),l=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(r.DateTimePicker,{currentDate:n,onChange:e=>P(e,s),is12Hour:l})},L=e=>{const{dateTimeEnd:n,setDateTimeEnd:s}=e,a=(0,_.getSettings)(),l=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(r.DateTimePicker,{currentDate:n,onChange:e=>D(e,s),is12Hour:l})},R=e=>{const{dateTimeStart:s,setDateTimeStart:a}=e;return(0,u.useEffect)((()=>{a(o().tz(function(){let e=p("eventDetails.dateTime.datetime_start");return e=""!==e?o().tz(e,S()).format(h):v,g("eventDetails.dateTime.datetime_start",e),e}(),S()).format(h)),z({setDateTimeStart:s}),x()})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{direction:"column",gap:"0"},(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("label",{htmlFor:"gatherpress-datetime-start"},(0,n.__)("Start","gatherpress"))),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{id:"gatherpress-datetime-start",onClick:n,"aria-expanded":e,isLink:!0},(0,t.createElement)(Y,{dateTimeStart:s})),renderContent:()=>(0,t.createElement)(I,{dateTimeStart:s,setDateTimeStart:a})}))))},H=e=>{const{dateTimeEnd:s,setDateTimeEnd:a}=e;return(0,u.useEffect)((()=>{a(o().tz(function(){let e=p("eventDetails.dateTime.datetime_end");return e=""!==e?o().tz(e,S()).format(h):f,g("eventDetails.dateTime.datetime_end",e),e}(),S()).format(h)),z({setDateTimeEnd:s}),x()})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{direction:"column",gap:"0"},(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("label",{htmlFor:"gatherpress-datetime-end"},(0,n.__)("End","gatherpress"))),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{id:"gatherpress-datetime-end",onClick:n,"aria-expanded":e,isLink:!0},(0,t.createElement)(j,{dateTimeEnd:s})),renderContent:()=>(0,t.createElement)(L,{dateTimeEnd:s,setDateTimeEnd:a})}))))},G=e=>{const{timezone:s,setTimezone:a}=e,l=p("misc.timezoneChoices");return(0,u.useEffect)((()=>{a(p("eventDetails.dateTime.timezone"))}),[a]),(0,u.useEffect)((()=>{z({setTimezone:p("eventDetails.dateTime.timezone")})})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Time Zone","gatherpress"),value:T(s),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const s=e.replace(t,"$2").padStart(2,"0");let r=e.replace(t,"$3");return""===r&&(r=":00"),r=r.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+s+r}return e}(e),a(e),g("eventDetails.dateTime.timezone",e),d()}},Object.keys(l).map((e=>(0,t.createElement)("optgroup",{key:e,label:e},Object.keys(l[e]).map((n=>(0,t.createElement)("option",{key:n,value:n},l[e][n]))))))))},$=()=>{const[e,r]=(0,u.useState)(),[a,l]=(0,u.useState)(),[i,o]=(0,u.useState)();return(0,s.subscribe)(C),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h3",null,(0,n.__)("Date & time","gatherpress")),(0,t.createElement)(R,{dateTimeStart:e,setDateTimeStart:r}),(0,t.createElement)(H,{dateTimeEnd:a,setDateTimeEnd:l}),(0,t.createElement)(G,{timezone:i,setTimezone:o}))},W=()=>(0,t.createElement)("section",null,(0,t.createElement)($,null)),B=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),l=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_max_guest_limit),[]);l&&(i=p("settings.maxGuestLimit")),!1===i&&(i=0);const[o,c]=(0,u.useState)(i),m=(0,u.useCallback)((t=>{const n={gatherpress_max_guest_limit:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,u.useEffect)((()=>{l&&0!==i&&m(i)}),[l,i,m]),(0,t.createElement)(r.__experimentalNumberControl,{label:(0,n.__)("Maximum Number of Guests","gatherpress"),value:o,min:0,max:5,onChange:e=>{m(e)}})},V=()=>(0,t.createElement)("section",null,(0,t.createElement)(B,null)),J=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),l=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_max_attendance_limit),[]);l&&(i=p("settings.maxAttendanceLimit")),!1===i&&(i=0);const[o,c]=(0,u.useState)(i),m=(0,u.useCallback)((t=>{const n={gatherpress_max_attendance_limit:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,u.useEffect)((()=>{l&&0!==i&&m(i)}),[l,i,m]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.__experimentalNumberControl,{label:(0,n.__)("Maximum Attendance Limit","gatherpress"),value:o,min:0,onChange:e=>{m(e)}}),(0,t.createElement)("p",{className:"description"},(0,n.__)("A value of 0 indicates no limit.","gatherpress")))},U=()=>(0,t.createElement)("section",null,(0,t.createElement)(J,null)),Z=()=>"publish"===(0,s.select)("core/editor").getEditedPostAttribute("status")&&!N()&&(0,t.createElement)("section",null,(0,t.createElement)("h3",{style:{marginBottom:"0.5rem"}},(0,n.__)("Send an event update","gatherpress")),(0,t.createElement)(r.Button,{variant:"secondary",onClick:()=>z({setOpen:!0})},(0,n.__)("Compose Message","gatherpress"))),X=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),l=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_online_event_link)),[i,o]=(0,u.useState)(l);return k({setOnlineEventLink:o},p("eventDetails.postId")),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Online event link","gatherpress"),value:i,placeholder:(0,n.__)("Add link to online event","gatherpress"),onChange:t=>{(t=>{e({meta:{gatherpress_online_event_link:t}}),o(t),z({setOnlineEventLink:t},p("eventDetails.postId")),a()})(t)}})},q=()=>(0,t.createElement)("section",null,(0,t.createElement)(X,null)),K=()=>{const[e,a]=(0,u.useState)(""),[l,i]=(0,u.useState)(""),[o,c]=(0,u.useState)(""),[m,d]=(0,u.useState)(""),[p,g]=(0,u.useState)(!1),[_,h]=(0,u.useState)(""),E=(0,s.useDispatch)("core/editor").editPost,{unlockPostSaving:v}=(0,s.useDispatch)("core/editor"),f=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("_gatherpress_venue"))),b=(0,s.useSelect)((e=>e("core").getEntityRecord("taxonomy","_gatherpress_venue",f))),S=b?.slug.replace(/^_/,""),[T,P]=(0,u.useState)(""),D=f+":"+T,C=(0,s.useSelect)((e=>e("core").getEntityRecords("postType","gatherpress_venue",{per_page:1,slug:T})));(0,u.useEffect)((()=>{var e,t,s,r;let l={};if(T&&Array.isArray(C)){var o;const e=null!==(o=C[0]?.meta?.gatherpress_venue_information)&&void 0!==o?o:"{}";var m;e&&(l=JSON.parse(e),l.name=null!==(m=C[0]?.title.rendered)&&void 0!==m?m:"")}const u=null!==(e=l?.name)&&void 0!==e?e:(0,n.__)("No venue selected.","gatherpress"),p=null!==(t=l?.fullAddress)&&void 0!==t?t:"",g=null!==(s=l?.phoneNumber)&&void 0!==s?s:"",_=null!==(r=l?.website)&&void 0!==r?r:"";S&&P(S),h(D?String(D):""),a(u),i(p),c(g),d(_),z({setName:u,setFullAddress:p,setPhoneNumber:g,setWebsite:_,setIsOnlineEventTerm:"online-event"===T})}),[T,C,S,D]);let w=(0,s.useSelect)((e=>e("core").getEntityRecords("taxonomy","_gatherpress_venue",{per_page:-1,context:"view"})),[]);return w?(w=w.map((e=>({label:e.name,value:e.id+":"+e.slug.replace(/^_/,"")}))),w.unshift({value:":",label:(0,n.__)("Choose a venue","gatherpress")})):w=[],(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Venue Selector","gatherpress"),value:_,onChange:e=>{(e=>{h(e);const t=""!==(e=e.split(":"))[0]?[e[0]]:[];E({_gatherpress_venue:t}),P(e[1]),v()})(e)},options:w}))},Q=()=>(0,t.createElement)("section",null,(0,t.createElement)(K,null));(0,a.registerPlugin)("gatherpress-event-settings",{render:()=>y()&&(0,t.createElement)(l.PluginDocumentSettingPanel,{name:"gatherpress-event-settings",title:(0,n.__)("Event settings","gatherpress"),initialOpen:!0,className:"gatherpress-event-settings"},(0,t.createElement)(r.__experimentalVStack,{spacing:6},(0,t.createElement)(W,null),(0,t.createElement)(Q,null),(0,t.createElement)(q,null),(0,t.createElement)(V,null),(0,t.createElement)(U,null),(0,t.createElement)(A,null),(0,t.createElement)(F,null),(0,t.createElement)(Z,null)))}),(0,s.dispatch)("core/edit-post").toggleEditorPanelOpened("gatherpress-event-settings/gatherpress-event-settings");const ee=()=>{var e,a,l;const i=(0,s.useDispatch)("core/editor").editPost,o=(e,t)=>{const n=JSON.stringify({...c,[e]:t});i({meta:{gatherpress_venue_information:n}})};let c=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_venue_information));c=c?JSON.parse(c):{};const[m,d]=(0,u.useState)(null!==(e=c.fullAddress)&&void 0!==e?e:""),[p,g]=(0,u.useState)(null!==(a=c.phoneNumber)&&void 0!==a?a:""),[_,h]=(0,u.useState)(null!==(l=c.website)&&void 0!==l?l:"");return k({setFullAddress:d,setPhoneNumber:g,setWebsite:h}),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.TextControl,{label:(0,n.__)("Full Address","gatherpress"),value:m,onChange:e=>{z({setFullAddress:e}),o("fullAddress",e)}}),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Phone Number","gatherpress"),value:p,onChange:e=>{z({setPhoneNumber:e}),o("phoneNumber",e)}}),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Website","gatherpress"),value:_,type:"url",onChange:e=>{z({setWebsite:e}),o("website",e)}}))},te=()=>(0,t.createElement)("section",null,(0,t.createElement)(ee,null));(0,a.registerPlugin)("gatherpress-venue-settings",{render:()=>"gatherpress_venue"===(0,s.select)("core/editor")?.getCurrentPostType()&&(0,t.createElement)(l.PluginDocumentSettingPanel,{name:"gatherpress-venue-settings",title:(0,n.__)("Venue settings","gatherpress"),initialOpen:!0,className:"gatherpress-venue-settings"},(0,t.createElement)(r.__experimentalVStack,{spacing:6},(0,t.createElement)(te,null)))}),(0,s.dispatch)("core/edit-post").toggleEditorPanelOpened("gatherpress-venue-settings/gatherpress-venue-settings")})();