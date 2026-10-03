(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,i)=>{t.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let i="/client/document-management",l="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,l,"buildDetailHref",0,function(e,t,i=l){let n=new URLSearchParams({serviceType:t});return null!==e&&n.set("clientId",e),`/client/detail/${i}?${n.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:n,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:t,templateId:n});return null!==e&&a.set("clientId",e),null!==l&&a.set("contractId",l),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${i}/capture-guide?${a.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:n,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:t,templateId:n});return null!==e&&a.set("clientId",e),null!==l&&a.set("contractId",l),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${i}/capture?${a.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:l,templateId:n,documentId:d,documentStatus:o}){let a=new URLSearchParams({serviceType:t,templateId:n});return null!==e&&a.set("clientId",e),null!==l&&a.set("contractId",l),null!==d&&a.set("documentId",d),null!=o&&a.set("documentStatus",o),`${i}/input-method?${a.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`${i}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let l=(0,t.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,l])},88552,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let l=(0,t.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,l])},81911,e=>{"use strict";var t=e.i(9735),i=e.i(21839),l=e.i(88552),n=e.i(38803);let d=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,o=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,a=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,r=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,c=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,s=n.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
  cursor: pointer;

  display: inline-flex;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;

  color: inherit;

  appearance: none;
  background: transparent;
`,u=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,f=n.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:n,leftAction:p,onBack:h,onForward:g,subtitle:m}){let x=null!=m&&""!==m;return(0,t.jsxs)(d,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(a,{children:h?(0,t.jsx)(s,{onClick:h,children:(0,t.jsx)(i.default,{})}):null}),void 0===h&&void 0!==p?(0,t.jsx)(r,{children:p}):null,(0,t.jsx)(u,{children:e}),(0,t.jsxs)(c,{children:[n,g?(0,t.jsx)(s,{onClick:g,children:(0,t.jsx)(l.default,{})}):null]})]}),x?(0,t.jsx)(f,{children:m}):null]})}])},24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let l=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,l])},59074,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var l=e.i(46907),n=e.i(33261),d=e.i(7744),o=e.i(38803),a=e.i(17106),r=e.i(81911),c=e.i(62659),s=e.i(43174),u=e.i(80629);function f(e,t){if(e.includes("\n"))return!0;let i=Math.max(t-48-32,120);return function(e){let t=0;for(let i of e)t+=i.charCodeAt(0)>127?14:8;return t}(e)>i}function p(e){if(null===e)return;let t=Number.parseFloat(window.getComputedStyle(e).lineHeight||""),i=Number.isFinite(t)?t:24;e.style.height="auto",e.style.height=`${e.scrollHeight+i}px`}function h(e){let t=e.value.trim().toLowerCase();return"true"===t||"false"!==t&&!0===e.checked}let g=(0,l.observer)(function(){let e=s.default.client.documentManagement,l=s.default.ui.layout.toast,o=(0,n.useRouter)(),g=(0,n.useSearchParams)(),$=g.get("clientId"),H=(0,u.getServiceType)(g.get("serviceType")),U=g.get("contractId"),B=g.get("templateId"),V=g.get("documentId");(0,d.useEffect)(()=>{null===B||""===B.trim()?s.default.data.docs.templateFieldList.reset():s.default.data.docs.templateFieldList.setQuery({templateId:B})},[B]);let X=(0,d.useMemo)(()=>{var t;return null===(t=e.ocrAnalyzeResult)||0===t.length?[]:t.map((e,t)=>({id:`${e.page}:${e.fieldKey}:${t}`,page:e.page,fieldKey:e.fieldKey,checked:e.checked,originalValue:e.value,value:e.value}))},[e.ocrAnalyzeResult]),W=s.default.data.docs.templateFieldList.data,Y=(0,d.useMemo)(()=>{let e=new Map,t=new Map;for(let i of W??[]){let l=i.uiProps.label,n=l?.field.name?.trim();if(void 0===n||0===n.length)continue;let d=l?.group?.name?.trim(),o=void 0!==d&&d.length>0?d:"기타",a={groupName:o,groupSortOrder:l?.group?.sortOrder??Number.MAX_SAFE_INTEGER,fieldName:n,fieldSortOrder:l?.field.sortOrder??Number.MAX_SAFE_INTEGER,fieldType:i.uiProps.fieldType,radioGroupKey:"radio"===i.uiProps.fieldType?i.uiProps.groupKey:void 0},r=`${i.page}:${i.fieldKey}`;e.has(r)||e.set(r,a),t.has(i.fieldKey)||t.set(i.fieldKey,a)}return{byFieldKey:t,byPageAndKey:e}},[W]),[Q,q]=(0,d.useState)({}),[J,Z]=(0,d.useState)(!1),[ee,et]=(0,d.useState)(!1),ei=(0,d.useRef)({}),[el,en]=(0,d.useState)(window.innerWidth);(0,d.useEffect)(()=>{let e=()=>{en(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let ed=(0,d.useMemo)(()=>X.map(e=>{let t=(Y.byPageAndKey.get(`${e.page}:${e.fieldKey}`)??Y.byFieldKey.get(e.fieldKey))?.fieldType,i=!0===e.checked&&("check"===t||"radio"===t)?"true":e.value;return{...e,value:Q[e.id]??i}}),[Q,X,Y]),eo=(0,d.useMemo)(()=>{let e=new Map;for(let t of ed){let i=`${t.page}:${t.fieldKey}`,l=Y.byPageAndKey.get(i)??Y.byFieldKey.get(t.fieldKey),n=l?.groupName??"기타",d=l?.groupSortOrder??Number.MAX_SAFE_INTEGER,o=l?.fieldName??t.fieldKey,a=l?.fieldSortOrder??Number.MAX_SAFE_INTEGER,r=l?.fieldType??"text",c=l?.radioGroupKey;e.has(n)||e.set(n,{groupName:n,groupSortOrder:d,items:[]}),e.get(n)?.items.push({...t,fieldName:o,fieldSortOrder:a,fieldType:r,radioGroupKey:c})}let t=[...e.values()];for(let e of t)e.items.sort((e,t)=>e.fieldSortOrder!==t.fieldSortOrder?e.fieldSortOrder-t.fieldSortOrder:e.page!==t.page?e.page-t.page:e.fieldKey.localeCompare(t.fieldKey));return t.sort((e,t)=>e.groupSortOrder!==t.groupSortOrder?e.groupSortOrder-t.groupSortOrder:e.groupName.localeCompare(t.groupName)),t},[ed,Y]),ea=(0,d.useMemo)(()=>eo.some(e=>"기타"===e.groupName),[eo]),er=(0,d.useMemo)(()=>eo.filter(e=>"기타"!==e.groupName),[eo]),ec=(e,t)=>{"check"===e.fieldType?q(i=>({...i,[e.id]:t?"true":"false"})):q(i=>{let l={...i,[e.id]:t?"true":"false"};if(!t||void 0===e.radioGroupKey)return l;for(let t of eo)for(let i of t.items)i.id!==e.id&&"radio"===i.fieldType&&i.radioGroupKey===e.radioGroupKey&&(l[i.id]="false");return l})};(0,d.useEffect)(()=>{ea&&l.info("미입력 항목이 있습니다. 데스크탑 웹에서 확인해주세요.")},[ea,l]),(0,d.useEffect)(()=>{for(let e of ed)f(e.value,el)&&p(ei.current[e.id]??null)},[ed,el]);let es=()=>{o.push((0,u.buildDocumentCaptureGuideHref)({clientId:$,serviceType:H,contractId:U,templateId:B??"",documentId:V}))},eu=async()=>{if(null!==V&&!J&&0!==ed.length){Z(!0);try{await e.saveDocumentFields({documentId:V,fields:er.flatMap(e=>e.items.map(e=>({page:e.page,fieldKey:e.fieldKey,value:e.value})))}),o.push((0,u.buildDocumentSaveSuccessHref)({clientId:$,serviceType:H}))}catch(e){l.error((0,a.getHttpErrorMessage)(e)??"저장에 실패했습니다. 잠시 후 다시 시도해 주세요.")}finally{Z(!1)}}};return(0,t.jsxs)(m,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(r.default,{title:"분석 결과 확인하기",subtitle:"잘못된 정보는 아래에서 바로 수정할 수 있습니다.",onBack:()=>{if(0===ed.length){e.resetOcrAnalyze(),es();return}et(!0)}})}),(0,t.jsx)(_,{}),(0,t.jsx)(b,{children:0===ed.length?(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:"분석 결과"}),(0,t.jsx)(I,{children:"분석된 필드가 없습니다."})]}):er.map(e=>(0,t.jsxs)(w,{children:[(0,t.jsx)(y,{children:e.groupName}),(0,t.jsx)(v,{children:e.items.map(e=>"check"===e.fieldType||"radio"===e.fieldType?(0,t.jsx)(z,{children:(0,t.jsxs)(k,{children:["check"===e.fieldType?(0,t.jsx)(c.default.Input.Check,{checked:h(e),onChange:t=>{ec(e,t.target.checked)}}):(0,t.jsx)(c.default.Input.Radio,{checked:h(e),name:e.radioGroupKey,onChange:t=>{ec(e,t.target.checked)}}),(0,t.jsx)(A,{children:e.fieldName})]})},e.id):(0,t.jsxs)(C,{children:[(0,t.jsxs)(j,{children:[e.fieldName,":"]}),f(e.value,el)?(0,t.jsx)(T,{ref:t=>{ei.current[e.id]=t,p(t)},value:e.value,$autoFilled:e.value===e.originalValue,onInput:e=>{p(e.currentTarget)},onChange:t=>{let i=t.target.value;q(t=>({...t,[e.id]:i}))}}):(0,t.jsx)(S,{value:e.value,$autoFilled:e.value===e.originalValue,onChange:t=>{let i=t.target.value;q(t=>({...t,[e.id]:i}))}})]},e.id))})]},e.groupName))}),(0,t.jsxs)(K,{children:[(0,t.jsx)(N,{type:"button",onClick:()=>{o.push((0,u.buildDocumentCaptureHref)({clientId:$,serviceType:H,contractId:U,templateId:B??"",documentId:V}))},children:"다시 촬영하기"}),(0,t.jsxs)(O,{type:"button",disabled:null===V||J||0===ed.length,onClick:()=>{eu()},children:[(0,t.jsx)(i.default,{sx:{fontSize:18}}),(0,t.jsx)("span",{children:"최종확인 및 저장"})]})]}),ee?(0,t.jsx)(M,{role:"presentation",children:(0,t.jsxs)(E,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(P,{children:[(0,t.jsx)(L,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(R,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(F,{children:[(0,t.jsx)(G,{type:"button",onClick:()=>{et(!1)},children:"계속하기"}),(0,t.jsx)(D,{type:"button",onClick:()=>{et(!1),e.resetOcrAnalyze(),es()},children:"중단하기"})]})]})}):null]})}),m=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,x=o.default.header.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,_=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,b=o.default.main.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-3"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;
`,w=o.default.section.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-4"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:not(:first-of-type) {
    margin-top: 12px;
  }
