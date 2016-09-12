//路由器模块
function route(handle,pathname,response,request){
	console.log('路由器收到 '+pathname+' 路由请求。');
	if(typeof handle[pathname]==='function'){//有果有与路由对应的控制器函数
		handle[pathname](response,pathname,request);//执行该控制器
	}else{
		console.log('404 Not found：没有用于 "'+pathname+'" 请求的控制器。\n');
		response.writeHead(404,{"Content-Type":"text/plain;charset=utf-8"});
		response.write('404 Not found：没有用于 "'+pathname+'" 请求的控制器。\n');
		response.end('请求处理响应结束。\n');
		console.log('请求处理响应结束。\n');

	}
}

exports.route=route;//暴露接口