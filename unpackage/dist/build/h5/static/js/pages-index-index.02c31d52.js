(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"147f":function(t,n,e){"use strict";e.r(n);var r=e("3015"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"23e2":function(t,n,e){"use strict";e.r(n);var r=e("8c0a"),i=e("147f");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("6d02");var u,o=e("f0c5"),d=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"1bed7d58",null,!1,r["a"],u);n["default"]=d.exports},3015:function(t,n,e){"use strict";var r=e("4ea4");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("1469")),a=function(t){i.default.post("http://175.178.238.195/scheme/get-all",{}).then((function(n){if(200==n.status)for(var e=n.data.data.Schemes,r=0;r<e.length;r++)t.push({id:e[r].id,desc:e[r].context,date:e[r].date,reward:e[r].reward});else alert("订单数据请求失败")})).catch((function(t){alert("订单数据请求失败"+t)}))},u={data:function(){return{orders:[]}},methods:{getOrders:function(){this.orders=[],a(this.orders),uni.stopPullDownRefresh()},toDetails:function(t){uni.navigateTo({url:"../orderDetails/orderDetails?id=".concat(t.id,"&desc=").concat(this.getOrderDesc(t))})},getOrderID:function(t){return t.id},getOrderDesc:function(t){return"日期:"+t.date+"\n"+t.desc+"\n返佣:"+t.reward+"\n"},goReportOrder:function(t){uni.navigateTo({url:"../orderUpload/orderUpload?id="+t,fail:function(t){alert(t)}})},setCipboard:function(t){uni.setClipboardData({data:t.desc})}},onPullDownRefresh:function(){this.getOrders()},onload:function(){alert("hello,world"),this.getOrders()},onLaunch:function(){alert("hello,world"),this.getOrders()},onInit:function(){this.getOrders()},onNavigationBarButtonTap:function(){this.getOrders()}};n.default=u},5888:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* uni.scss */.o[data-v-1bed7d58]{font:1.5em sans-serif}',""]),t.exports=n},"6d02":function(t,n,e){"use strict";var r=e("add6"),i=e.n(r);i.a},"8c0a":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={tuiButton:e("5858").default,tuiCard:e("0a49").default,uButton:e("4a33").default,uDivider:e("0901").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-scroll-view",{attrs:{"scroll-y":"ture"}},[e("v-uni-view",[e("tui-button",{attrs:{plain:!0},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getOrders()}}},[t._v("刷新方案")]),t._l(t.orders,(function(n){return e("v-uni-view",{key:n,staticClass:"o  u-border"},[e("v-uni-view",[e("tui-card",{staticClass:"card",attrs:{image:{url:"/static/lizhi.jpg",height:80,width:80,circle:!0,full:t.ture,border:!0},title:{text:n.date},tag:{text:n.date},header:{line:!1}},scopedSlots:t._u([{key:"body",fn:function(){return[e("v-uni-view",{staticClass:"tui-default"},[t._v(t._s(n.desc))]),e("v-uni-view",[e("u-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goReportOrder(n.id)}}},[t._v("报单")]),e("u-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setCipboard(n)}}},[t._v("点击复制")])],1)]},proxy:!0},{key:"footer",fn:function(){return[e("v-uni-view",{staticClass:"tui-default"},[t._v("返佣:"+t._s(n.reward))])]},proxy:!0}],null,!0)})],1)],1)}))],2),e("u-divider",{attrs:{text:"没有更多了",dashed:!0}})],1)},a=[]},add6:function(t,n,e){var r=e("5888");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("73595662",r,!0,{sourceMap:!1,shadowMode:!1})}}]);