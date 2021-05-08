(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{374:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gegariofn3j31c00u04qp.jpg",alt:""}})]),t._v(" "),s("p",[t._v("分区表、引导方式和不同方式引导系统。")]),t._v(" "),s("h1",{attrs:{id:"相关知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关知识"}},[t._v("#")]),t._v(" 相关知识")]),t._v(" "),s("h2",{attrs:{id:"分区表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分区表"}},[t._v("#")]),t._v(" 分区表")]),t._v(" "),s("p",[t._v("分区表用于存储分区信息，主要有MBR和GUID两种。")]),t._v(" "),s("h3",{attrs:{id:"mbr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mbr"}},[t._v("#")]),t._v(" MBR")]),t._v(" "),s("p",[t._v("MBR分区表会在磁盘的第一个扇区写入引导代码，这些代码用来引导系统的启动，该扇区被称为主引导扇区。主引导扇区共512字节，内容如下。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("项目")]),t._v(" "),s("th",[t._v("占用空间")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("主引导记录MBR")]),t._v(" "),s("td",[t._v("446字节")])]),t._v(" "),s("tr",[s("td",[t._v("磁盘分区表项DPT")]),t._v(" "),s("td",[t._v("16×4=64字节")])]),t._v(" "),s("tr",[s("td",[t._v("结束标志AA55（小端规则为55AA），被称为幻数")]),t._v(" "),s("td",[t._v("2字节")])])])]),t._v(" "),s("p",[t._v("由于DPT只有64字节，MBR分区表最多只能有四个分区，即三个主分区加一个扩展分区，或四个主分区。MBR的代码决定其引导类型，包括grub、Windows NT 5.0等，可视作是规定启动引导器的代码。")]),t._v(" "),s("p",[t._v("每个分区的分区头部有本分区的引导信息，对于主分区而言称为PBR，对于扩展分区而言称为EBR。在扩展分区内可以进一步划分出无数个逻辑分区，主要是通过在每个逻辑分区的起始扇区建立一个虚拟MBR。注意，扩展分区/逻辑分区不能被设为激活分区。")]),t._v(" "),s("h3",{attrs:{id:"guid-gpt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guid-gpt"}},[t._v("#")]),t._v(" GUID/GPT")]),t._v(" "),s("p",[t._v("为了兼容性，GUID分区表即GPT磁盘的第一个扇区仍然为MBR，被称为保护MBR，然后是GPT头。与MBR不同的是，GPT磁盘的保护MBR只有一个标识为0xEE的分区，以标注这块硬盘使用GPT分区表。如果在这段代码中储存GPT分区表的一部分分区，则可以使不支持从GPT启动的操作系统从这个MBR启动，启动后只能操作MBR分区表中的分区。")]),t._v(" "),s("p",[t._v("GPT需要有一个专门的EFI分区存放引导文件，这个EFI分区一般是FAT32或FAT16格式。EFI分区可以有多个，也可以只有一个，系统引导文件可以放到同一个地方，也可以分散放置。引导启动时，不同的系统文件会被识别为不同的引导项。")]),t._v(" "),s("p",[t._v("引导文件写有启动磁盘信息，主要是识别系统种类以及磁盘的唯一标识GUID。每个分区也有分区表，其中前16字节是分区类型GUID，接下来的16字节是分区唯一标识GUID。GPT分区表主要通过GUID识别不同分区。")]),t._v(" "),s("h2",{attrs:{id:"引导方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引导方式"}},[t._v("#")]),t._v(" 引导方式")]),t._v(" "),s("p",[t._v("一般而言BIOS使用MBR分区表，而UEFI使用GPT分区表。然而由于GPT分区表也有MBR，因此理论上BIOS+GPT是可行的。同理UEFI+MBR也是可行的。")]),t._v(" "),s("h3",{attrs:{id:"bios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bios"}},[t._v("#")]),t._v(" BIOS")]),t._v(" "),s("p",[t._v("开机时，BIOS开电自检，然后读取MBR，根据MBR的引导代码启动系统。一般而言，BIOS会寻找可引导的活动分区，然后装入活动分区的PBR到内存，并把启动权移交系统。")]),t._v(" "),s("h3",{attrs:{id:"uefi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uefi"}},[t._v("#")]),t._v(" UEFI")]),t._v(" "),s("p",[t._v("开机时，电脑读取UEFI，UEFI寻找EFI分区并根据EFI分区的引导文件启动系统。")]),t._v(" "),s("h3",{attrs:{id:"查看本机引导方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看本机引导方式"}},[t._v("#")]),t._v(" 查看本机引导方式")]),t._v(" "),s("p",[t._v("在Windows下Win+R，输入"),s("code",[t._v("msinfo32")]),t._v("并回车，在打开的窗口中查看"),s("code",[t._v("系统摘要")]),t._v("的内容，若显示为传统即为BIOS模式，显示为UEFI即为UEFI模式。")]),t._v(" "),s("h2",{attrs:{id:"esp-msr分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esp-msr分区"}},[t._v("#")]),t._v(" ESP/MSR分区")]),t._v(" "),s("p",[t._v("这两个分区均用于GPT分区表。")]),t._v(" "),s("h3",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("p",[t._v("ESP分区即EFI分区。UEFI引导的电脑启动时，将从EFI分区读取启动配置。EFI分区一般为FAT格式，大小200-300M，可位于硬盘的任意位置，且一块硬盘可以存在多个EFI分区，只需把引导文件放置在EFI分区的EFI/BOOT/BOOTX64.efi即可。")]),t._v(" "),s("p",[t._v("MSR分区为Windows系统创建的分区，用于保存某些数据，用途不大，可删除或并入EFI分区，在创建EFI分区时也不必创建MSR分区。")]),t._v(" "),s("h3",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("p",[t._v("EFI分区的EFI/BOOT下，放置CLOVER文件夹引导Clover，放置Microsoft文件夹引导Windows。两者可同时放置。")]),t._v(" "),s("p",[t._v("对其它系统添加引导时，BOOT需用Clover的BOOT文件夹，把另一个文件夹放置于/EFI下，与CLOVER同级即可。Clover会自动识别出系统类型。")]),t._v(" "),s("h3",{attrs:{id:"重建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重建"}},[t._v("#")]),t._v(" 重建")]),t._v(" "),s("p",[t._v("正常使用情况下，可对EFI分区中的EFI文件夹进行备份。")]),t._v(" "),s("p",[t._v("若EFI分区损坏，可在DiskGenius下将EFI分区删除，右键所得空闲空间，点击"),s("code",[t._v("建立ESP/MBR分区")]),t._v("，对话框里只选择"),s("code",[t._v("建立ESP分区")]),t._v("，固态硬盘需勾选"),s("code",[t._v("对齐分区")]),t._v("。若弹出是否删除原有引导记录的提示，则选择"),s("code",[t._v("删除")]),t._v("，然后将备份好的EFI文件夹复制进去。")]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("EasyUEFI")]),t._v("添加启动项，类型为"),s("code",[t._v("Linux")]),t._v("，路径为"),s("code",[t._v("/EFI/BOOT/BOOTX64.efi")]),t._v("。重启电脑并进入BIOS即可看到新建立的引导启动项，从此项启动即可。")]),t._v(" "),s("h1",{attrs:{id:"移动硬盘多系统部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动硬盘多系统部署"}},[t._v("#")]),t._v(" 移动硬盘多系统部署")]),t._v(" "),s("h2",{attrs:{id:"空间分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间分配"}},[t._v("#")]),t._v(" 空间分配")]),t._v(" "),s("p",[t._v("用DiskGenius对全盘进行格式化，并转换为GUID分区表。新建一个200-300MB的EFI分区，后分别建立Windows分区（NTFS格式）、MacOS分区（APFS格式）、Ubuntu分区（NTFS分区），其余留空。")]),t._v(" "),s("h2",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("h4",{attrs:{id:"通过ghost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过ghost"}},[t._v("#")]),t._v(" 通过Ghost")]),t._v(" "),s("p",[t._v("GPT与MBR分区表均可使用ghost，但Ghost备份的系统只适用当前备份系统的机型，不同的主板不通用，且装载GHO的多个主机的SID一致，因此不适用于系统加域的网络环境。")]),t._v(" "),s("p",[t._v("下载好Windows 10的gho版，在Windows或WinPE下用Ghost将gho镜像恢复到所要安装的分区。安装完成后，由于EFI分区内没有引导，无法启动Windows，故需从任一Windows系统下复制一份EFI到分区中，然后在PE环境打开BOOTICE进行引导修改。")]),t._v(" "),s("p",[t._v("选择BCD编辑-其它BCD文件，路径为EFI\\Microsoft\\BOOT\\BCD，点击"),s("code",[t._v("智能编辑模式")]),t._v("，启动磁盘/分区改为装好Windows的移动硬盘/分区，两个保存按钮均点击后退出即可。")]),t._v(" "),s("h4",{attrs:{id:"通过winntsetup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过winntsetup"}},[t._v("#")]),t._v(" 通过WinNTSetup")]),t._v(" "),s("p",[t._v("下载Windows 10的ISO版本，在Windows或WinPE下打开"),s("code",[t._v("WinNTSetup安装器")]),t._v("。镜像选择ISO里的"),s("code",[t._v("\\Sources\\install.wim")]),t._v("，引导驱动器选择EFI分区，安装驱动器选择安装Windows 10的分区。保证引导驱动器右侧的三个选项均无红灯后点击安装，完成后重启电脑即可。")]),t._v(" "),s("h3",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h4",{attrs:{id:"弹出「计算机意外地重新启动或遇到错误」"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹出「计算机意外地重新启动或遇到错误」"}},[t._v("#")]),t._v(" 弹出「计算机意外地重新启动或遇到错误」")]),t._v(" "),s("p",[t._v("按下Shift+F10打开命令提示符，键入regedit并回车，启动注册表编辑器。转到HKEY_LOCAL_MACHINE\\SYSTEM\\Setup\\Status\\ChildCompletion，双击右侧窗格中的setup.exe，将数值数据从1修改为3，单击确定以应用更改。退出注册表编辑器并重新启动计算机即可。")]),t._v(" "),s("h4",{attrs:{id:"重启后出现defaultuser0用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启后出现defaultuser0用户"}},[t._v("#")]),t._v(" 重启后出现defaultuser0用户")]),t._v(" "),s("p",[t._v("在PE下打开NTPWEdit，加载移动硬盘分区的SAM，路径为Windows\\System32\\config，把所有用户密码都删掉，保存后重新进入系统即可。")]),t._v(" "),s("h2",{attrs:{id:"mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[t._v("#")]),t._v(" Mac")]),t._v(" "),s("p",[t._v("参见黑苹果安装教程，安装磁盘改为移动硬盘即可。注意不要安装不必要的驱动，config.plist中不要放显卡和声卡注入项。")]),t._v(" "),s("p",[t._v("将Clover文件夹与Microsoft文件夹放于同级，并将BOOT/BOOTX64.efi替换成Clover的BOOTX64.efi即可引导。")]),t._v(" "),s("h2",{attrs:{id:"ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),s("p",[t._v("参见Linux安装教程，安装磁盘改为移动硬盘。同理，让EFI分区的EFI/BOOT下有ubuntu文件夹即可引导。")]),t._v(" "),s("h2",{attrs:{id:"chrome-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-os"}},[t._v("#")]),t._v(" Chrome OS")]),t._v(" "),s("p",[t._v("参见Chrome OS安装教程。注意，所有操作均从未分配空间中进行，因此最后移动硬盘将有两个EFI分区，一个用于引导Windows、Mac与Ubuntu，另一个用于引导Chrome OS。")]),t._v(" "),s("h2",{attrs:{id:"引导菜单配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引导菜单配置"}},[t._v("#")]),t._v(" 引导菜单配置")]),t._v(" "),s("p",[t._v("经实验，移动硬盘的Clover启动项较易丢失，而Ubuntu启动项能够长期存在，因此在Ubuntu引导菜单添加Clover启动项，可确保黑苹果的成功引导。")]),t._v(" "),s("p",[t._v("进入Ubuntu系统，在终端输入以下命令查询磁盘，记下EFI分区的"),s("code",[t._v("UUID")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo blkid\n")])])]),s("p",[t._v("编辑系统盘的/etc/grub.d/40_custom，在文件末尾添加以下内容并保存。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("menuentry 'Mac OS X' --class os {\n\tinsmod part_gpt\n\tinsmod fat\n\tset root='hd0,gpt1' // 此处修改为EFI分区位置\nsearch --no-floppy --fs-uuid --set=root C14D-581B // 此处修改为EFI分区的UUID后八位\n\tchainloader /efi/Boot/bootx64.efi\n}\n")])])]),s("p",[t._v("在终端输入以下命令更新grub引导器即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo update-grub\n")])])]),s("h2",{attrs:{id:"手动启动引导项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动启动引导项"}},[t._v("#")]),t._v(" 手动启动引导项")]),t._v(" "),s("p",[t._v("若引导项丢失，可通过EFI Shell启动对应的系统引导文件。进入EFI Shell后按顺序输入以下命令即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("map -r -b\n// 进入所需要的驱动器，此处为fs7\nfs7:\nls\ncd efi\\boot\\\nbootx64.efi\n")])])]),s("h1",{attrs:{id:"引导器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引导器"}},[t._v("#")]),t._v(" 引导器")]),t._v(" "),s("h2",{attrs:{id:"grub4dos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grub4dos"}},[t._v("#")]),t._v(" grub4dos")]),t._v(" "),s("p",[t._v("grub4dos可引导Windows的多种系统。")]),t._v(" "),s("h3",{attrs:{id:"安装-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("下载grub4dos包，并将grldr、grldr.mbr和menu.lst复制到C盘根目录，其中grldr和grldr.mbr为引导文件，menu.lst为菜单配置文件。")]),t._v(" "),s("p",[t._v("进入WinPE环境，打开Bootice并设置当前系统所在硬盘的MBR为grub4dos 0.46a，重启即可进入grub4dos界面。")]),t._v(" "),s("p",[t._v("也可直接在C盘修改boot.ini，添加以下引导项即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('C:\\grldr.mbr="grub4dos"\n')])])]),s("h3",{attrs:{id:"修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[t._v("#")]),t._v(" 修改")]),t._v(" "),s("p",[t._v("修改menu.lst即可增加或删除引导项。")]),t._v(" "),s("h4",{attrs:{id:"winnt内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#winnt内核"}},[t._v("#")]),t._v(" WinNT内核")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// (hd0,0)为要引导的系统分区\ntitle WinNT\nfallback +1\nrootnoverity (hd0,0)\nchainloader /ntldr\nboot\nsavedefault --wait=2\n")])])]),s("h4",{attrs:{id:"dos-win9-x内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dos-win9-x内核"}},[t._v("#")]),t._v(" DOS/Win9.x内核")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// (hd0,1)为需要启动的分区\n// 除要启动的分区外，其余分区需要隐藏\ntitle Win9x/DOS\nfallback +1\nunhide (hd0,1)\nhide (hd0,2)\n...\nhide (hd0,n)\nrootnoverity (hd0,1)\nchainloader (hd0,1)/io.sys\nboot\nsavedefault --wait=2\n")])])]),s("h4",{attrs:{id:"镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[t._v("#")]),t._v(" 镜像")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// ISO后缀可以改为IMG\ntitle ISO\nmap (hd0,0)/name.iso (fd0)\nmap --hook\nchainloader (fd0)+1\nrootnoverity (fd0)\n")])])]),s("h2",{attrs:{id:"bootloaderchooser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootloaderchooser"}},[t._v("#")]),t._v(" BootloaderChooser")]),t._v(" "),s("p",[t._v("适用于UEFI引导，可在多引导的机器上选择需要引导的efi。")]),t._v(" "),s("p",[t._v("下载以下链接中的BootX64.efi，复制到EFI分区中的EFI/BOOT以替换即可。该引导器可以搜索所有的efi，为此可以引导不同版本的Clover或OpenCore，只需对CLOVERX64.efi或OpenCore.efi重命名即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/jief666/BootloaderChooser/tree/main/efi_files\n")])])]),s("h1",{attrs:{id:"bios-gpt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bios-gpt"}},[t._v("#")]),t._v(" BIOS+GPT")]),t._v(" "),s("p",[t._v("可通过模拟UEFI的方式，实现BIOS下的GPT硬盘引导。")]),t._v(" "),s("h2",{attrs:{id:"clover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clover"}},[t._v("#")]),t._v(" Clover")]),t._v(" "),s("p",[t._v("通常使用Clover在BIOS下模拟UEFI。")]),t._v(" "),s("p",[t._v("在Mac下打开Clover的pkg安装包，安装位置选择要安装的硬盘或U盘。点击自定，设置安装到boot0ss和Blockio、安装到ESP分区，并选择CloverEFI下的SATA，进行安装。从U盘启动，理论上启动时将出现"),s("code",[t._v("6_")]),t._v("并成功进入。若卡住，则选择CloverEFI下的BiosBlockIO进行安装，再次从U盘启动，理论上出现"),s("code",[t._v("7_")]),t._v("并成功进入。")]),t._v(" "),s("h2",{attrs:{id:"opencore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opencore"}},[t._v("#")]),t._v(" OpenCore")]),t._v(" "),s("p",[t._v("注意该方法不能用在MBR，也不能在制作完成后更换为Clover引导文件。")]),t._v(" "),s("p",[t._v("下载OpenCore后打开终端，执行以下命令，选择对应磁盘即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 64位的命令\nsudo [OpenCore路径]/Utilities/legacyBoot/BootInstall_X64.tool\n\n# 32位的命令\nsudo [OpenCore路径]/Utilities/legacyBoot/BootInstall_IA32.tool\n")])])]),s("h2",{attrs:{id:"模拟器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模拟器"}},[t._v("#")]),t._v(" 模拟器")]),t._v(" "),s("p",[t._v("通过以下链接下载模拟UEFI。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://pan.baidu.com/s/1bnCNCTp#list/path=%2F\n")])])]),s("p",[t._v("进入WinPE环境。将磁盘转换为GPT分区，开头划分出一个200-300MB的EFI分区，可以不建MSR分区。将EFI分区格式化为FAT32，复制压缩包内"),s("code",[t._v("EFI分区根目录")]),t._v("的文件到新建的EFI分区的根目录下。")]),t._v(" "),s("p",[t._v("运行"),s("code",[t._v("bootice")]),t._v("文件夹里的"),s("code",[t._v("BOOTICE")]),t._v("程序，目标磁盘选择GPT磁盘，点击主引导记录，选择"),s("code",[t._v("恢复MBR")]),t._v("，恢复文件选择文件夹内的"),s("code",[t._v("boot0ss")]),t._v("。恢复完成后回到主界面，点击"),s("code",[t._v("分区引导记录")]),t._v("，目标分区选择EFI分区，点击"),s("code",[t._v("恢复PBR")]),t._v("，恢复文件选择文件夹内的"),s("code",[t._v("boot1f32alt")]),t._v("。完成后重启即可进入模拟UEFI环境。")]),t._v(" "),s("p",[t._v("若需向GPT磁盘中在安装Windows，则可以先行分出另一个EFI分区，并对此分区添加盘符，利用WinNTSetup安装系统时将此EFI分区设为引导驱动器，安装完成后再次进行上述MBR和PBR的恢复操作。确认系统能够正常进入后，可保留当前EFI结构或者将EFI分区中的Microsoft文件夹复制到模拟UEFI所安装的EFI分区。注意，系统安装完成后不能进行更新操作，否则由于Windows更新会重写EFI分区，更新完成后会无法进入系统。")]),t._v(" "),s("p",[t._v("完成后可以精简和更新EFI分区的内容。如果使用的是64位的UEFI，则可删掉driverIA32.efi，同时可以将CLOVERX64.efi替换为最新版本。")]),t._v(" "),s("p",[t._v("注意，如果需要用Clover引导MBR磁盘下的Windows，则需要在drivers64UEFI文件夹里放置NTFS.efi，并编辑config.plist，在Scan标签页下勾选"),s("code",[t._v("Legacy")]),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"关闭bios安全启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭bios安全启动"}},[t._v("#")]),t._v(" 关闭BIOS安全启动")]),t._v(" "),s("p",[t._v("从以下地址下载镜像文件，并用Etcher写入U盘。在具有安全启动功能的PC上的首次启动将显示访问冲突消息框。按确定，然后选择"),s("code",[t._v("从文件注册证书")]),t._v("，选择ENROLL_THIS_KEY_IN_MOKMANAGER.cer并确认证书注册即可。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/ValdikSS/Super-UEFIinSecureBoot-Disk/releases\n")])])]),s("h1",{attrs:{id:"参考教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考教程"}},[t._v("#")]),t._v(" 参考教程")]),t._v(" "),s("h2",{attrs:{id:"装系统不求人-硬盘的秘密深入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装系统不求人-硬盘的秘密深入"}},[t._v("#")]),t._v(" 装系统不求人——硬盘的秘密深入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://www.paincker.com/sysinst-harddisk-details\n")])])]),s("h2",{attrs:{id:"dual-booting-dos-and-windows-95-follow-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dual-booting-dos-and-windows-95-follow-up"}},[t._v("#")]),t._v(" Dual Booting DOS and Windows 95 : Follow-up")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://retropcbuilder.blogspot.com/2016/11/dual-booting-dos-and-windows-95-follow.html\n")])])]),s("h2",{attrs:{id:"怎么让老电脑实现uefi启动nvme-ssd固态硬盘进系统方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么让老电脑实现uefi启动nvme-ssd固态硬盘进系统方法"}},[t._v("#")]),t._v(" 怎么让老电脑实现UEFI启动NVME SSD固态硬盘进系统方法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.upantool.com/jiaocheng/ssd/2018/13568.html\n")])])]),s("h2",{attrs:{id:"无需u盘-任何机器可以用上32-64bit两种架构的uefi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无需u盘-任何机器可以用上32-64bit两种架构的uefi"}},[t._v("#")]),t._v(" 无需U盘，任何机器可以用上32/64bit两种架构的UEFI")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://bbs.pcbeta.com/viewthread-1536721-1-1.html\n")])])]),s("h2",{attrs:{id:"how-to-boot-linux-iso-images-directly-from-your-hard-drive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-boot-linux-iso-images-directly-from-your-hard-drive"}},[t._v("#")]),t._v(" How to Boot Linux ISO Images Directly From Your Hard Drive")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://www.howtogeek.com/196933/how-to-boot-linux-iso-images-directly-from-your-hard-drive/\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);