(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/MYFACE.8ae0461b.jpg"},16:function(e,a,t){e.exports=t.p+"static/media/pika.72c456b2.png"},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),s=t(8),i=t(1),m=t(2),o=t(4),u=t(3),d=t(5),E=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.data,a=e.name,t=e.occupation,n=e.objective,r=e.address;return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#home"},"home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"about")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"contact me")))),l.a.createElement("div",{className:"row banner banner-text"},l.a.createElement("h1",null,a," ",l.a.createElement("span",{style:{"font-size":"9pt",font:"helvetica"}},"thats me")),l.a.createElement("h3",null," I'm a ",r.city," based ",l.a.createElement("span",null,t)," who is ",n)))}}]),a}(n.Component),p=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={name:"James Rundle",bio:"Hi I am James\nI like programming!\n 3 time semi-pro tummy-stick league champion, midwest division  U+1F60E",address0:{street:"123 Drury Lane",city:"Seattle",state:"Washington",zip:"67460"},address:{street:"123 Drury Lane",theRest:"Seatle, WA 12345"},phone:"111-222-3333",email:"jamesamrundle@gmail.com",image:"./images/MYFACE.jpg"},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){console.log("env?",this.props.env);var e=this.props.data,a=e.bio,n=e.address,r=e.phone,c=e.email,s=e.name;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"grid"},l.a.createElement("div",{className:"pic"},l.a.createElement("img",{className:"profile-pic",src:t(15),alt:"my beautiful personage"}),l.a.createElement("img",{className:"profile-pic",src:"images/redhat.jpg",alt:"my beautiful personage"})),l.a.createElement("div",{className:"main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a),l.a.createElement("div",{className:"contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",null,l.a.createElement("span",null,s)," ",l.a.createElement("br",null),l.a.createElement("span",null,n.street)," ",l.a.createElement("br",null),l.a.createElement("span",null,n.city," ",n.state,", ",n.zip),l.a.createElement("br",null)))),l.a.createElement("div",{className:"download down-col"},l.a.createElement("p",null,l.a.createElement("a",{href:t(16),className:"button",download:!0},l.a.createElement("i",{className:"fa fa-download"}),l.a.createElement("span",null,"Download Resume")),l.a.createElement("a",{href:"/resume.pdf",className:"button",download:!0},l.a.createElement("button",null,"Download Resume")))),l.a.createElement("div",{className:"main-col"},l.a.createElement("p",null,l.a.createElement("span",null,r),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null)))))}}]),a}(n.Component),h=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).education=function(){return t.props.data.education.map(function(e){return l.a.createElement("div",{key:e.name},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.degreeAndGpa," ",e.year)," ",l.a.createElement("br",null),l.a.createElement("p",null," ",e.description," "))})},t.work=function(){return t.props.data.jobs.map(function(e){return l.a.createElement("div",null,l.a.createElement("h3",null,e.company),l.a.createElement("p",null,e.title," ",e.date),l.a.createElement("p",null,e.description))})},t.skills=function(){return t.props.data.skills.map(function(e){var a="bar-expand "+e.name;return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))})},console.log(t.props),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"education"},l.a.createElement("h1",{className:"header-col"},l.a.createElement("span",null,"Education")),l.a.createElement("div",{className:"main-col"},this.education())),l.a.createElement("div",{className:"work"},l.a.createElement("h1",{className:"header-col"},l.a.createElement("span",null,"Employment")),l.a.createElement("div",{className:"main-col"},this.work())),l.a.createElement("div",{className:"skill"},l.a.createElement("h1",{className:"header-col"},l.a.createElement("span",null,"Skills")),l.a.createElement("div",{className:"main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("list",{className:"skills"},this.skills())))))}}]),a}(n.Component),b=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2017 Henri Leroy "),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{href:"https://www.linkedin.com/in/letuscode/"},"Jason Williams"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{title:"back to top",className:"smoothscroll",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))},v=function(e){return l.a.createElement("section",{id:"contact"},l.a.createElement("p",{className:""},"feel free to contact me. ill return your message so we can keep in touch."),l.a.createElement("div",{className:""},l.a.createElement("form",{id:"contact-form"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",null,"Name *"),l.a.createElement("input",{type:"text",placeholder:"name required",name:"name",required:!0,onChange:e.saveData})),l.a.createElement("div",null,l.a.createElement("label",null,"Email address *"),l.a.createElement("input",{type:"text",placeholder:"email required",required:!0,name:"email",onChange:e.saveData})),l.a.createElement("div",null,l.a.createElement("label",null,"Subject"),l.a.createElement("input",{type:"text",placeholder:" message subject",name:"subject",onChange:e.saveData})),l.a.createElement("div",null,l.a.createElement("label",null,"Message *"),l.a.createElement("textarea",{cols:"40",rows:"15",placeholder:"main message",required:!0,name:"message",onChange:e.saveData})),e.error?l.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show main-col"},l.a.createElement("strong",null,"Sending Error!!!"),"  Failed to send feedback. Error : ",e.error):null,l.a.createElement("button",{type:"submit",className:"submit",onClick:e.submitData},"Submit")))))},f={main:{name:"James Rundle",bio:"Hi I am James\nI like programming!\n \n3 time semi-pro tummy-stick league champion, midwest division",address:{street:"123 Drury Lane",city:"Seattle",state:"Washington",zip:"67460"},phone:"111-222-3333",email:"jamesamrundle@gmail.com",image:"./images/MYFACE.jpg",objective:"Interested in securing an internship in which I both leverage and expand my coding skills",occupation:"Aspiring Software Developer"},resume:{education:[{name:"College of Charleston",degreeAndGpa:"Bachelors of Computer Science : 3.5 ",year:"2021",description:"As a non traditional student I secured a multiple Summer internship at Boeing during my first semester. In consequent semester I maintained active involvment and leadership in department clubs and was lead developer on the M^3 project in Dr. Bowrings research lab.  "}],jobs:[{company:"Serta",date:"2007 - 2015",title:"Cheif Quaility Assurance Officer, Pillow Division",description:"Rigourously testing pillows up to 10,000 successive face plants to ensure maximum integrity and analyze cool-side capacity thresholds"},{company:"Lego",date:"2017- current",title:"Materials engineer",description:"Used non-euclidian geometry, 6th dimensional cthonic sorcery and precalculus to increase foot-pain-infliction by .427 percent"}],skills:[{name:"Java Brewing",level:"60%"},{name:"Python Charming",level:"55%"},{name:"PHPhuck dat",level:"-70%"},{name:"Spelling words comprised of the letter 'C'",level:"23%"},{name:"Confections and Sweet-craft",level:"80%"}]}},g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).required=["email","name","message"],t.saveData=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(s.a)({},n,l))},t.submitData=function(e){e.preventDefault();var a=!0,n=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,r=function(e){return l.a.createElement("p",null,'"Please enter a valid " ',e," ")},c=[],s=!0,i=!1,m=void 0;try{for(var o,u=t.required[Symbol.iterator]();!(s=(o=u.next()).done);s=!0){var d=o.value;if(console.log("each",d,":",t.state.each),console.log("each = ",""===d),"email"===d){var E=n.test(t.state.email);a=E,E||(c=c.concat(r(d)))}""!==t.state[d]&&void 0!==t.state[d]||(a=!1,c=c.concat(r(d)))}}catch(p){i=!0,m=p}finally{try{s||null==u.return||u.return()}finally{if(i)throw m}}console.log("submit data : ",t.state,a),!0===a?(t.sendFeedback(),t.setState({formSubmitted:!0})):t.setState({formSubmitted:!1,error:c})},t.state={name:"",message:"",email:"",subject:""},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"sendFeedback",value:function(){var e=this,a=this.state,t=a.name,n=a.message,l=a.email,r=a.subject,c=Object({NODE_ENV:"production",PUBLIC_URL:"/LiveTest",REACT_APP_EMAILJS_USERID:"user_lCRh4OJomulXD9e99jVgd",REACT_APP_EMAILJS_TEMPLATEID:"contact_form",REACT_APP_EMAILJS_RECEIVER:"jamesamrundle@gmail.com",REACT_APP_NUMBER:"5"}),s=c.REACT_APP_EMAILJS_USERID,i=c.REACT_APP_EMAILJS_TEMPLATEID;window.emailjs.send("jamesamrundle@gmail.com",i,{name:t,message:n,email:l,subject:r},s).then(function(a){e.setState({formEmailSent:!0},document.getElementById("contact-form").reset())}).catch(function(a){console.log("Failed to send feedback. Error: ",a),e.setState({error:"Failed to send feedback. Error "+a.status+":"+a.text})})}},{key:"render",value:function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/LiveTest",REACT_APP_EMAILJS_USERID:"user_lCRh4OJomulXD9e99jVgd",REACT_APP_EMAILJS_TEMPLATEID:"contact_form",REACT_APP_EMAILJS_RECEIVER:"jamesamrundle@gmail.com",REACT_APP_NUMBER:"5"})),console.log("production"),l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:f.main}),l.a.createElement(p,{data:f.main}),l.a.createElement(h,{data:f.resume}),l.a.createElement(v,{saveData:this.saveData,submitData:this.submitData,error:this.state.error}),l.a.createElement(b,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5c8d6260.chunk.js.map