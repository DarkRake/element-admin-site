(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(t,e,r){"use strict";r.r(e);var a=r(20),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/api/system-management/dictionary.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://gitlab.taiji.com.cn/vue/element-admin/tree/master/src/mock/system-management/dictionary.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mock"),r("OutboundLink")],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"业务字典与字典类别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#业务字典与字典类别","aria-hidden":"true"}},[this._v("#")]),this._v(" 业务字典与字典类别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note","aria-hidden":"true"}},[this._v("#")]),this._v(" NOTE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("pre",[e("code",[this._v("该模块查询类接口，category为条件必传值（1:业务字典分类，2:单级业务字典，3:多级业务字典）\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"querypagedictionaries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#querypagedictionaries","aria-hidden":"true"}},[this._v("#")]),this._v(" queryPageDictionaries")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("pre",[r("code",[t._v("根据条件，分页查询业务字典或业务字典分类\nPOST /system/dictionary/query-page\n")])]),t._v(" "),r("h3",{attrs:{id:"request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),r("pre",[r("code",[t._v("{\n    page: Number,\n    pageSize: Number,\n    filters: [{field: 'category', value: [0|1]},{field: String, value: String},...],\n    sorts: [{field: String, value: ['desc'|'esc']},...]\n}\n")])]),t._v(" "),r("h3",{attrs:{id:"response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),r("pre",[r("code",[t._v("{\n    code: Number,\n    message: String,\n    data: {\n        total: Number,\n        page: Number,\n        pageSize: Number,\n        list: [Dictionary]\n    }\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"queryalldictionaries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queryalldictionaries","aria-hidden":"true"}},[this._v("#")]),this._v(" queryAllDictionaries")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("pre",[r("code",[t._v("根据条件，查询业务字典或业务字典分类（不分页）\nPOST /system/dictionary/query-all\n")])]),t._v(" "),r("h3",{attrs:{id:"request-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),r("pre",[r("code",[t._v("{\n    filters: [{field: 'category', value: [0|1]},{field: String, value: String},...],\n    sorts: [{field: String, value: ['desc'|'esc']},...]\n}\n")])]),t._v(" "),r("h3",{attrs:{id:"response-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),r("pre",[r("code",[t._v("{\n    code: Number,\n    message: String,\n    data: [Dictionary] //返回业务字典或业务字典分类信息数组\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"adddictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adddictionary","aria-hidden":"true"}},[this._v("#")]),this._v(" addDictionary")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("pre",[r("code",[t._v("增加新的业务字典分类或字典，并完整返回该业务字典分类或字典信息\nPOST /system/dictionary/add\n")])]),t._v(" "),r("h3",{attrs:{id:"request-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),r("pre",[r("code",[t._v("{\n    parentId: [String|null],\n    state: 1,\n    category: [0|1],\n    type: [String|null],\n    name: String,\n    code: String,\n    index: String,\n    remark: String\n}\n")])]),t._v(" "),r("h3",{attrs:{id:"response-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),r("pre",[r("code",[t._v("{\n    code: Number,\n    message: String,\n    data: Dictionary // 返回新增的业务字典分类或字典信息\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"editdictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editdictionary","aria-hidden":"true"}},[this._v("#")]),this._v(" editDictionary")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("pre",[r("code",[t._v("编辑业务字典分类或字典信息，后端告知前端结果即可\nPOST /system/dictionary/edit\n")])]),t._v(" "),r("h3",{attrs:{id:"request-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),r("pre",[r("code",[t._v("{\n    id: String,\n    parentId: [String|null],\n    state: [0|1],\n    type: String,\n    name: String,\n    code: String,\n    index: String,\n    remark: String\n}\n")])]),t._v(" "),r("h3",{attrs:{id:"response-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),r("pre",[r("code",[t._v("{\n    code: Number,\n    message: String\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deldictionary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deldictionary","aria-hidden":"true"}},[this._v("#")]),this._v(" delDictionary")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("pre",[r("code",[t._v("删除业务字典分类或字典，后端告知前端结果即可\nGET /system/dictionary/del\n")])]),t._v(" "),r("h3",{attrs:{id:"request-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),r("pre",[r("code",[t._v("{\n    id: String\n}\n")])]),t._v(" "),r("h3",{attrs:{id:"response-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-5","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),r("pre",[r("code",[t._v("{\n    code: Number,\n    message: String\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source","aria-hidden":"true"}},[this._v("#")]),this._v(" Source")])}],!1,null,null,null);s.options.__file="dictionary.md";e.default=s.exports}}]);