(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{381:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1g9as31waswj31c00u013e.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Node是一个JavaScript运行环境，很多模块都需要依赖node。npm是随同node安装的包管理工具，node安装完成后，npm也安装完成。")]),a._v(" "),t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h2",{attrs:{id:"通过nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过nvm"}},[a._v("#")]),a._v(" 通过nvm")]),a._v(" "),t("p",[a._v("仓库如下。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://github.com/nvm-sh/nvm\n")])])]),t("p",[a._v("在终端输入以下命令安装"),t("code",[a._v("nvm")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// bash用户\ncurl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash\n\n// zsh用户\ncurl -o- [https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh](https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh) | bash [[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh\n")])])]),t("p",[a._v("安装完成后在终端输入下列命令以安装"),t("code",[a._v("node")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 安装长期支持版本（建议）\nnvm install --lts\n\n// 安装最新版本\nnvm install node\n")])])]),t("h2",{attrs:{id:"通过官方安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过官方安装包"}},[a._v("#")]),a._v(" 通过官方安装包")]),a._v(" "),t("p",[a._v("打开下面官方网站，下载安装包进行安装。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("https://nodejs.org/en/\n")])])]),t("h1",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("h2",{attrs:{id:"更换下载源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换下载源"}},[a._v("#")]),a._v(" 更换下载源")]),a._v(" "),t("h3",{attrs:{id:"直接更换为淘宝源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接更换为淘宝源"}},[a._v("#")]),a._v(" 直接更换为淘宝源")]),a._v(" "),t("p",[a._v("在终端执行以下命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm config set -g registry https://registry.npm.taobao.org\n")])])]),t("h3",{attrs:{id:"用nrm切换下载源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用nrm切换下载源"}},[a._v("#")]),a._v(" 用nrm切换下载源")]),a._v(" "),t("p",[a._v("在终端执行以下命令安装"),t("code",[a._v("nrm")]),a._v("，并查看下载镜像源。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g nrm\nnrm ls\n")])])]),t("p",[a._v("用以下命令切换淘宝源。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nrm use taobao\n")])])]),t("h2",{attrs:{id:"更新主程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新主程序"}},[a._v("#")]),a._v(" 更新主程序")]),a._v(" "),t("h3",{attrs:{id:"对于nvm安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于nvm安装"}},[a._v("#")]),a._v(" 对于nvm安装")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nvm install --lts --latest-npm --reinstall-packages-from=node\n")])])]),t("h3",{attrs:{id:"对于独立程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于独立程序"}},[a._v("#")]),a._v(" 对于独立程序")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g npm\nnpm install -g node\n")])])]),t("h2",{attrs:{id:"更新下载包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新下载包"}},[a._v("#")]),a._v(" 更新下载包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -g npm-check     # 安装npm-check\nnpm-check                    # 查看系统插件是否需要升级\nnpm install -g npm-upgrade   # 安装npm-upgrade\nnpm-upgrade        # 更新package.json\n# 在执行npm-upgrade命令后会要求输入yes或者no，直接输入Yes或Y即可\nnpm update -g      # 更新全局插件\nnpm update --save  # 更新系统插件\n")])])]),t("h2",{attrs:{id:"查看安装过的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看安装过的模块"}},[a._v("#")]),a._v(" 查看安装过的模块")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 查看当前项目的依赖模块\nnpm ls --depth 0\n\n// 查看全局依赖模块命令\nnpm ls -g --depth 0\n")])])]),t("h2",{attrs:{id:"删除项目缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除项目缓存"}},[a._v("#")]),a._v(" 删除项目缓存")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm cache verify\n// 或npm cache clean --force\n")])])]),t("h2",{attrs:{id:"删除项目所有依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除项目所有依赖"}},[a._v("#")]),a._v(" 删除项目所有依赖")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm uninstall *\n")])])]),t("h1",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[a._v("#")]),a._v(" 卸载")]),a._v(" "),t("h2",{attrs:{id:"卸载nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载nvm"}},[a._v("#")]),a._v(" 卸载nvm")]),a._v(" "),t("p",[a._v("在终端输入以下命令，移除nvm。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd ~\nrm -rf .nvm\n")])])]),t("p",[a._v("移除掉"),t("code",[a._v("~/.profile")]),a._v("，"),t("code",[a._v("~/.bash_profile")]),a._v("， "),t("code",[a._v("~/.zshrc")]),a._v("，"),t("code",[a._v("~/.bashrc")]),a._v("文件中关于nvm的配置后输入以下命令，让配置文件生效。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("source ~/.zshrc\nsource ~/.bash_profile\n")])])]),t("h2",{attrs:{id:"卸载node和npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载node和npm"}},[a._v("#")]),a._v(" 卸载node和npm")]),a._v(" "),t("h3",{attrs:{id:"对于nvm安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于nvm安装-2"}},[a._v("#")]),a._v(" 对于nvm安装")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nvm uninstall [版本号]\n\n# 版本通过以下命令查看\nnvm list\n")])])]),t("h3",{attrs:{id:"对于独立程序-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于独立程序-2"}},[a._v("#")]),a._v(" 对于独立程序")]),a._v(" "),t("p",[a._v("在终端执行以下命令以卸载。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo npm uninstall npm -g\nsudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*\nsudo rm -rf /usr/local/include/node /Users/$USER/.npm\nsudo rm /usr/local/bin/node\nsudo rm /usr/local/share/man/man1/node.1\nsudo rm /usr/local/lib/dtrace/node.d\n")])])]),t("p",[a._v("输入以下命令以确认卸载是否已完成。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("node\nnpm\n")])])]),t("h1",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),t("h2",{attrs:{id:"提示package-json不存在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示package-json不存在"}},[a._v("#")]),a._v(" 提示package.json不存在")]),a._v(" "),t("p",[a._v("package.json不存在时，可运行以下命令自动创建。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm init\n")])])]),t("p",[a._v("package.json存在时，运行以下命令以将package.json的模块安装到node-modules文件夹下。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install\n// 或 npm install –save-dev\n")])])]),t("p",[a._v("打开package.json，在最后大括号前添加以下语句，保存并退出。该语句可修复"),t("code",[a._v("warning no description / no repository field")]),a._v("的错误。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"private": true\n')])])]),t("h2",{attrs:{id:"提示找不到-corefoundation-corefoundation-h-或其它库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示找不到-corefoundation-corefoundation-h-或其它库文件"}},[a._v("#")]),a._v(" 提示找不到<CoreFoundation/CoreFoundation.h>或其它库文件")]),a._v(" "),t("p",[a._v("对于Mac，在终端输入以下命令即可。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('csrutil disable\nsudo mount -uw /\nsudo ln -s "$(xcrun --show-sdk-path)/usr/include" /usr/include\nexport SDKROOT="$(xcrun --show-sdk-path)"\necho "export SDKROOT=\\"\\$(xcrun --show-sdk-path)\\"" >> ~/.bash_profile\nsudo DevToolsSecurity -enable\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);