webpackJsonp([13],{"/9V0":function(t,e,n){"use strict";function a(t){n("TMZO")}var i=n("e8tO"),l=n("us//"),s=n("VU/8"),o=a,r=s(i.a,l.a,o,null,null);e.a=r.exports},"3/7/":function(t,e,n){"use strict";var a=n("7+uW"),i=n("/9V0");e.a={components:{vTitle:i.a},data:function(){return{tableData:[{id:1,title:"个人信息",icon:"http://sns-img.b0.upaiyun.com/dunzd/1510/2216/22/11445502168.png",status:!0,updatetime:"2017-02-14",type:"个人信息"},{id:2,title:"我的首页",icon:"http://sns-img.b0.upaiyun.com/dunzd/1510/2216/23/11445502215.png",status:!1,updatetime:"2017-02-14",type:"我的首页"},{id:3,title:"钱包",icon:"http://sns-img.b0.upaiyun.com/dunzd/1512/3115/22/145931798867381451546541.png",status:!0,updatetime:"2017-02-14",type:"钱包"},{id:4,title:"推荐给好友",icon:"http://sns-img.b0.upaiyun.com/dunzd/1601/2814/34/146333476560971453962866.png",status:!1,updatetime:"2017-02-14",type:"推荐给好友"},{id:5,title:"设置",icon:"http://sns-img.b0.upaiyun.com/dunzd/1510/2216/25/11445502343.png",status:!0,updatetime:"2017-02-14",type:"设置"}],dialogEditNews:!1,editForm:{newsname:"",newstype:"",id:""}}},methods:{handleSelectChange:function(t){this.editForm.newstype=t},handleChange:function(t){this.editForm.newsname=t},handleUp:function(t){var e=this.tableData.findIndex(function(e,n){return e.id===t}),n=this.tableData[e],i=this.tableData[e-1];a.default.set(this.tableData,e,i),a.default.set(this.tableData,e-1,n)},handleDown:function(t){var e=this.tableData.findIndex(function(e,n){return e.id===t}),n=this.tableData[e],i=this.tableData[e+1];a.default.set(this.tableData,e,i),a.default.set(this.tableData,e+1,n)},handleEdit:function(t){if(this.dialogEditNews=!0,"undefined"!==t){var e=this.tableData;e=e.filter(function(e,n){return e.id===t}),this.editForm.id=e[0].id,this.editForm.newsname=e[0].title,this.editForm.newstype=e[0].type}else this.editForm.id=t},handleDel:function(t){var e=this,n=this.tableData.findIndex(function(e,n){return e.id===t});this.$confirm("是否删除这条数据？","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){e.tableData.splice(n,1),e.$message({type:"success",message:"删除成功"})}).catch(function(){})},handleSave:function(){var t=this;if("undefined"===this.editForm.id)a.default.set(this.tableData,this.tableData.length,{id:Math.floor(100*Math.random()),title:this.editForm.newsname,icon:"http://sns-img.b0.upaiyun.com/dunzd/1709/2815/24/150839059031051506583478.jpg",status:!1,updatetime:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),type:this.editForm.newstype});else{var e=this.tableData.findIndex(function(e,n){return e.id===t.editForm.id});a.default.set(this.tableData,e,{id:this.editForm.id,title:this.editForm.newsname,icon:this.tableData[e].icon,status:this.tableData[e].status,updatetime:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),type:this.editForm.newstype})}this.dialogEditNews=!1},handleCancel:function(){this.dialogEditNews=!1}}}},"F/oy":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".table_item{margin:10px 0}.table_column{padding:10px 0}","",{version:3,sources:["F:/vue_plat_manage/src/components/page/content/mine.vue"],names:[],mappings:"AACA,YACE,aAAe,CAChB,AACD,cACE,cAAgB,CACjB",file:"mine.vue",sourcesContent:["\n.table_item {\n  margin: 10px 0;\n}\n.table_column {\n  padding: 10px 0;\n}\n"],sourceRoot:""}])},KR8v:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-title",{attrs:{title:"我的"}}),t._v(" "),n("div",{staticClass:"table_item"},[n("el-row",[n("el-col",{attrs:{span:22}},[t._v(" ")]),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleEdit("undefined")}}},[t._v("添加")])],1)],1)],1),t._v(" "),n("div",{staticClass:"table_item"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-table",{attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{prop:"title",label:"名称",width:"150",align:"center","class-name":"table_column"}}),t._v(" "),n("el-table-column",{attrs:{label:"图标",width:"80",align:"center","class-name":"table_column",prop:"icon"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:t.row.icon,alt:"",width:"40",height:"40"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"100",align:"center","class-name":"table_column"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-switch",{model:{value:t.row.status,callback:function(e){t.row.status=e},expression:"scope.row.status"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"updatetime",label:"更新时间",width:"180",align:"center","class-name":"table_column"}}),t._v(" "),n("el-table-column",{attrs:{prop:"type",label:"所属类型",width:"120",align:"center","class-name":"table_column"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"",align:"center","class-name":"table_column"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",disabled:0==e.$index},on:{click:function(n){t.handleUp(e.row.id)}}},[t._v("上移")]),t._v(" "),n("el-button",{attrs:{type:"text",disabled:e.$index==t.tableData.length-1},on:{click:function(n){t.handleDown(e.row.id)}}},[t._v("下移")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){t.handleEdit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(n){t.handleDel(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"编辑/添加",visible:t.dialogEditNews},on:{"update:visible":function(e){t.dialogEditNews=e}}},[n("el-row",[n("el-col",{attrs:{span:2}},[t._v(" ")]),t._v(" "),n("el-col",{attrs:{span:16}},[n("el-form",{attrs:{model:t.editForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"名称：",prop:"newsname"}},[n("div",{staticClass:"form_item"},[n("el-input",{attrs:{placeholder:"请输入名称"},on:{change:t.handleChange},model:{value:t.editForm.newsname,callback:function(e){t.editForm.newsname=e},expression:"editForm.newsname"}})],1)]),t._v(" "),n("el-form-item",{attrs:{label:"类型：",prop:"newstype"}},[n("el-select",{on:{change:t.handleSelectChange},model:{value:t.editForm.newstype,callback:function(e){t.editForm.newstype=e},expression:"editForm.newstype"}},[n("el-option",{attrs:{value:"个人信息"}},[t._v("个人信息")]),t._v(" "),n("el-option",{attrs:{value:"我的首页"}},[t._v("我的首页")]),t._v(" "),n("el-option",{attrs:{value:"安全中心"}},[t._v("安全中心")]),t._v(" "),n("el-option",{attrs:{value:"阅读"}},[t._v("阅读")]),t._v(" "),n("el-option",{attrs:{value:"设置"}},[t._v("设置")]),t._v(" "),n("el-option",{attrs:{value:"推荐给好友"}},[t._v("推荐给好友")]),t._v(" "),n("el-option",{attrs:{value:"钱包"}},[t._v("钱包")]),t._v(" "),n("el-option",{attrs:{value:"活动签到"}},[t._v("活动签到")])],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleSave}},[t._v("立即保存")]),t._v(" "),n("el-button",{on:{click:t.handleCancel}},[t._v("取消")])],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[t._v(" ")])],1)],1)],1)},i=[],l={render:a,staticRenderFns:i};e.a=l},TMZO:function(t,e,n){var a=n("mEI9");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2dae145c",a,!0)},"Z9O+":function(t,e,n){"use strict";function a(t){n("hDBK")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("3/7/"),l=n("KR8v"),s=n("VU/8"),o=a,r=s(i.a,l.a,o,null,null);e.default=r.exports},e8tO:function(t,e,n){"use strict";e.a={props:["title"]}},hDBK:function(t,e,n){var a=n("F/oy");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("31b1b6dc",a,!0)},mEI9:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".title{height:50px}hr{margin-top:6px;border:1px solid #d9d9d9}","",{version:3,sources:["F:/vue_plat_manage/src/components/common/Title.vue"],names:[],mappings:"AACA,OACE,WAAa,CACd,AACD,GACE,eAAgB,AAChB,wBAA0B,CAC3B",file:"Title.vue",sourcesContent:["\n.title {\n  height: 50px;\n}\nhr {\n  margin-top: 6px;\n  border: 1px solid #d9d9d9;\n}\n"],sourceRoot:""}])},"us//":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("hr")])},i=[],l={render:a,staticRenderFns:i};e.a=l}});
//# sourceMappingURL=13.2326b4507edc75e7d068.js.map