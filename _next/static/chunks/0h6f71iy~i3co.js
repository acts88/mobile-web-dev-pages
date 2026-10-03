(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51413,e=>{"use strict";function t(e){return null!==e&&""!==e.trim()}e.s(["buildDocumentFlowDetailHref",0,function({clientId:e,serviceType:i,serviceWorkerId:n}){let o=new URLSearchParams({serviceType:i});return t(n)?(o.set("serviceWorkerId",n),`/service-worker/detail/document-management?${o.toString()}`):(null!==e&&o.set("clientId",e),`/client/detail/document-management?${o.toString()}`)},"buildDocumentFlowHref",0,function({clientId:e,contractId:i,documentId:n,documentStatus:o,monthlyScheduleClientContractId:l,monthlyScheduleSaved:d,monthlyScheduleYearMonth:r,page:c,serviceType:a,serviceWorkerId:s,templateId:u}){let h=t(s),f=new URLSearchParams({serviceType:a});return h?f.set("serviceWorkerId",s):null!==e&&f.set("clientId",e),null!=i&&f.set("contractId",i),null!=n&&f.set("documentId",n),null!=o&&f.set("documentStatus",o),null!=l&&f.set("monthlyScheduleClientContractId",l),!0===d&&f.set("monthlyScheduleSaved","true"),null!=r&&f.set("monthlyScheduleYearMonth",r),null!=u&&f.set("templateId",u),`${h?"/service-worker/document-management":"/client/document-management"}/${c}?${f.toString()}`},"isServiceWorkerDocumentFlow",0,t])},80629,e=>{"use strict";var t=e.i(7242);let i="/client/document-management",n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let o=new URLSearchParams({serviceType:t});return null!==e&&o.set("clientId",e),`/client/detail/${i}?${o.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:n,templateId:o,documentId:l,documentStatus:d}){let r=new URLSearchParams({serviceType:t,templateId:o});return null!==e&&r.set("clientId",e),null!==n&&r.set("contractId",n),null!==l&&r.set("documentId",l),null!=d&&r.set("documentStatus",d),`${i}/capture-guide?${r.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:n,templateId:o,documentId:l,documentStatus:d}){let r=new URLSearchParams({serviceType:t,templateId:o});return null!==e&&r.set("clientId",e),null!==n&&r.set("contractId",n),null!==l&&r.set("documentId",l),null!=d&&r.set("documentStatus",d),`${i}/capture?${r.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:n,templateId:o,documentId:l,documentStatus:d}){let r=new URLSearchParams({serviceType:t,templateId:o});return null!==e&&r.set("clientId",e),null!==n&&r.set("contractId",n),null!==l&&r.set("documentId",l),null!=d&&r.set("documentStatus",d),`${i}/input-method?${r.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t}){let n=new URLSearchParams({serviceType:t});return null!==e&&n.set("clientId",e),`${i}/save-success?${n.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},21839,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,n])},88552,e=>{"use strict";var t=e.i(38797),i=e.i(9735);let n=(0,t.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,n])},81911,e=>{"use strict";var t=e.i(9735),i=e.i(21839),n=e.i(88552),o=e.i(38803);let l=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,d=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,r=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,c=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,a=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,s=o.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
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
`,u=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,h=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:o,leftAction:f,onBack:m,onForward:g,subtitle:p}){let w=null!=p&&""!==p;return(0,t.jsxs)(l,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(r,{children:m?(0,t.jsx)(s,{onClick:m,children:(0,t.jsx)(i.default,{})}):null}),void 0===m&&void 0!==f?(0,t.jsx)(c,{children:f}):null,(0,t.jsx)(u,{children:e}),(0,t.jsxs)(a,{children:[o,g?(0,t.jsx)(s,{onClick:g,children:(0,t.jsx)(n.default,{})}):null]})]}),w?(0,t.jsx)(h,{children:p}):null]})}])},68855,e=>{"use strict";var t=e.i(9735);e.i(3159);var i=e.i(46907),n=e.i(33261),o=e.i(7744),l=e.i(38803),d=e.i(51413),r=e.i(81911);function c({children:e,enabled:i=!0,title:n="세로 화면으로 전환해 주세요",description:l="촬영 기능은 세로 모드에서만 지원합니다."}){let[d,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(!i)return;let e=()=>{r("function"==typeof window.matchMedia?window.matchMedia("(orientation: landscape)").matches:window.innerWidth>window.innerHeight)};e();let t="function"==typeof window.matchMedia?window.matchMedia("(orientation: landscape)"):null;return null!==t&&t.addEventListener("change",e),window.addEventListener("orientationchange",e),window.addEventListener("resize",e),()=>{null!==t&&t.removeEventListener("change",e),window.removeEventListener("orientationchange",e),window.removeEventListener("resize",e)}},[i]),(0,t.jsxs)(a,{children:[e,i&&d?(0,t.jsx)(s,{role:"alert","aria-live":"assertive","aria-label":"세로 모드 전환 안내",children:(0,t.jsxs)(u,{children:[(0,t.jsx)(h,{children:n}),(0,t.jsx)(f,{children:l})]})}):null]})}let a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-0"})`
  position: relative;
  display: flex;
  height: 100%;
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-1"})`
  position: fixed;
  z-index: 3000;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(17 24 39 / 90%);
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: min(100%, 360px);
  padding: 20px 18px;
  border-radius: 12px;

  color: #f9fafb;
  text-align: center;

  background: rgb(31 41 55 / 92%);
