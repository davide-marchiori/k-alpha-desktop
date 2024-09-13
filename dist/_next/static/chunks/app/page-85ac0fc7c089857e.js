(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8435:function(e,t,a){Promise.resolve().then(a.bind(a,7024))},7024:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return T}});var r=a(7437),s=a(2265);let n=[{name:"data",value:[]},{name:"checkedState",value:""},{name:"CISize",value:"Size of CI"},{name:"bootIterations",value:"Bootstrap Iterations"}],l=(0,s.createContext)();function i(e){let{children:t}=e,[a,i]=(0,s.useReducer)(o,n);return(0,r.jsx)(l.Provider,{value:[a,i],children:t})}function o(e,t){switch(t.type){case"setData":return e.map(e=>"data"===e.name?{...e,value:t.value}:e);case"setCheckedState":return e.map(e=>"checkedState"===e.name?{...e,value:t.value}:e);case"setCISize":return e.map(e=>"CISize"===e.name?{...e,value:t.value}:e);case"setBootIterations":return e.map(e=>"bootIterations"===e.name?{...e,value:t.value}:e);case"resetSessionParams":return n;default:throw Error("Unknown action: "+t.type)}}let c=e=>e.flat().filter(e=>""!==e).reduce(function(e,t){return e<t?e:t}),d=e=>e.flat().filter(e=>""!==e).reduce(function(e,t){return e>t?e:t});function m(){return(0,r.jsxs)("fieldset",{className:"flex border border-solid border-gray-300 rounded-md p-3 m-3",children:[(0,r.jsx)("legend",{className:"text-base",children:(0,r.jsx)("b",{children:"Confidence Interval (CI)"})}),(0,r.jsxs)("div",{className:"m-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5",children:[(0,r.jsx)("div",{children:(0,r.jsx)(C,{})}),(0,r.jsx)("div",{children:(0,r.jsx)(N,{})})]})]})}let u=[{name:"nominal",label:"Nominal",description:"Description of nominal data."},{name:"ordinal",label:"Ordinal",description:"Description of ordinal data."},{name:"interval",label:"Interval",description:"Description of interval data."},{name:"ratio",label:"Ratio",description:"Description of ratio data."}];function h(){let[,e]=(0,s.useContext)(l),t=t=>{e({type:"setCheckedState",value:t.target.value})};return(0,r.jsxs)("fieldset",{className:"border border-solid border-gray-300 rounded-md p-3 m-3",children:[(0,r.jsx)("legend",{className:"text-base",children:(0,r.jsx)("b",{children:"Type of Data"})}),(0,r.jsx)("div",{className:"m-3 grid grid-cols-1 gap-5 sm:grid-cols-4 sm:gap-5 lg:grid-cols-6",children:u.map((e,a)=>(0,r.jsxs)("div",{className:"relative flex items-start",children:[(0,r.jsx)("div",{className:"flex h-6 items-center",children:(0,r.jsx)("input",{id:e.name,value:e.name,"aria-describedby":"".concat(e.name,"-description"),name:"options",type:"radio",defaultChecked:"small"===e.name,className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",onChange:e=>t(e)})}),(0,r.jsx)("div",{className:"ml-3 text-base leading-6",children:(0,r.jsx)("label",{htmlFor:e.name,className:"font-medium text-gray-900",children:e.label})})]},a))})]})}var x=a(2781),p=a(8355),f=a.n(p);function g(){let[e,t]=(0,s.useContext)(l),a=Object.fromEntries(e.map(e=>Object.values(e))),[n,i]=(0,s.useState)(""),[o,m]=(0,s.useState)(null),[u,h]=(0,s.useState)(!1),[p,g]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(!n){g(!1);return}g(!0);let e=setTimeout(()=>g(!1),5e3);return()=>clearTimeout(e)},[n]);let b=e=>e.every(t=>t.length===e[0].length)?e[0].length<2?"Error: There must be at least 2 raters":e.length<2?"Error: There must be at least 2 coded items":null:"Error: Items must be evaluated by the same number of raters; check for missing codes, or redundant commas",j=e=>{let t=e.flat(),a=e=>!!("NA"===e||"number"==typeof e&&Number.isInteger(e)&&e>=0),r=t.filter(e=>!a(e));return r.length>0?r.some(e=>"number"==typeof e&&!Number.isInteger(e))?"Error: The file contains decimal values":r.some(e=>"number"==typeof e&&e<0)?"Error: The file contains negative values":r.some(e=>null===e)?"Error: Found consecutive or start/end-of-line commas - check missing codes policy in the 'Usage Notes'":r.some(e=>"string"==typeof e&&/(Na|na|nA)/.test(e))?"Error: Use 'NA' for missing codes (case sensitive)":"Error: Invalid characters found. Only non-negative integers and 'NA' are allowed.":null},v=(0,s.useCallback)((e,t)=>{i("");let a=e[0]||t[0];a?"text/csv"===a.type||a.name.toLowerCase().endsWith(".csv")?(m(a),h(!0)):(h(!1),i("Error: Only CSV files are accepted")):(h(!1),i("Error: No file was dropped")),t.forEach(e=>{e.errors.forEach(e=>{"file-too-large"===e.code&&i("Error: ".concat(e.message))})})},[]),y=(0,s.useCallback)(e=>f().parse(e,{skipEmptyLines:!0,header:!1,dynamicTyping:!0,delimitersToGuess:[",",";"]}).data,[]),N=(0,s.useCallback)(e=>{let a=b(e)||j(e);if(a){i(a),h(!1);return}let r=e.map(e=>e.map(e=>"NA"===e?"":e));c(r)===d(r)?(i("Error: The minimum and maximum values must be different"),h(!1)):t({type:"setData",value:r})},[t]);(0,s.useEffect)(()=>{if(!o)return;let e=new FileReader;e.onload=async e=>{let{target:t}=e;N(y(t.result))},e.readAsText(o)},[o,y,N]);let{getRootProps:I,getInputProps:C}=(0,x.uI)({multiple:!1,onDrop:v,accept:{"text/csv":[".csv"]},maxSize:512e3});return(0,r.jsxs)("fieldset",{className:"border border-solid border-gray-300 rounded-md p-3 m-3",children:[(0,r.jsx)("legend",{className:"text-base",children:(0,r.jsx)("b",{children:"Upload File"})}),(0,r.jsxs)("div",{className:"flex flex-col text-center text-gray-900 m-3",children:[(0,r.jsx)("div",{...C()}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"mb-6 rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",...I(),children:"Upload file"})}),(0,r.jsx)("div",{children:"Only *.csv will be accepted"}),(0,r.jsx)("div",{children:"Check the 'Usage Notes' on how to prepare your datafile"}),(0,r.jsx)("div",{}),u&&a.data&&a.data[0]?(0,r.jsxs)("div",{className:"m-3",children:[(0,r.jsx)("p",{style:{color:"green"},children:"File uploaded successfully"}),(0,r.jsxs)("p",{children:["File Name: ",(0,r.jsx)("b",{children:o.name})]}),(0,r.jsxs)("p",{children:["File Size: ",(0,r.jsxs)("b",{children:[o.size," bytes"]})]}),(0,r.jsxs)("p",{children:["Last Modified: ",(0,r.jsx)("b",{children:new Date(o.lastModified).toDateString()})]}),(0,r.jsxs)("p",{children:["Number of Raters: ",(0,r.jsx)("b",{children:a.data[0].length})]}),(0,r.jsxs)("p",{children:["Number of Rated Items: ",(0,r.jsx)("b",{children:a.data.length})]}),(0,r.jsxs)("p",{children:["Missing Values (NAs):"," ",(0,r.jsx)("b",{children:a.data.reduce((e,t)=>e+t.reduce((e,t)=>e+(""===t?1:0),0),0)})," ","out of ",(0,r.jsx)("b",{children:a.data[0].length*a.data.length})]})]}):p&&(0,r.jsx)("span",{style:{color:"red"},children:n})]})]})}var b=a(3983),j=a(5573),v=a(8140);function y(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function N(){let[e,t]=(0,s.useContext)(l),a=Object.fromEntries(e.map(e=>Object.values(e))),n=e=>{t({type:"setBootIterations",value:e})};return(0,r.jsxs)(b.v,{as:"div",className:"relative inline-block text-left",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(b.v.Button,{className:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100",children:[a.bootIterations,(0,r.jsx)(v.Z,{className:"-mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})]})}),(0,r.jsx)(j.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(b.v.Items,{className:"absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,r.jsx)("div",{className:"px-4 py-3",children:(0,r.jsx)("p",{className:"text-sm font-medium text-gray-900",children:"Number of Bootstrap Iterations"})}),(0,r.jsxs)("div",{className:"py-1",children:[(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:y(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("200 Iterations"),children:"200 Iterations"})}}),(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:y(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("400 Iterations"),children:"400 Iterations"})}}),(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:y(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("600 Iterations"),children:"600 Iterations"})}}),(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:y(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("1000 Iterations"),children:"1000 Iterations"})}})]})]})})]})}function I(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function C(){let[e,t]=(0,s.useContext)(l),a=Object.fromEntries(e.map(e=>Object.values(e))),n=e=>{t({type:"setCISize",value:e})};return(0,r.jsxs)(b.v,{as:"div",className:"relative inline-block text-left",children:[(0,r.jsx)("div",{children:(0,r.jsxs)(b.v.Button,{className:"inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100",children:[a.CISize,(0,r.jsx)(v.Z,{className:"-mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"})]})}),(0,r.jsx)(j.u,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(b.v.Items,{className:"absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,r.jsx)("div",{className:"px-4 py-3",children:(0,r.jsx)("p",{className:"text-sm font-medium text-gray-900",children:"Size of the Confidence Interval"})}),(0,r.jsxs)("div",{className:"py-1",children:[(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("90% CI"),children:"90% Confidence Interval"})}}),(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("95% CI"),children:"95% Confidence Interval"})}}),(0,r.jsx)(b.v.Item,{children:e=>{let{active:t}=e;return(0,r.jsx)("a",{href:"#",className:I(t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),onClick:()=>n("99% CI"),children:"99% Confidence Interval"})}})]})]})})]})}var k=a(9872);function w(){let[e]=(0,s.useContext)(l),t=Object.fromEntries(e.map(e=>Object.values(e))),[a,i]=(0,s.useState)({}),o=(0,s.useCallback)((e,t,a)=>e.map(e=>{let r=Array.from({length:a-t+2},()=>0);return e.forEach(e=>{e>=t&&e<=a&&""!==e?r[e-t]++:""===e&&r[r.length-1]++}),r}).filter(e=>e.slice(0,e.length-1).reduce((e,t)=>e+t,0)>1),[t.data]),m=(0,s.useCallback)((e,t)=>{let a,r;let s=e.reduce((e,t)=>e.map((e,a)=>e+t[a])),n=e.map(e=>e.reduce((e,t)=>e+t,0)),l=e.flat().reduce((e,t)=>e+t,0);switch(t){case"nominal":return a=e.map(e=>e.map((t,a)=>t*e.slice(a+1).reduce((e,t,r)=>e+t*(a!==a+r+1?1:0),0)).reduce((e,t)=>e+t,0)).map((e,t)=>e/(n[t]-1)),r=s.map((e,t)=>e*s.slice(t+1).reduce((e,a,r)=>e+a*(t!==t+r+1?1:0),0)),1-(l-1)*a.reduce((e,t)=>e+t,0)/r.reduce((e,t)=>e+t,0);case"ordinal":return a=e.map(e=>e.map((t,a)=>t*e.slice(a+1).reduce((e,t,r)=>e+t*Math.pow(s.slice(a,a+r+2).reduce((e,t)=>e+t,0)-(s[a]+s[a+r+1])/2,2),0)).reduce((e,t)=>e+t,0)).map((e,t)=>e/(n[t]-1)),r=s.map((e,t)=>e*s.slice(t+1).reduce((e,a,r)=>e+a*Math.pow(s.slice(t,t+r+2).reduce((e,t)=>e+t,0)-(s[t]+s[t+r+1])/2,2),0)),1-(l-1)*a.reduce((e,t)=>e+t,0)/r.reduce((e,t)=>e+t,0);case"interval":return a=e.map(e=>e.map((t,a)=>t*e.slice(a+1).reduce((e,t,a)=>e+t*Math.pow(a+1,2),0)).reduce((e,t)=>e+t,0)).map((e,t)=>e/(n[t]-1)),r=s.map((e,t)=>e*s.slice(t+1).reduce((e,t,a)=>e+t*Math.pow(a+1,2),0)),1-(l-1)*a.reduce((e,t)=>e+t,0)/r.reduce((e,t)=>e+t,0);case"ratio":return a=e.map(e=>e.map((t,a)=>t*e.slice(a+1).reduce((e,t,r)=>e+t*Math.pow((r+1)/(a+a+r+3),2),0)).reduce((e,t)=>e+t,0)).map((e,t)=>e/(n[t]-1)),r=s.map((e,t)=>e*s.slice(t+1).reduce((e,a,r)=>e+a*Math.pow((r+1)/(t+t+r+3),2),0)),1-(l-1)*a.reduce((e,t)=>e+t,0)/r.reduce((e,t)=>e+t,0)}},[t.data]),u=e=>{let a=c(e),r=d(e),s=o(e,a,r),n=s.map(e=>e.slice(0,-1)),l=m(n,t.checkedState);return[s.length,l.toFixed(3),n.flat().reduce((e,t)=>e+t,0)]},h=(e,t)=>{let a=[...e],r=0;switch(t){case"90% CI":r=.1;break;case"95% CI":r=.05;break;case"99% CI":r=.01}return[(0,k.ZP)(a.sort((e,t)=>e-t),r/2).toFixed(3),(0,k.ZP)(a.sort((e,t)=>e-t),1-r/2).toFixed(3)]};(0,s.useEffect)(()=>{if(t.data.length>0&&""!==t.checkedState&&(i({minRate:c(t.data),maxRate:d(t.data),cases:u(t.data)[0],k_alpha:u(t.data)[1],pairableRates:u(t.data)[2],upper:"",lower:""}),t.CISize!==n.filter(e=>"CISize"===e.name)[0].value&&t.bootIterations!==n.filter(e=>"bootIterations"===e.name)[0].value)){let[e,a]=h(("200 Iterations"===t.bootIterations?p(t.data,200):"400 Iterations"===t.bootIterations?p(t.data,400):"600 Iterations"===t.bootIterations?p(t.data,600):p(t.data,1e3)).map(e=>u(e)[1]),t.CISize);i({minRate:c(t.data),maxRate:d(t.data),cases:u(t.data)[0],k_alpha:u(t.data)[1],pairableRates:u(t.data)[2],lower:e,upper:a})}},[t.data,t.checkedState,t.CISize,t.bootIterations]);let x=e=>{let t=[],a=o(e,c(e),d(e)).length;for(let r=0;r<a;r++)t.push(e[Math.floor(Math.random()*e.length)]);return t},p=(e,t)=>{let a=[];for(let r=0;r<t;r++)a.push(x(e));return a};return(0,r.jsxs)("fieldset",{className:"border border-solid border-gray-300 rounded-md p-3 m-3",children:[(0,r.jsx)("legend",{className:"text-base",children:(0,r.jsx)("b",{children:"Result"})}),0===t.data.length&&(0,r.jsx)("div",{className:"m-3 text-red-600",children:"→ Upload a Data File"}),""===t.checkedState&&(0,r.jsx)("div",{className:"m-3 text-red-600",children:"→ Select the Type of Data"}),t.data.length>0&&""!==t.checkedState&&(0,r.jsxs)("div",{className:"m-3",children:[(0,r.jsxs)("p",{children:["Min Rate: ",(0,r.jsx)("b",{children:a.minRate})]}),(0,r.jsxs)("p",{children:["Max Rate: ",(0,r.jsx)("b",{children:a.maxRate})]}),(0,r.jsxs)("p",{children:["Items With More Than One Rate: ",(0,r.jsx)("b",{children:a.cases})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Number of Pairable Rates: ",(0,r.jsx)("b",{children:a.pairableRates})]}),(0,r.jsxs)("p",{className:"mt-3 text-lg",children:["Krippendorff's Alpha (",t.checkedState.charAt(0).toUpperCase()+t.checkedState.slice(1)," ","Scale): ",(0,r.jsx)("b",{children:a.k_alpha})]})]})]}),(t.CISize===n.filter(e=>"CISize"===e.name)[0].value||t.bootIterations===n.filter(e=>"bootIterations"===e.name)[0].value)&&(0,r.jsx)("div",{className:"m-3 text-red-600",children:"→ Set the Bootstrap CI Parameters"}),t.data.length>0&&""!==t.checkedState&&t.CISize!==n.filter(e=>"CISize"===e.name)[0].value&&t.bootIterations!==n.filter(e=>"bootIterations"===e.name)[0].value&&(0,r.jsx)("div",{className:"mx-3 mb-3",children:(0,r.jsxs)("p",{children:["Bootstrap Confidence Interval (",t.CISize,"):"," ",(0,r.jsxs)("b",{children:["[",a.lower,", ",a.upper,"]"]})]})})]})}var S=a(7138),E=a(6648);function z(e){let{title:t}=e;return(0,r.jsx)("header",{className:"mb-8",children:(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsxs)("nav",{className:"flex items-center justify-between p-4",children:[(0,r.jsx)(S.default,{href:"/",className:"text-blue-600 hover:underline",children:"Calculator"}),(0,r.jsx)(S.default,{href:"https://www.k-alpha.org/",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(E.default,{src:"../logo_small.png",alt:"K-Alpha Logo",width:150,height:30})}),(0,r.jsx)(S.default,{href:"/usage-notes",className:"text-blue-600 hover:underline",children:"Usage Notes"})]}),(0,r.jsx)("div",{className:"border-t border-gray-200",children:(0,r.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold text-center py-4 my-8",children:t})})]})})}function R(){return(0,r.jsx)("footer",{className:"container mx-auto px-4 py-6 my-6",children:(0,r.jsxs)("div",{className:"text-sm text-gray-600 text-center",children:[(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("strong",{children:"To Cite K-Alpha Calculator:"})," Marzi, G., Balzano, M., & Marchiori, D. (2024). K-Alpha Calculator—Krippendorff's Alpha Calculator: A User-Friendly Tool for Computing Krippendorff's Alpha Inter-Rater Reliability Coefficient. ",(0,r.jsx)("em",{children:"MethodsX, 12"}),", 102545."]}),(0,r.jsx)("p",{className:"mb-2",children:(0,r.jsx)("a",{href:"https://doi.org/10.1016/j.mex.2023.102545",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:"https://doi.org/10.1016/j.mex.2023.102545"})}),(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("strong",{children:"Source Code (online app):"})," ",(0,r.jsx)("a",{href:"https://github.com/davide-marchiori/k-alpha",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/davide-marchiori/k-alpha"})]}),(0,r.jsxs)("p",{className:"mb-2",children:[(0,r.jsx)("strong",{children:"Source Code (desktop app):"})," ",(0,r.jsx)("a",{href:"https://github.com/davide-marchiori/k-alpha-desktop",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/davide-marchiori/k-alpha-desktop"})]}),(0,r.jsxs)("p",{children:["This work is licensed under"," ",(0,r.jsx)("a",{href:"https://creativecommons.org/licenses/by/4.0/",className:"text-blue-600 hover:underline",target:"_blank",rel:"noopener noreferrer",children:"CC BY 4.0"})," ","- Free to share and adapt, requires attribution"]})]})})}function T(){return(0,r.jsxs)("main",{className:"bg-white",children:[(0,r.jsx)(z,{title:"Krippendorff's Alpha Calculator"}),(0,r.jsxs)(i,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(h,{}),(0,r.jsx)(m,{}),(0,r.jsx)(w,{})]}),(0,r.jsx)(R,{})]})}}},function(e){e.O(0,[30,899,971,23,744],function(){return e(e.s=8435)}),_N_E=e.O()}]);