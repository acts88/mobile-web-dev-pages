(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:n,serviceWorkerId:i}){let l=new URLSearchParams({serviceType:n});return t(i)?(l.set("serviceWorkerId",i),`/service-worker/detail/document-management?${l.toString()}`):(null!==e&&l.set("clientId",e),`/client/detail/document-management?${l.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:n,documentId:i,documentStatus:l,monthlyScheduleClientContractId:o,monthlyScheduleSaved:c,monthlyScheduleYearMonth:r,page:s,serviceType:a,serviceWorkerId:u,templateId:d}){let h=t(u),m=new URLSearchParams({serviceType:a});return h?m.set("serviceWorkerId",u):null!==e&&m.set("clientId",e),null!=n&&m.set("contractId",n),null!=i&&m.set("documentId",i),null!=l&&m.set("documentStatus",l),null!=o&&m.set("monthlyScheduleClientContractId",o),!0===c&&m.set("monthlyScheduleSaved","true"),null!=r&&m.set("monthlyScheduleYearMonth",r),null!=d&&m.set("templateId",d),`${h?"/service-worker/document-management":"/client/document-management"}/${s}?${m.toString()}`},"isServiceWorkerDocumentFlow",0,t])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:c}){let r=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=c&&r.set("documentStatus",c),`${n}/capture-guide?${r.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:c}){let r=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=c&&r.set("documentStatus",c),`${n}/capture?${r.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:c}){let r=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&r.set("clientId",e),null!==i&&r.set("contractId",i),null!==o&&r.set("documentId",o),null!=c&&r.set("documentStatus",c),`${n}/input-method?${r.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t,needsPcReview:i=!1}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),i&&l.set("needsPcReview","true"),`${n}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,u=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
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
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,h=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:l,leftAction:m,onBack:f,onForward:g,subtitle:p}){let w=null!=p&&""!==p;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(r,{children:f?(0,t.jsx)(u,{onClick:f,children:(0,t.jsx)(n.default,{})}):null}),void 0===f&&void 0!==m?(0,t.jsx)(s,{children:m}):null,(0,t.jsx)(d,{children:e}),(0,t.jsxs)(a,{children:[l,g?(0,t.jsx)(u,{onClick:g,children:(0,t.jsx)(i.default,{})}):null]})]}),w?(0,t.jsx)(h,{children:p}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:i,style:o}){return(0,n.jsx)(l,{size:t,color:i,$src:e,style:o})}}let{PUBLIC_PATH:c}=t.default.env,r={Docs:o(`${c}/icon/docs.svg`),FrameSource:o(`${c}/icon/frame-source.svg`),EvShadow:o(`${c}/icon/ev-shadow.svg`),DocumentSearch:o(`${c}/icon/document-search.svg`),WandShine:o(`${c}/icon/wand-shine.svg`)};e.s(["default",0,r],98273)},24655,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,i])}]);