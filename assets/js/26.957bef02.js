(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gegaff5icfj30sg0g040h.jpg",alt:""}})]),t._v(" "),s("p",[t._v("Matlab相关使用技巧。")]),t._v(" "),s("h1",{attrs:{id:"并行计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并行计算"}},[t._v("#")]),t._v(" 并行计算")]),t._v(" "),s("p",[t._v("打开并行计算后，计算机将在CPU的每个核心独立执行任务，从而提高执行效率。")]),t._v(" "),s("h2",{attrs:{id:"打开与关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开与关闭"}},[t._v("#")]),t._v(" 打开与关闭")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("partool('local',4) // 打开\ndelete(gcp) // 关闭\n")])])]),s("h2",{attrs:{id:"编写代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写代码"}},[t._v("#")]),t._v(" 编写代码")]),t._v(" "),s("p",[t._v("由于每个任务是独立执行的，因此每一个过程不能存在依赖关系。打开并行计算后，需要用parfor代替for。以以下代码为例进行说明。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A = [];\nparfor i = 1:100\n\tfor j = 1:100\n\t\tA(i,j) = 1; // 错误，因为A(i,j)需要依赖i\n\tend\nend\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);