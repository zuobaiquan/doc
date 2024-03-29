<!--
abbrlink: e49qogy1
-->

## TypeScript 模块篇

### TypeScript 之模块导入

为什么在 TypeScript 中会使用 `import * as React from react`，而不是 `import React from react`, 这个问题困惑了一些时日。

观察 React 的导出代码:

```js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
```

可以发现其是 `common.js` 形式的导出, 而我们知道 `import` 是 es6 的引入, 所以 TypeScript 中出现的 `import * as ___ from ___` 提供了使用 `import` 语法调用 `common.js` 的口子。

比如 `import * as React from react` 等价于 `const React = require('react')`, 它还等价于另外一种写法 `import React = require('react')` (在 webpack 语境下生效)

而 `import React from 'react'` 在 TS 中等价于 `const React = require('react').default`

在 typescript 的配置文件中可以加上 `esModuleInterop` 参数, 具体见 [官网](https://www.typescriptlang.org/docs/handbook/compiler-options.html), 其效果可以将 `import React from react` 转为 `import * as React from react`

在使用了 esModuleInterop 参数后, 像 React、ReactDOM(对象块) 使用 import * as React from 'react' 的形式, warning、classnames(函数) 等库使用 import warning from 'warning' 形式。

> 在 webpack 中的话使用 import React from 'react'  和 import * as React from 'react' 都能帮你打包, 但是其它的 Rollup 和 Parcel 没有支持