import{d as z,M as se,c as V,a as o,H as m,P as b,W as T,L as y,Q as U,S as D,K as I,J as w,e as i,r as B,i as S,y as re,w as q,T as p,aa as Q,ah as G,a9 as H,g as pe,p as fe,v as ve,f as ye,D as ge,t as _e,Z as ke,k as be,m as Ve,E as he,b as Ce,R as xe,B as $e,F as ee,a6 as Te,o as oe,U as Ae,ai as Ie,I as K}from"./index-CC0it33j.js";import{a as X,V as ue,b as J,P as Pe,F as ie,e as te,m as we,p as ae,d as Se,f as Be,h as Ee,i as Re,c as Me,l as Oe}from"./VTable-BuzaGwP1.js";import{l as L,p as je,q as Fe,j as Ue,b as Ne,c as De,h as Le,r as ze,m as We,d as qe,k as Je,s as Ze,f as ne}from"./VGrid-BaNqdVC9.js";import{_ as He}from"./MarkdownDynamic.vue_vue_type_script_setup_true_lang-C8af6pMg.js";import{a as N,u as Ke,b as Qe,m as Ge,c as Xe}from"./VBtn-Dc-b8spZ.js";import{a as Y,b as Z,c as Ye,d as et,V as tt}from"./VCard-C6MWeTCu.js";import{V as le,j as at,k as nt}from"./VSelect-BgKDaqtb.js";import{V as lt}from"./VSpacer-kG2dFDjS.js";import{_ as st}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VChip-DsHN7pbB.js";import"./VOverlay-Bfz9UN9M.js";const rt={key:0},ot={class:"text-right align-center text-no-wrap"},ut={key:1},it={key:0},ce=z({__name:"CallResult",props:{items:{},headers:{type:Boolean}},emits:["change:target"],setup(a,{emit:A}){const n=a,l=A;function s(c,d){l("change:target",{contract:c,address:d})}const u=c=>{if(!c)return"";c.startsWith("0x")&&(c=c.slice(2));const d=new Uint8Array(c.match(/.{1,2}/g).map(h=>parseInt(h,16)));return new TextDecoder().decode(d)};return(c,d)=>{const h=se("CallResult",!0);return o(),V(X,{density:"compact"},{default:m(()=>[n.headers?(o(),b("thead",rt,d[0]||(d[0]=[y("tr",null,[y("th",{class:"text-left"},"Name"),y("th",{class:"text-right"},"Value")],-1)]))):T("",!0),y("tbody",null,[(o(!0),b(U,null,D(n.items,(r,E)=>(o(),b("tr",{key:E},[y("td",null,I(r.name),1),y("td",ot,[r.type=="array"||r.type=="tuple"?(o(),V(h,{key:0,items:r.v},null,8,["items"])):(o(),b("span",ut,[w(I(r.v)+" ",1),r.solType.startsWith("bytes")?(o(),b("span",it,"(= "+I(u(r.v))+")",1)):T("",!0),r.isInterface?(o(),V(L,{key:1,class:"ml-2",onClick:C=>s(r.type,r.v)},{default:m(()=>d[1]||(d[1]=[w("mdi-open-in-app")])),_:2},1032,["onClick"])):T("",!0)]))])]))),128))])]),_:1})}}}),ct={key:0},dt={key:0},mt={key:0},pt={class:"text-left"},ft={key:1},vt=z({__name:"EventsResult",props:{items:{},headers:{type:Boolean},signature:{type:Boolean}},emits:["change:target"],setup(a,{emit:A}){const n=a,l=A;function s({contract:u,address:c}){l("change:target",{contract:u,address:c})}return(u,c)=>{const d=ce;return o(),V(X,{density:"compact"},{default:m(()=>[n.headers?(o(),b("thead",ct,[y("tr",null,[c[0]||(c[0]=y("th",null,"block:tx:log",-1)),n.signature?(o(),b("th",dt,"Signature")):T("",!0),c[1]||(c[1]=y("th",{class:"text-center"},"Returned values",-1))])])):T("",!0),y("tbody",null,[n.items.length?(o(!0),b(U,{key:0},D(n.items,(h,r)=>(o(),b("tr",{key:r},[y("td",null,I(h.id),1),n.signature?(o(),b("td",mt,I(h.eventSignature),1)):T("",!0),y("td",pt,[i(d,{items:h.returnValues,"onChange:target":s},null,8,["items"])])]))),128)):(o(),b("tr",ft,c[2]||(c[2]=[y("td",{class:"text-center"},"No events",-1)])))])]),_:1})}}}),yt={class:"d-flex align-center mb-2"},gt={class:"text-subtitle-1"},_t=z({__name:"ABICaptureType",props:{parent:{},param:{},modelValue:{},depth:{}},emits:["update:modelValue"],setup(a,{emit:A}){const n=a,l=B(""),s=B(!1),u=B({}),c=A,d=S(()=>(n.depth||0)>0),h=t=>t.endsWith("[]"),r=t=>t==="tuple",E=t=>t.type==="address",C=t=>t.replace("[]",""),j=t=>({uint256:"number",string:"text",address:"text",bool:"checkbox",bytes32:"text"})[t]||"text";function f(t){let e="";if(r(t.type)){e={};for(const g of t.components)e[g.name]=f(g);return e}else return h(t.type)?[]:E(t)?G:""}const v=()=>u.value||[],x=()=>{u.value=[...v(),""],M()},P=t=>{u.value=v().filter((e,g)=>g!==t),M()};function R(t){return t.startsWith("0x")?Number(t):parseInt(t)}function W(t,e){const g=parseInt(t.replace("bytes","")||"0");let _=e.startsWith("0x")?H.from(e.substring(2),"hex"):H.from(e);if(g>0){const $=H.alloc(g,0);_.copy($,0,0,g),_=$}return"0x"+_.toString("hex")}function F(t,e){if(Array.isArray(e)){const g=Pe.from(C(t.type));return e.map(_=>F(g,_))}else if(typeof e=="object"){const g={...e};return Object.keys(e).forEach((_,$)=>{g[_]=F(t.components[$],e[_])}),g}else switch(t.type){case"address":return e||G;case"bool":return e?"true":"false";default:return/uint[0-9]*/.test(t.type)?R(`${e}`):/int[0-9]*/.test(t.type)?R(`${e}`):/bytes[0-9]*/.test(t.type)?W(t.type,`${e}`):e}}const M=(t,e)=>{const g=Array.isArray(u.value)?[...u.value]:typeof u.value=="object"?{...u.value}:u.value;c("update:modelValue",F(n.param,g))};return S(()=>!n.param),re(()=>{var t;if(console.log("watchEffect param called",(t=n.param)==null?void 0:t.name,l.value,s.value,JSON.stringify(n.modelValue,null,2)),n.param){const e=n.parent+"."+n.param.format("full");if(e!=l.value&&(l.value=e,s.value=!1),!s.value){s.value=!0;const g=n.modelValue||f(n.param);u.value=g,M()}}}),q(u,t=>{M()}),(t,e)=>{const g=se("ABICaptureType",!0);return o(),V(ue,{cols:"12",md:d.value?12:6},{default:m(()=>[h(n.param.type)?(o(),b(U,{key:0},[y("div",yt,[y("span",gt,I(n.param.name)+" ("+I(n.param.type)+")",1),i(N,{icon:"",size:"x-small",class:"ml-2",onClick:e[0]||(e[0]=_=>x())},{default:m(()=>[i(L,null,{default:m(()=>e[5]||(e[5]=[w("mdi-plus")])),_:1})]),_:1})]),(o(!0),b(U,null,D(v(),(_,$)=>(o(),b("div",{key:$,class:"d-flex align-center mb-2"},[i(le,{modelValue:p(u)[$],"onUpdate:modelValue":[O=>p(u)[$]=O,e[1]||(e[1]=O=>M())],label:`Element ${$+1}`,density:"compact","hide-details":"",variant:"outlined",type:j(C(n.param.type))},null,8,["modelValue","onUpdate:modelValue","label","type"]),i(N,{icon:"",size:"x-small",class:"ml-2",onClick:O=>P($)},{default:m(()=>[i(L,null,{default:m(()=>e[6]||(e[6]=[w("mdi-close")])),_:1})]),_:2},1032,["onClick"])]))),128))],64)):r(n.param.type)?(o(),V(Y,{key:1,class:"ma-0 pa-1",variant:"outlined"},{default:m(()=>[i(Z,null,{default:m(()=>[i(J,null,{default:m(()=>[w(I(n.param.name)+":",1)]),_:1}),i(J,null,{default:m(()=>[(o(!0),b(U,null,D(n.param.components,_=>(o(),V(g,{key:_.name,parent:n.param.name,param:_,modelValue:p(u)[_.name],"onUpdate:modelValue":[$=>p(u)[_.name]=$,e[2]||(e[2]=$=>M())],depth:(n.depth||0)+1},null,8,["parent","param","modelValue","onUpdate:modelValue","depth"]))),128))]),_:1})]),_:1})]),_:1})):(o(),V(le,{key:2,modelValue:p(u),"onUpdate:modelValue":e[3]||(e[3]=_=>Q(u)?u.value=_:null),label:`${n.param.name} (${n.param.type})`,density:"compact",variant:"outlined",type:j(n.param.type),clearable:"","onClick:clear":e[4]||(e[4]=_=>u.value=f(n.param))},null,8,["modelValue","label","type"]))]),_:1},8,["md"])}}}),kt=z({__name:"ABICaptureFunction",props:{item:{},modelValue:{}},emits:["update:modelValue"],setup(a,{emit:A}){const n=a,l=S(()=>ie.from(n.item)),s=B({}),u=B(""),c=B(!1),d=A,h=f=>f.endsWith("[]"),r=f=>f==="tuple",E=f=>f.type==="address";function C(f){let v="";if(r(f.type)){v={};for(const x of f.components)v[x.name]=C(x);return v}else return h(f.type)?[]:E(f)?G:""}S(()=>{var f,v;return((v=(f=l.value)==null?void 0:f.inputs)==null?void 0:v.filter(x=>x.type!=="tuple"||x.components))||[]});const j=(f,v)=>{const x={...s.value};d("update:modelValue",{...x})};return S(()=>!l.value||l.value.inputs.length==0),re(()=>{var f;if(l.value){const v=l.value.format("full");if(v!=u.value&&(c.value=!1,u.value=v),console.log("watchEffect function called",(f=l.value)==null?void 0:f.name,u.value,c.value,JSON.stringify(n.modelValue,null,2)),!c.value){c.value=!0;const x=n.modelValue||{};l.value.inputs.forEach(P=>{x[P.name]=C(P)}),s.value=x,j()}}}),q(s,f=>{j()}),(f,v)=>{const x=_t;return l.value?(o(),V(Y,{key:0,class:"ma-0 pa-2",variant:"outlined"},{default:m(()=>[l.value.inputs.length>0?(o(),V(Z,{key:0},{default:m(()=>[i(J,null,{default:m(()=>[(o(!0),b(U,null,D(l.value.inputs,P=>(o(),V(x,{parent:l.value.name,param:P,modelValue:p(s)[P.name],"onUpdate:modelValue":[R=>p(s)[P.name]=R,v[0]||(v[0]=R=>j())]},null,8,["parent","param","modelValue","onUpdate:modelValue"]))),256))]),_:1})]),_:1})):(o(),V(Z,{key:1},{default:m(()=>v[1]||(v[1]=[w(" No parameters needed ")])),_:1}))]),_:1})):T("",!0)}}}),bt=je("v-alert-title"),Vt=["success","info","warning","error"],ht=fe({border:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["top","end","bottom","start"].includes(a)},borderColor:String,closable:Boolean,closeIcon:{type:xe,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:a=>Vt.includes(a)},...Ce(),...Je(),...he(),...qe(),...Xe(),...Ge(),...We(),...Ve(),...be(),...ze({variant:"flat"})},"VAlert"),Ct=pe()({name:"VAlert",props:ht(),emits:{"click:close":a=>!0,"update:modelValue":a=>!0},setup(a,A){let{emit:n,slots:l}=A;const s=ve(a,"modelValue"),u=S(()=>{if(a.icon!==!1)return a.type?a.icon??`$${a.type}`:a.icon}),c=S(()=>({color:a.color??a.type,variant:a.variant})),{themeClasses:d}=ye(a),{colorClasses:h,colorStyles:r,variantClasses:E}=Fe(c),{densityClasses:C}=Ue(a),{dimensionStyles:j}=ge(a),{elevationClasses:f}=Ne(a),{locationStyles:v}=Ke(a),{positionClasses:x}=Qe(a),{roundedClasses:P}=De(a),{textColorClasses:R,textColorStyles:W}=Le(_e(a,"borderColor")),{t:F}=ke(),M=S(()=>({"aria-label":F(a.closeLabel),onClick(t){s.value=!1,n("click:close",t)}}));return()=>{const t=!!(l.prepend||u.value),e=!!(l.title||a.title),g=!!(l.close||a.closable);return s.value&&i(a.tag,{class:["v-alert",a.border&&{"v-alert--border":!!a.border,[`v-alert--border-${a.border===!0?"start":a.border}`]:!0},{"v-alert--prominent":a.prominent},d.value,h.value,C.value,f.value,x.value,P.value,E.value,a.class],style:[r.value,j.value,v.value,a.style],role:"alert"},{default:()=>{var _,$;return[Ze(!1,"v-alert"),a.border&&i("div",{key:"border",class:["v-alert__border",R.value],style:W.value},null),t&&i("div",{key:"prepend",class:"v-alert__prepend"},[l.prepend?i(ne,{key:"prepend-defaults",disabled:!u.value,defaults:{VIcon:{density:a.density,icon:u.value,size:a.prominent?44:28}}},l.prepend):i(L,{key:"prepend-icon",density:a.density,icon:u.value,size:a.prominent?44:28},null)]),i("div",{class:"v-alert__content"},[e&&i(bt,{key:"title"},{default:()=>{var O;return[((O=l.title)==null?void 0:O.call(l))??a.title]}}),((_=l.text)==null?void 0:_.call(l))??a.text,($=l.default)==null?void 0:$.call(l)]),l.append&&i("div",{key:"append",class:"v-alert__append"},[l.append()]),g&&i("div",{key:"close",class:"v-alert__close"},[l.close?i(ne,{key:"close-defaults",defaults:{VBtn:{icon:a.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var O;return[(O=l.close)==null?void 0:O.call(l,{props:M.value})]}}):i(N,$e({key:"close-btn",icon:a.closeIcon,size:"x-small",variant:"text"},M.value),null)])]}})}}}),xt={class:"align-cell-top"},$t=["onClick"],Tt={class:"text-caption"},At={key:0,class:"text-right"},It={key:2},Pt={key:1,class:"text-red"},wt=z({__name:"ContractInteraction",props:{contract:{},address:{},provider:{}},emits:["change:target"],setup(a,{emit:A}){const{dltApi:n}=ee(),{selectedNetwork:l}=Te(ee()),s=a,u=A;function c({contract:t,address:e}){console.log("Change target",e,t),u("change:target",{contract:t,address:e})}const d=B({}),h=B(void 0),r=B(void 0),E=B([]),C=B(""),j=S(()=>h.value?h.value.filter(t=>t.type==="function"||t.type==="event"):[]),f=S(()=>j.value.map(t=>({title:ie.from(t).format("minimal"),value:t}))),v=S(()=>{var t;return((t=r.value)==null?void 0:t.type)==="function"}),x=S(()=>{var t;return((t=r.value)==null?void 0:t.type)==="event"}),P=S(()=>{if(!r.value)return"mdi-cancel";const t=r.value;return t.type==="event"?"mdi-message-alert":t.stateMutability==="view"?"mdi-eye":t.stateMutability==="pure"?"mdi-calculator-variant-outline":t.stateMutability==="payable"?"mdi-cash":"mdi-cog-outline"}),R=S(()=>{if(!r.value)return!1;const t=r.value;return!(t.type==="event"||t.stateMutability==="view"||t.stateMutability==="pure"||t.stateMutability==="payable")});q(r,()=>{d.value={},C.value=""}),q(()=>s.address,async()=>{r.value=void 0,d.value={},h.value=await te(s.contract,s.address,n().currentProvider)}),oe(async()=>{h.value=await te(s.contract,s.address,n().currentProvider)});async function W(){if(!r.value)return;console.log("Calling contract",R.value,s.address,`${s.contract}.${r.value.name}`,...Object.values(d.value));const t={icon:R.value?"mdi-test-tube":P.value,contract:s.contract,address:s.address,kind:"call",call:`${s.contract}.${r.value.name}( ${ae(d.value)} )`,code:we(l.value,s.address,r.value,...Object.values(d.value))};try{const e=await Se(n().currentProvider,s.address,r.value,...Object.values(d.value));console.log("Result",e),t.result=e}catch(e){"errorArgs"in e?t.error=e.errorArgs.join(" "):t.error=e.message}E.value.unshift(t)}async function F(){if(!r.value)return;console.log("Executing contract",s.address,`${s.contract}.${r.value.name}`,...Object.values(d.value));const t={icon:P.value,contract:s.contract,address:s.address,kind:"exec",call:`${s.contract}.${r.value.name}( ${ae(d.value)} )`,code:Be(l.value,s.address,r.value,...Object.values(d.value))};try{const e=await Ee(n().currentProvider,s.address,r.value,...Object.values(d.value));console.log("Result",e),t.result=e}catch(e){"reason"in e?(t.error=e.reason,"method"in e&&(t.error+=` (method: ${e.method})`)):t.error=e.message}E.value.unshift(t)}async function M(){if(!r.value)return;console.log("Loading events",s.address,`${s.contract}.${r.value.name}`);const t={icon:P.value,contract:s.contract,address:s.address,kind:"event",call:`Event ${s.contract}.${r.value.name}()`,code:Re(l.value,s.address,r.value)};try{const e=await Me(n().currentProvider,s.address,r.value);console.log("Result",e),t.result=e}catch(e){"reason"in e?(t.error=e.reason,"method"in e&&(t.error+=` (method: ${e.method})`)):t.error=e.message}E.value.unshift(t)}return(t,e)=>{const g=kt,_=He,$=vt,O=ce;return o(),V(Y,null,{default:m(()=>[i(Ye,null,{default:m(()=>[w(" Contract "+I(s.contract),1)]),_:1}),i(et,null,{default:m(()=>[w(" located at "+I(s.address),1)]),_:1}),i(Z,null,{default:m(()=>[i(at,{items:p(f),modelValue:p(r),"onUpdate:modelValue":e[0]||(e[0]=k=>Q(r)?r.value=k:null),"prepend-inner-icon":p(P),clearable:""},null,8,["items","modelValue","prepend-inner-icon"]),p(v)?(o(),V(g,{key:0,item:p(r),modelValue:p(d),"onUpdate:modelValue":e[1]||(e[1]=k=>Q(d)?d.value=k:null)},null,8,["item","modelValue"])):T("",!0),p(r)?T("",!0):(o(),V(Ct,{key:1,type:"info",class:"ma-4"},{default:m(()=>e[2]||(e[2]=[w(" Select a function to display its parameters ")])),_:1}))]),_:1}),i(tt,null,{default:m(()=>[i(lt),p(x)?(o(),V(N,{key:0,color:"primary",onClick:M},{default:m(()=>e[3]||(e[3]=[w("List")])),_:1})):T("",!0),p(v)?(o(),V(N,{key:1,color:"primary",onClick:W},{default:m(()=>[w(I(p(R)?"Simulate":"Call"),1)]),_:1})):T("",!0),p(R)?(o(),V(N,{key:2,color:"primary",onClick:F},{default:m(()=>e[4]||(e[4]=[w("Execute")])),_:1})):T("",!0)]),_:1}),i(nt),p(C)?(o(),V(J,{key:0},{default:m(()=>[i(ue,null,{default:m(()=>[i(_,{text:p(C)},null,8,["text"])]),_:1})]),_:1})):T("",!0),i(X,null,{default:m(()=>[e[6]||(e[6]=y("thead",null,[y("tr",null,[y("th",null,"Call"),y("th",{class:"text-center"},"Result / Error")])],-1)),y("tbody",null,[(o(!0),b(U,null,D(p(E),(k,de)=>(o(),b("tr",{key:de},[y("td",xt,[y("div",{class:Ae({"cursor-help":p(C)!=k.code,"cursor-not-allowed":p(C)==k.code,"bg-grey-darken-3":p(C)==k.code}),onClick:me=>p(C)==k.code?C.value=void 0:C.value=k.code},[i(L,{class:"mr-2"},{default:m(()=>[w(I(k.icon),1)]),_:2},1024),y("span",null,I(k.call),1)],10,$t),y("div",Tt,[w(I(k.address)+" ",1),i(L,{class:"ml-2",onClick:me=>c(k)},{default:m(()=>e[5]||(e[5]=[w("mdi-open-in-app")])),_:2},1032,["onClick"])])]),k.result!=null?(o(),b("td",At,[k.kind==="event"?(o(),V($,{key:0,items:k.result,"onChange:target":c,headers:k.result.length>0},null,8,["items","headers"])):T("",!0),k.kind==="call"?(o(),V(O,{key:1,items:k.result,"onChange:target":c},null,8,["items"])):T("",!0),k.kind==="exec"?(o(),b("span",It,I(k.result),1)):T("",!0)])):(o(),b("td",Pt,I(k.error),1))]))),128))])]),_:1})]),_:1})}}}),St=st(wt,[["__scopeId","data-v-fa9d25d3"]]),Bt={key:0},Wt=z({__name:"interaction",setup(a){const A=Ie(),n=B(""),l=B("");oe(()=>{A.query.contract&&(n.value=A.query.contract),A.query.address&&(l.value=A.query.address),!n.value||!l.value?K().push("/get-started"):(K().replace({query:{}}),Oe().includes(n.value)?console.log("Contract",n.value,"found"):(console.error("Contract",n.value,"not found"),K().push("/get-started")))});function s(u){console.log("Change target in interaction page",u),n.value=u.contract,l.value=u.address}return(u,c)=>p(n)&&p(l)?(o(),b("div",Bt,[i(St,{contract:p(n),address:p(l),"onChange:target":s},null,8,["contract","address"])])):T("",!0)}});export{Wt as default};
