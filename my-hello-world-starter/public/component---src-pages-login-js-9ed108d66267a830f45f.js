(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/tEB":function(e,t,n){e.exports={form:"style-module--form--3QKla",button:"style-module--button--1aqlr",button1:"style-module--button1--2cFwy",join:"style-module--join--3qSO9",join1:"style-module--join1--1b2js",error:"style-module--error--MBBkR",success:"style-module--success--3VPWc",show:"style-module--show--dzKI9"}},SGa5:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("geLw"),l=n("Wbzz"),c=n("vOnD"),s=n("1eu9"),u=n.n(s),i=n("/tEB"),m=n.n(i),d=(n("ibKQ"),n("YnWm")),p=[{email:"sara@gmail.com",password:"123"},{email:"karla@gmail.com",password:"123"}],b=function(){var e=Object(a.useState)(),t=e[0],n=e[1],r=Object(a.useState)(),c=r[0],s=r[1],u=Object(a.useState)(!1),i=u[0],b=u[1],f=Object(a.useState)(!1),w=f[0],g=f[1],E=function(){b(!1),g(!0),setTimeout((function(){var e=!!p.find((function(e){return e.email===t&&e.password===c}));if(g(!1),e)return d.a.setItem("loggedIn",t),b("Success"),Object(l.navigate)("/musicians");b("Wrong email or password, please try again")}),2e3)};return o.a.createElement("main",{className:m.a.loginForm,onKeyDown:function(e){if("Enter"===e.key)return E()}},o.a.createElement("section",{className:m.a.form},o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"email"},o.a.createElement("strong",null,"Email")),o.a.createElement("input",{name:"email",onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Type here..."})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"password"},o.a.createElement("strong",null,"Password")),o.a.createElement("input",{name:"password",type:"password",placeholder:"Type here...",onChange:function(e){return s(e.target.value)}})),o.a.createElement("p",{className:m.a["Success"!==i?"error":"success"]+" "+(i?m.a.show:"")},i),o.a.createElement("div",{className:m.a.button},o.a.createElement("button",{className:m.a.button1,type:"button",onClick:function(){return E()},onKeyDown:function(){return E()}},w?o.a.createElement("section",null,"Loading..."):o.a.createElement("section",null,"LOGIN"))),o.a.createElement("p",{className:m.a.join},"No account?"," ",o.a.createElement("strong",{className:m.a.join1,onClick:function(){return window.open("/join","_self")},role:"link",tabIndex:0,onKeyDown:function(){return window.open("/join","_self")}},"JOIN"," ")," ","us!"))))},f=Object(c.a)((function(e){var t=e.className,n=Object(l.useStaticQuery)("3432772965").myImage.childImageSharp.fluid;return o.a.createElement(u.a,{Tag:"section",className:t,fluid:n,backgroundColor:"#040e18"},o.a.createElement(b,null))})).withConfig({displayName:"Login__StyledBackgroundSection",componentId:"t3jith-0"})(["width:100%;background-position:200px 0px;transition:0.5s ease-out;background-repeat:repeat-x;background-size:cover;"]);t.default=function(){return o.a.createElement(r.a,{activeTab:"LOGIN"},o.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-login-js-9ed108d66267a830f45f.js.map