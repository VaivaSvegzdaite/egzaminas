(this.webpackJsonpgreetings=this.webpackJsonpgreetings||[]).push([[0],{32:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a(33),s=a.n(i),r=a(10),l=a(11),d=a(13),o=a(12),j=a(15),m=a(14),b=a(8),h=a.n(b),u="/kuba-ap",g=a(4),p=a.p+"static/media/foto.d648cdd6.jpg",x=function(e){var t=e.id,a=e.text,c=(e.imageUrl,e.mp3File),i=e.nameg,s=e.date,r=e.greetingType;return Object(n.jsxs)("div",{class:"card col-12 col-s-12 col-md-6 col-lg-3 mx-3 my-3",style:{width:"18rem"},children:[Object(n.jsx)("img",{src:p,class:"card-img-top",alt:a}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:r}),Object(n.jsx)("p",{class:"card-text",children:a}),Object(n.jsx)("p",{class:"card-text",children:c}),Object(n.jsx)("p",{class:"card-text",children:i}),Object(n.jsx)("p",{class:"card-text",children:s}),Object(n.jsx)(g.b,{to:"greetings/".concat(t),className:"btn btn-primary",children:"Details"})]})]})},O=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={greetings:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(u,"/api/greetings")).then((function(t){e.setState({greetings:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.greetings.data;return e?Object(n.jsx)("div",{className:"container-fluid mt-4",children:Object(n.jsx)("div",{className:"row d-flex justify-content-center",children:e.map((function(e){var t=e.id,a=Object(m.a)(e,["id"]);return Object(n.jsx)(x,Object(j.a)({id:t},a),t)}))})}):Object(n.jsx)("div",{children:"Loading..."})}}]),a}(c.Component),v=function(e){var t=e.id,a=e.deleteProduct,c=Object(m.a)(e,["id","deleteProduct"]);return Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:p,className:"card-img-top",style:{width:50,height:50},alt:c.text})}),Object(n.jsx)("td",{children:c.text}),Object(n.jsx)("td",{children:c.mp3File}),Object(n.jsx)("td",{children:c.nameg}),Object(n.jsx)("td",{children:c.date}),Object(n.jsx)("td",{children:c.greetingType}),Object(n.jsx)("td",{}),Object(n.jsxs)(g.b,{className:"text-decoration-none mr-3",to:"/admin/greetings/".concat(t),children:[" ","Edit"," "]}),Object(n.jsx)("button",{className:"btn text-danger","data-toggle":"modal","data-target":"#myModal",onClick:a,id:t,children:"Delete"})]})})},f=function(e,t){return Object(n.jsx)("div",{id:"myModal",className:"modal fade",children:Object(n.jsx)("div",{className:"modal-dialog modal-confirm",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header flex-column",children:[Object(n.jsx)("div",{className:"icon-box",children:Object(n.jsx)("i",{className:"material-icons",children:"\ue5cd"})}),Object(n.jsx)("h4",{className:"modal-title w-100",children:"Are you sure?"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true",children:"\xd7"})]}),Object(n.jsx)("div",{className:"modal-body",children:Object(n.jsx)("p",{children:"Do you really want to delete these records? This process cannot be undone."})}),Object(n.jsxs)("div",{className:"modal-footer justify-content-center",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cancel"}),Object(n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:t,value:e,children:"Delete"})]})]})})})},y=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleModalVisibility=function(){return n.setState({modalVisibility:!0})},n.deleteProduct=function(e){h.a.delete("".concat(u,"/api/greetings/").concat(e.target.id)).then((function(){h.a.get("".concat(u,"/api/greetings")).then((function(e){n.setState({greetings:e})}))}))},n.state={greetings:[],modalVisibility:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(u,"/api/greetings")).then((function(t){e.setState({greetings:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.greetings.data;return t?Object(n.jsxs)("div",{className:"container mt-5",children:[Object(n.jsx)(g.b,{to:"/admin/greetings/new",className:"btn btn-primary mb-5",children:"Add new"}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",children:"Text"}),Object(n.jsx)("th",{scope:"col",children:"mp3File"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Date"}),Object(n.jsx)("th",{scope:"col",children:"GreetingType"}),Object(n.jsx)("th",{scope:"col"}),Object(n.jsx)("th",{scope:"col"})]})}),t.map((function(t){var a=t.id,c=Object(m.a)(t,["id"]);return Object(n.jsx)(v,Object(j.a)(Object(j.a)({id:a},c),{},{deleteProduct:e.deleteProduct}),a)})),Object(n.jsx)(f,{visibility:this.state.modalVisibility,handleModal:this.handleModalVisibility})]})]}):Object(n.jsx)("div",{children:"Loading..."})}}]),a}(c.Component),N=a(18),k=function(e){var t=e.handleChange,a=e.handleSubmit,c=Object(m.a)(e,["handleChange","handleSubmit"]),i=c.text,s=c.imageUrl,r=c.mp3File,l=c.nameg,d=c.date,o=c.greetingType;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"container my-5",onSubmit:a,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"text",children:"Name"}),Object(n.jsx)("input",{onChange:t,type:"text",required:"required",className:"form-control",id:"text",name:"text",value:i})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"imageUrl",children:"Image url"}),Object(n.jsx)("input",{onChange:t,type:"url",required:"required",className:"form-control",id:"imageUrl",name:"imageUrl",value:s})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{for:"mp3File",class:"form-label",children:"Mp3 file"}),Object(n.jsx)("input",{class:"form-control form-control-sm",id:"mp3File",name:"mp3File",type:"file",onChange:t,value:r})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"nameg",children:"Greeter's name"}),Object(n.jsx)("input",{onChange:t,type:"text",required:"required",className:"form-control",id:"nameg",name:"nameg",value:l})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"date",children:"Date"}),Object(n.jsx)("input",{onChange:t,type:"datetime-local",required:"required",className:"form-control",id:"date",name:"date",value:d})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("p",{children:"Greeting Type"}),Object(n.jsxs)("div",{class:"form-check form-check-inline",children:[Object(n.jsx)("input",{onChange:t,class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"public",value:o}),Object(n.jsx)("label",{class:"form-check-label",for:"public",children:"LIVE"})]}),Object(n.jsxs)("div",{class:"form-check form-check-inline",children:[Object(n.jsx)("input",{onChange:t,class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"private",value:o}),Object(n.jsx)("label",{class:"form-check-label",for:"private",children:"TV"})]}),Object(n.jsxs)("div",{class:"form-check form-check-inline",children:[Object(n.jsx)("input",{onChange:t,class:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"live",value:o}),Object(n.jsx)("label",{class:"form-check-label",for:"live",children:"WEB"})]})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"}),Object(n.jsx)(g.b,{to:"/admin",className:"btn btn-primary mx-4",children:"Back"})]})})},C=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(N.a)({},a,c))},n.updateProduct=function(e){e.preventDefault(),h.a.put("".concat(u,"/api/greetings/").concat(n.state.id),{id:n.state.id,text:n.state.text,imageUrl:n.state.imageUrl,mp3File:n.state.mp3File,nameg:n.state.nameg,date:n.state.date,greetingType:n.state.greetingType}).then((function(){return n.props.history.push("/admin/greetings")}))},n.createProduct=function(e){h.a.post("".concat(u,"/api/greetings"),{id:n.state.id,text:e.target.text,imageUrl:e.target.imageUrl,mp3File:e.target.mp3File,nameg:e.target.nameg,date:e.target.date,greetingType:e.targer.greetingType}).then((function(){return n.props.history.push("/admin/greetings")}))},n.handleSubmit=function(e){e.preventDefault(),n.state.id>0?n.updateProduct():n.createProduct(),n.setState({text:"",imageUrl:"",mp3File:"",nameg:"",date:"",greetingType:""})},n.state={id:0,text:"",imageUrl:"",mp3File:"",nameg:"",date:"",greetingType:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(u,"/api/greetings/").concat(this.props.match.params.id)).then((function(t){e.setState({id:t.data.id,text:t.data.text,imageUrl:t.data.imageUrl,mp3File:t.data.mp3File,nameg:t.data.nameg,date:t.data.date,greetingType:t.data.greetingType})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(n.jsx)(k,Object(j.a)({handleSubmit:this.handleSubmit,handleChange:this.handleChange},this.state))}}]),a}(c.Component),F=function(){return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid p-4 my-0 text-dark bg-warning ",children:Object(n.jsx)("h1",{className:"text-center",children:"Coming soon.... still under construction"})})},T=a(2),S=(a(32),function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(n.jsxs)("div",{className:"container-fluid my-2",children:[Object(n.jsxs)("ul",{className:"nav navbar-nav",children:[Object(n.jsx)(g.c,{className:"nav-link text-dark",to:"/",children:"Greetings"}),Object(n.jsx)(g.c,{className:"nav-link text-dark",to:"/addresses",children:"Addresses"})]}),Object(n.jsx)("ul",{className:"nav navbar-nav navbar-right",children:Object(n.jsx)(g.c,{className:"nav-link navbar-right",to:"/admin",children:"Admin"})})]})})}),w=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={greeting:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(u,"/api/greetings/").concat(this.props.match.params.id)).then((function(t){return e.setState({greeting:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return null!==this.state.greeting?Object(n.jsx)("div",{className:"container-fluid mt-4",children:Object(n.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(n.jsx)("img",{src:p,className:"card-img-top",alt:this.text}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("p",{children:"Lorem ipsum "}),Object(n.jsx)(g.b,{to:"/",className:"btn btn-primary mx-4",children:"Back"})]},this.id)]})}):Object(n.jsx)("div",{children:"Loading..."})}}]),a}(c.Component),U=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return document.title="greetings",Object(n.jsx)("div",{children:Object(n.jsxs)(g.a,{basename:"/kuba-ap",children:[Object(n.jsx)(S,{}),Object(n.jsxs)(T.c,{children:[Object(n.jsx)(T.a,{path:"/",exact:!0,component:O}),Object(n.jsx)(T.a,{path:"/greetings",exact:!0,component:O}),Object(n.jsx)(T.a,{path:"/addresses",exact:!0,component:F}),Object(n.jsx)(T.a,{path:"/greetings/:id",exact:!0,component:w}),Object(n.jsx)(T.a,{path:"/admin",exact:!0,component:y}),Object(n.jsx)(T.a,{path:"/admin/greetings/new",exact:!0,component:C}),Object(n.jsx)(T.a,{path:"/admin/greetings/:id",exact:!0,component:C}),Object(n.jsx)(T.a,{path:"*",component:D})]})]})})}}]),a}(c.Component),D=function(e){return Object(n.jsxs)("div",{children:["Route did not match",Object(n.jsx)("button",{onClick:function(){return e.history.push("/")},children:"Go Home"})]})};a(62);s.a.render(Object(n.jsx)(U,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.57b4847a.chunk.js.map