var express = require('express');
//用express实现CORS跨域
var cors = require('cors');
var app = express();
app.use(cors())

// 用户
var user = require('./user')
app.use(user)



var server = app.listen(4000,'172.30.67.142', function () {
  var host = server.address().address
  console.log(server.address())
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
