(this["webpackJsonpdisp-calc"]=this["webpackJsonpdisp-calc"]||[]).push([[0],{286:function(e,a,t){e.exports=t(476)},291:function(e,a,t){},294:function(e,a){},296:function(e,a){},338:function(e,a){},339:function(e,a){},474:function(e,a,t){},476:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(28),c=t.n(r),o=(t(291),t(272)),i=t(35),m=t(63),u=t(11),s=t(21),d=t(17),g=t(271),b=t.n(g),p=d.d.create({page:{flexDirection:"row",backgroundColor:"white"},section:{marginLeft:50,padding:10,flexGrow:1,fontSize:12}});function E(e){return n.a.createElement(d.a,null,n.a.createElement(d.c,{size:"A4",style:p.page},n.a.createElement(d.f,{style:{marginTop:40}},n.a.createElement(d.e,{style:{textAlign:"center",fontSize:20}},"Intermountain Truck Rebuilders"),n.a.createElement(d.e,{style:{textAlign:"center",fontSize:14,marginTop:10}},"2927 S American Way Ogden, UT 84401"),n.a.createElement(d.e,{style:{textAlign:"center",fontSize:14,marginTop:10}},"800-950-9261"),n.a.createElement(d.f,{style:p.section},n.a.createElement(d.e,null,"Quote #: ",e.quoteNum),n.a.createElement(d.e,null,"Submitted to: ",e.companyName),n.a.createElement(d.e,null,"ATTN: ",e.customerName),n.a.createElement(d.e,null,"Date: ",b()().format("MM/DD/YYYY")),n.a.createElement(d.e,{style:{width:"80vw",borderBottom:1.5,marginTop:20,marginBottom:30}}),n.a.createElement(d.e,{style:{marginBottom:10}},"We are pleased to provide you with the following quote:"),n.a.createElement(d.e,{style:{textDecoration:"underline",margin:10}},"Description"),n.a.createElement(d.e,null,e.cabinet),n.a.createElement(d.e,null,e.tank),n.a.createElement(d.e,null,e.pump),n.a.createElement(d.e,null,e.meter),n.a.createElement(d.e,null,e.power),n.a.createElement(d.e,null,e.eStop),n.a.createElement(d.e,null,e.scale),n.a.createElement(d.e,null,e.shipping),n.a.createElement(d.e,null,e.purger),n.a.createElement(d.e,null,e.plumbingKit),n.a.createElement(d.e,{style:{textDecoration:"underline",margin:10}},"Adapter(s)"),n.a.createElement(d.e,null,e.none),n.a.createElement(d.e,null,e.euroStyle),n.a.createElement(d.e,null,e.forklift),n.a.createElement(d.e,null,e.hanson),n.a.createElement(d.e,null,e.pol),n.a.createElement(d.e,null,e.rv),n.a.createElement(d.e,null,e.highCapacity),n.a.createElement(d.e,{style:{textAlign:"right",marginTop:20,marginBottom:20,marginRight:70,fontSize:14}},"Total......",e.price),n.a.createElement(d.e,{style:{maxWidth:"60vw",fontSize:12}},"This bid does not include any taxes, licenses, permits or electrical. All work guaranteed to be installed to NFPA 58 2017. Warranty parts for 12 months."),n.a.createElement(d.f,{style:{display:"flex",flexDirection:"row",marginTop:30}},n.a.createElement(d.e,null,"Acceptance of Proposal"),n.a.createElement(d.e,{style:{marginLeft:100}},"Prepared By ",e.yourName)),n.a.createElement(d.f,{style:{display:"flex",flexDirection:"row",marginTop:40,maxWidth:"30vw",borderTop:1}},n.a.createElement(d.e,null,"The above prices, specifications terms and conditions are hereby accepted, and you are authorized to do the work as quoted."),n.a.createElement(d.e,{style:{marginLeft:50,width:200,borderTop:1}},"Terms: Quote valid for 90 days. ","          ","Taxes: Federal, state and local","  ","taxes not included. Shipping not included."))))))}var f=t(515),v=t(533),h=t(518),C=Object(f.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function O(e){var a=C(),t=n.a.useState(!1),l=Object(s.a)(t,2),r=l[0],c=l[1],o=function(){c(!1)};return n.a.createElement("div",null,n.a.createElement(h.a,{variant:"contained",color:"primary",style:{marginLeft:8,marginBottom:20},onClick:function(){c(!0)}},"Create Quote PDF"),n.a.createElement(v.a,{open:r,className:a.modal,onClose:o,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},n.a.createElement("div",{className:a.paper},n.a.createElement("h2",{id:"transition-modal-title"},"Dispenser Quote"),n.a.createElement("p",{id:"transition-modal-description"},"If everything looks good you can download or print the quote. If not"," ",n.a.createElement(h.a,{variant:"outlined",size:"small",onClick:o},"change the quote details")),n.a.createElement("br",null),n.a.createElement(d.b,{width:800,height:800},n.a.createElement(E,e)))))}var j=t(520),S=t(521),y=t(529),k=t(523),N=t(477),P=t(522),w=t(534),T=t(535),A=t(524),x=t(531),D=t(527),G=t(528),I=t(532),M=t(530),F=t(536),R=Object(f.a)((function(e){return{root:{flexGrow:1},card:{maxWidth:900,flexGrow:1,margin:"auto",marginTop:30,marginBottom:30},title:{margin:"auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},formControl:{margin:e.spacing(1),minWidth:250},selectEmpty:{marginTop:e.spacing(2)},quoteButton:{margin:8},logo:{display:"block",maxWidth:200,margin:"auto"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},inputs:{}}}));function V(){var e=R(),a=n.a.useState(""),t=Object(s.a)(a,2),l=t[0],r=t[1],c=n.a.useState(0),o=Object(s.a)(c,2),i=o[0],d=o[1],g=n.a.useState({cabinet:"",tank:"",pump:"",meter:"",power:"",eStop:"",scale:"",shipping:"",purger:"",plumbingKit:"",quoteNum:"",companyName:"",customerName:"",yourName:"",none:"",euroStyle:"",forklift:"",hanson:"",pol:"",rv:"",highCapacity:""}),b=Object(s.a)(g,2),p=b[0],E=b[1],f=n.a.useState(""),v=Object(s.a)(f,2),C=v[0],V=v[1],B=n.a.useState(0),W=Object(s.a)(B,2),z=W[0],H=W[1],L=n.a.useState(""),K=Object(s.a)(L,2),q=K[0],Q=K[1],Y=n.a.useState(0),U=Object(s.a)(Y,2),J=U[0],$=U[1],X=n.a.useState(""),Z=Object(s.a)(X,2),_=Z[0],ee=Z[1],ae=n.a.useState(0),te=Object(s.a)(ae,2),le=te[0],ne=te[1],re=n.a.useState(""),ce=Object(s.a)(re,2),oe=ce[0],ie=ce[1],me=n.a.useState(0),ue=Object(s.a)(me,2),se=ue[0],de=ue[1],ge=n.a.useState(""),be=Object(s.a)(ge,2),pe=be[0],Ee=be[1],fe=n.a.useState(0),ve=Object(s.a)(fe,2),he=ve[0],Ce=ve[1],Oe=n.a.useState(""),je=Object(s.a)(Oe,2),Se=je[0],ye=je[1],ke=n.a.useState(0),Ne=Object(s.a)(ke,2),Pe=Ne[0],we=Ne[1],Te=n.a.useState(""),Ae=Object(s.a)(Te,2),xe=Ae[0],De=Ae[1],Ge=n.a.useState(0),Ie=Object(s.a)(Ge,2),Me=Ie[0],Fe=Ie[1],Re=n.a.useState(""),Ve=Object(s.a)(Re,2),Be=Ve[0],We=Ve[1],ze=n.a.useState(0),He=Object(s.a)(ze,2),Le=He[0],Ke=He[1],qe=n.a.useState(""),Qe=Object(s.a)(qe,2),Ye=Qe[0],Ue=Qe[1],Je=n.a.useState(0),$e=Object(s.a)(Je,2),Xe=$e[0],Ze=$e[1],_e=n.a.useState(0),ea=Object(s.a)(_e,2),aa=ea[0],ta=ea[1],la=n.a.useState(0),na=Object(s.a)(la,2),ra=na[0],ca=na[1],oa=n.a.useState(0),ia=Object(s.a)(oa,2),ma=ia[0],ua=ia[1],sa=n.a.useState(!1),da=Object(s.a)(sa,2),ga=da[0],ba=da[1],pa=n.a.useState({None:!1,EuroStyle:!1,Forklift:!1,Hanson:!1,POL:!1,RV:!1,HighCapacity:!1}),Ea=Object(s.a)(pa,2),fa=Ea[0],va=Ea[1],ha=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Ca=n.a.useState(0),Oa=Object(s.a)(Ca,2),ja=Oa[0],Sa=Oa[1],ya=n.a.useState(0),ka=Object(s.a)(ya,2),Na=ka[0],Pa=ka[1],wa=n.a.useState(0),Ta=Object(s.a)(wa,2),Aa=Ta[0],xa=Ta[1],Da=n.a.useState(0),Ga=Object(s.a)(Da,2),Ia=Ga[0],Ma=Ga[1],Fa=n.a.useState(0),Ra=Object(s.a)(Fa,2),Va=Ra[0],Ba=Ra[1],Wa=n.a.useState(0),za=Object(s.a)(Wa,2),Ha=za[0],La=za[1],Ka=fa.None,qa=fa.EuroStyle,Qa=fa.Forklift,Ya=fa.Hanson,Ua=fa.POL,Ja=fa.RV,$a=fa.HighCapacity;return n.a.useEffect((function(){ta(i+z+J+le+se+he+Pe+Me+Le+Xe+ja+Na+Aa+Ia+Va+Ha-ma)})),n.a.createElement("div",{className:e.root},n.a.createElement(j.a,{position:"static"},n.a.createElement(S.a,null,n.a.createElement(N.a,{variant:"h6",className:e.title},"Dispenser Quote Builder"))),n.a.createElement(P.a,{className:e.card},n.a.createElement(k.a,null,n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Cabinet"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:l,onChange:function(e){r(e.target.value),"- 010 Dispenser Cabinet"===e.target.value?d(15100):"- 001 Dispenser Cabinet"===e.target.value?d(14260):"- 001 Auto-gas Cabinet"===e.target.value?d(15240):"- AGE Auto-gas Cabinet"===e.target.value?d(19350):"- AGC01 Auto-gas Cabinet"===e.target.value?d(22080):"- No Cabinet"===e.target.value&&d(0),E(Object(u.a)(Object(u.a)({},p),{},{cabinet:e.target.value}))}},n.a.createElement(T.a,{value:"- No Cabinet"},"None"),n.a.createElement(T.a,{value:"- 010 Dispenser Cabinet"},"010 Dispenser Cabinet"),n.a.createElement(T.a,{value:"- 001 Dispenser Cabinet"},"001 Dispenser Cabinet"),n.a.createElement(T.a,{value:"- 001 Auto-gas Cabinet"},"001 Auto-gas Cabinet"),n.a.createElement(T.a,{value:"- AGE Auto-gas Cabinet"},"AGE Auto-gas Cabinet"),n.a.createElement(T.a,{value:"- AGC01 Auto-gas Cabinet"},"AGC01 Auto-gas Cabinet"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Tank"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:C,onChange:function(e){V(e.target.value),"- No Tank"===e.target.value?H(-3510):"- 500 Gallon Tank"===e.target.value?H(-691):"- 1000 Gallon Tank"===e.target.value?H(0):"- Customer Supplied Tank"===e.target.value?H(-2410):"- Vertical 1000 Gallon Tank"===e.target.value?H(7240):"- 1990 Gallon Tank"===e.target.value&&H(6230),E(Object(u.a)(Object(u.a)({},p),{},{tank:e.target.value}))}},n.a.createElement(T.a,{value:"- No Tank"},"No Tank"),n.a.createElement(T.a,{value:"- Customer Supplied Tank"},"Customer Supplied Tank"),n.a.createElement(T.a,{value:"- 500 Gallon Tank"},"500 Gallon"),n.a.createElement(T.a,{value:"- 1000 Gallon Tank"},"1000 Gallon"),n.a.createElement(T.a,{value:"- Vertical 1000 Gallon Tank"},"Vertical 1000"),n.a.createElement(T.a,{value:"- 1990 Gallon Tank"},"1990 Gallon"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Pump"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:q,onChange:function(e){Q(e.target.value),"- Corken C10 2hp Pump"===e.target.value?$(0):"- Corken C12 2hp Pump"===e.target.value?$(750):"- Corken C16 3hp Single Phase Pump"===e.target.value?$(2038):"- Corken C16 3hp Three Phase Pump"===e.target.value?$(1084):"- Ebsray RC20 3hp Single Phase Pump"===e.target.value&&$(3539),E(Object(u.a)(Object(u.a)({},p),{},{pump:e.target.value}))}},n.a.createElement(T.a,{value:"- Corken C10 2hp Pump"},"Corken C10 2hp"),n.a.createElement(T.a,{value:"- Corken C12 2hp Pump"},"Corken C12 2hp"),n.a.createElement(T.a,{value:"- Corken C16 3hp Single Phase Pump"},"Corken C16 3hp Single Phase"),n.a.createElement(T.a,{value:"- Corken C16 3hp Three Phase Pump"},"Corken C16 3hp Three Phase"),n.a.createElement(T.a,{value:"- Ebsray RC20 3hp Single Phase Pump"},"Ebsray RC20 3hp Single Phase"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Meter"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:_,onChange:function(e){ee(e.target.value),"- No Meter"===e.target.value?ne(-840):"- Non Temp Comp Meter"===e.target.value?ne(0):"- Temp Comp Meter"===e.target.value?ne(1084):"- Midcom MCR-09ISA Meter"===e.target.value&&ne(4606),E(Object(u.a)(Object(u.a)({},p),{},{meter:e.target.value}))}},n.a.createElement(T.a,{value:"- No Meter"},"No Meter"),n.a.createElement(T.a,{value:"- Non Temp Comp Meter"},"Non Temp Comp"),n.a.createElement(T.a,{value:"- Temp Comp Meter"},"Temp Comp"),n.a.createElement(T.a,{value:"- Midcom MCR-09ISA Meter"},"Midcom MCR-09ISA"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Power"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:oe,onChange:function(e){ie(e.target.value),"- Wired for 110V AC"===e.target.value||"- Wired for 220V AC"===e.target.value?de(0):"- Skidded Off Grid Generator"===e.target.value&&de(8260),E(Object(u.a)(Object(u.a)({},p),{},{power:e.target.value}))}},n.a.createElement(T.a,{value:"- Wired for 110V AC"},"110V AC"),n.a.createElement(T.a,{value:"- Wired for 220V AC"},"220V AC"),n.a.createElement(T.a,{value:"- Skidded Off Grid Generator"},"Skidded Off Grid Generator"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"E-Stop"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:pe,onChange:function(e){Ee(e.target.value),"- Cable Pull Emergency Shutdown"===e.target.value?Ce(0):"- Pneumatic Emergency Shutdown"===e.target.value?Ce(950):"- Pneumatic and Electric Emergency Shutdown"===e.target.value&&Ce(2e3),E(Object(u.a)(Object(u.a)({},p),{},{eStop:e.target.value}))}},n.a.createElement(T.a,{value:"- Cable Pull Emergency Shutdown"},"Cable Pull Internal Shutdown"),n.a.createElement(T.a,{value:"- Pneumatic Emergency Shutdown"},"Pneumatic Internal Shutdown"),n.a.createElement(T.a,{value:"- Pneumatic and Electric Emergency Shutdown"},"Pneumatic and Electric Internal Shutdown"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Scale"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:Se,onChange:function(e){ye(e.target.value),"- Customer Supplied Scale"===e.target.value?we(0):"- Manual Beam Scale"===e.target.value?we(792):"- Fairbank E-Scale Filling System"===e.target.value&&we(12600),E(Object(u.a)(Object(u.a)({},p),{},{scale:e.target.value}))}},n.a.createElement(T.a,{value:"- Customer Supplied Scale"},"Customer Supplied Scale"),n.a.createElement(T.a,{value:"- Manual Beam Scale"},"Manual Beam Scale"),n.a.createElement(T.a,{value:"- Fairbank E-Scale Filling System"},"Fairbank E-Scale Filling System"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Shipping"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:xe,onChange:function(e){De(e.target.value),"- Customer Pickup"===e.target.value?Fe(0):"- Nationwide Delivery"===e.target.value&&Fe(950),E(Object(u.a)(Object(u.a)({},p),{},{shipping:e.target.value}))}},n.a.createElement(T.a,{value:"- Customer Pickup"},"Custom Pickup"),n.a.createElement(T.a,{value:"- Nationwide Delivery"},"Nationwide Delivery"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Purger"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:Be,onChange:function(e){We(e.target.value),"- No Cylinder Purge System"===e.target.value?Ke(0):"- Cylinder Purge System"===e.target.value&&Ke(336.5),E(Object(u.a)(Object(u.a)({},p),{},{purger:e.target.value}))}},n.a.createElement(T.a,{value:"- No Cylinder Purge System"},"No Cylinder Purge System"),n.a.createElement(T.a,{value:"- Cylinder Purge System"},"Cylinder Purge System"))),n.a.createElement(A.a,{variant:"filled",className:e.formControl},n.a.createElement(w.a,{id:"demo-simple-select-filled-label"},"Plumbing Kit"),n.a.createElement(x.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:Ye,onChange:function(e){Ue(e.target.value),"- No Plumbing Kit"===e.target.value?Ze(0):"- Plumbing Kit"===e.target.value&&Ze(900),E(Object(u.a)(Object(u.a)({},p),{},{plumbingKit:e.target.value}))}},n.a.createElement(T.a,{value:"- No Plumbing Kit"},"No Plumbing Kit"),n.a.createElement(T.a,{value:"- Plumbing Kit"},"Plumbing Kit"))),n.a.createElement("br",null),n.a.createElement(A.a,{component:"fieldset",className:e.formControl},n.a.createElement(D.a,null,n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:Ka,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.value))),"None"===e.target.name&&!0===e.target.checked?E(Object(u.a)(Object(u.a)({},p),{},{none:"- None"})):E(Object(u.a)(Object(u.a)({},p),{},{none:""}))},name:"None"}),label:"None"}),n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:qa,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.checked))),"EuroStyle"===e.target.name&&!0===e.target.checked?(Sa(115.68),E(Object(u.a)(Object(u.a)({},p),{},{euroStyle:"- Euro Style Staubli"}))):(Sa(0),E(Object(u.a)(Object(u.a)({},p),{},{euroStyle:""})))},name:"EuroStyle"}),label:"Euro Style Staubli Adapter"}),n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:Qa,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.checked))),"Forklift"===e.target.name&&!0===e.target.checked?(Pa(68.98),E(Object(u.a)(Object(u.a)({},p),{},{forklift:"- Forklift"}))):(Pa(0),E(Object(u.a)(Object(u.a)({},p),{},{forklift:""})))},name:"Forklift"}),label:"Forklift Adapter"}),n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:Ya,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.checked))),"Hanson"===e.target.name&&!0===e.target.checked?(xa(15),E(Object(u.a)(Object(u.a)({},p),{},{hanson:"- Hanson"}))):(xa(0),E(Object(u.a)(Object(u.a)({},p),{},{hanson:""})))},name:"Hanson"}),label:"Hanson Adapter"}),n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:Ua,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.checked))),"POL"===e.target.name&&!0===e.target.checked?(Ma(61.97),E(Object(u.a)(Object(u.a)({},p),{},{pol:"- POL"}))):(Ma(0),E(Object(u.a)(Object(u.a)({},p),{},{pol:""})))},name:"POL"}),label:"POL Adapter"}),n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:Ja,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.checked))),"RV"===e.target.name&&!0===e.target.checked?(Ba(36.94),E(Object(u.a)(Object(u.a)({},p),{},{rv:"- RV"}))):(Ba(0),E(Object(u.a)(Object(u.a)({},p),{},{rv:""})))},name:"RV"}),label:"RV Filling Adapter"}),n.a.createElement(G.a,{control:n.a.createElement(I.a,{checked:$a,onChange:function(e){va(Object(u.a)(Object(u.a)({},fa),{},Object(m.a)({},e.target.name,e.target.checked))),"HighCapacity"===e.target.name&&!0===e.target.checked?(La(131.84),E(Object(u.a)(Object(u.a)({},p),{},{highCapacity:"- High Capacity"}))):(La(0),E(Object(u.a)(Object(u.a)({},p),{},{highCapacity:""})))},name:"HighCapacity"}),label:"High Capacity Filling Adapter"})))),n.a.createElement(y.a,null,n.a.createElement(M.a,{container:!0,spacing:2,direction:"column"},n.a.createElement(M.a,{item:!0,xs:6},n.a.createElement(N.a,{style:{fontSize:20,fontWeight:"bold",marginLeft:20,color:"green"}},"Total: ",ha.format(aa))),n.a.createElement(M.a,{item:!0},n.a.createElement(F.a,{id:"outlined-basic",label:"Discount %",variant:"outlined",onChange:function(e){return ca(e.target.value)}})),n.a.createElement(M.a,{item:!0},n.a.createElement(h.a,{size:"small",variant:"contained",color:"primary",disabled:ga,onClick:function(){return console.log("discount percentage: ",ra,"total: ",aa),ua(ra/100*aa),ba(!0),void console.log("discount total: ",aa-ma)}},"Add Discount"),n.a.createElement(h.a,{style:{marginLeft:10},size:"small",variant:"contained",color:"secondary",onClick:function(){return ua(0),void ba(!1)}},"Reset")))),n.a.createElement("div",{style:{margin:8}},n.a.createElement(N.a,{style:{fontSize:16,margin:20}},"To create a PDF enter Quote #, Comapny Name, Customer Name and Your Name then click CREATE QUOTE PDF"),n.a.createElement("form",{className:e.inputs,noValidate:!0,autoComplete:"off"},n.a.createElement(M.a,{container:!0,spacing:2,direction:"row",justify:"center"},n.a.createElement(M.a,{item:!0,xs:6,sm:3},n.a.createElement(F.a,{id:"outlined-basic",label:"Quote #",variant:"outlined",onChange:function(e){return E(Object(u.a)(Object(u.a)({},p),{},{quoteNum:e.target.value}))}})),n.a.createElement(M.a,{item:!0,xs:6,sm:3},n.a.createElement(F.a,{id:"outlined-basic",label:"Company Name",variant:"outlined",onChange:function(e){return E(Object(u.a)(Object(u.a)({},p),{},{companyName:e.target.value}))}})),n.a.createElement(M.a,{item:!0,xs:6,sm:3},n.a.createElement(F.a,{id:"outlined-basic",label:"Customer Name",variant:"outlined",onChange:function(e){return E(Object(u.a)(Object(u.a)({},p),{},{customerName:e.target.value}))}}))," ",n.a.createElement(M.a,{item:!0,xs:6,sm:3},n.a.createElement(F.a,{id:"outlined-basic",label:"Your Name",variant:"outlined",onChange:function(e){return E(Object(u.a)(Object(u.a)({},p),{},{yourName:e.target.value}))}}))))),n.a.createElement(O,Object.assign({},p,{adapterState:[fa],price:ha.format(aa)}))))}t(474);var B=function(){return n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/"},n.a.createElement(V,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[286,1,2]]]);
//# sourceMappingURL=main.932a26b3.chunk.js.map