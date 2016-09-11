//请求处理器模块

function start(response,pathname) {
	console.log("入口处理器被调用。\n");
	response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	response.write('路由器收到 "'+pathname+'" 路由请求。\n');
	response.write("入口处理器被调用。\n");
	response.end('请求处理响应结束。');
	console.log('请求处理响应结束。\n');

}
function api(response,pathname) {
	console.log("api处理器被调用。\n");
	response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	response.write('路由器收到 "'+pathname+'" 路由请求。\n');
	response.write("api处理器被调用。\n");
	response.end('请求处理响应结束。');
	console.log('请求处理响应结束。\n');

}
function whoami(response,pathname) {
	console.log("whoami处理器被调用。\n");
	response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	response.write('路由器收到 "'+pathname+'" 路由请求。\n');
	response.write("whoami处理器被调用。\n");
	response.end('请求处理响应结束。');
	console.log('请求处理响应结束。\n');

}

exports.start=start;
exports.api=api;
exports.whoami=whoami;