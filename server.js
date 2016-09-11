//服务器模块

var http=require('http');
var url=require('url');
//服务器入口
function start(route,handle){
	//请求监听函数
	function onRequest(request,response) {
		console.log('服务器收到 '+request.url+' url请求。');
		var pathname=url.parse(request.url).pathname;//获取路由
		route(handle,pathname,response);//传递请求处理器对象和路由给路由器，
	};

	var port=3000;//服务器端口
	//创建服务器
	http.createServer(onRequest).listen(port);

	console.log('服务器成功运行,端口号为：'+port+'。');
}

exports.start=start;//暴露服务器入口