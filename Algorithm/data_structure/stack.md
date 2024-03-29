<!--
abbrlink: c9b1b7wg
-->

### 栈

栈的核心是 FILO, 首先编写一个栈类:

```js
function Stack() {
  this.items = []
}

Stack.prototype.push = function(item) {
  this.items.push(item)
}

Stack.prototype.pop = function() {
  return this.items.pop()
}

Stack.prototype.size = function() {
  return this.items.length
}

Stack.prototype.isEmpty = function() {
  return this.items.length === 0
}

Stack.prototype.clear = function() {
  this.items = []
}
```

题目: 实现一个十进制转化为二进制的函数:

```
6 除以 2 = 3 ... 0     3 除以 2 = 1 ... 1   1 除以 2 = 0 ... 1    110
测试用例: 6 => 110
```

```js
function conversion(num) {
  const stack = new Stack()
  let remainder
  while (num > 0) {
    remainder = num % 2
    stack.push(remainder)
    num = Math.floor(num / 2)
  }
  let str = ''
  while (!stack.isEmpty()) {
    str = str + stack.pop()
  }
  return str
}
```

题目: 平衡圆括号

```
测试用例:
{{([][])}()} => true
[{()] => false
```

```js
function isBalance(symbol) {
  const stack = new Stack()
  const left = '{[('
  const right = '}])'
  let popValue
  let tag = true

  const match = function(popValue, current) {
    if (left.indexOf(popValue) !== right.indexOf(current)) {
      tag = false
    }
  }

  for (let i = 0; i < symbol.length; i++) {
    if (left.includes(symbol[i])) {
      stack.push(symbol[i])
    } else if (right.includes(symbol[i])) {
      popValue = stack.pop()
      match(popValue, symbol[i])
    }
  }
  return tag
}
```

### 扩展: 栈和递归的紧密关系

递归的写法本质上都是运用栈的思想。这里列几道 leetcode 上的题目作为参考

* [Binary Tree Preorder Traversal]([Analyze](https://github.com/MuYunyun/blog/blob/master/LeetCode/144.Binary_Tree_Preorder_Traversal/README.md))
* [Flatten Nested List Iterator](https://github.com/MuYunyun/blog/blob/master/LeetCode/341.Flatten_Nested_List_Iterator/README.md)