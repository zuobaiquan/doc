var router = require('./router.js')
var pool = require('./pool.js')

// 注册
// /user/add
router.post('/user/add', (req, res) => {
	var sql = 'insert into user values(null, ?, ?)'
	pool.getConnection((err, connection) => {
		connection.query('select * from user where phone=?', [req.body.phone], (err, result) => {
			if (result.length > 0) {
				res.status(500).send({code: 500,message:'手机号码已注册'})
			} else {
				connection.query(sql, [req.body.phone, req.body.password, req.body.role], (err, data) => {
					if (err) {
						res.send(err)
					}else {
						res.send(data)
					}
					//连接不再使用，返回到连接池
					connection.release()
				})
			}
		})
	})
})

// 登录
// /user/add
router.post('/user/login', (req, res) => {
	pool.getConnection((err, connection) => {
		var sqlRes=connection.query('select * from user where phone=? and password=?', [req.body.phone,req.body.password], (error, result) => {
			if (error) {
				res.status(500).send(error)
			}
			else if (!result.length){
				res.status(500).send({code: 500,message:'手机号码或者密码不正确'})
			}
			else {
				res.status(200).send({code: 200,message:'success',data:result})
			}
			connection.release();
		})
	})
})

// 用户列表
// /user/list
router.get('/user/list', (req, res) => {
	pool.getConnection((err, connection) => {
		var sqlRes=connection.query('select * from user', (error, result) => {
			if (error) {
				res.status(500).send(error)
			} else {
				res.status(200).send({code: 'ok',data:result,message:'success'})
			}
			connection.release();
		})
	})
})

// 用户列表
// /user/find
router.get('/user/find', (req, res) => {
	pool.getConnection((err, connection) => {
		var sqlRes=connection.query('select * from user where id=?',[req.query.id], (error, result) => {
			// console.log(error, result);
			if (error) {
				res.status(500).send(error)
			} else {
				res.status(200).send({code: 'ok',data:result,message:'success'})
			}
		})
		connection.release();
	})
})

// 删除用户
// /user/delete
router.delete('/user/delete', (req, res) => {
	pool.getConnection((err, connection) => {
		var sqlRes=connection.query('delete from user where id=?',[req.query.id], (error, result) => {
			// console.log(error, result);
			if (error) {
				res.status(500).send(error)
			} else {
				res.status(200).send({code: 'ok',data:result,message:'success'})
			}
		})
		connection.release();
	})
})

module.exports = router
