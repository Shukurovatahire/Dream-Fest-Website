const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AllArtists-CNEqT66U.js","assets/vendor-VF7iyE7l.js","assets/vendor-fwMVZpip.css","assets/BreadCrumb-BBql1721.js","assets/BreadCrumb-v9SV3vzo.css","assets/Footer-GdxIwXAj.js","assets/Footer-C249CQ6s.css","assets/AllArtists-BByXBJBG.css","assets/Concerts-CHCbnFJK.js","assets/Button-BOGBLznd.js","assets/Button-S5Aj08kF.css","assets/Concerts-9ZbX0KxM.css","assets/ConcertDetails-8Vi3TXom.js","assets/ConcertDetails-C5BYupzz.css","assets/ShoppingCart-BWUN3gts.js","assets/ShoppingCart-zYBAFwCd.css","assets/Order-GK-xwo4w.js","assets/Order-7dKSgzRF.css","assets/Payment-i7jbJ4Cg.js","assets/Payment-CAZipJXH.css","assets/Contact-ZfIK7fcq.js","assets/Contact-DUDtIpM3.css","assets/Login-CDE_sSvx.js","assets/Login-DxFT3TpV.css","assets/Profile-C-5N6SvT.js","assets/Profile-DMMw8aVm.css"])))=>i.map(i=>d[i]);
import{L as D,j as e,M,T as $,a as H,P as K,c as L,u as z,b as F,r as l,d as q,e as k,f as d,F as C,C as T,g as I,h as R,I as Y,i as Z,k as V,l as J,m as W,n as P,B as G,o as Q,p as X,q as ee,s as te,t as se,v as ae,R as re}from"./vendor-VF7iyE7l.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const ie="modulepreload",ne=function(t){return"/"+t},O={},x=function(s,a,i){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.all(a.map(h=>{if(h=ne(h),h in O)return;O[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":ie,m||(c.as="script",c.crossOrigin=""),c.href=h,o&&c.setAttribute("nonce",o),document.head.appendChild(c),m)return new Promise((f,b)=>{c.addEventListener("load",f),c.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}return r.then(()=>s()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})};D.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"});const le=new D.Icon({iconUrl:"https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",iconSize:[50,50],iconAnchor:[16,32],popupAnchor:[0,-32]}),oe=({borderR:t,latitude:s,longitude:a,title:i,address:r,width:n,height:o})=>{const h=[s,a];return e.jsxs(M,{center:h,zoom:13,style:{height:o,width:n,borderRadius:t,border:"1px solid black",outline:"none"},children:[e.jsx($,{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",attribution:"© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, © <a href='https://carto.com/attributions'>CARTO</a>"}),e.jsx(H,{position:h,icon:le,children:e.jsxs(K,{children:[e.jsx("strong",{children:i}),e.jsx("br",{}),r]})})]})},ce={currentUser:null,isAuthenticated:!1},w=L({name:"user",initialState:ce,reducers:{logIn:(t,s)=>{const a=localStorage.getItem("currentUserCart"),i=a?JSON.parse(a):[];t.isAuthenticated=!0,t.currentUser={...s.payload,cart:i},localStorage.setItem("currentUser",JSON.stringify({...s.payload,cart:i}))},logOut:t=>{t.currentUser=null,t.isAuthenticated=!1,localStorage.removeItem("currentUser")}}}),{logIn:Cs,logOut:de}=w.actions,he=w.reducer,U=z.withTypes(),Ts=F.withTypes(),v=35,me=()=>{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t&&t.userId?{items:JSON.parse(localStorage.getItem(`currentUserCart_${t.userId}`)||"[]"),formData:[],totalPrice:t.cart.reduce((a,i)=>a+i.quantity*v,0),cardData:[]}:{items:[],formData:[],totalPrice:0,cardData:[]}},ue=me(),_=t=>!Array.isArray(t)||t.length===0?0:t.reduce((s,a)=>s+a.quantity*v,0),j=t=>{const s=JSON.parse(localStorage.getItem("currentUser")||"{}");s&&s.userId&&(s.cart=t,localStorage.setItem("currentUser",JSON.stringify(s)),localStorage.setItem(`currentUserCart_${s.userId}`,JSON.stringify(t)));const a=JSON.parse(localStorage.getItem("allUsers")||"[]"),i=a.findIndex(r=>r.userId===s.userId);i!==-1?a[i].cart=t:a.push(s),localStorage.setItem("allUsers",JSON.stringify(a))},B=L({name:"shoppingCart",initialState:ue,reducers:{addTocart:(t,s)=>{const a=t.items.find(r=>r.concert_id===s.payload.concert_id);a?a.quantity+=1:t.items.push({...s.payload,quantity:1});const i=JSON.parse(localStorage.getItem("currentUser")||"{}").userId;localStorage.setItem(`currentUserCart_${i}`,JSON.stringify(t.items)),t.totalPrice=_(t.items),j(t.items)},loadCart:(t,s)=>{t.items=s.payload,j(t.items)},clearCart:t=>{t.items=[],t.formData=[],t.cardData=[],t.totalPrice=0,j(t.items)},removeFromCart:(t,s)=>{JSON.parse(localStorage.getItem("currentUser")||"{}").userId,t.items=t.items.filter(a=>a.concert_id!==s.payload),t.totalPrice=t.items.reduce((a,i)=>a+i.quantity*v,0),j(t.items)},increaseQuantity:(t,s)=>{const a=t.items.find(i=>i.concert_id===s.payload);a&&(a.quantity+=1),t.totalPrice=t.items.reduce((i,r)=>i+r.quantity*v,0),t.totalPrice=_(t.items),j(t.items)},decreaseQuantity:(t,s)=>{const a=t.items.find(i=>i.concert_id===s.payload);a&&a.quantity>1&&(a.quantity-=1),t.totalPrice=t.items.reduce((i,r)=>i+r.quantity*v,0),t.totalPrice=_(t.items),j(t.items)},saveFormData:(t,s)=>{t.formData=[s.payload]},clearFormData:t=>{t.formData=[]},saveCardData:(t,s)=>{t.cardData.push(s.payload)}}}),xe=B.reducer,{addTocart:Rs,removeFromCart:Os,increaseQuantity:Ds,decreaseQuantity:ks,saveFormData:Ps,clearFormData:ws,saveCardData:Us,clearCart:pe,loadCart:Bs}=B.actions,je=()=>{const[t,s]=l.useState(!1),[a,i]=l.useState(!1),[r,n]=l.useState("EN"),[o,h]=l.useState(!1),m=U(),p=q(),c=()=>{s(!t)};l.useEffect(()=>{localStorage.getItem("currentUser")&&h(!0)},[]);const f=()=>{const u=JSON.parse(localStorage.getItem("currentUser")||"{}").userId,E=JSON.parse(localStorage.getItem(`currentUserCart_${u}`)||"[]");j(E),m(de()),m(pe()),h(!1),p("/")},b=()=>{i(u=>!u)},{i18n:S,t:g}=k();l.useEffect(()=>{const u=localStorage.getItem("language");u&&(S.changeLanguage(u),n(u.toUpperCase()))},[S]);const A=async u=>{try{await S.changeLanguage(u.toLowerCase()),localStorage.setItem("language",u.toLowerCase()),n(u.toUpperCase()),window.location.reload()}catch(E){console.error("Failed to change language:",E)}};//! Current User
const y=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"header",children:[e.jsx("div",{className:"headerImg",children:e.jsx(d,{to:"/",children:e.jsx("img",{src:"https://static.tildacdn.one/tild3437-3836-4533-a561-373461636133/logo.svg",alt:"Logo","data-testid":"logo-image"})})}),e.jsxs("div",{className:"headerNavBar",children:[e.jsxs("div",{className:"hamburger","data-testid":"hamburger-icon",onClick:c,children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("div",{className:"resCartBox",children:e.jsxs("div",{className:"dd",style:{position:"relative"},children:[e.jsx("div",{className:"translate2",id:"user",children:o?e.jsx(C,{style:{fontSize:"21px",marginLeft:"5px"}}):e.jsx(T,{style:{fontSize:"21px"}})}),o?e.jsxs("div",{className:"dropdown",children:[e.jsxs("div",{className:"profile",children:[e.jsxs("p",{children:[" ",y.username]}),e.jsx("p",{style:{cursor:"pointer"},children:e.jsx(d,{style:{textDecoration:"none",color:"black"},to:`/profile/${y.userId}`,children:"Profile"})})]}),e.jsxs("div",{className:"loginP",onClick:f,children:["Logout ",e.jsx(I,{})]})]}):e.jsx("div",{className:"dropdown",children:e.jsx(d,{to:"/login",style:{textDecoration:"none",color:"white"},children:e.jsxs("p",{className:"loginP",style:{color:"black",cursor:"pointer"},children:["Login ",e.jsx(R,{})]})})})]})}),e.jsxs("div",{className:`responsivNavList ${t?"active":""}`,role:"navigation",children:[e.jsx(Y,{className:"closeBtn",onClick:c}),e.jsxs("div",{className:"navRes",children:[e.jsxs("ul",{className:"ulListRes",children:[e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/",children:e.jsx("div",{onClick:c,children:g("home")})}),e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/allartists",children:e.jsx("li",{onClick:c,children:e.jsx(e.Fragment,{children:g("artists")})})}),e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/concerts",children:e.jsx("li",{onClick:c,children:"Concerts"})}),e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/contact",children:e.jsx("li",{onClick:c,children:"Contact"})}),e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/cart",children:e.jsx("li",{onClick:c,children:"Cart"})}),o?e.jsxs("div",{className:"loginP",onClick:f,children:["Logout ",e.jsx(I,{})]}):e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/login",children:e.jsx("li",{onClick:c,children:"Singup / Login"})})]}),e.jsxs("div",{className:"lng",children:[e.jsx("div",{className:"lang",onClick:()=>A("AZ"),children:"AZ"}),e.jsx("div",{className:"lang",onClick:()=>A("EN"),children:"EN"})]})]})]}),e.jsx("div",{className:"navList",children:e.jsxs("ul",{className:"ulList",children:[e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/",children:e.jsx("li",{children:g("home")})}),e.jsx(d,{style:{textDecoration:"none",color:"white"},to:"/allartists",children:e.jsx("li",{children:g("artists")})}),e.jsx(d,{to:"/concerts",style:{textDecoration:"none",color:"white"},children:e.jsx("li",{children:g("concerts")})}),e.jsx(d,{to:"/contact",style:{textDecoration:"none",color:"white"},children:e.jsx("li",{children:g("contact")})}),e.jsx("li",{children:e.jsx(d,{to:"/cart",style:{textDecoration:"none",color:"white"},children:e.jsx("div",{className:"cartIcon","data-testid":"cart-icon",children:e.jsx(Z,{})})})})]})}),e.jsxs("div",{className:"translate",onClick:b,style:{cursor:"pointer"},children:[e.jsx("div",{children:r}),a&&e.jsxs("div",{className:"langBox",children:[e.jsx("div",{className:"lang",onClick:()=>A("AZ"),children:"AZ"}),e.jsx("div",{className:"lang",onClick:()=>A("EN"),children:"EN"})]})]}),e.jsxs("div",{className:"dd",style:{position:"relative"},children:[e.jsx("div",{className:"translate",id:"user",children:o?e.jsx(C,{style:{fontSize:"21px",marginLeft:"5px"}}):e.jsx(T,{style:{fontSize:"21px"}})}),o?e.jsxs("div",{className:"dropdown",children:[e.jsxs("div",{className:"profile",children:[e.jsxs("p",{children:["Hi,",y.username]}),e.jsx("p",{style:{cursor:"pointer"},children:e.jsx(d,{style:{textDecoration:"none",color:"black"},to:`/profile/${y.userId}`,children:"Profile"})})]}),e.jsxs("div",{className:"loginP",onClick:f,children:["Logout ",e.jsx(I,{})]})]}):e.jsx("div",{className:"dropdown",children:e.jsx(d,{to:"/login",style:{textDecoration:"none",color:"white"},children:e.jsxs("p",{className:"loginP",style:{color:"black",cursor:"pointer"},children:["Login ",e.jsx(R,{})]})})})]})]})]}),e.jsx("div",{className:"hr"})]})};function ge(){U();const{t}=k();(()=>{localStorage.getItem("allUsers")||localStorage.setItem("allUsers",JSON.stringify([]))})();const a=["https://optim.tildacdn.one/tild6434-6463-4536-b063-626133396639/-/format/webp/slider.jpg","https://optim.tildacdn.one/tild6538-3261-4266-a335-326130333665/-/format/webp/3.jpg","https://optim.tildacdn.one/tild3863-3262-4434-b430-653331653837/-/format/webp/2.jpg"],i=["https://optim.tildacdn.one/tild6661-3233-4132-a339-663766383866/-/format/webp/photo_52873135330774.jpg","https://optim.tildacdn.one/tild3034-3336-4432-a636-626631373934/-/format/webp/photo_52873135330774.jpg","https://optim.tildacdn.one/tild3838-3535-4639-b664-313032353165/-/format/webp/photo_52873135330774.jpg","https://optim.tildacdn.one/tild3839-6537-4331-b539-383033303932/-/format/webp/photo_52873135330774.jpg"],[r,n]=l.useState(0),[o,h]=l.useState(0);return l.useEffect(()=>{const m=setInterval(()=>{n(p=>(p+1)%a.length)},3e3);return()=>clearInterval(m)},[]),l.useEffect(()=>{const m=setInterval(()=>{h(p=>(p+1)%a.length)},3e3);return()=>clearInterval(m)},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container",children:e.jsxs("section",{className:"mainSection",children:[e.jsx(je,{}),e.jsxs("section",{className:"wrapperSection",children:[e.jsx("section",{className:"aboutSection",children:e.jsxs("div",{className:"aboutMax",children:[e.jsxs("div",{className:"centerImg",children:[e.jsx("div",{className:"aboutImg",children:e.jsx("img",{src:"https://optim.tildacdn.one/tild3362-3530-4261-b264-363138323264/-/format/webp/Stage_1.png",alt:"photo"})}),e.jsxs("div",{className:"imgRealativ",children:[e.jsx("img",{src:"https://static.tildacdn.one/tild6166-6432-4838-b564-343264313961/_1235.svg",alt:""}),e.jsxs("div",{className:"dateContainer",children:[e.jsx("span",{className:"blueSpan",children:t("july_dates")}),e.jsx("span",{className:"blueSpan",children:"18:00-23:30"}),e.jsxs("span",{className:"whiteSpan",children:["SEA BREEZE, ",e.jsx("br",{})," BAKU"]})]})]})]}),e.jsxs("div",{className:"titleContainer",children:[e.jsx("p",{className:"aboutTitle",children:t("event_description")}),e.jsx("div",{className:"ageLimit",children:e.jsx("div",{className:"age",children:"12+"})})]})]})}),e.jsxs("section",{className:"infoSection",children:[e.jsx("div",{className:"infoTitle",children:e.jsx("p",{children:t("info")})}),e.jsxs("div",{className:"aboutFestival",children:[e.jsx("img",{src:"https://static.tildacdn.one/tild6430-6434-4764-a637-386536323564/DREAM_FEST.svg"}),e.jsx("p",{children:t("festival_description")})]}),e.jsx("div",{className:"toAllArtists",style:{backgroundImage:`url(${a[r]})`},children:e.jsxs(d,{style:{textDecoration:"none",color:"white"},to:"allartists",children:[e.jsx("button",{className:"btnToALLStars",children:t("all_artists")})," "]})}),e.jsxs("div",{className:"lineUp",children:[e.jsxs("div",{children:[e.jsx("h1",{children:t("lineup")}),e.jsx("div",{className:"line"})]}),e.jsxs("div",{className:"dateWrapper",children:[e.jsxs("div",{className:"dateContainers",children:[e.jsx("div",{className:"dateDay",children:"23"}),e.jsx("div",{className:"dateMonth",children:"/07"})]}),e.jsx("div",{className:"starsContainer",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Thomas Anders"}),e.jsx("li",{children:"HADDAWAY"}),e.jsx("li",{children:"DR. ALBAN"}),e.jsx("li",{children:"BURAK YETER"}),e.jsx("li",{children:"EMIN"}),e.jsx("li",{children:"Imagination feat. leee john"}),e.jsx("li",{children:"ROYA"}),e.jsx("li",{children:"JAH KHALIB"}),e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BAHH TEE & TURKEN"}),e.jsx("li",{children:"GLUK'OZA"}),e.jsx("li",{children:"ZVONKIY"}),e.jsx("li",{children:"MOT"}),e.jsx("li",{children:"HANNA"}),e.jsx("li",{children:"ANI LORAK"})]})})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"dateWrapper",children:[e.jsxs("div",{className:"dateContainers",children:[e.jsx("div",{className:"dateDay",children:"24"}),e.jsx("div",{className:"dateMonth",children:"/07"})]}),e.jsx("div",{className:"starsContainer",children:e.jsxs("ul",{children:[e.jsx("li",{children:"THOMAS ANDERS"}),e.jsx("li",{children:"HADDAWAY"}),e.jsx("li",{children:"DR. ALBAN"}),e.jsx("li",{children:"BURAK YETER"}),e.jsx("li",{children:"EMIN"}),e.jsx("li",{children:"Imagination feat. leee john"}),e.jsx("li",{children:"ROYA"}),e.jsx("li",{children:"JAH KHALIB"}),e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BAHH TEE & TURKEN"}),e.jsx("li",{children:"GLUK'OZA"}),e.jsx("li",{children:"ZVONKIY"}),e.jsx("li",{children:"MOT"}),e.jsx("li",{children:"HANNA"}),e.jsx("li",{children:"ANI LORAK"})]})})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"dateWrapper",children:[e.jsxs("div",{className:"dateContainers",children:[e.jsx("div",{className:"dateDay",children:"25"}),e.jsx("div",{className:"dateMonth",children:"/07"})]}),e.jsx("div",{className:"starsContainer",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Yulianna Karaulova"}),e.jsx("li",{children:"HADDAWAY"}),e.jsx("li",{children:"DR. ALBAN"}),e.jsx("li",{children:"BURAK YETER"}),e.jsx("li",{children:"EMIN"}),e.jsx("li",{children:"Imagination feat. leee john"}),e.jsx("li",{children:"ROYA"}),e.jsx("li",{children:"JAH KHALIB"}),e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BAHH TEE & TURKEN"}),e.jsx("li",{children:"GLUK'OZA"}),e.jsx("li",{children:"ZVONKIY"}),e.jsx("li",{children:"MOT"}),e.jsx("li",{children:"HANNA"}),e.jsx("li",{children:"ANI LORAK"})]})})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"dateWrapper",children:[e.jsxs("div",{className:"dateContainers",children:[e.jsx("div",{className:"dateDay",children:"26"}),e.jsx("div",{className:"dateMonth",children:"/07"})]}),e.jsx("div",{className:"starsContainer",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Jason Derulo"}),e.jsx("li",{children:"IMANY"}),e.jsx("li",{children:"Samra"}),e.jsx("li",{children:"Outlandish"}),e.jsx("li",{children:"EMIN"}),e.jsx("li",{children:"Imagination feat. leee john"}),e.jsx("li",{children:"ROYA"}),e.jsx("li",{children:"JAH KHALIB"}),e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BAHH TEE & TURKEN"}),e.jsx("li",{children:"GLUK'OZA"}),e.jsx("li",{children:"ZVONKIY"}),e.jsx("li",{children:"MOT"}),e.jsx("li",{children:"HANNA"}),e.jsx("li",{children:"ANI LORAK"})]})})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"dateWrapper",children:[e.jsxs("div",{className:"dateContainers",children:[e.jsx("div",{className:"dateDay",children:"27"}),e.jsx("div",{className:"dateMonth",children:"/07"})]}),e.jsx("div",{className:"starsContainer",children:e.jsxs("ul",{children:[e.jsx("li",{children:"CRAIG DAVID presents TS5"}),e.jsx("li",{children:"K-Maro"}),e.jsx("li",{children:"original Enigma voices"}),e.jsx("li",{children:"JONY"}),e.jsx("li",{children:"EMIN"}),e.jsx("li",{children:"Imagination feat. leee john"}),e.jsx("li",{children:"ROYA"}),e.jsx("li",{children:"JAH KHALIB"}),e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BAHH TEE & TURKEN"}),e.jsx("li",{children:"GLUK'OZA"}),e.jsx("li",{children:"ZVONKIY"}),e.jsx("li",{children:"MOT"}),e.jsx("li",{children:"HANNA"}),e.jsx("li",{children:"ANI LORAK"})]})})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"dateWrapper",children:[e.jsxs("div",{className:"dateContainers",children:[e.jsx("div",{className:"dateDay",children:"28"}),e.jsx("div",{className:"dateMonth",children:"/07"})]}),e.jsx("div",{className:"starsContainer",children:e.jsxs("ul",{children:[e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BOSSON"}),e.jsx("li",{children:"RAFET EL ROMAN"}),e.jsx("li",{children:"BURAK YETER"}),e.jsx("li",{children:"EMIN"}),e.jsx("li",{children:"Imagination feat. leee john"}),e.jsx("li",{children:"ROYA"}),e.jsx("li",{children:"JAH KHALIB"}),e.jsx("li",{children:"LUSIA CHEBOTINA"}),e.jsx("li",{children:"BAHH TEE & TURKEN"}),e.jsx("li",{children:"GLUK'OZA"}),e.jsx("li",{children:"ZVONKIY"}),e.jsx("li",{children:"MOT"}),e.jsx("li",{children:"HANNA"}),e.jsx("li",{children:"ANI LORAK"})]})})]})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"carousel",children:[e.jsx("h1",{children:t("previous_festivals")}),e.jsx("div",{className:"toAllArtists",style:{backgroundImage:`url(${i[o]})`}})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"socialCintainer",children:[e.jsx("p",{className:"socialCintainerParagraf",children:t("shuttle_info")}),e.jsxs("p",{className:"socialCintainerParagraf2",children:[t("shuttle_schedule1")," ",e.jsx("br",{}),e.jsx("p",{children:t("shuttle_schedule2")})]}),e.jsx("p",{className:"socialCintainerParagraf3",children:t("free_transfer")})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"instaContact",children:[e.jsx("a",{target:"_blank",href:"https://www.instagram.com/dream.musicfest/?igsh=MW9lMjM4NXBmajhlbQ%3D%3D",children:e.jsx("img",{className:"instaImg",src:"https://static.tildacdn.one/tild3933-3339-4364-b466-306365303431/Group_1948754411.svg"})}),e.jsx("p",{style:{opacity:"0.5",textTransform:"uppercase"},children:t("contact_info")}),e.jsx("p",{className:"instaContactP",children:t("address")})]})]})]}),e.jsx("div",{className:"",children:e.jsx(oe,{borderR:"0",width:"100%",height:"400px",latitude:40.5894,longitude:49.9822,title:"DREAM FEST INTERATIONAL MUSIC FESTIVAL",address:"  Баку, Сабунчинский район, пос. Нардаран, д. 32A"})})]})})})}const fe="6546f2c2damsh0690a83566e7883p1022d7jsn0121ad1741c0",N=V({reducerPath:"concertApi",baseQuery:J({baseUrl:"https://concerts-artists-events-tracker.p.rapidapi.com",prepareHeaders:t=>(t.set("x-rapidapi-key",fe),t.set("x-rapidapi-host","concerts-artists-events-tracker.p.rapidapi.com"),t)}),endpoints:t=>({getConcerts:t.query({query:s=>`venue?name=${encodeURIComponent(s)}`})})}),{useGetConcertsQuery:Ms}=N,ve={concertData:[]},Ne=L({name:"concerts",initialState:ve,reducers:{},extraReducers:t=>{t.addMatcher(N.endpoints.getConcerts.matchFulfilled,(s,{payload:a})=>{s.concerts=a})}}),Ae=Ne.reducer,ye=W({reducer:{concerts:Ae,cart:xe,user:he,[N.reducerPath]:N.reducer},middleware:t=>t().concat(N.middleware)}),be="Header",Se="Ana Səhifə",Ee="Sənətçilər",Ie="Konsertlər",_e="Əlaqə",Le="Səbət",Ce="Home",Te="23-28 İYUL",Re="18:00-23:30",Oe="SEA BREEZE, BAKU",De="İFAÇILAR",ke="MDB ÖLKƏLƏRİ, AVROPA, BÖYÜK BRİTANİYA, KANADA VƏ TÜRKİYƏDƏN 100-DƏN ÇOX İFAÇI",Pe="İYULUN 23-DƏN 28-DƏK ŞƏHƏRİN MƏNZƏRƏLİ DƏNİZKƏNARI MƏKANI OLAN SEA BREEZE RESORT-DA BU YAYIN ƏSAS HADİSƏSİ - YENİ BEYNƏLXALQ MUSİQİ FESTİVALI OLAN DREAM FEST 2024 BAŞ TUTACAQ!",we="Xəzər dənizi sahilində keçirilən əfsanəvi festivalın atmosferi geri qayıdır, amma bu dəfə daha qlobal şəkildə! Festivalda iştirak edəcək ifaçılar artıq daha geniş coğrafiyanı – Rusiya, Azərbaycan, Gürcüstan, Türkiyə, Avropa və s. əhatə edir. Tamaşaçıları Xəzər dənizinin sahilində 6 gün davam edəcək möhtəşəm “open-air”, inanılmaz şou və 100-dən çox ifaçının çıxışları gözləyir. ",Ue="BÜTÜN İFAÇILAR",Be="KEÇMİŞ FESTIVALLAR",Me="DREAM Fest qonaqlarinın rahatlığı üçün SEA BREEZE Resort-a və geri sərnişin daşınmasını təşkil etmişik.",$e="Sərnişin nəqliyyat cədvəli :",He="6:00-20:00 Koroglu metro stansiyası (piramida çıxışı arxasında) - Sea Breeze Resort 22:30-02:30 Sea Breeze Resort - Koroglu metro stansiyası (piramida çıxışı arxasında)",Ke="Transfer bütün festival bilet sahibləri üçün pulsuzdur!",ze="Təşkilat məsələləri və ya mətbuat/media/partnerlik/sponsorluq sualları üçün org@dreammusicfest.com e-poçtuna müraciət edin",Fe="Zhara Events Group LLC Lahish yolu, 32A, Nardaran kəndi, Baku, Azərbaycan AZ1094 Telefon (+994 50) 300 28 62",qe="Artists",Ye="SƏBƏTƏ ƏLAVƏ ET",Ze="ƏTRAFLI MƏLUMAT",Ve="Hollywood Bowl Konsertləri",Je="Səbətə əlavə edildi.",We="Mövcud konsert yoxdur",Ge={title:"Əlaqə",mainTitle:"ƏLAQƏ QURUN",subtitle:"Sizdən xəbər gözləyirik",description1:"İstənilən vaxt bizimlə əlaqə",description2:"saxlayın, mümkün qədər ",description3:"tez cavab verəcəyik.",feedbackSuccessMessage:"Rəy göndərildi",feedbackSuccessDescription:"Ən qısa zamanda sizinlə əlaqə saxlayacağıq :)",form:{namePlaceholder:"Ad",surnamePlaceholder:"Soyad",mobilePlaceholder:"Telefon",emailPlaceholder:"E-poçt",messagePlaceholder:"Mesaj",sendButton:"Göndər"},directContact:"DÜZƏN KONTAKT",directContactAddress1:"Ünvan: FO / Fragre Obscurty 0G,",directContactAddress2:" Overer Mand 3, 5400 Hafiein, Avstriya",mediaContact:"MEDİA KONTAKT",mediaContactDescription:"Bizimlə işləmək istəyirsinizsə və işimizin gözəlliyini kəşf etmək istəyirsinizsə, lütfən FO Promo Box-ı sifariş edin. Biz onu birbaşa ünvanınıza göndərəcəyik.",betterTogether:"BİRLİKDƏ DAHA YAXŞI",betterTogetherDescription:"Komandamıza qoşulmaq və ya FC-də staj keçmək istəyirsiniz? Portfelinizi bizə göndərin. Biz həmişə istedadlı insanları axtarırıq."},Qe={title:"Səbət",yourCart:"Sənin səbətin",cartEmpty:"Sənin səbətin boşdur",deletedFromCart:"Səbətdən silindi",deletedFromCartDescription:"Bilet səbətdən silindi.",chooseDeliveryMethod:"Çatdırılma üsulunu seçin",electronicTicket:"Elektron bilet və ya vauçer",atSalesPoints:"Satış məntəqələrində",deliveryMethod:"Çatdırılma üsulu",userInformation:"İstifadəçi məlumatları",electronicTicket2:"Elektron bilet və ya vauçer (PDF formatında)",total:"Cəmi",acceptTerms:"Mən şərtləri qəbul edirəm.",createOrder:"Sifariş yarat",nameRequired:"Ad tələb olunur.",surnameRequired:"Soyad tələb olunur.",validMobileRequired:"Doğru mobil nömrə tələb olunur.",validEmailRequired:"Doğru email tələb olunur."},Xe="Sifariş",et="Sifariş #",tt="Ad",st="E-poçt",at="Mobil",rt="Çatdırılma üsulu: Elektron biletlə",it="Sifariş detalları",nt="Biletiniz :",lt="Biletləriniz: ",ot="Yaradılma tarixi :",ct="Ümumi qiymət :",dt=" Ödənişə keç ",ht="Kartla ödəyin",mt="Kart Sahibi Adı",ut="Kart Nömrəsi",xt="Ay",pt="İl",jt="SSC",gt="Ümumi məbləğ",ft="Ödə",vt={Part1:be,home:Se,artists:Ee,concerts:Ie,contact:_e,cart:Le,Part2:Ce,july_dates:Te,time:Re,location:Oe,lineup:De,event_description:ke,info:Pe,festival_description:we,all_artists:Ue,previous_festivals:Be,shuttle_info:Me,shuttle_schedule1:$e,shuttle_schedule2:He,free_transfer:Ke,contact_info:ze,address:Fe,Part3:qe,added_to_cart:Ye,full_details:Ze,hollywood_bowl_concerts:Ve,concert_added_to_cart:Je,no_concerts_available:We,Contact:Ge,shoppingCart:Qe,orderTitle:Xe,orderNumber:et,nameLabel:tt,emailLabel:st,mobileLabel:at,deliveryMethod:rt,orderDetailsTitle:it,ticketLabel:nt,ticketLabel2:lt,createDateLabel:ot,totalPriceLabel:ct,proceedToPaymentButton:dt,payWithCard:ht,cardHolderName:mt,cardNumber:ut,month:xt,year:pt,ssc:jt,totalPrice:gt,payButton:ft},Nt="Header",At="Home",yt="Artists",bt="Concerts",St="Contact",Et="Cart",It="Home",_t="JULY 23-28",Lt="18:00-23:30",Ct="LINEUP",Tt="SEA BREEZE, BAKU",Rt="MORE THAN 100 ARTISTS FROM CIS COUNTRIES, EUROPE, UK, CANADA, TURKEY",Ot="From July 23th to 28th, on the picturesque coast of the resort town Sea Breeze Resort, the main event of the summer will unfold — the new International Music Festival DREAM FEST 2024!",Dt="Is the atmosphere of a legendary festival on the shores of the Caspian Sea, which will become even more global, as the geography of performing countries expands to a worldwide scale: Russia, Azerbaijan, Georgia, Turkey, Europe, and others. Audiences can expect six days of grandiose open-air events on the shores of the Caspian Sea, incredible shows, and performances more than 100 artists.",kt="ALL ARTISTS",Pt="PREVIOUS FESTIVALS",wt="For the convenience of DREAM Fest guests, a shuttle service we have already organized to and from SEA BREEZE Resort for all six days of the festival.",Ut="Shuttle schedule :",Bt="16:00-20:00 Koroglu metro station (parking lot behind the 'pyramid' exit) - Sea Breeze Resort 22:30-02:30 Sea Breeze Resort - Koroglu metro station (parking lot behind the 'pyramid' exit)",Mt="The transfer is free for all festival ticket holders!",$t="For any organization questions or press/media/partnership/sponsorship inquiries, please email org@dreammusicfest.com",Ht="Zhara Events Group LLC Lahish road, 32A, Nardaran Village, Baku, Azerbaijan AZ1094 Phone (+994 50) 300 28 62",Kt="Artists",zt="FULL DETILS",Ft="ADD TO CART",qt="Hollywood Bowl Concerts",Yt="Has been added to your cart.",Zt="No concerts available",Vt={title:"Contact",mainTitle:"GET IN TOUCH",subtitle:"We should hear from you",description1:"Feel free to contact any time we",description2:"will get back to you as soon as",description3:"we can.",feedbackSuccessMessage:"Feedback sent",feedbackSuccessDescription:"We will get back to you as soon as possible :)",form:{namePlaceholder:"Name",emailPlaceholder:"Email",surnamePlaceholder:"Surname",mobilePlaceholder:"Mobile",messagePlaceholder:"Message",sendButton:"Send"},directContact:"DIRECT CONTACT",directContactAddress1:"Address: FO / Fragre Obscurty 0G,",directContactAddress2:" Overer Mand 3, 5400 Hafiein, Austria",mediaContact:"MEDIA CONTACT",mediaContactDescription:"If you are interested in working with us and want to explore the beauty of our work, please request our FO Promo Box. We'll send it directly to your doorstep.",betterTogether:"BETTER TOGETHER",betterTogetherDescription:"Do you want to join our team or do an internship with FC? Feel free to send us your portfolio. We are always looking for talented individuals."},Jt={title:"Shopping Cart",yourCart:"Your cart",cartEmpty:"Your cart is empty",deletedFromCart:"Deleted from cart",deletedFromCartDescription:"The ticket has been deleted from your cart.",chooseDeliveryMethod:"Choose a delivery method",electronicTicket:"Electronic ticket or voucher",electronicTicket2:"Electronic ticket or voucher  (in PDF format)",atSalesPoints:"At sales points",deliveryMethod:"Delivery method",userInformation:"User information",total:"Total",acceptTerms:"I accept the terms and conditions.",createOrder:"Create an order",nameRequired:"Name is required.",surnameRequired:"Surname is required.",validMobileRequired:"Valid mobile number is required.",validEmailRequired:"Valid email is required."},Wt="Order",Gt="Order #",Qt="Name",Xt="Email",es="Mobile",ts="Delivery method: Electronic ticket",ss="Order details",as="Your ticket :",rs="Your tickets: ",is="Create date:",ns="Total price :",ls="Proceed to payment",os="Pay with card",cs="Card Holder Name",ds="Card Number",hs="Month",ms="Year",us="SSC",xs="Total price",ps="Pay",js={Part1:Nt,home:At,artists:yt,concerts:bt,contact:St,cart:Et,Part2:It,july_dates:_t,time:Lt,lineup:Ct,location:Tt,event_description:Rt,info:Ot,festival_description:Dt,all_artists:kt,previous_festivals:Pt,shuttle_info:wt,shuttle_schedule1:Ut,shuttle_schedule2:Bt,free_transfer:Mt,contact_info:$t,address:Ht,Part3:Kt,full_details:zt,added_to_cart:Ft,hollywood_bowl_concerts:qt,concert_added_to_cart:Yt,no_concerts_available:Zt,Contact:Vt,shoppingCart:Jt,orderTitle:Wt,orderNumber:Gt,nameLabel:Qt,emailLabel:Xt,mobileLabel:es,deliveryMethod:ts,orderDetailsTitle:ss,ticketLabel:as,ticketLabel2:rs,createDateLabel:is,totalPriceLabel:ns,proceedToPaymentButton:ls,payWithCard:os,cardHolderName:cs,cardNumber:ds,month:hs,year:ms,ssc:us,totalPrice:xs,payButton:ps},gs={en:{translation:js},az:{translation:vt}};P.use(G).use(Q).use(X).init({resources:gs,lng:localStorage.getItem("language")||"en",fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"}});const fs=l.lazy(()=>x(()=>import("./AllArtists-CNEqT66U.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),vs=l.lazy(()=>x(()=>import("./Concerts-CHCbnFJK.js"),__vite__mapDeps([8,1,2,9,10,3,4,5,6,11]))),Ns=l.lazy(()=>x(()=>import("./ConcertDetails-8Vi3TXom.js"),__vite__mapDeps([12,1,2,3,4,5,6,13]))),As=l.lazy(()=>x(()=>import("./ShoppingCart-BWUN3gts.js"),__vite__mapDeps([14,1,2,3,4,9,10,5,6,15]))),ys=l.lazy(()=>x(()=>import("./Order-GK-xwo4w.js"),__vite__mapDeps([16,1,2,9,10,5,6,17]))),bs=l.lazy(()=>x(()=>import("./Payment-i7jbJ4Cg.js"),__vite__mapDeps([18,1,2,9,10,19]))),Ss=l.lazy(()=>x(()=>import("./Contact-ZfIK7fcq.js"),__vite__mapDeps([20,1,2,9,10,5,6,21]))),Es=l.lazy(()=>x(()=>import("./Login-CDE_sSvx.js"),__vite__mapDeps([22,1,2,9,10,23]))),Is=l.lazy(()=>x(()=>import("./Profile-C-5N6SvT.js"),__vite__mapDeps([24,1,2,9,10,25]))),_s=ee([{path:"/",element:e.jsx(ge,{})},{path:"/allartists",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(fs,{})})},{path:"/concerts",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(vs,{})})},{path:"/concertdetail/:id",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Ns,{})})},{path:"/cart",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(As,{})})},{path:"/order/:id",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(ys,{})})},{path:"/payment",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(bs,{})})},{path:"/contact",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Ss,{})})},{path:"/login",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Es,{})})},{path:"/profile/:id",element:e.jsx(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Is,{})})}]);te.createRoot(document.getElementById("root")).render(e.jsx(se,{store:ye,children:e.jsx(ae,{i18n:P,children:e.jsx(re,{router:_s})})}));export{je as H,oe as R,U as a,Ts as b,Rs as c,ks as d,Us as e,pe as f,Cs as g,Ds as i,Bs as l,Os as r,Ps as s,Ms as u};
