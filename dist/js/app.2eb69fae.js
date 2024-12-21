(()=>{"use strict";var e={33830:(e,t,r)=>{r(23792),r(3362),r(69085),r(9391);var n=r(45130),a=r(20807),o=(r(4188),r(56768)),s={id:"app"};function u(e,t,r,n,a,u){var i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(i)])}const i={name:"App"};var l=r(71241);const c=(0,l.A)(i,[["render",u]]),d=c;var p=r(41034),f=(r(15086),r(26099),r(98992),r(37550),r(81387)),m=(r(44114),r(24232)),v={class:"register-container"};function g(e,t,r,n,a,s){var u=(0,o.g2)("el-input"),i=(0,o.g2)("el-form-item"),l=(0,o.g2)("el-button"),c=(0,o.g2)("el-form"),d=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(d,{class:"register-card"},{default:(0,o.k6)((function(){return[t[7]||(t[7]=(0,o.Lk)("h2",null,"用户注册",-1)),(0,o.bF)(c,{ref:"registerForm",model:n.form,rules:n.rules,"label-width":"80px",class:"register-form"},{default:(0,o.k6)((function(){return[(0,o.bF)(i,{label:"邮箱",prop:"email"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{modelValue:n.form.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.form.email=e}),type:"email",placeholder:"请输入邮箱"},null,8,["modelValue"])]})),_:1}),(0,o.bF)(i,{label:"用户名",prop:"username"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{modelValue:n.form.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.form.username=e}),placeholder:"请输入用户名"},null,8,["modelValue"])]})),_:1}),(0,o.bF)(i,{label:"密码",prop:"password"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{modelValue:n.form.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.form.password=e}),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]})),_:1}),n.showVerificationCode?((0,o.uX)(),(0,o.Wv)(i,{key:0,label:"验证码",prop:"code"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{modelValue:n.form.code,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.form.code=e}),placeholder:"请输入验证码"},{append:(0,o.k6)((function(){return[(0,o.bF)(l,{disabled:n.countdown>0,onClick:n.handleSendCode},{default:(0,o.k6)((function(){return[(0,o.eW)((0,m.v_)(n.countdown>0?"".concat(n.countdown,"秒后重试"):"获取验证码"),1)]})),_:1},8,["disabled","onClick"])]})),_:1},8,["modelValue"])]})),_:1})):(0,o.Q3)("",!0),(0,o.bF)(i,null,{default:(0,o.k6)((function(){return[(0,o.bF)(l,{type:"primary",onClick:n.handleRegister,loading:n.loading},{default:(0,o.k6)((function(){return t[5]||(t[5]=[(0,o.eW)(" 注册 ")])})),_:1},8,["onClick","loading"]),(0,o.bF)(l,{onClick:t[4]||(t[4]=function(t){return e.$router.push("/login")})},{default:(0,o.k6)((function(){return t[6]||(t[6]=[(0,o.eW)("返回登录")])})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})])}var h=r(14048),k=r(30388),b=(r(76031),r(90144)),y=r(51219),A=r(36966);const _={name:"Register",setup:function(){var e=(0,f.rd)(),t=(0,b.KR)(null),r=(0,b.KR)(!1),n=(0,b.KR)(!1),a=(0,b.KR)(0),o=(0,b.Kh)({email:"",username:"",password:"",code:""}),s={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:20,message:"用户名长度在3到20个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,message:"密码长度至少为8个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{len:6,message:"验证码长度为6位",trigger:"blur"}]},u=function(){a.value=60;var e=setInterval((function(){a.value--,a.value<=0&&clearInterval(e)}),1e3)},i=function(){var e=(0,k.A)((0,h.A)().mark((function e(){var t;return(0,h.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.A.post("/api/auth/resend-verification",{email:o.email});case 3:t=e.sent,200===t.data.status&&(u(),n.value=!0,y.nk.success("验证码已发送，请查收邮件")),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),y.nk.error("发送验证码失败，请重试");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var n=(0,k.A)((0,h.A)().mark((function n(){return(0,h.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.value){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.value.validate(function(){var t=(0,k.A)((0,h.A)().mark((function t(n){var a,s,u;return(0,h.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=16;break}return r.value=!0,t.prev=2,t.next=5,A.A.post("/api/auth/register",o);case 5:a=t.sent,201===a.data.status&&e.push("/register-success"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),u=(null===(s=t.t0.response)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.message)||"注册失败，请重试",y.nk.error(u);case 13:return t.prev=13,r.value=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,9,13,16]])})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{registerForm:t,form:o,rules:s,loading:r,showVerificationCode:n,countdown:a,handleSendCode:i,handleRegister:l}}},w=(0,l.A)(_,[["render",g],["__scopeId","data-v-4f9c42b4"]]),F=w;var x={class:"login-container"};function L(e,t,r,n,a,s){var u=(0,o.g2)("el-input"),i=(0,o.g2)("el-form-item"),l=(0,o.g2)("el-button"),c=(0,o.g2)("el-form"),d=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",x,[(0,o.bF)(d,{class:"login-card"},{default:(0,o.k6)((function(){return[t[5]||(t[5]=(0,o.Lk)("h2",null,"用户登录",-1)),(0,o.bF)(c,{ref:"loginForm",model:n.form,rules:n.rules,"label-width":"80px",class:"login-form"},{default:(0,o.k6)((function(){return[(0,o.bF)(i,{label:"邮箱",prop:"email"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{modelValue:n.form.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.form.email=e}),type:"email",placeholder:"请输入邮箱"},null,8,["modelValue"])]})),_:1}),(0,o.bF)(i,{label:"密码",prop:"password"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{modelValue:n.form.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.form.password=e}),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]})),_:1}),(0,o.bF)(i,null,{default:(0,o.k6)((function(){return[(0,o.bF)(l,{type:"primary",onClick:n.handleLogin,loading:n.loading},{default:(0,o.k6)((function(){return t[3]||(t[3]=[(0,o.eW)(" 登录 ")])})),_:1},8,["onClick","loading"]),(0,o.bF)(l,{onClick:t[2]||(t[2]=function(t){return e.$router.push("/register")})},{default:(0,o.k6)((function(){return t[4]||(t[4]=[(0,o.eW)("注册账号")])})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]})),_:1})])}const P={name:"Login",setup:function(){var e=(0,f.rd)(),t=(0,b.KR)(null),r=(0,b.KR)(!1),n=(0,b.Kh)({email:"",password:""}),a={email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱格式",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},o=function(){var a=(0,k.A)((0,h.A)().mark((function a(){return(0,h.A)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.value){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,t.value.validate(function(){var t=(0,k.A)((0,h.A)().mark((function t(a){var o,s,u,i;return(0,h.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=16;break}return r.value=!0,t.prev=2,t.next=5,A.A.post("/api/auth/login",n);case 5:o=t.sent,200===o.data.status&&(s=o.data.data.token,localStorage.setItem("token",s),y.nk.success("登录成功"),e.push("/")),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),i=(null===(u=t.t0.response)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.message)||"登录失败，请重试",y.nk.error(i);case 13:return t.prev=13,r.value=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,9,13,16]])})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return{loginForm:t,form:n,rules:a,loading:r,handleLogin:o}}},C=(0,l.A)(P,[["render",L],["__scopeId","data-v-7850fe86"]]),E=C;var V={class:"success-container"};function R(e,t,r,n,a,s){var u=(0,o.g2)("el-button"),i=(0,o.g2)("el-result"),l=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.bF)(l,{class:"success-card"},{default:(0,o.k6)((function(){return[(0,o.bF)(i,{icon:"success",title:"注册成功","sub-title":"请前往邮箱完成验证"},{extra:(0,o.k6)((function(){return[(0,o.bF)(u,{type:"primary",onClick:t[0]||(t[0]=function(t){return e.$router.push("/login")})},{default:(0,o.k6)((function(){return t[1]||(t[1]=[(0,o.eW)(" 返回登录 ")])})),_:1})]})),_:1})]})),_:1})])}const U={name:"RegisterSuccess"},S=(0,l.A)(U,[["render",R],["__scopeId","data-v-51b3b640"]]),q=S;r(52675),r(89463),r(62010);var I={class:"home"},W={class:"header-gradient border-bottom"},O={class:"header-actions"},K={class:"hero-section"},X={class:"main-content"},D={class:"products-section"},H={class:"section-header"},$={class:"product-list"},j={class:"product-icon"},M={class:"product-info"},N={class:"product-name"},B={class:"product-description"},z={class:"product-tags"},T={class:"product-links"},Q={class:"testimonials-section"},J={class:"testimonial-text"},G={class:"testimonial-author"},Y={class:"author-info"},Z={class:"author-name"},ee={class:"author-title"};function te(e,t,r,n,a,s){var u=(0,o.g2)("el-menu-item"),i=(0,o.g2)("el-menu"),l=(0,o.g2)("el-button"),c=(0,o.g2)("el-option"),d=(0,o.g2)("el-select"),p=(0,o.g2)("el-header"),f=(0,o.g2)("el-input"),v=(0,o.g2)("el-link"),g=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",I,[(0,o.Lk)("div",W,[(0,o.bF)(p,{class:"header-container"},{default:(0,o.k6)((function(){return[t[7]||(t[7]=(0,o.Lk)("div",{class:"logo"},"产品快拆",-1)),(0,o.bF)(i,{mode:"horizontal",router:!0,class:"nav-menu"},{default:(0,o.k6)((function(){return[(0,o.bF)(u,{index:"/"},{default:(0,o.k6)((function(){return t[2]||(t[2]=[(0,o.eW)("首页")])})),_:1}),(0,o.bF)(u,{index:"/products"},{default:(0,o.k6)((function(){return t[3]||(t[3]=[(0,o.eW)("已拆产品")])})),_:1}),(0,o.bF)(u,{index:"/upcoming"},{default:(0,o.k6)((function(){return t[4]||(t[4]=[(0,o.eW)("待拆新品")])})),_:1}),(0,o.bF)(u,{index:"/membership"},{default:(0,o.k6)((function(){return t[5]||(t[5]=[(0,o.eW)("开通会员")])})),_:1})]})),_:1}),(0,o.Lk)("div",O,[(0,o.bF)(l,{type:"primary",onClick:s.handleLogin},{default:(0,o.k6)((function(){return t[6]||(t[6]=[(0,o.eW)("登陆/注册")])})),_:1},8,["onClick"]),(0,o.bF)(d,{modelValue:a.language,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.language=e}),class:"language-select"},{default:(0,o.k6)((function(){return[(0,o.bF)(c,{label:"EN/中文",value:"en-zh"})]})),_:1},8,["modelValue"])])]})),_:1})]),(0,o.Lk)("div",K,[t[9]||(t[9]=(0,o.Lk)("div",{class:"hero-image-container"},[(0,o.Lk)("img",{src:"https://placeholder.co/800x400/orange/white?text=Product+Analysis",alt:"Product Analysis",class:"hero-image"})],-1)),t[10]||(t[10]=(0,o.Lk)("h1",null,"竞品拆解，一键搞定！",-1)),t[11]||(t[11]=(0,o.Lk)("p",null,"无论网站还是APP，上传使用录屏视频，直接生成产品需求文档PRD、商业计划书",-1)),(0,o.bF)(l,{type:"primary",size:"large",onClick:s.handleUpload},{default:(0,o.k6)((function(){return t[8]||(t[8]=[(0,o.eW)(" 上传录屏，一键拆解 ")])})),_:1},8,["onClick"])]),(0,o.Lk)("div",X,[(0,o.Lk)("div",D,[(0,o.Lk)("div",H,[t[12]||(t[12]=(0,o.Lk)("h2",null,"今日热门已拆产品",-1)),(0,o.bF)(f,{modelValue:a.searchQuery,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.searchQuery=e}),placeholder:"search","prefix-icon":"el-icon-search",class:"search-input"},null,8,["modelValue"])]),(0,o.Lk)("div",$,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.products,(function(e){return(0,o.uX)(),(0,o.Wv)(g,{key:e.id,class:"product-card",onClick:function(t){return s.viewProduct(e.id)}},{default:(0,o.k6)((function(){return[(0,o.Lk)("div",j,(0,m.v_)(e.icon),1),(0,o.Lk)("div",M,[(0,o.Lk)("h3",N,(0,m.v_)(e.name),1),(0,o.Lk)("p",B,(0,m.v_)(e.description),1),(0,o.Lk)("div",z,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.tags,(function(e){return(0,o.uX)(),(0,o.CE)("span",{key:e,class:"tag"}," • "+(0,m.v_)(e),1)})),128))])]),(0,o.Lk)("div",T,[(0,o.bF)(v,{href:"#bp-"+e.bp},{default:(0,o.k6)((function(){return[(0,o.eW)("BP (查看"+(0,m.v_)(e.bp)+")",1)]})),_:2},1032,["href"]),(0,o.bF)(v,{href:"#prd-"+e.prd},{default:(0,o.k6)((function(){return[(0,o.eW)("PRD (查看"+(0,m.v_)(e.prd)+")",1)]})),_:2},1032,["href"])])]})),_:2},1032,["onClick"])})),128)),(0,o.bF)(l,{type:"primary",class:"load-more"},{default:(0,o.k6)((function(){return t[13]||(t[13]=[(0,o.eW)("查看更多")])})),_:1})])]),(0,o.Lk)("div",Q,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.testimonials,(function(e){return(0,o.uX)(),(0,o.Wv)(g,{key:e.id,class:"testimonial-card"},{default:(0,o.k6)((function(){return[(0,o.Lk)("p",J,(0,m.v_)(e.text),1),(0,o.Lk)("div",G,[t[14]||(t[14]=(0,o.Lk)("div",{class:"author-avatar"},null,-1)),(0,o.Lk)("div",Y,[(0,o.Lk)("div",Z,(0,m.v_)(e.name),1),(0,o.Lk)("div",ee,(0,m.v_)(e.title),1)])])]})),_:2},1024)})),128))])])])}var re=r(81587),ne=(r(47764),r(62953),"https://auth-api-nvdempim.fly.dev"),ae={getProducts:function(){var e=arguments;return(0,k.A)((0,h.A)().mark((function t(){var r;return(0,h.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.length>0&&void 0!==e[0]&&e[0],!r){t.next=3;break}return t.abrupt("return",{data:{products:[{id:1,name:"Jetson Orin Nano Super Developer Kit",description:"Most affordable generative AI supercomputer",tags:["Robots","Hardware"],icon:"🤖",bp:"1234",prd:"4565"},{id:2,name:"PontaHR",description:"Ditch the chaos, discover a better way to hire",tags:["Hiring","SaaS","Human Resources"],icon:"😊",bp:"1234",prd:"4565"},{id:3,name:"Hercaress",description:"Clover",tags:["Couples","Inclusivity","Intimacy"],icon:"H",bp:"1234",prd:"4565"},{id:4,name:"Amazon Project Amelia",description:"A powerful new generative AI-based selling assistant",tags:["Artificial Intelligence","E-Commerce"],icon:"📦",bp:"1234",prd:"4565"},{id:5,name:"Soothe",description:"Anonymous app for kindness",tags:["Anonymous","Health","Community"],icon:"😌",bp:"1234",prd:"4565"}]}});case 3:return t.abrupt("return",A.A.get("".concat(ne,"/api/videos")));case 4:case"end":return t.stop()}}),t)})))()},getTestimonials:function(){var e=arguments;return(0,k.A)((0,h.A)().mark((function t(){var r;return(0,h.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.length>0&&void 0!==e[0]&&e[0],!r){t.next=3;break}return t.abrupt("return",{data:{testimonials:[{id:1,text:"这里是一段证言",name:"Barry McCardel",title:"CEO and co-founder at Hex"},{id:2,text:"这里是一段证言",name:"Barry McCardel",title:"CEO and co-founder at Hex"},{id:3,text:"这里是一段证言",name:"Barry McCardel",title:"CEO and co-founder at Hex"}]}});case 3:return t.abrupt("return",A.A.get("".concat(ne,"/api/testimonials")));case 4:case"end":return t.stop()}}),t)})))()}};const oe={name:"Home",data:function(){return{language:"en-zh",searchQuery:"",products:[],testimonials:[],loading:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return(0,k.A)((0,h.A)().mark((function t(){var r,n,a,o,s;return(0,h.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,r="1"===e.$route.query.mock,t.next=5,Promise.all([ae.getProducts(r),ae.getTestimonials(r)]);case 5:n=t.sent,a=(0,re.A)(n,2),o=a[0],s=a[1],e.products=o.data.products,e.testimonials=s.data.testimonials,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error("Error fetching data:",t.t0),e.$message.error("Failed to load data");case 17:return t.prev=17,e.loading=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,13,17,20]])})))()},handleLogin:function(){this.$router.push("/login")},handleUpload:function(){var e=this.$route.query.mock?{mock:this.$route.query.mock}:{};this.$router.push({path:"/upload",query:e})},viewProduct:function(e){var t=this.$route.query.mock?{mock:this.$route.query.mock}:{};this.$router.push({path:"/products/".concat(e),query:t})}}},se=(0,l.A)(oe,[["render",te],["__scopeId","data-v-75e8c47c"]]),ue=se;var ie={class:"video-upload"},le={key:0,class:"auth-required"},ce={key:1},de={key:1,class:"analysis-status"};function pe(e,t,r,n,a,s){var u=(0,o.g2)("el-alert"),i=(0,o.g2)("el-button"),l=(0,o.g2)("upload-filled"),c=(0,o.g2)("el-icon"),d=(0,o.g2)("el-upload"),p=(0,o.g2)("el-progress"),f=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",ie,[(0,o.bF)(f,{class:"upload-card"},{header:(0,o.k6)((function(){return t[0]||(t[0]=[(0,o.Lk)("div",{class:"card-header"},[(0,o.Lk)("h2",null,"上传视频分析"),(0,o.Lk)("p",null,"上传APP操作录屏，自动生成PRD和商业计划书")],-1)])})),default:(0,o.k6)((function(){return[n.isAuthenticated?((0,o.uX)(),(0,o.CE)("div",ce,[(0,o.bF)(d,{class:"upload-container",drag:"",action:n.uploadUrl,"before-upload":n.beforeUpload,"on-success":n.handleSuccess,"on-error":n.handleError,"on-progress":n.handleProgress,headers:n.uploadHeaders,accept:"video/*"},{tip:(0,o.k6)((function(){return t[2]||(t[2]=[(0,o.Lk)("div",{class:"el-upload__tip"}," 支持上传MP4格式视频文件，文件大小不超过500MB ",-1)])})),default:(0,o.k6)((function(){return[(0,o.bF)(c,{class:"el-icon-upload"},{default:(0,o.k6)((function(){return[(0,o.bF)(l)]})),_:1}),t[3]||(t[3]=(0,o.Lk)("div",{class:"el-upload__text"},[(0,o.eW)(" 拖拽视频文件到此处或 "),(0,o.Lk)("em",null,"点击上传")],-1))]})),_:1},8,["action","before-upload","on-success","on-error","on-progress","headers"]),n.uploadProgress>0&&n.uploadProgress<100?((0,o.uX)(),(0,o.Wv)(p,{key:0,percentage:n.uploadProgress,status:n.uploadStatus},null,8,["percentage","status"])):(0,o.Q3)("",!0),n.analyzing?((0,o.uX)(),(0,o.CE)("div",de,[(0,o.bF)(u,{title:"正在分析视频",type:"info",description:n.analysisStatus,"show-icon":""},null,8,["description"]),(0,o.bF)(p,{percentage:n.analysisProgress,status:100===n.analysisProgress?"success":""},null,8,["percentage","status"])])):(0,o.Q3)("",!0)])):((0,o.uX)(),(0,o.CE)("div",le,[(0,o.bF)(u,{title:"请先登录",type:"warning",description:"您需要登录后才能上传视频","show-icon":""}),(0,o.bF)(i,{type:"primary",onClick:n.handleLogin,class:"login-button"},{default:(0,o.k6)((function(){return t[1]||(t[1]=[(0,o.eW)(" 去登录 ")])})),_:1},8,["onClick"])]))]})),_:1})])}r(28706),r(11392);var fe=r(57477),me=r(60782);const ve={name:"VideoUpload",components:{UploadFilled:fe.m8m},setup:function(){var e=(0,me.Pj)(),t=(0,f.rd)(),r=(0,b.KR)(0),n=(0,b.KR)(""),a=(0,b.KR)(!1),s=(0,b.KR)(0),u=(0,b.KR)(""),i=(0,b.KR)(null),l=(0,o.EW)((function(){return e.state.auth.isAuthenticated})),c=(0,o.EW)((function(){var e={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL||"https://auth-api-nvdempim.fly.dev";return"".concat(e,"/api/videos/upload")})),d=(0,o.EW)((function(){return{Authorization:"Bearer ".concat(e.state.auth.token)}})),m=function(e){var t=e.type.startsWith("video/"),r=e.size/1024/1024<500;return t?!!r||(y.nk.error("视频大小不能超过 500MB!"),!1):(y.nk.error("只能上传视频文件!"),!1)},v=function(){var e=(0,k.A)((0,h.A)().mark((function e(r){var n,o,l,c,f,m,v;return(0,h.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL||"https://auth-api-nvdempim.fly.dev",e.next=4,A.A.get("".concat(n,"/api/videos/").concat(r,"/status"),{headers:d.value});case 4:o=e.sent,l=o.data,c=l.status,f=l.progress,m=l.prd,v=l.business_plan,u.value=c,s.value=f,"completed"===c?(clearInterval(i.value),a.value=!1,t.push({path:"/products/".concat(r),query:(0,p.A)((0,p.A)({},t.currentRoute.value.query),{},{prd:encodeURIComponent(m),business_plan:encodeURIComponent(v)})})):"failed"===c&&(clearInterval(i.value),a.value=!1,y.nk.error("视频分析失败，请重试")),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error("Analysis status check failed:",e.t0),y.nk.error("检查分析状态失败");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){r.value=100,n.value="success",a.value=!0,u.value="正在分析视频...",s.value=0;var o=e.videoId;i.value=setInterval((function(){v(o)}),3e3),setTimeout((function(){i.value&&(clearInterval(i.value),a.value=!1,y.nk.warning("分析时间过长，请稍后在产品列表中查看结果"),t.push("/"))}),6e5)},_=function(e){var t;n.value="exception";var r=(null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.detail)||"上传失败，请重试";y.nk.error(r)},w=function(e){r.value=Math.round(e.percent)},F=function(){t.push({path:"/login",query:(0,p.A)((0,p.A)({},t.currentRoute.value.query),{},{redirect:t.currentRoute.value.fullPath})})};return{isAuthenticated:l,uploadUrl:c,uploadHeaders:d,uploadProgress:r,uploadStatus:n,analyzing:a,analysisProgress:s,analysisStatus:u,beforeUpload:m,handleSuccess:g,handleError:_,handleProgress:w,handleLogin:F}}},ge=(0,l.A)(ve,[["render",pe],["__scopeId","data-v-4a743232"]]),he=ge;var ke=(0,me.y$)({state:{user:null,isAuthenticated:!1,videoAnalysis:{currentVideo:null,analysisStatus:null,prdDocument:null,businessPlan:null}},mutations:{setUser:function(e,t){e.user=t,e.isAuthenticated=!!t},setVideoAnalysis:function(e,t){var r=t.video,n=t.status,a=t.prd,o=t.businessPlan;e.videoAnalysis={currentVideo:r||e.videoAnalysis.currentVideo,analysisStatus:n||e.videoAnalysis.analysisStatus,prdDocument:a||e.videoAnalysis.prdDocument,businessPlan:o||e.videoAnalysis.businessPlan}}},actions:{updateUser:function(e,t){var r=e.commit;r("setUser",t)},updateVideoAnalysis:function(e,t){var r=e.commit;r("setVideoAnalysis",t)}},getters:{isAuthenticated:function(e){return e.isAuthenticated},currentUser:function(e){return e.user},videoAnalysisStatus:function(e){return e.videoAnalysis}}});const be=ke;var ye=[{path:"/",name:"Home",component:ue,meta:{requiresAuth:!1}},{path:"/register",name:"Register",component:F,meta:{requiresAuth:!1}},{path:"/login",name:"Login",component:E,meta:{requiresAuth:!1}},{path:"/register-success",name:"RegisterSuccess",component:q,meta:{requiresAuth:!1}},{path:"/upload",name:"VideoUpload",component:he,meta:{requiresAuth:!0}}],Ae=(0,f.aE)({history:(0,f.LA)(),routes:ye});Ae.beforeEach((function(e,t,r){var n="1"===t.query.mock,a=(0,p.A)({},e.query);if(n&&!a.mock&&(a.mock="1"),e.matched.some((function(e){return e.meta.requiresAuth}))){var o=localStorage.getItem("token");if(!o)return void r({path:"/login",query:(0,p.A)({redirect:e.fullPath},a)})}r((0,p.A)((0,p.A)({},e),{},{query:a}))}));const _e=Ae;r(79432),r(27495),r(5746),r(48408),r(14603),r(47566),r(98721);var we=r(34240),Fe=r.n(we),xe={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL||"https://auth-api-nvdempim.fly.dev";Fe().mock("".concat(xe,"/api/videos"),"get",{status:200,data:{videos:[{id:"1",title:"Screen Fill Light",status:"completed",prdUrl:"/api/videos/1/prd",businessPlanUrl:"/api/videos/1/business-plan"}]}}),Fe().mock("".concat(xe,"/api/videos/upload"),"post",{status:200,data:{productId:"@id",message:"视频上传成功，正在分析中"}}),Fe().mock(/\/api\/videos\/\d+\/analysis-status/,"get",{status:200,data:{status:"completed",progress:100,prdUrl:"/api/videos/@id/prd",businessPlanUrl:"/api/videos/@id/business-plan"}}),Fe().mock(/\/api\/videos\/\d+\/prd/,"get",{status:200,data:{content:"# 产品需求文档 (PRD)\n## 1. 产品定位\n- 目标用户群：专业内容创作者\n- 核心价值：提升创作效率和质量\n- 市场分析：内容创作市场持续增长\n\n## 2. 功能需求\n### 2.1 核心功能\n- 智能场景识别\n- 自动亮度调节\n- 多模式切换\n\n### 2.2 用户界面\n- 简洁直观的控制面板\n- 实时预览功能\n\n## 3. 技术实现\n采用先进的图像处理算法，结合智能传感器技术，实现自动场景识别和亮度调节。\n\n## 4. 测试计划\n包括功能测试、性能测试和用户体验测试，确保产品质量。"}}),Fe().mock(/\/api\/videos\/\d+\/business-plan/,"get",{status:200,data:{content:"# 商业计划书\n## 1. 市场分析\n- 市场规模：内容创作市场规模超过1000亿\n- 目标用户：专业视频创作者和直播主播\n- 竞争分析：现有产品功能单一，缺乏智能化\n\n## 2. 商业模式\n- 收入来源：硬件销售和增值服务\n- 定价策略：高端定位，突出产品价值\n- 成本结构：研发投入和生产成本\n\n## 3. 营销策略\n通过社交媒体和KOL合作推广，建立品牌影响力\n\n## 4. 发展规划\n持续优化产品功能，拓展市场份额"}});var Le="1"===new URLSearchParams(window.location.search).get("mock");Le?(Fe().mock("/api/auth/register","post",(function(e){var t=JSON.parse(e.body),r=t.email,n=t.username;return"exists@example.com"===r?{status:409,message:"邮箱已被注册"}:"existinguser"===n?{status:409,message:"用户名已被使用"}:{status:201,message:"注册成功，请查收验证邮件"}})),Fe().mock("/api/auth/verify-email","post",(function(e){var t=JSON.parse(e.body),r=t.code;return"000000"===r?{status:400,message:"验证码已过期"}:"123456"===r?{status:200,message:"邮箱验证成功"}:{status:400,message:"验证码错误"}})),Fe().mock("/api/auth/login","post",(function(e){var t=JSON.parse(e.body),r=t.email,n=t.password;return"unverified@example.com"===r?{status:403,message:"邮箱未验证"}:"wrongpassword"===n?{status:401,message:"邮箱或密码错误"}:{status:200,data:{token:"mock-jwt-token",user:{email:r,username:"mockuser"}}}})),Fe().mock("/api/auth/resend-verification","post",(function(){return{status:200,message:"验证码已重新发送"}}))):Fe().restore();var Pe=(0,n.Ef)(d);Pe.use(a.A),Pe.use(be),Pe.use(_e),Pe.mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,o)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],u=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(u=!1,o<s&&(s=o));if(u){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{var e={524:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,u,i]=n,l=0;if(s.some((t=>0!==e[t]))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(i)var c=i(r)}for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunkpc_frontend"]=self["webpackChunkpc_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[504],(()=>r(33830)));n=r.O(n)})();
//# sourceMappingURL=app.2eb69fae.js.map