import{e as m,r as a,j as t,x as h}from"./vendor-VF7iyE7l.js";import{B as x}from"./Button-BOGBLznd.js";import{H as p}from"./index-Duve82Pp.js";import{F as j}from"./Footer-GdxIwXAj.js";const f=()=>{const{t:e}=m(),[o,c]=a.useState(""),[i,n]=a.useState(""),[l,r]=a.useState(""),d=s=>{s.preventDefault(),h.success({message:e("Contact.feedbackSuccessMessage"),className:"notificationCustom",description:e("Contact.feedbackSuccessDescription")}),c(""),n(""),r("")};return t.jsx(t.Fragment,{children:t.jsxs("section",{className:"contactSection",children:[t.jsx("div",{className:"hdr",children:t.jsx(p,{})}),t.jsxs("div",{className:"contactWrapper",children:[t.jsxs("div",{className:"firstPart",children:[t.jsxs("div",{className:"contactTitle",children:[t.jsx("span",{className:"contactSpan",children:e("Contact.title")}),t.jsx("h1",{className:"contactMainTitle",children:e("Contact.mainTitle")}),t.jsx("span",{className:"secondSpan",children:t.jsx("i",{children:e("Contact.subtitle")})}),t.jsx("p",{className:"contactParagraf",children:t.jsxs("i",{children:[e("Contact.description1"),t.jsx("br",{}),e("Contact.description2"),t.jsx("br",{}),e("Contact.description3")]})})]}),t.jsx("div",{children:t.jsxs("form",{className:"contactForm",onSubmit:d,children:[t.jsx("input",{type:"text",placeholder:e("Contact.form.namePlaceholder"),className:"contactInput",required:!0,value:o,onChange:s=>c(s.target.value),style:{textTransform:"capitalize"}}),t.jsx("input",{type:"email",placeholder:e("Contact.form.emailPlaceholder"),required:!0,value:i,onChange:s=>n(s.target.value),className:"contactInput"}),t.jsx("input",{name:"",id:"",required:!0,value:l,onChange:s=>r(s.target.value),placeholder:e("Contact.form.messagePlaceholder"),style:{textTransform:"capitalize"},className:"contactInput"}),t.jsx("div",{style:{textAlign:"right"},children:t.jsx(x,{text:e("Contact.form.sendButton"),bgColor:"#e50000",color:"white",className:"resBtn"})})]})})]}),t.jsx("hr",{className:"noneHr",style:{backgroundColor:"black",marginTop:"2rem",marginBottom:"2rem"}}),t.jsxs("div",{className:"secondPart",children:[t.jsxs("div",{className:"contactItems",children:[t.jsx("h2",{children:e("Contact.directContact")}),t.jsxs("p",{children:[e("Contact.directContactAddress1")," ",t.jsx("br",{}),"Contact.directContactAddress2"]})]}),t.jsxs("div",{className:"contactItems",children:[t.jsx("h2",{children:e("Contact.mediaContact")}),t.jsx("p",{children:e("Contact.mediaContactDescription")})]}),t.jsxs("div",{className:"contactItems",children:[t.jsx("h2",{children:e("Contact.betterTogether")}),t.jsx("p",{children:e("Contact.betterTogetherDescription")})]})]})]}),t.jsx(j,{})]})})};export{f as default};
