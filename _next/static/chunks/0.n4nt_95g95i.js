(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,25431,e=>{"use strict";let t;var i=e.i(9735),l=e.i(88552),n=e.i(24655);e.i(3159);var r=e.i(46907),o=e.i(33261),a=e.i(7744),s=e.i(38803),u=e.i(17106),d=e.i(51413),p=e.i(7665),f=e.i(62659);let c="TARGET_",_="SOURCE_",h={TARGET_PAY_SELF_PARTIAL:`${c}PAY_SELF_PARTIAL`,SOURCE_PAY_SELF_FULL:`${_}PAY_SELF_FULL`,SOURCE_MONTHLY_SERVICE_COUNT:`${_}MONTHLY_SERVICE_COUNT`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL:`${c}AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL`,SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON:`${_}CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_LOCK_WHILE_DRAWER_OPEN:`${c}AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_LOCK_WHILE_DRAWER_OPEN`,TARGET_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION:`${c}AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION`,SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON:`${_}CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON`,TARGET_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT:`${c}AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT`,SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON:`${_}CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON`,TARGET_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_LOCK_WHILE_DRAWER_OPEN:`${c}AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_LOCK_WHILE_DRAWER_OPEN`,TARGET_SHOW_TEXTAREA_SCROLL_NOTICE:`${c}SHOW_TEXTAREA_SCROLL_NOTICE`,SOURCE_TEXTAREA_SCROLL_OVERFLOW:`${_}TEXTAREA_SCROLL_OVERFLOW`,SOURCE_MEAL_SERVICE_DATE:`${_}MEAL_SERVICE_DATE`,SOURCE_MEAL_TYPE_GENERAL:`${_}MEAL_TYPE_GENERAL`,SOURCE_MEAL_TYPE_THERAPEUTIC:`${_}MEAL_TYPE_THERAPEUTIC`,SOURCE_MEAL_TYPE_TEXTURE_MODIFIED:`${_}MEAL_TYPE_TEXTURE_MODIFIED`,TARGET_MEAL_MENU_SOUP:`${c}MEAL_MENU_SOUP`,TARGET_MEAL_MENU_SIDE_DISHES:`${c}MEAL_MENU_SIDE_DISHES`,TARGET_MEAL_MENU_EXTRA:`${c}MEAL_MENU_EXTRA`,SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL:`${_}CLICK_SELECT_ALL_GENERAL_MEAL`,SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL:`${_}CLICK_SELECT_ALL_THERAPEUTIC_MEAL`,SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL:`${_}CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL`,SOURCE_MULTI_DATE_SELECTED_VALUES:`${_}MULTI_DATE_SELECTED_VALUES`,TARGET_MULTI_DATE_SELECTED_COUNT:`${c}MULTI_DATE_SELECTED_COUNT`,SOURCE_TOTAL_AMOUNT_PRICE:`${_}TOTAL_AMOUNT_PRICE`,SOURCE_TOTAL_AMOUNT_COUNT:`${_}TOTAL_AMOUNT_COUNT`,TARGET_TOTAL_AMOUNT:`${c}TOTAL_AMOUNT`,SOURCE_COMPUTE_SUM:`${_}COMPUTE_SUM`,TARGET_SUM_RESULT:`${c}SUM_RESULT`,RETROACTIVE_PAYMENT_DATE:"RETROACTIVE_PAYMENT_DATE",RETROACTIVE_PAYMENT_REASON:"RETROACTIVE_PAYMENT_REASON",ACTUAL_SERVICE_PROVIDED_DATE:"ACTUAL_SERVICE_PROVIDED_DATE",TARGET_ACTUAL_SERVICE_PERIOD_START_DATE:`${c}ACTUAL_SERVICE_PERIOD_START_DATE`,TARGET_ACTUAL_SERVICE_PERIOD_END_DATE:`${c}ACTUAL_SERVICE_PERIOD_END_DATE`,TARGET_ACTUAL_SERVICE_COUNT:`${c}ACTUAL_SERVICE_COUNT`,TARGET_COPAYMENT_RECEIPT_AMOUNT:`${c}COPAYMENT_RECEIPT_AMOUNT`,TARGET_COPAYMENT_RECEIPT_RECEIVED_DATE:`${c}COPAYMENT_RECEIPT_RECEIVED_DATE`,COPAYMENT_RECEIPT_TRANSACTION_NUMBER:"COPAYMENT_RECEIPT_TRANSACTION_NUMBER",SYNC_VALUE:"SYNC_VALUE"},E=e=>{if("string"!=typeof e||!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t,i,l]=e.split("-").map(Number);if(void 0===t||void 0===i||void 0===l||i<1||i>12)return!1;let n=new Date(t,i,0).getDate();return!(l<1)&&!(l>n)},m=96/25.4,g=96/25.4*210,T=(e,t)=>{if("number"==typeof e)return e;if("string"!=typeof e)return null;let i=e.trim();if(i.endsWith("%")){let e=Number(i.replace("%","").trim());return Number.isFinite(e)?(t?.pageWidthPx??g)*e/100:null}let l=i.match(/^calc\(\s*([0-9]+(?:\.[0-9]+)?)mm\s*\*\s*([0-9]+(?:\.[0-9]+)?)\s*\)$/);if(null!==l){let e=Number(l[1]),t=Number(l[2]);return Number.isFinite(e)&&Number.isFinite(t)?e*t*m:null}if(i.endsWith("px")){let e=Number(i.replace("px","").trim());return Number.isFinite(e)?e:null}let n=Number(i);return Number.isFinite(n)?n:null},x=e=>{let{text:i,fontSizePx:l}=e,n=void 0!==t?t:t="u"<typeof document?null:document.createElement("canvas").getContext("2d");if(null===n){var r,o,a;let e=0;for(let t of i){if(" "===t){e+=.35;continue}e+=/[\u0000-\u00ff]/.test(t)?.55:1}return e*l}let s="number"==typeof(r=e.fontWeight)?`${r}`:"string"==typeof r&&""!==r.trim()?r.trim():"400",u="italic"===(o=e.fontStyle)||"oblique"===o||"normal"===o?o:"normal",d="string"==typeof(a=e.fontFamily)&&""!==a.trim()?a:"sans-serif";n.font=`${u} ${s} ${l}px ${d}`;let p=n.measureText(i).width,f=T(e.letterSpacing);return null===f||i.length<=1?p:p+f*(i.length-1)};var b=e.i(98273),C=e.i(77264);function y({onClick:e,disabled:t,style:l,label:n}){let r=1.1*Math.max(12,Math.min(20,Math.round(T(l?.fontSize)??14)));return(0,i.jsxs)(A,{onClick:e,disabled:t,style:l,children:[(0,i.jsx)(b.default.DocumentSearch,{size:r}),n]})}let A=(0,s.default)(C.default).withConfig({componentId:"zh_mobile_web__sc-43b6564f-0"})``,R={fontSize:13,lineHeight:1.2},O=({onClick:e,disabled:t,style:i,label:l,checked:n=!1})=>{let r={display:"inline-flex",alignItems:"center",gap:6,border:0,padding:0,background:"transparent",color:"inherit",cursor:t?"not-allowed":"pointer",...i??{}};return(0,a.createElement)("button",{type:"button",onClick:e,disabled:t,style:r},(0,a.createElement)(f.default.Input.Radio,{checked:n,disabled:t,readOnly:!0}),(0,a.createElement)("span",{style:R},l))},S={[h.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_USER_CHANGE_LEVEL_BUTTON]:y,[h.SOURCE_CLICK_AUTOCOMPLETE_SERVICE_END_REPORT_STAFF_OPINION_BUTTON]:y,[h.SOURCE_CLICK_AUTOCOMPLETE_CASE_MANAGEMENT_RECORD_CASE_CONTENT_BUTTON]:y,[h.SOURCE_CLICK_SELECT_ALL_GENERAL_MEAL]:O,[h.SOURCE_CLICK_SELECT_ALL_THERAPEUTIC_MEAL]:O,[h.SOURCE_CLICK_SELECT_ALL_TEXTURE_MODIFIED_MEAL]:O},$="1px solid #58616a",v=96/25.4*210,L=96/25.4*297;function P({imagePath:e,fields:t=[],overlayBoxes:l=[],readOnly:n=!1,displayValueOnly:r=!1,showAssistUiComponents:o=!0,onAssistTriggerClick:s,isAssistButtonDisabled:u,resolveAssistButtonLabel:d,resolveAssistButtonChecked:c,isFieldEditable:_,isFieldAutoFilled:m,onChangeField:g,onOverlayBoxClick:b}){let C,y=(0,a.useRef)(null),[A,R]=(0,a.useState)(1),[O,V]=(0,a.useState)({width:0,height:0}),{registerTextarea:K,checkOverflow:k,recheckAllOverflow:W,isTextareaScrollOverflowActive:H}=function(){let e=(0,a.useRef)(new Map),t=(0,a.useRef)(new Map),i=(0,a.useRef)(new Map),[l,n]=(0,a.useState)({}),r=(0,a.useCallback)((e,t)=>{n(i=>i[e]===t?i:{...i,[e]:t})},[]),o=(0,a.useCallback)(t=>{let i=e.current.get(t);if(void 0===i)return!1;let l=i.scrollHeight-i.clientHeight>1;return r(t,l),l},[r]),s=(0,a.useCallback)(l=>{let r=t.current.get(l);if(void 0!==r)return r;let a=t=>{if(null===t){let t=i.current.get(l);void 0!==t&&cancelAnimationFrame(t);let r=requestAnimationFrame(()=>{i.current.delete(l),e.current.has(l)||(e.current.delete(l),n(e=>{if(void 0===e[l])return e;let t={...e};return delete t[l],t}))});i.current.set(l,r);return}let r=i.current.get(l);void 0!==r&&(cancelAnimationFrame(r),i.current.delete(l)),e.current.set(l,t),requestAnimationFrame(()=>{o(l)})};return t.current.set(l,a),a},[o]),u=(0,a.useCallback)(()=>{e.current.forEach((e,t)=>{o(t)})},[o]);return(0,a.useEffect)(()=>{let e=()=>{requestAnimationFrame(()=>{u()})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[u]),{registerTextarea:s,checkOverflow:o,recheckAllOverflow:u,isTextareaScrollOverflowActive:(0,a.useCallback)(e=>!0===l[e],[l])}}(),G=(0,a.useRef)(new Map),Y=e=>{let t=e.trim();if(t.endsWith("%")){let e=Number.parseFloat(t.slice(0,-1));return Number.isFinite(e)?{unit:"%",value:e}:null}if(t.endsWith("px")){let e=Number.parseFloat(t.slice(0,-2));return Number.isFinite(e)?{unit:"px",value:e}:null}let i=Number.parseFloat(t);return Number.isFinite(i)?{unit:"px",value:i}:null},B=e=>e.uiProps.style??{},X=e=>`${e.page}:${e.fieldKey}`,q=(0,a.useCallback)((e,t)=>{let i=B(e);if("textarea"!==e.uiProps.fieldType||"middle"!==i.verticalAlign)return void t.style.removeProperty("padding-top");t.style.removeProperty("padding-top");let l=window.getComputedStyle(t),n=Number.parseFloat(l.paddingTop)||0,r=Number.parseFloat(l.paddingBottom)||0,o=Number.parseFloat(l.paddingLeft)||0,a=Number.parseFloat(l.paddingRight)||0,s=Math.max(t.clientWidth-o-a,0);if(s<=0){t.style.paddingTop=`${n}px`;return}let u=document.createElement("textarea"),d="textarea"===e.uiProps.fieldType?e.uiProps.placeholder?.text??"":"";u.value=""===t.value.trim()?d:t.value,u.rows=t.rows,u.wrap=t.wrap,u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.zIndex="-1",u.style.height="0",u.style.minHeight="0",u.style.maxHeight="none",u.style.overflow="hidden",u.style.resize="none",u.style.boxSizing="content-box",u.style.width=`${s}px`,u.style.padding="0",u.style.border="0",u.style.fontFamily=l.fontFamily,u.style.fontSize=l.fontSize,u.style.fontWeight=l.fontWeight,u.style.fontStyle=l.fontStyle,u.style.letterSpacing=l.letterSpacing,u.style.lineHeight=l.lineHeight,document.body.appendChild(u);let p=Math.max(u.scrollHeight,0);u.remove();let f=Math.max(t.clientHeight-n-r,0);if(f<=0||p>=f-1){t.style.paddingTop=`${n}px`;return}t.style.paddingTop=`${n+(f-p)/2}px`},[]),J=(e,t)=>{if(e.uiProps.triggerKeys?.includes(t)!==!0)return null;let i=e.uiProps.triggerKeyScopes?.[t],l="string"==typeof i?i.trim():"";return""===l?void 0:l},Q=e=>t.some(t=>null!==J(t,h.SOURCE_TEXTAREA_SCROLL_OVERFLOW)&&(null===e||J(t,h.SOURCE_TEXTAREA_SCROLL_OVERFLOW)===e)&&H(X(t)));(0,a.useEffect)(()=>{let e=y.current;if(null===e)return;let t=()=>{let t=e.clientWidth;t<=0?R(1):R(t/v)};t();let i=new ResizeObserver(()=>{t()});return i.observe(e),()=>{i.disconnect()}},[]),(0,a.useEffect)(()=>{W()},[t,W]),(0,a.useEffect)(()=>{for(let e of t){if("textarea"!==e.uiProps.fieldType)continue;let t=X(e),i=G.current.get(t);void 0!==i&&q(e,i)}},[q,t]);let Z=(e,t)=>{let i=B(e),l=((e,t)=>{let i,l=B(e);if("check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType||"image"===e.uiProps.fieldType||"multi-date"===e.uiProps.fieldType)return null;let n=T(l.width);if(null===n||n<=0)return null;let r=T(l.fontSize)??16,o=(i=((e,t)=>{if("number"==typeof e)return 2*e;if("string"!=typeof e)return 0;let i=e.trim().split(/\s+/).map(e=>T(e,t));if(0===i.length)return 0;let[l,n,r,o]=[i[0],i[1]??i[0],i[2]??i[0],i[3]??i[1]??i[0]];return void 0===l||void 0===n||void 0===r||void 0===o||null===l||null===n||null===r||null===o?0:n+o})(l.padding,void 0),i+(T(l.paddingLeft,void 0)??0)+(T(l.paddingRight,void 0)??0));if("textarea"===e.uiProps.fieldType){let e,i=T(l.height);if(null===i||i<=0)return`${r}px`;let a=(e=>{let t=e.horizontalPaddingPx??0,i=e.verticalPaddingPx??0,l=e.minFontSizePx??12,n=e.targetWidthPx-t-2,r=e.targetHeightPx-i-2;if(""===e.text.trim()||n<=0||r<=0)return e.baseFontSizePx;let o=t=>(e=>{let t=e.text.split("\n"),i=0;for(let l of t){if(""===l){i+=1;continue}let t="";for(let n of l){let l=`${t}${n}`;if(x({text:l,fontSizePx:e.fontSizePx,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing})<=e.maxWidthPx||""===t){t=l;continue}i+=1,t=n}i+=1}return i})({text:e.text,maxWidthPx:n,fontSizePx:t,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing})*((e,t)=>{if("number"==typeof e)return e<=4?e*t:e;if("string"==typeof e){let i=e.trim();if(i.endsWith("%")){let e=Number(i.replace("%","").trim());if(Number.isFinite(e))return t*e/100}let l=T(i);if(null!==l)return l;let n=Number(i);if(Number.isFinite(n))return n<=4?n*t:n}return 1.2*t})(e.lineHeight,t)<=r;if(o(e.baseFontSizePx))return e.baseFontSizePx;let a=l,s=e.baseFontSizePx,u=l;for(;a<=s;){let e=Math.floor((a+s)/2);o(e)?(u=e,a=e+1):s=e-1}return u})({text:t,targetWidthPx:n,targetHeightPx:i,baseFontSizePx:r,horizontalPaddingPx:o,verticalPaddingPx:(e=((e,t)=>{if("number"==typeof e)return 2*e;if("string"!=typeof e)return 0;let i=e.trim().split(/\s+/).map(e=>T(e,t));if(0===i.length)return 0;let[l,n,r]=[i[0],i[1]??i[0],i[2]??i[0]];return void 0===l||void 0===n||void 0===r||null===l||null===n||null===r?0:l+r})(l.padding,void 0),e+(T(l.paddingTop,void 0)??0)+(T(l.paddingBottom,void 0)??0)),minFontSizePx:12,lineHeight:l.lineHeight,fontWeight:l.fontWeight,fontStyle:l.fontStyle,fontFamily:l.fontFamily,letterSpacing:l.letterSpacing});return`${a}px`}let a=(e=>{let t=e.horizontalPaddingPx??0,i=e.minFontSizePx??12,l=e.targetWidthPx-t-2;if(""===e.text.trim()||l<=0)return e.baseFontSizePx;let n=x({text:e.text,fontSizePx:e.baseFontSizePx,fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:e.fontFamily,letterSpacing:e.letterSpacing});return n<=l?e.baseFontSizePx:Math.max(i,Math.floor(e.baseFontSizePx*l/n))})({text:t,targetWidthPx:n,baseFontSizePx:r,horizontalPaddingPx:o,minFontSizePx:12,fontWeight:l.fontWeight,fontStyle:l.fontStyle,fontFamily:l.fontFamily,letterSpacing:l.letterSpacing});return`${a}px`})(e,t);return{position:"absolute",...i,...null===l?{}:{fontSize:l}}},ee=e=>{let t=B(e).textAlign;return"left"===t||"right"===t||"center"===t?t:"center"},et=e=>{if("select"!==e.uiProps.fieldType)return e.value??"";let t=e.value??"";if(0===e.uiProps.options.length||e.uiProps.options.some(e=>e.value===t))return t;let i=e.uiProps.options[0];return i?.value??""},ei=e=>Object.entries(e).filter(([,e])=>null!=e&&""!==e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>`${e}:${String(t)}`).join("|"),el=(e,t,l,n)=>{if(!((e,t)=>{if(!(e.triggerKeys??[]).includes(h.TARGET_SHOW_TEXTAREA_SCROLL_NOTICE))return!0;let i=((e,t,i)=>{if(!0!==t.triggerKeys.includes(i))return null;if(Object.prototype.hasOwnProperty.call(t.triggerKeyScopes??{},i)){let e=t.triggerKeyScopes?.[i],l="string"==typeof e?e.trim():"";return""===l?void 0:l}let l=J(e,i);return null===l?null:l})(t,e,h.TARGET_SHOW_TEXTAREA_SCROLL_NOTICE);return null===i?Q(null):Q(i)})(e,t))return[];if("message"===e.type)return[(0,i.jsx)("div",{style:{position:"absolute",...e.style},children:e.message},l)];if("button"===e.type){if(r)return[];let o=e.triggerKeys[0];if(void 0===o)return[];let p=S[o]??(e=>(0,i.jsx)("button",{type:"button",onClick:e.onClick,disabled:e.disabled,style:e.style,children:e.label})),f=u?.({triggerKey:o,field:t,isReadOnly:n})??n,_=d?.({triggerKey:o,field:t})??o,h=c?.({triggerKey:o,field:t})??void 0;return[(0,i.jsx)(a.Fragment,{children:p({disabled:f,label:_,checked:h,style:{position:"absolute",...e.style},onClick:()=>{s?.({triggerKey:o,field:t})}})},l)]}return[(0,i.jsx)("div",{style:{position:"absolute",...e.style},children:e.children.flatMap((e,i)=>{let r=`${l}-child-${i}-${e.type}-${e.triggerKeys.join(",")}-${ei(e.style)}`;return el(e,t,r,n)})},l)]},en=(e,t,i)=>o?(e.uiProps.assistUiComponents??[]).flatMap((l,n)=>{let r=`${t}-${n}-${l.type}-${l.triggerKeys.join(",")}-${ei(l.style)}`;return el(l,e,r,i)}):[],er=(C=new Map,l.map(e=>{let t=`${e.left}-${e.top}-${e.width}-${e.height}-${e.borderColor??""}`,i=(C.get(t)??0)+1;return C.set(t,i),{box:e,key:`overlay-box-${t}-${i}`}})),eo=(0,a.useMemo)(()=>{let e=O.width,t=O.height,i=e>0&&t>0,l=(()=>{if(!i)return{left:0,top:0,width:v,height:L};let l=Math.min(v/e,L/t),n=e*l,r=t*l;return{left:(v-n)/2,top:(L-r)/2,width:n,height:r}})(),n=t=>"%"===t.unit?l.left+l.width*t.value/100:i?l.left+l.width*t.value/e:t.value,r=e=>"%"===e.unit?l.top+l.height*e.value/100:i?l.top+l.height*e.value/t:e.value,o=t=>"%"===t.unit?l.width*t.value/100:i?l.width*t.value/e:t.value,a=e=>"%"===e.unit?l.height*e.value/100:i?l.height*e.value/t:e.value,s=[];for(let{key:e,box:t}of er){let i=Y(t.left),l=Y(t.top),u=Y(t.width),d=Y(t.height);if(null===i||null===l||null===u||null===d)continue;let p=n(i),f=r(l),c=o(u),_=a(d);c<=0||_<=0||s.push({key:e,box:{left:`${p}px`,top:`${f}px`,width:`${c}px`,height:`${_}px`,borderColor:t.borderColor}})}return s},[O.height,O.width,er]);return(0,i.jsx)(I,{ref:y,style:{height:`${Math.max(L*A,1)}px`},children:(0,i.jsxs)(N,{style:{width:`${v}px`,height:`${L}px`,transform:`scale(${A})`},children:[(0,i.jsx)(p.default,{src:e,style:{objectFit:"contain"},fill:!0,alt:"",loading:"eager",onLoad:e=>{let{naturalWidth:t,naturalHeight:i}=e.currentTarget;t<=0||i<=0||V({width:t,height:i})}}),(0,i.jsx)(M,{$interactive:void 0!==g&&!1===n,children:t.map((e,t)=>(0,i.jsx)(a.Fragment,{children:((e,t)=>{let l=`${e.page}-${e.fieldKey}-${t}`,o=n||_?.(e)===!1,a=m?.(e)===!0,s=(e=>{if("date"===e.uiProps.fieldType){if(!0===e.uiProps.isDotDateFormat&&E(e.value??""))return(e.value??"").replace(/-/g,".");if(!0===e.uiProps.isMonthDateFormat&&E(e.value??"")){let[,t="",i=""]=(e.value??"").split("-");return`${t}월 ${i}일`}return(e=>{if(!E(e))return e;let[t,i,l]=e.split("-");return`${t}년 ${i}월 ${l}일`})(e.value??"")}if("money"===e.uiProps.fieldType)return(e=>{let t=(e=>{let t=e.replace(/[^0-9.-]/g,"");if(""===t||"-"===t||"."===t||"-."===t)return"";let i=t.startsWith("-")?"-":"",[l="",...n]=("-"===i?t.slice(1):t).split("."),r=l.replace(/-/g,""),o=n.join("").replace(/-/g,"");return""===o?`${i}${r}`:`${i}${r}.${o}`})(e);if(""===t)return"";let i=t.startsWith("-")?"-":"",[l="",n]=("-"===i?t.slice(1):t).split("."),r=l.replace(/\B(?=(\d{3})+(?!\d))/g,",");return void 0===n||""===n?`${i}${r}`:`${i}${r}.${n}`})(e.value??"");if("select"===e.uiProps.fieldType){let t=et(e),i=e.uiProps.options.find(e=>e.value===t);return i?.label??t}if("check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType)return r&&"radio"===e.uiProps.fieldType&&!0===e.uiProps.usePrintBorderAsMarkOnPrint?"":"true"===e.value?"✓":"";if("month-with-year"===e.uiProps.fieldType){if(!(e=>{if("string"!=typeof e)return!1;let t=e.trim();if(!/^\d{4}-\d{2}$/.test(t))return!1;let[i,l]=t.split("-"),n=Number(i),r=Number(l);return!!Number.isInteger(n)&&!!Number.isInteger(r)&&!(n<1)&&!(n>9999)&&!(r<1)&&!(r>12)})(e.value??""))return e.value??"";let[t="",i=""]=(e.value??"").split("-");return`${t}년 ${i}월`}if("multi-date"===e.uiProps.fieldType){let t=Array.from(new Set((e.value??"").split(/[\s,]+/).map(e=>e.trim()).filter(e=>e.length>0).filter(e=>E(e)))).sort((e,t)=>e.localeCompare(t)),i="";return t.map(e=>{let[t="",l="",n=""]=e.split("-"),r=`${l}/${n}`;return i===t?r:(i=t,`${t} ${r}`)}).join(", ")}return e.value??""})(e),u={style:Z(e,s),readOnly:o};if(r){var d;let t;if("image"===e.uiProps.fieldType){let t=e.value??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{style:u.style,$textAlign:ee(e),children:""!==t?(0,i.jsx)(z,{src:t,alt:""}):null},l),en(e,l,o)]})}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{style:(t=Z(d=e,s),"radio"===d.uiProps.fieldType&&r&&!0===d.uiProps.usePrintBorderAsMarkOnPrint?"true"!==d.value?t:{...t,border:$,borderRadius:"50%"}:"radio"!==d.uiProps.fieldType||!0!==d.uiProps.showPrintFieldBorders?t:{...t,border:$,borderRadius:"50%"}),$textAlign:(e=>{if("radio"===e.uiProps.fieldType)return"center";let t=B(e).textAlign;return"center"===t||"right"===t?t:"left"})(e),$isTextarea:"textarea"===e.uiProps.fieldType,$isTextareaMiddleAligned:"textarea"===e.uiProps.fieldType&&"middle"===B(e).verticalAlign,children:s},l),en(e,l,o)]})}switch(e.uiProps.fieldType){case"text":{let t=e.uiProps.placeholder?.text??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Text,{...u,value:e.value??"",placeholder:t,$autoFilled:a,onChange:t=>g?.(e,t.target.value)},l),en(e,l,o)]})}case"money":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Money,{...u,value:e.value??"",$autoFilled:a,onChange:t=>g?.(e,t)},l),en(e,l,o)]});case"date":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Date,{...u,value:e.value??"",$autoFilled:a,disableHolidaySelection:e.uiProps.disableHolidaySelection,displayOptions:!0===e.uiProps.isDotDateFormat?{format:"dot"}:!0===e.uiProps.isMonthDateFormat?{hideYear:!0}:void 0,onChange:t=>g?.(e,t)},l),en(e,l,o)]});case"select":if(0===e.uiProps.options.length)return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Text,{...u,value:e.value??"",$autoFilled:a,onChange:t=>g?.(e,t.target.value)},l),en(e,l,o)]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Select,{...u,value:et(e),$autoFilled:a,disabled:o,onChange:t=>g?.(e,t.target.value),children:e.uiProps.options.map(e=>(0,i.jsx)("option",{value:e.value,children:e.label},e.value))},l),en(e,l,o)]});case"check":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Check,{style:u.style,checked:"true"===e.value,disabled:o,onChange:t=>g?.(e,t.target.checked?"true":"false")},l),en(e,l,o)]});case"radio":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Radio,{style:u.style,checked:"true"===e.value,disabled:o,onChange:t=>g?.(e,t.target.checked?"true":"false")},l),en(e,l,o)]});case"textarea":{let t,n,r=X(e),s=e.uiProps.placeholder,d=s?.text??"",p=s?.style??{},c="string"==typeof p.color?p.color:void 0,_={...u.style,resize:"none"},h=(e.value??"")===""?{..._,...p}:_;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Textarea,{...u,style:h,ref:(n=K(t=X(e)),i=>{(n(i),null===i)?G.current.delete(t):(G.current.set(t,i),q(e,i))}),value:e.value??"",placeholder:d,$placeholderColor:c,$autoFilled:a,onInput:t=>{q(e,t.currentTarget),k(r)},onChange:t=>{g?.(e,t.target.value),q(e,t.currentTarget),k(r)}},l),en(e,l,o)]})}case"month-with-year":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.Date,{...u,value:e.value??"",valueType:"year-month",$autoFilled:a,onChange:t=>g?.(e,t)},l),en(e,l,o)]});case"multi-date":return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default.Input.MultiDate,{...u,value:e.value??"",$autoFilled:a,onChange:t=>g?.(e,t)},l),en(e,l,o)]});case"image":{let t=e.value??"";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(D,{style:u.style,$textAlign:ee(e),children:""!==t?(0,i.jsx)(z,{src:t,alt:""}):null},l),en(e,l,o)]})}default:return null}})(e,t)},`${e.page}-${e.fieldKey}`))}),(0,i.jsx)(w,{$clickable:void 0!==b,children:eo.map(({box:e,key:t},l)=>(0,i.jsx)(F,{type:"button",style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:e.borderColor??"#4f39f6"},onClick:()=>{b?.(l)},children:(0,i.jsx)(U,{children:l+1})},t))})]})})}let I=s.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-0"})`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: #fff;
`,N=s.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-1"})`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
`,M=s.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-2"})`
  pointer-events: ${({$interactive:e})=>e?"auto":"none"};
  position: absolute;
  inset: 0;
`,w=s.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-3"})`
  pointer-events: ${({$clickable:e})=>e?"auto":"none"};
  position: absolute;
  inset: 0;
`,F=s.default.button.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-4"})`
  cursor: pointer;

  position: absolute;

  overflow: visible;

  margin: 0;
  padding: 0;
  border: 2px solid #4f39f6;
  border-radius: 4px;

  appearance: none;
  background: rgb(219 212 251 / 40%);
`,U=s.default.span.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-5"})`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(120%, -50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${30}px;
  height: ${30}px;
  margin-right: ${8}px;
  border-radius: 50%;

  font-size: ${15}px;
  font-weight: 700;
  color: #fff;

  background: #4f39f6;
`,j=s.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-6"})`
  overflow: hidden;
  display: flex;
  align-items: ${({$isTextarea:e,$isTextareaMiddleAligned:t})=>!0!==e||t?"center":"flex-start"};
  justify-content: ${({$textAlign:e})=>"center"===e?"center":"right"===e?"flex-end":"flex-start"};

  color: black;
  text-align: ${({$textAlign:e})=>e};
  white-space: pre-wrap;
`,D=s.default.div.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-7"})`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: ${({$textAlign:e})=>"center"===e?"center":"right"===e?"flex-end":"flex-start"};

  box-sizing: border-box;
  width: 100%;
  height: 100%;
`,z=s.default.img.withConfig({componentId:"zh_mobile_web__sc-a66a02e7-8"})`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;var V=e.i(81911),K=e.i(43174),k=e.i(43172),W=e.i(80629);let H=e=>{let t=Math.max(1,...e.flatMap(e=>Number.isFinite(e.sortLeft)&&Number.isFinite(e.sortTop)?[Math.abs(e.sortLeft),Math.abs(e.sortTop)]:[]));return[...e.map(e=>({item:e,position:{left:Number.isFinite(e.sortLeft)?e.sortLeft/t:1/0,top:Number.isFinite(e.sortTop)?e.sortTop/t:1/0}}))].sort((e,t)=>e.position.top-t.position.top).reduce((e,t)=>{let i=e.at(-1);if(void 0===i)return e.push([t]),e;let l=i[0]?.position.top;return void 0===l||Math.abs(t.position.top-l)>.01?e.push([t]):i.push(t),e},[]).flatMap(e=>e.sort((e,t)=>e.position.left!==t.position.left?e.position.left-t.position.left:e.item.sortKey.localeCompare(t.item.sortKey)).map(({item:e})=>e))},G=(0,r.observer)(function(){let e=(0,o.useRouter)(),t=(0,o.useSearchParams)(),[r,s]=(0,a.useState)("manual"),[p,f]=(0,a.useState)(null),[c,_]=(0,a.useState)(!1),h=t.get("clientId"),E=t.get("serviceWorkerId"),m=(0,d.isServiceWorkerDocumentFlow)(E),g=m?K.default.serviceWorker.documentManagement:K.default.client.documentManagement,T=(0,W.getServiceType)(t.get("serviceType")),x=t.get("contractId"),b=t.get("templateId"),C=t.get("documentId"),y=t.get("documentStatus"),A=g.updateNeededDocumentCards.find(e=>e.templateId===b),R=g.templates.find(e=>e.id===b),O=A?.name??R?.name??null,S=m&&"LINKED_COMPLETED"===y&&(0,k.isSalaryProvisionMonthlyScheduleDocument)(O),$=`${A?.name??R?.name??"서류"} 비교`,v=(R?.templateImagePath??[]).filter(e=>""!==e.trim()),L=K.default.serviceWorker.documentManagement.monthlyScheduleComparisonResult,I=S?L?.imageUrl??null:g.capturedPhotoDataUrl,N=g.comparisonRenderableFields,M=g.comparisonIsLoading,w=g.comparisonHasError,F=g.ocrAnalyzeResult,U=S?null!==L:null!==F,j=g.comparisonIsReady&&U&&!w,D=w||g.comparisonIsReady&&!U,z=w||S?"비교 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.":"비교할 분석 결과가 없습니다. 다시 촬영해 주세요.",G=v.length>0?v:A?.thumbnailImagePath!==null&&A?.thumbnailImagePath!==void 0?[A.thumbnailImagePath]:[];(0,a.useEffect)(()=>{g.requestComparisonFieldData({templateId:b,documentId:C}),S&&K.default.serviceWorker.documentManagement.requestMonthlyScheduleComparison(C)},[C,g,S,b]);let en=(()=>{if(S)return H(L?.unmatchedFieldBoundingBoxes.flatMap(e=>{let t=e.boundingBoxes.flatMap(e=>{let t=e.normalizedVertices??[];return t.length>0?t:e.vertices??[]});if(0===t.length)return[{day:e.day,manualValue:e.ocrValue,digitalValue:e.actualValue,reasons:e.reasons,sortKey:`${e.day}:${e.fieldKey}`,sortLeft:1/0,sortTop:1/0}];let i=t.map(e=>e.x),l=t.map(e=>e.y),n=Math.min(...i),r=Math.max(...i),o=Math.min(...l),a=Math.max(...l);if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(o)||!Number.isFinite(a)||r<=n||a<=o)return[{day:e.day,manualValue:e.ocrValue,digitalValue:e.actualValue,reasons:e.reasons,sortKey:`${e.day}:${e.fieldKey}`,sortLeft:1/0,sortTop:1/0}];let s=Math.max(r,a);return[{left:s<=1?`${100*Math.max(n,0)}%`:`${Math.max(n,0)}px`,top:s<=1?`${100*Math.max(o,0)}%`:`${Math.max(o,0)}px`,width:s<=1?`${(r-n)*100}%`:`${r-n}px`,height:s<=1?`${(a-o)*100}%`:`${a-o}px`,borderColor:"#2563eb",day:e.day,manualValue:e.ocrValue,digitalValue:e.actualValue,reasons:e.reasons,sortKey:`${e.day}:${e.fieldKey}`,sortLeft:n,sortTop:o}]})??[]);let e=e=>e.replace(/\s+/g," ").trim(),t=(e,t,i)=>!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(i)||t<1||t>12||i<1||i>31?null:{year:e,month:t,day:i},i=i=>{let l,n,r,o,a=(n=(l=e(i.ocrValue)).replace(/\s+/g,""),/^\d{4}-\d{1,2}-\d{1,2}$/.test(l)?"Y-M-D":/^\d{4}\/\d{1,2}\/\d{1,2}$/.test(l)?"Y/M/D":/^\d{4}\.\d{1,2}\.\d{1,2}$/.test(l)?"Y.M.D":/^\d{8}$/.test(n)?"YMD":/^\d{2,4}년\d{1,2}월\d{1,2}일$/.test(n)?"KOR_YMD":/^\d{1,2}월\d{1,2}일$/.test(n)?"KOR_MD":null);if(null===a)return i.currentValue;let s=(i=>{let l=e(i),n=l.replace(/\s+/g,""),r=l.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(null!==r||null!==(r=l.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/))||null!==(r=l.match(/^(\d{4})\.(\d{1,2})\.(\d{1,2})$/))||null!==(r=n.match(/^(\d{4})(\d{2})(\d{2})$/)))return t(Number(r[1]),Number(r[2]),Number(r[3]));if(null!==(r=n.match(/^(\d{2,4})년(\d{1,2})월(\d{1,2})일$/))){var o;return t((o=Number(r[1]))>=100?o:o+2e3,Number(r[2]),Number(r[3]))}return null})(i.currentValue);return null===s?i.currentValue:(r=String(s.month).padStart(2,"0"),o=String(s.day).padStart(2,"0"),"Y-M-D"===a?`${s.year}-${r}-${o}`:"Y/M/D"===a?`${s.year}/${r}/${o}`:"Y.M.D"===a?`${s.year}.${r}.${o}`:"YMD"===a?`${s.year}${r}${o}`:"KOR_YMD"===a?`${s.year}년 ${s.month}월 ${s.day}일`:`${s.month}월 ${s.day}일`)},l=new Map(N.map(e=>[`${e.page}:${e.fieldKey}`,e.value??""])),n=new Set(N.filter(e=>"check"===e.uiProps.fieldType||"radio"===e.uiProps.fieldType).map(e=>`${e.page}:${e.fieldKey}`)),r=t=>"true"===e(t).toLowerCase(),o=[];for(let t of F??[]){if(1!==t.page)continue;let a=`${t.page}:${t.fieldKey}`,s=l.get(a);if(void 0===s)continue;if(n.has(a)){let e=!0===t.checked||r(t.value),i=r(s);e!==i&&o.push({manualValue:e?"체크":"미체크",digitalValue:i?"체크":"미체크",sortKey:a,sortLeft:1/0,sortTop:1/0});continue}let u=i({currentValue:s,ocrValue:t.value}),d=e(u);if(e(t.value)===d)continue;let p=(t.boundingBoxes??[]).flatMap(e=>e.vertices).filter(e=>Number.isFinite(e.x)&&Number.isFinite(e.y));if(0===p.length){o.push({manualValue:t.value,digitalValue:u,sortKey:`${t.page}:${t.fieldKey}`,sortLeft:1/0,sortTop:1/0});continue}let f=p.map(e=>e.x),c=p.map(e=>e.y),_=Math.min(...f),h=Math.max(...f),E=Math.min(...c),m=Math.max(...c);if(!Number.isFinite(_)||!Number.isFinite(h)||!Number.isFinite(E)||!Number.isFinite(m)||h<=_||m<=E){o.push({manualValue:t.value,digitalValue:u,sortKey:`${t.page}:${t.fieldKey}`,sortLeft:1/0,sortTop:1/0});continue}if(1>=Math.max(h,m)){let e=Math.min(100*Math.max(_,0),100),i=Math.min(100*Math.max(E,0),100),l=Math.min((h-_)*100,100),n=Math.min((m-E)*100,100);if(l<=0||n<=0){o.push({manualValue:t.value,digitalValue:u,sortKey:`${t.page}:${t.fieldKey}`,sortLeft:1/0,sortTop:1/0});continue}o.push({left:`${e}%`,top:`${i}%`,width:`${l}%`,height:`${n}%`,borderColor:"#2563eb",manualValue:t.value,digitalValue:u,sortKey:`${t.page}:${t.fieldKey}`,sortLeft:_,sortTop:E});continue}o.push({left:`${Math.max(_,0)}px`,top:`${Math.max(E,0)}px`,width:`${h-_}px`,height:`${m-E}px`,borderColor:"#2563eb",manualValue:t.value,digitalValue:u,sortKey:`${t.page}:${t.fieldKey}`,sortLeft:_,sortTop:E})}return H(o)})(),eC=en.filter(e=>void 0!==e.left&&void 0!==e.top&&void 0!==e.width&&void 0!==e.height),eR=eC.map(e=>({left:e.left??"0",top:e.top??"0",width:e.width??"0",height:e.height??"0",borderColor:e.borderColor})),eO=en.findIndex(e=>!eC.includes(e)),eS=en.length-eC.length,e$=D?"[수기 원본] 정보 불일치 확인 불가":j?`[수기 원본] 정보 불일치 ${en.length}건`:"[수기 원본] 정보 불일치 확인 중",ev="manual"===r&&null!==p&&p>=0&&p<en.length,eL=ev&&null!==p?en[p]??null:null,eP=null===eL||""===eL.manualValue.trim()?"-":eL.manualValue,eI=null===eL||""===eL.digitalValue.trim()?"-":eL.digitalValue,eN=async()=>{if(!c&&j&&null!==C&&""!==C.trim()){_(!0);try{await g.saveDocumentFields({documentId:C,fields:[]}),e.push((0,d.buildDocumentFlowHref)({clientId:h,serviceType:T,monthlyScheduleSaved:S,page:"save-success",serviceWorkerId:E}))}catch(e){K.default.ui.layout.toast.error((0,u.getHttpErrorMessage)(e)??"저장에 실패했습니다. 잠시 후 다시 시도해 주세요.")}finally{_(!1)}}};return(0,i.jsxs)(Y,{children:[(0,i.jsx)(B,{children:(0,i.jsx)(V.default,{title:$,subtitle:e$,onBack:()=>e.push((0,d.buildDocumentFlowDetailHref)({clientId:h,serviceType:T,serviceWorkerId:E}))})}),(0,i.jsxs)(X,{role:"tablist","aria-label":"서류 비교 탭",children:[(0,i.jsx)(el,{type:"button",role:"tab","aria-selected":"manual"===r,$active:"manual"===r,onClick:()=>{f(null),s("manual")},children:"수기 원본"}),S?null:(0,i.jsx)(el,{type:"button",role:"tab","aria-selected":"digital"===r,$active:"digital"===r,onClick:()=>{f(null),s("digital")},children:"전산 서류"})]}),(0,i.jsx)(q,{children:S||"manual"===r?(0,i.jsxs)(i.Fragment,{children:[null===I?(0,i.jsx)(J,{children:"수기 원본 이미지를 찾을 수 없습니다."}):(0,i.jsx)(ee,{children:(0,i.jsx)(et,{children:(0,i.jsx)(P,{imagePath:I,displayValueOnly:!0,readOnly:!0,showAssistUiComponents:!1,overlayBoxes:eR,onOverlayBoxClick:e=>{let t=eC[e],i=void 0===t?-1:en.indexOf(t);i>=0&&f(i)}})})}),eO>=0?(0,i.jsxs)(Q,{type:"button",onClick:()=>{f(eO)},children:["위치 표시가 없는 불일치 ",eS,"건 보기"]}):null]}):!0===M?(0,i.jsx)(J,{children:"전산 서류를 불러오는 중입니다."}):0===G.length?(0,i.jsx)(J,{children:"서류 배경 이미지를 찾을 수 없습니다."}):(0,i.jsx)(ee,{children:G.map((e,t)=>(0,i.jsx)(et,{children:(0,i.jsx)(P,{imagePath:e,fields:N.filter(e=>e.page===t+1),displayValueOnly:!0,readOnly:!0,showAssistUiComponents:!1})},`digital-page-${t+1}`))})}),D?(0,i.jsx)(Z,{role:"alert",children:z}):null,(0,i.jsx)(ei,{children:S?(0,i.jsxs)(ea,{type:"button",disabled:c||!j,onClick:()=>{eN()},children:[(0,i.jsx)(n.default,{sx:{fontSize:16}}),c?"저장중":"최종확인 및 저장"]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(er,{type:"button",onClick:()=>e.push((0,d.buildDocumentFlowHref)({clientId:h,serviceType:T,contractId:x,templateId:b??"",documentId:C,documentStatus:y,page:"capture",serviceWorkerId:E})),children:"다시 촬영하기"}),"manual"===r?(0,i.jsxs)(eo,{type:"button",onClick:()=>{f(null),s("digital")},children:["전산 서류 보기",(0,i.jsx)(l.default,{sx:{fontSize:16}})]}):(0,i.jsxs)(ea,{type:"button",disabled:c||!j,onClick:()=>{eN()},children:[(0,i.jsx)(n.default,{sx:{fontSize:16}}),c?"저장중":"최종확인 및 저장"]})]})}),ev?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(es,{type:"button","aria-label":"불일치 패널 닫기",onClick:()=>{f(null)}}),(0,i.jsxs)(eu,{children:[(0,i.jsxs)(ed,{children:[(0,i.jsx)(ep,{children:(0,i.jsx)(ef,{})}),(0,i.jsxs)(ec,{children:[(0,i.jsx)(e_,{children:S?`${eL?.day??"-"}일 제공 일정 비교`:"정보 불일치 항목 확인"}),S&&eL?.reasons!==void 0&&eL.reasons.length>0?(0,i.jsx)(eh,{children:eL.reasons.join("\n")}):null,(0,i.jsxs)(eE,{children:[(0,i.jsxs)(em,{children:[(0,i.jsx)(eg,{$variant:"manual",children:S?"수기 작성 서류":"수기서류 인식값"}),(0,i.jsx)(eT,{children:eP})]}),(0,i.jsxs)(em,{children:[(0,i.jsx)(eg,{$variant:"digital",children:S?"실제 제공 내역":"전자 바우처 기준값"}),(0,i.jsx)(eT,{children:eI})]})]})]})]}),(0,i.jsx)(ex,{children:(0,i.jsxs)(eb,{children:[(0,i.jsx)(ey,{type:"button",onClick:()=>{f(null)},children:"닫기"}),(0,i.jsxs)(eA,{type:"button",onClick:()=>{0!==en.length&&f(e=>((e??0)+1)%en.length)},children:["다음 리스트 보기",(0,i.jsx)(l.default,{sx:{fontSize:16}})]})]})})]})]}):null]})}),Y=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-0"})`
  position: relative;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,B=s.default.header.withConfig({componentId:"zh_mobile_web__sc-8c134b64-1"})`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`,X=s.default.section.withConfig({componentId:"zh_mobile_web__sc-8c134b64-2"})`
  position: relative;

  display: flex;

  width: 100%;
  height: 48px;
  border-bottom: 1px solid #d1d6de;

  background: #fff;
`,q=s.default.main.withConfig({componentId:"zh_mobile_web__sc-8c134b64-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  padding: 16px 24px;
`,J=s.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-4"})`
  margin: auto 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #6b7280;
  text-align: center;
`,Q=s.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-5"})`
  cursor: pointer;

  align-self: center;

  margin-top: 16px;
  padding: 0;
  border: 0;
  border-bottom: 1px solid currentcolor;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #4f39f6;

  appearance: none;
  background: transparent;
`,Z=s.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-6"})`
  padding: 16px 24px 0;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #dc2626;
  text-align: center;
`,ee=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-7"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,et=s.default.section.withConfig({componentId:"zh_mobile_web__sc-8c134b64-8"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #d9d9d9;
`,ei=s.default.footer.withConfig({componentId:"zh_mobile_web__sc-8c134b64-9"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;

  margin-top: auto;
  padding: 24px 24px 48px;
`,el=s.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-10"})`
  cursor: pointer;

  position: relative;
  bottom: -1px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 0 18px;
  padding: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 3px solid ${({$active:e})=>!0===e?"#4f39f6":"transparent"};
  border-left: 0;

  font-size: 16px;
  font-weight: ${({$active:e})=>!0===e?700:500};
  color: ${({$active:e})=>!0===e?"#4f39f6":"#4A4F54"};

  background: transparent;
`,en=s.css`
  display: flex;
  flex: 1 0 0;
  gap: 8px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,er=(0,s.default)(f.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-8c134b64-11"})`
  ${en}
`,eo=(0,s.default)(f.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-12"})`
  ${en}
`,ea=(0,s.default)(f.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-13"})`
  ${en}
`,es=s.default.button.withConfig({componentId:"zh_mobile_web__sc-8c134b64-14"})`
  cursor: pointer;

  position: absolute;
  z-index: 20;
  inset: 0;

  border: 0;

  background: rgb(0 0 0 / 38%);
`,eu=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-15"})`
  position: absolute;
  z-index: 30;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  border-radius: 16px 16px 0 0;

  background: #fff;
`,ed=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-16"})`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 10px 24px;
`,ep=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-17"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4px;
`,ef=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-18"})`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: #d1d6de;
`,ec=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-19"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,e_=s.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-20"})`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #111827;
`,eh=s.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-21"})`
  margin: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #4a4f54;
`,eE=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-22"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,em=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-23"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,eg=s.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-24"})`
  margin: 0;

  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  color: ${({$variant:e})=>"manual"===e?"#e8660f":"#5942f2"};
`,eT=s.default.p.withConfig({componentId:"zh_mobile_web__sc-8c134b64-25"})`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #111827;
`,ex=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-26"})`
  padding: 24px 24px 48px;
  background: #fff;
`,eb=s.default.div.withConfig({componentId:"zh_mobile_web__sc-8c134b64-27"})`
  display: flex;
  gap: 12px;
`,eC=s.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,ey=(0,s.default)(f.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-8c134b64-28"})`
  ${eC}
`,eA=(0,s.default)(f.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-8c134b64-29"})`
  ${eC}
`;e.s(["default",0,G],25431)}]);