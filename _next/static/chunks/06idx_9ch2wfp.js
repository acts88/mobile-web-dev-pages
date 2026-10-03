(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33261,(e,t,n)=>{t.exports=e.r(40806)},7242,e=>{"use strict";e.s(["default",0,{MEAL:{label:"식사",code:"500901"},NUTRITION:{label:"영양",code:"500401"},DISABILITY_ACTIVITY_SUPPORT:{label:"장애인 활동지원",code:"HWG001"}}])},88552,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.s(["default",0,i])},21839,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,i])},81911,e=>{"use strict";var t=e.i(9735),n=e.i(21839),i=e.i(88552),o=e.i(38803);let r=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-0"})`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  align-self: stretch;

  padding: 16px;
`,l=o.default.div.withConfig({componentId:"zh_mobile_web__sc-903ad80c-1"})`
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
`;e.s(["default",0,function({title:e,titleAction:o,leftAction:h,onBack:p,onForward:g,subtitle:x}){let m=null!=x&&""!==x;return(0,t.jsxs)(r,{children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(a,{children:p?(0,t.jsx)(f,{onClick:p,children:(0,t.jsx)(n.default,{})}):null}),void 0===p&&void 0!==h?(0,t.jsx)(s,{children:h}):null,(0,t.jsx)(d,{children:e}),(0,t.jsxs)(c,{children:[o,g?(0,t.jsx)(f,{onClick:g,children:(0,t.jsx)(i.default,{})}):null]})]}),m?(0,t.jsx)(u,{children:x}):null]})}])},98273,e=>{"use strict";var t=e.i(25521),n=e.i(9735),i=e.i(38803);let o=i.default.div.withConfig({componentId:"zh_mobile_web__sc-ef8aca21-0"})`
  flex-shrink: 0;

  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;

  background-color: ${({color:e})=>e??"currentColor"};

  mask-image: url(${({$src:e})=>e});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
`;function r(e){return function({size:t,color:i,style:r}){return(0,n.jsx)(o,{size:t,color:i,$src:e,style:r})}}let{PUBLIC_PATH:l}=t.default.env,a={Docs:r(`${l}/icon/docs.svg`),FrameSource:r(`${l}/icon/frame-source.svg`),EvShadow:r(`${l}/icon/ev-shadow.svg`),DocumentSearch:r(`${l}/icon/document-search.svg`),WandShine:r(`${l}/icon/wand-shine.svg`)};e.s(["default",0,a],98273)},30190,e=>{"use strict";var t=e.i(7242);let n="document-management";e.s(["BASIC_INFO_PATH",0,"basic-info","DOCUMENT_MANAGEMENT_PATH",0,n,"buildDetailHref",0,function(e,t,i=n){let o=new URLSearchParams({serviceType:t,serviceWorkerId:e});return`/service-worker/detail/${i}?${o.toString()}`},"buildListHref",0,function(e){let t=new URLSearchParams({serviceType:e});return`/service-worker?${t.toString()}`},"getServiceType",0,function(e){return null!==e&&Object.hasOwn(t.default,e)?e:"MEAL"}])},32090,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return a},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(44066)._(e.r(76268)),l=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,i=e.protocol||"",o=e.pathname||"",a=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(r.urlQueryToSearchParams(s)));let f=e.search||s&&`?${s}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||l.test(i))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),f&&"?"!==f[0]&&(f="?"+f),o=o.replace(/[?#]/g,encodeURIComponent),f=f.replace("#","%23"),`${i}${c}${o}${f}${a}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return a(e)}},87342,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return r}});let i=e.r(65576),o=e.r(18849);function r(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},79103,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70682,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return m},useLinkStatus:function(){return b}};for(var o in i)Object.defineProperty(n,o,{enumerable:!0,get:i[o]});let r=e.r(44066),l=e.r(9735),a=r._(e.r(7744)),s=e.r(32090),c=e.r(38792),f=e.r(45856),d=e.r(65576),u=e.r(57334);e.r(44182);let h=e.r(91075),p=e.r(63430),g=e.r(87342),x=e.r(97456);function m(t){var n,i;let o,r,m,[b,w]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,a.useRef)(null),{href:y,as:j,children:C,prefetch:z=null,passHref:I,replace:S,shallow:k,scroll:T,onClick:L,onMouseEnter:P,onTouchStart:$,legacyBehavior:O=!1,onNavigate:A,transitionTypes:E,ref:R,unstable_dynamicOnHover:M,...U}=t;o=C,O&&("string"==typeof o||"number"==typeof o)&&(o=(0,l.jsx)("a",{children:o}));let D=a.default.useContext(c.AppRouterContext),N=!1!==z,B=!1!==z?null===(i=z)||"auto"===i?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,F="string"==typeof(n=j||y)?n:(0,s.formatUrl)(n);if(O){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=a.default.Children.only(o)}let H=O?r&&"object"==typeof r&&r.ref:R,K=a.default.useCallback(e=>(null!==D&&(v.current=(0,p.mountLinkInstance)(e,F,D,B,N,w)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[N,F,D,B,w]),W={ref:(0,f.useMergedRef)(K,H),onClick(t){O||"function"!=typeof L||L(t),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!D||t.defaultPrevented||function(t,n,i,o,r,l,s){if("u">typeof window){let c,{nodeName:f}=t.currentTarget;if("A"===f.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(86228);a.default.startTransition(()=>{d(n,o?"replace":"push",!1===r?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,i.current,s)})}}(t,F,v,S,T,A,E)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),D&&N&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){O||"function"!=typeof $||$(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),D&&N&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,d.isAbsoluteUrl)(F)?W.href=F:O&&!I&&("a"!==r.type||"href"in r.props)||(W.href=(0,u.addBasePath)(F)),m=O?a.default.cloneElement(r,W):(0,l.jsx)("a",{...U,...W,children:o}),(0,l.jsx)(_.Provider,{value:b,children:m})}e.r(79103);let _=(0,a.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,a.useContext)(_);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},74483,39313,19565,38223,e=>{"use strict";var t=e.i(38797),n=e.i(9735);let i=(0,t.default)([(0,n.jsx)("circle",{cx:"9",cy:"13",r:"1.25"},"0"),(0,n.jsx)("path",{d:"M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49C21.53 15.44 22 13.78 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39m-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88m-8.77-.4 2.19 2.19C2.78 7.6 2 9.71 2 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31zm14.77 14.77C15.35 19.44 13.74 20 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14 1.39-.52 2.63-1.35 3.64-2.39zM6.23 8.06c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13z"},"1")],"FaceRetouchingOffOutlined");e.s(["default",0,i],74483);let o=(0,t.default)((0,n.jsx)("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"}),"NorthEast");e.s(["default",0,o],39313);let r=(0,t.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");e.s(["default",0,r],19565);var l=e.i(38803),a=e.i(43174);let s=l.default.span.withConfig({componentId:"zh_mobile_web__sc-1f5820a4-0"})`
  display: inline-flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: center;
`,c=l.default.button.withConfig({componentId:"zh_mobile_web__sc-1f5820a4-1"})`
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
`;e.s(["default",0,function(){return(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{type:"button",onClick:()=>a.default.auth.openPasswordChange(),children:"비밀번호 변경"}),(0,n.jsx)(c,{type:"button",onClick:()=>void a.default.auth.logout(),children:"로그아웃"})]})}],38223)},57125,e=>{"use strict";var t=e.i(9735),n=e.i(88552),i=e.i(74483),o=e.i(39313),r=e.i(19565);e.i(3159);var l=e.i(46907),a=e.i(70682),s=e.i(33261),c=e.i(7744),f=e.i(38803),d=e.i(38223),u=e.i(98273),h=e.i(81911),p=e.i(62659),g=e.i(7242),x=e.i(43174),m=e.i(30190);let _=(0,l.observer)(function(){let e=x.default.serviceWorker.list,i=(0,s.usePathname)(),l=(0,s.useRouter)(),a=(0,s.useSearchParams)(),f=function(e){return null!==e&&Object.hasOwn(g.default,e)?e:null}(a.get("serviceType")),_=e.serviceType,T=null!==f&&e.activeServiceList.some(e=>e.type===f);return(0,c.useEffect)(()=>{if(!i)return;if(T&&f!==_)return void e.setServiceType(f);if(T||null===_)return;let t=new URLSearchParams(a.toString());if(t.get("serviceType")===_)return;t.set("serviceType",_);let n=t.toString(),o=""===n?i:`${i}?${n}`;l.replace(o)},[T,i,l,a,_,f,e]),(0,t.jsxs)(b,{children:[(0,t.jsx)(h.default,{title:"제공인력 목록",leftAction:(0,t.jsx)(d.default,{}),titleAction:(0,t.jsxs)(w,{href:null===_?"/client":`/client?serviceType=${_}`,children:[(0,t.jsx)("span",{children:"이용자 보기"}),(0,t.jsx)(o.default,{sx:{fontSize:14}})]})}),(0,t.jsx)(p.default.Tabbed.Tabs,{children:e.activeServiceList.map(e=>(0,t.jsxs)(p.default.Tabbed.Tab,{$selected:_===e.type,onClick:()=>(e=>{if(e===_)return;let t=new URLSearchParams(a.toString());t.set("serviceType",e),l.replace(`${i}?${t.toString()}`)})(e.type),children:[g.default[e.type].label," 서비스"]},e.type))}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(j,{placeholder:"제공인력명을 검색하세요.",value:e.searchText,onChange:t=>e.setSearchText(t.target.value)}),(0,t.jsx)(r.default,{sx:{fontSize:16}})]}),null===_||e.shouldShowEmpty?(0,t.jsx)(D,{}):(0,t.jsx)(C,{children:e.items.map(e=>{let i=e.phoneNumber??e.contact??"-",o=[e.address,e.addressDetail].filter(e=>!!e).join(" ");return(0,t.jsxs)(z,{children:[(0,t.jsx)(I,{children:(0,t.jsxs)(S,{children:[(0,t.jsx)(k,{children:e.name}),e.hasNeedUpdateDocument?(0,t.jsx)(L,{children:"업데이트 필요"}):null,e.hasNeedMatchingDocument?(0,t.jsx)(P,{children:"서류 대조"}):null,e.hasLinkedCompletedDocument?(0,t.jsxs)($,{children:[(0,t.jsx)(u.default.WandShine,{size:14}),"연동 완료"]}):null]})}),(0,t.jsxs)(O,{children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(E,{children:"전화번호"}),(0,t.jsx)(R,{}),(0,t.jsx)(M,{children:i})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(E,{children:"주소"}),(0,t.jsx)(R,{}),(0,t.jsx)(M,{$lightgray:!0,children:""===o?"-":o})]})]}),(0,t.jsxs)(U,{href:(0,m.buildDetailHref)(e.id,_),children:[(0,t.jsx)("span",{children:"상세보기"}),(0,t.jsx)(n.default,{sx:{fontSize:16}})]})]},e.id)})})]})]})}),b=f.default.main.withConfig({componentId:"zh_mobile_web__sc-32e463f5-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,w=(0,f.default)(a.default).withConfig({componentId:"zh_mobile_web__sc-32e463f5-1"})`
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
`,v=f.default.section.withConfig({componentId:"zh_mobile_web__sc-32e463f5-2"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;

  padding: 16px;

  background: #f8fafc;
`,y=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-3"})`
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
`,j=f.default.input.withConfig({componentId:"zh_mobile_web__sc-32e463f5-4"})`
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
`,C=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-5"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`,z=f.default.article.withConfig({componentId:"zh_mobile_web__sc-32e463f5-6"})`
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
`,I=f.default.header.withConfig({componentId:"zh_mobile_web__sc-32e463f5-7"})`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,S=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;

  min-width: 0;
`,k=f.default.h3.withConfig({componentId:"zh_mobile_web__sc-32e463f5-9"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #0a0a0a;
`,T=f.css`
  flex-shrink: 0;

  padding: 2px 8px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  text-align: center;
`,L=f.default.p.withConfig({componentId:"zh_mobile_web__sc-32e463f5-10"})`
  ${T}
  background: #ff6900;
`,P=f.default.p.withConfig({componentId:"zh_mobile_web__sc-32e463f5-11"})`
  ${T}
  background: #ff6900;
`,$=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-12"})`
  ${T}
  display: inline-flex;
  gap: 4px;
  align-items: center;
  background: #ff6900;
`,O=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-13"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,A=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-14"})`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  min-width: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #0a0a0a;
`,E=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-15"})`
  flex-shrink: 0;
  width: 52px;
`,R=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-16"})`
  flex-shrink: 0;
  align-self: stretch;
  width: 1px;
  background: #e5e7eb;
`,M=f.default.span.withConfig({componentId:"zh_mobile_web__sc-32e463f5-17"})`
  min-width: 0;
  color: ${({$lightgray:e})=>!0===e?"#45464e":"inherit"};
`,U=(0,f.default)(a.default).withConfig({componentId:"zh_mobile_web__sc-32e463f5-18"})`
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
`;function D(){return(0,t.jsxs)(N,{children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)(B,{children:[(0,t.jsx)(F,{children:"검색 결과가 없습니다."}),(0,t.jsx)(H,{children:"이름을 다시 확인해주세요."})]})]})}let N=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-19"})`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;

  color: #494f53;
`,B=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-20"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,F=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-21"})`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`,H=f.default.div.withConfig({componentId:"zh_mobile_web__sc-32e463f5-22"})`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;e.s(["default",0,_])}]);