(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:i,serviceWorkerId:n}){let l=new URLSearchParams({serviceType:i});return t(n)?(l.set("serviceWorkerId",n),`/service-worker/detail/document-management?${l.toString()}`):(null!==e&&l.set("clientId",e),`/client/detail/document-management?${l.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:i,documentId:n,documentStatus:l,monthlyScheduleClientContractId:o,monthlyScheduleSaved:d,monthlyScheduleYearMonth:a,page:s,serviceType:c,serviceWorkerId:r,templateId:f}){let h=t(r),u=new URLSearchParams({serviceType:c});return h?u.set("serviceWorkerId",r):null!==e&&u.set("clientId",e),null!=i&&u.set("contractId",i),null!=n&&u.set("documentId",n),null!=l&&u.set("documentStatus",l),null!=o&&u.set("monthlyScheduleClientContractId",o),!0===d&&u.set("monthlyScheduleSaved","true"),null!=a&&u.set("monthlyScheduleYearMonth",a),null!=f&&u.set("templateId",f),`${h?"/service-worker/document-management":"/client/document-management"}/${s}?${u.toString()}`},"isServiceWorkerDocumentFlow",0,t])},98273,e=>{"use strict";var t=e.i(25521),i=e.i(9735),n=e.i(38803);let l=n.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:n,style:o}){return(0,i.jsx)(l,{size:t,color:n,$src:e,style:o})}}let{PUBLIC_PATH:d}=t.default.env,a={Docs:o(`${d}/icon/docs.svg`),FrameSource:o(`${d}/icon/frame-source.svg`),EvShadow:o(`${d}/icon/ev-shadow.svg`),DocumentSearch:o(`${d}/icon/document-search.svg`),WandShine:o(`${d}/icon/wand-shine.svg`)};e.s(["default",0,a],98273)},24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},35718,e=>{"use strict";var t=e.i(9735);let i=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"ErrorOutlined");var n=e.i(38803),l=e.i(62659);let o=n.default.div.withConfig({componentId:"zh_mobile_web__sc-50154dbf-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 24px 0;

  color: #494f53;
`,d=n.default.div.withConfig({componentId:"zh_mobile_web__sc-50154dbf-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  text-align: center;
`,a=n.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-2"})`
  font-size: 18px;
  font-weight: 700;
`,s=n.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-3"})`
  font-size: 15px;
  color: #6b7280;
`,c=(0,n.default)(l.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-50154dbf-4"})`
  height: 44px;
  padding: 0 20px;
  font-size: 15px;
`;e.s(["default",0,function({title:e="목록을 불러오지 못했어요.",onRetry:n,isRetrying:l=!1}){return(0,t.jsxs)(o,{role:"alert",children:[(0,t.jsx)(i,{sx:{fontSize:24}}),(0,t.jsxs)(d,{children:[(0,t.jsx)(a,{children:e}),(0,t.jsx)(s,{children:"인터넷 연결을 확인한 뒤 다시 불러와 주세요."})]}),(0,t.jsx)(c,{type:"button",disabled:l,onClick:n,children:l?"불러오는 중…":"다시 불러오기"})]})}],35718)},14184,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),l=e.i(33261),o=e.i(38803),d=e.i(51413),a=e.i(98273),s=e.i(35718),c=e.i(43174),r=e.i(43172),f=e.i(30190);let h=(0,n.observer)(function(){let e=(0,l.useRouter)(),n=(0,l.useSearchParams)(),o=c.default.serviceWorker.documentManagement,h=n.get("serviceWorkerId"),E=(0,f.getServiceType)(n.get("serviceType")),P=[...o.contracts].reverse().map((e,t)=>({id:e.id,label:`[${t+1}차 계약]`}));return(0,t.jsxs)(u,{children:[(0,t.jsxs)(p,{children:[(0,t.jsx)(m,{children:"촬영이 필요한 서류"}),(0,t.jsx)(x,{children:P.map(e=>(0,t.jsx)(g,{type:"button",$selected:o.selectedContractId===e.id,onClick:()=>o.setSelectedContractId(e.id),children:e.label},e.id))})]}),o.isError?(0,t.jsx)(s.default,{title:"서류 목록을 불러오지 못했어요.",onRetry:o.retry}):!0===o.shouldShowEmpty?(0,t.jsxs)(_,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(b,{children:[(0,t.jsx)(w,{children:"촬영이 필요한 서류가 없습니다."}),(0,t.jsx)(v,{children:"전체 서류 목록은 PC웹에서 확인해주세요."})]})]}):(0,t.jsx)(I,{children:o.documentCards.map(i=>{let n="LINKED_COMPLETED"===i.displayStatus&&(0,r.isSalaryProvisionMonthlyScheduleDocument)(i.name);return(0,t.jsxs)(y,{children:[(0,t.jsx)(z,{children:null===i.thumbnailImagePath?null:(0,t.jsx)(C,{src:i.thumbnailImagePath,alt:i.name})}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(k,{children:i.name}),(0,t.jsxs)($,{children:["LINKED_COMPLETED"===i.displayStatus?(0,t.jsx)(a.default.WandShine,{size:16}):null,i.statusUi.badge.label]})]}),(0,t.jsx)(D,{type:"button",disabled:"NEED_MATCHING"!==i.displayStatus&&("NEED_UPDATE"!==i.displayStatus||!(0,r.isSalaryProvisionMonthlyScheduleDocument)(i.name))&&!n,onClick:()=>e.push((0,d.buildDocumentFlowHref)({clientId:null,contractId:o.selectedContractId,documentId:i.id,documentStatus:i.displayStatus,page:n?"comparison":"input-method",serviceType:E,serviceWorkerId:h,templateId:i.templateId})),children:n?"서류 최종 확인하기":"수기 서류 업로드하기"})]})]},i.id??i.name)})})]})}),u=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;

  color: #494f53;
`,p=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-1"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
  align-items: center;
`,m=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-9859e24a-2"})`
  flex-shrink: 0;

  padding: 8px 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,x=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: fit-content;
  max-width: 100%;
`,g=o.default.button.withConfig({componentId:"zh_mobile_web__sc-9859e24a-4"})`
  flex-shrink: 0;

  padding: 4px 8px;
  border: 1px solid ${({$selected:e})=>!0===e?"#bc440d":"#d5dae1"};
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$selected:e})=>!0===e?"#fff":"#0a0a0a"};

  background: ${({$selected:e})=>!0===e?"#bc440d":"#fff"};
`,_=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-5"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,b=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-6"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  color: #494f53;
  text-align: center;
`,w=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-7"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-8"})`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`,I=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-9"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,y=o.default.article.withConfig({componentId:"zh_mobile_web__sc-9859e24a-10"})`
  overflow: clip;
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 100px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-11"})`
  overflow: clip;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;

  width: 80px;
  height: 98px;
  padding: 10px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;

  background: #f3f4f6;
`,C=o.default.img.withConfig({componentId:"zh_mobile_web__sc-9859e24a-12"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,j=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-13"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  min-width: 0;
  height: 100%;
  padding: 12px;
`,S=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-14"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`,k=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-15"})`
  overflow: hidden;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-overflow: ellipsis;
`,$=o.default.div.withConfig({componentId:"zh_mobile_web__sc-9859e24a-16"})`
  display: inline-flex;
  flex-shrink: 0;
  gap: 4px;
  align-items: center;

  padding: 4px 6px;
  border: 1px solid #ff6900;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;
  text-align: center;

  background: #ff6900;
`,D=o.default.button.withConfig({componentId:"zh_mobile_web__sc-9859e24a-17"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 4px 8px;
  border: 1px solid #ff6900;
  border-radius: 4px;

  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;
  text-align: center;

  background: #ff6900;
`;e.s(["default",0,h])}]);