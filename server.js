
// var path = require("path")
var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")

var config = require("./webpack.config.js");

var port = "8080";
var hosts = "127.0.0.1";

Object.keys(config.entry).map(function(item){
	config.entry[item].unshift(`webpack-dev-server/client?http://${hosts}:${port}/`,"webpack/hot/dev-server")
})

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	//热加载
	hot:true,
	//热加载必须的 inline
	inline:true
});
server.listen(port);

console.log(hosts, port, 'ok')