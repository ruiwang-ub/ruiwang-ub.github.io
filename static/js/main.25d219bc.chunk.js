(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{29:function(e,t,s){},32:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(14),n=s.n(c),i=(s(29),s(6)),r=s(7),o=s(9),l=s(8),d=s(16),j=s(21),h=s.n(j),m=(s(32),s(22)),b=s(4),u=s.n(b),O=s(17),p=s(1),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.googleScholar,t=this.props.data.researchgate,s=this.props.data.name,a=this.props.data.description,c="images/"+this.props.data.image;return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)(m.a,{type:"square",bg:!0,num:20}),Object(p.jsxs)("nav",{id:"nav-wrap",children:[Object(p.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(p.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(p.jsxs)("ul",{id:"nav",className:"nav",children:[Object(p.jsx)("li",{className:"current",children:Object(p.jsx)("a",{className:"smoothscroll hover",href:"#home",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll hover",href:"#about",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll hover",href:"#resume",children:"CV"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll hover",href:"#portfolio",children:"Projects"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{className:"smoothscroll hover",href:"#contact",children:"Contact"})})]})]}),Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)(u.a,{bottom:!0,children:Object(p.jsx)("div",{className:"align-center two",style:{marginBottom:"20px"},children:Object(p.jsx)("img",{className:"profile-pic",src:c,alt:"Wang Rui's image",style:{borderRadius:"20px"}})})}),Object(p.jsx)(u.a,{bottom:!0,children:Object(p.jsx)("h1",{className:"responsive-headline",children:s})}),Object(p.jsx)(u.a,{bottom:!0,duration:1200,children:a.split(".").map((function(e,t){return Object(p.jsxs)("h3",{children:[e,"."]},e+t)}))}),Object(p.jsx)("hr",{}),Object(p.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(p.jsxs)("ul",{className:"social row phone-display",children:[Object(p.jsxs)("a",{href:e,className:" button btn googleScholar-btn hover-effect1",children:[Object(p.jsx)("i",{children:Object(p.jsx)(O.a,{})}),"Google Scholor"]}),Object(p.jsxs)("a",{href:t,className:" button btn researchgate-btn hover-effect1",children:[Object(p.jsx)("i",{children:Object(p.jsx)(O.b,{})}),"ResearchGate"]})]})})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),f=x,v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(u.a,{bottom:!0,children:Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("ul",{className:"social-links",children:e}),Object(p.jsx)("ul",{className:"copyright",children:Object(p.jsx)("li",{children:"\xa9 Copyright 2022"})})]})}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),g=v,y=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data,s=t.email,a=t.twitter,c=function(){return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"columns contact-details",children:[Object(p.jsx)("h2",{children:"Contact Details"}),Object(p.jsxs)("p",{className:"address",children:[Object(p.jsx)("span",{children:e}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:["Email: ",s]}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:["Twitter: ",a]})]})]})})},n=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"About Me"}),Object(p.jsx)("p",{dangerouslySetInnerHTML:{__html:'\nMy name is Rui Wang, I am currently a Ph.D. student in Communication at the University at Buffalo, the State University of New York. I earned my master\'s degree in Communication from Rutgers University-New Brunswick. Before starting my doctoral study at UB, I worked as a professor in School of Journalism and Communication at Anhui Normal University in China.\n<br/><br/>My educational background is always along the line of mass communication and journalism, which determines my research interests to some degree. As an early-stage researcher, I am always open to new knowledge and interesting research areas. But I have some specific research interests for now. Broadly, I study media effects, political communication, political polarization, media trust, and human-machine communication. Specifically, my ongoing projects are about 1) how AI as a communicator may ameliorate the declining news trust and debunk misinformation; 2) social bots activity in online environment; 3) information flow in the hybrid media system; 4) the perception AI in different roles in the communication process. In a nutshell, my ambition is to combine emerging technologies (e.g. AI), journalism, and political communication to propel and develop communication research.\n<br/><br/>The primary research methods I used are computational methods and experimental designs. Some of my studies employed the supervised and unsupervised machine learning approach to analyze social media contents, combined with social network analysis and community detection to examine information flow and important actors in this process. Some of my studies used experiments to test media effects and perceptions. Most of my data analysis work is accomplished by R programming. I also had experience in SPSS, SQL, and Python.   \n<br/><br/>I love teamwork. For scientific study, collective intelligence and endeavors are always the foremost credos. I am working closely with a group of great and smart scholars in the world. We have presented and published many interesting studies collaboratively. Please check <a href="https://ophiryotam.com/lab.html" target="_blank"> Meme lab</a> and <a target="_blank" href="https://cemlab.github.io/">CEM lab</a>\n<br/><br/>As for my personal life, I am a huge fan of music.I love singing and playing instruments.I am an Er - hu and keyboard player.Since I became a mom in 2020, my life centers on my little cute girl a lot.Her smile is my biggest motivation.Apart from that, I love workout, photography, traveling, and cooking. \n\n'}})]})};return Object(p.jsx)("section",{id:"about",children:Object(p.jsx)(u.a,{duration:1e3,children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:" columns main-col",children:[Object(p.jsx)(n,{}),Object(p.jsx)(c,{})]})})})})}}]),s}(a.Component),N=y,w=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;console.log("this.props.data.resumedownload",this.props.data);var e=this.props.data.resumedownload,t=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.school}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.company}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("em",{className:"date",children:e.years})]}),Object(p.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.conference.map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"info",dangerouslySetInnerHTML:{__html:(s=e,a="Wang, R",s.replace(a,"<b>".concat(a,"</b>")))}})},t);var s,a}));return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Lab"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Conference Presentations"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(p.jsx)(u.a,{left:!0,duration:1300,children:Object(p.jsxs)("div",{className:"row align-center download",children:[Object(p.jsx)("p",{children:Object(p.jsxs)("a",{href:e,className:"button",target:"_blank",children:[Object(p.jsx)("i",{className:"fa fa-download"}),"Download CV"]})}),Object(p.jsx)("span",{children:Object(p.jsx)("span",{})})]})})]})}}]),s}(a.Component),k=w,I=s(15),S=s.n(I),C=s(24),D=function(e){var t=e.data,s=Object(a.useRef)();if(!t)return null;var c=t.contactmessage;return Object(p.jsxs)("section",{id:"contact",children:[Object(p.jsx)(b.Fade,{bottom:!0,duration:1e3,children:Object(p.jsxs)("div",{className:"row section-head",children:[Object(p.jsx)("div",{className:"two columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Get In Touch."})})}),Object(p.jsx)("div",{className:"eight columns",children:Object(p.jsx)("p",{className:"lead",children:c})})]})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(b.Slide,{left:!0,duration:1e3,children:Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("form",{ref:s,onSubmit:function(e){e.preventDefault(),C.a.sendForm("service_3yuvavk","template_6uvud5d",s.current,"-Dj7J4oZ6CMt-aF35").then((function(e){console.log(e.text),S.a.fire({icon:"success",title:"Message Sent Successfully"})}),(function(e){console.log(e.text),S.a.fire({icon:"error",title:"Ooops, something went wrong",text:e.text})})),e.target.reset()},children:Object(p.jsxs)("fieldset",{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("input",{type:"text",size:"35",id:"contactName",name:"from_name"})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("input",{type:"email",size:"35",id:"contactEmail",name:"user_email"})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(p.jsx)("span",{className:"required",children:"*"})]}),Object(p.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"submit",type:"submit",children:"Submit"}),Object(p.jsx)("span",{id:"image-loader",children:Object(p.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(p.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(p.jsxs)("div",{id:"message-success",children:[Object(p.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(p.jsx)("br",{})]})]})})})]})},M=s(23),A=s.n(M),F=0,_=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(p.jsx)("div",{className:"columns portfolio-item",children:Object(p.jsxs)("div",{className:"item-wrap",children:[Object(p.jsx)(A.a,{alt:e.title,src:t}),Object(p.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},F++)}));return Object(p.jsx)("section",{id:"portfolio",children:Object(p.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"twelve columns collapsed",children:[Object(p.jsx)("h1",{children:"Projects"}),Object(p.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf",children:e})]})})})})}}]),s}(a.Component),B=_,R=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(f,{data:this.state.resumeData.main}),Object(p.jsx)(N,{data:this.state.resumeData.main}),Object(p.jsx)(k,{data:this.state.resumeData.resume}),Object(p.jsx)(B,{data:this.state.resumeData.portfolio}),Object(p.jsx)(D,{data:this.state.resumeData.main}),Object(p.jsx)(g,{data:this.state.resumeData.main})]})}}]),s}(a.Component),E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};s(54);n.a.render(Object(p.jsx)(R,{}),document.getElementById("root")),E()}},[[55,1,2]]]);
//# sourceMappingURL=main.25d219bc.chunk.js.map