webpackJsonp([0],{76:function(s,a,t){s.exports=t(85)},79:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){this.$nextTick(function(s){document.querySelector(".source").style.padding="0";for(var a=document.querySelectorAll(".source .block"),t=0,n=0,v=a.length;n<v;n++)t=Math.max(t,a[n].clientHeight);[].slice.call(a,0).forEach(function(s){s.style.height=t+"px"})})}}},81:function(s,a,t){a=s.exports=t(82)(void 0),a.push([s.i,".demo-icon .block{padding:30px 0;text-align:center;border-right:1px solid #eff2f6;border-bottom:1px solid #eff2f6;float:left;width:50%;box-sizing:border-box;&:nth-child(2n){border-right:none}&:last-child,&:nth-last-child(2){border-bottom:none}}.demo-icon .demonstration{display:block;color:#8492a6;font-size:14px;margin-bottom:20px}",""])},85:function(s,a,t){function n(s){t(89)}var v=t(1)(t(79),t(86),n,null,null);s.exports=v.exports},86:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<div class="block">\n  <span class="demonstration">默认</span>\n  <mv-icon name="share"></mv-icon>\n</div>\n<div class="block">\n  <span class="demonstration">linear 旋转</span>\n  <mv-icon name="3d_rotation" spin></mv-icon>\n</div>\n<div class="block">\n  <span class="demonstration">step(8) 旋转</span>\n   <mv-icon name="3d_rotation" pulse></mv-icon>\n</div>\n<div class="block">\n  <span class="demonstration">缩放</span>\n  <mv-icon name="3d_rotation" scale="2"></mv-icon>\n</div>\n<div class="block">\n  <span class="demonstration">垂直翻转</span>\n   <mv-icon name="share" flip="vertical"></mv-icon>\n</div>\n<div class="block">\n  <span class="demonstration">水平翻转</span>\n   <mv-icon name="share" flip="horizontal"></mv-icon>\n</div>\n<div class="block">\n  <span class="demonstration">反转(白色)</span>\n   <mv-icon name="3d_rotation" inverse></mv-icon>\n</div>\n',script:null,style:null}}},[t("div",{staticClass:"source",slot:"source"},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("默认")]),s._v(" "),t("mv-icon",{attrs:{name:"share"}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("linear 旋转")]),s._v(" "),t("mv-icon",{attrs:{name:"3d_rotation",spin:""}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("step(8) 旋转")]),s._v(" "),t("mv-icon",{attrs:{name:"3d_rotation",pulse:""}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("缩放")]),s._v(" "),t("mv-icon",{attrs:{name:"3d_rotation",scale:"2"}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("垂直翻转")]),s._v(" "),t("mv-icon",{attrs:{name:"share",flip:"vertical"}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("水平翻转")]),s._v(" "),t("mv-icon",{attrs:{name:"share",flip:"horizontal"}})],1),s._v(" "),t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[s._v("反转(白色)")]),s._v(" "),t("mv-icon",{attrs:{name:"3d_rotation",inverse:""}})],1)]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("spin")]),s._v(" 为图标添加旋转动画，"),t("code",[s._v("scale")]),s._v(" 进行图标缩放，"),t("code",[s._v("flip")]),s._v(" 进行水平和垂直方向翻转。")]),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("默认"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"share"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("linear 旋转"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3d_rotation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("spin")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("step(8) 旋转"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n   "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3d_rotation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pulse")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("缩放"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3d_rotation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("垂直翻转"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n   "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"share"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("flip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("水平翻转"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n   "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"share"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("flip")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"horizontal"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"block"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"demonstration"')]),s._v(">")]),s._v("反转(白色)"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n   "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3d_rotation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("inverse")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-icon")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"icon-tu-biao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icon-tu-biao","aria-hidden":"true"}},[s._v("¶")]),s._v(" Icon 图标")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("计划只提供组件库使用到的图标集合。如果想使用更多的 Goggle's "),t("a",{attrs:{href:"https://github.com/google/material-design-icons"}},[s._v("material-design-icons")]),s._v(" 中的图标，请在 "),t("a",{attrs:{href:"http://icons.savoygu.com"}},[s._v("http://icons.savoygu.com")]),s._v(" 上进行查找。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"shi-yong-fang-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-fang-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 使用方式")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("使用详情参考："),t("a",{attrs:{href:"https://github.com/savoygu/vue-md-icons"}},[s._v("https://github.com/savoygu/vue-md-icons")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[s._v("¶")]),s._v(" Attributes")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("图标名称")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("scale")]),s._v(" "),t("td",[s._v("缩放比例")]),s._v(" "),t("td",[s._v("number/string")]),s._v(" "),t("td",[s._v("正整数")]),s._v(" "),t("td",[s._v("1")])]),s._v(" "),t("tr",[t("td",[s._v("spin")]),s._v(" "),t("td",[s._v("是否 linear 旋转图标")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("inverse")]),s._v(" "),t("td",[s._v("是否反转图标")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("pulse")]),s._v(" "),t("td",[s._v("是否 step(8) 旋转图标")]),s._v(" "),t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("flip")]),s._v(" "),t("td",[s._v("翻转图标")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("normal, horizontal, vertical")]),s._v(" "),t("td",[s._v("normal")])]),s._v(" "),t("tr",[t("td",[s._v("label")]),s._v(" "),t("td",[s._v("屏幕阅读器")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])])])])}]}},89:function(s,a,t){var n=t(81);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t(90)("4b33dcc8",n,!0)}});