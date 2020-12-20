(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(1),s=t.n(r),l=t(23),i=t.n(l),c=(t(57),t(14)),o=t(15),d=t(18),u=t(17),m=t(19),h=t(6),j=t(13),b=(t(62),function(){return Object(n.jsx)("h1",{children:"SPA - \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f (\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f) \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"})}),v=t(12),O=t(3),p=t(144),f=t(16),g=t.n(f),x=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"validateUsername",value:function(e){return g.a.isEmpty(e)?"Username is required":!g.a.isLength(e,{min:3})&&"Username should be minimum 3 characters"}},{key:"validateEmail",value:function(e){return g.a.isEmpty(e)?"Email is required":!g.a.isEmail(e)&&"Invalid Email"}},{key:"validatePassword",value:function(e){return g.a.isEmpty(e)?"Password is required":!g.a.isLength(e,{min:3})&&"Password should be minimum 8 characters"}},{key:"validaterepeatPassword",value:function(e,a){return g.a.isEmpty(e)?"Repeat password is required":g.a.isLength(e,{min:3})?a!==e&&"Passwords do not match":"Password should be minimum 8 characters"}}]),e}()),w=t(25),y=t(51),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH":return Object(O.a)({},e);case"REGISTR":return[].concat(Object(y.a)(e),[{id:a.payload.id,username:a.payload.username,email:a.payload.email,password:a.payload.password}]);case"EDIT USER":return console.log(a.payload),a.payload;default:return e}},N=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[],S=Object(w.b)(C,N);S.subscribe((function(){localStorage.setItem("users",JSON.stringify(S.getState()))}));var F=S,k=function(e){return{type:"AUTH",payload:e}},E=function(e){return{type:"REGISTR",payload:e}},P=function(e){return{type:"EDIT USER",payload:e}},B=function(e){var a=e.id,t=e.username,r=e.email,s=e.password;return Object(n.jsxs)("li",{className:"user-item",children:[Object(n.jsx)("span",{className:"name",children:t}),Object(n.jsx)("span",{className:"text",children:r}),Object(n.jsx)("span",{className:"datetime",children:s})]},a)},U={email:{value:"",validateOnChange:!1,error:""},password:{value:"",validateOnChange:!1,error:""},submitCalled:!1,allFieldsValidated:!1},A=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleFocusInput=function(e){e.target.removeAttribute("readonly")},n.state=U,n}return Object(o.a)(t,[{key:"handleBlur",value:function(e,a){var t=a.target.name;!1===this.state[t].validateOnChange&&!1===this.state.submitCalled&&this.setState((function(a){return Object(v.a)({},t,Object(O.a)(Object(O.a)({},a[t]),{},{validateOnChange:!0,error:e(a[t].value)}))}))}},{key:"handleChange",value:function(e,a){var t=a.target.name,n=a.target.value;this.setState((function(a){return Object(v.a)({},t,Object(O.a)(Object(O.a)({},a[t]),{},{value:n,error:a[t].validateOnChange?e(n):""}))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.email,n=a.password,r=x.validateEmail(t.value),s=x.validatePassword(n.value);if([r,s].every((function(e){return!1===e}))){var l=F.getState().filter((function(e){return e.email===t.value}));if(console.dir(l),console.dir(typeof l),console.log(l.length),0!==l.length){alert("user exist");var i=l[0].id;console.dir(i);var c={id:i,email:t.value,password:n.value};console.dir(c),F.dispatch(k(c)),window.location.assign("/MyAccount/".concat(c.id))}else alert("new user");this.setState(Object(O.a)(Object(O.a)({},U),{},{allFieldsValidated:!0})),this.showAllFieldsValidated()}else this.setState((function(e){return{formname:"edit",titleLink:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",email:Object(O.a)(Object(O.a)({},e.email),{},{validateOnChange:!0,error:r}),password:Object(O.a)(Object(O.a)({},e.password),{},{validateOnChange:!0,error:s})}}))}},{key:"showAllFieldsValidated",value:function(){var e=this;setTimeout((function(){e.setState({allFieldsValidated:!1})}),1500)}},{key:"render",value:function(){var e=this,a=JSON.parse(localStorage.getItem("users")),t=this.state,r=t.email,s=t.password,l=t.allFieldsValidated;return Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)("h3",{children:"\u0424\u043e\u0440\u043c\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(n.jsx)("h2",{children:F.getState().length}),Object(n.jsxs)(p.a,{method:"get",formname:"auth",className:"container col-lg-6 mt-5 border border-dark rounded p-3 js-form",onSubmit:function(a){return e.handleSubmit(a)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputEmail",children:"Email address"}),Object(n.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 Email",id:"inputEmail",value:r.value,onChange:function(a){return e.handleChange(x.validateEmail,a)},onBlur:function(a){return e.handleBlur(x.validateEmail,a)},onFocus:this.handleFocusInput,message:this.state.message,readOnly:"readonly"}),Object(n.jsx)("div",{className:"text-danger",children:r.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",id:"inputPassword",value:s.value,onChange:function(a){return e.handleChange(x.validatePassword,a)},onBlur:function(a){return e.handleBlur(x.validatePassword,a)}}),Object(n.jsx)("div",{className:"text-danger",children:s.error})]}),Object(n.jsx)("button",{type:"submit",name:"auth",className:"btn btn-secondary btn-block",onClick:this.submitForm,onMouseDown:function(){return e.setState({submitCalled:!0})},children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(n.jsx)("div",{className:"card-body",children:l&&Object(n.jsx)("p",{className:"text-success text-center",children:"Success, All fields are validated"})}),Object(n.jsx)("hr",{}),a&&0!==a.length?Object(n.jsx)("ul",{className:"users-list",children:Object.values(a).map((function(a){return Object(n.jsx)(B,{id:a.id,username:a.username,email:a.email,password:a.password,onBtnEditUsersClick:function(){return e.props.editUser(a)}},a.id)}))}):Object(n.jsx)("h3",{children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435\u0442!"})]})}}]),t}(s.a.Component),I=function(){return Object(n.jsx)(A,{})},V={username:{value:"",validateOnChange:!1,error:""},email:{value:"",validateOnChange:!1,error:""},password:{value:"",validateOnChange:!1,error:""},repeatpassword:{value:"",validateOnChange:!1,error:""},submitCalled:!1,allFieldsValidated:!1,isRegistr:!1},R=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleFocusInput=function(e){e.target.removeAttribute("readonly")},n.state=V,n}return Object(o.a)(t,[{key:"handleBlur",value:function(e,a){var t=a.target.name;!1===this.state[t].validateOnChange&&!1===this.state.submitCalled&&this.setState((function(a){return Object(v.a)({},t,Object(O.a)(Object(O.a)({},a[t]),{},{validateOnChange:!0,error:e(a[t].value)}))}))}},{key:"handleChange",value:function(e,a){var t=a.target.name,n=a.target.value;this.setState((function(a){return Object(v.a)({},t,Object(O.a)(Object(O.a)({},a[t]),{},{value:n,error:a[t].validateOnChange?e(n):""}))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.username,n=a.email,r=a.password,s=a.repeatpassword,l=(a.isRegistr,x.validateUsername(t.value)),i=x.validateEmail(n.value),c=x.validatePassword(r.value),o=x.validaterepeatPassword(s.value,r.value);if([l,i,c,o].every((function(e){return!1===e}))){var d={id:"f".concat((~~(1e8*Math.random())).toString(16)),username:t.value,email:n.value,password:r.value};F.dispatch(E(d)),this.setState(Object(O.a)(Object(O.a)({},V),{},{allFieldsValidated:!0})),this.showAllFieldsValidated()}else this.setState((function(e){return{formname:"registr",titleLink:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",username:Object(O.a)(Object(O.a)({},e.username),{},{validateOnChange:!0,error:l}),email:Object(O.a)(Object(O.a)({},e.email),{},{validateOnChange:!0,error:i}),password:Object(O.a)(Object(O.a)({},e.password),{},{validateOnChange:!0,error:c}),repeatpassword:Object(O.a)(Object(O.a)({},e.repeatpassword),{},{validateOnChange:!0,error:o})}}))}},{key:"showAllFieldsValidated",value:function(){var e=this;setTimeout((function(){e.setState({allFieldsValidated:!1})}),1500)}},{key:"render",value:function(){var e=this,a=this.state,t=a.username,r=a.email,s=a.password,l=a.repeatpassword,i=a.allFieldsValidated;this.props.onBtnEditUserClick;return Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)("header",{className:"App-header ",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("h2",{children:["store ",F.getState().length]}),0==F.getState().length?Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"message",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435\u0442 "})}):null,Object(n.jsxs)(p.a,{method:"get",formname:"registr",className:"container col-lg-6 mt-5 border border-dark rounded p-3 js-form",onSubmit:function(a){return e.handleSubmit(a)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputUserName",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",id:"inputUserName",value:t.value,onChange:function(a){return e.handleChange(x.validateUsername,a)},onBlur:function(a){return e.handleBlur(x.validateUsername,a)},onFocus:this.handleFocusInput,readOnly:"readonly"}),Object(n.jsx)("div",{className:"text-danger",children:t.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputEmail",children:"Email address"}),Object(n.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 Email",id:"inputEmail",value:r.value,onChange:function(a){return e.handleChange(x.validateEmail,a)},onBlur:function(a){return e.handleBlur(x.validateEmail,a)},onFocus:this.handleFocusInput,message:this.state.message,readOnly:"readonly"}),Object(n.jsx)("div",{className:"text-danger",children:r.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",id:"inputPassword",value:s.value,onChange:function(a){return e.handleChange(x.validatePassword,a)},onBlur:function(a){return e.handleBlur(x.validatePassword,a)}}),Object(n.jsx)("div",{className:"text-danger",children:s.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputRepeatPassword",children:"Repeat Password"}),Object(n.jsx)("input",{type:"password",name:"repeatpassword",className:"form-control",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"inputRepeatPassword",value:l.value,onChange:function(a){return e.handleChange(x.validaterepeatPassword,a)},onBlur:function(a){return e.handleBlur(x.validaterepeatPassword,a)},onFocus:this.handleFocusInput,readOnly:"readonly"}),Object(n.jsx)("div",{className:"text-danger",children:l.error})]}),Object(n.jsx)("button",{type:"submit",name:"registr",className:"btn btn-secondary btn-block",onClick:this.submitForm,onMouseDown:function(){return e.setState({submitCalled:!0})},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(n.jsx)("div",{className:"card-body",children:i&&Object(n.jsx)("p",{className:"text-success text-center",children:"Success, All fields are validated"})})]})}}]),t}(s.a.Component),D=Object(j.b)((function(e){return{users:e}}),(function(e){return{registr:function(a){e(E(a))}}}))(R),M={username:{value:"",validateOnChange:!1,error:""},email:{value:"",validateOnChange:!1,error:""},password:{value:"",validateOnChange:!1,error:""},submitCalled:!1,allFieldsValidated:!1,id:""},T=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleFocusInput=function(e){e.target.removeAttribute("readonly")},n.state=M,n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.pathname.slice(-8),a=Object.values(F.getState());console.dir(a);var t=a.filter((function(a){return a.id===e}));console.dir(t);var n=document.forms.edit;n.elements.username.value=t[0].username,n.elements.email.value=t[0].email,n.elements.password.value=t[0].password,this.setState((function(){return{username:{value:t[0].username},email:{value:t[0].email},password:{value:t[0].password},id:e}}))}},{key:"handleBlur",value:function(e,a){var t=a.target.name;!1===this.state[t].validateOnChange&&!1===this.state.submitCalled&&this.setState((function(a){return Object(v.a)({},t,Object(O.a)(Object(O.a)({},a[t]),{},{validateOnChange:!0,error:e(a[t].value)}))}))}},{key:"handleChange",value:function(e,a){var t=a.target.name,n=a.target.value;this.setState((function(a){return Object(v.a)({},t,Object(O.a)(Object(O.a)({},a[t]),{},{value:n,error:a[t].validateOnChange?e(n):""}))}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.username,n=a.email,r=a.password,s=x.validateUsername(t.value),l=x.validateEmail(n.value),i=x.validatePassword(r.value);if([s,l,i].every((function(e){return!1===e}))){var c={id:this.state.id,username:t.value,email:n.value,password:r.value},o=F.getState(),d=Object.values(o).map((function(e){return e.id===c.id?c:e}));F.dispatch(P(d)),window.location.assign("/MyAccount/".concat(this.state.id)),this.setState(Object(O.a)(Object(O.a)({},M),{},{allFieldsValidated:!0})),this.showAllFieldsValidated()}else this.setState((function(e){return{formname:"edit",titleLink:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",username:Object(O.a)(Object(O.a)({},e.username),{},{validateOnChange:!0,error:s}),email:Object(O.a)(Object(O.a)({},e.email),{},{validateOnChange:!0,error:l}),password:Object(O.a)(Object(O.a)({},e.password),{},{validateOnChange:!0,error:i})}}))}},{key:"showAllFieldsValidated",value:function(){var e=this;setTimeout((function(){e.setState({allFieldsValidated:!1})}),1500)}},{key:"render",value:function(){var e=this,a=this.state,t=a.username,r=a.email,s=a.password,l=a.allFieldsValidated;return Object(n.jsxs)("div",{className:"wrap",children:[Object(n.jsx)("header",{className:"App-header ",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsx)("h2",{children:F.getState().length}),Object(n.jsxs)(p.a,{method:"get",formname:"edit",name:"edit",className:"container col-lg-6 mt-5 border border-dark rounded p-3 js-form",onSubmit:function(a){return e.handleSubmit(a)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputUserName",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",id:"inputUserName",value:t.value,onChange:function(a){return e.handleChange(x.validateUsername,a)},onBlur:function(a){return e.handleBlur(x.validateUsername,a)},onFocus:this.handleFocusInput,readOnly:"readonly"}),Object(n.jsx)("div",{className:"text-danger",children:t.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputEmail",children:"Email address"}),Object(n.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 Email",id:"inputEmail",value:r.value,onChange:function(a){return e.handleChange(x.validateEmail,a)},onBlur:function(a){return e.handleBlur(x.validateEmail,a)},onFocus:this.handleFocusInput,message:this.state.message,readOnly:"readonly"}),Object(n.jsx)("div",{className:"text-danger",children:r.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",id:"inputPassword",value:s.value,onChange:function(a){return e.handleChange(x.validatePassword,a)},onBlur:function(a){return e.handleBlur(x.validatePassword,a)}}),Object(n.jsx)("div",{className:"text-danger",children:s.error})]}),Object(n.jsx)("button",{type:"submit",name:"save",className:"btn btn-secondary btn-block",onClick:this.submitForm,onMouseDown:function(){return e.setState({submitCalled:!0})},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(n.jsx)("div",{className:"card-body",children:l&&Object(n.jsx)("p",{className:"text-success text-center",children:"Success, All fields are validated"})}),Object(n.jsx)("hr",{})]})}}]),t}(s.a.Component),J=Object(j.b)((function(e){return{users:e}}),(function(e){return{editUser:function(a){return e(k(a))}}}))(T),L=(window.location.pathname.slice(-8),function(e){e.editData,e.openModal,e.handleSubmit;var a=window.location.pathname.slice(-8);alert(a);var t=Object.values(JSON.parse(localStorage.getItem("users")));console.dir(t);var r=t.filter((function(e){return console.dir(e),e.id===a}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(n.jsx)("div",{children:"\u041c\u043e\u0438 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(n.jsxs)("div",{children:["id: ",r[0].id]}),Object(n.jsxs)("div",{children:["username: ",r[0].username]}),Object(n.jsxs)("div",{children:["email: ",r[0].email]}),Object(n.jsxs)("div",{children:["password: ",r[0].password]}),Object(n.jsx)("button",{type:"button",onClick:function(){window.location.assign("/FormEdit/".concat(r[0].id))},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(n.jsx)("a",{href:"/",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})}),q=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={formName:"auth",isAuth:!1,users:[]},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("users");e&&0!==JSON.parse(e).length&&(this.state.users=Object.assign(JSON.parse(localStorage.getItem("users"))))}},{key:"editData",value:function(){alert("edit")}},{key:"onBtnEditUserClick",value:function(){console.log("editUserClick")}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App pt-3",children:[Object(n.jsx)(b,{}),Object(n.jsx)(m.b,{to:"/FormRegistr",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsx)("a",{href:"/FormRegistr",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)(h.c,{children:[Object(n.jsxs)(h.a,{exact:!0,path:"/",component:I,children:[Object(n.jsx)(I,{}),Object(n.jsx)(m.b,{to:"/FormRegistr",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]},"Home"),Object(n.jsxs)(h.a,{exact:!0,path:"/FormRegistr",component:D,children:[0!==this.state.users.length?null:Object(n.jsxs)("ul",{className:"comments-list",children:["list"+this.state.users.length,this.state.users.map((function(e){return Object(n.jsx)(B,{id:e.id,username:e.name,email:e.email,password:e.password},e.id)}))]}),Object(n.jsx)(D,{handleSubmit:this.handleSubmit}),Object(n.jsx)(m.b,{to:"/",onClick:function(){e.setState({formName:"auth"})},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})]},"FormRegistr"),Object(n.jsx)(h.a,{exact:!0,path:"/FormEdit/:id",component:J,children:Object(n.jsx)(J,{})},"FormEdit"),Object(n.jsx)(h.a,{exact:!0,path:"/MyAccount/:id",component:L,children:Object(n.jsx)(L,{})},"MyAccount")]})]})}}]),t}(s.a.Component),H=Object(j.b)((function(e){return{users:e}}),(function(e){return{registr:function(a){return e(E(a))},auth:function(a){return e(E(a))},editUser:function(a,t){return e(P(a))}}}))(q),G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,145)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),s(e),l(e)}))};t(142);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j.a,{store:F,children:Object(n.jsx)(m.a,{children:Object(n.jsx)(H,{})})})}),document.getElementById("root")),G()},57:function(e,a,t){},62:function(e,a,t){}},[[143,1,2]]]);
//# sourceMappingURL=main.ee574fe9.chunk.js.map