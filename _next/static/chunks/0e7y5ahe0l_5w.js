(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:n,serviceWorkerId:i}){let l=new URLSearchParams({serviceType:n});return t(i)?(l.set("serviceWorkerId",i),`/service-worker/detail/document-management?${l.toString()}`):(null!==e&&l.set("clientId",e),`/client/detail/document-management?${l.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:n,documentId:i,documentStatus:l,monthlyScheduleClientContractId:o,monthlyScheduleSaved:r,monthlyScheduleYearMonth:c,page:a,serviceType:d,serviceWorkerId:s,templateId:u}){let h=t(s),f=new URLSearchParams({serviceType:d});return h?f.set("serviceWorkerId",s):null!==e&&f.set("clientId",e),null!=n&&f.set("contractId",n),null!=i&&f.set("documentId",i),null!=l&&f.set("documentStatus",l),null!=o&&f.set("monthlyScheduleClientContractId",o),!0===r&&f.set("monthlyScheduleSaved","true"),null!=c&&f.set("monthlyScheduleYearMonth",c),null!=u&&f.set("templateId",u),`${h?"/service-worker/document-management":"/client/document-management"}/${a}?${f.toString()}`},"isServiceWorkerDocumentFlow",0,t])},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let c=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=r&&c.set("documentStatus",r),`${n}/capture-guide?${c.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let c=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=r&&c.set("documentStatus",r),`${n}/capture?${c.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let c=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&c.set("clientId",e),null!==i&&c.set("contractId",i),null!==o&&c.set("documentId",o),null!=r&&c.set("documentStatus",r),`${n}/input-method?${c.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t,needsPcReview:i=!1}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),i&&l.set("needsPcReview","true"),`${n}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,r=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,d=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
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
`;e.s(["default",0,function({title:e,titleAction:l,leftAction:f,onBack:m,onForward:p,subtitle:g}){let x=null!=g&&""!==g;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)(c,{children:m?(0,t.jsx)(s,{onClick:m,children:(0,t.jsx)(n.default,{})}):null}),void 0===m&&void 0!==f?(0,t.jsx)(a,{children:f}):null,(0,t.jsx)(u,{children:e}),(0,t.jsxs)(d,{children:[l,p?(0,t.jsx)(s,{onClick:p,children:(0,t.jsx)(i.default,{})}):null]})]}),x?(0,t.jsx)(h,{children:g}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function o(e){return function({size:t,color:i,style:o}){return(0,n.jsx)(l,{size:t,color:i,$src:e,style:o})}}let{PUBLIC_PATH:r}=t.default.env,c={Docs:o(`${r}/icon/docs.svg`),FrameSource:o(`${r}/icon/frame-source.svg`),EvShadow:o(`${r}/icon/ev-shadow.svg`),DocumentSearch:o(`${r}/icon/document-search.svg`),WandShine:o(`${r}/icon/wand-shine.svg`)};e.s(["default",0,c],98273)},10703,e=>{"use strict";var t=e.i(9735),n=e.i(88552);e.i(3159);var i=e.i(46907),l=e.i(33261),o=e.i(7744),r=e.i(38803),c=e.i(17106),a=e.i(51413),d=e.i(98273),s=e.i(81911),u=e.i(62659),h=e.i(43174),f=e.i(43172),m=e.i(80629);let p=(0,i.observer)(function(){let e=(0,l.useRouter)(),i=(0,l.useSearchParams)(),r=(0,o.useRef)(null),u=i.get("clientId"),p=i.get("serviceWorkerId"),S=(0,a.isServiceWorkerDocumentFlow)(p),B=h.default.serviceWorker.documentManagement,q=S?B:h.default.client.documentManagement,Y=(0,m.getServiceType)(i.get("serviceType")),K=i.get("contractId"),V=i.get("templateId"),X=i.get("documentId"),J=i.get("documentStatus"),Q=i.get("monthlyScheduleClientContractId"),Z=i.get("monthlyScheduleYearMonth"),ee=q.updateNeededDocumentCards.find(e=>e.templateId===V&&(null===X||X===e.id))??q.updateNeededDocumentCards.find(e=>e.templateId===V),et=q.templates.find(e=>e.id===V),en=ee?.name??et?.name??null,ei=S&&"NEED_UPDATE"===J&&(0,f.isSalaryProvisionMonthlyScheduleDocument)(en),el=en??"서류",eo=function(e){let t=e.trim();if(0===t.length)return"를";let n=t.at(-1);if(void 0===n)return"를";let i=n.charCodeAt(0);return i<44032||i>55203?"를":(i-44032)%28!=0?"을":"를"}(el),er=q.capturedPhotoDataUrl,[ec,ea]=(0,o.useState)({height:0,width:0}),[ed,es]=(0,o.useState)(0),[eu,eh]=(0,o.useState)(!1),[ef,em]=(0,o.useState)(!1),ep=ei?B.monthlyScheduleCreateStatus:q.ocrAnalyzeStatus,eg="loading"===ep,ex="success"===ep,e_=(0,c.getHttpErrorMessage)(ei?B.monthlyScheduleCreateError:q.ocrAnalyzeError)??"사진 분석에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요.",ew=eg||ef,eb=ei&&(null===B.monthlyScheduleClientContractId||""===B.monthlyScheduleYearMonth.trim()),eI=()=>{e.push((0,a.buildDocumentFlowHref)({clientId:u,serviceType:Y,contractId:K,templateId:V??"",documentId:X,documentStatus:J,monthlyScheduleClientContractId:Q,monthlyScheduleYearMonth:Z,page:"capture",serviceWorkerId:p}))},ey=(0,o.useMemo)(()=>{let e=ec.width,t=ec.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[ec.height,ec.width]);(0,o.useEffect)(()=>{q.resetOcrAnalyze(),B.resetMonthlyScheduleDocumentCreate()},[q,B]),(0,o.useEffect)(()=>{let e=r.current;if(null===e)return;let t=()=>{ea({width:Math.floor(e.clientWidth-40),height:Math.floor(e.clientHeight-40)})};t();let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[]),(0,o.useEffect)(()=>{if(eu&&ex&&!ef){if("NEED_MATCHING"===J)return void e.push((0,a.buildDocumentFlowHref)({clientId:u,serviceType:Y,templateId:V,contractId:K,documentId:X,documentStatus:J,monthlyScheduleClientContractId:Q,monthlyScheduleYearMonth:Z,page:"comparison",serviceWorkerId:p}));if(ei)return void B.refreshDocuments().finally(()=>{e.push((0,a.buildDocumentFlowHref)({clientId:u,serviceType:Y,page:"save-success",serviceWorkerId:p}))});e.push((0,a.buildDocumentFlowHref)({clientId:u,serviceType:Y,contractId:K,templateId:V??"",documentId:X,page:"photo-result",serviceWorkerId:p}))}},[u,K,X,J,eu,ef,ex,ei,Q,Z,e,B,Y,p,V]),(0,o.useEffect)(()=>{if(!eg)return;let e=performance.now(),t=0,n=i=>{es(Math.min(100*(1-Math.exp(-((i-e)/1e3*.05))),98)),t=window.requestAnimationFrame(n)};return t=window.requestAnimationFrame(n),()=>{window.cancelAnimationFrame(t)}},[eg]);let ev=async()=>{if(null===er||null===V||""===V.trim()||eb)return;q.resetOcrAnalyze(),eh(!0),es(0);let e=await fetch(er),t=await e.blob(),n=new File([t],"document-photo.jpg",{type:t.type||"image/jpeg"});if(ei)return void B.requestMonthlyScheduleDocumentCreate(n);if(null!==X&&""!==X.trim()){if(S)return void h.default.serviceWorker.documentManagement.requestOcrAnalyze({documentId:X,file:n});h.default.client.documentManagement.requestOcrAnalyze("NEED_MATCHING"===J?{templateId:V,file:n}:{templateId:V,documentId:X,file:n})}};return ew?(0,t.jsxs)(g,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(s.default,{title:"사진 분석하기",onBack:()=>em(!0)})}),(0,t.jsx)(_,{}),(0,t.jsx)(D,{children:(0,t.jsxs)(A,{children:[(0,t.jsx)(d.default.DocumentSearch,{size:20}),(0,t.jsxs)(M,{children:[(0,t.jsx)(E,{children:"업로드한 사진을 분석하고 있습니다."}),(0,t.jsx)(H,{children:"화면을 절대 끄지 마세요."})]}),(0,t.jsx)(T,{children:(0,t.jsx)(P,{$progress:ed})})]})}),ef?(0,t.jsx)(N,{role:"presentation",children:(0,t.jsxs)(F,{role:"dialog","aria-modal":"true","aria-labelledby":"abort-confirm-title","aria-describedby":"abort-confirm-description",onClick:e=>{e.stopPropagation()},children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(O,{id:"abort-confirm-title",children:"작업을 중단할까요?"}),(0,t.jsx)(R,{id:"abort-confirm-description",children:"저장하지 않은 내용은 사라집니다."})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(W,{type:"button",onClick:()=>{em(!1)},children:"계속하기"}),(0,t.jsx)(G,{type:"button",onClick:()=>{em(!1),q.resetOcrAnalyze(),B.resetMonthlyScheduleDocumentCreate(),e.push((0,a.buildDocumentFlowHref)({clientId:u,serviceType:Y,contractId:K,templateId:V??"",documentId:X,documentStatus:J,monthlyScheduleClientContractId:Q,monthlyScheduleYearMonth:Z,page:"capture-guide",serviceWorkerId:p}))},children:"중단하기"})]})]})}):null]}):(0,t.jsxs)(g,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(s.default,{title:"NEED_MATCHING"===J?en??"서류 비교하기":"사진 확인하기",onBack:eI})}),(0,t.jsx)(_,{}),(0,t.jsxs)(w,{children:[(0,t.jsxs)(b,{children:["NEED_MATCHING"===J?`수기 ${el}${eo} 확인해 주세요.`:"촬영한 사진을 확인해 주세요.",(0,t.jsx)("br",{}),"NEED_MATCHING"===J?`전산 ${en}의 내용과 비교분석을 시작합니다.`:"잘못 촬영했다면 다시 촬영하기를 눌러주세요."]}),"error"===ep?(0,t.jsx)(I,{children:e_}):null,(0,t.jsx)(y,{ref:r,children:(0,t.jsx)(v,{style:ey??void 0,children:null===er?(0,t.jsx)(j,{children:"사진을 불러올 수 없습니다."}):(0,t.jsx)(C,{src:er,alt:"촬영한 사진"})})})]}),(0,t.jsxs)(z,{children:[(0,t.jsx)(k,{type:"button",onClick:eI,children:"다시 촬영하기"}),(0,t.jsxs)($,{type:"button",onClick:()=>{ev()},disabled:null===er||null===V||!ei&&null===X||eb||eg,$processing:eg,children:[(0,t.jsx)("span",{children:"NEED_MATCHING"===J?"비교 분석 시작":"분석 시작하기"}),(0,t.jsx)(n.default,{sx:{fontSize:20}})]})]})]})}),g=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #fff;
`,x=r.default.header.withConfig({componentId:"zh_mobile_web__sc-a7326e26-1"})`
  display: flex;
  flex-direction: column;
  background: #fff;
