(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,24655,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.s(["default",0,n])},35718,e=>{"use strict";var t=e.i(9735);let i=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"ErrorOutlined");var n=e.i(38803),l=e.i(62659);let o=n.default.div.withConfig({componentId:"zh_mobile_web__sc-50154dbf-0"})`
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
`,c=n.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-2"})`
  font-size: 18px;
  font-weight: 700;
`,f=n.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-3"})`
  font-size: 15px;
  color: #6b7280;
`,a=(0,n.default)(l.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-50154dbf-4"})`
  height: 44px;
  padding: 0 20px;
  font-size: 15px;
`;e.s(["default",0,function({title:e="목록을 불러오지 못했어요.",onRetry:n,isRetrying:l=!1}){return(0,t.jsxs)(o,{role:"alert",children:[(0,t.jsx)(i,{sx:{fontSize:24}}),(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:e}),(0,t.jsx)(f,{children:"인터넷 연결을 확인한 뒤 다시 불러와 주세요."})]}),(0,t.jsx)(a,{type:"button",disabled:l,onClick:n,children:l?"불러오는 중…":"다시 불러오기"})]})}],35718)},29529,e=>{"use strict";var t=e.i(9735),i=e.i(24655);e.i(3159);var n=e.i(46907),l=e.i(33261),o=e.i(38803),d=e.i(35718),c=e.i(43174),f=e.i(80629);let a=(0,n.observer)(function(){let e=(0,l.useRouter)(),n=(0,l.useSearchParams)(),o=c.default.client.documentManagement,a=n.get("clientId"),S=(0,f.getServiceType)(n.get("serviceType")),T=[...o.contractsOfSelectedClient].reverse().map((e,t)=>({id:e.id,label:`[${t+1}차 계약]`}));return(0,t.jsxs)(s,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(r,{children:"촬영이 필요한 서류"}),(0,t.jsx)(p,{children:T.map(e=>(0,t.jsx)(x,{type:"button",$selected:o.selectedContractId===e.id,onClick:()=>o.setSelectedContractId(e.id),children:e.label},e.id))})]}),o.isError?(0,t.jsx)(d.default,{title:"서류 목록을 불러오지 못했어요.",onRetry:o.retry}):o.shouldShowEmpty?(0,t.jsxs)(I,{children:[(0,t.jsx)(i.default,{sx:{fontSize:24,color:"#494f53"}}),(0,t.jsxs)(v,{children:[(0,t.jsx)(y,{children:"촬영이 필요한 서류가 없습니다."}),(0,t.jsx)(k,{children:"전체 서류 목록은 PC웹에서 확인해주세요."})]})]}):(0,t.jsx)(b,{children:o.updateNeededDocumentCards.map(i=>(0,t.jsxs)(m,{children:[(0,t.jsx)(u,{children:null===i.thumbnailImagePath?null:(0,t.jsx)(_,{src:i.thumbnailImagePath,alt:i.name})}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(z,{children:i.name}),(0,t.jsx)(C,{children:"NEED_MATCHING"===i.displayStatus?"서류 대조":"업데이트 필요"})]}),(0,t.jsx)(j,{type:"button",onClick:()=>e.push((0,f.buildDocumentInputMethodHref)({clientId:a,serviceType:S,contractId:o.selectedContractId,templateId:i.templateId,documentId:i.id,documentStatus:i.displayStatus})),children:"수기 서류 업로드하기"})]})]},i.id??i.templateId))})]})}),s=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 12px;

  padding: 24px;
`,r=o.default.h3.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-1"})`
  flex-shrink: 0;

  padding: 8px 0;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,h=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-2"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
  align-items: center;
`,p=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-3"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: fit-content;
  max-width: 100%;
`,x=o.default.button.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-4"})`
  flex-shrink: 0;

  padding: 4px 8px;
  border: 1px solid ${({$selected:e})=>!0===e?"#bc440d":"#d5dae1"};
  border-radius: 8px;

  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${({$selected:e})=>!0===e?"#fff":"#0a0a0a"};

  background: ${({$selected:e})=>!0===e?"#bc440d":"#fff"};
`,b=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-5"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,m=o.default.article.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-6"})`
  overflow: clip;
  display: flex;
  align-items: flex-start;

  width: 100%;
  height: 100px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,u=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-7"})`
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
`,_=o.default.img.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-8"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,g=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-9"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  min-width: 0;
  height: 100%;
  padding: 12px;
`,w=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-10"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`,z=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-11"})`
  overflow: hidden;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
  text-overflow: ellipsis;
`,C=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-12"})`
  flex-shrink: 0;

  padding: 4px 6px;
  border: 1px solid #ff6900;
  border-radius: 99px;

  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #fff;
  text-align: center;

  background: #ff6900;
`,j=o.default.button.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-13"})`
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
`,I=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-14"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`,v=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  color: #494f53;
  text-align: center;
`,y=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-16"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,k=o.default.div.withConfig({componentId:"zh_mobile_web__sc-689cbf5c-17"})`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;e.s(["default",0,a])}]);