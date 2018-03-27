## React Webpack example

webpack 打包 react + react-router。

## 支持的功能

* 支持 async await 语法
* 自动打包src下多入口
* 自动写入 `js` `css`文件到 `html` 中
* 支持`less,sass,css`
* 本地开发热加载
* 支持本地 mock api
  

## 使用

````

git clone https://github.com/jun-lu/react-webpack-example.git
cd react-webpack-example
npm install
npm start //访问 http://127.0.0.1:8080/index.html

//别忘记删除 .git目录，添加自己 git 
rm -rf .git

````

## 目录

````
 -root
  -build
  -mock
    hello.json
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

## 本地 mock

利用 webpack-dev-server 的服务可以访问本地静态文件的能力做mock。
当url参数中开启`mock=1`的时候，会执行 `/module/DataCenter.js`中被改写的ajax方法，完成模拟请求发送。api与mock文件下文件的匹配方式可自由定制。

备注：默认ajax方法 mock=1 被注释了，所以全部走了mock

````

//利用 webpack-dev-server 的服务可以访问本地静态文件的能力做mock
//当url包含 mock=1 的时候，重写ajax方法，以方便本地 mock api
if(location.href.indexOf("mock=1") > -1){
  function ajax(api, data){
    //http://127.0.0.1:8080/mock/hello.json ==> /mock/hello.json
    let mockPathname = `/mock${api}.json`;
    return new PromiseAsync( 
      fetch(mockPathname).then((res)=>{
        return res.json();
      })
    )
    //延迟一秒返回，用于查看loading状态 ，可删除
    .flat((result)=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(result);
        }, 1000)
      });
    })
  }
}

````

## 中间件


* [promise-to-async-events](https://npm.taobao.org/package/promise-to-async-events)
