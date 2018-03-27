import PromiseAsync from 'promise-to-async-events'

//添加一个toPromise方法
PromiseAsync.prototype.toPromise = function(){
  return new Promise((resolve, reject)=>{
    this.subscribe({
      onComplete:resolve,
      onError:reject
    });
    this.start();
  });
}


//这里使用任何第三方库发送请求，fetch, jsonp
//推荐使用 promise-to-async-events 库包装 promise,可以让你的代码更灵活

function ajax(api, data){
  return new PromiseAsync( fetch("http://example.com"+api) );
}



export default {
  getHelloText(){
    return ajax("/hello");
  }
}


//利用 webpack-dev-server 的服务可以访问本地静态文件的能力做mock
//当url包含 mock=1 的时候，重写ajax方法，以方便本地 mock api
//为测试方便，这里注释了 if 语句

// if(location.href.indexOf("mock=1") > -1){
  function ajax(api, data){
    //http://127.0.0.1:8080/mock/hello.json ==> /mock/hello.json
    let mockPathname = `/mock${api}.json`;
    return new PromiseAsync( 
      fetch(mockPathname).then((res)=>{
        return res.json();
      })
    )
    //延迟一秒返回，用于查看loading状态
    .flat((result)=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(result);
        }, 1000)
      });
    })
  }
// }