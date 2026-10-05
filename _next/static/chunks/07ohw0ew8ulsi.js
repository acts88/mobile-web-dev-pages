(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44182,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},65576,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return w},NormalizeError:function(){return x},PageNotFoundError:function(){return _},SP:function(){return h},ST:function(){return b},WEB_VITALS:function(){return i},execOnce:function(){return l},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>a.test(e);function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let h="u">typeof performance,b=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class x extends Error{}class _ extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},76268,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return a}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});function i(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,l(e));else t.set(n,l(r));return t}function s(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,r]of n.entries())e.append(t,r)}return e}},33261,(e,t,n)=>{t.exports=e.r(40806)},25521,e=>{"use strict";e.i(35910);let t={IMAGE:[".jpg",".jpeg",".png"],AUDIO:[".mp3",".wav",".m4a",".aac"],DOCUMENT:[".hwp",".hwpx",".doc",".docx",".txt",".pdf",".xls",".xlsx"]},n={MAX_FILE_SIZE:0x6400000,MAX_FILE_SIZE_TEXT:"100MB",FILE_EXTENSION_WHITELIST_BY_GROUP:t,FILE_EXTENSION_WHITELIST:Object.values(t).flat()};e.s(["default",0,{env:{IS_DEV:!1,PUBLIC_PATH:"/mobile-web-dev-pages",BACKEND_URL:"https://api.acts88.site"},file:n}],25521)},85586,e=>{"use strict";let{IS_DEV:t}=e.i(25521).default.env,n={INFO:"#d3e3fd",WARN:"#fef6d5",ERROR:"#fcebeb"},r=1,o=null,i=e=>{let i="INFO"===e?console.info:"WARN"===e?console.warn:console.error;return({publicLog:l,devLogs:a=[],groupKey:s})=>{let d=void 0!==l||0!==a.length;t&&d&&(o&&clearTimeout(o),o=setTimeout(()=>{o=null,console.log("%c= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =","background-color: gainsboro; padding: 2px;")},1e3));let c=!1;if(t&&d){let t="string"==typeof a[0]?a[0]:void 0!==s?s:"log";console.group(`%c[Logger #${r++}] ${t}`,`background-color: ${n[e]}; padding: 2px;`),c=!0}if(void 0!==l&&i(l),t&&a.length>1)for(let e=1;e<a.length;e++)i(a[e]);t&&c&&console.groupEnd()}},l={info:i("INFO"),warn:i("WARN"),error:i("ERROR")};e.s(["default",0,{logger:l}],85586)},62659,77264,e=>{"use strict";var t=e.i(38803);let n=t.default.button.withConfig({componentId:"zh_mobile_web__sc-6e84832e-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #2264e8;
  border-radius: 4px;

  color: #fff;

  background: #2264e8;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #f9fafb;
  }

  &:not(:disabled):hover {
    background: #1d56c8;
  }

  &:not(:disabled):active {
    background: #1746a2;
  }
`,r=t.default.button.withConfig({componentId:"zh_mobile_web__sc-b7046250-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ff6900;
  border-radius: 4px;

  color: #fff;

  background: #ff6900;

  &:hover {
    border: 1px solid #ea580c;
    background: #ea580c;
  }

  &:active {
    border: 1px solid #c2410c;
    background: #c2410c;
  }
`,o=t.default.button.withConfig({componentId:"zh_mobile_web__sc-ef0268b1-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #fff;

  background: #4f39f6;

  ${({$processing:e})=>!0===e&&t.css`
      pointer-events: none;
      cursor: not-allowed;
      border-color: #6c4cff;
      background: #6c4cff;
    `}

  &:disabled {
    cursor: not-allowed;
    border: 1px solid #d1d5db;
    color: #9ca3af;
    background: #d1d5db;
  }

  ${({$processing:e})=>!0!==e&&t.css`
      &:not(:disabled):hover {
        background: #4328d8;
      }

      &:not(:disabled):active {
        background: #3822b8;
      }
    `}
`,i=t.default.button.withConfig({componentId:"zh_mobile_web__sc-a74db8c6-0"})`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #4f39f6;
  border-radius: 4px;

  color: #4f39f6;

  background: #fff;

  &:disabled {
    cursor: not-allowed;

    ${({$status:e})=>void 0===e&&t.css`
        border: 1px solid #d1d5db;
        color: #9ca3af;
        background: #f9fafb;
      `}
  }

  ${({$status:e})=>"processing"===e&&t.css`
      & {
        pointer-events: none;
        cursor: not-allowed;

        border: 1px solid #4f39f6;

        color: #4f39f6;

        background: #f6f3ff;
      }
    `}

  ${({$status:e})=>"success"===e&&t.css`
      & {
        pointer-events: none;
        cursor: not-allowed;

        border: 1px solid #00b979;

        color: #00a66a;

        background: #f3fff8;
      }
    `}

	${({$status:e})=>void 0===e&&t.css`
      &:not(:disabled):hover {
        border-color: #4328d8;
        color: #4328d8;
        background: #f6f3ff;
      }

      &:not(:disabled):active {
        border-color: #3822b8;
        color: #3822b8;
        background: #efeaff;
      }
    `}
`;e.s(["default",0,i],77264);let l=t.default.input.attrs({type:"checkbox"}).withConfig({componentId:"zh_mobile_web__sc-ad5f4fe-0"})`
  margin: 0;
`;var a=e.i(9735);let s=t.default.input.withConfig({componentId:"zh_mobile_web__sc-8ddaf0af-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,d=t.default.input.withConfig({componentId:"zh_mobile_web__sc-b197aeeb-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,c=t.default.input.withConfig({componentId:"zh_mobile_web__sc-e5171c59-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,u=t.default.input.attrs({type:"radio"}).withConfig({componentId:"zh_mobile_web__sc-70f7c952-0"})`
  margin: 0;
`,f=t.default.select.withConfig({componentId:"zh_mobile_web__sc-a2b4c7f5-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;
  appearance: none;
  background: #fff;

  &:focus-visible {
    outline: none;
  }
`,p=t.default.input.attrs({type:"text"}).withConfig({componentId:"zh_mobile_web__sc-68834895-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  color: #0a0a0a;

  appearance: none;
  background: #fff;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border-color: #a998ff;
    background: #fbfcff;
  }

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }

  ${e=>!0===e.$autoFilled&&t.css`
      color: #4f39f6;
      background: #f4f2ff;

      &:hover {
        border-color: #a998ff;
        background: #e7e1ff;
      }

      &:focus {
        border-color: #5635ff;
        color: #0a0a0a;
        background: #fff;
      }
    `}

  &:read-only {
    pointer-events: none;
    border: 1px solid #d1d5db;
    color: #0a0a0a;
    background: #f9fafb;
  }
`,g=t.default.textarea.withConfig({componentId:"zh_mobile_web__sc-254a5c92-0"})`
  border: 1px solid #e5e9ef;
  border-radius: 4px;

  color: #0a0a0a;

  appearance: none;
  background: #fff;

  &::placeholder {
    color: ${e=>e.$placeholderColor??"#9ca3af"};
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border-color: #a998ff;
    background: #fbfcff;
  }

  &:focus {
    border-color: #5635ff;
    background: #fbfcff;
  }

  ${e=>!0===e.$autoFilled&&t.css`
      color: #4f39f6;
      background: #f4f2ff;

      &:hover {
        border-color: #a998ff;
        background: #e7e1ff;
      }

      &:focus {
        border-color: #5635ff;
        color: #0a0a0a;
        background: #fff;
      }
    `}

  &:read-only {
    pointer-events: none;
    border: 1px solid #d1d5db;
    color: #0a0a0a;
    background: #f9fafb;
  }

  ${e=>!0===e.$autoFilled&&t.css`
      &:read-only {
        color: #4f39f6;
        background: #f4f2ff;
      }
    `}
`,h=t.default.button.withConfig({componentId:"zh_mobile_web__sc-2b9f99e9-0"})`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  min-width: 80px;
  height: 56px;
  padding: 0 8px;
  border-bottom: ${({$selected:e})=>!0===e?"4px solid #063A74":"2px solid #b1b8be"};

  font-size: 16px;
  font-weight: 700;
  line-height: 150%; /* 24px */
  color: ${({$selected:e})=>!0===e?"#052B57":"#464c53"};
  text-align: center;
  letter-spacing: 0;

  background: rgb(255 255 255 / 0%);

  &:disabled {
    color: #8a949e;
  }
`,b=t.default.div.withConfig({componentId:"zh_mobile_web__sc-b758e8bd-0"})`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`;e.s(["default",0,{Button:{Filled:{Primary:o,Blue:n,Orange:r},Outlined:i},Tabbed:{Tab:h,Tabs:b},Input:{Text:p,Money:function({value:e,onChange:t,...n}){return(0,a.jsx)(d,{...n,type:"text",value:e,onChange:e=>t?.(e.target.value)})},Date:function({value:e,onChange:t,...n}){return(0,a.jsx)(s,{...n,type:"text",value:e,onChange:e=>t?.(e.target.value)})},Select:f,Radio:u,Check:l,MultiDate:function({value:e,onChange:t,...n}){return(0,a.jsx)(c,{...n,type:"text",value:e,onChange:e=>t?.(e.target.value)})},Textarea:g}}],62659)},33310,4585,e=>{"use strict";var t=e.i(9735),n=e.i(38803);let r={path:"/privacy",title:"개인정보처리방침",effectiveDate:"",body:""},o=[{path:"/terms",title:"이용약관",effectiveDate:"",body:""},r],i=e=>""!==e.body.trim();e.s(["PRIVACY_POLICY",0,r,"isLegalDocumentPublished",0,i,"legalDocumentOf",0,e=>o.find(t=>t.path===e)??null,"publishedLegalDocuments",0,(e=o)=>e.filter(i)],4585);let l=n.default.main.withConfig({componentId:"zh_mobile_web__sc-2416ad55-0"})`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  min-height: ${({$standalone:e})=>e?"100vh":"auto"};
  padding: ${({$standalone:e})=>e?"24px 16px":"16px"};

  background-color: ${({$standalone:e})=>e?"#f9fafb":"transparent"};
`,a=n.default.article.withConfig({componentId:"zh_mobile_web__sc-2416ad55-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  max-width: 880px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;

  background: #fff;
`,s=n.default.h1.withConfig({componentId:"zh_mobile_web__sc-2416ad55-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #1c1d22;
`,d=n.default.p.withConfig({componentId:"zh_mobile_web__sc-2416ad55-3"})`
  font-size: 14px;
  color: #6e7079;
`,c=n.default.div.withConfig({componentId:"zh_mobile_web__sc-2416ad55-4"})`
  font-size: 15px;
  line-height: 1.7;
  color: #1c1d22;
  word-break: keep-all;
  white-space: pre-wrap;
`,u=n.default.a.withConfig({componentId:"zh_mobile_web__sc-2416ad55-5"})`
  align-self: flex-start;
  font-size: 14px;
  color: #4f39f6;

  &:hover {
    text-decoration: underline;
  }
`;e.s(["default",0,function({document:e,standalone:n=!1}){let r=i(e);return(0,t.jsx)(l,{$standalone:n,children:(0,t.jsxs)(a,{children:[(0,t.jsx)(s,{children:e.title}),""!==e.effectiveDate&&(0,t.jsx)(d,{children:`시행일 ${e.effectiveDate}`}),r?(0,t.jsx)(c,{children:e.body}):(0,t.jsx)(d,{children:"아직 준비 중이에요."}),n&&(0,t.jsx)(u,{href:"/",children:"로그인 화면으로"})]})})}],33310)},45856,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(7744);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=i(e,r)),t&&(o.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},96736,(e,t,n)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}){let a=n?40*n:e,s=o?40*o:t,d=a&&s?`viewBox='0 0 ${a} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},64864,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return l}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},14871,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(44182);let r=e.r(47037),o=e.r(96736),i=e.r(64864),l=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:n=!1,priority:c=!1,preload:u=!1,loading:f,className:p,quality:g,width:h,height:b,fill:m=!1,style:x,overrideSrc:_,onLoad:w,onLoadingComplete:y,placeholder:v="empty",blurDataURL:j,fetchPriority:C,decoding:z="async",layout:O,objectFit:k,objectPosition:I,lazyBoundary:E,lazyRoot:P,...S},$){var R;let T,L,M,{imgConf:D,showAltText:N,blurComplete:A,defaultLoader:F}=$,B=D||i.imageConfigDefault;if("allSizes"in B)T=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),n=B.qualities?.sort((e,t)=>e-t);T={...B,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let U=S.loader||F;delete S.loader,delete S.srcSet;let W="__next_img_default"in U;if(W){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(O){"fill"===O&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(x={...x,...e});let n={responsive:"100vw",fill:"100vw"}[O];n&&!t&&(t=n)}let q="",V=s(h),X=s(b);if((R=e)&&"object"==typeof R&&(a(R)||void 0!==R.src)){let t=a(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(L=t.blurWidth,M=t.blurHeight,j=j||t.blurDataURL,q=t.src,!m)if(V||X){if(V&&!X){let e=V/t.width;X=Math.round(t.height*e)}else if(!V&&X){let e=X/t.height;V=Math.round(t.width*e)}}else V=t.width,X=t.height}let H=!c&&!u&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:q)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,H=!1),T.unoptimized&&(n=!0),W&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let G=s(g),Y=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:I}:{},N?{}:{color:"transparent"},x),K=A||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:V,heightInt:X,blurWidth:L,blurHeight:M,blurDataURL:j||"",objectFit:Y.objectFit})}")`:`url("${v}")`,Q=l.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,Z=K?{backgroundSize:Q,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},J=function({config:e,src:t,unoptimized:n,width:o,quality:i,sizes:l,loader:a}){if(n){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(e){let n=t.indexOf("?");if(-1!==n){let r=new URLSearchParams(t.slice(n+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,n)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},n,r){if(r){let n=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=n.exec(r);)o.push(parseInt(e[2]));if(o.length){let n=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*n),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,l),c=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map((n,r)=>`${a({config:e,src:t,quality:i,width:n})} ${"w"===d?n:r+1}${d}`).join(", "),src:a({config:e,src:t,quality:i,width:s[c]})}}({config:T,src:e,unoptimized:n,width:V,quality:G,sizes:t,loader:U}),ee=H?"lazy":f;return{props:{...S,loading:ee,fetchPriority:C,width:V,height:X,decoding:z,className:p,style:{...Y,...Z},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:n,preload:u||c,placeholder:v,fill:m}}}},22148,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});let r=e.r(7744),o="u"<typeof window,i=o?()=>{}:r.useLayoutEffect,l=o?()=>{}:r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return o&&(t?.mountedInstances?.add(e.children),a()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},31779,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return h},defaultHead:function(){return u}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(81258),l=e.r(44066),a=e.r(9735),s=l._(e.r(7744)),d=i._(e.r(22148)),c=e.r(8514);function u(){return[(0,a.jsx)("meta",{charSet:"utf-8"},"charset"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(44182);let p=["name","httpEquiv","charSet","itemProp"];function g(e){let t,n,r,o;return e.reduce(f,[]).reverse().concat(u().reverse()).filter((t=new Set,n=new Set,r=new Set,o={},e=>{let i=!0,l=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){l=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=p.length;t<n;t++){let n=p[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=o[n]||new Set;("name"!==n||!l)&&r.has(t)?i=!1:(r.add(t),o[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return s.default.cloneElement(e,{key:n})})}let h=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,a.jsx)(d.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},8552,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=e.r(81258)._(e.r(7744)),o=e.r(64864),i=r.default.createContext(o.imageConfigDefault)},89297,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(81258)._(e.r(7744)).default.createContext(null)},32927,(e,t,n)=>{"use strict";function r(e,t){let n=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,t.qualities[0]):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return r}})},28956,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return l}});let r=e.r(32927),o=e.r(47037);function i({config:e,src:t,width:n,quality:l}){let a=(0,o.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let n=new URLSearchParams(t.slice(e+1)),r=n.get("dpl");if(r){a=r,n.delete("dpl");let o=n.toString();t=t.slice(0,e)+(o?"?"+o:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,r.findClosestQuality)(l,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${s}${t.startsWith("/")&&a?`&dpl=${a}`:""}`}i.__next_img_default=!0;let l=i},69683,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return w}});let r=e.r(81258),o=e.r(44066),i=e.r(9735),l=o._(e.r(7744)),a=r._(e.r(20276)),s=r._(e.r(31779)),d=e.r(14871),c=e.r(64864),u=e.r(8552);e.r(44182);let f=e.r(89297),p=r._(e.r(28956)),g=e.r(45856),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/mobile-web-dev-pages/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function b(e,t,n,r,o,i,l){let a=e?.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),n?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function m(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,l.forwardRef)(({src:e,srcSet:t,sizes:n,height:r,width:o,decoding:a,className:s,style:d,fetchPriority:c,placeholder:u,loading:f,unoptimized:p,fill:h,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:y,sizesInput:v,onLoad:j,onError:C,...z},O)=>{let k=(0,l.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&b(e,u,x,_,w,p,v))},[e,u,x,_,w,C,p,v]),I=(0,g.useMergedRef)(O,k);return(0,i.jsx)("img",{...z,...m(c),loading:f,width:o,height:r,decoding:a,"data-nimg":h?"fill":"1",className:s,style:d,sizes:n,srcSet:t,src:e,ref:I,onLoad:e=>{b(e.currentTarget,u,x,_,w,p,v)},onError:e=>{y(!0),"empty"!==u&&w(!0),C&&C(e)}})});function _({isAppRouter:e,imgAttributes:t}){let n={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...m(t.fetchPriority)};return e&&a.default.preload?(a.default.preload(t.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...n},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,l.forwardRef)((e,t)=>{let n=(0,l.useContext)(f.RouterContext),r=(0,l.useContext)(u.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=h||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n,qualities:o,localPatterns:"u"<typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:a,onLoadingComplete:s}=e,g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let b=(0,l.useRef)(s);(0,l.useEffect)(()=>{b.current=s},[s]);let[m,w]=(0,l.useState)(!1),[y,v]=(0,l.useState)(!1),{props:j,meta:C}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:m,showAltText:y});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{...j,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:v,sizesInput:e.sizes,ref:t}),C.preload?(0,i.jsx)(_,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},31083,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return c},getImageProps:function(){return d}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let i=e.r(81258),l=e.r(14871),a=e.r(69683),s=i._(e.r(28956));function d(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/mobile-web-dev-pages/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=a.Image},7665,(e,t,n)=>{t.exports=e.r(31083)},35305,(e,t,n)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61227,(e,t,n)=>{"use strict";var r=e.r(35305);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function e(e,t,n,o,i,l){if(l!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},4153,(e,t,n)=>{t.exports=e.r(61227)()},48271,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),r=e.i(33261),o=e.i(7744),i=e.i(33310),l=e.i(4585),a=e.i(43174),s=e.i(7665),d=e.i(4153);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return o.default.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),o.default.createElement("circle",{cx:"12",cy:"12",r:"3"}))});function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},u.displayName="Eye";var p=(0,o.forwardRef)(function(e,t){var n=e.color,r=e.size,i=void 0===r?24:r,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return o.default.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.default.createElement("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),o.default.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});p.propTypes={color:d.default.string,size:d.default.oneOfType([d.default.string,d.default.number])},p.displayName="EyeOff";var g=e.i(38803);function h(){let e=(0,l.publishedLegalDocuments)();return 0===e.length?null:(0,t.jsx)(b,{children:e.map((e,n)=>(0,t.jsxs)(o.Fragment,{children:[n>0&&(0,t.jsx)(m,{"aria-hidden":"true",children:"|"}),(0,t.jsx)(x,{href:e.path,target:"_blank",rel:"noreferrer",$emphasis:e.path===l.PRIVACY_POLICY.path,children:e.title})]},e.path))})}let b=g.default.div.withConfig({componentId:"zh_mobile_web__sc-4cdda4ea-0"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,m=g.default.span.withConfig({componentId:"zh_mobile_web__sc-4cdda4ea-1"})`
  font-size: 12px;
  color: #d0d5dd;
`,x=g.default.a.withConfig({componentId:"zh_mobile_web__sc-4cdda4ea-2"})`
  font-size: 13px;
  font-weight: ${({$emphasis:e})=>e?700:400};
  color: #6e7079;

  &:hover {
    text-decoration: underline;
  }
`,_=function(){let[e,n]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=e=>{"prompt"in e&&"function"==typeof e.prompt&&(e.preventDefault(),n(e))};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}},[]);let r=async()=>{null!==e&&(await e.prompt(),await e.userChoice,n(null))};return null===e?null:(0,t.jsx)(w,{type:"button",onClick:()=>void r(),children:"앱 설치"})},w=g.default.button.withConfig({componentId:"zh_mobile_web__sc-2a17cab3-0"})`
  position: fixed;
  z-index: 1000;
  right: 16px;
  bottom: 16px;

  padding: 10px 14px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
  color: #fff;

  background-color: #4f39f6;
  box-shadow: 0 6px 20px rgb(79 57 246 / 35%);
`;var y=e.i(62659),v=e.i(25521);let j=(0,n.observer)(function(){let{organizationCode:e,setOrganizationCode:n,rememberOrganizationCode:r,setRememberOrganizationCode:i,rememberLoginId:l,setRememberLoginId:d,loginId:c,setLoginId:f,isNeedLoginId:g,loginIdErrMsg:b,password:m,setPassword:x,isShowPwd:w,setIsShowPwd:y,pwdErrMsg:j,isSubmitting:W,login:q}=a.default.auth.login,[V,X]=(0,o.useState)(!1),[H,G]=(0,o.useState)(null),Y=(0,o.useRef)(null),K=(0,o.useRef)(null);return(0,o.useEffect)(()=>{Y.current?.focus()},[]),(0,t.jsxs)(C,{children:[(0,t.jsx)(s.default,{src:`${v.default.env.PUBLIC_PATH}/icon/logo-signature.svg`,width:1,height:1,style:{height:32,width:"auto"},loading:"eager",alt:"Logo"}),(0,t.jsxs)(z,{children:[(0,t.jsxs)(O,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(I,{children:"기관코드"}),(0,t.jsx)(E,{$hasValue:e.length>0,children:(0,t.jsx)(P,{value:e,onChange:e=>n(e.target.value),placeholder:"예: zh12",autoCapitalize:"none"})}),(0,t.jsxs)(T,{children:[(0,t.jsx)("input",{type:"checkbox",checked:r,onChange:e=>i(e.target.checked)}),"기관코드 저장"]})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(I,{$error:g||null!==b,children:"아이디"}),(0,t.jsx)(E,{$error:g||null!==b,$hasValue:c.length>0,children:(0,t.jsx)(P,{ref:Y,value:c,onChange:e=>f(e.target.value),placeholder:"발급받은 아이디(숫자)",inputMode:"text"})}),null!==b?(0,t.jsx)($,{children:b}):null,(0,t.jsxs)(T,{children:[(0,t.jsx)("input",{type:"checkbox",checked:l,onChange:e=>d(e.target.checked)}),"아이디 저장"]})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(I,{$error:null!==j,children:"비밀번호"}),(0,t.jsxs)(E,{$error:null!==j,$hasValue:m.length>0,children:[(0,t.jsx)(P,{ref:K,type:w?"text":"password",value:m,onChange:e=>x(e.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),onKeyDown:e=>{"Enter"===e.key&&q()},placeholder:"영문, 숫자, 특수문자"}),(0,t.jsx)(S,{type:"button",$active:V,$error:null!==j,onClick:()=>y(!w),onFocus:()=>X(!0),onBlur:()=>X(!1),children:w?(0,t.jsx)(u,{size:24}):(0,t.jsx)(p,{size:24})})]}),null!==j?(0,t.jsx)($,{children:j}):null]})]}),(0,t.jsx)(R,{type:"button",onClick:()=>void q(),disabled:0===c.length||0===m.length||W,children:"로그인하기"}),(0,t.jsxs)(L,{children:[(0,t.jsx)(M,{type:"button",onClick:()=>G("아이디 확인"),children:"아이디 확인"}),(0,t.jsx)(D,{"aria-hidden":"true",children:"|"}),(0,t.jsx)(M,{type:"button",onClick:()=>G("비밀번호 초기화"),children:"비밀번호 초기화 요청"})]}),(0,t.jsx)(h,{})]}),null!==H?(0,t.jsx)(N,{onClick:()=>G(null),children:(0,t.jsxs)(A,{role:"dialog","aria-label":H,onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(F,{children:H}),(0,t.jsxs)(B,{children:["계정은 자이언허브가 발급해요. ",H,"은(는) 기관명과 담당자 이름을 적어 자이언허브 담당자에게 요청해 주세요. 본인 확인 뒤 처리해 드려요."]}),(0,t.jsx)(B,{children:"기관코드는 zh로 시작하는 기관 번호예요(예: zh12)."}),(0,t.jsx)(U,{type:"button",onClick:()=>G(null),children:"닫기"})]})}):null,(0,t.jsx)(_,{})]})}),C=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-0"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-self: stretch;

  padding: 40px 24px;
`,z=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,O=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-2"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,k=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-3"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  align-self: stretch;
`,I=g.default.span.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-4"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px; /* 125% */
  color: #111827;
`,E=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-5"})`
  display: flex;
  gap: 16px;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 55px;
  padding: 8px 16px;
  border: 1px solid
    ${({$error:e,$hasValue:t})=>!0===e?"#ff003e":!0===t?"#45464e":"#ced0d9"};
  border-radius: 8px;

  &:focus-within {
    border-color: #4f39f6;
  }

  &:focus-within ${I} {
    color: #4f39f6;
  }
`,P=g.default.input.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-6"})`
  flex: 1;

  min-width: 0;
  border: none;

  font-size: 20px;
  font-weight: 400;
  color: #1c1d22;

  background: transparent;
  outline: none;

  /* Hide native password reveal controls (e.g., Edge/IE) */
  &::-ms-reveal {
    display: none;
  }

  &::placeholder {
    color: #ced0d9;
  }
`,S=g.default.button.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-7"})`
  cursor: pointer;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;

  color: ${({$active:e,$error:t})=>!0===e?"#4f39f6":!0===t?"#ff3b6b":"#ced0d9"};

  background: none;
`,$=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-8"})`
  font-size: 12px;
  color: #ff3b6b;
`,R=(0,g.default)(y.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-9eaa5006-9"})`
  display: flex;
  gap: 4px;
  align-items: center;
  align-self: stretch;

  height: 56px;
  padding: 18px 16px;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
`,T=g.default.label.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-10"})`
  cursor: pointer;

  display: flex;
  gap: 6px;
  align-items: center;

  margin-top: 6px;

  font-size: 14px;
  color: #464c53;
`,L=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-11"})`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`,M=g.default.button.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-12"})`
  cursor: pointer;

  padding: 4px;
  border: none;

  font-size: 14px;
  color: #464c53;

  background: none;
`,D=g.default.span.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-13"})`
  font-size: 12px;
  color: #ced0d9;
`,N=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-14"})`
  position: fixed;
  z-index: 1300;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgb(10 10 10 / 48%);
`,A=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-15"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: 360px;
  padding: 20px;
  border-radius: 12px;

  background: #fff;
`,F=g.default.h2.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-16"})`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`,B=g.default.p.withConfig({componentId:"zh_mobile_web__sc-9eaa5006-17"})`
  font-size: 14px;
  line-height: 20px;
  color: #464c53;
`,U=(0,g.default)(y.default.Button.Filled.Primary).withConfig({componentId:"zh_mobile_web__sc-9eaa5006-18"})`
  align-self: stretch;
  height: 44px;
`,W=/^[\x21-\x7E]+$/,q="공백 없이 영문·숫자·특수문자 8~64자",V=(0,n.observer)(function(){let{isPasswordChangeRequired:e,passwordStatus:n,closePasswordChange:r,changePassword:i,logout:l}=a.default.auth,[s,d]=(0,o.useState)(""),[c,f]=(0,o.useState)(""),[g,h]=(0,o.useState)(""),[b,m]=(0,o.useState)(!1),[x,_]=(0,o.useState)(!1),[w,v]=(0,o.useState)(null),j=0===c.length?null:c.length<8||c.length>64||!W.test(c)?`비밀번호는 ${q}로 입력해 주세요.`:null,C=g.length>0&&g!==c?"새 비밀번호와 같게 입력해 주세요.":null,z=c.length>0&&c===s?"지금 쓰는 비밀번호와 다른 비밀번호를 입력해 주세요.":null,O=!x&&s.length>0&&c.length>0&&g===c&&null===j&&null===z,k=e?n?.isTemporary===!0?"임시 비밀번호의 사용 기간이 지났습니다. 새 비밀번호로 바꿔야 계속 이용할 수 있습니다.":"비밀번호를 바꾼 지 1년이 지났습니다. 새 비밀번호로 바꿔야 계속 이용할 수 있습니다.":null,I=async()=>{if(!O)return;_(!0),v(null);let e=await i(s,c);_(!1),null!==e&&v(e.message||"비밀번호를 바꾸지 못했습니다. 잠시 후 다시 시도해 주세요.")},E=b?"text":"password";return(0,t.jsx)(X,{$opaque:e,children:(0,t.jsxs)(H,{id:"password-change-panel",children:[(0,t.jsx)(G,{children:"비밀번호 변경"}),null!==k&&(0,t.jsx)(Y,{children:k}),(0,t.jsxs)(K,{children:[(0,t.jsx)(Q,{htmlFor:"password-change-current",children:"현재 비밀번호"}),(0,t.jsx)(Z,{id:"password-change-current",type:E,autoComplete:"current-password",value:s,onChange:e=>d(e.target.value)})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(Q,{htmlFor:"password-change-new",children:"새 비밀번호"}),(0,t.jsx)(Z,{id:"password-change-new",type:E,autoComplete:"new-password",maxLength:64,value:c,onChange:e=>f(e.target.value)}),(0,t.jsx)(J,{$error:null!==j||null!==z,children:j??z??`${q}, 직전 비밀번호는 쓸 수 없습니다.`})]}),(0,t.jsxs)(K,{children:[(0,t.jsx)(Q,{htmlFor:"password-change-confirm",children:"새 비밀번호 확인"}),(0,t.jsx)(Z,{id:"password-change-confirm",type:E,autoComplete:"new-password",maxLength:64,value:g,onChange:e=>h(e.target.value),onKeyDown:e=>{"Enter"===e.key&&I()}}),null!==C&&(0,t.jsx)(J,{$error:!0,children:C})]}),(0,t.jsxs)(ee,{type:"button",onClick:()=>m(!b),children:[b?(0,t.jsx)(p,{size:16}):(0,t.jsx)(u,{size:16}),b?"비밀번호 숨기기":"비밀번호 보기"]}),null!==w&&(0,t.jsx)(et,{children:w}),(0,t.jsxs)(en,{children:[e?(0,t.jsx)(y.default.Button.Outlined,{type:"button",onClick:()=>void l(),children:"로그아웃"}):(0,t.jsx)(y.default.Button.Outlined,{type:"button",disabled:x,onClick:r,children:"취소"}),(0,t.jsx)(y.default.Button.Filled.Primary,{type:"button",disabled:!O,onClick:()=>void I(),children:x?"변경 중...":"변경하기"})]})]})})}),X=g.default.div.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({$opaque:e})=>e?"#f9fafb":"rgb(10 10 10 / 48%)"};
`,H=g.default.section.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-1"})`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 420px;
  max-width: calc(100vw - 32px);
  max-height: calc(100dvh - 32px);
  padding: 24px 20px 20px;
  border-radius: 12px;

  background: #fff;
  box-shadow: 0 12px 32px rgb(16 24 40 / 12%);
`,G=g.default.h2.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-2"})`
  font-size: 20px;
  font-weight: 700;
  color: #101828;
`,Y=g.default.p.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-3"})`
  padding: 12px 14px;
  border-radius: 8px;

  font-size: 14px;
  line-height: 20px;
  color: #b54708;

  background: #fffaeb;
`,K=g.default.div.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-4"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Q=g.default.label.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-5"})`
  font-size: 13px;
  font-weight: 600;
  color: #344054;
`,Z=g.default.input.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-6"})`
  height: 44px;
  padding: 0 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 16px;

  &:focus {
    border-color: #4f39f6;
    outline: none;
  }
`,J=g.default.p.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-7"})`
  font-size: 12px;
  color: ${({$error:e})=>!0===e?"#f04438":"#667085"};
`,ee=g.default.button.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-8"})`
  cursor: pointer;

  display: inline-flex;
  gap: 6px;
  align-items: center;
  align-self: flex-start;

  padding: 0;
  border: none;

  font-size: 13px;
  color: #475467;

  background: none;
`,et=g.default.p.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-9"})`
  font-size: 13px;
  color: #f04438;
`,en=g.default.div.withConfig({componentId:"zh_mobile_web__sc-cb48ea47-10"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,er=(0,n.observer)(function(){let{passwordStatus:e,openPasswordChange:n,dismissTemporaryPasswordPrompt:r}=a.default.auth,o=e?.temporaryPasswordExpiresAt??null,i=null===o?null:(e=>{let t=new Date(e);if(Number.isNaN(t.getTime()))return null;let n=e=>String(e).padStart(2,"0");return`${t.getMonth()+1}월 ${t.getDate()}일 ${n(t.getHours())}:${n(t.getMinutes())}`})(o);return(0,t.jsx)(eo,{children:(0,t.jsxs)(ei,{children:[(0,t.jsx)(el,{children:"임시 비밀번호로 로그인했습니다"}),(0,t.jsxs)(ea,{children:["안전을 위해 본인만 아는 새 비밀번호로 바꿔 주세요.",null!==i&&` ${i}이 지나면 지금 비밀번호로는 로그인할 수 없습니다.`]}),(0,t.jsxs)(es,{children:[(0,t.jsx)(y.default.Button.Outlined,{type:"button",onClick:r,children:"다음에 변경"}),(0,t.jsx)(y.default.Button.Filled.Primary,{type:"button",onClick:n,children:"지금 변경"})]})]})})}),eo=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9965c079-0"})`
  position: fixed;
  z-index: 1400;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(10 10 10 / 48%);
`,ei=g.default.section.withConfig({componentId:"zh_mobile_web__sc-9965c079-1"})`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 400px;
  max-width: calc(100vw - 32px);
  padding: 24px;
  border-radius: 12px;

  background: #fff;
`,el=g.default.h2.withConfig({componentId:"zh_mobile_web__sc-9965c079-2"})`
  font-size: 18px;
  font-weight: 700;
  color: #101828;
`,ea=g.default.p.withConfig({componentId:"zh_mobile_web__sc-9965c079-3"})`
  font-size: 14px;
  line-height: 22px;
  color: #475467;
`,es=g.default.div.withConfig({componentId:"zh_mobile_web__sc-9965c079-4"})`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`,ed=(0,n.observer)(function({children:e}){let{isAuthed:n,isPasswordChangeRequired:s,isPasswordChangeVisible:d,isTemporaryPasswordPromptVisible:c}=a.default.auth,[u,f]=(0,o.useState)(!0),p=(0,l.legalDocumentOf)((0,r.usePathname)());return((0,o.useEffect)(()=>{let e=!0;return(async()=>{await a.default.auth.restoreSession(),e&&f(!1)})(),()=>{e=!1}},[]),null===p||n)?u?null:n?s?(0,t.jsx)(V,{}):(0,t.jsxs)(t.Fragment,{children:[e,d&&(0,t.jsx)(V,{}),c&&(0,t.jsx)(er,{})]}):(0,t.jsx)(j,{}):(0,t.jsx)(i.default,{document:p,standalone:!0})});e.s(["default",0,ed],48271)},57738,e=>{"use strict";var t=e.i(9735);e.i(3159);var n=e.i(46907),r=e.i(7744),o=e.i(4153);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=(0,r.forwardRef)(function(e,t){var n=e.color,o=e.size,l=void 0===o?24:o,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["color","size"]);return r.default.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});l.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number])},l.displayName="X";var a=e.i(38803),s=e.i(43174);let d=(0,n.observer)(function(){let{items:e,remove:n}=s.default.ui.layout.toast;return 0===e.length?null:(0,t.jsx)(c,{children:e.map(e=>(0,t.jsxs)(u,{$type:e.type,role:"status","aria-live":"polite",children:[(0,t.jsx)(f,{children:e.message}),(0,t.jsx)(p,{type:"button",onClick:()=>n(e.id),"aria-label":"토스트 닫기",children:(0,t.jsx)(l,{size:14})})]},e.id))})}),c=a.default.div.withConfig({componentId:"zh_mobile_web__sc-7dcaecab-0"})`
  pointer-events: none;

  position: fixed;
  z-index: 1200;
  top: 84px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: min(420px, calc(100vw - 32px));
`,u=a.default.div.withConfig({componentId:"zh_mobile_web__sc-7dcaecab-1"})`
  pointer-events: auto;

  display: flex;
  gap: 10px;
  align-items: flex-start;

  padding: 10px 12px;
  border: 1px solid
    ${({$type:e})=>"success"===e?"#86efac":"error"===e?"#fca5a5":"#93c5fd"};
  border-radius: 8px;

  color: #0f172a;

  background: ${({$type:e})=>"success"===e?"#f0fdf4":"error"===e?"#fef2f2":"#eff6ff"};
  box-shadow: 0 6px 16px rgb(15 23 42 / 12%);
`,f=a.default.p.withConfig({componentId:"zh_mobile_web__sc-7dcaecab-2"})`
  flex: 1;

  margin: 0;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  overflow-wrap: anywhere;
`,p=a.default.button.withConfig({componentId:"zh_mobile_web__sc-7dcaecab-3"})`
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  margin: -2px -2px 0 0;
  border: 0;
  border-radius: 4px;

  color: #475569;

  background: transparent;

  &:hover {
    color: #0f172a;
    background: rgb(15 23 42 / 6%);
  }
`;e.s(["default",0,d],57738)},41873,e=>{"use strict";var t=e.i(7744),n=e.i(25521);e.s(["default",0,function(){return(0,t.useEffect)(()=>{if(!("serviceWorker"in navigator))return;let e=`${n.default.env.PUBLIC_PATH}/sw.js`,t=!1,r=()=>{t||(t=!0,window.location.reload())},o=e=>{e.update()},i=()=>{"visible"===document.visibilityState&&navigator.serviceWorker.getRegistration(e).then(e=>{void 0!==e&&o(e)})},l=()=>{navigator.serviceWorker.getRegistration(e).then(e=>{void 0!==e&&o(e)})};return navigator.serviceWorker.addEventListener("controllerchange",r),navigator.serviceWorker.register(e).then(e=>{o(e)}),document.addEventListener("visibilitychange",i),window.addEventListener("pageshow",l),()=>{navigator.serviceWorker.removeEventListener("controllerchange",r),document.removeEventListener("visibilitychange",i),window.removeEventListener("pageshow",l)}},[]),null}])}]);