`,_=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-2"})`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
`,w=r.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-3"})`
  overflow-y: auto;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  padding: 24px;
`,b=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-4"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: #111827;
  text-align: center;
`,I=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-5"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #dc2626;
  text-align: center;
`,y=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-6"})`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;
  padding: 20px;
`,v=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-7"})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  aspect-ratio: 210/297;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  background: #fff;
`,C=r.default.img.withConfig({componentId:"zh_mobile_web__sc-a7326e26-8"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,j=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-9"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`,z=r.default.footer.withConfig({componentId:"zh_mobile_web__sc-a7326e26-10"})`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
  padding: 24px 24px 48px;
`,S=r.css`
  display: flex;
  flex: 1 0 0;
  gap: 4px;
  align-items: center;

  height: 56px;
  padding: 18px 16px;

  font-size: 16px;
  line-height: 20px; /* 125% */
`,k=(0,r.default)(u.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-11"})`
  ${S}
`,$=(0,r.default)(u.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-12"})`
  ${S}
`,D=r.default.main.withConfig({componentId:"zh_mobile_web__sc-a7326e26-13"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  padding: 24px;
`,A=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-14"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,M=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-15"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,E=r.default.h2.withConfig({componentId:"zh_mobile_web__sc-a7326e26-16"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,H=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-17"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #494f53;
`,T=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-18"})`
  position: relative;

  overflow: hidden;

  width: 100%;
  height: 8px;
  border-radius: 999px;

  background: #e6e0ff;
`,P=r.default.div.attrs(({$progress:e})=>({style:{transform:`scaleX(${e/100})`}})).withConfig({componentId:"zh_mobile_web__sc-a7326e26-19"})`
  transform-origin: left center;

  width: 100%;
  height: 100%;
  border-radius: 999px;

  background: #5635ff;
`,N=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-20"})`
  position: fixed;
  z-index: 1000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 56%);
`,F=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-21"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  width: min(306px, 100%);
  padding: 24px;
  border: 1px solid #d1d6de;
  border-radius: 12px;

  background: #fff;
`,L=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-22"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  width: 100%;
`,O=r.default.h3.withConfig({componentId:"zh_mobile_web__sc-a7326e26-23"})`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #111827;
  text-align: center;
`,R=r.default.p.withConfig({componentId:"zh_mobile_web__sc-a7326e26-24"})`
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4a4f53;
  text-align: center;
`,U=r.default.div.withConfig({componentId:"zh_mobile_web__sc-a7326e26-25"})`
  display: flex;
  gap: 12px;
  align-items: stretch;
  width: 100%;
`,B=r.css`
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
`,W=(0,r.default)(u.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-a7326e26-26"})`
  ${B}
`,G=(0,r.default)(u.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-a7326e26-27"})`
  ${B}
`;e.s(["default",0,p])}]);