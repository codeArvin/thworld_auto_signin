# Thworld Auto Sign

Thworld的自动签到脚本

## 使用方法

1. `git clone git@github.com:codeArvin/thworld_auto_signin.git`
2. `npm install` 安装依赖包
3. `index.js`同目录下新建`config.js`文件，格式和`config.example.js`一样，添加Thworld的用户名和密码即可
4. `node index.js`运行

## 注意事项
1. 安装依赖包的时候，可能出现问题。`puppeteer`安装时需要翻墙，同时它会下载`Chromium`,比较大。具体请查看[puppeteer官方文档](https://github.com/GoogleChrome/puppeteer)
2. 如果想把程序放到后台运行，**在Mac的zsh下**可用`node index.js > back_log.txt 2&1 &!`命令来实现，注意命令最后用的是`&!`而不是`&`，如果用的是`&`，当前终端退出后程序就会停止运行，用`&!`则终端退出程序也不会停止，但这时要杀死这个程序只能通过`ps aux | grep node\ index.js`获取到`id`后通过`kill id`来实现了
3. 有关后台运行的相关资料
  * [Linux 技巧：让进程在后台可靠运行的几种方法](https://www.ibm.com/developerworks/cn/linux/l-cn-nohup/index.html)
  * [Exit zsh, but leave running jobs open?](https://stackoverflow.com/questions/19302913/exit-zsh-but-leave-running-jobs-open)
  * [Mac上ZSH的使用小技巧](http://ju.outofmemory.cn/entry/274090)
