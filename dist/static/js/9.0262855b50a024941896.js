webpackJsonp([9],{"/9V0":function(o,r,e){"use strict";function a(o){e("TMZO")}var t=e("e8tO"),l=e("us//"),n=e("VU/8"),i=a,s=n(t.a,l.a,i,null,null);r.a=s.exports},"0VhJ":function(o,r,e){"use strict";function a(o){e("IMIQ")}Object.defineProperty(r,"__esModule",{value:!0});var t=e("Ngsx"),l=e("MUcQ"),n=e("VU/8"),i=a,s=n(t.a,l.a,i,null,null);r.default=s.exports},IMIQ:function(o,r,e){var a=e("gNvF");"string"==typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);e("rjj0")("89703dc0",a,!0)},MUcQ:function(o,r,e){"use strict";var a=function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{},[e("v-title",{attrs:{title:"分享落地页设置"}}),o._v(" "),e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"bg-purple"},[e("img",{attrs:{src:o.shareloadForm.logoImageUrl}}),o._v(" "),e("span",{style:{backgroundColor:o.shareloadForm.bgcolor,borderColor:o.shareloadForm.btncolor,color:o.shareloadForm.fontcolor}},[o._v("立即打开")])]),o._v(" "),e("el-form",{attrs:{model:o.shareloadForm,"label-position":"left","label-width":"220px",rules:o.shareloadRules}},[e("el-form-item",{attrs:{label:"1.右上角立即打开按钮背景色：",prop:"bgcolor"}},[e("el-color-picker",{attrs:{"show-alpha":""},on:{change:o.handleBgColor},model:{value:o.shareloadForm.bgcolor,callback:function(r){o.shareloadForm.bgcolor=r},expression:"shareloadForm.bgcolor"}})],1),o._v(" "),e("el-form-item",{attrs:{label:"2.右上角立即打开按钮边框色：",prop:"btncolor"}},[e("el-color-picker",{attrs:{"show-alpha":""},on:{change:o.handleBtnColor},model:{value:o.shareloadForm.btncolor,callback:function(r){o.shareloadForm.btncolor=r},expression:"shareloadForm.btncolor"}})],1),o._v(" "),e("el-form-item",{attrs:{label:"3.右上角立即打开按钮字体色：",prop:"fontcolor"}},[e("el-color-picker",{attrs:{"show-alpha":""},on:{change:o.handleFontColor},model:{value:o.shareloadForm.fontcolor,callback:function(r){o.shareloadForm.fontcolor=r},expression:"shareloadForm.fontcolor"}})],1),o._v(" "),e("el-form-item",{attrs:{label:"4.安卓下载地址：",prop:"androidurl"}},[e("div",{staticClass:"form-item"},[e("el-input",{attrs:{placeholder:"请填写android下载地址"}})],1)]),o._v(" "),e("el-form-item",{attrs:{label:"5.ios下载地址：",prop:"iosurl"}},[e("div",{staticClass:"form-item"},[e("el-input",{attrs:{placeholder:"请填写ios下载地址"}})],1)]),o._v(" "),e("el-form-item",{attrs:{label:"6.官网背景图设置：",prop:"bgImageUrl"}},[e("div",{staticClass:"form-item"},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1}},[o.shareloadForm.bgImageUrl?e("img",{staticClass:"avatar",attrs:{src:o.shareloadForm.bgImageUrl}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]),o._v(" "),e("el-form-item",{attrs:{label:"7.左上角logo图片：",prop:"logoImageUrl"}},[e("div",{staticClass:"form-item"},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1}},[o.shareloadForm.logoImageUrl?e("img",{staticClass:"avatar",attrs:{src:o.shareloadForm.logoImageUrl}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)]),o._v(" "),e("el-form-item",{attrs:{label:""}},[e("div",{staticClass:"form-item"},[e("el-button",{attrs:{type:"primary"}},[o._v("保存设置")])],1)])],1)],1)],1)],1)},t=[],l={render:a,staticRenderFns:t};r.a=l},Ngsx:function(o,r,e){"use strict";var a=e("/9V0");r.a={components:{vTitle:a.a},data:function(){return{shareloadForm:{bgcolor:"rgba(19, 206, 102, 0.8)",btncolor:"rgba(68, 85, 37, 0.5)",fontcolor:"rgba(255,255,255,0.8)",androidurl:"",iosurl:"",bgImageUrl:"",logoImageUrl:"http://sns-img.b0.upaiyun.com/dunzd/1705/0816/42/150353890257581494232923.png"},shareloadRules:{bgcolor:[{required:!0}],btncolor:[{required:!0}],fontcolor:[{required:!0}],androidurl:[{required:!0}],iosurl:[{required:!0}],bgImageUrl:[{required:!0}],logoImageUrl:[{required:!0}]}}},methods:{handleBgColor:function(o){this.shareloadForm.bgcolor=o},handleBtnColor:function(o){this.shareloadForm.btncolor=o},handleFontColor:function(o){this.shareloadForm.fontcolor=o}}}},TMZO:function(o,r,e){var a=e("mEI9");"string"==typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);e("rjj0")("2dae145c",a,!0)},e8tO:function(o,r,e){"use strict";r.a={props:["title"]}},gNvF:function(o,r,e){r=o.exports=e("FZ+f")(!0),r.push([o.i,".bg-purple{background-color:#f5f5f5;border:1px dashed #ccc;height:40px;margin-bottom:10px;padding:5px 10px;line-height:40px}.bg-purple img{height:28px;line-height:28px;vertical-align:middle}.bg-purple span{float:right;width:80px;height:28px;line-height:28px;border:1px solid #09f;text-align:center;color:#09f;margin-top:5px}.form-item{display:inline-block;width:400px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:200px;height:300px;line-height:300px;text-align:center}.avatar{width:200px;height:300px;display:block}","",{version:3,sources:["F:/vue_plat_manage/src/components/page/packset/shareload.vue"],names:[],mappings:"AACA,WACE,yBAA0B,AAC1B,uBAAwB,AACxB,YAAa,AACb,mBAAoB,AACpB,iBAAkB,AAClB,gBAAkB,CACnB,AACD,eACE,YAAa,AACb,iBAAkB,AAClB,qBAAuB,CACxB,AACD,gBACE,YAAa,AACb,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,sBAAuB,AACvB,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CACjB,AACD,WACE,qBAAsB,AACtB,WAAa,CACd,AACD,4BACE,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,kCACE,oBAAsB,CACvB,AACD,sBACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,QACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB",file:"shareload.vue",sourcesContent:["\n.bg-purple {\n  background-color: #f5f5f5;\n  border: 1px dashed #ccc;\n  height: 40px;\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  line-height: 40px;\n}\n.bg-purple img {\n  height: 28px;\n  line-height: 28px;\n  vertical-align: middle;\n}\n.bg-purple span {\n  float: right;\n  width: 80px;\n  height: 28px;\n  line-height: 28px;\n  border: 1px solid #09f;\n  text-align: center;\n  color: #09f;\n  margin-top: 5px;\n}\n.form-item {\n  display: inline-block;\n  width: 400px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 200px;\n  height: 300px;\n  line-height: 300px;\n  text-align: center;\n}\n.avatar {\n  width: 200px;\n  height: 300px;\n  display: block;\n}\n"],sourceRoot:""}])},mEI9:function(o,r,e){r=o.exports=e("FZ+f")(!0),r.push([o.i,".title{height:50px}hr{margin-top:6px;border:1px solid #d9d9d9}","",{version:3,sources:["F:/vue_plat_manage/src/components/common/Title.vue"],names:[],mappings:"AACA,OACE,WAAa,CACd,AACD,GACE,eAAgB,AAChB,wBAA0B,CAC3B",file:"Title.vue",sourcesContent:["\n.title {\n  height: 50px;\n}\nhr {\n  margin-top: 6px;\n  border: 1px solid #d9d9d9;\n}\n"],sourceRoot:""}])},"us//":function(o,r,e){"use strict";var a=function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"title"},[e("h3",[o._v(o._s(o.title))]),o._v(" "),e("hr")])},t=[],l={render:a,staticRenderFns:t};r.a=l}});
//# sourceMappingURL=9.0262855b50a024941896.js.map