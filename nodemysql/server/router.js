var express = require('express')
var router = express.Router()

//body-parser 中间件 第三方的获取post提交的数据(模块)
var bodyParser = require('body-parser');

//解析 application/json
router.use(bodyParser.json())

//解析 application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

module.exports = router