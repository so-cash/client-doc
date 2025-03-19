import{a$ as se,i as f,a9 as j,aU as Ae,b0 as Ve,b1 as gt,b2 as bt,b3 as ht,r as oe,s as M,b4 as Ce,q as ue,w as D,p as k,au as G,l as I,g as R,f as q,t as L,aK as yt,y as Ct,u as z,e as o,k as U,m as W,b as O,b5 as St,j as Oe,D as Fe,E as Me,aP as _t,al as De,aQ as kt,B as ce,av as J,aw as wt,_ as Se,aj as me,ak as xt,Q as je,aA as It,S as ge,an as Bt,ao as Ge,ar as Vt,aY as be,v as qe,o as Pt,b6 as Et,Z as Ue,W as Lt,b7 as Tt,b8 as $t,b9 as Rt,ba as pt,ah as le,h as We,n as Pe,$ as He,bb as zt,bc as Ee,ap as Nt,aN as At,bd as Le}from"./index-DxDEn-q_.js";import{m as _e,u as ke}from"./VGrid-m_v9rPSq.js";const Xe=["top","bottom"],Ot=["start","end","left","right"];function Ft(e,n){let[a,t]=e.split(" ");return t||(t=se(Xe,a)?"start":se(Ot,a)?"top":"center"),{side:Te(a,n),align:Te(t,n)}}function Te(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Vn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Pn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function En(e){return{side:e.align,align:e.side}}function Ln(e){return se(Xe,e.side)?"y":"x"}function we(e){return Ae(()=>{const n=[],a={};if(e.value.background)if(Ve(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&gt(e.value.background)){const t=bt(e.value.background);if(t.a==null||t.a===1){const s=ht(t);a.color=s,a.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(Ve(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function ie(e,n){const a=f(()=>({text:j(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=we(a);return{textColorClasses:t,textColorStyles:s}}function te(e,n){const a=f(()=>({background:j(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=we(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}function Ye(e,n){const a=oe(),t=M(!1);if(Ce){const s=new IntersectionObserver(l=>{t.value=!!l.find(r=>r.isIntersecting)},n);ue(()=>{s.disconnect()}),D(a,(l,r)=>{r&&(s.unobserve(r),t.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Mt=["x-small","small","default","large","x-large"],de=k({size:{type:[String,Number],default:"default"}},"size");function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return Ae(()=>{let a,t;return se(Mt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:I(e.size),height:I(e.size)}),{sizeClasses:a,sizeStyles:t}})}const Dt=k({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...O(),...de(),...W({tag:"div"}),...U()},"VProgressCircular"),jt=R()({name:"VProgressCircular",props:Dt(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,l=oe(),{themeClasses:r}=q(e),{sizeClasses:c,sizeStyles:d}=ve(e),{textColorClasses:m,textColorStyles:g}=ie(L(e,"color")),{textColorClasses:h,textColorStyles:i}=ie(L(e,"bgColor")),{intersectionRef:u,isIntersecting:y}=Ye(),{resizeRef:v,contentRect:C}=yt(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),E=f(()=>Number(e.width)),B=f(()=>d.value?Number(e.size):C.value?C.value.width:Math.max(E.value,32)),w=f(()=>t/(1-E.value/B.value)*2),T=f(()=>E.value/B.value*w.value),N=f(()=>I((100-S.value)/100*s));return Ct(()=>{u.value=l.value,v.value=l.value}),z(()=>o(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,c.value,m.value,e.class],style:[d.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[o("circle",{class:["v-progress-circular__underlay",h.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":N.value},null)]),a.default&&o("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Gt=k({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ne=R(!1)({name:"VDefaultsProvider",props:Gt(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:s,reset:l,root:r,scoped:c}=St(e);return Oe(t,{reset:l,root:r,scoped:c,disabled:s}),()=>{var d;return(d=a.default)==null?void 0:d.call(a)}}});function qt(e){return{aspectStyles:f(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Ke=k({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...O(),...Me()},"VResponsive"),$e=R()({name:"VResponsive",props:Ke(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=qt(e),{dimensionStyles:s}=Fe(e);return z(()=>{var l;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:t.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&o("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Q=k({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Z(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{roundedClasses:f(()=>{const t=j(e)?e.value:e.rounded,s=j(e)?e.value:e.tile,l=[];if(t===!0||t==="")l.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))l.push(`rounded-${r}`);else(s||t===!1)&&l.push("rounded-0");return l})}}const Ut=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ee=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:s,group:l,...r}=e,{component:c=l?_t:De,...d}=typeof t=="object"?t:{};return kt(c,ce(typeof t=="string"?{name:s?"":t}:d,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:l}).filter(m=>{let[g,h]=m;return h!==void 0})),r),a)};function Wt(e,n){if(!Ce)return;const a=n.modifiers||{},t=n.value,{handler:s,options:l}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var h;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const m=(h=e._observe)==null?void 0:h[n.instance.$.uid];if(!m)return;const g=c.some(i=>i.isIntersecting);s&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&s(g,c,d),g&&a.once?Je(e,n):m.init=!0},l);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Je(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Ht={mounted:Wt,unmounted:Je},Xt=k({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Ke(),...O(),...Q(),...Ut()},"VImg"),Yt=R()({name:"VImg",directives:{intersect:Ht},props:Xt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=te(L(e,"color")),{roundedClasses:r}=Z(e),c=J("VImg"),d=M(""),m=oe(),g=M(e.eager?"loading":"idle"),h=M(),i=M(),u=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=f(()=>u.value.aspect||h.value/i.value||0);D(()=>e.src,()=>{v(g.value!=="idle")}),D(y,(b,_)=>{!b&&_&&m.value&&w(m.value)}),wt(()=>v());function v(b){if(!(e.eager&&b)&&!(Ce&&!b&&!e.eager)){if(g.value="loading",u.value.lazySrc){const _=new Image;_.src=u.value.lazySrc,w(_,null)}u.value.src&&Se(()=>{var _;a("loadstart",((_=m.value)==null?void 0:_.currentSrc)||u.value.src),setTimeout(()=>{var V;if(!c.isUnmounted)if((V=m.value)!=null&&V.complete){if(m.value.naturalWidth||S(),g.value==="error")return;y.value||w(m.value,null),g.value==="loading"&&C()}else y.value||w(m.value),E()})})}}function C(){var b;c.isUnmounted||(E(),w(m.value),g.value="loaded",a("load",((b=m.value)==null?void 0:b.currentSrc)||u.value.src))}function S(){var b;c.isUnmounted||(g.value="error",a("error",((b=m.value)==null?void 0:b.currentSrc)||u.value.src))}function E(){const b=m.value;b&&(d.value=b.currentSrc||b.src)}let B=-1;ue(()=>{clearTimeout(B)});function w(b){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{if(clearTimeout(B),c.isUnmounted)return;const{naturalHeight:p,naturalWidth:F}=b;p||F?(h.value=F,i.value=p):!b.complete&&g.value==="loading"&&_!=null?B=window.setTimeout(V,_):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(h.value=1,i.value=1)};V()}const T=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var V;if(!u.value.src||g.value==="idle")return null;const b=o("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:u.value.src,srcset:u.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:m,onLoad:C,onError:S},null),_=(V=t.sources)==null?void 0:V.call(t);return o(ee,{transition:e.transition,appear:!0},{default:()=>[me(_?o("picture",{class:"v-img__picture"},[_,b]):b,[[It,g.value==="loaded"]])]})},$=()=>o(ee,{transition:e.transition},{default:()=>[u.value.lazySrc&&g.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:u.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),H=()=>t.placeholder?o(ee,{transition:e.transition,appear:!0},{default:()=>[(g.value==="loading"||g.value==="error"&&!t.error)&&o("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,A=()=>t.error?o(ee,{transition:e.transition,appear:!0},{default:()=>[g.value==="error"&&o("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,x=M(!1);{const b=D(y,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.value=!0})}),b())})}return z(()=>{const b=$e.filterProps(e);return me(o($e,ce({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!x.value},s.value,r.value,e.class],style:[{width:I(e.width==="auto"?h.value:e.width)},l.value,e.style]},b,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(je,null,[o(N,null,null),o($,null,null),o(X,null,null),o(H,null,null),o(A,null,null)]),default:t.default}),[[xt("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:d,image:m,state:g,naturalWidth:h,naturalHeight:i}}}),xe=k({border:[Boolean,Number,String]},"border");function Ie(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{borderClasses:f(()=>{const t=j(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`border-${l}`);return s})}}const Qe=k({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Ze(e){return{elevationClasses:f(()=>{const a=j(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const Kt=["elevated","flat","tonal","outlined","text","plain"];function et(e,n){return o(je,null,[e&&o("span",{key:"overlay",class:`${n}__overlay`},null),o("span",{key:"underlay",class:`${n}__underlay`},null)])}const Be=k({color:String,variant:{type:String,default:"elevated",validator:e=>Kt.includes(e)}},"variant");function tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const a=f(()=>{const{variant:l}=ge(e);return`${n}--variant-${l}`}),{colorClasses:t,colorStyles:s}=we(f(()=>{const{variant:l,color:r}=ge(e);return{[["elevated","flat"].includes(l)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const nt=k({baseColor:String,divided:Boolean,...xe(),...O(),..._e(),...Qe(),...Q(),...W(),...U(),...Be()},"VBtnGroup"),Re=R()({name:"VBtnGroup",props:nt(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=q(e),{densityClasses:s}=ke(e),{borderClasses:l}=Ie(e),{elevationClasses:r}=Ze(e),{roundedClasses:c}=Z(e);Oe({VBtn:{height:"auto",baseColor:L(e,"baseColor"),color:L(e,"color"),density:L(e,"density"),flat:!0,variant:L(e,"variant")}}),z(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,l.value,s.value,r.value,c.value,e.class],style:e.style},a))}}),Jt=k({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Qt=k({value:null,disabled:Boolean,selectedClass:String},"group-item");function Zt(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=J("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Bt();Ge(Symbol.for(`${n.description}:id`),s);const l=Vt(n,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=L(e,"value"),c=f(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:r,disabled:c},t),ue(()=>{l.unregister(s)});const d=f(()=>l.isSelected(s)),m=f(()=>l.items.value[0].id===s),g=f(()=>l.items.value[l.items.value.length-1].id===s),h=f(()=>d.value&&[l.selectedClass.value,e.selectedClass]);return D(d,i=>{t.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:d,isFirst:m,isLast:g,toggle:()=>l.select(s,!d.value),select:i=>l.select(s,i),selectedClass:h,value:r,disabled:c,group:l}}function en(e,n){let a=!1;const t=be([]),s=qe(e,"modelValue",[],i=>i==null?[]:at(t,Lt(i)),i=>{const u=nn(t,i);return e.multiple?u:u[0]}),l=J("useGroup");function r(i,u){const y=i,v=Symbol.for(`${n.description}:id`),S=Tt(v,l==null?void 0:l.vnode).indexOf(u);ge(y.value)==null&&(y.value=S,y.useIndexAsValue=!0),S>-1?t.splice(S,0,y):t.push(y)}function c(i){if(a)return;d();const u=t.findIndex(y=>y.id===i);t.splice(u,1)}function d(){const i=t.find(u=>!u.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}Pt(()=>{d()}),ue(()=>{a=!0}),Et(()=>{for(let i=0;i<t.length;i++)t[i].useIndexAsValue&&(t[i].value=i)});function m(i,u){const y=t.find(v=>v.id===i);if(!(u&&(y!=null&&y.disabled)))if(e.multiple){const v=s.value.slice(),C=v.findIndex(E=>E===i),S=~C;if(u=u??!S,S&&e.mandatory&&v.length<=1||!S&&e.max!=null&&v.length+1>e.max)return;C<0&&u?v.push(i):C>=0&&!u&&v.splice(C,1),s.value=v}else{const v=s.value.includes(i);if(e.mandatory&&v)return;s.value=u??!v?[i]:[]}}function g(i){if(e.multiple,s.value.length){const u=s.value[0],y=t.findIndex(S=>S.id===u);let v=(y+i)%t.length,C=t[v];for(;C.disabled&&v!==y;)v=(v+i)%t.length,C=t[v];if(C.disabled)return;s.value=[t[v].id]}else{const u=t.find(y=>!y.disabled);u&&(s.value=[u.id])}}const h={register:r,unregister:c,selected:s,select:m,disabled:L(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:i=>s.value.includes(i),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:i=>tn(t,i)};return Ge(n,h),h}function tn(e,n){const a=at(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function at(e,n){const a=[];return n.forEach(t=>{const s=e.find(r=>Ue(t,r.value)),l=e[t];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function nn(e,n){const a=[];return n.forEach(t=>{const s=e.findIndex(l=>l.id===t);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const st=Symbol.for("vuetify:v-btn-toggle"),an=k({...nt(),...Jt()},"VBtnToggle");R()({name:"VBtnToggle",props:an(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:l,select:r,selected:c}=en(e,st);return z(()=>{const d=Re.filterProps(e);return o(Re,ce({class:["v-btn-toggle",e.class]},d,{style:e.style}),{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{isSelected:t,next:s,prev:l,select:r,selected:c})]}})}),{next:s,prev:l,select:r}}});const sn=k({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:le,...O(),...de(),...W({tag:"i"}),...U()},"VIcon"),ae=R()({name:"VIcon",props:sn(),setup(e,n){let{attrs:a,slots:t}=n;const s=oe(),{themeClasses:l}=q(e),{iconData:r}=$t(f(()=>s.value||e.icon)),{sizeClasses:c}=ve(e),{textColorClasses:d,textColorStyles:m}=ie(L(e,"color"));return z(()=>{var i,u;const g=(i=t.default)==null?void 0:i.call(t);g&&(s.value=(u=Rt(g).filter(y=>y.type===pt&&y.children&&typeof y.children=="string")[0])==null?void 0:u.children);const h=!!(a.onClick||a.onClickOnce);return o(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",l.value,c.value,d.value,{"v-icon--clickable":h,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},m.value,e.style],role:h?"button":void 0,"aria-hidden":!h,tabindex:h?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}}),pe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},lt=k({location:String},"location");function it(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=We();return{locationStyles:f(()=>{if(!e.location)return{};const{side:l,align:r}=Ft(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function c(m){return a?a(m):0}const d={};return l!=="center"&&(n?d[pe[l]]=`calc(100% - ${c(l)}px)`:d[l]=0),r!=="center"?n?d[pe[r]]=`calc(100% - ${c(r)}px)`:d[r]=0:(l==="center"?d.top=d.left="50%":d[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",d.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),d})}}const ln=k({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...O(),...lt({location:"top"}),...Q(),...W(),...U()},"VProgressLinear"),rn=R()({name:"VProgressLinear",props:ln(),emits:{"update:modelValue":e=>!0},setup(e,n){var x;let{slots:a}=n;const t=qe(e,"modelValue"),{isRtl:s,rtlClasses:l}=We(),{themeClasses:r}=q(e),{locationStyles:c}=it(e),{textColorClasses:d,textColorStyles:m}=ie(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:h}=te(f(()=>e.bgColor||e.color)),{backgroundColorClasses:i,backgroundColorStyles:u}=te(f(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:v}=te(e,"color"),{roundedClasses:C}=Z(e),{intersectionRef:S,isIntersecting:E}=Ye(),B=f(()=>parseFloat(e.max)),w=f(()=>parseFloat(e.height)),T=f(()=>Pe(parseFloat(e.bufferValue)/B.value*100,0,100)),N=f(()=>Pe(parseFloat(t.value)/B.value*100,0,100)),$=f(()=>s.value!==e.reverse),H=f(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=He&&((x=window.matchMedia)==null?void 0:x.call(window,"(forced-colors: active)").matches);function X(b){if(!S.value)return;const{left:_,right:V,width:p}=S.value.getBoundingClientRect(),F=$.value?p-b.clientX+(V-p):b.clientX-_;t.value=Math.round(F/p*B.value)}return z(()=>o(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&E.value,"v-progress-linear--reverse":$.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,r.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?I(w.value):0,"--v-progress-linear-height":I(w.value),...e.absolute?c.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(t.value),B.value),onClick:e.clickable&&X},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",d.value],style:{...m.value,[$.value?"left":"right"]:I(-w.value),borderTop:`${I(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${I(w.value/4)})`,width:I(100-T.value,"%"),"--v-progress-linear-stream-to":I(w.value*($.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",A?void 0:g.value],style:[h.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),o("div",{class:["v-progress-linear__buffer",A?void 0:i.value],style:[u.value,{opacity:parseFloat(e.bufferOpacity),width:I(T.value,"%")}]},null),o(De,{name:H.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(b=>o("div",{key:b,class:["v-progress-linear__indeterminate",b,A?void 0:y.value],style:v.value},null))]):o("div",{class:["v-progress-linear__determinate",A?void 0:y.value],style:[v.value,{width:I(N.value,"%")}]},null)]}),a.default&&o("div",{class:"v-progress-linear__content"},[a.default({value:N.value,buffer:T.value})])]})),{}}}),on=k({loading:[Boolean,String]},"loader");function un(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{loaderClasses:f(()=>({[`${n}--loading`]:e.loading}))}}function Tn(e,n){var t;let{slots:a}=n;return o("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||o(rn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const cn=["static","relative","fixed","absolute","sticky"],dn=k({position:{type:String,validator:e=>cn.includes(e)}},"position");function vn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{positionClasses:f(()=>e.position?`${n}--${e.position}`:void 0)}}function fn(){const e=J("useRoute");return f(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function $n(){var e,n;return(n=(e=J("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function mn(e,n){var h,i;const a=zt("RouterLink"),t=f(()=>!!(e.href||e.to)),s=f(()=>(t==null?void 0:t.value)||Ee(n,"click")||Ee(e,"click"));if(typeof a=="string"||!("useLink"in a)){const u=L(e,"href");return{isLink:t,isClickable:s,href:u,linkProps:be({href:u})}}const l=f(()=>({...e,to:L(()=>e.to||"")})),r=a.useLink(l.value),c=f(()=>e.to?r:void 0),d=fn(),m=f(()=>{var u,y,v;return c.value?e.exact?d.value?((v=c.value.isExactActive)==null?void 0:v.value)&&Ue(c.value.route.value.query,d.value.query):((y=c.value.isExactActive)==null?void 0:y.value)??!1:((u=c.value.isActive)==null?void 0:u.value)??!1:!1}),g=f(()=>{var u;return e.to?(u=c.value)==null?void 0:u.route.value.href:e.href});return{isLink:t,isClickable:s,isActive:m,route:(h=c.value)==null?void 0:h.route,navigate:(i=c.value)==null?void 0:i.navigate,href:g,linkProps:be({href:g,"aria-current":f(()=>m.value?"page":void 0)})}}const gn=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let fe=!1;function Rn(e,n){let a=!1,t,s;He&&(e!=null&&e.beforeEach)&&(Se(()=>{window.addEventListener("popstate",l),t=e.beforeEach((r,c,d)=>{fe?a?n(d):d():setTimeout(()=>a?n(d):d()),fe=!0}),s=e==null?void 0:e.afterEach(()=>{fe=!1})}),Nt(()=>{window.removeEventListener("popstate",l),t==null||t(),s==null||s()}));function l(r){var c;(c=r.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function bn(e,n){D(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&Se(()=>{n(!0)})},{immediate:!0})}const he=Symbol("rippleStop"),hn=80;function ze(e,n){e.style.transform=n,e.style.webkitTransform=n}function ye(e){return e.constructor.name==="TouchEvent"}function rt(e){return e.constructor.name==="KeyboardEvent"}const yn=function(e,n){var h;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!rt(e)){const i=n.getBoundingClientRect(),u=ye(e)?e.touches[e.touches.length-1]:e;t=u.clientX-i.left,s=u.clientY-i.top}let l=0,r=.3;(h=n._ripple)!=null&&h.circle?(r=.15,l=n.clientWidth/2,l=a.center?l:l+Math.sqrt((t-l)**2+(s-l)**2)/4):l=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const c=`${(n.clientWidth-l*2)/2}px`,d=`${(n.clientHeight-l*2)/2}px`,m=a.center?c:`${t-l}px`,g=a.center?d:`${s-l}px`;return{radius:l,scale:r,x:m,y:g,centerX:c,centerY:d}},re={show(e,n){var u;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=n==null?void 0:n._ripple)!=null&&u.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:l,scale:r,x:c,y:d,centerX:m,centerY:g}=yn(e,n,a),h=`${l*2}px`;s.className="v-ripple__animation",s.style.width=h,s.style.height=h,n.appendChild(t);const i=window.getComputedStyle(n);i&&i.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ze(s,`translate(${c}, ${d}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ze(s,`translate(${m}, ${g}) scale3d(1,1,1)`)})})},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function ot(e){return typeof e>"u"||!!e}function Y(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[he])){if(e[he]=!0,ye(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||rt(e),a._ripple.class&&(n.class=a._ripple.class),ye(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{re.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},hn)}else re.show(e,a,n)}}function Ne(e){e[he]=!0}function P(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{P(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),re.hide(n)}}function ut(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let K=!1;function ct(e){!K&&(e.keyCode===Le.enter||e.keyCode===Le.space)&&(K=!0,Y(e))}function dt(e){K=!1,P(e)}function vt(e){K&&(K=!1,P(e))}function ft(e,n,a){const{value:t,modifiers:s}=n,l=ot(t);if(l||re.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,At(t)&&t.class&&(e._ripple.class=t.class),l&&!a){if(s.stop){e.addEventListener("touchstart",Ne,{passive:!0}),e.addEventListener("mousedown",Ne);return}e.addEventListener("touchstart",Y,{passive:!0}),e.addEventListener("touchend",P,{passive:!0}),e.addEventListener("touchmove",ut,{passive:!0}),e.addEventListener("touchcancel",P),e.addEventListener("mousedown",Y),e.addEventListener("mouseup",P),e.addEventListener("mouseleave",P),e.addEventListener("keydown",ct),e.addEventListener("keyup",dt),e.addEventListener("blur",vt),e.addEventListener("dragstart",P,{passive:!0})}else!l&&a&&mt(e)}function mt(e){e.removeEventListener("mousedown",Y),e.removeEventListener("touchstart",Y),e.removeEventListener("touchend",P),e.removeEventListener("touchmove",ut),e.removeEventListener("touchcancel",P),e.removeEventListener("mouseup",P),e.removeEventListener("mouseleave",P),e.removeEventListener("keydown",ct),e.removeEventListener("keyup",dt),e.removeEventListener("dragstart",P),e.removeEventListener("blur",vt)}function Cn(e,n){ft(e,n,!1)}function Sn(e){delete e._ripple,mt(e)}function _n(e,n){if(n.value===n.oldValue)return;const a=ot(n.oldValue);ft(e,n,a)}const kn={mounted:Cn,unmounted:Sn,updated:_n},wn=k({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:st},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:le,appendIcon:le,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...xe(),...O(),..._e(),...Me(),...Qe(),...Qt(),...on(),...lt(),...dn(),...Q(),...gn(),...de(),...W({tag:"button"}),...U(),...Be({variant:"elevated"})},"VBtn"),pn=R()({name:"VBtn",props:wn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=q(e),{borderClasses:l}=Ie(e),{densityClasses:r}=ke(e),{dimensionStyles:c}=Fe(e),{elevationClasses:d}=Ze(e),{loaderClasses:m}=un(e),{locationStyles:g}=it(e),{positionClasses:h}=vn(e),{roundedClasses:i}=Z(e),{sizeClasses:u,sizeStyles:y}=ve(e),v=Zt(e,e.symbol,!1),C=mn(e,a),S=f(()=>{var x;return e.active!==void 0?e.active:C.isLink.value?(x=C.isActive)==null?void 0:x.value:v==null?void 0:v.isSelected.value}),E=f(()=>S.value?e.activeColor??e.color:e.color),B=f(()=>{var b,_;return{color:(v==null?void 0:v.isSelected.value)&&(!C.isLink.value||((b=C.isActive)==null?void 0:b.value))||!v||((_=C.isActive)==null?void 0:_.value)?E.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:w,colorStyles:T,variantClasses:N}=tt(B),$=f(()=>(v==null?void 0:v.disabled.value)||e.disabled),H=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),A=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function X(x){var b;$.value||C.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||a.target==="_blank")||((b=C.navigate)==null||b.call(C,x),v==null||v.toggle())}return bn(C,v==null?void 0:v.select),z(()=>{const x=C.isLink.value?"a":e.tag,b=!!(e.prependIcon||t.prepend),_=!!(e.appendIcon||t.append),V=!!(e.icon&&e.icon!==!0);return me(o(x,ce({type:x==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":$.value,"v-btn--elevated":H.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,w.value,r.value,d.value,m.value,h.value,i.value,u.value,N.value,e.class],style:[T.value,c.value,g.value,y.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:$.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:X,value:A.value},C.linkProps),{default:()=>{var p;return[et(!0,"v-btn"),!e.icon&&b&&o("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?o(ne,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):o(ae,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&V?o(ae,{key:"content-icon",icon:e.icon},null):o(ne,{key:"content-defaults",disabled:!V,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var F;return[((F=t.default)==null?void 0:F.call(t))??e.text]}})]),!e.icon&&_&&o("span",{key:"append",class:"v-btn__append"},[t.append?o(ne,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):o(ae,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((p=t.loader)==null?void 0:p.call(t))??o(jt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[kn,!$.value&&e.ripple,"",{center:!!e.icon}]])}),{group:v}}}),xn=k({start:Boolean,end:Boolean,icon:le,image:String,text:String,...xe(),...O(),..._e(),...Q(),...de(),...W(),...U(),...Be({variant:"flat"})},"VAvatar"),zn=R()({name:"VAvatar",props:xn(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=q(e),{borderClasses:s}=Ie(e),{colorClasses:l,colorStyles:r,variantClasses:c}=tt(e),{densityClasses:d}=ke(e),{roundedClasses:m}=Z(e),{sizeClasses:g,sizeStyles:h}=ve(e);return z(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,l.value,d.value,m.value,g.value,c.value,e.class],style:[r.value,h.value,e.style]},{default:()=>[a.default?o(ne,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?o(Yt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(ae,{key:"icon",icon:e.icon},null):e.text,et(!1,"v-avatar")]})),{}}});export{en as A,ve as B,Zt as C,de as D,Qt as E,Ft as F,Vn as G,Pn as H,Ht as I,En as J,Ln as K,Tn as L,ee as M,$n as N,Rn as O,kn as R,jt as V,Ie as a,Ze as b,Z as c,Qe as d,xe as e,Yt as f,ne as g,pn as h,ie as i,Ut as j,ae as k,zn as l,Q as m,tt as n,it as o,vn as p,Be as q,dn as r,lt as s,et as t,te as u,un as v,mn as w,gn as x,on as y,Jt as z};