`,h=l.default.p.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-3"})`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`,f=l.default.p.withConfig({componentId:"zh_mobile_web__sc-6efeea3b-4"})`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #d1d5db;
`;var m=e.i(43174),g=e.i(80629);let p=(0,i.observer)(function(){let e=(0,n.useRouter)(),i=(0,n.useSearchParams)(),l=(0,o.useRef)(null),a=(0,o.useRef)(null),s=i.get("clientId"),u=i.get("serviceWorkerId"),h=(0,d.isServiceWorkerDocumentFlow)(u)?m.default.serviceWorker.documentManagement:m.default.client.documentManagement,f=(0,g.getServiceType)(i.get("serviceType")),p=i.get("contractId"),k=i.get("templateId"),M=i.get("documentId"),$=i.get("documentStatus"),L=i.get("monthlyScheduleClientContractId"),E=i.get("monthlyScheduleYearMonth"),[H,D]=(0,o.useState)(null),[U,P]=(0,o.useState)({height:0,width:0}),R=(0,o.useMemo)(()=>{let e=U.width,t=U.height;return e<=0||t<=0?null:e/t>210/297?{height:`${t}px`,width:"auto"}:{height:"auto",width:`${e}px`}},[U.height,U.width]);return(0,o.useEffect)(()=>{let e=!0,t=null;return(async()=>{let i=navigator.mediaDevices;if(void 0===i||void 0===i.getUserMedia)return D("이 브라우저에서는 카메라를 지원하지 않습니다.");try{try{t=await i.getUserMedia({audio:!1,video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}}})}catch(e){if(e instanceof DOMException&&"NotAllowedError"===e.name)throw e;t=await i.getUserMedia({audio:!1,video:{facingMode:"environment"}})}if(!e)return void t.getTracks().forEach(e=>e.stop());let n=l.current;if(null===n)return void t.getTracks().forEach(e=>e.stop());n.srcObject=t,await n.play()}catch{e&&D("카메라를 불러오지 못했습니다.\n권한을 확인해 주세요.")}})(),()=>{e=!1,t?.getTracks().forEach(e=>e.stop())}},[]),(0,o.useEffect)(()=>{let e=a.current;if(null===e)return;let t=()=>{P({width:Math.floor(e.clientWidth-24),height:Math.floor(e.clientHeight-24)})};t();let i=new ResizeObserver(t);return i.observe(e),()=>{i.disconnect()}},[]),(0,t.jsx)(c,{children:(0,t.jsxs)(w,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(r.default,{title:"",onBack:()=>e.push((0,d.buildDocumentFlowHref)({clientId:s,serviceType:f,contractId:p,templateId:k??"",documentId:M,documentStatus:$,monthlyScheduleClientContractId:L,monthlyScheduleYearMonth:E,page:"capture-guide",serviceWorkerId:u}))})}),(0,t.jsx)(x,{ref:a,children:(0,t.jsxs)(_,{style:R??void 0,children:[(0,t.jsx)(I,{$position:"top-left"}),(0,t.jsx)(I,{$position:"top-right"}),(0,t.jsx)(I,{$position:"bottom-left"}),(0,t.jsx)(I,{$position:"bottom-right"}),(0,t.jsx)(v,{children:null!==H?(0,t.jsx)(y,{children:H}):(0,t.jsx)(j,{ref:l,autoPlay:!0,muted:!0,playsInline:!0})})]})}),(0,t.jsxs)(S,{children:[(0,t.jsx)(C,{children:"서류를 화면 안에 맞춰서 촬영해주세요."}),(0,t.jsx)(z,{type:"button","aria-label":"촬영하기",onClick:()=>{let t=l.current;if(null===t||0===t.videoWidth||0===t.videoHeight)return;let i=210/297,n=t.videoWidth,o=t.videoHeight,r=n,c=o;n/o>i?r=Math.floor(o*i):c=Math.floor(n/i);let a=Math.floor((n-r)/2),m=Math.floor((o-c)/2),g=document.createElement("canvas");g.width=r,g.height=c;let w=g.getContext("2d");if(null===w)return;w.drawImage(t,a,m,r,c,0,0,g.width,g.height);let b=g.toDataURL("image/jpeg",.92);h.setCapturedPhotoDataUrl(b),e.push((0,d.buildDocumentFlowHref)({clientId:s,serviceType:f,contractId:p,templateId:k??"",documentId:M,documentStatus:$,monthlyScheduleClientContractId:L,monthlyScheduleYearMonth:E,page:"photo-review",serviceWorkerId:u}))}})]})]})})}),w=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;

  min-height: 100%;

  background: #1f2937;
`,b=l.default.header.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-1"})`
  display: flex;
  flex-direction: column;
  color: #fff;
