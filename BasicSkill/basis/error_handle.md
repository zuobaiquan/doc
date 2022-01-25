<!--
abbrlink: 4te5mocr
-->

## 错误处理

### 捕获和抛出异常的时机

* 使用第三方库通常需要进行捕获;
* 写给他人使用的第三方库则通常需要抛出相应异常;

### 自定义错误类型

下面提供 `ES5` 和 `ES6` 两种自定义错误类型的写法

```js
// ES6
class CustomError extends Error {
  constructor(message) {
    super(message)
    this.name = 'CustomError'
  }
}

// ES5
function CustomError(message) {
  this.name = 'CustomError'
  this.message = message
  Error.captureStackTrace(this, CustomError)
}

CustomError.prototype = new Error()
CustomError.prototype.constructor = CustomError
```

### 记录错误日志

记录错误日志通常使用 `<img>` 标签, 其可以避免跨域, 用法如下:

```js
function logError(msg) {
  const img = new Image()
  img.src = `/log?${encodeURIComponent(msg)}`
}
```