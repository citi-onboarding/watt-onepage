(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,a){e.exports=a(73)},32:function(e,t,a){},33:function(e,t,a){},52:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(12),i=a.n(l),o=(a(32),a(3)),r=a(4),c=a(7),m=a(5),d=a(6),u=(a(33),a(9)),h=a.n(u),g=a(13),v=a(2),f=a(14),E=a.n(f),p=(a(52),a(8)),b=a.n(p),O=(a(54),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).callApi=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:3000/contato");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),a.sendEmail=a.sendEmail.bind(Object(v.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(v.a)(a)),a.handleEmailChange=a.handleEmailChange.bind(Object(v.a)(a)),a.handleTelChange=a.handleTelChange.bind(Object(v.a)(a)),a.handleAssuntoChange=a.handleAssuntoChange.bind(Object(v.a)(a)),a.handleMesageChange=a.handleMesageChange.bind(Object(v.a)(a)),a.state={nome:"",email:"",tel:"",assunto:"",mensagem:"",media_contato:"",email_contato:"",address_contato:"",phone_contato:"",imagem_contato:"",flag:!0},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callApi().then((function(t){return e.setState({media_contato:t.data[0].media,email_contato:t.data[0].email,address_contato:t.data[0].address,phone_contato:t.data[0].phone,imagem_contato:t.data[0].imagens[0].url})}))}},{key:"handleNameChange",value:function(e){this.setState({nome:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleAssuntoChange",value:function(e){this.setState({assunto:e.target.value})}},{key:"handleMesageChange",value:function(e){this.setState({mensagem:e.target.value})}},{key:"handleTelChange",value:function(e){this.setState({tel:e.target.value})}},{key:"sendEmail",value:function(e){var t=this;this.setState({flag:!this.state.flag});var a=this.state.nome,n=this.state.email,s=this.state.tel,l=this.state.assunto,i=this.state.mensagem;Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("http://localhost:3000/contato",{nome:a,email:n,tel:s,assunto:l,mensagem:i});case 3:200===e.sent.status?(t.setState({flag:!t.state.flag}),p.store.addNotification({title:"Enviado!",message:"Mensagem enviada",type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}})):(t.setState({flag:!t.state.flag}),p.store.addNotification({title:"Erro ao enviar!",message:"Tente novamente mais tarde",type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t.setState({flag:!t.state.flag}),p.store.addNotification({title:"Erro ao enviar!",message:"Tente novamente mais tarde",type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))(),e.preventDefault()}},{key:"render",value:function(){var e={backgroundImage:"url("+this.state.imagem_contato+")"};return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,null),s.a.createElement("div",{id:"contato",style:e},s.a.createElement("div",{className:"back-fade"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"coluna",id:"form-contato"},s.a.createElement("h1",null,"Contato"),s.a.createElement("form",{onSubmit:this.sendEmail},s.a.createElement("div",{className:"contato-box"},s.a.createElement("div",{id:"id-contato",className:"coluna id"},s.a.createElement("input",{required:!0,name:"nome",placeholder:"Nome",onChange:this.handleNameChange,value:this.state.name}),s.a.createElement("input",{required:!0,name:"email",placeholder:"E-mail",type:"email",onChange:this.handleEmailChange,value:this.state.email}),s.a.createElement("input",{required:!0,name:"telefone",placeholder:"Telefone",type:"tel",onChange:this.handleTelChange,value:this.state.Tel}),s.a.createElement("input",{required:!0,name:"assunto",placeholder:"Assunto",onChange:this.handleAssuntoChange,value:this.state.assunto})),s.a.createElement("div",{className:"coluna"},s.a.createElement("textarea",{required:!0,name:"mensagem",placeholder:"Mensagem",cols:"50",rows:"11",onChange:this.handleMesageChange,value:this.state.mensagem}),this.state.flag?s.a.createElement("button",{className:"button-contato",type:"submit"},"Enviar"):s.a.createElement("button",{className:"button-contato btn-block",type:"submit"},"Enviando..."))),s.a.createElement("div",{className:"coluna",id:"contato-info"},s.a.createElement("small",null,this.state.media_contato),s.a.createElement("small",null,this.state.phone_contato),s.a.createElement("small",null,this.state.email_contato),s.a.createElement("small",null,this.state.address_contato))))))))}}]),t}(n.Component)),C=a(26),y=a.n(C),N=(a(70),a(71),a(72),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={};return s.a.createElement("div",{style:{width:"100%",height:"120vh",display:"flex"}},s.a.createElement("div",{className:"back-fade"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"servicos"},s.a.createElement("h1",null,"SERVI\xc7OS"),s.a.createElement(y.a,{dots:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1}}]},s.a.createElement("div",{className:"slide-item",style:e},s.a.createElement("h2",null,"Titulo do Servi\xe7o")),s.a.createElement("div",{className:"slide-item",style:e},s.a.createElement("h2",null,"Titulo do Servi\xe7o")),s.a.createElement("div",{className:"slide-item",style:e},s.a.createElement("h2",null,"Titulo do Servi\xe7o")),s.a.createElement("div",{className:"slide-item",style:e},s.a.createElement("h2",null,"Titulo do Servi\xe7o")))))))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(N,null),s.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4d5e7c51.chunk.js.map