`,x=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-2"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 0;
  padding: 12px;
`,_=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-3"})`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: 210/297;
`,v=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-4"})`
  overflow: hidden;

  width: 100%;
  height: 100%;
  border-radius: 4px;

  background: linear-gradient(180deg, #283140 0%, #1f2937 100%);
`,I=l.default.span.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-5"})`
  position: absolute;
  z-index: 1;

  width: 42px;
  height: 42px;
  border-color: #fff;
  border-style: solid;

  ${({$position:e})=>"top-left"===e?"top: 0; left: 0; border-width: 4px 0 0 4px;":"top-right"===e?"top: 0; right: 0; border-width: 4px 4px 0 0;":"bottom-left"===e?"bottom: 0; left: 0; border-width: 0 0 4px 4px;":"right: 0; bottom: 0; border-width: 0 4px 4px 0;"}
`,j=l.default.video.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-6"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,y=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-7"})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 18px;
  font-weight: 600;
  color: rgb(255 255 255 / 70%);
  text-align: center;
  white-space: pre-line;

  background: rgb(255 255 255 / 4%);
`,S=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-8"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

  padding: 24px 24px 48px;
`,C=l.default.div.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-9"})`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #fff;
  text-align: center;
`,z=l.default.button.withConfig({componentId:"zh_mobile_web__sc-4edc0dc4-10"})`
  width: 72px;
  height: 72px;
  border: 0;
  border-radius: 50%;

  background: #fff;
  box-shadow: 0 6px 20px rgb(0 0 0 / 20%);
`;e.s(["default",0,p],68855)}]);