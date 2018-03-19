## React Webpack example

webpack 打包 react + react-router。

## 支持的功能

* 支持 async await 语法
* 自动多入口
* 自动写入 `js` `css`文件到 `html` 中
* 支持`less,sass,css`
* 本地开发热加载
  

## 使用

````

git clone https://github.com/jun-lu/react-webpack-example.git
cd react-webpack-example
npm install
npm start //访问 http://127.0.0.1:8080/index.html

````

## 目录

````
  -root
	  -build
	  -src
		  index.html
		  index.js
    server.js
    webpack.config.js
````

## 服务端口

server.js 中修改 `port` 变量

## 构建配置（如有需求）

webpack.config.js

#### 目录

````
//源文件目录
var rootPath = "./src";
//发布文件目录
var distPath = "./build";
````

#### CND

````

// npm run dev use daily_publicPath
var daily_publicPath = "./";

// npm run build use dist_publicPath
var dist_publicPath = "./";

````

## 命令

````
npm start //本地开发
npm run dev //测试包 不压缩代码 使用  daily_publicPath 域名
npm run build //线上包 压缩代码 使用  dist_publicPath 域名

````