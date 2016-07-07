## React Webpack example

1. 自动适配多入口
2. 自动写入 `js` `css`文件到 `html` 中
3. 支持`less`
4. 本地Server开发
6. 热加载代码
7. 区分开发和生产环境

## 使用

````
	git clone  本仓库地址
	npm install
	npm start

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