(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:a,documentStatus:c}){let d=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==a&&d.set("documentId",a),null!=c&&d.set("documentStatus",c),`${n}/capture-guide?${d.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:a,documentStatus:c}){let d=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==a&&d.set("documentId",a),null!=c&&d.set("documentStatus",c),`${n}/capture?${d.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:a,documentStatus:c}){let d=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&d.set("clientId",e),null!==i&&d.set("contractId",i),null!==a&&d.set("documentId",a),null!=c&&d.set("documentStatus",c),`${n}/input-method?${d.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t,needsPcReview:i=!1}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),i&&l.set("needsPcReview","true"),`${n}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,s=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
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
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
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
`;e.s(["default",0,function({title:e,titleAction:l,leftAction:f,onBack:m,onForward:p,subtitle:_}){let b=null!=_&&""!==_;return(0,t.jsxs)(a,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{children:m?(0,t.jsx)(s,{onClick:m,children:(0,t.jsx)(n.default,{})}):null}),void 0===m&&void 0!==f?(0,t.jsx)(o,{children:f}):null,(0,t.jsx)(u,{children:e}),(0,t.jsxs)(r,{children:[l,p?(0,t.jsx)(s,{onClick:p,children:(0,t.jsx)(i.default,{})}):null]})]}),b?(0,t.jsx)(h,{children:_}):null]})}])},40621,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),i=e.i(33261),l=e.i(7744),a=e.i(43174),c=e.i(38803),d=e.i(81911),o=e.i(62659),r=e.i(7242),s=e.i(80629);let u=(0,n.observer)(function({client:e,serviceType:n,activePagePath:l,children:a}){let c=(0,i.useRouter)(),u=r.default[n];return(0,t.jsxs)(m,{children:[(0,t.jsx)(d.default,{title:"이용자 정보",onBack:()=>c.push((0,s.buildListHref)(n))}),null===e?(0,t.jsx)(p,{children:(0,t.jsx)(b,{children:"이용자를 찾을 수 없습니다."})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p,{children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(b,{children:e.name}),(0,t.jsxs)(g,{children:[null!==e.grade?(0,t.jsxs)(x,{children:[e.grade,"등급"]}):null,(0,t.jsx)(x,{children:`일상돌봄 ${u.label}관리 서비스 - ${u.code}`})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(v,{children:"계약 기간"}),(0,t.jsx)(C,{children:h(e.contractStartDate,e.contractEndDate)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(v,{children:"서비스 기간"}),(0,t.jsx)(C,{children:h(e.serviceStartDate,e.serviceEndDate)})]})]})]}),(0,t.jsx)(j,{}),(0,t.jsxs)(o.default.Tabbed.Tabs,{children:[(0,t.jsx)(o.default.Tabbed.Tab,{$selected:l===s.BASIC_INFO_PATH,onClick:()=>c.push((0,s.buildDetailHref)(e.id,n,s.BASIC_INFO_PATH)),disabled:!0,children:"기본 정보"}),(0,t.jsx)(o.default.Tabbed.Tab,{$selected:l===s.DOCUMENT_MANAGEMENT_PATH,onClick:()=>c.push((0,s.buildDetailHref)(e.id,n,s.DOCUMENT_MANAGEMENT_PATH)),children:"서류 관리"})]})]}),(0,t.jsx)(T,{children:a})]})});function h(e,t){let n=f(e),i=f(t);return null===n||null===i?"-":`${n} ~ ${i}`}function f(e){if(null===e)return null;let[t,n,i]=e.split("-");return void 0===t||""===t||void 0===n||""===n||void 0===i||""===i?e:`${t}년 ${Number(n)}월 ${Number(i)}일`}let m=c.default.main.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,p=c.default.section.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;

  background: #fff;
`,_=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-2"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,b=c.default.h2.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-3"})`
  flex-shrink: 0;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,g=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
`,x=c.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-5"})`
  padding: 2px 8px;
  border: 1px solid #d1d5db;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0a0a0a;
  text-align: center;
`,w=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-6"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-7"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  font-size: 14px;
  line-height: normal;
  color: #0a0a0a;
`,v=c.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-8"})`
  flex-shrink: 0;
  font-weight: 700;
`,C=c.default.span.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-9"})`
  font-weight: 400;
`,j=c.default.div.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-10"})`
  height: 1px;
  background: #e5e7eb;
`,T=c.default.section.withConfig({componentId:"zh_mobile_web__sc-ae12c1b2-11"})`
  display: flex;
  flex: 1 0 0;
  background: #f8fafc;
`,S=(0,n.observer)(function({children:e}){let n=(0,i.usePathname)(),c=(0,i.useSearchParams)(),d=c.get("clientId"),o=(0,s.getServiceType)(c.get("serviceType")),r=a.default.client.documentManagement,h=a.default.client.list.findItem(d),f=r.contractsOfSelectedClient.find(e=>e.id===r.selectedContractId),m=null===h?null:void 0===f?h:{...h,grade:f.grade,serviceType:f.serviceType??o,managementCode:f.managementCode,contractStartDate:f.contractStartDate,contractEndDate:f.contractEndDate,serviceStartDate:f.serviceStartDate,serviceEndDate:f.serviceEndDate},p=n.endsWith(`/${s.BASIC_INFO_PATH}`)?s.BASIC_INFO_PATH:s.DOCUMENT_MANAGEMENT_PATH;return(0,l.useEffect)(()=>(a.default.client.documentManagement.setContext(d,o),()=>{a.default.client.documentManagement.clearContext()}),[d,o]),(0,t.jsx)(u,{client:m,serviceType:o,activePagePath:p,children:e})});e.s(["default",0,S],40621)}]);