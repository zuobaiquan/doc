<!--
abbrlink: 1ng1nt4v
-->

### 第一版测试: 封装 http

```js
const Koa = require('../application')

const app = new Koa()

app.use((req, res) => {
  res.end('hello koa')
})

app.listen(3000, '127.0.0.1', () => {
  console.log('listening on the 3000')
})
```