var server=require('./server');//服务器模块
var router=require('./router');//路由器模块
var requestHandlers=require('./requestHandlers');//请求处理器模块

//定义储存路由对应的处理函数的请求处理器对象
var handle={};
handle["/"]=requestHandlers.start;
handle["/api"]=requestHandlers.api;
handle["/api/whoami"]=requestHandlers.whoami;


//执行服务器模块的入口函数，传递路由器函数和请求处理器对象
server.start(router.route,handle);