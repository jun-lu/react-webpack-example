## React Webpack example
	
Webpack打包React的脚手架，可自动识别 ./src  目录下的 .js 文件作为入口。区分多个环境，已正确配置热加载

## 支持的功能

* 支持async await语法（ajax请求爽歪歪）
* 自动适配多入口
* 自动写入 `js` `css`文件到 `html` 中
* 支持`less`
* 本地Server开发
* 热加载代码
* 区分开发和生产环境



## 当前分支

*  1.1.0
	
	基础的React+Webpack

*  1.2.0 
	
	可以使用async await函数
	

## 使用

````
git clone https://github.com/jun-lu/react-webpack-example.git
cd react-webpack-example
npm install
npm start //访问 http://127.0.0.1:8080/index.html

````

## 目录

````
-build 
-src
server.js
webpack.config.js
````

## 服务端口

server.js 中修改 `port` 变量

## 构建

webpack.config.js
````
//源文件目录
var rootPath = "./src";
//发布文件目录
var distPath = "./build";
````

* cdn 

````
var daily_publicPath = "http://daily.yuantutech.com";
var dist_publicPath = "http://s.yuantutech.com";
````

## 命令

````
npm start //本地开发
npm run dev //测试包 不压缩代码 使用  daily_publicPath 域名
npm run dist //线上包 压缩代码 使用  dist_publicPath 域名

````