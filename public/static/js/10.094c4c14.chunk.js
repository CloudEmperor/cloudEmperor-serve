(this.webpackJsonpcloudEmperor=this.webpackJsonpcloudEmperor||[]).push([[10],{572:function(e,t,n){e.exports=n(580)},573:function(e,t){e.exports={BASE_API:"http://192.168.1.117:3000",ENTERPRISE:"xxx",PLATFORM:"xxx",projectName:"development"}},579:function(e,t,n){"use strict";var a=n(572),i={base:n.n(a).a.BASE_API,login:{login:function(){return"/admin/admin_login"},register:function(){return"/admin/user_register"}},new:{details:function(){return"/news/get"}}};t.a=i},580:function(e,t){e.exports={BASE_API:"http://192.168.1.117:3000",ENTERPRISE:"xxx",PLATFORM:"xxx",projectName:"production"}},581:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p}));n(585);var a=n(586),i=n.n(a),r=n(593),o=n.n(r),s=n(572),c=function(e){i.a.error(e)},u=function(){console.log("\u5230\u767b\u5f55\u9875")};o.a.create({timeout:5e3}),o.a.defaults.baseURL=s.BASE_API,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.interceptors.request.use((function(e){var t=localStorage.getItem("x_token");return t&&(e.headers["X-Token"]=t),e}),(function(e){return Promise.error(e)})),o.a.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){var t=e.response;if(t)return function(e,t){switch(e){case 401:u();break;case 403:c("\u767b\u5f55\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"),localStorage.removeItem("x_token"),setTimeout((function(){u()}),1e3);break;case 404:c("\u8bf7\u6c42\u7684\u8d44\u6e90\u4e0d\u5b58\u5728");break;case 500:c("\u670d\u52a1\u5668\u5f02\u5e38");break;default:console.log(t)}}(t.status,t.data.message),Promise.reject(t)}));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){o.a.get(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){a(e)}))}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){o.a.post(e,t).then((function(e){n(e.data)}),(function(e){a(e)}))}))},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){o.a.delete(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){a(e)}))}))}},804:function(e,t,n){},899:function(e,t,n){"use strict";n.r(t);n(789);var a=n(887),i=n.n(a),r=(n(791),n(807)),o=n.n(r),s=(n(253),n(575)),c=n.n(s),u=(n(585),n(586)),l=n.n(u),d=n(131),p=n(41),f=n(42),g=n(43),h=n(44),m=n(0),v=n.n(m),b=(n(804),n(65)),w=n(805),x=n.n(w),E=n(579),S=n(581),k=function(e){Object(h.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).initData=function(){var e={page:a.state.pagination.current,rows:a.state.pagination.pageSize,catalogId:1};Object(S.b)(E.a.new.list(),e).then((function(e){if(200===e.status){var t=Object(d.a)({},a.state.pagination);t.total=e.data.total,a.setState({tableData:e.data.list||[],pagination:t})}else l.a.error(e.message)}))},a.rowEdit=function(e){a.props.history.push({pathname:"/editContent",search:x.a.stringify({type:"edit",id:e})})},a.rowDel=function(e){a.setState({deleteId:e.id,deleteMsg:e.title,visible:!0})},a.rowStick=function(e){1!==e.top?Object(S.b)(E.a.new.uptop(),{id:e.id,top:"1"}).then((function(e){200===e.status?(l.a.success("\u7f6e\u9876\u6210\u529f"),a.initData()):l.a.error(e.message)})):l.a.warning("\u5df2\u7f6e\u9876\uff0c\u8bf7\u52ff\u91cd\u590d\u64cd\u4f5c\uff01")},a.handleOk=function(){Object(S.a)(E.a.new.delete(),{id:a.state.deleteId}).then((function(e){200===e.status?(l.a.success("\u5220\u9664\u6210\u529f"),a.initData()):l.a.error(e.message)})),a.setState({visible:!1})},a.handleCancel=function(){a.setState({visible:!1})},a.handleTableChange=function(e,t,n){var i=Object(d.a)({},a.state.pagination);i.current=e.current,i.pageSize=e.pageSize,a.setState({pagination:i}),setTimeout((function(){a.initData()}))},a.renderActions=function(e){var t=e.record;return v.a.createElement("div",null,v.a.createElement("span",{onClick:function(){a.rowEdit(t.id)},className:"text-edit"},"\u4fee\u6539"),v.a.createElement("span",{onClick:function(){a.rowDel(t)},className:"text-del gap"},"\u5220\u9664"),v.a.createElement("span",{onClick:function(){a.rowStick(t)},className:"text-stick"},1===t.top?"\u5df2\u7f6e\u9876":"\u7f6e\u9876"))},a.state={visible:!1,deleteId:"",deleteMsg:"",pagination:{current:1,pageSize:15,showQuickJumper:!0,pageSizeOptions:["15","30","60","100"],showSizeChanger:!0,total:0},tableData:[],columns:[{title:"\u5e8f\u53f7",width:60,dataIndex:"index",render:function(e,t,n){return n+1}},{title:"\u59d3\u540d",dataIndex:"title"},{title:"\u89d2\u8272",dataIndex:"summary"},{title:"\u521b\u5efa\u8005",width:170,dataIndex:"createBy"},{title:"\u521b\u5efa\u65f6\u95f4",width:170,render:function(e){return function(e,t){if(e=new Date(e),isNaN(e.getDate()))return e;/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var a in n)if(new RegExp("(".concat(a,")")).test(t)){var i=n[a]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?i:("00"+i).substr(i.length))}return t}(e.createDate,"yyyy-MM-dd hh:mm")}},{title:"\u64cd\u4f5c",width:200,render:function(e){return a.renderActions({record:e})}}]},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return v.a.createElement("div",{className:"user"},v.a.createElement("div",{className:"user-handle"},v.a.createElement(c.a,{type:"primary"},"\u65b0\u589e")),v.a.createElement(o.a,{columns:this.state.columns,rowKey:"id",pagination:this.state.pagination,onChange:this.handleTableChange,dataSource:this.state.tableData}),v.a.createElement(i.a,{title:"\u53cb\u60c5\u63d0\u793a",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},v.a.createElement("p",null,"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u300a".concat(this.state.deleteMsg,"\u300b\u5417\uff1f"))))}}]),n}(v.a.Component);t.default=Object(b.g)(k)}}]);
//# sourceMappingURL=10.094c4c14.chunk.js.map