`,y=o.default.h2.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-5"})`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
`,I=o.default.p.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-6"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
`,C=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-8"})`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  align-items: center;
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-9"})`
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  align-items: center;
`,j=o.default.label.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-10"})`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  color: #6b7280;
  white-space: nowrap;
`,S=(0,o.default)(c.default.Input.Text).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-11"})`
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  align-items: center;

  width: fit-content;
  min-width: 120px;
  max-width: min(72vw, 360px);
  height: 56px;
  padding: 14px 16px;
`,T=(0,o.default)(c.default.Input.Textarea).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-12"})`
  resize: none;

  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  align-items: center;

  width: fit-content;
  min-width: 120px;
  max-width: min(72vw, 360px);
  padding: 14px 16px;

  line-height: 24px;
`,k=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-13"})`
  display: flex;
  flex: 0 0 auto;
  gap: 4px;
  align-items: center;

  min-height: 32px;
  padding: 8px 0;
`,A=o.default.span.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-14"})`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #6b7280;
`,K=o.default.footer.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-15"})`
  display: flex;
  gap: 12px;
  padding: 24px 24px 48px;
`,$=o.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px;
`,N=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-16"})`
  ${$}
`,O=(0,o.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-17"})`
  ${$}
`,M=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-18"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,E=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-19"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,P=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-20"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,L=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-21"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,R=o.default.p.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-22"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,F=o.default.div.withConfig({componentId:"zh_mobile_web__sc-99a92dcd-23"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,H=o.css`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  height: 56px;
  padding: 18px 16px;
  border-radius: 4px;

  font-size: 16px;
  line-height: 20px;
  text-align: center;
`,G=(0,o.default)(c.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-24"})`
  ${H}
`,D=(0,o.default)(c.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-99a92dcd-25"})`
  ${H}
`;e.s(["default",0,g])}]);