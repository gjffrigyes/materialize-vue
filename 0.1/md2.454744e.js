webpackJsonp([2],{165:function(s,a,t){s.exports=t(182)},169:function(s,a){function t(s,a){var t=s[1]||"",v=s[3];if(!v)return t;if(a&&"function"==typeof btoa){var r=l(v);return[t].concat(v.sources.map(function(s){return"/*# sourceURL="+v.sourceRoot+s+" */"})).concat([r]).join("\n")}return[t].join("\n")}function l(s){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"}s.exports=function(s){var a=[];return a.toString=function(){return this.map(function(a){var l=t(a,s);return a[2]?"@media "+a[2]+"{"+l+"}":l}).join("")},a.i=function(s,t){"string"==typeof s&&(s=[[null,s,""]]);for(var l={},v=0;v<this.length;v++){var r=this[v][0];"number"==typeof r&&(l[r]=!0)}for(v=0;v<s.length;v++){var n=s[v];"number"==typeof n[0]&&l[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),a.push(n))}},a}},170:function(s,a,t){function l(s){for(var a=0;a<s.length;a++){var t=s[a],l=p[t.id];if(l){l.refs++;for(var v=0;v<l.parts.length;v++)l.parts[v](t.parts[v]);for(;v<t.parts.length;v++)l.parts.push(r(t.parts[v]));l.parts.length>t.parts.length&&(l.parts.length=t.parts.length)}else{for(var n=[],v=0;v<t.parts.length;v++)n.push(r(t.parts[v]));p[t.id]={id:t.id,refs:1,parts:n}}}}function v(){var s=document.createElement("style");return s.type="text/css",m.appendChild(s),s}function r(s){var a,t,l=document.querySelector('style[data-vue-ssr-id~="'+s.id+'"]');if(l){if(o)return j;l.parentNode.removeChild(l)}if(g){var r=i++;l=h||(h=v()),a=n.bind(null,l,r,!1),t=n.bind(null,l,r,!0)}else l=v(),a=_.bind(null,l),t=function(){l.parentNode.removeChild(l)};return a(s),function(l){if(l){if(l.css===s.css&&l.media===s.media&&l.sourceMap===s.sourceMap)return;a(s=l)}else t()}}function n(s,a,t,l){var v=t?"":l.css;if(s.styleSheet)s.styleSheet.cssText=d(a,v);else{var r=document.createTextNode(v),n=s.childNodes;n[a]&&s.removeChild(n[a]),n.length?s.insertBefore(r,n[a]):s.appendChild(r)}}function _(s,a){var t=a.css,l=a.media,v=a.sourceMap;if(l&&s.setAttribute("media",l),v&&(t+="\n/*# sourceURL="+v.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(v))))+" */"),s.styleSheet)s.styleSheet.cssText=t;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(t))}}var e="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!e)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(171),p={},m=e&&(document.head||document.getElementsByTagName("head")[0]),h=null,i=0,o=!1,j=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());s.exports=function(s,a,t){o=t;var v=c(s,a);return l(v),function(a){for(var t=[],r=0;r<v.length;r++){var n=v[r],_=p[n.id];_.refs--,t.push(_)}a?(v=c(s,a),l(v)):v=[];for(var r=0;r<t.length;r++){var _=t[r];if(0===_.refs){for(var e=0;e<_.parts.length;e++)_.parts[e]();delete p[_.id]}}}};var d=function(){var s=[];return function(a,t){return s[a]=t,s.filter(Boolean).join("\n")}}()},171:function(s,a){s.exports=function(s,a){for(var t=[],l={},v=0;v<a.length;v++){var r=a[v],n=r[0],_=r[1],e=r[2],c=r[3],p={id:s+":"+v,css:_,media:e,sourceMap:c};l[n]?l[n].parts.push(p):t.push(l[n]={id:n,parts:[p]})}return t}},178:function(s,a,t){a=s.exports=t(169)(void 0),a.push([s.i,".grid-example{margin:7px 0;line-height:50px;font-size:14px;color:#fff;text-align:center;background-color:tomato;border:1px solid #eee}",""])},182:function(s,a,t){function l(s){t(195)}var v=t(1)(null,t(191),l,null,null);s.exports=v.exports},191:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[s._m(0),s._v(" "),s._m(1),s._v(" "),t("p",[s._v("我们的标准网格有12列。 无论浏览器的大小，每一列的宽度总是相等的。")]),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-row>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n    <mv-col :s="1" class-name="grid-example">s1</mv-col>\n</mv-row>\n\n\n',script:null,style:"\n.grid-example {\n    margin: 7px 0;\n    line-height: 50px;\n    font-size: 14px;\n    color: white;\n    text-align: center;\n    background-color: tomato;\n    border: 1px solid #eee;\n}\n"}}},[t("div",{staticClass:"source",slot:"source"},[t("mv-row",[t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")]),s._v(" "),t("mv-col",{attrs:{s:1,"class-name":"grid-example"}},[s._v("s1")])],1)],1),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".grid-example")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("7px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("line-height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("50px")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("14px")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": white;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": tomato;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid "),t("span",{attrs:{class:"hljs-number"}},[s._v("#eee")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-row>\n    <mv-col class-name="grid-example">s12</mv-col>\n    <mv-col class-name="grid-example" :s="6" :offset="6">s6 offset-s6</mv-col>\n    <mv-col class-name="grid-example" :s="{s:6, offset: 6}">s6 offset-s6</mv-col>\n</mv-row>\n',script:null,style:null}}},[t("div",{staticClass:"source",slot:"source"},[t("mv-row",[t("mv-col",{attrs:{"class-name":"grid-example"}},[s._v("s12")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:6,offset:6}},[s._v("s6 offset-s6")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:{s:6,offset:6}}},[s._v("s6 offset-s6")])],1)],1),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s12"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":offset")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("s6 offset-s6"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s:6, offset: 6}"')]),s._v(">")]),s._v("s6 offset-s6"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-row>\n    <mv-col class-name="grid-example">s12</mv-col>\n    <mv-col class-name="grid-example" :s="7" :push="5">s7 push-s5</mv-col>\n    <mv-col class-name="grid-example" :s="5" :pull="7">s5 pull-s7</mv-col>\n</mv-row>\n',script:null,style:null}}},[t("div",{staticClass:"source",slot:"source"},[t("mv-row",[t("mv-col",{attrs:{"class-name":"grid-example"}},[s._v("s12")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:7,push:5}},[s._v("s7 push-s5")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:5,pull:7}},[s._v("s5 pull-s7")])],1)],1),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(">")]),s._v("s12"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"7"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":push")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(">")]),s._v("s7 push-s5"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":pull")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"7"')]),s._v(">")]),s._v("s5 pull-s7"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(6),s._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<mv-row>\n    <mv-col class-name="grid-example" class="blue lighten-1">s12</mv-col>\n    <mv-col class-name="grid-example" class="teal lighten-1" :s="12" :m="4" :l="2">s12 m4 l2</mv-col>\n    <mv-col class-name="grid-example" class="teal lighten-1" :s="12" :m="4" :l="8">s12 m4 l8</mv-col>\n    <mv-col class-name="grid-example" class="teal lighten-1" :s="12" :m="4" :l="2">s12 m4 l2</mv-col>\n</mv-row>\n\n<mv-row>\n    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l2</mv-col>\n    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l8</mv-col>\n    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l2</mv-col>\n    <mv-col class-name="grid-example" class="purple" :s="12" :m="6" :l="3">s12 m4 l2</mv-col>\n</mv-row>\n\n<mv-row>\n  <mv-col class-name="grid-example" :s="{s: 3, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 1, offset: 1}" :xl="2">s12 m6 l3</mv-col>\n  <mv-col class-name="grid-example" :s="{s: 1, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 3, offset: 1}" :xl="4">s12 m6 l3</mv-col>\n  <mv-col class-name="grid-example" :s="{s: 1, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 3, offset: 1}" :xl="4">s12 m6 l3</mv-col>\n  <mv-col class-name="grid-example" :s="{s: 3, offset: 1, pull: 1}" :m="{s: 2, push: 1}" :l="{s: 1, offset: 1}" :xl="2">s12 m6 l3</mv-col>\n</mv-row>\n',script:null,style:null}}},[t("div",{staticClass:"source",slot:"source"},[t("mv-row",[t("mv-col",{staticClass:"blue lighten-1",attrs:{"class-name":"grid-example"}},[s._v("s12")]),s._v(" "),t("mv-col",{staticClass:"teal lighten-1",attrs:{"class-name":"grid-example",s:12,m:4,l:2}},[s._v("s12 m4 l2")]),s._v(" "),t("mv-col",{staticClass:"teal lighten-1",attrs:{"class-name":"grid-example",s:12,m:4,l:8}},[s._v("s12 m4 l8")]),s._v(" "),t("mv-col",{staticClass:"teal lighten-1",attrs:{"class-name":"grid-example",s:12,m:4,l:2}},[s._v("s12 m4 l2")])],1),s._v(" "),t("mv-row",[t("mv-col",{staticClass:"purple",attrs:{"class-name":"grid-example",s:12,m:6,l:3}},[s._v("s12 m4 l2")]),s._v(" "),t("mv-col",{staticClass:"purple",attrs:{"class-name":"grid-example",s:12,m:6,l:3}},[s._v("s12 m4 l8")]),s._v(" "),t("mv-col",{staticClass:"purple",attrs:{"class-name":"grid-example",s:12,m:6,l:3}},[s._v("s12 m4 l2")]),s._v(" "),t("mv-col",{staticClass:"purple",attrs:{"class-name":"grid-example",s:12,m:6,l:3}},[s._v("s12 m4 l2")])],1),s._v(" "),t("mv-row",[t("mv-col",{attrs:{"class-name":"grid-example",s:{s:3,offset:1,pull:1},m:{s:2,push:1},l:{s:1,offset:1},xl:2}},[s._v("s12 m6 l3")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:{s:1,offset:1,pull:1},m:{s:2,push:1},l:{s:3,offset:1},xl:4}},[s._v("s12 m6 l3")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:{s:1,offset:1,pull:1},m:{s:2,push:1},l:{s:3,offset:1},xl:4}},[s._v("s12 m6 l3")]),s._v(" "),t("mv-col",{attrs:{"class-name":"grid-example",s:{s:3,offset:1,pull:1},m:{s:2,push:1},l:{s:1,offset:1},xl:2}},[s._v("s12 m6 l3")])],1)],1),s._v(" "),t("div",{staticClass:"highlight",slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"blue lighten-1"')]),s._v(">")]),s._v("s12"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"teal lighten-1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("s12 m4 l2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"teal lighten-1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v(">")]),s._v("s12 m4 l8"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"teal lighten-1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("s12 m4 l2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"purple"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("s12 m4 l2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"purple"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("s12 m4 l8"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"purple"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("s12 m4 l2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"purple"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),s._v("s12 m4 l2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 3, offset: 1, pull: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 2, push: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 1, offset: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":xl")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("s12 m6 l3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 1, offset: 1, pull: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 2, push: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 3, offset: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":xl")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(">")]),s._v("s12 m6 l3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 1, offset: 1, pull: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 2, push: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 3, offset: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":xl")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"4"')]),s._v(">")]),s._v("s12 m6 l3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class-name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"grid-example"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":s")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 3, offset: 1, pull: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":m")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 2, push: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":l")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"{s: 1, offset: 1}"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":xl")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),s._v("s12 m6 l3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-col")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("mv-row")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"grid-zha-ge-xi-tong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grid-zha-ge-xi-tong","aria-hidden":"true"}},[s._v("¶")]),s._v(" Grid 栅格系统")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"12-lie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#12-lie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 12列")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"pian-yi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pian-yi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 偏移")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("要偏移，只需将 "),t("code",{pre:!0},[s._v("offset-s2")]),s._v(" 添加到 "),t("code",{pre:!0},[s._v("s")]),s._v(" 表示屏幕类前缀（s = small，m = medium，l = large）的类中，之后的数字是要偏移的列数。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"push-and-pull"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-and-pull","aria-hidden":"true"}},[s._v("¶")]),s._v(" Push and Pull")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("您可以通过 push 和 pull 轻松更改列的顺序。只需将 "),t("code",{pre:!0},[s._v("push-s2")]),s._v(" 或 "),t("code",{pre:!0},[s._v("pull-s2")]),s._v(" 添加到表示屏幕类前缀（s = small，m = medium，l = large）的类中，之后的数字是要 push 或 pull 的列数。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"xiang-ying-shi-bu-ju"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xiang-ying-shi-bu-ju","aria-hidden":"true"}},[s._v("¶")]),s._v(" 响应式布局")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"row-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#row-attributes","aria-hidden":"true"}},[s._v("¶")]),s._v(" Row Attributes")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("tag")]),s._v(" "),t("td",[s._v("自定义元素标签")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("*")]),s._v(" "),t("td",[s._v("div")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"col-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#col-attributes","aria-hidden":"true"}},[s._v("¶")]),s._v(" Col Attributes")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("可选值")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("tag")]),s._v(" "),t("td",[s._v("自定义元素标签")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[s._v("*")]),s._v(" "),t("td",[s._v("div")])]),s._v(" "),t("tr",[t("td",[s._v("offset")]),s._v(" "),t("td",[s._v("栅格左侧的间隔格数")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("pull")]),s._v(" "),t("td",[s._v("栅格向左移动格数")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("push")]),s._v(" "),t("td",[s._v("栅格向右移动格数")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("s")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("<600px")]),s._v(" 响应式栅格数或者栅格属性对象")]),s._v(" "),t("td",[s._v("number/string(例如：{s: 4, offset: 4})")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("12")])]),s._v(" "),t("tr",[t("td",[s._v("m")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("≥600px")]),s._v(" 响应式栅格数或者栅格属性对象")]),s._v(" "),t("td",[s._v("number/string(例如：{s: 4, offset: 4})")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("l")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("≥992px")]),s._v(" 响应式栅格数或者栅格属性对象")]),s._v(" "),t("td",[s._v("number/string(例如：{s: 4, offset: 4})")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])]),s._v(" "),t("tr",[t("td",[s._v("xl")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("≥1200px")]),s._v(" 响应式栅格数或者栅格属性对象")]),s._v(" "),t("td",[s._v("number/string(例如：{s: 4, offset: 4})")]),s._v(" "),t("td",[s._v("—")]),s._v(" "),t("td",[s._v("—")])])])])}]}},195:function(s,a,t){var l=t(178);"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);t(170)("95f68ae8",l,!0)}});