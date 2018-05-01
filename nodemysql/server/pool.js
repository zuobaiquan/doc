var mysql = require('mysql')
var pool  = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'nodeproject',
	charset: "UTF8_GENERAL_CI"
})
// pool.query('SELECT * from user', function (error, results) {
// 	console.log(results);
// });
module.exports = pool