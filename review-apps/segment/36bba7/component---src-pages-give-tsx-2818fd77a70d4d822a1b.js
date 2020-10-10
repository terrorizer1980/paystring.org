(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{qElY:function(e,t,a){"use strict";a.r(t);var n=a("TSYQ"),l=a.n(n),r=a("q1tI"),i=a.n(r),m=a("djOb"),o=a.n(m),s=a("pBiw"),c=a("eMrp"),u=a("9Dj+"),d=a("SC9r"),p=a("GshL");t.default=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],n=Object(r.useState)(!1),m=n[0],b=n[1],v=Object(r.useState)("DEFAULT"),g=v[0],f=v[1],h=Object(r.useState)(),E=h[0],x=h[1],y=Object(r.useState)(),N=y[0],T=y[1],S=Object(r.useState)(),w=S[0],C=S[1],j=Object(r.useState)(),D=j[0],O=j[1],k=Object(r.useState)("undecided"),F=k[0],A=k[1],q=Object(r.useState)(!0),L=q[0],U=q[1],I=Object(r.useState)(!1),_=I[0],z=I[1],G=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,M=function(e){return!(!e||!G.test(e))};Object(r.useEffect)((function(){g&&"DEFAULT"!==g&&N&&N.length>0&&E&&E.length>0&&D&&M(D)?b(!0):b(!1)}),[g,N,E,D]);return i.a.createElement(u.a,{path:"give",title:"Charity Giving",description:"Give to charities using PayID"},i.a.createElement("div",{className:"text-white bg-blue-dark-900 faq-bg xl:bg-cover",style:{minHeight:"calc(100vh - 9.25rem)"}},i.a.createElement("div",{className:"flex justify-center px-6 lg:px-18"},i.a.createElement("div",{className:"container lg:px-17 lg:mt-0 mt-18"},i.a.createElement("div",{className:"max-w-4xl pt-16 lg:pt-70"},i.a.createElement("h1",{className:"text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter"},"Give to charities through PayID"),i.a.createElement("div",{className:"mb-13 sm:text-2xl"},"Fill in your information to get funds to donate to a choice of charities.")),!_&&i.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),m&&D){a(!0);var t={role:g,first_name:N,last_name:""!==w?w:void 0,email:D,company:E,implementing_payid:F,notify_future_developer_events:L?"yes":"no"};Object(p.a)(Object.assign({},t,{form_name:"charity"})),z(!0),a(!1),"undefined"!=typeof window&&(window.location.href=Object(d.b)())}},className:"mx-auto mt-16 mb-20 md:mt-30 md:mb-40 md:max-w-md"},i.a.createElement("div",{className:l()("relative px-6 mb-6 border-2 rounded",{"border-green-600":"DEFAULT"!==g,"border-white":"DEFAULT"===g})},i.a.createElement("select",{defaultValue:"DEFAULT",id:"role",name:"role",onChange:function(e){return f(e.target.value)},className:"w-full py-4 bg-transparent appearance-none focus:outline-none"},[{label:"Role",value:"DEFAULT"},{label:"Project Manager",value:"PM"},{label:"Developer",value:"Engineer"},{label:"Business Development",value:"BD"},{label:"Sales",value:"Sales"},{label:"Operations",value:"Operations"},{label:"Executive",value:"Executive"},{label:"Marketing",value:"Marketing"}].map((function(e){return i.a.createElement("option",{className:"text-blue-dark-900",value:e.value,key:e.label,hidden:"DEFAULT"===e.value},e.label)}))),i.a.createElement(o.a,{className:"absolute h-2 mt-2 text-white right-4 top-4"}),i.a.createElement("label",{htmlFor:"role",className:l()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 bg-blue-dark-900 px-2 rounded",{"-top-3 text-green-600":"DEFAULT"!==g,"top-4 text-white":"DEFAULT"===g})},"Role")),i.a.createElement(c.a,{id:"company",label:"Company",type:"text",name:"company",required:!0,autoComplete:"organization",requiredText:"Company is required",onChange:function(e){return x(e.currentTarget.value)}}),i.a.createElement("div",{className:"flex"},i.a.createElement(c.a,{id:"firstName",label:"First Name",type:"text",name:"first-name",autoComplete:"given-name",className:"mr-3",required:!0,requiredText:"First name is required",onChange:function(e){return T(e.currentTarget.value)}}),i.a.createElement(c.a,{id:"lastName",label:"Last Name",type:"text",name:"last-name",autoComplete:"family-name",className:"ml-3",onChange:function(e){return C(e.currentTarget.value)}})),i.a.createElement(c.a,{id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",required:!0,requiredText:"Email address is required",validate:M,invalidText:"Invalid email address",onChange:function(e){M(e.currentTarget.value)?O(e.currentTarget.value):O(void 0)}}),i.a.createElement("div",{className:"mb-6 text-sm"},i.a.createElement("div",{className:"mb-2"},"Do you plan to implement PayID within the next 6 months?"),i.a.createElement("div",{className:"flex items-center"},i.a.createElement("input",{id:"implementing",type:"radio",value:"yes",name:"implementSoon",className:"transition duration-150 ease-in-out form-radio",onChange:function(e){return A(e.currentTarget.value)}}),i.a.createElement("label",{htmlFor:"implementing",className:"pl-2"},"Yes"),i.a.createElement("input",{id:"notImplementing",type:"radio",value:"no",name:"implementSoon",className:"ml-3 transition duration-150 ease-in-out form-radio",onChange:function(e){return A(e.currentTarget.value)}}),i.a.createElement("label",{htmlFor:"notImplementing",className:"pl-2"},"No"),i.a.createElement("input",{id:"notSureImplementing",type:"radio",value:"undecided",name:"implementSoon",className:"ml-3 transition duration-150 ease-in-out form-radio",defaultChecked:!0,onChange:function(e){return A(e.currentTarget.value)}}),i.a.createElement("label",{htmlFor:"notSureImplementing",className:"pl-2"},"Undecided"))),i.a.createElement("div",{className:"mb-6 text-sm"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement("input",{id:"notify",type:"checkbox",defaultChecked:!0,className:"transition duration-150 ease-in-out form-checkbox",onChange:function(e){U(e.currentTarget.checked)}}),i.a.createElement("label",{htmlFor:"notify",className:"pl-2"},"Notify me about future developer events. (e.g. Hackathons, panels)"))),i.a.createElement(s.a,{disabled:!m||t,label:t?"Submiting...":"Go to Charity App",className:"mt-8 sm:hidden"}),i.a.createElement(s.a,{disabled:!m||t,label:t?"Submiting...":"Go to Charity App",size:"lg",className:"hidden mx-auto mt-16 sm:block"})),_&&i.a.createElement("div",{className:"w-full mx-auto my-20 text-center md:my-40 md:max-w-lg"},i.a.createElement("h2",{className:"text-2xl font-bold sm:text-4xl"},"Thank you!"),i.a.createElement("a",{href:Object(d.b)(),className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Access the charity application"))))))}}}]);
//# sourceMappingURL=component---src-pages-give-tsx-2818fd77a70d4d822a1b.js.map