(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),o=a.n(r),s=(a(93),a(94),a(75)),c=a(146),l=a(52),d=a(13),b=a(131),j=a(152),f=a(133),h=a(15),x=a(7),u=a(135),p=a(147),g=a(64),m=a(145),O=a(28),v=a.n(O),y=a(151),w=a(136),N=a(137),C=a(138),k=a(139),I=a(140),S=a(153),R=a(143),T=a(155),L=a(148),W=a(156),B=a(144),z=a(150),D=a(2),E=Object(b.a)((function(e){var t,a;return Object(j.a)({root:Object(x.a)({padding:40},e.breakpoints.down(800),{padding:20,paddingLeft:10,paddingRight:10,paddingTop:10}),title:Object(x.a)({color:"#000000",fontWeight:700},e.breakpoints.down(800),{fontSize:"20px"}),body:Object(x.a)({color:"#000000",fontWeight:400},e.breakpoints.down(800),{fontSize:"12px"}),grid:Object(x.a)({paddingTop:32},e.breakpoints.down(800),{display:"none"}),grid2:Object(x.a)({paddingTop:24},e.breakpoints.up(800),{display:"none"}),formControl:{width:"100%"},growWithUs:Object(x.a)({color:"#ffffff",fontWeight:600},e.breakpoints.down(800),{fontSize:"16px"}),growButton:(t={marginTop:51,textTransform:"none",borderRadius:0,border:"0px",backgroundColor:"#00ddb6",color:"#ffffff",paddingTop:20,paddingBottom:20,paddingLeft:36,paddingRight:36,maxWidth:264},Object(x.a)(t,e.breakpoints.down(800),{paddingTop:4,paddingBottom:4,paddingLeft:24,paddingRight:24,marginTop:24}),Object(x.a)(t,e.breakpoints.down(800),{display:"none"}),Object(x.a)(t,"&:disabled",{color:"#ffffff"}),t),growButton2:(a={marginTop:24,textTransform:"none",borderRadius:0,border:"0px",backgroundColor:"#00ddb6",color:"#ffffff",paddingTop:10,paddingBottom:10,paddingLeft:91,paddingRight:91,maxWidth:264},Object(x.a)(a,e.breakpoints.up(800),{display:"none"}),Object(x.a)(a,"&:disabled",{color:"#ffffff"}),a)})})),A=function(e){var t=e.isOpen,a=e.handleClose,i=e.emailID,r=E(),o=Object(n.useState)(""),s=Object(h.a)(o,2),c=s[0],l=s[1],d=Object(n.useState)(""),b=Object(h.a)(d,2),j=b[0],f=b[1],x=Object(n.useMemo)((function(){return null!==i&&void 0!==i?i:""}),[i]),O=Object(n.useState)(""),A=Object(h.a)(O,2),F=A[0],P=A[1],U=Object(n.useState)(""),q=Object(h.a)(U,2),V=q[0],H=q[1],Y=Object(n.useState)(""),M=Object(h.a)(Y,2),_=M[0],G=M[1],K=Object(n.useState)(!1),J=Object(h.a)(K,2),X=J[0],Q=J[1],Z=Object(n.useState)(x),$=Object(h.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useMemo)((function(){return""===c||""===j||""===ee||""===F||""===V||""===_}),[F,ee,c,j,_,V]),ne=Object(n.useCallback)((function(){l(""),f(""),te(""),P(""),G(""),H(""),Q(!1)}),[]),ie=Object(n.useCallback)((function(){if(""!==c&&""!==j&&""!==ee&&""!==F&&""!==V&&""!==_){var e={first_name:c,last_name:j,email:ee,business_name:F,url:V,annual_revenue:_};fetch("https://random.com/lets_talk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){200===e.status?ne():console.log(e)}))}}),[F,ne,ee,c,j,_,V]);return Object(n.useEffect)((function(){te(x)}),[x]),Object(D.jsx)(y.a,{open:t,onClose:a,fullWidth:!0,maxWidth:"lg",children:Object(D.jsxs)(u.a,{maxWidth:"xl",className:r.root,children:[Object(D.jsx)(w.a,{children:Object(D.jsxs)(p.a,{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",children:[Object(D.jsx)(g.a,{variant:"h2",className:r.title,children:"Let's chat."}),Object(D.jsx)(p.a,{textAlign:"left",display:"flex",flexDirection:"row-reverse",children:Object(D.jsx)(N.a,{onClick:a,size:"medium"})})]})}),Object(D.jsxs)(C.a,{children:[Object(D.jsx)(k.a,{children:Object(D.jsx)(g.a,{variant:"body1",className:r.body,children:"Please fill out the form below and a NSS team member will get back to you within 24 hours. We\u2019re looking forward to hearing about your business."})}),Object(D.jsxs)(I.a,{container:!0,spacing:4,className:r.grid,children:[Object(D.jsx)(I.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{required:!0,id:"first-name",label:"First Name",variant:"outlined",fullWidth:!0,value:c,onChange:function(e){return l(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{required:!0,id:"last-name",label:"Last Name",variant:"outlined",fullWidth:!0,value:j,onChange:function(e){return f(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{required:!0,id:"email",label:"Email Address",variant:"outlined",fullWidth:!0,value:""===ee?x:ee,onChange:function(e){return te(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{required:!0,id:"business-name",label:"Business Name",variant:"outlined",fullWidth:!0,value:F,onChange:function(e){return P(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:6,children:Object(D.jsxs)(R.a,{className:r.formControl,children:[Object(D.jsx)(T.a,{children:"Total Annual Revenue *"}),Object(D.jsxs)(L.a,{id:"revenue",value:_,onChange:function(e){return G(e.target.value)},fullWidth:!0,children:[Object(D.jsx)(W.a,{value:"<50Lakh",className:r.formControl,children:"Less than INR 50 Lakhs"}),Object(D.jsx)(W.a,{value:"50Lakh-1Cr",className:r.formControl,children:"INR 50 Lakhs - INR 1 Cr"}),Object(D.jsx)(W.a,{value:"1-2Cr",className:r.formControl,children:"INR 1 Cr - INR 2 Cr"}),Object(D.jsx)(W.a,{value:"2-3Cr",className:r.formControl,children:"INR 2 Cr - INR 3 Cr"}),Object(D.jsx)(W.a,{value:">3Cr",className:r.formControl,children:"More than INR 3 Cr"})]})]})}),Object(D.jsx)(I.a,{item:!0,xs:6,children:Object(D.jsx)(S.a,{required:!0,id:"url",label:"Storefront URL",variant:"outlined",fullWidth:!0,value:V,onChange:function(e){return H(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(B.a,{control:Object(D.jsx)(z.a,{checked:X,onChange:function(e){return Q(e.target.checked)},name:"checkedB",color:"primary"}),label:Object(D.jsx)(g.a,{variant:"body1",className:r.body,children:"Yes, I want to receive content, VIP event invites, and more information from NSS. You can unsubscribe anytime."})})})]}),Object(D.jsxs)(I.a,{container:!0,spacing:2,className:r.grid2,children:[Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(S.a,{required:!0,id:"first-name",label:"First Name",variant:"outlined",fullWidth:!0,value:c,onChange:function(e){return l(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(S.a,{required:!0,id:"last-name",label:"Last Name",variant:"outlined",fullWidth:!0,value:j,onChange:function(e){return f(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(S.a,{required:!0,id:"email",label:"Email Address",variant:"outlined",fullWidth:!0,value:""===ee?x:ee,onChange:function(e){return te(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(S.a,{required:!0,id:"business-name",label:"Business Name",variant:"outlined",fullWidth:!0,value:F,onChange:function(e){return P(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsxs)(R.a,{className:r.formControl,children:[Object(D.jsx)(T.a,{children:"Total Annual Revenue *"}),Object(D.jsxs)(L.a,{id:"revenue",value:_,onChange:function(e){return G(e.target.value)},fullWidth:!0,children:[Object(D.jsx)(W.a,{value:"<50Lakh",className:r.formControl,children:"Less than INR 50 Lakhs"}),Object(D.jsx)(W.a,{value:"50Lakh-1Cr",className:r.formControl,children:"INR 50 Lakhs - INR 1 Cr"}),Object(D.jsx)(W.a,{value:"1-2Cr",className:r.formControl,children:"INR 1 Cr - INR 2 Cr"}),Object(D.jsx)(W.a,{value:"2-3Cr",className:r.formControl,children:"INR 2 Cr - INR 3 Cr"}),Object(D.jsx)(W.a,{value:">3Cr",className:r.formControl,children:"More than INR 3 Cr"})]})]})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(S.a,{required:!0,id:"url",label:"Storefront URL",variant:"outlined",fullWidth:!0,value:V,onChange:function(e){return H(e.target.value)}})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsx)(B.a,{control:Object(D.jsx)(z.a,{checked:X,onChange:function(e){return Q(e.target.checked)},name:"checkedB",color:"primary"}),label:Object(D.jsx)(g.a,{variant:"body1",className:r.body,children:"Yes, I want to receive content and more information from NSS. You can unsubscribe anytime."})})})]})]}),Object(D.jsx)(p.a,{textAlign:"left",display:"flex",flexDirection:"row-reverse",children:Object(D.jsx)(m.a,{variant:"contained",disableElevation:!0,className:r.growButton,endIcon:Object(D.jsx)(v.a,{}),disabled:ae,onClick:ie,children:Object(D.jsx)(g.a,{variant:"h6",className:r.growWithUs,children:"Submit"})})}),Object(D.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(D.jsx)(m.a,{variant:"contained",disableElevation:!0,className:r.growButton2,endIcon:Object(D.jsx)(v.a,{}),disabled:ae,onClick:ie,children:Object(D.jsx)(g.a,{variant:"h6",className:r.growWithUs,children:"Submit"})})})]})})},F=Object(b.a)((function(e){return Object(j.a)({root:Object(x.a)({paddingTop:68,paddingBottom:68,backgroundColor:"#0e172a",borderRadius:0},e.breakpoints.down(800),{paddingTop:30,paddingBottom:30}),surgeIcon:Object(x.a)({fontSize:"48px",color:"#ffffff",fontWeight:600,paddingLeft:8},e.breakpoints.down(800),{fontSize:"18px"}),navButtons:Object(x.a)({color:"#ffffff",fontWeight:600,fontSize:"20px"},e.breakpoints.down(800),{lineHeight:"21px",fontSize:"12px"}),growButton:Object(x.a)({"&:hover":{backgroundColor:"#00ddb6"},borderRadius:0,border:"1px solid #00ddb6",color:"#ffffff",textTransform:"none",paddingTop:8,paddingBottom:8,paddingLeft:45,paddingRight:45},e.breakpoints.down(800),{display:"none"}),dot:Object(x.a)({fontSize:"48px",color:"#00ddb6",fontWeight:600},e.breakpoints.down(800),{fontSize:"16px"}),hi:Object(x.a)({color:"#ffffff",fontWeight:600,fontSize:"20px"},e.breakpoints.down(800),{lineHeight:"21px",fontSize:"12px"})})})),P=function(){var e=F(),t=Object(n.useState)(!1),a=Object(h.a)(t,2),i=a[0],r=a[1],o=Object(n.useCallback)((function(){r(!0)}),[]),s=Object(n.useCallback)((function(){r(!1)}),[]);return Object(D.jsxs)(f.a,{elevation:0,className:e.root,children:[Object(D.jsx)(A,{isOpen:i,handleClose:s}),Object(D.jsx)(u.a,{maxWidth:"lg",children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(D.jsx)(g.a,{variant:"h4",className:e.surgeIcon,children:"Know Your Rights"}),Object(D.jsx)(g.a,{variant:"h4",className:e.dot,children:"."})]}),Object(D.jsx)(g.a,{variant:"body1",className:e.hi,children:"hi@nss.iitd"}),Object(D.jsx)(m.a,{variant:"outlined",disableElevation:!0,className:e.growButton,endIcon:Object(D.jsx)(v.a,{}),onClick:o,children:Object(D.jsx)(g.a,{variant:"body1",className:e.navButtons,children:"Grow with us"})})]})})]})},U=Object(b.a)((function(e){var t;return Object(j.a)({root:(t={paddingTop:68,paddingBottom:68,backgroundColor:"#0e172a",borderRadius:0},Object(x.a)(t,e.breakpoints.down(800),{paddingTop:30,paddingBottom:30}),Object(x.a)(t,"& a",{textDocation:"none",color:"#ffffff"}),t),surgeIcon:Object(x.a)({fontSize:"48px",color:"#ffffff",fontWeight:600,paddingLeft:8},e.breakpoints.down(800),{fontSize:"18px"}),navButtons:Object(x.a)({color:"#ffffff",fontWeight:600,fontSize:"20px"},e.breakpoints.down(800),{lineHeight:"21px",fontSize:"12px"}),growButton:Object(x.a)({"&:hover":{backgroundColor:"#00ddb6"},borderRadius:0,border:"1px solid #00ddb6",color:"#ffffff",textTransform:"none",paddingTop:8,paddingBottom:8,paddingLeft:45,paddingRight:45},e.breakpoints.down(800),{display:"none"}),dot:Object(x.a)({fontSize:"48px",color:"#00ddb6",fontWeight:600},e.breakpoints.down(800),{fontSize:"16px"}),hi:Object(x.a)({color:"#ffffff",fontWeight:600,fontSize:"20px"},e.breakpoints.down(800),{lineHeight:"21px",fontSize:"12px"}),menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},whiteColor:{color:"#ffffff"}})})),q=function(){var e=U(),t=Object(n.useState)(!1),a=Object(h.a)(t,2),i=a[0],r=a[1],o=Object(n.useCallback)((function(){r(!0)}),[]),s=Object(n.useCallback)((function(){r(!1)}),[]);return Object(D.jsxs)(f.a,{elevation:0,className:e.root,children:[Object(D.jsx)(A,{isOpen:i,handleClose:s}),Object(D.jsx)(u.a,{maxWidth:"lg",children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(D.jsx)(g.a,{variant:"h4",className:e.surgeIcon,children:"Know Your Rights"}),Object(D.jsx)(g.a,{variant:"h4",className:e.dot,children:"."})]}),Object(D.jsx)(g.a,{variant:"h6",className:e.whiteColor,children:Object(D.jsx)(l.b,{to:"/",children:"Home"})}),Object(D.jsx)(g.a,{variant:"h6",className:e.whiteColor,children:Object(D.jsx)(l.b,{to:"/contact",children:"Contact"})}),Object(D.jsx)(m.a,{variant:"outlined",disableElevation:!0,className:e.growButton,endIcon:Object(D.jsx)(v.a,{}),onClick:o,children:Object(D.jsx)(g.a,{variant:"body1",className:e.navButtons,children:"Login"})})]})})]})},V=Object(b.a)((function(){return Object(j.a)({fadeInSectionBottom:{opacity:0,transform:"translateY(20vh)",visibility:"hidden",transition:"opacity 0.3s ease-out, transform 0.6s ease-out",willChange:"opacity, visibility"},fadeInSectionRight:{opacity:0,transform:"translateX(20vh)",visibility:"hidden",transition:"opacity 0.3s ease-out, transform 0.6s ease-out",willChange:"opacity, visibility"},fadeInSectionTop:{opacity:0,transform:"translateY(-20vh)",visibility:"hidden",transition:"opacity 0.3s ease-out, transform 0.6s ease-out",willChange:"opacity, visibility"},fadeInSectionLeft:{opacity:0,transform:"translateX(-20vh)",visibility:"hidden",transition:"opacity 0.3s ease-out, transform 0.6s ease-out",willChange:"opacity, visibility"},isVisible:{opacity:1,transform:"none",visibility:"visible"}})})),H=function(e){var t=V(),a=i.a.useState(!0),n=Object(h.a)(a,2),r=n[0],o=n[1],s=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))}));return e.observe(s.current),function(){return s&&s.current&&e.unobserve(s.current)}}),[]),Object(D.jsx)("div",{className:"".concat(t.fadeInSectionTop," ").concat(r?t.isVisible:""),ref:s,children:e.children})},Y=function(e){var t=V(),a=i.a.useState(!0),n=Object(h.a)(a,2),r=n[0],o=n[1],s=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))}));return e.observe(s.current),function(){return s&&s.current&&e.unobserve(s.current)}}),[]),Object(D.jsx)("div",{className:"".concat(t.fadeInSectionBottom," ").concat(r?t.isVisible:""),ref:s,children:e.children})},M=function(e){var t=V(),a=i.a.useState(!0),n=Object(h.a)(a,2),r=n[0],o=n[1],s=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))}));return e.observe(s.current),function(){return s&&s.current&&e.unobserve(s.current)}}),[]),Object(D.jsx)("div",{className:"".concat(t.fadeInSectionLeft," ").concat(r?t.isVisible:""),ref:s,children:e.children})},_=function(e){var t=V(),a=i.a.useState(!0),n=Object(h.a)(a,2),r=n[0],o=n[1],s=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))}));return e.observe(s.current),function(){return s&&s.current&&e.unobserve(s.current)}}),[]),Object(D.jsx)("div",{className:"".concat(t.fadeInSectionRight," ").concat(r?t.isVisible:""),ref:s,children:e.children})},G=Object(b.a)((function(e){return Object(j.a)({root:Object(x.a)({paddingTop:80,paddingBottom:200,backgroundColor:"#ffffff",borderRadius:0},e.breakpoints.down(800),{paddingTop:20,paddingBottom:60}),line:{height:"3px",width:130,backgroundColor:"#00ddb6",marginTop:35,"@media (max-width: 1280px)":{width:60,marginTop:15}},nextLevel:Object(x.a)({color:"#0e172a",fontWeight:700},e.breakpoints.down(800),{display:"none"}),nextLevel2:Object(x.a)({color:"#0e172a",fontWeight:700,fontSize:"25px",lineHeight:"35px"},e.breakpoints.up(800),{display:"none"}),description:Object(x.a)({marginLeft:70},e.breakpoints.down(800),{marginLeft:20}),growWithUs:Object(x.a)({color:"#ffffff",fontWeight:600},e.breakpoints.down(800),{fontSize:"12px"}),growButton:Object(x.a)({marginTop:48,textTransform:"none",borderRadius:0,border:"0px",backgroundColor:"#0e172a",color:"#ffffff",paddingTop:8,paddingBottom:8,paddingLeft:45,paddingRight:45,maxWidth:264},e.breakpoints.down(800),{paddingTop:15,paddingBottom:15,paddingLeft:16,paddingRight:16,marginTop:30}),grid:Object(x.a)({paddingTop:80,marginLeft:20,marginRight:20,paddingRight:60},e.breakpoints.down(800),{display:"none"}),grid2:Object(x.a)({paddingTop:40},e.breakpoints.up(800),{display:"none"}),fba:{height:200,width:200},heading:Object(x.a)({color:"#000000",fontWeight:600,paddingLeft:24},e.breakpoints.down(800),{paddingLeft:0,paddingTop:24,fontSize:"18px",textAlign:"center"}),heading2:Object(x.a)({color:"#000000",fontWeight:600,paddingLeft:24},e.breakpoints.down(800),{paddingLeft:0,paddingTop:24,fontSize:"18px"}),body:Object(x.a)({color:"#000000",fontWeight:400,paddingTop:40,paddingLeft:20,paddingRight:20},e.breakpoints.down(800),{fontSize:"12px",textAlign:"center",paddingTop:24}),container:{paddingLeft:0},image2:{marginTop:32}})})),K=function(){var e=G();return Object(D.jsx)(f.a,{className:e.root,elevation:0,children:Object(D.jsxs)(u.a,{maxWidth:"xl",className:e.container,children:[Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(D.jsx)(p.a,{className:e.line}),Object(D.jsxs)(p.a,{className:e.description,children:[Object(D.jsx)(M,{children:Object(D.jsx)(g.a,{variant:"h2",className:e.nextLevel,children:"Is your brand a fit?"})}),Object(D.jsx)(g.a,{variant:"h2",className:e.nextLevel2,children:"Is your brand a fit?"})]})]}),Object(D.jsxs)(I.a,{container:!0,spacing:3,className:e.grid,children:[Object(D.jsx)(I.a,{item:!0,xs:4,children:Object(D.jsx)(M,{children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(D.jsx)(p.a,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",pt:10,width:"100%",pl:5,children:Object(D.jsx)(g.a,{variant:"h5",className:e.heading,children:"Sold Through Amazon FBA"})}),Object(D.jsx)(g.a,{variant:"body1",className:e.body,children:"Our expertise lies in Amazon FBA ecosystem so we prioritise brands that sell mainly through Amazon!"})]})})}),Object(D.jsx)(I.a,{item:!0,xs:4,children:Object(D.jsx)(Y,{children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",pt:10,width:"100%",pl:5,children:["\\                  ",Object(D.jsx)(g.a,{variant:"h5",className:e.heading2,children:"A portfolio led by Winning products"})]}),Object(D.jsx)(g.a,{variant:"body1",className:e.body,children:'"Awesome products" rank in the keyword search results, have positive reviews that win against competitors'})]})})}),Object(D.jsx)(I.a,{item:!0,xs:4,children:Object(D.jsx)(H,{children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(D.jsx)(p.a,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",pt:10,width:"100%",pl:5,children:Object(D.jsx)(g.a,{variant:"h5",className:e.heading,children:"The right scale for our model"})}),Object(D.jsx)(g.a,{variant:"body1",className:e.body,children:"We're open to good opportunities, but usually seek brands with at least Rs. 1 cr in revenue in the last year"})]})})})]}),Object(D.jsxs)(I.a,{container:!0,spacing:3,className:e.grid2,children:[Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(D.jsx)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",pt:4,width:"100%",children:Object(D.jsx)(g.a,{variant:"h5",className:e.heading,children:"Sold Through Amazon FBA"})}),Object(D.jsx)(g.a,{variant:"body1",className:e.body,children:"Our expertise lies in Amazon FBA ecosystem so we prioritise brands that sell mainly through Amazon!"})]})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(D.jsx)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",pt:4,width:"100%",children:Object(D.jsx)(g.a,{variant:"h5",className:e.heading,children:"A portfolio led by Winning products"})}),Object(D.jsx)(g.a,{variant:"body1",className:e.body,children:'"Awesome products" rank in the keyword search results, have positive reviews that win against competitors'})]})}),Object(D.jsx)(I.a,{item:!0,xs:12,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[Object(D.jsx)(p.a,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",pt:4,children:Object(D.jsx)(g.a,{variant:"h5",className:e.heading,children:"The right scale for our model"})}),Object(D.jsx)(g.a,{variant:"body1",className:e.body,children:"We're open to good opportunities, but usually seek brands with at least Rs. 1 cr in revenue in the last year"})]})})]})]})})},J=Object(b.a)((function(){return Object(j.a)({root:{height:"100vh",borderRadius:0,backgroundColor:"#ffffff"},top:{overflow:"hidden"}})})),X=function(){var e=J();return Object(D.jsxs)("div",{className:e.top,children:[Object(D.jsx)(q,{}),Object(D.jsx)(f.a,{className:e.root,children:Object(D.jsx)(K,{})}),Object(D.jsx)(P,{})]})},Q=Object(b.a)((function(e){var t,a;return Object(j.a)({root:Object(x.a)({paddingBottom:70,borderRadius:0,paddingLeft:60},e.breakpoints.down(800),{paddingLeft:0}),container:Object(x.a)({paddingTop:97,backgroundColor:"rgba(0, 221, 182, 0.05)",paddingBottom:140,position:"relative"},e.breakpoints.down(800),{paddingLeft:0,paddingBottom:44}),line:{height:"3px",width:80,backgroundColor:"#00ddb6",marginTop:35,"@media (max-width: 1280px)":{width:"90px",marginTop:15}},nextLevel:Object(x.a)({color:"#0e172a",fontWeight:700},e.breakpoints.down(800),{fontSize:"25px",lineHeight:"35px"}),description:Object(x.a)({marginLeft:50},e.breakpoints.down(800),{marginLeft:24}),caption:Object(x.a)({color:"rgba(14,23,42,1)",fontWeight:400,paddingTop:48},e.breakpoints.down(800),{paddingTop:24,fontSize:"12px",lineHeight:"24px"}),caption2:{color:"rgba(14,23,42,1)",fontWeight:400},boxDescription:{maxWidth:"50%",marginTop:45,zIndex:100},growWithUs:Object(x.a)({color:"#ffffff",fontWeight:600},e.breakpoints.down(800),{fontSize:"12px"}),growButton:Object(x.a)({marginTop:48,textTransform:"none",borderRadius:0,border:"0px",backgroundColor:"#00ddb6",color:"#ffffff",paddingTop:12,paddingBottom:12,paddingLeft:45,paddingRight:45,maxWidth:264},e.breakpoints.down(800),{marginTop:24,paddingTop:15,paddingBottom:15,paddingLeft:16,paddingRight:16}),grid:Object(x.a)({paddingTop:180,zIndex:100,"@media (max-width: 1280px)":{paddingTop:100}},e.breakpoints.down(800),{display:"none"}),grid2:(t={paddingTop:54,zIndex:100},Object(x.a)(t,e.breakpoints.up(800),{display:"none"}),Object(x.a)(t,"paddingLeft",40),Object(x.a)(t,"paddingRight",30),t),heading:{color:"#000000",fontWeight:500,paddingBottom:60},heading2:{color:"#000000",fontWeight:600,paddingLeft:24},body:{color:"#000000",fontWeight:700,paddingTop:60},gridBox:{backgroundColor:"#ffffff",paddingTop:28,paddingBottom:32,"@media (max-width: 1280px)":{paddingLeft:20,paddingRight:20,minHeight:400},boxShadow:"0px 0px 115px rgba(13, 16, 37, 0.06)",borderRadius:"3px"},image2:Object(x.a)({position:"absolute",left:-60,top:150,"@media (max-width: 1350px)":{height:580,width:580},"@media (max-width: 1200px)":{height:500,width:500}},e.breakpoints.down(800),{display:"none"}),image1:(a={},Object(x.a)(a,e.breakpoints.up(800),{display:"none"}),Object(x.a)(a,"marginTop",32),a),gridItem:{zIndex:100},box:Object(x.a)({},e.breakpoints.down(800),{display:"none"}),box2:Object(x.a)({},e.breakpoints.up(800),{display:"none"}),imgContainer:{textAlign:"center"}})})),Z=function(){var e=Q(),t=Object(n.useState)(!1),a=Object(h.a)(t,2),i=a[0],r=a[1],o=Object(n.useCallback)((function(){r(!0)}),[]),s=Object(n.useCallback)((function(){r(!1)}),[]);return Object(D.jsxs)(f.a,{className:e.root,elevation:0,children:[Object(D.jsx)(A,{isOpen:i,handleClose:s}),Object(D.jsxs)(u.a,{className:e.container,maxWidth:"xl",children:[Object(D.jsx)(p.a,{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-start",alignItems:"flex-start",className:e.box,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",justifyContent:"flex-start",pt:2,className:e.boxDescription,children:[Object(D.jsx)(p.a,{className:e.line}),Object(D.jsxs)(p.a,{className:e.description,children:[Object(D.jsx)(_,{children:Object(D.jsx)(g.a,{variant:"h2",className:e.nextLevel,children:"A platform for sellers by sellers"})}),Object(D.jsx)(g.a,{variant:"body1",className:e.caption,children:"With the right tools, technology and team, your brand can"}),Object(D.jsx)(g.a,{variant:"body1",className:e.caption2,children:"grow faster than ever before."}),Object(D.jsx)(m.a,{variant:"contained",disableElevation:!0,className:e.growButton,endIcon:Object(D.jsx)(v.a,{}),onClick:o,children:Object(D.jsx)(g.a,{variant:"h6",className:e.growWithUs,children:"Grow with us"})})]})]})}),Object(D.jsxs)(p.a,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",className:e.box2,children:[Object(D.jsx)(p.a,{className:e.line}),Object(D.jsxs)(p.a,{className:e.description,children:[Object(D.jsx)(g.a,{variant:"h2",className:e.nextLevel,children:"A platform for sellers by sellers"}),Object(D.jsx)(g.a,{variant:"body1",className:e.caption,children:"With the right tools, technology and team, your brand can grow faster than ever before."}),Object(D.jsx)(m.a,{variant:"contained",disableElevation:!0,className:e.growButton,endIcon:Object(D.jsx)(v.a,{}),onClick:o,children:Object(D.jsx)(g.a,{variant:"h6",className:e.growWithUs,children:"Grow with us"})})]})]}),Object(D.jsx)("div",{className:e.imgContainer}),Object(D.jsxs)(I.a,{container:!0,spacing:4,className:e.grid,children:[Object(D.jsx)(I.a,{item:!0,xs:3,className:e.gridItem}),Object(D.jsx)(I.a,{item:!0,xs:3,className:e.gridItem,children:Object(D.jsx)(M,{children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",className:e.gridBox,children:[Object(D.jsx)(g.a,{variant:"h6",className:e.heading,children:"INCREASED REVENUE"}),Object(D.jsx)(g.a,{variant:"h2",className:e.body,children:"156%"})]})})}),Object(D.jsx)(I.a,{item:!0,xs:3,className:e.gridItem,children:Object(D.jsx)(H,{children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",className:e.gridBox,children:[Object(D.jsx)(g.a,{variant:"h6",className:e.heading,children:"TOP FBA SELLER"}),Object(D.jsx)(g.a,{variant:"h2",className:e.body,children:"0.01%"})]})})}),Object(D.jsx)(I.a,{item:!0,xs:3,className:e.gridItem,children:Object(D.jsx)(Y,{children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",className:e.gridBox,children:[Object(D.jsx)(g.a,{variant:"h6",className:e.heading,children:"IMPROVED SELLER RANK"}),Object(D.jsx)(g.a,{variant:"h2",className:e.body,children:"7.5%"})]})})})]}),Object(D.jsxs)(I.a,{container:!0,spacing:4,className:e.grid2,children:[Object(D.jsx)(I.a,{item:!0,xs:12,className:e.gridItem,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",className:e.gridBox,children:[Object(D.jsx)(g.a,{variant:"h6",className:e.heading,children:"INCREASED REVENUE"}),Object(D.jsx)(g.a,{variant:"h2",className:e.body,children:"156%"})]})}),Object(D.jsx)(I.a,{item:!0,xs:12,className:e.gridItem,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",className:e.gridBox,children:[Object(D.jsx)(g.a,{variant:"h6",className:e.heading,children:"TOP FBA SELLER"}),Object(D.jsx)(g.a,{variant:"h2",className:e.body,children:"0.01%"})]})}),Object(D.jsx)(I.a,{item:!0,xs:12,className:e.gridItem,children:Object(D.jsxs)(p.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textAlign:"center",className:e.gridBox,children:[Object(D.jsx)(g.a,{variant:"h6",className:e.heading,children:"IMPROVED SELLER RANK"}),Object(D.jsx)(g.a,{variant:"h2",className:e.body,children:"7.5%"})]})})]})]})]})},$=Object(b.a)((function(){return Object(j.a)({root:{height:"100vh",borderRadius:0,backgroundColor:"#ffffff"},top:{overflow:"hidden"}})})),ee=function(){var e=$();return Object(D.jsxs)("div",{className:e.top,children:[Object(D.jsx)(q,{}),Object(D.jsx)(f.a,{className:e.root,children:Object(D.jsx)(Z,{})}),Object(D.jsx)(P,{})]})},te=function(){return Object(D.jsx)(l.a,{basename:"/sandbox/Player",children:Object(D.jsxs)(d.c,{children:[Object(D.jsx)(d.a,{path:"/contact",children:Object(D.jsx)(ee,{})}),Object(D.jsx)(d.a,{path:"/",children:Object(D.jsx)(X,{})})]})})},ae=Object(s.a)({typography:{fontFamily:["Poppins","sans-serif"].join(",")}});var ne=function(){return Object(D.jsx)(c.a,{theme:ae,children:Object(D.jsx)(te,{})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,159)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(ne,{})}),document.getElementById("root")),ie()},93:function(e,t,a){},94:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.20db8e5c.chunk.js.map