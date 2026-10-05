(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),o=e.i(38803);let l=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,r=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
`,a=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-2"})`
  position: absolute;
  left: 0;
  width: 24px;
  height: 100%;
`,s=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-3"})`
  position: absolute;
  left: 0;

  display: flex;
  align-items: center;

  height: 100%;
`,c=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-4"})`
  position: absolute;
  right: 0;

  display: flex;
  gap: 12px;
  align-items: center;

  height: 100%;
`,f=o.default.button.withConfig({componentId:"zh_mobile_web__sc-903ad80c-5"})`
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
`,d=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-6"})`
  flex-shrink: 0;

  height: 100%;

  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: #111827;
  text-align: center;
`,u=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-7"})`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #6b7280;
  text-align: center;
`;e.s(["default",0,function({title:e,titleAction:o,leftAction:h,onBack:p,onForward:x,subtitle:g}){let m=null!=g&&""!==g;return(0,t.jsxs)(l,{children:[(0,t.jsxs)(r,{children:[(0,t.jsx)(a,{children:p?(0,t.jsx)(f,{onClick:p,children:(0,t.jsx)(n.default,{})}):null}),void 0===p&&void 0!==h?(0,t.jsx)(s,{children:h}):null,(0,t.jsx)(d,{children:e}),(0,t.jsxs)(c,{children:[o,x?(0,t.jsx)(f,{onClick:x,children:(0,t.jsx)(i.default,{})}):null]})]}),m?(0,t.jsx)(u,{children:g}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let o=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function l(e){return function({size:t,color:i,style:l}){return(0,n.jsx)(o,{size:t,color:i,$src:e,style:l})}}let{PUBLIC_PATH:r}=t.default.env,a={Docs:l(`${r}/icon/docs.svg`),FrameSource:l(`${r}/icon/frame-source.svg`),EvShadow:l(`${r}/icon/ev-shadow.svg`),DocumentSearch:l(`${r}/icon/document-search.svg`),WandShine:l(`${r}/icon/wand-shine.svg`)};e.s(["default",0,a],98273)},30190,e=>{"use strict";var t=e.i(7242);let n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let o=new URLSearchParams({serviceType:t,serviceWorkerId:e});return`/service-worker/detail/${i}?${o.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams({serviceType:e});return`/service-worker?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},35718,e=>{"use strict";var t=e.i(9735);let n=(0,e.i(38797).default)((0,t.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"}),"ErrorOutlined");var i=e.i(38803),o=e.i(62659);let l=i.default.div.withConfig({componentId:"zh_mobile_web__sc-50154dbf-0"})`
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
`,s=i.default.p.withConfig({componentId:"zh_mobile_web__sc-50154dbf-3"})`
  font-size: 15px;
  color: #6b7280;
`,c=(0,i.default)(o.default.Button.Outlined).withConfig({componentId:"zh_mobile_web__sc-50154dbf-4"})`
  height: 44px;
  padding: 0 20px;
  font-size: 15px;
`;e.s(["default",0,function({title:e="목록을 불러오지 못했어요.",onRetry:i,isRetrying:o=!1}){return(0,t.jsxs)(l,{role:"alert",children:[(0,t.jsx)(n,{sx:{fontSize:24}}),(0,t.jsxs)(r,{children:[(0,t.jsx)(a,{children:e}),(0,t.jsx)(s,{children:"인터넷 연결을 확인한 뒤 다시 불러와 주세요."})]}),(0,t.jsx)(c,{type:"button",disabled:o,onClick:i,children:o?"불러오는 중…":"다시 불러오기"})]})}],35718)},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let l=e.r(44066)._(e.r(76268)),r=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,i=e.protocol||"",o=e.pathname||"",a=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(l.urlQueryToSearchParams(s)));let f=e.search||s&&`?${s}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||r.test(i))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),f&&"?"!==f[0]&&(f="?"+f),o=o.replace(/[?#]/g,encodeURIComponent),f=f.replace("#","%23"),`${i}${c}${o}${f}${a}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return l}});let i=e.r(65576),o=e.r(18849);function l(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return m},useLinkStatus:function(){return b}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let l=e.r(44066),r=e.r(9735),a=l._(e.r(7744)),s=e.r(32090),c=e.r(38792),f=e.r(45856),d=e.r(65576),u=e.r(57334);e.r(44182);let h=e.r(91075),p=e.r(63430),x=e.r(87342),g=e.r(97456);function m(t){var n,i;let o,l,m,[b,w]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,a.useRef)(null),{href:y,as:j,children:C,prefetch:z=null,passHref:I,replace:S,shallow:k,scroll:T,onClick:L,onMouseEnter:P,onTouchStart:$,legacyBehavior:O=!1,onNavigate:E,transitionTypes:R,ref:A,unstable_dynamicOnHover:M,...U}=t;o=C,O&&("string"==typeof o||"number"==typeof o)&&(o=(0,r.jsx)("a",{children:o}));let D=a.default.useContext(c.AppRouterContext),N=!1!==z,B=!1!==z?null===(i=z)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,F="string"==typeof(n=j||y)?n:(0,s.formatUrl)(n);if(O){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});l=a.default.Children.only(o)}let H=O?l&&"object"==typeof l&&l.ref:A,K=a.default.useCallback(e=>(null!==D&&(v.current=(0,p.mountLinkInstance)(e,F,D,B,N,w)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[N,F,D,B,w]),W={ref:(0,f.useMergedRef)(K,H),onClick(t){O||"function"!=typeof L||L(t),O&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),!D||t.defaultPrevented||function(t,n,i,o,l,r,s){if("u">typeof window){let c,{nodeName:f}=t.currentTarget;if("A"===f.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),r){let e=!1;if(r({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(86228);a.default.startTransition(()=>{d(n,o?"replace":"push",!1===l?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,i.current,s)})}}(t,F,v,S,T,E,R)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),D&&N&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){O||"function"!=typeof $||$(e),O&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),D&&N&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,d.isAbsoluteUrl)(F)?W.href=F:O&&!I&&("a"!==l.type||"href"in l.props)||(W.href=(0,u.addBasePath)(F)),m=O?a.default.cloneElement(l,W):(0,r.jsx)("a",{...U,...W,children:o}),(0,r.jsx)(_.Provider,{value:b,children:m})}e.r(79103);let _=(0,a.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,a.useContext)(_);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},74483,39313,19565,38223,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)([(0,n.jsx)("circle",{cx:"9",cy:"13",r:"1.25"},"0"),(0,n.jsx)("path",{d:"M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49C21.53 15.44 22 13.78 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39m-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88m-8.77-.4 2.19 2.19C2.78 7.6 2 9.71 2 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31zm14.77 14.77C15.35 19.44 13.74 20 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14 1.39-.52 2.63-1.35 3.64-2.39zM6.23 8.06c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13z"},"1")],"FaceRetouchingOffOutlined");e.s(["default",0,i],74483);let o=(0,t.default)((0,n.jsx)("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"}),"NorthEast");e.s(["default",0,o],39313);let l=(0,t.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");e.s(["default",0,l],19565);var r=e.i(38803),a=e.i(43174);let s=r.default.span.withConfig({componentId:"zh_mobile_web__sc-1f5820a4-0"})`
  display: inline-flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;
`,c=r.default.button.withConfig({componentId:"zh_mobile_web__sc-1f5820a4-1"})`
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
`;e.s(["default",0,function(){return(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{type:"button",onClick:()=>a.default.auth.openPasswordChange(),children:"비밀번호 변경"}),(0,n.jsx)(c,{type:"button",onClick:()=>void a.default.auth.logout(),children:"로그아웃"})]})}],38223)},57125,e=>{"use strict";var t=e.i(9735),n=e.i(88552),i=e.i(74483),o=e.i(39313),l=e.i(19565);e.i(3159);var r=e.i(46907),a=e.i(70682),s=e.i(33261),c=e.i(7744),f=e.i(38803),d=e.i(38223),u=e.i(98273),h=e.i(35718),p=e.i(81911),x=e.i(62659),g=e.i(7242),m=e.i(43174),_=e.i(30190);let b=(0,r.observer)(function(){let e=m.default.serviceWorker.list,i=(0,s.usePathname)(),r=(0,s.useRouter)(),a=(0,s.useSearchParams)(),f=function(e){return null!==e&&Object.hasOwn(g.default,e)?e:null}(a.get("serviceType")),b=e.serviceType,L=null!==f&&e.activeServiceList.some(e=>e.type===f);return(0,c.useEffect)(()=>{if(!i)return;if(L&&f!==b)return void e.setServiceType(f);if(L||null===b)return;let t=new URLSearchParams(a.toString());if(t.get("serviceType")===b)return;t.set("serviceType",b);let n=t.toString(),o=""===n?i:`${i}?${n}`;r.replace(o)},[L,i,r,a,b,f,e]),(0,t.jsxs)(w,{children:[(0,t.jsx)(p.default,{title:"제공인력 목록",leftAction:(0,t.jsx)(d.default,{}),titleAction:(0,t.jsxs)(v,{href:null===b?"/client":`/client?serviceType=${b}`,children:[(0,t.jsx)("span",{children:"이용자 보기"}),(0,t.jsx)(o.default,{sx:{fontSize:14}})]})}),(0,t.jsx)(x.default.Tabbed.Tabs,{children:e.activeServiceList.map(e=>(0,t.jsxs)(x.default.Tabbed.Tab,{$selected:b===e.type,onClick:()=>(e=>{if(e===b)return;let t=new URLSearchParams(a.toString());t.set("serviceType",e),r.replace(`${i}?${t.toString()}`)})(e.type),children:[g.default[e.type].label," 서비스"]},e.type))}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(C,{placeholder:"제공인력명을 검색하세요.",value:e.searchText,onChange:t=>e.setSearchText(t.target.value)}),(0,t.jsx)(l.default,{sx:{fontSize:16}})]}),null!==b&&e.isError?(0,t.jsx)(h.default,{title:"제공인력 목록을 불러오지 못했어요.",onRetry:e.retry}):null===b||e.shouldShowEmpty?(0,t.jsx)(N,{}):(0,t.jsx)(z,{children:e.items.map(e=>{let i=e.phoneNumber??e.contact??"-",o=[e.address,e.addressDetail].filter(e=>!!e).join(" ");return(0,t.jsxs)(I,{children:[(0,t.jsx)(S,{children:(0,t.jsxs)(k,{children:[(0,t.jsx)(T,{children:e.name}),e.hasNeedUpdateDocument?(0,t.jsx)(P,{children:"업데이트 필요"}):null,e.hasNeedMatchingDocument?(0,t.jsx)($,{children:"서류 대조"}):null,e.hasLinkedCompletedDocument?(0,t.jsxs)(O,{children:[(0,t.jsx)(u.default.WandShine,{size:14}),"연동 완료"]}):null]})}),(0,t.jsxs)(E,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(A,{children:"전화번호"}),(0,t.jsx)(M,{}),(0,t.jsx)(U,{children:i})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(A,{children:"주소"}),(0,t.jsx)(M,{}),(0,t.jsx)(U,{$lightgray:!0,children:""===o?"-":o})]})]}),(0,t.jsxs)(D,{href:(0,_.buildDetailHref)(e.id,b),children:[(0,t.jsx)("span",{children:"상세보기"}),(0,t.jsx)(n.default,{sx:{fontSize:16}})]})]},e.id)})})]})]})}),w=f.default.main.withConfig({componentId:"zh_mobile_web__sc-32e463f5-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,v=(0,f.default)(a.default).withConfig({componentId:"zh_mobile_web__sc-32e463f5-1"})`
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
`,y=f.default.section.withConfig({componentId:"zh_mobile_web__sc-32e463f5-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;

  background: #f8fafc;
`,j=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-3"})`
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
`,C=f.default.input.withConfig({componentId:"zh_mobile_web__sc-32e463f5-4"})`
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
`,z=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-5"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`,I=f.default.article.withConfig({componentId:"zh_mobile_web__sc-32e463f5-6"})`
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
`,S=f.default.header.withConfig({componentId:"zh_mobile_web__sc-32e463f5-7"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,k=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,T=f.default.h3.withConfig({componentId:"zh_mobile_web__sc-32e463f5-9"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,L=f.css`
  flex-shrink: 0;

  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  text-align: center;
`,P=f.default.p.withConfig({componentId:"zh_mobile_web__sc-32e463f5-10"})`
  ${L}
  background: #ff6900;
`,$=f.default.p.withConfig({componentId:"zh_mobile_web__sc-32e463f5-11"})`
  ${L}
  background: #ff6900;
`,O=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-12"})`
  ${L}
  display: inline-flex;
  gap: 4px;
  align-items: center;
  background: #ff6900;
`,E=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-13"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,R=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-14"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  min-width: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #0a0a0a;
`,A=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-15"})`
  flex-shrink: 0;
  width: 52px;
`,M=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-16"})`
  flex-shrink: 0;
  align-self: stretch;
  width: 1px;
  background: #e5e7eb;
`,U=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-17"})`
  min-width: 0;
  color: ${({$lightgray:e})=>!0===e?"#45464e":"inherit"};
`,D=(0,f.default)(a.default).withConfig({componentId:"zh_mobile_web__sc-32e463f5-18"})`
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

  background: transparent;

  &:visited {
    color: #4f39f6;
  }
`;function N(){return(0,t.jsxs)(B,{children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)(F,{children:[(0,t.jsx)(H,{children:"검색 결과가 없습니다."}),(0,t.jsx)(K,{children:"이름을 다시 확인해주세요."})]})]})}let B=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-19"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;

  color: #494f53;
`,F=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-20"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,H=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-21"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,K=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-22"})`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;e.s(["default",0,b])}]);