(window.webpackJsonpweheartit=window.webpackJsonpweheartit||[]).push([[0],{75:function(e,t,a){e.exports=a(97)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},88:function(e,t,a){e.exports=a.p+"static/media/juice.87b95edf.png"},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(9),r=a.n(s),i=(a(80),a(12)),l=a(13),c=a(16),h=a(14),u=a(6),d=a(15),p=(a(81),a(18)),g=a(31),m=(a(82),a(36)),f=a(121),b=a(124),v=a(125),k=a(126),w=a(127),O=a(39),y=a.n(O),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={expanded:!1,isHeartit:!1,hearts:0},a.handleExpandClick=a.handleExpandClick.bind(Object(u.a)(a)),a.changeHeart=a.changeHeart.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"changeHeart",value:function(){!0===this.state.isHeartit?this.setState({hearts:0,isHeartit:!1}):this.setState({hearts:1,isHeartit:!0})}},{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var e=this;return localStorage.getItem("token")&&this.props.history.push("/dashboard"),n.a.createElement("div",{className:"container-main"},n.a.createElement("div",{className:"box-main"},n.a.createElement(p.b,{to:"/"}," ",n.a.createElement(m.a,{color:"#fb8d98",size:45,style:{marginLeft:"5%"}})),n.a.createElement("div",{className:"content-main"},n.a.createElement("div",{style:{display:"flex",width:"30%",flexDirection:"column",marginLeft:"5%",marginTop:"2%",overflow:"auto"}},n.a.createElement(f.a,null,n.a.createElement(b.a,{style:{fontSize:"small"},title:"by User1233",subheader:"September 14, 2016"}),n.a.createElement(v.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("img",{src:a(88),alt:"img"})),n.a.createElement(k.a,{disableSpacing:!0},n.a.createElement(w.a,{"aria-label":"add to favorites",onClick:function(){return e.changeHeart()},className:"icon"},this.state.isHeartit?n.a.createElement(y.a,{color:"secondary"}):n.a.createElement(y.a,null)),n.a.createElement("p",null,this.state.hearts)))),n.a.createElement("div",{style:{display:"flex",textAlign:"center",alignItems:"center",marginLeft:"25%",fontFamily:"Frakfur",flexDirection:"column",justifyContent:"center",color:"#553D67"}},n.a.createElement("h1",null,"POST IT. "),n.a.createElement("h1",null,"HEART IT. "),n.a.createElement("h1",null,"SAVE IT. "),n.a.createElement(p.b,{to:"/login",className:"link-login"},"LOGIN")))))}}]),t}(n.a.Component),P=a(10),j=a.n(P),x=a(21),S=a(34),N=(a(91),a(130)),C=a(128),T=a(46),z=a.n(T),L=a(45),I=a.n(L),M=a(129),H=a(23),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).onChangeHandler=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.state={showPassword:!1,password:"",email:""},a.handleClickShowPassword=a.handleClickShowPassword.bind(Object(u.a)(a)),a.onChangeHandler=a.onChangeHandler.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClickShowPassword",value:function(){this.setState({showPassword:!this.state.showPassword})}},{key:"login",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.state.email&&""!==this.state.password){e.next=4;break}alert("pss...ai uitat sa completezi campuri"),e.next=25;break;case 4:return e.prev=4,e.next=7,fetch("http://3.19.223.148:3000/api/auth/autentificare",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password})});case 7:if((t=e.sent).ok){e.next=10;break}throw Error(t.statusText);case 10:return this.setState({email:" ",password:""}),H.ToastsStore.success("You are now logged in!"),e.next=14,t.json();case 14:a=e.sent,this.props.setToken(a.data.token),console.log(a.data.token),this.props.login(),this.props.history.push("/dashboard"),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(4),console.log(e.t0),alert("invalid password or email");case 25:case"end":return e.stop()}}),e,this,[[4,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-login"},n.a.createElement("div",{className:"box-login"},n.a.createElement(p.b,{to:"/"}," ",n.a.createElement(m.a,{color:"#fb8d98",size:45,style:{marginLeft:"5%"}})),n.a.createElement("div",{className:"content-login"},n.a.createElement("div",{className:"form-login"},n.a.createElement(N.a,{className:"text-field",label:"Email*",variant:"outlined",id:"mui-theme-provider-outlined-input",name:"email",value:this.state.email,onChange:function(t){return e.onChangeHandler(t)}}),n.a.createElement(N.a,{id:"outlined-adornment-password",className:"text-field",variant:"outlined",type:this.state.showPassword?"text":"password",label:"Password*",name:"password",value:this.state.password,onChange:function(t){return e.onChangeHandler(t)},InputProps:{endAdornment:n.a.createElement(C.a,{position:"end"},n.a.createElement(w.a,{edge:"end","aria-label":"toggle password visibility",onClick:this.handleClickShowPassword},this.state.showPassword?n.a.createElement(I.a,null):n.a.createElement(z.a,null)))}}),n.a.createElement(M.a,{onClick:function(){return e.login()},color:"secondary",style:{height:"5vh",width:"80%"}},"Login")),n.a.createElement(p.b,{to:"/register",className:"link-register"},"You don't have an account? Register now"),n.a.createElement(H.ToastsContainer,{store:H.ToastsStore}))))}}]),t}(n.a.Component),D=(a(92),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).onChangeHandler=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.state={showPassword:!1,password:"",email:""},a.handleClickShowPassword=a.handleClickShowPassword.bind(Object(u.a)(a)),a.onChangeHandler=a.onChangeHandler.bind(Object(u.a)(a)),a.register=a.register.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClickShowPassword",value:function(){this.setState({showPassword:!this.state.showPassword})}},{key:"register",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.state.email&&""!==this.state.password){e.next=4;break}alert("pss...ai uitat sa completezi campuri"),e.next=19;break;case 4:return e.prev=4,e.next=7,fetch("http://3.19.223.148:3000/api/auth/inregistrare",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password})});case 7:if((t=e.sent).ok){e.next=10;break}throw Error(t.statusText);case 10:H.ToastsStore.success("You account is ready to use!"),H.ToastsStore.info("You can log in now"),this.setState({email:" ",password:""}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),alert("error");case 19:case"end":return e.stop()}}),e,this,[[4,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-register"},n.a.createElement("div",{className:"box-register"},n.a.createElement(p.b,{to:"/"}," ",n.a.createElement(m.a,{color:"#fb8d98",size:45,style:{marginLeft:"5%"}})),n.a.createElement("div",{className:"content-register"},n.a.createElement("div",{className:"form-register"},n.a.createElement(N.a,{className:"text-field",label:"Email*",variant:"outlined",id:"mui-theme-provider-outlined-input",name:"email",value:this.state.email,onChange:function(t){return e.onChangeHandler(t)}}),n.a.createElement(N.a,{id:"outlined-adornment-password",className:"text-field",variant:"outlined",type:this.state.showPassword?"text":"password",label:"Password*",name:"password",value:this.state.password,onChange:function(t){return e.onChangeHandler(t)},InputProps:{endAdornment:n.a.createElement(C.a,{position:"end"},n.a.createElement(w.a,{edge:"end","aria-label":"toggle password visibility",onClick:this.handleClickShowPassword},this.state.showPassword?n.a.createElement(I.a,null):n.a.createElement(z.a,null)))}}),n.a.createElement(M.a,{onClick:function(t){return e.register()},color:"secondary",style:{height:"5vh",width:"80%"}},"Register")),n.a.createElement(p.b,{to:"/login",className:"link-login"},"You already have an account? Login")),n.a.createElement(H.ToastsContainer,{store:H.ToastsStore})))}}]),t}(n.a.Component)),F=(a(93),a(94),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={dashboardPage:!1,fasvPage:!1,userspostsPage:!1},console.log("props",a.props),a.handleLogout=a.handleLogout.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleLogout",value:function(){this.props.logout()}},{key:"UNSAFE_componentWillMount",value:function(){switch(this.props.page){case"dashboardPage":this.setState({dashboardPage:!0,fasvPage:!1,userspostsPage:!1});break;case"favsPage":this.setState({dashboardPage:!1,fasvPage:!0,userspostsPage:!1});break;case"usersPostsPage":this.setState({dashboardPage:!1,fasvPage:!1,userspostsPage:!0})}localStorage.getItem("token")&&this.props.login()}},{key:"render",value:function(){var e=this;return localStorage.getItem("token")?n.a.createElement("div",{className:"menu-logged"},n.a.createElement(p.b,{to:"/dashboard",className:this.state.dashboardPage?"current-link":"link"},"ALL PHOTOS"),n.a.createElement(p.b,{to:"/favorites",className:this.state.fasvPage?"current-link":"link"},"YOUR FAVS"),n.a.createElement(p.b,{to:"/yourposts",className:this.state.userspostsPage?"current-link":"link"},"YOUR PHOTOS"),n.a.createElement(p.b,{onClick:function(){return e.handleLogout()},to:"/",className:"link"},"LOGOUT")):n.a.createElement(g.a,{to:"/login"})}}]),t}(n.a.Component)),U=a(35),B=a.n(U),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={photo:a.props.photo},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{display:"display",width:"20%",marginBottom:"1%",height:"45%"}},n.a.createElement(f.a,{style:{width:"90%",flexDirection:"column",display:"flex",height:"100%",alignItems:"center",background:"whitesmoke"}},n.a.createElement(v.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"95%",width:"95%"}},n.a.createElement("img",{src:"data:image/jpeg;base64,".concat(this.state.photo.poza),style:{objectFit:"scale-down",height:"100%",width:"100%"},alt:"img"})),n.a.createElement(k.a,{disableSpacing:!0,style:{display:"flex",height:"10%"}},n.a.createElement(w.a,{"aria-label":"add to favorites",onClick:function(){return e.props.likePhoto(e.state.photo.id,e.state.photo)},className:"icon"},"1"===this.state.photo.likeFromMe?n.a.createElement(y.a,{color:"secondary"}):n.a.createElement(y.a,null)),n.a.createElement("p",null,1===this.state.photo.likes?"".concat(this.state.photo.likes," heart"):"".concat(this.state.photo.likes," hearts")))))}}]),t}(n.a.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(e){var t=e.target;t.scrollHeight-t.scrollTop===t.clientHeight&&a.loadPhotos()},a.state={photos:[],pageNo:1,pageSize:4,stop:!1},console.log("props din dashboard",a.props),a.loadPhotos=a.loadPhotos.bind(Object(u.a)(a)),a.likePhoto=a.likePhoto.bind(Object(u.a)(a)),a.handleScroll=a.handleScroll.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Dashboard",this.loadPhotos().then((function(){e.loadPhotos().then((function(){e.loadPhotos()}))}))}},{key:"likePhoto",value:function(){var e=Object(x.a)(j.a.mark((function e(t,a){var o,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://3.19.223.148:3000/api/poze/like",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({idPoza:t})});case 3:if((o=e.sent).ok){e.next=6;break}throw Error(o.statusText);case 6:console.log("liked",this.state.photos),n=this.state.photos,s=n.indexOf(a),"0"===n[s].likeFromMe?(n[s].likes=n[s].likes+1,n[s].likeFromMe="1"):(n[s].likes=n[s].likes-1,n[s].likeFromMe="0"),this.setState({photos:n}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),alert("error");case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"loadPhotos",value:function(){var e=Object(x.a)(j.a.mark((function e(t){var a,o,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==localStorage.getItem("dashboardPhotos")){e.next=5;break}a=this.props.allphotos.length/this.state.pageNo,this.setState({photos:this.props.allphotos,pageNo:a+1}),e.next=21;break;case 5:return e.prev=5,e.next=8,fetch("http://3.19.223.148:3000/api/poze/?pageNo=".concat(this.state.pageNo,"&pageSize=").concat(this.state.pageSize),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 8:if((o=e.sent).ok){e.next=11;break}throw Error(o.statusText);case 11:return e.next=13,o.json();case 13:n=e.sent,console.log(n.data.poze),0===n.data.poze.length?this.setState({stop:!0}):(this.props.loadPhotos(n.data.poze),s=this.state.photos.concat(n.data.poze),this.setState({photos:s,pageNo:this.state.pageNo+1})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[5,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.photos&&this.state.photos.map((function(t,a){return n.a.createElement(G,{photo:t,key:a,likePhoto:e.likePhoto})}));return n.a.createElement("div",{className:"container-dashboard"},n.a.createElement("div",{className:"box-dashboard"},n.a.createElement(F,{isLogged:this.props.isLogged,logout:this.props.logout,login:this.props.login,page:"dashboardPage"}),n.a.createElement("div",{className:"content-dashboard"},n.a.createElement("div",{style:{flexWrap:"wrap",display:"flex",flexDirection:"row",overflow:"auto",marginLeft:"1%",marginTop:"1%"},onScroll:this.handleScroll},t,this.state.stop?n.a.createElement("p",null):n.a.createElement(B.a,{type:"bubbles",color:"#fb8d98",height:"20%",width:"20%"})))))}}]),t}(n.a.Component);a(95);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(S.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(e){var t=e.target;t.scrollHeight-t.scrollTop===t.clientHeight&&a.loadPhotos()},a.state={photos:[],pageNo:0,pageSize:4,stop:!1},a.loadPhotos=a.loadPhotos.bind(Object(u.a)(a)),a.likePhoto=a.likePhoto.bind(Object(u.a)(a)),a.handleScroll=a.handleScroll.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Favorites",this.loadPhotos().then((function(){e.loadPhotos().then((function(){e.loadPhotos()}))}))}},{key:"likePhoto",value:function(){var e=Object(x.a)(j.a.mark((function e(t,a){var o,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://3.19.223.148:3000/api/poze/like",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({idPoza:t})});case 3:if((o=e.sent).ok){e.next=6;break}throw Error(o.statusText);case 6:n=this.state.photos,s=n.indexOf(a),n.splice(s,1),this.setState({photos:n}),console.log("poze acum",this.state.photos),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),alert("error");case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"loadPhotos",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://3.19.223.148:3000/api/poze/like/?pageNo=".concat(this.state.pageNo+1,"&pageSize=").concat(this.state.pageSize),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:a=e.sent,console.log(a.data.poze),0===a.data.poze.length?this.setState(J({},this.state,{stop:!0})):this.setState(J({},this.state,{photos:this.state.photos.concat(a.data.poze),pageNo:this.state.pageNo+1})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.photos&&this.state.photos.map((function(t,a){return n.a.createElement(G,{photo:t,key:a,likePhoto:e.likePhoto})}));return n.a.createElement("div",{className:"container-favs"},n.a.createElement("div",{className:"box-favs"},n.a.createElement(F,{isLogged:this.props.isLogged,logout:this.props.logout,login:this.props.login,page:"favsPage"}),n.a.createElement("div",{className:"content-favs"},n.a.createElement("div",{style:{flexWrap:"wrap",display:"flex",flexDirection:"row",overflow:"auto",marginLeft:"1%",marginTop:"1%"},onScroll:this.handleScroll},t,this.state.stop?n.a.createElement("p",null):n.a.createElement(B.a,{type:"bubbles",color:"#fb8d98",height:"20%",width:"20%"})))))}}]),t}(n.a.Component),V=(a(96),a(62)),_=a.n(V),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={imagePreviewUrl:"",file:""},a.handleImageChange=a.handleImageChange.bind(Object(u.a)(a)),a.uploadPhoto=a.uploadPhoto.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,o=e.target.files[0];a.onloadend=function(){t.setState({file:o,imagePreviewUrl:a.result})},a.readAsDataURL(o)}},{key:"uploadPhoto",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t,a,o,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("poza",this.state.file),""!==this.state.imagePreviewUrl){e.next=5;break}H.ToastsStore.error("Pssssss you need to upload a photo first"),e.next=28;break;case 5:return e.prev=5,t=new FormData,a=document.querySelector('input[type="file"]').files[0],t.append("poza",a),console.log(this.state.file),e.next=12,fetch("http://3.19.223.148:3000/api/poze",{method:"POST",headers:{Authorization:"Bearer "+localStorage.getItem("token")},body:t});case 12:return o=e.sent,e.next=15,o.json();case 15:if(n=e.sent,o.ok){e.next=18;break}throw Error(o.statusText);case 18:H.ToastsStore.success("Photo successfully posted"),window.location.reload(),this.setState({file:"",imagePreviewUrl:""}),console.log("poza pusa",n),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(5),console.log(e.t0),alert("error");case 28:case"end":return e.stop()}}),e,this,[[5,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl,a=null;return t&&(a=n.a.createElement("img",{style:{display:"flex",maxWidth:"100%",maxheight:"100%"},src:t})),n.a.createElement("div",{style:{width:"70%",height:"20%",marginLeft:"2%",marginTop:"1%",flexDirection:"row",display:"flex"}},n.a.createElement("form",{onSubmit:this._handleSubmit,style:{flexDirection:"column",display:"flex",marginRight:"5%"}},n.a.createElement("input",{type:"file",onChange:this.handleImageChange}),n.a.createElement(M.a,{onClick:function(){return e.uploadPhoto()},variant:"contained",color:"secondary",style:{height:"25%",marginTop:"10%",width:"100%"}},"Upload photo",n.a.createElement(_.a,null))),n.a.createElement("div",{style:{height:"10%",width:"10%"}},a),n.a.createElement(H.ToastsContainer,{store:H.ToastsStore}))}}]),t}(n.a.Component),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(e){var t=e.target;t.scrollHeight-t.scrollTop===t.clientHeight&&a.loadPhotos()},a.state={photos:[],pageNo:0,pageSize:4,stop:!1},a.loadPhotos=a.loadPhotos.bind(Object(u.a)(a)),a.likePhoto=a.likePhoto.bind(Object(u.a)(a)),a.handleScroll=a.handleScroll.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.title="Your Posts",this.loadPhotos().then((function(){e.loadPhotos().then((function(){e.loadPhotos()}))}))}},{key:"likePhoto",value:function(){var e=Object(x.a)(j.a.mark((function e(t,a){var o,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://3.19.223.148:3000/api/poze/like",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify({idPoza:t})});case 3:if((o=e.sent).ok){e.next=6;break}throw Error(o.statusText);case 6:console.log("liked"),n=this.state.photos,s=n.indexOf(a),"0"===n[s].likeFromMe?(n[s].likes=n[s].likes+1,n[s].likeFromMe="1"):(n[s].likes=n[s].likes-1,n[s].likeFromMe="0"),this.setState({photos:n}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),alert("error");case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"loadPhotos",value:function(){var e=Object(x.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://3.19.223.148:3000/api/poze/colectiaMea?pageNo=".concat(this.state.pageNo+1,"&pageSize=").concat(this.state.pageSize),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:a=e.sent,console.log(a.data.poze),0===a.data.poze.length?this.setState({stop:!0}):this.setState({photos:this.state.photos.concat(a.data.poze),pageNo:this.state.pageNo+1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.photos&&this.state.photos.map((function(t,a){return n.a.createElement(G,{photo:t,key:a,likePhoto:e.likePhoto})}));return n.a.createElement("div",{className:"container-yourposts"},n.a.createElement("div",{className:"box-yourposts"},n.a.createElement(F,{isLogged:this.props.isLogged,logout:this.props.logout,login:this.props.login,page:"usersPostsPage"}),n.a.createElement("div",{className:"content-yourposts"},n.a.createElement(q,null),n.a.createElement("div",{style:{flexWrap:"wrap",display:"flex",flexDirection:"row",overflow:"auto",marginLeft:"1%",marginTop:"1%"},onScroll:this.handleScroll},t,this.state.stop?n.a.createElement("p",null):n.a.createElement(B.a,{type:"bubbles",color:"#fb8d98",height:"20%",width:"20%"})))))}}]),t}(n.a.Component),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).logMeOut=function(){localStorage.removeItem("token"),localStorage.removeItem("dashboardPhotos"),a.setState({isLogged:!1,message:"LOGIN"})},a.state={isLogged:!1,message:"LOGIN",token:"",allphotos:[],usersPhotos:[],favsPhotos:[]},a.logMein=a.logMein.bind(Object(u.a)(a)),a.logMeout=a.logMeOut.bind(Object(u.a)(a)),a.setToken=a.setToken.bind(Object(u.a)(a)),a.loadAllPhotos=a.loadAllPhotos.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"setToken",value:function(e){this.setState({token:e}),localStorage.setItem("token",this.state.token)}},{key:"logMein",value:function(){this.setState({isLogged:!0,message:"LOGOUT"})}},{key:"loadAllPhotos",value:function(e){localStorage.setItem("dashboardPhotos",!0);var t=this.state.allphotos.concat(e);this.setState({allphotos:t})}},{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement(g.d,null,n.a.createElement(g.b,{path:"/",exact:!0,render:function(t){return n.a.createElement(E,Object.assign({},t,{isLogged:e.state.isLogged,message:e.state.message,logout:e.logMeOut,login:e.logMein}))}}),n.a.createElement(g.b,{path:"/login",exact:!0,render:function(t){return n.a.createElement(A,Object.assign({},t,{isLogged:e.state.isLogged,message:e.state.message,login:e.logMein,setToken:e.setToken,logout:e.logMeOut}))}}),n.a.createElement(g.b,{path:"/register",exact:!0,render:function(t){return n.a.createElement(D,Object.assign({},t,{isLogged:e.state.isLogged,message:e.state.message,logout:e.logMeOut,login:e.logMein}))}}),n.a.createElement(g.b,{path:"/dashboard",exact:!0,render:function(t){return n.a.createElement(R,Object.assign({},t,{isLogged:e.state.isLogged,message:e.state.message,logout:e.logMeOut,login:e.logMein,loadPhotos:e.loadAllPhotos,allphotos:e.state.allphotos}))}}),n.a.createElement(g.b,{path:"/favorites",exact:!0,render:function(t){return n.a.createElement(W,Object.assign({},t,{isLogged:e.state.isLogged,message:e.state.message,logout:e.logMeOut,login:e.logMein}))}}),n.a.createElement(g.b,{path:"/yourposts",exact:!0,render:function(t){return n.a.createElement($,Object.assign({},t,{isLogged:e.state.isLogged,message:e.state.message,logout:e.logMeOut,login:e.logMein}))}})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.c42f51a3.chunk.js.map