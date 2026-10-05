(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},80629,e=>{"use strict";var t=e.i(7242);let n="/client/document-management",i="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,i,"buildDetailHref",0,function(e,t,n=i){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),`/client/detail/${n}?${l.toString()}`},"buildDocumentCaptureGuideHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let a=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==o&&a.set("documentId",o),null!=r&&a.set("documentStatus",r),`${n}/capture-guide?${a.toString()}`},"buildDocumentCaptureHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let a=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==o&&a.set("documentId",o),null!=r&&a.set("documentStatus",r),`${n}/capture?${a.toString()}`},"buildDocumentInputMethodHref",0,function({clientId:e,serviceType:t,contractId:i,templateId:l,documentId:o,documentStatus:r}){let a=new URLSearchParams({serviceType:t,templateId:l});return null!==e&&a.set("clientId",e),null!==i&&a.set("contractId",i),null!==o&&a.set("documentId",o),null!=r&&a.set("documentStatus",r),`${n}/input-method?${a.toString()}`},"buildDocumentSaveSuccessHref",0,function({clientId:e,serviceType:t,needsPcReview:i=!1}){let l=new URLSearchParams({serviceType:t});return null!==e&&l.set("clientId",e),i&&l.set("needsPcReview","true"),`${n}/save-success?${l.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams;return t.set("serviceType",e),`/client?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),l=e.i(38803);let o=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
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
`,a=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,c=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,s=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,d=l.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
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
`,f=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,u=l.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:l,leftAction:h,onBack:p,onForward:x,subtitle:b}){let m=null!=b&&""!==b;return(0,t.jsxs)(o,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)(a,{children:p?(0,t.jsx)(d,{onClick:p,children:(0,t.jsx)(n.default,{})}):null}),void 0===p&&void 0!==h?(0,t.jsx)(c,{children:h}):null,(0,t.jsx)(f,{children:e}),(0,t.jsxs)(s,{children:[l,x?(0,t.jsx)(d,{onClick:x,children:(0,t.jsx)(i.default,{})}):null]})]}),m?(0,t.jsx)(u,{children:b}):null]})}])},35718,e=>{"use strict";var t=e.i(9735);let n=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"ErrorOutlined");var i=e.i(38803),l=e.i(62659);let o=i.default.div.withConfig({componentId:"zh_mobile_web__sc-50154dbf-0"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 24px 0;

  color: #494f53;
`,r=i.default.div.withConfig({componentId:"zh_mobile_web__sc-50154dbf-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  text-align: center;
`,a=i.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-2"})`
  font-size: 18px;
  font-weight: 700;
`,c=i.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-3"})`
  font-size: 15px;
  color: #6b7280;
`,s=(0,i.default)(l.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-50154dbf-4"})`
  height: 44px;
  padding: 0 20px;
  font-size: 15px;
`;e.s(["default",0,function({title:e="목록을 불러오지 못했어요.",onRetry:i,isRetrying:l=!1}){return(0,t.jsxs)(o,{role:"alert",children:[(0,t.jsx)(n,{sx:{fontSize:24}}),(0,t.jsxs)(r,{children:[(0,t.jsx)(a,{children:e}),(0,t.jsx)(c,{children:"인터넷 연결을 확인한 뒤 다시 불러와 주세요."})]}),(0,t.jsx)(s,{type:"button",disabled:l,onClick:i,children:l?"불러오는 중…":"다시 불러오기"})]})}],35718)},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return c}};for(var l in i)Object.defineProperty(n,l,{enumerable:!0,get:i[l]});let o=e.r(44066)._(e.r(76268)),r=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,i=e.protocol||"",l=e.pathname||"",a=e.hash||"",c=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),c&&"object"==typeof c&&(c=String(o.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||r.test(i))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),d&&"?"!==d[0]&&(d="?"+d),l=l.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${s}${l}${d}${a}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=e.r(65576),l=e.r(18849);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,l.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return m},useLinkStatus:function(){return _}};for(var l in i)Object.defineProperty(n,l,{enumerable:!0,get:i[l]});let o=e.r(44066),r=e.r(9735),a=o._(e.r(7744)),c=e.r(32090),s=e.r(38792),d=e.r(45856),f=e.r(65576),u=e.r(57334);e.r(44182);let h=e.r(91075),p=e.r(63430),x=e.r(87342),b=e.r(97456);function m(t){var n,i;let l,o,m,[_,w]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,a.useRef)(null),{href:v,as:j,children:C,prefetch:I=null,passHref:z,replace:S,shallow:T,scroll:k,onClick:P,onMouseEnter:L,onTouchStart:O,legacyBehavior:R=!1,onNavigate:$,transitionTypes:E,ref:U,unstable_dynamicOnHover:A,...M}=t;l=C,R&&("string"==typeof l||"number"==typeof l)&&(l=(0,r.jsx)("a",{children:l}));let D=a.default.useContext(s.AppRouterContext),N=!1!==I,H=!1!==I?null===(i=I)||"auto"===i?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,B="string"==typeof(n=j||v)?n:(0,c.formatUrl)(n);if(R){if(l?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=a.default.Children.only(l)}let K=R?o&&"object"==typeof o&&o.ref:U,F=a.default.useCallback(e=>(null!==D&&(y.current=(0,p.mountLinkInstance)(e,B,D,H,N,w)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[N,B,D,H,w]),V={ref:(0,d.useMergedRef)(F,K),onClick(t){R||"function"!=typeof P||P(t),R&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!D||t.defaultPrevented||function(t,n,i,l,o,r,c){if("u">typeof window){let s,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(n)){l&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),r){let e=!1;if(r({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(86228);a.default.startTransition(()=>{f(n,l?"replace":"push",!1===o?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,i.current,c)})}}(t,B,y,S,k,$,E)},onMouseEnter(e){R||"function"!=typeof L||L(e),R&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),D&&N&&(0,p.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){R||"function"!=typeof O||O(e),R&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),D&&N&&(0,p.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,f.isAbsoluteUrl)(B)?V.href=B:R&&!z&&("a"!==o.type||"href"in o.props)||(V.href=(0,u.addBasePath)(B)),m=R?a.default.cloneElement(o,V):(0,r.jsx)("a",{...M,...V,children:l}),(0,r.jsx)(g.Provider,{value:_,children:m})}e.r(79103);let g=(0,a.createContext)(p.IDLE_LINK_STATUS),_=()=>(0,a.useContext)(g);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},74483,39313,19565,38223,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)([(0,n.jsx)("circle",{cx:"9",cy:"13",r:"1.25"},"0"),(0,n.jsx)("path",{d:"M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49C21.53 15.44 22 13.78 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39m-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88m-8.77-.4 2.19 2.19C2.78 7.6 2 9.71 2 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31zm14.77 14.77C15.35 19.44 13.74 20 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14 1.39-.52 2.63-1.35 3.64-2.39zM6.23 8.06c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13z"},"1")],"FaceRetouchingOffOutlined");e.s(["default",0,i],74483);let l=(0,t.default)((0,n.jsx)("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"}),"NorthEast");e.s(["default",0,l],39313);let o=(0,t.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");e.s(["default",0,o],19565);var r=e.i(38803),a=e.i(43174);let c=r.default.span.withConfig({componentId:"zh_mobile_web__sc-1f5820a4-0"})`
  display: inline-flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;
`,s=r.default.button.withConfig({componentId:"zh_mobile_web__sc-1f5820a4-1"})`
  cursor: pointer;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;

  padding: 0;
  border: 0;
  border-bottom: 1px solid currentcolor;

  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: #6b7280;

  appearance: none;
  background: transparent;

  &:focus-visible {
    outline: 2px solid #5635ff;
    outline-offset: 2px;
  }
`;e.s(["default",0,function(){return(0,n.jsxs)(c,{children:[(0,n.jsx)(s,{type:"button",onClick:()=>a.default.auth.openPasswordChange(),children:"비밀번호 변경"}),(0,n.jsx)(s,{type:"button",onClick:()=>void a.default.auth.logout(),children:"로그아웃"})]})}],38223)},27359,e=>{"use strict";var t=e.i(9735),n=e.i(88552),i=e.i(74483),l=e.i(39313),o=e.i(19565);e.i(3159);var r=e.i(46907),a=e.i(70682),c=e.i(33261),s=e.i(7744),d=e.i(38803),f=e.i(38223),u=e.i(35718),h=e.i(81911),p=e.i(62659),x=e.i(7242),b=e.i(43174),m=e.i(80629);let g=(0,r.observer)(function(){let e=b.default.client.list,i=(0,c.usePathname)(),r=(0,c.useRouter)(),a=(0,c.useSearchParams)(),d=function(e){return null!==e&&Object.hasOwn(x.default,e)?e:null}(a.get("serviceType")),g=e.serviceType,P=null!==d&&e.activeServiceList.some(e=>e.type===d);return(0,s.useEffect)(()=>{if(!i)return;if(P&&d!==g)return void e.setServiceType(d);if(P||null===g)return;let t=new URLSearchParams(a.toString());if(t.get("serviceType")===g)return;t.set("serviceType",g);let n=t.toString(),l=""===n?i:`${i}?${n}`;r.replace(l)},[e,P,i,r,a,g,d]),(0,t.jsxs)(_,{children:[(0,t.jsx)(h.default,{title:"이용자 목록",leftAction:(0,t.jsx)(f.default,{}),titleAction:(0,t.jsxs)(w,{href:null===g?"/service-worker":`/service-worker?serviceType=${g}`,children:[(0,t.jsx)("span",{children:"제공인력 보기"}),(0,t.jsx)(l.default,{sx:{fontSize:14}})]})}),(0,t.jsx)(p.default.Tabbed.Tabs,{children:e.activeServiceList.map(e=>(0,t.jsxs)(p.default.Tabbed.Tab,{$selected:g===e.type,onClick:()=>(e=>{if(e===g)return;let t=new URLSearchParams(a.toString());t.set("serviceType",e),r.replace(`${i}?${t.toString()}`)})(e.type),children:[x.default[e.type].label," 서비스"]},e.type))}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(j,{placeholder:"이용자명을 검색하세요.",value:e.searchText,onChange:t=>e.setSearchText(t.target.value)}),(0,t.jsx)(o.default,{sx:{fontSize:16}})]}),null!==g&&e.isError?(0,t.jsx)(u.default,{title:"이용자 목록을 불러오지 못했어요.",onRetry:e.retry}):null===g||e.shouldShowEmpty?(0,t.jsx)(D,{}):(0,t.jsx)(C,{children:e.items.map(e=>{let i=e.managementCode.split("-").pop()??e.managementCode;return(0,t.jsxs)(I,{children:[(0,t.jsx)(z,{children:(0,t.jsxs)(S,{children:[(0,t.jsx)(T,{children:e.name}),(0,t.jsxs)(k,{children:["관리번호 ",i]}),e.hasNeedUpdateDocument?(0,t.jsx)(L,{children:"업데이트 필요"}):null,e.hasNeedMatchingDocument?(0,t.jsx)(O,{children:"서류 대조"}):null]})}),(0,t.jsxs)($,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)(U,{children:"전화번호"}),(0,t.jsx)(A,{}),(0,t.jsx)(M,{children:e.phoneNumber})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(U,{children:"주소"}),(0,t.jsx)(A,{}),(0,t.jsx)(M,{$lightgray:!0,children:e.address})]})]}),(0,t.jsxs)(R,{href:(0,m.buildDetailHref)(e.id,g),children:[(0,t.jsx)("span",{children:"상세보기"}),(0,t.jsx)(n.default,{sx:{fontSize:16}})]})]},e.id)})})]})]})}),_=d.default.main.withConfig({componentId:"zh_mobile_web__sc-b6c28679-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,w=(0,d.default)(a.default).withConfig({componentId:"zh_mobile_web__sc-b6c28679-1"})`
  display: inline-flex;
  flex-shrink: 0;
  gap: 2px;
  align-items: center;

  padding: 0;
  border: 0;
  border-bottom: 1px solid currentcolor;

  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: #4f39f6;
  text-decoration: none;

  background: transparent;

  &:visited {
    color: #4f39f6;
  }

  &:focus-visible {
    outline: 2px solid #5635ff;
    outline-offset: 2px;
  }
`,y=d.default.section.withConfig({componentId:"zh_mobile_web__sc-b6c28679-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;

  background: #f8fafc;
`,v=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-3"})`
  display: flex;
  gap: 6px;
  align-items: center;
  align-self: stretch;

  height: 56px;
  padding: 18px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;

  background: #fff;

  &:focus-within {
    border-color: #5635ff;
  }
`,j=d.default.input.withConfig({componentId:"zh_mobile_web__sc-b6c28679-4"})`
  flex: 1;

  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #0a0a0a;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
  }
`,C=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-5"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`,I=d.default.article.withConfig({componentId:"zh_mobile_web__sc-b6c28679-6"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;

  width: 100%;
  min-height: 112px;
  padding: 16px;
  border: 1px solid #e5e9ef;
  border-radius: 8px;

  background: #fff;
`,z=d.default.header.withConfig({componentId:"zh_mobile_web__sc-b6c28679-7"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,S=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,T=d.default.h3.withConfig({componentId:"zh_mobile_web__sc-b6c28679-9"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,k=d.default.p.withConfig({componentId:"zh_mobile_web__sc-b6c28679-10"})`
  flex-shrink: 0;

  padding: 2px 8px;
  border: 1px solid #d1d5db;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  color: #45464e;
  text-align: center;
`,P=d.css`
  flex-shrink: 0;

  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  text-align: center;
`,L=d.default.p.withConfig({componentId:"zh_mobile_web__sc-b6c28679-11"})`
  ${P}
  background: #ff6900;
`,O=d.default.p.withConfig({componentId:"zh_mobile_web__sc-b6c28679-12"})`
  ${P}
  background: #ff6900;
`,R=(0,d.default)(a.default).withConfig({componentId:"zh_mobile_web__sc-b6c28679-13"})`
  display: flex;
  flex-shrink: 0;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding: 0;
  border: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #4f39f6;
  text-decoration: none;
  letter-spacing: -1px;

  background: transparent;

  &:visited {
    color: #4f39f6;
  }
`,$=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-14"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,E=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-15"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  min-width: 0;

  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  color: #0a0a0a;
`,U=d.default.span.withConfig({componentId:"zh_mobile_web__sc-b6c28679-16"})`
  flex-shrink: 0;
  width: 52px;
`,A=d.default.span.withConfig({componentId:"zh_mobile_web__sc-b6c28679-17"})`
  flex-shrink: 0;
  align-self: stretch;
  width: 1px;
  background: #e5e7eb;
`,M=d.default.span.withConfig({componentId:"zh_mobile_web__sc-b6c28679-18"})`
  min-width: 0;
  color: ${({$lightgray:e})=>!0===e?"#45464E":"inherit"};
`;function D(){return(0,t.jsxs)(N,{children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)(H,{children:[(0,t.jsx)(B,{children:"검색 결과가 없습니다."}),(0,t.jsx)(K,{children:"이름을 다시 확인해주세요."})]})]})}let N=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-19"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;

  color: #494f53;
`,H=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-20"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,B=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-21"})`
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
`,K=d.default.div.withConfig({componentId:"zh_mobile_web__sc-b6c28679-22"})`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
`;e.s(["default",0,g])}]);